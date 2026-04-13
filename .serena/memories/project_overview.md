# Project: Karma Caught Up — YouTube Stories

## Purpose
YouTube faceless long-form channel (@KarmaCaughtUp) producing Cold Karma Stories (betrayal + wedding drama passive revenge) in voxel art style.

## Tech Stack
- **Scripting**: Markdown scripts in `youtube-stories/scripts/`
- **Images**: Nano Banana 2 (characters) + Flux 2 Pro (env/obj) + Ideogram 3 (text overlays)
- **Video**: Kling 2.5 Turbo 5s/clip × 3 clips/scene
- **Voice**: ElevenLabs Charlotte BR · Speed 0.92x · Stability 55% · Similarity 80%
- **Editing**: CapCut · 1080p 30fps · BGM -18dB
- **Visual style**: Voxel art (Astroneer/Crossy Road inspired)

## Project Structure
```
agent/
├── CLAUDE.md               ← project instructions
├── MEMORY.md               ← session memory index
├── youtube-stories/
│   ├── CHANNEL-STRATEGY.md
│   ├── STORY-FORMULA.md    ← 8-beat formula
│   ├── VOXEL-STYLE-GUIDE.md
│   ├── scripts/            ← full episode scripts
│   ├── prompts/            ← per-episode production files
│   ├── _ideas/             ← daily idea backlog
│   ├── assets/             ← character refs + branding
│   └── analytics/          ← weekly reviews
└── _archive/               ← archived projects (DO NOT TOUCH)
```

## Key constraints
- Episodes: 10-12 min (11:30 target), 2/week (Tue + Fri 21:00 EST)
- Format: 34 scenes × 3 angles = 102 frames + 15 Ken Burns = 117 images per episode
- DUTCH camera: Beat 3-5 only — NEVER in Epilogue
- Color arc: Warm (Beat 1-2) → Cold navy (Beat 3-5) → Warm (Beat 6+)
