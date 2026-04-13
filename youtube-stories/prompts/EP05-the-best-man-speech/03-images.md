# 03 — Scene Images (102 start frames + 15 Ken Burns stills)

> **Tổng 117 images** = 102 start frames (34 scenes × 3 angles A/B/C) + 15 stills (Ken Burns CapCut)
> **Precondition**: 3 character refs đã gen xong (file 02) — marcus-voxel-base.png, derek-voxel-base.png, jade-voxel-base.png

---

## Setup Freepik

- **Ratio**: 16:9
- **Resolution**: 2K
- **AI enhance**: OFF
- **Save**: `media/images/F{NN}A.png` / `F{NN}B.png` / `F{NN}C.png` + `S01.png` → `S15.png`

---

## Naming convention

| Suffix | Angle | Usage |
|---|---|---|
| **A** | Wide / Establishing | Kling start frame (camera move entry) |
| **B** | Medium Shot | Kling start frame (mid-scene) |
| **C** | Close-Up / ECU / Detail | Kling start frame (emotional peak / forensic detail) |

---

## Model routing table

| Scene type | Model | Ref upload |
|---|---|---|
| Marcus alone | **Nano Banana 2** | `marcus-voxel-base.png` |
| Derek alone | **Nano Banana 2** | `derek-voxel-base.png` |
| Jade alone | **Nano Banana 2** | `jade-voxel-base.png` |
| Marcus + Derek together | **Nano Banana 2** | `marcus-voxel-base.png` + `derek-voxel-base.png` |
| Marcus + Jade together | **Nano Banana 2** | `marcus-voxel-base.png` + `jade-voxel-base.png` |
| Derek + Jade together | **Nano Banana 2** | `derek-voxel-base.png` + `jade-voxel-base.png` |
| Object / environment / no character | **Flux 2 Pro** | — |
| Text on screen / documents / social media / logos | **Ideogram 3** | — |

---

## Color palette per beat (BẮT BUỘC thêm vào mọi prompt)

| Beat zone | Frames | Temp | Palette notes |
|---|---|---|---|
| Hook + Intro | F01–F08 | WARM | Amber `#D4A547` + cream `#F3E9D2` — October string lights, ceremony warmth |
| Crack entering | F09–F11 | WARM CRACKING | Warm surface, wrong energy underneath — flicker in the warmth |
| Betrayal + Fall | F12–F17 | DARK COLD | Deep navy `#0B1426` + cold blue-gray — microphone, confession, stone steps |
| Pivot | F18–F20 | GREY-BLUE DAWN | Cool gray-blue turning warmer — desk lamp at 7am, blueprints spread wide |
| Karma | F21–F27 | COLD GRAY | Institutional `#1F2937` + muted tones — consequence unfolding |
| Downfall | F28–F29 | NEUTRAL COOL | Detached cool gray — empty desk, new city screen |
| Epilogue | F30–F34 | FULL WARM | Gold `#D4A547` + sage `#6B7F5A` + cream — ribbon cutting, coffee, quiet peace |

---

## DUTCH TILT RULES (BẮT BUỘC)

- **F12B** — Derek at microphone, "I can't do this" — DUTCH
- **F12C** — Derek at microphone ECU, jaw tight — DUTCH
- **F13B** — Confession delivery medium shot — DUTCH
- **F13C** — Derek's face ECU "Jade and I..." — DUTCH
- **F14B** — Jade looking at Derek, not Marcus — DUTCH
- **TUYỆT ĐỐI KHÔNG DUTCH**: F01–F11 (ceremony/warm scenes) và F15–F34 (still hands onward through pivot, karma, epilogue)

> DUTCH = camera tilted 10–15 degrees — signals psychological wrongness. Reserved ONLY for the betrayal speech zone.

---

## 34 SCENES × 3 ANGLES = 102 START FRAMES

| # | Scene description | Beat | Color zone | F-A model | F-B model | F-C model | Notes |
|---|---|---|---|---|---|---|---|
| F01 | Riverside Gardens venue — empty, string lights, microphone on stand, October foliage | Beat 1 | WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | Foreboding beauty — no characters |
| F02 | Marcus at engineering desk — blueprints, warm morning light, calm focus | Beat 1 | WARM | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Protagonist intro |
| F03 | Marcus + Jade — Black Balsam Knob trail, engagement moment, mountain warm | Beat 2 | WARM | Nano Banana 2 + Marcus + Jade | Nano Banana 2 + Marcus + Jade | Nano Banana 2 + Marcus + Jade | Origin warmth |
| F04 | Marcus + Derek — easy college-era warmth, laughing, casual setting | Beat 2 | WARM | Nano Banana 2 + Marcus + Derek | Nano Banana 2 + Marcus + Derek | Nano Banana 2 + Marcus + Derek | 12-year friendship |
| F05 | Wedding morning — groom suite, Marcus getting ready, warm amber light | Beat 2 | WARM | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Pre-ceremony warmth |
| F06 | Derek helps Marcus with cufflinks — final warm moment before ceremony ⭐ | Beat 2 | WARM | Nano Banana 2 + Marcus + Derek | Nano Banana 2 + Marcus + Derek | Nano Banana 2 + Marcus + Derek | Last innocent moment |
| F07 | Ceremony — Jade walks in, acoustic guitar, amber string light aisle | Beat 3 | WARM | Nano Banana 2 + Jade | Nano Banana 2 + Jade | Nano Banana 2 + Jade | Ceremony peak warmth |
| F08 | Vows — Marcus and Jade at altar, warm ceremony light, peak moment | Beat 3 | WARM | Nano Banana 2 + Marcus + Jade | Nano Banana 2 + Marcus + Jade | Nano Banana 2 + Marcus + Jade | Warmth at its highest |
| F09 | Reception — dinner table, 74 guests, string lights, warm noise, full hall | Beat 3 | WARM CRACKING | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | Something wrong underneath |
| F10 | Derek stands, buttons jacket, picks up glass, easy smile to the room | Beat 3 | WARM CRACKING | Nano Banana 2 + Derek | Nano Banana 2 + Derek | Nano Banana 2 + Derek | Pre-speech ease |
| F11 | Derek's hand shaking — jaw moving without sound, glass trembling | Beat 4 | WARM CRACKING | Nano Banana 2 + Derek | Nano Banana 2 + Derek | Nano Banana 2 + Derek | The crack begins |
| F12 | Derek at microphone — "I can't do this." ⭐ DUTCH B+C | Beat 4 | DARK COLD | Nano Banana 2 + Derek | Nano Banana 2 + Derek **DUTCH** | Nano Banana 2 + Derek **DUTCH** | Betrayal starts |
| F13 | "Jade and I have been seeing each other. For fourteen months." ⭐ DUTCH B+C | Beat 4 | DARK COLD | Nano Banana 2 + Derek | Nano Banana 2 + Derek **DUTCH** | Nano Banana 2 + Derek **DUTCH** | Betrayal peak |
| F14 | Jade looking at Derek — not at Marcus, expression still DUTCH B | Beat 4 | DARK COLD | Nano Banana 2 + Jade | Nano Banana 2 + Jade **DUTCH** | Nano Banana 2 + Jade | Her choice visible |
| F15 | Marcus goes very still — hands flat on tablecloth, fork set down, no movement ⭐ | Beat 4 | DARK COLD | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | The stillness beats explosion |
| F16 | Marcus on stone steps outside venue, mother seated beside him, 6:47 PM | Beat 5 | DARK COLD | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | The exit — quiet grief |
| F17 | Marcus cataloguing — mental replay of Raleigh conference, rehearsal dinner arm-touch | Beat 5 | DARK COLD | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Engineer brain assembling timeline |
| F18 | Monday 7am — Marcus at desk, tie on, working, cool gray-blue dawn light | Beat 6 | GREY-BLUE DAWN | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Pivot begins — tie = armor |
| F19 | Contracts + phone calls — 61% deposits recovered, paperwork on desk | Beat 6 | GREY-BLUE DAWN | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Recovery in motion |
| F20 | Recreation center blueprints — 8,400 sq ft spread wide on desk ⭐ | Beat 6 | GREY-BLUE DAWN | Nano Banana 2 + Marcus | Flux 2 Pro | Flux 2 Pro | The new foundation |
| F21 | Derek + Jade — Instagram photo at bar, public, bright social media colors | Beat 7 | COLD GRAY | Ideogram 3 | Ideogram 3 | Nano Banana 2 + Derek + Jade | Karma begins |
| F22 | Small courthouse ceremony — Derek + Jade, no crowd, plain hall | Beat 7 | COLD GRAY | Nano Banana 2 + Derek + Jade | Nano Banana 2 + Derek + Jade | Nano Banana 2 + Derek + Jade | The diminished wedding |
| F23 | Derek's disappearances, quiet decline — empty chair, dark apartment | Beat 7 | COLD GRAY | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | Relapse signs — no character shown |
| F24 | Derek's LinkedIn profile page — "Private" / gone dark ⭐ | Beat 7 | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 | Digital consequence |
| F25 | Mutual friend's text message on phone screen: "Heard about Derek." | Beat 7 | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 | Word gets around |
| F26 | Jade moved out — small studio apartment exterior, other side of town | Beat 7 | COLD GRAY | Flux 2 Pro | Nano Banana 2 + Jade | Nano Banana 2 + Jade | Consequence for her |
| F27 | Recreation center — "First Submission: Approved, No Revisions" letter ⭐ | Beat 7 | COLD GRAY turning | Ideogram 3 | Ideogram 3 | Ideogram 3 | Marcus's anchor holds |
| F28 | Derek's empty desk — dead plant, cardboard boxes, job lost | Beat 8 | NEUTRAL COOL | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | Downfall complete |
| F29 | Jade online — new city, phone screen with new content, starting over | Beat 8 | NEUTRAL COOL | Ideogram 3 | Ideogram 3 | Nano Banana 2 + Jade | Her restart, cold |
| F30 | Recreation center ribbon-cutting — Marcus in back of crowd, watching ⭐ | Epilogue | FULL WARM | Flux 2 Pro | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | The thing he built |
| F31 | Marcus project lead — engineering firm announcement, office warm light | Epilogue | FULL WARM | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Recognition earned |
| F32 | Marcus + mother — chili dinner, Lexington Ave, quiet celebration | Epilogue | FULL WARM | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Flux 2 Pro | Warmth in small things |
| F33 | Marcus seeing someone — careful coffee, early days, warm light ⭐ | Epilogue | FULL WARM | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | Nano Banana 2 + Marcus | New beginning |
| F34 | Butterfly channel card / @KarmaCaughtUp subscribe end card ⭐ | CTA | BRAND | Ideogram 3 | Ideogram 3 | Ideogram 3 | Deep navy + gold butterfly |

---

## 15 KEN BURNS STILLS

> Gen image thường → CapCut: Scale keyframe 100% → 115% over duration. Slight pan on longer stills (>20s).

**Save**: `media/images/S01.png` → `S15.png`

| # | Beat | Description | Model | Ref | Color zone | CapCut duration | Camera move |
|---|---|---|---|---|---|---|---|
| S01 | Beat 5 | Marcus on stone steps — grief, jacket still on, still, Riverside Gardens behind him | Nano Banana 2 | marcus-voxel-base.png | DARK COLD | 20s | Slow PULL back |
| S02 | Beat 3 | Riverside Gardens wide — string lights full amber, October evening, microphone stand waiting | Flux 2 Pro | — | WARM | 15s | Slow PAN left |
| S03 | Beat 3 | Wedding vows — Marcus's face close, honest open emotion, ceremony amber | Nano Banana 2 | marcus-voxel-base.png | WARM | 15s | Slow PUSH in |
| S04 | Beat 4 | Derek at mic — hand shaking, glass raised, warm lights behind him gone wrong | Nano Banana 2 | derek-voxel-base.png | DARK COLD ⭐ | 20s | Slow PUSH in |
| S05 | Beat 4 | Derek's confession face — mid-word, "Jade and I..." — ECU jaw + eyes | Nano Banana 2 | derek-voxel-base.png | DARK COLD ⭐ | 25s | STATIC |
| S06 | Beat 4 | Jade looking at Derek — profile view, not turning to Marcus — the choice | Nano Banana 2 | jade-voxel-base.png | DARK | 20s | Slow PAN |
| S07 | Beat 4 | Marcus's hands flat on tablecloth — fork set down, glass untouched, perfect stillness | Flux 2 Pro | — | DARK | 15s | Slow PUSH in on hands |
| S08 | Beat 6 | Recreation center blueprints spread wide — 8,400 sq ft, desk lamp warm circle | Flux 2 Pro | — | TURNING WARM ⭐ | 20s | Slow PAN across blueprints |
| S09 | Beat 7 | "First Submission: Approved — No Revisions" letter, close legible text | Ideogram 3 | — | NEUTRAL | 15s | STATIC |
| S10 | Beat 7 | Instagram post — Derek + Jade at bar, bright overexposed social colors, comments | Ideogram 3 | — | COLD GRAY | 15s | Slow PULL back from screen |
| S11 | Beat 7 | Derek's LinkedIn: profile page grayed out, "Private" or "Page Unavailable" | Ideogram 3 | — | COLD | 15s | STATIC |
| S12 | Beat 8 | Derek's empty office desk — dead plant in corner, cardboard box, cold fluorescent | Flux 2 Pro | — | COLD GRAY | 20s | Slow PUSH in on dead plant |
| S13 | Beat 8 | Jade's phone screen — new city content, new account, cool distance | Ideogram 3 | — | COOL | 15s | STATIC |
| S14 | Epilogue | Recreation center interior — main hall, kids running through, warm golden light ⭐ | Flux 2 Pro | — | FULL WARM | 40s | Slow wide PAN + subtle CRANE UP |
| S15 | Epilogue | Marcus at corner coffee place — usual order waiting without asking, warm morning ⭐ | Nano Banana 2 | marcus-voxel-base.png | FULL WARM + sage | 20s | Slow PUSH in |

---

## Quality gate mỗi image

- [ ] Voxel cube aesthetic (NOT raw Minecraft — Astroneer meets Crossy Road)
- [ ] Color palette đúng beat zone (WARM/COLD arc maintained per table above)
- [ ] Single dramatic light source per frame
- [ ] Character consistent với base ref nếu có character (hair, outfit, build)
- [ ] NOT realistic, NOT cartoon, NOT anime
- [ ] 16:9 đúng frame (1920×1080)
- [ ] Filename đúng: `F{NN}A.png` / `F{NN}B.png` / `F{NN}C.png` (e.g. F01A.png)
- [ ] Ken Burns stills: `S01.png` → `S15.png`
- [ ] DUTCH tilt ONLY on: F12B, F12C, F13B, F13C, F14B — nowhere else
- [ ] Ideogram 3 frames: text legible at full 2K resolution
- [ ] F34 butterfly card: @KarmaCaughtUp visible, deep navy + gold brand colors

**Fail** → Gen Variations 2-3 lần pick best.

---

## Full prompts

→ Xem `03b-images-full-prompts.md` (Part 1: F01–F17 · Part 2: F18–F34 + Ken Burns S01–S15)

---

## Next

Xong 117 images → `04-videos.md`
