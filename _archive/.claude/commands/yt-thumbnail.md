# yt-thumbnail — Custom Thumbnail Design cho YouTube Shorts

## Input
$ARGUMENTS (slug)

## Mục đích
Tạo custom thumbnail boost CTR 2-3x vs auto thumbnail.

## 🎯 Tại sao quan trọng
- Auto-thumbnail từ video frame = baseline CTR
- Custom thumbnail = **2-3x CTR** trên Browse + Suggested
- Shorts feed dùng first frame, NHƯNG search/suggested dùng custom

## Thumbnail Formula

### Layout (1080x1920 vertical)
```
┌─────────────────────┐
│                     │
│   [TEXT HOOK]       │ ← Top 25% (large text)
│   2-3 BOLD WORDS    │
│                     │
├─────────────────────┤
│                     │
│                     │
│   [PET FACE         │ ← Center 60%
│    EXTREME EMOTION  │   Pet face zoom 70%
│    EYE CONTACT]     │
│                     │
│                     │
├─────────────────────┤
│   [SECONDARY CONTEXT]│ ← Bottom 15% (icon/badge)
└─────────────────────┘
```

### Text rules
- **2-3 words max**
- ALL CAPS BOLD
- Font: Impact / Anton / Bebas Neue (high impact display)
- Color: Yellow (#FFED00) hoặc White với stroke đen 8px
- Position top 25%
- Drop shadow heavy

### Pet face rules
- Eye contact với camera
- Extreme emotion (shock/anger/joy/wonder)
- Zoom 70% face fill frame
- Background blur or single color contrast
- Mouth open hoặc visible expression

### Color palette
- High contrast (dark bg + bright text or vice versa)
- Single dominant color per thumbnail
- Yellow/orange/red = curiosity emotion
- Blue = calm/wisdom
- Green = nature/discovery

## Per-character thumbnail style

### Mittens (sardonic cat)
- Background: Dark moody gray
- Text: White Bold "DAY 47" or accusing word
- Face: Glaring eyes, narrow
- Color accent: Cold blue

### Biscuit (optimistic dog)
- Background: Bright sunny yellow
- Text: Yellow with red stroke
- Face: Big smile, tongue out, wide eyes
- Color accent: Warm orange

### Whiskers (philosophical)
- Background: Dusty book bg
- Text: Cream bold serif
- Face: Slow blink, profound
- Color accent: Sepia gold

### Pixel (chaotic)
- Background: Bright random color
- Text: Wonky angled bold
- Face: Wide eyes shock
- Color accent: Electric purple

### Tank (lazy)
- Background: Cozy beige
- Text: Bold deadpan
- Face: Tired half-closed eyes
- Color accent: Brown warm

## Quy trình

### 1. Đọc script
File: `youtube-pets/scripts/{slug}.md`

### 2. Extract key emotion + key 2-3 word hook
Vd: "DAY 47" / "I YIELD" / "NEW ENEMY" / "CHOSEN ONE"

### 3. Gen thumbnail base với Ideogram 3
**Tại sao Ideogram?** Best text accuracy in image gen.

```
Vertical 9:16 thumbnail design,
extreme close-up of {character description} with {extreme emotion},
direct eye contact with camera,
{background color contrast},
large bold text overlay "{2-3 WORDS}" in {color},
high contrast YouTube thumbnail style,
photorealistic pet face NOT cartoon,
1080x1920, 2K
```

### 4. Polish trong Photoshop/Canva (optional)
- Sharpen face
- Tăng contrast text
- Add drop shadow
- Test thumbnail tại 200x355 (Shorts size) — phải readable

### 5. A/B test
Upload 2 thumbnails khác nhau cho mỗi short → YouTube Studio A/B (sau 1k views).

## Output

Save vào `youtube-pets/prompts/{slug}/thumbnail.md`:

```markdown
# Thumbnail — {slug}

## Concept
- Hook text: {2-3 words}
- Emotion: {pet expression}
- Color: {palette}

## Prompt
{Ideogram 3 prompt}

## Files
- thumbnail-v1.png (primary)
- thumbnail-v2.png (A/B test)

## Notes
- {special considerations}
```

## Validation checklist

- [ ] 2-3 words text only?
- [ ] Pet face fill 60-70%?
- [ ] Eye contact camera?
- [ ] Extreme emotion?
- [ ] High contrast (mute test - hiểu được không cần xem video)?
- [ ] Readable tại 200x355 mini size?
- [ ] Match character signature style?
