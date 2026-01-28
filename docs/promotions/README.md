---
uri: klappy://docs/promotions
title: "Promotion Pipeline"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["promotions", "canon", "learning", "patterns", "governance"]
---

# Promotion Pipeline

> Where validated patterns become canon. This is how the system learns.

## Purpose

The Promotion Pipeline captures patterns that emerge from validation and decides whether they deserve to become governing rules.

Without this:

- The same failure mode gets rediscovered repeatedly
- Validation becomes punitive instead of educational
- Canon grows by opinion instead of evidence

With this:

- Canon evolves because reality demanded it
- Humans trust the process because it learns with them
- ODD stays antifragile

## What a Promotion Is

A promotion artifact is a proposal to add, modify, or clarify a governing rule based on observed evidence.

It is **not** Canon. It is a candidate for Canon.

## Promotion Flow

```text
1. Observe pattern (Validation Agent catches same failure 2+ times)
   └─> Document in docs/promotions/P####-short-name.md

2. Gather evidence
   └─> ≥2 independent validations
   └─> Same failure mode
   └─> Evidence that the rule would have prevented it

3. Propose promotion
   └─> Where in Canon it belongs
   └─> Specific language to add or change
   └─> Risk assessment

4. Review
   └─> Status: proposed → accepted | rejected

5. Execute (if accepted)
   └─> Modify Canon doc
   └─> Link back to promotion artifact for provenance
```

## Promotion Artifact Structure

See `TEMPLATE.md` for the full template.

Key sections:

- **Observed Pattern**: What keeps happening?
- **Evidence**: How many times? Where?
- **Current Handling**: What catches this now?
- **Proposed Promotion**: Specific Canon change
- **Risk**: What could go wrong?
- **Status**: proposed | accepted | rejected

## Rules

- No promotion without evidence
- No promotion without ≥2 independent validations
- No automation of Canon changes (humans decide)
- All Canon additions must link back to their promotion artifact

## Promotion Review Triggers (Epistemic Hygiene)

Promotion artifacts SHOULD be reviewed when any of the following occur:

| Trigger                      | Signal                                                          | Smell                                                 |
| ---------------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| Repeated validation failures | Same pattern flagged ≥2 times                                   | "We keep stopping the same mistake"                   |
| Repeated Librarian lookups   | Same question asked repeatedly                                  | "People can't find or internalize this rule"          |
| Unresolved promotion backlog | ≥3 artifacts remain `proposed`                                  | "We're learning, but not deciding"                    |
| Rules require explanation    | Correct citations followed by clarifications                    | "The rule exists, but isn't operationally crisp"      |
| Validator friction           | Humans say "this is annoying" or "it keeps blocking me"         | "Enforcement without understanding"                   |
| Rules lack origin            | Canon rule cited frequently, no promotion artifact explains why | "We're enforcing something nobody remembers learning" |

**Reviews are triggered by observed signals, not by time.**

Each review MUST result in one of:

- **Accepted** — promoted to Canon
- **Rejected** — with reason documented
- **Deferred** — with explicit reason and conditions for re-review

**Key rule:** When validator friction appears, improve explanation first. Do not weaken the validator.

## Naming Convention

`P####-short-description.md`

Examples:

- `P0001-completion-requires-artifacts.md`
- `P0002-visual-proof-platform-coverage.md`
- `P0003-test-output-not-screenshots.md`

## Status Values

| Status     | Meaning                                          |
| ---------- | ------------------------------------------------ |
| `proposed` | Evidence gathered, awaiting review               |
| `accepted` | Approved for promotion to Canon                  |
| `rejected` | Evidence insufficient or rule not warranted      |
| `executed` | Canon has been updated with backlink to this doc |

## Why Humans, Not Agents

The Promotion Pipeline is intentionally manual.

Agents can:

- Detect patterns
- Gather evidence
- Suggest promotions

Agents cannot:

- Decide what becomes Canon
- Merge promotion artifacts
- Write governing rules

This is how you prevent ideology creep.
