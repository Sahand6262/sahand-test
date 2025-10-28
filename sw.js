// Production-ready Service Worker for Caching

const CACHE_NAME = 'kti-registration-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Note: We don't cache the TSX files directly as they are bundled/imported by the browser.
  // The browser's import mechanism will handle caching of these modules via esm.sh which uses HTTP caching headers.
  // We cache the main entry points and static assets.
  '/load.tsx',
  '/footer.tsx',
  'https://kti.edu.iq/photo/kti_52_0.png',
  'https://kti.edu.iq/photo/kti_53_01702585603.jpg',
];

// Install event: opens a cache and adds main assets to it
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Failed to cache assets during install:', error);
      })
  );
});

// Activate event: cleans up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: serves assets from cache first, falls back to network
self.addEventListener('fetch', event => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Don't cache API requests
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch from network, then cache it
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200) {
              return response;
            }
            
            // For third-party resources (like esm.sh), we respect their caching but don't add opaque responses to our cache.
            if(response.type !== 'basic' && response.type !== 'cors') {
                return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
