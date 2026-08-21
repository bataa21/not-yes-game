const CACHE_NAME = "mon-bish-v9-7-15-first-language-choice";

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
  if (event.request.method !== "GET") return;

  const requestURL = new URL(event.request.url);

  // Never intercept/cache browser-extension or other non-web schemes.
  if (requestURL.protocol !== "http:" && requestURL.protocol !== "https:") return;

  // Let Range requests (common for MP3/media) pass straight through.
  // Cache Storage does not support storing 206 Partial Content responses.
  if (event.request.headers.has("range")) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Navigations: network-first for freshness, offline fallback to index.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(new Request(event.request, { cache: "reload" }))
        .then(response => {
          if (
            response &&
            response.status === 200 &&
            response.type === "basic" &&
            requestURL.origin === self.location.origin
          ) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache only safe, complete same-origin responses.
        if (
          response &&
          response.status === 200 &&
          response.type === "basic" &&
          requestURL.origin === self.location.origin
        ) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// V9.7 Smart Update System
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
