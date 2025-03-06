// sw.js
self.addEventListener('install', (event) => {
    console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
    // You can add caching logic here if needed
    // For example:
    // event.respondWith(
    //   caches.match(event.request).then((response) => {
    //     return response || fetch(event.request);
    //   })
    // );
});