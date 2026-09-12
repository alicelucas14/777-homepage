const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3005;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Serve Homepage API responses
  if (pathname.startsWith('/api/')) {
    const cleanData = fs.existsSync('api_data_clean.json')
      ? JSON.parse(fs.readFileSync('api_data_clean.json', 'utf8'))
      : {};
    
    const keyWithQuery = pathname + (parsedUrl.search || '');
    const data = cleanData[keyWithQuery] || cleanData[pathname] || null;

    if (data !== null) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(data));
      return;
    }
  }

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const cleanRelPath = pathname.replace(/^\//, '');
  const filePath = path.join(__dirname, cleanRelPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  // Fallback to index.html
  const indexPath = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(indexPath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`  Stars777 Homepage Clone Running!`);
  console.log(`  URL: http://localhost:${PORT}`);
  console.log(`========================================\n`);
});
