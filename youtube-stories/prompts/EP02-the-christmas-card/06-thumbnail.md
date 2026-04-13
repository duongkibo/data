# 06 — Thumbnail (3 variants A/B)

> **Upload all 3** → YouTube Studio A/B test (sau 1k subs) → chọn CTR cao nhất

---

## Setup

- **Model**: Ideogram 3 (text accuracy tốt nhất)
- **Ratio**: 16:9
- **Resolution**: 1280×720
- **Save**: `media/thumbnails/v1.png` · `v2.png` · `v3.png`

---

## Color palette locked

- Background: Deep navy `#0B1426` or dark charcoal `#0D0D12`
- Text: Yellow `#FFED00` + black stroke 6px (primary)
- Accent: Warm Christmas gold `#D4821A`
- Cold accent: Icy blue `#7EC8E3` (laptop glow / betrayal side)
- Warm accent: Candle red `#B52A2A` (Christmas light side)

---

## V1 — Nina devastated face (PRIMARY)

**Hypothesis**: Emotional close-up face + shocking text = highest CTR on betrayal niche

**Mute test**: Viewer sees devastated woman + Christmas imagery + "HIS OTHER CHRISTMAS" → immediately understands betrayal story. Pass in 3 seconds.

**Ideogram 3 prompt** (copy-paste ready):

```
YouTube thumbnail 1280x720 voxel art style,
cinematic close-up of a voxel art female character age 34,
cream cardigan, short-to-shoulder rounded voxel hair warm brown,
cube head with simple dot eyes, single voxel tear cube on left cheek,
expression: devastated — eyes cast slightly down, mouth line flat and trembling,
she is holding a printed Christmas card in both hands,
Christmas card visible lower frame showing four voxel figures in the photo,
dramatic warm Christmas light from lower-left (candle glow), cold blue shadow on right side of face,
deep dark navy voxel background, subtle Christmas bokeh lights blurred in background,
LARGE bold YELLOW text left side reading "HIS OTHER CHRISTMAS" in Bebas Neue or Anton font,
thick black stroke 6px around text, drop shadow,
smaller white subtext below in clean sans-serif: "she made 60 cards. he had 2 families.",
small channel watermark bottom-right "Karma Caught Up" white 14pt,
premium voxel art aesthetic NOT Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road character style,
high contrast clickable YouTube thumbnail,
1280x720 horizontal 2K
```

**Text overlay specs:**
- Main text: "HIS OTHER CHRISTMAS" — Bebas Neue Bold, Yellow `#FFED00`, 96pt equivalent, black stroke 6px
- Subtext: "she made 60 cards. he had 2 families." — Montserrat Bold, White `#FFFFFF`, 28pt, slight drop shadow
- Channel tag: "Karma Caught Up" — Montserrat Regular, White 50% opacity, 14pt, bottom-right corner

---

## V2 — Split card composition

**Hypothesis**: The specific visual contrast (warm card vs cold reality) triggers curiosity gap + "this can't be real" response

**Mute test**: Left = warm family Christmas card with 4 people (recognizable joy). Right = woman alone holding the same card in cold light. Text = "THERE WERE 4 PEOPLE". Viewer reads: something is wrong with that fourth person. Pass in 3 seconds.

**Ideogram 3 prompt** (copy-paste ready):

```
YouTube thumbnail 1280x720 voxel art style,
split composition — hard vertical edge dividing frame exactly in half,
LEFT HALF (warm gold tones): close-up of a printed voxel-art Christmas card,
the card shows four voxel figures — woman, man, girl, small boy — in snowflake border,
warm candlelight glow, gold background, text on card reads "Peace Love Joy",
RIGHT HALF (cold blue tones): Nina voxel character age 34, cream cardigan, holding the card with both hands,
expression: frozen shock, mouth slightly open, dot eyes wide,
cold blue-white kitchen lighting, dark background,
hard color temperature split — warm amber left / cold blue right,
LARGE bold YELLOW text across top of full image: "THERE WERE 4 PEOPLE",
thick black stroke 6px, drop shadow,
smaller white subtext center-bottom: "she didn't know one of them",
small channel watermark bottom-right "Karma Caught Up" white 14pt,
premium voxel art NOT Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road character style,
1280x720 horizontal 2K
```

**Text overlay specs:**
- Main text: "THERE WERE 4 PEOPLE" — Bebas Neue Bold, Yellow `#FFED00`, 88pt equivalent, black stroke 6px
- Subtext: "she didn't know one of them" — Montserrat Bold, White `#FFFFFF`, 26pt, centered bottom
- Channel tag: "Karma Caught Up" — Montserrat Regular, White 50% opacity, 14pt, bottom-right

---

## V3 — Laptop reveal close-up

**Hypothesis**: Specific forensic detail (folder name + photo count) triggers "I need to know everything" compulsion — strongest with detail-hungry audience

**Mute test**: Dark kitchen. Glowing laptop. Folder label visible. Number "117 PHOTOS. 6 YEARS." dominates. Viewer immediately understands: she found something she wasn't supposed to find. Pass in 3 seconds.

**Ideogram 3 prompt** (copy-paste ready):

```
YouTube thumbnail 1280x720 voxel art style,
dark kitchen environment, voxel cubic countertops and cabinets barely visible in background shadow,
center foreground: a voxel-art laptop screen glowing cold blue-white,
laptop screen clearly shows a voxel file folder icon labeled "Family — Amber" in readable text,
below the folder: a grid of small photo thumbnails barely visible (blurred faces),
the cold blue laptop glow is the only light source, casting sharp blue shadows across the dark scene,
Nina's voxel hands barely visible at bottom of frame, reaching toward the keyboard, frozen mid-motion,
LARGE bold YELLOW text upper frame: "117 PHOTOS. 6 YEARS.",
thick black stroke 6px around text, drop shadow,
smaller white subtext below: "she found the wrong folder",
the text "Family — Amber" on the laptop screen must be clearly legible,
small channel watermark bottom-right "Karma Caught Up" white 14pt,
premium voxel art aesthetic NOT Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road style, high contrast,
1280x720 horizontal 2K
```

**Text overlay specs:**
- Main text: "117 PHOTOS. 6 YEARS." — Bebas Neue Bold, Yellow `#FFED00`, 92pt equivalent, black stroke 6px
- Subtext: "she found the wrong folder" — Montserrat Bold, White `#FFFFFF`, 26pt, upper-center below main text
- Laptop label: "Family — Amber" must be readable inside the image itself (Ideogram handles text well — specify in prompt)
- Channel tag: "Karma Caught Up" — Montserrat Regular, White 50% opacity, 14pt, bottom-right

---

## A/B test protocol

| Week | Active thumbnail | Goal |
|---|---|---|
| Upload day | V1 (primary) | Establish baseline CTR |
| Day 3 | Swap to V2 if V1 CTR < 6% | Test split composition |
| Day 7 | Lock highest CTR; test V3 on next video's card |  |

**CTR benchmark**: 6–9% is strong for betrayal niche. Below 5% = swap within 48 hours.
