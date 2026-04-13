# story-thumbnail — Custom Thumbnail Long-form

## Input
$ARGUMENTS (slug)

## Mục đích
Custom thumbnail cho long-form (16:9 = 1280×720) maximize CTR.

## 🎯 Layout long-form 1280×720

```
┌────────────────────────────────────┐
│                                    │
│  [TEXT HOOK 2-3 WORDS]             │ ← Top-left 25%
│  yellow bold                       │
│                                    │
│       [PROTAGONIST FACE]           │ ← Center 60%
│       [DRAMATIC EMOTION]           │
│       [LOOKING AT CAMERA]          │
│                                    │
│  [SECONDARY OBJECT/SYMBOL]         │ ← Bottom 15%
└────────────────────────────────────┘
```

## Formula

### Text rules
- 2-3 words MAX (mobile readable)
- ALL CAPS BOLD
- Font: Anton, Bebas Neue, Impact
- Color: Yellow #FFED00 with black stroke 6px
- Position: Top-left 25%

### Face rules
- Female protagonist (target audience nữ)
- Eye contact direct camera
- Dramatic emotion (shock, devastation, knowing smile)
- Cinematic lighting (low-key, single source)
- Center 60% frame fill

### Color palette
- Background: Dark moody (cool blue/gray)
- Accent: Single warm color (gold or red)
- Avoid: Bright, busy

## Per-story thumbnail concept

### Engagement Ring story
- Text: "FAKE RING"
- Face: Woman staring at ring on hand, devastated
- Symbol: Ring close-up bottom

### Wedding video story
- Text: "I SAW IT"
- Face: Woman watching laptop, hand to mouth
- Symbol: Wedding ring on laptop

### Phone bill story
- Text: "200 CALLS"
- Face: Woman holding bill paper, realization
- Symbol: Phone screen

## Ideogram 3 prompt template

```
Vertical YouTube long-form thumbnail 1280x720,
extreme close-up of a woman around 30 years old,
[specific dramatic emotion: devastated/knowing/cold],
direct intense eye contact with camera,
realistic skin texture with subtle imperfections,
[cinematic lighting: low-key from one side],
dark moody background with cool blue tint,
large bold text overlay top-left "{2-3 WORDS}"
in bright yellow with thick black stroke and drop shadow,
font Anton or Bebas Neue display impact,
small symbolic object in bottom corner ({ring/phone/etc}),
photorealistic NOT cartoon NOT stylized,
high contrast YouTube thumbnail click-bait style,
1920x1080 horizontal, 2K
```

## A/B test

Generate 2 variants:
- V1: Text top-left
- V2: Text top-right (mirror)

YouTube A/B test feature đo CTR sau 1 week → pick winner.

## Output

Save:
- `youtube-stories/prompts/{slug}/thumbnail-v1.png`
- `youtube-stories/prompts/{slug}/thumbnail-v2.png`
- `youtube-stories/prompts/{slug}/thumbnail.md` (concept doc)

## Validation
- [ ] Text 2-3 words?
- [ ] Female face fill 60%?
- [ ] Eye contact direct?
- [ ] Mute test pass (hiểu video về gì)?
- [ ] Readable mobile size 320×180?
- [ ] Match channel branding (cool blue + gold)?
