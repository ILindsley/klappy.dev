# v1.4.1 — Tier-Aware Pack Compiler

This version implements tier-aware compilation, fixing the root cause of v1.4's failure: the compiler now enforces epistemic obligation in code.

## Contents

| File | Description |
|------|-------------|
| [`prd-guide-pack.md`](./prd-guide-pack.md) | PRD elicitation guide pack (~17K tokens) |
| [`default-odd-context-pack.md`](./default-odd-context-pack.md) | Default ODD context pack via discovery (~80K tokens) |

## Key Changes from v1.3.1

### Tier System Enforcement

The compiler now reads `tier: 0|1|2|3` from document frontmatter and enforces:

| Tier | Epistemic Obligation | Projection Detail |
|------|---------------------|-------------------|
| **Tier 0** | Scope exclusion | EXCLUDED (never included) |
| **Tier 1** | Foundational — must absorb | High (full content) |
| **Tier 2** | Shared — should respect | Medium (frontmatter + outline) |
| **Tier 3** | Awareness — may reference | Low (title + summary) |

### New Features

- **FR-1**: Tier metadata parsing from frontmatter
- **FR-2**: Tier 0 exclusion (hard rule, no exceptions)
- **FR-3**: Pack selection modes (curated + discovered)
- **FR-4**: Tier-based projection (1→high, 2→medium, 3→low)
- **FR-5**: Auditability via `--plan` flag
- **FR-6**: Deterministic ordering

### Tier-Aware Context Section

INSTRUCTIONS.md now includes guidance on how to interpret tier-weighted context:

- Tier 1 content is primary reasoning input
- Tier 2 content provides structural guidance
- Tier 3 content is awareness only
- Tier 0 content is intentionally excluded

## Usage

### Option 1: URL (recommended)

```
https://main.klappy-dev-agent-skill.pages.dev/v1.4.1/prd-guide-pack.md
```

### Option 2: Local

Copy the contents of `prd-guide-pack.md` and paste into your AI context.

## Compile Yourself

```bash
npm run lane:compile -- --lane agent-skill --pack prd-guide --plan
```

The `--plan` flag outputs per-file decisions showing tier enforcement.

## Related Documents

- [PRD v1.4.1](../../products/agent-skill/v1.4.1/PRD.md)
- [Epistemic Obligation and Document Tiers](/canon/epistemic-obligation-and-document-tiers.md)
