# affiliate-script — Outline + Storyboard (No Full Dialogue)

## Input
$ARGUMENTS (product-slug)

## 🚨 KHÁC V1
V2.1 chỉ viết **OUTLINE + STORYBOARD**, KHÔNG viết full dialogue.
Dialogue/voice script sẽ viết ở Bước 7 SAU khi edit lock (để match timing chính xác).

## Lý do
- V1 viết full script trước → lúc edit video timing lệch → voice không khớp
- V2.1 outline → gen visual → edit lock → viết voice match chính xác từng giây

## Nhiệm vụ
Viết outline + storyboard cho video 30s với văn phong hài, tự giễu Gen Z.

## 🎭 Nguyên tắc văn phong (giữ từ V1)
- **Self-deprecating humor** (tự giễu)
- **Dramatic exaggeration** (so sánh phóng đại)
- **Gen Z VN slang**: bồ ơi, chế ơi, tụi mày, slay, cháy, tủ, đỉnh, xỉu, hết cứu, hong
- **Câu ngắn punchy** (≤8 từ)
- **Self-deprecating punchlines**

## 🎬 Storyboard structure V2.1 (6 shots, hybrid duration)

| Shot | Duration | Beat | Visual action | Có sản phẩm? | Mood |
|---|---|---|---|---|---|
| 1 | 5s | HOOK | Close-up mặt shock/worried, pain point visual | ❌ (hoặc tease 0.3s) | Worried + text pop |
| 2 | 5s | PROBLEM | Đẩy chai cũ, frustration | ❌ | Annoyed |
| 3 | 5s | REVEAL | Bestie đưa sản phẩm, hero shot | ✅ | Hopeful + sparkle |
| **4** | **10s** | **DEMO HERO** ⭐ | **Texture pour + apply macro** | **✅ heavy** | **Satisfying K-beauty** |
| 5 | 5s | RESULT | Glow result, before/after | ❌ | Confident glow |
| 6 | 5s | CTA | Chai + gesture giỏ hàng | ✅ | Inviting friendly |

**Total raw: 35s → edit down 28-30s**

## Completion rate engineering (QUAN TRỌNG)
- **Open loop 0-3s**: Hook ra vấn đề + text pop + TEASE sản phẩm 0.3s flash (không reveal hẳn)
- **Cliffhanger 60% (~0:18s)**: ngay trước result, voice nói "đây là cái làm mình shock..."
- **Payoff 90% (~0:27s)**: glow result full
- **CTA 95-100%**: giỏ hàng

## Output

Lưu 2 files:

### 1) `output/{slug}/01-script-outline.md`
```markdown
# Script Outline V2.1 - {Tên sản phẩm}

## Concept
- **Tone**: Hài tự giễu Gen Z
- **Target**: {audience}
- **Duration**: 30s (35s raw → trim 28-30s)
- **Hook type**: {1 trong 5 angles từ batch-variants.md}

## Beat outline (chỉ ý chính, không dialogue đầy đủ)

### HOOK (0-5s)
- **Ý chính**: {1 câu tóm tắt pain point hài}
- **Text overlay**: "DA ĐỎ KÍCH ỨNG? 🦞"
- **Tease sản phẩm**: 0.3s flash chai ở 0:02

### PROBLEM (5-10s)
- **Ý chính**: Các giải pháp cũ đều fail
- **Emotion**: Frustration hài

### REVEAL (10-15s)
- **Ý chính**: Bestie giới thiệu sản phẩm
- **Text overlay**: "{TÊN SẢN PHẨM}"
- **Mood**: Vị cứu tinh, sparkle

### HERO DEMO (15-25s) ⭐ 10s
- **Ý chính**: Texture pour macro + apply
- **Money shot**: Giọt rơi slow-mo 2-3s
- **USP**: "100% rau má Madagascar"

### RESULT (25-30s)
- **Ý chính**: Transformation before/after
- **Mood**: Glow up confident
- **Cliffhanger**: Teaser "đây là sau 2 tuần..."

### CTA (30-35s)
- **Ý chính**: Giá + bấm giỏ hàng + question
- **Text overlay**: "LINK GIỎ HÀNG 🛒⬇️"

## Key messages (để Bước 7 viết voice)
- Pain: {da đỏ kích ứng}
- Solution USP: {rau má Madagascar, thấm nhanh}
- Result: {glow 2 tuần}
- Price: {300k}
- CTA question: {dùng gì cho da nhạy cảm?}
```

### 2) `output/{slug}/02-storyboard.md`
```markdown
# Storyboard V2.1 - {Tên sản phẩm}

## Shot list

### SHOT 1 — Hook (5s)
- **Type**: Close-up portrait
- **Visual**: Mặt worried, má đỏ, tay chạm má
- **Persona**: persona-worried.png
- **Sản phẩm**: ❌
- **Mood**: Sad worried
- **Camera**: Handheld subtle shake + push-in

### SHOT 2 — Problem (5s)
- **Type**: Medium shot
- **Visual**: Đẩy chai cũ (generic) dramatic
- **Persona**: persona-worried.png
- **Sản phẩm**: ❌
- **Mood**: Annoyed frustrated
- **Camera**: Whip pan theo tay

### SHOT 3 — Reveal (5s)
- **Type**: Medium shot + hero
- **Visual**: Cầm chai SKIN1004, mặt wow hopeful
- **Persona**: persona-smile.png
- **Sản phẩm**: ✅ (cầm tay)
- **Mood**: Hopeful sparkle
- **Camera**: Dolly-in + rotate quanh chai

### SHOT 4 — HERO DEMO ⭐ (10s, Start+End)
- **Type**: Extreme macro
- **Visual START**: Dropper tilt trên palm, chuẩn bị rơi giọt
- **Visual END**: Giọt thấm vào da glow
- **Persona**: persona-smile.png (chỉ bàn tay)
- **Sản phẩm**: ✅ heavy
- **Mood**: Satisfying K-beauty
- **Camera**: Slow push-in to macro

### SHOT 5 — Result (5s)
- **Type**: Portrait
- **Visual**: Glow skin clear, smile confident, hất tóc
- **Persona**: persona-smile.png
- **Sản phẩm**: ❌
- **Mood**: Confident glow
- **Camera**: Rack focus + pull back

### SHOT 6 — CTA (5s)
- **Type**: Medium + product
- **Visual**: Chai trên bàn, tay chỉ vào góc phải-dưới
- **Persona**: persona-smile.png
- **Sản phẩm**: ✅ (tĩnh)
- **Mood**: Inviting friendly wink
- **Camera**: Dolly-in + lean forward
```

## Sau khi xong
Confirm storyboard với user → gợi ý `/affiliate-image-prompt {slug}`.
