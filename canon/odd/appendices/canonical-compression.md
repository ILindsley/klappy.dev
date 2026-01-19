---
uri: klappy://canon/odd/canonical-compression
title: Canonical Compression
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "compression", "compiled", "epochs", "drift"]
status: canonical
category: odd
version: 1.0
epoch: E0002
---

# Canonical Compression

## Summary

As the Canon grows, agents and humans cannot hold the entire system in working memory.

Canonical Compression solves this by producing a **derived, minimal working model** of the Canon that fits into limited context windows without sacrificing the source of truth.

**Canonical Compression is compilation, not mutation.**

- Source Canon remains authoritative and unchanged.
- Compressed outputs are derived artifacts.
- Derived artifacts are disposable and regenerable.
- Any compression output can be deleted without loss of truth.

---

## The Problem It Addresses

Agents drift for reasons beyond contradiction:

- The total doc surface becomes too large for a single context window.
- Important rules are duplicated across files, creating divergence.
- Low-signal history (old decisions, obsolete guidance) consumes attention.
- "More documentation" paradoxically makes behavior less consistent.

Drift checks detect inconsistency.
Canonical Compression reduces the size of the reasoning surface so consistency becomes feasible.

---

## Two Classes of Canon Artifacts

### 1) Source Canon (Authoritative, Slow)

Examples:

- `/canon/**`
- `/canon/odd/appendices/**`
- `/canon/odd/decisions/**`

Properties:

- Curated and human-owned
- Evidence-backed
- Traceable
- Evolves slowly
- Never rewritten by synthesis

Source Canon is **truth storage**.

### 2) Compiled Canon (Derived, Fast)

Canonical Compression produces **Compiled Canon** outputs.

Properties:

- Derived and lossy (summaries, collapsed checklists, working models)
- Replaceable and disposable
- Epoch-scoped
- Designed for agent working memory
- Must include links back to Source Canon

Compiled Canon is **truth projection**, not truth itself.

---

## Compilation Model

Canonical Compression produces **derived artifacts**.

- Source Canon is never modified
- Compressed outputs live in `_compiled/`
- Outputs are epoch-scoped and disposable
- Regeneration is always preferred to editing

Compression is compilation, not mutation.

---

## Where Compiled Canon Lives (Exact)

Compiled outputs MUST NOT be written into `/canon/` as source documents.

They live here:

/canon/_compiled/
epoch-E0002/
agent-working-model.md
reasoning-checklist.md
failure-patterns-collapsed.md

Notes:

- `_compiled/` is derived output (wipeable).
- Outputs are organized by epoch to preserve comparability.
- If the entire folder is deleted, no truth is lost — only convenience.

---

## What Compression Produces

Canonical Compression generates a small set of artifacts (exact list may evolve):

- **Agent Working Model**: minimal worldview for correct behavior
- **Reasoning Checklist**: step-by-step constraints + invariants
- **Failure Patterns (Collapsed)**: common pitfalls distilled into triggers + tests
- **Doc Map (Progressive Links)**: what to read next when confidence drops

Each output MUST:

- Be marked as derived/compiled
- Declare its epoch
- Link back to source documents for traceability

---

## What Compression Must Never Do

- Rewrite or replace Source Canon files
- Delete decision logs
- "Optimize" by removing nuance from the source
- Invent new rules (compression may restate, not legislate)

If a compression output implies a new rule, that rule must be introduced via:
- a decision log, or
- a PRD + attempt process in the relevant lane

---

## Relationship to Drift Checks

Drift checks answer: **"Do these documents contradict?"**

Canonical Compression answers: **"Can a bounded context window hold the rules needed to behave correctly?"**

Drift checks prevent incoherence.
Compression prevents overload.

Both are required.

---

## Relationship to Epochs

Compression outputs are epoch-scoped.

- If epoch changes, compiled outputs must be regenerated
- Comparability across epochs is not assumed
- Old compiled outputs may be archived or deleted

Epoch scoping prevents "half-updated working models" from lingering.

---

## The Rule (One Sentence)

**Canon is written by humans and proven by outcomes.  
Compiled Canon is written by synthesis and proven by usability.**

---

## Status

This document defines the conceptual model.
Implementation of tooling to generate compiled outputs is tracked separately.
