# Fluent Mobile PRD — Active Version

**Current Active PRD:** [v0.3](attempts/prd-v0.3/PRD.md)

---

## PRD Versions

| Version | Status | Location | Attempts |
|---------|--------|----------|----------|
| **v0.3** | **ACTIVE** | [attempts/prd-v0.3/PRD.md](attempts/prd-v0.3/PRD.md) | [001](attempts/prd-v0.3/attempt-001/) (FAILED) |
| v0.2 | CLOSED | [attempts/prd-v0.2/PRD.md](attempts/prd-v0.2/PRD.md) | [001](attempts/prd-v0.2/attempt-001/) (SUCCESS) |
| v0.1 | CLOSED | [attempts/prd-v0.1/PRD.md](attempts/prd-v0.1/PRD.md) | [001](attempts/prd-v0.1/attempt-001/) (SUCCESS) |

---

## v0.3 Requirements (From v0.2 Learnings + Review Meeting)

### Must Address

1. **Single Draft Section**
   - Consolidate recording + playback into one section
   - One audio, one waveform, one source of truth
   - Eliminates "same audio in two places" confusion

2. **Waveform Dual-Mode**
   - Live mode: Animated during recording/playback (confirms "it's working")
   - Timeline mode: Static when stopped, enables seeking (like YouTube seek bar)
   - Fixed-size regardless of duration
   - Shows amplitude (silence vs. speech)

3. **Lane-Level Infrastructure**
   - Establish `infra/` folder at lane level
   - Attempts copy, iterate, merge back if accepted
   - Pattern: Don't rebuild CI/CD each attempt

4. **Play/Pause Functionality**
   - Add pause to preserve position
   - Pause triggers timeline mode on waveform
   - Critical for longer verses

### Should Address

1. **Reduce Scrolling**
   - Balance large touch targets with screen efficiency
   - "Most phones can squish more" — optimize space
   - Full workflow visible without scrolling if possible

2. **Record Continue vs. Overwrite**
   - Differentiate "continue recording" (append) from "start new" (overwrite)
   - Current behavior overwrites without warning

3. **No Multiple Drafts (Yet)**
   - One recording per stage
   - Scribe experience: multiple versions caused confusion
   - Avoid version management complexity for now

### Future Considerations (Not v0.3)

1. **Timestamped Comments**
   - Tap waveform to add comment at specific time
   - Waveform-as-timeline enables this

2. **User Literacy Spectrum**
   - Text as optional accordion (hidden by default)
   - Three flows: text source, audio source, switchable
   - Audio is PRIMARY, text is overlay

3. **AI Features (Web-Only?)**
   - Audio-to-text conversion
   - AI evaluation/analysis
   - Audio cleanup
   - Consider: Mobile captures, Web processes

4. **Editing Primitives**
   - Cut/insert/trim
   - Much later — after core flow validated

### See Also

- [v0.2 Attempt 001 Learnings](attempts/prd-v0.2/attempt-001/evidence/LEARNINGS.md)

---

## How This Works

Each PRD version is **self-contained** with its attempts:

```
attempts/
├── prd-v0.1/
│   ├── PRD.md              # Frozen PRD for v0.1
│   ├── README.md           # Attempt index
│   └── attempt-001/        # Sealed attempt
│
└── prd-v0.2/
    ├── PRD.md              # Active PRD for v0.2
    ├── README.md           # Attempt index
    └── attempt-NNN/        # Future attempts
```

**Why this structure:**
- PRD and its attempts live together (self-contained)
- Easy to understand what PRD an attempt was made against
- Archived versions remain accessible with full context
- Similar to how product lanes work

---

## Starting an Attempt

1. Read the active PRD: `attempts/prd-v0.2/PRD.md`
2. Read the kickoff: `KICKOFF.md`
3. Read the instructions: `INSTRUCTIONS.md`
4. Create attempt folder: `attempts/prd-v0.2/attempt-NNN/`

---

## Lane Documents

| Document | Purpose |
|----------|---------|
| [KICKOFF.md](KICKOFF.md) | How to start an attempt |
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | Field testing guidance |
| [README.md](README.md) | Lane overview |
