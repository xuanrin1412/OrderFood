// import { ExtendableEvent, FetchEvent, Workbox, cacheNames } from 'workbox-core';

// const CACHE_NAME: string = "version-1";
// const urlsToCache = ["index.html", "offline.html"];

// // Define service worker configuration (optional)
// // const workboxConfig: Workbox.WorkboxOptions = {
// //   // Customize caching strategies, precaching options, etc.
// // };

// self.addEventListener('install', (event: ExtendableEvent) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         console.log('Open cache');
//         console.log(cache);
//         return cache.addAll(urlsToCache) as Promise<void>;
//       })
//   );
// });

// self.addEventListener('fetch', (event: FetchEvent) => {
//   event.respondWith(
//     async () => {
//       const cachedResponse = await caches.match(event.request);
//       if (cachedResponse) {
//         return cachedResponse;
//       }

//       try {
//         const networkResponse = await fetch(event.request);
//         return networkResponse;
//       } catch (error) {
//         return caches.match("offline.html");
//       }
//     }
//   );
// });

// self.addEventListener('fetch', async (event: FetchEvent) => {
//   console.log("event", event);

//   const cacheWhitelist: string[] = [CACHE_NAME];

//   await caches.keys().then((cacheNames: string[]) => {
//     return Promise.all(
//       cacheNames.map(async (cacheName) => {
//         if (!cacheWhitelist.includes(cacheName)) {
//           await caches.delete(cacheName);
//         }
//       })
//     );
//   });
// });
