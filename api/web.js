function isBlockedHost(host) {
  const h = (host || "").toLowerCase().trim();
  if (!h || h === "localhost" || h.endsWith(".localhost") || h.endsWith(".internal") || h.endsWith(".local")) return true;
  const m = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    const [a, b] = [Number(m[1]), Number(m[2])];
    if (a === 10 || a === 127 || a === 0 || a >= 224) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a === 100 && b >= 64 && b <= 127) return true;
  }
  if (h === "::1" || h.startsWith("fc") || h.startsWith("fd") || h.startsWith("fe80") || h.startsWith("[")) return true;
  return false;
}

function getBaseDir(urlStr) {
  try {
    const u = new URL(urlStr);
    if (!u.pathname.endsWith("/")) {
      const lastSlash = u.pathname.lastIndexOf("/");
      const lastSegment = u.pathname.slice(lastSlash + 1);
      if (!lastSegment.includes(".")) {
        u.pathname += "/";
      } else {
        u.pathname = u.pathname.slice(0, lastSlash + 1);
      }
    }
    u.search = "";
    u.hash = "";
    return u.href;
  } catch (e) {
    return urlStr;
  }
}

function resolveUrl(rel, base) {
  if (!rel) return rel;
  const trimmed = rel.trim();
  if (!trimmed || trimmed.startsWith("data:") || trimmed.startsWith("blob:") || trimmed.startsWith("javascript:") || trimmed.startsWith("mailto:") || trimmed.startsWith("#")) {
    return rel;
  }
  if (trimmed.startsWith("//")) {
    try {
      return new URL("https:" + trimmed).href;
    } catch (e) {
      return "https:" + trimmed;
    }
  }
  try {
    const baseForResolve = (!trimmed.startsWith("/") && !/^https?:\/\//i.test(trimmed)) ? getBaseDir(base) : base;
    return new URL(trimmed, baseForResolve).href;
  } catch (e) {
    return rel;
  }
}

function rewriteCss(cssText, targetUrl, webEndpoint, refParam) {
  const refSuffix = refParam ? `&ref=${encodeURIComponent(refParam)}` : "";
  return cssText.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (match, quote, rawUrl) => {
    const t = rawUrl.trim();
    if (t.startsWith("data:") || t.startsWith("blob:") || t.startsWith("#")) return match;
    const abs = resolveUrl(t, targetUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `url("${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}")`;
  });
}

function rewriteM3u8(m3u8Text, finalUrl, webEndpoint, refParam) {
  const refSuffix = refParam ? `&ref=${encodeURIComponent(refParam)}` : "";
  const lines = m3u8Text.split(/\r?\n/);

  const hasEnglishAudio = lines.some(
    (l) =>
      l.startsWith("#EXT-X-MEDIA:") &&
      /TYPE=AUDIO/i.test(l) &&
      (/LANGUAGE="en/i.test(l) || /NAME="[^"]*(?:english|\beng\b|\ben\b)/i.test(l))
  );

  let englishMarkedDefault = false;

  return lines
    .map((line) => {
      let current = line;
      const trimmed = current.trim();
      if (!trimmed) return current;

      if (trimmed.startsWith("#")) {
        if (hasEnglishAudio && trimmed.startsWith("#EXT-X-MEDIA:") && /TYPE=AUDIO/i.test(trimmed)) {
          const isEng = /LANGUAGE="en/i.test(trimmed) || /NAME="[^"]*(?:english|\beng\b|\ben\b)/i.test(trimmed);
          if (isEng && !englishMarkedDefault) {
            englishMarkedDefault = true;
            current = current.replace(/DEFAULT=(?:YES|NO)/i, "DEFAULT=YES").replace(/AUTOSELECT=(?:YES|NO)/i, "AUTOSELECT=YES");
            if (!/DEFAULT=/i.test(current)) current += ",DEFAULT=YES";
          } else {
            current = current.replace(/DEFAULT=YES/gi, "DEFAULT=NO");
          }
        }
        return current.replace(/URI\s*=\s*"([^"]+)"/gi, (m, uri) => {
          const abs = resolveUrl(uri, finalUrl);
          if (!/^https?:\/\//i.test(abs)) return m;
          const extSuffix = abs.toLowerCase().includes(".m3u8") ? "&ext=.m3u8" : "";
          return `URI="${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}${extSuffix}"`;
        });
      }

      const abs = resolveUrl(trimmed, finalUrl);
      if (!/^https?:\/\//i.test(abs)) return current;
      const extSuffix = abs.toLowerCase().includes(".m3u8") ? "&ext=.m3u8" : "";
      return `${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}${extSuffix}`;
    })
    .join("\n");
}

function rewriteJs(jsText, finalUrl, webEndpoint, refParam) {
  let targetOrigin = finalUrl;
  try { targetOrigin = new URL(finalUrl).origin; } catch (e) {}
  const refVal = refParam || (targetOrigin + "/");
  const refSuffix = `&ref=${encodeURIComponent(refVal)}`;

  jsText = jsText.replace(
    /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)(['"])(\.{1,2}\/[^'"]+|\/(?:assets|_next|static|chunks|js|embed)\/[^'"]+)\2/g,
    (match, prefix, quote, spec) => {
      const abs = resolveUrl(spec, finalUrl);
      if (!/^https?:\/\//i.test(abs)) return match;
      return `${prefix}${quote}${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}${quote}`;
    }
  );

  return jsText;
}

function rewriteHtml(html, finalUrl, webEndpoint, hostOrigin, isEmbed = false) {
  const baseDir = getBaseDir(finalUrl);
  let targetOrigin = finalUrl;
  try { targetOrigin = new URL(finalUrl).origin; } catch (e) {}
  const refSuffix = `&ref=${encodeURIComponent(targetOrigin + "/")}`;
  const embedSuffix = isEmbed ? "&embed=1" : "";

  html = html.replace(/<meta[^>]*http-equiv\s*=\s*(['"]?)(?:content-security-policy|x-frame-options)\1[^>]*>/gi, "");
  html = html.replace(/<meta[^>]*name\s*=\s*(['"]?)referrer\1[^>]*>/gi, "");
  html = html.replace(/\s+integrity\s*=\s*(['"])[^'"]*\1/gi, "");
  html = html.replace(/\s+nonce\s*=\s*(['"])[^'"]*\1/gi, "");
  html = html.replace(/\s+referrerpolicy\s*=\s*(['"])[^'"]*\1/gi, "");
  html = html.replace(/<base\b[^>]*>/gi, "");

  html = html.replace(/<script[^>]*\bsrc\s*=\s*(['"])[^'"]*(?:disable-devtool|sbx\.js|\/js\/dd\.js|registerSW\.js|tagivi\.com|llvpn\.com|acscdn\.com|churromisos\.com|histats\.com|alchemmauls\.com)[^'"]*\1[^>]*>\s*<\/script>/gi, "");
  html = html.replace(/<script[^>]*disable-devtool-auto[^>]*>\s*<\/script>/gi, "");
  html = html.replace(/<script>[^<]*\/asb\.html[^<]*<\/script>/gi, "");
  html = html.replace(/document\.write\(\s*(['"])<script[^>]*f59d610a61063c7ef3ccdc1fd40d2ae6[^>]*><\\\/script>\1\s*\)\s*;?/gi, "");

  html = html.replace(/"ad"\s*:\s*""/g, '"ad":"en,eng,english"');
  html = html.replace(/"autoStart"\s*:\s*false/g, '"autoStart":true');

  html = html.replace(/(\baction\s*=\s*)(['"])([^'"]*)\2/gi, (match, prefix, quote, val) => {
    const t = val.trim();
    if (!t || t.startsWith("javascript:")) return match;
    const abs = resolveUrl(t, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `${prefix}${quote}${webEndpoint}?mode=browse&url=${encodeURIComponent(abs)}${refSuffix}${embedSuffix}${quote}`;
  });

  html = html.replace(/(\bsrcset\s*=\s*)(['"])([^'"]*)\2/gi, (match, prefix, quote, val) => {
    const parts = val.split(",").map((part) => {
      const segs = part.trim().split(/\s+/);
      if (!segs[0]) return part;
      const abs = resolveUrl(segs[0], finalUrl);
      if (/^https?:\/\//i.test(abs)) {
        segs[0] = `${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}`;
      }
      return segs.join(" ");
    });
    return `${prefix}${quote}${parts.join(", ")}${quote}`;
  });

  html = html.replace(/<(script|img|iframe|audio|video|source|embed|track)\b([^>]*?)\bsrc\s*=\s*(['"])([^'"]*)\3/gi, (match, tag, before, quote, val) => {
    const abs = resolveUrl(val, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    if (/youtube\.com\/embed\/xyFrwWFOfhg/i.test(abs)) {
      return `<${tag}${before}src=${quote}about:blank${quote}`;
    }
    const isFrame = tag.toLowerCase() === "iframe";
    const mode = isFrame ? "browse" : "raw";
    const extra = isFrame ? embedSuffix : "";
    return `<${tag}${before}src=${quote}${webEndpoint}?mode=${mode}&url=${encodeURIComponent(abs)}${refSuffix}${extra}${quote}`;
  });

  html = html.replace(/<link\b([^>]*?)\bhref\s*=\s*(['"])([^'"]*)\2/gi, (match, before, quote, val) => {
    const abs = resolveUrl(val, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `<link${before}href=${quote}${webEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${refSuffix}${quote}`;
  });

  html = html.replace(/<a\b([^>]*?)\bhref\s*=\s*(['"])([^'"]*)\2/gi, (match, before, quote, val) => {
    const t = val.trim();
    if (!t || t.startsWith("#") || t.startsWith("javascript:") || t.startsWith("mailto:")) return match;
    const abs = resolveUrl(t, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `<a${before}href=${quote}${webEndpoint}?mode=browse&url=${encodeURIComponent(abs)}${refSuffix}${embedSuffix}${quote}`;
  });

  const injectedScript = `<script>
(function(){
  var TARGET_URL = ${JSON.stringify(finalUrl)};
  var TARGET_DIR = ${JSON.stringify(baseDir)};
  var TARGET_ORIGIN = ${JSON.stringify(targetOrigin)};
  var WEB_EP = ${JSON.stringify(webEndpoint)};
  var HOST_ORIGIN = ${JSON.stringify(hostOrigin)};
  var IS_EMBED = ${JSON.stringify(Boolean(isEmbed))};
  var REF_PARAM = "&ref=" + encodeURIComponent(TARGET_ORIGIN + "/");
  var EMBED_PARAM = IS_EMBED ? "&embed=1" : "";

  function markNative(fn, name) {
    try {
      var str = "function " + (name || fn.name || "") + "() { [native code] }";
      Object.defineProperty(fn, "toString", {
        value: function() { return str; },
        writable: true,
        configurable: true
      });
    } catch(e){}
    return fn;
  }

  try {
    var noop = markNative(function() { return {}; }, "DisableDevtool");
    window.DisableDevtool = noop;
    Object.defineProperty(window, "DisableDevtool", {
      get: function() { return noop; },
      set: function() {},
      configurable: false
    });
    if (!window.frameElement) {
      Object.defineProperty(window, "frameElement", {
        get: function() {
          return {
            hasAttribute: function() { return false; },
            getAttribute: function() { return null; }
          };
        },
        configurable: true
      });
    }
  } catch(e){}

  window.addEventListener("message", function(e) {
    try {
      if (e && e.data && (e.data.type === "VS_DEVTOOLS" || e.data.type === "vaplayer-devtools")) {
        e.stopImmediatePropagation();
      }
    } catch(err){}
  }, true);

  try {
    var _u = new URL(TARGET_URL);
    var _fakePath = (_u.pathname || "/") + (_u.search ? _u.search + "&" : "?") + "__tb=" + encodeURIComponent(TARGET_URL) + (_u.hash || "");
    history.replaceState(null, "", _fakePath);
  } catch(e){}

  function isWrapped(u) {
    return typeof u === "string" && (
      u.indexOf(WEB_EP + "?") === 0 ||
      u.indexOf("/api/web?") === 0 ||
      u.indexOf("/raw?url=") !== -1 ||
      u.indexOf("/browse?url=") !== -1
    );
  }

  function isBlockedAdUrl(u) {
    if (!u || typeof u !== "string") return false;
    return /disable-devtool|sbx\\.js|tagivi\\.com|llvpn\\.com|acscdn\\.com|churromisos\\.com|histats\\.com|alchemmauls\\.com|intelligenceadx\\.com|f59d610a61063c7ef3ccdc1fd40d2ae6|youtube\\.com\\/embed\\/xyFrwWFOfhg/i.test(u);
  }

  function toAbs(u) {
    if (!u || typeof u !== "string") return u;
    var t = u.trim();
    if (!t || t.indexOf("data:") === 0 || t.indexOf("blob:") === 0 || t.indexOf("javascript:") === 0 || t.indexOf("mailto:") === 0 || t.indexOf("#") === 0) return u;
    if (isWrapped(t)) return t;

    if (/^https?:\\/\\/themoviedb\\.[^\\/]+\\/api\\/tmdb/i.test(t)) {
      t = t.replace(/^https?:\\/\\/themoviedb\\.[^\\/]+/i, "https://themoviedb.vidsrc.su");
    }

    if (t.indexOf(HOST_ORIGIN) === 0) {
      var rel = t.slice(HOST_ORIGIN.length);
      if (rel.indexOf("/api/") === 0 && rel.indexOf("/api/web") !== 0) {
        try { return new URL(rel.slice(5), TARGET_DIR).href; } catch(e){}
      }
      if (rel.charAt(0) === "/") {
        try { return new URL(rel, TARGET_ORIGIN).href; } catch(e){}
      }
      try { return new URL(rel, TARGET_ORIGIN).href; } catch(e){}
    }

    if (t.indexOf("//") === 0) return "https:" + t;
    if (/^https?:\\/\\//i.test(t)) return t;
    if (t.charAt(0) === "/") {
      try { return new URL(t, TARGET_ORIGIN).href; } catch(e) { return u; }
    }
    try { return new URL(t, TARGET_DIR).href; } catch(e) { return u; }
  }

  function wrapRaw(u) {
    if (!u || typeof u !== "string") return u;
    if (isWrapped(u)) return u;
    if (isBlockedAdUrl(u)) return "data:application/javascript,";
    var abs = toAbs(u);
    if (typeof abs === "string" && /^https?:\\/\\//i.test(abs) && !isWrapped(abs)) {
      var fallback = "";
      try {
        var parsedAbs = new URL(abs);
        if (parsedAbs.origin === TARGET_ORIGIN && TARGET_DIR !== TARGET_ORIGIN + "/") {
          var filePart = parsedAbs.pathname.replace(/^\\/+/, "");
          var altUrl = parsedAbs.href.indexOf(TARGET_DIR) === 0
            ? (TARGET_ORIGIN + "/" + filePart + parsedAbs.search)
            : (TARGET_DIR + filePart + parsedAbs.search);
          if (altUrl !== abs) fallback = "&fallback=" + encodeURIComponent(altUrl);
        }
      } catch(e){}
      var extSuffix = abs.toLowerCase().indexOf(".m3u8") !== -1 ? "&ext=.m3u8" : "";
      return WEB_EP + "?mode=raw&url=" + encodeURIComponent(abs) + REF_PARAM + fallback + extSuffix;
    }
    return u;
  }

  function wrapBrowse(u) {
    if (!u || typeof u !== "string") return u;
    if (isWrapped(u)) return u;
    if (isBlockedAdUrl(u)) return "about:blank";
    var abs = toAbs(u);
    if (typeof abs === "string" && /^https?:\\/\\//i.test(abs) && !isWrapped(abs)) {
      return WEB_EP + "?mode=browse&url=" + encodeURIComponent(abs) + REF_PARAM + EMBED_PARAM;
    }
    return u;
  }

  function rewriteHtmlFragment(str) {
    if (typeof str !== "string" || str.indexOf("<") === -1) return str;
    return str.replace(/<(script|img|iframe|audio|video|source|embed|track|link)\\b([^>]*?)\\b(src|href)\\s*=\\s*(['"])([^'"]*)\\4/gi, function(m, tag, before, attr, q, val) {
      var lowerTag = tag.toLowerCase();
      var wrapped = lowerTag === "iframe" ? wrapBrowse(val) : wrapRaw(val);
      return "<" + tag + before + attr + "=" + q + wrapped + q;
    });
  }

  try {
    window.parent.postMessage({ type: "TB_WEB_URL_CHANGE", url: TARGET_URL, title: document.title || TARGET_URL }, "*");
    window.addEventListener("DOMContentLoaded", function() {
      window.parent.postMessage({ type: "TB_WEB_URL_CHANGE", url: TARGET_URL, title: document.title || TARGET_URL }, "*");
    });
  } catch(e){}

  if (window.fetch) {
    var origFetch = window.fetch;
    window.fetch = markNative(function(input, init) {
      try {
        if (typeof input === "string") input = wrapRaw(input);
        else if (typeof URL !== "undefined" && input instanceof URL) input = wrapRaw(input.href);
        else if (input && typeof input.url === "string") input = new Request(wrapRaw(input.url), input);
      } catch(e){}
      return origFetch.call(this, input, init);
    }, "fetch");
  }

  if (window.XMLHttpRequest) {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = markNative(function(method, url) {
      var args = Array.prototype.slice.call(arguments);
      try { args[1] = wrapRaw(String(url)); } catch(e){}
      return origOpen.apply(this, args);
    }, "open");
  }

  var origSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = markNative(function(name, value) {
    try {
      var n = String(name).toLowerCase();
      if (n === "integrity" || n === "nonce" || n === "referrerpolicy" || n === "sandbox") return;
      var tag = (this.tagName || "").toUpperCase();
      if ((n === "src" || n === "href" || n === "poster") && typeof value === "string") {
        if (tag === "A" || tag === "IFRAME") value = wrapBrowse(value);
        else value = wrapRaw(value);
      }
    } catch(e){}
    return origSetAttr.call(this, name, value);
  }, "setAttribute");

  function patchProp(Proto, prop, wrapperFn) {
    if (!Proto || !Proto.prototype) return;
    try {
      var desc = Object.getOwnPropertyDescriptor(Proto.prototype, prop);
      if (desc && desc.set) {
        Object.defineProperty(Proto.prototype, prop, {
          get: markNative(function() { return desc.get.call(this); }, "get " + prop),
          set: markNative(function(val) {
            try { if (typeof val === "string") val = wrapperFn(val); } catch(e){}
            return desc.set.call(this, val);
          }, "set " + prop),
          configurable: true,
          enumerable: true
        });
      }
    } catch(e){}
  }
  patchProp(window.HTMLScriptElement, "src", wrapRaw);
  patchProp(window.HTMLImageElement, "src", wrapRaw);
  patchProp(window.HTMLLinkElement, "href", wrapRaw);
  patchProp(window.HTMLMediaElement, "src", wrapRaw);
  patchProp(window.HTMLSourceElement, "src", wrapRaw);
  patchProp(window.HTMLEmbedElement, "src", wrapRaw);
  patchProp(window.HTMLTrackElement, "src", wrapRaw);
  patchProp(window.HTMLIFrameElement, "src", wrapBrowse);
  patchProp(window.HTMLIframeElement, "src", wrapBrowse);
  patchProp(window.Element, "innerHTML", rewriteHtmlFragment);

  if (document.write) {
    var origWrite = document.write;
    document.write = markNative(function() {
      var args = Array.prototype.slice.call(arguments).map(rewriteHtmlFragment);
      return origWrite.apply(this, args);
    }, "write");
  }
  if (document.writeln) {
    var origWriteln = document.writeln;
    document.writeln = markNative(function() {
      var args = Array.prototype.slice.call(arguments).map(rewriteHtmlFragment);
      return origWriteln.apply(this, args);
    }, "writeln");
  }

  if (window.Audio) {
    var OrigAudio = window.Audio;
    window.Audio = markNative(function(src) {
      return new OrigAudio(src ? wrapRaw(String(src)) : undefined);
    }, "Audio");
    window.Audio.prototype = OrigAudio.prototype;
  }

  if (window.Worker) {
    var OrigWorker = window.Worker;
    window.Worker = markNative(function(scriptURL, options) {
      var raw = typeof scriptURL === "string" ? scriptURL : (scriptURL && scriptURL.href ? scriptURL.href : String(scriptURL));
      var wrapped = wrapRaw(raw);
      try {
        var blob = new Blob(["importScripts(" + JSON.stringify(wrapped) + ");"], { type: "application/javascript" });
        return new OrigWorker(URL.createObjectURL(blob), options);
      } catch(e) {
        return new OrigWorker(wrapped, options);
      }
    }, "Worker");
    window.Worker.prototype = OrigWorker.prototype;
  }

  window.open = markNative(function(url) {
    if (IS_EMBED || window !== window.top) {
      return { closed: false, close: function(){}, focus: function(){}, blur: function(){}, postMessage: function(){} };
    }
    if (url) window.location.href = wrapBrowse(String(url));
    return window;
  }, "open");

  function enforceEnglishOnHls(hls) {
    if (!hls || hls.__tbEnforced) return;
    hls.__tbEnforced = true;
    var pickEng = function() {
      try {
        var tracks = hls.audioTracks;
        if (!tracks || tracks.length <= 1) return;
        for (var i = 0; i < tracks.length; i++) {
          var t = tracks[i];
          var lang = (t.lang || "").toLowerCase();
          var name = (t.name || "").toLowerCase();
          if (lang === "en" || lang === "eng" || lang.indexOf("en-") === 0 || name.indexOf("english") !== -1 || /\\beng\\b/.test(name)) {
            if (hls.audioTrack !== i) hls.audioTrack = i;
            return;
          }
        }
      } catch(e){}
    };
    try {
      hls.on("hlsManifestParsed", pickEng);
      hls.on("hlsAudioTracksUpdated", pickEng);
      hls.on("hlsLevelLoaded", pickEng);
    } catch(e){}
  }

  var _hlsHooked = false;
  function tryHookHls() {
    if (window.Hls && window.Hls.prototype && window.Hls.prototype.loadSource && !_hlsHooked) {
      _hlsHooked = true;
      var origLoadSource = window.Hls.prototype.loadSource;
      window.Hls.prototype.loadSource = function(url) {
        enforceEnglishOnHls(this);
        return origLoadSource.call(this, wrapRaw(String(url)));
      };
    }
  }
  tryHookHls();
  setInterval(tryHookHls, 250);

  document.addEventListener("click", function(e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var rawHref = a.getAttribute("href");
    if (!rawHref || rawHref.charAt(0) === "#" || rawHref.indexOf("javascript:") === 0) return;
    if (IS_EMBED && a.getAttribute("target") === "_blank") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    e.preventDefault();
    a.removeAttribute("target");
    window.location.href = isWrapped(rawHref) ? rawHref : wrapBrowse(rawHref);
  }, true);

  document.addEventListener("submit", function(e) {
    var form = e.target;
    if (!form || form.tagName !== "FORM") return;
    e.preventDefault();
    var rawAction = form.getAttribute("action") || TARGET_URL;
    if (rawAction.indexOf(WEB_EP) === 0 && rawAction.indexOf("url=") !== -1) {
      try { rawAction = decodeURIComponent(rawAction.split("url=")[1].split("&")[0]); } catch(err){}
    }
    var absAction = toAbs(rawAction);
    var fd = new FormData(form);
    var u = new URL(absAction);
    fd.forEach(function(v, k) { if (typeof v === "string") u.searchParams.set(k, v); });
    window.location.href = WEB_EP + "?mode=browse&url=" + encodeURIComponent(u.href) + REF_PARAM + EMBED_PARAM;
  }, true);
})();
</script>`;

  if (/<head[^>]*>/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>${injectedScript}`);
  } else {
    html = injectedScript + html;
  }
  return html;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  let target = req.query.url;
  const fallback = req.query.fallback || "";
  const mode = req.query.mode || "browse";
  const format = req.query.format || "";
  const refParam = req.query.ref || "";
  const isEmbed = req.query.embed === "1";

  if (!target || typeof target !== "string") {
    return res.status(400).json({ error: "Missing ?url= parameter" });
  }

  let parsed;
  try {
    parsed = new URL(target);
  } catch (e) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  if ((parsed.protocol !== "http:" && parsed.protocol !== "https:") || isBlockedHost(parsed.hostname)) {
    return res.status(403).json({ error: "Restricted host" });
  }

  if (mode === "browse" && (parsed.hostname === "duckduckgo.com" || parsed.hostname === "www.duckduckgo.com" || parsed.hostname === "html.duckduckgo.com") && parsed.searchParams.has("q")) {
    const qVal = parsed.searchParams.get("q") || "";
    return res.redirect(302, `${webEndpoint}?mode=browse&url=${encodeURIComponent("https://www.bing.com/search?q=" + encodeURIComponent(qVal))}`);
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "ohio-notes.broshan.com.np";
  const hostOrigin = `${proto}://${host}`;
  const webEndpoint = `${hostOrigin}/api/web`;

  const makeFetchOpts = (urlObj, customReferer) => {
    const effectiveRef = customReferer || refParam || (urlObj.origin + "/");
    const headers = {
      "User-Agent": req.headers["user-agent"] || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "Accept": req.headers["accept"] || "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": effectiveRef
    };
    if (req.headers["range"]) {
      headers["Range"] = req.headers["range"];
    }
    try {
      const refOrigin = new URL(effectiveRef).origin;
      if (mode !== "browse" && refOrigin !== urlObj.origin) {
        headers["Origin"] = refOrigin;
      }
    } catch (e) {}
    return {
      method: req.method === "POST" ? "POST" : "GET",
      headers,
      redirect: "follow"
    };
  };

  try {
    let upstream = await fetch(target, makeFetchOpts(parsed));

    if (upstream.status === 403 && refParam && refParam !== parsed.origin + "/") {
      const retryRes = await fetch(target, makeFetchOpts(parsed, parsed.origin + "/"));
      if (retryRes.ok || retryRes.status !== 403) {
        upstream = retryRes;
      }
    }

    if (upstream.status === 404 && fallback && typeof fallback === "string") {
      try {
        const parsedFb = new URL(fallback);
        if (!isBlockedHost(parsedFb.hostname)) {
          const fbRes = await fetch(fallback, makeFetchOpts(parsedFb));
          if (fbRes.ok) {
            upstream = fbRes;
            target = fallback;
            parsed = parsedFb;
          }
        }
      } catch (e) {}
    }

    const finalUrl = upstream.url || target;
    let finalOrigin = parsed.origin;
    try { finalOrigin = new URL(finalUrl).origin; } catch (e) {}
    const contentType = upstream.headers.get("content-type") || "application/octet-stream";
    const lowerCt = contentType.toLowerCase();
    const lowerUrl = finalUrl.toLowerCase();

    if (format === "json") {
      const text = await upstream.text();
      const body = lowerCt.includes("text/html") ? rewriteHtml(text, finalUrl, webEndpoint, hostOrigin, isEmbed) : text;
      return res.status(200).json({ ok: upstream.ok, status: upstream.status, finalUrl, contentType, body });
    }

    if (mode === "browse" && lowerCt.includes("text/html")) {
      const rawHtml = await upstream.text();
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(upstream.status).send(rewriteHtml(rawHtml, finalUrl, webEndpoint, hostOrigin, isEmbed));
    }

    const isM3u8 =
      lowerCt.includes("mpegurl") ||
      lowerUrl.includes(".m3u8") ||
      req.query.ext === ".m3u8";
    if (isM3u8) {
      const rawText = await upstream.text();
      if (rawText.trim().startsWith("#EXTM3U")) {
        const rewrittenM3u8 = rewriteM3u8(rawText, finalUrl, webEndpoint, refParam || (finalOrigin + "/"));
        res.setHeader("Content-Type", "application/vnd.apple.mpegurl; charset=utf-8");
        return res.status(upstream.status).send(rewrittenM3u8);
      }
      return res.status(upstream.status).send(rawText);
    }

    if (lowerCt.includes("text/css") || lowerUrl.endsWith(".css")) {
      const rawCss = await upstream.text();
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      return res.status(upstream.status).send(rewriteCss(rawCss, finalUrl, webEndpoint, refParam || (finalOrigin + "/")));
    }

    if (lowerCt.includes("javascript") || /\.m?js(\?|$)/i.test(lowerUrl)) {
      const rawJs = await upstream.text();
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      return res.status(upstream.status).send(rewriteJs(rawJs, finalUrl, webEndpoint, refParam || (finalOrigin + "/")));
    }

    if (lowerCt.includes("wasm") || /\.wasm(\?|$)/i.test(lowerUrl)) {
      res.setHeader("Content-Type", "application/wasm");
    } else {
      res.setHeader("Content-Type", contentType);
    }

    const arrayBuf = await upstream.arrayBuffer();
    return res.status(upstream.status).send(Buffer.from(arrayBuf));
  } catch (err) {
    return res.status(502).send(
      `<!DOCTYPE html><html><body style="background:#09090b;color:#fafafa;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;"><div style="background:#18181b;border:1px solid #27272a;padding:24px;border-radius:16px;max-width:440px;text-align:center;"><h3 style="color:#ef4444;margin:0 0 8px;">Connection Error</h3><p style="color:#a1a1aa;font-size:14px;margin:0;">${err.message || "Network Error"}</p></div></body></html>`
    );
  }
}
