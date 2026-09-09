/* ═══════════════════════════════════════════════
   SEVNTRACKER — service-worker.js
   Strategy: Cache First untuk asset statis,
   Network First untuk API kurs (frankfurter, er-api)
   ═══════════════════════════════════════════════ */

// Cache name pakai versi dari URL param — otomatis berubah tiap update versi
// tanpa perlu edit file service-worker.js manual
const swVersion = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE_NAME = 'sevntracker-' + swVersion;
const CACHE_URLS = [
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
];

/* ── INSTALL: cache semua asset utama ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS).catch(err => {
        // Jangan gagal install kalau CDN tidak bisa diakses (offline saat install)
        console.warn('[SW] Partial cache during install:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: hapus cache versi lama ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: strategi berdasarkan URL ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API kurs: Network First (butuh data terbaru), fallback ke cache
  const isRateAPI =
    url.hostname === 'api.frankfurter.app' ||
    url.hostname === 'open.er-api.com';

  if (isRateAPI) {
    event.respondWith(networkFirstStrategy(event.request));
    return;
  }

  // Telegram API: selalu lewat network, jangan di-cache
  if (url.hostname === 'api.telegram.org') {
    event.respondWith(fetch(event.request));
    return;
  }

  // Google Fonts & CDN: Cache First (tidak berubah)
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'cdn.jsdelivr.net'
  ) {
    event.respondWith(cacheFirstStrategy(event.request));
    return;
  }

  // Asset lokal (index.html, manifest, icons): Stale While Revalidate
  // → User dapat respons cepat dari cache, background update tetap jalan
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // Default: network saja
  event.respondWith(fetch(event.request));
});

/* ── STRATEGY: Cache First ── */
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline - resource not cached', { status: 503 });
  }
}

/* ── STRATEGY: Network First ── */
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request, { signal: AbortSignal.timeout(6000) });
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(JSON.stringify({ error: 'offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

/* ── STRATEGY: Stale While Revalidate ── */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || await fetchPromise || new Response('Offline', { status: 503 });
}

/* ── SKIP WAITING (untuk update langsung) ── */
self.addEventListener('message', event => {
  if (event.data?.action === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
