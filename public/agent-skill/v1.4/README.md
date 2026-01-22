# v1.4 — Tiered Context Construction

This version adds tier-weighted context construction guidance to the PRD elicitation system.

**Source**: attempt-002 (corrected from attempt-001)

## Contents

- [`prd-guide-pack.md`](./prd-guide-pack.md) — The compiled pack

## What's New in v1.4

### Default Context Construction

The pack now includes a new section teaching agents how to construct context using tier-weighted projection detail:

| Document Tier | Default Projection Detail | What Is Returned |
|---------------|---------------------------|------------------|
| **Tier 0** | `excluded` | Never included in default context packs |
| **Tier 1** | `high` | Complete document content |
| **Tier 2** | `medium` | Frontmatter + title + summary + description + outline |
| **Tier 3** | `low` | Frontmatter + title + summary only |

### Key Addition: Tier 0 Exclusion

Tier 0 is a scope exclusion marker, not an epistemic tier. Content marked Tier 0:
- Is public-facing, intended for human readers
- Is excluded from agent reasoning contexts
- Must never leak into default context packs

### Agent Prohibitions

Agents using this pack must NOT:
- Include Tier 0 content in default context packs
- Infer obligation from folder hierarchy
- Special-case README or index files for elevated inclusion
- Promote Tier 3 content to higher detail for convenience
- Summarize or synthesize documentation content

## Usage

### Option 1: Public URL (after deployment)

```
https://main.klappy-dev-agent-skill.pages.dev/v1.4/prd-guide-pack.md
```

### Option 2: Local file

Copy the pack from `prd-guide-pack.md` and paste it into your AI context.

## Status

**NOT YET CHAMPION** — Awaiting human review.

Current champion remains v1.3.1.
