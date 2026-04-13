# EP07 — The MIL's Plan
## Production README

---

## Story Summary (4 sentences)

Claire, a licensed clinical social worker trained to document everything, discovers her mother-in-law Renata has spent four years systematically rewriting reality to destroy her marriage — feeding Owen fabricated versions of Claire's words until he asks for a separation. Claire's professional instinct had made her save eight voicemails over four years because something "felt slightly wrong"; listening to them back-to-back reveals Renata inventing Owen's feelings and planting lies about Claire not wanting children. Claire hands Owen her phone and leaves the room — he listens alone, confronts Renata, files a no-contact order on his own mother, and shares the voicemails with family. Renata's Facebook victim post earns one like and zero comments; Claire is promoted to Clinical Supervisor, Owen still calls most lunch breaks, and the voicemails remain saved — because the truth doesn't disappear just because someone tells a louder story.

---

## Characters

| Character | Role | Age | Voxel Design | Reference File |
|---|---|---|---|---|
| Claire | Protagonist — licensed clinical social worker | 33 | Cube-bodied, cream/sage professional blouse, warm dark hair, composed "holds it together" energy | `claire-voxel-base.png` |
| Owen | Husband — structural engineer, conflict-avoidant, genuinely loves Claire | 34 | Cube-bodied, warm charcoal/grey, structured build, kind face, slightly closed posture | `owen-voxel-base.png` |
| Renata | MIL — calculated, precise, "works in whispers and rewrites" | 63 | Cube-bodied, cold burgundy/dark mauve, older proportions, controlled smile, upright posture | `renata-voxel-base.png` |
| Diane | Owen's sister — receives voicemails, recalibrates | — | Minor character, no dedicated ref needed | — |
| Marcus | Owen's cousin — receives voicemails, recalibrates | — | Minor character, no dedicated ref needed | — |

---

## File Index (11 files — V4 format)

```
EP07-the-mils-plan/
├── 00-README.md                   ← this file
├── 02-characters.md               ← Freepik character prompts (Claire, Owen, Renata)
├── 03-images.md                   ← 117 image prompts (34 scenes × 3 + 15 Ken Burns)
├── 03b-images-full-prompts.md     ← expanded per-image prompt text (to generate)
├── 04-videos.md                   ← 102 Kling clip specs (34 scenes × 3 clips × 5s)
├── 04b-videos-full-prompts.md     ← expanded per-clip prompt text (to generate)
├── 05-voice.md                    ← ElevenLabs Charlotte BR — 3 chunks script
├── 06-thumbnail.md                ← 3 A/B/C thumbnail variants (Ideogram)
├── 07-title-description.md        ← YouTube SEO title + tags + description
├── 08-upload.md                   ← upload protocol + cross-post checklist
└── GEN-CHECKLIST.md               ← production gate — what's done / pending
```

Files `03b`, `04b`, `05`, `06`, `07`, `08`, `GEN-CHECKLIST` are pending generation.

---

## Color Arc

| Phase | Scenes | Color | Hex | Mood |
|---|---|---|---|---|
| Beat 1-2 (Setup/Normal) | F01–F04 | WARM cream + gold | `#F3E9D2` + `#D4A547` | Happy married life |
| Beat 2–3 entering (Crack begins) | F05–F10 | WARM → fading | `#E8D5B0` → `#C4A882` | Renata's campaign |
| Beat 4 (Betrayal) | F11–F15 | DARK COLD navy | `#0B1426` | Lies land |
| Beat 5 (Fall) | F16–F19 | DARK | `#0D1A2B` | Alone, processing |
| Beat 6 (Pivot — voicemails) | F20–F24 | TURNING WARM pre-dawn | `#1C2B3A` → `#3D4F3C` | Truth surfacing |
| Beat 7 (Karma) | F25–F31 | COLD GRAY institutional | `#1F2937` | Owen confronts, no-contact, family |
| Beat 8 (Downfall) | F32–F33 | NEUTRAL COOL | `#2D3748` | Facebook post |
| Epilogue | F34 | FULL WARM + sage | `#D4A547` + `#6B7F5A` | Peace, closure |

---

## Timeline Math

| Element | Count | Duration |
|---|---|---|
| Animated clips (3 clips × 5s gen, trimmed 3s each) | 102 clips | ~306s raw gen / ~5:06 used |
| Ken Burns stills (avg ~18s each) | 15 stills | ~270s |
| Voice script target | — | 10:30–11:30 |
| Total edit target | — | **10:30–11:30** |

- 34 scenes × 3 clips = **102 Kling clips** (Kling 2.5 Turbo, 5s gen → trim 3s in CapCut)
- 34 scenes × 3 frames = **102 start frames** (F{NN}A / F{NN}B / F{NN}C)
- Ken Burns stills = **15 images** (S01–S15)
- Total images to generate = **117**

---

## Production Phases

| Phase | Action | Tool | Status |
|---|---|---|---|
| Phase 0 | Character ref gen (claire, owen, renata) | Nano Banana 2 | ⏳ pending |
| Phase 1 | Gen 102 scene frames (F01A–F34C) | Nano Banana 2 / Flux 2 Pro / Ideogram 3 | ⏳ pending |
| Phase 2 | Gen 15 Ken Burns stills (S01–S15) | Nano Banana 2 / Flux 2 Pro / Ideogram 3 | ⏳ pending |
| Phase 3 | Gen 102 Kling clips (F01–F34, 3 clips each) | Kling 2.5 Turbo | ⏳ pending |
| Phase 4 | Voice recording — 3 chunks | ElevenLabs Charlotte BR | ⏳ pending |
| Phase 5 | CapCut assembly + BGM | CapCut | ⏳ pending |
| Phase 6 | Thumbnail gen (3 variants) | Ideogram 3 | ⏳ pending |
| Phase 7 | Upload + cross-post | YouTube / TikTok / Instagram | ⏳ pending |
