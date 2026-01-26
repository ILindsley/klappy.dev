---
uri: klappy://canon/documentation/agent-executable-outline
title: "Agent-Executable Documentation Outline"
audience: canon
exposure: nav
tier: 1
relevance: decision
voice: neutral
stability: stable
tags: ["templates", "agents", "documentation"]
execution_posture: governing
---

# Agent-Executable Documentation Outline

> Supplement human-readable documentation with decision leverage.

## Purpose

This outline defines **agent-useful sections** that may be added where appropriate.
It supplements catalog information without replacing it.

Only documents intended to influence behavior should use this structure fully.

---

## Section Contracts

### Subtitle — Trigger + Scope
**One sentence.**
When does this apply? What decision does it govern?

Good:
> "Use when validating user-visible changes; screenshots alone can falsely signal success."

---

### Description — Decision Model
1–2 short paragraphs.
What decision does this document govern?
What invariant must hold?
What goes wrong if ignored?

This is a compressed stance, not a catalog summary.

---

### Operating Constraints
Non-negotiables.
Use MUST / MUST NOT / NEVER.
No prose.

---

### Defaults
What to do when uncertain.
Heuristics, not rules.

---

### Failure Modes
Named traps you've actually seen.
Concrete and specific.

---

### Verification
What counts as "done."
Evidence required.
Unacceptable substitutes.

---

### Summary
Working-memory compression.
No history.
At least one testable heuristic.

---

### Examples
Minimal.
Good vs bad preferred.

---

### Background / Rationale
Optional.
Human-first.
Not required for execution.

---

### Related
Explicit links only.
No explanation.

---

## Applicability by Execution Posture

- Governing: most sections expected
- Operational: subset expected
- Exploratory: optional, light use
- Routing: usually omitted

---

## Final Rule

> **If a section would be forced, omit it deliberately.**
