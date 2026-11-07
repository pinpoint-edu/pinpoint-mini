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

function resolveUrl(rel, base) {
  if (!rel) return rel;
  const trimmed = rel.trim();
  if (!trimmed || trimmed.startsWith("data:") || trimmed.startsWith("blob:") || trimmed.startsWith("javascript:") || trimmed.startsWith("mailto:") || trimmed.startsWith("#")) {
    return rel;
  }
  try {
    return new URL(trimmed, base).href;
  } catch (e) {
    return rel;
  }
}

function rewriteCss(cssText, targetUrl, proxyEndpoint) {
  return cssText.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (match, quote, rawUrl) => {
    const t = rawUrl.trim();
    if (t.startsWith("data:") || t.startsWith("blob:") || t.startsWith("#")) return match;
    const abs = resolveUrl(t, targetUrl);
    return `url("${proxyEndpoint}?mode=raw&url=${encodeURIComponent(abs)}")`;
  });
}

function rewriteHtml(html, finalUrl, proxyEndpoint) {
  html = html.replace(/<meta[^>]*http-equiv\s*=\s*(['"]?)(?:content-security-policy|x-frame-options)\1[^>]*>/gi, "");
  html = html.replace(/\s+integrity\s*=\s*(['"])[^'"]*\1/gi, "");
  html = html.replace(/\s+nonce\s*=\s*(['"])[^'"]*\1/gi, "");

  html = html.replace(/(\baction\s*=\s*)(['"])([^'"]*)\2/gi, (match, prefix, quote, val) => {
    const t = val.trim();
    if (!t || t.startsWith("javascript:")) return match;
    const abs = resolveUrl(t, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `${prefix}${quote}${proxyEndpoint}?mode=browse&url=${encodeURIComponent(abs)}${quote}`;
  });

  html = html.replace(/(\bsrcset\s*=\s*)(['"])([^'"]*)\2/gi, (match, prefix, quote, val) => {
    const parts = val.split(",").map((part) => {
      const segs = part.trim().split(/\s+/);
      if (!segs[0]) return part;
      const abs = resolveUrl(segs[0], finalUrl);
      if (/^https?:\/\//i.test(abs)) {
        segs[0] = `${proxyEndpoint}?mode=raw&url=${encodeURIComponent(abs)}`;
      }
      return segs.join(" ");
    });
    return `${prefix}${quote}${parts.join(", ")}${quote}`;
  });

  html = html.replace(/<(script|img|iframe|audio|video|source|embed|track)\b([^>]*?)\bsrc\s*=\s*(['"])([^'"]*)\3/gi, (match, tag, before, quote, val) => {
    const abs = resolveUrl(val, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    const mode = tag.toLowerCase() === "iframe" ? "browse" : "raw";
    return `<${tag}${before}src=${quote}${proxyEndpoint}?mode=${mode}&url=${encodeURIComponent(abs)}${quote}`;
  });

  html = html.replace(/<link\b([^>]*?)\bhref\s*=\s*(['"])([^'"]*)\2/gi, (match, before, quote, val) => {
    const abs = resolveUrl(val, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `<link${before}href=${quote}${proxyEndpoint}?mode=raw&url=${encodeURIComponent(abs)}${quote}`;
  });

  html = html.replace(/<a\b([^>]*?)\bhref\s*=\s*(['"])([^'"]*)\2/gi, (match, before, quote, val) => {
    const t = val.trim();
    if (!t || t.startsWith("#") || t.startsWith("javascript:") || t.startsWith("mailto:")) return match;
    const abs = resolveUrl(t, finalUrl);
    if (!/^https?:\/\//i.test(abs)) return match;
    return `<a${before}href=${quote}${proxyEndpoint}?mode=browse&url=${encodeURIComponent(abs)}${quote}`;
  });

  const injectedScript = `<script>
(function(){
  var TARGET_URL = ${JSON.stringify(finalUrl)};
  var PROXY_EP = ${JSON.stringify(proxyEndpoint)};
  function toAbs(u) {
    if (!u || typeof u !== "string") return u;
    var t = u.trim();
    if (!t || t.indexOf("data:") === 0 || t.indexOf("blob:") === 0 || t.indexOf("javascript:") === 0 || t.indexOf("#") === 0) return u;
    if (t.indexOf(PROXY_EP) === 0) return u;
    try { return new URL(t, TARGET_URL).href; } catch(e) { return u; }
  }
  function wrapRaw(u) {
    var abs = toAbs(u);
    if (typeof abs === "string" && /^https?:\\/\\//i.test(abs) && abs.indexOf(PROXY_EP) !== 0) {
      return PROXY_EP + "?mode=raw&url=" + encodeURIComponent(abs);
    }
    return u;
  }
  function wrapBrowse(u) {
    var abs = toAbs(u);
    if (typeof abs === "string" && /^https?:\\/\\//i.test(abs) && abs.indexOf(PROXY_EP) !== 0) {
      return PROXY_EP + "?mode=browse&url=" + encodeURIComponent(abs);
    }
    return u;
  }
  try {
    window.parent.postMessage({ type: "TB_PROXY_URL_CHANGE", url: TARGET_URL, title: document.title || TARGET_URL }, "*");
    window.addEventListener("DOMContentLoaded", function() {
      window.parent.postMessage({ type: "TB_PROXY_URL_CHANGE", url: TARGET_URL, title: document.title || TARGET_URL }, "*");
    });
  } catch(e){}
  if (window.fetch) {
    var origFetch = window.fetch;
    window.fetch = function(input, init) {
      try {
        if (typeof input === "string") input = wrapRaw(input);
        else if (input && typeof input.url === "string") input = new Request(wrapRaw(input.url), input);
      } catch(e){}
      return origFetch.call(this, input, init);
    };
  }
  if (window.XMLHttpRequest) {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      var args = Array.prototype.slice.call(arguments);
      try { args[1] = wrapRaw(String(url)); } catch(e){}
      return origOpen.apply(this, args);
    };
  }
  window.open = function(url) {
    if (url) window.location.href = wrapBrowse(String(url));
    return window;
  };
  document.addEventListener("click", function(e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var rawHref = a.getAttribute("href");
    if (!rawHref || rawHref.charAt(0) === "#" || rawHref.indexOf("javascript:") === 0) return;
    e.preventDefault();
    a.removeAttribute("target");
    window.location.href = rawHref.indexOf(PROXY_EP) === 0 ? rawHref : wrapBrowse(rawHref);
  }, true);
  document.addEventListener("submit", function(e) {
    var form = e.target;
    if (!form || form.tagName !== "FORM") return;
    e.preventDefault();
    var rawAction = form.getAttribute("action") || TARGET_URL;
    if (rawAction.indexOf(PROXY_EP) === 0 && rawAction.indexOf("url=") !== -1) {
      try { rawAction = decodeURIComponent(rawAction.split("url=")[1].split("&")[0]); } catch(err){}
    }
    var absAction = toAbs(rawAction);
    var fd = new FormData(form);
    var u = new URL(absAction);
    fd.forEach(function(v, k) { if (typeof v === "string") u.searchParams.set(k, v); });
    window.location.href = PROXY_EP + "?mode=browse&url=" + encodeURIComponent(u.href);
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
  const mode = req.query.mode || "browse";
  const format = req.query.format || "";

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
    return res.status(403).json({ error: "Blocked or unsupported host" });
  }

  if (mode === "browse" && (parsed.hostname === "duckduckgo.com" || parsed.hostname === "www.duckduckgo.com") && parsed.searchParams.has("q") && !parsed.pathname.startsWith("/html")) {
    parsed.pathname = "/html/";
    target = parsed.href;
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "ohio-notes.broshan.com.np";
  const proxyEndpoint = `${proto}://${host}/api/proxy`;

  try {
    const upstream = await fetch(target, {
      method: req.method === "POST" ? "POST" : "GET",
      headers: {
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept": req.headers["accept"] || "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": parsed.origin + "/"
      },
      redirect: "follow"
    });

    const finalUrl = upstream.url || target;
    const contentType = upstream.headers.get("content-type") || "application/octet-stream";

    if (format === "json") {
      const text = await upstream.text();
      const body = contentType.toLowerCase().includes("text/html") ? rewriteHtml(text, finalUrl, proxyEndpoint) : text;
      return res.status(200).json({ ok: upstream.ok, status: upstream.status, finalUrl, contentType, body });
    }

    if (mode === "browse" && contentType.toLowerCase().includes("text/html")) {
      const rawHtml = await upstream.text();
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(upstream.status).send(rewriteHtml(rawHtml, finalUrl, proxyEndpoint));
    }

    if (contentType.toLowerCase().includes("text/css")) {
      const rawCss = await upstream.text();
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      return res.status(upstream.status).send(rewriteCss(rawCss, finalUrl, proxyEndpoint));
    }

    const arrayBuf = await upstream.arrayBuffer();
    res.setHeader("Content-Type", contentType);
    return res.status(upstream.status).send(Buffer.from(arrayBuf));
  } catch (err) {
    return res.status(502).send(
      `<!DOCTYPE html><html><body style="background:#09090b;color:#fafafa;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;"><div style="background:#18181b;border:1px solid #27272a;padding:24px;border-radius:16px;max-width:440px;text-align:center;"><h3 style="color:#ef4444;margin:0 0 8px;">Proxy Error</h3><p style="color:#a1a1aa;font-size:14px;margin:0;">${err.message || "Network Error"}</p></div></body></html>`
    );
  }
}
