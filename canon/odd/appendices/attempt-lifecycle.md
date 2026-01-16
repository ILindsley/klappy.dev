# ODD Appendix — Attempt Lifecycle

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** How work is iterated without steering failed attempts

---

## Why This Appendix Exists

Outcomes-Driven Development (ODD) assumes that clarity improves faster than execution in an AI-accelerated environment.

As clarity improves, attempts that were once reasonable often become misaligned.

This appendix exists to make stopping, restarting, and rebuilding a normal, explicit part of the system rather than an emotional or ad-hoc decision.

---

## Core Principles

1. **Attempts are disposable.**
2. **Infrastructure persists.**
3. **Content accumulates.**
4. **Deployments are views, not truth.**

Restarting is not a failure of execution.  
Restarting is evidence that intent has sharpened.

Branch and preview deployments exist to observe behavior. The canonical record is the sealed attempt + commit SHA, not the deployment URL.

---

## PRD Version vs Attempt

A **PRD version** defines what should be built.  
An **attempt** is a bounded execution of that PRD.

**Key distinction:**
- A PRD version can have multiple attempts
- Attempts exist to test the PRD, not to evolve it
- If the PRD is wrong, create a new PRD version
- If the implementation fails, create a new attempt against the same PRD

This separation prevents "Phase 1.1" scope creep disguised as iteration.

See [Quantum Development](./quantum-development.md) for the rationale behind multiple attempts.

For the single canonical kickoff prompt used to start any new attempt, see: `/docs/ATTEMPT_KICKOFF.md`.

---

## What an Attempt Is

An Attempt is a bounded execution of a specific Product Requirements Document (PRD).

An attempt:
- has a single PRD version
- has a defined scope
- produces an outcome artifact
- is evaluated against its own Definition of Done
- is explicitly closed (CLOSED or ABANDONED)

An attempt does not:
- evolve indefinitely
- absorb new scope reactively
- serve as the foundation for all future work

---

## What an Attempt Is Not

An attempt is not:
- a phase in a linear roadmap
- a commitment to incremental improvement
- a promise of continuity

Attempts are experiments with intent, not investments to be amortized.

---

## The Three Planes of Change

ODD separates work across three independent planes:

### 1. Application Plane (Behavior)

What the system does:
- UI structure
- interaction patterns
- navigation model
- rendering logic

This plane is **attempt-scoped and disposable**.

### 2. Content / Canon Plane (Knowledge)

What the system knows:
- Canon documents
- ODD Manifesto
- Projects
- Writings, notes, transcripts

This plane is **persistent and cumulative**.

Content may evolve independently of any attempt.

### 3. Infrastructure Plane (Capability)

What makes building cheap:
- deployment setup
- build tooling
- sync/verify scripts
- schemas and formats

This plane **changes slowly and intentionally**.

---

## Canonical Structure

```
attempts/
  prd-vX.Y/
    PRD.md                    # frozen PRD for this version
    attempt-001/
      ATTEMPT.md              # closure record
      META.json               # canonical pointers (commit SHA is truth)
      EVIDENCE.md             # evidence index
      evidence/               # screenshots, logs, etc.
    attempt-002/              # retry (if needed)
```

**META.json** contains:
- `sealed_commit` — the commit SHA (truth)
- `git_tag` — convenience pointer (optional)
- `status` — CLOSED or ABANDONED
- `deploy` — recorded URLs (production, preview) as evidence artifacts

The concrete sealing procedure is documented in `/docs/ATTEMPTS.md`.

---

## Attempt Lifecycle (High Level)

1. **Intent Articulation**
   - A PRD is written for a specific outcome
   - Scope is explicit and finite

2. **Execution**
   - The application is built from scratch against the PRD
   - Existing infrastructure may be reused
   - Existing content may be consumed
   - Prior app logic is not assumed

3. **Evaluation**
   - Outcome is evaluated against the PRD's Definition of Done
   - Evidence is captured

4. **Closure**
   - The attempt is explicitly marked CLOSED or ABANDONED
   - No new scope is added under the same attempt

5. **Reflection**
   - Learnings inform the next PRD or attempt
   - The current attempt is not retrofitted

---

## Sealing an Attempt

A **sealed attempt** has:
- A frozen PRD snapshot (at the PRD version level)
- Evidence captured and linked
- A commit pointer (SHA) in META.json
- Status: CLOSED or ABANDONED

Once sealed:
- No further work is done on that attempt
- The record is immutable
- New work requires a new attempt (same PRD) or new PRD version

---

## Restartability as a Feature

ODD treats restartability as a first-class design feature:
- prompts are rewritten, not patched
- applications are regenerated, not endlessly refactored
- artifacts are preserved for learning, not extended by default

This prevents:
- sunk-cost bias
- prompt sprawl
- architectural drift

---

## What Persists Across Attempts

The following may persist across attempts:
- deployment infrastructure
- build and verification scripts
- content repositories
- Canon structure
- naming conventions
- evidence standards

The following must not be assumed to persist:
- UI composition
- routing model
- state management decisions
- interaction flow

---

## Why Attempts Are Explicitly Closed

Explicit closure:
- creates psychological safety to restart
- prevents scope creep disguised as "Phase 1.1"
- keeps PRDs honest and legible
- makes outcomes comparable across attempts

Unclosed attempts silently turn into products by accident.

---

## How This Appendix Should Be Used

This appendix is:
- a shared mental model
- a permission structure
- a vocabulary for stopping well

It is not:
- a workflow
- a checklist
- a gating mechanism

---

## Summary

ODD optimizes for learning velocity, not artifact continuity.

Attempts exist to be finished.  
Infrastructure exists to make finishing cheap.  
Content exists to compound over time.

---

**Status:** Appendix stable for v0.1
