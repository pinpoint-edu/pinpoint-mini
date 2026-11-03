// IndexedDB + CacheStorage for Offline Games (Supports single-file & multi-part/asset games)
const GAME_DB_NAME = 'PinpointGamesDB';
const GAME_DB_VERSION = 1;
const GAME_STORE_NAME = 'games';
const GAME_CACHE_NAME = 'pinpoint-game-cache';
const RECOMMENDED_LIMIT_BYTES = 100 * 1024 * 1024; // 100 MB

const GAME_MANIFESTS = {
    "textbooks/plants-vs-zombies/index.html": [
        "/textbooks/plants-vs-zombies/index.html",
        "/textbooks/plants-vs-zombies/pvz_9_15.swf",
        "/textbooks/plants-vs-zombies/resources.swf",
        "/textbooks/plants-vs-zombies/data.xml",
        "/textbooks/plants-vs-zombies/properties/externalStrings.txt",
        "/textbooks/plants-vs-zombies/music/cerebrawl.mp3",
        "/textbooks/plants-vs-zombies/music/chooseyourseeds.mp3",
        "/textbooks/plants-vs-zombies/music/conveyor.mp3",
        "/textbooks/plants-vs-zombies/music/crazydave.mp3",
        "/textbooks/plants-vs-zombies/music/grasswalk.mp3",
        "/textbooks/plants-vs-zombies/music/loonboon.mp3",
        "/textbooks/plants-vs-zombies/music/losemusic.mp3",
        "/textbooks/plants-vs-zombies/music/moongrains.mp3",
        "/textbooks/plants-vs-zombies/music/winmusic.mp3",
        "/textbooks/plants-vs-zombies/music/zengarden.mp3",
        "/textbooks/ruffle/ruffle.js",
        "/textbooks/ruffle/core.ruffle.e1ab5671fe9d69a41e55.js",
        "/textbooks/ruffle/f9db7455c2c80fac021b.wasm"
    ],
    "textbooks/getaway-shootout/index.html": [
        "/textbooks/getaway-shootout/index.html",
        "/textbooks/getaway-shootout/Build/loader-v2.js",
        "/textbooks/getaway-shootout/Build/frame.js",
        "/textbooks/getaway-shootout/Build/864872d3e8c17c58e54028c101dae7a5.data.br",
        "/textbooks/getaway-shootout/Build/c0f8b2f06ae4c7c89b1e883b3d07ca8f.wasm.wasm",
        "/textbooks/getaway-shootout/StreamingAssets/Music.aac"
    ],
    "textbooks/getaway-shootout.html": [
        "/textbooks/getaway-shootout.html",
        "/textbooks/getaway-shootout/index.html",
        "/textbooks/getaway-shootout/Build/loader-v2.js",
        "/textbooks/getaway-shootout/Build/frame.js",
        "/textbooks/getaway-shootout/Build/864872d3e8c17c58e54028c101dae7a5.data.br",
        "/textbooks/getaway-shootout/Build/c0f8b2f06ae4c7c89b1e883b3d07ca8f.wasm.wasm",
        "/textbooks/getaway-shootout/StreamingAssets/Music.aac"
    ],
    "textbooks/sprinter/index.html": [
        "/textbooks/sprinter/index.html",
        "/textbooks/sprinter/sprinter.swf",
        "/textbooks/ruffle/ruffle.js",
        "/textbooks/ruffle/core.ruffle.e1ab5671fe9d69a41e55.js",
        "/textbooks/ruffle/f9db7455c2c80fac021b.wasm"
    ],
    "textbooks/basket-random/index.html": [
        "/textbooks/basket-random/index.html",
        "/textbooks/basket-random/appmanifest.json",
        "/textbooks/basket-random/box2d.wasm",
        "/textbooks/basket-random/box2d.wasm.js",
        "/textbooks/basket-random/data.json",
        "/textbooks/basket-random/favicon.ico",
        "/textbooks/basket-random/style.css",
        "/textbooks/basket-random/images/ballline-sheet0.png",
        "/textbooks/basket-random/images/buildingtile2-sheet0.png",
        "/textbooks/basket-random/images/buildingtile3-sheet0.png",
        "/textbooks/basket-random/images/buildingtile-sheet0.png",
        "/textbooks/basket-random/images/cloudtile-sheet0.png",
        "/textbooks/basket-random/images/fencetile-sheet0.png",
        "/textbooks/basket-random/images/game_bg-sheet0.png",
        "/textbooks/basket-random/images/grasslinetile-sheet0.png",
        "/textbooks/basket-random/images/grasstile-sheet0.png",
        "/textbooks/basket-random/images/groundtileindoor-sheet0.png",
        "/textbooks/basket-random/images/groundtileplaj-sheet0.png",
        "/textbooks/basket-random/images/groundtile-sheet0.png",
        "/textbooks/basket-random/images/groundtilesnow-sheet0.png",
        "/textbooks/basket-random/images/hair-sheet0.png",
        "/textbooks/basket-random/images/indoorbgtile2-sheet0.png",
        "/textbooks/basket-random/images/indoorbgtile3-sheet0.png",
        "/textbooks/basket-random/images/indoorbgtile-sheet0.png",
        "/textbooks/basket-random/images/potatiled-sheet0.png",
        "/textbooks/basket-random/images/rightshoe-sheet0.png",
        "/textbooks/basket-random/images/rightshort-sheet0.png",
        "/textbooks/basket-random/images/seatile-sheet0.png",
        "/textbooks/basket-random/images/shared-0-sheet0.png",
        "/textbooks/basket-random/images/shared-0-sheet1.png",
        "/textbooks/basket-random/images/shared-0-sheet2.png",
        "/textbooks/basket-random/images/shared-0-sheet3.png",
        "/textbooks/basket-random/images/shared-0-sheet4.png",
        "/textbooks/basket-random/images/shared-1-sheet0.png",
        "/textbooks/basket-random/images/snowtile-sheet0.png",
        "/textbooks/basket-random/images/startile-sheet0.png",
        "/textbooks/basket-random/images/titlebg-sheet0.png",
        "/textbooks/basket-random/images/titlechars-sheet0.png",
        "/textbooks/basket-random/images/tshirt-sheet0.png",
        "/textbooks/basket-random/media/bellsoc.webm",
        "/textbooks/basket-random/media/bup.webm",
        "/textbooks/basket-random/media/buttonx.webm",
        "/textbooks/basket-random/media/file.webm",
        "/textbooks/basket-random/media/goasoc.webm",
        "/textbooks/basket-random/media/intro-button.webm",
        "/textbooks/basket-random/media/intro-sound.webm",
        "/textbooks/basket-random/media/jump.webm",
        "/textbooks/basket-random/media/menu.webm",
        "/textbooks/basket-random/media/metal.webm",
        "/textbooks/basket-random/media/music.webm",
        "/textbooks/basket-random/media/press.webm",
        "/textbooks/basket-random/media/refsoc.webm",
        "/textbooks/basket-random/media/start.webm",
        "/textbooks/basket-random/media/win.webm",
        "/textbooks/basket-random/media/wrong.webm",
        "/textbooks/basket-random/scripts/c3runtime.js",
        "/textbooks/basket-random/scripts/dispatchworker.js",
        "/textbooks/basket-random/scripts/jobworker.js",
        "/textbooks/basket-random/scripts/main.js",
        "/textbooks/basket-random/scripts/offlineclient.js",
        "/textbooks/basket-random/scripts/opus.wasm.js",
        "/textbooks/basket-random/scripts/opus.wasm.wasm",
        "/textbooks/basket-random/scripts/register-sw.js",
        "/textbooks/basket-random/scripts/supportcheck.js"
    ],
    "textbooks/car-soccer/": [
        "/textbooks/car-soccer/index.html",
        "/textbooks/car-soccer/game.js",
        "/textbooks/car-soccer/interceptor.js",
        "/textbooks/car-soccer/workers.js",
        "/textbooks/car-soccer/assets-core.js",
        "/textbooks/car-soccer/assets-map-dribble.js",
        "/textbooks/car-soccer/assets-map-ice-1.js",
        "/textbooks/car-soccer/assets-map-ice-2.js",
        "/textbooks/car-soccer/images.js"
    ],
    "textbooks/people-playground/index.html": [
        "/textbooks/people-playground/index.html",
        "/textbooks/people-playground/Build/PPG.loader.js",
        "/textbooks/people-playground/Build/PPG.framework.js",
        "/textbooks/people-playground/Build/PPG.data.part1",
        "/textbooks/people-playground/Build/PPG.data.part2",
        "/textbooks/people-playground/Build/PPG.data.part3",
        "/textbooks/people-playground/Build/PPG.data.part4",
        "/textbooks/people-playground/Build/PPG.data.part5",
        "/textbooks/people-playground/Build/PPG.data.part6",
        "/textbooks/people-playground/Build/PPG.wasm.part1",
        "/textbooks/people-playground/Build/PPG.wasm.part2",
        "/textbooks/people-playground/Build/PPG.wasm.part3",
        "/textbooks/people-playground/TemplateData/style.css",
        "/textbooks/people-playground/TemplateData/favicon.ico",
        "/textbooks/people-playground/TemplateData/fullscreen-button.png",
        "/textbooks/people-playground/TemplateData/progress-bar-empty-dark.png",
        "/textbooks/people-playground/TemplateData/progress-bar-full-dark.png",
        "/textbooks/people-playground/TemplateData/unity-logo-dark.png",
        "/textbooks/people-playground/TemplateData/webgl-logo.png"
    ],
    "textbooks/happy-wheels.html": [
        "/textbooks/happy-wheels.html",
        "/textbooks/happy-wheels.swf",
        "/textbooks/ruffle/ruffle.js",
        "/textbooks/ruffle/core.ruffle.e1ab5671fe9d69a41e55.js",
        "/textbooks/ruffle/f9db7455c2c80fac021b.wasm"
    ],
    "textbooks/Bloons-TD.html": [
        "/textbooks/Bloons-TD.html",
        "/textbooks/Bloons-TD.swf",
        "/textbooks/ruffle/ruffle.js",
        "/textbooks/ruffle/core.ruffle.e1ab5671fe9d69a41e55.js",
        "/textbooks/ruffle/f9db7455c2c80fac021b.wasm"
    ],
    "textbooks/bloonsTD2.html": [
        "/textbooks/bloonsTD2.html"
    ],
    "textbooks/bloonsTD3.html": [
        "/textbooks/bloonsTD3.html"
    ],
    "textbooks/awesometanks2.html": [
        "/textbooks/awesometanks2.html"
    ],
    "textbooks/bloonsTD4.html": [
        "/textbooks/bloonsTD4.html"
    ],
    "textbooks/bloxorz.html": [
        "/textbooks/bloxorz.html"
    ],
    "textbooks/escape-road-3/index.html": [
        "/textbooks/escape-road-3/index.html",
        "/textbooks/escape-road-3/game.html",
        "/textbooks/escape-road-3/game.css",
        "/textbooks/escape-road-3/gmsdkv1.js",
        "/textbooks/escape-road-3/loading.png",
        "/textbooks/escape-road-3/logo.png",
        "/textbooks/escape-road-3/fonts/Fredoka-Bold.woff2",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.loader.js",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.framework.js",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part1",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part2",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part3",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part4",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part5",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part6",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.data.part7",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.wasm.part1",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.wasm.part2",
        "/textbooks/escape-road-3/Build/escape-road-3-v26041006.wasm.part3",
        "/textbooks/escape-road-3/Build/webgl/boot.config",
        "/textbooks/escape-road-3/Build/webgl/data.unity3d",
        "/textbooks/escape-road-3/Build/webgl/Il2CppData/Metadata/global-metadata.dat",
        "/textbooks/escape-road-3/Build/webgl/resources.resource",
        "/textbooks/escape-road-3/Build/webgl/Resources/unity_default_resources",
        "/textbooks/escape-road-3/Build/webgl/RuntimeInitializeOnLoads.json",
        "/textbooks/escape-road-3/Build/webgl/ScriptingAssemblies.json",
        "/textbooks/escape-road-3/Build/webgl/sharedassets1.resource",
        "/textbooks/escape-road-3/Build/webgl/sharedassets2.resource",
        "/textbooks/escape-road-3/Build/webgl/sharedassets4.resource",
        "/textbooks/escape-road-3/StreamingAssets/UnityServicesProjectConfiguration.json"
    ],
    "textbooks/crazy-pixel-apocalypse-9/index.html": [
        "/textbooks/crazy-pixel-apocalypse-9/index.html",
        "/textbooks/crazy-pixel-apocalypse-9/Build/puxx.data.unityweb",
        "/textbooks/crazy-pixel-apocalypse-9/Build/puxx.framework.js.unityweb",
        "/textbooks/crazy-pixel-apocalypse-9/Build/puxx.loader.js",
        "/textbooks/crazy-pixel-apocalypse-9/Build/puxx.wasm.unityweb",
        "/textbooks/crazy-pixel-apocalypse-9/fonts/fonts.css",
        "/textbooks/crazy-pixel-apocalypse-9/fonts/heebo.woff2",
        "/textbooks/crazy-pixel-apocalypse-9/fonts/museomoderno.woff2",
        "/textbooks/crazy-pixel-apocalypse-9/TemplateData/favicon.ico",
        "/textbooks/crazy-pixel-apocalypse-9/TemplateData/style.css"
    ],
    "textbooks/gumspin/index.html": [
        "/textbooks/gumspin/index.html",
        "/textbooks/gumspin/Build/UnityLoader.js",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.json",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.json",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.data.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.data.unityweb",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.wasm.code.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.wasm.code.unityweb",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.wasm.framework.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.wasm.framework.unityweb",
        "/textbooks/gumspin/manifest_1.5.18.json",
        "/textbooks/gumspin/TemplateData/favicon.ico",
        "/textbooks/gumspin/TemplateData/style.css",
        "/textbooks/gumspin/TemplateData/UnityProgress.js",
        "/textbooks/gumspin/TemplateData/progressLogo.Light.png",
        "/textbooks/gumspin/TemplateData/progressEmpty.Light.png",
        "/textbooks/gumspin/TemplateData/progressFull.Light.png",
        "/textbooks/gumspin/TemplateData/progressLogo.Dark.png",
        "/textbooks/gumspin/TemplateData/progressEmpty.Dark.png",
        "/textbooks/gumspin/TemplateData/progressFull.Dark.png",
        "/textbooks/gumspin/TemplateData/webgl-logo.png",
        "/textbooks/gumspin/TemplateData/fullscreen.png"
    ],
    "textbooks/monspin/index.html": [
        "/textbooks/gumspin/index.html",
        "/textbooks/gumspin/Build/UnityLoader.js",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.json",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.json",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.data.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.data.unityweb",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.wasm.code.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.wasm.code.unityweb",
        "/textbooks/gumspin/Build/GunSpin%20WebGL%20FinalVersion.wasm.framework.unityweb",
        "/textbooks/gumspin/Build/GunSpin WebGL FinalVersion.wasm.framework.unityweb",
        "/textbooks/gumspin/manifest_1.5.18.json",
        "/textbooks/gumspin/TemplateData/favicon.ico",
        "/textbooks/gumspin/TemplateData/style.css",
        "/textbooks/gumspin/TemplateData/UnityProgress.js",
        "/textbooks/gumspin/TemplateData/progressLogo.Light.png",
        "/textbooks/gumspin/TemplateData/progressEmpty.Light.png",
        "/textbooks/gumspin/TemplateData/progressFull.Light.png",
        "/textbooks/gumspin/TemplateData/progressLogo.Dark.png",
        "/textbooks/gumspin/TemplateData/progressEmpty.Dark.png",
        "/textbooks/gumspin/TemplateData/progressFull.Dark.png",
        "/textbooks/gumspin/TemplateData/webgl-logo.png",
        "/textbooks/gumspin/TemplateData/fullscreen.png"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/1v1.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/1v1.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/2.7.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-app.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-auth.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1login.js?v=2",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firestore.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/style.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_1v1.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/1v1.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/2.7.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-app.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-auth.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firebase.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1login.js?v=2",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/1firestore.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/1v1lol/style.css"
    ],
    "textbooks/superhot.html": [
        "textbooks/superhot.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.wasm",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.png"
    ],
    "textbooks_superhot.html": [
        "textbooks/superhot.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.wasm",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/swat/ts3.png"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bank.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bank.html",
        "https://ya.ru/games/sdk/v2",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/TemplateData/style.css",
        "https://cdn.jsdelivr.net/BankRobbery2.data.unityweb",
        "https://cdn.jsdelivr.net/BankRobbery2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/BankRobbery2.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2_part1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2_part2.data.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_bank.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bank.html",
        "https://ya.ru/games/sdk/v2",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/TemplateData/style.css",
        "https://cdn.jsdelivr.net/BankRobbery2.data.unityweb",
        "https://cdn.jsdelivr.net/BankRobbery2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/BankRobbery2.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2_part1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/bankrob2/Build/BankRobbery2_part2.data.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/baseballbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/baseballbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/BaseballBros.js?th=76",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/tag.min.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-app.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-auth.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-firestore.js",
        "https://api.adinplay.com/v4/live/aip/ad-manager.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/favicon.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/manifest.json"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_baseballbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/baseballbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/BaseballBros.js?th=76",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/tag.min.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-app.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-auth.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/firebase-firestore.js",
        "https://api.adinplay.com/v4/live/aip/ad-manager.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/favicon.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/baseballbros/manifest.json"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/basketbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/basketbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/basketballbros//BasketBros.js?th=644",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/favicon.png",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/manifest.json"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_basketbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/basketbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/basketballbros//BasketBros.js?th=644",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/favicon.png",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/manifest.json"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/blockblast.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/blockblast.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/manifest.webmanifest",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.data.unityweb",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.framework.js.unityweb",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_blockblast.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/blockblast.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/blocks/manifest.webmanifest",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.data.unityweb",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.framework.js.unityweb",
        "https://cdn.jsdelivr.net/BlockBlast1.1-8.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bowmasters.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bowmasters.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/customytgame.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/game.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/style/index.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_bowmasters.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/bowmasters.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/customytgame.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/game.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/bow/style/index.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buckshot.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buckshot.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/style.css",
        "https://cdn.jsdelivr.net/6.data.br",
        "https://cdn.jsdelivr.net/6.framework.js",
        "https://cdn.jsdelivr.net/6.wasm.br",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/StreamingAssets",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.data.br",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.wasm.br"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_buckshot.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buckshot.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/style.css",
        "https://cdn.jsdelivr.net/6.data.br",
        "https://cdn.jsdelivr.net/6.framework.js",
        "https://cdn.jsdelivr.net/6.wasm.br",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/StreamingAssets",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.data.br",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/buckshot/Build/6.wasm.br"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buildnow.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buildnow.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/ab8dd356a41a2943639294657a0990f8.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/91a2bfcec140bc524100478b99a4f6d7.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/7db022abd161455e3cc5f207e75d294b.wasm"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_buildnow.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/buildnow.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/ab8dd356a41a2943639294657a0990f8.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/91a2bfcec140bc524100478b99a4f6d7.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/buildnow/Build/7db022abd161455e3cc5f207e75d294b.wasm"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cs.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cs.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/style.css",
        "https://cdn.jsdelivr.net/Web%20GL.data.unityweb",
        "https://cdn.jsdelivr.net/Web%20GL.framework.js.unityweb",
        "https://cdn.jsdelivr.net/Web%20GL.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_cs.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cs.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/style.css",
        "https://cdn.jsdelivr.net/Web%20GL.data.unityweb",
        "https://cdn.jsdelivr.net/Web%20GL.framework.js.unityweb",
        "https://cdn.jsdelivr.net/Web%20GL.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/cs16/Build/Web%20GL.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/ccm152.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/ccm152.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_ccm152.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/ccm152.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chicken.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chicken.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/style.css",
        "https://cdn.jsdelivr.net/Build.data.unityweb",
        "https://cdn.jsdelivr.net/Build.framework.js.unityweb",
        "https://cdn.jsdelivr.net/Build.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_chicken.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chicken.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/style.css",
        "https://cdn.jsdelivr.net/Build.data.unityweb",
        "https://cdn.jsdelivr.net/Build.framework.js.unityweb",
        "https://cdn.jsdelivr.net/Build.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/chicken/Build/Build.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chromedino.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chromedino.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_chromedino.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/chromedino.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/clash.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/clash.html",
        "https://cdn.jsdelivr.net/gh/ertemr33/vahvah@main/1414.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/favicon.ico",
        "https://cdn.jsdelivr.net/gh/ertemr33/vahvah@main/game.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_clash.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/clash.html",
        "https://cdn.jsdelivr.net/gh/ertemr33/vahvah@main/1414.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/favicon.ico",
        "https://cdn.jsdelivr.net/gh/ertemr33/vahvah@main/game.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/crazycattle.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/crazycattle.html",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/Build/version%201.2.loader.js",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/Build/version%201.2.framework.js",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/TemplateData/style.css",
        "https://cdn.jsdelivr.net/version%201.2.data.gz",
        "https://cdn.jsdelivr.net/version%201.2.framework.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_crazycattle.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/crazycattle.html",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/Build/version%201.2.loader.js",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/Build/version%201.2.framework.js",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/kuzresema/wwwwww@main/TemplateData/style.css",
        "https://cdn.jsdelivr.net/version%201.2.data.gz",
        "https://cdn.jsdelivr.net/version%201.2.framework.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cuphead.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cuphead.html",
        "https://cdn.jsdelivr.net/gh/web-ports/cuphead@c9ff1b6b16f9d402b78a42fc2200e1c076c0ab6e/Build/UnityLoader.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_cuphead.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/cuphead.html",
        "https://cdn.jsdelivr.net/gh/web-ports/cuphead@c9ff1b6b16f9d402b78a42fc2200e1c076c0ab6e/Build/UnityLoader.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/russia.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/russia.html",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.loader.js",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/style.css",
        "https://cdn.jsdelivr.net/RuDrift.framework.js.unityweb",
        "https://cdn.jsdelivr.net/RuDrift.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_russia.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/russia.html",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.loader.js",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/style.css",
        "https://cdn.jsdelivr.net/RuDrift.framework.js.unityweb",
        "https://cdn.jsdelivr.net/RuDrift.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/karala-ar/vaydanam@main/build/RuDrift.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm030.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm030.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_wasm030.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm030.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm112.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm112.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_wasm112.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm112.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js18.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js18.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_js18.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js18.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm18.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm18.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_wasm18.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/wasm18.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/alpha126.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/alpha126.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_alpha126.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/alpha126.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js13.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js13.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_js13.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js13.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js173.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js173.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_js173.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/js173.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/flyinggorilla.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/flyinggorilla.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.wasm"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_flyinggorilla.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/flyinggorilla.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/gorilla/Build/vb.wasm"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/frag.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/frag.html",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/TemplateData/style.css",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.data.br",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.framework.js",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.wasm.br",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/StreamingAssets",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.loader.js",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.data.br",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.framework.js",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.wasm.br"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_frag.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/frag.html",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/TemplateData/style.css",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.data.br",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.framework.js",
        "https://cdn.jsdelivr.net/command3VKWithoutLTO.wasm.br",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/StreamingAssets",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.loader.js",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.data.br",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.framework.js",
        "https://cdn.jsdelivr.net/gh/testamalame/xh677z@main/Build/command3VKWithoutLTO.wasm.br"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdwebv1.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdwebv1.html",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/allObjects.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/allLevels.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/phaser.min.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/pako.min.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/index-game.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/style.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_gdwebv1.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdwebv1.html",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/allObjects.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/allLevels.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/phaser.min.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/pako.min.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/scripts/index-game.js",
        "https://cdn.jsdelivr.net/gh/mrdavidzs/web-dashers.github.io@latest/assets/style.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdweb.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdweb.html",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/libs/phaser.min.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/libs/pako.min.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/game/allObjects.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/game/allLevels.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/utils/cache-manager.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/api/GDapiWrapper.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/utils/config.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/triggers.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/level.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/player.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/audio.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/loading-screen.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/game-scene.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/main.js",
        "https://cdn.jsdelivr.net/assets/favicon.ico",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/style.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_gdweb.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gdweb.html",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/libs/phaser.min.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/libs/pako.min.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/game/allObjects.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/game/allLevels.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/utils/cache-manager.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/api/GDapiWrapper.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/utils/config.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/triggers.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/level.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/player.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/audio.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/loading-screen.js",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/game-scene.js?latest",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/scripts/core/main.js",
        "https://cdn.jsdelivr.net/assets/favicon.ico",
        "https://cdn.jsdelivr.net/gh/ihavenoidea212/geometry-dash@latest/assets/style.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/actualgd.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/actualgd.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/actualgd/gd_scramjet.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/actualgd/ref/logo.png"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_actualgd.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/actualgd.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/actualgd/gd_scramjet.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/actualgd/ref/logo.png"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gd3d.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gd3d.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/v2.02c5b63d689c6bc2f83c.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_gd3d.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gd3d.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/v2.02c5b63d689c6bc2f83c.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/style.css",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/3d/Build/GeometryDash.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gtag.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gtag.html",
        "https://cdn.jsdelivr.net/gh/web-ports/gorilla-tag@latest/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/gorilla-tag@latest/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gtagwebR2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gtagwebR2.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_gtag.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/gtag.html",
        "https://cdn.jsdelivr.net/gh/web-ports/gorilla-tag@latest/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/gorilla-tag@latest/TemplateData/style.css",
        "https://cdn.jsdelivr.net/gtagwebR2.framework.js.unityweb",
        "https://cdn.jsdelivr.net/gtagwebR2.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/granny2.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/granny2.html",
        "https://cdn.jsdelivr.net/gh/testamalame/sef@main/sedk.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny%202.loader.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny%202.frameworkx.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/Granny%202.frameworkx.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part1.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part2.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part3.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part1.wasm",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part2.wasm"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_granny2.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/granny2.html",
        "https://cdn.jsdelivr.net/gh/testamalame/sef@main/sedk.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny%202.loader.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny%202.frameworkx.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/Granny%202.frameworkx.js",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part1.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part2.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part3.data",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part1.wasm",
        "https://cdn.jsdelivr.net/gh/forms-docs-slides-glgl/ngng@main/Build/Granny 2_part2.wasm"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknight.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknight.html",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight@latest/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight@latest/TemplateData/style.css",
        "https://cdn.jsdelivr.net/hk.framework.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_hollowknight.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknight.html",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight@latest/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight@latest/TemplateData/style.css",
        "https://cdn.jsdelivr.net/hk.framework.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknightsilksong.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknightsilksong.html",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/jszip.js",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/TemplateData/style.css",
        "https://cdn.jsdelivr.net/w-pt.data.unityweb",
        "https://cdn.jsdelivr.net/w-pt.framework.js.unityweb",
        "https://cdn.jsdelivr.net/w-pt.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_hollowknightsilksong.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hollowknightsilksong.html",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/jszip.js",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/web-ports/hollow-knight-silksong@master/TemplateData/style.css",
        "https://cdn.jsdelivr.net/w-pt.data.unityweb",
        "https://cdn.jsdelivr.net/w-pt.framework.js.unityweb",
        "https://cdn.jsdelivr.net/w-pt.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/impossiblequiz.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/impossiblequiz.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/js/main.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/ruffle.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.swf"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_impossiblequiz.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/impossiblequiz.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/js/main.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/ruffle.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.swf"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/indiantruckdriving.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/indiantruckdriving.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.wasm.code.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.wasm.framework.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_indiantruckdriving.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/indiantruckdriving.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.wasm.code.unityweb",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/truck/Build/indian_truck_gd_2_0_1.wasm.framework.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/infinite.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/infinite.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_infinite.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/infinite.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/justbuild.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/justbuild.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/adinLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/favicon.ico"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_justbuild.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/justbuild.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/adinLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/justbuild/favicon.ico"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten/TemplateData/style.css",
        "https://cdn.jsdelivr.net/Build.data",
        "https://cdn.jsdelivr.net/Build.framework.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_kindergarten.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten/TemplateData/style.css",
        "https://cdn.jsdelivr.net/Build.data",
        "https://cdn.jsdelivr.net/Build.framework.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten2.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten2.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten2/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten2/TemplateData/style.css",
        "https://cdn.jsdelivr.net/Build.framework.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_kindergarten2.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten2.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten2/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten2/TemplateData/style.css",
        "https://cdn.jsdelivr.net/Build.framework.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten3.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten3.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten3/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten3/TemplateData/style.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_kindergarten3.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/kindergarten3.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten3/TemplateData/favicon.ico",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/kindergarten3/TemplateData/style.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/pocketediton.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/pocketediton.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/mcpe/index.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/mcpe/manifest.json"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_pocketediton.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/pocketediton.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/mcpe/index.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/mcpe/manifest.json"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/plagueinc.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/plagueinc.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/inc/Build/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_plagueinc.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/plagueinc.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/inc/Build/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ragdoll.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ragdoll.html",
        "https://cdn.jsdelivr.net/gh/testamalame/sef@main/sedk.js",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/v111.loader.js",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/style.css",
        "https://cdn.jsdelivr.net/6697b6deba8b617c67b69c55dcd07cb1.data.unityweb",
        "https://cdn.jsdelivr.net/0be3c3ee7115b26e1ae28e643afdf1f2.js.unityweb",
        "https://cdn.jsdelivr.net/b3397c29f6878557c1c614cbf9e196ea.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/6697b6deba8b617c67b69c55dcd07cb1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/0be3c3ee7115b26e1ae28e643afdf1f2.js.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/b3397c29f6878557c1c614cbf9e196ea.wasm.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_ragdoll.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ragdoll.html",
        "https://cdn.jsdelivr.net/gh/testamalame/sef@main/sedk.js",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/v111.loader.js",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/style.css",
        "https://cdn.jsdelivr.net/6697b6deba8b617c67b69c55dcd07cb1.data.unityweb",
        "https://cdn.jsdelivr.net/0be3c3ee7115b26e1ae28e643afdf1f2.js.unityweb",
        "https://cdn.jsdelivr.net/b3397c29f6878557c1c614cbf9e196ea.wasm.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/6697b6deba8b617c67b69c55dcd07cb1.data.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/0be3c3ee7115b26e1ae28e643afdf1f2.js.unityweb",
        "https://cdn.jsdelivr.net/gh/images-classroom-sources/ok@main/Build/b3397c29f6878557c1c614cbf9e196ea.wasm.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/snowrider.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/snowrider.html",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/TemplateData/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/Build/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/UB.png",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/TemplateData/style.css"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_snowrider.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/snowrider.html",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/TemplateData/UnityProgress.js",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/Build/UnityLoader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/UB.png",
        "https://cdn.jsdelivr.net/gh/era6yera6y/00@main/TemplateData/style.css"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/soccerrandom.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/soccerrandom.html"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_soccerrandom.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/soccerrandom.html"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/soccerbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/soccerbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/soccerbros/SoccerBros.js?th=102",
        "https://hb-bluewizard.s3.us-east-2.amazonaws.com/soccerbros.gg/asc_prebid.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/favicon.png",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/manifest.json"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_assets_html_main_soccerbros.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/soccerbros.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/soccerbros/SoccerBros.js?th=102",
        "https://hb-bluewizard.s3.us-east-2.amazonaws.com/soccerbros.gg/asc_prebid.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/favicon.png",
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3/assets/html/main/manifest.json"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/spacewaves.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/spacewaves.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/e4aa851098e3e5d328e4d879078ad6c5.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/f3dc87e8bc321dd382fbd3fa53e1091f.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/9adf8a1aafea4c2333e26d66a8b36d56.wasm"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_spacewaves.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/spacewaves.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/e4aa851098e3e5d328e4d879078ad6c5.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/f3dc87e8bc321dd382fbd3fa53e1091f.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@latest/space/Build/9adf8a1aafea4c2333e26d66a8b36d56.wasm"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/stickman.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/stickman.html",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/data.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.loader.js",
        "https://cdn.jsdelivr.net/sd.data.js",
        "https://cdn.jsdelivr.net/sd.js",
        "https://cdn.jsdelivr.net/sd.wasm.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.data.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.wasm.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_stickman.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/stickman.html",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/data.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.loader.js",
        "https://cdn.jsdelivr.net/sd.data.js",
        "https://cdn.jsdelivr.net/sd.js",
        "https://cdn.jsdelivr.net/sd.wasm.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.data.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.js",
        "https://cdn.jsdelivr.net/gh/Ieoldj-hs101082/Koans@03568ae5309942037071f3e50daf892ae3539c31/logic/sd.wasm.js"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/subway.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/subway.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/4399.z.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/poki-sdk-core-v2.234.2.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/master-loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/poki-sdk.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/unity.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/UnityLoader.2019.2.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/img/UB.png"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_subway.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/subway.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/4399.z.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/poki-sdk-core-v2.234.2.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/master-loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/poki-sdk.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/unity.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/UnityLoader.2019.2.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math/subway2/img/UB.png"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hardestgame.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hardestgame.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/js/main.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/ruffle.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/game/game.swf"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_hardestgame.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/hardestgame.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/js/main.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/ruffle.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/quiz/impossiblequiz.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/game/game.swf"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ultra.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ultra.html",
        "https://cdn.jsdelivr.net/gh/kelsimsk/ugil@main/Build/ultrakill.loader.js",
        "https://cdn.jsdelivr.net/gh/kelsimsk/ugil@main/Build/ultrakill.framework.js.unityweb"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_ultra.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/ultra.html",
        "https://cdn.jsdelivr.net/gh/kelsimsk/ugil@main/Build/ultrakill.loader.js",
        "https://cdn.jsdelivr.net/gh/kelsimsk/ugil@main/Build/ultrakill.framework.js.unityweb"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/goosegame.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/goosegame.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/goose.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled%20Goose%20Game.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled Goose Game.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled Goose Game.wasm"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_goosegame.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/goosegame.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/goose.png",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled%20Goose%20Game.framework.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled Goose Game.data",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/goosegame/Build/Untitled Goose Game.wasm"
    ],
    "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/whosyourdaddy.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/whosyourdaddy.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/daddy/Build/daddyreeyuki.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/daddy/Build/daddyreeyuki.framework.js"
    ],
    "cdn.jsdelivr.net_gh_s0n-1m-cr1n3_sc13nc3_latest_assets_html_main_whosyourdaddy.html": [
        "https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@latest/assets/html/main/whosyourdaddy.html",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/daddy/Build/daddyreeyuki.loader.js",
        "https://cdn.jsdelivr.net/gh/matheveryday25/math@main/daddy/Build/daddyreeyuki.framework.js"
    ]
};

const gameDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(GAME_DB_NAME, GAME_DB_VERSION);

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(GAME_STORE_NAME)) {
            db.createObjectStore(GAME_STORE_NAME, { keyPath: 'id' });
        }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
});

// Active in-flight downloads for crash/interruption cleanup and cancellation
const activeInFlightDownloads = new Map();
const activeControllers = new Map();

// Automatic cleanup if page refreshes or unloads during download
if (typeof window !== 'undefined') {
    const cleanInterrupted = () => {
        for (const [id, fileUrl] of activeInFlightDownloads.entries()) {
            try {
                // Record in session to purge on next startup if interrupted
                const current = JSON.parse(sessionStorage.getItem('pinpoint_pending_purges') || '[]');
                if (!current.some(item => item.id === id)) {
                    current.push({ id, fileUrl });
                    sessionStorage.setItem('pinpoint_pending_purges', JSON.stringify(current));
                }
            } catch(e) {}
        }
    };
    window.addEventListener('beforeunload', cleanInterrupted);
    window.addEventListener('pagehide', cleanInterrupted);

    // Run startup purge of any interrupted downloads
    setTimeout(async () => {
        try {
            const raw = sessionStorage.getItem('pinpoint_pending_purges');
            if (raw) {
                const purges = JSON.parse(raw);
                sessionStorage.removeItem('pinpoint_pending_purges');
                for (const item of purges) {
                    await PinpointGameStorage.deleteGame(item.id, item.fileUrl);
                }
            }
        } catch(e) {}
    }, 1000);
}

const PinpointGameStorage = {
    RECOMMENDED_LIMIT_BYTES,

    getManifest(fileUrl) {
        if (GAME_MANIFESTS[fileUrl]) return GAME_MANIFESTS[fileUrl];
        const norm = fileUrl.replace(/^\/+/, '');
        if (GAME_MANIFESTS[norm]) return GAME_MANIFESTS[norm];
        if (norm.endsWith('/index.html') && GAME_MANIFESTS[norm.replace('/index.html', '/')]) {
            return GAME_MANIFESTS[norm.replace('/index.html', '/')];
        }
        if (norm.endsWith('/') && GAME_MANIFESTS[norm + 'index.html']) {
            return GAME_MANIFESTS[norm + 'index.html'];
        }
        if (!norm.endsWith('/') && !norm.endsWith('.html') && GAME_MANIFESTS[norm + '/index.html']) {
            return GAME_MANIFESTS[norm + '/index.html'];
        }
        if (/^https?:\/\//i.test(fileUrl)) return [fileUrl];
        return ['/' + norm];
    },

    async isDownloaded(id) {
        try {
            const db = await gameDbPromise;
            return new Promise((resolve) => {
                const tx = db.transaction([GAME_STORE_NAME], 'readonly');
                const store = tx.objectStore(GAME_STORE_NAME);
                const req = store.get(id);
                req.onsuccess = () => resolve(!!req.result);
                req.onerror = () => resolve(false);
            });
        } catch(e) { return false; }
    },

    isDownloading(id) {
        return activeControllers.has(id);
    },

    cancelDownload(id) {
        if (activeControllers.has(id)) {
            const ctrl = activeControllers.get(id);
            ctrl.abort();
            activeControllers.delete(id);
            return true;
        }
        return false;
    },

    async getGame(id) {
        const db = await gameDbPromise;
        return new Promise((resolve, reject) => {
            const tx = db.transaction([GAME_STORE_NAME], 'readonly');
            const store = tx.objectStore(GAME_STORE_NAME);
            const req = store.get(id);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    },

    async getAllGames() {
        try {
            const db = await gameDbPromise;
            return new Promise((resolve, reject) => {
                const tx = db.transaction([GAME_STORE_NAME], 'readonly');
                const store = tx.objectStore(GAME_STORE_NAME);
                const req = store.getAll();
                req.onsuccess = () => resolve(req.result || []);
                req.onerror = () => resolve([]);
            });
        } catch(e) { return []; }
    },

    async downloadGame(id, title, fileUrl, onProgress) {
        if (activeControllers.has(id)) {
            throw new Error('Download already in progress');
        }

        const controller = new AbortController();
        activeControllers.set(id, controller);
        activeInFlightDownloads.set(id, fileUrl);

        const assets = this.getManifest(fileUrl);
        let cache = null;
        if (typeof caches !== 'undefined') {
            try {
                cache = await caches.open(GAME_CACHE_NAME);
            } catch(e) {
                console.warn('CacheStorage not accessible:', e);
            }
        }

        let totalBytes = 0;
        let mainContent = '';
        let completedAssets = 0;

        try {
            for (let i = 0; i < assets.length; i++) {
                const assetUrl = assets[i];
                if (controller.signal.aborted) {
                    const err = new Error('Download cancelled');
                    err.name = 'AbortError';
                    throw err;
                }

                const clean = assetUrl.replace(/^\/+/, '');
                if (!clean || clean.endsWith('/') || /google\.com|googletagmanager|google-analytics|gamedistribution|poki\.com|crazygames|gameanalytics/i.test(assetUrl)) {
                    completedAssets++;
                    continue;
                }

                let res;
                try {
                    res = await fetch(assetUrl, { signal: controller.signal });
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const checkCl = res.headers.get('content-length');
                    if (checkCl && parseInt(checkCl, 10) < 300 && assetUrl.endsWith('.html')) {
                        const previewText = await res.clone().text();
                        if (previewText.includes('Package size exceeded')) throw new Error('Package size exceeded');
                    }
                } catch(primaryErr) {
                    const clean = assetUrl.replace(/^\/+/, '');
                    let fallbackUrls = [];
                    if (/^https?:\/\//i.test(assetUrl)) {
                        if (assetUrl.includes('jsdelivr.net/gh/')) {
                            fallbackUrls.push(assetUrl.replace(/https?:\/\/[^/]*\.jsdelivr\.net\/gh\/([^/@]+)\/([^/@]+)(?:@[^/]+)?\//, 'https://raw.githubusercontent.com/$1/$2/main/'));
                        }
                    } else {
                        fallbackUrls = [
                            'https://cdn.jsdelivr.net/gh/pinpoint-edu/assets@main/' + clean,
                            'https://fastly.jsdelivr.net/gh/pinpoint-edu/assets@main/' + clean,
                            'https://raw.githubusercontent.com/pinpoint-edu/assets/main/' + clean
                        ];
                    }
                    let loaded = false;
                    for (const fbUrl of fallbackUrls) {
                        try {
                            res = await fetch(fbUrl, { signal: controller.signal });
                            if (res.ok) {
                                loaded = true;
                                break;
                            }
                        } catch(e) {}
                    }
                    if (!loaded) {
                        if (i === 0) throw primaryErr;
                        console.warn('Optional asset could not be downloaded:', assetUrl);
                        completedAssets++;
                        continue;
                    }
                }

                const contentLength = parseInt(res.headers.get('content-length') || '0', 10);
                let assetBlob;

                if (res.body && typeof res.body.getReader === 'function' && contentLength > 0) {
                    const reader = res.body.getReader();
                    const chunks = [];
                    let receivedBytes = 0;

                    while (true) {
                        if (controller.signal.aborted) {
                            reader.cancel().catch(() => {});
                            const err = new Error('Download cancelled');
                            err.name = 'AbortError';
                            throw err;
                        }
                        const { done, value } = await reader.read();
                        if (done) break;
                        chunks.push(value);
                        receivedBytes += value.length;

                        const assetFraction = assets.length > 0 ? (i / assets.length) : 0;
                        const thisAssetProgress = (receivedBytes / contentLength) * (1 / assets.length);
                        const overallPercent = Math.min(99, Math.round((assetFraction + thisAssetProgress) * 100));

                        if (typeof onProgress === 'function') {
                            onProgress({
                                completed: i,
                                total: assets.length,
                                percent: overallPercent,
                                bytes: totalBytes + receivedBytes
                            });
                        }
                    }
                    assetBlob = new Blob(chunks);
                } else {
                    assetBlob = await res.blob();
                }

                totalBytes += assetBlob.size;

                if (cache) {
                    try {
                        const ext = assetUrl.split('.').pop().toLowerCase().split('?')[0];
                        const mimeMap = {
                            'wasm': 'application/wasm',
                            'js': 'application/javascript; charset=utf-8',
                            'json': 'application/json; charset=utf-8',
                            'swf': 'application/x-shockwave-flash',
                            'html': 'text/html; charset=utf-8',
                            'htm': 'text/html; charset=utf-8',
                            'css': 'text/css; charset=utf-8',
                            'png': 'image/png',
                            'jpg': 'image/jpeg',
                            'jpeg': 'image/jpeg',
                            'gif': 'image/gif',
                            'svg': 'image/svg+xml',
                            'ico': 'image/x-icon',
                            'webm': 'video/webm'
                        };

                        const headers = new Headers(res.headers);
                        if (mimeMap[ext]) {
                            headers.set('content-type', mimeMap[ext]);
                        }

                        const cacheRes = new Response(assetBlob, {
                            headers: headers,
                            status: 200,
                            statusText: 'OK'
                        });

                        const putKeys = new Set([
                            assetUrl,
                            new URL(assetUrl, window.location.href).href,
                            assetUrl.replace(/^\/+/, ''),
                            decodeURIComponent(assetUrl),
                            encodeURI(assetUrl)
                        ]);

                        if (assetUrl.endsWith('/index.html')) {
                            const dirPath = assetUrl.replace(/index\.html$/, '');
                            const dirNoSlash = dirPath.replace(/\/$/, '');
                            putKeys.add(dirPath);
                            putKeys.add(dirNoSlash);
                            putKeys.add(new URL(dirPath, window.location.href).href);
                            putKeys.add(new URL(dirNoSlash, window.location.href).href);
                        } else if (assetUrl.endsWith('/')) {
                            const indexPath = assetUrl + 'index.html';
                            const noSlash = assetUrl.replace(/\/$/, '');
                            putKeys.add(indexPath);
                            putKeys.add(noSlash);
                            putKeys.add(new URL(indexPath, window.location.href).href);
                            putKeys.add(new URL(noSlash, window.location.href).href);
                        }

                        for (const k of putKeys) {
                            try {
                                await cache.put(k, cacheRes.clone());
                            } catch(e) {}
                        }
                    } catch(err) {
                        console.warn('Could not cache asset in CacheStorage:', assetUrl, err);
                    }
                }

                if (assetUrl === fileUrl || assetUrl.endsWith('.html') || assetUrl.endsWith('/')) {
                    if (!mainContent) {
                        try {
                            mainContent = await assetBlob.text();
                        } catch(e) {}
                    }
                }

                completedAssets++;
                const overallPercent = Math.round((completedAssets / assets.length) * 100);
                if (typeof onProgress === 'function') {
                    onProgress({ completed: completedAssets, total: assets.length, percent: overallPercent, bytes: totalBytes });
                }
            }

            const db = await gameDbPromise;
            const record = await new Promise((resolve, reject) => {
                const tx = db.transaction([GAME_STORE_NAME], 'readwrite');
                const store = tx.objectStore(GAME_STORE_NAME);
                const gameRecord = {
                    id: id,
                    title: title,
                    fileUrl: fileUrl,
                    content: mainContent,
                    assets: assets,
                    sizeBytes: totalBytes,
                    downloadedAt: new Date().toISOString()
                };
                const req = store.put(gameRecord);
                req.onsuccess = () => resolve(gameRecord);
                req.onerror = () => reject(req.error);
            });

            activeControllers.delete(id);
            activeInFlightDownloads.delete(id);
            return record;

        } catch (downloadErr) {
            activeControllers.delete(id);
            activeInFlightDownloads.delete(id);
            try {
                await this.deleteGame(id, fileUrl);
            } catch (cleanupErr) {
                console.warn('Cleanup error after failed download:', cleanupErr);
            }
            throw downloadErr;
        }
    },

    async deleteGame(id, fileUrl) {
        // 1. Delete from CacheStorage
        if (typeof caches !== 'undefined') {
            try {
                const cache = await caches.open(GAME_CACHE_NAME);
                const assets = fileUrl ? this.getManifest(fileUrl) : [];
                for (const assetUrl of assets) {
                    const delKeys = [
                        assetUrl,
                        new URL(assetUrl, window.location.href).href,
                        assetUrl.replace(/^\/+/, ''),
                        decodeURIComponent(assetUrl),
                        encodeURI(assetUrl)
                    ];
                    if (assetUrl.endsWith('/index.html')) {
                        const dirPath = assetUrl.replace(/index\.html$/, '');
                        delKeys.push(dirPath, dirPath.replace(/\/$/, ''), new URL(dirPath, window.location.href).href);
                    } else if (assetUrl.endsWith('/')) {
                        const indexPath = assetUrl + 'index.html';
                        delKeys.push(indexPath, assetUrl.replace(/\/$/, ''), new URL(indexPath, window.location.href).href);
                    }
                    for (const k of delKeys) {
                        try { await cache.delete(k); } catch(e) {}
                    }
                }
            } catch(e) {
                console.warn('Error clearing CacheStorage:', e);
            }
        }

        // 2. Delete from IndexedDB
        const db = await gameDbPromise;
        return new Promise((resolve, reject) => {
            const tx = db.transaction([GAME_STORE_NAME], 'readwrite');
            const store = tx.objectStore(GAME_STORE_NAME);
            const req = store.delete(id);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    },

    async clearAllDownloads() {
        // 1. Clear entire game cache in CacheStorage
        if (typeof caches !== 'undefined') {
            try {
                await caches.delete(GAME_CACHE_NAME);
            } catch(e) {
                console.warn('Error deleting CacheStorage cache:', e);
            }
        }

        // 2. Clear entire object store in IndexedDB
        const db = await gameDbPromise;
        return new Promise((resolve, reject) => {
            const tx = db.transaction([GAME_STORE_NAME], 'readwrite');
            const store = tx.objectStore(GAME_STORE_NAME);
            const req = store.clear();
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
};

window.PinpointGameStorage = PinpointGameStorage;

// Safely register Service Worker only if on matching HTTP/HTTPS origin
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http') && window.location.origin && window.location.origin !== 'null' && !window.location.origin.includes('googleusercontent')) {
    try {
        const swUrl = new URL('/sw.js', window.location.href);
        if (swUrl.origin === window.location.origin) {
            if (document.readyState === 'complete') {
                navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
            } else {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
                });
            }
        }
    } catch(e) {}
}
