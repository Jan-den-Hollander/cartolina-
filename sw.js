// Briefkaart · Cartolina — service worker
// Netwerk-eerst: bij een update op Vercel krijg je meteen de nieuwste versie.
// Alleen als er geen internet is, valt de app terug op de laatst opgeslagen kopie (offline-gebruik).
const CACHE = "briefkaart-v3";
const SHELL = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./stamp.jpg", "./print.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (!req.url.startsWith(self.location.origin)) return;

  // Netwerk-eerst: altijd de laatste versie proberen te halen; alleen bij
  // een mislukte/offline fetch terugvallen op wat er in de cache staat.
  event.respondWith(
    fetch(req, { cache: "no-store" })
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
