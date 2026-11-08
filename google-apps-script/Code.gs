/**
 * Trashbin - Google Apps Script Web App Launcher
 * 
 * Instructions:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Replace Code.gs with this file
 * 4. Create an HTML file named "Index.html" and paste the contents of Index.html
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Set:
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy" and open the Web App URL!
 */

function doGet(e) {
  if (e && e.parameter && e.parameter.web) {
    var result = fetchWebResource(e.parameter.web);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Home - Classroom')
    .setFaviconUrl('https://ssl.gstatic.com/classroom/favicon.png')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function fetchWebResource(targetUrl) {
  try {
    if (!targetUrl || typeof targetUrl !== 'string') {
      return { ok: false, status: 400, error: 'Missing target URL' };
    }
    var cleanUrl = targetUrl.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = 'https://' + cleanUrl;
    }
    if (cleanUrl.indexOf('duckduckgo.com/?q=') !== -1) {
      cleanUrl = cleanUrl.replace('duckduckgo.com/?q=', 'html.duckduckgo.com/html/?q=');
    }

    var response = UrlFetchApp.fetch(cleanUrl, {
      method: 'get',
      muteHttpExceptions: true,
      followRedirects: true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    var status = response.getResponseCode();
    var headers = response.getAllHeaders();
    var contentType = (headers['Content-Type'] || headers['content-type'] || 'text/html; charset=utf-8').toString();
    var bodyText = response.getContentText('UTF-8');

    return {
      ok: status >= 200 && status < 400,
      status: status,
      finalUrl: cleanUrl,
      contentType: contentType,
      body: bodyText
    };
  } catch (err) {
    return {
      ok: false,
      status: 502,
      finalUrl: targetUrl,
      error: err && err.message ? err.message : String(err)
    };
  }
}
