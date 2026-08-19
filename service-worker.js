const CACHE_NAME = "mon-bish-v9-4-offline-audio";

const CORE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",

  "./sounds/correct.mp3",
  "./sounds/wrong.mp3",
  "./sounds/combo.mp3",
  "./sounds/record.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();

        caches
          .open(CACHE_NAME)
          .then(cache => cache.put(event.request, copy));

        return response;
      })
      .catch(() =>
        caches
          .match(event.request)
          .then(hit => hit || caches.match("./index.html"))
      )
  );
});
