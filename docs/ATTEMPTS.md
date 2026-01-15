# Attempt Lifecycle — Orientation

This document explains how PRDs are versioned, how attempts are sealed, and where artifacts live.

---

## Core Principle

**The repository contains one active app implementation; prior attempts are preserved by git history + sealed attempt records, not parallel app folders.**

---

## What is an Attempt?

An **attempt** is a bounded effort to implement a specific PRD version. When an attempt is complete (or abandoned), it is **sealed**:

- No further work is done on that attempt
- A frozen PRD snapshot is preserved
- Evidence is captured and linked
- A git tag marks the exact commit

---

## Folder Structure

```
/src/                    # current attempt's implementation
/infra/scripts/          # build scripts (persist across attempts)
/docs/PRD/               # versioned PRDs (living, editable)
  PRD_v0.1.md
  PRD_v0.2.md
/attempts/               # sealed attempts (self-contained)
  attempt-0.1/
    ATTEMPT.md           # closure record
    PRD.md               # frozen PRD snapshot
    EVIDENCE.md          # evidence index
    evidence/            # evidence files (screenshots, logs)
/public/content/         # generated (by sync script)
```

---

## How to Seal an Attempt

1. Ensure all DoD requirements are met
2. Create `attempts/attempt-X.Y/` folder
3. Add `ATTEMPT.md` (status, intent, what was proven/not proven)
4. Copy PRD snapshot to `PRD.md`
5. Add `evidence/` folder with screenshots, logs, etc.
6. Add `EVIDENCE.md` (index of evidence files)
7. Commit and tag:

```bash
git add attempts/attempt-X.Y
git commit -m "Seal attempt X.Y"
git tag -a attempt-X.Y -m "Attempt X.Y sealed"
git push --follow-tags
```

---

## How to Start a New Attempt

1. Create `docs/PRD/PRD_vX.Y.md` (new or modified PRD)
2. Create `attempts/attempt-X.Y/` placeholder (optional, for tracking)
3. Rebuild `/src/` as needed (can delete and restart)
4. When complete, seal the attempt

---

## What Evolves vs. What is Frozen

| Category | Evolves? | Notes |
|----------|----------|-------|
| `/canon/**` | ✅ Yes | Living orientation docs |
| `/odd/**` | ✅ Yes | Living philosophy docs |
| `/about/**` | ✅ Yes | Living about docs |
| `/docs/PRD/*` | ✅ Yes | Versioned but editable |
| `/attempts/*/PRD.md` | ❌ No | Frozen snapshot |
| `/attempts/*/ATTEMPT.md` | ❌ No | Sealed record |
| `/attempts/*/evidence/**` | ❌ No | Immutable after commit |

---

## Why This Structure?

- **No filesystem sprawl:** One `/src/`, not `/app-v1`, `/app-v2`, etc.
- **History preserved:** Git tags + attempt records = interpretable past
- **Restart-friendly:** Delete `/src/`, start fresh, seal when done
- **Canon evolves safely:** Attempts remain coherent because each has its own PRD snapshot
