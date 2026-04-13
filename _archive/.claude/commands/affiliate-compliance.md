# affiliate-compliance — Legal Blacklist Check (TikTok Shop VN)

## Input
$ARGUMENTS (product-slug hoặc file script cần check)

## 🎯 Mục đích
Kiểm tra script/caption/voice trước khi post để TRÁNH BAN TikTok Shop VN.

## ⚠️ Tại sao critical
TikTok Shop VN 2026 policy cực khắt khe với beauty/health claims:
- 1 vi phạm = shadow ban (reach giảm 80%)
- 3 vi phạm = ban vĩnh viễn account
- Nghiêm trọng = mất affiliate access hoàn toàn

## 🔴 BLACKLIST (CẤM DÙNG)

### Medical claims
- trị, chữa, điều trị
- khỏi, hết hoàn toàn
- viêm, dermatitis, eczema, rosacea
- thuốc, điều trị y khoa

### Superlative claims (không có bằng chứng)
- số 1, tốt nhất, nhất thế giới
- 100%, tuyệt đối, chắc chắn
- không đối thủ, vô địch
- duy nhất trên thị trường

### Unverifiable stats
- Claim con số cụ thể (256%, 90%, 7 ngày...) — trừ khi có clinical proof link
- "Sold out X lần" — cần proof
- "Triệu người dùng" — cần source

### Guarantees
- Cam kết, bảo đảm, guarantee
- Hoàn tiền nếu không hiệu quả
- 100% hiệu quả
- Hoàn toàn an toàn

### Absolute negatives
- Không có tác dụng phụ
- Không kích ứng
- Dùng cho mọi loại da

## 🟢 WHITELIST (AN TOÀN)

### Soft claims
- hỗ trợ giảm, giúp cải thiện
- phù hợp với, thích hợp cho
- được nhiều người review tốt
- được yêu thích bởi...
- trong top sản phẩm được...

### Personal experience
- "cảm nhận cá nhân của mình"
- "trải nghiệm của bản thân"
- "kết quả có thể khác nhau tùy người"
- "da mình thấy..."

### Soft stats (có hedge)
- "có thể giúp... rõ rệt"
- "cảm giác... hơn hẳn"
- "sau một thời gian sử dụng"

## 🔄 REWRITE RULES

| ❌ Sai | ✅ Đúng |
|---|---|
| Trị mụn | Hỗ trợ giảm mụn |
| Trị thâm | Giúp làm mờ thâm |
| Cứu tinh da kích ứng | Dịu nhẹ cho da kích ứng |
| Số 1 Nhật Bản | Được yêu thích tại Nhật Bản |
| 256% hydration | Cảm giác hydrat hóa rõ rệt |
| 7 ngày da glass skin | Sau 1-2 tuần cảm nhận khác biệt |
| 100% thấm nhanh | Thấm nhanh vào da |
| Cam kết hiệu quả | Trải nghiệm cá nhân của mình |
| Cháy hàng 3 lần | Được nhiều người yêu thích |
| Không kích ứng | Dịu nhẹ với da nhạy cảm |

## Quy trình check

### 1. Đọc files cần check
- `01-script-outline.md`
- `06-voice-script.md`
- `08-tiktok-post.md` (caption)

### 2. Scan từng line cho blacklist words
Dùng grep mental scan hoặc search pattern.

### 3. Flag violations
Report mỗi violation kèm:
- File + line number
- Word vi phạm
- Category vi phạm
- Rewrite suggestion

### 4. Generate corrected version
Tự động rewrite nếu user OK.

## Output

Lưu `output/{slug}/compliance-report.md`:

```markdown
# Compliance Report — {Sản phẩm}

## Status: ⚠️ 3 violations found / ✅ PASS

## Violations

### Violation 1
- **File**: 06-voice-script.md line 15
- **Text**: "cứu tinh da kích ứng"
- **Issue**: Medical/superlative claim
- **Fix**: "dịu nhẹ cho da kích ứng"
- **Status**: ❌ REQUIRED FIX

### Violation 2
- **File**: 01-script-outline.md line 23
- **Text**: "256% hydration"
- **Issue**: Unverifiable stat
- **Fix**: "cảm giác hydrat hóa rõ rệt"
- **Status**: ❌ REQUIRED FIX

### Violation 3
- **File**: 08-tiktok-post.md line 3
- **Text**: "#1 Japan 20 năm"
- **Issue**: Superlative without verification
- **Fix**: "được yêu thích tại Nhật Bản 20 năm"
- **Status**: ❌ REQUIRED FIX

## Auto-rewrite preview

### 06-voice-script.md
Original: "em này là cứu tinh da kích ứng"
Rewritten: "em này dịu nhẹ với da kích ứng"

### 01-script-outline.md
Original: "Hydration 256%"
Rewritten: "Cảm giác hydrat hóa rõ rệt"

## Sign-off
- [ ] User approved rewrite
- [ ] Applied to files
- [ ] Ready to post
```

## Sau khi xong
Sau khi fix xong → chạy `/affiliate-post` để generate caption final.
