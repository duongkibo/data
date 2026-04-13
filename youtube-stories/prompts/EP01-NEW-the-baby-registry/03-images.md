# 03 — Scene Images (102 start frames + 15 Ken Burns stills)

> **Tổng 117 images** = 102 start frames (3 angles × 34 scenes) + 15 stills (Ken Burns CapCut)
> **Precondition**: 4 character refs đã gen xong (file 02)

---

## Setup Freepik

- **Ratio**: 16:9
- **Resolution**: 2K
- **AI enhance**: OFF
- **Save**: `media/images/` · Naming: `F{NN}A.png` (wide), `F{NN}B.png` (medium), `F{NN}C.png` (close/ECU) + `S01.png` → `S15.png`

---

## Model routing rule

| Scene type | Model | Ref upload |
|---|---|---|
| Maya alone hoặc với Lily | **Nano Banana 2** | `maya-voxel-base.png` |
| Ryan alone | **Nano Banana 2** | `ryan-voxel-base.png` |
| Caleb alone hoặc với Maya | **Nano Banana 2** | `caleb-voxel-base.png` + `maya-voxel-base.png` |
| Kayla alone | **Nano Banana 2** | `kayla-voxel-base.png` |
| Object / environment / no character | **Flux 2 Pro** | — |
| Text / logo / brand | **Ideogram 3** | — |

---

## Color palette per beat (BẮT BUỘC thêm vào mọi prompt)

| Beat | Palette |
|---|---|
| 1 Hook | Deep navy `#0B1426` + cool blue screen glow |
| 2 Intro | Warm cream `#F3E9D2` + morning gold `#D4A547` |
| 3 Crack | Cream fading → cool blue tints entering |
| 4 Betrayal | Deep navy + cold blue laptop glow |
| 5 Fall | Desaturated navy + dark, drained |
| 6 Pivot | Warm returning → dawn pink-gold |
| 7 Karma | Neutral cool → evening warm spots |
| 8 Downfall | Cold gray isolated `#1F2937` |
| Epilogue | Warm peach + cream + sage `#6B7F5A` |

---

## 102 START FRAMES (3 angles × 34 scenes)

| Scene | F-A (Wide) | F-B (Medium) | F-C (Close) | Model | Beat | Palette |
|---|---|---|---|---|---|---|
| 01 | F01A | F01B | F01C | Nano Banana 2 + Maya / Flux / Nano Banana 2 + Maya | 1 Hook | DARK COLD |
| 02 | F02A | F02B | F02C | Flux / Flux / Ideogram 3 | 1 Hook | DARK COLD |
| 03 | F03A | F03B | F03C | Nano Banana 2 + Maya | 2 Intro | WARM |
| 04 | F04A | F04B | F04C | Flux / Nano Banana 2 + Maya / Nano Banana 2 + Maya | 2 Intro | WARM |
| 05 | F05A | F05B | F05C | Flux / Nano Banana 2 + Ryan / Nano Banana 2 + Ryan | 2 Intro | WARM |
| 06 | F06A | F06B | F06C | Flux / Nano Banana 2 + Ryan / Flux | 2 Intro | WARM |
| 07 | F07A | F07B | F07C | Flux / Flux / Flux | 3 Crack | COOL |
| 08 | F08A | F08B | F08C | Flux / Nano Banana 2 + Ryan / Nano Banana 2 + Ryan | 3 Crack | COOL |
| 09 | F09A | F09B | F09C | Flux / Nano Banana 2 + Maya / Nano Banana 2 + Maya | 3 Crack | COOL |
| 10 | F10A | F10B | F10C | Flux / Nano Banana 2 + Ryan + Maya / Flux | 3 Crack | COOL |
| 11 | F11A | F11B | F11C | Nano Banana 2 + Maya / Nano Banana 2 + Maya / Nano Banana 2 + Maya | 4 Betrayal | COLD entering |
| 12 | F12A | F12B | F12C | Flux / Nano Banana 2 + Maya / Ideogram 3 | 4 Betrayal | DARK COLD |
| 13 ⭐ | F13A | F13B | F13C | Flux / Flux / Flux (DUTCH) | 4 Betrayal | DARK COLD |
| 14 ⭐ | F14A | F14B | F14C | Nano Banana 2 + Maya / Nano Banana 2 + Maya / Nano Banana 2 + Maya | 4 Betrayal | DARK COLD |
| 15 | F15A | F15B | F15C | Nano Banana 2 + Maya / Nano Banana 2 + Maya / Nano Banana 2 + Maya | 5 Fall | DARK |
| 16 | F16A | F16B | F16C | Flux / Flux / Flux | 5 Fall | DARK |
| 17 | F17A | F17B | F17C | Nano Banana 2 + Maya | 5 Fall | DARK |
| 18 ⭐ | F18A | F18B | F18C | Nano Banana 2 + Maya / Nano Banana 2 + Maya / Flux | 6 Pivot | TURNING WARM |
| 19 | F19A | F19B | F19C | Nano Banana 2 + Maya / Nano Banana 2 + Maya / Flux | 6 Pivot | TURNING WARM |
| 20 ⭐ | F20A | F20B | F20C | Flux / Flux / Ideogram 3 | 6 Pivot | TURNING WARM |
| 21 | F21A | F21B | F21C | Flux / Flux / Nano Banana 2 + Maya | 6 Pivot | TURNING WARM |
| 22 | F22A | F22B | F22C | Nano Banana 2 + Ryan / Nano Banana 2 + Ryan / Ideogram 3 | 7 Karma | COLD |
| 23 | F23A | F23B | F23C | Nano Banana 2 + Kayla | 7 Karma | COLD |
| 24 | F24A | F24B | F24C | Nano Banana 2 + Kayla | 7 Karma | COLD turning |
| 25 | F25A | F25B | F25C | Flux / Nano Banana 2 + Ryan / Nano Banana 2 + Ryan | 7 Karma | COLD GRAY |
| 26 | F26A | F26B | F26C | Flux / Nano Banana 2 + Ryan / Ideogram 3 | 7 Karma | COLD GRAY |
| 27 | F27A | F27B | F27C | Nano Banana 2 + Kayla / Nano Banana 2 + Kayla / Ideogram 3 | 7 Karma | WARMING |
| 28 | F28A | F28B | F28C | Nano Banana 2 + Maya | 8 Downfall | NEUTRAL-WARM |
| 29 | F29A | F29B | F29C | Flux / Nano Banana 2 + Ryan / Nano Banana 2 + Ryan | 8 Downfall | COLD GRAY |
| 30 ⭐ | F30A | F30B | F30C | Flux / Nano Banana 2 + Maya / Nano Banana 2 + Maya | Epilogue | FULL WARM |
| 31 | F31A | F31B | F31C | Nano Banana 2 + Caleb / Nano Banana 2 + Caleb + Maya / Flux | Epilogue | FULL WARM |
| 32 ⭐ | F32A | F32B | F32C | Nano Banana 2 + Maya | Epilogue | FULL WARM |
| 33 ⭐ | F33A | F33B | F33C | Nano Banana 2 + Maya / Nano Banana 2 + Maya | Epilogue | FULL WARM |
| 34 | F34A | F34B | F34C | Ideogram 3 | CTA | BRAND |

---

## Prompt templates

### Template A — Character scene (Nano Banana 2 + ref)

```
[Isometric / Cinematic] voxel art [scene description],
the voxel character from reference [action + posture + expression],
[outfit description if needed],
[environment setting voxel details],
[lighting: single source direction + color temperature],
[beat color palette],
clean premium voxel art aesthetic NOT raw Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road character style,
1920x1080 [isometric 45° / cinematic 3D], 2K
```

### Template B — Environment / object (Flux 2 Pro)

```
[Cinematic / Isometric / Top-down] voxel art [subject],
[specific voxel cube details],
[lighting direction + color temperature],
[beat color palette],
[mood word],
clean premium voxel art NOT raw Minecraft NOT realistic,
Astroneer aesthetic,
1920x1080 [composition], 2K
```

---

## 5 HERO PROMPTS (copy nguyên, không edit)

### F02 — Registry screen (Hook KEY SHOT)

```
Cinematic voxel art extreme close-up of a laptop screen showing BabyList baby registry interface,
text reading "Ethan's Welcome Registry" visible clearly centered on screen,
cool blue-white screen glow illuminating surrounding darkness,
dark navy background with single screen light source,
devastating discovery moment,
clean premium voxel art NOT cartoon NOT realistic,
1920x1080 cinematic, 2K
```

### F13 — Invitations vs registry (Betrayal CONTRAST SHOT) ⭐

```
Cinematic top-down voxel art of kitchen table surface,
left side: stack of baby shower invitations with yellow sunflower design warm cream cardstock,
right side: open laptop showing cold blue BabyList registry screen,
single overhead lamp casting warm circle — invitations warm, laptop cold,
hard color temperature split: warm gold left vs cool blue right,
devastating domestic contrast,
clean premium voxel NOT raw Minecraft NOT realistic,
1920x1080 cinematic top-down, 2K
```

### F14 — Maya frozen in laptop glow (Betrayal FACE SHOT) ⭐

```
Cinematic voxel art extreme close-up of Maya voxel character from reference,
her face illuminated only by cold blue laptop screen glow from below,
simple voxel face with dot eyes wide and mouth slightly open — empty frozen shock,
no tears yet — just hollow devastating realization,
deep navy dark background, single cold screen light source from below,
clean premium voxel art emotional NOT raw Minecraft NOT realistic,
1920x1080 cinematic close-up, 2K
```

### F20 — The note (Pivot SYMBOLIC SHOT) ⭐

```
Cinematic voxel art of empty kitchen table surface,
single small cream notecard centered precisely on dark wood voxel table,
handwritten text on card reads: "I know about Ethan.",
soft morning dawn light from window upper-left,
rest of kitchen empty and still — no character visible, she has already left,
the notecard is the only warm object in the frame,
clean premium voxel NOT raw Minecraft NOT realistic,
1920x1080 cinematic close-up, 2K
```

### F32 — Yellow kitchen (Epilogue PEACE SHOT) ⭐

```
Isometric voxel art cozy apartment kitchen scene,
yellow voxel walls warm and saturated, morning golden light streaming through window,
the voxel character from reference (Maya, brown hair, cream robe) seated at table,
tiny baby voxel figure in small high chair beside her — baby Lily with tiny birthday bib,
both animated: Maya smiling, baby hands up in joy,
voxel plants on windowsill, warm pendant lamp overhead,
full warm peach cream sage green palette — maximum warmth of the entire video,
clean premium voxel NOT raw Minecraft NOT realistic,
Astroneer meets Crossy Road character style,
1920x1080 isometric 45°, 2K
```

> **Hero shots**: F13, F14, F18, F20, F30, F32, F33 — ưu tiên gen trước, chất lượng cao nhất.
> **102 frames còn lại**: dùng Template A/B + description ở bảng + color palette beat tương ứng.
> Mỗi scene gen A trước → B → C. Nếu A fail → regen trước khi qua B.

---

## 15 KEN BURNS STILLS

> Gen image thường → CapCut: Scale keyframe 100% → 115% over 10-30s mỗi still

**Save**: `media/images/S01.png` → `S15.png`

| # | Beat | Description | Model | CapCut duration |
|---|---|---|---|---|
| S01 | 1 Hook | Maya close-up devastated, single voxel tear | Nano Banana 2 | 5s |
| S02 | 2 Intro | Maya smiling at classroom door, children visible | Nano Banana 2 | 15s |
| S03 | 2 Intro | Ryan painting clouds on nursery ceiling, Maya watching from door | Nano Banana 2 | 15s |
| S04 | 3 Crack | Phone face-down on counter extreme close-up, screen dark | Flux 2 Pro | 10s |
| S05 | 4 Betrayal | Maya laptop wide shot kitchen — after the discovery, room cold | Nano Banana 2 | 15s |
| S06 | 4 Betrayal | BabyList registry items list on screen — crib, stroller, "Ethan Ryan" blanket | Flux 2 Pro | 15s |
| S07 | 5 Fall | Kitchen floor — Maya tiny figure against cabinets, dark room | Nano Banana 2 | 20s |
| S08 | 5 Fall | Nursery door ajar, cloud ceiling visible through gap | Flux 2 Pro | 20s |
| S09 | 6 Pivot | Notepad with written list beside laptop, 3am warm desk lamp | Flux 2 Pro | 20s |
| S10 | 6 Pivot | Street view — Maya's car leaving, apartment building receding | Flux 2 Pro | 15s |
| S11 | 7 Karma | Ryan empty studio apartment, tiny figure in bare room | Nano Banana 2 | 25s |
| S12 | 7 Karma | Corporate HR meeting through glass — Ryan deflating | Nano Banana 2 | 20s |
| S13 | 7 Karma | Kayla and baby — hospital bassinet name tag (new name, not Ethan) | Nano Banana 2 | 20s |
| S14 | 8 Downfall | Hardware store shelves, Ryan in blue uniform, fluorescent harsh light | Nano Banana 2 | 25s |
| S15 | Epilogue | Backyard wide shot — full birthday party, sunflowers everywhere | Flux 2 Pro | 40s |

---

## Quality gate mỗi image

- [ ] Voxel cube aesthetic (NOT raw Minecraft)
- [ ] Color palette đúng beat
- [ ] Single dramatic light source
- [ ] Character consistent với base ref (nếu có)
- [ ] NOT realistic, NOT cartoon
- [ ] 16:9 đúng frame
- [ ] Filename đúng (F{NN}A/B/C, S01-S15)

**Fail** → Gen Variations 2-3 lần pick best.

---

## Next

Xong 117 images → `04-videos.md`
