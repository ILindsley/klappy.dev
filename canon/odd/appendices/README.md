---
uri: klappy://canon/odd/appendices
title: "ODD Appendices"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "appendices", "index"]
---

# 🧩 ODD Appendices

Extended concepts that deepen understanding without introducing enforcement. These are diagnostic and orientation documents, not requirements.

---

## 📁 Contents

| File | Title | Summary |
|------|-------|---------|
| `alignment-reviews.md` | Alignment Reviews | Periodic evaluation of the ODD system itself to detect drift between stated intent, implemented process, and observed outcomes. |
| `attempt-lifecycle.md` | Attempt Lifecycle | How PRD versions, attempts, evidence, and deployments are preserved. Attempts exist to be finished; content compounds over time. |
| `canonical-compression.md` | Canonical Compression | How derived, minimal working models are produced from Source Canon to fit into limited context windows. |
| `compilation.md` | Compilation | The process of producing derived, wipeable, portable packs from higher-entropy source documents. |
| `compilation-targets.md` | Compilation Targets | How compiled packs make the corpus usable at constrained context sizes without rewriting source truth. |
| `compiled-memory.md` | Compiled Memory | Lane-scoped, wipeable, auditable compressed artifacts that agents and humans can safely consume. |
| `deploy-evidence.md` | Deploy Evidence | Why evidence must be in the build output. Local builds are not sufficient proof for online deployments. |
| `drift-checks.md` | Drift Checks | The drift-prevention mechanism. When docs, prompts, and tooling diverge, truth becomes vibes. |
| `epochs.md` | Epochs | Named periods where "success" meaning is stable enough to compare outcomes. Shifts in the fitness landscape. |
| `evidence.md` | Evidence | Evidence is proof, not narrative. Attempts are valid only with deployed public evidence. |
| `evolution-not-automation.md` | Evolution, Not Automation | This system optimizes learning, not execution. Humans stay in the loop. |
| `lane-build-layout.md` | Lane Build Layout | How lanes avoid /src and /dist collisions. Worktrees isolate, deployments are lane-scoped. |
| `lane-implementation-surfaces.md` | Lane-Scoped Implementation Surfaces | Each lane owns its own /products/<lane>/src and /products/<lane>/dist. No shared repo-root surfaces. |
| `media-as-learning-layer.md` | Media as a Learning Layer | Media reduces cognitive load over stable written content. Canonical truth lives in text. |
| `memory-architecture.proposed.md` | Memory Architecture | Memory as layered percolation: Attempts → Lane History → Lane Decisions → Cross-Lane Patterns → Canon. |
| `online-evidence.md` | Online Evidence Requirement | Attempts are invalid without online preview URLs. "Works on my machine" is not evidence. |
| `product-lanes.md` | Product Lanes | Why multiple PRD lanes exist and how they relate. Lanes share canon, not lifecycle. |
| `progressive-elevation.md` | Progressive Elevation & Decay | Most artifacts decay; only patterns that repeatedly reduce drag elevate into durable layers. |
| `quantum-development.md` | Quantum Development | Why multiple attempts against the same PRD are sometimes necessary before changing the PRD itself. |
| `repo-topology.md` | Repository Topology | What lives where and what changes when. App/Content/Infrastructure decoupling. |
| `repo-truth.md` | Repository Truth | If the repository is dirty, conclusions drawn from it are invalid. Epistemic hygiene. |
| `repo-truth-audit.md` | Repo Truth Audit | Prompt for detecting epistemic drift across canon, docs, tooling, and structure. |
| `visual-evolution.md` | Visual Evolution | Visual systems evolve independently from products through versioned visual interfaces. |
| `failure-driven-modularity.md` | Failure-Driven Modularity | Modular boundaries are introduced only after repeated failure to regenerate from spec. Modularity is an outcome of failure, not a prerequisite. |

---

## 🔍 When to Read What

**Starting out?** Begin with `attempt-lifecycle.md` and `product-lanes.md` to understand the basic structure.

**Building a pack?** Read `compilation.md`, `compiled-memory.md`, and `memory-architecture.proposed.md`.

**Debugging drift?** Read `drift-checks.md`, `repo-truth.md`, and `repo-truth-audit.md`.

**Understanding evidence requirements?** Read `evidence.md`, `online-evidence.md`, and `deploy-evidence.md`.

---

## 🔗 Relationship to Canon

These appendices extend the core canon documents:

- `constraints.md` → appendices explain edge cases
- `definition-of-done.md` → evidence appendices detail requirements
- `odd/manifesto.md` → appendices operationalize philosophy
