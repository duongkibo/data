# TikTok Affiliate Skincare — Workflow V2.1 (Nano Banana 2 + 2026 Best Practice)

> **Version 2.1** — Pivot sang **Google Nano Banana 2** cho image gen (bỏ LoRA training). Giữ mọi best practice 2026 khác.
>
> **Target metric**: 70% completion rate (ngưỡng viral 2026)

---

## 🎯 8 Nguyên tắc vàng V2.1

1. **Nano Banana 2 + multi-reference** — 1 persona master + product ref, không cần train LoRA
2. **Script outline BEFORE visuals, voice AFTER edit locked** — không bao giờ gen voice trước khi video lock
3. **Kling 1 action = 1 clip** — không multi-shot, dùng Start+End frame cho continuity
4. **Hybrid duration**: 5s B-roll + 10s hero transformation shots
5. **Completion rate engineering**: open loop 0-3s → cliffhanger 60% → payoff 90% → CTA
6. **Batch 5 hooks × 1 body** — feed GMV Max đủ data
7. **Asset library reuse** — persona master, lighting, text, SFX, music packs
8. **Work-on-mute hook** — text overlay + visual pattern interrupt trong 1.5s đầu

---

## 📂 Cấu trúc thư mục V2

```
agent/
├── assets/                          ← 🆕 Asset library dùng chung
│   ├── personas/
│   │   ├── vi-genz-girl/           ← Character LoRA trained (Freepik)
│   │   │   ├── training-images/    ← 12 ảnh train
│   │   │   ├── lora-id.txt         ← Freepik character ID
│   │   │   └── reference-shots/    ← Ảnh mẫu các góc
│   │   └── vi-working-woman/
│   ├── lighting-presets/           ← Prompt snippet tái dùng
│   ├── text-templates/             ← Poppins templates
│   ├── sfx-kit/                    ← pop, whoosh, water, sparkle, ding
│   └── music-library/              ← trending beats BPM 100-120
│
├── output/
│   └── {product-slug}/
│       ├── 00-product-info.md
│       ├── 01-script-outline.md    ← 🆕 outline only, không full dialogue
│       ├── 02-storyboard.md        ← 🆕 shot list với duration cụ thể
│       ├── 03-image-prompts.md     ← 6-8 start frames
│       ├── 04-video-prompts.md     ← Kling, 1 action/clip
│       ├── 05-edit-lock.md         ← 🆕 Timeline sau khi edit raw
│       ├── 06-voice-script.md      ← 🆕 Viết SAU khi edit lock
│       ├── 07-capcut-final.md      ← Final polish guide
│       ├── 08-tiktok-post.md       ← Caption + hashtag
│       └── 09-batch-variants.md    ← 🆕 5 hook variants
```

---

## 🚀 PIPELINE V2 — 10 BƯỚC

### BƯỚC 0 ⭐ (ONE-TIME): Setup Asset Library

**Mục đích**: Xây nền tảng reuse, chạy 1 lần rồi quên.

#### 0.1 Gen Persona Master với Nano Banana 2 (5 phút)
1. Freepik → AI Image Generator → **Model: Google Nano Banana 2**
2. Ratio 9:16, 2K
3. Prompt master:
   ```
   Editorial beauty portrait of a young Vietnamese woman, 20 years old,
   long straight black hair to shoulders with soft bangs, almond brown eyes,
   natural glowing skin with subtle freckles, soft pink lips, gentle smile,
   wearing cream-white cotton tank top, sitting in a cozy minimalist bedroom
   with soft morning window light from left, warm beige tones, photorealistic,
   Fujifilm Pro 400H look, shallow depth of field, 2K sharp
   ```
4. Gen 3-4 variants → chọn ảnh ưng nhất → save `assets/personas/vi-genz-girl/persona-master.png`
5. **Đây là single source of truth** — mọi frame sau đều upload ảnh này làm reference

> 💡 **Tại sao Nano Banana 2**: Model này có character consistency native + product preservation 99% khi paste ảnh thật. Không cần train LoRA, không cần 12 ảnh, không cần chờ 30 phút. **Setup chỉ 5 phút.**

#### 0.2 (Optional) Gen thêm 2-3 biến thể persona master
Mỗi biến thể khác góc/biểu cảm nhẹ — để dùng khi cần match scene cụ thể:
- `persona-smile.png` — cười tươi (dùng cho reveal, result)
- `persona-worried.png` — mặt lo (dùng cho hook, problem)
- `persona-closeup.png` — close-up mặt (dùng cho extreme close shots)

Upload cả bộ vào reference mỗi lần gen → Nano Banana 2 pick đúng theo context.

#### 0.2 Lighting preset pack
Lưu vào `assets/lighting-presets/`:
```
- "warm-morning": soft morning window light from left, warm cream and beige tones, golden hour 30%
- "clean-studio": bright diffused studio light, pure white background, clinical clean
- "k-beauty-glow": dreamy golden hour, halo backlight, floating sparkle particles
- "texture-macro": soft diffused studio light, creamy beige background, macro depth
- "night-lofi": warm bedside lamp, cozy bedroom, lofi aesthetic
```

#### 0.3 Text overlay templates (CapCut)
Lưu template CapCut có sẵn: hook pop, typewriter, explosive zoom, liquid drip, glow pulse, bounce CTA.

#### 0.4 SFX + Music kit
- SFX: 5 files cơ bản (pop, whoosh, magic, water drop, sparkle, ding)
- Music: 10 track trending TikTok VN BPM 100-120 (update weekly)

---

### BƯỚC 1: Research sản phẩm + 5 Hook Angles
**Input**: empty / tên sản phẩm
**Output**: `00-product-info.md` + `09-batch-variants.md` (5 hook angles)

**Workflow cải tiến:**
1. TikTok Creative Center VN → top products skincare 7 ngày
2. Chọn sản phẩm CVR ≥6%, CPA thấp, có trend
3. **🆕 Phân tích top 5 ads** đang chạy → extract 5 hook angles đang work:
   - Angle 1: **Pain point** (da đỏ/mụn/khô)
   - Angle 2: **Curiosity gap** ("$200 cream không làm được điều này")
   - Angle 3: **Before/After** ("30 ngày da mình...")
   - Angle 4: **Social proof** ("Sold out 3x lý do là đây")
   - Angle 5: **Contrarian** ("STOP xài serum sai cách")
4. Lưu 5 angles vào `09-batch-variants.md` để batch sau

---

### BƯỚC 2: Script Outline + Storyboard
**Output**: `01-script-outline.md` + `02-storyboard.md`

**🆕 KEY CHANGE**: Viết OUTLINE trước, KHÔNG viết full dialogue. Dialogue cuối cùng sẽ viết ở Bước 7 sau khi edit lock.

**Outline chỉ có:**
- Ý chính mỗi beat (1 câu/beat)
- Visual action mỗi shot
- Duration target mỗi shot
- Emotion target

**Storyboard format:**

| Shot | Duration | Visual | Hook/Message | Sản phẩm? |
|---|---|---|---|---|
| 1 | 3s | Close-up mặt shock + text overlay | Hook pain point | ❌ |
| 2 | 2s | Quick flash sản phẩm (tease) | Tease solution | ✅ 0.3s |
| 3 | 5s | Problem demo (fail với sản phẩm khác) | Agitation | ❌ |
| 4 | **10s** ⭐ | **Hero reveal + apply texture** | Solution + USP | ✅ Heavy |
| 5 | 5s | Result before/after glow | Payoff | ❌ |
| 6 | 5s | CTA + giỏ hàng | Action | ✅ Static |

**Total raw: ~30s | Sau edit: 28-29s**

⚠️ **Shot 4 là 10s** (hero transformation) — dùng Kling 2.5 10s mode
**Các shot khác 5s** — Kling 5s mode

---

### BƯỚC 3: Image Prompts (6-8 Start Frames) — Nano Banana 2
**Output**: `03-image-prompts.md`

**🆕 KEY CHANGES V2.1:**
- **Model: Google Nano Banana 2** cho toàn bộ image gen
- **Multi-reference native**: upload cùng lúc persona master + product ref + style ref
- Mỗi shot có **Start Frame + End Frame** cho Kling continuity (shot quan trọng)
- Shot hero (10s) cần 2 frames: start + end state

**Setup references mỗi lần gen (Freepik):**
```
Reference slot 1: persona-master.png (hoặc variant phù hợp mood)
Reference slot 2: product-real.png (chỉ khi scene có sản phẩm — paste ảnh thật từ Shopee/TikTok Shop)
Reference slot 3: (optional) frame trước đó để giữ lighting consistency
```

**Template prompt V2.1:**
```
The woman from reference, [shot type], [specific action/pose],
holding/near the exact bottle from reference if applicable,
[environment from lighting preset], [specific texture/props],
photorealistic, 9:16, 2K
```

**Ví dụ prompt đầy đủ:**
```
The woman from reference, medium shot, smiling softly with hopeful eyes,
holding the exact SKIN1004 bottle from reference at chin level near her face,
dreamy golden hour light from window behind, warm cream background,
floating sparkle particles, subtle lens flare, photorealistic,
shallow depth of field, Fujifilm Pro 400H look, 9:16, 2K
```

> 🔥 **Magic của Nano Banana 2**: chữ label "SKIN1004" trên chai sẽ render đúng 99% vì nó đọc trực tiếp từ ảnh reference, không "tưởng tượng" ra.

**Ví dụ Shot 4 (hero, có 2 frame):**
- **Start frame**: character holding ampoule bottle, smiling hopeful, golden halo
- **End frame**: character with dropper above palm, droplet forming, macro close-up

Kling sẽ interpolate giữa 2 state → chuyển động mượt + product-first visual.

---

### BƯỚC 4: Video Prompts (Kling 2.5 — 1 action/clip)
**Output**: `04-video-prompts.md`

**🆕 KEY CHANGES:**
- **KHÔNG** multi-shot nữa — 1 clip = 1 hành động clear
- Dùng **Start+End frame mode** cho shot transformation
- Camera movement **specific**: "slow push-in", "lateral track left", NOT "zoom in"/"moving"
- Mỗi prompt có **motion endpoint**: "...then settles back into place"

**Template V2:**
```
[Subject] [one clear action] + [specific camera move] + [lighting from preset] + [mood] + motion endpoint
```

**Ví dụ Shot 4 hero (10s, start+end):**
```
Start frame: [upload hero-start.png]
End frame: [upload hero-end.png]
Prompt: "The woman smoothly tilts the ampoule dropper above her open palm in slow motion,
a crystal clear watery droplet forms and falls, camera gradually pushes in to extreme macro
following the droplet, soft diffused golden light, dreamy hopeful mood,
then the droplet settles onto her skin and absorbs."
Duration: 10s
```

**Ví dụ Shot 1 hook (5s):**
```
Prompt: "The woman looks at herself in the vanity mirror with a shocked worried expression,
her hand slowly rises to touch her visibly red cheek, subtle handheld push-in,
soft morning window light from left, warm cream tones, cinematic storytelling mood,
then she sighs softly."
Duration: 5s
```

**Checklist mỗi prompt:**
- [ ] 1 action chính duy nhất
- [ ] Camera movement rõ ràng (not generic)
- [ ] Motion endpoint ("then settles", "then pauses")
- [ ] Lighting match với shot trước (consistency)
- [ ] Không conflict (slow-mo + fast-paced = sai)

---

### BƯỚC 5: Gen Media (User thực thi trên Freepik)
**Output**: `clip-1.mp4` → `clip-N.mp4`

User chạy tuần tự:
1. Gen 6-8 frames (dùng LoRA character)
2. Gen 6-8 clips Kling (1 action/clip, 5s hoặc 10s tùy shot)
3. Save theo tên chuẩn: `shot-1-hook.mp4`, `shot-4-hero.mp4`, ...

---

### BƯỚC 6: ⭐ EDIT LOCK (Raw cut trước voice)
**Output**: `05-edit-lock.md` + file `raw-edit.mp4` (chưa có voice)

**🆕 KEY CHANGE**: Đây là bước **QUAN TRỌNG NHẤT** trong V2. User edit video raw TRƯỚC khi viết voice.

**Workflow:**
1. CapCut import tất cả clips
2. Trim mỗi clip lấy 2-3s ngon nhất (front-loaded pacing)
3. Arrange theo storyboard
4. **KHÔNG thêm voice, text, nhạc** — chỉ video thuần
5. Export **raw timeline** → đo duration chính xác mỗi shot
6. Lưu timeline vào `05-edit-lock.md`:

**Format edit-lock:**
```
| Cut | Start | End | Duration | Clip source | Action |
|---|---|---|---|---|---|
| 1 | 0:00.00 | 0:01.30 | 1.3s | shot-1-hook.mp4 trim 0-1.3 | Close-up shocked |
| 2 | 0:01.30 | 0:02.60 | 1.3s | shot-1-hook.mp4 trim 2-3.3 | Hand touch cheek |
| 3 | 0:02.60 | 0:03.00 | 0.4s | shot-4-hero.mp4 trim 1-1.4 | TEASE product flash |
...
```

→ Bây giờ user đã biết CHÍNH XÁC mỗi giây đang chạy cảnh gì → viết voice sync 100%.

---

### BƯỚC 7: Voice Script + TTS (Match timing)
**Output**: `06-voice-script.md` + `voiceover.mp3`

**🆕 KEY CHANGES:**
- Viết voice SAU khi edit lock
- Tính theo công thức: **15s TikTok = 45-55 từ Việt** (natural pace)
- 30s = 90-110 từ → mỗi cut 1-3 từ max
- **Dùng CapCut TTS VN** (mặc định) — chất lượng VN tốt hơn Freepik ElevenLabs, miễn phí, tích hợp thẳng timeline
- Fallback: Freepik ElevenLabs nếu muốn voice unique

**Template voice cho từng cut (theo edit-lock):**
```
[0:00-0:03] "Bồ ơi! Da mình đỏ hết chỗ chê." (8 từ cho 3s ≈ đúng pace)
[0:03-0:05] "Skincare girl mà phản chủ..." (5 từ cho 2s)
[0:05-0:10] "Toner đắt châm chích. Serum xịn đỏ lè. Hết cứu!" (11 từ cho 5s)
[0:10-0:20] "Đến khi mình tìm thấy em rau má Madagascar này..." (10 từ cho 10s — slow pace hero)
[0:20-0:25] "Hai tuần sau — da mịn glow hẳn ra!" (8 từ cho 5s)
[0:25-0:30] "Hơn 300k thôi bồ ơi. Bấm giỏ hàng vàng nha!" (11 từ cho 5s)
```

**Rule**: Nếu từ quá nhiều → cắt. Voice phải "thở" chứ không nhồi.

**Emotion tags** (chỉ dùng khi cần):
- `[curious]` — hook + problem
- `[excited]` — reveal + demo
- `[warm]` — result + CTA

---

### BƯỚC 8: CapCut Final Polish
**Output**: `07-capcut-final.md` + `final.mp4`

**Thêm lên trên raw edit:**
1. **Voice** (từ bước 7) → sync lên timeline (J-cut -0.3s)
2. **Music** bed 15% (từ asset library)
3. **SFX layers** (từ kit): pop, whoosh, water drop money shot, sparkle, ding
4. **Text overlays** (từ template): hook text 0:00, reveal text, result text, CTA text
5. **Auto Captions** Vietnamese word-by-word, Poppins Bold 60pt
6. **Filters per group** (warm hook → clean demo → glow result)
7. **Transitions** chỉ 3 vị trí lớn (Zoom Blur, Smooth Warp, Glow Pulse)
8. **Beat sync**: Audio → Beats → Auto mark → snap cuts

**Completion rate engineering:**
- **Open loop** 0:00-0:03: hook + text + tease sản phẩm 0.3s
- **Cliffhanger** 60% mark (~0:18): "Đây là cái làm mình shock..." trước khi reveal kết quả
- **Payoff** 90% mark (~0:27): glow result lộ ra full
- **CTA** 95-100%: bấm giỏ hàng

Export: 1080p, 30fps, H.264, OFF watermark, OFF HDR.

---

### BƯỚC 9: Batch Variants (5 hooks × 1 body)
**Output**: `09-batch-variants.md` + 5 final videos

**🆕 KEY CHANGE**: Duplicate CapCut project 5 lần. Mỗi lần:
- Giữ NGUYÊN: shot 2-6 + voice body + music + SFX + CTA
- ĐỔI: chỉ shot 1 hook + voice hook (3s đầu) + text overlay hook

5 hooks từ bước 1:
1. Pain point: "Da đỏ xài gì cũng châm chích?"
2. Curiosity: "Em này chỉ 300k mà chất như triệu bạc"
3. Before/After: "Da mình 2 tuần trước vs bây giờ..."
4. Social proof: "Sold out 3 lần trên TikTok Shop vì lý do này"
5. Contrarian: "STOP xài toner kiểu này — bạn đang hại da"

**Output:** 5 file `final-v1.mp4` → `final-v5.mp4` — đăng cách nhau 6-12h.

---

### BƯỚC 10: Post + GMV Max Feed
**Output**: `08-tiktok-post.md`

- Post video đầu tiên → first hour protocol (tự comment pin, reply)
- 6-12h sau post variant tiếp theo
- Sau 5 videos → TikTok GMV Max có đủ data → auto-optimize
- Theo dõi video nào CTR cao nhất → scale hook đó

**Caption template (V2):**
- Dưới 150 ký tự
- 3-5 hashtags (3-layer: broad + niche + disclosure)
- Câu hỏi cuối để kích comment
- `#tiktokshopaffiliate` bắt buộc

---

## 📊 KPI Dashboard V2

| Metric | Target | Cách đo |
|---|---|---|
| Completion rate | ≥70% | TikTok Analytics |
| Watch time avg | ≥21s / 30s | TikTok Analytics |
| CTR giỏ hàng | ≥5% | TikTok Shop Center |
| Save rate | ≥1% | TikTok Analytics |
| Share rate | ≥0.5% | TikTok Analytics |
| Hook retention (3s) | ≥85% | Retention curve |

**Nếu < 70% completion**: vấn đề ở pacing/hook → rework.
**Nếu < 5% CTR**: vấn đề ở CTA/product placement → test variant khác.

---

## 🚫 Lessons from V1 (KHÔNG lặp lại)

1. ❌ Viết multi-shot prompt cho Kling (Kling không support → drift)
2. ❌ Viết voice trước khi edit lock (sync sai, phải gen lại)
3. ❌ Dùng Character Reference mỗi lần (drift mặt nhân vật)
4. ❌ Chỉ làm 1 video/sản phẩm (GMV Max thiếu data)
5. ❌ Không có asset library (mỗi lần làm lại từ đầu)
6. ❌ Hook không work on mute (chỉ có voice, không có visual pattern interrupt)
7. ❌ Không tease sản phẩm 5s đầu (trust building chậm)
8. ❌ Không có cliffhanger (viewer drop ở giữa video)

---

## ⚙️ Skill Commands V2 (đề xuất update)

```
/setup-persona          → Bước 0: train Custom Character LoRA (1 lần)
/affiliate-search       → Bước 1: sản phẩm + 5 hook angles
/affiliate-outline      → Bước 2: script outline + storyboard (không full dialogue)
/affiliate-image        → Bước 3: image prompts với LoRA
/affiliate-video        → Bước 4: Kling prompts 1-action/clip + start-end mode
/affiliate-editlock     → Bước 6: raw edit timeline map
/affiliate-voice        → Bước 7: voice script match edit lock
/affiliate-polish       → Bước 8: CapCut final guide
/affiliate-batch        → Bước 9: 5 hook variants
/affiliate-post         → Bước 10: caption + hashtag + GMV Max
```

**Command wrapper full pipeline:**
```
/affiliate-full-v2      → chạy bước 1-10 (tự động pause để user gen media ở bước 5 & 6)
```

---

## 🎯 Expected Improvement V1 → V2.1

| Metric | V1 | V2.1 | Δ |
|---|---|---|---|
| Setup persona | 0 (skip) | 5 min Nano Banana 2 | — |
| Time/frame gen | ~60s | ~30s | **-50%** |
| Time/video (không tính gen) | 90 min | 40 min | **-56%** |
| Videos/sản phẩm | 1 | 5 | **+500%** |
| Character consistency | ~70% | ~92% | **+22pt** |
| **Product label accuracy** | ~60% | ~99% 🔥 | **+39pt** |
| Voice-video sync | ~75% | ~100% | **+25pt** |
| Completion rate (est.) | ~55% | ~72% | **+17pt** |
| Conversion (est.) | 1x | 3-5x | **+300-500%** |

---

## 📚 Sources

- [TikTok Affiliate 2026 Playbook](https://syncly.app/blog/tiktok-affiliate-marketing)
- [Kling 2.5 Prompt Guide — Atlabs](https://www.atlabs.ai/blog/kling-2-5-turbo-prompting-guide)
- [Kling 2.5 Freepik Docs](https://www.freepik.com/ai/docs/kling-2-5)
- [Freepik Custom Characters](https://www.freepik.com/ai/docs/custom-characters-faq)
- [TikTok Algorithm 2026](https://www.go-viral.app/blog/tiktok-algorithm-2026/)
- [CapCut 2025 Fast Editing Workflows](https://www.avramify.com/blogs/news/capcut-2025-fast-editing-workflows-for-viral-tiktoks)
- [ElevenLabs TikTok Voiceover Guide](https://elevenlabs.io/blog/how-to-create-tiktok-voiceovers)
