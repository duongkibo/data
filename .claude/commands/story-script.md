# story-script — Long-form Story Script (10-12 min, 8-beat)

## Input
$ARGUMENTS (slug từ ideation backlog)

## Mục đích
Write full English script 10-12 phút theo 8-beat formula trong `STORY-FORMULA.md`.

## Quy trình

### 1. Đọc context
- `youtube-stories/_ideas/backlog.md` — story sketch
- `youtube-stories/STORY-FORMULA.md` — 8-beat structure
- `youtube-stories/CHANNEL-STRATEGY.md` — voice positioning

### 2. Apply 8-beat structure

```
Beat 1 HOOK         0:00-0:15   25-40 words
Beat 2 INTRO        0:15-1:00   100-150 words
Beat 3 CRACK        1:00-2:30   200-280 words
Beat 4 BETRAYAL     2:30-4:00   200-280 words ⭐ pain peak
Beat 5 FALL         4:00-5:30   180-240 words
Beat 6 PIVOT        5:30-7:00   250-320 words ⭐ KEY twist
Beat 7 KARMA        7:00-9:30   350-450 words
Beat 8 DOWNFALL     9:30-10:30  150-200 words
Epilogue            10:30-11:30 130-180 words
CTA                 11:30-12:00 80-100 words
TOTAL               1665-2240 words
```

### 3. Writing rules (từ STORY-FORMULA)

**DO**:
- Specific sensory details
- Real time markers
- Show don't tell
- Vary sentence length
- 1 surprising detail per beat
- Pause markers `[pause 1s]` between thoughts

**DON'T**:
- Real names/locations
- Graphic descriptions
- Active revenge (PASSIVE only)
- Long monologues
- Wrap up too neatly

### 4. Add ElevenLabs emotion tags
- Beat 1: `[knowing]`
- Beat 2: `[warm]`
- Beat 3: `[foreboding]`
- Beat 4: `[whispers]`
- Beat 5: `[heavy]`
- Beat 6: `[hopeful]`
- Beat 7: `[satisfied]`
- Beat 8: `[final]`
- Epilogue: `[warm]`
- CTA: `[inviting]`

### 5. Compliance check
- [ ] No real names
- [ ] No real places
- [ ] Disclaimer line in script
- [ ] No graphic content
- [ ] No active revenge by protagonist
- [ ] PASSIVE karma path

### 6. Quality validation (12/12)
- [ ] 8 beats present
- [ ] Hook ≤40 words
- [ ] Beat 4 betrayal at 25%
- [ ] Beat 6 pivot at 50% (passive choice)
- [ ] Beat 7 karma at 65%
- [ ] No active revenge
- [ ] Names neutral
- [ ] Pause markers added
- [ ] Word count 1665-2240
- [ ] CTA subscribe present
- [ ] Epilogue peaceful
- [ ] Disclaimer fictional

## Output
Save vào `youtube-stories/scripts/{slug}.md`:

```markdown
# Episode {N} — {Title}

## Meta
- Slug:
- Sub-niche:
- Word count:
- Estimated duration:

## English Script (full)
{full 1665-2240 words với emotion tags + pause markers}

## Vietnamese summary (cho CC track)
{300 word VN summary)

## Production notes
{voice tips, visual hints, music suggestion)
```

## Sau khi xong
Gợi ý `/story-voice {slug}` → `/story-visuals {slug}` parallel.
