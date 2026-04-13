# story-voice — ElevenLabs Voice Generation (Charlotte BR mature)

## Input
$ARGUMENTS (slug)

## Setup ElevenLabs
- **Voice**: **Charlotte** (BR female mature)
- **Style**: Expressive
- **Speed**: **0.92x** (slow storytelling)
- **Stability**: 55%
- **Similarity**: 80%

## Backup voices
- Lily (BR female alternative)
- Sarah (BR female slightly younger)
- Brian (deep male — male POV episodes)

## Quy trình

### 1. Đọc script
File: `youtube-stories/scripts/{slug}.md`

### 2. Verify emotion tags present
Mỗi beat phải có tag (xem STORY-FORMULA emotion map).

### 3. Generate voice
- Paste full script vào ElevenLabs
- Settings như trên
- Generate full track 1 lần (consistency)
- Total chars ~2000-2500 (1 episode)

### 4. Quality check
- [ ] Voice character consistent throughout
- [ ] Pace ~150wpm slow storytelling
- [ ] Emotion modulation visible
- [ ] No glitch/cut-off
- [ ] Pronunciation correct ("Sarah", "Mark", etc.)

### 5. Common fixes
- Voice drift → regenerate with stability +5%
- Too fast → speed 0.88x
- Pronunciation issue → spell phonetically
- Monotone → check Style = Expressive

### 6. Export
- Format: MP3 256kbps
- Save: `youtube-stories/prompts/{slug}/voice.mp3`

### 7. Optional: Generate variants
- 1 final cut for video
- 1 audio-only version cho podcast spinoff (future)

## Output
Save vào `youtube-stories/prompts/{slug}/voice.md`:

```markdown
# Voice — {slug}

## Setup
- Voice: Charlotte
- Speed: 0.92x
- Style: Expressive

## Generated file
- voice.mp3 (~2000 chars / ~12 min)

## Notes
- {special pronunciation hints}
- {emotion modulation observations}
```

## Cost
- ~$0.20 per episode (ElevenLabs Creator plan)

## Sau khi xong
Gợi ý `/story-visuals {slug}` để gen image + video.
