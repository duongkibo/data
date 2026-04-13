# Voice Script — Mittens Day 47 (ElevenLabs v3)

> **Note**: Vì Veo 3 đã gen voice native cho 4 talking shots (Clip 5, 8, 13, 15),
> phần voice ElevenLabs này dùng cho **NARRATOR LINES** (Clip 2, 11, intro/outro narration).
> Hoặc nếu Veo 3 gen voice không match tone Mittens → fallback dùng full ElevenLabs.

## 🎙️ ElevenLabs setup
- URL: https://www.freepik.com/pikaso/voiceover-generator hoặc elevenlabs.io
- **Model**: ElevenLabs v3 (Alpha)
- **Voice**: **Charlotte** (British female mature, sardonic perfect)
- **Fallback**: Lily, Jane (BR female alternatives)
- **Style**: **Expressive**
- **Speed**: 1.0x
- **Stability**: 50%
- **Similarity**: 75%

## 📝 FULL SCRIPT (fallback nếu Veo 3 fail)

```
[sardonic] Day forty-seven. The slave's alarm has gone off again. [pause 1s] [thoughtful] I've calculated the optimal moment to strike. He always presses the snooze button. [dramatic] Pathetic. So predictable. [pause 0.7s] [calm menacing] Phase one: occupy his airway. Phase two: claim the warm spot. Phase three: maintain eye contact until he questions his life choices. [pause 1s] [confused] Wait. He's... rubbing the spot. Behind the ears. [pause 0.5s] The forbidden spot. [pause 0.5s] [defeated] Damn it. [pause 0.7s] [reluctant warm] I yield. Today only. [pause 0.3s] Tomorrow we resume hostilities. [pause 1s] [menacing whisper] Subscribe. [pause 0.3s] Or I'll know.
```

**Total: ~75 từ | Duration target: 28-32 giây (slow paced)**

## 📊 Per-clip narration breakdown

### CLIP 5 (8-11s) — Plotting setup
> "I've calculated the optimal moment to strike. He always presses the snooze button. Pathetic."

→ Veo 3 GEN VOICE NATIVE — không cần ElevenLabs

### CLIP 8 (17-20s) — Phase three stare
> "Phase three: maintain eye contact until he questions his life choices."

→ Veo 3 GEN VOICE NATIVE

### CLIP 13 (37-42s) — The betrayal
> "Wait. He's rubbing the spot. The forbidden spot. Damn it."

→ Veo 3 GEN VOICE NATIVE

### CLIP 15 (46-49s) — CTA
> "Subscribe. Or I'll know."

→ Veo 3 GEN VOICE NATIVE

### NARRATOR (overlay all clips not Veo 3)
Phần này dùng ElevenLabs Charlotte vì Kling 2.5 không có voice:

**Track narrator clip 1-4** (0-8s):
> "Day forty-seven. The slave's alarm has gone off again."

**Track narrator clip 6-7** (11-17s):
> "Phase one: occupy his airway. Phase two: claim the warm spot."

**Track narrator clip 9-12** (20-37s):
> [pause 2s pre-twist] "I yield. Today only. Tomorrow we resume hostilities."

→ Tổng narrator track: ~30 từ × ElevenLabs Charlotte

## 🎯 ElevenLabs script (chỉ phần narrator, NOT Veo 3 clips)

```
[sardonic] Day forty-seven. The slave's alarm has gone off again. [pause 1.5s]

[whispers menacing] Phase one: occupy his airway. [pause 0.5s] Phase two: claim the warm spot. [pause 1.5s]

[reluctant warm] I yield. Today only. [pause 0.3s] Tomorrow we resume hostilities.
```

**~30 từ | Sync vào timeline gaps giữa Veo 3 clips**

---

## 🔧 Troubleshooting

### Nếu Veo 3 gen voice không match Mittens character
1. Disable Veo 3 voice generation
2. Use full ElevenLabs script (tất cả 75 từ phía trên)
3. CapCut sync với video bằng cách trim/extend clips

### Nếu Charlotte voice không khớp British accent
- Try **Lily** (alternative BR female mature)
- Try **Sarah** (BR female slightly older)
- Stability lower 40% để có variation

### Nếu pronunciation sai
- "phase" → check sound clear
- "forty-seven" → spell "forty seven" not "47"
- "audacity" → emphasize accent

## 📦 Output files
- `voice-narrator.mp3` (ElevenLabs narrator track)
- (Veo 3 voices embedded trong video clips, không cần file riêng)

## Sau khi xong
Đưa narrator MP3 vào CapCut → tiếp `/yt-edit 01-mittens-monday-blues`
