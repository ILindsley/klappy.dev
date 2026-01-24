# Fluent Mobile v0.3 PoC — Attempt 001 Plan

## Status: FAILED

## Overview

Create PRD v0.3 based on documented learnings from v0.2, then execute attempt-001 to test the consolidated single-section workflow with dual-mode waveform and play/pause functionality. **Fresh build approach** — not iterating v0.2 code.

## Failure Reasons

1. **PROCEDURAL:** Agent claimed completion without visual verification
2. **PROCEDURAL:** Agent fabricated evidence using fake data (random number generators for waveforms)
3. **TECHNICAL:** Source/draft UX inconsistent
4. **TECHNICAL:** Playback waveform not working
5. **TECHNICAL:** No timeline/scrubbing on source

---

## Current State

- v0.2 attempt-001 CLOSED as SUCCESS with key learnings:
  - Dual draft/review sections break mental model
  - Waveform needs dual modes (live vs timeline)
  - Play/pause missing, critical for longer verses
  - Infrastructure should live at lane level
- v0.3 PRD created at `attempts/prd-v0.3/PRD.md`
- Fresh build — not in love with v0.2 UI/UX yet

---

## Phase 1: Create PRD v0.3 ✅

- [x] PRD.md created
- [x] README.md created
- [x] Plan saved to prd-v0.3 folder

---

## Phase 2: Create Attempt-001 Folder ✅

- [x] ATTEMPT.md created
- [x] META.json created
- [x] HYPOTHESES.md created
- [x] src/ folder created
- [x] evidence/screenshots/ folder created

---

## Phase 3: Setup Lane-Level Infrastructure

- [ ] Create `products/fluent-mobile/infra/wrangler.toml`
- [ ] Create `products/fluent-mobile/infra/playwright.config.js`
- [ ] Document pattern for attempt usage

---

## Phase 4: Build Fresh PoC

**Approach:** Fresh build from blank slate. Reference v0.2 patterns only — don't copy code.

### 4.1 Single Draft Section
- [ ] One section for recording + playback
- [ ] One waveform canvas
- [ ] One audio source of truth
- [ ] Clear state indicators

### 4.2 Waveform Dual-Mode
- [ ] Live mode: Animated during recording/playback
- [ ] Timeline mode: Static when stopped
- [ ] Fixed-size regardless of duration
- [ ] Shows amplitude (silence vs speech)

### 4.3 Play/Pause
- [ ] Pause button preserves position
- [ ] Pause triggers timeline mode
- [ ] Resume from paused position
- [ ] Clear state indication

### 4.4 Two-Screen Navigation
- [ ] Home screen (assignment context)
- [ ] Drafting screen (single-section flow)
- [ ] Back navigation

---

## Phase 5: Gather Evidence

- [ ] Screenshot: Home screen
- [ ] Screenshot: Drafting screen (single-section layout)
- [ ] Screenshot: Waveform in live mode (recording)
- [ ] Screenshot: Waveform in timeline mode (stopped/paused)
- [ ] Playwright tests passing
- [ ] Learnings documented

---

## Hypotheses Being Tested

| # | Hypothesis | Testing Approach |
|---|------------|------------------|
| 3 | Workflow Usability | Single-section UI vs v0.2 dual-section |
| 4 | Task Clarity | Play/pause + timeline mode |

---

## Key Design Decisions

1. **Fresh Build**: Not in love with v0.2 UI/UX. Test new mental model cleanly.
2. **Single Section**: One audio, one waveform, one source of truth.
3. **Dual-Mode Waveform**: Live for activity confirmation, timeline for seeking.
4. **Vanilla JS**: No framework overhead, maximum compatibility.

---

## PoC Mindset Reminder

> "Failure with fast learning is a win."

This is still a PoC. The goal is to test whether:
- Consolidated single-section UI improves mental model
- Dual-mode waveform is intuitive
- Play/pause addresses longer verse workflow needs

If any of these fail, that's learning. Document and iterate.
