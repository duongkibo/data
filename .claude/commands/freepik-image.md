# freepik-image — Multi-Model Freepik Image Prompts (Flux + Nano Banana 2 + Ideogram)

## Input
$ARGUMENTS (product-slug hoặc 5 slugs)

## 🎯 Triết lý V3
100% AI nhưng chân thực. Dùng **model đúng cho scene đúng** thay vì lock 1 model.

## 📊 Freepik Image Model Matrix

| Model | Strength | Dùng cho |
|---|---|---|
| **Google Nano Banana 2** ⭐ | Character consistency + multi-ref + product preservation | Hero shots có character + product, toàn bộ persona "Linh" |
| **Flux 2 Pro** ⭐ | Photorealism cực cao, skin texture thật nhất | Macro hand, texture shot, beauty portrait glamour, persona master gen 1 lần |
| **Seedream 4** | Liquid + dramatic lighting | Product texture pour, luxury aesthetic |
| **Mystic** (Freepik native) | Fast, cheap | Concept/mockup nhanh, không final |
| **Imagen 4** (Google) | Text accuracy + realistic | Packaging closeup có label đọc rõ |
| **Ideogram 3** | Text overlay + typography | TOFU infographic, educational content |
| **Hi-Dream** | Dreamy ethereal K-beauty | Result glow dreamy, hero aesthetic |

## 🎯 Model mapping theo use-case

### TOFU educational content
- `Ideogram 3` — ảnh có text overlay (5 lỗi, 3 bước...)
- `Imagen 4` — fake phone screenshot, UI elements có text

### MOFU personal story
- `Nano Banana 2` — character consistency qua nhiều scene
- `Flux 1.1 Pro` — close-up emotion portrait

### BOFU product review
- `Nano Banana 2` — character + product (multi-ref)
- `Flux 1.1 Pro` — money shot hand macro + texture
- `Seedream 4` — dramatic product pour
- `Imagen 4` — packaging closeup

### Persona master (one-time, re-use forever)
- `Flux 2 Pro` — base character with best photorealism
- Save `assets/personas/linh/persona-master.png` (2K)

## 🔥 Realism principles (100% AI)

Mọi prompt PHẢI có:
1. `natural skin texture with visible pores`
2. `subtle freckles or light imperfections`
3. `handheld phone filming feel` (cho Kling sau)
4. `imperfect window light with slight shadow`
5. `not airbrushed, not retouched`
6. `documentary vlog style`

Mọi prompt KHÔNG được có:
1. `flawless` / `perfect skin`
2. `glowing dewy` (quá glossy)
3. `glass skin` (AI hiểu nhầm)
4. `studio lighting` (quá fake)
5. `professional beauty shot` (AI plastic)

## Setup References Nano Banana 2

```
Slot 1 (bắt buộc): persona-master.png (hoặc variant)
Slot 2 (khi có sản phẩm): product-real.png (copy từ TikTok Shop)
Slot 3 (optional): frame-trước.png để giữ lighting
Slot 4 (optional): background-bank.png để anchor bối cảnh
```

## Quy trình

1. Đọc `02-storyboard.md` + `01-script-outline.md`
2. Xác định mỗi shot cần model nào (theo matrix trên)
3. Viết prompt với realism principles
4. Ghi rõ references cần upload

## Output

Lưu `output/{slug}/03-image-prompts.md`:

```markdown
# Image Prompts V3 - {Tên sản phẩm}

## Model assignment

| Frame | Shot | Model | Lý do |
|---|---|---|---|
| F1 | Hook talking head | Nano Banana 2 | Character ref cho Veo 3 sau |
| F2 | Problem | Nano Banana 2 | Character continuity |
| F3 | Reveal product | Nano Banana 2 | Multi-ref char+product |
| F4a | Hero START macro | **Flux 2 Pro** | Photoreal texture max |
| F4b | Hero END absorbed | Flux 2 Pro | Photoreal skin max |
| F5 | Result glow | Nano Banana 2 | Character continuity |
| F6 | CTA | Nano Banana 2 | Character consistency |

## FRAME 1 — Hook talking head (Nano Banana 2)
References: persona-master.png (Linh)

### Prompt
```
The woman from reference, close-up portrait in cozy bedroom,
natural skin texture with visible pores and subtle freckles,
worried concerned expression about to speak,
slight tired look under eyes, not airbrushed,
single window light from left creating mild natural shadow,
handheld phone filming feel, Vietnamese vlog documentary style,
photorealistic imperfect realistic, 9:16, 2K
```

### Output use
Sẽ làm start image cho Veo 3 clip 1 (talking head hook có lip sync)

---

## FRAME 4a — Hero START texture (Flux 2 Pro) ⭐

References: **KHÔNG cần** (Flux gen from scratch, photoreal max)

### Prompt
```
Extreme macro photograph of a feminine Vietnamese hand, palm up,
natural short nails, warm skin tone with visible pores and fine lines,
a subtle vein visible on back of hand, realistic human hand anatomy,
a dropper from a skincare bottle hovers above the palm,
a single crystal clear pale green watery droplet forming at the dropper tip,
ready to fall, physics accurate gravity,
soft diffused natural window light creating subtle shadow on palm,
creamy beige background with pale green accents,
shot on Canon 100mm macro lens, f/2.8 shallow depth of field,
photorealistic hyperrealistic skin detail not stylized, 9:16, 2K
```

### Lý do dùng Flux
- Macro hand cần photorealism tối đa
- Nano Banana 2 gen hand hay có lỗi ngón tay
- Flux 2 Pro best cho skin + liquid physics

---

## FRAME 4b — Hero END absorbed (Flux 2 Pro)
References: F4a.png (continuity)

### Prompt
```
Extreme macro of the same feminine Vietnamese hand from reference,
the pale green droplet has just absorbed into the skin leaving subtle dewy sheen,
the skin looks naturally hydrated with realistic pore structure,
the dropper bottle visible softly in background,
soft window light maintaining continuity with reference,
photorealistic extreme macro detail, 9:16, 2K
```
```

## Tips per model

### Nano Banana 2
- Multi-ref works best (1 character + 1 product)
- Natural language works, không cần nhồi keywords
- Best cho character consistency cross-scene

### Flux 2 Pro
- Không có character ref → gen fresh mỗi lần
- Best cho skin texture, hand, macro
- Prompt cần detailed technical (lens, aperture)

### Ideogram 3 (cho TOFU)
- Best cho infographic có text VN
- Prompt: `"5 LỖI DÙNG SERUM" text overlay infographic skincare layout, clean minimalist design, pink and cream palette, 9:16`

### Imagen 4
- Best cho text trong ảnh (label chai)
- Dùng khi cần label brand đọc rõ 100%

## Sau khi xong
Gợi ý `/affiliate-video-prompt {slug}` — sẽ viết video prompts multi-model.
