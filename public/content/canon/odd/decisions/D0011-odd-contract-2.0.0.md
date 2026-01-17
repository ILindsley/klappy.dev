---
uri: klappy://canon/odd/decisions/D0011
title: "D0011: ODD System Contract 2.0.0"
audience: canon
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "contract", "version", "epoch"]
---

# D0011: ODD System Contract 2.0.0

## Status

Accepted

## Context

The ODD system evolved from a single-PRD model to a multi-lane architecture. This change affects:

- Directory structure (PRDs, attempts)
- Tooling requirements (lane flags)
- Mental model (products decoupled, canon shared)
- Comparability rules (epochs required)

These changes are not backwards-compatible. Applying 2.x workflows to 1.x structures, or comparing 2.x attempts to 1.x attempts without adjustment, produces invalid conclusions.

The system needed:
1. A single authoritative version for the ODD contract
2. Clear epoch boundaries
3. A path to mark legacy documents without rewriting history

## Decision

1. **Create `/canon/odd/contract.md`** as the single source of ODD system versioning.
2. **Declare contract version 2.0.0** with the multi-lane architecture.
3. **Define two epochs:**
   - E0001-single-prd-era (contract 1.x)
   - E0002-multi-lane-era (contract 2.x)
4. **Require epoch_id in META.json** for all new attempts.
5. **Preserve Epoch 1 artifacts** as historical records, not errors.

## Consequences

### Positive
- Single source of truth for ODD compatibility
- Clear boundary between eras
- Historical artifacts remain valid in their context
- Future major changes have a pattern to follow

### Negative
- Epoch 1 documents may need headers if kept for reference
- Tooling must be epoch-aware for meaningful comparisons
- Slight overhead in declaring epoch during registration

### Neutral
- PRD versions remain lane-local (unaffected)
- Content pack manifest version is separate (unaffected)

## Breaking Changes in 2.0.0

| Category | 1.x | 2.x |
|----------|-----|-----|
| PRD location | `/docs/PRD.md` | `/docs/PRD/<lane>/PRD.md` |
| Attempt location | `/attempts/prd-vX.Y/attempt-NNN/` | `/attempts/<lane>/prd-vX.Y/attempt-NNN/` |
| Lane declaration | N/A | Required |
| Epoch declaration | N/A | Required |
| Tooling flags | None | `--lane` required |

## Epoch 1 Document Header (Standard)

For documents kept for historical reference that describe 1.x workflows:

```markdown
> **Epoch 1 Document** (ODD Contract ≤1.x)
>
> Kept for historical context. Current workflow is defined by ODD Contract 2.x.
> See `/canon/odd/contract.md` for the current contract.
```

## Related

- `/canon/odd/contract.md` — the contract itself
- `/canon/odd/appendices/epochs.md` — epoch semantics
- `/canon/odd/appendices/product-lanes.md` — lane architecture
- `/canon/odd/decisions/D0009-multi-lane-prd-architecture.md` — the architectural decision
