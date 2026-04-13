# EPISODE TK03 — The Public Confession

> **Series**: True Karma — Real Cases
> **Script**: `../../scripts/13-the-public-confession.md`
> **Workflow**: Follow numbered order. Each file is self-contained with copy-paste prompts.

---

## Production overview

| # | File | Content | Est. time |
|---|---|---|---|
| 03 | [`03-images.md`](./03-images.md) | 40 scene images + 15 Ken Burns stills | 90 min |
| 04 | [`04-videos.md`](./04-videos.md) | 40 clips Kling 2.5 (10s each) | 120 min |
| 05 | [`05-voice.md`](./05-voice.md) | ElevenLabs Charlotte 3 chunks | 20 min |
| 06 | [`06-thumbnail.md`](./06-thumbnail.md) | 3 variants A/B test | 15 min |
| 07 | [`07-title-description.md`](./07-title-description.md) | Title + description + tags | 5 min |

**Total**: ~4-5 hours for 1 episode, 11:30 final.

---

## Output paths

```
media/
├── images/       (F01.png -> F40.png + S01.png -> S15.png)
├── videos/       (C01.mp4 -> C40.mp4)
├── voice/        (chunk1.mp3, chunk2.mp3, chunk3.mp3)
└── thumbnails/   (v1.png, v2.png, v3.png)
```

---

## Characters (this episode)

| Character | Role | Signature colors | Notes |
|---|---|---|---|
| **Mara** | Protagonist, 44 | Warm burgundy + cream | Former tour manager, cancer survivor |
| **Jax** | Antagonist, 48 | Black leather + dark gray | Rock frontman, Ironside band |
| **Jade** | Other woman, 29 | Deep purple + gold | Backup singer |
| **Helen** | Divorce attorney, 61 | Navy + silver | Celebrity divorce specialist |
| **Lucas** | Epilogue partner, 40 | Sage green + brown | Sound engineer, no Instagram |

---

## Voxel character refs (gen before images)

### Mara (protagonist)
```
Voxel art character of a woman around 44 years old in cube-style design,
small geometric body proportional NOT raw Minecraft,
dark auburn rounded voxel hair shoulder-length with subtle wave,
simple cube head with 2 small dark dot eyes and gentle expression line,
wearing warm burgundy voxel blouse and cream cardigan,
burgundy and cream signature colors,
strong graceful confident posture,
soft smooth voxel shading with subtle edge highlights,
Crossy Road meets Astroneer character style,
NOT raw Minecraft NOT realistic NOT cartoon,
clean premium voxel art aesthetic
```

### Jax (antagonist)
```
Voxel art male character cube-style design,
slightly taller geometric body with rockstar posture,
dark wavy voxel hair past ears styled messy,
simple cube head with 2 dot eyes and confident smirk line,
wearing black voxel leather jacket over dark gray t-shirt,
black and charcoal gray signature colors,
silver voxel chain necklace detail,
smooth voxel shading with edge highlights,
clean premium voxel art aesthetic
```

### Jade (other woman)
```
Voxel art young female character cube-style design,
long dark voxel hair flowing past shoulders,
simple cube head with 2 dot eyes,
wearing deep purple voxel stage outfit with gold accent details,
purple and gold signature colors,
clean premium voxel art aesthetic
```

### Helen (attorney)
```
Voxel art older female character authoritative design,
silver-gray voxel bob hair neat and precise,
simple cube head with 2 dot eyes and firm expression,
wearing navy voxel business suit with white voxel blouse,
navy and silver signature colors,
confident professional voxel pose,
clean premium voxel art aesthetic
```

### Lucas (epilogue partner)
```
Voxel art male character with warm approachable design,
short brown voxel hair slightly tousled,
simple cube head with 2 dot eyes and gentle smile line,
wearing sage green voxel flannel shirt over white tee,
sage green and warm brown signature colors,
relaxed friendly voxel pose,
clean premium voxel art aesthetic
```

---

## Setup tools

### Freepik Unlimited Premium
- https://www.freepik.com/pikaso/ai-image-generator
- AI enhance **OFF**
- Models: **Flux 2 Pro**, **Seedream 4.5**, **Nano Banana 2** (character ref), **Ideogram 3** (text), **Kling 2.5 Turbo** (video 10s max)

### ElevenLabs
- Voice: **Charlotte** (`XB0fDUnXU5powFXDhCwa`)
- Speed **0.92** / Stability **55** / Similarity **80** / Style **30**

### CapCut (edit)
- Import voice first -> align video to voice
- Background music volume -18dB
- Export 1080p 30fps H.264 10Mbps

---

When finished -> proceed to next episode.
