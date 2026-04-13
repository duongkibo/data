# GEN CHECKLIST — EP01 NEW: The Baby Registry

> Tick khi đã gen xong. Đi từ trên xuống — mỗi phase phụ thuộc phase trước.

---

## Phase 0 — Channel Setup (1 lần duy nhất)

- [ ] Avatar `assets/branding/avatar.png` — Ideogram 3, 1:1, 2K
- [ ] Banner `assets/branding/banner.png` — Ideogram 3, 2560×1440
- [ ] Upload YouTube Studio → Customization → Branding

---

## Phase 1 — Character Refs (1 lần duy nhất, reuse mọi tập)

Guide: `02-characters.md` · Model: Flux 2 Pro · 1:1 · 2K · white background
Save: `assets/characters/`

- [ ] `maya-voxel-base.png` — protagonist 29, cream cardigan, pregnant belly
- [ ] `ryan-voxel-base.png` — antagonist 32, charcoal dark gray shirt
- [ ] `caleb-voxel-base.png` — new partner 30, sage green cardigan
- [ ] `kayla-voxel-base.png` — other woman 28, navy blue top

**Quality gate**: Cube body visible, NOT Minecraft 1:2 ratio, white background, characters distinct từ nhau.

---

## Phase 2 — Scene Images (102 start frames + 15 stills = 117 images)

Guide: `03-images.md` · Full prompts: `03b-images-full-prompts.md`
Save: `media/images/` · Naming: F{NN}A.png, F{NN}B.png, F{NN}C.png + S01-S15.png

### 102 Start Frames (3 per scene × 34 scenes)

**Nano Banana 2 + maya-voxel-base.png** — Maya scenes

- [ ] F01A/B/C — Maya frozen at laptop 2am kitchen (3 angles)
- [ ] F03A/B/C — Maya morning coffee yellow kitchen (3 angles)
- [ ] F07A/B/C — Phone face-down, Maya in background (3 angles)
- [ ] F09A/B/C — Empty bed 3am, Maya sitting up alone (3 angles)
- [ ] F11A/B/C — Maya opens laptop, still relaxed (3 angles)
- [ ] F14A/B/C — Maya face frozen in laptop blue glow ⭐ (3 angles)
- [ ] F15A/B/C — Maya motionless 2 hours at table (3 angles)
- [ ] F17A/B/C — Maya on kitchen floor, phone to ear (3 angles)
- [ ] F18A/B/C — Maya at desk 3am, notepad + laptop (3 angles)
- [ ] F19A/B/C — Maya packing suitcase calmly, pre-dawn (3 angles)
- [ ] F21A/B/C — Maya's car leaving at dawn (3 angles)
- [ ] F28A/B/C — Maya with baby carrier at mailbox (3 angles)
- [ ] F32A/B/C — Maya + Lily in yellow kitchen morning ⭐ (3 angles)
- [ ] F33A/B/C — Lily laughing, Maya beside her ⭐ (3 angles)

**Nano Banana 2 + ryan-voxel-base.png** — Ryan scenes

- [ ] F05A/B/C — Ryan at house party, charming (3 angles)
- [ ] F06A/B/C — Ryan painting clouds on nursery wall (3 angles)
- [ ] F08A/B/C — Ryan on balcony at night, back turned (3 angles)
- [ ] F22A/B/C — Ryan pacing, phone showing 37 missed calls (3 angles)
- [ ] F25A/B/C — Ryan at corporate office corridor (3 angles)
- [ ] F26A/B/C — Ryan alone in studio apartment (3 angles)
- [ ] F29A/B/C — Ryan in hardware store blue uniform (3 angles)

**Nano Banana 2 + caleb-voxel-base.png** — Caleb scenes

- [ ] F31A/B/C — Caleb walking with 2 coffee cups to Maya (3 angles)

**Nano Banana 2 + kayla-voxel-base.png** — Kayla scenes

- [ ] F23A/B/C — Kayla hearing Ryan through phone speaker (3 angles)
- [ ] F24A/B/C — Kayla typing message, resolved (3 angles)
- [ ] F27A/B/C — Kayla with newborn in hospital (3 angles)

**Flux 2 Pro (no character)** — Environments/objects

- [ ] F04A/B/C — Kindergarten classroom interior (3 angles)
- [ ] F07A/B/C — Phone face-down (env shots) (3 angles)
- [ ] F10A/B/C — New cologne bottle on bathroom shelf (3 angles)
- [ ] F12A/B/C — Wide kitchen + BabyList registry (env shots) (3 angles)
- [ ] F13A/B/C — Sunflower invitations + cold laptop ⭐ (3 angles)
- [ ] F16A/B/C — Apartment hallway, nursery door ajar (3 angles)
- [ ] F20A/B/C — Kitchen table + notecard ⭐ (3 angles)
- [ ] F30A/B/C — Backyard birthday party sunflower (3 angles)

**Ideogram 3** — Text/screen/logo

- [ ] F02A/B/C — Laptop screen "Ethan's Welcome Registry" (3 angles)
- [ ] F34A/B/C — Butterfly logo + "KARMA CAUGHT UP" (3 angles)

### 15 Ken Burns Stills

- [ ] S01 — Maya close-up devastated, single tear (5s)
- [ ] S02 — Maya smiling at classroom door (15s)
- [ ] S03 — Ryan painting clouds, Maya watching (15s)
- [ ] S04 — Phone face-down extreme close-up (10s)
- [ ] S05 — Maya laptop wide kitchen, room cold (15s)
- [ ] S06 — Registry screen with items list (15s)
- [ ] S07 — Maya tiny on kitchen floor (20s)
- [ ] S08 — Nursery door ajar, clouds visible (20s)
- [ ] S09 — Notepad list + desk lamp 3am (20s)
- [ ] S10 — Street view car leaving apartment (15s)
- [ ] S11 — Ryan alone in bare studio (25s)
- [ ] S12 — Ryan in HR meeting through glass (20s)
- [ ] S13 — Kayla and baby, new name on bassinet (20s)
- [ ] S14 — Hardware store Ryan in uniform harsh light (25s)
- [ ] S15 — Backyard birthday party full wide shot (40s)

**Total: 117 images** ✅

---

## Phase 3 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)

Guide: `04-videos.md` · Full prompts: `04b-videos-full-prompts.md`
Save: `media/videos/` · Naming: `C{NN}A.mp4` + `C{NN}B.mp4` + `C{NN}C.mp4`
**Precondition**: Phase 2 done · **Duration per clip: 5s (trim to 3s in CapCut)**

**Rule**: A = WIDE/ESTABLISH · B = MEDIUM/MOVE · C = CLOSE/DETAIL/REACTION · Hard cut A→B→C

- [ ] C01A — ELS PUSH (F01) — Hook kitchen wide
- [ ] C01B — RACK-FOCUS + ECU (F01) — Maya face stunned
- [ ] C01C — DOLLY → STATIC (F01) — Overhead hands on keyboard frozen
- [ ] C02A — PUSH → CU (F02) — Registry screen text
- [ ] C02B — PULL + DUTCH (F02) — Maya face below screen
- [ ] C02C — ORBIT-L + CU (F02) — Screen huge, Maya tiny below
- [ ] C03A — CRANE-UP (F03) — Kitchen reveal wide
- [ ] C03B — CU + PAN-R (F03) — Hands + face smile
- [ ] C03C — ECU + TILT-UP (F03) — Coffee steam to Maya's peaceful face
- [ ] C04A — ELS PUSH (F04) — Classroom wide
- [ ] C04B — ORBIT-R + CU (F04) — Maya laughing close
- [ ] C04C — PULL + LS (F04) — Maya in classroom doorway, full warm
- [ ] C05A — PAN-L + ELS (F05) — Party room wide
- [ ] C05B — PUSH + MS (F05) — Ryan + Maya close
- [ ] C05C — CU + STATIC (F05) — Hands almost touching, then touching
- [ ] C06A — TILT-UP + LS (F06) — Ryan painting wide
- [ ] C06B — CU + DRIFT-R (F06) — Cloud shapes detail
- [ ] C06C — TILT-UP + ELS (F06) — Full nursery reveal — ceiling clouds, Maya watching
- [ ] C07A — LS + RACK-FOCUS (F07) — Phone on counter, Maya bg
- [ ] C07B — PUSH → ECU (F07) — Phone buzzing extreme close
- [ ] C07C — ECU + STATIC (F07) — Phone buzzes again, stays dark. Wrong.
- [ ] C08A — LS + PUSH (F08) — Looking through glass to balcony
- [ ] C08B — DUTCH + CU (F08) — Ryan's profile through glass
- [ ] C08C — PULL + ELS (F08) — Maya watching Ryan from kitchen, distance
- [ ] C09A — DESCENT (F09) — Bird's eye onto empty bed
- [ ] C09B — PULL + CU (F09) — Maya sitting up alone, face
- [ ] C09C — TILT-UP (F09) — Low angle Maya's face against dark ceiling
- [ ] C10A — CU + PAN-R (F10) — Cologne bottle to Ryan mirror
- [ ] C10B — RACK-FOCUS (F10) — Ryan bg → Maya doorway fg
- [ ] C10C — ECU + STATIC (F10) — Cologne bottle alone on shelf. Maya's hand touches it.
- [ ] C11A — LS + PUSH (F11) — Maya opens laptop normal ⭐
- [ ] C11B — FAST PUSH → ECU freeze (F11) — Screen betrayal ⭐
- [ ] C11C — STATIC + SLOW PUSH (F11) — "Ethan's Welcome Registry" ECU holds
- [ ] C12A — ECU + TILT-DN (F12) — Hands scrolling registry
- [ ] C12B — PULL + LS (F12) — Maya alone at cold kitchen
- [ ] C12C — CU + ORBIT-R (F12) — Cold kitchen orbits around her
- [ ] C13A — CU + PAN-L (F13) — Invitations → laptop ⭐
- [ ] C13B — RACK-FOCUS + DUTCH (F13) — Warm vs cold tilt ⭐
- [ ] C13C — ECU + STATIC (F13) — Registry items: "Ethan's Crib," each one a cut
- [ ] C14A — ECU + STATIC (F14) — "From: Kayla" on screen ⭐
- [ ] C14B — RACK-FOCUS → CU (F14) — Maya's face: she knows ⭐
- [ ] C14C — PULL + ELS (F14) — Maya tiny alone in entire cold kitchen
- [ ] C15A — ORBIT-R + LS (F15) — Maya still at table orbit
- [ ] C15B — CRANE-UP (F15) — Wide overhead, she is tiny
- [ ] C15C — DESCENT (F15) — Bird's eye descent onto her motionless shoulders
- [ ] C16A — LS + PUSH (F16) — Hallway toward nursery door
- [ ] C16B — REVERSE (F16) — Inside nursery, clouds visible
- [ ] C16C — ECU + STATIC (F16) — Cloud paintings through door crack
- [ ] C17A — MS + STATIC (F17) — Maya on floor, phone to ear
- [ ] C17B — PULL + CRANE-UP (F17) — Making her smaller, alone
- [ ] C17C — ECU + STATIC (F17) — Maya's face: past tears, decided
- [ ] C18A — ELS + PUSH (F18) — Dark apartment, one warm light
- [ ] C18B — RACK-FOCUS + CU (F18) — Maya's face decided ⭐
- [ ] C18C — TILT-UP (F18) — Notepad list → Maya's lit face. She is ready.
- [ ] C19A — ORBIT-L + LS (F19) — Maya packing, calm orbit
- [ ] C19B — CU + PULL (F19) — Onesie folded, suitcases ready
- [ ] C19C — ECU + STATIC (F19) — Onesie placed into suitcase, precise hands
- [ ] C20A — TILT-DN + CU (F20) — Note on table revealed ⭐
- [ ] C20B — PULL + ELS (F20) — Entire empty kitchen, she's gone ⭐
- [ ] C20C — ORBIT-R + ELS (F20) — Empty kitchen orbit, note alone on table
- [ ] C21A — PAN-R + LS (F21) — Car pulling out, dawn
- [ ] C21B — DOLLY → STATIC (F21) — Maya's face forward, not back
- [ ] C21C — CRANE-UP (F21) — Car leaving, dawn expanding, she is free
- [ ] C22A — CU + DUTCH (F22) — Phone: 37 missed calls
- [ ] C22B — PAN-U + MS (F22) — Ryan pacing, panic not remorse
- [ ] C22C — DOLLY + CU (F22) — Ryan's face close: panic, not grief
- [ ] C23A — MS + STATIC (F23) — Kayla hearing voice on speaker
- [ ] C23B — ECU + DUTCH (F23) — Kayla's face: moment lands
- [ ] C23C — PULL + LS (F23) — Kayla alone, voice still speaking
- [ ] C24A — CU (F24) — Kayla typing message
- [ ] C24B — MS + STATIC (F24) — Maya reading, calls back, calm
- [ ] C24C — ECU + STATIC (F24) — Maya's face after call: free
- [ ] C25A — ELS + PUSH (F25) — Cold corporate corridor
- [ ] C25B — DOLLY + LS (F25) — Ryan leaving with box, defeated
- [ ] C25C — ECU + STATIC (F25) — Ryan's nameplate removed from door
- [ ] C26A — CU + DUTCH (F26) — Brother's text on phone
- [ ] C26B — PULL + ELS (F26) — Ryan tiny in bare studio
- [ ] C26C — RACK-FOCUS (F26) — Window bars → Ryan trapped in bg
- [ ] C27A — TILT-UP + MS (F27) — Kayla + newborn, hospital warm
- [ ] C27B — RACK-FOCUS + CU (F27) — Name tag: NOT Ethan, Kayla okay
- [ ] C27C — ECU + STATIC (F27) — Bassinet nameplate: not Ethan. New life.
- [ ] C28A — MS + STATIC (F28) — Maya reads letter, mild expression
- [ ] C28B — CU (F28) — Hands resealing to lawyer, done
- [ ] C28C — CRANE-UP (F28) — Maya + Lily at mailbox, full neighborhood morning
- [ ] C29A — DESCENT (F29) — Bird's eye into basement bedroom
- [ ] C29B — DOLLY + CU (F29) — Ryan at hardware store, face empty
- [ ] C29C — PULL + ELS (F29) — Ryan tiny in fluorescent store, alone
- [ ] C30A — CRANE-UP (F30) — Party reveal from below ⭐
- [ ] C30B — PUSH + CU (F30) — Maya + Lily, full happiness ⭐
- [ ] C30C — PAN-R + CU (F30) — Sunflowers to Lily's laughing face
- [ ] C31A — MS + PUSH (F31) — Caleb walking with coffees
- [ ] C31B — CU + ORBIT-L (F31) — Coffee handoff + easy laughter
- [ ] C31C — STATIC + CU (F31) — Easy smiles beside each other. This is good.
- [ ] C32A — TILT-UP + LS (F32) — Yellow kitchen reveal
- [ ] C32B — PAN-R + CU (F32) — Maya + Lily laughing breakfast ⭐
- [ ] C32C — ECU + STATIC (F32) — Lily's hands reaching up, life whole
- [ ] C33A — ECU + STATIC (F33) — Lily laughing full body ⭐
- [ ] C33B — PULL + ECU (F33) — Maya's eyes: quiet gratitude ⭐
- [ ] C33C — ORBIT-R + CU (F33) — Maya's settled face: this is what she chose
- [ ] C34A — PUSH + ORBIT-R (F34) — Butterfly logo approach
- [ ] C34B — PULL + ELS (F34) — Full end card, subscribe
- [ ] C34C — STATIC (F34) — "KARMA CAUGHT UP" fully revealed, hold

**Total: 102 MP4 files × 5s gen = 510s footage → trim to 3s each = 306s animated** ✅

---

## Phase 4 — Voice (ElevenLabs Charlotte, 3 chunks)

Guide: `05-voice.md` · Save: `media/voice/`
Settings: Speed **0.92** · Stability **55** · Similarity **80** · Style **30**

- [ ] `chunk1.mp3` — Beats 1-4: Hook→Betrayal (~640 words, ~4:30)
- [ ] `chunk2.mp3` — Beats 5-7: Fall→Karma (~830 words, ~5:00)
- [ ] `chunk3.mp3` — Beat 8 + Epilogue + CTA (~450 words, ~2:30)

**Total: 3 MP3, ~12 min** ✅

---

## Phase 5 — Thumbnails (3 A/B variants)

Guide: `06-thumbnail.md` · Model: Ideogram 3 · 1280×720
Save: `media/thumbnails/`

- [ ] `v1.png` — Maya devastated face + "HIS OTHER BABY" (PRIMARY)
- [ ] `v2.png` — Split: Maya shocked + registry screen
- [ ] `v3.png` — Baby items foreground + "NOT MINE" text

**Mute test**: 3/3 người hiểu content mà không nghe audio.

---

## Phase 6 — Edit + Export (CapCut)

Guide: `08-upload.md` · Save: `media/final/`

- [ ] Import 3 voice chunks → merge Track 1 Audio
- [ ] Import 34 clips (C01-C34) → Track 1 Video, aligned với beats
- [ ] Insert 15 Ken Burns stills → Scale 100%→115% keyframe
- [ ] BGM Track 2 (-18dB)
- [ ] Color grade per beat (warm→cold→warm arc)
- [ ] Subtitles auto → fix key names
- [ ] Export 1920×1080 · 30fps · H.264 · 10Mbps · MP4

**QC**: Total 11:30 ±15s · Voice clear · Camera moves visible · BGM under voice

---

## Phase 7 — Upload YouTube

Guide: `08-upload.md`

- [ ] Upload `EP01-NEW-baby-registry-final.mp4`
- [ ] Title V1 + full Description + Tags
- [ ] Thumbnail v1 (primary)
- [ ] Playlist: "Karma Caught Up Stories"
- [ ] Category: Entertainment
- [ ] Schedule: Tuesday or Friday 9PM EST
- [ ] End screen at 11:10 (Subscribe + Next video)
- [ ] Card at 5:30 (Pivot moment → subscribe link)
- [ ] Subtitles SRT upload
- [ ] Schedule/Publish
- [ ] **Pinned comment** posted immediately after live
- [ ] Reply all comments first 60 min
- [ ] Cross-post: Reddit + Twitter + TikTok teaser clip

---

## Output khi xong

```
prompts/EP01-NEW-the-baby-registry/
├── media/
│   ├── images/     F01A-F34C (102 PNG) + S01-S15 (15 PNG) = 117 files
│   ├── videos/     C01A-C34C (102 MP4)
│   ├── voice/      chunk1-3 (3 MP3)
│   ├── thumbnails/ v1-v3 (3 PNG)
│   └── final/      EP01-NEW-baby-registry-final.mp4

assets/characters/
├── maya-voxel-base.png
├── ryan-voxel-base.png
├── caleb-voxel-base.png
└── kayla-voxel-base.png
```

**Phases reusable cho EP02+**: Phase 0 (channel) + Phase 1 (characters) — 1 lần duy nhất.
**Phases per-episode**: Phase 2-7 lặp lại cho mỗi tập mới.
