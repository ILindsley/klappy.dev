---
uri: klappy://canon/epistemic-obligation-and-document-tiers
title: "Epistemic Obligation and Document Tiers"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: stable
tags: ["canon", "tiers", "epistemic-obligation", "architecture"]
---

# Epistemic Obligation and Document Tiers

> Document tiers define epistemic obligation, not importance.

## Description

This document explains the three-tier system used to organize content in this repository. Tiers are not about importance, value, or quality. They are about epistemic obligation—how much a reader or system is obligated to absorb and respect content at each level. Tier 1 carries foundational obligation and rarely changes. Tier 2 carries shared obligation and evolves carefully. Tier 3 carries awareness without obligation and may change freely. Tiers are orthogonal to folders. Any folder may contain documents at any tier.

## Outline

- What Tiers Mean
- Tier 1: Foundational Obligation
- Tier 2: Shared Obligation
- Tier 3: Awareness Without Obligation
- Why Tier 3 Exists
- Tiers Are Not Importance

---

## Content

**Canon v0.1**

### What Tiers Mean

Tiers describe epistemic obligation:

| Tier | Obligation Level | Decay Rate | Change Frequency |
|------|------------------|------------|------------------|
| **Tier 1** | Must absorb | Almost never | Rarely |
| **Tier 2** | Should respect | Carefully | Occasionally |
| **Tier 3** | May reference | Freely | Frequently |

The tier system answers: *"How much must I internalize this before proceeding?"*

### Tier 1: Foundational Obligation

Tier 1 content must be fully absorbed before proceeding. It cannot be safely ignored or skimmed.

**Characteristics:**

- Contradiction is a serious error
- Reinterpretation requires explicit justification
- Changes are rare and deliberate
- Stability is expected across long timescales

**Epistemic obligation:** Absorb fully. Do not contradict. Do not reinterpret without explicit justification.

**Cross-folder examples:** A manifesto in odd/, a core constraint in canon/, or a critical process in docs/ could all be Tier 1.

### Tier 2: Shared Obligation

Tier 2 content should be respected by default. It represents agreed conventions that apply unless explicitly overridden.

**Characteristics:**

- Deviation is allowed but must be documented
- Changes happen carefully with awareness of downstream impact
- Content is stable but not immutable
- Readers should know this content exists and follow it unless they have reason not to

**Epistemic obligation:** Respect unless explicitly overridden. Follow by default. Document deviations.

**Cross-folder examples:** A decision record in odd/, a shared rule in canon/, or a standard process in docs/ could all be Tier 2.

### Tier 3: Awareness Without Obligation

Tier 3 content is available for reference but carries no obligation to internalize. It exists so you can find it when needed.

**Characteristics:**

- May be ignored when not relevant
- Changes freely without requiring broad awareness
- Useful for specific tasks, not general orientation
- Can be rebuilt or discarded without system-wide impact

**Epistemic obligation:** Reference when relevant. May ignore when not applicable. Free to rebuild.

**Cross-folder examples:** An appendix in odd/, a template in canon/, or a how-to guide in docs/ could all be Tier 3.

### Why Tier 3 Exists

Tier 3 exists because not everything needs to be internalized.

Some content:

- Is useful only in specific contexts
- Changes frequently without broad impact
- Serves reference purposes rather than orientation
- Deserves documentation without demanding absorption

Without Tier 3, either:
- Low-obligation content gets elevated to Tier 2 (creating false urgency)
- Low-obligation content goes undocumented (creating knowledge gaps)

Tier 3 gives content a home without giving it unearned epistemic weight.

### Tiers Are Not Importance

A common misunderstanding: "Tier 1 is most important, Tier 3 is least important."

This is wrong.

Tiers describe **epistemic obligation**, not **importance**.

| Tier | Epistemic Obligation | Importance |
|------|---------------------|------------|
| Tier 1 | High | Varies |
| Tier 2 | Medium | Varies |
| Tier 3 | Low | Varies |

A Tier 3 document might be critically important for today's deployment. A Tier 1 document might be philosophically foundational but irrelevant to a specific task.

**The question tiers answer:** "How much must I internalize this?"

**The question tiers do not answer:** "How important is this?"

Conflating the two leads to either:
- Ignoring Tier 3 content that matters for execution
- Over-weighting Tier 1 content that doesn't apply

---

## See Also

- [Three-Tier Conceptual Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md) — The decision that established the folder model (orthogonal to tiers)
