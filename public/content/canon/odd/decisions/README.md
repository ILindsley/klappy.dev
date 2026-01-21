---
uri: klappy://canon/odd/decisions
title: "ODD Decision Log (Redirect)"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "decisions", "redirect"]
---

# ODD Decision Log

> **Moved:** Implementation-specific decisions now live in `/docs/decisions/`.

This folder previously contained Architecture Decision Records (ADRs) for the ODD workflow and repository practices.

As part of the canon progressive distillation effort, implementation-specific decisions have been moved to `/docs/decisions/` to separate portable methodology (canon) from reference implementation details (docs).

---

## Where Decisions Now Live

| Location | Purpose |
|----------|---------|
| `/docs/decisions/` | Implementation-specific decisions for klappy.dev |
| `/canon/` | Portable methodology and philosophy |

---

## The Principle

> **Decisions live in docs. Procedures live in docs. Philosophy lives in canon.**

Canon remains the shared gravity — constraints, decision rules, and definitions that apply to all ODD-following repos.

Implementation decisions document specific choices made for this repository.

---

## See Also

- `/docs/decisions/README.md` — Full decision index
- `/canon/odd/contract.md` — ODD System Contract
- `/docs/appendices/epochs.md` — Epoch semantics
