# EP04 — "The Tax Return"
# Production Folder — Karma Caught Up

---

## Story summary

Vivian, 37, senior tax analyst, prepared every joint tax return for eight years — line by line, Schedule C and all. In February, a receipt folder pulled from the cabinet for routine filing reveals a paper trail she was never meant to see: 31 hotel stays at the Harborview Suites in Savannah, $61,400 in fraudulent business deductions, and a forwarded travel itinerary addressed to a woman named Dara Whitfield. Vivian spends three nights auditing eight years of Schedule C filings, retains tax attorney Marcus for innocent-spouse relief and Form 8857, then submits Form 3949-A directly to the IRS. The audit that follows produces a $79,800 tax assessment, a criminal referral for double-billing, and the complete collapse of Colin's consulting practice. Two years later: Vivian makes partner, moves into a new apartment, adopts Pivot the rescue greyhound, and files Paul's simple W-2 return — professionally, of course.

**Emotional arc**: Domestic warmth → Quiet crack → Devastating discovery → Cold precision audit → Karma collects through the IRS → Full ownership and peace

---

## Characters

| Name | Age | Role | Palette | Voxel ref |
|---|---|---|---|---|
| Vivian | 37 | Protagonist, senior tax analyst | Cream cardigan + warm brown hair + reading glasses | `vivian-voxel-base.png` |
| Colin | — | Antagonist, corporate consultant | Charcoal suit + dark hair + cold palette | `colin-voxel-base.png` |
| Dara Whitfield | — | Other woman — name on itinerary only | Not visualized | *(no ref needed)* |
| Marcus | — | Tax attorney — brief scene Beat 6 | Neutral professional | *(no dedicated ref)* |
| Paul | — | Vivian's new partner — epilogue only | Warm casual | *(no dedicated ref)* |
| Pivot | — | Rescue greyhound — epilogue | Warm gray/fawn | *(no ref needed)* |

---

## File index (follow this order)

| File | Phase | What to do |
|---|---|---|
| `02-characters.md` | Phase 1 | Gen 2 character base refs (Vivian + Colin) |
| `03-images.md` | Phase 2 | Guide: 34 start frames (×3 shots = 102 images) + 15 Ken Burns stills |
| `03b-images-full-prompts.md` | Phase 2b | Full per-image prompts (102 + 15 = 117) |
| `04-videos.md` | Phase 3 | 34 Kling 2.5 Turbo multi-shot clips |
| `04b-videos-full-prompts.md` | Phase 3b | Full detailed Kling prompts |
| `05-voice.md` | Phase 4 | ElevenLabs Charlotte 3 chunks |
| `06-thumbnail.md` | Phase 5 | 3 A/B thumbnail variants |
| `07-title-description.md` | Phase 6 | SEO title + description + tags |
| `08-upload.md` | Phase 7 | CapCut edit + YouTube upload |
| `GEN-CHECKLIST.md` | All | Master progress tracker |

---

## Tech stack

- **Images**: Flux 2 Pro (objects/env) · Nano Banana 2 (characters) · Ideogram 3 (text/screens/documents)
- **Video**: Kling 2.5 Turbo 5s/clip × 3 clips/scene — trim to 3s in CapCut
- **Voice**: ElevenLabs Charlotte BR · Speed 0.92x · Stability 55% · Similarity 80%
- **Edit**: CapCut · BGM -18dB · hard cut A→B→C · crossfade only to Ken Burns
- **Export**: 1920×1080 · 30fps · H.264 · 10Mbps

---

## Color temperature arc (BẮT BUỘC follow)

```
F01-F05   WARM          → cream #F3E9D2 + gold #D4A547 (domestic warmth, routine, trust)
F06-F09   COOL ENTERING → cool blue #3B5E8A (crack — something's off, receipt folder)
F10-F15   DARK COLD     → navy #0B1426 + cold blue #3B82F6 (betrayal / fall zone)
F16-F18   TURNING WARM  → pre-dawn warm amber (pivot — attorney, forms, agency)
F19-F27   COLD GRAY     → institutional #1F2937 (karma — audit, IRS, collapse)
F28-F29   NEUTRAL COOL  → muted cool (downfall — house sold below asking)
F30-F34   FULL WARM     → gold #D4A547 + sage #6B7F5A + cream (epilogue, new life)
```

---

## Timeline math

```
34 Kling clips × 3 clips × 5s gen → CapCut trim 3s = 9s/scene × 34 = 306s
15 Ken Burns stills × avg 15s hold                                  = 225s
                                                                      ------
Base                                                                 = 531s
+ CapCut transitions (~30s)                                          = 561s
+ BGM fade + padding (~35s)                                          = 596s ≈ 9:56 base

Voice-over pacing buffer                                            + ~90s
TOTAL                                                               ≈ 11:26 ✅
```

*Formula: 34 scenes × 3 shots (A/B/C) = 102 image start frames + 15 Ken Burns stills = **117 images** total.*

---

## Production phases

| Phase | Task | Output |
|---|---|---|
| 0 | Read this file + script | Context locked |
| 1 | Gen 2 character refs (Flux 2 Pro) | `assets/characters/vivian-voxel-base.png` + `colin-voxel-base.png` |
| 2 | Gen 102 start frames + 15 KB stills | `media/images/F01A–F34C.png + S01–S15.png` |
| 3 | Gen 102 Kling clips (5s multi-shot) | `media/videos/V01A–V34C.mp4` |
| 4 | Record voice Charlotte BR 3 chunks | `media/voice/EP04-chunk1/2/3.mp3` |
| 5 | Gen 3 thumbnail variants | `media/thumbnails/thumb-A/B/C.png` |
| 6 | CapCut edit → export | `EP04-the-tax-return-FINAL.mp4` |
| 7 | Upload YouTube + cross-post | Published ✅ |

---

## Script location

`youtube-stories/scripts/EP04-the-tax-return.md`
