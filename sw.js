
self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('pelayo-map').then(cache=>cache.addAll(['./mapa.html']))
  );
});
