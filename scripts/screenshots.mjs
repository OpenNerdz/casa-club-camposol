// Captures review screenshots of every page. Usage:
//   node scripts/screenshots.mjs <baseUrl> <outDir> [chromiumPath]
// Uses playwright-core from a sibling project if not installed here.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright-core'); } catch { pw = require('/data/data/com.termux/files/home/projects/weather-showcase/node_modules/playwright-core'); }
const [base = 'http://127.0.0.1:4321', out = 'screens', exe = '/data/data/com.termux/files/usr/bin/chromium-browser'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const pages = ['/', '/restaurant/', '/golf/', '/events/', '/gallery/', '/contact/', '/legal/', '/privacy/', '/es/', '/es/restaurant/', '/es/golf/', '/es/events/', '/es/gallery/', '/es/contact/'];
const browser = await pw.chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] });
const errors = [];
for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }]]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: vp.deviceScaleFactor ?? 1, isMobile: vp.isMobile ?? false });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`${name} pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${name} console: ${m.text().slice(0, 200)}`); });
  page.on('requestfailed', (r) => { if (!r.url().includes('cartocdn') && !r.url().includes('gstatic')) errors.push(`${name} failed: ${r.url().slice(0, 160)}`); });
  const list = name === 'desktop' ? pages : pages.filter((p) => ['/', '/restaurant/', '/golf/', '/events/', '/contact/', '/es/'].includes(p));
  for (const p of list) {
    await page.goto(base + p, { waitUntil: 'networkidle', timeout: 60000 }).catch((e) => errors.push(`${name} goto ${p}: ${e.message}`));
    // trigger reveal animations
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    const hidden = await page.evaluate(() => document.querySelectorAll('.reveal:not(.is-visible)').length);
    if (hidden) errors.push(`${name} ${p}: ${hidden} .reveal elements never became visible`);
    const file = `${out}/${name}${p.replace(/\//g, '_') || '_'}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log('saved', file);
  }
  await ctx.close();
}
// Render the logo mark as the apple-touch-icon
const ctx = await browser.newContext({ viewport: { width: 180, height: 180 } });
const page = await ctx.newPage();
await page.setContent(`<html><body style="margin:0;background:#fbf8f2"><img src="${base}/images/logo-mark.svg" style="width:180px;height:180px;display:block"></body></html>`);
await page.waitForTimeout(300);
await page.screenshot({ path: `${out}/apple-touch-icon.png` });
await browser.close();
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no page errors');
