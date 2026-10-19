// sw.js — service worker: precache the app shell, models and cases; cache-first after that.
// Bump CACHE whenever a file changes so returning players get the new version.
const CACHE = "vital-clues-v2";
const PRECACHE = [
  "./",
  "index.html",
  "manifest.json",
  "css/app.css",
  "js/app.js",
  "js/board.js",
  "js/engine.js",
  "js/explain.js",
  "js/lab.js",
  "js/overlay.js",
  "js/predict.js",
  "js/progress.js",
  "js/rules.js",
  "js/score.js",
  "js/sketch.js",
  "models/altitude.json",
  "models/fuel-sugar.json",
  "models/hearing.json",
  "models/immune-pollen.json",
  "models/lungs-heart.json",
  "models/muscle-repair.json",
  "models/nerves-reflex.json",
  "models/skin-uv.json",
  "models/sleep-clock.json",
  "models/stress-response.json",
  "models/temperature.json",
  "models/water-balance.json",
  "cases/altitude-skier.json",
  "cases/index.json",
  "cases/jumpy-goalkeeper.json",
  "cases/ringing-ears.json",
  "cases/shivering-swimmer.json",
  "cases/skipped-breakfast.json",
  "cases/sleepy-gamer.json",
  "cases/sneezing-gardener.json",
  "cases/sore-weightlifter.json",
  "cases/stage-fright-singer.json",
  "cases/sunburned-lifeguard.json",
  "cases/thirsty-hiker.json",
  "cases/tired-athlete.json",
  "art/icon.svg",
  "art/icon-180.png",
  "art/icon-192.png",
  "art/icon-512.png"
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
