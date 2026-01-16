# Attempt Lifecycle — Orientation

> **If the repository is dirty, conclusions drawn from it are invalid.**

This document explains how PRDs are versioned, how attempts are sealed, and where artifacts live.

---

## Core Principles

1. **One active implementation:** `/src/` is disposable; prior attempts are preserved by git history + sealed records.
2. **PRD versions are first-class:** A PRD version can have multiple attempts.
3. **SHA is truth, tags are convenience:** `META.json` stores the canonical commit pointer.
4. **Artifacts always merge:** Even failed attempts contribute learnings.
5. **Worktrees are sandboxes, learnings are repo-state:** Outputs get published to main, not shared between agents.

Single kickoff prompt: `/docs/ATTEMPT_KICKOFF.md`

---

## PRD as the Unit of Test (Procedural)

Treat the PRD as the primary test unit:

- Issues and failures should map to PRD improvements (new constraints, clarified success criteria, refined DoD).
- Attempts validate the PRD as a hypothesis via observable outcomes + evidence.
- Avoid scattered ticket systems that drift from the PRD’s intent.

If the PRD is flawed, revise `/docs/PRD.md` and start a new attempt (or new PRD version as appropriate).

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
/docs/PRD.md                    # single active PRD (authoritative)
/docs/PRD/                      # templates and supporting notes
  PRD_TEMPLATE.md
/attempts/                      # sealed attempts (immutable after seal)
  prd-v0.1/
    PRD.md                      # frozen PRD for this version
    ATTEMPT_REGISTRY.json       # reserves attempt numbers (prevents collisions)
    attempt-001/
      ATTEMPT.md                # closure record
      EVIDENCE.md               # evidence index
      META.json                 # canonical pointers (commit, tag, URL)
      evidence/                 # screenshots, logs, etc.
    attempt-002/                # retry (if needed)
      ...
  prd-v0.2/
    PRD.md
    ATTEMPT_REGISTRY.json
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

1. **Reserve attempt number** (prevents collisions with parallel agents):
   ```bash
   npm run attempt:reserve -- --prd v0.2
   ```
2. **Create attempt branch**:
   ```bash
   git checkout -b attempt/prd-v0.2/a003
   ```
3. **Reset /src for fresh start** (ensures independence):
   ```bash
   npm run attempt:reset
   ```
4. Build from PRD, capture evidence
5. When complete, seal the attempt

### New PRD version

1. Update `/docs/PRD.md` with the new PRD version (this is the single active PRD)
2. Create `attempts/prd-vX.Y/PRD.md` (frozen copy, created once per PRD version)
3. Create `attempts/prd-vX.Y/ATTEMPT_REGISTRY.json`:
   ```json
   { "prd_version": "X.Y", "next_attempt": 1, "reserved": [], "sealed": [] }
   ```
4. Follow "Same PRD version" steps above

---

## Attempt Registry (Preventing Collisions)

When running parallel agents/worktrees, attempt numbers must be reserved to prevent "who is attempt-001 vs 002" collisions.

**Registry file:** `/attempts/prd-vX.Y/ATTEMPT_REGISTRY.json`

```json
{
  "prd_version": "0.2",
  "next_attempt": 3,
  "reserved": [
    { "attempt": 1, "reserved_at": "2026-01-16T10:00:00Z", "agent": "worktree-a" },
    { "attempt": 2, "reserved_at": "2026-01-16T10:05:00Z", "agent": "worktree-b" }
  ],
  "sealed": []
}
```

**Allocation rule:**
1. Reserve by editing ATTEMPT_REGISTRY.json on `main` first
2. Increment `next_attempt`, add to `reserved`
3. Commit and push before starting work
4. Use reserved number in folder/branch/tag names

**Tooling:** `npm run attempt:reserve -- --prd v0.2`

---

## Fresh Start Requirement

**Attempts must start from a clean `/src/` to be truly independent.**

Without explicit purging, attempts inherit UI patterns from prior attempts and converge on similar solutions.

**Reset command:** `npm run attempt:reset`

What it does:
1. Deletes everything in `/src/`
2. Creates minimal shell (main.jsx, index.css, App.jsx)
3. Commits as the attempt's starting point

The minimal shell proves the build works but has no UI opinions.

---

## Artifacts Always Merge

**Failed attempts still contribute learnings.**

| Output | Merge to main? |
|--------|----------------|
| Artifacts (attempt folder, evidence, PRD patches) | **Always** |
| Code (src/, components, etc.) | **Only if Champion** |

### Two Merges Per Attempt

1. **Artifacts merge** (always)
   - Seal attempt folder
   - Commit evidence and closure record
   - Apply any PRD patches
   - Merge to `main`

2. **Code promotion** (only if winner)
   - Champion's code merges to `main`
   - Non-winners keep preview URLs but code stays on attempt branch

This ensures every attempt contributes to the knowledge base.

---

## What Evolves vs. What is Frozen

| Category                    | Evolves? | Notes                    |
| --------------------------- | -------- | ------------------------ |
| `/canon/**`                 | ✅ Yes   | Living orientation docs  |
| `/odd/**`                   | ✅ Yes   | Living philosophy docs   |
| `/about/**`                 | ✅ Yes   | Living about docs        |
| `/docs/PRD.md`              | ✅ Yes   | Single active PRD        |
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
| Do failed attempts merge to main?            | Artifacts yes, code no                                         |
| How do parallel agents avoid collisions?     | Reserve attempt numbers via ATTEMPT_REGISTRY.json              |
| Must /src be reset between attempts?         | Yes, for true independence                                     |

This matches the maturity model: don't over-govern early.

---

## Tooling Summary

| Command | Purpose |
|---------|---------|
| `npm run attempt:reserve -- --prd v0.2` | Reserve next attempt number |
| `npm run attempt:reset` | Purge /src, create minimal shell |
| `npm run attempt:promote -- --prd v0.2 --attempt 003` | Promote winner to production |

See `/canon/odd/appendices/attempt-lifecycle.md` for the orientation model.
