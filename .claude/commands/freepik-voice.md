# freepik-voice — ElevenLabs Voice Script Reference

## Input
$ARGUMENTS (product-slug)

## 🚨 QUAN TRỌNG
Bước này chạy **SAU khi user đã edit lock raw video**.
Input: `output/{slug}/05-edit-lock.md` (timeline chính xác mỗi cut).

## Triết lý V2.1
Voice phải khớp 100% với video đã lock. KHÔNG viết voice trước rồi hope nó khớp.

## Công thức pacing (research 2026)
- **15s TikTok = 45-55 từ tiếng Việt** (natural pace)
- **30s = 90-110 từ**
- Mỗi cut: 1-3 từ max
- Voice phải "thở" chứ không nhồi

## Tool lựa chọn

### Option A: CapCut TTS Vietnamese (KHUYÊN DÙNG)
**Pros**:
- Chất lượng VN tốt hơn ElevenLabs (native VN voices)
- Miễn phí, tích hợp thẳng timeline CapCut
- Không phải export/import
- Đồng bộ ngay với timeline

**Cách làm**:
1. CapCut → Text → Text to Speech
2. Chọn voice VN nữ trẻ (Mai, Linh, Hoa...)
3. Paste script từng câu theo cut
4. Adjust speed 1.0-1.1x

### Option B: Freepik ElevenLabs v3 (premium)
**Khi dùng**: Khi cần voice unique, expressive hơn, có emotion tags.

## Quy trình

### 1. Đọc edit-lock.md
Biết chính xác mỗi cut đang chạy gì, duration bao nhiêu.

### 2. Tính ngân sách từ
```
Ví dụ edit-lock có 17 cuts trong 29s:
- Cut 1: 0.00-1.30 (1.3s) → 4 từ max
- Cut 2: 1.30-2.60 (1.3s) → 4 từ max
- Cut 3: 2.60-3.00 (0.4s) → 1-2 từ (tease)
- Cut 10: 14.5-17.0 (2.5s, money shot) → 6-7 từ
- ...
```

### 3. Viết dialogue match từng cut
Mỗi cut = 1 ý hoàn chỉnh, không dài hơn ngân sách.

### 4. Add emotion tags (chỉ khi dùng ElevenLabs)
- `[curious]` hook + problem
- `[excited]` reveal + demo
- `[warm]` result + CTA
- `[pause 0.5s]` chỉ giữa ý lớn

## Template voice V2.1

```
[0:00-0:03] Hook + pain point (8-10 từ)
[0:03-0:05] Agitation (4-5 từ)
[0:05-0:10] Problem list (12-14 từ)
[0:10-0:15] Reveal + name (10-12 từ)
[0:15-0:25] Hero demo (18-22 từ — chậm rãi, savoring)
[0:25-0:30] Result + CTA + question (15-18 từ)
```

**Total: ~90-100 từ cho 30s** ✅

## Best practice tiếng Việt TTS

1. **Phonetic cho brand**: "SKIN1004" → "Skin một không không bốn"
2. **Không lặp từ liên tiếp**: "3 giây thôi á. 3 GIÂY" → sửa thành "trong đúng 3 giây"
3. **Tránh từ kép khó đọc**: "vàng vàng" → "màu vàng"
4. **Câu ≤8 từ**: càng ngắn càng rõ
5. **Pause sau ý, không giữa câu**
6. **Không slang quá nặng**: "hong dám soi gương" → "không dám soi gương" (TTS dễ đọc hơn)

## Output

Lưu `output/{slug}/06-voice-script.md`:

```markdown
# Voice Script V2.1 - {Tên sản phẩm}

## Tool: CapCut TTS Vietnamese (recommended)
- Voice: Mai / Linh / Hoa (nữ trẻ)
- Speed: 1.0-1.1x
- Integrate thẳng vào CapCut timeline

## 📝 Script theo edit-lock timeline

| Cut | Time | Duration | Từ budget | Dialogue |
|---|---|---|---|---|
| 1 | 0:00-0:01.3 | 1.3s | 4 từ | "Bồ ơi!" |
| 2 | 0:01.3-0:02.6 | 1.3s | 4 từ | "Da mình đỏ quá!" |
| 3 | 0:02.6-0:03.0 | 0.4s | 0 từ | (SFX only — tease) |
| 4 | 0:03-0:04.5 | 1.5s | 4 từ | "Skincare girl phản chủ..." |
| ... | ... | ... | ... | ... |

## 📄 Script đầy đủ (copy vào CapCut TTS)

**Câu 1** (0:00-0:03):
> "Bồ ơi! Da mình đỏ quá! Skincare girl mà phản chủ..."

**Câu 2** (0:03-0:05):
> "Hết cứu rồi đó các chế."

**Câu 3** (0:05-0:10):
> "Toner đắt châm chích. Serum xịn đỏ lè. Tưởng toang rồi."

**Câu 4** (0:10-0:15):
> "Đến khi mình thấy em rau má Madagascar này..."

**Câu 5** (0:15-0:25) — hero demo:
> "Đổ ra tay trong vắt như nước lọc. Thấm vào da trong đúng 3 giây!"

**Câu 6** (0:25-0:30) — result + CTA:
> "2 tuần sau — da mịn glow hẳn ra! Hơn 300k thôi bồ ơi. Bấm giỏ hàng vàng nha!"

## 💡 Tips nếu voice chưa đạt
1. TTS đọc sai brand → phonetic: "Skin một không không bốn"
2. Tốc độ lệch → adjust speed 0.95-1.1x
3. Cảm xúc không rõ → đổi voice khác, ưu tiên voice trẻ
4. Dài hơn budget → cắt từ đệm

## Timing verification
- Tổng từ: ~95 ✅ (target 90-110 cho 30s)
- Longest cut: 10s hero với 18 từ ✅ (1.8 từ/s, hợp lý cho savor)
```

## Sau khi xong
Gợi ý user import voice vào CapCut + bắt đầu polish `/affiliate-edit {slug}`.
