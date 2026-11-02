# Lavagames - Google Apps Script Launcher

This folder provides a Google Apps Script Web App launcher designed to bypass web filters using Google Apps Script's trusted domain (`script.google.com`), `about:blank` tab injection, and CDN mirror hopping.

## How It Works

1. **Google Infrastructure Bypass:** The launcher is deployed to `script.google.com` (which is almost never blocked in schools or enterprise environments).
2. **Mirror Hopping:** The script fetches the Lavagames web app from jsDelivr CDN mirrors (`cdn.jsdelivr.net`, `fastly.jsdelivr.net`, `gcore.jsdelivr.net`, `testingcf.jsdelivr.net`, `jsd.onmicrosoft.cn`). If one mirror is blocked, switch to another.
3. **`about:blank` Tab Injection:** Upon clicking Launch, the script opens a new `about:blank` tab, fetches the raw HTML payload, injects `<base href="...">`, and uses `document.write()` to build the game site inside `about:blank`. Monitoring extensions see only a blank or cloaked page.

## Setup Instructions

1. Visit [Google Apps Script](https://script.google.com) and click **New project**.
2. Name the project **Lavagames Launcher** (or any inconspicuous name).
3. In `Code.gs`, replace all contents with the code inside `Code.gs`.
4. Click the **+** (Add a file) icon next to Files, select **HTML**, and name it `Index` (it will become `Index.html`).
5. Paste the contents of `Index.html` into that file.
6. Click **Deploy** (top right) > **New deployment**.
7. In the left panel, click the gear icon (Select type) and choose **Web app**.
8. Configure:
   - **Description**: `Lavagames Launcher v1`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
9. Click **Deploy**. Authorize if prompted, then copy the generated **Web app URL**.
10. Open the URL or bookmark it!
