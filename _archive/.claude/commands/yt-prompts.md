# yt-prompts — Image + Video Prompts cho YouTube Pet Short

## Input
$ARGUMENTS (slug, vd: "mittens-vacuum-enemy")

## Mục đích
Generate Freepik prompts cho 16 shots/short — image start frames + Kling/Veo 3 video prompts.

## Multi-model stack

### Images (Freepik)
| Use case | Model |
|---|---|
| Pet portrait base | **Flux 1.1 Pro Ultra** |
| Cross-episode consistency | **Nano Banana 2** (ref persona) |
| Thumbnail with text | **Ideogram 3** |

### Videos (Freepik)
| Use case | Model |
|---|---|
| Pet talking (lip sync) | **Veo 3** ⭐ |
| Pet action/movement | **Kling 2.5 Turbo** |
| Environment B-roll cheap | **Minimax Hailuo** |

## Quy trình

### 1. Đọc script
File: `youtube-pets/scripts/{slug}.md`

### 2. Identify 14-16 shots
Theo retention playbook shot map:
- Shot 1: Hook close-up
- Shot 2: Wide establishing
- Shot 3-9: Action beats
- Shot 10: Pre-twist silent cut
- Shot 11: Twist reveal
- Shot 12: Reaction
- Shot 13: Payoff hero
- Shot 14: Settle
- Shot 15: CTA direct camera
- Shot 16: Loop-back same as shot 1

### 3. Map shot → model
- Talking shots (4-5 shots) → Veo 3
- Action shots (8-9 shots) → Kling 2.5
- B-roll shots (2-3) → Minimax Hailuo

### 4. Anti-CGI prompts (xem `REALISM-PROMPTS.md`)

**Pet realism keywords**:
- `realistic fur texture with visible individual strands`
- `natural pet anatomy not stylized`
- `imperfect real not Pixar style`
- `documentary nature footage feel`
- `subtle natural light shadow`
- `physics accurate fur movement`

**Avoid**:
- `cute cartoon`
- `anime style`
- `Pixar perfect`
- `glossy CGI`
- `flawless render`

### 5. Character base reference
Mỗi character có 1 base image lock (gen 1 lần, reuse forever):
- `youtube-pets/assets/characters/mittens-base.png`
- `youtube-pets/assets/characters/biscuit-base.png`
- `youtube-pets/assets/characters/whiskers-base.png`
- `youtube-pets/assets/characters/pixel-base.png`
- `youtube-pets/assets/characters/tank-base.png`

Mỗi gen mới upload base làm Character Reference (Nano Banana 2).

## Output

Save 2 files:

### 1) `youtube-pets/prompts/{slug}/images.md`
```markdown
# Image Prompts — {Slug}

## Shot 1 — Hook close-up
Model: Flux 1.1 Pro Ultra
Refs: {character}-base.png

Prompt:
```
Extreme close-up photograph of {character description},
{specific expression for hook moment},
{lighting per scenario},
realistic fur texture with visible individual strands,
imperfect real not Pixar style,
shot on Canon 100mm macro f/2.8,
documentary nature feel, 9:16, 2K
```

## Shot 2-16 ...
```

### 2) `youtube-pets/prompts/{slug}/videos.md`
```markdown
# Video Prompts — {Slug}

## Clip 1 — Hook (Veo 3, 2s)
Start image: shot-1.png
Audio cue: {sound trigger}

Prompt:
```
The {character} from reference {does specific micro-action},
natural blink and breathing visible,
imperfect realistic fur,
handheld documentary feel,
single window light asymmetric shadow,
not stylized not Pixar,
then {motion endpoint}. 2s
```

## Clip 2-N ...
```

## Sau khi xong
Gợi ý `/yt-voice {slug}` để gen voice script ElevenLabs.
