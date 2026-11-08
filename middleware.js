const KNOWN_LOCAL_PREFIXES = [
  '/index.html',
  '/ai',
  '/ai.html',
  '/web',
  '/web.html',
  '/sw.js',
  '/db.js',
  '/games.json',
  '/version.json',
  '/tab-disguiser.js',
  '/animation.js',
  '/favicon.ico',
  '/bbb.ico',
  '/icon-',
  '/yolk-circle.png',
  '/api/web',
  '/api/chat',
  '/yolk/',
  '/movies/',
  '/textbooks/',
  '/images/',
  '/favicons/',
  '/styles/',
  '/scripts/',
  '/pages/',
  '/manifests/',
  '/service/'
];

function isLocalSitePath(pathname) {
  if (pathname === '/') return true;
  const d = (a) => String.fromCharCode(...a);
  if (pathname.startsWith(d([47, 117, 118, 46])) || pathname.startsWith(d([47, 98, 97, 114, 101, 109, 117, 120, 47])) || pathname.startsWith(d([47, 101, 112, 111, 120, 121, 47]))) {
    return true;
  }
  return KNOWN_LOCAL_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

function getBaseDir(urlStr) {
  try {
    const u = new URL(urlStr);
    if (!u.pathname.endsWith('/')) {
      const lastSlash = u.pathname.lastIndexOf('/');
      const lastSegment = u.pathname.slice(lastSlash + 1);
      if (!lastSegment.includes('.')) {
        u.pathname += '/';
      } else {
        u.pathname = u.pathname.slice(0, lastSlash + 1);
      }
    }
    u.search = '';
    u.hash = '';
    return u.href;
  } catch (e) {
    return urlStr;
  }
}

export default function middleware(request) {
  const referer = request.headers.get('referer') || '';
  if (referer.includes('securly.com') || referer.includes('deviceconsole') || referer.includes('securly')) {
    return Response.redirect('https://classroom.google.com', 307);
  }

  if (referer.includes('/api/web') && referer.includes('url=')) {
    try {
      const reqUrl = new URL(request.url);
      if (!isLocalSitePath(reqUrl.pathname)) {
        const refUrl = new URL(referer);
        const baseTarget = refUrl.searchParams.get('url');
        if (baseTarget && /^https?:\/\//i.test(baseTarget)) {
          const targetOrigin = new URL(baseTarget).origin;
          const targetDir = getBaseDir(baseTarget);
          let relPath = reqUrl.pathname;
          if (relPath.startsWith('/api/')) {
            relPath = relPath.slice(5);
          } else {
            relPath = relPath.replace(/^\/+/, '');
          }
          const dirCandidate = new URL(relPath + reqUrl.search, targetDir).href;
          const rootCandidate = new URL(reqUrl.pathname + reqUrl.search, targetOrigin).href;
          const webRedirect = new URL('/api/web', reqUrl.origin);
          webRedirect.searchParams.set('mode', 'raw');
          webRedirect.searchParams.set('url', dirCandidate);
          if (rootCandidate !== dirCandidate) {
            webRedirect.searchParams.set('fallback', rootCandidate);
          }
          return Response.redirect(webRedirect.href, 307);
        }
      }
    } catch (e) {}
  }
}

export const config = {
  matcher: '/:path*',
};
