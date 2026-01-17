---
uri: klappy://canon/odd/decisions/D0009
title: "D0009: Multi-Lane PRD Architecture"
audience: canon
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "lanes", "prd", "architecture"]
---

# D0009: Multi-Lane PRD Architecture

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Supersedes:** Single Active PRD rule (formerly in canon/index.md)

---

## Context

The original ODD model assumed a single active PRD at any time (`/docs/PRD.md`). All attempts, evidence, and lifecycle tracked against this single evolutionary line.

This created cognitive collapse when multiple independent products emerged:

1. **Public Website** — human-facing orientation surface
2. **AI Navigation Interface** — AI layer helping humans understand ODD
3. **Agent Cognitive Skill** — agent framework for executing ODD on any project

These have:
- Different users (humans vs AI vs AI-as-tool)
- Different success criteria (screenshots vs citations vs autonomous PRD generation)
- Different rates of change (website can stagnate while agent skill evolves rapidly)
- Different evidence requirements

Forcing them into a single PRD caused:
- Scope creep across unrelated concerns
- Evidence pollution (mobile screenshots don't validate agent reasoning)
- Progress in one area forcing reruns in another
- Confusion about what "done" means

---

## Decision

PRDs are now organized into independent product lanes.

Each lane has:
- Its own PRD at `/docs/PRD/<lane>/PRD.md`
- Its own attempts at `/attempts/<lane>/prd-vX.Y/attempt-NNN/`
- Its own lifecycle, success criteria, and evidence

The three initial lanes are:
- `website` — human-facing UI/UX
- `ai-navigation` — AI over documentation
- `agent-skill` — agent cognitive framework

**Lanes share canon, not lifecycle.**

Canon remains the shared gravity — constraints, decision rules, and definitions that apply to all lanes. Canon evolves via decision logs, not PRDs.

---

## Consequences

### Positive

- **Independence:** Evolve agent skills without touching website PRD
- **Clarity:** Each lane has explicit success criteria
- **Scalability:** Add new lanes without restructuring existing ones
- **Evidence integrity:** Lane-specific evidence stays lane-scoped

### Negative

- **Complexity:** More structure to understand and maintain
- **Tooling updates:** CLI commands now require `--lane` flag
- **Migration:** Existing attempts need mental model adjustment

### Neutral

- **Canon unchanged:** Shared constraints still apply to all lanes
- **Attempt mechanics unchanged:** Same register/nuke/build/seal flow

---

## Constraints

- Every attempt MUST declare a lane before registration
- Attempts without a lane are invalid
- Folder structure is locked: `/attempts/<lane>/prd-vX.Y/attempt-NNN/`
- No creative variations on attempt folder structure allowed

---

## Related Documents

- `/canon/odd/appendices/product-lanes.md` — full orientation
- `/docs/ATTEMPTS.md` — updated attempt lifecycle
- `/docs/ATTEMPT_KICKOFF.md` — updated workflow with lane declaration
