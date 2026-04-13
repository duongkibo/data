# yt-script — YouTube Shorts Pet Script (Retention-Engineered)

## Input
$ARGUMENTS (slug từ idea bank, vd: "mittens-vacuum-enemy")

## Mục đích
Viết script 35-55s với retention engineering chuẩn từ `RETENTION-PLAYBOOK.md`.

## 🎯 Triết lý
- Hook 0-1.5s pattern interrupt
- Open loop 2-5s
- Cut every 2-3s max (visual variety)
- Cliffhanger 60% mark
- Subscribe hook character-specific outro
- Loop-back ending (last frame match first)

## Quy trình

### 1. Đọc context
- Idea từ `youtube-pets/_ideas/backlog.md`
- Character bible từ `CONTENT-SYSTEM.md`
- Retention tactics từ `RETENTION-PLAYBOOK.md`

### 2. Apply 50s structure (14 beats)

```
0-1.5s   PATTERN INTERRUPT  (visual + audio + text flash)
1.5-5s   OPEN LOOP          (mysterious statement)
5-12s    SETUP              (situation, character, conflict)
12-22s   ESCALATION         (3-4 beats building)
22-30s   PRE-TWIST PAUSE    (music swell start)
30-38s   TWIST              (reveal, subvert)
38-45s   PAYOFF             (resolution, callback)
45-48s   CALLBACK           (hook line referenced)
48-50s   SUBSCRIBE HOOK     (character signature)
```

### 3. Write English voiceover
- 80-100 words target
- Character voice locked (per CONTENT-SYSTEM.md)
- Speech fillers natural (...wait, ohh, hmm)
- Pause markers `[pause 0.5s]`
- Emotion modulation marked

### 4. Write English burned subs
- 3-5 words per line
- Bold key words ALL CAPS
- Sync với voice timing

### 5. Write Vietnamese CC
- Direct translation
- Maintain character voice tone

### 6. Production notes
- Veo 3 vs Kling 2.5 cho mỗi clip
- Music BPM + mood
- SFX cues
- Critical visual props

## Output

Save vào `youtube-pets/scripts/{N}-{character}-{title}.md`

Format theo `youtube-pets/scripts/_TEMPLATE.md`.

## Validation pre-publish
- [ ] Hook 1.5s đầu pattern interrupt
- [ ] Open loop 2-5s không reveal
- [ ] 14 beats density
- [ ] Twist tại 60% mark
- [ ] Subscribe hook character-specific
- [ ] 80-100 từ tổng
- [ ] Match character bible voice

## Sau khi xong
Gợi ý `/yt-prompts {slug}` để gen image + video prompts.
