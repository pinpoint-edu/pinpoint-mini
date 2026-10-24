// Polyfill safety guards for event targets without .matches (e.g. document/window in extensions like expander.js)
(function() {
    try {
        if (typeof EventTarget !== 'undefined' && !EventTarget.prototype.matches) {
            EventTarget.prototype.matches = function() { return false; };
        }
        if (typeof Node !== 'undefined' && !Node.prototype.matches) {
            Node.prototype.matches = function() { return false; };
        }
        if (typeof Document !== 'undefined' && !Document.prototype.matches) {
            Document.prototype.matches = function() { return false; };
        }
        if (typeof Window !== 'undefined' && !Window.prototype.matches) {
            Window.prototype.matches = function() { return false; };
        }
    } catch (e) {}
})();

var TabDisguiser = window.TabDisguiser || {
    currentVersion: '2026.09.23.11',
    defaultTitle: 'Home - Classroom',
    defaultFavicon: 'favicons/google-classroom.png',

    init() {
        const rawPath = window.__CURRENT_PAGE__ || window.location.pathname;
        const path = rawPath.toLowerCase();
        const isMusic = path.includes('music');
        const isClassworkHistory = !isMusic && path.includes('classwork') && (path.includes('history') || path.includes('english'));
        const isHistory = !isMusic && !path.includes('classwork') && (path.includes('history') || path.includes('english'));
        const isAI = !isMusic && path.includes('ai');
        const isSettings = !isMusic && path.includes('settings');
        const isMediaMarketing = path.includes('media-marketing');

        const isHome = !isMusic && !isMediaMarketing && !isClassworkHistory && !isHistory && !isAI && !isSettings && (
            path === '' || path === '/' || path.includes('home') ||
            path.endsWith('/home.html') || path.endsWith('/index.html') || path === 'index.html' || path === 'home.html' ||
            path.endsWith('/pinpoint-edu') || path.endsWith('/pinpoint-edu/')
        );

        const seen = localStorage.getItem('pinpoint_walkthrough_v3') === 'true';
        const active = sessionStorage.getItem('pinpoint_walkthrough_active') === 'true';
        const step = sessionStorage.getItem('pinpoint_walkthrough_step');

        // Walkthrough is opt-in, not a gate — never force-redirect to home

        this.checkLoaderRedirect();
        this.initTitleProtection();
        this.apply();
        this.injectNavigation();
        this.applyClassConfig();
        this.initStaticClock();
        this.initFullscreenClock();
        this.initPanicKey();
        this.applyPresetCloak();
        this.initAutoRefresh();
        this.interceptLinks();
        this.initCleanupReminder();
    },

    checkLoaderRedirect() {
        try {
            if (window.self !== window.top) return; // Inside iframe (e.g. loader.html)
            if (window.location.protocol === 'about:' || window.location.href.startsWith('about:')) return; // In about:blank
            const path = window.location.pathname || '';
            const lowerPath = path.toLowerCase();
            if (lowerPath === '' || lowerPath === '/' || lowerPath.endsWith('/index.html') || lowerPath === 'index.html' || lowerPath.endsWith('/loader.html') || lowerPath === 'loader.html' || lowerPath.endsWith('/redirect.html') || lowerPath === 'redirect.html') {
                return;
            }
            const target = window.location.pathname + window.location.search;
            const origin = window.location.origin || '';
            const cleanOrigin = origin.endsWith('/') ? origin : origin + '/';
            window.location.replace(cleanOrigin + 'index.html?target=' + encodeURIComponent(target));
        } catch(e) {}
    },

    interceptLinks() {
        if (this._linksIntercepted) return;
        this._linksIntercepted = true;
        if (!this._storageClassBound) {
            this._storageClassBound = true;
            window.addEventListener('storage', (e) => {
                if (e.key === 'pinpoint_classroom_config' || e.key === 'pinpoint_custom_banners') {
                    this.applyClassConfig();
                }
            });
        }
        document.addEventListener('click', (e) => {
            if (window._pinpointJustDraggedCard) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                return;
            }
            const addBtn = e.target.closest('button[jsname="mSMdM"], .XGLVqf button[aria-label="Create or join a class"], .XGLVqf button[aria-label="Join class"], li[jsname="SLuNwd"], li[jsname="svCv4e"], [data-open-class-manager="true"]');
            if (addBtn) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                this.openClassManagerModal();
                return;
            }

            const optBtn = e.target.closest('[data-class-options-btn="true"]');
            if (optBtn) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                const cid = optBtn.getAttribute('data-class-id') || null;
                this.openClassManagerModal(cid);
                return;
            }

            if (e.target.closest('[data-fake-class="true"]')) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                return;
            }

            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href || href.startsWith('javascript:') || href.startsWith('mailto:')) return;

            const isAboutBlank = window.location.protocol === 'about:' || window.location.href.startsWith('about:');

            if (isAboutBlank) {
                const isExternal = href.startsWith('http://') || href.startsWith('https://');
                const isClassroom = href.includes('classroom.google.com');
                const entryOrigin = localStorage.getItem('pinpoint_entry_origin') || '';
                const isInternal = !isExternal || (entryOrigin && href.includes(entryOrigin));

                // Only intercept local site navigation and Google Classroom links
                if (isInternal || isClassroom) {
                    e.preventDefault();
                    e.stopPropagation();

                    let targetUrl = href;

                    // Route clicks meant for the real Google Classroom back to your home clone
                    if (isClassroom) {
                        targetUrl = 'home.html';
                    }

                    if (typeof window.navigateToAboutBlankPage === 'function') {
                        window.navigateToAboutBlankPage(targetUrl);
                    } else {
                        window.location.hash = targetUrl;
                    }
                } else if (isExternal) {
                    // Load external sites inside the popout iframe so about:blank stays intact
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.TabDisguiser && typeof window.TabDisguiser.openPopout === 'function') {
                        window.TabDisguiser.openPopout(href, 'External Site');
                    }
                }
            }
        }, true); // capture phase so it fires before any other handler
    },

    initAutoRefresh() {
        const check = () => {
            try {
                const isSub = window.location.pathname.includes('/pages/') || window.location.pathname.includes('/textbooks/') || window.location.pathname.includes('media-marketing');
                const prefix = isSub ? '../' : './';
                const url = (window.location.origin && window.location.origin !== 'null') 
                    ? window.location.origin + '/version.json?t=' + Date.now() 
                    : prefix + 'version.json?t=' + Date.now();
                fetch(url, { cache: 'no-store' })
                    .then(r => r.ok ? r.json() : null)
                    .then(data => {
                        if (data && data.version && data.version !== this.currentVersion) {
                            const lastVersionReloaded = localStorage.getItem('pinpoint_version_reloaded');
                            if (lastVersionReloaded === data.version) {
                                return;
                            }
                            const runnerOverlay = document.getElementById('game-runner-overlay');
                            if (runnerOverlay && runnerOverlay.style.display !== 'none') {
                                return;
                            }
                            const lastReload = parseInt(sessionStorage.getItem('pinpoint_last_reload') || '0', 10);
                            if (Date.now() - lastReload > 8000) {
                                sessionStorage.setItem('pinpoint_last_reload', String(Date.now()));
                                localStorage.setItem('pinpoint_version_reloaded', data.version);
                                if (window.caches) {
                                    caches.keys().then(keys => {
                                        keys.forEach(k => {
                                            if (k !== 'pinpoint-game-cache' && !k.includes('game-cache')) {
                                                caches.delete(k);
                                            }
                                        });
                                    }).catch(() => {});
                                }
                                window.location.reload(true);
                            }
                        }
                    })
                    .catch(() => {});
            } catch (e) {}
        };

        setTimeout(check, 2500);
        setInterval(check, 120000);

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                check();
            }
        });

        window.addEventListener('focus', () => {
            check();
        });
    },

    getDocs() {
        const docs = [document];
        try {
            if (window.top && window.top.document && window.top.document !== document) {
                docs.push(window.top.document);
            }
        } catch (e) {}
        try {
            if (window.parent && window.parent.document && !docs.includes(window.parent.document)) {
                docs.push(window.parent.document);
            }
        } catch (e) {}
        return docs;
    },

    resolveUrl(url) {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
            return url;
        }
        const path = window.location.pathname.toLowerCase();
        const isRoot = !path.includes('/pages/') && !path.includes('/textbooks/') && !path.includes('/media-marketing/');
        const rootPrefix = isRoot ? '.' : '..';
        const cleanPath = url.replace(/^\.?\//, '');
        return `${rootPrefix}/${cleanPath}`;
    },

    getCanonicalPageTitle() {
        const rawPath = window.__CURRENT_PAGE__ || window.location.pathname || '';
        const path = rawPath.toLowerCase();
        const cfg = this.getClassConfig();
        const historyCfg = cfg.history || cfg.english || {};
        const className = (historyCfg.name || 'World History').trim();

        const isMusic = path.includes('music');
        const isClasswork = path.includes('classwork');
        const isHistoryOrEnglish = (path.includes('history') || path.includes('english'));
        const isAI = path.includes('ai');
        const isSettings = path.includes('settings');
        const isMediaMarketing = path.includes('media-marketing');

        if (isClasswork) {
            if (isMusic && cfg.music && cfg.music.name) {
                return `Classwork for ${cfg.music.name} - Classroom`;
            }
            return `Classwork for ${className} - Classroom`;
        }

        if (isHistoryOrEnglish) {
            return `${className} - Classroom`;
        }

        if (isMusic) {
            const musicName = (cfg.music && cfg.music.name) || 'Music Production';
            return `${musicName} - Classroom`;
        }

        if (isMediaMarketing) {
            return 'Media Marketing - Classroom';
        }

        if (isAI) {
            return 'Gemini - Classroom';
        }

        if (isSettings) {
            return 'Settings - Classroom';
        }

        return this.defaultTitle || 'Home - Classroom';
    },

    _authorizedTitle: '',
    _isSettingAuthorizedTitle: false,

    _setActualTitle(titleToUse) {
        this._authorizedTitle = titleToUse;
        const docs = this.getDocs();
        this._isSettingAuthorizedTitle = true;
        try {
            docs.forEach(d => {
                if (d) {
                    try { d.title = titleToUse; } catch(e) {}
                    try {
                        const tEl = d.querySelector && d.querySelector('title');
                        if (tEl && tEl.textContent !== titleToUse) {
                            tEl.textContent = titleToUse;
                        }
                    } catch(e) {}
                }
            });
            try {
                if (window.top && window.top !== window.self) {
                    window.top.postMessage({ type: 'set-title', title: titleToUse }, '*');
                }
            } catch (e) {}
        } finally {
            this._isSettingAuthorizedTitle = false;
        }
    },

    setTitle(customTitle) {
        const canonical = this.getCanonicalPageTitle();
        let titleToUse = customTitle || canonical || this.defaultTitle;

        // Never allow game titles or non-disguise titles (unless it's the live clock)
        if (!titleToUse.includes('Classroom') && !this._isFullscreenClockActive) {
            titleToUse = canonical;
        }
        this._authorizedTitle = titleToUse;

        if (this._isFullscreenClockActive) {
            this._savedTitleBeforeClock = titleToUse;
            return;
        }
        this._setActualTitle(titleToUse);
    },

    apply(customTitle) {
        const titleToUse = customTitle || this.getCanonicalPageTitle();
        this.setTitle(titleToUse);
        const docs = this.getDocs();
        const icon = this.resolveUrl(this.defaultFavicon);
        docs.forEach(d => this.setFavicon(icon, d));
    },

    protectDoc(doc) {
        if (!doc || doc.__titleLockInstalled) return;
        doc.__titleLockInstalled = true;

        const proto = Object.getPrototypeOf(doc);
        const nativeDesc = Object.getOwnPropertyDescriptor(proto, 'title') ||
                           Object.getOwnPropertyDescriptor(Document.prototype, 'title');

        try {
            Object.defineProperty(doc, 'title', {
                configurable: true,
                enumerable: true,
                get: () => {
                    if (nativeDesc && nativeDesc.get) {
                        return nativeDesc.get.call(doc);
                    }
                    return this._authorizedTitle || this.getCanonicalPageTitle();
                },
                set: (newVal) => {
                    if (this._isSettingAuthorizedTitle) {
                        if (nativeDesc && nativeDesc.set) {
                            nativeDesc.set.call(doc, newVal);
                        }
                        return;
                    }
                    // Unauthorized change attempt (e.g. game engine) - silently block and keep authorized disguise title
                    const auth = this._authorizedTitle || this.getCanonicalPageTitle();
                    if (nativeDesc && nativeDesc.set) {
                        nativeDesc.set.call(doc, auth);
                    }
                }
            });
        } catch(e) {}

        const enforceTag = () => {
            if (this._isSettingAuthorizedTitle) return;
            const auth = this._authorizedTitle || this.getCanonicalPageTitle();
            const titleEl = doc.querySelector && doc.querySelector('title');
            if (titleEl && titleEl.textContent !== auth) {
                this._isSettingAuthorizedTitle = true;
                try {
                    titleEl.textContent = auth;
                    if (nativeDesc && nativeDesc.set) {
                        nativeDesc.set.call(doc, auth);
                    }
                } finally {
                    this._isSettingAuthorizedTitle = false;
                }
            }
        };

        const existingTitle = doc.querySelector && doc.querySelector('title');
        if (existingTitle) {
            try {
                const obs = new MutationObserver(enforceTag);
                obs.observe(existingTitle, { childList: true, characterData: true, subtree: true });
            } catch(e) {}
        }
        if (doc.head) {
            try {
                const headObs = new MutationObserver(enforceTag);
                headObs.observe(doc.head, { childList: true });
            } catch(e) {}
        }
    },

    initTitleProtection() {
        this.protectDoc(document);
        try {
            if (window.top && window.top.document && window.top.document !== document) {
                this.protectDoc(window.top.document);
            }
        } catch(e) {}

        // Listen for storage events so that when the class name is renamed, all open tabs update immediately
        window.addEventListener('storage', (e) => {
            if (e.key === 'pinpoint_classroom_config') {
                this.applyClassConfig();
            }
        });

        // Fast watchdog (every 150ms) to ensure title instantly reverts back to page name
        setInterval(() => {
            if (this._isFullscreenClockActive) return;
            const auth = this._authorizedTitle || this.getCanonicalPageTitle();
            if (document.title !== auth) {
                this._setActualTitle(auth);
            }
        }, 150);

        document.addEventListener('visibilitychange', () => {
            if (this._isFullscreenClockActive) return;
            const auth = this._authorizedTitle || this.getCanonicalPageTitle();
            if (document.title !== auth) {
                this._setActualTitle(auth);
            }
        });

        window.addEventListener('focus', () => {
            if (this._isFullscreenClockActive) return;
            const auth = this._authorizedTitle || this.getCanonicalPageTitle();
            if (document.title !== auth) {
                this._setActualTitle(auth);
            }
        });
    },

    setFavicon(iconUrl, doc = document) {
        if (!iconUrl) return;
        const resolved = this.resolveUrl(iconUrl);
        try {
            if (window.top && window.top !== window.self) {
                window.top.postMessage({ type: 'set-favicon', favicon: resolved }, '*');
            }
        } catch (e) {}

        let links = Array.from(doc.querySelectorAll("link[rel*='icon']"));
        if (links.length === 0 && doc.head) {
            const link1 = doc.createElement('link');
            link1.rel = 'icon';
            doc.head.appendChild(link1);
            const link2 = doc.createElement('link');
            link2.rel = 'shortcut icon';
            doc.head.appendChild(link2);
            links = [link1, link2];
        }

        links.forEach(l => {
            l.removeAttribute('type');
            l.href = resolved;
        });
    },

    escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    normalizeClassesConfig(parsed) {
        if (!parsed || typeof parsed !== 'object') parsed = {};
        if (parsed.english) {
            if (parsed.english.name === 'English I_Third' || parsed.english.name === 'English 1' || parsed.english.name === 'English') parsed.english.name = 'World History';
            if (parsed.english.sec === 'Third' || parsed.english.sec === 'Period 3') parsed.english.sec = '';
            if (parsed.english.teacher && (parsed.english.teacher.includes('Wukotich') || parsed.english.teacher.includes('Allison'))) parsed.english.teacher = '';
        }
        if (parsed.history) {
            if (parsed.history.name === '4th Period World History' || parsed.history.name === 'World History_Fourth') parsed.history.name = 'World History';
            if (parsed.history.sec === '4th Period' || parsed.history.sec === 'Period 4') parsed.history.sec = '';
            if (parsed.history.teacher && (parsed.history.teacher.includes('Jenkins') || parsed.history.teacher.includes('Jim'))) parsed.history.teacher = '';
        }
        if (parsed.music) {
            if (parsed.music.teacher) parsed.music.teacher = '';
        }

        const baseHistory = parsed.history || parsed.english || {
            name: 'World History',
            sec: '',
            teacher: '',
            room: '',
            banner: 'WorldHistory.jpg'
        };

        const cleanBannerKey = (val) => {
            const s = String(val || 'WorldHistory.jpg').trim();
            if (s.startsWith('data:') || s.startsWith('blob:') || s.startsWith('http://') || s.startsWith('https://') || s.startsWith('custom_')) {
                return s;
            }
            return s.replace(/^(\.\.\/|\.\/)?images\//, '');
        };

        if (!Array.isArray(parsed.classes) || parsed.classes.length === 0) {
            parsed.classes = [
                {
                    id: 'class_default',
                    name: (baseHistory.name || 'World History').trim() || 'World History',
                    teacher: (baseHistory.teacher || '').trim(),
                    sec: (baseHistory.sec || '').trim(),
                    banner: cleanBannerKey(baseHistory.banner || 'WorldHistory.jpg'),
                    hasGames: true
                }
            ];
        } else {
            let foundGames = false;
            parsed.classes = parsed.classes.map((cls, idx) => {
                const cObj = cls && typeof cls === 'object' ? cls : {};
                const isGames = !foundGames && !!cObj.hasGames;
                if (isGames) foundGames = true;
                return {
                    id: String(cObj.id || ('class_' + (idx + 1))),
                    name: String(cObj.name || 'World History').trim() || 'World History',
                    teacher: String(cObj.teacher || '').trim(),
                    sec: String(cObj.sec || '').trim(),
                    banner: cleanBannerKey(cObj.banner || 'WorldHistory.jpg'),
                    hasGames: isGames
                };
            });
            if (!foundGames && parsed.classes.length > 0) {
                parsed.classes[0].hasGames = true;
            }
        }

        const activeGamesClass = parsed.classes.find(c => c.hasGames) || parsed.classes[0];
        parsed.gamesClassId = activeGamesClass.id;
        parsed.history = {
            name: activeGamesClass.name,
            sec: activeGamesClass.sec || '',
            teacher: activeGamesClass.teacher || '',
            room: '',
            banner: activeGamesClass.banner || 'WorldHistory.jpg'
        };
        parsed.english = Object.assign({}, parsed.history);
        if (!parsed.music) {
            parsed.music = { name: 'Music Production', sec: '', teacher: '', room: '' };
        }
        if (parsed.navbarClock === undefined) {
            parsed.navbarClock = true;
        }
        return parsed;
    },

    getClassConfig() {
        try {
            const raw = localStorage.getItem('pinpoint_classroom_config');
            if (raw) {
                const parsed = JSON.parse(raw);
                return this.normalizeClassesConfig(parsed);
            }
        } catch (e) {}
        return this.normalizeClassesConfig({});
    },

    saveClassConfig(cfg) {
        const normalized = this.normalizeClassesConfig(cfg);
        try {
            localStorage.setItem('pinpoint_classroom_config', JSON.stringify(normalized));
        } catch (e) {}
        this.applyClassConfig();
        return normalized;
    },

    getCustomBanners() {
        try {
            const raw = localStorage.getItem('pinpoint_custom_banners');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {}
        return [];
    },

    saveCustomBanners(list) {
        try {
            localStorage.setItem('pinpoint_custom_banners', JSON.stringify(Array.isArray(list) ? list : []));
        } catch (e) {
            if (typeof window.showPinpointToast === 'function') {
                window.showPinpointToast('Storage full: please remove an older custom banner first.', 'error');
            }
        }
    },

    resolveBannerUrl(bannerFileName, isPagesPath) {
        const val = String(bannerFileName || 'WorldHistory.jpg').trim();
        if (val.startsWith('data:') || val.startsWith('blob:') || val.startsWith('http://') || val.startsWith('https://')) {
            return val;
        }
        if (val.startsWith('custom_')) {
            const customList = this.getCustomBanners();
            const found = customList.find(item => item && item.id === val && item.dataUrl);
            if (found) return found.dataUrl;
            return (isPagesPath ? '../images/' : './images/') + 'WorldHistory.jpg';
        }
        const cleanFile = val.replace(/^(\.\.\/|\.\/)?images\//, '');
        return (isPagesPath ? '../images/' : './images/') + cleanFile;
    },

    getBannerColor(bannerFileName) {
        const val = String(bannerFileName || 'WorldHistory.jpg').trim();
        if (val.startsWith('custom_') || val.startsWith('data:')) {
            const customList = this.getCustomBanners();
            const found = customList.find(item => item && (item.id === val || item.dataUrl === val) && item.colors);
            if (found) return found.colors;
        }
        if (window.getBannerColor) return window.getBannerColor(val);
        const map = window.BANNER_COLOR_MAP || {};
        const key = val.replace(/^(\.\.\/|\.\/)?images\//, '');
        return map[key] || {
            dominant: '#e06050',
            sidebarBg: '#f5ecea',
            sidebarHover: '#f0d9d6',
            circleBg: '#f0d5d1',
            circleText: '#792115'
        };
    },

    processUploadedBannerFile(file) {
        return new Promise((resolve, reject) => {
            if (!file || !file.type || !file.type.startsWith('image/')) {
                reject(new Error('Please select a valid image file.'));
                return;
            }
            const reader = new FileReader();
            reader.onerror = () => reject(new Error('Failed to read image file.'));
            reader.onload = (e) => {
                const img = new Image();
                img.onerror = () => reject(new Error('Invalid image format.'));
                img.onload = () => {
                    try {
                        const maxW = 1100;
                        const maxH = 360;
                        let w = img.width || 800;
                        let h = img.height || 240;
                        const scale = Math.min(1, maxW / w, maxH / Math.max(h, 1));
                        w = Math.max(1, Math.round(w * scale));
                        h = Math.max(1, Math.round(h * scale));

                        const canvas = document.createElement('canvas');
                        canvas.width = w;
                        canvas.height = h;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, w, h);

                        // Extract average color to generate matching badge/sidebar palette
                        let rSum = 0, gSum = 0, bSum = 0, count = 0;
                        try {
                            const data = ctx.getImageData(0, 0, w, h).data;
                            const step = Math.max(4, Math.floor((data.length / 4) / 400) * 4);
                            for (let i = 0; i < data.length; i += step) {
                                if (data[i + 3] < 128) continue;
                                rSum += data[i];
                                gSum += data[i + 1];
                                bSum += data[i + 2];
                                count++;
                            }
                        } catch (err) {}

                        let r = count ? Math.round(rSum / count) : 26;
                        let g = count ? Math.round(gSum / count) : 115;
                        let b = count ? Math.round(bSum / count) : 232;

                        const toHex = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
                        const mixWhite = (c, ratio) => Math.round(c + (255 - c) * ratio);
                        const darken = (c, ratio) => Math.round(c * ratio);

                        const colors = {
                            dominant: '#' + toHex(r) + toHex(g) + toHex(b),
                            sidebarBg: '#' + toHex(mixWhite(r, 0.88)) + toHex(mixWhite(g, 0.88)) + toHex(mixWhite(b, 0.88)),
                            sidebarHover: '#' + toHex(mixWhite(r, 0.78)) + toHex(mixWhite(g, 0.78)) + toHex(mixWhite(b, 0.78)),
                            circleBg: '#' + toHex(mixWhite(r, 0.74)) + toHex(mixWhite(g, 0.74)) + toHex(mixWhite(b, 0.74)),
                            circleText: '#' + toHex(darken(r, 0.42)) + toHex(darken(g, 0.42)) + toHex(darken(b, 0.42))
                        };

                        const dataUrl = canvas.toDataURL('image/jpeg', 0.84);
                        const rawName = (file.name || 'Custom Banner').replace(/\.[^/.]+$/, '').trim() || 'Custom Banner';
                        const item = {
                            id: 'custom_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
                            name: rawName.slice(0, 24),
                            dataUrl,
                            colors
                        };
                        const list = this.getCustomBanners();
                        list.unshift(item);
                        this.saveCustomBanners(list);
                        resolve(item);
                    } catch (err) {
                        reject(err);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    },

    deleteCustomBanner(bannerId, e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const list = this.getCustomBanners().filter(b => b && b.id !== bannerId);
        this.saveCustomBanners(list);

        const cfg = this.getClassConfig();
        let changedCfg = false;
        if (Array.isArray(cfg.classes)) {
            cfg.classes.forEach(c => {
                if (c.banner === bannerId) {
                    c.banner = 'WorldHistory.jpg';
                    changedCfg = true;
                }
            });
        }
        if (this._cmSelectedBanner === bannerId) {
            this._cmSelectedBanner = 'WorldHistory.jpg';
        }
        if (changedCfg) {
            this.saveClassConfig(cfg);
        } else {
            this.applyClassConfig();
        }
        this.renderClassManagerContent();
    },

    reorderClasses(fromClassId, toClassId, insertAfter = false) {
        if (!fromClassId || !toClassId || fromClassId === toClassId) return;
        const cfg = this.getClassConfig();
        if (!Array.isArray(cfg.classes) || cfg.classes.length < 2) return;
        const fromIdx = cfg.classes.findIndex(c => c.id === fromClassId);
        const toIdx = cfg.classes.findIndex(c => c.id === toClassId);
        if (fromIdx === -1 || toIdx === -1) return;

        const [moved] = cfg.classes.splice(fromIdx, 1);
        let newTargetIdx = cfg.classes.findIndex(c => c.id === toClassId);
        if (newTargetIdx === -1) {
            cfg.classes.push(moved);
        } else {
            if (insertAfter) newTargetIdx += 1;
            cfg.classes.splice(newTargetIdx, 0, moved);
        }
        this.saveClassConfig(cfg);
    },

    CLASSROOM_BANNERS: [
        { id: 'WorldHistory.jpg', name: 'World History' },
        { id: 'english.jpg', name: 'English' },
        { id: 'Math.jpg', name: 'Math' },
        { id: 'Chemistry.jpg', name: 'Chemistry' },
        { id: 'Geometry.jpg', name: 'Geometry' },
        { id: 'SocialStudies.jpg', name: 'Social Studies' },
        { id: 'Design.jpg', name: 'Design' },
        { id: 'music.jpg', name: 'Music' },
        { id: 'img_backtoschool.jpg', name: 'Back to School' },
        { id: 'img_bookclub.jpg', name: 'Book Club' },
        { id: 'img_breakfast.jpg', name: 'Cooking' },
        { id: 'img_code.jpg', name: 'Coding' },
        { id: 'img_gamenight.jpg', name: 'Game Night' },
        { id: 'img_learninstrument.jpg', name: 'Instruments' },
        { id: 'img_learnlanguage.jpg', name: 'Languages' },
        { id: 'img_read.jpg', name: 'Reading' }
    ],

    getClassThemeColor(name, bannerFileName) {
        const bColors = this.getBannerColor(bannerFileName);
        return {
            bg: bColors.circleBg,
            text: bColors.circleText,
            sidebarBg: bColors.sidebarBg,
            sidebarHover: bColors.sidebarHover,
            dominant: bColors.dominant
        };
    },

    buildSidebarClassesHtml(cfg, activePage, historyNavUrl) {
        const normalized = this.normalizeClassesConfig(cfg || this.getClassConfig());
        const classes = normalized.classes || [];
        const isHistoryActive = (activePage === 'history' || activePage === 'english');

        return classes.map((cls) => {
            const cName = (cls.name || 'Untitled Class').trim();
            const safeName = this.escapeHtml(cName);
            const letter = this.escapeHtml((cName[0] || 'C').toUpperCase());
            const bannerFile = cls.banner || 'WorldHistory.jpg';
            const circleTheme = this.getClassThemeColor(cName, bannerFile);

            if (cls.hasGames) {
                const selectedClass = isHistoryActive ? 'selected' : '';
                const textClass = isHistoryActive ? 'XL4gNd' : 'GRvzhf';
                return '<a aria-current="' + (isHistoryActive ? 'page' : 'false') + '" aria-label="' + safeName + '" class="uTwgne ' + selectedClass + '" data-id="854642477833" data-class-id="' + this.escapeHtml(cls.id) + '" href="' + historyNavUrl + '" role="menuitem" tabindex="0">' +
                    '<div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div>' +
                    '<div class="kWQ5wd"><div class="CNpREd"><div aria-hidden="true" class="JShLh TGnLfc VjRxGc FeltXd uUMf4c" style="background-color:' + circleTheme.bg + ' !important; color:' + circleTheme.text + ' !important;">' + letter + '</div></div></div>' +
                    '<div class="Ij01W"><div class="' + textClass + ' YVvGBb">' + safeName + '</div></div>' +
                    '</a>';
            } else {
                return '<a aria-current="false" aria-label="' + safeName + '" class="uTwgne" data-fake-class="true" data-class-id="' + this.escapeHtml(cls.id) + '" href="javascript:void(0)" onclick="event.preventDefault(); event.stopPropagation(); return false;" role="menuitem" tabindex="0" style="cursor:pointer;">' +
                    '<div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div>' +
                    '<div class="kWQ5wd"><div class="CNpREd"><div aria-hidden="true" class="JShLh TGnLfc VjRxGc FeltXd uUMf4c" style="background-color:' + circleTheme.bg + ' !important; color:' + circleTheme.text + ' !important;">' + letter + '</div></div></div>' +
                    '<div class="Ij01W"><div class="GRvzhf YVvGBb">' + safeName + '</div></div>' +
                    '</a>';
            }
        }).join('');
    },

    renderSidebarClasses() {
        const path = (window.__CURRENT_PAGE__ || window.location.pathname || '').toLowerCase();
        const isPages = path.includes('/pages/') || path.includes('\\pages\\') || path.startsWith('pages/');
        const isMediaMarketing = path.includes('media-marketing');
        const isRoot = !isPages && !isMediaMarketing;
        const isFile = window.location.protocol === 'file:';
        const isAboutBlank = (window.location.protocol === 'about:' || window.location.href === 'about:blank' || window.location.href.startsWith('about:'));
        const pagesPrefix = isAboutBlank ? '#pages' : (isFile ? (isPages ? '.' : (isRoot ? './pages' : '../pages')) : '/pages');
        const historyNavUrl = isAboutBlank ? '#pages/history.html' : (pagesPrefix + '/history.html');

        let activePage = 'home';
        if (path.includes('classwork-history') || path.includes('classwork-english') || path.includes('classwork') || path.includes('history') || path.includes('english')) {
            activePage = 'history';
        } else if (path.includes('ai')) {
            activePage = 'ai';
        } else if (path.includes('settings')) {
            activePage = 'settings';
        }

        const cfg = this.getClassConfig();
        const classesHtml = this.buildSidebarClassesHtml(cfg, activePage, historyNavUrl);
        const todoHtml = '<a aria-current="false" aria-label="To-do" class="uTwgne nav-decorative" href="javascript:void(0)" role="menuitem" style="pointer-events:none;opacity:0.5;cursor:default;" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"></path><polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"></polygon><rect fill-rule="evenodd" height="2" width="5" x="5" y="7"></rect><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"></rect><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"></rect></g></g></svg></div><div class="Ij01W"><div class="GRvzhf YVvGBb">To-do</div></div></a>';

        document.querySelectorAll('nav.STek2d div[aria-label="Enrolled"][role="group"], .ETRkCe div[aria-label="Enrolled"][role="group"]').forEach(group => {
            group.innerHTML = todoHtml + classesHtml;
        });

        this.fitSidebarButtons();
    },

    renderHomeClassCards() {
        const listEl = document.querySelector('ol.JwPp0e.J9ecJc');
        if (!listEl) return;

        const path = (window.__CURRENT_PAGE__ || window.location.pathname || '').toLowerCase();
        const isPages = path.includes('/pages/') || path.includes('\\pages\\') || path.startsWith('pages/');
        const isFile = window.location.protocol === 'file:';
        const isAboutBlank = (window.location.protocol === 'about:' || window.location.href === 'about:blank' || window.location.href.startsWith('about:'));

        const historyHref = isAboutBlank ? '#pages/history.html' : (isFile ? './pages/history.html' : '/pages/history.html');
        const classworkHref = isAboutBlank ? '#pages/classwork-history.html' : (isFile ? './pages/classwork-history.html' : '/pages/classwork-history.html');

        const cfg = this.getClassConfig();
        const classes = cfg.classes || [];

        const cardsHtml = classes.map((cls) => {
            const cName = (cls.name || 'Untitled Class').trim();
            const safeName = this.escapeHtml(cName);
            const teacher = (cls.teacher !== undefined ? cls.teacher : (cls.sec || '')).trim();
            const safeTeacher = this.escapeHtml(teacher);
            const bannerUrl = this.resolveBannerUrl(cls.banner || 'WorldHistory.jpg', isPages);
            const safeClassId = this.escapeHtml(cls.id);

            if (cls.hasGames) {
                return '<li class="gHz6xd riU7le rZXyy" draggable="true" data-draggable-item-id="854642477833" data-user-id="10000000001" data-course-id="854642477833" data-class-id="' + safeClassId + '" style="cursor:grab;">' +
                    '<div class="Tc9hUd CNpREd g2MItd">' +
                        '<div class="OjOEXb" style="background-image: url(&quot;' + bannerUrl + '&quot;) !important;"></div>' +
                        '<div class="ZizeYd ml1ZL lmPo4" style="display:none !important;opacity:0 !important;"></div>' +
                        '<div class="R4EiSb">' +
                            '<a class="slDfNd ZmqAt z07MGc" draggable="false" target="_self" aria-hidden="true" tabindex="-1" href="' + historyHref + '"></a>' +
                            '<h2 class="prWPdf">' +
                                '<a class="slDfNd Vu2fZd z07MGc" draggable="false" target="_self" href="' + historyHref + '" data-focus-id="/u/2/c/ODU0NjQyNDc3ODMz">' +
                                    '<div class="ScpeUc Vu2fZd XwD7Ke">' + safeName + '</div>' +
                                    '<div class="FWGURc Vu2fZd Svw0vd"></div>' +
                                '</a>' +
                                '<a class="slDfNd z07MGc" draggable="false" target="_self" aria-hidden="true" tabindex="-1" href="' + historyHref + '"> </a>' +
                            '</h2>' +
                            '<div class="gmNu1d">' +
                                '<div class="z07MGc Vu2fZd jJIbcc T30lh">' + safeTeacher + '</div>' +
                                '<div class="lJv9ke"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="joT7of"><div class="TQYOZc"><div><div class="xo2x2e AX2up"><span class="Y5vSD">No work due soon</span><span class="nforOe">Woohoo, no work due soon!</span></div></div></div></div>' +
                    '<div class="SZ0kZe">' +
                        '<span data-is-tooltip-wrapper="true">' +
                            '<div class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc" style="cursor:pointer;position:relative;" onclick="if(window.navigateToAboutBlankPage){window.navigateToAboutBlankPage(\'pages/classwork-history.html\');return false;}">' +
                                '<span class="UTNHae"></span>' +
                                '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"/><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"/></svg></span></span>' +
                                '<a class="pYTkkf-Bz112c-mRLv6 pYTkkf-Bz112c-RLmnJb" draggable="false" href="' + classworkHref + '" aria-label="Open your work for &quot;' + safeName + '&quot;" style="position:absolute;inset:0;width:100%;height:100%;z-index:10;cursor:pointer;"></a>' +
                                '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                            '</div>' +
                        '</span>' +
                        '<div><span data-is-tooltip-wrapper="true">' +
                            '<div class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc dNcx9b" style="cursor:pointer;position:relative;" onclick="event.preventDefault();event.stopPropagation();return false;">' +
                                '<span class="UTNHae"></span>' +
                                '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg></span></span>' +
                                '<a class="pYTkkf-Bz112c-mRLv6 pYTkkf-Bz112c-RLmnJb" draggable="false" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;" aria-label="Open folder for &quot;' + safeName + '&quot; in Google Drive" style="position:absolute;inset:0;width:100%;height:100%;z-index:10;cursor:pointer;"></a>' +
                                '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                            '</div>' +
                        '</span></div>' +
                        '<div><div class="tB5Jxf-xl07Ob-XxIAqe-OWXEXe-oYxtQd">' +
                            '<div><span data-is-tooltip-wrapper="true">' +
                                '<button class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc" type="button" data-class-options-btn="true" data-class-id="' + safeClassId + '" onclick="event.preventDefault();event.stopPropagation();TabDisguiser.openClassManagerModal(\'' + safeClassId + '\');return false;" aria-label="Class options for ' + safeName + '" title="Manage class">' +
                                    '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                                    '<span class="UTNHae"></span>' +
                                    '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg></span></span>' +
                                    '<div class="pYTkkf-Bz112c-RLmnJb"></div>' +
                                '</button>' +
                            '</span></div>' +
                        '</div></div>' +
                    '</div>' +
                '</li>';
            } else {
                return '<li class="gHz6xd riU7le rZXyy" draggable="true" data-fake-class="true" data-draggable-item-id="' + safeClassId + '" data-user-id="10000000001" data-course-id="' + safeClassId + '" data-class-id="' + safeClassId + '" style="cursor:grab;">' +
                    '<div class="Tc9hUd CNpREd g2MItd" data-fake-class="true">' +
                        '<div class="OjOEXb" style="background-image: url(&quot;' + bannerUrl + '&quot;) !important;"></div>' +
                        '<div class="ZizeYd ml1ZL lmPo4" style="display:none !important;opacity:0 !important;"></div>' +
                        '<div class="R4EiSb" data-fake-class="true">' +
                            '<a class="slDfNd ZmqAt z07MGc" draggable="false" data-fake-class="true" target="_self" aria-hidden="true" tabindex="-1" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;" style="cursor:pointer;"></a>' +
                            '<h2 class="prWPdf">' +
                                '<a class="slDfNd Vu2fZd z07MGc" draggable="false" data-fake-class="true" target="_self" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;" style="cursor:pointer;">' +
                                    '<div class="ScpeUc Vu2fZd XwD7Ke">' + safeName + '</div>' +
                                    '<div class="FWGURc Vu2fZd Svw0vd"></div>' +
                                '</a>' +
                                '<a class="slDfNd z07MGc" draggable="false" data-fake-class="true" target="_self" aria-hidden="true" tabindex="-1" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;"> </a>' +
                            '</h2>' +
                            '<div class="gmNu1d">' +
                                '<div class="z07MGc Vu2fZd jJIbcc T30lh">' + safeTeacher + '</div>' +
                                '<div class="lJv9ke"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="joT7of" data-fake-class="true"><div class="TQYOZc"><div><div class="xo2x2e AX2up"><span class="Y5vSD">No work due soon</span><span class="nforOe">Woohoo, no work due soon!</span></div></div></div></div>' +
                    '<div class="SZ0kZe" data-fake-class="true">' +
                        '<span data-is-tooltip-wrapper="true">' +
                            '<div class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc" data-fake-class="true" style="cursor:pointer;position:relative;" onclick="event.preventDefault();event.stopPropagation();return false;">' +
                                '<span class="UTNHae"></span>' +
                                '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"/><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"/></svg></span></span>' +
                                '<a class="pYTkkf-Bz112c-mRLv6 pYTkkf-Bz112c-RLmnJb" draggable="false" data-fake-class="true" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;" aria-label="Open your work for &quot;' + safeName + '&quot;" style="position:absolute;inset:0;width:100%;height:100%;z-index:10;cursor:pointer;"></a>' +
                                '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                            '</div>' +
                        '</span>' +
                        '<div><span data-is-tooltip-wrapper="true">' +
                            '<div class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc dNcx9b" data-fake-class="true" style="cursor:pointer;position:relative;" onclick="event.preventDefault();event.stopPropagation();return false;">' +
                                '<span class="UTNHae"></span>' +
                                '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg></span></span>' +
                                '<a class="pYTkkf-Bz112c-mRLv6 pYTkkf-Bz112c-RLmnJb" draggable="false" data-fake-class="true" href="javascript:void(0)" onclick="event.preventDefault();event.stopPropagation();return false;" aria-label="Open folder for &quot;' + safeName + '&quot; in Google Drive" style="position:absolute;inset:0;width:100%;height:100%;z-index:10;cursor:pointer;"></a>' +
                                '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                            '</div>' +
                        '</span></div>' +
                        '<div><div class="tB5Jxf-xl07Ob-XxIAqe-OWXEXe-oYxtQd">' +
                            '<div><span data-is-tooltip-wrapper="true">' +
                                '<button class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc" type="button" data-class-options-btn="true" data-class-id="' + safeClassId + '" onclick="event.preventDefault();event.stopPropagation();TabDisguiser.openClassManagerModal(\'' + safeClassId + '\');return false;" aria-label="Class options for ' + safeName + '" title="Manage class">' +
                                    '<span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span>' +
                                    '<span class="UTNHae"></span>' +
                                    '<span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span class="notranslate VfPpkd-kBDsod" aria-hidden="true"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg></span></span>' +
                                    '<div class="pYTkkf-Bz112c-RLmnJb"></div>' +
                                '</button>' +
                            '</span></div>' +
                        '</div></div>' +
                    '</div>' +
                '</li>';
            }
        }).join('');

        listEl.innerHTML = cardsHtml;
        this.bindHomeCardDragAndDrop(listEl);
    },

    bindHomeCardDragAndDrop(listEl) {
        if (!listEl || listEl._pinpointDragBound) return;
        listEl._pinpointDragBound = true;

        let draggedClassId = null;

        listEl.addEventListener('dragstart', (e) => {
            const card = e.target.closest('li.gHz6xd[data-class-id]');
            if (!card) return;
            draggedClassId = card.getAttribute('data-class-id');
            if (!draggedClassId) return;
            window._pinpointJustDraggedCard = true;
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = 'move';
                try { e.dataTransfer.setData('text/plain', draggedClassId); } catch (err) {}
            }
            setTimeout(() => {
                card.style.opacity = '0.45';
            }, 0);
        });

        listEl.addEventListener('dragover', (e) => {
            if (!draggedClassId) return;
            const targetCard = e.target.closest('li.gHz6xd[data-class-id]');
            if (!targetCard) return;
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
            const targetId = targetCard.getAttribute('data-class-id');
            listEl.querySelectorAll('li.gHz6xd[data-class-id]').forEach(li => {
                if (li.getAttribute('data-class-id') === targetId && targetId !== draggedClassId) {
                    li.style.outline = '2px dashed #1a73e8';
                    li.style.outlineOffset = '4px';
                } else {
                    li.style.outline = '';
                    li.style.outlineOffset = '';
                }
            });
        });

        listEl.addEventListener('drop', (e) => {
            if (!draggedClassId) return;
            e.preventDefault();
            e.stopPropagation();
            const targetCard = e.target.closest('li.gHz6xd[data-class-id]');
            listEl.querySelectorAll('li.gHz6xd[data-class-id]').forEach(li => {
                li.style.outline = '';
                li.style.outlineOffset = '';
                li.style.opacity = '';
            });
            if (targetCard) {
                const targetId = targetCard.getAttribute('data-class-id');
                if (targetId && targetId !== draggedClassId) {
                    const rect = targetCard.getBoundingClientRect();
                    const insertAfter = (e.clientX - rect.left) > (rect.width / 2);
                    this.reorderClasses(draggedClassId, targetId, insertAfter);
                }
            }
            draggedClassId = null;
            setTimeout(() => { window._pinpointJustDraggedCard = false; }, 160);
        });

        listEl.addEventListener('dragend', () => {
            draggedClassId = null;
            listEl.querySelectorAll('li.gHz6xd[data-class-id]').forEach(li => {
                li.style.outline = '';
                li.style.outlineOffset = '';
                li.style.opacity = '';
            });
            setTimeout(() => { window._pinpointJustDraggedCard = false; }, 160);
        });
    },

    bindHomeAddClassButtons() {
        document.querySelectorAll('button[jsname="mSMdM"], .XGLVqf button, li[jsname="SLuNwd"], li[jsname="svCv4e"], [data-open-class-manager="true"]').forEach(btn => {
            if (btn._pinpointClassMgrBound) return;
            btn._pinpointClassMgrBound = true;
            btn.setAttribute('data-open-class-manager', 'true');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                this.openClassManagerModal();
            }, true);
        });
    },

    applyClassConfig() {
        const cfg = this.getClassConfig();
        const historyCfg = cfg.history || cfg.english || {};

        const rawPath = window.__CURRENT_PAGE__ || window.location.pathname || '';
        const path = rawPath.toLowerCase();
        const isClasswork = path.includes('classwork');
        const isHistory = !isClasswork && (path.includes('history') || path.includes('english'));
        const isEnglish = !isClasswork && path.includes('english');
        const isMusic = path.includes('music');

        this.renderHomeClassCards();
        this.bindHomeAddClassButtons();
        this.renderSidebarClasses();

        const pageHeader = document.querySelector('h1.tNGpbb');
        if (pageHeader) {
            if (isEnglish && cfg.english && cfg.english.name) pageHeader.textContent = cfg.english.name;
            if (isHistory && cfg.history && cfg.history.name) pageHeader.textContent = cfg.history.name;
            if (isMusic && cfg.music && cfg.music.name) pageHeader.textContent = cfg.music.name;
        }

        const classworkSpan = document.getElementById('UGb2Qe');
        if (classworkSpan) {
            if (isEnglish && cfg.english && cfg.english.name) classworkSpan.textContent = cfg.english.name;
            if (isHistory && cfg.history && cfg.history.name) classworkSpan.textContent = cfg.history.name;
            if (isMusic && cfg.music && cfg.music.name) classworkSpan.textContent = cfg.music.name;
        }

        const secEl = document.querySelector('.FWGURc.Vu2fZd');
        if (secEl && (isHistory || isEnglish || isMusic)) {
            if (isEnglish && cfg.english && cfg.english.sec !== undefined) secEl.textContent = cfg.english.sec;
            if (isHistory && cfg.history && cfg.history.sec !== undefined) secEl.textContent = cfg.history.sec;
            if (isMusic && cfg.music && cfg.music.sec !== undefined) secEl.textContent = cfg.music.sec;
        }

        const bannerSec = document.getElementById('banner-teacher-section') || document.querySelector('.T4tcpe .XbzULd');
        if (bannerSec && (isHistory || isEnglish)) {
            bannerSec.textContent = historyCfg.teacher || historyCfg.sec || '';
        }

        this.setTitle(this.getCanonicalPageTitle());

        const bannerFile = historyCfg.banner || 'WorldHistory.jpg';
        const isPagesPath = path.includes('/pages/') || path.includes('\\pages\\') || path.startsWith('pages/');
        const bannerUrl = this.resolveBannerUrl(bannerFile, isPagesPath);
        document.querySelectorAll('.PFLqgc, li[data-course-id="854642477833"] .OjOEXb').forEach(b => {
            b.style.setProperty('background-image', 'url("' + bannerUrl + '")', 'important');
        });

        // Remove tint overlay on home card
        document.querySelectorAll('.Tc9hUd .ZizeYd, .Tc9hUd .ZizeYd.ml1ZL, .Tc9hUd .lmPo4').forEach(el => {
            el.style.setProperty('display', 'none', 'important');
            el.style.setProperty('opacity', '0', 'important');
        });

        const activeTitle = (historyCfg.name || 'World History').trim();
        const letter = (activeTitle[0] || 'W').toUpperCase();
        const themeColor = this.getClassThemeColor(activeTitle, bannerFile);

        const fastStyle = document.getElementById('pinpoint-fast-cache-style');
        if (fastStyle) {
            fastStyle.textContent =
                '.PFLqgc, .PFLqgc.KFl4Z, li[data-course-id="854642477833"] .OjOEXb, .qyN25 [style*="WorldHistory.jpg"] { background-image: url("' + bannerUrl + '") !important; } ' +
                '.Tc9hUd .ZizeYd, .Tc9hUd .ZizeYd.ml1ZL, .Tc9hUd .lmPo4 { display: none !important; opacity: 0 !important; } ' +
                'nav.STek2d a[data-id="854642477833"] .JShLh { background-color: ' + themeColor.bg + ' !important; color: ' + themeColor.text + ' !important; } ' +
                'nav.STek2d a.uTwgne[aria-current="page"], nav.STek2d a.uTwgne.selected { background-color: ' + themeColor.sidebarBg + ' !important; } ' +
                'nav.STek2d a.uTwgne[aria-current="page"]:hover, nav.STek2d a.uTwgne.selected:hover { background-color: ' + themeColor.sidebarHover + ' !important; } ' +
                '#stream-announcement-avatar, .JZicYb .Cxyznd.MwOlIe { background-color: ' + themeColor.bg + ' !important; } ' +
                '#stream-announcement-icon, .JZicYb .Cxyznd.MwOlIe .material-symbols-outlined { color: ' + themeColor.text + ' !important; fill: ' + themeColor.text + ' !important; } ';
        }

        document.querySelectorAll('nav.STek2d a[data-id="854642477833"] .JShLh').forEach(c => {
            c.textContent = letter;
            c.style.setProperty('background-color', themeColor.bg, 'important');
            c.style.setProperty('color', themeColor.text, 'important');
        });
        document.querySelectorAll('nav.STek2d a[data-id="854642477833"] .YVvGBb').forEach(el => {
            el.textContent = activeTitle;
        });

        document.querySelectorAll('#stream-announcement-avatar, .JZicYb .Cxyznd.MwOlIe').forEach(c => {
            c.style.setProperty('background-color', themeColor.bg, 'important');
            const ico = c.querySelector('.material-symbols-outlined') || c.querySelector('#stream-announcement-icon');
            if (ico) {
                ico.style.setProperty('color', themeColor.text, 'important');
                ico.style.setProperty('fill', themeColor.text, 'important');
            }
        });
        document.querySelectorAll('#stream-announcement-icon').forEach(ico => {
            ico.style.setProperty('color', themeColor.text, 'important');
            ico.style.setProperty('fill', themeColor.text, 'important');
        });
    },

    injectNavigation() {
        const path = (window.__CURRENT_PAGE__ || window.location.pathname || '').toLowerCase();
        const isPages = path.includes('/pages/') || path.includes('\\pages\\') || path.startsWith('pages/');
        const isMediaMarketing = path.includes('media-marketing');
        const isRoot = !isPages && !isMediaMarketing;
        const isFile = window.location.protocol === 'file:';

        const isAboutBlank = (window.location.protocol === 'about:' || window.location.href === 'about:blank' || window.location.href.startsWith('about:'));

        const rootPrefix = isFile ? (isRoot ? '.' : '..') : '';
        let pagesPrefix = isFile ? (isPages ? '.' : (isRoot ? './pages' : '../pages')) : '/pages';
        let homeUrl = isFile ? rootPrefix + '/home.html' : '/home.html';
        let musicUrl = isFile ? rootPrefix + '/music.html' : '/music.html';
        let mediaMarketingUrl = isFile ? (isMediaMarketing ? './index.html' : (isPages ? '../media-marketing/index.html' : './media-marketing/index.html')) : '/media-marketing/index.html';

        if (isAboutBlank) {
            homeUrl = '#home.html';
            pagesPrefix = '#pages';
            musicUrl = '#music.html';
            mediaMarketingUrl = '#media-marketing/index.html';
        }

        let activePage = 'home';
        let subpageTitle = '';
        let subpageUrl = '';

        if (path.includes('classwork-history') || path.includes('classwork-english') || path.includes('classwork')) {
            activePage = 'history';
            subpageTitle = 'World History';
            subpageUrl = isAboutBlank ? '#pages/classwork-history.html' : pagesPrefix + '/classwork-history.html';
        } else if (path.includes('history') || path.includes('english')) {
            activePage = 'history';
            subpageTitle = 'World History';
            subpageUrl = isAboutBlank ? '#pages/history.html' : pagesPrefix + '/history.html';
        } else if (path.includes('music-test')) {
            activePage = 'music';
            subpageTitle = 'Music Production';
            subpageUrl = isAboutBlank ? '#music-test.html' : (isFile ? rootPrefix + '/music-test.html' : '/music-test.html');
        } else if (path.includes('music')) {
            activePage = 'music';
            subpageTitle = 'Music Production';
            subpageUrl = isAboutBlank ? '#music.html' : musicUrl;
        } else if (path.includes('media-marketing')) {
            activePage = 'media-marketing';
            subpageTitle = 'Media Marketing';
            subpageUrl = isAboutBlank ? '#media-marketing/index.html' : mediaMarketingUrl;
        } else if (path.includes('ai')) {
            activePage = 'ai';
            subpageTitle = 'Gemini';
            subpageUrl = isAboutBlank ? '#pages/ai.html' : pagesPrefix + '/ai.html';
        } else if (path.includes('settings')) {
            activePage = 'settings';
            subpageTitle = 'Settings';
            subpageUrl = isAboutBlank ? '#pages/settings.html' : pagesPrefix + '/settings.html';
        }

        const cfg = this.getClassConfig();
        const engTitle = (cfg.english && cfg.english.name) || 'World History';
        const hisTitle = (cfg.history && cfg.history.name) || 'World History';
        const musicTitle = (cfg.music && cfg.music.name) || 'Music Production';
        if (activePage === 'english') subpageTitle = engTitle;
        if (activePage === 'history') subpageTitle = hisTitle;
        if (activePage === 'music') subpageTitle = musicTitle;

        let breadcrumbHtml = '';
        if (subpageTitle) {
            breadcrumbHtml = '<span aria-hidden="true" class="notranslate ykp8pd cGvavf gmNu1d fcsk5 RN7s4b"><svg class="NMm5M hhikbc" focusable="false" height="18" viewBox="0 0 24 24" width="18"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg></span><a class="LNBrBd CYP1kd cGvavf gmNu1d eCXkGb fcsk5 sXIFDb" href="' + subpageUrl + '" target="_self"><span class="Vu2fZd LNBrBd gycFA" id="UGb2Qe">' + this.escapeHtml(subpageTitle) + '</span></a>';
        }

        const headerNav = document.querySelector('nav.joJglb');
        if (headerNav) {
            const topAddClassBtnHtml = (activePage === 'home')
                ? '<button type="button" data-open-class-manager="true" onclick="TabDisguiser.openClassManagerModal(); return false;" aria-label="Create or join a class" title="Add or manage classes" style="width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:#5f6368;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background=\'rgba(60,64,67,0.08)\'" onmouseout="this.style.background=\'transparent\'"><svg focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button>'
                : '';
            headerNav.innerHTML = '<div class="gmNu1d"><div class="FXKA9c"><div class="XIpEib gmNu1d"><div class="k43Owe mmOZjd" data-focus-id="JUeBdc"><div id="ow21"><span data-is-tooltip-wrapper="true"><button id="pinpoint-hamburger-btn" aria-controls="-uQIZnf" aria-expanded="true" aria-label="Main Menu" class="pYTkkf-Bz112c-LgbsSe pYTkkf-Bz112c-LgbsSe-OWXEXe-SfQLQb-suEOdc ykp8pd oxacD" style="cursor:pointer;" type="button"><span class="XjoK4b pYTkkf-Bz112c-UHGRz"></span><span class="UTNHae"></span><span aria-hidden="true" class="pYTkkf-Bz112c-kBDsod-Rtc0Jf"><span aria-hidden="true" class="notranslate VfPpkd-kBDsod"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span></span><div class="pYTkkf-Bz112c-RLmnJb"></div></button></span></div></div><h1 class="Hwv4mb rIyhE" data-impressions-entry-point="17"><a class="CbuVcc CYP1kd cGvavf gmNu1d y183Ub fcsk5" data-focus-id="titlebar-home" href="' + homeUrl + '" target="_self"><img alt="Google Classroom" class="UAJaRc" src="' + (isFile ? (rootPrefix + '/images/logo_square_rounded.svg') : '/images/logo_square_rounded.svg') + '"/><span class="dR850e FkiMUb">Classroom</span></a>' + breadcrumbHtml + '</h1></div></div><div class="R2tE8e VHRSDf gmNu1d"></div><div class="Mtd4hb gmNu1d" style="display:flex;align-items:center;gap:12px;padding-right:24px;"><div id="nav-clock-display" class="static-clock-display" style="font-size:14px;font-weight:500;color:#5f6368;font-variant-numeric:tabular-nums;font-family:\'Google Sans\',Roboto,sans-serif;display:inline-flex;align-items:center;cursor:pointer;user-select:none;" title="Fullscreen Clock"></div>' + topAddClassBtnHtml + '<svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24" style="color:#5f6368;fill:#5f6368;cursor:pointer;"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg><img src="https://lh3.googleusercontent.com/a/default-user=s40-c" alt="Avatar" style="width:32px;height:32px;border-radius:50%;cursor:pointer;"></div></div>';
            const navClock = document.getElementById('nav-clock-display');
            if (navClock) {
                navClock.onclick = (e) => {
                    e.preventDefault();
                    this.openFullscreenClock();
                };
            }
        }

        const sidebarNav = document.querySelector('nav.STek2d');
        if (sidebarNav) {
            const aiNavUrl = isAboutBlank ? '#pages/ai.html' : (pagesPrefix + '/ai.html');
            const historyNavUrl = isAboutBlank ? '#pages/history.html' : (pagesPrefix + '/history.html');
            const settingsNavUrl = isAboutBlank ? '#pages/settings.html' : (pagesPrefix + '/settings.html');

            const classItemHtml = this.buildSidebarClassesHtml(cfg, activePage, historyNavUrl);

            const baseNavHtml = '<a aria-current="' + (activePage === 'home' ? 'page' : 'false') + '" aria-label="Home" class="uTwgne TbJ0Pc ' + (activePage === 'home' ? 'selected' : '') + '" href="' + homeUrl + '" role="menuitem" tabindex="0"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path></svg></div><div class="Ij01W"><div class="' + (activePage === 'home' ? 'XL4gNd' : 'GRvzhf') + ' YVvGBb">Home</div></div></a>' +
                '<a aria-current="false" aria-label="Calendar" class="uTwgne TbJ0Pc nav-decorative" href="javascript:void(0)" role="menuitem" style="pointer-events:none;opacity:0.5;cursor:default;" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg></div><div class="Ij01W"><div class="GRvzhf YVvGBb">Calendar</div></div></a>' +
                '<a aria-current="' + (activePage === 'ai' ? 'page' : 'false') + '" aria-label="Gemini" class="uTwgne TbJ0Pc ' + (activePage === 'ai' ? 'selected' : '') + '" href="' + aiNavUrl + '" role="menuitem" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg fill="currentColor" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h160v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm500-360q0-92-64-156t-156-64q92 0 156-64t64-156q0 92 64 156t156 64q-92 0-156 64t-64 156Zm-220 0Z"></path></svg></div><div class="Ij01W"><div class="' + (activePage === 'ai' ? 'XL4gNd' : 'GRvzhf') + ' YVvGBb">Gemini</div></div></a>' +
                '<li class="aqdrmf-clz4Ic aqdrmf-clz4Ic-OWXEXe-Vkfede s28puc" role="separator"></li>' +
                '<div aria-expanded="true" aria-label="Enrolled" class="ug8OTc" data-nav-menu-group="2" role="menuitem" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="x0wLEd ykp8pd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg></div><div class="gfEyof YVvGBb HqpJve">Enrolled</div><div class="fPqOAb"></div><div class="YPT36c ykp8pd XnKFHd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path></svg></div></div>' +
                '<div aria-label="Enrolled" role="group">' +
                '<a aria-current="false" aria-label="To-do" class="uTwgne nav-decorative" href="javascript:void(0)" role="menuitem" style="pointer-events:none;opacity:0.5;cursor:default;" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"></path><polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"></polygon><rect fill-rule="evenodd" height="2" width="5" x="5" y="7"></rect><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"></rect><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"></rect></g></g></svg></div><div class="Ij01W"><div class="GRvzhf YVvGBb">To-do</div></div></a>' +
                classItemHtml +
                '</div>' +
                '<li class="aqdrmf-clz4Ic aqdrmf-clz4Ic-OWXEXe-Vkfede s28puc" role="separator"></li>' +
                '<a aria-current="false" aria-label="Archived classes" class="uTwgne TbJ0Pc nav-decorative" href="javascript:void(0)" role="menuitem" style="pointer-events:none;opacity:0.5;cursor:default;" tabindex="-1"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg></div><div class="Ij01W"><div class="GRvzhf YVvGBb">Archived classes</div></div></a>' +
                '<a aria-current="' + (activePage === 'settings' ? 'page' : 'false') + '" aria-label="Settings" class="uTwgne TbJ0Pc ' + (activePage === 'settings' ? 'selected' : '') + '" href="' + settingsNavUrl + '" role="menuitem" tabindex="0"><div class="pzaVke"><span class="dNKuRb NJyEeb"></span><div class="NsMoi"></div></div><div class="npdi5 ykp8pd"><svg class="NMm5M" focusable="false" height="24" viewBox="0 0 24 24" width="24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg></div><div class="' + (activePage === 'settings' ? 'XL4gNd' : 'GRvzhf') + ' YVvGBb">Settings</div></div></a>';

            sidebarNav.innerHTML = '<div class="J6rR1b mhCMAe"></div><div class="tCcYY yWU57c" data-course-states="1" data-is-persistent="true" id="-uQIZnf" role="menu"><div class="rknsod" data-impressions-entry-point="14">' + baseNavHtml + '</div></div>';

            this.injectNavFitStyles();
            this.fitSidebarButtons();
            window.addEventListener('resize', () => this.fitSidebarButtons());
            if (window.ResizeObserver) {
                new ResizeObserver(() => this.fitSidebarButtons()).observe(sidebarNav);
            }
        }

        this.bindHomeAddClassButtons();
        this.renderHomeClassCards();

        const hamburgerBtn = document.getElementById('pinpoint-hamburger-btn') || document.querySelector('button[aria-label="Main Menu"]');
        if (hamburgerBtn) {
            hamburgerBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const html = document.documentElement;
                if (html.classList.contains('F4Ol1b')) {
                    html.classList.remove('F4Ol1b');
                    html.classList.add('pJAEVb');
                } else {
                    html.classList.remove('pJAEVb');
                    html.classList.add('F4Ol1b');
                }
            };
        }
        setTimeout(() => this.fitSidebarButtons(), 100);
        setTimeout(() => this.fitSidebarButtons(), 500);
    },

    injectNavFitStyles() {
        if (document.getElementById('pinpoint-nav-fit-style')) return;
        const fitStyle = document.createElement('style');
        fitStyle.id = 'pinpoint-nav-fit-style';
        fitStyle.textContent = `
            .sidebar-hide-decorative {
                display: none !important;
            }
            @media (max-height: 850px) {
                .nav-decorative,
                nav.STek2d a[aria-label="Calendar"],
                nav.STek2d a[aria-label="To-do"],
                nav.STek2d a[aria-label="Archived classes"] {
                    display: none !important;
                }
            }
            .sidebar .CNpREd.WFUiUb, nav.STek2d .CNpREd.WFUiUb {
                background: transparent !important;
            }
            .sidebar .CNpREd.WFUiUb .JShLh, nav.STek2d .CNpREd.WFUiUb .JShLh {
                background-color: #ceead6 !important;
                color: #137333 !important;
                fill: #137333 !important;
                border-radius: 50% !important;
            }
            .sidebar .CNpREd.ee1HBc, nav.STek2d .CNpREd.ee1HBc {
                background: transparent !important;
            }
            .sidebar .CNpREd.ee1HBc .JShLh, nav.STek2d .CNpREd.ee1HBc .JShLh {
                background-color: #c2e7ff !important;
                color: #1157ce !important;
                fill: #1157ce !important;
                border-radius: 50% !important;
            }
        `;
        document.head.appendChild(fitStyle);
    },

    fitSidebarButtons() {
        const nav = document.querySelector('nav.STek2d');
        if (!nav) return;
        const decoratives = nav.querySelectorAll('.nav-decorative, a[aria-label="Calendar"], a[aria-label="To-do"], a[aria-label="Archived classes"]');
        if (!decoratives || decoratives.length === 0) return;

        decoratives.forEach(d => d.classList.remove('sidebar-hide-decorative'));

        const content = nav.querySelector('.rknsod') || nav.querySelector('.tCcYY') || nav;
        const availableHeight = nav.clientHeight || (window.innerHeight - 64);
        if (content.scrollHeight > availableHeight + 2) {
            decoratives.forEach(d => d.classList.add('sidebar-hide-decorative'));
        }
    },

    initStaticClock() {
        const homeClock = document.getElementById('home-clock');
        if (homeClock) homeClock.remove();
        const floating = document.getElementById('pinpoint-bottom-clock');
        if (floating) floating.remove();

        function update() {
            const enabled = localStorage.getItem('pinpoint_navbar_time') !== 'false' && localStorage.getItem('pinpoint_navbar_clock') !== 'false';
            const is24 = localStorage.getItem('pinpoint_clock_format') === '24';
            const showSec = localStorage.getItem('pinpoint_clock_seconds') !== 'false';
            const showAmPm = localStorage.getItem('pinpoint_clock_ampm') !== 'false';

            const now = new Date();
            const options = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: !is24
            };
            if (showSec) options.second = '2-digit';
            
            let timeStr = now.toLocaleTimeString([], options);
            if (!is24 && !showAmPm) {
                timeStr = timeStr.replace(/\s*(AM|PM)/i, '').trim();
            }

            const staticClocks = document.querySelectorAll('#runner-clock, #game-clock-display, #nav-clock-display, #popout-time, #fs-time, .static-clock-display');
            staticClocks.forEach(c => {
                c.textContent = timeStr;
                if (c.id !== 'fs-time') {
                    c.style.display = enabled ? 'inline-flex' : 'none';
                }
            });
        }
        setInterval(update, 1000);
        update();
    },

    triggerPanicRedirect(targetUrl) {
        window.__IS_PANIC_TRIGGERED__ = true;
        try { if (window.top) window.top.__IS_PANIC_TRIGGERED__ = true; } catch(e) {}
        try { if (window.parent) window.parent.__IS_PANIC_TRIGGERED__ = true; } catch(e) {}

        window.onbeforeunload = null;
        try { if (window.top) window.top.onbeforeunload = null; } catch(e) {}
        try { if (window.parent) window.parent.onbeforeunload = null; } catch(e) {}

        // Add capturing event listener to prevent any beforeunload dialog (e.g. Desmos)
        const stopUnload = (e) => {
            e.stopImmediatePropagation();
            delete e.returnValue;
        };
        window.addEventListener('beforeunload', stopUnload, true);
        try { if (window.top) window.top.addEventListener('beforeunload', stopUnload, true); } catch(e) {}
        try { if (window.parent) window.parent.addEventListener('beforeunload', stopUnload, true); } catch(e) {}

        // Remove any open panic shell before navigating so iframes like Desmos cannot block with beforeunload prompts
        try {
            const doc = (window.top && window.top.document) || document;
            const shell = doc.getElementById('pinpoint-panic-shell') || document.getElementById('pinpoint-panic-shell');
            if (shell) {
                try {
                    const ifr = shell.querySelector('iframe');
                    if (ifr && ifr.contentWindow) {
                        try { ifr.contentWindow.onbeforeunload = null; } catch(err) {}
                    }
                } catch(err) {}
                shell.remove();
            }
        } catch(e) {}

        let resolvedUrl = (targetUrl || localStorage.getItem('pinpoint_panic_url') || 'https://classroom.google.com/').trim();
        if (resolvedUrl && resolvedUrl !== 'about:blank' && !/^https?:\/\//i.test(resolvedUrl)) {
            resolvedUrl = 'https://' + resolvedUrl;
        }
        targetUrl = resolvedUrl;

        // 1. Post message to all ancestors & opener so top about:blank window exits
        const msg = { type: 'panic', url: targetUrl };
        try {
            if (window.top && window.top !== window) {
                window.top.postMessage(msg, '*');
            }
        } catch(e) {}
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage(msg, '*');
            }
        } catch(e) {}
        try {
            if (window.opener && !window.opener.closed) {
                window.opener.postMessage(msg, '*');
            }
        } catch(e) {}

        // 2. Identify topmost window
        let topWin = window;
        try {
            if (window.top && window.top.location) {
                topWin = window.top;
            }
        } catch(e) {}

        // 3. Bypass any about-blank-nav.js wrappers if available
        try {
            if (topWin.__originalLocationReplace) {
                topWin.__originalLocationReplace.call(topWin.location, targetUrl);
                return;
            }
        } catch(err) {}
        try {
            if (topWin.__origLocationHrefSet) {
                topWin.__origLocationHrefSet.call(topWin.location, targetUrl);
                return;
            }
        } catch(err) {}

        // 4. Default native replace with brief delay so frame detachment takes effect
        setTimeout(() => {
            try {
                topWin.location.replace(targetUrl);
                return;
            } catch(e) {}
            try {
                topWin.location.href = targetUrl;
                return;
            } catch(e) {}
            try {
                window.location.replace(targetUrl);
            } catch(e) {}
        }, 10);
    },

    _isPanicShellOpen: false,

    transferLocalDataToIframe(iframe) {
        if (!iframe) return;
        // Never force dark color-scheme on games or internal runner iframes!
        // Games (like Bit Planes) have light canvases/art styles and forcing dark color-scheme in Chrome/Chromebooks inverts text/input rendering causing text to fade invisible.
        const isGameIframe = iframe.id === 'runner-iframe' || 
                             iframe.id === 'game-frame' || 
                             (iframe.src && (iframe.src.includes('/textbooks/') || iframe.src.includes('pages/classwork-history.html')));

        if (isGameIframe) {
            try {
                iframe.style.colorScheme = 'light';
                if (iframe.contentDocument && iframe.contentDocument.documentElement) {
                    iframe.contentDocument.documentElement.style.colorScheme = 'light';
                }
            } catch(e) {}
            return;
        }

        const isDark = (window.ThemeManager && typeof window.ThemeManager.isDark === 'function') 
            ? window.ThemeManager.isDark() 
            : (localStorage.getItem('pinpoint_theme') === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));

        // Propagate preferred color scheme via native CSS color-scheme property
        try {
            iframe.style.colorScheme = isDark ? 'dark' : 'light';
        } catch(e) {}

        const syncData = () => {
            try {
                if (iframe.contentWindow) {
                    if (iframe.contentDocument && iframe.contentDocument.documentElement) {
                        iframe.contentDocument.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                    }
                    if (iframe.contentWindow.localStorage && typeof localStorage !== 'undefined') {
                        for (let i = 0; i < localStorage.length; i++) {
                            const key = localStorage.key(i);
                            if (key) {
                                try {
                                    iframe.contentWindow.localStorage.setItem(key, localStorage.getItem(key));
                                } catch(err) {}
                            }
                        }
                    }
                    if (iframe.contentWindow.sessionStorage && typeof sessionStorage !== 'undefined') {
                        for (let i = 0; i < sessionStorage.length; i++) {
                            const key = sessionStorage.key(i);
                            if (key) {
                                try {
                                    iframe.contentWindow.sessionStorage.setItem(key, sessionStorage.getItem(key));
                                } catch(err) {}
                            }
                        }
                    }
                }
            } catch(err) {
                // Cross-origin iframes have storage partitioned by browser policy,
                // but color-scheme on the iframe element natively propagates theme preferences
            }
        };

        try {
            iframe.addEventListener('load', syncData);
        } catch(e) {}
        syncData();
    },

    openPanicShell(targetUrl) {
        let doc = document;
        try {
            if (window.top && window.top.document && window.top.document.body) {
                doc = window.top.document;
            }
        } catch(e) {}

        let resolvedUrl = (targetUrl || localStorage.getItem('pinpoint_panic_url') || 'https://classroom.google.com/').trim();
        if (resolvedUrl && resolvedUrl !== 'about:blank' && !/^https?:\/\//i.test(resolvedUrl)) {
            resolvedUrl = 'https://' + resolvedUrl;
        }

        // Broadcast panic_shell_open without triggering full location replace
        try {
            if (window.top && window.top !== window) {
                window.top.postMessage({ type: 'panic_shell_open', url: resolvedUrl, mode: 'shell' }, '*');
            }
        } catch(e) {}

        let shell = doc.getElementById('pinpoint-panic-shell');
        if (!shell) {
            shell = doc.createElement('div');
            shell.id = 'pinpoint-panic-shell';
            shell.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483647;background:#ffffff;margin:0;padding:0;display:block;border:none;overflow:hidden;';
            shell.innerHTML = `
                <iframe id="pinpoint-panic-shell-iframe" src="${resolvedUrl}" style="width:100vw;height:100vh;border:none;margin:0;padding:0;display:block;background:#ffffff;pointer-events:auto;" allow="fullscreen; geolocation; camera; microphone; autoplay; clipboard-read; clipboard-write"></iframe>
                <button id="pinpoint-panic-shell-close" type="button" title="Close Shell" style="position:fixed;bottom:14px;left:14px;z-index:2147483647;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,0.45);background:rgba(0,0,0,0.32);color:#ffffff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;padding:0;opacity:0.65;box-shadow:0 2px 8px rgba(0,0,0,0.25);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transition:all 0.2s ease;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            `;
            doc.body.appendChild(shell);

            const iframe = shell.querySelector('#pinpoint-panic-shell-iframe');
            this.transferLocalDataToIframe(iframe);

            const closeBtn = shell.querySelector('#pinpoint-panic-shell-close');
            if (closeBtn) {
                closeBtn.onmouseover = () => {
                    closeBtn.style.opacity = '1';
                    closeBtn.style.background = 'rgba(0,0,0,0.7)';
                    closeBtn.style.transform = 'scale(1.1)';
                };
                closeBtn.onmouseout = () => {
                    closeBtn.style.opacity = '0.65';
                    closeBtn.style.background = 'rgba(0,0,0,0.32)';
                    closeBtn.style.transform = 'scale(1)';
                };
                closeBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.closePanicShell();
                };
            }
        } else {
            const iframe = shell.querySelector('#pinpoint-panic-shell-iframe');
            if (iframe && iframe.src !== resolvedUrl) {
                iframe.src = resolvedUrl;
            }
            this.transferLocalDataToIframe(iframe);
            shell.style.display = 'block';
        }
        this._isPanicShellOpen = true;
    },

    closePanicShell() {
        let doc = document;
        try {
            if (window.top && window.top.document) {
                doc = window.top.document;
            }
        } catch(e) {}
        const shell = doc.getElementById('pinpoint-panic-shell') || document.getElementById('pinpoint-panic-shell');
        if (shell) {
            try {
                const ifr = shell.querySelector('iframe');
                if (ifr && ifr.contentWindow) {
                    try { ifr.contentWindow.onbeforeunload = null; } catch(err) {}
                }
            } catch(e) {}
            shell.remove();
        }
        this._isPanicShellOpen = false;

        try {
            if (window.top && window.top !== window) {
                window.top.postMessage({ type: 'panic_shell_close' }, '*');
            }
        } catch(e) {}
    },

    togglePanicShell(targetUrl) {
        if (this._isPanicShellOpen) {
            this.closePanicShell();
        } else {
            this.openPanicShell(targetUrl);
        }
    },

    triggerPanic(targetUrl, mode) {
        mode = mode || localStorage.getItem('pinpoint_panic_mode') || 'redirect';
        if (mode === 'shell') {
            this.togglePanicShell(targetUrl);
        } else {
            this.triggerPanicRedirect(targetUrl);
        }
    },

    initPanicKey() {
        if (this._panicBound) return;
        this._panicBound = true;
        window.triggerPanicRedirect = this.triggerPanicRedirect.bind(this);
        window.triggerPanic = this.triggerPanic.bind(this);
        window.openPanicShell = this.openPanicShell.bind(this);
        window.closePanicShell = this.closePanicShell.bind(this);
        window.togglePanicShell = this.togglePanicShell.bind(this);

        const handleKey = (e) => {
            // If game runner overlay is active, reload only the game iframe instead of resetting page
            if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R'))) {
                const runnerOverlay = document.getElementById('game-runner-overlay');
                if (runnerOverlay && runnerOverlay.style.display !== 'none') {
                    e.preventDefault();
                    e.stopPropagation();
                    const iframe = document.getElementById('runner-iframe');
                    if (iframe) {
                        try {
                            if (iframe.contentWindow) {
                                iframe.contentWindow.location.reload();
                                return;
                            }
                        } catch(err) {}
                        iframe.src = iframe.src;
                    }
                    return;
                }
            }

            const enabled = localStorage.getItem('pinpoint_panic_enabled') !== 'false';
            if (!enabled) return;
            const targetKey = localStorage.getItem('pinpoint_panic_key') || '`';
            if (this._isPanicShellOpen && (e.key === 'Escape' || e.key === targetKey)) {
                e.preventDefault();
                e.stopPropagation();
                this.closePanicShell();
                return;
            }
            if (e.key === targetKey) {
                e.preventDefault();
                e.stopPropagation();
                const targetUrl = localStorage.getItem('pinpoint_panic_url') || 'https://classroom.google.com/';
                const mode = localStorage.getItem('pinpoint_panic_mode') || 'redirect';
                this.triggerPanic(targetUrl, mode);
            }
        };

        window.addEventListener('keydown', handleKey);

        window.addEventListener('message', (e) => {
            if (e.data === 'panic' || (e.data && e.data.type === 'panic')) {
                const targetUrl = (e.data && e.data.url) || localStorage.getItem('pinpoint_panic_url') || 'https://classroom.google.com/';
                const mode = (e.data && e.data.mode) || localStorage.getItem('pinpoint_panic_mode') || 'redirect';
                this.triggerPanic(targetUrl, mode);
            } else if (e.data && e.data.type === 'panic_shell_open') {
                this.openPanicShell(e.data.url);
            } else if (e.data === 'panic_shell_close' || (e.data && e.data.type === 'panic_shell_close')) {
                this.closePanicShell();
            }
        });

        // Watch for any iframes on page (e.g. game runner overlay) to capture panic hotkey and transfer local data
        const attachIframeKeys = () => {
            document.querySelectorAll('iframe').forEach(iframe => {
                try {
                    this.transferLocalDataToIframe(iframe);
                    if (iframe.contentWindow && !iframe.__panicAttached) {
                        iframe.__panicAttached = true;
                        iframe.contentWindow.addEventListener('keydown', handleKey);
                    }
                } catch(err) {}
            });
        };
        attachIframeKeys();
        setInterval(attachIframeKeys, 1000);
    },

    applyPresetCloak() {
        const preset = localStorage.getItem('pinpoint_tab_cloak') || 'classroom';
        const presets = {
            classroom: { title: 'Home - Classroom', icon: 'favicons/google-classroom.png' },
            drive: { title: 'My Drive - Google Drive', icon: 'favicons/google-drive.png' },
            docs: { title: 'Untitled document - Google Docs', icon: 'favicons/google-docs.png' },
            canvas: { title: 'Dashboard - Canvas', icon: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico' },
            desmos: { title: 'Desmos | Graphing Calculator', icon: 'https://www.desmos.com/favicon.ico' },
            khan: { title: 'Dashboard | Khan Academy', icon: 'https://www.khanacademy.org/favicon.ico' }
        };
        if (preset !== 'classroom' && presets[preset]) {
            const current = presets[preset];
            this.setTitle(current.title);
            this.setFavicon(current.icon);
        }
    },

    ensureFullscreenClockOverlay() {
        let overlay = document.getElementById('fs-clock-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'fs-clock-overlay';
            overlay.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:#ffffff;z-index:999999;color:#202124;font-family:\'Google Sans\',Roboto,Arial,sans-serif;flex-direction:row;justify-content:center;align-items:center;gap:6vw;box-sizing:border-box;user-select:none;';
            overlay.innerHTML = '<div style="font-size:10vw;font-weight:400;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-0.02em;color:#202124;" id="fs-time"></div><div style="width:2px;height:12vw;background:#dadce0;border-radius:2px;"></div><div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;"><span class="material-symbols-outlined" id="fs-battery-icon" style="font-size:8vw;color:#5f6368;line-height:1;">battery_full</span><span id="fs-battery-text" style="font-size:3vw;font-weight:500;color:#5f6368;line-height:1;">--%</span></div><button id="fs-clock-close-btn" style="position:absolute;top:24px;right:24px;background:none;border:none;color:#5f6368;cursor:pointer;padding:12px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background-color 0.2s;" onmouseover="this.style.backgroundColor=\'#f1f3f4\'" onmouseout="this.style.backgroundColor=\'transparent\'"><span class="material-symbols-outlined" style="font-size:32px;">close</span></button>';
            document.body.appendChild(overlay);
        }
        const closeBtn = document.getElementById('fs-clock-close-btn');
        if (closeBtn) {
            closeBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.closeFullscreenClock();
            };
        }
    },

    updateBattery() {
        if (typeof navigator !== 'undefined' && navigator.getBattery) {
            navigator.getBattery().then(battery => {
                const update = () => {
                    const level = Math.round(battery.level * 100);
                    const textEl = document.getElementById('fs-battery-text');
                    const iconEl = document.getElementById('fs-battery-icon');
                    if (textEl) textEl.textContent = level + '%';
                    if (iconEl) {
                        let icon = 'battery_full';
                        if (battery.charging) {
                            icon = 'battery_charging_full';
                        } else if (level <= 20) {
                            icon = 'battery_alert';
                        }
                        iconEl.textContent = icon;
                    }
                };
                update();
                battery.addEventListener('chargingchange', update);
                battery.addEventListener('levelchange', update);
            }).catch(() => {});
        }
    },

    getClockTitleTime() {
        const is24 = localStorage.getItem('pinpoint_clock_format') === '24';
        const showAmPm = localStorage.getItem('pinpoint_clock_ampm') !== 'false';
        const now = new Date();
        const options = {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: !is24
        };
        let timeStr = now.toLocaleTimeString([], options);
        if (!is24 && !showAmPm) {
            timeStr = timeStr.replace(/\s*(AM|PM)/i, '').trim();
        }
        return timeStr;
    },

    initFullscreenClock() {
        if (this._fsClockBound) return;
        this._fsClockBound = true;
        this.ensureFullscreenClockOverlay();
        this.updateBattery();
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const overlay = document.getElementById('fs-clock-overlay');
                if (overlay && overlay.style.display !== 'none') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeFullscreenClock();
                }
            }
        }, true);
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'close-fullscreen-clock') {
                this.closeFullscreenClock();
            }
        });
        document.addEventListener('click', (e) => {
            const runnerClock = e.target.closest('#runner-clock');
            if (runnerClock) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof closeRunner === 'function') {
                    closeRunner();
                } else if (typeof closeGameRunner === 'function') {
                    closeGameRunner();
                } else {
                    const runner = document.getElementById('game-runner-overlay');
                    if (runner) runner.style.display = 'none';
                    const iframe = document.getElementById('runner-iframe');
                    if (iframe) iframe.src = 'about:blank';
                }
                this.openFullscreenClock();
            }
        });
    },

    openFullscreenClock() {
        if (typeof closeRunner === 'function') {
            closeRunner();
        } else if (typeof closeGameRunner === 'function') {
            closeGameRunner();
        } else {
            const runner = document.getElementById('game-runner-overlay');
            if (runner && runner.style.display !== 'none') {
                runner.style.display = 'none';
                const iframe = document.getElementById('runner-iframe');
                if (iframe) iframe.src = 'about:blank';
            }
        }
        this.ensureFullscreenClockOverlay();
        const overlay = document.getElementById('fs-clock-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            this.updateBattery();
            const fsTime = document.getElementById('fs-time');
            if (fsTime) {
                fsTime.textContent = this.getClockTitleTime();
            }
        }

        this._isFullscreenClockActive = true;
        let saved = '';
        try {
            if (window.top && window.top.document && window.top.document.title) {
                saved = window.top.document.title;
            }
        } catch (e) {}
        if (!saved) saved = document.title || this.defaultTitle;
        this._savedTitleBeforeClock = saved;

        if (this._clockTitleInterval) {
            clearInterval(this._clockTitleInterval);
        }
        const updateTitle = () => {
            if (!this._isFullscreenClockActive) return;
            const timeStr = this.getClockTitleTime();
            this._setActualTitle(timeStr);
            const fsTime = document.getElementById('fs-time');
            if (fsTime) {
                fsTime.textContent = timeStr;
            }
        };
        updateTitle();
        this._clockTitleInterval = setInterval(updateTitle, 1000);
    },

    closeFullscreenClock() {
        const overlay = document.getElementById('fs-clock-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }

        this._isFullscreenClockActive = false;
        if (this._clockTitleInterval) {
            clearInterval(this._clockTitleInterval);
            this._clockTitleInterval = null;
        }

        const restoreTitle = this._savedTitleBeforeClock || this.getCanonicalPageTitle() || this.defaultTitle || 'Classes';
        this.setTitle(restoreTitle);
    },

    initCleanupReminder() {
        // Preload sharp icons eagerly with display=block so text never flashes
        if (!document.getElementById('pinpoint-sharp-icons-font')) {
            const link = document.createElement('link');
            link.id = 'pinpoint-sharp-icons-font';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block';
            document.head.appendChild(link);
        }

        // Global capture listener for dismiss button
        document.addEventListener('click', (e) => {
            const dismiss = e.target.closest('#pinpoint-info-dismiss-btn');
            if (dismiss) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                this.closeInfoWidget(e);
            }
        }, true);

        // Escape and arrow key navigation for intro modal
        document.addEventListener('keydown', (e) => {
            const widget = document.getElementById('pinpoint-info-widget');
            if (widget && widget.style.display !== 'none' && !widget.classList.contains('pinpoint-dismissed')) {
                if (e.key === 'Escape') {
                    this.closeInfoWidget(e);
                } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
                    this.nextIntroSlide();
                } else if (e.key === 'ArrowLeft') {
                    this.prevIntroSlide();
                }
            }
        });

        try {
            // Avoid showing inside textbook game iframes
            if (window.location.pathname.includes('/textbooks/')) return;
            const playOnHome = sessionStorage.getItem('pinpoint_play_intro_on_home') === 'true';
            if (playOnHome) {
                sessionStorage.removeItem('pinpoint_play_intro_on_home');
                this.showInfoWidget(true);
                return;
            }
            const widgetDismissed = localStorage.getItem('pinpoint_intro_dismissed_v4') === 'true';
            if (!widgetDismissed) {
                this.showInfoWidget();
            }
        } catch (e) {}
    },

    introCurrentSlide: 0,

    closeInfoWidget(e) {
        if (e) {
            if (typeof e.preventDefault === 'function') e.preventDefault();
            if (typeof e.stopPropagation === 'function') e.stopPropagation();
            if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
        }
        try {
            localStorage.setItem('pinpoint_intro_dismissed_v4', 'true');
            sessionStorage.setItem('pinpoint_intro_dismissed_v4', 'true');
            localStorage.setItem('pinpoint_info_widget_dismissed_v3', 'true');
        } catch (err) {}
        const widget = document.getElementById('pinpoint-info-widget');
        if (widget) {
            widget.classList.add('pinpoint-dismissed');
            widget.style.setProperty('display', 'none', 'important');
            widget.remove();
        }
    },

    setIntroSlide(index) {
        if (index < 0) index = 0;
        if (index > 2) index = 2;
        this.introCurrentSlide = index;

        for (let i = 0; i < 3; i++) {
            const slide = document.getElementById(`pinpoint-intro-slide-${i}`);
            const dot = document.getElementById(`pinpoint-intro-dot-${i}`);
            if (slide) {
                slide.style.setProperty('display', (i === index) ? 'flex' : 'none', 'important');
            }
            if (dot) {
                if (i === index) {
                    dot.style.setProperty('width', '28px', 'important');
                    dot.style.setProperty('border-radius', '99px', 'important');
                    dot.style.setProperty('background', '#3c4043', 'important');
                    dot.style.setProperty('opacity', '1', 'important');
                } else {
                    dot.style.setProperty('width', '8px', 'important');
                    dot.style.setProperty('border-radius', '50%', 'important');
                    dot.style.setProperty('background', '#dadce0', 'important');
                    dot.style.setProperty('opacity', '0.8', 'important');
                }
            }
        }

        const prevBtn = document.getElementById('pinpoint-intro-prev-btn');
        const nextBtn = document.getElementById('pinpoint-intro-next-btn');

        if (prevBtn) {
            if (index === 0) {
                prevBtn.style.setProperty('display', 'none', 'important');
            } else {
                prevBtn.style.setProperty('display', 'inline-flex', 'important');
            }
        }

        if (nextBtn) {
            if (index === 2) {
                // Checkmark button on last slide - circular grey button
                nextBtn.setAttribute('title', 'Done');
                nextBtn.setAttribute('aria-label', 'Done');
                nextBtn.innerHTML = `<span class="material-symbols-sharp notranslate" style="font-size:32px;line-height:1;pointer-events:none;">check</span>`;
            } else {
                // Right arrow button - circular grey button
                nextBtn.setAttribute('title', 'Next');
                nextBtn.setAttribute('aria-label', 'Next');
                nextBtn.innerHTML = `<span class="material-symbols-sharp notranslate" style="font-size:32px;line-height:1;pointer-events:none;">arrow_forward</span>`;
            }
        }
    },

    prevIntroSlide() {
        if (this.introCurrentSlide > 0) {
            this.setIntroSlide(this.introCurrentSlide - 1);
        }
    },

    nextIntroSlide() {
        if (this.introCurrentSlide < 2) {
            this.setIntroSlide(this.introCurrentSlide + 1);
        } else {
            this.closeInfoWidget();
        }
    },

    copyChromeSettingsLink(e) {
        if (e) {
            if (typeof e.preventDefault === 'function') e.preventDefault();
            if (typeof e.stopPropagation === 'function') e.stopPropagation();
        }
        const textToCopy = 'chrome://settings/content/all';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).catch(() => {});
        } else {
            try {
                const ta = document.createElement('textarea');
                ta.value = textToCopy;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            } catch (err) {}
        }

        const btn = document.getElementById('pinpoint-copy-settings-btn');
        const toast = document.getElementById('pinpoint-settings-toast');
        if (btn) {
            btn.innerHTML = `
                <span class="material-symbols-sharp notranslate" style="font-size:18px;line-height:1;">check</span>
                <span>Copied!</span>
            `;
            setTimeout(() => {
                const b = document.getElementById('pinpoint-copy-settings-btn');
                if (b) {
                    b.innerHTML = `
                        <span class="material-symbols-sharp notranslate" style="font-size:18px;line-height:1;">content_copy</span>
                        <span>Copy Link</span>
                    `;
                }
            }, 2500);
        }
        if (toast) {
            toast.style.setProperty('display', 'block', 'important');
            setTimeout(() => {
                const t = document.getElementById('pinpoint-settings-toast');
                if (t) t.style.setProperty('display', 'none', 'important');
            }, 3500);
        }
    },

    async showInfoWidget(force = false) {
        if (!force) {
            const dismissed = localStorage.getItem('pinpoint_intro_dismissed_v4') === 'true';
            if (dismissed) return;
        } else {
            try {
                localStorage.removeItem('pinpoint_intro_dismissed_v4');
                sessionStorage.removeItem('pinpoint_intro_dismissed_v4');
            } catch (e) {}
        }

        if (!document.body) {
            document.addEventListener('DOMContentLoaded', () => this.showInfoWidget(force));
            return;
        }

        // Ensure Material Symbols Sharp is loaded with display=block so raw text never displays
        if (!document.getElementById('pinpoint-sharp-icons-font')) {
            const link = document.createElement('link');
            link.id = 'pinpoint-sharp-icons-font';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block';
            document.head.appendChild(link);
        }

        // Wait for font to load before creating intro DOM so ligature text is never displayed
        try {
            if (document.fonts && document.fonts.load) {
                await Promise.race([
                    document.fonts.load('24px "Material Symbols Sharp"'),
                    new Promise(resolve => setTimeout(resolve, 600))
                ]);
            }
        } catch (e) {}

        let existing = document.getElementById('pinpoint-info-widget');
        if (existing) {
            if (!force && localStorage.getItem('pinpoint_intro_dismissed_v4') === 'true') {
                existing.remove();
                return;
            }
            existing.classList.remove('pinpoint-dismissed');
            existing.style.setProperty('display', 'flex', 'important');
            this.setIntroSlide(0);
            return;
        }

        // Add or update style for fullscreen introduction
        let style = document.getElementById('pinpoint-info-widget-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'pinpoint-info-widget-style';
            document.head.appendChild(style);
        }
        style.textContent = `
            @keyframes pinpointIntroFade {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .material-symbols-sharp {
                font-family: 'Material Symbols Sharp' !important;
                font-weight: normal !important;
                font-style: normal !important;
                font-size: 24px;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24 !important;
                overflow: hidden !important;
                width: 1em !important;
                height: 1em !important;
                text-align: center !important;
                vertical-align: middle !important;
            }
            .pinpoint-intro-fullscreen {
                position: fixed !important;
                inset: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: #ffffff !important;
                z-index: 2147483647 !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
                padding: clamp(20px, 3.5vw, 40px) clamp(24px, 5vw, 64px) !important;
                box-sizing: border-box !important;
                overflow-y: auto !important;
                font-family: 'Google Sans Text', 'Google Sans', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
                animation: pinpointIntroFade 0.2s ease-out !important;
            }
            .pinpoint-intro-top-row {
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                width: 100% !important;
                box-sizing: border-box !important;
                flex-shrink: 0 !important;
            }
            .pinpoint-close-circle-btn {
                height: 32px !important;
                padding: 0 14px 0 10px !important;
                border-radius: 99px !important;
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                color: #5f6368 !important;
                font-size: 13px !important;
                font-weight: 500 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 6px !important;
                cursor: pointer !important;
                transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.1s ease !important;
                user-select: none !important;
            }
            .pinpoint-close-circle-btn:hover {
                background: #e8eaed !important;
                color: #1f1f1f !important;
                border-color: #c4c7c5 !important;
            }
            .pinpoint-close-circle-btn:active {
                transform: scale(0.96) !important;
            }
            .pinpoint-intro-body {
                display: flex !important;
                flex-direction: column !important;
                width: 100% !important;
                margin: auto 0 !important;
                padding: 24px 0 !important;
                box-sizing: border-box !important;
            }
            .pinpoint-intro-slide {
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                text-align: left !important;
                width: 100% !important;
            }
            .pinpoint-intro-header-left {
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                text-align: left !important;
                width: 100% !important;
                max-width: 960px !important;
                box-sizing: border-box !important;
            }
            .pinpoint-intro-title {
                font-size: clamp(32px, 4.4vw, 56px) !important;
                font-weight: 500 !important;
                color: #1f1f1f !important;
                line-height: 1.15 !important;
                letter-spacing: -0.5px !important;
                margin: 0 !important;
                text-align: left !important;
            }
            .pinpoint-intro-subtitle {
                font-size: clamp(15px, 1.6vw, 20px) !important;
                font-weight: 400 !important;
                color: #5f6368 !important;
                line-height: 1.5 !important;
                max-width: 820px !important;
                margin: 12px 0 0 0 !important;
                text-align: left !important;
            }
            .pinpoint-bullet-list {
                display: flex !important;
                flex-direction: column !important;
                gap: 24px !important;
                margin-top: 40px !important;
                width: 100% !important;
                max-width: 960px !important;
                margin-left: 0 !important;
                margin-right: auto !important;
                box-sizing: border-box !important;
            }
            .pinpoint-bullet-item {
                display: flex !important;
                flex-direction: row !important;
                align-items: flex-start !important;
                gap: 20px !important;
                text-align: left !important;
                box-sizing: border-box !important;
            }
            .pinpoint-bullet-circle {
                width: 46px !important;
                height: 46px !important;
                min-width: 46px !important;
                border-radius: 50% !important;
                background: #f1f3f4;
                border: 1px solid #dadce0;
                color: #444746;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
                margin-top: 2px !important;
                box-shadow: 0 1px 3px rgba(60,64,67,0.08) !important;
                transition: transform 0.15s ease, box-shadow 0.15s ease !important;
            }
            .pinpoint-bullet-item:hover .pinpoint-bullet-circle {
                transform: scale(1.08) !important;
                box-shadow: 0 3px 8px rgba(60,64,67,0.16) !important;
            }
            .pinpoint-bullet-content {
                display: flex !important;
                flex-direction: column !important;
                gap: 4px !important;
                flex: 1 !important;
                text-align: left !important;
            }
            .pinpoint-bullet-title {
                font-size: clamp(17px, 1.7vw, 21px) !important;
                font-weight: 500 !important;
                color: #1f1f1f !important;
                line-height: 1.3 !important;
                text-align: left !important;
            }
            .pinpoint-bullet-desc {
                font-size: clamp(14px, 1.35vw, 16px) !important;
                font-weight: 400 !important;
                color: #5f6368 !important;
                line-height: 1.5 !important;
                text-align: left !important;
            }
            .pinpoint-copy-circle-btn {
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                border-radius: 20px !important;
                padding: 7px 18px !important;
                font-size: 13px !important;
                font-weight: 500 !important;
                color: #3c4043 !important;
                cursor: pointer !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 6px !important;
                font-family: inherit !important;
                transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease !important;
            }
            .pinpoint-copy-circle-btn:hover {
                background: #e3e5e8 !important;
                color: #1f1f1f !important;
            }
            .pinpoint-copy-circle-btn:active {
                transform: scale(0.96) !important;
            }
            .pinpoint-intro-bottom-row {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                width: 100% !important;
                box-sizing: border-box !important;
                padding-top: 16px !important;
                margin-top: auto !important;
                flex-shrink: 0 !important;
            }
            .pinpoint-intro-dots {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
            }
            .pinpoint-intro-dot {
                height: 8px !important;
                transition: all 0.25s ease !important;
                cursor: pointer !important;
            }
            .pinpoint-intro-nav-circles {
                display: flex !important;
                align-items: center !important;
                gap: 16px !important;
            }
            .pinpoint-nav-circle-btn {
                width: 64px !important;
                height: 64px !important;
                min-width: 64px !important;
                border-radius: 50% !important;
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                color: #3c4043 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease, border-color 0.15s ease !important;
                user-select: none !important;
                padding: 0 !important;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06) !important;
            }
            .pinpoint-nav-circle-btn:hover {
                background: #e3e5e8 !important;
                color: #1f1f1f !important;
                border-color: #c4c7c5 !important;
                transform: translateY(-1px) !important;
            }
            .pinpoint-nav-circle-btn:active {
                background: #d3d5d8 !important;
                transform: scale(0.95) !important;
            }
            .pinpoint-intro-fullscreen.pinpoint-dismissed {
                display: none !important;
                visibility: hidden !important;
                pointer-events: none !important;
                opacity: 0 !important;
            }
            @media (max-width: 768px) {
                .pinpoint-intro-fullscreen {
                    padding: 20px !important;
                }
            }
        `;

        const container = document.createElement('div');
        container.id = 'pinpoint-info-widget';
        container.className = 'pinpoint-intro-fullscreen';

        container.innerHTML = `
            <!-- Top Row: Close button with icon and text in top-left -->
            <div class="pinpoint-intro-top-row">
                <button id="pinpoint-info-dismiss-btn" class="pinpoint-close-circle-btn" type="button" onclick="TabDisguiser.closeInfoWidget(event)" title="Close" aria-label="Close">
                    <span class="material-symbols-sharp notranslate" style="font-size:16px;line-height:1;pointer-events:none;">close</span>
                    <span>Close</span>
                </button>
            </div>

            <!-- Body Area -->
            <div class="pinpoint-intro-body">
                <!-- Slide 0: Fast Offline Library -->
                <div id="pinpoint-intro-slide-0" class="pinpoint-intro-slide" style="display:flex;">
                    <div class="pinpoint-intro-header-left">
                        <h1 class="pinpoint-intro-title">Instant Offline Library</h1>
                        <p class="pinpoint-intro-subtitle">
                            The Library downloads games directly to your device storage so they load locally without network latency.
                        </p>
                    </div>
                    <div class="pinpoint-bullet-list">
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#fef7e0; border-color:#fce8b2; color:#ea8600;">
                                <span class="material-symbols-sharp notranslate" style="color:#ea8600;">flash_on</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Zero Latency</div>
                                <div class="pinpoint-bullet-desc">Eliminates stream delays and proxy lag so games respond instantly to your inputs.</div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#e8f0fe; border-color:#d2e3fc; color:#1a73e8;">
                                <span class="material-symbols-sharp notranslate" style="color:#1a73e8;">wifi_off</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Works 100% Offline</div>
                                <div class="pinpoint-bullet-desc">Downloaded games run entirely on your machine without needing active school Wi-Fi.</div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#e6f4ea; border-color:#ceead6; color:#137333;">
                                <span class="material-symbols-sharp notranslate" style="color:#137333;">timer</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Instant Loading Times</div>
                                <div class="pinpoint-bullet-desc">Launches games immediately from local storage cache without waiting for re-downloads.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 1: Bit Planes Major Updates -->
                <div id="pinpoint-intro-slide-1" class="pinpoint-intro-slide" style="display:none;">
                    <div class="pinpoint-intro-header-left">
                        <h1 class="pinpoint-intro-title">Bit Planes: Major Updates</h1>
                        <p class="pinpoint-intro-subtitle">
                            The classic pixel plane game has been overhauled with widescreen graphics, local split-screen, and online multiplayer.
                        </p>
                    </div>
                    <div class="pinpoint-bullet-list">
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#f3e8fd; border-color:#e8d0fb; color:#9334e6;">
                                <span class="material-symbols-sharp notranslate" style="color:#9334e6;">aspect_ratio</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Redesigned Widescreen UI</div>
                                <div class="pinpoint-bullet-desc">Modernized interface with crisp HD graphics, smooth flight animations, and responsive controls.</div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#fce8e6; border-color:#fad2cf; color:#d93025;">
                                <span class="material-symbols-sharp notranslate" style="color:#d93025;">sports_esports</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">1v1 Local Split-Screen</div>
                                <div class="pinpoint-bullet-desc">Fly and battle against a friend side-by-side on the exact same keyboard.</div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#e0f2fe; border-color:#bae6fd; color:#0284c7;">
                                <span class="material-symbols-sharp notranslate" style="color:#0284c7;">public</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Real-Time Online Mode</div>
                                <div class="pinpoint-bullet-desc">Join public multiplayer lobbies or create custom room codes to battle players anywhere.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Clear Unused Game Data -->
                <div id="pinpoint-intro-slide-2" class="pinpoint-intro-slide" style="display:none;">
                    <div class="pinpoint-intro-header-left">
                        <h1 class="pinpoint-intro-title">Clear Unused Game Data</h1>
                        <p class="pinpoint-intro-subtitle">
                            Keep your browser fast and prevent storage errors by deleting data from old game sites in 3 easy steps:
                        </p>
                    </div>
                    <div class="pinpoint-bullet-list">
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#e8f0fe; border-color:#d2e3fc; color:#1a73e8;">
                                <span class="material-symbols-sharp notranslate" style="color:#1a73e8;">link</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Step 1: Copy and open this link in a new tab</div>
                                <div class="pinpoint-bullet-desc">Open a new Chrome tab and paste this link into the address bar:</div>
                                <div style="display:flex; align-items:center; gap:12px; margin-top:8px; flex-wrap:wrap;">
                                    <div style="background:#f8f9fa; border:1px solid #dadce0; border-radius:20px; padding:7px 16px; font-family:ui-monospace,SFMono-Regular,Consolas,monospace; font-size:13.5px; color:#1f1f1f; user-select:all;">
                                        chrome://settings/content/all
                                    </div>
                                    <button id="pinpoint-copy-settings-btn" class="pinpoint-copy-circle-btn" type="button" onclick="TabDisguiser.copyChromeSettingsLink(event)">
                                        <span class="material-symbols-sharp notranslate" style="font-size:18px;line-height:1;">content_copy</span>
                                        <span>Copy Link</span>
                                    </button>
                                    <div id="pinpoint-settings-toast" style="display:none; font-size:12.5px; color:#1e8e3e; font-weight:500;">
                                        ✓ Copied to clipboard!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#fff3e0; border-color:#ffe0b2; color:#e65100;">
                                <span class="material-symbols-sharp notranslate" style="color:#e65100;">sort</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Step 2: Change "Sort by" to "Data stored"</div>
                                <div class="pinpoint-bullet-desc">This immediately puts all the largest and heaviest websites straight to the very top.</div>
                            </div>
                        </div>
                        <div class="pinpoint-bullet-item">
                            <div class="pinpoint-bullet-circle" style="background:#fee2e2; border-color:#fecaca; color:#dc2626;">
                                <span class="material-symbols-sharp notranslate" style="color:#dc2626;">delete</span>
                            </div>
                            <div class="pinpoint-bullet-content">
                                <div class="pinpoint-bullet-title">Step 3: Delete data for blocked or unused game sites</div>
                                <div class="pinpoint-bullet-desc">Keep school websites untouched, and clear out old bloated game websites you don't use.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Row: Progress dots on left, big grey circle navigation buttons on right -->
            <div class="pinpoint-intro-bottom-row">
                <div class="pinpoint-intro-dots">
                    <div id="pinpoint-intro-dot-0" class="pinpoint-intro-dot" onclick="TabDisguiser.setIntroSlide(0)" title="Slide 1" style="width:28px; border-radius:99px; background:#3c4043; opacity:1;"></div>
                    <div id="pinpoint-intro-dot-1" class="pinpoint-intro-dot" onclick="TabDisguiser.setIntroSlide(1)" title="Slide 2" style="width:8px; border-radius:50%; background:#dadce0; opacity:0.8;"></div>
                    <div id="pinpoint-intro-dot-2" class="pinpoint-intro-dot" onclick="TabDisguiser.setIntroSlide(2)" title="Slide 3" style="width:8px; border-radius:50%; background:#dadce0; opacity:0.8;"></div>
                </div>
                <div class="pinpoint-intro-nav-circles">
                    <button id="pinpoint-intro-prev-btn" class="pinpoint-nav-circle-btn" type="button" onclick="TabDisguiser.prevIntroSlide()" title="Previous slide" aria-label="Previous slide" style="display:none;">
                        <span class="material-symbols-sharp notranslate" style="font-size:32px;line-height:1;pointer-events:none;">arrow_back</span>
                    </button>
                    <button id="pinpoint-intro-next-btn" class="pinpoint-nav-circle-btn" type="button" onclick="TabDisguiser.nextIntroSlide()" title="Next" aria-label="Next">
                        <span class="material-symbols-sharp notranslate" style="font-size:32px;line-height:1;pointer-events:none;">arrow_forward</span>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(container);
        this.setIntroSlide(0);
    },

    _cmEditingClassId: null,
    _cmSelectedBanner: 'WorldHistory.jpg',
    _cmMakeGamesClass: false,

    async ensureClassManagerStyles() {
        if (!document.getElementById('pinpoint-sharp-icons-font')) {
            const link = document.createElement('link');
            link.id = 'pinpoint-sharp-icons-font';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block';
            document.head.appendChild(link);
        }
        try {
            if (document.fonts && document.fonts.load) {
                await Promise.race([
                    document.fonts.load('24px "Material Symbols Sharp"'),
                    new Promise(resolve => setTimeout(resolve, 350))
                ]);
            }
        } catch (e) {}

        let style = document.getElementById('pinpoint-class-manager-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'pinpoint-class-manager-style';
            document.head.appendChild(style);
        }
        style.textContent = `
            @keyframes pinpointIntroFade {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .material-symbols-sharp {
                font-family: 'Material Symbols Sharp' !important;
                font-weight: normal !important;
                font-style: normal !important;
                font-size: 24px;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24 !important;
                overflow: hidden !important;
                width: 1em !important;
                height: 1em !important;
                text-align: center !important;
                vertical-align: middle !important;
            }
            .pinpoint-intro-fullscreen {
                position: fixed !important;
                inset: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: #ffffff !important;
                z-index: 2147483647 !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
                padding: clamp(20px, 3.5vw, 40px) clamp(24px, 5vw, 64px) !important;
                box-sizing: border-box !important;
                overflow-y: auto !important;
                font-family: 'Google Sans Text', 'Google Sans', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
                animation: pinpointIntroFade 0.2s ease-out !important;
            }
            .pinpoint-intro-top-row {
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                width: 100% !important;
                box-sizing: border-box !important;
                flex-shrink: 0 !important;
            }
            .pinpoint-close-circle-btn {
                height: 32px !important;
                padding: 0 14px 0 10px !important;
                border-radius: 99px !important;
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                color: #5f6368 !important;
                font-size: 13px !important;
                font-weight: 500 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 6px !important;
                cursor: pointer !important;
                transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.1s ease !important;
                user-select: none !important;
            }
            .pinpoint-close-circle-btn:hover {
                background: #e8eaed !important;
                color: #1f1f1f !important;
                border-color: #c4c7c5 !important;
            }
            .pinpoint-intro-body {
                display: flex !important;
                flex-direction: column !important;
                width: 100% !important;
                margin: auto 0 !important;
                padding: 20px 0 !important;
                box-sizing: border-box !important;
            }
            .pinpoint-intro-header-left {
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                text-align: left !important;
                width: 100% !important;
                max-width: 1180px !important;
                box-sizing: border-box !important;
            }
            .pinpoint-intro-title {
                font-size: clamp(28px, 3.6vw, 46px) !important;
                font-weight: 500 !important;
                color: #1f1f1f !important;
                line-height: 1.15 !important;
                letter-spacing: -0.5px !important;
                margin: 0 !important;
                text-align: left !important;
            }
            .pinpoint-intro-subtitle {
                font-size: clamp(14px, 1.4vw, 18px) !important;
                font-weight: 400 !important;
                color: #5f6368 !important;
                line-height: 1.5 !important;
                max-width: 900px !important;
                margin: 10px 0 0 0 !important;
                text-align: left !important;
            }
            .pinpoint-bullet-circle {
                width: 46px !important;
                height: 46px !important;
                min-width: 46px !important;
                border-radius: 50% !important;
                background: #f1f3f4;
                border: 1px solid #dadce0;
                color: #444746;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
                box-shadow: 0 1px 3px rgba(60,64,67,0.08) !important;
                font-weight: 600 !important;
                font-size: 18px !important;
            }
            .pinpoint-copy-circle-btn {
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                border-radius: 20px !important;
                padding: 7px 16px !important;
                font-size: 13px !important;
                font-weight: 500 !important;
                color: #3c4043 !important;
                cursor: pointer !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 6px !important;
                font-family: inherit !important;
                transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease, border-color 0.15s ease !important;
                white-space: nowrap !important;
            }
            .pinpoint-copy-circle-btn:hover {
                background: #e3e5e8 !important;
                color: #1f1f1f !important;
            }
            .pinpoint-copy-circle-btn:active {
                transform: scale(0.96) !important;
            }
            .pinpoint-intro-bottom-row {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                width: 100% !important;
                box-sizing: border-box !important;
                padding-top: 16px !important;
                margin-top: auto !important;
                flex-shrink: 0 !important;
            }
            .pinpoint-nav-circle-btn {
                width: 64px !important;
                height: 64px !important;
                min-width: 64px !important;
                border-radius: 50% !important;
                background: #f1f3f4 !important;
                border: 1px solid #dadce0 !important;
                color: #3c4043 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease, border-color 0.15s ease !important;
                user-select: none !important;
                padding: 0 !important;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06) !important;
            }
            .pinpoint-nav-circle-btn:hover {
                background: #e3e5e8 !important;
                color: #1f1f1f !important;
                border-color: #c4c7c5 !important;
                transform: translateY(-1px) !important;
            }
            .pinpoint-cm-grid {
                display: grid !important;
                grid-template-columns: 1.05fr 1fr !important;
                gap: 28px !important;
                width: 100% !important;
                max-width: 1240px !important;
                margin-top: 24px !important;
                align-items: start !important;
            }
            @media (max-width: 960px) {
                .pinpoint-cm-grid {
                    grid-template-columns: 1fr !important;
                }
            }
            .pinpoint-cm-panel {
                background: #f8f9fa !important;
                border: 1px solid #dadce0 !important;
                border-radius: 24px !important;
                padding: 22px 24px !important;
                box-sizing: border-box !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 14px !important;
            }
            .pinpoint-cm-class-row {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                gap: 12px !important;
                background: #ffffff !important;
                border: 1px solid #dadce0 !important;
                border-radius: 16px !important;
                padding: 11px 14px !important;
                transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease, opacity 0.15s ease !important;
                cursor: grab !important;
                user-select: none !important;
            }
            .pinpoint-cm-class-row:active {
                cursor: grabbing !important;
            }
            .pinpoint-cm-class-row.is-games-class {
                border: 2px solid #1a73e8 !important;
                box-shadow: 0 2px 10px rgba(26,115,232,0.10) !important;
            }
            .pinpoint-cm-class-row.is-dragging {
                opacity: 0.45 !important;
                border-style: dashed !important;
            }
            .pinpoint-cm-class-row.drag-over-top {
                box-shadow: 0 -3px 0 0 #1a73e8 !important;
            }
            .pinpoint-cm-class-row.drag-over-bottom {
                box-shadow: 0 3px 0 0 #1a73e8 !important;
            }
            .pinpoint-cm-drag-handle {
                color: #9aa0a6 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: grab !important;
                flex-shrink: 0 !important;
            }
            .pinpoint-cm-class-row:hover .pinpoint-cm-drag-handle {
                color: #5f6368 !important;
            }
            .pinpoint-cm-input {
                width: 100% !important;
                padding: 10px 14px !important;
                border: 1px solid #dadce0 !important;
                border-radius: 14px !important;
                font-size: 14px !important;
                font-family: inherit !important;
                color: #1f1f1f !important;
                background: #ffffff !important;
                box-sizing: border-box !important;
                outline: none !important;
                transition: border-color 0.15s ease !important;
            }
            .pinpoint-cm-input:focus {
                border-color: #1a73e8 !important;
            }
            .pinpoint-cm-banners {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 8px !important;
                max-height: 220px !important;
                overflow-y: auto !important;
                padding: 3px !important;
            }
            @media (max-width: 520px) {
                .pinpoint-cm-banners {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
            }
        `;
    },

    async openClassManagerModal(editClassId = null) {
        await this.ensureClassManagerStyles();

        const cfg = this.getClassConfig();
        const classes = cfg.classes || [];

        if (editClassId) {
            const target = classes.find(c => c.id === editClassId);
            if (target) {
                this._cmEditingClassId = target.id;
                const rawBanner = String(target.banner || 'WorldHistory.jpg');
                this._cmSelectedBanner = (rawBanner.startsWith('custom_') || rawBanner.startsWith('data:'))
                    ? rawBanner
                    : rawBanner.replace(/^(\.\.\/|\.\/)?images\//, '');
                this._cmMakeGamesClass = !!target.hasGames;
            } else {
                this._cmEditingClassId = null;
                this._cmSelectedBanner = 'Math.jpg';
                this._cmMakeGamesClass = false;
            }
        } else {
            this._cmEditingClassId = null;
            this._cmSelectedBanner = 'Math.jpg';
            this._cmMakeGamesClass = false;
        }

        let modal = document.getElementById('pinpoint-class-manager-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'pinpoint-class-manager-modal';
            modal.className = 'pinpoint-intro-fullscreen';
            document.body.appendChild(modal);
        }
        modal.style.setProperty('display', 'flex', 'important');
        this.renderClassManagerContent();
    },

    closeClassManagerModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const modal = document.getElementById('pinpoint-class-manager-modal');
        if (modal) {
            modal.remove();
        }
    },

    renderClassManagerContent() {
        const modal = document.getElementById('pinpoint-class-manager-modal');
        if (!modal) return;

        const path = (window.__CURRENT_PAGE__ || window.location.pathname || '').toLowerCase();
        const isPages = path.includes('/pages/') || path.includes('\\pages\\') || path.startsWith('pages/');

        const cfg = this.getClassConfig();
        const classes = cfg.classes || [];
        const editingCls = this._cmEditingClassId ? classes.find(c => c.id === this._cmEditingClassId) : null;

        const nameInputEl = document.getElementById('cm-class-name');
        const teacherInputEl = document.getElementById('cm-class-teacher');
        const currentNameVal = editingCls
            ? (nameInputEl && modal.getAttribute('data-editing-id') === editingCls.id ? nameInputEl.value : (editingCls.name || ''))
            : (nameInputEl && !modal.getAttribute('data-editing-id') ? nameInputEl.value : '');
        const currentTeacherVal = editingCls
            ? (teacherInputEl && modal.getAttribute('data-editing-id') === editingCls.id ? teacherInputEl.value : (editingCls.teacher || editingCls.sec || ''))
            : (teacherInputEl && !modal.getAttribute('data-editing-id') ? teacherInputEl.value : '');

        modal.setAttribute('data-editing-id', editingCls ? editingCls.id : '');

        const activeGamesCls = classes.find(c => c.hasGames) || classes[0];
        const fakeCount = classes.filter(c => !c.hasGames).length;

        const classesListHtml = classes.map((cls) => {
            const cName = (cls.name || 'Untitled Class').trim();
            const safeName = this.escapeHtml(cName);
            const teacher = (cls.teacher || cls.sec || '').trim();
            const safeTeacher = this.escapeHtml(teacher);
            const letter = this.escapeHtml((cName[0] || 'C').toUpperCase());
            const rawBanner = String(cls.banner || 'WorldHistory.jpg');
            const bannerFile = (rawBanner.startsWith('custom_') || rawBanner.startsWith('data:'))
                ? rawBanner
                : rawBanner.replace(/^(\.\.\/|\.\/)?images\//, '');
            const theme = this.getClassThemeColor(cName, bannerFile);
            const safeId = this.escapeHtml(cls.id);

            const statusBadge = cls.hasGames
                ? '<span style="display:inline-flex;align-items:center;gap:4px;background:#e8f0fe;color:#1a73e8;border:1px solid #d2e3fc;border-radius:99px;padding:2px 8px;font-size:11px;font-weight:600;"><span class="material-symbols-sharp notranslate" style="font-size:13px;color:#1a73e8;">sports_esports</span>Games</span>'
                : '<span style="display:inline-flex;align-items:center;gap:4px;background:#f1f3f4;color:#5f6368;border:1px solid #dadce0;border-radius:99px;padding:2px 8px;font-size:11px;font-weight:500;">Fake</span>';

            const setGamesBtn = cls.hasGames
                ? '<button type="button" class="pinpoint-copy-circle-btn" style="background:#e6f4ea !important;border-color:#ceead6 !important;color:#137333 !important;padding:6px 11px !important;font-size:12px !important;cursor:default !important;" disabled><span class="material-symbols-sharp notranslate" style="font-size:15px;color:#137333;">check_circle</span><span>Active</span></button>'
                : '<button type="button" class="pinpoint-copy-circle-btn" style="background:#e8f0fe !important;border-color:#d2e3fc !important;color:#1a73e8 !important;padding:6px 11px !important;font-size:12px !important;" onclick="TabDisguiser.setGamesClass(\'' + safeId + '\')"><span class="material-symbols-sharp notranslate" style="font-size:15px;color:#1a73e8;">sports_esports</span><span>Use for Games</span></button>';

            const deleteBtn = classes.length > 1
                ? '<button type="button" class="pinpoint-copy-circle-btn" style="background:#fce8e6 !important;border-color:#fad2cf !important;color:#c5221f !important;padding:6px 9px !important;" onclick="TabDisguiser.deleteClassInManager(\'' + safeId + '\')" title="Remove class"><span class="material-symbols-sharp notranslate" style="font-size:15px;color:#c5221f;">delete</span></button>'
                : '';

            return '<div class="pinpoint-cm-class-row ' + (cls.hasGames ? 'is-games-class' : '') + '" draggable="true" data-class-id="' + safeId + '">' +
                '<div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1;">' +
                    '<span class="pinpoint-cm-drag-handle" title="Drag to reorder"><span class="material-symbols-sharp notranslate" style="font-size:18px;">drag_indicator</span></span>' +
                    '<div class="pinpoint-bullet-circle" style="width:36px !important;height:36px !important;font-size:14px !important;background:' + theme.bg + ';border-color:' + theme.bg + ';color:' + theme.text + ';">' + letter + '</div>' +
                    '<div style="display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;">' +
                        '<div style="display:flex;align-items:center;gap:7px;min-width:0;">' +
                            '<span style="font-size:15px;font-weight:500;color:#1f1f1f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + safeName + '</span>' +
                            statusBadge +
                        '</div>' +
                        (safeTeacher ? '<div style="font-size:12.5px;color:#5f6368;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + safeTeacher + '</div>' : '') +
                    '</div>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">' +
                    setGamesBtn +
                    '<button type="button" class="pinpoint-copy-circle-btn" style="padding:6px 11px !important;font-size:12px !important;" onclick="TabDisguiser.editClassInManager(\'' + safeId + '\')">' +
                        '<span class="material-symbols-sharp notranslate" style="font-size:15px;">edit</span>' +
                        '<span>Edit</span>' +
                    '</button>' +
                    deleteBtn +
                '</div>' +
            '</div>';
        }).join('');

        const customBanners = this.getCustomBanners();
        const allBanners = [
            ...customBanners.map(cb => ({ id: cb.id, name: cb.name || 'Custom', isCustom: true })),
            ...this.CLASSROOM_BANNERS.map(b => ({ id: b.id, name: b.name, isCustom: false }))
        ];

        const bannersHtml = allBanners.map((b) => {
            const isSelected = (b.id === this._cmSelectedBanner);
            const bUrl = this.resolveBannerUrl(b.id, isPages);
            const safeBid = this.escapeHtml(b.id);
            const delBtnHtml = b.isCustom
                ? '<button type="button" onclick="TabDisguiser.deleteCustomBanner(\'' + safeBid + '\', event)" title="Delete custom image" style="position:absolute;top:4px;left:4px;width:18px;height:18px;border-radius:50%;border:none;background:rgba(0,0,0,0.65);color:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:2;"><span class="material-symbols-sharp notranslate" style="font-size:12px;color:#fff;">close</span></button>'
                : '';
            return '<div onclick="TabDisguiser.selectClassManagerBanner(\'' + safeBid + '\')" style="height:54px;border-radius:12px;cursor:pointer;position:relative;background-image:url(\'' + bUrl + '\');background-size:cover;background-position:center;transition:all 0.15s ease;box-shadow:0 1px 3px rgba(0,0,0,0.12);' + (isSelected ? 'outline:3px solid #1a73e8;outline-offset:1px;' : 'outline:1px solid rgba(0,0,0,0.1);') + '">' +
                '<div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 65%);border-radius:12px;pointer-events:none;"></div>' +
                delBtnHtml +
                '<div style="position:absolute;bottom:4px;left:7px;right:7px;font-size:11px;font-weight:500;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 1px 2px rgba(0,0,0,0.8);">' + this.escapeHtml(b.name) + '</div>' +
                (isSelected ? '<span class="material-symbols-sharp notranslate" style="position:absolute;top:4px;right:4px;font-size:14px;background:#1a73e8;color:#fff;border-radius:50%;padding:2px;width:18px !important;height:18px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;">check</span>' : '') +
            '</div>';
        }).join('');

        modal.innerHTML = `
            <div class="pinpoint-intro-top-row">
                <button class="pinpoint-close-circle-btn" type="button" onclick="TabDisguiser.closeClassManagerModal(event)" title="Close" aria-label="Close">
                    <span class="material-symbols-sharp notranslate" style="font-size:16px;line-height:1;pointer-events:none;">close</span>
                    <span>Close</span>
                </button>
            </div>

            <div class="pinpoint-intro-body">
                <div class="pinpoint-intro-header-left">
                    <h1 class="pinpoint-intro-title">Manage Classes</h1>
                    <p class="pinpoint-intro-subtitle">
                        Drag classes to reorder, add fake classes, or choose where games live.
                    </p>
                </div>

                <div class="pinpoint-cm-grid">
                    <!-- Left Column: Class List & Active Games Selector -->
                    <div class="pinpoint-cm-panel">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div class="pinpoint-bullet-circle" style="background:#e8f0fe;border-color:#d2e3fc;color:#1a73e8;">
                                <span class="material-symbols-sharp notranslate" style="color:#1a73e8;">reorder</span>
                            </div>
                            <div>
                                <div style="font-size:17px;font-weight:500;color:#1f1f1f;">Your Classes</div>
                                <div style="font-size:13px;color:#5f6368;">Drag to rearrange order or pick your active games class.</div>
                            </div>
                        </div>

                        <div id="cm-classes-list" style="display:flex;flex-direction:column;gap:8px;max-height:430px;overflow-y:auto;padding:2px;">
                            ${classesListHtml}
                        </div>
                    </div>

                    <!-- Right Column: Add Fake Class / Edit Class Form -->
                    <div class="pinpoint-cm-panel">
                        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
                            <div style="display:flex;align-items:center;gap:12px;">
                                <div class="pinpoint-bullet-circle" style="background:${editingCls ? '#fef7e0' : '#e6f4ea'};border-color:${editingCls ? '#fce8b2' : '#ceead6'};color:${editingCls ? '#ea8600' : '#137333'};">
                                    <span class="material-symbols-sharp notranslate" style="color:${editingCls ? '#ea8600' : '#137333'};">${editingCls ? 'edit' : 'add'}</span>
                                </div>
                                <div>
                                    <div style="font-size:17px;font-weight:500;color:#1f1f1f;">${editingCls ? 'Edit Class' : 'New Class'}</div>
                                    <div style="font-size:13px;color:#5f6368;">${editingCls ? 'Update class details and banner.' : 'Add a fake class card to Home and sidebar.'}</div>
                                </div>
                            </div>
                            ${editingCls ? `
                                <button type="button" class="pinpoint-copy-circle-btn" onclick="TabDisguiser.cancelEditClassInManager()">
                                    <span class="material-symbols-sharp notranslate" style="font-size:15px;">close</span>
                                    <span>Cancel</span>
                                </button>
                            ` : ''}
                        </div>

                        <div style="display:flex;flex-direction:column;gap:11px;">
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                                <div>
                                    <label style="display:block;font-size:12px;font-weight:500;color:#5f6368;margin-bottom:5px;">Class Name</label>
                                    <input id="cm-class-name" class="pinpoint-cm-input" type="text" placeholder="e.g. AP Chemistry" value="${this.escapeHtml(currentNameVal)}" />
                                </div>
                                <div>
                                    <label style="display:block;font-size:12px;font-weight:500;color:#5f6368;margin-bottom:5px;">Teacher / Section</label>
                                    <input id="cm-class-teacher" class="pinpoint-cm-input" type="text" placeholder="e.g. Period 4" value="${this.escapeHtml(currentTeacherVal)}" />
                                </div>
                            </div>
                            <div>
                                <label style="display:block;font-size:12px;font-weight:500;color:#5f6368;margin-bottom:6px;">Role</label>
                                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                                    <button type="button" class="pinpoint-copy-circle-btn" style="${!this._cmMakeGamesClass ? 'background:#1f1f1f !important;border-color:#1f1f1f !important;color:#ffffff !important;' : ''}" onclick="TabDisguiser.setClassManagerRole(false)">
                                        <span class="material-symbols-sharp notranslate" style="font-size:15px;color:${!this._cmMakeGamesClass ? '#ffffff' : '#5f6368'};">block</span>
                                        <span>Fake Class</span>
                                    </button>
                                    <button type="button" class="pinpoint-copy-circle-btn" style="${this._cmMakeGamesClass ? 'background:#1a73e8 !important;border-color:#1a73e8 !important;color:#ffffff !important;' : ''}" onclick="TabDisguiser.setClassManagerRole(true)">
                                        <span class="material-symbols-sharp notranslate" style="font-size:15px;color:${this._cmMakeGamesClass ? '#ffffff' : '#1a73e8'};">sports_esports</span>
                                        <span>Games Class</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;gap:8px;">
                                    <label style="font-size:12px;font-weight:500;color:#5f6368;">Banner Image</label>
                                    <button type="button" class="pinpoint-copy-circle-btn" style="padding:5px 11px !important;font-size:12px !important;" onclick="TabDisguiser.triggerClassManagerBannerUpload()">
                                        <span class="material-symbols-sharp notranslate" style="font-size:15px;color:#1a73e8;">upload</span>
                                        <span>Upload Image</span>
                                    </button>
                                    <input id="cm-banner-upload-input" type="file" accept="image/*" style="display:none;" onchange="TabDisguiser.handleClassManagerBannerUpload(event)" />
                                </div>
                                <div id="cm-banners-grid" class="pinpoint-cm-banners">
                                    ${bannersHtml}
                                </div>
                            </div>
                            <div style="display:flex;justify-content:flex-end;margin-top:2px;">
                                <button type="button" class="pinpoint-copy-circle-btn" style="background:#1a73e8 !important;border-color:#1a73e8 !important;color:#ffffff !important;padding:9px 20px !important;font-size:13.5px !important;" onclick="TabDisguiser.submitClassManagerForm()">
                                    <span class="material-symbols-sharp notranslate" style="font-size:17px;color:#ffffff;">${editingCls ? 'save' : 'add_circle'}</span>
                                    <span>${editingCls ? 'Save Changes' : 'Add Class'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pinpoint-intro-bottom-row">
                <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                    <span style="background:#f1f3f4;border:1px solid #dadce0;border-radius:99px;padding:6px 14px;font-size:13px;color:#3c4043;font-weight:500;">
                        Games in <b style="color:#1a73e8;">${this.escapeHtml(activeGamesCls ? activeGamesCls.name : 'World History')}</b> • ${fakeCount} fake ${fakeCount === 1 ? 'class' : 'classes'}
                    </span>
                </div>
                <div class="pinpoint-intro-nav-circles">
                    <button class="pinpoint-nav-circle-btn" type="button" onclick="TabDisguiser.closeClassManagerModal(event)" title="Done" aria-label="Done">
                        <span class="material-symbols-sharp notranslate" style="font-size:32px;line-height:1;pointer-events:none;">check</span>
                    </button>
                </div>
            </div>
        `;

        this.bindClassManagerListDragAndDrop();
    },

    bindClassManagerListDragAndDrop() {
        const listEl = document.getElementById('cm-classes-list');
        if (!listEl || listEl.dataset.cmDndBound === 'true') return;
        listEl.dataset.cmDndBound = 'true';

        let draggedId = null;

        listEl.addEventListener('dragstart', (e) => {
            if (e.target && e.target.closest && e.target.closest('button')) {
                e.preventDefault();
                return;
            }
            const row = e.target.closest ? e.target.closest('.pinpoint-cm-class-row[data-class-id]') : null;
            if (!row) return;
            draggedId = row.getAttribute('data-class-id');
            row.classList.add('is-dragging');
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = 'move';
                try { e.dataTransfer.setData('text/plain', draggedId); } catch (err) {}
            }
        });

        listEl.addEventListener('dragover', (e) => {
            if (!draggedId) return;
            const overRow = e.target.closest ? e.target.closest('.pinpoint-cm-class-row[data-class-id]') : null;
            if (!overRow) return;
            const overId = overRow.getAttribute('data-class-id');
            if (!overId || overId === draggedId) return;
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

            listEl.querySelectorAll('.pinpoint-cm-class-row').forEach(r => {
                r.classList.remove('drag-over-top', 'drag-over-bottom');
            });
            const rect = overRow.getBoundingClientRect();
            const isAfter = (e.clientY - rect.top) > (rect.height / 2);
            overRow.classList.add(isAfter ? 'drag-over-bottom' : 'drag-over-top');
        });

        listEl.addEventListener('dragleave', (e) => {
            const overRow = e.target.closest ? e.target.closest('.pinpoint-cm-class-row[data-class-id]') : null;
            if (overRow && !overRow.contains(e.relatedTarget)) {
                overRow.classList.remove('drag-over-top', 'drag-over-bottom');
            }
        });

        listEl.addEventListener('drop', (e) => {
            if (!draggedId) return;
            e.preventDefault();
            const overRow = e.target.closest ? e.target.closest('.pinpoint-cm-class-row[data-class-id]') : null;
            listEl.querySelectorAll('.pinpoint-cm-class-row').forEach(r => {
                r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
            });
            if (!overRow) {
                draggedId = null;
                return;
            }
            const overId = overRow.getAttribute('data-class-id');
            if (!overId || overId === draggedId) {
                draggedId = null;
                return;
            }
            const rect = overRow.getBoundingClientRect();
            const insertAfter = (e.clientY - rect.top) > (rect.height / 2);
            const fromId = draggedId;
            draggedId = null;
            this.reorderClasses(fromId, overId, insertAfter);
        });

        listEl.addEventListener('dragend', () => {
            draggedId = null;
            listEl.querySelectorAll('.pinpoint-cm-class-row').forEach(r => {
                r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
            });
        });
    },

    triggerClassManagerBannerUpload() {
        const input = document.getElementById('cm-banner-upload-input');
        if (input) input.click();
    },

    async handleClassManagerBannerUpload(e) {
        const file = e && e.target && e.target.files ? e.target.files[0] : null;
        if (!file) return;
        try {
            const entry = await this.processUploadedBannerFile(file);
            this._cmSelectedBanner = entry.id;
            this.renderClassManagerContent();
            if (typeof window.showPinpointToast === 'function') {
                window.showPinpointToast('Uploaded banner "' + entry.name + '"', 'success');
            }
        } catch (err) {
            if (typeof window.showPinpointToast === 'function') {
                window.showPinpointToast('Could not upload image', 'error');
            }
        }
    },

    selectClassManagerBanner(bannerId) {
        this._cmSelectedBanner = bannerId;
        this.renderClassManagerContent();
    },

    setClassManagerRole(makeGames) {
        this._cmMakeGamesClass = !!makeGames;
        this.renderClassManagerContent();
    },

    editClassInManager(classId) {
        const cfg = this.getClassConfig();
        const target = (cfg.classes || []).find(c => c.id === classId);
        if (!target) return;
        this._cmEditingClassId = target.id;
        const rawBanner = String(target.banner || 'WorldHistory.jpg');
        this._cmSelectedBanner = (rawBanner.startsWith('custom_') || rawBanner.startsWith('data:'))
            ? rawBanner
            : rawBanner.replace(/^(\.\.\/|\.\/)?images\//, '');
        this._cmMakeGamesClass = !!target.hasGames;
        const modal = document.getElementById('pinpoint-class-manager-modal');
        if (modal) modal.removeAttribute('data-editing-id');
        this.renderClassManagerContent();
    },

    cancelEditClassInManager() {
        this._cmEditingClassId = null;
        this._cmSelectedBanner = 'Math.jpg';
        this._cmMakeGamesClass = false;
        const modal = document.getElementById('pinpoint-class-manager-modal');
        if (modal) {
            modal.removeAttribute('data-editing-id');
            const n = document.getElementById('cm-class-name');
            const t = document.getElementById('cm-class-teacher');
            if (n) n.value = '';
            if (t) t.value = '';
        }
        this.renderClassManagerContent();
    },

    setGamesClass(classId) {
        const cfg = this.getClassConfig();
        if (!Array.isArray(cfg.classes)) return;
        cfg.classes.forEach(c => {
            c.hasGames = (c.id === classId);
        });
        this.saveClassConfig(cfg);
        if (this._cmEditingClassId === classId) {
            this._cmMakeGamesClass = true;
        } else if (this._cmEditingClassId) {
            this._cmMakeGamesClass = false;
        }
        this.renderClassManagerContent();
        if (typeof window.showPinpointToast === 'function') {
            const active = cfg.classes.find(c => c.id === classId);
            window.showPinpointToast('Games moved to "' + (active ? active.name : 'Class') + '"', 'success');
        }
    },

    deleteClassInManager(classId) {
        const cfg = this.getClassConfig();
        if (!Array.isArray(cfg.classes) || cfg.classes.length <= 1) return;
        const removed = cfg.classes.find(c => c.id === classId);
        cfg.classes = cfg.classes.filter(c => c.id !== classId);
        if (!cfg.classes.some(c => c.hasGames)) {
            cfg.classes[0].hasGames = true;
        }
        this.saveClassConfig(cfg);
        if (this._cmEditingClassId === classId) {
            this._cmEditingClassId = null;
            this._cmSelectedBanner = 'Math.jpg';
            this._cmMakeGamesClass = false;
        }
        this.renderClassManagerContent();
        if (typeof window.showPinpointToast === 'function' && removed) {
            window.showPinpointToast('Removed class "' + removed.name + '"', 'info');
        }
    },

    submitClassManagerForm() {
        const nameInput = document.getElementById('cm-class-name');
        const teacherInput = document.getElementById('cm-class-teacher');
        const nameVal = (nameInput ? nameInput.value.trim() : '') || 'Untitled Class';
        const teacherVal = teacherInput ? teacherInput.value.trim() : '';
        const bannerVal = this._cmSelectedBanner || 'WorldHistory.jpg';

        const cfg = this.getClassConfig();
        if (!Array.isArray(cfg.classes)) cfg.classes = [];

        if (this._cmEditingClassId) {
            const target = cfg.classes.find(c => c.id === this._cmEditingClassId);
            if (target) {
                target.name = nameVal;
                target.teacher = teacherVal;
                target.sec = teacherVal;
                target.banner = bannerVal;
                if (this._cmMakeGamesClass) {
                    cfg.classes.forEach(c => { c.hasGames = (c.id === target.id); });
                } else if (target.hasGames && cfg.classes.length > 1) {
                    target.hasGames = false;
                    const fallback = cfg.classes.find(c => c.id !== target.id);
                    if (fallback) fallback.hasGames = true;
                }
            }
            this._cmEditingClassId = null;
            this._cmSelectedBanner = 'Math.jpg';
            this._cmMakeGamesClass = false;
            this.saveClassConfig(cfg);
            const modal = document.getElementById('pinpoint-class-manager-modal');
            if (modal) modal.removeAttribute('data-editing-id');
            if (nameInput) nameInput.value = '';
            if (teacherInput) teacherInput.value = '';
            this.renderClassManagerContent();
            if (typeof window.showPinpointToast === 'function') {
                window.showPinpointToast('Updated "' + nameVal + '"', 'success');
            }
        } else {
            const newId = 'class_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
            if (this._cmMakeGamesClass) {
                cfg.classes.forEach(c => { c.hasGames = false; });
            }
            cfg.classes.push({
                id: newId,
                name: nameVal,
                teacher: teacherVal,
                sec: teacherVal,
                banner: bannerVal,
                hasGames: !!this._cmMakeGamesClass
            });
            this._cmSelectedBanner = 'Math.jpg';
            this._cmMakeGamesClass = false;
            this.saveClassConfig(cfg);
            if (nameInput) nameInput.value = '';
            if (teacherInput) teacherInput.value = '';
            this.renderClassManagerContent();
            if (typeof window.showPinpointToast === 'function') {
                window.showPinpointToast('Added class "' + nameVal + '"', 'success');
            }
        }
    },

    openPopout(file, title) {
        if (!file) return null;
        const resolvedTitle = title || 'Textbook';
        const currentOrigin = (window.location.origin && window.location.origin !== 'null' && !window.location.origin.startsWith('about:')) 
            ? window.location.origin 
            : (localStorage.getItem('pinpoint_entry_origin') || localStorage.getItem('pinpoint_return_origin') || '');
        const cleanOrigin = currentOrigin ? currentOrigin.replace(/\/$/, '') : '';
        const currentUrl = (window.location.href && !window.location.href.startsWith('about:')) ? window.location.href : (cleanOrigin ? (cleanOrigin + '/pages/classwork-history.html') : 'pages/classwork-history.html');
        const currentHost = window.location.host || window.location.hostname || 'pinpoint-edu';

        try {
            if (currentUrl) localStorage.setItem('pinpoint_return_url', currentUrl);
            if (currentOrigin) localStorage.setItem('pinpoint_return_origin', currentOrigin);
            if (currentHost) localStorage.setItem('pinpoint_return_host', currentHost);
        } catch (e) {}

        let gameSrc = file;
        if (!file.startsWith('http://') && !file.startsWith('https://')) {
            if (file.startsWith('../')) {
                gameSrc = cleanOrigin + '/' + file.replace(/^\.\.\//, '');
            } else if (file.startsWith('./')) {
                gameSrc = cleanOrigin + '/' + file.replace(/^\.\//, '');
            } else if (!file.startsWith('/')) {
                gameSrc = cleanOrigin + '/' + file;
            } else {
                gameSrc = cleanOrigin + file;
            }
        }

        const win = window.open('about:blank', '_blank');
        if (!win) {
            if (typeof showPinpointToast === 'function') {
                showPinpointToast('Please allow popups in your browser to open this tab.', 'warning');
            } else {
                alert('Please allow popups to open about:blank window.');
            }
            return null;
        }

        const popoutTitle = (this.getCanonicalPageTitle && this.getCanonicalPageTitle()) || 'Classwork for World History - Classroom';
        const faviconUrl = cleanOrigin ? `${cleanOrigin}/favicons/google-classroom.png` : 'favicons/google-classroom.png';
        const isFavorited = (function() {
            try {
                let clean = file.split('?')[0];
                while (clean.startsWith('../')) clean = clean.slice(3);
                while (clean.startsWith('./')) clean = clean.slice(2);
                while (clean.startsWith('/')) clean = clean.slice(1);
                const lib = localStorage.getItem('pinpoint_library');
                if (lib && (JSON.parse(lib).includes(file) || JSON.parse(lib).includes(clean))) return true;
                const raw = localStorage.getItem('pinpoint_favorites');
                if (raw && (JSON.parse(raw).includes(file) || JSON.parse(raw).includes(clean))) return true;
            } catch(e) {}
            return false;
        })();

        const baseHref = cleanOrigin ? (cleanOrigin + '/') : '';

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${baseHref ? `<base href="${baseHref}">` : ''}
  <title>${popoutTitle}</title>
  <link rel="icon" type="image/png" href="${faviconUrl}">
  <link rel="shortcut icon" type="image/png" href="${faviconUrl}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..200" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #ffffff; font-family: 'Google Sans', Roboto, Arial, sans-serif; display: flex; flex-direction: column; }
    .runner-header {
      min-height: 48px;
      height: 48px;
      border-bottom: 1px solid #dadce0;
      background: #fafbfc;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      user-select: none;
      gap: 8px;
      position: relative;
      z-index: 100;
    }
    .runner-title {
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #202124;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 26vw;
      margin: 0 4px;
    }
    .runner-back-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #5f6368;
      transition: all 0.18s ease;
      outline: none;
      padding: 0;
      flex-shrink: 0;
    }
    .runner-back-btn:hover {
      background: #f1f3f4;
      color: #202124;
    }
    .runner-circle-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid #dadce0;
      background: #ffffff;
      color: #5f6368;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.18s ease;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      box-sizing: border-box;
      text-decoration: none;
      outline: none;
      padding: 0;
      flex-shrink: 0;
    }
    .runner-circle-btn:hover {
      background: #f1f3f4;
      border-color: #dadce0;
      color: #202124;
    }
    .runner-circle-btn-primary {
      color: #1a73e8;
    }
    .runner-circle-btn-primary:hover {
      background: #e8f0fe;
      color: #1a73e8;
      border-color: #d2e3fc;
    }
    .runner-pill-btn {
      height: 34px;
      border-radius: 18px;
      border: 1px solid #dadce0;
      background: #ffffff;
      color: #3c4043;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 12px;
      cursor: pointer;
      transition: all 0.18s ease;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      box-sizing: border-box;
      text-decoration: none;
      outline: none;
      flex-shrink: 0;
      user-select: none;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 500;
    }
    .runner-pill-btn:hover {
      background: #f1f3f4;
      border-color: #dadce0;
      color: #202124;
    }
    .runner-pill-btn-danger {
      color: #d93025;
      border-color: #fce8e6;
      background: #fdf2f2;
    }
    .runner-pill-btn-danger:hover {
      background: #fce8e6;
      border-color: #fad2cf;
      color: #c5221f;
    }
    .runner-pill-btn-primary {
      color: #1a73e8;
      border-color: #dadce0;
      background: #ffffff;
    }
    .runner-pill-btn-primary:hover {
      background: #e8f0fe;
      border-color: #d2e3fc;
      color: #1a73e8;
    }
    .runner-pill-btn.starred {
      color: #b06000;
      background: #fef7e0;
      border-color: #f9ab00;
    }
    .runner-mono-segment {
      display: inline-flex;
      align-items: center;
      background: #eef2f6;
      border-radius: 20px;
      padding: 3px 4px;
      gap: 2px;
      border: 1px solid #e0e4e9;
      box-sizing: border-box;
      height: 34px;
      flex-shrink: 0;
    }
    .runner-mono-label {
      display: inline-flex;
      align-items: center;
      color: #5f6368;
      padding: 0 4px;
    }
    .runner-mono-btn {
      width: 24px;
      height: 24px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: #5f6368;
      font-size: 12px;
      font-weight: 500;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.18s ease;
      padding: 0;
      outline: none;
    }
    .runner-mono-btn:hover {
      color: #202124;
      background: rgba(255, 255, 255, 0.6);
    }
    .runner-mono-btn.active {
      background: #ffffff;
      color: #1a73e8;
      font-weight: 500;
      box-shadow: 0 1px 3px rgba(60,64,67,0.15), 0 1px 2px rgba(60,64,67,0.1);
    }
    .runner-clock-pill {
      font-size: 13px;
      font-weight: 500;
      color: #3c4043;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-variant-numeric: tabular-nums;
      background: #eef2f6;
      border-radius: 18px;
      padding: 6px 12px;
      white-space: nowrap;
      border: 1px solid #e0e4e9;
      display: inline-flex;
      align-items: center;
      margin-left: 4px;
      user-select: none;
      flex-shrink: 0;
    }
    .runner-header [data-tooltip] { position: relative; }
    .runner-header [data-tooltip]::after {
      content: attr(data-tooltip);
      position: absolute;
      top: calc(100% + 7px);
      left: 50%;
      transform: translateX(-50%) translateY(-3px) scale(0.95);
      background: #ffffff;
      color: #202124;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 11.5px;
      font-weight: 500;
      white-space: nowrap;
      padding: 4px 9px;
      border-radius: 6px;
      border: 1px solid #dadce0;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
      z-index: 1000000;
      box-shadow: 0 4px 14px rgba(0,0,0,0.14);
    }
    .runner-header [data-tooltip]::before {
      content: '';
      position: absolute;
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent #ffffff transparent;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s ease, visibility 0.15s ease;
      pointer-events: none;
      z-index: 1000000;
    }
    .runner-header [data-tooltip]:hover::after { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0) scale(1); }
    .runner-header [data-tooltip]:hover::before { opacity: 1; visibility: visible; }
    .runner-header [data-tooltip-pos="right"]::after { left: auto; right: 0; transform: translateY(-3px) scale(0.95); }
    .runner-header [data-tooltip-pos="right"]::before { left: auto; right: 12px; transform: none; }
    .runner-header [data-tooltip-pos="right"]:hover::after { transform: translateY(0) scale(1); }
    .runner-header [data-tooltip-pos="left"]::after { left: 0; transform: translateY(-3px) scale(0.95); }
    .runner-header [data-tooltip-pos="left"]::before { left: 14px; transform: none; }
    .runner-header [data-tooltip-pos="left"]:hover::after { transform: translateY(0) scale(1); }
    .game-iframe { width: 100%; flex: 1; border: none; background: #ffffff; }
    span.material-symbols-outlined { font-family: 'Material Symbols Outlined' !important; font-size: 20px; line-height: 1; display: inline-flex; align-items: center; justify-content: center; }
    @keyframes runner-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .runner-saving-icon {
      animation: runner-spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .runner-pill-btn.saving {
      color: #1a73e8 !important;
      background: #e8f0fe !important;
      border-color: #1a73e8 !important;
    }
  </style>
  ${cleanOrigin ? `<script src="${cleanOrigin}/db.js"><\/script>` : '<script src="db.js"><\/script>'}
  ${cleanOrigin ? `<script src="${cleanOrigin}/scripts/about-blank-nav.js"><\/script>` : '<script src="scripts/about-blank-nav.js"><\/script>'}
</head>
<body>
  <div class="runner-header">
    <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
      <button onclick="returnToWebsite()" tabindex="-1" class="runner-back-btn" data-tooltip="Close & Return" data-tooltip-pos="left" aria-label="Close & Return">
        <span class="material-symbols-outlined" aria-hidden="true" style="font-size:22px;line-height:1;">arrow_back</span>
      </button>
      <span id="runner-title" class="runner-title">${resolvedTitle}</span>
      <a href="https://forms.gle/EnzAhDYTACGkM2oYA" target="_blank" rel="noopener noreferrer" tabindex="-1" class="runner-pill-btn runner-pill-btn-danger" data-tooltip="Leave Feedback" aria-label="Feedback">
        <span class="material-symbols-outlined notranslate" style="font-size:18px;line-height:1;">description</span>
        <span>Feedback</span>
      </a>
      <span id="runner-clock" class="runner-clock-pill" data-tooltip="Live Clock" aria-label="Live Clock"></span>
    </div>
    <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;flex:1;min-width:0;white-space:nowrap;">
      <div class="runner-mono-segment" data-tooltip="Color Filter">
        <span class="material-symbols-outlined notranslate runner-mono-label" style="font-size:16px;line-height:1;" aria-label="Monochrome Filter">contrast</span>
        <button id="mono-lvl-1" onclick="setMonochromeLevel(1)" tabindex="-1" class="runner-mono-btn active" aria-label="Full Color (1)">1</button>
        <button id="mono-lvl-2" onclick="setMonochromeLevel(2)" tabindex="-1" class="runner-mono-btn" aria-label="60% Monochrome (2)">2</button>
        <button id="mono-lvl-3" onclick="setMonochromeLevel(3)" tabindex="-1" class="runner-mono-btn" aria-label="100% Monochrome (3)">3</button>
      </div>
      <button id="runner-lib-btn" onclick="togglePopoutFav()" tabindex="-1" class="runner-pill-btn runner-pill-btn-primary ${isFavorited ? 'starred' : ''}" data-tooltip="${isFavorited ? 'In Library (Click to remove)' : 'Save to Library'}" aria-label="Library">
        <span class="material-symbols-outlined notranslate" id="popout-fav-icon" aria-hidden="true" style="font-size:19px;line-height:1;${isFavorited ? "font-variation-settings:'FILL' 1;color:#1a73e8;" : ""}">${isFavorited ? 'bookmark' : 'bookmark_border'}</span>
        <span id="popout-fav-text">${isFavorited ? 'In Library' : 'Add to Library'}</span>
      </button>
      <button onclick="toggleFullscreen()" tabindex="-1" class="runner-circle-btn runner-circle-btn-primary" data-tooltip="Fullscreen" data-tooltip-pos="right" aria-label="Fullscreen">
        <span class="material-symbols-outlined" aria-hidden="true" style="font-size:20px;line-height:1;">fullscreen</span>
      </button>
    </div>
  </div>
  <iframe id="game-frame" class="game-iframe" src="${gameSrc}" allow="clipboard-write; clipboard-read; fullscreen; gamepad; autoplay" allowfullscreen></iframe>
  <script>
    const LOCKED_POPOUT_TITLE = ${JSON.stringify(popoutTitle)};
    try {
      const pNativeDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
      Object.defineProperty(document, 'title', {
        configurable: true,
        enumerable: true,
        get: () => LOCKED_POPOUT_TITLE,
        set: (v) => { if (pNativeDesc && pNativeDesc.set) pNativeDesc.set.call(document, LOCKED_POPOUT_TITLE); }
      });
    } catch(e) {}
    const pTitleTag = document.querySelector('title');
    if (pTitleTag) {
      new MutationObserver(() => {
        if (pTitleTag.textContent !== LOCKED_POPOUT_TITLE) pTitleTag.textContent = LOCKED_POPOUT_TITLE;
      }).observe(pTitleTag, { childList: true, characterData: true, subtree: true });
    }
    setInterval(() => {
      if (document.title !== LOCKED_POPOUT_TITLE) document.title = LOCKED_POPOUT_TITLE;
    }, 150);

    const gameFrame = document.getElementById('game-frame');
    if (gameFrame) {
      gameFrame.addEventListener('load', () => {
        try {
          if (gameFrame.contentWindow && gameFrame.contentWindow.document) {
            const gDoc = gameFrame.contentWindow.document;
            Object.defineProperty(gDoc, 'title', {
              configurable: true,
              get: () => LOCKED_POPOUT_TITLE,
              set: () => {}
            });
            const gt = gDoc.querySelector('title');
            if (gt) {
              gt.textContent = LOCKED_POPOUT_TITLE;
              new MutationObserver(() => {
                if (gt.textContent !== LOCKED_POPOUT_TITLE) gt.textContent = LOCKED_POPOUT_TITLE;
              }).observe(gt, { childList: true, characterData: true, subtree: true });
            }
          }
        } catch(e) {}
      });
    }

    const TARGET_FILE = ${JSON.stringify(file)};
    let returnUrl = ${JSON.stringify(currentUrl)};

    async function navigateToAboutBlankPage(targetUrl) {
      window.__IS_PANIC_TRIGGERED__ = true;
      window.onbeforeunload = null;
      try {
        const origin = ${JSON.stringify(cleanOrigin)} || localStorage.getItem('pinpoint_entry_origin') || window.location.origin;
        let cleanTarget = targetUrl;
        if (cleanTarget.startsWith('/')) cleanTarget = cleanTarget.substring(1);
        let cleanBase = origin.endsWith('/') ? origin.slice(0, -1) : origin;
        const fullUrl = cleanTarget.startsWith('http') ? cleanTarget : (cleanBase + '/' + cleanTarget);
        const res = await fetch(fullUrl);
        let html = await res.text();
        const baseTag = '<base href="' + (origin.endsWith('/') ? origin : origin + '/') + '">';
        if (html.includes('<head>')) {
          html = html.replace('<head>', '<head>' + baseTag);
        } else {
          html = baseTag + html;
        }
        document.open();
        document.write(html);
        document.close();
      } catch(err) {
        console.error('Nav failed:', err);
        const origin = ${JSON.stringify(cleanOrigin)} || localStorage.getItem('pinpoint_entry_origin') || '';
        let cleanBase = origin.endsWith('/') ? origin.slice(0, -1) : origin;
        window.location.href = cleanBase ? (cleanBase + '/' + targetUrl) : targetUrl;
      }
    }

    function returnToWebsite() {
      window.__IS_PANIC_TRIGGERED__ = true;
      window.onbeforeunload = null;
      try {
        if (window.opener && !window.opener.closed) {
          try { window.opener.focus(); } catch(e) {}
          window.close();
        }
      } catch (e) {}
      try {
        window.close();
      } catch (e) {}
      setTimeout(() => {
        navigateToAboutBlankPage('pages/classwork-history.html');
      }, 90);
    }

    function setMonochromeLevel(level) {
      const gf = document.getElementById('game-frame');
      ['mono-lvl-1', 'mono-lvl-2', 'mono-lvl-3'].forEach((id, idx) => {
        const b = document.getElementById(id);
        if (b) b.classList.toggle('active', idx + 1 === level);
      });
      if (gf) {
        if (level === 2) gf.style.filter = 'grayscale(60%)';
        else if (level === 3) gf.style.filter = 'grayscale(100%)';
        else gf.style.filter = 'none';
      }
    }

    function updateClocks() {
      const now = new Date();
      let format = '12';
      let showSeconds = true;
      let showAmPm = true;
      try {
        format = localStorage.getItem('pinpoint_clock_format') || '12';
        showSeconds = localStorage.getItem('pinpoint_clock_seconds') !== 'false';
        showAmPm = localStorage.getItem('pinpoint_clock_ampm') !== 'false';
      } catch (e) {}
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      let ampm = '';
      if (format === '12') {
        if (showAmPm) ampm = h >= 12 ? ' PM' : ' AM';
        h = h % 12;
        h = h ? h : 12;
      } else {
        h = h < 10 ? '0' + h : h;
      }
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      let timeStr = h + ':' + m;
      if (showSeconds) timeStr += ':' + s;
      timeStr += ampm;
      const el = document.getElementById('runner-clock');
      if (el) {
        el.textContent = timeStr;
        el.style.display = 'inline-flex';
      }
    }
    setInterval(updateClocks, 1000);
    updateClocks();

    async function togglePopoutFav() {
      const btn = document.getElementById('runner-lib-btn');
      const icon = document.getElementById('popout-fav-icon');
      const text = document.getElementById('popout-fav-text');

      let cleanFile = TARGET_FILE.split('?')[0];
      while (cleanFile.startsWith('../')) cleanFile = cleanFile.slice(3);
      while (cleanFile.startsWith('./')) cleanFile = cleanFile.slice(2);
      while (cleanFile.startsWith('/')) cleanFile = cleanFile.slice(1);
      const fullPath = '/' + cleanFile;
      const gameId = cleanFile.split('').map(c => /[a-zA-Z0-9_-]/.test(c) ? c : '_').join('');

      // 1. If currently saving / downloading, clicking cancels
      if (typeof PinpointGameStorage !== 'undefined' && PinpointGameStorage.isDownloading && PinpointGameStorage.isDownloading(gameId)) {
        PinpointGameStorage.cancelDownload(gameId);
        let favs = [];
        try {
          const raw = localStorage.getItem('pinpoint_library') || localStorage.getItem('pinpoint_favorites');
          if (raw) favs = JSON.parse(raw);
          favs = favs.filter(f => f !== TARGET_FILE && f !== cleanFile);
          localStorage.setItem('pinpoint_library', JSON.stringify(favs));
          localStorage.setItem('pinpoint_favorites', JSON.stringify(favs));
        } catch(e) {}
        if (btn) {
          btn.classList.remove('starred', 'saving');
          btn.removeAttribute('style');
          btn.setAttribute('data-tooltip', 'Save to Library');
          btn.setAttribute('aria-label', 'Library');
        }
        if (icon) {
          icon.className = 'material-symbols-outlined notranslate';
          icon.textContent = 'bookmark_border';
          icon.style.color = '#5f6368';
          icon.style.fontVariationSettings = "'FILL' 0";
        }
        if (text) text.textContent = 'Add to Library';
        return;
      }

      // 2. Check if already in library / downloaded
      let favs = [];
      try {
        const raw = localStorage.getItem('pinpoint_library') || localStorage.getItem('pinpoint_favorites');
        if (raw) favs = JSON.parse(raw);
      } catch(e) {}

      let isDownloaded = false;
      if (typeof PinpointGameStorage !== 'undefined' && PinpointGameStorage.isDownloaded) {
        try {
          isDownloaded = await PinpointGameStorage.isDownloaded(gameId);
        } catch(e) {}
      }
      const inLib = favs.includes(TARGET_FILE) || favs.includes(cleanFile) || isDownloaded;

      if (inLib) {
        // Remove from library and delete offline assets
        favs = favs.filter(f => f !== TARGET_FILE && f !== cleanFile);
        try {
          localStorage.setItem('pinpoint_library', JSON.stringify(favs));
          localStorage.setItem('pinpoint_favorites', JSON.stringify(favs));
        } catch(e) {}
        if (typeof PinpointGameStorage !== 'undefined' && PinpointGameStorage.deleteGame) {
          try {
            await PinpointGameStorage.deleteGame(gameId, fullPath);
          } catch(e) {}
        }
        if (btn) {
          btn.classList.remove('starred', 'saving');
          btn.removeAttribute('style');
          btn.setAttribute('data-tooltip', 'Save to Library');
          btn.setAttribute('aria-label', 'Library');
        }
        if (icon) {
          icon.className = 'material-symbols-outlined notranslate';
          icon.textContent = 'bookmark_border';
          icon.style.color = '#5f6368';
          icon.style.fontVariationSettings = "'FILL' 0";
        }
        if (text) text.textContent = 'Add to Library';
        return;
      }

      // 3. Not in library -> Add to library and start download
      if (!favs.includes(TARGET_FILE)) favs.push(TARGET_FILE);
      if (!favs.includes(cleanFile)) favs.push(cleanFile);
      try {
        localStorage.setItem('pinpoint_library', JSON.stringify(favs));
        localStorage.setItem('pinpoint_favorites', JSON.stringify(favs));
      } catch(e) {}

      // Trigger animated saving state
      if (btn) {
        btn.classList.add('saving');
        btn.classList.remove('starred');
        btn.setAttribute('data-tooltip', 'Saving to Library: 1% (Click to cancel)');
        btn.setAttribute('aria-label', 'Saving 1%');
      }
      if (icon) {
        icon.className = 'material-symbols-outlined notranslate runner-saving-icon';
        icon.textContent = 'hourglass_top';
        icon.style.color = '#1a73e8';
        icon.style.fontVariationSettings = "'FILL' 0";
      }
      if (text) text.textContent = 'Saving 1%...';

      let downloadSuccess = true;
      if (typeof PinpointGameStorage !== 'undefined' && PinpointGameStorage.downloadGame) {
        try {
          await PinpointGameStorage.downloadGame(gameId, LOCKED_POPOUT_TITLE, fullPath, (prog) => {
            const pct = (prog && prog.percent !== undefined) ? prog.percent : 1;
            if (btn) {
              btn.setAttribute('data-tooltip', 'Saving to Library: ' + pct + '% (Click to cancel)');
              btn.setAttribute('aria-label', 'Saving ' + pct + '%');
            }
            if (text) text.textContent = 'Saving ' + pct + '%...';
          });
        } catch(err) {
          if (err && err.name === 'AbortError') return;
          console.warn('Popout download error:', err);
          downloadSuccess = false;
        }
      }

      if (downloadSuccess) {
        if (btn) {
          btn.classList.remove('saving');
          btn.classList.add('starred');
          btn.removeAttribute('style');
          btn.setAttribute('data-tooltip', 'In Library (Click to remove)');
          btn.setAttribute('aria-label', 'In Library');
        }
        if (icon) {
          icon.className = 'material-symbols-outlined notranslate';
          icon.textContent = 'bookmark';
          icon.style.color = '#1a73e8';
          icon.style.fontVariationSettings = "'FILL' 1";
        }
        if (text) text.textContent = 'In Library';
      } else {
        // Revert on error
        favs = favs.filter(f => f !== TARGET_FILE && f !== cleanFile);
        try {
          localStorage.setItem('pinpoint_library', JSON.stringify(favs));
          localStorage.setItem('pinpoint_favorites', JSON.stringify(favs));
        } catch(e) {}
        if (btn) {
          btn.classList.remove('starred', 'saving');
          btn.removeAttribute('style');
          btn.setAttribute('data-tooltip', 'Save to Library');
          btn.setAttribute('aria-label', 'Library');
        }
        if (icon) {
          icon.className = 'material-symbols-outlined notranslate';
          icon.textContent = 'bookmark_border';
          icon.style.color = '#5f6368';
          icon.style.fontVariationSettings = "'FILL' 0";
        }
        if (text) text.textContent = 'Add to Library';
      }
    }

    async function initPopoutFavBtn() {
      let cleanFile = TARGET_FILE.split('?')[0];
      while (cleanFile.startsWith('../')) cleanFile = cleanFile.slice(3);
      while (cleanFile.startsWith('./')) cleanFile = cleanFile.slice(2);
      while (cleanFile.startsWith('/')) cleanFile = cleanFile.slice(1);
      const gameId = cleanFile.split('').map(c => /[a-zA-Z0-9_-]/.test(c) ? c : '_').join('');

      let isDownloaded = false;
      if (typeof PinpointGameStorage !== 'undefined' && PinpointGameStorage.isDownloaded) {
        try { isDownloaded = await PinpointGameStorage.isDownloaded(gameId); } catch(e) {}
      }
      let favs = [];
      try {
        const raw = localStorage.getItem('pinpoint_library') || localStorage.getItem('pinpoint_favorites');
        if (raw) favs = JSON.parse(raw);
      } catch(e) {}
      if (favs.includes(TARGET_FILE) || favs.includes(cleanFile) || isDownloaded) {
        const btn = document.getElementById('runner-lib-btn');
        const icon = document.getElementById('popout-fav-icon');
        const text = document.getElementById('popout-fav-text');
        if (btn) {
          btn.classList.add('starred');
          btn.setAttribute('data-tooltip', 'In Library (Click to remove)');
        }
        if (icon) {
          icon.textContent = 'bookmark';
          icon.style.color = '#1a73e8';
          icon.style.fontVariationSettings = "'FILL' 1";
        }
        if (text) text.textContent = 'In Library';
      }
    }
    initPopoutFavBtn();

    function toggleFullscreen() {
      const iframe = document.getElementById('game-frame');
      if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) iframe.requestFullscreen();
        else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    }

    function triggerPopoutPanic(url) {
      window.__IS_PANIC_TRIGGERED__ = true;
      window.onbeforeunload = null;
      let targetUrl = (url || localStorage.getItem('pinpoint_panic_url') || 'https://classroom.google.com/').trim();
      if (targetUrl && targetUrl !== 'about:blank' && !targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
      }
      try { window.location.href = targetUrl; return; } catch(err) {}
      try { window.location.replace(targetUrl); return; } catch(err) {}
    }

    function reloadPopoutGame() {
      const gf = document.getElementById('game-frame');
      if (gf) {
        try {
          if (gf.contentWindow) {
            gf.contentWindow.location.reload();
            return;
          }
        } catch(err) {}
        gf.src = gf.src;
      }
    }

    function handlePopoutKey(e) {
      if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R'))) {
        e.preventDefault();
        e.stopPropagation();
        reloadPopoutGame();
        return;
      }
      const enabled = localStorage.getItem('pinpoint_panic_enabled') !== 'false';
      if (!enabled) return;
      const targetKey = localStorage.getItem('pinpoint_panic_key') || String.fromCharCode(96);
      if (e.key === targetKey) {
        triggerPopoutPanic();
      }
    }

    window.addEventListener('keydown', handlePopoutKey, true);

    window.addEventListener('beforeunload', function(e) {
      if (window.__IS_PANIC_TRIGGERED__) {
        delete e.returnValue;
        return;
      }
      e.preventDefault();
      e.returnValue = '';
      return '';
    });

    window.addEventListener('message', (e) => {
      if (e.data === 'panic' || e.data?.type === 'panic') {
        const mode = e.data?.mode || localStorage.getItem('pinpoint_panic_mode') || 'redirect';
        if (mode === 'shell') return;
        triggerPopoutPanic(e.data?.url);
      }
    });

    function attachPopoutGameKey() {
      const gf = document.getElementById('game-frame');
      if (gf && gf.contentWindow && !gf.__panicAttached) {
        try {
          gf.__panicAttached = true;
          gf.contentWindow.addEventListener('keydown', handlePopoutKey, true);
        } catch(err) {}
      }
    }
    const gf = document.getElementById('game-frame');
    if (gf) gf.addEventListener('load', attachPopoutGameKey);
    setInterval(attachPopoutGameKey, 1000);
  <\/script>
</body>
</html>`;

        win.document.open();
        win.document.write(html);
        win.document.close();
        return win;
    }
};

if (typeof window !== 'undefined') {
    if (typeof window.showPinpointToast !== 'function') {
        window.showPinpointToast = function(message, type = 'info', duration = 3500) {
            let container = document.getElementById('pinpoint-toast-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'pinpoint-toast-container';
                container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999999;display:flex;flex-direction:column;gap:8px;pointer-events:none;font-family:\'Google Sans\',Roboto,Arial,sans-serif;';
                document.body.appendChild(container);
            }

            const toast = document.createElement('div');
            toast.style.cssText = 'pointer-events:auto;min-width:280px;max-width:440px;background:#ffffff;color:#202124;padding:6px 12px 6px 8px;border-radius:28px;border:1px solid #dadce0;font-size:13.5px;font-weight:500;display:flex;align-items:center;justify-content:space-between;gap:10px;box-shadow:0 4px 18px rgba(0,0,0,0.14),0 1px 4px rgba(0,0,0,0.08);transition:opacity 0.22s ease,transform 0.22s ease;box-sizing:border-box;';

            let badgeBg = '#e8f0fe';
            let badgeColor = '#1a73e8';
            let iconName = 'info';
            if (type === 'success') {
                badgeBg = '#e6f4ea';
                badgeColor = '#137333';
                iconName = 'check_circle';
            } else if (type === 'error') {
                badgeBg = '#fce8e6';
                badgeColor = '#c5221f';
                iconName = 'error';
            } else if (type === 'warning') {
                badgeBg = '#fef7e0';
                badgeColor = '#b06000';
                iconName = 'warning';
            }

            toast.innerHTML = `
                <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
                    <div style="width:32px;height:32px;border-radius:50%;background:${badgeBg};color:${badgeColor};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                        <span class="material-symbols-outlined notranslate" style="font-size:18px;line-height:1;">${iconName}</span>
                    </div>
                    <span style="line-height:1.4;word-break:break-word;color:#202124;">${message}</span>
                </div>
                <button style="background:none;border:none;color:#5f6368;cursor:pointer;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0;padding:0;" title="Dismiss">
                    <span class="material-symbols-outlined notranslate" style="font-size:18px;line-height:1;">close</span>
                </button>
            `;

            let dismissed = false;
            const remove = () => {
                if (dismissed) return;
                dismissed = true;
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(16px) scale(0.92)';
                setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 220);
            };
            toast.querySelector('button').onclick = remove;
            container.appendChild(toast);
            if (duration > 0) setTimeout(remove, duration);
        };
    }

    window.TabDisguiser = TabDisguiser;
    window.openClassManagerModal = (id) => TabDisguiser.openClassManagerModal(id);
    window.closeClassManagerModal = (e) => TabDisguiser.closeClassManagerModal(e);
    window.openFullscreenClock = () => TabDisguiser.openFullscreenClock();
    window.closeFullscreenClock = () => TabDisguiser.closeFullscreenClock();
    window.closeInfoWidget = (e) => TabDisguiser.closeInfoWidget(e);
    window.showInfoWidget = (force) => TabDisguiser.showInfoWidget(force);
    window.showCleanupReminder = (force) => TabDisguiser.showCleanupReminder(force);
    window.showWednesdayCleanupReminder = (force) => TabDisguiser.showCleanupReminder(force);
    window.showDomainScriptReminder = (force) => TabDisguiser.showDomainScriptReminder(force);
    window.prevIntroSlide = () => TabDisguiser.prevIntroSlide();
    window.nextIntroSlide = () => TabDisguiser.nextIntroSlide();
    window.setIntroSlide = (i) => TabDisguiser.setIntroSlide(i);
    window.openPanicShell = (url) => TabDisguiser.openPanicShell(url);
    window.closePanicShell = () => TabDisguiser.closePanicShell();
    window.togglePanicShell = (url) => TabDisguiser.togglePanicShell(url);
    window.triggerPanic = (url, mode) => TabDisguiser.triggerPanic(url, mode);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            TabDisguiser.init();
        });
    } else {
        TabDisguiser.init();
    }
}
