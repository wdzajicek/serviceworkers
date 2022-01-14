// Install event creates a cache and populates it
self.addEventListener('install', (event) => {
  event.waitUntil(
    // `./hash.json` is an object containing Webpack's fullhash as the `hash` keys value
    fetch('/serviceworkers/hash.json').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((obj) => {
      const hash = obj.hash;

      caches.open('v2').then((cache) => {
        return cache.addAll([
          './index.html',
          './404.html',
          './assets/img/header-bg.jpg',
          './favicon.ico',
          `./assets/js/dist/main.${hash}.js`,
          `./assets/js/dist/main.${hash}.css`,
          `./assets/js/dist/25.${hash}.js`,
          `./assets/js/dist/29.${hash}.js`,
          `./assets/js/dist/58.${hash}.js`,
          `./assets/js/dist/189.${hash}.js`,
          `./assets/js/dist/314.${hash}.js`,
          `./assets/js/dist/579.${hash}.js`,
          `./assets/js/dist/636.${hash}.js`,
          `./assets/js/dist/671.${hash}.js`,
          `./assets/js/dist/676.${hash}.js`,
          `./assets/js/dist/839.${hash}.js`,
          `./assets/js/dist/909.${hash}.js`,
        ]);
      });
    })
    .catch((err) => {
      console.error(`Error in service worker's pre-install tasks: \n${err}`, err);
    })
  );
});

// Fetch event serves resources from the cache first, or 
// fetches it and adds it to the cache if it doesn't exist:
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone();

        caches.open('v2').then((cache) => {
          cache.put(event.request, responseClone);
          return response;
        }).catch(err => console.error('Not found in cache and no network', err))
      });
    })
  );
});

// Activate event is used to delete old caches once a new service worker is activated:
self.addEventListener('activate', (event) => {
  const cacheKeeplist = ['v2']; // Array of cache versions to keep

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});