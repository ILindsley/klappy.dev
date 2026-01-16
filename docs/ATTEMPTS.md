# Attempt Lifecycle — Orientation

This document explains how PRDs are versioned, how attempts are sealed, and where artifacts live.

---

## Core Principles

1. **One active implementation:** `/src/` is disposable; prior attempts are preserved by git history + sealed records.
2. **PRD versions are first-class:** A PRD version can have multiple attempts.
3. **SHA is truth, tags are convenience:** `META.json` stores the canonical commit pointer.

---

## What is an Attempt?

An **attempt** is a bounded effort to implement a specific PRD version. When an attempt is complete (or abandoned), it is **sealed**:

- No further work is done on that attempt
- Evidence is captured
- `META.json` records the sealed commit SHA
- A git tag is created as a convenience pointer

Multiple attempts against the same PRD version are expected (fail, retry with different approach).

### Attempt Origin Variations

Attempts may originate from different sources while targeting the same PRD:
- Different agents (Claude, Cursor, manual)
- Different approaches or architectures
- The same prompt interpreted differently

Parallel or sequential agent runs against the same PRD may be treated as distinct attempts, even if only one is ultimately sealed.

See [Quantum Development](/canon/odd/appendices/quantum-development.md) for the orientation model behind this practice.

---

## Folder Structure

```
/src/                           # current implementation (disposable)
/infra/scripts/                 # build scripts (persist across attempts)
/docs/PRD/                      # versioned PRDs (living, editable)
  PRD_v0.1.md
  PRD_v0.2.md
/attempts/                      # sealed attempts (immutable after seal)
  prd-v0.1/
    PRD.md                      # frozen PRD for this version
    attempt-001/
      ATTEMPT.md                # closure record
      EVIDENCE.md               # evidence index
      META.json                 # canonical pointers (commit, tag, URL)
      evidence/                 # screenshots, logs, etc.
    attempt-002/                # retry (if needed)
      ...
  prd-v0.2/
    PRD.md
    attempt-001/
      ...
/public/content/                # generated (by sync script)
```

---

## META.json Schema

Each attempt contains a `META.json` with canonical pointers:

```json
{
  "prd_version": "v0.1",
  "attempt": "001",
  "status": "CLOSED",
  "sealed_commit": "0477fc36...",
  "git_tag": "prd-v0.1-attempt-001",
  "sealed_at": "2026-01-15",
  "notes": "Phase 1 baseline.",
  "deploy": {
    "provider": "cloudflare-pages",
    "production_url": "https://klappy.dev",
    "preview_url": "https://prd-v01-a001.klappy-dev.pages.dev",
    "captured_at": "2026-01-15"
  }
}
```

**Why?** The commit SHA is the truth. If tags drift or are renamed, the attempt record remains accurate. Deploy URLs are evidence artifacts.

---

## How to Seal an Attempt

1. Ensure all DoD requirements are met
2. Create `attempts/prd-vX.Y/` if it doesn't exist
3. Copy frozen PRD to `attempts/prd-vX.Y/PRD.md` (once per PRD version)
4. Create `attempts/prd-vX.Y/attempt-NNN/` folder
5. Add:
   - `ATTEMPT.md` (status, intent, what was proven/not proven)
   - `EVIDENCE.md` (index of evidence files)
   - `META.json` (canonical pointers)
   - `evidence/` (screenshots, logs, etc.)
6. Commit and tag:

```bash
git add attempts/prd-vX.Y
git commit -m "Seal prd-vX.Y attempt-NNN"
COMMIT_SHA=$(git rev-parse HEAD)
git tag -a prd-vX.Y-attempt-NNN -m "PRD vX.Y Attempt NNN sealed"
git push --follow-tags
# Update META.json with sealed_commit if needed
```

---

## How to Start a New Attempt

### Same PRD version (retry)

1. Create `attempts/prd-vX.Y/attempt-NNN/` (increment NNN)
2. Rebuild `/src/` as needed
3. When complete, seal the attempt

### New PRD version

1. Create `docs/PRD/PRD_vX.Y.md`
2. Create `attempts/prd-vX.Y/PRD.md` (frozen copy)
3. Create `attempts/prd-vX.Y/attempt-001/`
4. Rebuild `/src/` as needed
5. When complete, seal the attempt

---

## What Evolves vs. What is Frozen

| Category                    | Evolves? | Notes                    |
| --------------------------- | -------- | ------------------------ |
| `/canon/**`                 | ✅ Yes   | Living orientation docs  |
| `/odd/**`                   | ✅ Yes   | Living philosophy docs   |
| `/about/**`                 | ✅ Yes   | Living about docs        |
| `/docs/PRD/*`               | ✅ Yes   | Versioned but editable   |
| `/attempts/prd-vX.Y/PRD.md` | ❌ No    | Frozen snapshot          |
| `/attempts/*/attempt-NNN/*` | ❌ No    | Sealed record + evidence |

---

## Why This Structure?

- **No filesystem sprawl:** One `/src/`, not `/app-v1`, `/app-v2`, etc.
- **PRD-first:** Clear hierarchy of what was attempted
- **Retry-friendly:** Multiple attempts per PRD version is expected
- **SHA is truth:** `META.json` ensures attempts are interpretable even if tags drift
- **Self-contained:** Each attempt has everything needed to understand it

---

## Branch Naming Convention

During development, use ephemeral branches:

```
attempt/prd-v0.2/a003
```

These branches:

- Trigger preview deploys on push (Cloudflare/Netlify)
- Are deleted after sealing
- Are NOT the durable record (commit SHA is)

---

## Preview URLs

When sealing an attempt with UI changes:

1. Record the preview URL in `META.json` under `deploy.preview_url`
2. The preview URL is treated as an evidence artifact
3. If the branch is deleted later, the URL may stop working — but the commit SHA allows resurrection

**Preview deploy required?**

- Required for UI changes
- Optional for doc-only changes

---

## Resurrection

To resurrect any sealed attempt:

```bash
git checkout <sealed_commit>
npm install
npm run build
# Deploy to preview or production as needed
```

The attempt folder contains everything needed:

- Exact code state (via commit SHA)
- Evidence (screenshots, logs)
- Deploy history (URLs where it ran)

---

## Decisions (Current Policy)

| Decision                                     | Answer                                                         |
| -------------------------------------------- | -------------------------------------------------------------- |
| Are preview deploys required for sealing?    | Required for UI changes, optional for doc-only                 |
| Do we preserve attempt previews permanently? | No — we preserve links + evidence. Permanent hosting deferred. |

This matches the maturity model: don't over-govern early.
