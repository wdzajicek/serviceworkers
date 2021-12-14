self.addEventListener('install', (event) => {
  event.waitUntil(
    fetch('/hash.json').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((obj) => {
      const hash = obj.hash;
      console.log('Hash log 1: ' + hash);
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './index.html',
          './404.html',
          `./assets/js/dist/main.${hash}.js`,
          `./assets/js/dist/main.${hash}.css`,
          `./assets/js/dist/29.${hash}.js`,
          `./assets/js/dist/314.${hash}.js`,
          `./assets/js/dist/671.${hash}.js`,
          `./assets/js/dist/909.${hash}.js`,
        ]);
      });
    })
    .catch((err) => {
      console.error(`Error in service worker's pre-install tasks: \n${err}`, err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
