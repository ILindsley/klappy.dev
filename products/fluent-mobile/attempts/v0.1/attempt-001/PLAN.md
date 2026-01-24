# Fluent Mobile PoC — Attempt-001 Plan

## Context Absorbed

This is a **Proof of Concept** lane. The goal is learning, not delivery. Per ODD Canon:

- Evidence over assertion
- AI as accelerator, not authority
- Failure with fast learning is a win

The PRD tests 6 hypotheses about whether a mobile-first OBT companion app is viable for field translation teams.

---

## Target Hypotheses for Attempt-001

Focus on 3 hypotheses that can be tested with minimal implementation:

| # | Hypothesis | Why First | Testing Approach |
|---|------------|-----------|------------------|
| 2 | **Performance** | Foundational — if slow, nothing else matters | Minimal audio player/recorder on real low-end devices |
| 3 | **Workflow Usability** | Core interaction pattern | Simple listen → record → playback flow |
| 4 | **Task Clarity** | Validates UX assumptions | Zero-training first-use testing |

**Deferred Hypotheses:**

- H1 (Mobile Viability) — Too broad for first attempt
- H5 (Auth & Trust) — Requires backend integration
- H6 (Cultural Fit) — Requires multi-region field access

---

## Sandbox Location

All work goes in:

```
products/fluent-mobile/attempts/prd-v0.1/attempt-001/
```

**Forbidden zones:** PRD.md, README.md, public/, other lanes

---

## Technical Approach

### Option: Progressive Web App (PWA)

Recommended for first attempt because:

- Works on any Android device with a browser
- No app store deployment needed for testing
- Fast iteration cycle
- Can test performance on real devices immediately

### Minimum Viable Stack

- Vanilla HTML/CSS/JS or lightweight framework (Preact/Svelte)
- Web Audio API for recording/playback
- IndexedDB for local storage
- Service Worker for offline tolerance

### Core Implementation (Minimal)

1. **Audio Playback** — Play source audio file
2. **Audio Recording** — Record user's draft audio
3. **Playback Recording** — Review what was recorded
4. **Visual State** — Clear indication of current state (listening, recording, reviewing)

No: authentication, sync, comments, resources, multi-track, editing

---

## Attempt Folder Structure

```
attempt-001/
├── PLAN.md                 # This file
├── ATTEMPT.md              # Status, learnings, recommendation
├── META.json               # Machine-readable metadata
├── HYPOTHESES.md           # H2, H3, H4 scope and results
├── src/
│   ├── index.html          # PWA entry point
│   ├── app.js              # Core audio logic
│   ├── styles.css          # Minimal UI styling
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service worker (offline)
└── evidence/
    ├── field-feedback.md   # User observations (post-testing)
    ├── performance-logs/   # Device metrics
    └── screenshots/        # Visual evidence
```

---

## Implementation Steps

1. **Create attempt folder structure** with ATTEMPT.md, META.json, HYPOTHESES.md
2. **Build minimal PWA** with:
   - Source audio playback (play/pause)
   - Recording capability (start/stop)
   - Playback of recorded audio
   - Clear visual state indicators
3. **Optimize for low-end devices:**
   - Minimal JavaScript bundle
   - No heavy frameworks
   - Fast time-to-interactive
4. **Add offline tolerance** via Service Worker
5. **Document in HYPOTHESES.md** what evidence is needed for each hypothesis

---

## Evidence Requirements (Post-Build)

The code itself is not evidence. Field testing will produce:

| Hypothesis | Evidence Needed | Collection Method |
|------------|-----------------|-------------------|
| H2 Performance | Load times, FPS, memory on $50-100 Android | Real device metrics |
| H3 Workflow | Task completion rate, user confusion points | Observation |
| H4 Clarity | First-use success without instructions | Zero-training test |

---

## Success Criteria for Attempt-001

**Minimum (Build Phase):**

- [ ] PWA runs on low-end Android browser
- [ ] Audio playback works
- [ ] Audio recording works
- [ ] Basic UI shows clear state

**Field Testing Required:**

- [ ] Tested on real low-end devices (not emulators)
- [ ] At least one hypothesis validated or invalidated
- [ ] Learnings documented regardless of outcome

---

## What NOT to Build

Per PoC guardrails:

- No authentication or QR flows
- No backend sync
- No comment system
- No resource library
- No dark mode or accessibility polish
- No elaborate architecture
- No production-ready error handling

---

## Exit Criteria

Stop this attempt if:

- Learning has slowed
- Performance is fundamentally unacceptable
- The approach proves obviously wrong
- It starts feeling like production work

---

## Constraints Applied

From Canon:

- **Offline-First (Default)** — PWA with Service Worker
- **Maintainability Over Cleverness** — Vanilla JS, no complex frameworks
- **Evidence Over Assertion** — Build is not done until tested
- **Explicit Tradeoffs** — Speed of learning > architectural purity
