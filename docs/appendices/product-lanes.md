---
uri: klappy://docs/appendices/product-lanes
title: "Product Lanes in Outcome-Driven Development"
audience: docs
exposure: hidden
tier: 2
voice: neutral
stability: stable
tags: ["odd", "prd", "architecture", "lanes", "orientation"]
---

# Product Lanes in Outcome-Driven Development

> Why multiple PRD lanes exist and how they relate in klappy.dev.

## Description

This documents klappy.dev's three product lanes: Website (human-facing orientation), AI Navigation Interface (AI helping humans understand ODD), and Agent Cognitive Skill (reusable agent framework). Each lane has its own PRD at `/docs/PRD/<lane>/PRD.md`, attempts at `/products/<lane>/attempts/`, and independent lifecycle. Lanes share canon, not lifecycle. Implementation surfaces are lane-scoped (`products/<lane>/src` and `products/<lane>/dist`). This prevents scope creep, evidence pollution, and cascading reruns across unrelated products.

## Outline

- Summary
- Why PRDs Must Be Decoupled
- The Three Lanes (Website, AI Navigation, Agent Skill)
- Implementation Surfaces Are Lane-Scoped
- Canon Is Not a Product
- What Is Shared vs Isolated
- Attempt Structure (Locked)
- Anti-Patterns
- Implications for Tooling and Docs
- Scalability

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** Why multiple PRD lanes exist and how they relate

---

## Summary

ODD systems evolve across multiple independent product lanes.

Each lane has its own PRD, attempts, and failure modes.

Lanes share canon, not lifecycle.

---

## Why PRDs Must Be Decoupled

A single PRD governing everything creates cognitive collapse:

- **Different users**: Website serves humans exploring ODD. Agent skill serves AI systems executing ODD.
- **Different success criteria**: "Mobile usable" vs "Can propose a PRD autonomously"
- **Different rates of change**: Website can stagnate while agent skills evolve rapidly.
- **Different evidence**: Screenshots vs decision quality metrics.

Forcing these into one evolutionary track means:

- Progress in one lane forces reruns in another
- Evidence requirements conflict
- Scope creep becomes structural

---

## The Three Lanes

### Lane 1: Public Website (Humans)

**Purpose:** A human-facing orientation surface for ODD.

This is portfolio, explanation, credibility.
It does not teach agents how to think.
It does not execute ODD.
It explains ODD progressively to humans.

**PRD Location:** `/docs/PRD/website/PRD.md`

**Primary User:** Human developers, peers, evaluators

---

### Lane 2: AI Navigation Interface (Humans talking to AI)

**Purpose:** An AI layer over documentation that helps humans understand ODD.

This enables humans to ask questions of the ODD corpus and be:

- Answered accurately
- Guided progressively
- Linked to the right documents
- Without reading everything

This is NOT agent tooling. This is AI helping humans navigate.

**PRD Location:** `/docs/PRD/ai-navigation/PRD.md`

**Primary User:** Humans trying to understand and evaluate ODD

---

### Lane 3: Agent Cognitive Skill (Evolution Engine)

**Purpose:** A reusable agent cognitive framework for ODD reasoning.

This is about how agents think, not what they render.

Enables AI systems to:

- Reason using ODD principles
- Structure PRDs
- Define outcomes and evidence
- Run evolutionary attempts
- Improve their own process over time

This is not tied to this website. It should work on any project.

**PRD Location:** `/docs/PRD/agent-skill/PRD.md`

**Primary User:** AI agents executing evolutionary development elsewhere

---

## Implementation Surfaces Are Lane-Scoped

Each lane is an independent product.

Implementation directories are lane-scoped:

- `products/<lane>/src` (disposable)
- `products/<lane>/dist` (build output)

Repo-root `/src` is not a shared surface in the multi-lane model.

See: `/docs/appendices/lane-implementation-surfaces.md`

---

## Canon Is Not a Product

Canon does not have a PRD.
Canon does not have attempts.
Canon evolves only through decision logs.

Products may render, query, or reason over canon - but never modify it directly.

| Layer    | Coupling                      |
|----------|-------------------------------|
| Canon    | Shared, slow, authoritative   |
| PRDs     | Isolated, fast, disposable    |
| Attempts | Ephemeral, lane-scoped        |
| Tooling  | Canon-aware, lane-agnostic    |

---

## What Is Shared vs What Is Isolated

| Artifact          | Shared Across Lanes? | Notes                                      |
|-------------------|----------------------|--------------------------------------------|
| Canon             | Yes                  | All lanes reference the same constraints   |
| Decision logs     | Yes                  | Architectural decisions affect all lanes   |
| PRDs              | No                   | Each lane has its own PRD                  |
| Attempts          | No                   | Attempts are lane-scoped                   |
| Evidence          | No                   | Success criteria differ per lane           |
| Definition of Done| Partially            | Core DoD applies; lane-specific criteria extend it |

---

## Attempt Structure (Locked)

Every attempt MUST declare a lane before registration.
Attempts without a lane are invalid.

**Folder structure:** `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/`

Attempts are **lane-contained** — all artifacts live under the product lane directory.

Valid examples:
- `/products/website/attempts/prd-v1.0/attempt-001/`
- `/products/ai-navigation/attempts/prd-v1.0/attempt-001/`
- `/products/agent-skill/attempts/prd-v1.0/attempt-001/`

Invalid (do not use):
- `/attempts/<lane>/prd-vX.Y/attempt-NNN/` (legacy, read-only)
- `/attempts/prd-vX.Y/<lane>/`
- `/products/<lane>/attempts/attempt-NNN/` (missing PRD version)

---

## Anti-Patterns

### One PRD to Rule Them All

Treating all work as variations of a single product forces:

- Conflicting success criteria
- Evidence that doesn't apply
- Reruns across unrelated changes

### Treating Agents as UI Features

The AI navigation interface (Lane 2) is NOT the same as agent cognitive skill (Lane 3).

- Lane 2: AI helps humans understand
- Lane 3: AI executes ODD autonomously

Mixing these creates scope confusion and evidence pollution.

### Re-running Experiments Across Lanes

A mobile navigation fix (Lane 1) should not invalidate agent skill experiments (Lane 3).

Lane isolation prevents cascading reruns.

---

## Implications for Tooling and Docs

### Where PRDs Live

```
/docs/PRD/
  website/PRD.md
  ai-navigation/PRD.md
  agent-skill/PRD.md
```

### Where Attempts Live

Attempts are lane-contained:

```
/products/
  website/attempts/prd-vX.Y/attempt-NNN/
  ai-navigation/attempts/prd-vX.Y/attempt-NNN/
  agent-skill/attempts/prd-vX.Y/attempt-NNN/
```

Note: Root `/attempts/**` is legacy (read-only). See `/attempts/README.md`.

### How Evolution Propagates

- Canon changes affect all lanes (but rarely change)
- PRD changes affect only that lane
- Attempt outcomes inform only that lane's PRD evolution
- Cross-lane learnings are captured in decision logs, not PRD mutations

---

## Scalability

This architecture is scalable because it is NOT interdependent.

You do not get a monorepo of coupled PRDs.
You get shared canon + independent evolutionary tracks.

This lets you:

- Freeze the website indefinitely
- Rapidly evolve agent skills
- Replace AI navigation entirely
- Add a fourth lane later without touching the others

---

## Related Documents

- Decision log: `/docs/decisions/D0009-multi-lane-prd-architecture.md`
- Attempt lifecycle: `/docs/appendices/attempt-lifecycle.md`
- Evolution philosophy: `/canon/odd/appendices/evolution-not-automation.md`
