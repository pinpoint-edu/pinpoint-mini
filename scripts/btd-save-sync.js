/**
 * Pinpoint Bloons TD Save Sync & Auto-Resume Bridge
 * Provides cross-version session state tracking, Ruffle SOL synchronization,
 * and automatic game resumption on save load for Bloons TD 1, 2, 3, and 4.
 */
(function(global) {
  'use strict';

  // 1. Identify which Bloons TD game is active
  function detectCurrentGame() {
    const loc = (typeof window !== 'undefined' && window.location) ? (window.location.pathname + window.location.search + window.location.hash) : '';
    const title = (typeof document !== 'undefined' && document.title) ? document.title.toLowerCase() : '';
    const locLower = loc.toLowerCase();

    if (locLower.includes('bloonstd4') || locLower.includes('bloons-td-4') || title.includes('bloons td 4') || title.includes('bloons 4')) {
      return { id: 'bloons-td-4', title: 'Bloons TD 4', version: 4 };
    }
    if (locLower.includes('bloonstd3') || locLower.includes('bloons-td-3') || title.includes('bloons td 3') || title.includes('bloons 3')) {
      return { id: 'bloons-td-3', title: 'Bloons TD 3', version: 3 };
    }
    if (locLower.includes('bloonstd2') || locLower.includes('bloons-td-2') || title.includes('bloons td 2') || title.includes('bloons 2')) {
      return { id: 'bloons-td-2', title: 'Bloons TD 2', version: 2 };
    }
    if (locLower.includes('bloons-td') || locLower.includes('bloonstd') || title.includes('bloons td') || title.includes('bloons 1')) {
      return { id: 'bloons-td', title: 'Bloons TD', version: 1 };
    }
    return null;
  }

  const currentGame = detectCurrentGame();

  // Storage key helpers
  function getStateKey(gameId) {
    const gid = gameId || (currentGame ? currentGame.id : 'bloons-td');
    return 'pinpoint_btd_state_' + (gid === 'bloons-td' ? '1' : gid.replace('bloons-td-', ''));
  }

  // Read saved state
  function getState(gameId) {
    const key = getStateKey(gameId);
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return null;
  }

  // Save state
  function saveState(patch, gameId) {
    const gid = gameId || (currentGame ? currentGame.id : 'bloons-td');
    const key = getStateKey(gid);
    try {
      const existing = getState(gid) || {
        gameId: gid,
        version: currentGame ? currentGame.version : 1,
        title: currentGame ? currentGame.title : 'Bloons TD',
        created: Date.now()
      };
      const updated = Object.assign({}, existing, patch, { lastSaved: Date.now(), canResume: true });
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    } catch(e) {
      return null;
    }
  }

  // Flush in-memory or Ruffle state to localStorage
  function flush() {
    if (!currentGame) return;
    try {
      const cur = getState(currentGame.id) || {
        gameId: currentGame.id,
        version: currentGame.version,
        title: currentGame.title,
        created: Date.now()
      };
      cur.lastSaved = Date.now();
      cur.canResume = true;
      localStorage.setItem(getStateKey(currentGame.id), JSON.stringify(cur));
    } catch(e) {}
  }

  // Find the primary Ruffle player canvas element
  function getGameCanvas() {
    return document.querySelector('ruffle-player canvas') ||
           document.querySelector('canvas') ||
           document.querySelector('ruffle-player');
  }

  // Simulate a real user click at specified relative coordinates on the canvas
  function simulateCanvasClick(canvas, relX = 0.5, relY = 0.5) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = rect.left + rect.width * relX;
    const clientY = rect.top + rect.height * relY;

    const eventInit = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX,
      clientY: clientY,
      button: 0,
      buttons: 1
    };

    try {
      canvas.dispatchEvent(new PointerEvent('pointerdown', eventInit));
    } catch(e) {}
    try {
      canvas.dispatchEvent(new MouseEvent('mousedown', eventInit));
    } catch(e) {}
    setTimeout(() => {
      try {
        canvas.dispatchEvent(new PointerEvent('pointerup', eventInit));
      } catch(e) {}
      try {
        canvas.dispatchEvent(new MouseEvent('mouseup', eventInit));
      } catch(e) {}
      try {
        canvas.dispatchEvent(new MouseEvent('click', eventInit));
      } catch(e) {}
    }, 60);
  }

  // Trigger Resume / Continue for the detected Bloons TD version
  function triggerAutoResume(gameId) {
    const gid = gameId || (currentGame ? currentGame.id : '');
    const state = getState(gid);

    // Render in-game Resume HUD
    renderResumeHUD(gid, state);

    // Auto-continue logic
    let attempts = 0;
    const maxAttempts = 15;
    const timer = setInterval(() => {
      attempts++;
      const canvas = getGameCanvas();
      if (canvas && canvas.clientWidth > 100) {
        clearInterval(timer);

        if (gid === 'bloons-td-4') {
          // Bloons TD 4: Title screen "Resume Game" button is centered around (0.50, 0.58)
          setTimeout(() => {
            simulateCanvasClick(canvas, 0.50, 0.58);
          }, 600);
          setTimeout(() => {
            simulateCanvasClick(canvas, 0.50, 0.58);
          }, 1400);
        } else if (gid === 'bloons-td-3') {
          // Bloons TD 3: Start / Continue Game button
          setTimeout(() => {
            simulateCanvasClick(canvas, 0.50, 0.55);
          }, 800);
        } else if (gid === 'bloons-td-2') {
          // Bloons TD 2: Start / Play Game button
          setTimeout(() => {
            simulateCanvasClick(canvas, 0.50, 0.55);
          }, 800);
        } else {
          // Bloons TD 1: Play Game
          setTimeout(() => {
            simulateCanvasClick(canvas, 0.50, 0.55);
          }, 800);
        }
      } else if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 400);
  }

  // Render floating Resume HUD banner
  function renderResumeHUD(gameId, state) {
    if (document.getElementById('pinpoint-resume-hud')) return;

    const gameTitle = currentGame ? currentGame.title : 'Bloons TD';
    let detailText = 'Restoring saved progress...';
    if (state && state.round) {
      detailText = `Track ${state.track || 1} • Round ${state.round}`;
      if (state.difficulty) detailText += ` (${state.difficulty})`;
    } else if (gameId === 'bloons-td-4') {
      detailText = 'Saved Career & Round Data Restored';
    } else if (gameId === 'bloons-td-2' || gameId === 'bloons-td-3') {
      detailText = 'Track Medals & Ranks Restored';
    } else {
      detailText = 'Saved Progress Ready';
    }

    const hud = document.createElement('div');
    hud.id = 'pinpoint-resume-hud';
    hud.style.cssText = [
      'position: fixed',
      'top: 14px',
      'left: 50%',
      'transform: translateX(-50%)',
      'z-index: 2147483647',
      'background: #ffffff',
      'border: 1px solid #dadce0',
      'border-radius: 28px',
      'box-shadow: 0 4px 20px rgba(0,0,0,0.18)',
      'padding: 8px 16px 8px 14px',
      'display: flex',
      'align-items: center',
      'gap: 12px',
      'font-family: -apple-system, BlinkMacSystemFont, "Google Sans", Roboto, sans-serif',
      'font-size: 13px',
      'color: #202124',
      'pointer-events: auto',
      'animation: pinpointHudSlideDown 0.3s cubic-bezier(0,0,0.2,1)'
    ].join(';');

    hud.innerHTML = `
      <style>
        @keyframes pinpointHudSlideDown {
          from { opacity: 0; transform: translate(-50%, -15px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .pinpoint-hud-btn {
          background: #1a73e8;
          color: #ffffff;
          border: none;
          border-radius: 16px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.15s ease;
        }
        .pinpoint-hud-btn:hover { background: #1557b0; }
        .pinpoint-hud-close {
          background: transparent;
          border: none;
          color: #5f6368;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .pinpoint-hud-close:hover { background: #f1f3f4; color: #202124; }
      </style>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#e6f4ea;color:#137333;align-items:center;justify-content:center;font-size:14px;font-weight:bold;">✓</span>
        <div>
          <div style="font-weight:600;font-size:12.5px;color:#202124;">${gameTitle} Save Loaded</div>
          <div style="font-size:11px;color:#5f6368;">${detailText}</div>
        </div>
      </div>
      <button class="pinpoint-hud-btn" id="pinpoint-hud-resume-btn">
        <span>▶</span>
        <span>Resume Game</span>
      </button>
      <button class="pinpoint-hud-close" id="pinpoint-hud-close-btn" title="Dismiss">✕</button>
    `;

    document.body.appendChild(hud);

    const resumeBtn = document.getElementById('pinpoint-hud-resume-btn');
    if (resumeBtn) {
      resumeBtn.onclick = () => {
        const canvas = getGameCanvas();
        if (canvas) {
          if (gameId === 'bloons-td-4') {
            simulateCanvasClick(canvas, 0.50, 0.58);
          } else {
            simulateCanvasClick(canvas, 0.50, 0.55);
          }
        }
        hud.remove();
      };
    }

    const closeBtn = document.getElementById('pinpoint-hud-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => hud.remove();
    }

    // Auto dismiss after 8 seconds
    setTimeout(() => {
      try { hud.remove(); } catch(e) {}
    }, 8000);
  }

  // Inject floating in-game Save / Load pill widget for direct access
  function injectInGameToolbar() {
    if (document.getElementById('pinpoint-btd-in-game-bar')) return;
    if (!currentGame) return;

    const bar = document.createElement('div');
    bar.id = 'pinpoint-btd-in-game-bar';
    bar.style.cssText = [
      'position: fixed',
      'bottom: 12px',
      'right: 14px',
      'z-index: 2147483640',
      'background: rgba(255, 255, 255, 0.95)',
      'backdrop-filter: blur(8px)',
      'border: 1px solid rgba(218, 220, 224, 0.85)',
      'border-radius: 20px',
      'box-shadow: 0 2px 10px rgba(0,0,0,0.14)',
      'padding: 4px 8px',
      'display: flex',
      'align-items: center',
      'gap: 6px',
      'font-family: -apple-system, BlinkMacSystemFont, "Google Sans", Roboto, sans-serif',
      'font-size: 11.5px',
      'color: #3c4043',
      'user-select: none',
      'opacity: 0.85',
      'transition: opacity 0.2s ease, transform 0.2s ease'
    ].join(';');

    bar.onmouseenter = () => { bar.style.opacity = '1'; };
    bar.onmouseleave = () => { bar.style.opacity = '0.85'; };

    bar.innerHTML = `
      <style>
        .pinpoint-btd-tool-btn {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #1a73e8;
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }
        .pinpoint-btd-tool-btn:hover {
          background: #f1f3f4;
          border-color: #dadce0;
        }
        .pinpoint-btd-tool-load {
          color: #188038;
        }
      </style>
      <span style="font-weight:700;color:#5f6368;padding-left:4px;">${currentGame.title}</span>
      <button class="pinpoint-btd-tool-btn" id="btd-tool-save-btn" title="Download save data to your device">
        <span>💾</span> Save
      </button>
      <button class="pinpoint-btd-tool-btn pinpoint-btd-tool-load" id="btd-tool-load-btn" title="Upload save data and continue">
        <span>📂</span> Load
      </button>
      <input type="file" id="btd-in-game-file-input" accept=".json,application/json" style="display:none;" />
    `;

    document.body.appendChild(bar);

    const saveBtn = document.getElementById('btd-tool-save-btn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        flush();
        if (typeof PinpointSaveManager !== 'undefined') {
          PinpointSaveManager.exportSave(currentGame.id);
        } else if (window.parent && window.parent.PinpointSaveManager) {
          window.parent.PinpointSaveManager.exportSave(currentGame.id);
        } else if (window.opener && window.opener.PinpointSaveManager) {
          window.opener.PinpointSaveManager.exportSave(currentGame.id);
        }
      };
    }

    const loadBtn = document.getElementById('btd-tool-load-btn');
    const fileInput = document.getElementById('btd-in-game-file-input');
    if (loadBtn && fileInput) {
      loadBtn.onclick = () => {
        fileInput.value = '';
        fileInput.click();
      };
      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          const content = evt.target.result;
          if (typeof PinpointSaveManager !== 'undefined') {
            PinpointSaveManager.importSave(currentGame.id, content);
          } else if (window.parent && window.parent.PinpointSaveManager) {
            window.parent.PinpointSaveManager.importSave(currentGame.id, content);
          } else if (window.opener && window.opener.PinpointSaveManager) {
            window.opener.PinpointSaveManager.importSave(currentGame.id, content);
          }
        };
        reader.readAsText(file);
      };
    }
  }

  // Check for auto-resume trigger on page initialization
  function checkAutoResumeOnLoad() {
    if (!currentGame) return;

    let resumeTarget = null;
    try {
      resumeTarget = localStorage.getItem('pinpoint_auto_resume_game') ||
                     sessionStorage.getItem('pinpoint_auto_resume_game');
    } catch(e) {}

    if (resumeTarget && (resumeTarget === currentGame.id || resumeTarget.includes(currentGame.id) || currentGame.id.includes(resumeTarget))) {
      // Clear flag so it triggers once
      try {
        localStorage.removeItem('pinpoint_auto_resume_game');
        sessionStorage.removeItem('pinpoint_auto_resume_game');
      } catch(e) {}

      // Trigger automatic resumption
      triggerAutoResume(currentGame.id);
    }
  }

  // Initialize on DOM ready
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        injectInGameToolbar();
        checkAutoResumeOnLoad();
      });
    } else {
      injectInGameToolbar();
      checkAutoResumeOnLoad();
    }
    window.addEventListener('load', () => {
      checkAutoResumeOnLoad();
    });
  }

  global.PinpointBtdSync = {
    detectCurrentGame: detectCurrentGame,
    getState: getState,
    saveState: saveState,
    flush: flush,
    triggerAutoResume: triggerAutoResume,
    getGameCanvas: getGameCanvas
  };

})(typeof window !== 'undefined' ? window : globalThis);
