# Review Meeting Notes — 2026-01-23

**Time:** 4:08 PM - 5:08 PM
**Participants:** Chris, Joel, and others
**Topic:** Fluent Mobile PoC v0.2 Review

---

## Key Decisions

### 1. Consolidate Draft/Review Sections

**Consensus:** The dual-section approach (separate "Your Draft" and "Review") breaks mental model.

> "Why does it have your draft and review as separate boxes? It really could... collapse those two."

> "You're still doing different things to the same file... it breaks your mental model."

**Decision:** Merge into single section with multiple controls.

---

### 2. Waveform Dual-Mode Pattern

**Consensus:** Adopt common pattern of live visualization during recording, timeline when stopped.

> "When recording stops it just shows the full waveform — that's a common pattern."

> "Like YouTube seek bar at bottom... shows amplitude... fixed size regardless of duration."

**Decision:** Implement dual-mode waveform for v0.3.

---

### 3. No Multiple Draft Versions

**Consensus:** Avoid version complexity based on Scribe experience.

> "Multiple drafts is a thing that I feel you don't want to do up front."

> "We had this in Scribe and people got confused with it mostly. Like five versions of it now and which is the real one?"

**Decision:** One recording per stage. Keep it simple.

---

### 4. Play/Pause is Required

**Consensus:** Current play/stop toggle insufficient.

> "We also need to be able to pause it and that's a piece that's not here."

**Decision:** Add pause functionality for v0.3.

---

### 5. Record Append vs. Overwrite

**Consensus:** Need to differentiate behaviors.

> "If I stop I stop recording and now I click record again and it restarted so it's overwriting. So we might need to differentiate."

**Decision:** Add clear UX for "continue" vs "start new".

---

## User Context Insights

### Literacy Spectrum

> "In the OBT space there is quite a bit of variation on the capabilities of people who are on the translation team."

> "In India, we have groups who are able to read... But then there are groups who are completely illiterate."

**Implication:** Must design for both literate and illiterate users.

---

### Text as Secondary

> "Text is not first, but a way to open an accordion and would show the text for those who can read."

> "Audio is primary. Text is probably not visible, and they can make it visible."

**Implication:** Audio-first design. Text as optional overlay.

---

### Three User Flows

Identified three potential user types:
1. Source with text (literate users)
2. Source with audio only (illiterate users)
3. Switchable between both

---

## Technical Insights

### Waveform Purposes (Historical Context)

From 2016 Android recorder experience:

> "They didn't know if it was working or not. So they were stopping and starting."

**Uses identified:**
1. Recording confirmation (visual feedback that it's working)
2. Volume feedback (too quiet/loud)
3. Seeking/scrubbing for longer verses
4. Future: Timestamped comments

---

### AI Features

> "It might be that the AI features, we do not make them available on a phone."

Examples discussed:
- Audio-to-text conversion
- AI evaluation/analysis
- Audio cleanup ("deleting the chickens")

**Consideration:** Mobile as capture device, Web as processing hub.

---

### Screen Space

> "Most phones, even low-end Android phones, can squish more, I feel like."

> "It's good for a user who's low-tech and new to technology to have large buttons... but it's not a good utilization of space."

**Balance:** Large touch targets with efficient space use.

---

## Single Action Per Box Design

Discussed trade-off of current "one action per box" approach:

> "Each box there's only one thing to do so there's no question of what you do with that box."

When merging sections:

> "Once we merge the two together we're basically going to overload a single box for two actions or three actions."

**Challenge:** Maintain clarity when consolidating sections.

---

## Process Notes

- Waveform visualization was invented by AI to solve "how do you visually verify audio?" problem
- PRD versioning system working well (v0.1 → v0.2 → v0.3)
- Hypothesis-driven approach surfacing good questions
- GitHub issues suggested for community feedback

---

## Action Items for v0.3

1. Single Draft Section (consolidate recording + playback)
2. Waveform Dual-Mode (live vs. timeline like YouTube)
3. Play/Pause functionality
4. Record continue vs. overwrite differentiation
5. No multiple drafts (one recording per stage)
6. Lane-level infrastructure pattern

---

## Quotes to Remember

> "You're still doing different things to the same file... it breaks your mental model."

> "When recording stops it just shows the full waveform — that's a common pattern."

> "We had this in Scribe and people got confused with it mostly."

> "Text is not first, but a way to open an accordion."

> "They didn't know if it was working or not."
