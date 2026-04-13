# 🧩 Karma Pikaso Patcher + Downloader

**Pivoted** from Playwright UI automation → hybrid **browser patcher + Node downloader**, after reverse-engineering Pikaso's internal API.

## ✅ What works (verified end-to-end 2026-04-09)

| Primitive | Method | Verified |
|---|---|---|
| Edit prompt | DOM TipTap `contentEditable + input event` | ✅ Persist qua liveblocks |
| Edit list item value | Same mechanism, indexed | ✅ Persist |
| Execute workflow | `POST /pikaso/api/spaces/{id}/workflows/execute` | ✅ Returns `workflow_run_identifier` |
| Get result | `GET /pikaso/api/creations?id={creationId}` | ✅ Returns signed URL |
| Unlimited bucket | `client_type: "magnific_unlimited_relaxed"` | ✅ Dùng Premium web, không tốn API credit riêng |
| Download file | Node.js fetch (browser CORS blocks cdnpk.net) | ✅ Via `download.mjs` |

## ❌ What does NOT work via this patcher

- **Creating new nodes** (go qua Liveblocks CRDT WebSocket, quá phức tạp để replay)
- **Uploading character reference images** (multipart + CORS)
- **Connecting ports** (also Liveblocks)

→ **Solution**: Build 1 "Karma Template" Space **manually trong UI 1 lần** (5 char nodes + 4 list+gen chains + audio + connections). Sau đó patcher chỉ patch text content + run. Template reusable cho tất cả tập.

---

## 📦 Files

```
tools/freepik-builder/
├── README.md                      ← this file
├── patcher-browser.js             ← PASTE into DevTools Console
├── download.mjs                   ← Node script to download signed URLs
├── specs/
│   └── ep01.example.json          ← spec template (replace UUIDs)
└── urls.json                      ← output from patcher, input to downloader
```

---

## 🏃 Workflow (per episode)

### One-time setup (1 Template Space)
1. Freepik Pikaso → New Space → Rename **"Karma TEMPLATE"**
2. Build structure manually (drag node from sidebar `+` button):
   - 5x Image Generator (will be char refs)
   - 4x Pairs of (List → Image Generator with char reference connection)
   - 1x Audio Generator (BGM)
   - Optional: 40x Video Generator (pre-created, empty prompts)
3. Duplicate this template for each episode.

### Per episode (Ep01, Ep02, ...)

**Step 1 — Duplicate template**
Pikaso Spaces → right-click "Karma TEMPLATE" → Duplicate → rename "Karma Ep01"

**Step 2 — Load patcher**
Open the Ep01 Space → DevTools (F12) → Console tab → paste contents of `patcher-browser.js` → Enter.

You should see:
```
[KARMA] KARMA loaded. Board: <uuid>
```

**Step 3 — Discover node UUIDs**
```js
KARMA.listNodes()
```
Prints a table. Copy the `id` column for each node you want to patch.

**Step 4 — Prepare spec**
Edit `specs/ep01.example.json` → replace `REPLACE-WITH-...-UUID` with real UUIDs from Step 3.

Spec shape:
```json
{
  "bindings":   { "char-sarah": "<uuid>" },        // specId → node UUID
  "prompts":    { "char-sarah": "Voxel art..." },  // specId → prompt text
  "listItems":  { "list-scenes-sarah": ["...", "..."] },  // per-list items
  "runs":       { "char-sarah": { "downstream": false } },  // which to execute
  "downloads":  { "char-sarah": "ep01/chars/sarah.jpg" }    // target filename
}
```

**Step 5 — Run**
In DevTools Console:
```js
const spec = /* paste spec JSON */;
const { downloadList } = await KARMA.run(spec);
```

Patcher will:
1. Patch all prompts via DOM
2. Patch all list items via DOM
3. Call `/workflows/execute` for each `runs` entry
4. Poll `/creations?id=` until each node has a new `currentCreationIdentifier`
5. Print + copy-to-clipboard a JSON array of `{specId, url, filename}`

**Step 6 — Download**
Paste clipboard content into `urls.json`, then:
```bash
cd tools/freepik-builder
node download.mjs urls.json --out outputs/
```

Files saved to `outputs/ep01/chars/sarah.jpg`, etc.

**Step 7 — Continue to next episode**
Repeat Step 1-6 with new spec.

---

## 🧪 Quick smoke test (verified)

Inside a Space with at least 1 image-generator node with prompt already set:
```js
// In DevTools Console after pasting patcher-browser.js:
const nodes = KARMA.listNodes();
const imgGen = nodes.find(n => n.type === 'image-generator');
await KARMA.execute(imgGen.id, false);
const result = await KARMA.waitForGeneration(imgGen.id);
console.log('Image URL:', result.url);
// → https://pikaso.cdnpk.net/private/production/{assetId}/render.jpg?token=...
```

---

## 🔑 Why this works (architecture notes)

Pikaso Space is a Vue + Vueflow + TipTap SPA with **Liveblocks** CRDT for real-time sync. The critical discovery: **legitimate DOM events go through the Vue reactive pipeline → Liveblocks sync**, while direct store mutations do NOT.

Verified paths:
1. **Read state**: `window.__SPACES_PIKASO_DEBUG__.vueflow.instance.getNodes.value` — exposes full node tree.
2. **Edit text**: TipTap editors listen to `input` events on their `contentEditable` root. Setting `textContent + dispatching input` triggers Vue reactivity → Liveblocks → server.
3. **Run workflow**: `POST /pikaso/api/spaces/{id}/workflows/execute` with `{startNodeId, runSingular, runDownstream}` triggers server-side gen. Server reads latest node state from Liveblocks + calls appropriate model (seedream/flux/nano-banana/kling).
4. **Result lookup**: `GET /pikaso/api/creations?id={id}` returns `{url, preview, metadata}` with HMAC-signed CDN URLs.
5. **Unlimited bucket**: Generations made through Space UI path (vs public API) use `magnific_unlimited_relaxed` client, counting against Premium web unlimited quota — **NOT** API credit.

### Why node creation is out of scope
New nodes insert via Liveblocks `Room.storage.update()` over WebSocket. Implementing a Liveblocks client from scratch matching Pikaso's exact CRDT schema is prohibitively complex. Template + duplicate is the pragmatic bypass.

---

## 🚀 Scaling to 5 episodes

Cost per episode: **0 API credits** (Premium unlimited bucket) + ~3-5 min DevTools work + ~5 min Node.js download.

For 40 Kling videos (each needs different start frame), you can either:
- Pre-create 40 video-generator nodes in template (connect each to a different scene image output)
- OR run in batches: template has 10 video slots, reuse 4 times per episode

---

## ⚠️ Known fragile areas

- `window.__SPACES_PIKASO_DEBUG__` is undocumented — may be removed in future Pikaso updates.
- `.tiptap` class on contentEditable editors could change.
- `/pikaso/api/creations?id=` query format is observed, not documented — might change.
- CSRF/session handling: relies on user being logged in with cookies set. `/liveblocks-auth` + `/workflows/execute` both require `credentials: 'include'` + session cookie.

If anything breaks, rerun reverse-engineering via DevTools Network tab to find new selectors / endpoints.
