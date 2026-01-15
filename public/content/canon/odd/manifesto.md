# ODD Manifesto v1.1 (Extended — Internal / Canon)

## Purpose

This document operationalizes Outcomes-Driven Development as a governance framework for human–AI collaboration.

It is designed to:
- guide autonomous agents
- enforce verification and evidence
- scale judgment without repeating it
- adapt rigor as projects mature

This version is not optimized for persuasion.
It is optimized for execution and enforcement.

---

## Core Thesis

The primary job of development is not writing code.
It is defining outcomes, enforcing constraints, and verifying reality.

AI accelerates execution.
Governance preserves trust.

---

## Pillars (Operational Interpretation)

### Prompt Over Code
- Intent is expressed declaratively.
- Code is treated as ephemeral.
- Regeneration is cheaper than preservation.

### KISS
- Complexity is a liability.
- Escalation requires evidence of failure.

### DRY (With Isolation)
- Duplication is tolerated across bounded contexts.
- Shared abstractions require proven reuse.

### Consistency
- Behavioral predictability matters more than visual uniformity.
- Consistency is scoped, not global.

### Maintainability
- Systems must survive creator turnover.
- Documentation and explicit tradeoffs are part of the product.

### Antifragile
- Failure is assumed.
- Recovery paths are preferred over prevention.
- Learning velocity is a design constraint.

### Scalable
- Growth must be bounded in:
  - cost
  - complexity
  - human attention
- Scalability includes cognitive and operational load.

---

## Restartability Over Salvage

ODD assumes that restarting from refined intent is often more effective than steering a system that has already drifted.

As systems grow, prompts accrete, assumptions harden, and local fixes compound. At a certain point, continued steering optimizes for preserving effort rather than improving outcomes.

Restarting is not failure.
Restarting is a recognition that:
- intent has become clearer
- constraints are better understood
- evidence from prior attempts now exists

In an AI-accelerated environment, restarting is cheap.
Misalignment is expensive.

ODD therefore treats restartability as a design feature:
- prompts are disposable
- implementations are ephemeral
- canon and intent persist

The goal is not to preserve artifacts, but to preserve learning.

A clean restart with better constraints is progress.

---

## Progressive Governance (Maturity-Aware ODD)

ODD enforcement depends on project maturity.

### Level 0 — PoC / Exploration
- Goal: learn quickly
- Artifacts are non-authoritative
- Verification demonstrates possibility
- Over-governance is prohibited

### Level 1 — Pilot / Product
- Goal: deliver value safely
- Evidence and visual proof required
- Tradeoffs must be explicit
- Silent failure is unacceptable

### Level 2 — Production / Long-Term
- Goal: sustain trust
- Outcomes must be measurable
- Observability, reversibility, and security are mandatory
- Autonomous actions require stop conditions and human gates

Maturity must be stated explicitly.

---

## Evidence as the Gate

Completion requires:
- observed behavior
- produced evidence
- self-audit against constraints
- explicit declaration of confidence and gaps

Assertions do not count as completion.

---

## Trust, Authority, and AI

AI is an accelerator, not an authority.
- AI may propose and generate
- AI may self-audit and verify
- AI may not silently assume trust

Authority boundaries and escalation points must be explicit.

---

## Outcomes Must Be Falsifiable

Outcomes are only valid if they can be:
- observed
- tested
- disproven

Non-falsifiable outcomes are treated as goals, not success criteria.

---

## Reversibility and Cost Awareness

Prefer decisions that are:
- cheap to undo
- bounded in cost
- limited in blast radius

Irreversible decisions require human approval.

---

## Stop Conditions

Every autonomous loop must define:
- success criteria
- failure criteria
- exit conditions

Endless optimization is a failure mode.

---

## Relationship to Canon

- **ODD** → why
- **Constraints** → assumptions
- **Decision Rules** → how
- **Maturity Model** → when
- **Evidence Policies** → proof

Together, these form a complete governance layer.

---

## Confidence, Risks, and Known Failure Modes

(ODD v1.1 — Internal Self-Assessment)

This section captures a snapshot assessment of how well Outcomes-Driven Development (ODD), as currently defined, aligns with its stated principles and where it is most vulnerable.

This is not a guarantee of correctness.
It is an explicit acknowledgment of uncertainty.

### Confidence Model

Confidence scores express current belief that ODD will behave as intended when applied thoughtfully.

Scale: 0.0–1.0
- 0.9+ — robust under most conditions
- 0.7–0.85 — strong, but watch for drift
- 0.5–0.7 — plausible, fragile under misuse
- <0.5 — likely misaligned without correction

Scores are expected to change as ODD is applied in practice.

### Principle-Level Confidence Snapshot

**Prompt Over Code / Convention Over Configuration**  
Confidence: 0.80

**KISS (Keep It Simple, Stupid)**  
Confidence: 0.75

**DRY (With Isolation)**  
Confidence: 0.70

**Consistency**  
Confidence: 0.65

**Maintainability**  
Confidence: 0.70

**Antifragile**  
Confidence: 0.60

**Scalable**  
Confidence: 0.70

### Cross-Cutting Risks

- **Premature Formalization** — ODD is vulnerable to being "locked in" too early
- **False Authority** — Well-written governance can be mistaken for correctness without evidence
- **Silent Drift** — Small deviations, left unnamed, can erode trust over time

---

## Closing (Internal)

ODD is not complete.

It is a living attempt to govern creativity, autonomy, and trust in a world where generation is cheap and certainty is not.

Its strength is not that it claims to be right—
but that it makes being wrong visible early.

For common failure modes and practical misapplications of ODD, see *Misuse Patterns* and *Prompt Architecture* in the ODD appendices.
