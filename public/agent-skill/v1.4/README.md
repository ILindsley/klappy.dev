# v1.4 — Tiered Context Construction

This version adds tier-weighted context construction guidance to the PRD elicitation system.

## Contents

- [`prd-guide-pack.md`](./prd-guide-pack.md) — The compiled pack (~19K tokens)

## What's New in v1.4

### Default Context Construction

The pack now includes a new section teaching agents how to construct context using tier-weighted projection detail:

| Document Tier | Default Projection Detail | What Is Returned |
|---------------|---------------------------|------------------|
| **Tier 1** | `high` (full content) | Complete document content |
| **Tier 2** | `medium` (structural) | Frontmatter + description + outline |
| **Tier 3** | `low` (minimal) | Title + one-line summary |

### Agent Responsibilities

Agents using this pack will:

- Respect epistemic obligation as encoded in document tiers
- Treat Tier 1 content as foundational (must absorb fully)
- Treat Tier 2 content as shared convention (respect by default)
- Treat Tier 3 content as awareness only (reference when relevant)
- Surface degradation when document structure is insufficient

### Agent Prohibitions

Agents using this pack must NOT:

- Infer obligation from folder hierarchy
- Special-case README or index files for elevated inclusion
- Promote Tier 3 content to higher detail for convenience
- Summarize or synthesize documentation content
- Apply heuristics that override tier-to-detail mapping

## Usage

### Option 1: Public URL (no clone required)

```
https://main.klappy-dev-agent-skill.pages.dev/v1.4/prd-guide-pack.md
```

### Option 2: Local file

Copy the pack from `prd-guide-pack.md` and paste it into your AI context.

## Canon Version

This pack was compiled against canon v0.11.0.

## Prior Version

- [v1.3.1](../v1.3.1/) — Canon refresh v0.10.0 (added terminology.md)
