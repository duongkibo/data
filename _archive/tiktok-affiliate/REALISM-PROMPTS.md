# 🎬 REALISM PROMPTS — Anti-CGI / Anti-Cartoon / Anti-Stiff

> **Vấn đề**: AI gen video hay bị CGI-look, chuyển động cứng nhắc, lighting plastic, skin mờ nhạt.
> **Giải pháp**: Prompt engineering chi tiết, có physics anchors, imperfection, phone-filming vocabulary.

---

## 🚨 3 Lỗi killer AI video (tránh 100%)

### Lỗi 1: CGI plastic skin
- **Triệu chứng**: Da mịn bóng loáng, không thấy pores, glow như nhựa
- **Nguyên nhân**: Prompt có "flawless", "perfect skin", "glowing dewy"
- **Fix**: Thay bằng `natural pores visible, subtle skin texture, imperfect real`

### Lỗi 2: Cartoon/anime motion
- **Triệu chứng**: Chuyển động quá smooth, không có gravity, không có inertia
- **Nguyên nhân**: Thiếu "physics accurate", "handheld", "documentary"
- **Fix**: Thêm `handheld phone filming, natural camera shake, physics accurate gravity`

### Lỗi 3: Stiff frozen pose
- **Triệu chứng**: Nhân vật đứng im, không blink, không breathing, mắt vô hồn
- **Nguyên nhân**: Không specify micro-movement
- **Fix**: Bắt buộc thêm `natural blink, breathing visible, subtle micro-expression changes`

---

## ✅ 15 ANTI-CGI KEYWORDS (thêm vào mọi video prompt)

### Skin realism (3 từ)
1. `natural skin texture with visible pores and fine lines`
2. `subtle freckles and minor imperfections`
3. `not airbrushed, not retouched, documentary feel`

### Motion realism (4 từ)
4. `handheld phone filming feel, not gimbal smooth`
5. `subtle natural camera shake`
6. `physics accurate gravity and material behavior`
7. `realistic inertia and weight`

### Micro-expression (4 từ)
8. `natural blink every 3-4 seconds`
9. `breathing visible in chest rise and fall`
10. `subtle micro-expression shifts`
11. `realistic eye dart before speaking`

### Lighting realism (4 từ)
12. `single window light source with subtle shadow`
13. `imperfect lighting with natural highlights`
14. `warm ambient room light not studio`
15. `documentary Vietnamese vlog lighting`

---

## 🚫 BLACKLIST KEYWORDS (cấm dùng)

Những từ sau đây làm AI gen CGI/stylized:
- ❌ `flawless`, `perfect`, `perfect skin`
- ❌ `cinematic gimbal smooth`
- ❌ `studio lighting`, `three-point light`, `softbox`
- ❌ `polished commercial`, `high-end beauty`
- ❌ `glowing dewy` (AI hiểu thành glossy plastic)
- ❌ `glass skin` (AI gen literal glass texture)
- ❌ `professional beauty shot`
- ❌ `hyperstylized`, `vibrant saturated`
- ❌ `smooth motion`, `fluid movement`
- ❌ `dramatic zoom`

---

## 🎯 PROMPT TEMPLATES ANTI-CGI

### Template A: Talking Head (dùng Veo 3)

```
The woman from reference speaks directly to camera:
"[exact Vietnamese dialogue]"

[emotion] expression with natural micro-expression shifts,
she blinks naturally twice during the shot,
chest rises and falls slightly with breathing,
a single flyaway hair strand visible,
subtle tired look under eyes, not airbrushed,

filmed on iPhone handheld, slight natural camera shake,
single window light from left creating mild asymmetric shadow,
warm bedroom ambient light not studio,
documentary Vietnamese vlog aesthetic,

natural skin texture with visible pores, subtle freckles,
slight oily T-zone shine (real skin not matte),

then [specific motion endpoint like "she tilts head slightly" or "her hand falls from cheek"].

Duration: 5s, 9:16 vertical
```

### Template B: Hand Macro Money Shot (dùng Kling 2.5 / Flux)

```
Extreme macro photograph of a feminine Vietnamese hand, palm up,
natural short unpolished nails with slight imperfection,
warm skin tone with visible pores, fine lines on knuckles,
a single subtle vein on back of hand, realistic human hand anatomy,

[product] dropper tilts slowly above the palm,
[liquid] droplet forms and falls in slow motion,
physics accurate gravity with realistic liquid tension,
[specific texture: crystal clear / honey-thick / green-tinted / etc] NOT milky NOT cloudy,

shot on Canon 100mm f/2.8 macro lens with shallow depth of field,
soft natural window light creating subtle side shadow,
creamy beige background with faint [color] accents,
slight lens breathing natural focus hunt,

then the droplet touches skin and slowly absorbs leaving realistic dewy finish (not glossy CGI).

Duration: 10s, 9:16 vertical
```

### Template C: Body Action (dùng Kling 2.5)

```
The woman [specific one action],
handheld iPhone filming subtle shake,
natural micro-movements during action,
she blinks once, breathing visible,

ambient room lighting with single warm lamp source,
her hair has one flyaway strand moving naturally,
clothes have natural wrinkles and folds,
background has natural clutter of student bedroom,

not cinematic, not polished, documentary VN vlog style,
imperfect real skin with pores visible,
slight natural motion blur from handheld,

then [motion endpoint], she [reaction].

Duration: 5s, 9:16 vertical
```

---

## 🔬 PHYSICS ANCHORS (tăng độ real)

Khi gen texture shots, phải specify physics behavior:

### Liquid drop
```
physics accurate gravity:
- droplet starts small then grows as it forms
- surface tension creates round shape
- falls straight down not curved
- impact creates small ripple
- viscosity: [watery / honey-thick / gel / etc]
- refraction: bends light naturally
```

### Hair movement
```
hair physics:
- strands move slightly from breathing
- one or two flyaway strands natural
- not perfectly styled, slight natural disarray
- follows head micro-movements with slight delay
```

### Fabric
```
fabric physics:
- natural wrinkles and folds
- slight shadow in creases
- moves slightly with breathing
- not ironed flat like 3D render
```

### Skin behavior
```
skin behavior:
- slight sheen on T-zone (oil) not all over
- subtle blood flow coloring in cheeks
- fine lines deepen slightly when expression changes
- pores visible at close distance
- not airbrushed uniformity
```

---

## 🎭 MICRO-EXPRESSION VOCABULARY

Gen Z TikTok viewers phát hiện "dead eyes" AI trong 2 giây. Fix:

### Natural sequences (thêm vào mọi face prompt)
- `natural blink every 3-4 seconds`
- `eye dart slightly before speaking`
- `subtle mouth parting then closing`
- `eyebrow micro-raise during emphasis`
- `slight head tilt with speech`
- `genuine cheek raise when smiling (real smile reaches eyes)`
- `subtle nostril flare with breathing`
- `small swallow movement in throat`
- `lip slight curl at end of sentence`

### Expression categories
- **Worried**: `slight frown, brow pinch, mouth tight, eyes slightly widened`
- **Curious**: `eyebrow raise, mouth slight open, head tilt 10 degrees`
- **Excited**: `eye crinkle, genuine smile reaching eyes, slight lean forward`
- **Tired**: `slight eye bag, barely open mouth, shoulder slump`
- **Wonder**: `mouth slight parted, eyes wide, still breathing`

---

## 📸 CAMERA VOCABULARY CHÂN THỰC

### Thay "smooth" bằng:
- ✅ `handheld subtle shake`
- ✅ `iPhone filming natural micro-jitter`
- ✅ `slight focus breathing`
- ✅ `minor lens wobble from breath`

### Thay "cinematic" bằng:
- ✅ `documentary vlog style`
- ✅ `authentic phone filming`
- ✅ `raw unpolished capture`
- ✅ `slice-of-life feel`

### Thay "zoom" bằng:
- ✅ `slow push-in camera move`
- ✅ `dolly forward 10 cm`
- ✅ `gradual approach`

### Thay "dramatic light" bằng:
- ✅ `natural window light from left 45 degrees`
- ✅ `single warm bedside lamp`
- ✅ `overhead afternoon sun diffused through curtain`
- ✅ `mixed room light sources creating natural inconsistency`

---

## 🌟 VÍ DỤ REWRITE: BEFORE vs AFTER

### ❌ BEFORE (CGI look)
```
Young Vietnamese woman with flawless glowing dewy skin smiles at camera
with perfect studio lighting and cinematic cinematic smooth motion,
professional beauty shot, glass skin aesthetic, vibrant saturated.
```

### ✅ AFTER (Real look)
```
The young Vietnamese woman from reference speaks to camera naturally,
her skin shows visible pores and subtle freckles, slight T-zone shine,
a single flyaway hair strand near her forehead,
she blinks twice during the shot and breathes visibly,
handheld iPhone filming with subtle natural shake,
single window light from left creating mild asymmetric shadow,
warm bedroom ambient light not studio,
documentary Vietnamese vlog aesthetic,
subtle micro-expression shift as she speaks,
then her head tilts slightly at the end.
```

---

## 🧪 VALIDATION CHECKLIST (chạy trước khi gen)

Trước khi paste prompt vào Freepik, check:

- [ ] Có `handheld` hoặc `iPhone filming` ?
- [ ] Có `natural skin texture with visible pores` ?
- [ ] Có `natural blink` hoặc `breathing visible` ?
- [ ] Có `not airbrushed` hoặc `imperfect real` ?
- [ ] Có `single window light` hoặc `warm ambient lamp` (không studio)?
- [ ] Có motion endpoint cụ thể cuối prompt?
- [ ] KHÔNG có `flawless`, `perfect`, `studio`, `cinematic gimbal`?
- [ ] KHÔNG có `glowing dewy` hoặc `glass skin` literal?
- [ ] Physics anchors cho texture shots?

**9/9 pass → OK gen**
**<9 pass → rewrite**

---

## 🔥 ULTIMATE CHEAT SHEET

Copy-paste block này vào CUỐI mọi video prompt để auto anti-CGI:

```
, handheld iPhone filming with subtle natural camera shake,
imperfect real skin with visible pores and subtle freckles,
natural blink and breathing visible, micro-expression shifts,
single window light creating asymmetric shadow,
not airbrushed not studio not cinematic,
documentary Vietnamese vlog aesthetic
```

Đủ để fix 80% CGI problems.

---

## 📚 Reference
- `AI-REALISM-GUIDE.md` — triết lý tổng quát
- Freepik docs model specific
- Test protocol: "5-second stranger check" — show cho 3 người, 2/3 không nhận ra AI = PASS
