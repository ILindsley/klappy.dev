# Hypotheses Under Test — Attempt 001

## Attempt Scope

This attempt tests 3 of the 6 PRD hypotheses. We're starting with the ones that can be validated with minimal implementation and inform whether to continue.

---

## Hypothesis 2: Performance

**Question:** Does app performance on real, low-to-mid-tier Android devices sustain usage without frustration?

### Testing Approach

Build minimal PWA and test on real devices across tiers:

| Tier | Example Devices | Priority |
|------|-----------------|----------|
| Low | $50-100 Android, 2-3GB RAM, older chipset | HIGH — target users |
| Mid | $150-250 Android, 4GB RAM, recent chipset | Medium |
| High | Flagship phones | Low — not representative |

### Metrics to Capture

- App launch time (time to interactive)
- Audio playback latency (tap to sound)
- Recording start/stop responsiveness
- Memory usage under load
- Behavior with low storage

### Evidence Needed

- Performance logs from 3+ real devices
- User frustration observations
- Crash/hang documentation

### Warning Signs

- Users complain about slowness
- App crashes on older devices
- Audio skips or stutters
- Noticeable delay between actions

### Result

**Status:** DEFERRED

**Conclusion:** Cannot validate in this attempt — requires low-end Android devices.

**Reason for Deferral:** 
- Current test devices are modern iPhones (not representative of target users)
- Need actual $50-100 Android devices to properly test
- Will require public deployment to test on real mobile devices

**Evidence:** N/A — deferred to future attempt with proper hardware

---

## Hypothesis 3: Workflow Usability

**Question:** Do audio-centric workflows (listen → record → review) feel natural and non-patronizing?

### Testing Approach

Observe users completing the core workflow:

1. Listen to source audio
2. Record their draft
3. Play back what they recorded

### Metrics to Capture

- Task completion rate
- Time spent figuring out vs. doing
- Points of confusion or frustration
- User quotes about what felt easy/hard

### Evidence Needed

- User journey observations
- Verbatim quotes
- Confusion point documentation

### Warning Signs

- Users feel "talked down to"
- Workflow feels like a checklist, not natural work
- Users skip guidance but then get stuck
- Users ask "what do I do now?"

### UX Tone Check

| Patronizing | Confusing | Good |
|-------------|-----------|------|
| "Great job! Now tap the blue button!" | "Invoke the audio buffer" | "Record" (with mic icon) |
| "You did it perfectly!" | "Error: null reference" | "Recording saved" |

### Result

**Status:** PARTIAL — Too early to fully validate

**Conclusion:** Single-page with 3 buttons is intuitive. Flow makes sense visually. But this only validates the most basic case — real workflow testing requires more features/pages to assess.

**What We Learned:**
- The Listen → Record → Review layout is logically clear
- Visual hierarchy (Source → Your Draft → Review) is understandable
- Button states (disabled Play Draft) communicate correctly

**What We Can't Know Yet:**
- Does the flow feel natural when navigating between multiple verses/chapters?
- Does workflow hold up under real translation sessions?
- User feedback on multi-step workflows

**Recommendation:** Defer comprehensive workflow testing until more screens exist. Current UI is a good foundation but scope too limited for meaningful validation.

**Evidence:** Screenshots show intuitive layout; formal user testing deferred.

---

## Hypothesis 4: Task Clarity

**Question:** Can users understand what to do next with minimal or no training?

### Testing Approach

Zero-training test:

1. Hand device to user without instructions
2. Observe without helping (unless completely stuck)
3. Document every question, hesitation, misstep

### Metrics to Capture

- First-use success rate without training
- Questions users ask
- Wrong taps / missteps
- Recovery patterns after mistakes

### Evidence Needed

- First-use observation notes
- Question log
- Misstep documentation

### Warning Signs

- Users ask "what do I do?" repeatedly
- Users tap wrong things frequently
- Users can't find how to continue
- Users need external help to proceed

### Result

**Status:** PARTIAL — Validated for single page only

**Conclusion:** Single page with three clearly labeled buttons was intuitive. User understood the task without training. But this is the simplest possible case — one page, three buttons, clear labels.

**What We Learned:**
- Clear labeling works: "Listen", "Record", "Play Draft"
- State indicator ("Ready to listen") provides context
- Disabled state on Play Draft correctly signals "record first"
- Visual hierarchy guides the eye top-to-bottom

**What We Can't Know Yet:**
- Task clarity across multiple screens/navigation
- Clarity under real-world distractions
- Clarity for users with lower tech familiarity

**Recommendation:** Current UI validated for minimal scope. Real user testing deferred until more features exist and public deployment enables mobile testing.

**Evidence:** Screenshots + automated tests confirm UI renders correctly. Human tester confirmed intuitive on first use. Formal user studies deferred.

---

## Deferred Hypotheses

These are NOT being tested in this attempt:

| # | Hypothesis | Why Deferred |
|---|------------|--------------|
| 1 | Mobile Viability | Too broad — encompasses H2, H3, H4 |
| 5 | Auth & Trust | Requires backend/QR integration |
| 6 | Cultural Fit | Requires multi-region field access |

---

## Evidence Collection Template

For field testing sessions, use this format:

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
- [Observation 2]

#### What Didn't Work
- [Observation 1] — *User quote: "..."*

#### Surprises
- [Something unexpected]

### User Quotes
> "Quote 1" — [User role/context]

### Hypothesis Conclusions

| Hypothesis | Result | Evidence | Confidence |
|------------|--------|----------|------------|
| H2 | ? | ? | ? |
| H3 | ? | ? | ? |
| H4 | ? | ? | ? |
```
