const fs = require('fs');
const path = require('path');

const GAMES_FILE = path.join(__dirname, '..', 'games.json');
const MANIFESTS_DIR = path.join(__dirname, '..', 'manifests');

if (!fs.existsSync(MANIFESTS_DIR)) {
  fs.mkdirSync(MANIFESTS_DIR, { recursive: true });
}

function getGameId(file) {
  return file
    .replace(/^https?:\/\//i, '')
    .replace(/[^a-zA-Z0-9_\-\.]/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

// Probes URL to get size in bytes
async function getAssetSize(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const cl = res.headers.get('content-length');
    if (res.ok && cl && parseInt(cl, 10) > 0) {
      return parseInt(cl, 10);
    }
  } catch(e) {}

  // Fallback to raw.githubusercontent if jsdelivr
  if (url.includes('cdn.jsdelivr.net/gh/')) {
    const rawUrl = url.replace(/https?:\/\/[^/]*\.jsdelivr\.net\/gh\/([^/@]+)\/([^/@]+)(?:@[^/]+)?\//, 'https://raw.githubusercontent.com/$1/$2/main/');
    try {
      const res = await fetch(rawUrl, { method: 'HEAD' });
      const cl = res.headers.get('content-length');
      if (res.ok && cl && parseInt(cl, 10) > 0) {
        return parseInt(cl, 10);
      }
    } catch(e) {}
  }

  // Fallback: range request for 1 byte to check Content-Range
  try {
    const res = await fetch(url, { headers: { 'Range': 'bytes=0-0' } });
    const cr = res.headers.get('content-range'); // e.g. bytes 0-0/123456
    if (cr) {
      const m = cr.match(/\/(\d+)$/);
      if (m) return parseInt(m[1], 10);
    }
    if (res.ok) {
      const buf = await res.arrayBuffer();
      return buf.byteLength;
    }
  } catch(e) {}

  return 0;
}

// Extracts asset URLs from HTML content
function extractAssetsFromHtml(html, pageUrl) {
  const assets = new Set();
  assets.add(pageUrl);

  let base = pageUrl.substring(0, pageUrl.lastIndexOf('/') + 1);
  const mBase = html.match(/<base\b[^>]*\bhref\s*=\s*(['"])(.*?)\1/i);
  if (mBase) {
    const href = mBase[2];
    if (/^https?:\/\//i.test(href)) {
      base = href.endsWith('/') ? href : href + '/';
    } else {
      try {
        base = new URL(href, base).href;
        if (!base.endsWith('/')) base += '/';
      } catch(e) {}
    }
  }

  // 1. Script src
  const scriptRegex = /<script\b[^>]*\bsrc\s*=\s*['"]([^'"]+)['"]/gi;
  let sm;
  while ((sm = scriptRegex.exec(html)) !== null) {
    const src = sm[1];
    if (src.startsWith('data:') || src.startsWith('blob:') || src.includes('google-analytics') || src.includes('googletagmanager') || src.includes('umami')) continue;
    try {
      assets.add(new URL(src, base).href);
    } catch(e) {}
  }

  // 2. Link href (css, favicon)
  const linkRegex = /<link\b[^>]*\bhref\s*=\s*['"]([^'"]+)['"]/gi;
  let lm;
  while ((lm = linkRegex.exec(html)) !== null) {
    const href = lm[1];
    if (href.startsWith('data:') || href.includes('fonts.googleapis') || href.includes('fonts.gstatic')) continue;
    try {
      assets.add(new URL(href, base).href);
    } catch(e) {}
  }

  // 3. Unity WebGL build configurations
  // Patterns like dataUrl: "...", wasmCodeUrl: "...", codeUrl: "...", frameworkUrl: "..."
  const unityConfigRegex = /(?:dataUrl|codeUrl|wasmCodeUrl|frameworkUrl|wasmFrameworkUrl|loaderUrl|streamingAssetsUrl)\s*:\s*(?:buildUrl\s*\+\s*)?['"]([^'"]+)['"]/gi;
  let ucm;
  while ((ucm = unityConfigRegex.exec(html)) !== null) {
    const val = ucm[1];
    if (!val || val === 'StreamingAssets') continue;
    try {
      assets.add(new URL(val, base).href);
    } catch(e) {}
  }

  // Also check buildUrl variable: const buildUrl = "https://...";
  const mBuildUrl = html.match(/const\s+buildUrl\s*=\s*['"]([^'"]+)['"]/i);
  if (mBuildUrl) {
    const bUrl = mBuildUrl[1].endsWith('/') ? mBuildUrl[1] : mBuildUrl[1] + '/';
    // Match suffixes like + "/BankRobbery2.data.unityweb"
    const suffixRegex = /buildUrl\s*\+\s*['"]([^'"]+)['"]/gi;
    let sxm;
    while ((sxm = suffixRegex.exec(html)) !== null) {
      const p = sxm[1].replace(/^\/+/, '');
      try {
        assets.add(new URL(p, bUrl).href);
      } catch(e) {}
    }
  }

  // 4. Multi-part files (e.g. part1, part2, or getParts)
  const partRegex = /['"](https?:\/\/[^'"]+\.part\d+|https?:\/\/[^'"]+_part\d+\.[^'"]+)['"]/gi;
  let pm;
  while ((pm = partRegex.exec(html)) !== null) {
    assets.add(pm[1]);
  }

  // 5. Explicit fetch or strings matching .wasm, .data, .unityweb, .swf, .json
  const assetStrRegex = /['"](https?:\/\/[^'"]+\.(?:wasm|unityweb|data|swf|pak|bin)(?:\?[^'"]*)?)['"]/gi;
  let am;
  while ((am = assetStrRegex.exec(html)) !== null) {
    assets.add(am[1]);
  }

  return Array.from(assets);
}

async function processGames() {
  const games = JSON.parse(fs.readFileSync(GAMES_FILE, 'utf8'));
  console.log(`Processing ${games.length} games...`);

  const allManifests = {};
  let updatedCount = 0;

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const file = game.file;
    const id = getGameId(file);

    // Skip Scratch embeds or apps
    if (!file || file.includes('scratch.mit.edu') || game.isApp) {
      continue;
    }

    console.log(`\n[${i + 1}/${games.length}] ${game.title} (${file})`);

    let html = '';
    let resolvedUrl = file;

    if (file.startsWith('http')) {
      try {
        const res = await fetch(file);
        if (res.ok) {
          html = await res.text();
        }
      } catch(e) {
        console.warn(`  Failed to fetch ${file}: ${e.message}`);
      }
    } else {
      // Local textbook file
      const localPath = path.join(__dirname, '..', file.replace(/^\/+/, ''));
      if (fs.existsSync(localPath)) {
        html = fs.readFileSync(localPath, 'utf8');
      }
    }

    if (!html) {
      console.log('  No HTML found, skipping asset scan.');
      continue;
    }

    const assetUrls = extractAssetsFromHtml(html, resolvedUrl);
    console.log(`  Found ${assetUrls.length} assets.`);

    // If Unity game, probe for .json loader config to find actual wasm/data if not in HTML
    for (const a of Array.from(assetUrls)) {
      if (a.endsWith('.json') && (a.includes('Unity') || a.includes('Build') || a.includes('math@main'))) {
        try {
          const jres = await fetch(a);
          if (jres.ok) {
            const jdata = await jres.json();
            const jbase = a.substring(0, a.lastIndexOf('/') + 1);
            if (jdata.dataUrl) assetUrls.push(new URL(jdata.dataUrl, jbase).href);
            if (jdata.wasmCodeUrl) assetUrls.push(new URL(jdata.wasmCodeUrl, jbase).href);
            if (jdata.wasmFrameworkUrl) assetUrls.push(new URL(jdata.wasmFrameworkUrl, jbase).href);
          }
        } catch(e) {}
      }
    }

    const uniqueAssets = Array.from(new Set(assetUrls));
    let totalSize = 0;
    const assetSizes = {};

    for (const url of uniqueAssets) {
      const size = await getAssetSize(url);
      assetSizes[url] = size;
      totalSize += size;
      if (size > 0) {
        console.log(`    + ${(size / (1024 * 1024)).toFixed(2)} MB: ${path.basename(url.split('?')[0])}`);
      }
    }

    if (totalSize === 0 && html.length > 0) {
      totalSize = Buffer.byteLength(html, 'utf8');
    }

    console.log(`  => Total Calculated Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB (${totalSize} bytes)`);

    // Create manifest file
    const manifestData = {
      id: id,
      title: game.title,
      file: file,
      sizeBytes: totalSize,
      assets: uniqueAssets,
      updatedAt: new Date().toISOString()
    };

    const manifestPath = path.join(MANIFESTS_DIR, `${id}.json`);
    fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2));

    allManifests[file] = uniqueAssets;
    allManifests[id] = uniqueAssets;

    // Update size in games.json if real size found and > 0
    if (totalSize > 50000 && (game.sizeBytes === 1500000 || !game.sizeBytes || Math.abs(game.sizeBytes - totalSize) > 500000)) {
      game.sizeBytes = totalSize;
      updatedCount++;
    }
  }

  // Save updated games.json
  fs.writeFileSync(GAMES_FILE, JSON.stringify(games, null, 2));
  console.log(`\nUpdated ${updatedCount} games with accurate sizes in games.json!`);

  // Write index of all manifests
  const allManifestsPath = path.join(MANIFESTS_DIR, 'manifests-index.json');
  fs.writeFileSync(allManifestsPath, JSON.stringify(allManifests, null, 2));
  console.log(`Wrote manifests index to ${allManifestsPath}`);
}

processGames().catch(err => {
  console.error('Fatal error in processGames:', err);
  process.exit(1);
});
