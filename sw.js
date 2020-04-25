var cacheName = 'shopping';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/bootstrap.css'
  '/css/font-awesome.css'
  '/css/skdslider.css',
  '/js/main.js',
  '/js/bootstrap.min.js',
  '/js/minicart.min.js',
  '/js/skdslider.min.js',
  '/js/skdslider.min.js'
  '/js/jquery-1.11.1.min.js'
  'js/move-top.js',
  'js/easing.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
