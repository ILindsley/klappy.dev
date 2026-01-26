---
uri: klappy://canon/documentation/execution-posture
title: "Execution Posture"
audience: canon
exposure: nav
tier: 1
relevance: decision
voice: neutral
stability: stable
tags: ["documentation", "agents", "governance"]
---

# Execution Posture

> How strongly a document is expected to govern behavior.

## Summary

Execution posture declares **how executable a document intends to be**.
It prevents forced structure while still enabling agent usefulness.

Documents should be **as executable as they naturally allow — no more, no less**.

---

## Allowed Values

### `governing`
- Defines constraints, rules, or standards
- Expected to change agent behavior
- High extraction value for context packs

### `operational`
- Guides action without strict enforcement
- Playbooks, workflows, how-tos
- Moderate extraction expectations

### `exploratory`
- Thinking tools, essays, design exploration
- Human-first
- Minimal or no executable structure required

### `routing`
- Indexes, maps, glossaries
- Exists to point, not to govern
- Extraction focuses on links and triggers only

---

## Required Frontmatter Field

```yaml
execution_posture: governing | operational | exploratory | routing
```

---

## Governing Principle

Executable structure is an affordance, not a requirement.

If a section would be forced or misleading, it should be omitted intentionally.

---

## Compiler Expectations
- Governing docs: missing executable sections should WARN
- Operational docs: missing sections may WARN
- Exploratory and routing docs: missing sections are expected

Compilers must never auto-generate content.
