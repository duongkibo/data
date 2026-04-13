#!/usr/bin/env node
/**
 * Node.js downloader for Karma Pikaso patcher output.
 *
 * Usage:
 *   node download.mjs urls.json
 *   node download.mjs urls.json --out outputs/ep01
 *
 * urls.json format (produced by patcher-browser.js):
 *   [
 *     { "specId": "char-sarah",  "url": "https://pikaso.cdnpk.net/...", "filename": "ep01/chars/sarah.jpg" },
 *     ...
 *   ]
 *
 * Node.js doesn't have browser CORS, so we can fetch the signed URLs directly.
 * Downloads run in parallel (up to 8 concurrent).
 */

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';

const args = process.argv.slice(2);
const jsonPath = args.find((a) => a.endsWith('.json'));
if (!jsonPath) {
  console.error('Usage: node download.mjs urls.json [--out outputs/]');
  process.exit(1);
}
const outDir = (() => {
  const i = args.indexOf('--out');
  return i >= 0 ? args[i + 1] : 'outputs';
})();
const concurrency = 8;

async function main() {
  const raw = await readFile(resolve(jsonPath), 'utf8');
  const list = JSON.parse(raw);
  console.log(`📋 ${list.length} files to download → ${outDir}/`);

  let done = 0, failed = 0;
  const queue = [...list];

  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const target = join(resolve(outDir), item.filename);
      try {
        await mkdir(dirname(target), { recursive: true });
        const res = await fetch(item.url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(target, buf);
        done++;
        console.log(`✅ [${done}/${list.length}] ${item.specId} → ${item.filename} (${Math.round(buf.length / 1024)}kB)`);
      } catch (e) {
        failed++;
        console.error(`❌ [${item.specId}] ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`\n🏁 Done: ${done} ok, ${failed} failed`);
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
