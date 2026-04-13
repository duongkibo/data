# story-visuals — Image + Video Prompts (Multi-model)

## Input
$ARGUMENTS (slug)

## Mục đích
Generate Freepik prompts cho 55 images + 40 Kling clips per 11:30 episode (hybrid animated + Ken Burns stills).

## Multi-model stack

### Images
| Use case | Model |
|---|---|
| Hero protagonist portraits | **Flux 2 Pro** |
| Cross-scene character consistency | **Nano Banana 2** (with persona ref) |
| Environment + B-roll | **Seedream 4.5** |
| Thumbnail with text | **Ideogram 3** |

### Videos
| Use case | Model |
|---|---|
| Hero animated scenes | **Kling 2.5 Turbo** |
| Talking close-ups (optional) | **Veo 3** |
| Atmospheric B-roll cheap | **Minimax Hailuo** |
| Slow zoom on stills | Kling 2.5 |

## Anti-CGI realism (xem REALISM-PROMPTS.md)
Mỗi prompt có:
- `imperfect realistic skin with visible pores`
- `documentary cinematography feel`
- `single source lighting natural`
- `not Pixar not stylized`
- `handheld subtle movement`
- `physics accurate`

## Quy trình

### 1. Đọc script + storyboard
- `youtube-stories/scripts/{slug}.md`
- `youtube-stories/VOICE-VISUAL-GUIDE.md`

### 2. Map shots theo 8 beats
| Beat | Shots | Time | Models |
|---|---|---|---|
| 1 Hook | 1-2 hero | 15s | Flux |
| 2 Intro | 3-4 lifestyle | 45s | Nano Banana 2 |
| 3 Crack | 4-5 ominous | 90s | Kling slow zoom |
| 4 Betrayal | 3 dramatic | 90s | Veo 3 + Kling |
| 5 Fall | 4-5 grief | 90s | Hailuo cheap |
| 6 Pivot | 5-6 sunrise | 90s | Kling + Flux |
| 7 Karma | 8-10 events | 150s | Mix all |
| 8 Downfall | 3-4 final | 60s | Flux + Kling |
| Epilogue | 4-5 happy | 60s | Flux warm |
| CTA | 1-2 brand | 30s | Ideogram |

**Total**: 40 animated clips (Kling) + 15 stills (Ken Burns)

### 3. Visual style guide (per `VOICE-VISUAL-GUIDE.md`)
- Color: Cool blue + deep gray + single warm accent
- Lighting: Low-key single source
- Composition: Wide isolation + tight close-ups

### 4. Character consistency
Gen 1 protagonist base image with Flux 2 Pro → save → use as Nano Banana 2 reference for all subsequent shots.

### 5. Save prompts

Output 2 files:

**`youtube-stories/prompts/{slug}/images.md`**:
```markdown
# Image Prompts — {slug}

## Step 0: Protagonist base (Flux 2 Pro)
{base prompt}

## Beat 1 Hook
### Frame 1
Model: Flux
Prompt: {full prompt}

## Beat 2 Intro
### Frame 2-5
Model: Nano Banana 2
References: protagonist-base.png
Prompts: {full prompts}

... (all 36 frames)
```

**`youtube-stories/prompts/{slug}/videos.md`**:
```markdown
# Video Prompts — {slug}

## Clip 1 — Hook (Kling 2.5, 5s)
Start image: frame-1.png
Prompt: {full anti-CGI prompt}

... (all 20 clips)
```

### 6. Cost estimate per episode
- Images: ~40 credits (~$1)
- Videos: ~65-125 credits (~$2-3)
- **Total**: ~$3-4

## Sau khi xong
User gen media trên Freepik → tiếp `/story-edit {slug}`.
