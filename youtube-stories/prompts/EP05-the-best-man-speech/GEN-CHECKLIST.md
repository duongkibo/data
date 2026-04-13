# GEN CHECKLIST — EP05: The Best Man Speech

> Tick khi đã gen xong. Đi từ trên xuống — mỗi phase phụ thuộc phase trước.
> Characters: Marcus (cream dress shirt + navy jacket), Derek (dark grey suit), Jade (cream wedding dress)

---

## Phase 0 — Channel Setup (SKIP — done from EP01)

> Channel `@KarmaCaughtUp` is live. Avatar and banner uploaded. Skip this phase entirely.

---

## Phase 1 — Character Refs

**Model**: Flux 2 Pro · **Ratio**: 1:1 · **Resolution**: 2K · **Background**: white
**Save location**: `assets/characters/` (project root, shared across all episodes)

Check if existing refs can be reused — EP05 has entirely new characters.

- [ ] `marcus-voxel-base.png` — Male 31, cream dress shirt under navy jacket, structured dark voxel hair neatly kept, cube head, composed controlled expression. Structural engineer build — not massive, just precise.
- [ ] `derek-voxel-base.png` — Male ~31, dark grey suit, easy default smile, voxel hair slightly more casual, cube head. The kind of face that rooms turn toward. Note: **for Beat 4 scenes**, expression shifts to jaw-tight confession posture — flag this when generating his scene frames.
- [ ] `jade-voxel-base.png` — Female ~29, cream voxel wedding dress, rounded voxel hair (dark), cube head, warm default expression. She appears mostly in background/wide frames after Beat 4 — no close-ups required in betrayal beats.

**Quality gate**: Cube body visible (NOT Minecraft 1:2 tall ratio), white background, all three characters visually distinct. Marcus and Derek must be distinguishable at thumbnail size.

---

## Phase 2 — Scene Images (34 frames × 3 angles = 102 start frames + 15 Ken Burns = 117 images)

**Guide**: `03-images.md` (create separately)
**Save location**: `media/images/`
**Naming**: F{NN}A.png / F{NN}B.png / F{NN}C.png (Kling start frames) · S01.png–S15.png (Ken Burns stills)

### Model routing

| Model | Use for |
|---|---|
| **Nano Banana 2** | All frames with Marcus, Derek, or Jade as primary subject |
| **Flux 2 Pro** | Environments, objects, wide establishing shots, no close character faces |
| **Ideogram 3** | Any frame requiring readable text on screen (screens, signs, documents) |

---

### Nano Banana 2 — Marcus scenes (use `marcus-voxel-base.png` as character ref)

- [ ] F05A/B/C — Marcus at ceremony watching Jade walk the aisle, expression: quiet wonder, warm amber light, string lights behind
- [ ] F06A/B/C — Marcus at head table reception, champagne in hand, relaxed, 6:15 PM ambient
- [ ] F15A/B/C — Marcus at head table, Derek visible at mic bg, expression: first confusion turning to stillness ⭐ key frame
- [ ] F16A/B/C — **"He went very still."** Marcus seated, champagne untouched, eyes forward, completely controlled — the structural still ⭐ hero frame
- [ ] F20A/B/C — Marcus outside venue, stone steps, 6:47 PM, night air, alone, coat on, composed
- [ ] F22A/B/C — Marcus at apartment desk, phone to ear — calling vendors Monday morning
- [ ] F24A/B/C — Marcus at drafting desk, recreation center blueprints open, focused ⭐ pivot frame
- [ ] F25A/B/C — Marcus at desk, email open: "Clean submission. Nice work." — printing it
- [ ] F30A/B/C — Marcus at ribbon cutting ceremony (back of crowd), recreation center exterior, March morning ⭐
- [ ] F32A/B/C — Marcus and mother at restaurant table, Lexington Avenue, chili, warm domestic scene ⭐ epilogue
- [ ] F33A/B/C — Marcus's face settled, quiet happiness, the kind that doesn't perform itself ⭐ epilogue close

### Nano Banana 2 — Derek scenes (use `derek-voxel-base.png` as character ref)

- [ ] F07A/B/C — Derek at wedding reception, standing, note cards in hand, microphone stand beside him — the moment before ⭐
- [ ] F12A/B/C — Derek at microphone, mid-confession expression: jaw tight, looking down at cards then up — NOT smiling ⭐ (**DUTCH B/C clips only**)
- [ ] F13A/B/C — Derek's face as confession lands — the room's silence registers on him (**DUTCH B/C clips only**)
- [ ] F26A/B/C — Derek at home, Instagram open, posting with Jade — warm-filtered but the comment section is cold
- [ ] F28A/B/C — Derek subdued at desk — relapse aftermath, stripped expression
- [ ] F29A/B/C — Derek's LinkedIn profile showing "Private" — his phone screen, hand visible

### Nano Banana 2 — Jade scenes (use `jade-voxel-base.png` as character ref)

- [ ] F04A/B/C — Jade walking the aisle in cream, warm amber light, unaware of what Derek is about to do (**Beat 3 — warm color only**)
- [ ] F14A/B/C — Jade at head table, the moment after Derek's confession — expression between caught and stunned (**DUTCH B/C clips only**) ⭐

---

### Flux 2 Pro — Environments + objects (no main character close-ups)

- [ ] F01A/B/C — Opening: Riverside Gardens exterior, October evening, string lights just coming on, warm amber twilight
- [ ] F02A/B/C — Riverside Gardens interior wide: reception room, string lights, amber lanterns, 74 empty chairs just being set
- [ ] F03A/B/C — NC State dorm hallway — Beat 2 flashback, warm grain, two figures (distant voxel silhouettes) meeting in hallway
- [ ] F08A/B/C — Reception room wide at 6:15 PM, 74 guests visible (tiny voxel figures at tables), Derek standing at mic
- [ ] F09A/B/C — Riverside Gardens room after Marcus leaves: empty head table chair, untouched champagne, note cards on floor
- [ ] F10A/B/C — Marcus's apartment exterior, night, simple building, October cold air
- [ ] F17A/B/C — Marcus's phone screen — vendor calls list, 61% deposits recovered ⭐ (Ideogram if text needed)
- [ ] F18A/B/C — Recreation center construction site, Asheville, early morning, blueprints on site table
- [ ] F19A/B/C — Recreation center structural plans laid flat — seismic zone markers visible ⭐ (Ideogram for text)
- [ ] F21A/B/C — Asheville west side — recreation center exterior mid-construction, community neighborhood
- [ ] F23A/B/C — Derek + Jade Instagram post on phone — warm filtered restaurant photo (**Ideogram for text**)
- [ ] F27A/B/C — Courthouse exterior — small, plain, grey winter sky, 12-person registry
- [ ] F31A/B/C — Recreation center ribbon cutting: mayor + council rep at entrance, crowd, Marcus visible at back
- [ ] F34A/B/C — Butterfly graphic + "KARMA CAUGHT UP" channel end card wide

### Ideogram 3 — Text-on-screen frames (must be pixel-sharp readable)

- [ ] F17b — Marcus's phone: vendor list showing "Deposits recovered: 61%" — clean sans-serif text
- [ ] F19b — Recreation center submission email: "First submission: APPROVED — No revisions required"
- [ ] F23b — Derek's Instagram post: couple photo + comment section with negative comments partially visible
- [ ] F29b — Derek's LinkedIn: "Derek [Last Name] — Profile (Private)" — greyed out, minimal visible info

---

### DUTCH flag — Beat 3–5 frames only

Frames requiring DUTCH (tilted) camera angle for B and C clips:

- **F12B, F12C** — Derek at microphone mid-confession (B/C clips)
- **F13B, F13C** — Derek's expression as room goes silent (B/C clips)
- **F14B** — Jade caught at head table (B clip only)

DUTCH NEVER: F30 through F34 (Epilogue/CTA — must be stable, warm, grounded)

---

### 15 Ken Burns Stills — Flux 2 Pro (wide establishing shots, no close character faces)

- [ ] S01 — Wide: Riverside Gardens exterior at dusk, October, string lights warming up, October foliage
- [ ] S02 — Interior wide: Riverside Gardens reception room full setup — string lights, amber lanterns, cream tablecloths, 74 chairs
- [ ] S03 — Wide: Asheville NC skyline at golden hour — Marcus's home city, warm established
- [ ] S04 — Wide: NC State campus exterior — establishing the friendship origin, 12 years ago
- [ ] S05 — Interior wide: Riverside Gardens ceremony moment — guests seated, aisle visible, soft glow
- [ ] S06 — Wide: Riverside Gardens reception room at 6:15 PM — full with guests, Derek visible at mic distance
- [ ] S07 — Wide: Riverside Gardens entrance/exit — stone steps, night, October cold, empty ⭐ (Marcus's exit)
- [ ] S08 — Wide: Marcus's apartment street, Asheville, Monday morning, early light — the pivot
- [ ] S09 — Wide: Recreation center site — west Asheville community neighborhood, construction scaffolding
- [ ] S10 — Wide: Marcus's drafting office, blueprints on desk, structural drawings, focused environment
- [ ] S11 — Wide: Asheville Instagram/social media representation — cold blue screens, phones in hands, distant crowd
- [ ] S12 — Wide: Courthouse exterior, grey winter sky, plain government building — small quiet ceremony
- [ ] S13 — Wide: Recreation center exterior complete — ribbon across entrance, March morning light
- [ ] S14 — Wide: Lexington Avenue, Asheville — restaurants, Sunday morning, warm storefront glow ⭐ epilogue
- [ ] S15 — Wide: Marcus walking Asheville street, spring, recreation center visible in background, new project drawings under arm ⭐ closing shot

---

## Phase 3 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)

**Guide**: `04-videos.md` · Full prompts: `04b-videos-full-prompts.md`
**Save**: `media/videos/` · Naming: `C{NN}A.mp4` + `C{NN}B.mp4` + `C{NN}C.mp4`
**Precondition**: Phase 2 done · **Duration gen: 5s → CapCut trim to 3s**

**Rule**: A = WIDE/ESTABLISH · B = MEDIUM/MOVE · C = CLOSE/DETAIL/REACTION · Hard cut A→B→C

### Camera move reference

`PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DUTCH · DESCENT · STATIC`

**DUTCH rule**: Beat 3–5 B/C clips of betrayal scenes ONLY. Epilogue: NEVER.

---

### All 102 clips — scene by scene

- [ ] C01A — CRANE-UP (F01) — Riverside Gardens exterior wide, October dusk approach
- [ ] C01B — PUSH→MS (F01) — String lights detail medium
- [ ] C01C — ECU + STATIC (F01) — Single amber light glowing close
- [ ] C02A — DOLLY + LS (F02) — Reception room wide establishing
- [ ] C02B — PAN-R + MS (F02) — Table settings panning
- [ ] C02C — ECU + RACK-FOCUS (F02) — Champagne glass close, blurred lights bg
- [ ] C03A — CRANE-UP (F03) — NC State dorm hallway wide
- [ ] C03B — DOLLY + MS (F03) — Two young figures meeting hallway distance
- [ ] C03C — PUSH + CU (F03) — Handshake or greeting close — friendship origin
- [ ] C04A — ELS + PUSH (F04) — Marcus watching Jade on aisle, wide
- [ ] C04B — MS + STATIC (F04) — Marcus face: quiet wonder ⭐
- [ ] C04C — RACK-FOCUS + ECU (F04) — Marcus eyes, focused, present, happy
- [ ] C05A — CRANE-UP (F05) — Full aisle wide, ceremony room
- [ ] C05B — PAN-L + MS (F05) — Jade walking, string lights behind
- [ ] C05C — ECU + STATIC (F05) — Jade's hands, bouquet detail
- [ ] C06A — ELS + PUSH (F06) — Reception room wide at 6:15, guests seated ⭐ hero clip
- [ ] C06B — MS + DOLLY (F06) — Marcus at head table, champagne raised
- [ ] C06C — ECU + STATIC (F06) — Cufflinks close — detail, composed ⭐ hero clip
- [ ] C07A — LS + PUSH (F07) — Derek standing, microphone, note cards in hand ⭐
- [ ] C07B — MS + STATIC (F07) — Derek face: the easy smile starting
- [ ] C07C — ECU + RACK-FOCUS (F07) — Note cards in hand — over-prepared detail
- [ ] C08A — ELS + STATIC (F08) — Reception room: 74 guests facing Derek
- [ ] C08B — PAN-L + MS (F08) — Guest faces: expectant smiles
- [ ] C08C — ECU + STATIC (F08) — A single guest's champagne glass — still full, held in suspension
- [ ] C09A — MS + PUSH (F09) — Derek at mic, mid-pause, jaw moving ⭐
- [ ] C09B — ECU + STATIC (F09) — Derek's face: the smile gone ⭐
- [ ] C09C — RACK-FOCUS + ECU (F09) — Note cards dropped or held at side — not reading them anymore
- [ ] C10A — ELS + STATIC (F10) — Reception wide: the pause everyone felt ⭐
- [ ] C10B — MS + STATIC (F10) — Multiple guests: confused smiles fading
- [ ] C10C — ECU + STATIC (F10) — A single face in the crowd: the smile is gone
- [ ] C11A — MS + STATIC (F11) — Derek at mic: "I can't do this." ⭐ hero clip
- [ ] C11B — ECU + STATIC (F11) — Derek's jaw tight, eyes not meeting room ⭐
- [ ] C11C — RACK-FOCUS + DOLLY (F11) — Derek to Marcus — focus shifts ⭐
- [ ] C12A — ELS + STATIC (F12) — Reception room frozen — nobody moves ⭐ hero clip
- [ ] C12B — MS + DUTCH (F12) — Derek's mouth as confession words leave it (**DUTCH**) ⭐
- [ ] C12C — ECU + DUTCH (F12) — Derek's eyes: he said it (**DUTCH**) ⭐
- [ ] C13A — MS + PUSH (F13) — Jade at head table — the words landing on her face
- [ ] C13B — ECU + DUTCH (F13) — Jade's expression: caught (**DUTCH**) ⭐
- [ ] C13C — PULL + LS (F13) — Wide: the full table, the distance between them all
- [ ] C14A — LS + PUSH (F14) — Marcus at head table: STILL ⭐ hero clip
- [ ] C14B — MS + STATIC (F14) — Marcus face: controlled, gone very still ⭐ hero clip
- [ ] C14C — ECU + STATIC (F14) — Marcus's hands on table — not gripping, just still ⭐
- [ ] C15A — CRANE-UP (F15) — Reception room aerial — Marcus small at head table
- [ ] C15B — DESCENT (F15) — Descending to Marcus alone at table
- [ ] C15C — ECU + STATIC (F15) — Champagne glass untouched beside Marcus's hand
- [ ] C16A — LS + PUSH (F16) — Marcus stands from head table ⭐
- [ ] C16B — DOLLY + MS (F16) — Marcus walking toward exit, measured pace
- [ ] C16C — PULL + ELS (F16) — Marcus at exit door — room behind him, full and silent
- [ ] C17A — ELS + STATIC (F17) — Stone steps outside venue, night, October cold
- [ ] C17B — MS + STATIC (F17) — Marcus on steps, coat on, alone, still composed
- [ ] C17C — ECU + STATIC (F17) — Marcus's breath in October cold air — just existing
- [ ] C18A — LS + STATIC (F18) — Marcus's apartment, Monday morning, early light
- [ ] C18B — MS + DOLLY (F18) — Marcus at desk, phone, list in hand — calling vendors
- [ ] C18C — ECU + STATIC (F18) — Phone screen: "Deposit recovered" confirmation ⭐
- [ ] C19A — ELS + PUSH (F19) — Lease paperwork on desk — removing Jade from joint lease
- [ ] C19B — MS + STATIC (F19) — Marcus signing paperwork, calm
- [ ] C19C — ECU + STATIC (F19) — Pen on paper — the decision made physical
- [ ] C20A — ELS + PUSH (F20) — Marcus at drafting desk, recreation center blueprints wide ⭐ hero clip
- [ ] C20B — RACK-FOCUS + MS (F20) — Blueprints in focus, Marcus's hands working ⭐ hero clip
- [ ] C20C — ECU + TILT-UP (F20) — Blueprint seismic zone notation to Marcus's focused face ⭐
- [ ] C21A — LS + STATIC (F21) — Recreation center site visit wide, community neighborhood
- [ ] C21B — MS + DOLLY (F21) — Marcus walking site with structural drawings
- [ ] C21C — ECU + STATIC (F21) — His hand on the structure — load calculation
- [ ] C22A — ELS + PUSH (F22) — Office: email open, "Clean submission. No revisions." ⭐
- [ ] C22B — CU + STATIC (F22) — Marcus reading the email
- [ ] C22C — ECU + STATIC (F22) — He prints it. Places it in desk drawer.
- [ ] C23A — CU + STATIC (F23) — Derek's Instagram post on phone screen
- [ ] C23B — MS + STATIC (F23) — Comment section visible — negative, many
- [ ] C23C — ECU + TILT-DN (F23) — Comment count rising — the room's verdict, scrolling ⭐
- [ ] C24A — LS + STATIC (F24) — Courthouse exterior, grey winter sky
- [ ] C24B — MS + STATIC (F24) — Small group of 12 outside, no celebration
- [ ] C24C — ECU + STATIC (F24) — Courthouse door closing — understated, cold
- [ ] C25A — ELS + PUSH (F25) — Derek's apartment, after — sparse, subdued
- [ ] C25B — MS + STATIC (F25) — Derek face: the easy smile is gone permanently
- [ ] C25C — ECU + STATIC (F25) — Derek's hands — idle, no longer meticulous
- [ ] C26A — CU + STATIC (F26) — Jade's side of the apartment — personal items being gathered
- [ ] C26B — MS + DOLLY (F26) — Jade at door with bag — the leaving
- [ ] C26C — PULL + ELS (F26) — Door closed. Derek alone in frame. Wide.
- [ ] C27A — ELS + STATIC (F27) — Derek's LinkedIn profile: "Private" ⭐
- [ ] C27B — CU + STATIC (F27) — Phone screen: profile hidden, grey, minimal
- [ ] C27C — PULL + LS (F27) — Phone face-down on empty desk
- [ ] C28A — ELS + PUSH (F28) — Recreation center ribbon cutting, March morning ⭐ hero clip
- [ ] C28B — CRANE-UP (F28) — Aerial: crowd gathered, ribbon across entrance
- [ ] C28C — MS + STATIC (F28) — Marcus at back of crowd, watching ⭐
- [ ] C29A — CU + STATIC (F29) — Marcus: project lead email notification ⭐
- [ ] C29B — ECU + STATIC (F29) — Email text: "Project Lead — East Asheville Middle School"
- [ ] C29C — TILT-UP (F29) — From email to Marcus's face: settled, sure
- [ ] C30A — ELS + PUSH (F30) — Lexington Avenue wide, Sunday morning, warm ⭐
- [ ] C30B — MS + STATIC (F30) — Marcus and mother at restaurant table, chili
- [ ] C30C — ECU + STATIC (F30) — Their hands across table, the conversation real ⭐
- [ ] C31A — LS + PUSH (F31) — Marcus walking Asheville, spring light
- [ ] C31B — MS + STATIC (F31) — Marcus's face: himself again
- [ ] C31C — ECU + STATIC (F31) — New project drawings under his arm — next commission
- [ ] C32A — ORBIT-R + LS (F32) — Wide city/neighborhood: Marcus in it, at home
- [ ] C32B — MS + STATIC (F32) — Marcus looking at the recreation center in the distance
- [ ] C32C — ECU + STATIC (F32) — His eye: settled, not looking back ⭐
- [ ] C33A — ELS + PUSH (F33) — Spring Asheville establishing — new season ⭐
- [ ] C33B — MS + STATIC (F33) — Warmth of the frame — epilogue full warm
- [ ] C33C — ORBIT-R + CU (F33) — Marcus's face: peace that doesn't perform ⭐
- [ ] C34A — PUSH + ORBIT-R (F34) — Butterfly logo approach
- [ ] C34B — PULL + ELS (F34) — Full end card wide
- [ ] C34C — STATIC (F34) — "KARMA CAUGHT UP" hold for subscribe

**Total: 102 MP4 files × 5s gen → trim 3s each = 306s animated** ✅

---

### Hero clips (priority gen — do these first)

⭐ **C06C** — Cufflinks close (Beat 2 — establish Marcus's composure)
⭐ **C11A** — "I can't do this." (Beat 4 — the turn)
⭐ **C12A/B/C** — Confession landing (Beat 4 center — DUTCH B/C)
⭐ **C14A/B/C** — Marcus goes very still (Beat 4 — structural metaphor)
⭐ **C20A/B/C** — Blueprints / recreation center (Beat 6 pivot)
⭐ **C22A** — "No revisions required" (Beat 6 completion)
⭐ **C28A** — Ribbon cutting (Epilogue — earned warmth)
⭐ **C30C** — Marcus and mother at table (Epilogue close)

### DUTCH usage note
- DUTCH permitted ONLY: C12B, C12C, C13B, C13C, C14B (Beat 4 zone — betrayal scenes)
- DUTCH NEVER: C28 through C34 (Epilogue/CTA — must be stable, warm, grounded)

---

## Phase 4 — Voice (3 chunks)

**Tool**: ElevenLabs · **Voice**: Charlotte `XB0fDUnXU5powFXDhCwa`
**Guide**: `05-voice.md`
**Save location**: `media/voice/`

- [ ] `chunk1.mp3` — Beats 1–3 + start of Beat 4 (~4:20)
- [ ] `chunk2.mp3` — Beat 4 cont. + Beats 5–7 (~5:45)
- [ ] `chunk3.mp3` — Beat 8 + Epilogue + CTA (~2:55)

**Quality gate**: Total runtime 11:20–11:40 at 0.92x.
Listen specifically for:
- "I can't do this." → `[pause 2s]` holds before confession
- "For fourteen months." — separate clause, separate weight
- "He went very still." → delivered slowly, lower register
- "seismic zone two" pronounced correctly (SY-zmik)
- No character drift across chunk joins

---

## Phase 5 — Thumbnails

**Tool**: Ideogram 3 · **Ratio**: 16:9 · **Resolution**: 1280×720
**Guide**: `06-thumbnail.md`
**Save location**: `media/thumbnails/`

- [ ] `v1.png` — Marcus still face at table, "FOR 14 MONTHS" (PRIMARY)
- [ ] `v2.png` — Derek at microphone mid-confession, "THE BEST MAN"
- [ ] `v3.png` — Empty reception, untouched champagne, "THE SPEECH"

**Quality gate (mute test)**: Each thumbnail communicates betrayal story in under 3 seconds without audio.
**Mobile check**: Main text readable at 120px thumbnail width.
**DUTCH frames flag**: F12B/C, F13B/C, F14B — confirm generated with DUTCH angle before Kling gen.

---

## Phase 6 — Edit + Export (CapCut)

**Guide**: `08-upload.md` — CapCut section
**Output**: `media/final/EP05-best-man-speech-final.mp4`

- [ ] Import all assets: voice chunks, BGM, A/B/C clips, Ken Burns stills
- [ ] Assemble voice track (chunk1 + 2 + 3, no gap)
- [ ] Assemble video track: C01A–C34A hard cut sequence (Track 1)
- [ ] Layer B-clips (Track 2) and C-clips (Track 3) as cutaways per scene
- [ ] Place Ken Burns stills S01–S15 per timing table in `08-upload.md`
- [ ] Color grade by beat — especially SNAP COLD at Beat 4 confession (C20)
- [ ] BGM: -18dB overall, dip to near-silence at "I can't do this" beat
- [ ] Auto-subtitle → review → fix character names + "seismic zone 2"
- [ ] Add end screen at [duration - 20s]
- [ ] Export: 1920×1080, 30fps, H.264, 10Mbps, MP4
- [ ] Verify total duration: 11:20–11:40 ✓
- [ ] Verify mid-roll ads eligible (duration > 10:00) ✓

---

## Phase 7 — Upload YouTube

**Guide**: `08-upload.md` — YouTube Studio section

- [ ] Upload `EP05-best-man-speech-final.mp4` to YouTube Studio
- [ ] Set title (primary from `07-title-description.md`)
- [ ] Paste full description
- [ ] Upload thumbnail v1.png
- [ ] Add to playlist "Karma Caught Up Stories"
- [ ] Paste 15 tags
- [ ] Set end screen (Subscribe + Next video)
- [ ] Add card at 50% mark
- [ ] Upload `.srt` subtitle file
- [ ] Set monetization: ON, all ad formats
- [ ] Category: Entertainment
- [ ] Schedule: Tuesday or Friday 9:00 PM EST
- [ ] Confirm and schedule
- [ ] Post pinned comment within 60s of going live
- [ ] Reply to all comments in first 60 minutes
- [ ] Cross-post: Reddit + Twitter/X + TikTok (Beat 4 clip, ~03:45–04:50, 60s)

---

## Output folder structure (final state)

```
youtube-stories/prompts/EP05-the-best-man-speech/
├── 00-README.md
├── 02-characters.md
├── 03-images.md               (create separately)
├── 03b-images-full-prompts.md (create separately)
├── 04-videos.md               (create separately)
├── 04b-videos-full-prompts.md (create separately)
├── 05-voice.md                ✓ done
├── 06-thumbnail.md            ✓ done
├── 07-title-description.md    ✓ done
├── 08-upload.md               ✓ done
├── GEN-CHECKLIST.md           ✓ this file
└── media/
    ├── images/
    │   ├── F01A.png – F34C.png  (102 Kling start frames)
    │   ├── F17b.png             (Ideogram — deposit recovery text)
    │   ├── F19b.png             (Ideogram — submission approval text)
    │   ├── F23b.png             (Ideogram — Instagram post text)
    │   └── F29b.png             (Ideogram — LinkedIn private screen)
    │   └── S01.png – S15.png    (15 Ken Burns stills)
    ├── videos/
    │   ├── C01A.mp4 – C34A.mp4   (34 A-clips)
    │   ├── C01B.mp4 – C34B.mp4   (34 B-clips)
    │   └── C01C.mp4 – C34C.mp4   (34 C-clips)
    ├── voice/
    │   ├── chunk1.mp3
    │   ├── chunk2.mp3
    │   └── chunk3.mp3
    ├── thumbnails/
    │   ├── v1.png  ← PRIMARY ("FOR 14 MONTHS")
    │   ├── v2.png
    │   └── v3.png
    └── final/
        └── EP05-best-man-speech-final.mp4

assets/characters/   (shared across all episodes)
├── marcus-voxel-base.png      ← NEW for EP05
├── derek-voxel-base.png       ← NEW for EP05
└── jade-voxel-base.png        ← NEW for EP05
```
