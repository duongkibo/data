# yt-title — Title + Description + Tags SEO

## Input
$ARGUMENTS (slug)

## Mục đích
Optimize title cho YouTube search + suggested + browse traffic.

## 🎯 Tại sao quan trọng
YouTube là search engine #2 sau Google. Title SEO = trafic free trong tháng/năm.

## Title Formula (60 chars max)

### Pattern 1: Curiosity Gap
> "[Action] + [Surprising element] + [Emoji]"
- "I Have Solved the Universe (a cat's perspective) 🐱✨"
- "I Have Discovered God's Dandruff ❄️🐶"

### Pattern 2: POV / Inner Monologue
> "POV: [Character situation]"
- "POV: My Cat Plans Her Morning Attack 😼"
- "POV: Dog Discovers Snow For First Time 🥹"

### Pattern 3: Confession / Statement
> "[Strong personal statement]"
- "I Was Promised a Walk (vet betrayal) 😔🐶"
- "Day 47 in the Human Prison 😾"

### Pattern 4: Question
> "What Does My [Pet] Really Think About...?"
- "What Does My Cat Think About Mondays?"

### Pattern 5: Number list
> "[N] Reasons My [Pet] [Action]"
- "5 Reasons My Pug Hates the Vet"

## Description Template

```
{1-2 sentence story setup}

🐾 {Character} appears in a new episode every {day}
🔔 Subscribe for daily inner monologues from 5 unique pets

📺 Meet the cast:
- Mittens 🐱 — The grumpy British cat
- Biscuit 🐶 — The optimistic golden
- Whiskers 🐱 — The philosophical Maine Coon
- Pixel 🐱 — The chaotic kitten
- Tank 🐶 — The lazy pug

#cat #cathumor #catshorts #ai #petlovers #shorts #funnycats
```

## Tags Strategy (SEO)

### Primary (high volume)
- cat, dog, pets, cute pets, funny pets

### Niche (mid volume)
- cat humor, dog humor, pet shorts, ai pet videos

### Long-tail (low competition)
- cat inner monologue, ai cat stories, pet storytelling

### Branded
- inside the pet mind, mittens cat, biscuit dog

**Total**: 8-12 tags max (more dilutes signal)

## Hashtags (in title or description)

### In title (max 2)
- #cat OR #dog
- #shorts (mandatory)

### In description (5-10)
- #catshorts
- #aianimation
- #petlovers
- #catlife
- {character-specific hashtag}

## Quy trình

### 1. Đọc script + ý chính
### 2. Generate 5 title candidates theo 5 patterns
### 3. Test mentally: "Would I click this?"
### 4. Pick best 2 → A/B test
### 5. Write description với template
### 6. Pick 8-12 tags

## Output

Save vào `youtube-pets/prompts/{slug}/title.md`:

```markdown
# Title + SEO — {slug}

## Title (primary)
{60-char title with emoji}

## Title (A/B test variant)
{Alternative}

## Description
{Full description}

## Tags
tag1, tag2, tag3, ...

## Pinned comment
{First comment to pin for engagement boost}

## Reply template
{Quick replies cho comments common}
```

## Validation
- [ ] Title 50-60 chars?
- [ ] Có 1 power word (POV/Discover/Solved/Betrayed/etc)?
- [ ] Có emoji 1-2?
- [ ] Có #shorts trong title hoặc description?
- [ ] Description có hook 1 sentence + character intro?
- [ ] 8-12 tags relevant?
- [ ] Curiosity gap test: title không reveal twist?
