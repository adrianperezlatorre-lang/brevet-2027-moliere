/* Service worker — Révisions Brevet 2027
   Stratégie :
   - navigations : réseau d'abord (pour recevoir les mises à jour), cache en secours (hors ligne) ;
   - autres fichiers du site : cache d'abord + mise à jour en arrière-plan (stale-while-revalidate).
   Les appels à Supabase (autre origine) ne sont jamais interceptés. */
const CACHE = 'brevet-moliere-v2';
const CORE = [
  './', 'index.html', 'styles.css', 'app.js', 'manifest.json',
  'data/maths.js', 'data/francais.js', 'data/histoire.js', 'data/geographie.js',
  'data/emc.js', 'data/svt.js', 'data/physique-chimie.js', 'data/technologie.js',
  'data/pratique.js', 'data/parcours.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;          // Supabase, YouTube… : jamais interceptés

  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req)
        .then(res => { const copie = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copie)); return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(enCache => {
      const maj = fetch(req)
        .then(res => { if(res.ok){ const copie = res.clone(); caches.open(CACHE).then(c => c.put(req, copie)); } return res; })
        .catch(() => enCache);
      return enCache || maj;
    })
  );
});
