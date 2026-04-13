# yt-edit — CapCut Edit Workflow cho YouTube Shorts

## Input
$ARGUMENTS (slug)

## Mục đích
Assembly clips + voice + music + animated subs trong CapCut.

## Quy trình 30 phút

### 1. Setup project
- New Project 9:16
- Resolution 1080×1920 (1440×2560 ideal)
- 30fps

### 2. Import assets
- 5-6 video clips từ Freepik (Veo 3 + Kling 2.5)
- voice.mp3 từ ElevenLabs
- music.mp3 từ Suno hoặc YT Audio Library
- thumbnail.png (cho upload)

### 3. Assembly timeline (5 phút)
**Track layout**:
```
T1 Video    [shot1][shot2][shot3]...[shot16]
T2 Voice    ████████████████████████████████
T3 Music    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
T4 SFX      •     •     ⚡    💧    ✨
T5 Subs     [sub1][sub2][sub3]...
T6 Effects  (zoom in, glitch, etc)
```

### 4. Cut every 2-3s (10 phút)
Áp dụng retention shot map từ `RETENTION-PLAYBOOK.md`:
- 14-16 cuts trong 50s
- Mỗi cut new angle
- Big cuts at twist (1s shot then 0.5s reaction)

### 5. Animated subs burned-in (10 phút)
**Settings**:
- Font: Poppins ExtraBold or Anton
- Size: 80-100pt
- Color: Yellow #FFED00 with black stroke 5px
- Position: Bottom 25%
- 3-5 words per line
- Animation: Pop-in scale 0%→110%→100%
- KEY WORDS: highlight in different color (red/orange)
- Sync: word-by-word with voice (CapCut auto-caption + manual fix)

### 6. Music + SFX (3 phút)
- Music vol: 18-25% (auto duck)
- Music BPM match scene
- SFX layers:
  - Pop 0s (text appear)
  - Whoosh at cuts
  - Music swell at twist (32-38s mark)
  - Ding at CTA

### 7. Final polish (2 phút)
- **Color grade**: Slight contrast +5, saturation +5
- **Pet face zoom**: keyframe scale 100→110% during twist
- **Vignette**: 10% darken edges
- **Filter**: Natural film grain 5%

### 8. Export
- 1080×1920 (or 1440×2560 if Premium)
- 60fps if available
- H.264 high bitrate
- ⚠️ **OFF watermark**

## Output spec
```
Resolution : 1080×1920 minimum
Framerate  : 30fps min, 60fps ideal
Format     : MP4 H.264
Bitrate    : Higher
Audio      : AAC 256kbps
Watermark  : OFF (mandatory)
```

## Validation checklist
- [ ] 14-16 cuts in 50s
- [ ] Subs sync với voice
- [ ] Music không át voice
- [ ] Hook 1.5s đầu strong
- [ ] Twist tại 30s mark
- [ ] CTA tại 48-50s
- [ ] Loop-back ending
- [ ] No watermark
- [ ] Mute test pass (xem không tiếng vẫn hiểu)

## Sau khi xong
Gợi ý `/yt-publish {slug}` để upload + cross-post.
