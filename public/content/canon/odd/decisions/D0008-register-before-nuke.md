---
uri: klappy://canon/odd/decisions/D0008
title: "D0008: Register Before Nuke"
audience: canon
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "lifecycle", "provenance", "independence"]
---

# D0008: Register Before Nuke

**Status:** Active  
**Date:** 2026-01-16  
**Scope:** Attempt lifecycle  

---

## Decision

The required sequence for starting any attempt is:

1. **`attempt:register`** — captures provenance
2. **`attempt:nuke`** — guarantees independence
3. Only then does implementation begin

This order is **mandatory and non-negotiable**.

---

## Why

### If an agent nukes before registering:
- You lose the "observer" identity
- You lose the pre-state snapshot (`git_head`, branch, timestamp)
- You cannot answer: *who did what, with what model, from where?*

### If an agent registers but doesn't nuke:
- You lose independence
- You contaminate outcomes with inherited code
- You lie to yourself about variance between attempts

**Register → Nuke** is the only sequence that satisfies both forensic traceability and experimental purity.

---

## What This Preserves

| Concern | How It's Addressed |
|---------|-------------------|
| Provenance | Registration captures agent, model, tool, git HEAD, timestamp |
| Independence | Nuke deletes `/src` and framework configs — zero inheritance |
| Forensic truth | Pre-state is recorded before it's destroyed |
| Experimental purity | Implementation starts from a true blank slate |

---

## Consequences

1. **Agents cannot skip registration** — attempts without provenance are invalid
2. **Agents cannot skip nuke** — attempts with inherited code are contaminated
3. **The sequence is enforced by documentation and social contract** — tooling may add guardrails but the rule is the rule
4. **META.json becomes the authoritative record** — branch names are convenience, provenance is truth

---

## Implementation Hooks

- `PROMPT_ATTEMPT_KICKOFF.txt`: First actions section explicitly states register → nuke
- `ATTEMPT_KICKOFF.md`: Procedure section documents this order
- `attempt-cli.js`: Could add warnings if nuke is called without prior registration (future enhancement)

---

## See Also

- [D0002: Attempt Provenance Required](./D0002-attempt-provenance-required.md)
- [D0005: Nuke Safety Guards](./D0005-nuke-safety-guards.md)
- [D0006: Dogfooding Requirement](./D0006-dogfooding-requirement.md)
