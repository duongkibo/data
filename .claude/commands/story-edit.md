# story-edit — CapCut Long-form Edit (10-12 min)

## Input
$ARGUMENTS (slug)

## Mục đích
Assembly voice + visuals + music + subs trong CapCut. Long-form 10-12 min cinematic.

## Setup project
- New Project 16:9
- Resolution 1920×1080 (4K nếu Pro)
- Frame rate 24fps (cinematic)
- Project name: `karma-caught-up-{slug}`

## Track layout
```
T1 Video    [hero shots — 36 frames + 20 video clips]
T2 B-roll   [Hailuo atmospheric overlay 30% opacity]
T3 Voice    [Charlotte narration full track]
T4 Music    [Suno bed 18% with intensity curve]
T5 SFX      [moments — phone, heart, bells, etc.]
T6 Subs     [English burned-in optional]
T7 Effects  [letterbox, color grade, vignette, grain]
```

## Cut pacing

| Beat | Time | Cut frequency |
|---|---|---|
| 1 Hook | 0:00-0:15 | 1-2 cuts (slow) |
| 2 Intro | 0:15-1:00 | 5-7s/cut |
| 3 Crack | 1:00-2:30 | 5-8s/cut (ominous) |
| 4 Betrayal | 2:30-4:00 | 4-6s/cut |
| 5 Fall | 4:00-5:30 | 6-8s/cut (slow grief) |
| 6 Pivot | 5:30-7:00 | 5-7s/cut |
| 7 Karma | 7:00-9:30 | **3-5s/cut (build energy)** |
| 8 Downfall | 9:30-10:30 | **2-4s/cut (climax)** |
| Epilogue | 10:30-11:30 | 5-7s/cut (settle) |
| CTA | 11:30-12:00 | 2-3 cuts |

## Audio mix

### Voice (Charlotte)
- Track 3: 100%
- Auto duck music when speaking

### Music (Suno cinematic)
- Track 4: 18% under voice
- Intensity curve theo VOICE-VISUAL-GUIDE
- Music swell at Beat 4 (betrayal)
- Music lift at Beat 6 (pivot)
- Music peak at Beat 8 (downfall)
- Music soft at Epilogue

### SFX layers
| Time | SFX | Vol | Purpose |
|---|---|---|---|
| Beat 4 | Phone notification | 50% | Discovery |
| Beat 4-5 | Heartbeat slow | 30% | Tension |
| Beat 6 | Door close | 40% | Walk away |
| Beat 6 | Sunrise birds | 25% | Hope |
| Beat 7 | Wedding bells distant | 35% | Karma irony |
| Beat 8 | Email notification | 40% | Final |

## Color grade
- Cool blue tint overall (LUT)
- Warm pop only at Epilogue (warm LUT swap)
- Vignette 15% throughout
- Letterbox bars subtle (cinematic feel)
- Film grain 5%

## Subtitle (optional burned-in)
- Font: Inter or Roboto Bold
- Size: 50pt
- Color: White with black stroke 4px
- Position: Bottom 12%
- Animation: Fade in (not pop — keep cinematic)
- Sync word-by-word with voice

## Visual effects per beat
- **Beat 1 Hook**: Slow zoom on hero shot + title overlay
- **Beat 4 Betrayal**: Slight desaturation when reveal hits
- **Beat 6 Pivot**: Color grade lift slowly (cool → warm gradient)
- **Beat 7 Karma**: Faster cuts + slight contrast boost
- **Beat 8 Downfall**: Slow zoom out (final shot)
- **Epilogue**: Warm color grade fully

## Export

### Settings
- Resolution: 1920×1080 (1440×2560 if 4K)
- Frame rate: 24fps
- Bitrate: Higher
- Format: MP4 H.264
- Audio: AAC 256kbps
- ⚠️ **Watermark OFF**

## Pre-export checklist
- [ ] All 8 beats visible in cuts
- [ ] Voice + music balanced
- [ ] No dead air
- [ ] Color grade unified
- [ ] No real names in any subtitle/text
- [ ] Disclaimer overlay at end
- [ ] CTA subscribe at 11:30
- [ ] Total length 10-12 min
- [ ] Mute test pass
- [ ] No watermark

## Time estimate
~3-4 hours per episode (long-form heavier than Shorts)

## Sau khi xong
File: `youtube-stories/prompts/{slug}/final.mp4`
Gợi ý `/story-thumbnail {slug}` → `/story-publish {slug}`
