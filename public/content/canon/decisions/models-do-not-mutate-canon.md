---
uri: klappy://canon/decisions/models-do-not-mutate-canon
title: "Models Do Not Mutate Canon"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["canon", "decisions", "models", "mutation", "governance"]
relevance: decision
execution_posture: governing
---

# Models Do Not Mutate Canon

> Models may analyze and report on Canon, but may not edit it.

## Description

This decision records that AI models (LLMs, agents, assistants) are not permitted to directly edit Canon content. Models may read, analyze, summarize, and report on Canon. They may draft proposed changes. But the act of mutation—writing changes to Canon files—requires human review and approval. This preserves Canon's role as stable, human-governed truth.

## Outline

- Decision
- Status
- Context
- Alternatives Considered
- Consequences

---

## Content

## Decision

Models may not mutate Canon.

Specifically:

| Action | Permitted |
|--------|-----------|
| Read Canon | ✓ Yes |
| Analyze Canon | ✓ Yes |
| Summarize Canon | ✓ Yes |
| Report on Canon | ✓ Yes |
| Draft proposed changes | ✓ Yes |
| Write changes to Canon files | ✗ No |

## Status

**Active**

## Context

Canon exists to preserve stable, shared truth across this program. Its value depends on:

- Careful curation
- Intentional change
- Human accountability

Models are powerful tools for analysis and drafting. However, models:

- Optimize for plausibility, not correctness
- Cannot be held accountable for mistakes
- May introduce subtle drift through well-meaning edits

Allowing models to directly mutate Canon would erode the trust boundary that makes Canon useful.

## Alternatives Considered

### 1. Models may edit Canon freely

**Rejected.** This removes the human governance layer that makes Canon authoritative. Canon would become another generated artifact rather than curated truth.

### 2. Models may edit Canon with approval workflow

**Rejected for now.** An approval workflow could work, but adds complexity. The simpler rule—no model mutation—is clearer and easier to enforce.

### 3. Models may edit Tier 3 but not Tier 1-2

**Rejected.** This creates a confusing boundary. The rule should be simple: Canon does not get edited by models.

## Consequences

### Enables

- Canon remains human-governed
- Changes to Canon are intentional and traceable
- Models can still provide value through analysis and drafting
- Clear boundary for model behavior

### Prevents

- Subtle drift from well-meaning model edits
- Accountability gaps
- Canon becoming "just another generated file"

### Costs

- Slower Canon updates (requires human action)
- Models cannot self-correct Canon errors they detect
- Human bottleneck for Canon maintenance

---

## See Also

- [Epistemic Obligation and Document Tiers](/canon/epistemic-obligation-and-document-tiers.md)
- [Constraints](/canon/constraints.md) — AI as Accelerator, Not Authority
