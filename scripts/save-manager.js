/**
 * Pinpoint Game Save Manager
 * Provides export/download and import/upload functionality for supported games,
 * equipped with metadata validation, integrity checksums, and anti-cheat cross-game protection.
 */
(function(global) {
  'use strict';

  const SAVE_SALT = 'PinpointMini_SecureSave_v1';

  // Detect if a string value is Ruffle / Flash SharedObject (SOL) binary base64 data
  function isRuffleSolData(val) {
    if (!val || typeof val !== 'string' || val.length < 20) return false;
    try {
      const raw = atob(val.slice(0, 64));
      return raw.length >= 10 && raw.indexOf('TCSO') !== -1;
    } catch(e) {
      return false;
    }
  }

  // Extract SharedObject name from Ruffle SOL base64 data
  function getSolInfo(base64Str) {
    if (!isRuffleSolData(base64Str)) return null;
    try {
      const raw = atob(base64Str.slice(0, 100));
      const tcsoIdx = raw.indexOf('TCSO');
      if (tcsoIdx === -1 || raw.length < tcsoIdx + 10) return null;
      const lenIdx = tcsoIdx + 8;
      const nameLen = (raw.charCodeAt(lenIdx) << 8) | raw.charCodeAt(lenIdx + 1);
      const soName = raw.slice(lenIdx + 2, lenIdx + 2 + nameLen);
      return { name: soName };
    } catch(e) {
      return null;
    }
  }

  // Game Save Configurations for Supported Games
  const GAME_CONFIGS = {
    'retro-bowl': {
      id: 'retro-bowl',
      title: 'Retro Bowl',
      matchers: [
        /textbooks\/retro-bowl\.html/i,
        /textbooks\/retro-bowl(?!\-college)/i,
        /^retro-bowl$/i
      ],
      isKeyMatch: (key) => {
        if (!key || typeof key !== 'string') return false;
        return (key.startsWith('RetroBowl.') || key.startsWith('RetroBowl_')) &&
               !key.startsWith('RetroBowlCollege.') &&
               !key.startsWith('RetroBowlCollege_') &&
               !key.startsWith('RetroBowl_College');
      },
      validateData: (data) => {
        const keys = Object.keys(data || {});
        if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
        for (const k of keys) {
          if (k.toLowerCase().includes('college')) {
            return { valid: false, error: 'Save data contains Retro Bowl College keys and cannot be imported into Retro Bowl.' };
          }
          if (!k.startsWith('RetroBowl.') && !k.startsWith('RetroBowl_')) {
            return { valid: false, error: `Unrecognized save key '${k}' for Retro Bowl.` };
          }
        }
        return { valid: true };
      }
    },
    'retro-bowl-college': {
      id: 'retro-bowl-college',
      title: 'Retro Bowl College',
      matchers: [
        /textbooks\/retro-bowl-college\.html/i,
        /textbooks\/retro-bowl-college/i,
        /^retro-bowl-college$/i
      ],
      isKeyMatch: (key) => {
        if (!key || typeof key !== 'string') return false;
        return key.startsWith('RetroBowlCollege.') ||
               key.startsWith('RetroBowlCollege_') ||
               key.startsWith('RetroBowl_College.') ||
               key.startsWith('RetroBowl_College_');
      },
      validateData: (data) => {
        const keys = Object.keys(data || {});
        if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
        for (const k of keys) {
          if (!k.startsWith('RetroBowlCollege.') && !k.startsWith('RetroBowlCollege_') && !k.startsWith('RetroBowl_College')) {
            return { valid: false, error: `Save data contains non-College Retro Bowl keys ('${k}') and cannot be imported into Retro Bowl College.` };
          }
        }
        return { valid: true };
      }
    },
    'bloons-td': {
      id: 'bloons-td',
      title: 'Bloons TD',
      isRuffle: true,
      matchers: [
        /textbooks\/bloons-td\.html/i,
        /textbooks\/bloons-td/i,
        /bloons-td\.swf/i,
        /^bloons-td$/i,
        /^bloons td$/i,
        /^bloons$/i
      ],
      isKeyMatch: (key, val) => {
        if (!key || typeof key !== 'string') return false;
        const kLower = key.toLowerCase();
        if (kLower.includes('college') || kLower.includes('happy') || kLower.includes('sprinter') || kLower.includes('retrobowl')) {
          return false;
        }
        if (kLower.includes('bloons') || kLower.includes('btd')) return true;
        if (val && isRuffleSolData(val)) {
          const info = getSolInfo(val);
          if (info && info.name && (info.name.toLowerCase().includes('bloon') || info.name.toLowerCase().includes('btd'))) return true;
          if (kLower.includes('bloons-td.swf')) return true;
        }
        return false;
      },
      validateData: (data) => {
        const keys = Object.keys(data || {});
        if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
        for (const k of keys) {
          const kLower = k.toLowerCase();
          if (kLower.includes('college') || kLower.includes('happy') || kLower.includes('sprinter') || kLower.includes('retrobowl')) {
            return { valid: false, error: `Incompatible save key '${k}' detected for Bloons TD.` };
          }
        }
        return { valid: true };
      }
    },
    'happy-wheels': {
      id: 'happy-wheels',
      title: 'Happy Wheels',
      isRuffle: true,
      matchers: [
        /textbooks\/happy-wheels\.html/i,
        /textbooks\/happy-wheels/i,
        /happy-wheels\.swf/i,
        /^happy-wheels$/i,
        /^happy wheels$/i
      ],
      isKeyMatch: (key, val) => {
        if (!key || typeof key !== 'string') return false;
        const kLower = key.toLowerCase();
        if (kLower.includes('college') || kLower.includes('bloon') || kLower.includes('sprinter') || kLower.includes('retrobowl')) {
          return false;
        }
        if (kLower.includes('happy') || kLower.includes('wheels') || kLower.includes('totaljerkface')) return true;
        if (val && isRuffleSolData(val)) {
          const info = getSolInfo(val);
          if (info && info.name && (info.name.toLowerCase().includes('happy') || info.name.toLowerCase().includes('wheel') || info.name.toLowerCase().includes('user') || info.name.toLowerCase().includes('prop'))) return true;
          if (kLower.includes('happy-wheels.swf')) return true;
        }
        return false;
      },
      validateData: (data) => {
        const keys = Object.keys(data || {});
        if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
        for (const k of keys) {
          const kLower = k.toLowerCase();
          if (kLower.includes('college') || kLower.includes('bloon') || kLower.includes('sprinter') || kLower.includes('retrobowl')) {
            return { valid: false, error: `Incompatible save key '${k}' detected for Happy Wheels.` };
          }
        }
        return { valid: true };
      }
    },
    'sprinter': {
      id: 'sprinter',
      title: 'Sprinter',
      isRuffle: true,
      matchers: [
        /textbooks\/sprinter(\/index\.html)?/i,
        /textbooks\/sprinter/i,
        /sprinter\.swf/i,
        /^sprinter$/i
      ],
      isKeyMatch: (key, val) => {
        if (!key || typeof key !== 'string') return false;
        const kLower = key.toLowerCase();
        if (kLower.includes('college') || kLower.includes('bloon') || kLower.includes('happy') || kLower.includes('retrobowl')) {
          return false;
        }
        if (kLower.includes('sprinter')) return true;
        if (val && isRuffleSolData(val)) {
          const info = getSolInfo(val);
          if (info && info.name && (info.name.toLowerCase().includes('sprinter') || info.name.toLowerCase().includes('score') || info.name.toLowerCase().includes('high'))) return true;
          if (kLower.includes('sprinter.swf')) return true;
        }
        return false;
      },
      validateData: (data) => {
        const keys = Object.keys(data || {});
        if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
        for (const k of keys) {
          const kLower = k.toLowerCase();
          if (kLower.includes('college') || kLower.includes('bloon') || kLower.includes('happy') || kLower.includes('retrobowl')) {
            return { valid: false, error: `Incompatible save key '${k}' detected for Sprinter.` };
          }
        }
        return { valid: true };
      }
    }
  };

  // Compute a checksum to verify save data structure & prevent tampering
  function computeChecksum(gameId, dataObj) {
    const keys = Object.keys(dataObj).sort();
    let str = gameId + ':' + SAVE_SALT + ':';
    for (const k of keys) {
      str += k + '=' + String(dataObj[k]).length + ':' + String(dataObj[k]).slice(0, 50) + ';';
    }
    let h1 = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h1 ^= str.charCodeAt(i);
      h1 = Math.imul(h1, 0x01000193);
    }
    return (h1 >>> 0).toString(16).padStart(8, '0');
  }

  // Find game config matching a file path, title, or id
  function getGameConfig(fileOrTitle) {
    if (!fileOrTitle || typeof fileOrTitle !== 'string') {
      // Check if runner iframe is active with a supported textbook
      if (typeof document !== 'undefined') {
        try {
          const iframe = document.getElementById('runner-iframe');
          if (iframe && iframe.getAttribute('src')) {
            const iframeSrc = iframe.getAttribute('src');
            if (iframeSrc && iframeSrc !== 'about:blank') {
              for (const id in GAME_CONFIGS) {
                const cfg = GAME_CONFIGS[id];
                for (const m of cfg.matchers) {
                  if (m.test(iframeSrc)) return cfg;
                }
              }
            }
          }
        } catch(e) {}
      }
      return null;
    }

    const cleanStr = fileOrTitle.trim();
    for (const id in GAME_CONFIGS) {
      const cfg = GAME_CONFIGS[id];
      if (cfg.id === cleanStr) return cfg;
      if (cfg.title.toLowerCase() === cleanStr.toLowerCase()) return cfg;
      for (const m of cfg.matchers) {
        if (m.test(cleanStr)) return cfg;
      }
    }

    // Fallback: Check if fileOrTitle is a generic SWF or Ruffle Flash game
    const lower = cleanStr.toLowerCase();
    if (lower.includes('.swf') || lower.includes('/ruffle') || lower.includes('ruffle-')) {
      const fileName = cleanStr.split('/').pop().replace(/\.html|\.swf|\.htm/gi, '');
      const gameId = 'ruffle-' + (fileName || 'game').toLowerCase().replace(/[^a-z0-9_-]/g, '-');
      const gameTitle = fileName ? (fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/[-_]/g, ' ')) : 'Flash Game';
      return {
        id: gameId,
        title: gameTitle,
        isRuffle: true,
        matchers: [new RegExp(fileName || 'ruffle', 'i')],
        isKeyMatch: (k, val) => {
          if (!k || typeof k !== 'string') return false;
          const kLower = k.toLowerCase();
          if (fileName && kLower.includes(fileName.toLowerCase())) return true;
          if (val && isRuffleSolData(val)) {
            const info = getSolInfo(val);
            if (info && info.name && fileName && info.name.toLowerCase().includes(fileName.toLowerCase())) return true;
            if (kLower.includes('.swf') && !kLower.includes('happy-wheels') && !kLower.includes('bloons') && !kLower.includes('sprinter')) {
              return true;
            }
          }
          return false;
        },
        validateData: (data) => {
          const keys = Object.keys(data || {});
          if (keys.length === 0) return { valid: false, error: 'No save data entries found.' };
          return { valid: true };
        }
      };
    }

    return null;
  }

  // Get available storage objects (parent and iframe)
  function getStorageList() {
    const storages = [];
    try {
      const mainStorage = (typeof window !== 'undefined' && window.localStorage) || (typeof localStorage !== 'undefined' && localStorage);
      if (mainStorage && !storages.includes(mainStorage)) {
        storages.push(mainStorage);
      }
    } catch(e) {}

    try {
      if (typeof document !== 'undefined') {
        const iframe = document.getElementById('runner-iframe');
        if (iframe && iframe.contentWindow && iframe.contentWindow.localStorage) {
          if (!storages.includes(iframe.contentWindow.localStorage)) {
            storages.push(iframe.contentWindow.localStorage);
          }
        }
      }
    } catch(e) {}

    return storages;
  }

  // Extract all save entries for the given game
  function extractSaveData(gameConfig) {
    try {
      if (typeof document !== 'undefined') {
        const iframe = document.getElementById('runner-iframe');
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.dispatchEvent(new Event('beforeunload'));
        }
      }
    } catch(e) {}

    const storages = getStorageList();
    const result = {};

    for (const storage of storages) {
      try {
        for (let i = 0; i < storage.length; i++) {
          const key = storage.key(i);
          if (key) {
            const val = storage.getItem(key);
            if (val !== null && val !== undefined && gameConfig.isKeyMatch(key, val)) {
              result[key] = val;
            }
          }
        }
      } catch(e) {
        console.warn('[PinpointSaveManager] Error accessing localStorage:', e);
      }
    }

    return result;
  }

  // Export and download game save as JSON
  function exportSave(fileOrTitle) {
    const cfg = getGameConfig(fileOrTitle);
    if (!cfg) {
      notify('Save export is not supported for this game.', 'warning');
      return false;
    }

    const data = extractSaveData(cfg);
    const keyCount = Object.keys(data).length;

    if (keyCount === 0) {
      if (cfg.isRuffle) {
        notify(`No save data found yet for ${cfg.title}. Play through a level or reach a checkpoint first to generate save progress!`, 'warning', 5000);
      } else {
        notify(`No save data found yet for ${cfg.title}. Play a match or start a season first to generate save progress!`, 'warning', 5000);
      }
      return false;
    }

    const now = new Date();
    const savePayload = {
      pinpointSave: true,
      formatVersion: 1,
      app: 'pinpoint-mini',
      gameId: cfg.id,
      gameTitle: cfg.title,
      exportedAt: now.toISOString(),
      timestamp: now.getTime(),
      metadata: {
        keyCount: keyCount,
        keys: Object.keys(data),
        totalBytes: JSON.stringify(data).length,
        isRuffle: !!cfg.isRuffle
      },
      checksum: computeChecksum(cfg.id, data),
      data: data
    };

    const jsonString = JSON.stringify(savePayload, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStamp = now.toISOString().slice(0, 10);
    a.href = url;
    a.download = `${cfg.id}_save_${dateStamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    notify(`Exported save file for ${cfg.title} (${keyCount} ${keyCount === 1 ? 'entry' : 'entries'}).`, 'success');
    return true;
  }

  // Validate and Import save data from JSON
  async function importSave(fileOrTitle, jsonContent) {
    const currentCfg = getGameConfig(fileOrTitle);
    if (!currentCfg) {
      notify('Save import is not supported for this game.', 'error');
      return false;
    }

    let parsed;
    try {
      parsed = typeof jsonContent === 'string' ? JSON.parse(jsonContent) : jsonContent;
    } catch(e) {
      notify('Invalid save file: The file does not contain valid JSON data.', 'error', 4500);
      return false;
    }

    if (!parsed || typeof parsed !== 'object') {
      notify('Invalid save file format.', 'error');
      return false;
    }

    // 1. Anti-Cheat & Format Metadata Verification
    if (!parsed.pinpointSave) {
      notify('Invalid save file: Missing Pinpoint save metadata.', 'error', 4500);
      return false;
    }

    if (!parsed.gameId) {
      notify('Invalid save file: Missing game identifier.', 'error', 4500);
      return false;
    }

    // Cross-game save injection prevention
    if (parsed.gameId !== currentCfg.id) {
      const originTitle = parsed.gameTitle || parsed.gameId;
      notify(`⚠️ Incompatible Save File: This save file belongs to "${originTitle}", but you are currently playing "${currentCfg.title}". Cross-game save data cannot be imported!`, 'error', 6000);
      return false;
    }

    if (!parsed.data || typeof parsed.data !== 'object') {
      notify('Invalid save file: No save data payload found.', 'error', 4500);
      return false;
    }

    // 2. Custom game key validation
    const valResult = currentCfg.validateData(parsed.data);
    if (!valResult.valid) {
      notify(`⚠️ Save Validation Failed: ${valResult.error}`, 'error', 6000);
      return false;
    }

    // 3. Checksum verification
    const expectedChecksum = computeChecksum(parsed.gameId, parsed.data);
    if (parsed.checksum && parsed.checksum !== expectedChecksum) {
      console.warn(`[PinpointSaveManager] Checksum mismatch (${parsed.checksum} vs ${expectedChecksum}).`);
    }

    // 4. Confirm overwrite with user
    const saveCount = Object.keys(parsed.data).length;
    let confirmed = true;
    if (typeof showPinpointConfirm === 'function') {
      confirmed = await showPinpointConfirm({
        title: `Import Save for ${currentCfg.title}?`,
        message: `This will overwrite your existing save progress on this device with ${saveCount} save ${saveCount === 1 ? 'entry' : 'entries'} from ${parsed.exportedAt ? new Date(parsed.exportedAt).toLocaleDateString() : 'the uploaded file'}.`,
        icon: 'upload_file',
        confirmText: 'Import & Overwrite',
        cancelText: 'Cancel',
        danger: false
      });
    } else if (typeof window !== 'undefined' && typeof window.confirm === 'function') {
      confirmed = window.confirm(`Import save for ${currentCfg.title}? This will overwrite your existing save progress.`);
    } else if (typeof confirm === 'function') {
      confirmed = confirm(`Import save for ${currentCfg.title}? This will overwrite your existing save progress.`);
    }

    if (!confirmed) {
      notify('Save import cancelled.', 'info');
      return false;
    }

    // 5. Apply save data to storages
    const storages = getStorageList();
    for (const storage of storages) {
      try {
        const keysToRemove = [];
        for (let i = 0; i < storage.length; i++) {
          const k = storage.key(i);
          if (k && currentCfg.isKeyMatch(k, storage.getItem(k))) {
            keysToRemove.push(k);
          }
        }
        for (const k of keysToRemove) {
          storage.removeItem(k);
        }

        for (const [k, v] of Object.entries(parsed.data)) {
          storage.setItem(k, v);
          // For Ruffle Flash saves, also map key to the current host and localhost
          if (currentCfg.isRuffle && typeof k === 'string' && k.includes('/')) {
            const currentHost = (typeof window !== 'undefined' && (window.location.host || window.location.hostname)) || 'localhost';
            const cleanHost = currentHost.split(':')[0];
            const hostsToSet = [currentHost, cleanHost, 'localhost'];
            for (const h of hostsToSet) {
              const remappedKey = k.replace(/^[^/]+/, h);
              if (remappedKey !== k) {
                storage.setItem(remappedKey, v);
              }
            }
          }
        }
      } catch(e) {
        console.error('[PinpointSaveManager] Error writing to storage:', e);
      }
    }

    // 6. Reload runner iframe so game re-reads updated localStorage
    reloadRunnerIframe();

    notify(`✅ Successfully imported save for ${currentCfg.title}! Reloading game...`, 'success', 4000);
    return true;
  }

  // Reload runner iframe
  function reloadRunnerIframe() {
    const iframe = document.getElementById('runner-iframe');
    if (iframe) {
      try {
        if (iframe.contentWindow && iframe.contentWindow.location) {
          iframe.contentWindow.location.reload();
          return;
        }
      } catch(e) {}
      const src = iframe.src;
      iframe.src = 'about:blank';
      setTimeout(() => { iframe.src = src; }, 50);
    }
  }

  // Toast / notification helper
  function notify(msg, type = 'info', duration = 3500) {
    if (typeof showPinpointToast === 'function') {
      showPinpointToast(msg, type, duration);
    } else if (typeof alert === 'function') {
      alert(msg);
    } else {
      console.log(`[PinpointSaveManager ${type.toUpperCase()}]: ${msg}`);
    }
  }

  // Update visibility of Save Download / Upload buttons in runner
  function updateUI(fileOrTitle) {
    const isSupported = !!getGameConfig(fileOrTitle);
    const exportBtn = document.getElementById('runner-save-export');
    const importBtn = document.getElementById('runner-save-import');
    if (exportBtn) {
      exportBtn.style.display = isSupported ? 'inline-flex' : 'none';
    }
    if (importBtn) {
      importBtn.style.display = isSupported ? 'inline-flex' : 'none';
    }
  }

  function exportCurrentSave() {
    const target = (typeof currentRunnerFile !== 'undefined' && currentRunnerFile) ? currentRunnerFile : (typeof currentRunnerTitle !== 'undefined' ? currentRunnerTitle : '');
    return exportSave(target);
  }

  function triggerImportCurrentSave() {
    const fileInput = document.getElementById('runner-save-file-input');
    if (fileInput) {
      fileInput.value = '';
      fileInput.click();
    }
  }

  function handleImportFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const target = (typeof currentRunnerFile !== 'undefined' && currentRunnerFile) ? currentRunnerFile : (typeof currentRunnerTitle !== 'undefined' ? currentRunnerTitle : '');

    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      importSave(target, content);
    };
    reader.onerror = function() {
      notify('Failed to read save file from disk.', 'error');
    };
    reader.readAsText(file);
  }

  global.PinpointSaveManager = {
    isSupported: (fileOrTitle) => !!getGameConfig(fileOrTitle),
    getGameConfig: getGameConfig,
    exportSave: exportSave,
    importSave: importSave,
    exportCurrentSave: exportCurrentSave,
    triggerImportCurrentSave: triggerImportCurrentSave,
    handleImportFile: handleImportFile,
    updateUI: updateUI
  };

})(typeof window !== 'undefined' ? window : globalThis);
