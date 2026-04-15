# story-visuals — Image + Video Prompts (Multi-model)

## Input
$ARGUMENTS (slug — e.g. 07-she-packed-his-lunch)

## Mục đích
Generate đầy đủ 11 production files theo V4 format cho 1 episode Karma Caught Up.
Visual style: **Voxel art** (Astroneer / Crossy Road aesthetic — NOT realistic, NOT raw Minecraft).

---

## V4 Format chuẩn (BẮT BUỘC)

### Images
- **34 scenes × 3 angles (A/B/C) = 102 start frames** + **15 Ken Burns stills = 117 total**
- A = Wide / Establishing · B = Medium / 3-4 angle · C = Close-Up / ECU / Detail
- Save: `media/images/F01A.png` … `F34C.png` + `S01.png`…`S15.png`

### Videos
- **34 scenes × 3 clips (A/B/C) = 102 clips** × 5s gen → CapCut trim 3s → 9s/scene
- A-clip starts from F{NN}A · B-clip from F{NN}B · C-clip from F{NN}C
- Save: `media/videos/C01A.mp4` … `C34C.mp4`
- **BẮT BUỘC**: A+B+C groupés CÙNG nhau per scene — KHÔNG để C clips riêng cuối file

---

## Multi-model stack (Voxel)

### Images
| Scene type | Model | Ref |
|---|---|---|
| Character scenes | **Nano Banana 2** | {name}-voxel-base.png |
| Environment / objects / B-roll | **Flux 2 Pro** | — |
| Text on screen (laptop/phone/docs) | **Ideogram 3** | — |
| Wide atmospheric (optional) | **Seedream 4.5** | — |

### Videos
| Use case | Model |
|---|---|
| All animated scenes | **Kling 2.5 Turbo** · 5s/clip |

---

## Voxel style tag (thêm vào MỌI prompt)
> "Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K."

## Camera moves V4
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DUTCH · DESCENT · STATIC

**DUTCH**: Beat 3-5 ONLY (B/C clips của betrayal/crack scenes) — TUYỆT ĐỐI KHÔNG dùng ở Epilogue.

## Color arc (BẮT BUỘC)
- Beat 1-2: Warm cream `#F3E9D2` + gold `#D4A547`
- Beat 3-5: Cold navy `#0B1426` + cool blue `#3B82F6`
- Beat 6 Pivot: Pre-dawn returning warm `#D4A547`
- Epilogue: Full warm gold + sage `#6B7F5A` + cream

---

## Quy trình

### 1. Đọc input files
- `youtube-stories/scripts/{slug}.md` — full script
- `youtube-stories/VOXEL-STYLE-GUIDE.md` — voxel visual bible
- `youtube-stories/STORY-FORMULA.md` — 8-beat timing

### 2. Tạo folder structure
```
youtube-stories/prompts/{slug}/
├── 00-README.md
├── 02-characters.md
├── 03-images.md
├── 03b-images-full-prompts.md    ← 102 A/B/C prompts + 15 Ken Burns
├── 04-videos.md
├── 04b-videos-full-prompts.md    ← 102 clips, A+B+C per scene
├── 05-voice.md
├── 06-thumbnail.md
├── 07-title-description.md
├── 08-upload.md
├── GEN-CHECKLIST.md
└── media/
    ├── images/
    ├── videos/
    ├── voice/
    ├── thumbnails/
    └── final/
```

### 3. Map 34 scenes theo 8 beats

| Beat | Scenes | Timing |
|---|---|---|
| 1 Hook | S01-S01 | 0:00-0:15 |
| 2 Intro | S02-S05 | 0:15-1:00 |
| 3 Crack | S06-S09 | 1:00-2:30 |
| 4 Betrayal | S10-S13 | 2:30-4:00 |
| 5 Fall | S14-S17 | 4:00-5:30 |
| 6 Pivot | S18-S21 | 5:30-7:00 |
| 7 Karma | S22-S27 | 7:00-9:30 |
| 8 Downfall | S28-S29 | 9:30-10:30 |
| Epilogue | S30-S33 | 10:30-11:30 |
| CTA | S34 | 11:30+ |

### 4. Viết 02-characters.md
- 1 entry per character: tên, voxel appearance, màu đặc trưng, model routing
- Gen 1 voxel base ref per character (Nano Banana 2 · 1:1 · 2K · white bg · full body)

### 5. Viết 03-images.md (overview table)
```markdown
| Scene | F{NN}A | F{NN}B | F{NN}C | Model A/B/C | Beat | Color |
|---|---|---|---|---|---|---|
| 01 | F01A | F01B | F01C | Flux / NB2+char / NB2+char | 1 Hook | DARK COLD |
...
```

### 6. Viết 03b-images-full-prompts.md (BẮT BUỘC đầy đủ)
- 34 scenes × 3 prompts (A/B/C) = 102 prompts
- 15 Ken Burns stills (S01-S15)
- **Tất cả trong 1 file** — KHÔNG split thành part1/part2
- Format per frame:
```
### F{NN} — [Scene description] | Beat N | COLOR

**F{NN}A** — Wide/Establishing
**Model**: [Model + ref if needed]
`[full prompt]`

**F{NN}B** — Medium Shot
**Model**: [Model + ref if needed]
`[full prompt]`

**F{NN}C** — Close-Up/ECU
**Model**: [Model + ref if needed]
`[full prompt]`
```

### 7. Viết 04-videos.md (overview)
- Bảng 34 scenes × 3 clips với camera move per clip
- Timeline math: 34×3×3s = 306s animated + 15×15s Ken Burns = 225s + gaps ≈ 11:30

### 8. Viết 04b-videos-full-prompts.md (BẮT BUỘC đầy đủ)
- **A+B+C CÙNG NHAU per scene** — TUYỆT ĐỐI KHÔNG để C clips riêng cuối file
- Format per scene:
```
### SCENE {NN} — [Scene name]

**C{NN}A** | F{NN}A | 5s | [CAMERA MOVE]
`[full Kling prompt]`

**C{NN}B** | F{NN}B | 5s | [CAMERA MOVE]
`[full Kling prompt]`

**C{NN}C** | F{NN}C | 5s | [CAMERA MOVE]
`[full Kling prompt]`

---
```
- Quick reference table ở cuối (F{NN}A / F{NN}B / F{NN}C per scene)

### 9. Viết 05-voice.md
- 3 chunks ElevenLabs (max 2500 chars mỗi chunk)
- Settings: Charlotte BR · Speed 0.92x · Stability 55% · Similarity 80%

### 10. Viết 06-thumbnail.md
- 3 A/B/C variants (Ideogram 3)
- Hook text + character + color contrast

### 11. Viết 07-title-description.md
- 3 title variants (SEO optimized)
- Full YouTube description + tags

### 12. Viết 08-upload.md
- Upload checklist + schedule (T3 hoặc T6 21:00 EST)

### 13. Viết GEN-CHECKLIST.md
- Phase 0: Characters (gen refs)
- Phase 1: Images (102 start frames + 15 stills)
- Phase 2: Videos (102 clips)
- Phase 3: Voice
- Phase 4: Edit
- Phase 5: Upload

---

## Quality gate trước khi mark COMPLETE

- [ ] 03b: đúng 102 A/B/C prompts + 15 Ken Burns stills (117 total) trong 1 file
- [ ] 04b: đúng 102 clips, A+B+C grouped per scene (KHÔNG split)
- [ ] Color arc đúng per beat
- [ ] DUTCH chỉ Beat 3-5
- [ ] Tất cả prompts có voxel style tag
- [ ] Tất cả character scenes có ref upload notation
- [ ] 11 files present trong folder

---

## Sau khi xong
→ Cập nhật `MEMORY.md` episode progress
→ User gen media: Freepik (images + videos) + ElevenLabs (voice)
→ Tiếp `/story-edit {slug}`
