/* ═══════════════════════════════════════════════
   SEVNTRACKER — Local Development Server
   Zero-dependency HTTP server using Node.js built-in modules.
   Usage: node serve.js [port]
   Default port: 3000
   ═══════════════════════════════════════════════ */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2], 10) || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
  '.webmanifest': 'application/manifest+json',
};

const server = http.createServer((req, res) => {
  // Parse URL and remove query string
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Default to index.html
  if (urlPath === '/' || urlPath === '') {
    urlPath = '/index.html';
  }

  // Security: prevent directory traversal
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT, safePath);

  // Ensure the resolved path is still within ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA fallback: serve index.html for non-file routes
      if (!path.extname(urlPath)) {
        const indexPath = path.join(ROOT, 'index.html');
        return serveFile(indexPath, res);
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    serveFile(filePath, res);
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // No-cache headers for development files
  const noCacheFiles = ['/index.html', '/service-worker.js', '/manifest.json'];
  const relative = '/' + path.relative(ROOT, filePath).replace(/\\/g, '/');
  const noCache = noCacheFiles.includes(relative);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    };

    if (noCache) {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    } else {
      headers['Cache-Control'] = 'public, max-age=3600';
    }

    res.writeHead(200, headers);
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════╗');
  console.log('  ║   💸 SevnTracker — Local Dev Server       ║');
  console.log('  ╠═══════════════════════════════════════════╣');
  console.log(`  ║   🌐 http://localhost:${PORT}               ║`);
  console.log('  ║   📂 Serving from: ' + ROOT.slice(0, 22).padEnd(22) + '  ║');
  console.log('  ║   🛑 Press Ctrl+C to stop                ║');
  console.log('  ╚═══════════════════════════════════════════╝');
  console.log('');
});
