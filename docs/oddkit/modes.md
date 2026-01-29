---
uri: klappy://docs/oddkit/modes
title: "Epistemic Mode Guidance for oddkit"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["oddkit", "agents", "epistemic-modes"]
---

# Epistemic Mode Guidance for oddkit

> oddkit respects epistemic modes defined in Canon and must not collapse them.

## Canon Reference

This document depends on:

- **Canon: Epistemic Modes**

If Canon changes, this document must adapt.

---

## Default Mode Behavior

| Mode        | oddkit Behavior                                        |
| ----------- | ------------------------------------------------------ |
| Exploration | Ask questions, surface tensions, record insights       |
| Planning    | Clarify assumptions, outline intent, avoid claims      |
| Execution   | Require artifacts, validate outcomes, enforce evidence |

oddkit MUST explain when it refuses an action due to mode mismatch.

---

## Detection (Heuristic)

oddkit MAY infer mode from:

- user language ("what if", "let's plan", "I finished")
- presence or absence of artifacts
- explicit user declaration

Inference is always weaker than explicit declaration.

---

## Mode Refusal Examples

Valid refusals:

- "This appears to be exploratory. I can't validate completion yet."
- "You're asking for execution validation, but no artifacts were provided."
- "This introduces new alternatives during execution. Do you want to return to planning?"

Refusals MUST cite the epistemic reason, not a tool limitation.

---

## Interaction with Other oddkit Capabilities

- **Librarian** respects mode by:
  - preferring governing docs in Planning
  - allowing broader sources in Exploration

- **Validation** triggers only in Execution

- **Promotions** occur only after repeated Execution outcomes

---

## Final Note

oddkit does not decide when to act.
It enforces clarity about **what kind of thinking is happening**.
