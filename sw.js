const CACHE_NAME = 'cartolina-v2'; // ophogen bij een volgende opschoning forceert een verse cache
const CORE_ASSETS = [
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = req.url;

  // Weer-API's altijd rechtstreeks naar het netwerk, nooit cachen
  if (url.includes('open-meteo.com')) {
    event.respondWith(fetch(req).catch(() => new Response('{}', {headers:{'Content-Type':'application/json'}})));
    return;
  }

  // HTML-pagina's: network-first, zodat een nieuwe deploy altijd meteen zichtbaar is.
  // Val alleen terug op de cache als er geen internet is.
  if (req.mode === 'navigate' || (req.method === 'GET' && req.headers.get('accept')?.includes('text/html'))) {
    event.respondWith(
      fetch(req).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        return response;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Overige assets (iconen, manifest, lettertypen): cache-first, met achtergrond-ververs.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((response) => {
        if (response && response.status === 200 && req.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
