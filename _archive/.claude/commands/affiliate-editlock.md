# affiliate-editlock — Lock Raw Timeline Before Voice

## Input
$ARGUMENTS (product-slug)

## 🎯 Mục đích
Lock timeline video RAW trước khi viết voice. Đây là điểm khác biệt lớn nhất V2.1 vs V1.

**Tại sao quan trọng:**
- V1: viết voice → gen video → cố sync → lệch → gen lại voice → tốn time
- V2.1: gen video → **lock timeline** → biết chính xác mỗi giây chạy gì → viết voice khớp 100%

## Nhiệm vụ
Claude hướng dẫn user edit raw, sau đó ghi lại timeline chính xác vào file.

## Quy trình

### Phase 1: User edit raw trong CapCut (10-15 phút)

Hướng dẫn user:

1. **New Project** 9:16, 1080p, 30fps
2. **Import 6 clips** Kling đã gen (`clip-1.mp4` → `clip-6.mp4`)
3. **Trim mỗi clip** lấy 2-3s ngon nhất (theo storyboard):
   - Shot 1 Hook: 5s → trim 3.5-4s
   - Shot 2 Problem: 5s → trim 3.5-4s
   - Shot 3 Reveal: 5s → trim 4-4.5s
   - Shot 4 Hero 10s: giữ gần full 8-9s (money shot)
   - Shot 5 Result: 5s → trim 4s
   - Shot 6 CTA: 5s → trim 4.5-5s
4. **Arrange** theo thứ tự storyboard trên timeline
5. **Split mỗi clip thành 2-3 sub-cuts** tại ranh giới action tự nhiên → tạo fast pacing
6. **KHÔNG thêm**: voice, text, music, SFX, transition, filter
7. **Preview** — chỉ video thuần, phải chạy được từ đầu đến cuối
8. **Đọc chính xác duration mỗi cut** từ timeline → báo lại Claude

### Phase 2: Claude ghi edit-lock

User cung cấp timeline chính xác (hoặc screenshot CapCut). Claude ghi vào file.

## Output

Lưu `output/{slug}/05-edit-lock.md`:

```markdown
# Edit Lock V2.1 - {Tên sản phẩm}

## 📊 Timeline chính xác (đã lock)

| Cut | Start | End | Duration | Clip source | Trim | Visual |
|---|---|---|---|---|---|---|
| 1 | 0:00.00 | 0:01.30 | 1.30s | clip-1.mp4 | 0.0-1.3 | Close-up mặt shock nhìn gương |
| 2 | 0:01.30 | 0:02.60 | 1.30s | clip-1.mp4 | 2.0-3.3 | Tay chạm má đỏ |
| 3 | 0:02.60 | 0:03.00 | 0.40s | clip-3.mp4 | 0.0-0.4 | ⭐ TEASE sản phẩm flash |
| 4 | 0:03.00 | 0:05.00 | 2.00s | clip-1.mp4 | 3.5-5.0 | Tilt up thở dài |
| 5 | 0:05.00 | 0:06.50 | 1.50s | clip-2.mp4 | 0.0-1.5 | Đẩy chai cũ |
| 6 | 0:06.50 | 0:08.00 | 1.50s | clip-2.mp4 | 2.0-3.5 | Whip pan chai trượt |
| 7 | 0:08.00 | 0:09.50 | 1.50s | clip-2.mp4 | 3.5-5.0 | Úp mặt tay |
| 8 | 0:09.50 | 0:11.00 | 1.50s | clip-3.mp4 | 0.5-2.0 | Bestie đưa chai |
| 9 | 0:11.00 | 0:13.00 | 2.00s | clip-3.mp4 | 2.0-4.0 | Dolly-in chai hero |
| 10 | 0:13.00 | 0:14.50 | 1.50s | clip-3.mp4 | 4.0-5.0 | Mặt wow |
| 11 ⭐ | 0:14.50 | 0:17.00 | 2.50s | clip-4.mp4 | 2.0-4.5 | MONEY SHOT giọt rơi |
| 12 | 0:17.00 | 0:19.00 | 2.00s | clip-4.mp4 | 6.0-8.0 | Giọt thấm da |
| 13 | 0:19.00 | 0:20.50 | 1.50s | clip-5.mp4 | 0.0-1.5 | Rack focus má→mắt |
| 14 | 0:20.50 | 0:22.50 | 2.00s | clip-5.mp4 | 1.5-3.5 | Pull back cười |
| 15 | 0:22.50 | 0:24.50 | 2.00s | clip-5.mp4 | 3.5-5.0 | Hất tóc slow-mo |
| 16 | 0:24.50 | 0:26.50 | 2.00s | clip-6.mp4 | 0.0-2.0 | Chai + mặt sau |
| 17 | 0:26.50 | 0:28.50 | 2.00s | clip-6.mp4 | 2.0-4.0 | Lean + chỉ tay |
| 18 | 0:28.50 | 0:30.00 | 1.50s | clip-6.mp4 | 4.0-5.0 | Wink + nod CTA |

**Tổng: 30.00s | 18 cuts | avg 1.67s/cut ✅**

## 📌 Key moments
- **Tease sản phẩm**: 0:02.60 (cut 3, 0.4s flash)
- **Money shot**: 0:14.50 (cut 11, giọt rơi 2.5s)
- **Cliffhanger**: 0:18.00 (trước result, ~60% mark)
- **Payoff**: 0:22.50 (cut 15, glow reveal, ~75%)
- **CTA peak**: 0:28.50 (cut 18)

## 🎯 Next steps
User gen voice theo timeline này (mỗi cut có số từ budget cụ thể):
→ Chạy `/affiliate-voice-prompt {slug}`
```

## Sau khi xong
Tự động gợi ý: "Timeline đã lock! Giờ chạy `/affiliate-voice-prompt {slug}` để viết voice khớp chính xác từng cut."
