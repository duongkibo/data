# 🛠️ Content System — Daily Production Workflow

> **Mục tiêu**: 1 short/day, ~30 phút production time với system tối ưu

---

## 📋 Daily workflow (30-45 phút)

### Phase 1: Idea + Script (10 phút)
1. Pick character từ rotation (Mittens / Biscuit / Whiskers / Pixel / Tank)
2. Pick scenario từ swipe file `assets/scenario-bank.md`
3. Write 35-55s script theo template `scripts/_TEMPLATE.md`
4. Save vào `scripts/{N}-{character}-{title}.md`

### Phase 2: Image generation (10 phút)
1. Open Freepik → Flux 1.1 Pro Ultra
2. Gen 3-4 frames key:
   - F1: Hook frame (1.5s opening)
   - F2: Setup frame
   - F3: Climax/twist frame
   - F4: Payoff frame
3. Save `prompts/{slug}/images/`

### Phase 3: Video generation (10 phút)
1. Veo 3 cho talking shots (mặt pet với lip sync) — 1-2 clips
2. Kling 2.5 cho action/environment — 2-3 clips
3. Total ~5-6 clips per short
4. Save `prompts/{slug}/videos/`

### Phase 4: Voice generation (5 phút)
1. ElevenLabs → character voice (locked per character)
2. Paste full inner monologue
3. Download MP3
4. Save `prompts/{slug}/voice.mp3`

### Phase 5: Edit + post (10-15 phút)
1. CapCut import all assets
2. Beat sync to music
3. Burn English subs (auto-caption + manual fix)
4. Add hook visual + outro
5. Export 1080×1920
6. Upload YouTube Studio scheduled

**Total: ~45 phút per short**

### Batch optimization
- **Sunday batch session**: gen 7 shorts trong 3-4h → schedule cả tuần
- Save 2h/ngày × 7 = 14h freed up

---

## 🎭 Character Bibles

### 1. Mittens — The Grumpy British Cat
```
Breed: British Shorthair
Color: Slate gray with white chest
Eyes: Bright copper
Age: Adult cat (mature)
Personality: Sardonic, judgmental, intellectual, dramatic
Voice: ElevenLabs Charlotte (British female, mature)
Catchphrases:
  - "Day [N] in this prison they call home..."
  - "The audacity of this human..."
  - "I shall remember this betrayal."
Settings: Modern apartment, often on keyboard/papers
```

**Image prompt template**:
```
Photorealistic British Shorthair cat with slate gray fur and white chest,
bright copper eyes, judgmental expression sitting on a wooden desk,
modern apartment background softly out of focus,
soft window light creating natural shadow,
imperfect real fur with visible texture, not stylized,
shot on Canon 50mm f/1.8, photorealistic, 9:16, 2K
```

---

### 2. Biscuit — The Optimistic Golden Retriever
```
Breed: Golden Retriever
Color: Light golden cream
Eyes: Warm brown
Age: 2-3 years (young adult)
Personality: Naive, enthusiastic, loyal, easily excited
Voice: ElevenLabs Adam (deep warm male, friendly)
Catchphrases:
  - "OH MY GOD! IS THAT A LEAF?!"
  - "Best day EVER!"
  - "I love you so much I'm literally going to vibrate."
Settings: Backyard, park, beach
```

**Image prompt template**:
```
Photorealistic golden retriever with light cream fur,
warm brown eyes, big enthusiastic smile, tongue out,
sitting in a sunny backyard, natural sunlight,
imperfect real fur texture with subtle imperfections,
shot on Canon 85mm f/1.4, documentary feel, 9:16, 2K
```

---

### 3. Whiskers — The Philosophical Maine Coon
```
Breed: Maine Coon
Color: Brown tabby with cream
Eyes: Green
Age: Senior (8+ years)
Personality: Wise, slow-paced, profound, occasionally cryptic
Voice: ElevenLabs Brian (mature deep male, thoughtful)
Catchphrases:
  - "I have been here before. Many times."
  - "The string... it speaks to me."
  - "Time is a flat circle, and I have napped on it."
Settings: Bookshelf, window seat, fireplace
```

---

### 4. Pixel — The Chaotic Kitten
```
Breed: Domestic shorthair tabby
Color: Black with white paws
Eyes: Yellow
Age: 3-6 months (kitten)
Personality: Hyper, ADHD, dramatic, easily distracted
Voice: ElevenLabs Emily (high energy female, fast)
Catchphrases:
  - "WAIT WHAT WAS THAT—"
  - "I'm gonna do a thing! A BIG thing!"
  - "Why is the floor moving—oh wait that's me."
Settings: Living room, knocked-over plants, chaos
```

---

### 5. Tank — The Lazy Pug
```
Breed: Pug
Color: Fawn with black mask
Eyes: Big and tired
Age: Adult (5+ years)
Personality: Cynical, food-obsessed, lazy, deadpan
Voice: ElevenLabs Antoni (deep bored male)
Catchphrases:
  - "Is it food yet."
  - "I require minimal effort. And snacks."
  - "I have been awake for 12 minutes. Time to nap."
Settings: Couch, dog bed, food bowl
```

---

## 📂 Folder structure

```
youtube-pets/
├── CHANNEL-STRATEGY.md
├── CONTENT-SYSTEM.md
├── scripts/
│   ├── _TEMPLATE.md
│   ├── 01-mittens-monday-blues.md
│   ├── 02-biscuit-first-snow.md
│   ├── 03-whiskers-meaning-of-life.md
│   ├── 04-pixel-amazon-box.md
│   └── 05-tank-vet-visit.md
├── prompts/
│   ├── 01-mittens-monday-blues/
│   │   ├── images.md
│   │   ├── videos.md
│   │   └── voice.md
│   └── ...
├── assets/
│   ├── character-bibles.md (in this file)
│   ├── scenario-bank.md
│   ├── voice-samples/
│   └── thumbnail-templates/
└── analytics/
    └── weekly-reviews/
```

---

## 🎯 Episode rotation strategy

### Week 1 launch (5 pilot episodes)
- T2: Mittens — Monday Blues
- T3: Biscuit — First Snow
- T4: Whiskers — Meaning of Life
- T5: Pixel — Amazon Box Discovery
- T6: Tank — Vet Visit

### Week 2+ rotation
1 character/day cycling. Mỗi character có 6 episodes/tháng → fan có expectation pattern.

### Series arcs (build engagement)
- **"Day [N] in this prison"** — Mittens series count up
- **"Biscuit's first time..."** — Biscuit discovery series
- **"Whiskers' deep thoughts"** — Whiskers wisdom series
- **"Pixel destroys..."** — Pixel chaos series
- **"Tank's food log"** — Tank food obsession series

---

## ✅ Quality checklist mỗi short

Trước khi post phải pass 8/10:
- [ ] Hook 1.5s đầu: visual + audio pattern interrupt
- [ ] Duration 35-55s
- [ ] Character voice consistent với bible
- [ ] English subs burned-in (large bold)
- [ ] Music bed not louder than voice
- [ ] Twist/punchline in last 1/3
- [ ] CTA "subscribe for more" cuối
- [ ] Vertical 9:16 1080×1920 minimum
- [ ] Thumbnail eye-catching pet expression
- [ ] No copyrighted music

---

## 📊 Analytics tracking

### Weekly review (Saturday 30 phút)
1. Export YouTube Studio analytics CSV
2. Tag mỗi short:
   - Character
   - Scenario type
   - Hook style
   - Views, retention curve, subs gained
3. Identify winners/losers
4. Update `assets/scenario-bank.md` swipe file

### Metrics priority
1. **Avg view duration** (target ≥35s on 50s short = 70%)
2. **Subs gained per video**
3. **Likes/views ratio** (target 5%+)
4. **Comment count**
5. **Shares**

---

## 🚀 Launch plan (Week 1)

### Day 0 (Sunday prep)
- [ ] Setup channel @InsideThePetMind
- [ ] Channel banner + avatar (Flux 1.1 Pro)
- [ ] Channel about + description
- [ ] First 5 scripts ready (5 pilot)
- [ ] First 5 character images locked

### Day 1-5 (T2-T6 launch week)
- [ ] 1 short/day each character
- [ ] Comment reply 60 phút first hour
- [ ] Cross-promote on Instagram, TikTok if applicable

### Day 6-7 (review + plan week 2)
- [ ] Analytics check
- [ ] Identify favorite character
- [ ] Plan week 2 scenarios

---

## 💰 Budget & cost

### Monthly cost
- Freepik Premium+: $30
- ElevenLabs Creator: $22
- Music (Suno or Audio Library): $0-10
- **Total: $52-62/month**

### Per short
- Images: ~10 credits Freepik = $0.20
- Videos (3-4 clips): ~30 credits = $0.60
- Voice: ~500 chars = $0.10
- **Per short: ~$0.90**
- 30 shorts/month: ~$27 + subscription overhead

### ROI break-even
- Need ~$60-90/month revenue to break-even
- YPP unlocks at ~3M Shorts views = ~$50-150 revenue
- Khả thi tháng 4-6 sau launch
