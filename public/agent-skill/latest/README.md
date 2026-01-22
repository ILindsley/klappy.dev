# Latest Champion

This folder contains the current champion version of the ODD PRD Guide pack.

**Current champion**: v1.4.1

## Contents

- [`prd-guide-pack.md`](./prd-guide-pack.md) — The compiled pack (~17K tokens)

## What's New in v1.4.1

**Tier-Aware Pack Compiler** — The compiler now enforces epistemic obligation in code.

### Key Changes

| Feature | Description |
|---------|-------------|
| **Tier Metadata Parsing** | Compiler reads `tier: 0\|1\|2\|3` from frontmatter |
| **Tier 0 Exclusion** | Tier 0 files are never included (hard rule) |
| **Tier-Based Projection** | Tier 1→high, Tier 2→medium, Tier 3→low |
| **Discovery Mode** | Automatic file selection for default packs |
| **Auditability** | `--plan` flag outputs per-file decisions |

### Tier System

| Tier | Epistemic Obligation | Projection |
|------|---------------------|------------|
| **Tier 0** | Scope exclusion | Excluded |
| **Tier 1** | Foundational — must absorb | Full content |
| **Tier 2** | Shared — should respect | Frontmatter + outline |
| **Tier 3** | Awareness — may reference | Title + summary |

### What This Means

- Documents are now included at detail levels matching their epistemic importance
- Tier 0 files (scope exclusions) are never included, even if explicitly listed
- The pack teaches agents about tier-aware context construction

## Usage

Copy the pack contents and paste into your AI context.

See [`../v1.4.1/README.md`](../v1.4.1/README.md) for detailed usage instructions.

## Stability

This folder always points to the current champion. If you need stability, pin to a specific version (e.g., `../v1.4.1/`).
