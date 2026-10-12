// Termux/Android only: Astro 7's Markdown engine (satteri) ships no Android
// binary, so it falls back to its WASI build, which tries to pre-open "/" and
// fails on Android (UVWASI_EACCES). Pre-open the project directory instead.
// No-op on every other platform.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
if (process.platform === 'android') {
  const f = new URL('../node_modules/@bruits/satteri-wasm32-wasi/satteri_napi.wasi.cjs', import.meta.url);
  if (existsSync(f)) {
    const src = readFileSync(f, 'utf8');
    const patched = src.replace("const __rootDir = __nodePath.parse(process.cwd()).root", "const __rootDir = process.cwd() /* termux patch */");
    if (patched !== src) { writeFileSync(f, patched); console.log('[postinstall] patched satteri WASI preopen for Android'); }
  } else {
    console.log('[postinstall] Android: run `npm i -D --force @bruits/satteri-wasm32-wasi@<satteri version>` to enable the WASI fallback');
  }
}
