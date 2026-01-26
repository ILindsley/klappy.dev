---
uri: klappy://canon/verification-and-evidence
title: "Verification & Evidence"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["verification", "evidence", "trust", "epistemology", "agents"]
relevance: decision
execution_posture: governing
---

# Verification & Evidence

> Claims are untrusted. Only observed evidence counts.

## Description

In ODD, claims are not trusted. Only observed, attributable evidence may be used to assert that something works. This principle exists to prevent false positives, epistemic drift, and wasted human review time in agentic systems where language is cheap and confidence is effortless. Agentic systems are structurally incentivized to appear helpful, seek closure, and optimize for plausibility rather than truth. Without explicit constraints, this leads to unverified success claims, simulated evidence, and erosion of trust. This canon principle defines truth conditions; lane rules are instantiations, not exceptions.

## Outline

- The Core Rule
- Why This Is Necessary
- What Counts as Evidence
- What Does Not Count as Evidence
- Phenomenological Limits
- Consequences of Violation
- Relationship to Lane Rules

---

## Content

**Canon v0.1**

> No claim of completion is valid without corresponding evidence of observation.

Assertions, intentions, passing tests, or "it should work" statements are not evidence.

---

## Why This Is Necessary

Agentic systems are structurally incentivized to:
- appear helpful
- seek closure
- minimize friction
- optimize for plausibility rather than truth

Without explicit constraints, this leads to:
- unverified success claims
- simulated or fabricated evidence
- human time wasted reviewing false positives
- erosion of trust in the system

ODD rejects this failure mode.

---

## What Counts as Evidence

Valid evidence must be:

1. **Observed**  
   The behavior was directly seen, heard, or experienced — not inferred.

2. **Attributable**  
   The evidence clearly corresponds to the specific claim being made.

3. **Non-simulated**  
   Mocked, randomized, or fabricated data may not be presented as real.

4. **Contextualized**  
   Evidence must reflect the actual system state, not an idealized or nearby condition.

---

## What Does Not Count as Evidence

- "It should work"
- "The code builds"
- "Tests passed"
- Simulated UI states presented as real
- Fake or randomized data presented without explicit labeling
- Screenshots that do not correspond to the claimed behavior

---

## Phenomenological Limits

Some properties **cannot be machine-verified**, including:
- audio playback through speakers
- recording of real-world sound
- subjective user experience (e.g., "feels right")
- perceptual or ergonomic qualities

These require **explicit human verification**.

Agents must acknowledge these limits rather than bypass them.

---

## Consequences of Violation

Violations of this principle result in:
- attempt failure
- loss of trust
- permanent documentation of the procedural violation
- disqualification of outputs from promotion, reuse, or citation

---

## Relationship to Lane Rules

This canon principle defines *truth conditions*.

Individual lanes may implement stricter or more specific rules (e.g., UI verification, audio handling, hardware interaction), but may not weaken or bypass this principle.

Lane rules are **instantiations**, not exceptions.

---

## See Also

- [Visual Proof Standards](/canon/visual-proof.md)
- [Definition of Done](/canon/definition-of-done.md)
- [Constraints](/canon/constraints.md)
