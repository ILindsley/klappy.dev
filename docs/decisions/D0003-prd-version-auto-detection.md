---
uri: klappy://docs/decisions/D0003
title: "D0003: PRD Version Auto-Detection"
audience: docs
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "prd", "version"]
---

# PRD Version Auto-Detection

> PRD version is parsed from source at runtime, eliminating hardcoded version drift in prompts.

## Description

This decision establishes that PRD versions are automatically parsed from `/docs/PRD.md` at runtime rather than hardcoded in operational prompts. When the PRD version changes, prompts don't need updating—the single source of truth in PRD.md is authoritative. A mismatch guard validates any explicit `--prd` flag against the actual PRD.md content.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0003 — PRD Version Auto-Detection

## Decision

The PRD version is automatically parsed from `/docs/PRD.md` at runtime. Operational prompts must never hardcode evolving identifiers like PRD versions.

## Status

**Active**

## Why

- Hardcoded version strings in prompts cause maintenance drift
- When PRD goes from v0.2 → v0.3, the kickoff prompt shouldn't need updating
- Single source of truth: `/docs/PRD.md` is authoritative
- Eliminates "forgot to update the prompt" class of errors

## Consequences

- ✅ Prompts are version-agnostic and future-proof
- ✅ PRD version changes require only one edit (PRD.md)
- ✅ Mismatch guard prevents accidental version divergence
- ⚠️ PRD.md must have parseable version format
- ⚠️ `--prd` flag still accepted but validated against PRD.md

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`parsePrdVersion()` reads PRD.md)
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt` uses `attempt:register` without version
- Guard: If `--prd` is passed and mismatches PRD.md, command fails

### Parseable Formats

The script accepts either:

```markdown
| **PRD Version** | v0.3 |
```

Or:

```markdown
PRD Version: v0.3
```

## Evidence

- Commit: `bcfbf55` — "feat: make attempt:register version-agnostic"
- Problem observed: PRD went to v0.3 but prompt still said v0.2
