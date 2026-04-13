/**
 * Karma Pikaso Patcher — Browser Console Tool
 * ==============================================
 * Run inside DevTools Console of https://www.freepik.com/pikaso/spaces/{id}
 *
 * VERIFIED primitives (tested end-to-end 2026-04-09):
 *   - setPrompt(nodeId, text)                → TipTap contentEditable + input event (persist via liveblocks)
 *   - setListItemValue(nodeId, idx, text)    → same mechanism for existing list items
 *   - execute(nodeId, downstream)            → POST /pikaso/api/spaces/{id}/workflows/execute
 *   - getCreation(creationId)                → GET /pikaso/api/creations?id=
 *   - waitForGeneration(nodeId)              → poll store for creationIdentifier change
 *
 * NOT SUPPORTED by this patcher:
 *   - Creating new nodes (goes through Liveblocks CRDT WebSocket — too complex to replay)
 *   - Uploading character reference images (needs multipart endpoint + CORS)
 *   - Direct file download (pikaso.cdnpk.net has strict CORS; use node-download.mjs instead)
 *
 * WORKFLOW:
 *   1. Build a template Space manually in UI (5 char-gen + 4 list+gen scene batches + connections).
 *      This is a 1-time ~15min manual build.
 *   2. Paste this file into DevTools Console → window.KARMA ready
 *   3. KARMA.listNodes()                      → copy node UUIDs
 *   4. KARMA.run(spec)                        → patches + executes + polls
 *   5. Copy result URLs → node download.mjs urls.json → images saved locally
 */

(() => {
  const API = '/pikaso/api';
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const log = (...a) => console.log('%c[KARMA]', 'color:#FFB300;font-weight:bold', ...a);
  const ok = (...a) => console.log('%c[KARMA]', 'color:#4CAF50;font-weight:bold', ...a);
  const err = (...a) => console.error('%c[KARMA]', 'color:#F44;font-weight:bold', ...a);

  // === helpers ===
  function getVueflow() {
    const vf = window.__SPACES_PIKASO_DEBUG__?.vueflow;
    if (!vf) throw new Error('Not in Pikaso Space. Open /pikaso/spaces/{id} first.');
    return vf;
  }
  const getNodes = () => getVueflow().instance.getNodes.value;
  const getNode = (id) => {
    const n = getNodes().find((x) => x.id === id);
    if (!n) throw new Error(`Node not found: ${id}`);
    return n;
  };
  const getBoardId = () => location.pathname.match(/spaces\/([a-f0-9-]+)/)?.[1];
  const getUserId = () => {
    // Extract from any __NUXT__ / __INITIAL_STATE__ or fall back
    try {
      const meta = document.querySelector('meta[name="user-id"]');
      if (meta) return meta.content;
    } catch {}
    return '107449028'; // placeholder — replace with own
  };

  // === DOM primitives ===
  function setPrompt(nodeId, text) {
    const el = document.querySelector(`[id="space-node-${nodeId}"] [contenteditable="true"].tiptap`);
    if (!el) throw new Error(`No editor in node ${nodeId}`);
    el.focus();
    el.textContent = text;
    el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText' }));
    return true;
  }

  function setListItemValue(nodeId, idx, text) {
    const listEl = document.querySelector(`[id="space-node-${nodeId}"]`);
    if (!listEl) throw new Error(`No list node ${nodeId}`);
    const editors = Array.from(listEl.querySelectorAll('[contenteditable="true"].tiptap'));
    if (!editors[idx]) throw new Error(`List ${nodeId} item ${idx} out of range (have ${editors.length})`);
    editors[idx].focus();
    editors[idx].textContent = text;
    editors[idx].dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText' }));
    return true;
  }

  // === HTTP primitives ===
  async function apiFetch(path, opts = {}) {
    const sep = path.includes('?') ? '&' : '?';
    const url = `${API}${path}${sep}lang=en_US&user_id=${getUserId()}`;
    const res = await fetch(url, {
      credentials: 'include',
      ...opts,
      headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${path}: ${await res.text().catch(() => '')}`);
    return res.json();
  }

  async function execute(startNodeId, downstream = true) {
    const boardId = getBoardId();
    return apiFetch(`/spaces/${boardId}/workflows/execute`, {
      method: 'POST',
      body: JSON.stringify({
        startNodeId,
        runSingular: !downstream,
        runDownstream: downstream,
        experiments: true,
        force_credits: false,
      }),
    });
  }

  async function getCreation(creationId) {
    const r = await apiFetch(`/creations?id=${creationId}`);
    return r.data?.[0] || null;
  }

  async function waitForGeneration(nodeId, opts = {}) {
    const { timeoutMs = 180_000, pollMs = 2000 } = opts;
    const startTime = Date.now();
    const initial = getNode(nodeId).data.boardElement.data?.currentCreationIdentifier;
    log(`Waiting on ${nodeId} (initial creation: ${initial || 'none'})`);
    while (Date.now() - startTime < timeoutMs) {
      const node = getNodes().find((n) => n.id === nodeId);
      const cid = node?.data.boardElement.data?.currentCreationIdentifier;
      if (cid && cid !== initial) {
        const creation = await getCreation(cid);
        if (creation?.url) {
          return { nodeId, creationId: cid, url: creation.url, preview: creation.preview, metadata: creation.metadata };
        }
      }
      await sleep(pollMs);
    }
    throw new Error(`Timeout after ${timeoutMs}ms waiting for ${nodeId}`);
  }

  // === high-level: run a whole spec ===
  async function run(spec) {
    log('Running spec:', spec);
    const results = {};

    // Phase 1: patch prompts on image-gen / video-gen nodes
    for (const [specId, prompt] of Object.entries(spec.prompts || {})) {
      const uuid = spec.bindings?.[specId];
      if (!uuid) { err(`No binding for ${specId}`); continue; }
      log(`Patch prompt [${specId}] → ${uuid.slice(0, 8)}`);
      try { setPrompt(uuid, prompt); } catch (e) { err(e.message); }
    }
    await sleep(800); // let liveblocks sync

    // Phase 2: patch list items (list must already have N pre-created items)
    for (const [specId, items] of Object.entries(spec.listItems || {})) {
      const uuid = spec.bindings?.[specId];
      if (!uuid) { err(`No binding for list ${specId}`); continue; }
      log(`Patch list [${specId}] → ${items.length} items`);
      for (let i = 0; i < items.length; i++) {
        try { setListItemValue(uuid, i, items[i]); await sleep(40); } catch (e) { err(`item ${i}: ${e.message}`); }
      }
    }
    await sleep(800);

    // Phase 3: execute
    const runTargets = spec.runs || {};
    for (const [specId, opts] of Object.entries(runTargets)) {
      const uuid = spec.bindings[specId];
      log(`Execute [${specId}] ${uuid.slice(0, 8)}`);
      try {
        const r = await execute(uuid, opts.downstream !== false);
        results[specId] = { workflowRunId: r.workflow_run_identifier };
      } catch (e) {
        err(`Execute ${specId}:`, e.message);
        results[specId] = { error: e.message };
      }
    }

    // Phase 4: wait + collect
    for (const [specId] of Object.entries(runTargets)) {
      const uuid = spec.bindings[specId];
      try {
        const r = await waitForGeneration(uuid);
        results[specId] = { ...results[specId], ...r };
        ok(`[${specId}] ${r.url.slice(0, 80)}...`);
      } catch (e) {
        err(`Wait ${specId}:`, e.message);
        results[specId] = { ...results[specId], error: e.message };
      }
    }

    // Phase 5: produce downloadable JSON for node-downloader
    const downloadList = Object.entries(results)
      .filter(([_, r]) => r.url)
      .map(([specId, r]) => ({
        specId,
        url: r.url,
        filename: spec.downloads?.[specId] || `${specId}.jpg`,
      }));

    ok(`✅ Run complete — ${downloadList.length}/${Object.keys(runTargets).length} succeeded`);
    ok('📋 Download list (copy this JSON to urls.json, then run: node download.mjs urls.json):');
    console.log(JSON.stringify(downloadList, null, 2));

    // Try copy to clipboard
    try {
      await navigator.clipboard.writeText(JSON.stringify(downloadList, null, 2));
      ok('📎 Copied to clipboard');
    } catch { log('(clipboard copy failed — manual copy from console above)'); }

    return { results, downloadList };
  }

  // === discovery helper ===
  function listNodes() {
    const nodes = getNodes();
    const out = nodes.map((n) => ({
      id: n.id,
      type: n.data.boardElement.type,
      name: n.data.boardElement.name,
      prompt: n.data.boardElement.data?.prompt?.slice(0, 50) || '',
      items: n.data.boardElement.data?.items?.length,
      hasOutput: !!n.data.boardElement.data?.currentCreationIdentifier,
    }));
    console.table(out);
    return out;
  }

  // === install ===
  window.KARMA = {
    setPrompt, setListItemValue,
    execute, getCreation, waitForGeneration,
    getNodes, getNode, getBoardId, listNodes,
    run,
  };

  ok('KARMA loaded. Board:', getBoardId());
  log('Try: KARMA.listNodes()');
  log('     KARMA.run(yourSpec)');
})();
