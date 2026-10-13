// Rewrites root-relative URLs (href="/x", src="/x", url(/x)) in a built site to
// relative ones, so the build can be served from any sub-path (e.g. the review
// preview on claude.ai). Usage: node scripts/relativize.mjs <dir>
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, dirname, posix } from 'node:path';

const root = process.argv[2];
if (!root) { console.error('usage: relativize.mjs <dir>'); process.exit(1); }

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

const ATTR = /(\s(?:href|src|srcset|content|poster|action|data-src)=")(\/(?!\/)[^"]*)(")/g;
const CSS = /url\((['"]?)\/(?!\/)([^)'"]*)\1\)/g;

function toRel(fileDir, url) {
  // split off query/hash
  const m = url.match(/^([^?#]*)(.*)$/);
  let [, path, suffix] = m;
  if (path.endsWith('/')) path += 'index.html';
  let rel = posix.relative(fileDir, path);
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel + suffix;
}

let count = 0;
for await (const file of walk(root)) {
  if (!/\.(html|css|xml|webmanifest|json)$/.test(file)) continue;
  const fileDir = '/' + posix.normalize(relative(root, dirname(file)).split('\\').join('/'));
  let text = await readFile(file, 'utf8');
  const before = text;
  if (file.endsWith('.html')) {
    text = text.replace(ATTR, (_, a, url, c) => {
      if (url.startsWith('/http')) return _;
      return a + toRel(fileDir === '/.' ? '/' : fileDir, url) + c;
    });
    // srcset lists
    text = text.replace(/(\ssrcset=")([^"]*)(")/g, (_, a, list, c) =>
      a + list.split(',').map(s => s.trim().replace(/^\/(?!\/)(\S*)/, (_m, p) => toRel(fileDir === '/.' ? '/' : fileDir, '/' + p))).join(', ') + c);
  }
  text = text.replace(CSS, (_, q, p) => `url(${q}${toRel(fileDir === '/.' ? '/' : fileDir, '/' + p)}${q})`);
  if (text !== before) { await writeFile(file, text); count++; }
}
console.log(`relativized ${count} files under ${root}`);
