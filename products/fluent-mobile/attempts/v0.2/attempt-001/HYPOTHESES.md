# Hypotheses Under Test — Attempt 001 (v0.2)

## Hypothesis Structure

### Umbrella Hypothesis (H1: Mobile Viability)

> Can translators realistically draft and review OBT audio using a mobile companion app?

This is the big question. H2, H3, and H4 are sub-hypotheses that collectively answer H1.

---

## Sub-Hypotheses

### Hypothesis 2: Performance

**Question:** Is it fast enough on their devices?

#### Testing Approach

1. Deploy to Cloudflare Pages (global CDN)
2. Test on available devices (document device specs)
3. If low-end Android available, prioritize that

#### Metrics to Capture

- App launch time (time to interactive)
- Audio playback latency (tap to waveform response)
- Recording start/stop responsiveness
- Memory usage patterns

#### Evidence Needed

- Performance logs from real devices
- Screenshots showing responsive UI
- User frustration observations (if field tested)

#### v0.2 Improvement

- Cloudflare deployment enables real mobile testing
- Waveform provides visual performance feedback

#### Result

**Status:** DEFERRED

**Conclusion:** Cannot validate without low-end Android hardware and public deployment.

**What We Know:**
- Build works locally (17/17 tests)
- No performance issues observed on modern devices
- Real test requires $50-100 Android phones

---

### Hypothesis 3: Workflow Usability

**Question:** Does the flow feel natural?

#### Testing Approach

Multi-screen navigation testing:

1. **Home Screen** — Shows assignment context
2. **Drafting Screen** — Listen → Record → Review flow

Observe: Can users move between screens without confusion?

#### Metrics to Capture

- Navigation success rate
- Time spent on each screen
- Back-navigation usage
- Confusion points

#### Evidence Needed

- Screenshots of both screens
- Navigation flow documentation
- User journey observations (if field tested)

#### v0.2 Improvement

- Multi-screen (vs v0.1 single page) enables real workflow testing
- Waveform provides non-verbal feedback during audio operations

#### Result

**Status:** PARTIAL — UX issues identified

**Conclusion:** The Listen → Record → Review flow technically works, but the UX has problems:

**Issues Identified:**
1. **Dual-section confusion:** "Your Draft" and "Review" show the same audio in two places, breaking mental model
2. **Scrolling friction:** Three stacked sections require scrolling, losing context
3. **Missing play/pause:** Only play/stop toggle; can't pause without losing position

**What We Learned:**
- Consolidate into single "Your Draft" section
- Waveform should have dual modes (live vs. timeline)
- Consider layout alternatives to reduce scrolling

**Recommendation:** Iterate UX before real user testing.

---

### Hypothesis 4: Task Clarity

**Question:** Can they figure it out without training?

#### Testing Approach

Zero-training test:

1. Present the app without explanation
2. Observe navigation and task completion
3. Document every question/hesitation

#### Metrics to Capture

- First-use success rate
- Questions asked
- Wrong taps / missteps
- Time to complete first drafting cycle

#### Evidence Needed

- First-use observation notes
- Question log
- Screenshot of UI showing clarity elements

#### v0.2 Improvement

- Multi-screen tests navigation clarity
- Waveform provides visual confirmation of audio state

#### Result

**Status:** PARTIAL — Needs real user testing after UX iteration

**Conclusion:** Basic flow is clear for simple cases, but:

**What We Validated:**
- Button labels are clear ("Listen", "Record", "Play Draft")
- State indicator provides context
- Disabled states communicate correctly
- Navigation between screens works

**What We Can't Know Yet:**
- Clarity with consolidated single-section layout
- Clarity for users with low tech familiarity
- Clarity under real-world distractions

**Blocked On:** UX iteration (consolidate sections) before meaningful user testing.

---

## Deferred Hypotheses

| # | Hypothesis | Why Deferred |
|---|------------|--------------|
| 5 | Auth & Trust | Requires backend/QR integration |
| 6 | Cultural Fit | Requires multi-region field access |

---

## Evidence Collection Template

For field testing sessions (if applicable):

```markdown
## Field Testing Session: [Date/Location]

### Context
- **Location**: [Where]
- **Participants**: [N users, roles]
- **Devices**: [What phones/tablets]
- **Connectivity**: [WiFi/cellular/intermittent/offline]
- **Duration**: [How long]

### Observations

#### What Worked
- [Observation 1]

#### What Didn't Work
- [Observation 1] — *User quote: "..."*

#### Surprises
- [Something unexpected]

### Hypothesis Conclusions

| Hypothesis | Result | Evidence | Confidence |
|------------|--------|----------|------------|
| H2 | ? | ? | ? |
| H3 | ? | ? | ? |
| H4 | ? | ? | ? |
```
