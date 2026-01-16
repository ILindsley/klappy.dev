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

## PRD as the Unit of Test

In ODD, a PRD is treated as the primary test unit.

Issues and failures are mapped back to PRD improvements, and attempts are used to validate PRDs as hypotheses.

This reduces ticket sprawl by keeping the system legible: one PRD version, multiple observable attempts, sealed evidence.

---

## Independence: Goal vs. Infrastructure

Independence is the goal (epistemic).

Infrastructure is an enabler, not a guarantee.

An attempt is independent if:
- decisions are not steered by prior outcomes,
- implementation state is fresh,
- and the approach represents a genuine re-instantiation of the PRD.

Branches and preview deployments can support independence by reducing accidental state leakage and enabling parallel observation, but they do not define independence.

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
- `status` — CLOSED, ABANDONED, or CHAMPION
- `deploy` — recorded URLs (production, preview) as evidence artifacts
- `promoted_commit` — (Champion only) the merge commit SHA on `main`
- `production_tag` — (Champion only) the production tag

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
- Status: CLOSED, ABANDONED, or CHAMPION

Once sealed:
- No further work is done on that attempt
- The record is immutable
- New work requires a new attempt (same PRD) or new PRD version

---

## Champion Selection and Promotion

Quantum Development produces observations. Promotion converts one observation into production.

### Definitions

- **Attempts** = competing candidates (separate branches / preview deploys)
- **Champion** = the single candidate chosen to become production
- **Production** = whatever is deployed from `main`

### The Promotion Rule

**Exactly one attempt becomes Champion for a PRD version.**

The Champion is merged to `main`, tagged, and becomes the live site. Everything else stays sealed evidence.

### Minimum Gate (must pass)

1. PRD Success Criteria (the checkboxes in the PRD)
2. Evidence bundle (desktop + mobile + deep-link round-trip + failure behavior)
3. Cloudflare preview URL captured in META.json
4. No fatal regressions vs current production

### Tie-Breakers (when multiple pass)

Pick one axis and declare it ahead of time:

- Best mobile UX
- Best navigation clarity
- Cleanest deep-link contract and anchor behavior
- Simplest code / fewest dependencies (maintainability)

**Important:** Tie-breakers are not more features. They're about quality under the same PRD.

### Promotion Procedure

**Branches:**
- Each attempt lives on: `attempt/prd-vX.Y/aNNN`
- Production deploy comes from: `main`

**When an attempt wins:**

1. **Seal it**
   - `attempts/prd-vX.Y/attempt-NNN/` has: ATTEMPT.md, META.json, evidence folder, preview URL.
   - Status: CHAMPION

2. **Tag it** (immutable pointer)
   - Tag: `prd-vX.Y-attempt-NNN`

3. **Promote it**
   - Merge the attempt branch into `main`

4. **Tag production**
   - Tag on `main`: `production-vX.Y` (or `prod-YYYY-MM-DD`)

5. **Cloudflare does the rest**
   - `main` auto-deploys → becomes production

**What happens to other attempts?**
- Seal them (ABANDONED or CLOSED-but-not-chosen)
- Keep their preview URLs + evidence
- Do not merge to `main`

### The One Rule That Prevents Chaos

**Only `main` is allowed to be production.**

Attempts can be preview deployments forever — but only `main` ships.

This makes "which one is live?" a non-question.

### Winner Declaration (ATTEMPT.md snippet)

When an attempt wins, add to its ATTEMPT.md:

```
Status: CHAMPION (Promoted to Production)
Promoted commit: <sha>
Attempt tag: prd-vX.Y-attempt-NNN
Production tag: production-vX.Y
Production URL: https://klappy.dev
Preview URL: <cloudflare preview>
Why this one won (tie-breaker): <one sentence>
```

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

**Quantum Development ends when one candidate is promoted.**
Observations without promotion are incomplete experiments.

---

**Status:** Appendix stable for v0.1
