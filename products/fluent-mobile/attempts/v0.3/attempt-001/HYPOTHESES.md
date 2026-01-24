# Hypotheses Under Test — Attempt 001 (v0.3)

## Hypothesis Structure

### Umbrella Hypothesis (H1: Mobile Viability)

> Can translators realistically draft and review OBT audio using a mobile companion app?

H3 and H4 are sub-hypotheses that contribute to answering H1.

---

## Hypotheses Being Tested

### Hypothesis 3: Workflow Usability

**Question:** Does the single-section UI feel more natural than v0.2's dual-section?

#### What v0.2 Taught Us

- Dual "Your Draft" and "Review" sections showed same audio in two places
- Quote: "You're still doing different things to the same file... it breaks your mental model"
- Quote: "Two places... you're doing the same thing"

#### v0.3 Approach

Single section that handles:
1. Recording (waveform in live mode)
2. Playback (waveform in timeline mode)
3. Play/pause (preserves position)

#### Metrics to Capture

- Does the consolidated layout feel clearer?
- Do users understand one section = one audio?
- Is the mode switch (live → timeline) intuitive?

#### Evidence Needed

- Screenshots showing single-section layout
- Screenshots showing waveform mode transitions
- Comparison notes vs. v0.2

#### Expected Result

**If VALIDATED:** Single section reduces confusion, users understand "one audio, one place."

**If INVALIDATED:** Learn why — maybe the separation served a purpose we didn't see.

---

### Hypothesis 4: Task Clarity

**Question:** Do play/pause and timeline mode clarify what to do next?

#### What v0.2 Taught Us

- No pause functionality — only play/stop
- Quote: "We also need to be able to pause it and that's a piece that's not here"
- Quote: "If you're recording a verse which is multiple sentences even, you usually might want to seek pretty quickly to different parts"

#### v0.3 Approach

1. **Play/Pause** — Pause preserves position, triggers timeline mode
2. **Timeline Mode** — Shows full waveform when stopped, like YouTube seek bar
3. **Live Mode** — Animated during recording/playback

#### Metrics to Capture

- Is the play/pause behavior intuitive?
- Does timeline mode communicate "you can seek here"?
- Is the mode transition smooth?

#### Evidence Needed

- Screenshots showing pause state with timeline
- Screenshots showing playback with position indicator
- Waveform showing both modes

#### Expected Result

**If VALIDATED:** Play/pause + timeline makes position management clear.

**If INVALIDATED:** Learn what's still confusing about state/position.

---

## Deferred Hypotheses

| # | Hypothesis | Why Deferred |
|---|------------|--------------|
| 2 | Performance | Requires low-end Android hardware |
| 5 | Auth & Trust | Requires backend/QR integration |
| 6 | Cultural Fit | Requires multi-region field access |

---

## Evidence Collection

For each hypothesis, document:

```markdown
## Hypothesis N: [Name]

**Approach:** [How we tested it]

**Observations:**
- [What happened]
- [What the UI showed]
- [Comparison to v0.2]

**Conclusion:** VALIDATED | INVALIDATED | INCONCLUSIVE

**Learnings:**
- [What we now know]
- [What this implies for next iteration]

**Evidence:**
- [Links to screenshots]
```
