---
uri: klappy://docs/decisions/D0013
title: "D0013: Build Output Truth is Lane-Scoped (products/<lane>/dist)"
audience: docs
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "lanes", "build", "deploy", "contracts"]
---

# Build Output Truth is Lane-Scoped (products/<lane>/dist)

> Lane builds must output to products/<lane>/dist/, eliminating repo-root collision.

## Description

This decision establishes `products/<lane>/dist/` as the canonical build output location for E0002. Multi-lane architecture requires lane-scoped implementation and deployment surfaces—repo-root `/dist` cannot represent multiple lanes without collision. Each lane build must produce `products/<lane>/dist/index.html` to support independent deployment and promotion.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0013: Build Output Truth is Lane-Scoped (products/<lane>/dist)

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture, D0011-odd-contract-2.0.0, D0012-e0002-transition-interpretation

---

## Decision

For ODD Contract 2.x (E0002), the canonical build output location is:

> **`products/<lane>/dist/`**

Specifically, each lane build MUST produce:

- `products/<lane>/dist/`
- `products/<lane>/dist/index.html`

This is required to support product lanes as first-class, independent products.

---

## Why

- Multi-lane PRD architecture (D0009) requires lane-scoped implementation and deployment surfaces.
- Repo-root `/dist` cannot represent multiple lane builds without collision or ambiguity.
- Lane-scoped output enables per-lane Cloudflare Pages projects and per-lane promotion.

---

## Consequences

- Any references to repo-root `/dist` as a universal requirement are **legacy / transitional** and must be labeled as such until aligned.
- Interface contracts and build tooling must converge mechanically to this truth (tracked as alignment work; not part of this decision).
- Verifiers (future `verify:contracts`) must validate lane-scoped output, not repo-root output.

---

## Scope Notes (Non-Decision)

This decision does not prescribe:

- how the build is implemented (Vite, etc.)
- which lanes require a deployable artifact
- manifest runtime URL conventions

It defines only the canonical output location when a lane produces a deployable build artifact.

