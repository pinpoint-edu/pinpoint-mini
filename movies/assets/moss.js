/**
 * Moss — Ultra-fast UI Enhancer, Brand Architecture, Theme System & Sharp Icons
 * Performance-optimized: Zero tree-walkers, debounced batch processing.
 */
(function () {
    'use strict';

    // 1. Theme Configuration
    var THEMES = [
        { id: "moss", name: "Moss", type: "single", color: "#22c55e", desc: "Signature emerald green" },
        { id: "dark", name: "Simple Dark", type: "single", color: "#f4f4f5", desc: "Monochrome obsidian" },
        { id: "light", name: "Simple Light", type: "single", color: "#0f172a", desc: "Clean porcelain mode" },
        { id: "crimson", name: "Crimson", type: "single", color: "#f43f5e", desc: "Deep ruby single tone" },
        { id: "violet", name: "Amethyst", type: "single", color: "#a855f7", desc: "Majestic royal purple" },
        { id: "amber", name: "Amber", type: "single", color: "#f59e0b", desc: "Warm gold single tone" },
        { id: "sunset", name: "Sunset", type: "double", color: "#ff5722", color2: "#f97316", desc: "Reddish orange double tint" },
        { id: "sky-blue", name: "Sky Blue", type: "double", color: "#0ea5e9", color2: "#06b6d4", desc: "Sky blue & cyan double tint" }
    ];

    function applyTheme(themeId) {
        if (!themeId) themeId = "moss";
        document.documentElement.setAttribute("data-theme", themeId);
        try {
            localStorage.setItem("moss_theme", themeId);
            // Also update legacy theme key so Svelte stores stay in sync
            localStorage.setItem("theme", themeId === "light" ? "light" : "default");
        } catch (e) {}
    }

    // Apply active theme immediately
    var initialTheme = "moss";
    try {
        initialTheme = localStorage.getItem("moss_theme") || "moss";
    } catch (e) {}
    applyTheme(initialTheme);

    // 2. Comprehensive Mapping: Lucide Icon -> Google Material Symbols Sharp Ligature
    var ICON_MAP = {
        "arrow-big-down": "arrow_downward",
        "arrow-big-up": "arrow_upward",
        "arrow-left": "arrow_back",
        "arrow-right": "arrow_forward",
        "arrow-up": "arrow_upward",
        "arrow-up-down": "swap_vert",
        "at-sign": "alternate_email",
        "baby": "child_care",
        "bell": "notifications",
        "bell-off": "notifications_off",
        "bell-ring": "notifications_active",
        "bookmark": "bookmark",
        "bookmark-check": "bookmark_added",
        "calendar": "calendar_today",
        "calendar-days": "calendar_month",
        "captions": "closed_caption",
        "check": "check",
        "chevron-down": "keyboard_arrow_down",
        "chevron-left": "chevron_left",
        "chevron-right": "chevron_right",
        "chevron-up": "keyboard_arrow_up",
        "circle-check": "check_circle",
        "circle-question-mark": "help",
        "circle-x": "cancel",
        "clapperboard": "movie",
        "clock": "schedule",
        "compass": "explore",
        "copy": "content_copy",
        "copy-plus": "copy_all",
        "corner-down-right": "subdirectory_arrow_right",
        "dices": "casino",
        "download": "download",
        "drama": "theater_comedy",
        "eye": "visibility",
        "eye-off": "visibility_off",
        "flame": "local_fire_department",
        "flask-conical": "science",
        "frown": "mood_bad",
        "gallery-vertical-end": "collections",
        "ghost": "pest_control",
        "globe": "language",
        "grid-3x3": "grid_view",
        "grip-vertical": "drag_indicator",
        "heart": "favorite",
        "history": "history",
        "house": "home",
        "home": "home",
        "info": "info",
        "key-round": "key",
        "landmark": "account_balance",
        "laugh": "mood",
        "layers": "layers",
        "layout-grid": "grid_view",
        "link-2": "link",
        "link": "link",
        "list": "format_list_bulleted",
        "loader-circle": "progress_activity",
        "loader": "progress_activity",
        "log-in": "login",
        "log-out": "logout",
        "mail": "mail",
        "mail-open": "drafts",
        "megaphone": "campaign",
        "message-circle": "chat_bubble",
        "message-square": "chat",
        "monitor": "desktop_windows",
        "music": "music_note",
        "palette": "palette",
        "party-popper": "celebration",
        "pencil": "edit",
        "play": "play_arrow",
        "plus": "add",
        "refresh-cw": "refresh",
        "rocket": "rocket_launch",
        "rotate-ccw": "replay",
        "rotate-cw": "refresh",
        "search": "search",
        "send": "send",
        "send-horizontal": "send",
        "server": "dns",
        "settings": "settings",
        "share-2": "share",
        "share": "share",
        "shuffle": "shuffle",
        "skip-forward": "skip_next",
        "skull": "skull",
        "star": "star",
        "swords": "swords",
        "trash-2": "delete",
        "trash": "delete",
        "triangle-alert": "warning",
        "tv": "tv",
        "unlink": "link_off",
        "upload": "upload",
        "user": "person",
        "users": "group",
        "volume-2": "volume_up",
        "volume-x": "volume_off",
        "volume-1": "volume_down",
        "volume": "volume_down",
        "maximize": "fullscreen",
        "minimize": "fullscreen_exit",
        "wand-sparkles": "auto_awesome",
        "sparkles": "auto_awesome",
        "x": "close",
        "zap": "bolt",
        "filter": "filter_list",
        "sliders": "tune",
        "menu": "menu"
    };

    function extractIconName(svg) {
        var cls = "";
        if (typeof svg.className === "string") {
            cls = svg.className;
        } else if (svg.className && typeof svg.className.baseVal === "string") {
            cls = svg.className.baseVal;
        } else {
            cls = svg.getAttribute("class") || "";
        }

        var tokens = cls.split(/\s+/);
        for (var i = 0; i < tokens.length; i++) {
            var t = tokens[i];
            if (t.startsWith("lucide-")) {
                var candidate = t.slice(7).toLowerCase();
                if (candidate && candidate !== "icon") {
                    return candidate;
                }
            }
        }

        var attrName = svg.getAttribute("data-icon") || svg.getAttribute("data-name");
        if (attrName && attrName !== "icon") {
            return attrName.toLowerCase();
        }

        return "";
    }

    function getGlyph(name) {
        if (!name || name === "icon") return "";
        name = name.toLowerCase();
        if (ICON_MAP[name]) return ICON_MAP[name];
        return name.replace(/-/g, "_");
    }

    // Convert Lucide SVG to Google Material Symbols Sharp (Fixed: Replace, Never Accumulate)
    function convertIcon(svg) {
        var name = extractIconName(svg);
        if (!name || name === "icon") return;

        var glyph = getGlyph(name);
        if (!glyph || glyph === "icon") return;

        var parent = svg.parentNode;
        if (!parent) return;

        // Hide the original SVG completely
        svg.style.display = "none";
        svg.style.visibility = "hidden";
        svg.style.width = "0";
        svg.style.height = "0";
        svg.style.position = "absolute";
        svg.style.pointerEvents = "none";

        // Check if a material-symbols-sharp span already exists in this parent container
        var existingSpans = [];
        for (var i = 0; i < parent.children.length; i++) {
            var child = parent.children[i];
            if (child.classList && child.classList.contains("material-symbols-sharp")) {
                existingSpans.push(child);
            }
        }

        if (existingSpans.length > 0) {
            // Keep strictly only the first one, eliminate any extra accumulated spans
            for (var j = 1; j < existingSpans.length; j++) {
                existingSpans[j].remove();
            }
            var targetSpan = existingSpans[0];
            if (targetSpan.dataset.forIcon !== name || targetSpan.textContent !== glyph) {
                targetSpan.dataset.forIcon = name;
                targetSpan.textContent = glyph;
            }
            return;
        }

        // Create new single span
        var cls = "";
        if (typeof svg.className === "string") {
            cls = svg.className;
        } else if (svg.className && typeof svg.className.baseVal === "string") {
            cls = svg.className.baseVal;
        } else {
            cls = svg.getAttribute("class") || "";
        }

        var cleanCls = cls
            .replace(/\blucide-[a-z0-9\-]+\b/g, "")
            .replace(/\blucide-icon\b/g, "")
            .replace(/\blucide\b/g, "")
            .trim();

        var span = document.createElement("span");
        span.className = "material-symbols-sharp" + (cleanCls ? " " + cleanCls : "");
        span.dataset.forIcon = name;
        span.textContent = glyph;

        var w = svg.getAttribute("width");
        var h = svg.getAttribute("height");
        if (w && !isNaN(w) && Number(w) > 0) {
            span.style.fontSize = w + "px";
            span.style.width = w + "px";
            span.style.height = (h || w) + "px";
        }

        parent.insertBefore(span, svg.nextSibling);
    }

    // 3. Purge Duplicate Accumulated Spans in any container
    function deduplicateIcons() {
        var spans = document.querySelectorAll(".material-symbols-sharp");
        for (var i = 0; i < spans.length; i++) {
            var s = spans[i];
            // Remove rogue spans that display the word "icon"
            if (s.textContent.trim().toLowerCase() === "icon") {
                s.remove();
                continue;
            }
            // If previous element is also a material-symbols-sharp, remove duplicate
            if (s.previousElementSibling && s.previousElementSibling.classList.contains("material-symbols-sharp")) {
                s.remove();
            }
        }
    }

    // 4. Navigation Home Tab (Replaced 'Moss' title with normal 'Home' tab matching Movies & Series)
    function updateBrandTitle() {
        if (document.title.includes("Cinejoy")) {
            document.title = document.title.replace(/Cinejoy/g, "Moss");
        } else if (!document.title) {
            document.title = "Moss";
        }

        var brandLinks = document.querySelectorAll('.header-row a[href="/"], .desktop-nav a[href="/"], a.brand-mark, [class*="brand-mark"]');
        for (var i = 0; i < brandLinks.length; i++) {
            var el = brandLinks[i];
            
            var imgs = el.querySelectorAll("svg, img");
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.display = "none";
            }

            if (el.dataset.mossHome === "1") continue;
            el.dataset.mossHome = "1";
            el.classList.add("nav-item", "moss-nav-tab", "moss-home-tab");

            if (window.location.pathname === "/" || window.location.pathname === "") {
                el.classList.add("is-active", "active");
            } else {
                el.classList.remove("is-active", "active");
            }

            el.innerHTML = '<span class="moss-tab-text">Home</span>';
        }
    }

    // 5. Remove Shorts, Login Options & Login-Specific Options
    function removeUnwantedFeatures() {
        if (window.location.pathname.startsWith("/shorts")) {
            window.location.replace("/");
            return;
        }

        // Hide Shorts
        var shorts = document.querySelectorAll('a[href="/shorts"], a[href*="/shorts"], [data-nav*="shorts"]');
        for (var i = 0; i < shorts.length; i++) {
            var parent = shorts[i].closest("li, .nav-item") || shorts[i];
            parent.style.display = "none";
        }

        // Hide Login & Account options
        var logins = document.querySelectorAll('a[href*="/login"], a[href*="/auth"], button[aria-label*="Login" i], button[aria-label*="Profile" i], .mobile-profile-menu');
        for (var j = 0; j < logins.length; j++) {
            var lParent = logins[j].closest("li, .nav-item") || logins[j];
            lParent.style.display = "none";
        }

        // Hide Share buttons and panels
        var shares = document.querySelectorAll('button[aria-label*="share" i], button[title*="share" i], [class*="share-panel"], [class*="share-btn"], .share-panel, .share-badge');
        for (var k = 0; k < shares.length; k++) {
            shares[k].style.display = "none";
        }

        // Hide Ads and Adblock Sections
        var ads = document.querySelectorAll('[class*="ad-banner"], [class*="adblock"], [class*="ad-dialog"], .ad-dialog-panel, .turnstile-wrap, .turnstile-slot, .captcha-slot');
        for (var a = 0; a < ads.length; a++) {
            ads[a].style.display = "none";
        }
    }

    // 6. Settings Page: Theme Switcher & Ads/Account Section Removal
    function enhanceSettingsPage() {
        if (!window.location.pathname.startsWith("/settings")) return;

        // Hide Ads & Account sections in settings
        var headings = document.querySelectorAll("h1, h2, h3, h4, .setting-label, .section-title");
        for (var h = 0; h < headings.length; h++) {
            var txt = (headings[h].textContent || "").trim().toLowerCase();
            if (txt.includes("adblock") || txt === "ads" || txt.includes("advertisement") || txt === "account" || txt.includes("cloud sync") || txt.includes("sign in")) {
                var card = headings[h].closest(".glass-card, .settings-group, .settings-card, .settings-section, section, div[class*='group']") || headings[h].parentElement;
                if (card) card.style.display = "none";
            }
        }

        // Find or create Moss Theme Picker container in Settings
        var existingPicker = document.getElementById("moss-theme-picker");
        if (existingPicker) return;

        var targetContainer = document.querySelector(".settings-content, main, .settings-card, .glass-card");
        if (!targetContainer) return;

        var pickerWrap = document.createElement("div");
        pickerWrap.id = "moss-theme-picker";
        pickerWrap.style.cssText = "margin-bottom: 2rem; padding: 1.5rem; border-radius: 16px; background: var(--moss-card); border: 1px solid var(--moss-border);";

        var heading = document.createElement("h3");
        heading.textContent = "Themes";
        heading.style.cssText = "font-size: 1.15rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--moss-text);";

        var sub = document.createElement("p");
        sub.textContent = "Curated single-color & dual-tint themes. Adapts backgrounds, glass cards, ambient waves, and accents.";
        sub.style.cssText = "font-size: 0.85rem; color: var(--moss-text-muted); margin-bottom: 1.25rem;";

        var grid = document.createElement("div");
        grid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;";

        var currentTheme = document.documentElement.getAttribute("data-theme") || "moss";

        THEMES.forEach(function (t) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "moss-theme-btn";
            var isActive = currentTheme === t.id;

            var bgPreview = t.type === "double"
                ? "linear-gradient(135deg, " + t.color + " 0%, " + t.color2 + " 100%)"
                : t.color;

            btn.style.cssText = "display: flex; flex-direction: column; align-items: flex-start; padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1.5px solid " + (isActive ? "var(--moss-primary)" : "rgba(255,255,255,0.08)") + "; cursor: pointer; text-align: left; transition: all 0.2s ease;";

            var circle = document.createElement("div");
            circle.style.cssText = "width: 24px; height: 24px; border-radius: 50%; background: " + bgPreview + "; margin-bottom: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);";

            var nameSpan = document.createElement("span");
            nameSpan.textContent = t.name;
            nameSpan.style.cssText = "font-size: 0.85rem; font-weight: 600; color: var(--moss-text); margin-bottom: 2px;";

            var descSpan = document.createElement("span");
            descSpan.textContent = t.desc;
            descSpan.style.cssText = "font-size: 0.72rem; color: var(--moss-text-muted); line-height: 1.2;";

            btn.appendChild(circle);
            btn.appendChild(nameSpan);
            btn.appendChild(descSpan);

            btn.onclick = function () {
                applyTheme(t.id);
                var allBtns = document.querySelectorAll(".moss-theme-btn");
                allBtns.forEach(function (b) { b.style.borderColor = "rgba(255,255,255,0.08)"; });
                btn.style.borderColor = "var(--moss-primary)";
            };

            grid.appendChild(btn);
        });

        pickerWrap.appendChild(heading);
        pickerWrap.appendChild(sub);
        pickerWrap.appendChild(grid);

        targetContainer.insertBefore(pickerWrap, targetContainer.firstChild);
    }

    // 7. Footer Cleanup: Remove Cinejoy title, icon & email; keep disclaimer only
    function cleanFooter() {
        var footers = document.querySelectorAll("footer");
        for (var i = 0; i < footers.length; i++) {
            var f = footers[i];
            if (f.dataset.mossCleaned === "1") continue;
            f.dataset.mossCleaned = "1";

            var emails = f.querySelectorAll('a[href^="mailto:"], a[href*="contact" i], [class*="contact" i]');
            for (var e = 0; e < emails.length; e++) {
                emails[e].style.display = "none";
            }

            var logos = f.querySelectorAll("img, svg, .brand-mark, [class*='logo' i]");
            for (var l = 0; l < logos.length; l++) {
                logos[l].style.display = "none";
            }
        }
    }

    // 8. High-Performance Batched DOM Processing
    var rafPending = false;
    function runBatchUpdate() {
        rafPending = false;

        // Process icons with duplicate prevention
        var svgs = document.querySelectorAll("svg.lucide, svg.lucide-icon, svg[class*='lucide-']");
        for (var i = 0; i < svgs.length; i++) {
            convertIcon(svgs[i]);
        }
        deduplicateIcons();

        updateBrandTitle();
        removeUnwantedFeatures();
        cleanFooter();
        enhanceSettingsPage();
    }

    function scheduleBatch() {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(runBatchUpdate);
        }
    }

    var observer = new MutationObserver(function () {
        scheduleBatch();
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            runBatchUpdate();
            observer.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        runBatchUpdate();
        observer.observe(document.body, { childList: true, subtree: true });
    }

    console.log("[Moss Engine] Complete UI, Themes, Ambient Waves & Anti-Stack Shields active.");
})();
