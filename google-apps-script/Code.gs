/**
 * Lavagames - Google Apps Script Web App Launcher
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

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Home - Classroom')
    .setFaviconUrl('https://ssl.gstatic.com/classroom/favicon.png')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
