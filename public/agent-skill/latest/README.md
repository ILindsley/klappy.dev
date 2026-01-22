# Latest Champion

This folder contains the current champion version of the ODD PRD Guide pack.

**Current champion**: v1.4

## Contents

- [`prd-guide-pack.md`](./prd-guide-pack.md) — The compiled pack (~19K tokens)

## What's New in v1.4

Tiered Context Construction — the pack now includes guidance for tier-weighted context assembly:

- **Tier-to-Detail Mapping** — Tier 1 documents get full content, Tier 2 get structural, Tier 3 get minimal
- **Agent Responsibilities** — How to respect epistemic obligation
- **Agent Prohibitions** — What agents must NOT do (no README special-casing, no synthesis, no folder inference)
- **Degradation Handling** — What happens when document structure is insufficient

### Key Additions

| Section | Purpose |
|---------|---------|
| Default Context Construction | Teaches agents how to weight content by document tier |
| Tier-to-Detail Mapping | Fixed mapping: Tier 1 → high, Tier 2 → medium, Tier 3 → low |
| Agent Prohibitions | Explicit non-goals to prevent design regression |

## Usage

Copy the pack contents and paste into your AI context.

See [`../v1.4/README.md`](../v1.4/README.md) for detailed usage instructions.

## Stability

This folder always points to the current champion. If you need stability, pin to a specific version (e.g., `../v1.3.1/`).
