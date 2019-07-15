/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "7d4fbb667c5b0610b2dcb262549adab5"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "cb0a544db431a059ac44b8b5a9fb60d3"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "1484ee76e02373c8aa0e875ca57b94e9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "55f20bc7ceed8eb212d0ba71714cef40"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "377eb52094b65e79ffe0575f7282ff54"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "41f883dce0faa4b49dcbead028c148fc"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "fb72ff61d7cfc47acc6c5f3cad636d27"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "848f525ee665f426599ce1ad43aa922a"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "370b548dcd09581fdb9895ceab1d8f07"
  },
  {
    "url": "index.html",
    "revision": "139a1d25edf7eb6cc4eca5abea141421"
  },
  {
    "url": "script.js",
    "revision": "78415586d28c183769cd7deea3ba9102"
  },
  {
    "url": "shutter.mp3",
    "revision": "c034d5fa7a416fa7f603a7437b30a159"
  },
  {
    "url": "style.css",
    "revision": "af127fb9caefe7793b61c0f20024bd93"
  },
  {
    "url": "workbox-config.js",
    "revision": "ef279bd333a7811e4df26ebad8a2037e"
  },
  {
    "url": "manifest.json",
    "revision": "732c8089f8e39f0599802abd90cce13f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
