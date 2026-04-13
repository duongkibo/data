# CLAUDE.md — tools/

Guidance for working with tools in this repo.

## `tools/freepik-builder/`

**Karma Pikaso Patcher + Downloader** — hybrid automation for Freepik Pikaso Spaces.

Pivoted away from full Playwright UI automation after discovering:
1. Node creation goes through Liveblocks CRDT WebSocket (too complex to replay).
2. But **content updates + workflow execution** can be done via browser DOM events + HTTP.

### Architecture (verified end-to-end 2026-04-09)

```
User → 1-time manual Template Space build (UI)
     → DevTools Console paste patcher-browser.js
     → KARMA.run(spec) patches prompts + list items via DOM events
     → POST /pikaso/api/spaces/{id}/workflows/execute
     → Poll GET /pikaso/api/creations?id={cid}
     → Clipboard output: [{specId, url, filename}]
     → Node.js download.mjs urls.json → saved files
```

### Files

- `patcher-browser.js` — browser console tool. Exposes `window.KARMA` with primitives:
  - `setPrompt(nodeId, text)` — TipTap contenteditable + input event (persists via Liveblocks)
  - `setListItemValue(nodeId, idx, text)` — for existing list items
  - `execute(startNodeId, downstream)` — POST /workflows/execute
  - `getCreation(creationId)` — GET /api/creations?id=
  - `waitForGeneration(nodeId)` — poll store until creationIdentifier changes
  - `run(spec)` — high-level pipeline
  - `listNodes()` — console.table of current Space nodes
- `download.mjs` — Node 18+ script. Reads JSON `[{specId,url,filename}]`, downloads in parallel.
- `specs/ep01.example.json` — spec template with placeholder UUIDs.

### Key verified endpoints (Pikaso internal)

| Endpoint | Purpose |
|---|---|
| `POST /pikaso/api/spaces/liveblocks-auth` body `{room: "board-{uuid}"}` | Get Liveblocks JWT (not actually used by patcher) |
| `POST /pikaso/api/spaces/{id}/workflows/execute` body `{startNodeId, runSingular, runDownstream, experiments, force_credits}` | Trigger gen |
| `GET /pikaso/api/creations?id={creationId}` | Get signed result URL + metadata |
| `GET /pikaso/api/v2/ai-models` | Model catalog — identifies unlimited models |

### Known fragile areas

- `window.__SPACES_PIKASO_DEBUG__` — undocumented internal, may disappear.
- `.tiptap` class on contentEditable — may change.
- `pikaso.cdnpk.net` has strict CORS → browser cannot fetch, must use Node.js.
- New node creation / reference image upload NOT supported; rely on pre-built template Space.

### What NOT to do

- Don't try to mutate `vueflow.instance.nodes` directly — doesn't sync to backend.
- Don't dispatch synthetic `KeyboardEvent` for TipTap Enter commits on 2nd+ list item — ProseMirror checks `isTrusted` flag.
- Don't rebuild the Playwright UI automation approach in `build.mjs` — replaced by this simpler patcher.
