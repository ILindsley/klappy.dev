---
uri: klappy://odd/contract
title: "ODD System Contract"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "contract", "version", "semver", "compatibility"]
relevance: decision
execution_posture: governing
---

# ODD System Contract

> The single source of truth for ODD workflow compatibility.

## Description

The ODD System Contract versions the three-tier hierarchy (ODD/Canon/Docs), repo structure, PRD lanes, attempt lifecycle, tooling invariants, required paths, provenance requirements (META.json), and evidence standards. Current version is 2.1.0. Version 2.1.0 formalizes the three-tier conceptual hierarchy where ODD contains universal principles, Canon contains program constraints, and Docs contains implementation details. Each tier has different decay rates. Epochs mark shifts in the evaluation landscape. Do not compare outcomes across epochs without explicit adjustment.

## Outline

- What This Versions
- Epochs (E0001, E0002)
- Contract 2.0.0 Breaking Changes
- Compatibility (Forward and Backward)
- Version History

---

## Content

**Current Version:** 2.1.0

This document is the single source of truth for the ODD workflow contract version.

All other documents reference this version. Individual PRDs, attempts, and content packs have their own versioning schemes, but compatibility with the ODD system is determined by this contract.

---

## What This Versions

The ODD System Contract covers:

- **Three-tier hierarchy** (ODD → Canon → Docs)
- **Repo structure** required for ODD workflow
- **PRD lanes** and attempt lifecycle contracts
- **Tooling invariants** (register/nuke/finalize/promote)
- **Required paths** and naming conventions
- **Provenance requirements** (META.json schema)
- **Evidence standards** (what counts as proof)

---

## Three-Tier Hierarchy (2.1.0)

ODD is organized as a conceptual hierarchy with different decay rates:

| Tier | Location | Contains | Decay Rate |
|------|----------|----------|------------|
| **ODD** | `/odd/` | Universal principles (timeless, product-agnostic) | Almost never |
| **Canon** | `/canon/` | Program-level constraints (shared rules across products) | Carefully |
| **Docs** | `/docs/` | Implementation details (how this instance works) | Freely |

**The litmus test:**
1. Would this still be true in 10 years? → **ODD**
2. Should all products in this program obey it? → **Canon**
3. Is this about how *we* do it *here*? → **Docs**

See [D0001: Three-Tier Conceptual Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md).

---

## Epochs

Epochs mark shifts in the evaluation landscape. Contract versions and epochs are related but distinct:

| Epoch | Contract Version | Description |
|-------|------------------|-------------|
| E0001-single-prd-era | 1.x | Single PRD world (`/docs/PRD.md`) |
| E0002-multi-lane-era | 2.x | Multi-lane world (`/docs/PRD/<lane>/PRD.md`) |

**Rule:** Do not compare outcomes across epochs without explicit adjustment.

See `/docs/appendices/epochs.md` for epoch semantics.

---

## Contract 2.0.0 — Breaking Changes

This version introduces structural changes that are not backwards-compatible:

### Removed
- Single active PRD rule (`/docs/PRD.md` as sole PRD location)

### Added
- **Lane declaration required** for all attempts
- **Epoch declaration required** in META.json
- PRDs stored under `/docs/PRD/<lane>/PRD.md`
- Attempts stored under `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/` (lane-contained)
- Tooling requires `--lane` flag for register, finalize, promote

Note: Root `/attempts/**` is legacy (read-only). All new attempts are lane-contained.

### Changed
- Mental model: products decoupled, canon shared
- Comparison validity: same lane + same PRD + same epoch required

---

## Compatibility

### Forward Compatibility
Documents written for contract 2.x will not work correctly in a 1.x environment.

### Backward Compatibility
Epoch 1 artifacts (pre-lanes) remain valid historical records. They are not "wrong" — they are from a different evaluation context.

Epoch 1 documents should be marked with an epoch header if they remain in the repo for historical reference.

---

## Version History

| Version | Date | Summary |
|---------|------|---------|
| 2.1.0 | 2026-01-21 | Three-tier hierarchy (ODD/Canon/Docs), ODD at root level |
| 2.0.0 | 2026-01-17 | Multi-lane architecture, epoch requirements |
| 1.x | Pre-2026-01-17 | Single PRD era (implicit, never formally versioned) |

---

## Related Documents

- Decision log: `/docs/decisions/D0011-odd-contract-2.0.0.md`
- Epochs: `/docs/appendices/epochs.md`
- Product Lanes: `/docs/appendices/product-lanes.md`
- Alignment Reviews: `/odd/appendices/alignment-reviews.md`
