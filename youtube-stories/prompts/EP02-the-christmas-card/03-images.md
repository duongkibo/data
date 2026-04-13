# 03 — Scene Images (102 start frames + 15 Ken Burns stills)

> **Tổng 117 images** = 102 start frames (34 scenes × 3 angles A/B/C) + 15 stills (Ken Burns CapCut)
> **Precondition**: 3 character refs đã gen xong (file 02) — nina-voxel-base.png, daniel-voxel-base.png, amber-voxel-base.png

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
| **C** | Close-Up / ECU / Detail | Kling start frame (emotional peak / forensic) |

---

## Model routing table

| Scene type | Model | Ref upload |
|---|---|---|
| Nina alone or with Sophie | **Nano Banana 2** | `nina-voxel-base.png` |
| Daniel alone | **Nano Banana 2** | `daniel-voxel-base.png` |
| Amber alone or with Lucas | **Nano Banana 2** | `amber-voxel-base.png` |
| Nina + Daniel together | **Nano Banana 2** | `nina-voxel-base.png` + `daniel-voxel-base.png` |
| Nina + Amber together | **Nano Banana 2** | `nina-voxel-base.png` + `amber-voxel-base.png` |
| Object / environment / no character | **Flux 2 Pro** | — |
| Text on screen / documents / logos | **Ideogram 3** | — |

---

## Color palette per beat (BẮT BUỘC thêm vào mọi prompt)

| Beat | Temp | Palette notes |
|---|---|---|
| 1 Hook | WARM | Cream `#F3E9D2` + morning gold `#D4A547` + Christmas red accent |
| 2 Intro | WARM fading | Warm but with gray undertone creeping |
| 3 Crack | COOL entering | Warm surface COLD underneath, gray shadows |
| 4 Betrayal | DARK COLD | Deep navy `#0B1426` + cold laptop glow blue `#3B82F6` |
| 5 Fall | DARK | Desaturated navy, almost no warmth |
| 6 Pivot | TURNING WARM | Pre-dawn pink-gold returning, 5am warm lamp circle |
| 7 Karma | NEUTRAL COOL | Neutral courtroom gray → cool satisfaction |
| 8 Downfall | COLD GRAY | Isolated gray `#1F2937`, fluorescent cold |
| Epilogue | FULL WARM | Gold + cream + sage `#6B7F5A`, maximum warmth |
| CTA | BRAND | Deep navy + gold butterfly |

---

## DUTCH TILT RULES (BẮT BUỘC)

- **F04B / F04C**: Lucas jaw close — DUTCH (wrongness signal)
- **F07B / F07C**: "Family — Amber" folder screen — DUTCH
- **F09B / F09C**: Christmas cards now cold — DUTCH
- **KHÔNG DUTCH**: F01–F03, F05–F06, F08, F10–F34

---

## 34 SCENES × 3 ANGLES = 102 START FRAMES

| # | Scene | Beat | Palette | F-A model | F-B model | F-C model |
|---|---|---|---|---|---|---|
| F01 | Nina addressing card envelopes, warm kitchen evening | Beat 1 | WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F02 | Christmas card 4-person photo, Nina holds it | Beat 1 | WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F03 | Thanksgiving table wide | Beat 2 | WARM fading | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F04 | Lucas close-up jaw detail at kids table | Beat 3 | COOL entering | Flux 2 Pro | Nano Banana 2 + Nina | Flux 2 Pro |
| F05 | Daniel airport goodbye, "Atlanta Summit" | Beat 3 | WARM surface COLD under | Nano Banana 2 + Nina + Daniel | Nano Banana 2 + Nina + Daniel | Nano Banana 2 + Nina + Daniel |
| F06 | Nina at Daniel's laptop, suddenly frozen | Beat 4 | COLD entering | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F07 | "Family — Amber" folder screen | Beat 4 | DARK COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 |
| F08 | Baby Lucas hospital photo screen | Beat 4 | DARK COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 |
| F09 | Christmas cards on hallway table, recontextualized | Beat 4 | DARK COLD | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F10 | Daniel walks in, Nina at table with phone | Beat 5 | COLD | Nano Banana 2 + Nina + Daniel | Nano Banana 2 + Nina + Daniel | Nano Banana 2 + Nina + Daniel |
| F11 | Phone with Amber photo face-up on table | Beat 5 | COLD | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F12 | Nina in dark guest room alone | Beat 5 | DARK | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F13 | 5am kitchen, warm lamp, Nina writing two lists | Beat 6 | TURNING WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F14 | Nina calling Amber — phone screen "Amber" contact | Beat 6 | TURNING | Flux 2 Pro | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F15 | Amber answers phone, expression shifting | Beat 6 | TURNING | Nano Banana 2 + Amber | Nano Banana 2 + Amber | Nano Banana 2 + Amber |
| F16 | Lawyer's office, Nina across from lawyer, composed | Beat 6 | NEUTRAL | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F17 | Court document "$92,000 child support backpay order" ⭐ | Beat 7 | NEUTRAL COOL | Ideogram 3 | Ideogram 3 | Ideogram 3 |
| F18 | Bank app screen balance draining | Beat 7 | COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 |
| F19 | Tan house with FOR SALE sign in snow | Beat 7 | COLD GRAY | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F20 | Daniel in corporate hallway carrying box | Beat 7 | COLD | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel |
| F21 | Termination letter on empty desk | Beat 7 | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 |
| F22 | Daniel in furniture store uniform, empty showroom | Beat 8 | COLD GRAY | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel |
| F23 | Amber + Lucas warm new apartment, rebuilding | Beat 8 | WARMING | Nano Banana 2 + Amber | Nano Banana 2 + Amber | Nano Banana 2 + Amber |
| F24 | Sophie + Lucas on park bench | Beat 8 | WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F25 | Sophie + Lucas laughing | Beat 8 | WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F26 | Nina at design studio, framed award on wall | Epilogue | FULL WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F27 | Nina meets photographer at conference | Epilogue | FULL WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F28 | Nina + Sophie in cream apartment morning ⭐ | Epilogue | FULL WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F29 | Christmas card 2 people only — Nina + Sophie ⭐ | Epilogue | FULL WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F30 | Sophie with horse figurines on windowsill | Epilogue | FULL WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro |
| F31 | Daniel in furniture store, far shot, alone | Epilogue | COLD GRAY | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel | Nano Banana 2 + Daniel |
| F32 | Amber + new partner, warm tone | Epilogue | WARMING | Nano Banana 2 + Amber | Nano Banana 2 + Amber | Nano Banana 2 + Amber |
| F33 | Nina + Sophie morning coffee, cream apartment ⭐ | Epilogue | FULL WARM | Nano Banana 2 + Nina | Nano Banana 2 + Nina | Nano Banana 2 + Nina |
| F34 | Butterfly channel card CTA | CTA | BRAND | Ideogram 3 | Ideogram 3 | Ideogram 3 |

---

## 15 KEN BURNS STILLS

> Gen image thường → CapCut: Scale keyframe 100% → 115% over duration. Slight pan on longer stills.

**Save**: `media/images/S01.png` → `S15.png`

| # | Beat | Description | Model | Palette | CapCut duration |
|---|---|---|---|---|---|
| S01 | Hook | Nina close-up — single voxel tear forming, warm light fading | Nano Banana 2 + Nina | WARM→COLD | 5s |
| S02 | Intro | Christmas cards spread across warm kitchen table — gold candlelight | Flux 2 Pro | WARM | 15s |
| S03 | Crack | Thanksgiving table wide — warm scene with wrong energy underneath | Flux 2 Pro | WARM fading | 15s |
| S04 | Crack | Lucas face close-up at kids table — jaw geometry, unaware | Flux 2 Pro | COOL entering | 10s |
| S05 | Betrayal | Nina at laptop — wide kitchen shot, room now cold, she is frozen | Nano Banana 2 + Nina | DARK COLD | 15s |
| S06 | Betrayal | Laptop screen: 117 photo thumbnails scrolling — 6 years of evidence | Ideogram 3 | DARK COLD | 15s |
| S07 | Fall | Guest room — Nina tiny figure in dark, alone on bed edge, 3 days | Nano Banana 2 + Nina | DARK | 20s |
| S08 | Pivot | The two lists on legal pad — 5am warm lamp circle, everything decided | Flux 2 Pro | TURNING WARM | 20s |
| S09 | Pivot | Two phones side by side — Nina's call to Amber, both screens lit | Flux 2 Pro | TURNING | 15s |
| S10 | Karma | Court document with $92,000 highlighted — full document wide | Ideogram 3 | NEUTRAL COOL | 20s |
| S11 | Downfall | Daniel alone in furniture store showroom — overhead wide, tiny figure | Nano Banana 2 + Daniel | COLD GRAY | 25s |
| S12 | Downfall | Amber + Lucas in warm new apartment — distance shot, rebuilding | Nano Banana 2 + Amber | WARMING | 20s |
| S13 | Epilogue | Sophie + Lucas at park — distance, two small figures, tentatively okay | Flux 2 Pro | WARM | 20s |
| S14 | Epilogue | Nina's design award framed on cream apartment wall, warm afternoon | Flux 2 Pro | FULL WARM | 15s |
| S15 | Epilogue | Nina + Sophie Christmas card — 2 people only, snowflake border, gold | Flux 2 Pro | FULL WARM | 40s |

---

## Quality gate mỗi image

- [ ] Voxel cube aesthetic (NOT raw Minecraft)
- [ ] Color palette đúng beat (WARM/COLD arc maintained)
- [ ] Single dramatic light source per frame
- [ ] Character consistent với base ref nếu có character
- [ ] NOT realistic, NOT cartoon
- [ ] 16:9 đúng frame (1920×1080)
- [ ] Filename đúng: F{NN}A / F{NN}B / F{NN}C (e.g. F01A.png, F01B.png, F01C.png)
- [ ] DUTCH tilt chỉ đúng frames quy định (F04B/C, F07B/C, F09B/C)
- [ ] Ideogram 3 frames: text legible at full resolution

**Fail** → Gen Variations 2-3 lần pick best.

---

## Full prompts

→ Xem `03b-images-full-prompts.md` (Part 1: F01–F17 · Part 2: F18–F34 + Ken Burns S01–S15)

---

## Next

Xong 117 images → `04-videos.md`
