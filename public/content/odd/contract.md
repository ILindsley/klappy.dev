---
uri: klappy://odd/contract
title: "ODD System Contract"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "contract", "version", "semver", "compatibility"]
---

# ODD System Contract

> The single source of truth for ODD workflow compatibility.

## Description

The ODD System Contract versions repo structure, PRD lanes, attempt lifecycle, tooling invariants, required paths, provenance requirements (META.json), and evidence standards. Current version is 2.0.0 (multi-lane architecture). Epochs mark shifts in the evaluation landscape: E0001 (single-PRD era, contract 1.x) and E0002 (multi-lane era, contract 2.x). Contract 2.0.0 breaking changes include lane declaration required, epoch declaration in META.json, PRDs under `/docs/PRD/<lane>/PRD.md`, and attempts under `/products/<lane>/attempts/`. Do not compare outcomes across epochs without explicit adjustment.

## Outline

- What This Versions
- Epochs (E0001, E0002)
- Contract 2.0.0 Breaking Changes
- Compatibility (Forward and Backward)
- Version History

---

## Content

**Current Version:** 2.0.0

This document is the single source of truth for the ODD workflow contract version.

All other documents reference this version. Individual PRDs, attempts, and content packs have their own versioning schemes, but compatibility with the ODD system is determined by this contract.

---

## What This Versions

The ODD System Contract covers:

- **Repo structure** required for ODD workflow
- **PRD lanes** and attempt lifecycle contracts
- **Tooling invariants** (register/nuke/finalize/promote)
- **Required paths** and naming conventions
- **Provenance requirements** (META.json schema)
- **Evidence standards** (what counts as proof)

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
| 2.0.0 | 2026-01-17 | Multi-lane architecture, epoch requirements |
| 1.x | Pre-2026-01-17 | Single PRD era (implicit, never formally versioned) |

---

## Related Documents

- Decision log: `/docs/decisions/D0011-odd-contract-2.0.0.md`
- Epochs: `/docs/appendices/epochs.md`
- Product Lanes: `/docs/appendices/product-lanes.md`
- Alignment Reviews: `/odd/appendices/alignment-reviews.md`
