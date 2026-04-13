# freepik-video — Multi-Model Video Prompts (Kling + Veo 3 + Hailuo, Anti-CGI)

## Input
$ARGUMENTS (product-slug)

## 🎯 Triết lý V3
100% AI video nhưng chân thực như người thật quay iPhone. Multi-model rotation theo shot type.

## 🎬 Freepik Video Model Matrix

| Model | Strength | Weakness | Dùng khi |
|---|---|---|---|
| **Veo 3** (Google) ⭐⭐⭐ | **Native audio + lip sync** | Đắt, chậm | **Talking head có lời** (hook, CTA, personal story) |
| **Kling 2.5 Turbo** ⭐⭐⭐ | Motion quality + Start+End frame | 5-10s limit | Body action, product reveal, hero transformation |
| **Kling 2.1** | Stable physics | Motion less smooth | Fallback khi 2.5 fail physics (water test) |
| **Seedance Pro** | Liquid + particles | Non-character | Texture shots, money shot pour |
| **Runway Gen-4** | Director controls | Character drift | Dramatic cinematic shots |
| **Minimax Hailuo 02** | Fast + cheap + natural | Mid quality | Volume gen TOFU content, environment B-roll |
| **Pika 2.2** | Effect transitions | Motion cứng | Transition clips |
| **Sora 2** (OpenAI) | Cinematic long shots | Đắt, kiểm soát yếu | Brand storytelling (rare use) |

## 🎯 Shot Type → Model Map

| Shot type | Primary model | Fallback | Lý do |
|---|---|---|---|
| **Talking head có lời** (hook, CTA) | **Veo 3** | Kling 2.5 silent + dub | Lip sync bắt buộc |
| Talking head silent reaction | Kling 2.5 | Runway Gen-4 | Micro-expression |
| Full body action | Kling 2.5 Turbo | Runway Gen-4 | Motion quality |
| Hand macro texture | Kling 2.5 | Seedance Pro | Physics realistic |
| Product reveal rotation | Kling 2.5 | Pika 2.2 | Smooth dolly |
| Before/After transform | **Kling 2.5 Start+End** | Kling 2.1 | 2 anchor frames |
| Liquid pour / water test | **Seedance Pro** | Kling 2.1 | Liquid physics |
| Environment B-roll | Minimax Hailuo | Kling 2.5 | Fast + cheap |
| Dreamy cinematic | Runway Gen-4 | Sora 2 | Director control |

## 🔥 Realism Principles (MỌI video prompt)

### Thêm vào mọi prompt:
1. `handheld phone filming feel, not gimbal smooth`
2. `subtle natural camera shake`
3. `documentary Vietnamese vlog style`
4. `realistic micro-expressions, subtle blink, natural breathing`
5. `imperfect lighting with single window source`
6. `not stylized, not airbrushed, documentary feel`
7. Motion endpoint: `then [specific ending]`

### Tránh:
1. `cinematic gimbal`
2. `perfect studio`
3. `polished commercial`
4. `flawless`
5. Multi-action in 1 clip (Kling drift)

## 🎬 Template per model

### Veo 3 Talking Head Template (KEY)
```
The woman from reference speaks directly to camera:
"[exact Vietnamese dialogue here]"
Natural [emotion] expression with subtle micro-expressions,
slight blink and natural breathing visible,
soft window light creating mild shadow,
handheld phone filming feel, Vietnamese vlog documentary style,
imperfect realistic skin with visible pores,
then [motion endpoint like "she tilts head" or "smiles softly"], 5s
```

**Magic**: Veo 3 sẽ tự gen audio + lip sync match exactly dialogue → không cần sync voice sau.

### Kling 2.5 Action Template
```
[The woman / a feminine hand] [one clear action],
[specific camera movement: slow push-in / lateral track / rack focus],
[soft imperfect lighting description],
handheld phone filming subtle shake, natural micro-expressions,
documentary VN vlog feel,
then [motion endpoint]. 5s
```

### Kling 2.5 Start+End Template (hero transformation)
```
Start frame: [F4a.png]
End frame: [F4b.png]
Prompt:
[Subject] [transformation action] in slow motion,
[camera movement interpolating between start and end],
physics-accurate gravity and material behavior,
soft diffused light with subtle imperfection,
extreme macro detail, photorealistic,
then [end state settles]. 10s
```

### Seedance Pro Liquid Template
```
Extreme macro shot of [liquid action],
crystal clear transparent [liquid] with realistic refraction,
physics-accurate droplet formation and gravity fall,
NOT milky, NOT cloudy, NOT creamy,
soft diffused studio light, creamy background,
Canon 100mm macro lens, ultra sharp, 5s
```

### Minimax Hailuo B-Roll Template (cheap volume)
```
[Simple action] in natural Vietnamese setting,
handheld phone filming documentary style,
natural ambient light, slight camera movement,
authentic slice-of-life vlog, 5s
```

## 📋 Output template

Lưu `output/{slug}/04-video-prompts.md`:

```markdown
# Video Prompts V3 - {Tên sản phẩm}

## Model assignment overview

| Clip | Shot | Duration | Model | Cost (credits) |
|---|---|---|---|---|
| 1 | Hook talking head | 5s | **Veo 3** | 20 |
| 2 | Problem action | 5s | Kling 2.5 | 5 |
| 3 | Reveal product | 5s | Kling 2.5 | 5 |
| 4 | Hero texture 10s | 10s | **Kling 2.5 Start+End** | 10 |
| 5 | Result talking head | 5s | **Veo 3** | 20 |
| 6 | CTA talking head | 5s | **Veo 3** | 20 |
| **Total** | | 35s | | **80 credits** |

## Realism budget
- 3 clips Veo 3 (talking head): 60 credits — lip sync bắt buộc
- 3 clips Kling 2.5 (action): 20 credits — motion quality

## 🎬 CLIP 1 — Hook Talking Head ⭐ (Veo 3)
Start image: F1.png | Duration: 5s
Model: **Google Veo 3**

### Prompt
The woman from reference speaks directly to camera:
"Bồ ơi! Da mình mặt dầu nhưng vẫn khô xạm luôn á!"
Worried concerned expression with subtle frown,
natural blink and breathing visible,
her hand rises slightly to touch her cheek,
soft window light from left creating mild shadow,
handheld phone filming Vietnamese vlog feel,
imperfect realistic skin with visible pores and subtle freckles,
then she sighs softly and looks away. 5s

### Output
Voice + lip sync sẵn → không cần gen voice riêng cho shot này → tiết kiệm thời gian

---

## 🎬 CLIP 4 — Hero Texture ⭐ (Kling 2.5 Start+End)
Start image: F4a.png | End image: F4b.png | Duration: 10s
Model: **Kling 2.5 Turbo**

### Prompt
The Torriden dropper tilts slowly above the feminine hand,
a crystal clear pale green watery droplet forms at the tip and falls in slow motion,
camera gradually pushes in from medium to extreme macro following the droplet,
physics accurate gravity and liquid refraction,
soft diffused golden light with natural imperfection,
handheld subtle shake, documentary macro feel,
then the droplet touches the skin and absorbs instantly leaving a realistic dewy glow. 10s

### Fallback
Nếu Kling fail physics → thử **Seedance Pro** cho liquid shot

---

## 🎬 CLIP 5-6 — Result + CTA ⭐⭐ (Veo 3 both)
### CLIP 5 Result (Veo 3, 5s)
Start image: F5.png

Prompt:
The same woman from reference with visibly improved skin speaks:
"Hai tuần sau da mình khác hẳn luôn á — căng mọng không dầu không khô!"
Bright genuine happy expression with eye smile,
subtle head nod and hair flip,
warm golden hour light,
handheld phone feel, documentary vlog,
imperfect realistic natural skin,
then she laughs softly. 5s

### CLIP 6 CTA (Veo 3, 5s)
Start image: F6.png

Prompt:
The woman points to lower-right corner with friendly smile:
"Bấm giỏ hàng vàng nha bồ!"
Inviting warm expression with subtle wink at end,
natural hand gesture and breathing,
warm golden light, handheld phone feel,
then she nods encouragingly. 5s
```

## 💰 Cost optimization

### Empire mode (best realism, $$$)
3 Veo 3 + 2 Kling 5s + 1 Kling 10s = **80 credits**

### Budget mode (good realism, $)
0 Veo 3 + 5 Kling 5s + 1 Kling 10s = **35 credits**
Fallback: Dub voice ElevenLabs sau

### TOFU educational mode (cheap, $)
5 Minimax Hailuo + 1 Kling 5s = **20 credits**

## Sau khi xong
User gen trên Freepik → tiếp `/affiliate-voice-prompt {slug}` để viết voice cho clip không phải Veo 3.
