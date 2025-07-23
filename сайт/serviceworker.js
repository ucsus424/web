const CACHE_NAME = 'ratibor-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/trainers.html',
  '/schedule.html',
  '/athletes.html',
  '/style.css',
  '/images/title.webp',
  '/images/petrov.jpg',
  '/images/smirnov.jpg',
  '/images/gym.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});