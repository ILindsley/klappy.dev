# 🧭 Attempt Lifecycle — Orientation

> **If the repository is dirty, conclusions drawn from it are invalid.**

This document explains the mental model behind attempts: what they are, why they exist, and how they fit together.

**For step-by-step procedures, see:** `/docs/ATTEMPT_KICKOFF.md`  
**For the agent prompt, see:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`

---

## 📌 Core Principles

1. **One active implementation:** `/src/` is disposable; prior attempts are preserved by git history + sealed records.
2. **PRD versions are first-class:** A PRD version can have multiple attempts.
3. **Provenance is truth:** `META.json` stores who made what (tool, agent, model), not branch names.
4. **Artifacts always merge:** Even failed attempts contribute learnings.
5. **Production is explicit:** Only the `prod` branch deploys to production.

---

## 🌿 Branch Roles

| Branch | Purpose | Can Be Nuked? |
|--------|---------|---------------|
| `prod` | Live production deployment | ❌ Never |
| `main` | Experiment aggregation + history + PRD truth | ⚠️ With care |
| Agent branches | Ephemeral workspaces (Cursor worktrees, etc.) | ✅ Always |

> **Branch names are convenience. Provenance lives in META.json.**

See `/docs/CLOUDFLARE_CONFIG.md` for deploy behavior.

---

## 🧠 What is an Attempt?

An **attempt** is a bounded effort to implement a specific PRD version. When an attempt is complete (or abandoned), it is **sealed**:

- No further work is done on that attempt
- Evidence is captured
- `META.json` records provenance + sealed commit SHA
- Artifacts merge to `main`

Multiple attempts against the same PRD version are expected (fail, retry with different approach).

### Attempt Origin Variations

Attempts may originate from different sources while targeting the same PRD:

- Different tools (Cursor, VS Code, CLI)
- Different AI models (opus-4.5, gpt-4o, claude-sonnet)
- Different approaches or architectures
- The same prompt interpreted differently

Parallel agent runs are treated as distinct attempts. Provenance tracking ensures they can be compared meaningfully.

See `/canon/odd/appendices/quantum-development.md` for the orientation model behind this practice.

---

## 🧹 Fresh Start Requirement

**Attempts must start from a blank slate.**

`attempt:nuke` deletes `/src` and removes framework configs so the agent can choose any stack that satisfies the deploy contract.

This ensures:
- No inherited UI patterns
- No framework bias (React, Vue, Svelte — all valid)
- True independence between attempts

---

## 🚀 How Attempts Work (Current Model)

### During an Attempt

1. **Each agent starts in its own workspace** (Cursor worktree, branch, etc.)
2. **First actions:**
   ```bash
   npm run attempt:register -- --tool cursor --agent a --model "opus-4.5"
   npm run attempt:nuke
   ```
3. **Build from PRD** — implement against `/docs/PRD.md`
4. **Write artifacts** to `attempts/prd-vX.Y/_runs/<run_id>/`
5. **Push** — triggers Cloudflare preview

### After All Agents Finish

A human runs:
```bash
npm run attempt:finalize -- --prd vX.Y
```

This assigns `attempt-001`, `attempt-002`, etc. based on completion order.

### Collision Avoidance

Attempt numbers are assigned **after** work completes, not before.

`attempt:finalize` sorts completed runs and assigns attempt numbers deterministically. No registry, no race conditions.

---

## 📁 Folder Structure

```
/src/                           # current implementation (disposable)
/infra/scripts/                 # build scripts (persist across attempts)
/docs/PRD.md                    # single active PRD (authoritative)
/attempts/                      # sealed attempts (immutable after seal)
  prd-v0.3/
    PRD.md                      # frozen PRD for this version
    _runs/                      # in-progress runs (before finalize)
      <run_id>/
        META.json
        ATTEMPT.md
        EVIDENCE.md
        evidence/
    attempt-001/                # finalized attempts
      META.json                 # canonical pointers + provenance
      ATTEMPT.md
      EVIDENCE.md
      evidence/
    attempt-002/
      ...
/public/content/                # generated (by sync script)
```

---

## 📎 META.json Schema

Each attempt contains a `META.json` with provenance and canonical pointers:

```json
{
  "prd_version": "v0.3",
  "run_id": "a1b2c3d4",
  "attempt": "001",
  
  "tool": "cursor",
  "agent": "a",
  "model": "opus-4.5",
  
  "worktree_path": "/path/to/worktree",
  "branch": "run/v0.3/cursor/a/opus-45/a1b2c3d4",
  "git_head": "abc123...",
  
  "registered_at": "2026-01-16T10:00:00Z",
  "completed_at": "2026-01-16T12:00:00Z",
  "finalized_at": "2026-01-16T14:00:00Z",
  
  "status": "CLOSED",
  "preview_url": "https://run-v03-cursor-a-opus-45-a1b2c3d4.klappy-dev.pages.dev",
  "evidence_index": ["evidence/desktop.png", "evidence/mobile.png"]
}
```

**Key insight:** The commit SHA + provenance fields are truth. Branch names and tags are convenience.

---

## 📦 Artifacts Always Merge

**Failed attempts still contribute learnings.**

| Output | Merge to main? |
|--------|----------------|
| Artifacts (attempt folder, evidence, PRD patches) | **Always** |
| Code (`/src`, components, etc.) | **Only if Champion** |

### Two Phases Per Attempt

1. **Artifacts merge** (always)
   - Seal attempt folder
   - Commit evidence and closure record
   - Merge to `main`

2. **Code promotion** (only if winner)
   - Champion's code merges to `main`
   - `prod` fast-forwards to `main`
   - Non-winners keep preview URLs but code stays on attempt branch

This ensures every attempt contributes to the knowledge base.

---

## 🔄 What Evolves vs. What is Frozen

| Category | Evolves? | Notes |
|----------|----------|-------|
| `/canon/**` | ✅ Yes | Living orientation docs |
| `/docs/PRD.md` | ✅ Yes | Single active PRD |
| `/attempts/prd-vX.Y/PRD.md` | ❌ No | Frozen snapshot |
| `/attempts/*/attempt-NNN/*` | ❌ No | Sealed record + evidence |

---

## 💡 Why This Structure?

- **No filesystem sprawl:** One `/src/`, not `/app-v1`, `/app-v2`, etc.
- **PRD-first:** Clear hierarchy of what was attempted
- **Retry-friendly:** Multiple attempts per PRD version is expected
- **Provenance is truth:** `META.json` ensures attempts are interpretable even if branch names drift
- **Self-contained:** Each attempt has everything needed to understand it

---

## 🔮 Resurrection

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
- Provenance (who/what made it)
- Deploy history (URLs where it ran)

---

## 📋 Current Policies

| Decision | Answer |
|----------|--------|
| Are preview deploys required for sealing? | Required for UI changes, optional for doc-only |
| Do we preserve attempt previews permanently? | No — we preserve links + evidence |
| Do failed attempts merge to main? | Artifacts yes, code no |
| How do parallel agents avoid collisions? | `finalize` assigns numbers after completion |
| Must /src be reset between attempts? | Yes, via `attempt:nuke` (blank slate) |
| What branch is production? | `prod` (never nuked, explicit promotion only) |

---

## 🛠️ Tooling Summary

| Command | Purpose |
|---------|---------|
| `npm run attempt:register -- --tool <t> --agent <id> --model <m>` | Register run with provenance |
| `npm run attempt:nuke` | Blank slate — delete `/src` |
| `npm run attempt:submit` | Commit + push (triggers CF preview) |
| `npm run attempt:finalize -- --prd vX.Y` | Assign attempt numbers |
| `npm run attempt:promote -- --prd vX.Y --attempt 001` | Promote champion to production |
| `npm run attempt:cleanup` | Prune stale worktrees and branches |

---

## 🔗 Related Documents

- Step-by-step workflow: `/docs/ATTEMPT_KICKOFF.md`
- Agent prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
- Deploy behavior: `/docs/CLOUDFLARE_CONFIG.md`
- Decision log: `/canon/odd/decisions/`
- Quantum Development: `/canon/odd/appendices/quantum-development.md`
- Repo Truth: `/canon/odd/appendices/repo-truth.md`
