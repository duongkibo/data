# 03 — Scene Images (40 start frames + 15 Ken Burns stills)

> **Tổng 55 images** = 40 start frames (cho video Kling) + 15 stills (Ken Burns zoom CapCut)
> **Precondition**: 5 character refs đã gen xong (file 02)

---

## ⚙️ Setup Freepik

- **Ratio**: 16:9
- **Resolution**: 2K
- **AI enhance**: OFF
- **Save**: `media/images/F01.png` → `F40.png` + `S01.png` → `S15.png`

## 🎯 Model routing rule

| Scene type | Model | Ref upload |
|---|---|---|
| Có character (Sarah/Daniel/Rachel/James/Patricia) | **Nano Banana 2** | Upload matching base ref |
| Object/Ring/Phone close-up | **Flux 2 Pro** | — |
| Wide environment / mood / B-roll | **Seedream 4.5** | — |
| Logo/brand text | **Ideogram 3** | — |

## 🎨 Color palette per beat (BẮT BUỘC thêm vào prompt)

- **Beat 1 Hook**: Deep navy + gold accent
- **Beat 2 Intro**: Warm cream + brown domestic
- **Beat 3 Crack**: Cool blue shift + deep navy
- **Beat 4 Betrayal**: Deep navy + cool screen blue + single warm lamp
- **Beat 5 Fall**: Desaturated cool blue
- **Beat 6 Pivot**: Warm cream → gold sunrise
- **Beat 7 Karma**: Cool desaturated → evening warm
- **Beat 8 Downfall**: Cool isolated + soft morning peach
- **Epilogue**: Warm peach + cream + sage

---

## 📋 40 START FRAMES (pair với video clips)

| # | Beat | Scene | Model | Ref |
|---|---|---|---|---|
| F01 | 1 Hook | Ring on wooden kitchen table, warm shaft of light | Flux 2 Pro | — |
| F02 | 2 Intro | Sarah walking hospital corridor, nurse scrubs + clipboard | Nano Banana 2 | Sarah |
| F03 | 2 Intro | Sarah packing lunch kitchen morning warm light | Nano Banana 2 | Sarah |
| F04 | 2 Intro | Lake proposal sunset, Daniel kneeling Sarah surprise | Nano Banana 2 | Sarah + Daniel |
| F05 | 3 Crack | Sarah scrolling Pinterest phone bed cozy | Nano Banana 2 | Sarah |
| F06 | 3 Crack | Ring prong caught on cream knit sweater macro | Flux 2 Pro | — |
| F07 | 3 Crack | Sarah worried looking at ring on her hand | Nano Banana 2 | Sarah |
| F08 | 3 Crack | Elderly jeweler examining ring with loupe vintage shop | Flux 2 Pro | — |
| F09 | 3 Crack | Sarah face shocked across jeweler counter | Nano Banana 2 | Sarah |
| F10 | 3 Crack | Sarah frozen in car parking lot staring ahead | Nano Banana 2 | Sarah |
| F11 | 4 Betrayal | Hands opening laptop dark wood table at night | Flux 2 Pro | — |
| F12 | 4 Betrayal | Laptop inbox email list scroll suspicious | Flux 2 Pro | — |
| F13 | 4 Betrayal ⭐ | Email subject "Counting down the days, husband" screen close-up | Flux 2 Pro | — |
| F14 | 4 Betrayal | Sarah face horror cool blue glow from below | Nano Banana 2 | Sarah |
| F15 | 4 Betrayal | Wedding photo Daniel + Rachel on laptop screen | Flux 2 Pro | — |
| F16 | 4 Betrayal | Sarah head down on closed laptop silent grief | Nano Banana 2 | Sarah |
| F17 | 5 Fall | Sarah insomnia staring ceiling, Daniel sleeping beside | Nano Banana 2 | Sarah |
| F18 | 5 Fall | Hospital corridor hollow ghost walk Sarah | Nano Banana 2 | Sarah |
| F19 | 5 Fall | Bathroom mirror reflection hollow dark circles | Nano Banana 2 | Sarah |
| F20 | 5 Fall | Empty hospital parking lot sunrise wide | Flux 2 Pro | — |
| F21 | 5 Fall | Sarah in car holding phone decisive moment | Nano Banana 2 | Sarah |
| F22 | 6 Pivot | Patricia office desk Sarah across warm lighting | Nano Banana 2 | Patricia + Sarah |
| F23 | 6 Pivot | Hands writing life list in notebook top-down | Flux 2 Pro | — |
| F24 | 6 Pivot | Sarah packing two suitcases bedroom morning | Nano Banana 2 | Sarah |
| F25 | 6 Pivot ⭐ | Ring on kitchen table + folded paper note | Flux 2 Pro | — |
| F26 | 6 Pivot | Airplane window voxel clouds sunrise | Flux 2 Pro | — |
| F27 | 7 Karma | Daniel reading note shocked empty kitchen | Nano Banana 2 | Daniel |
| F28 | 7 Karma | Daniel panicked driving night dashboard glow | Nano Banana 2 | Daniel |
| F29 | 7 Karma ⭐ | Rachel on porch arms crossed suitcases on lawn | Nano Banana 2 | Rachel |
| F30 | 7 Karma | Daniel stepping out of car seeing suitcases | Nano Banana 2 | Daniel |
| F31 | 7 Karma | Legal divorce docs + forensic reports top-down desk | Seedream 4.5 | — |
| F32 | 7 Karma | Daniel escorted out office by security holding box | Nano Banana 2 | Daniel |
| F33 | 7 Karma | Daniel hardware store register fluorescent cheap uniform | Nano Banana 2 | Daniel |
| F34 | 7 Karma | Daniel's mother writing apology letter at desk | Flux 2 Pro | — |
| F35 | 8 Downfall | Phone screen notification "I am sorry" Daniel | Flux 2 Pro | — |
| F36 | 8 Downfall ⭐ | Hand dragging email to "Closed Cases" trackpad | Flux 2 Pro | — |
| F37 | 8 Downfall | Daniel alone motel bed single bulb suitcase open | Nano Banana 2 | Daniel |
| F38 | Epilogue | Sarah Portland studio window river golden morning coffee | Nano Banana 2 | Sarah |
| F39 | Epilogue | Sarah + James cooking kitchen laughing | Nano Banana 2 | Sarah + James |
| F40 | CTA | Voxel hourglass + butterflies brand logo | Ideogram 3 | — |

---

## 📝 Prompt templates

### Template A — Character scene (Nano Banana 2 + ref)
```
[Isometric / Cinematic close-up] voxel art [scene type],
the voxel character from reference [action + expression],
wearing [outfit],
[setting description voxel],
[lighting: e.g. cool blue screen glow from below / warm morning window / dramatic single source upper-left],
[color palette for this beat],
clean premium voxel art aesthetic NOT raw Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road style,
1920x1080 [isometric 45 degrees / cinematic], 2K
```

### Template B — Object/environment (Flux 2 Pro)
```
[Cinematic close-up / Isometric / Macro / Top-down] voxel art scene of [subject],
[specific voxel cube-based details],
[lighting direction + color temperature],
[color palette for this beat],
[mood adjective],
clean premium voxel NOT raw Minecraft NOT realistic,
Astroneer aesthetic,
1920x1080 [composition], 2K
```

---

## 🔑 6 HERO PROMPTS (copy nguyên, không edit)

### F01 — Ring on table (Hook)
```
Cinematic voxel art close-up of a delicate gold engagement ring with single diamond cube,
sitting on wooden voxel kitchen table,
single shaft of warm voxel light from window above-left creating long shadow,
voxel dust particles floating in light beam,
cool blue voxel kitchen background softly blurred,
deep navy and gold color palette,
clean premium voxel art NOT raw Minecraft,
Astroneer premium voxel aesthetic,
1920x1080 cinematic, 2K
```

### F13 — Email reveal (Betrayal KEY SHOT)
```
Cinematic voxel art extreme close-up of laptop screen showing email subject
"Counting down the days, husband" visible clearly,
cool blue screen glow illuminating surrounding darkness,
slight trembling hands holding laptop edges out of focus,
devastating discovery moment,
deep navy background with single cool blue screen accent,
clean premium voxel NOT cartoon,
1920x1080 cinematic, 2K
```

### F14 — Sarah horror face (Betrayal)
```
Cinematic voxel art extreme close-up of the voxel character from reference,
her simple voxel face slowly registers horror with mouth slightly open and eyes wide,
cool blue laptop glow illuminating her face from below creating dramatic contrast,
deep navy background,
devastating realization moment,
clean premium voxel art emotional,
1920x1080 cinematic, 2K
```

### F25 — Ring + note (Pivot SYMBOLIC)
```
Cinematic voxel art close-up of delicate gold engagement ring sitting alone on wooden kitchen table,
next to single folded voxel paper note,
soft morning voxel window light, ring slightly out of focus note sharp,
empty kitchen background blurred,
warm cream and gold accent palette,
symbolic abandoned moment of departure,
clean premium voxel,
1920x1080 cinematic, 2K
```

### F29 — Rachel porch (Karma)
```
Isometric voxel art suburban porch scene at evening,
the voxel character from reference with blonde hair in navy business attire,
standing with arms crossed firmly on porch,
two voxel suitcases dropped on voxel lawn,
betrayed angry determined expression,
suburban voxel house background with warm evening light dramatic shadows,
clean premium voxel aesthetic,
1920x1080 isometric 45 degrees, 2K
```

### F38 — Sarah Portland window (Epilogue)
```
Isometric voxel art cozy studio apartment scene,
the voxel character from reference standing peacefully by large voxel window
overlooking voxel river view, holding voxel coffee cup,
warm golden morning voxel light streaming in,
voxel plants on windowsill voxel small bed in background,
warm peach + cream + sage palette,
peaceful new life atmosphere,
clean premium voxel,
1920x1080 isometric, 2K
```

> **34 frames còn lại**: dùng Template A/B + description ở bảng trên + color palette beat tương ứng.

---

## 📸 15 KEN BURNS STILLS

> Gen image thường → CapCut apply scale 100% → 115% over 15-30s mỗi still

**Save**: `media/images/S01.png` → `S15.png`

| # | Beat | Description | Model | CapCut duration |
|---|---|---|---|---|
| S01 | 1 Hook | Sarah close-up devastated single tear | Nano Banana 2 + Sarah | 5s |
| S02 | 2 Intro | Sarah smiling nurse scrubs clipboard | Nano Banana 2 + Sarah | 15s |
| S03 | 3 Crack | Ring on sweater fabric extreme macro | Flux 2 Pro | 15s |
| S04 | 3 Crack | Dashboard close-up hands on wheel | Seedream 4.5 | 15s |
| S05 | 4 Betrayal | Laptop glow Sarah wide shot kitchen | Nano Banana 2 + Sarah | 15s |
| S06 | 4 Betrayal | Wedding photo Daniel + Rachel zoom | Flux 2 Pro | 15s |
| S07 | 5 Fall | Bedroom wide insomnia moonlight | Seedream 4.5 | 20s |
| S08 | 5 Fall | Empty hospital corridor fluorescent | Seedream 4.5 | 20s |
| S09 | 6 Pivot | Phone bank transfer screen | Flux 2 Pro | 20s |
| S10 | 6 Pivot | Plane shadow crossing sunrise clouds | Flux 2 Pro | 20s |
| S11 | 7 Karma | Rachel filing divorce papers desk | Flux 2 Pro | 25s |
| S12 | 7 Karma | Daniel empty office desk boxes | Seedream 4.5 | 20s |
| S13 | 7 Karma | Daniel basement mom's house defeated | Seedream 4.5 | 25s |
| S14 | 8 Downfall | Motel room wide Daniel tiny figure | Seedream 4.5 | 30s |
| S15 | Epilogue | Real vintage ring + appraiser receipt | Flux 2 Pro | 40s |

---

## ✅ Quality gate mỗi image

- [ ] Voxel cube aesthetic (NOT raw Minecraft)
- [ ] Color palette đúng beat
- [ ] Single main light source
- [ ] Character consistent (nếu có)
- [ ] NOT realistic, NOT cartoon
- [ ] 16:9 đúng frame
- [ ] Filename đúng (F01-F40, S01-S15)

**Fail** → Gen Variations 2-3 lần pick best.

---

## ➡️ Next
Xong 55 images → next file: `04-videos.md`
