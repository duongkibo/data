# 🎨 Channel Branding — Karma Caught Up

> Spec đầy đủ để gen avatar + banner + visual identity. Bồ chỉ cần copy prompt → Freepik.

---

## 📛 Channel Identity

### Channel handle
**`@KarmaCaughtUp`**

### Display name
**Karma Caught Up**

### Tagline
*"They thought they got away with it. The universe disagreed."*

### About description (paste vào YouTube)
```
Welcome to Karma Caught Up — where the universe collects debts you never had to demand.

This channel tells stories of betrayal and the karma that followed. Not stories of revenge — stories of walking away. Of choosing peace. And of watching, from a safe distance, as life caught up with the people who hurt us.

Every story is fictional, dramatized for entertainment. The lessons, however, are real.

🦋 New episode every Tuesday and Friday at 9pm EST.

🔔 Subscribe if you've ever chosen peace over revenge.

📩 For business inquiries: [your email]
```

---

## 🖼️ Channel Avatar (800×800 circle)

### Concept
Stylized hourglass with golden sand falling, dark moody background.

### Ideogram 3 prompt
```
Minimalist logo design of an elegant hourglass with golden sand falling through it,
the sand glowing warmly, dark navy blue background with subtle radial gradient,
the hourglass made of clear glass with thin gold rim,
clean modern logo aesthetic, centered composition,
soft glow around the hourglass,
flat 2D design but with depth, professional brand identity,
800x800 square format, transparent or solid dark background,
high contrast for small mobile display,
NO text, icon only, 2K
```

### Backup variants (try 3)
- V1: Hourglass with butterfly above (peace + time)
- V2: Hourglass with single drop falling (impact moment)
- V3: Hourglass shadow forming butterfly silhouette (transformation)

### File output
- `youtube-stories/assets/branding/avatar.png` (800×800)
- Test display tại 88×88 (mobile size) phải vẫn rõ

---

## 🎨 Channel Banner (2560×1440, safe zone 1546×423)

### Concept
Cinematic dark scene với hourglass + tagline + butterflies.

### Ideogram 3 prompt
```
YouTube channel banner design 2560x1440,
cinematic dark moody scene with deep navy blue and charcoal gradient background,
in the center: an elegant glass hourglass with golden sand falling, slight glow,
small golden butterflies fluttering around the hourglass,
large bold serif text "KARMA CAUGHT UP" in elegant gold letters above the hourglass,
small italic text below "They thought they got away with it. The universe disagreed."
in cream-white color,
cinematic noir lite aesthetic, dramatic lighting from above,
professional YouTube banner layout with safe zone respected (center 1546x423),
high quality typography, 2K
```

### Layout breakdown
```
┌─────────────────────────────────────────────┐
│         (background extends here)            │
│  ┌──────── SAFE ZONE 1546x423 ────────┐    │
│  │                                     │    │
│  │       KARMA CAUGHT UP               │    │
│  │       [hourglass icon]              │    │
│  │  "They thought they got away..."    │    │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
│         (background extends here)            │
└─────────────────────────────────────────────┘
```

### Critical safe zone
- **Mobile crop**: Center 1546×423 (~60% width)
- **Desktop visible**: Full 2560×423
- **TV display**: Full 2560×1440

→ Text + main element PHẢI nằm trong center 1546×423.

### File output
- `youtube-stories/assets/branding/banner.png` (2560×1440)

---

## 🎨 Visual identity system

### Color palette (locked)
```
Primary Dark Navy:    #0B1426
Secondary Charcoal:   #1F2937
Accent Gold:          #D4A547
Text Cream:           #F3E9D2
Highlight Burgundy:   #8B1E2F
```

### Typography
- **Headings**: Playfair Display (serif elegant)
- **Body/CTA**: Inter (sans-serif modern)
- **Display thumbnail**: Anton or Bebas Neue (impact)

### Mood board references
- Cinematic noir lite (think: True Detective Season 1 color grade)
- Vintage detective novel covers
- Old library / candlelit study aesthetic
- Gold + dark blue = wealth + mystery

---

## 🎵 MUSIC — CapCut Library (KHÔNG cần Suno)

### Tại sao CapCut thay Suno?
- ✅ Free (built-in)
- ✅ Copyright-safe trên YouTube
- ✅ Không cần subscription thêm
- ✅ Đủ chất lượng cinematic
- ✅ Có sẵn trong CapCut Pro

### Cách tìm music trong CapCut

1. CapCut → **Audio** tab → **Sounds** → **Music**
2. Search keywords:
   - `cinematic ambient`
   - `dark piano`
   - `noir suspense`
   - `slow drama`
   - `melancholy strings`
   - `mystery storytelling`
3. Filter:
   - Duration: ≥10 phút (full track)
   - Genre: Cinematic / Ambient / Drama
   - Mood: Dark / Suspenseful / Emotional

### Music intensity curve mỗi episode

Vì CapCut tracks thường 2-5 phút, cần **layer 3-4 tracks**:

```
0:00-2:30   Track A: Soft piano ambient (Beats 1-3 setup)
2:30-5:30   Track B: Strings building (Beats 4-5 betrayal+fall)
5:30-7:00   Track C: Hopeful piano lift (Beat 6 pivot)
7:00-10:30  Track D: Cinematic build to peak (Beats 7-8 karma+downfall)
10:30-12:00 Track A reprise: Soft piano (epilogue+CTA)
```

### Recommended CapCut music search terms
| Beat | Search | Mood |
|---|---|---|
| 1-3 Setup | "soft piano ambient melancholy" | Contemplative |
| 4 Betrayal | "dark cinematic strings dramatic" | Devastating |
| 5 Fall | "sad piano slow heavy" | Grief |
| 6 Pivot | "hopeful piano sunrise" | Lift |
| 7 Karma | "cinematic suspense building" | Anticipation |
| 8 Downfall | "dramatic orchestral peak" | Climax |
| Epilogue | "warm piano peaceful" | Resolution |
| CTA | "soft outro fade" | Closure |

### Volume mix
- Music tracks: **15-18%** (under voice)
- Voice: 100%
- SFX: 30-40%

### Alternative free sources (nếu CapCut thiếu)
- **YouTube Audio Library** (built-in YouTube Studio, free, commercial OK)
- **Pixabay Music** (free, no attribution)
- **Bensound** (free with attribution)
- **Epidemic Sound** ($15/tháng — premium quality nếu scale)

→ **Default workflow: CapCut library only**. Free + đủ dùng.

---

## 📁 Branding files cần gen

### Priority 1 (gen ngay)
- [ ] `avatar.png` (800×800) — channel profile
- [ ] `banner.png` (2560×1440) — channel banner
- [ ] `watermark.png` (150×150 transparent) — video corner brand

### Priority 2 (template tái dùng)
- [ ] `thumbnail-template.psd` — base template cho mọi episode
- [ ] `intro-card.png` (1920×1080) — 3s intro mỗi video
- [ ] `outro-card.png` (1920×1080) — subscribe end card

### Priority 3 (nice to have)
- [ ] `social-icons.png` — cross-post branding
- [ ] `playlist-thumbnails.png` — playlist organization

---

## 🚀 Setup workflow (1 lần, ~30 phút)

1. **Gen avatar** Ideogram 3 (5 phút)
2. **Gen banner** Ideogram 3 (5 phút)
3. **Polish trong Photoshop/Canva** (10 phút) — sharpen, crop, text overlay if needed
4. **Upload YouTube Studio** → Customization → Branding (5 phút)
5. **Save backup** local: `youtube-stories/assets/branding/`
