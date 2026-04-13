# 🧩 EPISODE 01 — Freepik Space Manual Setup

> **⚠️ Fact đã verify qua test**: Freepik Space KHÔNG có copy-paste nodes, KHÔNG có JSON import, KHÔNG inject được qua DevTools (liveblocks không sync store mutation). Chỉ có 2 cách reuse workflow: **Duplicate cả Space** hoặc **tạo tay từng node**.
>
> Tốt hơn — **pattern Text→Assistant→List→Generator** cho phép batch 40 scenes chỉ cần **5 nodes** (không phải 40). File này là cheat-sheet manual với text paste-ready cho từng node.

---

## 🧭 Space architecture tối thiểu

```
Panel "Characters" (5 node):
  ├─ Image Generator → Sarah (run once, get creation)
  ├─ Image Generator → Daniel
  ├─ Image Generator → Rachel
  ├─ Image Generator → James
  └─ Image Generator → Patricia

Panel "Scenes — Sarah (14 frames)":
  ├─ Text node (instructions + 14 prompts)
  ├─ Assistant (as_list) ← text
  ├─ List ← assistant
  └─ Image Generator (Nano Banana 2) ← list
                                    ← Sarah creation (reference)

Panel "Scenes — Daniel (6 frames)":  (same 4-node chain, Daniel ref)
Panel "Scenes — Rachel (1 frame)":   (single image-gen, Rachel ref)
Panel "Scenes — Objects (19 frames)": (4-node chain, no ref, Flux 2 Pro)

Panel "Videos":
  └─ 40 Video Generator nodes (Kling 2.5, 10s each, start frame = scene image)
     ⚠️ KHÔNG batch được vì mỗi video cần first-frame khác nhau

Panel "Audio":
  └─ Text to Audio (BGM)

Panel "Final":
  └─ Video Concatenation
```

**Tổng**: ~5 char + 4×4 scene batch + 40 video + 1 audio + 1 concat = **~50 nodes manual** (vs 90+ nếu không batch).

---

# 📌 PANEL 1 — CHARACTERS

**Node type**: Image Generator → **Flux 2 Pro**
**Settings**: 1:1 · 2K · AI Enhance OFF · clean white background
**Tạo 5 nodes, 1 prompt mỗi node. Run → creations sẽ dùng làm reference ở Panel 2-5.**

### 1.1 Sarah
```
Voxel art character of a young woman around 31 years old in cube-based 3D style, brown rounded voxel hair shoulder-length, simple cube head with 2 small dark dot eyes and small line mouth, wearing cream colored voxel cardigan, proportional body NOT raw Minecraft 1:2 ratio, warm cream and brown signature colors with subtle gradient shading, smooth voxel cube edges with subtle highlights, neutral standing pose facing camera, clean white background for character reference, Astroneer meets Crossy Road character style, NOT raw Minecraft NOT realistic NOT cartoon NOT anime, premium voxel art aesthetic, high quality 3D voxel render, 1024x1024, 2K
```

### 1.2 Daniel
```
Voxel art male character cube-style design around 32 years old, short brown voxel hair cap style, simple cube head with 2 dot eyes and neutral mouth line, wearing dark gray voxel work shirt and jeans, slightly larger geometric body proportional, charcoal gray and dark brown signature colors, smooth voxel shading with edge highlights, neutral standing pose facing camera, clean white background, Astroneer meets Crossy Road character style, NOT raw Minecraft NOT realistic NOT cartoon, premium voxel art aesthetic, 1024x1024, 2K
```

### 1.3 Rachel
```
Voxel art female character distinct from Sarah around 30 years old, blonde voxel hair shoulder-length geometric shape, simple cube head with 2 dot eyes small mouth line, wearing navy voxel blazer over cream shirt business attire, navy blue and cream signature colors, neutral standing pose facing camera, clean white background, Astroneer voxel character style, NOT raw Minecraft NOT realistic, premium voxel art aesthetic, 1024x1024, 2K
```

### 1.4 James
```
Voxel art male character around 33 years old with friendly design, dark brown voxel hair styled, simple cube head with 2 dot eyes and soft smile line, wearing sage green voxel cardigan over white shirt, sage green and warm cream signature colors, welcoming friendly pose, clean white background, Astroneer voxel character style, NOT raw Minecraft, premium voxel art aesthetic, 1024x1024, 2K
```

### 1.5 Patricia
```
Voxel art older female character around 55 years old, gray voxel bob cut hair, simple cube head with 2 dot eyes and confident mouth line, wearing navy voxel business suit with silver accents, navy and silver signature colors, authoritative kind pose, clean white background, Astroneer voxel character style, NOT raw Minecraft, premium voxel art aesthetic, 1024x1024, 2K
```

---

# 📌 PANEL 2 — SCENES BATCH (Sarah ref — 14 frames)

**Workflow chain** (4 nodes):
1. **Text node** — instructions
2. **Assistant** — parse numbered list (outputMode = "as_list")
3. **List** — auto-populated
4. **Image Generator** (Nano Banana 2) — reference slot = Sarah creation từ Panel 1

## 2.1 Text node — "Scene Prompts Sarah"
Paste nguyên cục này vào text node:

```
Return the following 14 numbered items verbatim as a list. Do not modify, rewrite, or shorten. Output exactly as-is.

1. Isometric voxel art hospital corridor, the voxel character from reference walking forward naturally down corridor in cream and blue voxel nurse scrubs, holding small voxel clipboard with gentle smile, white voxel walls with blue accent strips, voxel fluorescent ceiling lights warm tones, clean premium voxel aesthetic NOT raw Minecraft, Astroneer style, 1920x1080 isometric 45 degrees, 2K

2. Isometric voxel art kitchen, the character from reference packing voxel lunch into brown paper bag on wooden counter, loving careful hand motions, warm cream + brown domestic palette, voxel fridge and cabinets background, warm morning window light from left, clean premium voxel NOT raw Minecraft, 1920x1080 isometric, 2K

3. Isometric voxel art empty parking lot, the character from reference alone in voxel car gripping steering wheel, shocked frozen expression staring ahead, overcast cool blue daylight, empty asphalt with white parking lines, distant voxel hospital building silhouette, clean premium voxel, cool blue palette, 1920x1080 isometric, 2K

4. Cinematic voxel art extreme close-up of the voxel character from reference, her simple voxel face slowly registers horror with mouth slightly open and eyes wide, cool blue laptop screen glow illuminating her face from below creating dramatic contrast, deep navy background, devastating realization moment, clean premium voxel art emotional, 1920x1080 cinematic, 2K

5. Cinematic voxel art the character from reference at kitchen table at night, head down resting on closed voxel laptop, shoulders slumped in silent grief, single warm voxel lamp overhead creating deep shadows, deep navy + single warm accent palette, clean premium voxel, 1920x1080, 2K

6. Isometric voxel art bedroom, the character from reference lying awake in voxel bed staring at ceiling, male voxel character sleeping peacefully beside her unaware, dark voxel bedroom with single moonlight from window, deep navy color palette, clean premium voxel, 1920x1080 isometric, 2K

7. Isometric voxel art hospital corridor, the character from reference walking listlessly with hollow ghostly expression in voxel nurse scrubs, fluorescent cool blue ceiling lights, other voxel staff blurred background, empty contemplative desaturated atmosphere, clean premium voxel, 1920x1080 isometric, 2K

8. Cinematic voxel art the character from reference looking at her reflection in voxel bathroom mirror, hollow expression with dark voxel circles under her eyes, single bathroom voxel light overhead creating dramatic shadows, deep navy + dim warm accent, clean premium voxel emotional, 1920x1080, 2K

9. Isometric voxel art the character from reference inside voxel car holding voxel phone to her ear, calm resolved expression forming, warm sunrise voxel light through windshield, moment of clarity atmosphere, clean premium voxel, 1920x1080 isometric, 2K

10. Isometric voxel art bedroom, the character from reference calmly packing voxel clothes into two open voxel suitcases on bed, determined purposeful pose, warm morning voxel light from window, warm cream color palette, clean premium voxel, 1920x1080 isometric, 2K

11. Isometric voxel art cozy studio apartment, the voxel character from reference standing peacefully by large voxel window overlooking voxel river view, holding voxel coffee cup, warm golden morning voxel light streaming in, voxel plants on windowsill, warm peach + cream + sage palette, peaceful new life atmosphere, clean premium voxel, 1920x1080 isometric, 2K

12. Isometric voxel art cozy kitchen, the female character from reference and male voxel character with sage green cardigan cooking together, both smiling genuinely, warm peach + sage palette, peaceful joyful moment, clean premium voxel, 1920x1080 isometric, 2K

13. Cinematic voxel art close-up of the character from reference laughing genuinely, simple line mouth in upturned smile, eyes happy crescents, warm afternoon voxel light from kitchen window, peaceful happy moment, warm cream + sage green accent, clean premium voxel, 1920x1080, 2K

14. Isometric voxel art wide shot of empty hospital parking lot at sunrise, the character from reference visible inside single voxel car parked alone, soft pink and gold voxel sky gradient, distant hospital building, contemplative warm sunrise colors, clean premium voxel, 1920x1080 isometric, 2K
```

## 2.2 Assistant node settings
- **Instructions**: để trống (prompt đã nằm trong text node upstream)
- **Output mode**: **as_list** (bắt buộc)
- **Model**: GPT-5 hoặc default
- **Connect**: Text node → Assistant (port `text` → `attachments` hoặc trực tiếp text input)

## 2.3 List node
- Tự động populate 14 items từ Assistant
- Mode: **Replace items**
- Connect: Assistant output (`generated_prompt`) → List input

## 2.4 Image Generator node
- **Model**: Nano Banana 2 (Google) — tốt nhất character consistency
- **Aspect ratio**: 16:9
- **Resolution**: 2K
- **Reference slot**: drag Sarah creation từ Panel 1 vào đây
- **Connect**: List output (`output-texts`) → Image Generator prompt input
- **Run**: sẽ chạy 14 lần, mỗi lần 1 prompt từ list

---

# 📌 PANEL 3 — SCENES BATCH (Daniel ref — 6 frames)

Lặp lại pattern y như Panel 2, đổi ref sang Daniel.

## 3.1 Text node — "Scene Prompts Daniel"
```
Return the following 6 numbered items verbatim as a list. Do not modify.

1. Isometric voxel art kitchen, male voxel character from reference in dark gray work clothes standing alone reading small folded voxel note in his hand, shocked devastated expression, daylight through voxel window, empty kitchen background with engagement ring visible on table, clean premium voxel, 1920x1080 isometric, 2K

2. Cinematic voxel art close-up male voxel character from reference panicked face driving voxel car at night, tight grip on steering wheel, dashboard lights illuminating his face, worried desperate expression, deep navy with warm dashboard accent, clean premium voxel, 1920x1080, 2K

3. Isometric voxel art office building exterior, male voxel character from reference being escorted out by voxel security guard, holding small voxel box of personal items, defeated shameful expression, evening voxel city street background, cool desaturated palette, clean premium voxel, 1920x1080 isometric, 2K

4. Isometric voxel art hardware store interior, male voxel character from reference in cheap blue voxel uniform behind voxel register, tired defeated expression scanning voxel items, fluorescent cool blue ceiling lights, long voxel shelves with tools in background, humbling atmosphere, clean premium voxel, 1920x1080 isometric, 2K

5. Isometric voxel art small motel room, male voxel character from reference sitting alone on edge of voxel bed, single overhead voxel light bulb, voxel suitcase open on floor, worn voxel furniture, lonely defeated atmosphere, cool desaturated palette, clean premium voxel, 1920x1080 isometric, 2K

6. Cinematic voxel art male voxel character from reference stepping out of voxel car, seeing two voxel suitcases on lawn ahead, face dropping in realization, evening voxel light, clean premium voxel, 1920x1080, 2K
```

3.2 Assistant → 3.3 List → 3.4 Image Generator (Nano Banana 2 + **Daniel** reference).

---

# 📌 PANEL 4 — SCENE (Rachel ref — 1 frame)

Chỉ 1 prompt → không cần batch, tạo 1 **Image Generator node** (Nano Banana 2) + reference = Rachel creation.

### 4.1 Image Generator prompt
```
Isometric voxel art suburban porch scene at evening, the voxel character from reference with blonde hair in navy voxel attire standing with arms crossed firmly on porch, two voxel suitcases dropped on voxel grass lawn, betrayed angry determined expression, suburban voxel house background, warm evening voxel light dramatic shadows, clean premium voxel aesthetic, 1920x1080 isometric 45 degrees, 2K
```

---

# 📌 PANEL 5 — SCENES BATCH (Flux 2 Pro, no ref — 19 frames)

Environment/object scenes, không cần character.

## 5.1 Text node — "Scene Prompts Objects"
```
Return the following 19 numbered items verbatim as a list. Do not modify.

1. Cinematic voxel art close-up of a delicate gold engagement ring with single diamond cube, sitting on wooden voxel kitchen table, single shaft of warm voxel light from window above-left creating long shadow, voxel dust particles floating in light beam, cool blue voxel kitchen background softly blurred, deep navy and gold color palette, clean premium voxel art NOT raw Minecraft, Astroneer aesthetic, 1920x1080 cinematic, 2K

2. Cinematic voxel art lake scene at sunset golden hour, two voxel characters on wooden voxel dock by calm voxel lake, male voxel character kneeling proposing, voxel mountains in background gradient pink purple to orange, voxel pine tree silhouettes, warm romantic golden voxel lighting, Astroneer voxel landscape, premium voxel NOT raw Minecraft, 1920x1080 cinematic, 2K

3. Isometric voxel art close-up of female voxel hands holding small voxel phone, phone screen showing voxel grid of wedding dress thumbnails, voxel cozy bedroom background warm lamp light, soft warm color palette, clean premium voxel aesthetic, 1920x1080 isometric, 2K

4. Macro close-up voxel art shot of an engagement ring with diamond loose and tilted, the gold voxel ring caught on cream knit voxel sweater fabric texture, soft warm voxel lamp light dramatic shadow, shallow focus voxel background, deep navy + warm gold color palette, clean premium voxel, 1920x1080, 2K

5. Isometric voxel art jewelry shop interior, elderly voxel jeweler character with white voxel hair behind wooden voxel counter holding magnifying glass examining gold voxel ring, warm vintage voxel shop with wooden shelves and pendant lamp, small voxel display cases with rings, warm cozy color palette, clean premium voxel, 1920x1080 isometric 45 degrees, 2K

6. Isometric voxel art close-up of female voxel hands gently opening voxel laptop on dark wooden voxel table at night, laptop screen glow illuminating hands, single warm voxel lamp in background dim, deep shadows, night domestic atmosphere, deep navy + warm lamp accent, clean premium voxel, 1920x1080, 2K

7. Cinematic voxel art extreme close-up of laptop screen showing email subject "Counting down the days, husband" visible clearly, cool blue screen glow illuminating surrounding darkness, slight trembling hands holding laptop edges out of focus, devastating discovery moment, deep navy background with single cool blue screen accent, clean premium voxel NOT cartoon, 1920x1080 cinematic, 2K

8. Cinematic voxel art of laptop screen showing voxel wedding photo, a male voxel character in voxel tuxedo next to different voxel woman in white dress both smiling, the screen reflected in dark trembling hands holding laptop edges, cool blue glow dramatic, clean premium voxel, 1920x1080, 2K

9. Isometric voxel art wide shot of empty hospital parking lot at sunrise, soft pink and gold voxel sky gradient, single voxel car parked alone, distant voxel hospital building in background, contemplative atmosphere with sunrise warm colors entering cool scene, clean premium voxel, 1920x1080 isometric, 2K

10. Top-down voxel art shot of female voxel hands writing in open voxel notebook, the voxel page visible with handwritten list lines, warm voxel desk lamp light, voxel coffee cup steaming nearby, intimate decisive moment, warm cream + brown color palette, clean premium voxel, 1920x1080, 2K

11. Cinematic close-up voxel art shot of delicate gold engagement ring sitting alone on wooden voxel kitchen table, next to single folded voxel paper note, soft morning voxel window light, the ring slightly out of focus the note sharp, empty kitchen background, warm cream + gold accent palette, symbolic abandoned moment, clean premium voxel, 1920x1080, 2K

12. Cinematic voxel art view through airplane window, voxel cloud formations below in pink and white, voxel sky gradient bright blue to gold, subtle voxel airplane wing edge visible, peaceful escape atmosphere, warm gradient palette, Alto's Adventure inspired voxel sky, clean premium voxel, 1920x1080 cinematic, 2K

13. Top-down voxel art shot of voxel desk with stack of voxel legal documents and forensic accounting reports, voxel calculator and pen, warm office voxel lamp light, clean premium voxel aesthetic, 1920x1080, 2K

14. Cinematic close-up voxel art shot of voxel phone screen showing email notification with subject "I am sorry" from Daniel in clean voxel inbox, soft morning voxel kitchen light reflected on screen, warm cream + cool screen glow accent, moment of choice atmosphere, clean premium voxel, 1920x1080, 2K

15. Top-down voxel art shot of voxel hand on voxel laptop trackpad dragging email notification into voxel folder labeled "Closed Cases", laptop on sunny morning voxel kitchen counter with voxel coffee cup beside, warm cream + gold accent, decisive peaceful moment, clean premium voxel, 1920x1080, 2K

16. Cinematic close-up voxel art shot of beautiful vintage gold voxel engagement ring next to folded voxel appraiser receipt paper, soft warm voxel window light, intimate symbolic moment, warm cream + gold palette, clean premium voxel, 1920x1080, 2K

17. Cinematic voxel art shot of stylized voxel hourglass with golden voxel sand falling, small voxel butterfly silhouettes flying around, dark navy gradient background, gold and warm accent on the hourglass glowing, brand identity shot, clean premium voxel aesthetic, 1920x1080 cinematic, 2K

18. Cinematic voxel art extreme close-up of female voxel character face devastated with single voxel tear cube on cheek, cool blue dramatic lighting, dark navy background gradient, clean premium voxel, 1920x1080 cinematic, 2K

19. Top-down voxel art elderly woman voxel hand writing letter at warm lamp lit desk, voxel photo of young woman visible beside paper, apologetic emotional moment, warm cream + gold palette, clean premium voxel, 1920x1080, 2K
```

5.2 Assistant → 5.3 List → 5.4 **Image Generator** (Flux 2 Pro, NO reference).

---

# 📌 PANEL 6 — VIDEOS (manual, 40 nodes)

**⚠️ Constraint xác nhận qua test**: `video-generator.first-frame` port chỉ nhận 1 image. Không thể batch 40 videos với 40 start frames khác nhau qua `list` node.

## 2 options

### Option A — 40 node manual (true quality)
Mỗi scene image = 1 video generator node:
- Model: **Kling 2.5 Turbo**
- Duration: **10s**
- Aspect ratio: 16:9
- Reference: drag image từ Panel 2-5 vào `first-frame`
- Prompt: paste motion prompt từ `04-videos.md` clip C01-C40

→ Mất ~30 phút setup nhưng chất lượng cao nhất.

### Option B — Ken Burns stills only (10x nhanh)
- **Bỏ Kling hoàn toàn** trong Space
- Chỉ gen 40 scene images ở Panel 2-5
- Download 55 stills (40 scenes + 15 Ken Burns fills)
- **CapCut**: apply scale 100→115% keyframe cho mỗi still (15-25s each) → tạo illusion motion
- Total runtime 11:30 đạt được, không cần Kling node nào

→ Recommend Option B cho tốc độ. Option A chỉ khi muốn motion thật ở key moments (F11 email reveal, F13 laptop reveal, F25 ring+note, F29 Rachel porch).

### Hybrid (thực tế nhất)
- 10 Kling nodes manual cho **10 hero shots**: F01, F02, F11, F13, F14, F16, F25, F29, F38, F40
- 30 scenes khác → dùng Ken Burns trong CapCut

---

# 📌 PANEL 7 — AUDIO (BGM only)

## 7.1 Text to Audio node
```
Emotional cinematic ambient piano background music, slow tempo, melancholic strings building into hopeful resolution at midpoint, 12 minutes duration, minimal percussion, film score style similar to Hildur Guðnadóttir and Max Richter, soft subtle atmospheric, designed to sit under voiceover narration, no vocals
```

**⚠️** ElevenLabs voiceover KHÔNG có trong Space → gen ElevenLabs Charlotte riêng theo `05-voice.md` → merge CapCut.

---

# 📌 PANEL 8 — CONCATENATION

- **Video Concatenation** node (nếu Panel 6 Option A — có 40 Kling clips)
- Inputs: 40 video outputs theo order C01→C40
- Output: single MP4 ~400s

**Nếu Option B**: skip panel này, làm concat trong CapCut.

---

# 🎬 Workflow cuối — CapCut merge

Bất kể Option A/B:
1. Download tất cả scene images (55) + video clips (nếu có) + BGM audio từ Freepik
2. Download ElevenLabs voice 3 chunks
3. CapCut:
   - Import voice → Track 1
   - Import scenes → Track 2 (Ken Burns zoom cho stills)
   - Import BGM → Track 3 (volume -18dB)
   - Align với beat timestamps
4. Export 1080p 30fps H.264 10Mbps
5. Upload YouTube theo `08-upload.md`

---

# ✅ Checklist setup Space Ep1

- [ ] Panel 1: 5 char gen done, 5 creations available
- [ ] Panel 2: Text → Assistant → List → ImgGen(NB2 + Sarah ref) chain built
- [ ] Panel 3: Same chain + Daniel ref
- [ ] Panel 4: 1 ImgGen + Rachel ref
- [ ] Panel 5: Same chain + Flux 2 Pro no ref
- [ ] Panel 6: chọn Option A/B/Hybrid
- [ ] Panel 7: BGM text-to-audio
- [ ] Panel 8: Concat (nếu Option A)
- [ ] Run all → download → CapCut → upload

---

## ⚠️ Tóm tắt hạn chế

| Điều tôi từng claim sai | Sự thật |
|---|---|
| "Paste numbered list 1-40 vào 1 text node → batch" | Sai. Phải dùng chain Text→Assistant→List→Generator |
| "Freepik Space có copy-paste nodes" | Sai. Không có. |
| "DevTools inject nodes sẽ persist" | Sai. Liveblocks không sync store mutation. |
| "Videos batch được như images" | Sai. `first-frame` chỉ nhận 1 image shared. |

**Đường true-auto duy nhất**: Freepik REST API (`POST /v1/ai/flux-2-pro`, `kling-2.5-pro` etc) + Python script. Không dùng Space.
