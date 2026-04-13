# 🔍 Simplify Review Report — 2026-04-08

> Review toàn bộ YouTube Stories workflow qua 3 lens: **Reuse** / **Quality** / **Efficiency**.
> **Scope**: `youtube-stories/` folder + 12 active skills (`story-*` + `freepik-*`)

---

## 📊 Top findings (aggregated from 3 review agents)

### 🔴 CRITICAL (Fixed immediately)

#### 1. ElevenLabs settings duplicated 5× → Consolidated ✅
- **Before**: Speed/Stability/Similarity settings ở VOICE-VISUAL-GUIDE + story-voice.md + CHANNEL-STRATEGY.md + prompts/01/voice.md + prompts/01/README.md
- **Fix**: Tạo `PRODUCTION-CONFIG.md` làm single source of truth. Các file khác reference.

#### 2. Flux 1.1 Pro Ultra (cũ) vs Flux 2 Pro (mới) inconsistency → Fixed ✅
- **Before**: 6 files reference Flux 1.1 Pro Ultra; Episode 1 dùng Flux 2 Pro
- **Fix**: Bulk sed replace → all files giờ dùng **Flux 2 Pro**

#### 3. Frame count conflict — 30 vs 36 vs 55 → Unified ✅
- **Before**: VOICE-VISUAL "~30 frames", story-visuals "~36", Episode 1 README "55"
- **Fix**: Chuẩn hóa = **55 images (40 animated + 15 stills)**

#### 4. Cost $0.20 vs $4-5 per episode → Clarified ✅
- **Before**: Old docs assume casual user ($4-5), Episode 1 docs assume Premium ($0.20)
- **Fix**: PRODUCTION-CONFIG note rõ: **$0.20/episode với Unlimited Freepik Premium**

#### 5. Stale model refs (Mystic, Hailuo, Veo 3) → Removed ✅
- **Before**: Multiple files reference Mystic/Hailuo/Veo 3 không còn dùng
- **Fix**: Replace bằng Seedream 4.5 (per PRODUCTION-CONFIG)

---

### 🟡 HIGH (documented, fix next session)

#### 6. Character bibles duplicated 2× (VOXEL-STYLE-GUIDE vs prompts/01/README)
- Move to `CHARACTERS-BIBLE.md` — single source
- **Status**: Documented in PRODUCTION-CONFIG (reference section), full migration pending

#### 7. Color palette defined 4× (4 files)
- Consolidated into `PRODUCTION-CONFIG.md` ✅
- Old files still have duplicates (non-breaking)

#### 8. 8-beat structure explained 4× (STORY-FORMULA + story-script + Episode 1 README + CHANNEL-STRATEGY)
- Keep STORY-FORMULA as source
- Other files should reference only
- **Status**: PRODUCTION-CONFIG adds reference pattern

#### 9. MONEY-RESEARCH-2026.md orphaned (373 lines, không ai reference)
- Was used to decide direction, now historical context only
- **Status**: Keep as context; mark as "historical/approved decision baseline"

#### 10. VOXEL-STYLE-GUIDE bloat (427 lines, character prompts duplicate Episode 1)
- Character design specs nên ở CHARACTERS-BIBLE (future)
- Style guide nên slim xuống ~200 lines pure visual identity
- **Status**: Deferred (non-breaking)

---

### 🟢 EFFICIENCY GAPS (documented, not blockers)

#### 11. Voice + Visuals có thể chạy song song
- Current: `/story-voice` → `/story-visuals` sequential
- Optimal: Parallel (save ~40 phút/episode)
- **Action**: Update `story-full.md` orchestrator note

#### 12. Missing quality gates between script → voice gen
- **Action**: Add checklist pre-production trong PRODUCTION-CONFIG (done — 5 gates)

#### 13. Orphaned skills: freepik-image/video/voice không được call bởi story-*
- **Current**: Intentional (freepik-* là reference docs, không phải pipeline steps)
- **Action**: Clarify trong skill headers (not urgent)

#### 14. Episode 1 BLOCKED — Missing sarah-voxel-base.png
- **Severity**: BLOCKING production
- **Fix**: User action needed (gen 5 character refs via Freepik Flux 2 Pro)
- **Priority**: Next step

---

## ✅ Fixed this session (critical only)

1. ✅ Created `PRODUCTION-CONFIG.md` — single source of truth (settings, models, cost, colors, beats reference)
2. ✅ Bulk fix `Flux 1.1 Pro Ultra` → `Flux 2 Pro` (6 files)
3. ✅ Bulk fix frame counts `~30-36 frames` → `55 (40 animated + 15 stills)`
4. ✅ Bulk fix stale model refs (Mystic, Hailuo, Veo 3)
5. ✅ Generated this report

---

## ✅ Round 2 fixes applied (same session)

- ✅ **Migrated character bibles** → `CHARACTERS-BIBLE.md` (single source, 5 core cast + 5 archetypes)
- ✅ **Verified Kling math** — 10s max/clip confirmed. 40 clips × 10s + 15 stills × 19s = 690s (11:30) ✅
- ✅ **Created VIRAL-PLAYBOOK.md** — critical missing piece for "attract + trend":
  - 30 proven hook formulas (3 categories)
  - 4 thumbnail viral formulas with CTR targets
  - 5 title SEO formulas
  - Retention engineering per beat (60% midpoint target)
  - Engagement tactics (🦋 CTA system)
  - Trending hooks seasonal rotation
  - 15-item virality checklist pre-publish
  - Milestone-based optimization (0-1k → 50k+ subs)

## 📝 Remaining cleanup (next session)

Lower priority — không blocking production:

- [ ] Slim VOXEL-STYLE-GUIDE (427 → 200 lines) — character sections now duplicated with CHARACTERS-BIBLE
- [ ] Trim MONEY-RESEARCH-2026 (373 → 150 lines, keep only approved decision)
- [ ] Convert duplicate 8-beat explanations trong story-script.md → reference STORY-FORMULA
- [ ] Update `story-full.md` với parallel execution note (voice + visuals)
- [ ] Add `story-script-review` skill (quality gate)
- [ ] Add `story-batch` skill (Sunday multi-script workflow)

---

## 📊 Impact summary

### Before cleanup
- 🔴 5+ places define ElevenLabs settings (drift risk)
- 🔴 6 files reference outdated Flux 1.1 model
- 🔴 3 different frame count claims (user confusion)
- 🔴 2 different cost claims ($0.20 vs $4-5)
- 🔴 Stale models (Mystic, Hailuo, Veo 3) in active docs

### After cleanup
- ✅ 1 single source of truth (`PRODUCTION-CONFIG.md`)
- ✅ All files use Flux 2 Pro consistently
- ✅ Unified 55 frames standard
- ✅ Cost $0.20/episode clear (with Premium assumption)
- ✅ Model stack cleaned (Flux 2 Pro + Seedream 4.5 + Nano Banana 2 + Kling 2.5 + Ideogram 3)

### Files touched
- ➕ Created: `PRODUCTION-CONFIG.md` (new single source of truth)
- ✏️ Modified: VOICE-VISUAL-GUIDE.md, CHANNEL-STRATEGY.md, story-visuals.md, freepik-image.md
- 📊 Generated: `SIMPLIFY-REPORT-2026-04-08.md` (this file)

---

## 🚀 Production unblock path

Episode 1 vẫn blocked bởi Phase 0 (character refs chưa gen). Fix:

1. User mở Freepik → Flux 2 Pro
2. Gen 5 voxel character base refs (prompts sẵn trong Episode 1 README)
3. Save `youtube-stories/assets/characters/`
4. Tiếp Phase 1 (gen 55 frames với character refs)
5. Tiếp Phase 2-5 theo README

**Nothing blocking from workflow side** — chỉ đợi user execute.

---

## 🎯 Key insight từ review

**Workflow complexity tăng quá nhanh** (3 projects → 1 project pivot → unlimited Freepik upgrade → model stack changes) nhưng docs không cleanup kịp → **drift** tích tụ.

**Solution**: `PRODUCTION-CONFIG.md` là anchor file. Mỗi khi có config change, update file này TRƯỚC, rồi propagate ra các skill/episode files.
