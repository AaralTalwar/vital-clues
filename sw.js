// sw.js — service worker: precache the app shell, models and cases; cache-first after that.
// Bump CACHE whenever a file changes so returning players get the new version.
const CACHE = "vital-clues-v1";
const PRECACHE = [
  "./", "index.html", "manifest.json",
  "css/app.css",
  "js/app.js", "js/engine.js", "js/board.js", "js/predict.js", "js/sketch.js", "js/lab.js", "js/rules.js", "js/explain.js", "js/score.js",
  "models/lungs-heart.json",
  "cases/index.json", "cases/tired-athlete.json",
  "art/icon.svg", "art/icon-180.png", "art/icon-192.png", "art/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
