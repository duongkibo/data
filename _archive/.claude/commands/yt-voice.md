# yt-voice — ElevenLabs Voice Script per Character

## Input
$ARGUMENTS (slug)

## Mục đích
Generate voice script với character voice locked + emotion tags chuẩn ElevenLabs v3.

## Character voice lock (KHÔNG đổi)

| Character | Voice ElevenLabs | Style | Speed |
|---|---|---|---|
| **Mittens** | Charlotte (BR female mature) | Sardonic | 1.0x |
| **Biscuit** | Adam (warm deep male) | Enthusiastic | 1.05x |
| **Whiskers** | Brian (older wise male) | Slow contemplative | 0.9x |
| **Pixel** | Emily (high energy female) | Hyper fast | 1.15x |
| **Tank** | Antoni (deep bored male) | Deadpan slow | 0.95x |

## Quy trình

### 1. Đọc script
File: `youtube-pets/scripts/{slug}.md`

### 2. Pick voice từ character
Theo bảng trên.

### 3. Add emotion tags

**Per character preferred tags**:

**Mittens**:
- `[sardonic]` `[dramatic]` `[whispers menacing]`
- `[pause 1s]` for dramatic effect
- Avoid `[excited]` (out of character)

**Biscuit**:
- `[excited]` `[warm enthusiastic]` `[gasp]` `[laughs]`
- Short pauses
- Voice up at end of sentences

**Whiskers**:
- `[contemplative]` `[slow]` `[wise]`
- LONG pauses `[pause 2s]`
- Slower delivery

**Pixel**:
- `[hyper]` `[breathless]` `[shocked]`
- Almost no pauses
- Fast everything

**Tank**:
- `[deadpan]` `[bored]` `[tired]`
- Long bored pauses `[pause 1.5s]`
- Minimal modulation

### 4. Settings tip
- Style: **Expressive** (always)
- Speed: per character
- Stability: 50% (let voice vary natural)
- Similarity boost: 75% (keep character)

### 5. Output

Save vào `youtube-pets/prompts/{slug}/voice.md`:

```markdown
# Voice Script — {slug}

## Setup
- Voice: {character voice}
- Speed: {x}
- Style: Expressive
- Settings: Stability 50% / Similarity 75%

## Script (copy-paste ElevenLabs)

\`\`\`
{full script with emotion tags + pauses}
\`\`\`

**Total chars**: {N}

## Notes
- {special pronunciation hints}
- {emphasis words to emphasize}
```

## Tips troubleshoot
- Voice không in-character → check Stability lower (40%)
- Voice quá flat → check Style = Expressive
- Voice quá fast/slow → adjust speed
- Pronunciation sai brand/name → spell phonetically
- Audio glitch → regenerate (chars limit may cause)

## Sau khi xong
Đưa MP3 vào CapCut → tiếp `/yt-edit {slug}`.
