---
uri: klappy://docs/appendices/progressive-elevation
title: Progressive Elevation & Decay
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "memory", "portability", "elevation", "decay"]
status: canonical
category: odd-appendix
version: 1.0
---

# Progressive Elevation & Decay

> How artifacts move from ephemeral attempts to durable Canon through strict elevation criteria.

## Description

ODD treats durable thinking as scarce and generated artifacts as abundant—most should decay while only patterns that reduce future drag should elevate. The five layers of portability are Conversation/Attempt, Product Lane/PRD, Interoperability/Contracts, Canon, and Decision Trace. Elevation requires recurrence, portability, drag reduction, and testability; if any criterion fails, the artifact stays local or dies.

## Outline

- Summary
- The Five Layers of Portability
- Elevation Criteria (Strict)
- Decay Rule (Default)
- Where This Fits With Lanes and Epochs

---

## Content

## Summary

ODD treats **durable thinking** as scarce and **generated artifacts** as abundant.

Most artifacts should **decay** (be discarded or sealed as evidence).
Only patterns that repeatedly reduce future drag should **elevate** into more durable layers.

This is how the repository avoids documentation sprawl while remaining portable across:
- time (future-you),
- people (collaborators),
- and agents (tooling that reasons over the corpus).

---

## The Five Layers of Portability

### 1) Conversation / Attempt (Ephemeral)

**What it is:** raw chats, prompts, branches, quick experiments, and run folders.  
**Default fate:** extract value → seal evidence → discard everything else.

**Lives in:**
- `/products/<lane>/attempts/prd-vX.Y/_runs/<run_id>/`
- transient branches / worktrees
- PRD patches produced by failure

**Elevate when:** a failure mode repeats and you can state it as a stable rule, constraint, or test.

---

### 2) Product Lane / PRD (Project-Local)

**What it is:** current intent for a specific product lane.  
**Default fate:** churn freely. PRDs are disposable and should change as reality is observed.

**Lives in:**
- `/docs/PRD/<lane>/PRD.md`

**Elevate when:** a requirement becomes reusable across lanes/projects, or becomes an interface boundary.

---

### 3) Interoperability / Contracts (Portability Bridge)

**What it is:** explicit interfaces that allow portability across tools, agents, and products.

Contracts are where compatibility becomes real.

**Lives in:**
- `/interfaces/**` (semver'd contracts)
- shared inputs/outputs, schemas, stable runtime paths

**Elevate when:** multiple projects repeatedly need the same boundary and drift becomes expensive.

---

### 4) Canon (Durable, Lean)

**What it is:** curated, high-signal rules and lenses that survive multiple contexts.

Canon is intentionally small. If it bloats, that is a signal to curate harder, not to add more.

**Lives in:**
- `/canon/**`

**Elevate when:** a pattern recurs across multiple projects/lenses and stays true even when tooling changes.

---

### 5) Decision Trace (Why It Changed)

**What it is:** lightweight records explaining why the system moved.

Decisions preserve context without polluting Canon with history.

**Lives in:**
- `/odd/decisions/**`

**Elevate when:** a change affects interpretation, compatibility, or the "rules of the game."

---

## Elevation Criteria (Strict)

Something may be elevated only if it satisfies all of the following:

1. **Recurrence**: it appears across multiple attempts or projects (not a one-off).
2. **Portability**: it remains true across different stacks/models/tools.
3. **Drag Reduction**: it prevents repeated confusion, re-explanation, or failure.
4. **Testability**: it can be expressed as a check, constraint, or falsifiable claim.

If any criterion fails, the artifact stays local (Attempt/PRD) or dies.

---

## Decay Rule (Default)

Most artifacts should not be preserved.

ODD assumes:
- generation is abundant,
- maintenance is the tax you pay forever,
- and residue creates epistemic drift.

Discarding is not nihilism. It is how the system stays legible.

---

## Where This Fits With Lanes and Epochs

- **Product lanes** isolate intent and success criteria so that unrelated surfaces do not drift together.
- **Epochs** define comparability boundaries when the "rules of the game" change.

This document explains the memory model underneath both.

See also:
- `/docs/appendices/product-lanes.md`
- `/docs/appendices/epochs.md`
