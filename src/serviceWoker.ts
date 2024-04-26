const CACHE_NAME: string = "version-1";
const urlsToCache = ["index.html", "offline.html"];

self.addEventListener("install", (event: ExtendableEvent) => { 
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log("Open cache");
        // console.log(cache);
        // return cache.addAll(urlsToCache);
      })
    );
  });
  