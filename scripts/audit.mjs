import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const distDir = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const compressibleTypes = new Set([
  'text/html; charset=utf-8',
  'text/css; charset=utf-8',
  'application/javascript; charset=utf-8',
  'application/json; charset=utf-8',
  'image/svg+xml',
  'application/xml; charset=utf-8',
  'text/plain; charset=utf-8',
  'application/manifest+json'
]);

function createStaticServer(port) {
  const server = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0].split('#')[0];
    let filePath = path.join(distDir, cleanUrl);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      let content = fs.readFileSync(filePath);

      const acceptEncoding = req.headers['accept-encoding'] || '';
      const headers = {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      };

      if (compressibleTypes.has(contentType) && acceptEncoding.includes('gzip')) {
        content = zlib.gzipSync(content);
        headers['Content-Encoding'] = 'gzip';
      }

      res.writeHead(200, headers);
      res.end(content);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      resolve(server);
    });
  });
}

const pagesToAudit = [
  '/',
  '/privacy',
  '/compare',
  '/compare/raindrop',
  '/compare/omnivore',
  '/compare/anybox',
  '/compare/webbites',
  '/blog',
  '/blog/chrome-built-in-ai-gemini-nano-local-knowledge-base',
];

async function run() {
  const port = 4326;
  console.log(`Starting production static server with gzip compression on http://localhost:${port}...`);
  const server = await createStaticServer(port);

  console.log('Launching headless Chrome for Lighthouse audits...');
  const chrome = await chromeLauncher.launch({
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--enable-automation']
  });

  const allResults = [];

  try {
    for (const pagePath of pagesToAudit) {
      const targetUrl = `http://localhost:${port}${pagePath}`;
      console.log(`\n======================================================`);
      console.log(`Auditing: ${targetUrl}`);
      console.log(`======================================================`);

      const options = {
        logLevel: 'error',
        output: 'json',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
      };

      const runnerResult = await lighthouse(targetUrl, options);
      const report = runnerResult.lhr;

      const pScore = Math.round(report.categories.performance.score * 100);
      const aScore = Math.round(report.categories.accessibility.score * 100);
      const bScore = Math.round(report.categories['best-practices'].score * 100);
      const sScore = Math.round(report.categories.seo.score * 100);

      allResults.push({
        path: pagePath,
        performance: pScore,
        accessibility: aScore,
        bestPractices: bScore,
        seo: sScore,
      });

      console.log(`📊 SCORES: Performance: ${pScore} | Accessibility: ${aScore} | Best Practices: ${bScore} | SEO: ${sScore}`);

      for (const [catKey, category] of Object.entries(report.categories)) {
        const catScore = Math.round(category.score * 100);
        if (catScore < 100) {
          console.log(`\n  ⚠️ ${category.title} (< 100, Score: ${catScore}):`);
          for (const auditRef of category.auditRefs) {
            const audit = report.audits[auditRef.id];
            if (audit && audit.score !== null && audit.score < 1) {
              console.log(`    - [${audit.score === 0 ? 'FAIL' : 'WARN'}] ${audit.id} (weight ${auditRef.weight}, score ${audit.score}): ${audit.title}`);
              if (audit.displayValue) console.log(`        Value: ${audit.displayValue}`);
              if (audit.explanation) console.log(`        Explanation: ${audit.explanation}`);
              if (audit.details?.items?.length) {
                for (const item of audit.details.items.slice(0, 3)) {
                  if (item.node?.snippet) console.log(`        Element: ${item.node.snippet} (${item.node.explanation || ''})`);
                  else if (item.url) console.log(`        Resource: ${item.url}`);
                }
              }
            }
          }
        }
      }
    }

    console.log('\n\n======================================================');
    console.log('🏁 FINAL AUDIT SUMMARY ACROSS ALL PAGES');
    console.log('======================================================');
    console.table(allResults);

  } finally {
    await chrome.kill();
    server.close();
  }
}

run().catch(err => {
  console.error('Audit Error:', err);
  process.exit(1);
});
