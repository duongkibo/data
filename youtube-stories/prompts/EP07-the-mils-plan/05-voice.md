# 05 — Voice (ElevenLabs Charlotte, 3 chunks)

> **Tool**: ElevenLabs (elevenlabs.io)
> **Strategy**: 3 chunks tránh character drift + fit char limit

---

## Setup

| Setting | Value |
|---|---|
| Voice | **Charlotte** |
| Voice ID | `XB0fDUnXU5powFXDhCwa` |
| Model | `eleven_multilingual_v2` (hoặc v3 Alpha) |
| Style | Expressive |
| **Speed** | **0.92x** |
| **Stability** | **55%** |
| **Similarity boost** | **80%** |
| **Style exaggeration** | **30%** |

**Backup voices** nếu Charlotte fail:

- Lily: `pFZP5JQG7iQjIQuC4Bku`
- Alice: `Xb7hH8MSUJpSbSDYk0k2`

**Save**: `media/voice/chunk1.mp3` · `chunk2.mp3` · `chunk3.mp3`

---

## Pronunciation hints

| Word | Phonetic |
|---|---|
| Claire | KLAIR |
| Owen | OH-en |
| Renata | reh-NAH-tah |
| Diane | dy-AN |
| provincial | pro-VIN-shul |
| incompatibility | in-com-PAT-ih-BIL-ih-tee |
| clinical | KLIN-ih-kul |
| supervisor | SOO-per-VY-zer |
| manipulation | muh-NIP-yoo-LAY-shun |

---

## Emotion tag legend

| Tag | Meaning |
|---|---|
| `[knowing]` | Controlled, measured — narrator with hindsight. Opening and epilogue. |
| `[warm]` | Soft, grounded — Claire in her good years, husband, community garden memory |
| `[foreboding]` | Measured pull-back, lower register — the campaign building, things feeling slightly wrong |
| `[whispers]` | Near-whisper, intimate — the Sunday morning scene, Owen's hands folded |
| `[heavy]` | Weighted, deliberate — separation, grief, driving home to a quiet house |
| `[careful, building]` | Steady escalation — voicemail discovery, log-making, calling Owen |
| `[knowing, steady]` | Settled authority — karma unfolds, family recalibrates, no gloating |
| `[quiet, final]` | Minimal, contained — Beat 8, Facebook post, files closed |
| `[warm]` (Epilogue) | Fully grounded, soft — married still, promotion, lunch break calls |
| `[inviting]` | Direct to audience, earnest — CTA butterfly |

---

## CRITICAL PERFORMANCE NOTES

**Beat 4 — "She said you told her at Thanksgiving" (Chunk 1 center):**
- After the line: "She said you told her at Thanksgiving that you didn't want children. That you'd decided. And that you'd been lying to me about it for years." — needs **[pause 3s]** before Claire responds internally. Each word of Owen's quote must land distinctly. Do NOT rush. This is the betrayal fulcrum of the episode.

**VM3 and VM5 (Chunk 2 center — Renata's voicemails):**
- Charlotte must shift register for these two quoted sections — Renata's voice is **slightly sweeter, slightly softer, slightly too careful**. Think: a person performing concern rather than feeling it. The sweetness should feel faintly off. This is the most important tonal shift in the episode.
- VM3: "some people aren't built for closeness" — deliver with gentle condescension, not aggression
- VM5: "some women say they want children and then when the real moment comes they realize they don't" — slow, careful, like she's being helpful. The horror is in how reasonable it sounds.

**"I left the room" (Chunk 2 end):**
- "I handed him my phone. [pause 1s] I left the room. [pause 1s] And I let the voicemails do what I never could —" — SLOW. Each sentence its own breath. Claire's restraint here is the emotional climax of Beat 6.

**"Files closed" (Chunk 3 — Beat 8):**
- "Like the end of a long case. [pause 1s] Files closed." — near-whisper, absolutely flat. No satisfaction in her voice. Just quiet finality. This is the hardest register to hold — Charlotte must not let emotion creep in here.

---

## CHUNK 1 — Beats 1–3 + Beat 4 open (~640 words, ~4:20)

Paste NGUYÊN vào ElevenLabs:

```
[knowing] They say a mother's love is unconditional. [pause 1s] Renata loved her son so much [pause 0.5s] she spent four years trying to destroy his marriage. [pause 1s] She almost did it. [pause 1s] The voicemails stopped her.

[pause 2s]

[warm] My name is Claire. I'm 33. I've been a licensed clinical social worker for eight years — the kind of job where you learn very quickly that people will tell you what they want you to see, and hide everything else. [pause 0.5s] You also learn to document. [pause 0.5s] Write things down. [pause 0.5s] Save the receipts. [pause 1s]

I married Owen when I was 28. He was a structural engineer — steady, kind, the type of man who fixed the porch step before I noticed it was loose. We met at a community garden. He was building raised beds for a food bank. That detail still matters to me. [pause 1s]

The first five years of our marriage were genuinely happy. [pause 0.5s] Owen kept a photo of our wedding on his work desk. [pause 0.5s] He called me on his lunch break every day. [pause 0.5s] Every single one. [pause 1s]

The first time I met his mother Renata, she smiled, hugged me warmly, and said, "I've heard so much about you." [pause 0.5s] Something about the way she said it felt like a door closing. [pause 0.5s] I put the feeling away. [pause 1s] I was good at that.

[pause 2s]

[foreboding] The campaign — and I only call it that now because I understand what it was — started in year two of our marriage. [pause 0.5s] It started quietly. [pause 1s]

Owen came home one Tuesday evening and was just slightly off. [pause 0.5s] Shorter in his answers. [pause 0.5s] Distracted at dinner. [pause 0.5s] When I asked if something was wrong, he said his mother had called and she was worried about him. [pause 1s] "Worried about what?" I asked. [pause 1s]

He shrugged. "Just thinks I seem stressed." [pause 2s]

That was the first one. [pause 1s]

Over the following months, the pattern deepened. [pause 0.5s] Renata would call Owen on weekday mornings — the exact window when she knew I was at client sessions, unavailable. [pause 0.5s] Owen would come home carrying something she'd said, something vague and concerning, and he'd be quiet for days. [pause 1s]

Then came the unannounced visits. [pause 0.5s] She'd arrive at our home on weekends with food she'd made — always food Owen loved from childhood — and she'd stay for hours. [pause 0.5s] While I cleaned up in the kitchen, she'd be in the living room with Owen, low voice, leaning in. [pause 1s]

And then the rewrites started. [pause 1s]

Owen mentioned once that his mother said I'd told her at Christmas that I found his job "boring and provincial." [pause 0.5s] I had never said that. [pause 0.5s] I wouldn't. [pause 1s] But the damage was already seeded. [pause 1s]

I started noticing the inconsistencies. The timing. The specific words she attributed to me that I would never use. [pause 0.5s] But I couldn't prove anything. [pause 1s] Not yet.

[pause 2s]

[whispers] The breaking point came on a Sunday morning in March. [pause 1s]

Owen was sitting at the kitchen table when I came downstairs. [pause 0.5s] He hadn't made coffee, which he always did. [pause 0.5s] He was just sitting there, hands folded, looking at the table. [pause 1s]

"My mother thinks we have a fundamental incompatibility," he said. [pause 2s]

I sat down across from him. [pause 0.5s] I asked him what she meant. [pause 1s]

He said — and I remember every word — "She said you told her at Thanksgiving that you didn't want children. That you'd decided. And that you'd been lying to me about it for years." [pause 3s]
```

---

## CHUNK 2 — Beat 4 cont. + Beats 5–7 (~840 words, ~5:45)

Paste NGUYÊN vào ElevenLabs:

```
[whispers] I went completely still. [pause 1s]

I had never said that to Renata. [pause 0.5s] Not at Thanksgiving. Not ever. [pause 0.5s] What I had said — to Owen, privately, six months earlier — was that I was nervous about the timing and wanted another year. [pause 1s] That was a conversation between a husband and wife. [pause 1s] A private conversation. [pause 1s]

Renata had taken something Owen told her in confidence, [pause 0.5s] twisted it beyond recognition, [pause 0.5s] and fed it back to him as a lie I'd told to his face. [pause 2s]

Owen asked me for a separation that afternoon. [pause 0.5s] Not because he wanted to leave. [pause 0.5s] Because he didn't know what was true anymore. [pause 1s]

And sitting there across from the man I loved, [pause 0.5s] I understood for the first time [pause 0.5s] that I was not losing my marriage to a problem between us. [pause 1s] I was losing it to someone who had been standing outside our window for four years. [pause 1s] Watching. [pause 0.5s] Rearranging things.

[pause 2s]

[heavy] Owen moved into a short-term rental two miles from our house. [pause 0.5s] He said it wasn't permanent. [pause 0.5s] Just space to think. [pause 1s] I let him go. I didn't chase him. That part wasn't performance — it was just all I had left. [pause 1s]

I went back to work the following week. [pause 0.5s] I sat across from clients in crisis and I held it together. [pause 0.5s] I drove home to a quiet house and I fell apart. [pause 1s]

But something else was happening underneath the grief. [pause 1s]

I have eight years of training in pattern recognition. [pause 0.5s] In my job, you learn to track behavior across time. [pause 0.5s] Not just what someone says in a session — but what they said three sessions ago, and how it connects. [pause 1s] It is not a skill I can turn off. [pause 2s]

I started going back through the last four years in my head. [pause 0.5s] The Tuesday calls. The unannounced visits. The precise timing of Owen's coldness — always after contact with his mother. [pause 0.5s] The specific phrases he'd attributed to me that I would never say. [pause 1s]

And then I remembered something. [pause 1s]

Eighteen months earlier, Renata had left me a voicemail. [pause 0.5s] Several of them, actually. [pause 0.5s] I had saved them because something felt slightly wrong about the tone. [pause 0.5s] At the time I couldn't name it. [pause 1s]

I went to my phone. I opened the voicemail archive. [pause 0.5s] And I started listening.

[pause 2s]

[careful, building] The voicemails were from across eighteen months. [pause 0.5s] Eight of them. [pause 0.5s] On the surface, they were ordinary. [pause 0.5s] Checking in. Asking about dinner plans. One about a family reunion in July. [pause 1s]

But when I listened with fresh ears — knowing what I now knew — [pause 1s] they told a completely different story. [pause 2s]

In the third voicemail, from fourteen months ago, Renata said: [pause 1s] "Claire, sweetheart, I just wanted to make sure you two are okay. Owen mentioned he feels like you've been pulling away. I told him that's probably just how you are with family — some people aren't built for closeness. I hope I said the right thing." [pause 2s]

Owen had never said that to me. [pause 0.5s] He'd never complained about distance. [pause 0.5s] But after that call, he'd been withdrawn for two weeks. [pause 1s]

The fifth voicemail, from nine months ago: [pause 0.5s] "I know you've both been talking about kids. I told Owen — and I hope you don't mind — that some women say they want children and then when the real moment comes they realize they don't. I just want him to go in with his eyes open. He deserves that." [pause 2s]

She had planted the seed. [pause 0.5s] She had planted it deliberately, in his ear, without my knowledge, and then waited for it to grow. [pause 1s]

I sat in my home office for two hours. [pause 0.5s] I made a written log — dates, timestamps, what she said, what Owen's behavior had been in the week following each voicemail. [pause 0.5s] The correlation was exact. [pause 1s]

Then I called Owen. [pause 0.5s] Not to fight. [pause 0.5s] Not to accuse. [pause 1s] I said: [pause 0.5s] "I found something I think you should hear. [pause 0.5s] You don't have to do anything about it. [pause 0.5s] I just want you to have the information I have." [pause 1s]

He came over that evening. [pause 0.5s] I handed him my phone. [pause 1s] I left the room. [pause 1s] And I let the voicemails do what I never could — [pause 0.5s] speak for themselves.

[pause 2s]

[knowing, steady] Owen listened to all eight voicemails. [pause 0.5s] I don't know how many times he played them back. [pause 0.5s] I was in the kitchen, hands wrapped around a mug of tea that went cold, [pause 0.5s] and I just waited. [pause 2s]

When he came to find me, his face was something I had never seen before. [pause 0.5s] Not anger. [pause 0.5s] Not embarrassment. [pause 1s] Something quieter and more devastating than either. [pause 1s] He sat down across from me and said, [pause 0.5s] "How long did you know?" [pause 1s]

I told him honestly: I suspected something for years. [pause 0.5s] I could never prove it. [pause 0.5s] I didn't want to make him choose. [pause 1s]

He was quiet for a long time. [pause 0.5s] Then he said, "I need to call her." [pause 2s]

I don't know exactly what was said in that phone call. [pause 0.5s] Owen took it in the backyard. [pause 0.5s] I watched through the kitchen window as he stood very still, listening. [pause 0.5s] Then he spoke for a long time. [pause 0.5s] Then he stopped. [pause 0.5s] When he came back inside, he said, [pause 1s] "She told me you'd engineered all of this. That you'd faked the voicemails somehow. That this is exactly what she warned me about — that you were manipulative and calculated." [pause 2s]

He paused. [pause 1s] "Those are voicemails from her own phone number. From her own voice. [pause 0.5s] I've been listening to my mother my whole life. [pause 0.5s] I know what she sounds like when she's performing." [pause 2s]

Owen filed a no-contact order against his mother three weeks later. [pause 0.5s] Not at my suggestion. [pause 0.5s] His idea. His lawyer. His decision. [pause 1s]

Renata didn't accept it quietly. [pause 0.5s] She called Owen's sister Diane. [pause 0.5s] She called his cousin Marcus. [pause 0.5s] She framed it as Claire's doing — that I had poisoned Owen against his own family. [pause 1s]

Owen sent Diane and Marcus the voicemails. [pause 0.5s] Both of them. [pause 0.5s] Unedited. [pause 1s]

Diane called Owen and cried. [pause 0.5s] She said she'd been on the receiving end of Renata's rewrites for twenty years and had never had proof. [pause 1s]

Marcus stopped responding to Renata's calls. [pause 1s]

At Christmas that year, Renata was not invited to a single family gathering. [pause 0.5s] Not because Owen asked them to exclude her. [pause 0.5s] Because, one by one, the people who had trusted her [pause 0.5s] quietly recalculated everything she had ever told them. [pause 1s]

Owen and I went back to couples therapy. [pause 0.5s] Real work. Slow work. [pause 0.5s] Not a fairy tale reconciliation — a careful rebuilding of something that had been quietly damaged for years. [pause 1s] Some weeks were hard. [pause 0.5s] Some weeks felt like starting over. [pause 0.5s] But we kept going.
```

---

## CHUNK 3 — Beat 8 + Epilogue + CTA (~420 words, ~2:55)

Paste NGUYÊN vào ElevenLabs:

```
[quiet, final] About eight months after the no-contact order, Renata posted something on Facebook. [pause 1s] A long post about how a good mother gives everything to her children, [pause 0.5s] and sometimes love isn't enough to protect them from the people they choose. [pause 0.5s] About how she had sacrificed, and waited, and done everything right, [pause 0.5s] and still ended up alone. [pause 1s]

She did not name me. [pause 0.5s] She didn't have to. [pause 1s]

No one commented. [pause 1s] One person liked it — a friend from her church who didn't know the context. [pause 0.5s] That was it. [pause 2s]

Owen saw it and didn't respond. [pause 0.5s] Diane saw it and didn't respond. [pause 0.5s] I saw it from a mutual connection — someone who tagged me in private, not to stir things up, just to let me know. [pause 1s]

I looked at the post for a moment. [pause 0.5s] And I felt something I hadn't expected. [pause 1s] Not satisfaction. [pause 0.5s] Not anger. [pause 1s] Just a kind of clear, settled quiet. [pause 1s] Like the end of a long case. [pause 1s] Files closed. [pause 0.5s] Nothing left to prove.

[pause 2s]

[warm] That was two years ago. [pause 1s]

Owen and I are still married. [pause 0.5s] Still in the same house. [pause 0.5s] Still working on it — and I mean that in the best possible way. [pause 0.5s] The kind of working on it where you choose each other deliberately instead of just assuming the other one will always be there. [pause 1s]

Last spring, I was promoted to Clinical Supervisor at my agency. [pause 0.5s] I now train new social workers on documentation practices. [pause 0.5s] On how to track patterns across time. [pause 0.5s] On why what seems small in isolation can mean everything in context. [pause 1s]

Owen still calls me on his lunch break. [pause 0.5s] Not every day anymore. [pause 0.5s] Most days. [pause 1s]

We talked about having a child. [pause 0.5s] We're still talking. [pause 0.5s] It's a real conversation now — [pause 0.5s] not one someone else decided for us. [pause 1s]

And the voicemails. [pause 1s] I still have them. [pause 0.5s] All eight. [pause 0.5s] I've never deleted them. [pause 1s] Not because I need them. [pause 0.5s] Because they remind me that the truth doesn't disappear just because someone tells a louder story. [pause 1s] It waits.

[pause 2s]

[inviting] If you've ever had someone quietly work against you — and you didn't have the words for it until much later — leave a butterfly in the comments. [pause 0.5s] Every butterfly is someone who held on to the truth long enough for it to matter. [pause 1s]

Subscribe to Karma Caught Up for more stories where patience outlasted the plan. [pause 0.5s] Because sometimes [pause 0.5s] the most powerful thing you can do [pause 0.5s] is simply keep the receipts. [pause 1s]

This story is fictional and dramatized for entertainment. Any resemblance to real persons is coincidental. [pause 0.5s] But the patterns? [pause 0.5s] Those are very real. [pause 1s] See you Tuesday.
```

---

## Post-production notes

- **Gap between chunks**: leave 0.2s natural silence at joins in CapCut — Charlotte's pacing already accounts for it
- **Critical listen check — Chunk 1**: "She said you told her at Thanksgiving that you didn't want children." — verify Charlotte slows to near-whisper and the [pause 3s] fully lands before the next line. If she rushes the reveal, re-gen that paragraph separately and splice in CapCut
- **Critical listen check — Chunk 2 VM3/VM5**: Renata's voicemail quotes must sound distinctly different from Claire's narration — slightly sweeter, slightly too measured. If Charlotte delivers them in the same register as the rest, re-gen those lines with Style exaggeration bumped to 40% for those segments only, then splice in CapCut
- **Critical listen check — Chunk 3**: "Files closed." — flat, near-whisper, no emotion. If Charlotte sounds even slightly relieved or satisfied, re-gen. This must sound like a professional closing a case file, not a person celebrating
- **Volume normalize**: -16 LUFS before export; BGM sits at -18dB underneath
- **Total runtime target**: 11:20–11:45 at 0.92x with all pauses landing
