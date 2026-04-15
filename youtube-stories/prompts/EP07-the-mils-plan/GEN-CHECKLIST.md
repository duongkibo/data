# GEN CHECKLIST — EP07: The MIL's Plan

> Tick when generated. Go top-to-bottom — each phase depends on the phase before.

---

## Phase 0 — Character Refs (MANDATORY FIRST)

> Generate all 3 before any scene frames. Save to `assets/characters/ep07/`.
> Guide: `02-characters.md` · Model: Nano Banana 2 · 1:1 or 16:9 · 2K

- [ ] `claire-voxel-base.png` — 33, cream/sage blouse, dark bob, amber eyes, clinical lanyard, composed expression. NOT smiling, NOT frowning. Cube body, NOT Minecraft.
- [ ] `owen-voxel-base.png` — 34, warm charcoal grey button-down, kind face, slightly closed posture, taller than Claire. Warm brown hair. Gentle uncertain expression.
- [ ] `renata-voxel-base.png` — 63, cold burgundy/dark mauve structured blouse, silver-white updo, pearl studs, CONTROLLED SMILE — pleasant surface, calculation underneath. Cool rim light hint. NOT overtly villainous.

**Quality gate before proceeding to Phase 1**:
- [ ] All 3 cube-body consistent (NOT humanoid smooth, NOT Minecraft 1:2 pixel)
- [ ] Three characters immediately distinguishable at thumbnail size:
  - Claire: WARM (cream/sage)
  - Owen: NEUTRAL (charcoal/grey)
  - Renata: COLD (burgundy/mauve)
- [ ] Renata's smile reads "controlled and pleasant" NOT "obviously evil"
- [ ] Claire's expression: composed, neutral — NOT tense, NOT soft/smiling
- [ ] Owen's expression: kind but slightly uncertain

---

## Phase 1 — Scene Images (102 start frames + 15 stills = 117 images)

Guide: `03-images.md` · Full prompts: `03b-images-full-prompts.md`
Save: `media/images/` · Naming: `F{NN}A.png`, `F{NN}B.png`, `F{NN}C.png` + `S01.png`–`S15.png`

### DUTCH angle warning
DUTCH frames (betrayal zone ONLY): **F12B · F13B · F13C · F14B · F15B**
ABSOLUTELY NO DUTCH: F01–F11 · F16–F34 · ALL Ken Burns S01–S15

### Color arc per phase
- F01–F04: WARM cream #F3E9D2 + gold #D4A547
- F05–F10: WARM cooling, burgundy entering
- F11–F15: DARK COLD navy #0B1426
- F16–F19: DARK navy #0D1A2B
- F20–F24: TURNING WARM #2A1F35 → #3D4F3C
- F25–F31: COLD GRAY institutional #1F2937
- F32–F33: NEUTRAL COOL #374151
- F34: FULL WARM #D4A547 + sage #6B7F5A

---

### 102 Start Frames (3 per scene × 34 scenes)

**Nano Banana 2 + claire-voxel-base.png** — Claire character scenes

- [ ] F02A/B/C — Claire at clinical office, warm professional desk, window with garden (3 angles)
- [ ] F03A/B/C — Community garden, Claire + Owen meeting, warm afternoon (3 angles)
- [ ] F04A/B/C — Owen fixing porch step / lunch call / wedding photo on desk (3 angles)
- [ ] F10A/B/C — Claire tracking patterns, notebook open, professional mind (3 angles)
- [ ] F11A/B/C — Sunday kitchen, Owen hands folded, Claire standing [DARK COLD] (3 angles)
- [ ] F15A/B/C — Claire at window, window-watcher realization [F15B: DUTCH] ⭐ (3 angles)
- [ ] F16A/B/C — Claire alone in empty house, Owen moved out (3 angles)
- [ ] F17A/B/C — Work composure / night home falling apart (3 angles)
- [ ] F18A/B/C — Claire's pattern recognition, study desk, late night (3 angles)
- [ ] F19A/B/C — Finding voicemail archive on phone, the turn begins (3 angles)
- [ ] F20A/B/C — Listening to VM3, phone to ear [TURNING WARM] (3 angles)
- [ ] F21A/B/C — Listening to VM5, planted lie ⭐ [TURNING WARM] (3 angles)
- [ ] F22A/B/C — Written log, behavior correlation, documentation spread ⭐ (3 angles)
- [ ] F23A/B/C — Claire calls Owen, calm phone call (3 angles)
- [ ] F24A/B/C — Handing Owen phone, leaving room ⭐ THE MOMENT (3 angles)
- [ ] F25A/B/C — Claire in kitchen with cold tea, parallel to Owen listening (3 angles)
- [ ] F33A/B/C — Claire reads Facebook post, "files closed" quiet (3 angles)
- [ ] F34A/B/C — Clinical Supervisor nameplate + lunch call + voicemails still saved ⭐ (3 angles)

**Nano Banana 2 + owen-voxel-base.png** — Owen character scenes

- [ ] F03A/B/C — Community garden with Claire (use with claire ref) (3 angles)
- [ ] F04A/B/C — Owen fixing porch / phone call (standalone Owen) (3 angles)
- [ ] F06A/B/C — Owen comes home "slightly off", jacket on, doorway (3 angles)
- [ ] F11A/B/C — Sunday kitchen with Claire (use with claire ref) [DARK COLD] (3 angles)
- [ ] F12A/B/C — "Fundamental incompatibility" at kitchen table [F12B: DUTCH] (3 angles)
- [ ] F14A/B/C — Owen asks for separation, Claire's clarity [F14B: DUTCH] (3 angles)
- [ ] F25A/B/C — Owen listening alone in living room (with claire in kitchen) (3 angles)
- [ ] F26A/B/C — Owen's face: "How long did you know?" — kitchen doorway (3 angles)
- [ ] F27A/B/C — Owen in backyard on call, Claire watching through window ⭐ (3 angles)
- [ ] F28A/B/C — "Her own voice. Her own number." Owen's certainty (3 angles)
- [ ] F33A/B/C — Owen + Claire together, quiet resolution (3 angles)

**Nano Banana 2 + renata-voxel-base.png** — Renata character scenes

- [ ] F05A/B/C — First Renata meeting at door, controlled smile (3 angles)
- [ ] F07A/B/C — Renata on phone, timed morning calls (3 angles)
- [ ] F08A/B/C — Renata unannounced visit, leaning toward Owen (3 angles)
- [ ] F09A/B/C — Owen: "boring and provincial" — Renata's first rewrite landing (3 angles)
- [ ] F13A/B/C — "You told her at Thanksgiving" [F13B + F13C: DUTCH] ⭐ BETRAYAL PEAK (3 angles)
- [ ] F30A/B/C — Renata calling Diane + Marcus, network backfiring (3 angles)

**Flux 2 Pro** — Environments, no character or secondary role

- [ ] F01A/B/C — Phone screen voicemail glow, dark background, amber badge (3 angles)
- [ ] F16A (env layer) — Home exterior, empty evening, Owen moved out
- [ ] F27A (env layer) — Backyard exterior + kitchen window perspective
- [ ] F31A/B/C — Christmas gathering, warm interior, Renata's empty chair (3 angles)

**Ideogram 3** — Readable text / screen content / documents

- [ ] F13A/B/C — "You didn't want children" text on screen [with Owen ref for Nano Banana 2] (3 angles)
- [ ] F20A/B/C — VM3 phone screen: "not built for closeness" text visible ⭐ (3 angles)
- [ ] F21A/B/C — VM5 phone screen: "some women say they want children" text visible ⭐ (3 angles)
- [ ] F22A/B/C — Written log, handwritten behavior correlation readable (3 angles)
- [ ] F29A/B/C — No-contact order document, Owen's name + signature ⭐ (3 angles)
- [ ] F32A/B/C — Facebook post UI, "1 Like · 0 Comments" clearly readable ⭐ (3 angles)
- [ ] F34A/B/C — Clinical Supervisor nameplate, phone voicemail archive ⭐ (3 angles)

---

### 15 Ken Burns Stills

Save: `media/images/S01.png` – `S15.png`
CapCut: scale keyframe 100%→115% over hold duration (slow zoom/pan)

- [ ] S01 (20s) — Claire's face at window, window-watcher realization ⭐ SLOW ZOOM IN — [Nano Banana 2 + claire ref]
- [ ] S02 (15s) — Community garden, Claire + Owen warm first meeting — SLOW PAN RIGHT — [Nano Banana 2 both refs]
- [ ] S03 (15s) — Owen's wedding photo on engineer's desk — SLOW ZOOM IN — [Flux 2 Pro]
- [ ] S04 (10s) — Renata at front door, controlled smile ⭐ — BRIEF HOLD — [Nano Banana 2 + renata ref]
- [ ] S05 (15s) — Renata leaning low voice toward Owen in living room — SLOW ZOOM TO RENATA'S FACE — [Nano Banana 2 + renata ref]
- [ ] S06 (20s) — Claire's written log, timestamps + behavior correlations ⭐ — PAN ACROSS PAGE — [Nano Banana 2 + claire ref + Ideogram 3]
- [ ] S07 (15s) — Voicemail archive, 8 saved entries on phone screen, dates visible — SLOW ZOOM IN — [Ideogram 3]
- [ ] S08 (20s) — VM3 on screen: "not built for closeness with family" ⭐ — SLOW ZOOM TO PHRASE — [Ideogram 3]
- [ ] S09 (25s) — VM5 on screen: "some women say they want children and then realize they don't" ⭐ LONGEST HOLD — PAN + ZOOM — [Ideogram 3]
- [ ] S10 (20s) — Owen in backyard on phone, Claire through window ⭐ — SLOW PUSH FROM INSIDE — [Nano Banana 2 owen ref + Flux 2 Pro env]
- [ ] S11 (20s) — No-contact order document, Owen's signature visible ⭐ — SLOW ZOOM TO SIGNATURE — [Ideogram 3]
- [ ] S12 (20s) — Christmas family gathering, Renata's chair empty — SLOW PAN ACROSS ROOM — [Flux 2 Pro]
- [ ] S13 (15s) — Facebook post: victim narrative, "1 like 0 comments" — SLOW ZOOM TO LIKE COUNT — [Ideogram 3]
- [ ] S14 (15s) — Clinical Supervisor nameplate, "Claire [Last Name]" — SLOW ZOOM IN — [Ideogram 3]
- [ ] S15 (40s) — Phone voicemail archive, all 8 still saved, last timestamp ⭐ FINAL IMAGE — SLOW ZOOM OUT FROM PHONE — [Ideogram 3]

**Total: 117 images** ✅

---

## Phase 2 — Video Clips (102 Kling 2.5 Turbo × 5s → trim 3s in CapCut)

Guide: `04-videos.md` · Full prompts: `04b-videos-full-prompts.md`
Save: `media/videos/` · Naming: `C{NN}A.mp4` + `C{NN}B.mp4` + `C{NN}C.mp4`
**Precondition**: Phase 1 complete (upload F{NN}A/B/C as start frames)
**Duration**: 5s gen per clip → CapCut trim each to 3s → 9s per scene

**Rule**: A = WIDE/ESTABLISH · B = MEDIUM/MOVE · C = CLOSE/DETAIL/REACTION
**Hard cut** A→B→C within each scene · **Crossfade** ONLY entering Ken Burns stills

### DUTCH clips — Beat 4 ONLY

DUTCH permitted: **C12B · C13B · C13C · C14B · C15B** (5 clips)
ABSOLUTELY NO DUTCH: C01–C11 · C16–C34 (verify before uploading start frames)

### Hero clips (gen these first — most critical)

- [ ] **C21** (F21) — VM5 planted lie — "some women say they want children" ⭐
- [ ] **C24** (F24) — Claire hands Owen phone + leaves room ⭐ THE MOMENT
- [ ] **C20** (F20) — VM3 "not built for closeness" ⭐
- [ ] **C27** (F27) — Owen in backyard on call / Claire through window ⭐
- [ ] **C13** (F13) — "You told her at Thanksgiving" betrayal peak [DUTCH B+C] ⭐
- [ ] **C15** (F15) — Window-watcher realization [F15B DUTCH] ⭐
- [ ] **C34** (F34) — Epilogue: nameplate + lunch call + voicemails still saved ⭐
- [ ] **C29** (F29) — No-contact order document ⭐
- [ ] **C31** (F31) — Christmas, empty chair ⭐
- [ ] **C32** (F32) — Facebook post: 1 like, 0 comments ⭐

### All 102 clips (C01–C34, 3 clips each)

**Beat 1 (C01)**
- [ ] C01A — PUSH (F01A) — Phone screen voicemail glow, amber badge "8", darkness
- [ ] C01B — TILT-UP (F01B) — Revealing full phone face, glow from below
- [ ] C01C — STATIC (F01C) — 8 voicemail entries, timestamps, amber hold

**Beat 2 (C02–C05)**
- [ ] C02A — ELS PUSH (F02A) — Claire at clinical office, warm professional
- [ ] C02B — MS RACK-FOCUS (F02B) — Rack focus to Claire's composed face
- [ ] C02C — ECU STATIC (F02C) — Claire's documenting hands on files
- [ ] C03A — CRANE-UP (F03A) — Community garden aerial reveal
- [ ] C03B — DOLLY (F03B) — Owen building raised beds, Claire watching
- [ ] C03C — STATIC (F03C) — Owen's hands placing planks, Claire's cream sleeve edge
- [ ] C04A — ELS PUSH (F04A) — Owen fixing porch step, warm morning
- [ ] C04B — CU PAN-L (F04B) — Owen on lunch call, warm smile
- [ ] C04C — ECU STATIC (F04C) — Wedding photo on engineer's desk
- [ ] C05A — ELS STATIC (F05A) — Renata at door, warm hug, wrong note static
- [ ] C05B — CU PUSH (F05B) — Renata's controlled smile, push to face
- [ ] C05C — PAN-R (F05C) — Over-Renata's-shoulder to open Claire

**Beat 3 (C06–C10)**
- [ ] C06A — ELS STATIC (F06A) — Owen home slightly off, jacket on, dinner set
- [ ] C06B — PUSH (F06B) — Owen in doorway, subtly closed posture
- [ ] C06C — ECU STATIC (F06C) — Owen's face downcast, weighted expression
- [ ] C07A — ELS PUSH (F07A) — Empty home, Claire at client sessions, morning
- [ ] C07B — CU STATIC (F07B) — Renata on phone, focused, precise
- [ ] C07C — TILT-DN (F07C) — Clock to phone screen: Renata's name on caller ID
- [ ] C08A — ELS PUSH (F08A) — Living room, Renata + Owen on couch, food on table
- [ ] C08B — CU DOLLY (F08B) — Renata leaning toward Owen, low voice
- [ ] C08C — ECU STATIC (F08C) — Renata's face in profile, watching Owen's reaction
- [ ] C09A — ELS STATIC (F09A) — Kitchen dinner, Owen mid-sentence confused
- [ ] C09B — PUSH (F09B) — Owen's face: confusion of believing a lie
- [ ] C09C — ECU STATIC (F09C) — Claire's face: controlled, processing, professional
- [ ] C10A — ELS PUSH (F10A) — Claire at study desk, notebook open, evening
- [ ] C10B — RACK-FOCUS (F10B) — Notebook to Claire's analytical face
- [ ] C10C — ECU STATIC (F10C) — Notebook spread, dates and phrases connected

**Beat 4 — DUTCH ZONE (C11–C15)**
- [ ] C11A — ELS STATIC (F11A) — Sunday kitchen, Owen folded hands, no coffee [DARK COLD]
- [ ] C11B — PUSH (F11B) — Owen's folded hands at table
- [ ] C11C — ECU STATIC (F11C) — Empty coffee maker, bare table surface
- [ ] C12A — ELS STATIC (F12A) — "Fundamental incompatibility" kitchen wide
- [ ] C12B — DUTCH PUSH (F12B) — Owen's face delivering Renata's words [**DUTCH**]
- [ ] C12C — ECU STATIC (F12C) — Kitchen surface, cold, absent morning warmth
- [ ] C13A — ELS STATIC (F13A) — "You didn't want children" — Claire very still
- [ ] C13B — DUTCH PUSH (F13B) — Owen's face finishing the sentence [**DUTCH**]
- [ ] C13C — DUTCH ECU STATIC (F13C) — Claire's face: completely still, reclassifying [**DUTCH**]
- [ ] C14A — ELS STATIC (F14A) — Late morning kitchen, Owen speaking again
- [ ] C14B — DUTCH CU (F14B) — Claire's face: understanding, not crumbling [**DUTCH**]
- [ ] C14C — PULL (F14C) — Pull back from table revealing cold empty kitchen
- [ ] C15A — ELS STATIC (F15A) — Claire at window alone, Owen gone
- [ ] C15B — DUTCH ECU (F15B) — Claire's face at window: calibrating [**DUTCH — LAST DUTCH**]
- [ ] C15C — PULL (F15C) — Pull back from Claire, empty room, window light [NO DUTCH — straight]

**Beat 5 (C16–C19)**
- [ ] C16A — ELS PUSH (F16A) — Bedroom, Owen's side empty, Claire at door
- [ ] C16B — ORBIT-L (F16B) — Claire alone in quiet house, evening
- [ ] C16C — ECU STATIC (F16C) — Empty nightstand, ring of dust where charger sat
- [ ] C17A — ELS STATIC (F17A) — Clinical office, Claire holding it together
- [ ] C17B — PUSH (F17B) — Claire arrives home alone at night
- [ ] C17C — ECU STATIC (F17C) — Claire's hands on cold mug, kitchen night
- [ ] C18A — ELS STATIC (F18A) — Study desk, notebook, pattern analysis, late night
- [ ] C18B — PUSH (F18B) — Claire's face: clinical, pattern connecting
- [ ] C18C — ECU STATIC (F18C) — Timeline drawn, correlations visible on notebook
- [ ] C19A — ELS STATIC (F19A) — Study, Claire holds phone, voicemail archive
- [ ] C19B — CU PUSH (F19B) — Claire's face shifting as archive reveals itself
- [ ] C19C — ECU STATIC (F19C) — Phone screen: 8 voicemails, Renata's name, amber

**Beat 6 (C20–C24)**
- [ ] C20A — ELS STATIC (F20A) — Study, late night → pre-dawn, Claire listening VM3
- [ ] C20B — PUSH (F20B) — Claire's face: recognition, correlation
- [ ] C20C — ECU STATIC (F20C) — VM3 on screen: "not built for closeness" text ⭐
- [ ] C21A — ELS STATIC (F21A) — VM5 listening, body language shift, pen in hand
- [ ] C21B — CU PUSH (F21B) — Claire's face as VM5 lands: devastated with clarity ⭐
- [ ] C21C — ECU STATIC (F21C) — VM5 screen: "some women say they want children" text ⭐
- [ ] C22A — ELS STATIC (F22A) — Desk spread, written log, two-page documentation
- [ ] C22B — PAN-L (F22B) — Pan across full behavior correlation log
- [ ] C22C — ECU STATIC (F22C) — Correlation page: dates + behavior + lines connecting ⭐
- [ ] C23A — ELS STATIC (F23A) — Claire on phone, calm, calling Owen
- [ ] C23B — PUSH (F23B) — Claire's face: choosing words precisely
- [ ] C23C — ECU STATIC (F23C) — Claire's face end of call: quiet resolve
- [ ] C24A — ELS STATIC (F24A) — Living room, Claire handing Owen the phone ⭐
- [ ] C24B — PUSH (F24B) — Hands in handoff, phone between them ⭐
- [ ] C24C — PULL (F24C) — Claire's back as she exits, Owen alone with phone ⭐

**Beat 7 (C25–C31)**
- [ ] C25A — ELS STATIC (F25A) — Two rooms: Owen with phone, Claire in kitchen
- [ ] C25B — PUSH (F25B) — Claire at kitchen counter, cold mug, waiting
- [ ] C25C — ECU STATIC (F25C) — Claire's hands around cold mug
- [ ] C26A — ELS STATIC (F26A) — Owen in kitchen doorway, something new in his face
- [ ] C26B — PUSH (F26B) — Owen moving toward Claire, quiet devastation
- [ ] C26C — ECU STATIC (F26C) — Owen's face: reckoning, a man who believed the wrong version
- [ ] C27A — ELS STATIC (F27A) — Through window: Owen in backyard on call, cold ⭐
- [ ] C27B — PUSH (F27B) — Owen exterior: speaking from a decision
- [ ] C27C — ECU STATIC (F27C) — Owen's face: resolved, certainty visible ⭐
- [ ] C28A — ELS STATIC (F28A) — Kitchen, Owen returned inside, standing, settled
- [ ] C28B — PUSH (F28B) — Owen's face delivering: "I know what she sounds like performing"
- [ ] C28C — ECU STATIC (F28C) — Owen's face complete: will not be moved
- [ ] C29A — ELS PUSH (F29A) — Legal office, Owen signing, institutional gravity
- [ ] C29B — RACK-FOCUS CU (F29B) — Rack to no-contact order document text
- [ ] C29C — ECU STATIC (F29C) — Owen's signature on the document ⭐
- [ ] C30A — ELS STATIC (F30A) — Renata's house, on the phone, still operating
- [ ] C30B — PUSH (F30B) — Renata toward network: unaware it has turned
- [ ] C30C — ECU STATIC (F30C) — Phone screen: Diane — no answer / Marcus — no answer
- [ ] C31A — CRANE-UP (F31A) — Christmas gathering aerial, empty chair visible ⭐
- [ ] C31B — PUSH (F31B) — Family warm, Owen + Claire present, empty chair behind
- [ ] C31C — ECU STATIC (F31C) — The empty chair at the table, warm room beyond

**Beat 8 (C32–C33)**
- [ ] C32A — ELS STATIC (F32A) — Renata alone at computer, typing Facebook post
- [ ] C32B — PUSH (F32B) — Facebook post on screen, engagement counter loading
- [ ] C32C — ECU STATIC (F32C) — "1 Like · 0 Comments" — crisp, devastating ⭐
- [ ] C33A — ELS STATIC (F33A) — Claire + Owen in living room, quiet together
- [ ] C33B — PUSH (F33B) — Claire's face: "files closed" settled quiet
- [ ] C33C — ECU STATIC (F33C) — Claire setting phone down, the Facebook post done

**Epilogue + CTA (C34)**
- [ ] C34A — ELS PUSH (F34A) — Clinical Supervisor nameplate, warm morning office ⭐
- [ ] C34B — ORBIT-R (F34B) — Claire at desk, warm settled, full warm sage office ⭐
- [ ] C34C — ECU STATIC (F34C) — Phone screen: all 8 voicemails still saved, butterfly corner ⭐

**Total: 102 MP4 × 5s gen → trim 3s each in CapCut = 306s animated** ✅

---

## Phase 3 — Voice (ElevenLabs Charlotte BR, 3 chunks)

Guide: `05-voice.md` · Save: `media/voice/`
Settings: Speed **0.92x** · Stability **55%** · Similarity **80%** · Style **30%**

- [ ] `chunk1.mp3` — Beats 1–4: Hook → Betrayal → Separation (~660 words, ~4:20)
  - Covers: Beat 1 hook / Beat 2 intro / Beat 3 crack / Beat 4 betrayal
  - End on: "I was not losing my marriage to a problem between us. I was losing it to someone who had been standing outside our window for four years. Watching. Rearranging things."
- [ ] `chunk2.mp3` — Beats 5–6: Fall → Voicemails → Pivot (~548 words, ~3:38)
  - Covers: Beat 5 fall / Beat 6 pivot (voicemail discovery + log + handoff)
  - End on: "...and I let the voicemails do what I never could — speak for themselves."
- [ ] `chunk3.mp3` — Beat 7 + 8 + Epilogue + CTA (~910 words, ~5:30)
  - Covers: Beat 7 karma / Beat 8 downfall / Epilogue / CTA

**Critical QC before voice gen**:
- [ ] Beat 4 — "I was not losing my marriage to a problem between us" → [pause 3s] before window line — CRITICAL PAUSE
- [ ] Beat 4 — "She had taken something Owen told her in confidence, twisted it beyond recognition, and fed it back to him as a lie I'd told to his face." — register drop here
- [ ] Beat 6 — Renata's voicemail quotes in Charlotte's voice must feel like she's reciting them clinically, not dramatically — professional distance
- [ ] Epilogue — "It waits." — final two words, held pause before them, quiet delivery

**Total: 3 MP3, ~12 min** ✅

---

## Phase 4 — Thumbnails (3 A/B/C variants)

Guide: `06-thumbnail.md` · Model: Ideogram 3 · 1280×720
Save: `media/thumbnails/`

- [ ] `v1.png` — Claire at kitchen table, Renata's shadow behind — "HIS MOTHER DID IT" (PRIMARY — MIL villain identification)
- [ ] `v2.png` — Phone screen voicemail archive — "SHE KEPT THEM ALL" (evidence angle — forensic curiosity gap)
- [ ] `v3.png` — Clinical Supervisor nameplate morning light — "THE MIL'S PLAN FAILED" (warm resolution angle)

**Mute test**: All 3 must communicate story premise at 120px mobile size without audio.
**CTR target**: 6–9% (betrayal/MIL niche verified high).

---

## Phase 5 — Edit + Export (CapCut)

Guide: `08-upload.md` · Save: `media/final/`

- [ ] Import 3 voice chunks → merge Track 1 Audio, no gaps
- [ ] Import 34 scene groups (C01–C34, 3 clips each) → Track 1 Video, aligned to beat timestamps
- [ ] Trim each Kling clip to 3s in CapCut
- [ ] Insert 15 Ken Burns stills → scale 100%→115% keyframe per table in `08-upload.md`
- [ ] BGM Track 2 (-18dB) — warm piano B1-2, cold strings B3-5, turning B6, gray institutional B7, quiet B8, warm piano Epilogue
- [ ] Color grade per beat (warm cream → cooling → dark cold → turning → cold gray → full warm sage)
- [ ] DUTCH verification: ONLY C12B · C13B · C13C · C14B · C15B — NONE in Epilogue
- [ ] Subtitle auto-generate → fix: Claire, Owen, Renata, Diane, Marcus, voicemail, no-contact, "fundamental incompatibility"
- [ ] Export: 1920×1080 · 30fps · H.264 · 10 Mbps · MP4
- [ ] Final QC: 11:30 ±20s · voice clear · camera moves visible · BGM under voice

**Save**: `media/final/EP07-the-mils-plan-final.mp4`

---

## Phase 6 — Upload YouTube

Guide: `08-upload.md`

- [ ] Upload `EP07-the-mils-plan-final.mp4`
- [ ] Title V1: "His Mother Spent 4 Years Destroying His Marriage. She Saved The Voicemails."
- [ ] Full Description + 15 Tags (from `07-title-description.md`)
- [ ] Thumbnail v1 primary: "HIS MOTHER DID IT"
- [ ] Playlist: "Karma Caught Up Stories"
- [ ] Category: Entertainment
- [ ] Schedule: Next T3 or T6 at 21:00 EST
- [ ] End screen at 11:10 (Subscribe + Next video)
- [ ] Card at 7:00 (Beat 7 Karma — Owen listening to voicemails → subscribe link)
- [ ] Subtitles SRT upload
- [ ] Schedule / Publish
- [ ] **Pinned comment** within 60 seconds of going live
- [ ] Reply all comments first 60 min — watch for "I've had a MIL like this" thread
- [ ] Cross-post: Reddit r/JUSTNOMIL (primary) + r/BestofRedditorUpdates + Twitter thread + TikTok teaser

---

## Output when complete

```
prompts/EP07-the-mils-plan/
├── media/
│   ├── images/     F01A–F34C (102 PNG) + S01–S15 (15 PNG) = 117 files
│   ├── videos/     C01A–C34C (102 MP4, 5s each)
│   ├── voice/      chunk1.mp3 + chunk2.mp3 + chunk3.mp3
│   ├── thumbnails/ v1.png + v2.png + v3.png
│   └── final/      EP07-the-mils-plan-final.mp4

assets/characters/ep07/
├── claire-voxel-base.png
├── owen-voxel-base.png
└── renata-voxel-base.png
```

**Reusable if characters return in future episodes**: claire-voxel-base.png / owen-voxel-base.png (save in assets for potential callback eps)
