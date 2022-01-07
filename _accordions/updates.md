---
accordion_page: Home
order: 7
title: Updating the App
---

## Updating the App (and the Service Worker)
{: .h2.mb-4 id="creating-service-worker"}

<br>

In the **Progressive Web App** (PWA) architecture, service workers are used to serve the app cache-first. This gives the website or app near instantaneous load times on subsequent loads.
{: .p}

If any cached resource in the app/website has changed, the cache needs to be updated to reflect this change. Otherwise, you will 
always see the old version served from the cache.
{: .p}

To update the cache you will need to delete the old one. However, **you will want the new version of the service worker and cache 
to be ready for installation before we do any deletion.** Once the old cache is deleted, the new one can begin populating immediately.
{: .p}

By design, service workers will not activate until all tabs/windows using the old version of the worker are closed. 
**Once they are all closed, the new version will activate** and it can then install the new version which should already be waiting for the `oninstall`{: .code} event.
{: .p}

Use the `activate`{: .code} event and `event.waitUntil()`{: .code} to manipulate the caches during service worker activation.
{: .p}

The `cacheKeeplist`{: .code} constant below holds an array of cache version to keep:
{: .p}

```javascript
self.addEventListener('activate', (event) => {
  const cacheKeeplist = ['v2']; // Caches that should NOT be deleted

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
```