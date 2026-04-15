# GEN CHECKLIST — EP08: The Anniversary Trip

> Tick khi đã gen xong. Đi từ trên xuống — mỗi phase phụ thuộc phase trước.

---

## Phase 1 — Character Refs (save to assets/characters/)

Guide: `02-characters.md` · Model: Nano Banana 2 · 512×512 · white background
Save: `/Users/MAC/Desktop/agent/youtube-stories/assets/characters/`

- [ ] `maya-ep08-voxel-base.png` — 33, sage green cardigan, warm chestnut hair soft waves, cube body, observant composed expression
- [ ] `daniel-ep08-voxel-base.png` — 36, charcoal blazer + dark gray shirt, neat dark hair, controlled confident slightly smug, cube body
- [ ] `hotel-manager-ep08-voxel-base.png` — mid-40s, neutral professional blazer, neat dark hair pulled back, composed kind expression, cube body

**Quality gate before proceeding:**

| Check | Maya | Daniel | Hotel Manager |
|---|---|---|---|
| Cube body (NOT realistic human) | ☐ | ☐ | ☐ |
| Astroneer/Crossy Road style | ☐ | ☐ | ☐ |
| White background, no scene | ☐ | ☐ | ☐ |
| Characters distinct from each other | ☐ | ☐ | ☐ |
| No Minecraft-block texture | ☐ | ☐ | ☐ |
| Legible as thumbnail attachment | ☐ | ☐ | ☐ |

Do NOT proceed to Phase 2 until all 3 refs pass quality gate.

---

## Phase 2 — Scene Images (102 start frames + 15 stills = 117 images)

Guide: `03-images.md` · Full prompts: `03b-images-full-prompts.md`
Save: `/Users/MAC/Desktop/agent/youtube-stories/assets/EP08/`
Naming: `EP08-F{NN}{X}.png` · `EP08-S{NN}.png`

### ⚠️ DUTCH angle warning
DUTCH frames: **F10B/C, F11B/C, F12B/C, F13B ONLY** (Beat 4 betrayal scenes)
TUYỆT ĐỐI KHÔNG DUTCH: F14 onward (Fall, Pivot, Karma, Downfall, Epilogue)
TUYỆT ĐỐI KHÔNG DUTCH: Any Ken Burns stills

---

### Ideogram 3 — Text/screen/documents (text accuracy required)

- [ ] F11B/C — Spa booking confirmation: "Couples deep tissue — second visit. Two guests. Daniel Harlow." ⭐ EXACT TEXT
- [ ] F12B/C — Hotel reservation log: "Daniel Harlow. Check-in: [date]. Guests: two. Duration: three nights." ⭐ EXACT TEXT
- [ ] F20C — Attorney's notepad: "I want to document everything." ⭐ EXACT TEXT
- [ ] F24B/C — House deed: "Property owner: Maya. Sole owner." ⭐ EXACT TEXT
- [ ] F30C — Court ruling: "...not remorseful in character..." ⭐ EXACT TEXT
- [ ] F33C — Christmas card: "Thank you for your kindness." ⭐ EXACT TEXT
- [ ] F34B/C — CTA card: "@KarmaCaughtUp · Subscribe · New story every week." ⭐ EXACT TEXT
- [ ] S06 — Spa confirmation still (30s hold) ⭐ EXACT TEXT legible
- [ ] S10 — Attorney notepad still (25s hold) ⭐ EXACT TEXT legible
- [ ] S11 — House deed still (25s hold) ⭐ EXACT TEXT legible

---

### Nano Banana 2 + maya-ep08-voxel-base.png — Maya character scenes

- [ ] F02A/B/C — Maya opening envelope at home (3 angles)
- [ ] F03A/B/C — Maya + Daniel packing [also attach daniel ref for A/B] (3 angles)
- [ ] F04A/B/C — Maya at marketing office (3 angles)
- [ ] F09A/B/C — Maya watching Daniel, expression shifting ⭐ (3 angles)
- [ ] F10B/C — Spa desk — Maya receiving paper [F10B/C: DUTCH] (2 angles — A is Flux)
- [ ] F11A — Maya standing with paper in spa (A wide)
- [ ] F13A/B/C — Maya's face reading "Guest: two" [F13B: DUTCH] ⭐ (3 angles)
- [ ] F14A/B/C — Maya at hotel room window, night (3 angles)
- [ ] F15A/B/C — Room service tray — Maya eating alone (3 angles)
- [ ] F16A/B/C — Maya swimming alone in pool ⭐ (3 angles)
- [ ] F17A/B/C — Maya checkout — tipping staff (3 angles)
- [ ] F18A/B/C — Maya photographing confirmation in car ⭐ (3 angles)
- [ ] F19A/B/C — Maya emailing from hotel lobby wifi (3 angles)
- [ ] F20A/B/C — Lawyer's office — Maya with attorney ⭐ (3 angles)
- [ ] F21A/B/C — Maya at home desk, organizing documents (3 angles)
- [ ] F31A/B/C — Maya checking into new hotel, champagne ⭐ EPILOGUE (3 angles)
- [ ] F32A/B/C — Maya at marketing director office ⭐ (3 angles)
- [ ] F33A/B/C — Maya writing Christmas card (3 angles)
- [ ] F34A/B/C — CTA card (A: Flux env, B/C: Ideogram)
- [ ] S02 — Maya opening envelope still (15s)
- [ ] S04 — Maya watching Daniel expression still (20s)
- [ ] S07 — Maya's face completely still (20s) ⭐
- [ ] S08 — Maya swimming alone still (20s)
- [ ] S09 — Maya photographing confirmation in car still ⭐ (20s)
- [ ] S14 — Maya at new hotel window champagne still ⭐ (30s)

---

### Nano Banana 2 + daniel-ep08-voxel-base.png — Daniel character scenes

- [ ] F03A/B — Daniel + Maya packing [attach both refs]
- [ ] F06A/B/C — Hotel check-in "Welcome back" (3 angles)
- [ ] F07A/B/C — Daniel navigating hotel without map (3 angles)
- [ ] F08A/B/C — Restaurant corner table — Daniel knows it (3 angles)
- [ ] F25A/B/C — Daniel carrying box out of house (3 angles)
- [ ] F27A/B/C — Daniel's firm — packing desk (3 angles)
- [ ] F28A/B/C — Daniel calling Ashwood Inn, rental ⭐ (3 angles)
- [ ] S03 — Daniel at check-in "Welcome back" still (20s)
- [ ] S12 — Daniel packing box still (15s)
- [ ] S13 — Daniel alone in rental on phone still ⭐ (20s)

---

### Nano Banana 2 + hotel-manager-ep08-voxel-base.png — Hotel Manager

- [ ] F12A/B/C — Hotel manager showing reservation log ⭐ [F12B/C: DUTCH] (3 angles)
- [ ] F29A/B/C — Hotel manager logging the call (3 angles)

---

### Flux 2 Pro — Environments and objects (no character ref)

- [ ] F01A/B/C — Ashwood Inn coastal exterior dawn ⭐ (3 angles)
- [ ] F05A/B/C — Coastal drive, car window ocean view (3 angles)
- [ ] F10A — Spa reception wide (Maya in B/C via maya ref)
- [ ] F22A/B/C — Courthouse exterior (3 angles)
- [ ] F23A/B/C — Discovery documents on table (3 angles)
- [ ] F26A/B/C — Serena's apartment door closing (3 angles)
- [ ] F30A/B/C — Courtroom interior (3 angles)
- [ ] S01 — Ashwood Inn exterior dawn still ⭐ (15s)
- [ ] S05 — Spa desk still (25s) ⭐
- [ ] S15 — Christmas card on warm desk ⭐ (40s) — GEN HIGHEST QUALITY

---

**Total: 117 images** ✅ (102 scene frames + 15 Ken Burns stills)

---

## Phase 3 — Video Clips (102 Kling 2.5 Turbo × 5s clips)

Guide: `04-videos.md` · Full prompts: `04b-videos-full-prompts.md`
Save: `media/videos/` · Naming: `EP08-C{NN}{X}.mp4`
**Precondition:** Phase 2 complete · Duration: 5s gen → trim to 3s in CapCut

### ⚠️ DUTCH clips — CRITICAL
DUTCH permitted: **C10B, C10C, C11B, C11C, C12B, C12C, C13B ONLY**
TUYỆT ĐỐI KHÔNG DUTCH: C01–C09, C14–C34

### Hero clips — Gen first

- [ ] **C01** — Ashwood Inn exterior hero shot ⭐
- [ ] **C06** — Hotel check-in "Welcome back" (Crack entry)
- [ ] **C09** — Maya expression shifting ⭐
- [ ] **C10** — Spa desk paper hand-off [B/C: DUTCH] ⭐
- [ ] **C11** — Booking confirmation text [B/C: DUTCH] ⭐ PEAK BETRAYAL
- [ ] **C12** — Hotel manager / reservation log [B/C: DUTCH] ⭐
- [ ] **C13** — Maya's face "Guest: two" [B: DUTCH]
- [ ] **C16** — Maya swimming alone ⭐
- [ ] **C20** — Lawyer's office ⭐
- [ ] **C24** — House deed — Maya's name ⭐
- [ ] **C31** — Maya checking into new hotel ⭐ EPILOGUE PEAK

### All 102 clips (A+B+C together per scene — NEVER batch C separately)

**Beat 1–2 (WARM):**
- [ ] C01A · C01B · C01C — Ashwood Inn exterior ⭐
- [ ] C02A · C02B · C02C — Maya opening envelope
- [ ] C03A · C03B · C03C — Packing suitcases
- [ ] C04A · C04B · C04C — Maya at marketing office
- [ ] C05A · C05B · C05C — Coastal drive

**Beat 3 (COOL ENTERING):**
- [ ] C06A · C06B · C06C — Hotel check-in "Welcome back" ⭐
- [ ] C07A · C07B · C07C — Daniel navigating without map
- [ ] C08A · C08B · C08C — Restaurant corner table
- [ ] C09A · C09B · C09C — Maya expression shifting ⭐

**Beat 4 (DARK COLD — DUTCH B/C where marked):**
- [ ] C10A · C10B[DUTCH] · C10C[DUTCH] — Spa desk paper hand-off ⭐
- [ ] C11A · C11B[DUTCH] · C11C[DUTCH] — Booking confirmation text ⭐ PEAK
- [ ] C12A · C12B[DUTCH] · C12C[DUTCH] — Reservation log reveal ⭐
- [ ] C13A · C13B[DUTCH] · C13C — Maya's face "Guest: two"

**Beat 5 (DARK):**
- [ ] C14A · C14B · C14C — Maya at hotel room window
- [ ] C15A · C15B · C15C — Room service tray — meal for one
- [ ] C16A · C16B · C16C — Maya swimming alone ⭐
- [ ] C17A · C17B · C17C — Maya checkout — tipping staff

**Beat 6 (TURNING WARM):**
- [ ] C18A · C18B · C18C — Maya photographing confirmation ⭐
- [ ] C19A · C19B · C19C — Emailing from hotel lobby wifi
- [ ] C20A · C20B · C20C — Lawyer's office ⭐
- [ ] C21A · C21B · C21C — Home desk, organizing documents

**Beat 7 (FULL WARM — Maya / COLD GRAY — Daniel):**
- [ ] C22A · C22B · C22C — Courthouse — divorce filed ⭐
- [ ] C23A · C23B · C23C — Discovery documents — hidden account
- [ ] C24A · C24B · C24C — House deed — Maya's name only ⭐
- [ ] C25A · C25B · C25C — Daniel carrying box out
- [ ] C26A · C26B · C26C — Serena's apartment door closes
- [ ] C27A · C27B · C27C — Daniel's firm — packing desk

**Beat 8 (COLD GRAY → NEUTRAL):**
- [ ] C28A · C28B · C28C — Daniel calling Ashwood Inn ⭐
- [ ] C29A · C29B · C29C — Hotel manager logging the call
- [ ] C30A · C30B · C30C — Courtroom — judge ruling ⭐

**Epilogue (FULL WARM + SAGE):**
- [ ] C31A · C31B · C31C — Maya at new hotel, champagne ⭐
- [ ] C32A · C32B · C32C — Maya at marketing director office ⭐
- [ ] C33A · C33B · C33C — Christmas card to hotel manager
- [ ] C34A · C34B · C34C — Karma Caught Up CTA butterfly

**Total: 102 MP4 files × 5s gen = 510s footage → trim to 3s each = 306s animated** ✅

---

## Phase 4 — Voice (ElevenLabs Charlotte BR · 3 chunks)

Guide: `05-voice.md` · Save: `media/voice/`
Settings: Speed 0.92x · Stability 55% · Similarity 80% · Style 30

- [ ] `chunk1.mp3` — Beat 1-4: Hook through Betrayal (~4:20 · ~640 words)
- [ ] `chunk2.mp3` — Beat 5-7: Fall through Karma Strikes (~5:00 · ~820 words)
- [ ] `chunk3.mp3` — Beat 8 + Epilogue + CTA (~2:10 · ~390 words)

**Critical QC lines before approval:**
- [ ] "Welcome back, Mr. Harlow." — warm professional delivery, let wrongness land on content
- [ ] "Second visit." — near-whisper, each word separate, full stop between
- [ ] "Guests: two. Duration: three nights." — institutional language, devastating
- [ ] "I want to document everything." — five words, deliberate, voice lifts here
- [ ] "Not remorseful in character." — slow, legal register
- [ ] "Every year." — maximum pause before, two final words only
- [ ] Total combined duration: ~11:30 ✅

**Total: 3 MP3 files** ✅

---

## Phase 5 — Thumbnails (3 Ideogram 3 variants)

Guide: `06-thumbnail.md` · Model: Ideogram 3 · 1280×720
Save: `media/thumbnails/`

- [ ] `v1.png` — "HE BOOKED IT TO SAVE THEM. THE HOTEL SAVED HER." (PRIMARY)
- [ ] `v2.png` — "THE WRONG PAPER." (CURIOSITY GAP — document hook)
- [ ] `v3.png` — "SHE KEPT THE HOUSE. HE MADE THE CALL." (CATHARSIS — justice split)

**Mute test at 120px:** All 3 must communicate premise without audio ✅
**Deploy:** v1 primary · A/B test v2 at 48hr if CTR < 5%

---

## Phase 6 — CapCut Edit

- [ ] Import 3 voice chunks → merge Track 1 Audio
- [ ] Set Beat markers at key timestamps:
  - 0:00 — Hook (Scene 01)
  - 1:00 — Crack (Scene 06)
  - 2:30 — Betrayal (Scene 10)
  - 4:00 — Fall (Scene 14)
  - 5:30 — Pivot (Scene 18)
  - 7:00 — Karma (Scene 22)
  - 9:30 — Downfall (Scene 28)
  - 10:30 — Epilogue (Scene 31)
- [ ] Import 102 clips (C01–C34 × A/B/C) → Track 1 Video, aligned with beat timestamps
- [ ] Hard cut A→B→C within each scene
- [ ] Insert 15 Ken Burns stills → Scale keyframe 100%→115% across duration
- [ ] Crossfade ONLY on transitions from clip to Ken Burns still
- [ ] BGM Track 2:
  - Beat 1-5: lo-fi melancholic piano, minor key, -18dB
  - Beat 6-7: same instrument, warmth returning, -18dB
  - Epilogue: warm coastal acoustic (guitar or strings), -18dB
- [ ] Color grade per beat:
  - Beat 1-2: Warm cream `#F3E9D2` + gold (lift shadows warm)
  - Beat 3: Cool entering (desaturate warmth, push blue-gray)
  - Beat 4-5: Dark cold navy `#0B1426` (crush shadows cold)
  - Beat 6: Pre-dawn warmth returning (lift gold)
  - Beat 7 Maya: Full warm gold
  - Beat 7 Daniel: Cold gray `#1F2937`
  - Beat 8 + Epilogue: Full warm + sage
- [ ] Subtitles auto → fix: Maya, Daniel, Serena, Ashwood Inn, concierge, Harlow, spa, marketing director
- [ ] DUTCH check: Verify ONLY C10B/C, C11B/C, C12B/C, C13B — check C31–C34 have NO Dutch
- [ ] End screen element enters at 11:05

**QC:**
- [ ] Total duration: 11:30 ±15s
- [ ] Voice clear throughout
- [ ] BGM under voice at all times (-18dB verified)
- [ ] Camera moves visible and smooth
- [ ] Spa confirmation text legible in C11C and S06
- [ ] "Guests: two." legible in C12C
- [ ] House deed text legible in C24C and S11
- [ ] Court ruling text legible in C30C
- [ ] Christmas card text legible in C33C and S15

- [ ] Export: `EP08-the-anniversary-trip-final.mp4` → `media/final/`

---

## Phase 7 — Upload YouTube

Guide: `08-upload.md`

- [ ] Upload `EP08-the-anniversary-trip-final.mp4`
- [ ] Title: "He Booked The Anniversary Trip To Save Their Marriage. The Hotel Saved Her From It."
- [ ] Full Description + Tags (from `07-title-description.md`)
- [ ] Thumbnail: `v1.png` (primary)
- [ ] Playlist: "Karma Caught Up Stories"
- [ ] Category: Entertainment
- [ ] Cards: at 5:30 → Subscribe
- [ ] End screen at 11:05 (Subscribe + Next video)
- [ ] Subtitles SRT upload
- [ ] Schedule: Tuesday or Friday 9:00 PM EST
- [ ] **Pinned comment** posted immediately after live
- [ ] Reply all comments first 60 minutes — watch for "🏨" and "wrong paper" threads
- [ ] Cross-post: Reddit + TikTok + Twitter thread

---

## Output when complete

```
prompts/08-the-anniversary-trip/
├── media/
│   ├── images/     EP08-F01A → EP08-F34C (102 PNG) + EP08-S01 → EP08-S15 (15 PNG) = 117 files
│   ├── videos/     EP08-C01A → EP08-C34C (102 MP4)
│   ├── voice/      chunk1.mp3 · chunk2.mp3 · chunk3.mp3
│   ├── thumbnails/ v1.png (active) · v2.png · v3.png
│   └── final/      EP08-the-anniversary-trip-final.mp4

assets/characters/
├── maya-ep08-voxel-base.png        ← NEW EP08
├── daniel-ep08-voxel-base.png      ← NEW EP08
└── hotel-manager-ep08-voxel-base.png ← NEW EP08
```
