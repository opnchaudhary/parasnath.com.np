// This file is intentionally without code.
// It's present so that service worker registration will work when serving from the 'app' directory.
// The version of service-worker.js that's present in the 'dist' directory is automatically
// generated by the 'generate-service-worker' gulp task, and contains code to precache resources.
const version = "0.1.0";
const cacheName = `parasnath-${version}`;

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(cacheName).then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/style.min.css',
       '/images/paras.jpg',
       '/images/paras-nath-chaudhary.jpg',
       '/images/visit-nepal-2020.png'
     ]).then(() => self.skipWaiting());
   })
 );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
  });