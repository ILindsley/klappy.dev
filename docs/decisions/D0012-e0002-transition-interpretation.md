---
uri: klappy://docs/decisions/D0012
title: "D0012: E0002 Transition Interpretation (Truth vs Enforcement Lag)"
audience: docs
exposure: internal
tier: 3
voice: neutral
stability: stable
tags: ["odd", "decisions", "epochs", "lanes", "drift", "interfaces", "tooling"]
---

# E0002 Transition Interpretation (Truth vs Enforcement Lag)

> During epoch transitions, canon defines truth while tooling may temporarily lag behind.

## Description

This decision addresses the expected gap during E0002 transition where truth (canon/PRDs/contracts) advances faster than enforcement (CLI/build scripts). Canon and lane PRDs define intended truth; tooling lag is temporarily permitted but legacy surfaces must be explicitly labeled. Each contradiction requires selecting ONE canonical truth—no "synthesis truth" allowed.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0012: E0002 Transition Interpretation (Truth vs Enforcement Lag)

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture, D0011-odd-contract-2.0.0

---

## Context

The repository has crossed an epoch boundary into **E0002-multi-lane-era** (ODD Contract 2.x).

A repo truth audit surfaced explicit contradictions between:

- Canon + lane PRDs (intended truth for E0002)
- Docs (mixed E0001/E0002 references)
- Tooling + scripts (partially E0001-encoded invariants)
- Interface contracts (claimed E0002 compatibility; some still encode E0001 shapes)

This is expected during transition: truth (canon/PRDs/contracts) can advance faster than enforcement (CLI/build scripts), and historical artifacts can persist.

---

## Decision

During the E0002 transition:

1. **Canon and lane PRDs define intended truth.**  
2. **Tooling and enforcement may lag (mixed-era is permitted temporarily).**  
3. **Legacy surfaces may remain, but MUST be explicitly labeled as legacy (pre-E0002).**  
4. **Comparability across E0001 ↔ E0002 is limited by default.** If lane and epoch metadata are missing, outcomes are **not comparable by default**.
5. **Each surfaced contradiction requires selecting ONE canonical truth before alignment work begins.** No “synthesis truth” is permitted.

---

## Consequences

### Positive

- Preserves historical evidence without rewriting it into the new model
- Prevents folklore by forcing explicit truth selection per contradiction
- Makes mixed-era state explicitly permissible (and therefore auditable)

### Negative

- Temporary cognitive dissonance: documentation and tooling may disagree
- Requires deliberate convergence work (contracts, docs labeling, tooling alignment)

---

## Operational Rules (Minimal)

- **Label, don’t rewrite:** Prefer small “Legacy (pre E0002)” headers/notes over broad edits.
- **Decide before implementing:** For each contradiction, record the canonical truth first; then align docs/contracts/tooling mechanically.
- **No silent drift:** If contradictions exist, they must be citeable and tracked until resolved.

