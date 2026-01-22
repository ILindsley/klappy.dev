---
uri: klappy://odd/appendices
title: "ODD Appendices (Portable)"
audience: canon
exposure: nav
tier: 3
voice: neutral
stability: evolving
tags: ["odd", "appendices", "index", "portable"]
---

# ODD Appendices (Portable)

Extended concepts that deepen understanding without introducing enforcement. These are diagnostic and orientation documents, not requirements.

> **Note:** Implementation-specific appendices have been moved to `/docs/appendices/`. This folder contains only portable methodology that can apply to any ODD-following repository.

---

## Contents

| File | Title | Summary |
|------|-------|---------|
| `alignment-reviews.md` | Alignment Reviews | Periodic evaluation of the ODD system itself to detect drift between stated intent, implemented process, and observed outcomes. |
| `evolution-not-automation.md` | Evolution, Not Automation | This system optimizes learning, not execution. Humans stay in the loop. |
| `failure-driven-modularity.md` | Failure-Driven Modularity | Modular boundaries are introduced only after repeated failure to regenerate from spec. Modularity is an outcome of failure, not a prerequisite. |
| `media-as-learning-layer.md` | Media as a Learning Layer | Media reduces cognitive load over stable written content. Canonical truth lives in text. |
| `progressive-elevation.md` | Progressive Elevation & Decay | The five-layer portability model: how artifacts move from ephemeral attempts to durable canon through strict elevation criteria. Most should decay; few should elevate. |
| `quantum-development.md` | Quantum Development | Why multiple attempts against the same PRD are sometimes necessary before changing the PRD itself. |
| `visual-evolution.md` | Visual Evolution | Visual systems evolve independently from products through versioned visual interfaces. |

---

## Implementation-Specific Appendices

The following have been moved to `/docs/appendices/` as they contain klappy.dev-specific implementation details:

- `attempt-lifecycle.md` — Attempt folder structure, CLI commands, META.json schema
- `compilation.md`, `compiled-memory.md`, `compilation-targets.md` — Compilation paths and tooling
- `epochs.md` — E0003 evidence requirements with Cloudflare specifics
- `evidence.md`, `deploy-evidence.md`, `online-evidence.md` — Evidence path structure
- `lane-build-layout.md`, `lane-implementation-surfaces.md` — Lane-specific paths
- `product-lanes.md` — Specific lane names (website, ai-navigation, agent-skill)
- `repo-topology.md`, `repo-truth.md`, `repo-truth-audit.md` — Specific folder structures
- `canonical-compression.md`, `memory-architecture.proposed.md` — Compilation and memory paths

---

## When to Read What

**Understanding ODD methodology?** Start with these portable appendices.

**Implementing ODD in your own repo?** Use these as the conceptual foundation.

**Understanding klappy.dev specifics?** Read `/docs/appendices/` instead.

---

## Relationship to Canon

These appendices extend the core canon documents:

- `constraints.md` → appendices explain edge cases
- `definition-of-done.md` → evidence philosophy here, evidence procedures in docs
- `odd/manifesto.md` → appendices operationalize philosophy
