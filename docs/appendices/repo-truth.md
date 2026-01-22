---
uri: klappy://docs/appendices/repo-truth
title: "Repository Truth & Epistemic Hygiene"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: stable
tags: ["odd", "epistemic", "hygiene", "truth", "cleanup"]
---

# Repository Truth & Epistemic Hygiene

> If the repository is dirty, conclusions drawn from it are invalid.

## Description

In AI-assisted development, state residue is indistinguishable from signal—unclean repositories produce false confidence, failures, and learning. A repository is dirty when orphaned worktrees, detached HEADs, stale branches, overlapping attempts, or ambiguous production state exist. `attempt:cleanup` is a reset of epistemic state that guarantees only sealed attempts and intentional branches remain.

## Outline

- Core Principle
- What "Dirty" Means
- `attempt:cleanup` as a Truth Reset
- Why This Matters
- The Truth Boundary
- Branch Roles as Epistemic Contracts
- Orientation Note

---

## Content

## Core Principle

> **If the repository is dirty, conclusions drawn from it are invalid.**

In AI-assisted development, state residue is indistinguishable from signal.
Unclean repositories produce false confidence, false failures, and false learning.

This project treats repository cleanliness as a prerequisite for reasoning.

---

## What "Dirty" Means

A repository is considered dirty when:

- orphaned worktrees exist
- detached HEADs remain
- stale branches survive past their relevance
- attempts overlap in filesystem state
- production state is ambiguous

When this happens, outcomes cannot be trusted.

---

## `attempt:cleanup` as a Truth Reset

`attempt:cleanup` is not housekeeping.

It is a **reset of epistemic state**.

Running cleanup guarantees:

- only sealed attempts remain
- only intentional branches exist
- production state is explicit
- new attempts begin without contamination

Without cleanup, experimentation collapses into folklore.

---

## Why This Matters

Quantum Development relies on comparing independent observations.

Independence is meaningless if the filesystem lies.

Therefore:

- cleanup is mandatory
- residue is failure
- convenience never overrides truth

---

## The Truth Boundary

```
┌─────────────────────────────────────────────────────────────┐
│                     TRUTH BOUNDARY                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   INSIDE (trustworthy)          OUTSIDE (suspect)           │
│   ─────────────────────         ──────────────────          │
│   • prod branch                 • orphaned worktrees        │
│   • main branch                 • detached HEADs            │
│   • sealed attempts             • stale branches            │
│   • explicit state              • filesystem residue        │
│                                                             │
│   `attempt:cleanup` moves everything INSIDE                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Branch Roles as Epistemic Contracts

| Branch | Role | Can Be Nuked? |
|--------|------|---------------|
| `prod` | Production truth | ❌ Never |
| `main` | Experiment ledger | ⚠️ Only via promotion |
| `attempt/*` | Hypotheses | ✅ Always |

These aren't conventions. They're contracts about what can be trusted.

---

## Orientation Note

This document explains *why* the rule exists.
Procedures for enforcing it live elsewhere.

See:
- `/docs/ATTEMPTS.md` — attempt lifecycle procedures
- `/docs/ATTEMPT_KICKOFF.md` — agent kickoff instructions
- `/docs/CLOUDFLARE_CONFIG.md` — deploy branch mapping
