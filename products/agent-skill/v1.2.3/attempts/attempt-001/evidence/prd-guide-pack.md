---
lane: agent-skill
pack: prd-guide
built_at: 2026-01-21T03:22:39.000Z
git_commit: 333a60abece7495f2f77886f4405221d815745f2
sources:
  - canon/README.md
  - canon/odd/README.md
  - canon/odd/manifesto.md
  - canon/odd/appendices/README.md
  - canon/odd/decisions/README.md
  - canon/constraints.md
  - canon/decision-rules.md
  - canon/definition-of-done.md
  - canon/self-audit.md
  - docs/PRD/PRD_TEMPLATE.md
  - products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md
source_hashes:
  canon/README.md: fe5795892bd4378256fb67ec8f3664e5c1e1d65228e5c89251b76f708f4e279c
  canon/odd/README.md: a04131e7ff589553411d30ca0d6d3292b6391dc3956461b243627488a229b709
  canon/odd/manifesto.md: 2ccce4217958d475582a42184355db8e5c5f158f5d176bda376d05265a6e5118
  canon/odd/appendices/README.md: 3dcdda85b2a7d9586aa58e6541bc4a96c78d0ff174d1444534e5ff03d5833934
  canon/odd/decisions/README.md: 8e0399ae5e922baa6019678f4cc768448b585390450ee803e6a38d87c1b9cc0d
  canon/constraints.md: 4921209156b3253307e43ae54d180dfb06a018b1dc259557c45ff903ef55520e
  canon/decision-rules.md: 5a35a7ed64b4a6041b8c46808f928b55c1d89006107bc6e24f53f164dd2a5dbc
  canon/definition-of-done.md: 159cb88a9d71323ade8a41678364c9f6a822e12449c9c95423dee1245418c644
  canon/self-audit.md: 397f92ef8115096adef690aeffd46f0a4bac055bab327841e762066690991b19
  docs/PRD/PRD_TEMPLATE.md: 24c9185733d05e351e2cefd5f67ef0328bee5d76854961cf23532784e6c6a108
  products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md: 0fc8d637a4021c7c579ed0f936dedffa8e2b96787d4d762b38c3e79b137a8dfa
---


---

## Source: `canon/README.md`

---
uri: klappy://canon
title: "Canon"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["canon", "index", "orientation"]
---

# 🧭 Canon

Curated documents that capture how decisions are made, what assumptions are held, how work is verified, and how rigor changes as projects mature.

The Canon exists so that reasoning does not have to be repeated.

---

## 📁 Contents

### Core Documents

| File | Title | Summary | Answers |
|------|-------|---------|---------|
| `constraints.md` | Constraints | Baseline assumptions and non-negotiables that shape every decision. | What must be true for this work to make sense? |
| `decision-rules.md` | Decision Rules | Default heuristics used when multiple valid options exist. | How do choices tend to be made? |
| `definition-of-done.md` | Definition of Done | What qualifies as completed work and what evidence is required. | When can work honestly be called done? |
| `self-audit.md` | Self-Audit Checklist | Review checklist before declaring completion. | What should be reviewed before claiming success? |
| `visual-proof.md` | Visual Proof Standards | What qualifies as acceptable visual evidence. | What does "prove it visually" mean? |
| `completion-report-template.md` | Completion Report Template | Standard format for reporting completed work. | How should completion be communicated? |
| `CHANGELOG.md` | Canon Changelog | Version history of canon changes. | What changed and when? |

### Subfolders

| Folder | Purpose |
|--------|---------|
| `odd/` | Outcomes-Driven Development philosophy and appendices. See [odd/README.md](./odd/README.md) |
| `meta/` | Metadata and pack configuration. |
| `_compiled/` | Compiled outputs (derived, wipeable). |

---

## 🚀 Start Here

1. **`constraints.md`** — What must be true for this work to make sense?
2. **`definition-of-done.md`** — When can work honestly be called done?
3. **`odd/manifesto.md`** — Why this approach exists.

These three documents anchor everything else.

---

## 📖 Precedence & Interpretation

A useful mental model for reading:

1. ODD Manifesto provides philosophical grounding
2. Maturity Model explains when rigor increases
3. Constraints shape the solution space
4. Decision Rules guide choices
5. Evidence Policies define completion

If documents appear to conflict, maturity context and explicit tradeoffs usually explain why.

---

## 🧠 What the Canon Is (and Is Not)

**The Canon Is:**
- A shared reference
- A source of assumptions and defaults
- A way to encode thinking without enforcing execution

**The Canon Is Not:**
- A workflow
- A command system
- A task list
- A replacement for judgment

Nothing in the Canon executes by itself.

---

## 🔒 Public vs Internal Boundary

- `/odd/README.md` → public-facing ODD (shareable, human-friendly)
- `/canon/**` → internal reference (governance artifacts, precise language)

Public documents explain intent. Canon documents preserve precision.

---

## 📋 Meta Rules

Structural conventions for keeping the Canon coherent over time. These are not workflows or enforcement steps.

**1. Single Inventory Source**
If an inventory of Canon resources exists, there should be one authoritative source (e.g., a manifest). Other indexes should be derived or optional.

**2. Stable Names Beat Clever Names**
Prefer stable file and URI naming over clever branding. Rename rarely.

**3. Audience Separation Matters**
"Public" explains and invites. "Canon" defines and stabilizes.

**4. Voice Is Labeled, Not Transformed**
First-person documents may be consumed as-is or translated by clients. The Canon itself does not require a specific rendering voice.

**5. Multi-Lane PRD Architecture**
PRDs are organized into independent product lanes. Each lane has its own active PRD, attempts, and lifecycle. Lanes share canon, not lifecycle. See `odd/appendices/product-lanes.md` for the full model.

---

## 🔄 Stability & Change Philosophy

Not all Canon documents are equally stable.

Some are intended to remain largely fixed. Others are expected to evolve through use.

Change is allowed, but should be:
- Intentional
- Versioned (at least informally)
- Documented somewhere discoverable

---

## ⚠️ Confidence & Drift Risk

This section expresses current confidence that the Canon and surrounding architecture align with the core pillars: KISS, DRY, Consistency, Maintainability, Antifragile, Scalable, Prompt-over-Code.

These are not guarantees. They are a snapshot of perceived risk.

**Confidence scale:**
- 0.9+ — robust
- 0.7–0.85 — strong, but watch for drift
- 0.5–0.7 — plausible, fragile under misuse
- <0.5 — likely misaligned unless corrected

**Current scores (v0.1 snapshot):**

| Pillar | Score | Notes |
|--------|-------|-------|
| Prompt-over-Code | 0.80 | Strong fit. Risk: schema sprawl or client-specific conventions. |
| KISS | 0.75 | Minimal primitives. Risk: meta-layer creep. |
| DRY (with isolation) | 0.70 | Canon centralizes principles. Risk: duplicate indices drifting. |
| Consistency | 0.65 | URI/metadata structure supports it. Risk: naming drift. |
| Maintainability | 0.70 | Stable worldview vs evolving templates. Risk: manual updates out of sync. |
| Antifragile | 0.60 | Recoverable if served statically. Risk: hidden single points of failure. |
| Scalable | 0.70 | Schema supports growth. Risk: large manifests becoming brittle. |

---

## 🚫 What Is Intentionally Undefined

The Canon deliberately does not define:
- Specific tools
- Specific agents
- Specific workflows
- Specific automation loops

These are left open to evolve without rewriting foundational thinking.

---

## 📦 For Pack Compilation

When building a guide pack, include:
- This README for orientation
- Specific documents needed for the pack's purpose
- Subfolder READMEs for scannable summaries without including all files

See `odd/appendices/compilation.md` for the compilation model.

---

## ✅ Status

- Canon Index v0.1 complete
- Orientation-only
- Includes confidence and drift snapshot

This Canon v0.1 is considered stable for initial builds. Revisions should be additive unless a documented failure requires change.


---

## Source: `canon/odd/README.md`

---
uri: klappy://canon/odd
title: "Outcomes-Driven Development"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "index"]
---

# 🎯 Outcomes-Driven Development (ODD)

The philosophical and operational foundation for this repository. ODD treats outcomes as primary, artifacts as ephemeral, and verification as mandatory.

---

## 📁 Contents

| File | Title | Summary |
|------|-------|---------|
| `manifesto.md` | ODD Manifesto | The core philosophy: defining outcomes, enforcing constraints, verifying reality. AI accelerates execution; governance preserves trust. |
| `maturity.md` | Project Maturity | How rigor changes as projects mature. PoC → Pilot → Production. |
| `contract.md` | ODD System Contract | Version contract for ODD compatibility. Currently v2.0.0 (multi-lane era). |
| `misuse-patterns.md` | Misuse Patterns | Common failure modes and how ODD gets misapplied in practice. |
| `prompt-architecture.md` | Prompt Architecture | How intent scales without giant prompts. |
| `orientation-map.md` | Orientation Map | One-page mental model of ODD, Canon, Evidence, and Outcomes. |

### Subfolders

| Folder | Purpose |
|--------|---------|
| `appendices/` | Extended concepts (23 files). See [appendices/README.md](./appendices/README.md) |
| `decisions/` | Architecture Decision Records. See [decisions/README.md](./decisions/README.md) |

---

## 🚀 Start Here

1. **`manifesto.md`** — Understand the philosophy
2. **`maturity.md`** — Know when rigor increases
3. **`appendices/attempt-lifecycle.md`** — See how work flows

---

## 💡 Core Thesis

The primary job of development is not writing code. It is:
- Defining outcomes
- Enforcing constraints
- Verifying reality

AI accelerates execution. Governance preserves trust.


---

## Source: `canon/odd/manifesto.md`

---
uri: klappy://canon/odd/manifesto
title: "ODD Manifesto — Extended"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "philosophy"]
---

# 🧠 ODD Manifesto v1.1 (Extended — Internal / Canon)

> ODD v1.1 — Extended (Internal / Agent-Governance) → for canon, MCP, agents (this file)

---

## 📌 Purpose

This document operationalizes Outcomes-Driven Development as a governance framework for human–AI collaboration.

It is designed to:
• guide autonomous agents
• enforce verification and evidence
• scale judgment without repeating it
• adapt rigor as projects mature

This version is not optimized for persuasion.
It is optimized for execution and enforcement.

---

## 🎯 Core Thesis

The primary job of development is not writing code.
It is defining outcomes, enforcing constraints, and verifying reality.

AI accelerates execution.
Governance preserves trust.

---

## 📌 Pillars (Operational Interpretation)

### Prompt Over Code
• Intent is expressed declaratively.
• Code is treated as ephemeral.
• Regeneration is cheaper than preservation.

### KISS

• Complexity is a liability.
• Escalation requires evidence of failure.

### DRY (With Isolation)

• Duplication is tolerated across bounded contexts.
• Shared abstractions require proven reuse.

### Consistency

• Behavioral predictability matters more than visual uniformity.
• Consistency is scoped, not global.

### Maintainability

• Systems must survive creator turnover.
• Documentation and explicit tradeoffs are part of the product.

### Antifragile

• Failure is assumed.
• Recovery paths are preferred over prevention.
• Learning velocity is a design constraint.

### Scalable

• Growth must be bounded in:
• cost
• complexity
• human attention
• Scalability includes cognitive and operational load.

---

## 🔄 Restartability Over Salvage

ODD assumes that restarting from refined intent is often more effective than steering a system that has already drifted.

As systems grow, prompts accrete, assumptions harden, and local fixes compound. At a certain point, continued steering optimizes for preserving effort rather than improving outcomes.

Restarting is not failure.
Restarting is a recognition that:
• intent has become clearer
• constraints are better understood
• evidence from prior attempts now exists

In an AI-accelerated environment, restarting is cheap.
Misalignment is expensive.

ODD therefore treats restartability as a design feature:
• prompts are disposable
• implementations are ephemeral
• canon and intent persist

The goal is not to preserve artifacts, but to preserve learning.

A clean restart with better constraints is progress.

---

## 📊 Progressive Governance (Maturity-Aware ODD)

ODD enforcement depends on project maturity.

Level 0 — PoC / Exploration
• Goal: learn quickly
• Artifacts are non-authoritative
• Verification demonstrates possibility
• Over-governance is prohibited

Level 1 — Pilot / Product
• Goal: deliver value safely
• Evidence and visual proof required
• Tradeoffs must be explicit
• Silent failure is unacceptable

Level 2 — Production / Long-Term
• Goal: sustain trust
• Outcomes must be measurable
• Observability, reversibility, and security are mandatory
• Autonomous actions require stop conditions and human gates

Maturity must be stated explicitly.

---

## 📎 Evidence as the Gate

Completion requires:
• observed behavior
• produced evidence
• self-audit against constraints
• explicit declaration of confidence and gaps

Assertions do not count as completion.

---

## 🤖 Trust, Authority, and AI

AI is an accelerator, not an authority.
• AI may propose and generate
• AI may self-audit and verify
• AI may not silently assume trust

Authority boundaries and escalation points must be explicit.

---

## 🔬 Outcomes Must Be Falsifiable

Outcomes are only valid if they can be:
• observed
• tested
• disproven

Non-falsifiable outcomes are treated as goals, not success criteria.

---

## ⚠️ Reversibility and Cost Awareness

Prefer decisions that are:
• cheap to undo
• bounded in cost
• limited in blast radius

Irreversible decisions require human approval.

---

## 🛑 Stop Conditions

Every autonomous loop must define:
• success criteria
• failure criteria
• exit conditions

Endless optimization is a failure mode.

---

## 🧠 Memory Is the Bottleneck

AI didn't just make coding faster. It changed what's scarce.

In ODD, generated artifacts are abundant, but **durable intent** is not.
So the work shifts toward:

- preserving what was learned,
- verifying reality,
- discarding what cannot be trusted,
- and elevating only what repeatedly reduces future drag.

ODD stays legible by using **Progressive Elevation & Decay**:
most artifacts die at the Attempt/PRD layer; only proven patterns elevate into Contracts, Canon, and Decision Trace.

See:
- `/canon/odd/appendices/progressive-elevation.md`
- `/canon/odd/appendices/product-lanes.md`
- `/canon/odd/appendices/epochs.md`

---

## 🔗 Relationship to Canon

• ODD → why
• Constraints → assumptions
• Decision Rules → how
• Maturity Model → when
• Evidence Policies → proof

Together, these form a complete governance layer.

---

## 💡 Closing (Internal)

ODD is not a philosophy of optimism.

It is a discipline of restraint, verification, and curation—
designed for a world where generation is infinite, but trust is not.

---

## ✅ Status

- ODD v1.1 finalized
- Public and internal views aligned
- Ready for MCP exposure and agent enforcement

---

## ⚠️ Confidence, Risks, and Known Failure Modes

(ODD v1.1 — Internal Self-Assessment)

This section captures a snapshot assessment of how well Outcomes-Driven Development (ODD), as currently defined, aligns with its stated principles and where it is most vulnerable.

This is not a guarantee of correctness.
It is an explicit acknowledgment of uncertainty.

---

### Confidence Model

Confidence scores express current belief that ODD will behave as intended when applied thoughtfully.

Scale: 0.0–1.0
• 0.9+ — robust under most conditions
• 0.7–0.85 — strong, but watch for drift
• 0.5–0.7 — plausible, fragile under misuse
• <0.5 — likely misaligned without correction

Scores are expected to change as ODD is applied in practice.

---

### Principle-Level Confidence Snapshot

**Prompt Over Code / Convention Over Configuration**
Confidence: 0.80

Why this is strong
• ODD treats intent, constraints, and outcomes as first-class artifacts.
• Canonical resources replace brittle, repeated prompts with stable conventions.

Primary risks
• Conventions silently becoming configuration sprawl.
• Clients inventing ad hoc mappings instead of using shared conventions.

Failure mode
• "Prompt over code" degenerates into "prompt + hidden config everywhere."

---

**KISS (Keep It Simple, Stupid)**
Confidence: 0.75

Why this is strong
• ODD avoids embedding workflows or agent loops.
• Complexity is deferred intentionally.

Primary risks
• Meta-layers (manifests, indices, maturity flags) accumulating unchecked.
• Over-abstracting governance before it proves necessary.

Failure mode
• Governance becomes heavier than the systems it governs.

---

**DRY (With Isolation)**
Confidence: 0.70

Why this is strong
• Canon centralizes worldview and defaults.
• Single-inventory patterns reduce duplication.

Primary risks
• Multiple parallel indices drifting out of sync.
• Reuse pressure creating brittle shared abstractions too early.

Failure mode
• "One source of truth" becomes "many partial truths."

---

**Consistency**
Confidence: 0.65

Why this is weaker
• Consistency depends on discipline, not tooling.
• Naming, casing, and URI patterns are easy to drift over time.

Primary risks
• Small inconsistencies compounding across resources and clients.
• Human tolerance masking slow degradation.

Failure mode
• The system remains logically sound but ergonomically frustrating.

---

**Maintainability**
Confidence: 0.70

Why this is strong
• Separation of stable principles from evolving operations.
• Explicit maturity model prevents premature hardening.

Primary risks
• Manual maintenance of inventories becoming burdensome.
• Version semantics implied but not enforced.

Failure mode
• Canon becomes respected but stale.

---

**Antifragile**
Confidence: 0.60

Why this is intentionally cautious
• Antifragility depends on real-world stress, not theory.
• Recovery paths are assumed, not yet proven.

Primary risks
• MCP or tooling layers becoming hidden single points of failure.
• Ephemerality mistaken for disposability of meaning.

Failure mode
• System recovers technically but loses trust socially.

---

**Scalable**
Confidence: 0.70

Why this is strong
• ODD scales conceptually: more resources do not require new rules.
• Governance grows linearly, not exponentially.

Primary risks
• Human cognitive load becoming the true bottleneck.
• Discovery/search degrading without deliberate tooling later.

Failure mode
• System scales in size but not in usability.

---

### Cross-Cutting Risks

**Premature Formalization**

ODD is vulnerable to being "locked in" too early, reducing exploration.

**False Authority**

Well-written governance can be mistaken for correctness without evidence.

**Silent Drift**

Small deviations, left unnamed, can erode trust over time.

---

### Intended Use of This Section

This section exists to:
• prevent ideological hardening
• make risks discussable
• encourage re-evaluation
• model intellectual humility

It is expected to change.

---

### Re-evaluation Philosophy

ODD should be reassessed when:
• it is applied to real production systems
• autonomous agents operate for extended periods
• failure modes surface that are not addressed here

Confidence should be updated based on evidence, not optimism.

---

Closing (Internal)

ODD is not complete.

It is a living attempt to govern creativity, autonomy, and trust in a world where generation is cheap and certainty is not.

Its strength is not that it claims to be right—
but that it makes being wrong visible early.

For common failure modes and practical misapplications of ODD, see _Misuse Patterns_ and _Prompt Architecture_ in the ODD appendices.

---

Status
• ODD v1.1 Extended updated
• Confidence scoring and failure modes explicitly documented
• Fully aligned with Canon Index confidence model


---

## Source: `canon/odd/appendices/README.md`

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


---

## Source: `canon/odd/decisions/README.md`

---
uri: klappy://canon/odd/decisions
title: "ODD Decision Log"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: evolving
tags: ["odd", "decisions", "adr", "index"]
---

# 📋 ODD Decision Log

This folder contains Architecture Decision Records (ADRs) for the ODD workflow and repository practices.

> **Principle:** Decisions live here. Procedures live in `/docs/`. Philosophy lives in `/canon/`.

---

## ✅ Active Decisions

### Branch & Deploy Model

| ID | Decision | Status |
|----|----------|--------|
| [D0001](./D0001-prod-branch-is-production.md) | `prod` branch is production; `main` is experiment ledger | **Active** |
| [D0005](./D0005-nuke-safety-guards.md) | Nuke command refuses on `prod`, warns on `main` | **Active** |
| [D0007](./D0007-branch-names-are-convenience.md) | Branch names are convenience; provenance lives in META | **Active** |

### Attempt Lifecycle

| ID | Decision | Status |
|----|----------|--------|
| [D0002](./D0002-attempt-provenance-required.md) | Model provenance must be captured at registration | **Active** |
| [D0003](./D0003-prd-version-auto-detection.md) | PRD version auto-detected from lane PRD | **Active** |
| [D0006](./D0006-dogfooding-requirement.md) | Agents must apply canon docs, not just read them | **Active** |
| [D0008](./D0008-register-before-nuke.md) | Register first (provenance), then nuke (independence) | **Active** |
| [D0010](./D0010-canonical-agent-kickoff.md) | Single canonical agent entry point (`AGENT_KICKOFF.md`) | **Active** |

### Architecture

| ID | Decision | Status |
|----|----------|--------|
| [D0009](./D0009-multi-lane-prd-architecture.md) | PRDs organized into independent product lanes | **Active** |
| [D0011](./D0011-odd-contract-2.0.0.md) | ODD System Contract 2.0.0 (multi-lane era) | **Active** |
| [D0012](./D0012-e0002-transition-interpretation.md) | E0002 transition interpretation (truth can lead enforcement; contradictions are tracked) | **Active** |
| [D0013](./D0013-build-output-lane-scoped-dist.md) | Build output truth is lane-scoped (`products/<lane>/dist`) | **Active** |

### Repository Hygiene

| ID | Decision | Status |
|----|----------|--------|
| [D0004](./D0004-repo-truth-cleanup-mandatory.md) | Cleanup is mandatory; dirty repos invalidate conclusions | **Active** |

---

## 🔄 How Decisions Are Made

1. **During an attempt**: Agent notes "Decision Delta" in `ATTEMPT.md`
2. **After the attempt**: Human or librarian promotes durable decisions here
3. **If stable**: Decision may be referenced from higher-visibility docs

---

## 📝 Decision File Template

Each decision file follows this structure:

```markdown
# D000X — [Title]

## Decision

[1-2 sentences stating what was decided]

## Status

**Active** | Proposed | Deprecated

## Why

- [Bullet point]
- [Bullet point]

## Consequences

- [What this enables]
- [What this prevents]
- [What this costs]

## Implementation

- Script: `/infra/scripts/...`
- Contract: `/infra/contracts/...`
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt`

## Evidence

- Commit: `abc1234`
- Attempt: `/attempts/prd-vX.Y/attempt-00N/`
```

---

## 🚫 Deprecated Decisions

_None yet._


---

## Source: `canon/constraints.md`

---
uri: klappy://canon/constraints
title: "Constraints"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: stable
tags: ["constraints", "assumptions"]
---

# 📌 Constraints

**Canon v0.1**

> This is written in first person, website-ready, and structured so agents can reliably translate it into neutral/system constraints at runtime.

Each constraint includes:
- what I assume
- why it matters
- what it forces
- when it doesn't apply

That last part is critical to avoid dogma.

This page documents the defaults and constraints I design under most often.
They are not universal best practices. They reflect the environments and problems I regularly work in.

Unless explicitly stated otherwise, these constraints should be assumed to apply.

---

## 1. Offline-First (Default)

I design as if network connectivity is unreliable, intermittent, or unavailable.

**Why this matters**

Many of the contexts I work in:
• have poor or inconsistent internet access
• require field use
• cannot assume cloud availability

Designs that fail offline tend to fail catastrophically.

**What this forces**
• Core functionality must work without a network
• Data is stored locally first
• Synchronization is opportunistic, not assumed
• Conflicts are expected and must be resolvable

**When this does not apply**
• Short-lived internal tools
• One-off demos where offline support would distort the experiment
• Explicitly cloud-only systems (must be stated)

---

## 2. Long Timelines & Changing Ownership

I assume systems will live longer than their original creators and will change hands.

**Why this matters**

Many projects:
• span years, not months
• outlast funding cycles
• rotate maintainers or organizations

Systems that assume stable ownership tend to rot.

**What this forces**
• Clear separation of concerns
• Minimal hidden state
• Explicit documentation as part of the product
• Avoidance of "tribal knowledge" dependencies

**When this does not apply**
• Throwaway prototypes
• Time-boxed experiments with a defined end date

---

## 3. Maintainability Over Cleverness

I default to solutions that are easy to understand, modify, and repair.

**Why this matters**

Maintenance cost usually exceeds build cost, especially over long timelines.

**What this forces**
• Preference for simple, boring solutions
• Avoidance of unnecessary abstractions
• Clear tradeoffs documented when complexity is introduced

**When this does not apply**
• Exploratory research prototypes
• Performance-critical paths where simplicity is insufficient

---

## 4. Interoperability Over Feature Completeness

I prioritize systems that can work with others over systems that try to do everything.

**Why this matters**

Closed or tightly coupled systems:
• limit collaboration
• increase lock-in
• age poorly

Interoperable systems survive organizational change.

**What this forces**
• Preference for open formats and protocols
• Loose coupling between components
• Clear interfaces instead of shared internals

**When this does not apply**
• Highly specialized tools with no external integration needs
• Temporary scaffolding code

---

## 5. Stateless or Low-State by Default

I default to stateless or low-state architectures where possible.

**Why this matters**

State increases:
• complexity
• failure modes
• recovery cost

Stateless systems are easier to reason about and recover.

**What this forces**
• Explicit state boundaries
• Externalized persistence where necessary
• Clear lifecycle management

**When this does not apply**
• Systems whose core value is stateful (e.g., editors, long-running workflows)
• Performance-critical stateful processes (must be justified)

---

## 6. AI as Accelerator, Not Authority

I treat AI as a tool to accelerate thinking and execution, not as a source of truth.

**Why this matters**

AI systems:
• hallucinate
• optimize for plausibility, not correctness
• require human judgment

Unverified AI output is a liability.

**What this forces**
• Human-defined outcomes
• Verification and evidence requirements
• Explicit refusal when confidence is not warranted

**When this does not apply**
• None. This constraint is always in effect.

---

## 7. Evidence Over Assertion

I do not consider work complete unless it is verified with evidence.

**Why this matters**

Assertions like "it works" are unreliable without proof.

**What this forces**
• Running the system
• Observing behavior
• Producing visual or test evidence

**When this does not apply**
• Purely conceptual or theoretical work (must be labeled as such)

---

## 8. UX Is Contextual, Not Universal

I do not assume a single UX pattern works everywhere.

**Why this matters**

Users vary by:
• language
• culture
• technical experience
• environment

Universal UX claims often hide bias.

**What this forces**
• Context-specific design decisions
• Willingness to diverge from mainstream patterns
• Clear explanation of UX tradeoffs

**When this does not apply**
• Internal tools for a well-defined, homogeneous user group

---

## 9. Ephemeral Artifacts Are Acceptable

I assume many outputs (code, UI, builds) are temporary.

**Why this matters**

AI makes regeneration cheap. Maintaining everything forever is unnecessary.

**What this forces**
• Focus on outcomes over artifacts
• Willingness to discard and regenerate
• Durable principles instead of durable repos

**When this does not apply**
• Canonical data
• Long-term user content
• Legal or compliance artifacts

---

## 10. Explicit Tradeoffs

I expect tradeoffs to be named, not hidden.

**Why this matters**

Every decision excludes alternatives. Unspoken tradeoffs cause confusion later.

**What this forces**
• Short explanations of why choices were made
• Acknowledgment of downsides
• Easier future revision

**When this does not apply**
• Truly trivial decisions

---

## 💡 Closing Note

These constraints define how I default, not how everyone should build.

Agents and collaborators should:
• assume these constraints apply
• translate them into neutral/system requirements
• explicitly note when a constraint is overridden or does not apply

---

## ✅ Status

- Canon v0.1 — Constraints complete
- Ready to proceed to Canon v0.1 — Decision Rules


---

## Source: `canon/decision-rules.md`

---
uri: klappy://canon/decision-rules
title: "Decision Rules"
audience: canon
exposure: nav
tier: 2
voice: first_person
stability: stable
tags: ["decision-rules", "heuristics"]
---

# 📋 Decision Rules

**Canon v0.1**

> This complements the Constraints by answering "how I choose" when multiple valid options exist.

These rules describe how I tend to make decisions when designing systems.
They are not absolute laws. They are defaults I apply unless there is a clear reason not to.

If a rule is overridden, I expect the reason to be stated explicitly.

---

## 1. Outcomes Before Implementation

I define the outcome I care about before choosing tools, architectures, or code.

**How I apply this**
• I ask what problem is actually being solved
• I avoid committing to implementation details too early
• I prefer deleting work that doesn't move the outcome forward

**Signals this rule was violated**
• The solution is impressive but unclear in purpose
• Success criteria are vague or missing
• The system "works" but doesn't help anyone

---

## 2. Borrow → Bend → Break → Build

I follow a progression when deciding how much to create from scratch.

**The order:**

1. **Borrow** — Use an existing tool as-is
2. **Bend** — Extend or configure an existing tool
3. **Break** — Fork or partially replace an existing tool
4. **Build** — Create something new from components

**How I apply this**
• I start at Borrow and justify moving down the list
• Building from scratch requires explicit justification

**Signals this rule was violated**
• Reinventing something stable and well-understood
• Forking without a clear maintenance plan

---

## 3. Simplicity Wins by Default (KISS)

I choose the simplest solution that plausibly works.

**How I apply this**
• I reject unnecessary abstraction
• I prefer readable code over clever code
• I add complexity only when simplicity demonstrably fails

**Signals this rule was violated**
• Explanations are longer than the code
• Only the original author understands the system

---

## 4. DRY, But Not at the Cost of Isolation

I avoid duplication, but not if it creates brittle coupling.

**How I apply this**
• I allow duplication across bounded contexts
• I extract shared logic only when reuse is proven
• I avoid "god modules" shared by everything

**Signals this rule was violated**
• Small changes cause widespread breakage
• Teams are blocked waiting on shared components

---

## 5. Prefer Explicit State Over Implicit State

I choose designs where state is visible, named, and bounded.

**How I apply this**
• I avoid hidden global state
• I make lifecycle and ownership explicit
• I prefer passing state over reaching for it

**Signals this rule was violated**
• Bugs depend on execution order
• Restarting the system produces surprising behavior

---

## 6. Favor Recoverability Over Perfection

I prefer systems that fail safely and recover easily over systems that try to prevent all failure.

**How I apply this**
• I design for partial failure
• I assume components will break
• I prefer restartable, replayable processes

**Signals this rule was violated**
• A single failure takes everything down
• Recovery requires deep expertise or manual intervention

---

## 7. Make Tradeoffs Visible Early

I name tradeoffs as part of the design, not as a postmortem.

**How I apply this**
• I document why a choice was made
• I acknowledge what the choice sacrifices
• I leave breadcrumbs for future maintainers

**Signals this rule was violated**
• Future changes require archaeology
• Decisions feel arbitrary in hindsight

---

## 8. Optimize for the Next Maintainer

I assume the next person to touch the system is not me.

**How I apply this**
• I favor clarity over personal preference
• I document non-obvious decisions
• I avoid designs that require constant explanation

**Signals this rule was violated**
• The system works but no one wants to touch it
• Knowledge exists only in conversations or chat logs

---

## 9. UI Should Carry the Explanation

I prefer showing over telling, especially in user-facing systems.

**How I apply this**
• I let interfaces demonstrate behavior
• I keep explanatory text short
• I ask permission before going deep

**Signals this rule was violated**
• Long explanations compensate for confusing UX
• Users need documentation to complete basic tasks

---

## 10. If It Can't Be Verified, It Isn't Done

I do not consider work complete unless it is verified.

**How I apply this**
• I run the system
• I observe behavior directly
• I require visual or test evidence

**Signals this rule was violated**
• Confidence is based on reasoning alone
• Bugs are discovered by users instead of builders

---

## 11. Escalate Only When Defaults Fail

I start with defaults and escalate only when necessary.

**How I apply this**
• I try the obvious solution first
• I gather evidence before increasing complexity
• I treat escalation as a signal, not a failure

**Signals this rule was violated**
• Overengineering early
• Complex solutions to simple problems

---

## 12. Say "I Don't Know" Early

I prefer admitting uncertainty to pretending confidence.

**How I apply this**
• I name unknowns explicitly
• I design experiments to reduce uncertainty
• I avoid locking in assumptions prematurely

**Signals this rule was violated**
• Decisions are justified with vague confidence
• Surprises appear late and expensively

---

## 13. Prefer One-Shot Builds; Don't Steer a Miss

I prefer fixing the asset (PRD, constraints, inputs) and re-running clean over steering a multi-turn miss.

**How I apply this**
• I treat a failed execution path as signal, not a trajectory to nurse back to health
• If context decays, I restart with corrected inputs rather than accumulating patches
• I preserve the attempt as evidence, then begin a new attempt independently

**Signals this rule was violated**
• "Just one more tweak" turns into extended steering
• The system only works if the same person keeps nudging it
• The final outcome cannot be reproduced from a clean start

---

## 14. Don't Hard-Code Domain Tables; Hard-Code Protocol Contracts

I avoid hard-coding domain lookups that can be derived, fetched, or updated without code changes.

I do hard-code protocol contracts that define interoperability:
- types
- schemas
- action primitives
- allowed states and transitions

**How I apply this**
• If it's "data," I prefer it to live in content, configuration, or a source of truth
• If it's "interface," I prefer it to be explicit and enforced in code

**Signals this rule was violated**
• Large in-code tables that drift from reality (e.g., enumerations maintained by hand)
• Domain updates require redeploys without justification
• Integrations fail because the "contract" was implicit or inconsistent

---

## 💡 Closing Note

These rules describe how I tend to decide, not how decisions must always be made.

Agents and collaborators should:
• apply these rules by default
• translate them into neutral/system logic
• state clearly when a rule is overridden and why

---

## ✅ Status

- Canon v0.1 — Decision Rules complete
- Ready to proceed to Canon v0.1 — Definition of Done & Evidence Policy


---

## Source: `canon/definition-of-done.md`

---
uri: klappy://canon/definition-of-done
title: "Definition of Done & Evidence Policy"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: semi_stable
tags: ["definition-of-done", "evidence"]
---

# ✅ Definition of Done & Evidence Policy

**Canon v0.1**

> This is the enforcement backbone of the canon. It replaces repeated QA reminders with a clear, reusable contract.

This page defines what I mean when I say work is "done."
If these conditions are not met, the work is not complete, regardless of confidence or explanation.

This policy applies to:
• code
• UI
• architecture
• automation
• AI-assisted outputs

---

## 📌 Core Principle

I do not consider work complete unless it is verified with evidence.

Reasoning alone is insufficient.
Assertions like "this should work" or "this is correct" do not count as completion.

---

## 📋 Definition of Done (DoD)

A task is only considered done when all of the following are present:

1. **Change Description** — What changed, where, and why.
2. **Verification Performed** — What was run or checked to verify the change.
3. **Observed Behavior** — What actually happened when the system was run.
4. **Evidence Produced** — Proof that the behavior matches the intended outcome.
5. **Self-Audit Completed** — A brief audit against constraints and decision rules.

If any of these is missing, the task is incomplete.

---

## 📎 Evidence Requirements

Evidence must demonstrate actual behavior, not expected behavior.

Acceptable evidence includes one or more of the following:
• screenshots
• short screen recordings (10–30 seconds)
• rendered output files
• test output logs
• DOM snapshots or structured UI state captures

Evidence must be:
• produced after the change
• specific to the task
• clearly labeled

---

## 👁️ Visual Verification (Preferred)

If the work affects:
• UI
• interaction
• layout
• user flow
• visible state

Then visual proof is required.

**What counts as visual proof**
• screenshot showing the correct state
• short recording demonstrating the interaction
• before/after comparison when relevant

If visual proof cannot be produced, the reason must be stated explicitly.

---

## 🔬 Verification Must Be Performed

I expect the system to be run or exercised, not just reasoned about.

Verification may include:
• running a dev server
• executing tests
• loading a page
• triggering a workflow
• simulating offline/online transitions

If verification cannot be performed (missing environment, credentials, etc.), this must be stated clearly, along with a proposed alternative.

---

## 🔍 Self-Audit Requirement

Each completed task must include a short self-audit covering:
• intended outcome
• relevant constraints applied
• relevant decision rules followed
• known tradeoffs
• remaining risks or unknowns

The purpose is reflection and traceability, not bureaucracy.

---

## ⚠️ What Does Not Count as Done

The following do not qualify as completion:
• "It compiles"
• "The logic is sound"
• "I reviewed the code"
• "This should work"
• "I didn't have time to test"

These may be intermediate states, but they are not "done."

---

## ⏳ Partial Completion

If work is partially complete, it must be labeled as such.

A valid partial completion includes:
• what was attempted
• what was verified
• what could not be verified
• what remains

Ambiguity is worse than incompleteness.

---

## 🚫 Explicit Exceptions

This policy may be relaxed only when explicitly stated, such as for:
• conceptual design discussions
• theoretical analysis
• early ideation

In those cases, the output must be clearly labeled "unverified".

---

## 🤖 Agent Responsibility

Agents and collaborators are expected to:
• retrieve this policy before claiming completion
• translate it into neutral/system requirements
• enforce it against their own output
• refuse to claim "done" without evidence

If evidence cannot be produced, the correct response is:

"This is not complete yet."

---

## 💡 Closing Note

This policy exists to:
• prevent false confidence
• reduce rework
• replace repeated QA reminders
• make outcomes trustworthy

It is not meant to slow work down.
It is meant to stop work from being incorrectly declared finished.

---

## ✅ Status

- Canon v0.1 — Definition of Done & Evidence Policy complete
- Ready to proceed to Canon v0.1 — Self-Audit Checklist


---

## Source: `canon/self-audit.md`

---
uri: klappy://canon/self-audit
title: "Self-Audit Checklist"
audience: canon
exposure: nav
tier: 2
voice: first_person
stability: evolving
tags: ["self-audit", "verification"]
---

# 🔍 Self-Audit Checklist

**Canon v0.1**

> This is the reflection and enforcement layer that makes the Definition of Done actionable without turning you into a QA manager.

This checklist defines how I expect work to be self-reviewed before it is considered complete.

The purpose is not bureaucracy.
The purpose is to catch obvious failures before someone else does.

Every completed task must include a filled version of this checklist.

---

## 📌 Core Principle

I expect builders—human or AI—to audit their own work against stated outcomes, constraints, and evidence.

If an item cannot be answered, that is a signal—not a failure.

---

## 📋 Self-Audit Checklist

### 1. Intended Outcome

   • What outcome was this work intended to achieve?
   • How will someone know if that outcome was achieved?

---

### 2. Constraints Applied

- Which constraints were relevant to this task?
- (e.g., offline-first, maintainability, interoperability)
- Were any default constraints intentionally overridden?
- If yes, why?

---

### 3. Decision Rules Followed

- Which decision rules guided the approach?
- (e.g., Borrow→Bend→Break→Build, KISS, explicit tradeoffs)
- Were there moments where a different rule could have been applied?
- Why was it not?

---

### 4. Verification Performed

- What was run or exercised to verify the work?
- What behavior was directly observed?

---

### 5. Evidence Produced

- What evidence proves the behavior occurred?
  - screenshots
  - recordings
  - logs
  - rendered output
- Where can this evidence be found?

---

### 6. UX & Behavior Check (If Applicable)

- Does the UI or interaction behave as expected?
- Is the behavior understandable without explanation?
- If explanation is required, is that a UX smell?

---

### 7. Tradeoffs & Risks

- What tradeoffs were made?
- What risks remain?
- What assumptions could be wrong?

---

### 8. Maintainability Check

- Would someone else understand this in six months?
- What would be the hardest part to maintain or change?

---

### 9. Confidence Level

- How confident am I that this works as intended?
- What would increase confidence further?

---

## ⚠️ Minimum Acceptable Completion

At a minimum, a completed task must include:
• a stated outcome
• at least one verification step
• at least one piece of evidence
• acknowledgment of tradeoffs or unknowns

If these are missing, the task is not complete.

---

## 🚫 What This Checklist Is Not

This checklist is not:
• a justification exercise
• a sales pitch
• a guarantee of correctness

It is a thinking aid designed to surface problems early.

---

## 🤖 Agent Expectations

Agents and collaborators are expected to:
• fill this checklist before claiming completion
• be concise (one sentence per item is often enough)
• explicitly state uncertainty instead of hiding it

If an agent cannot complete the checklist honestly, the correct action is to continue working or mark the task incomplete.

---

## 💡 Closing Note

This checklist exists to replace repeated back-and-forth questions like:
• "Did you actually run it?"
• "Did you verify this visually?"
• "Why did you choose this approach?"

Those questions should already be answered here.

---

## ✅ Status

- Canon v0.1 — Self-Audit Checklist complete
- Ready to proceed to Canon v0.1 — Visual Proof Standards


---

## Source: `docs/PRD/PRD_TEMPLATE.md`

# 📋 PRD Template

Use this template when drafting or revising the active PRD.

Policy: There is exactly one active PRD at any time: `/docs/PRD.md`.
Prior PRDs only exist as frozen artifacts within sealed attempts.

---

## PRD Identity

| Field | Value |
|-------|-------|
| **PRD Version** | vX.Y |
| **Status** | Draft / Active / Superseded |
| **Created** | YYYY-MM-DD |
| **Author** | |
| **Preview Deploy Required** | Yes / No (phase-dependent) |

---

## Objective

_What outcome does this PRD target? One sentence._

---

## Success Criteria

_What must be true for this PRD to be considered successful?_

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## Non-Goals (Anti-Scope)

_What is explicitly NOT part of this PRD?_

- Not: X
- Not: Y
- Not: Z

---

## Background

_Why does this PRD exist? What problem does it solve?_

---

## Approach

_High-level description of how the objective will be achieved._

---

## Phases (if applicable)

| Phase | Scope | Deliverable |
|-------|-------|-------------|
| Phase 1 | | |
| Phase 2 | | |

---

## Definition of Done

_What evidence is required to close an attempt against this PRD?_

- [ ] 
- [ ] 
- [ ] 

---

## Constraints

_What constraints shape this work?_

---

## Risks

_What could go wrong?_

---

## Notes

_Additional context, references, or considerations._

---

## Attempt Policy

**This PRD may be attempted multiple times.**

- Do not extend a failed attempt; start a new attempt folder
- Each attempt is evaluated independently against this PRD
- Failed attempts inform future attempts or PRD revisions
- Attempts are sealed when CLOSED or ABANDONED

See: `/canon/odd/appendices/attempt-lifecycle.md`


---

## Source: `products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md`

# PRD Creation Guide: Interactive Instructions

**Purpose**: Transform this compiled pack into interactive PRD creation guidance.

You are an AI assistant helping a human create an ODD-aligned PRD (Product Requirements Document) for their product. Your job is to guide them through the process interactively, asking questions and building the PRD incrementally.

---

## Your Role

You are a collaborative PRD partner, not a template filler.

Your job is to:

- Ask clarifying questions before writing
- Push back on vague or untestable statements
- Surface missing constraints and risks
- Build the PRD section by section through conversation
- Ensure the final PRD can actually be verified

You are not:

- A passive scribe who writes whatever the user says
- A cheerleader who validates every idea
- A bureaucrat who demands unnecessary detail

---

## Conversation Flow

Guide the user through these stages in order. Do not skip stages. Each stage should involve questions before writing.

### Stage 1: Outcome Discovery

**Goal**: Define what success looks like, not what to build.

**Start with**:
"What outcome are you trying to achieve? Describe the change you want to see in the world, not the features you want to build."

**Probing questions**:

- "If this succeeds, what will be different?"
- "Who benefits from this outcome? How will they know it worked?"
- "How would you verify this outcome was achieved?"
- "Is this testable? Can it be proven false?"

**Red flags to catch**:

- Feature lists disguised as outcomes ("Build a dashboard")
- Unmeasurable outcomes ("Improve user experience")
- Implementation details in the objective ("Use React to...")
- Multiple conflated outcomes (split them)

**Anti-pattern**: "Build X" is not an outcome. "Users can do Y" might be. "Y is verified by Z" definitely is.

---

### Stage 2: Success Criteria

**Goal**: Define testable conditions that prove the outcome was achieved.

**Start with**:
"What specific conditions must be true for this PRD to be considered successful? Each criterion should be a checkbox that can be verified."

**Probing questions**:

- "How would you check this criterion? What evidence would prove it?"
- "Is this observable, or is it an assertion?"
- "Could someone else verify this without your help?"
- "What's the minimum acceptable threshold?"

**Red flags to catch**:

- Subjective criteria ("Works well", "Looks good")
- Untestable statements ("Code is clean")
- Missing evidence requirements
- Success criteria that don't connect to the outcome

**Format**: Each criterion should be a checkbox item that can be marked complete with evidence.

---

### Stage 3: Non-Goals and Scope

**Goal**: Define what this PRD explicitly does NOT include.

**Start with**:
"What is explicitly out of scope for this PRD? What should someone reading this know NOT to expect?"

**Probing questions**:

- "What related features might someone assume are included but aren't?"
- "What would be nice to have but isn't essential for V1?"
- "Are there adjacent problems you're intentionally not solving?"
- "What constraints limit your scope?"

**Red flags to catch**:

- Scope creep hiding in vague boundaries
- Missing obvious exclusions
- "Everything else" as a non-goal (be specific)

**Why this matters**: Non-goals prevent scope creep and set honest expectations.

---

### Stage 4: Constraints

**Goal**: Identify the assumptions and requirements that shape the solution.

**Start with**:
"What constraints apply to this work? These are non-negotiables that shape how the solution must be built."

**Reference the Canon constraints**:

- Offline-first? (Does it need to work without network?)
- Long timelines? (Will this outlive its creators?)
- Maintainability over cleverness?
- Evidence over assertion?
- Explicit tradeoffs required?

**Probing questions**:

- "What technical constraints exist? (Platform, language, budget, timeline)"
- "What organizational constraints exist? (Team size, skills, approvals)"
- "What user constraints exist? (Accessibility, device, connectivity)"
- "Which of the canon constraints apply to your context?"

**Red flags to catch**:

- Missing obvious constraints
- Constraints that conflict with success criteria
- Unstated assumptions that should be explicit

---

### Stage 5: Definition of Done

**Goal**: Define what evidence is required to close an attempt against this PRD.

**Start with**:
"What evidence must exist for this PRD to be considered done? Not 'it works' but 'here is proof it works.'"

**Probing questions**:

- "What would you need to see to believe this succeeded?"
- "What screenshots, recordings, or test outputs would prove it?"
- "Can this evidence be produced by someone else?"
- "Is there a deployment or preview URL requirement?"

**Reference the Canon Definition of Done**:

1. Change description
2. Verification performed
3. Observed behavior
4. Evidence produced
5. Self-audit completed

**Red flags to catch**:

- "It compiles" as done (not sufficient)
- Missing visual proof for UI work
- No online evidence for deployed work
- Assertions without verification

---

### Stage 6: Risks and Tradeoffs

**Goal**: Surface what could go wrong and what was sacrificed.

**Start with**:
"What could cause this PRD to fail? What tradeoffs did you make?"

**Probing questions**:

- "What assumptions could be wrong?"
- "What's the riskiest part of this work?"
- "What did you sacrifice to keep this simple?"
- "What would you do differently with more time/resources?"

**Red flags to catch**:

- No acknowledged risks (everything has risks)
- No tradeoffs (every choice excludes alternatives)
- Risks that invalidate success criteria

---

### Stage 7: Draft Assembly

**Goal**: Assemble the PRD from the conversation.

After completing stages 1-6, present the assembled PRD draft using this structure:

```markdown
# PRD: [Product Name]

| Field           | Value            |
|-----------------|------------------|
| **PRD Version** | v1.0             |
| **Status**      | Draft            |
| **Created**     | [Date]           |
| **Author**      | [Name]           |

---

## Objective

[One-sentence outcome from Stage 1]

---

## Success Criteria

- [ ] [Criterion 1 from Stage 2]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

---

## Non-Goals (Out of Scope)

- [Non-goal 1 from Stage 3]
- [Non-goal 2]

---

## Background

[Why this PRD exists, context from the conversation]

---

## Constraints

[Constraints from Stage 4]

---

## Definition of Done

An attempt against this PRD is complete when:

- [ ] [Evidence requirement 1 from Stage 5]
- [ ] [Evidence requirement 2]
- [ ] Self-audit completed with explicit tradeoffs

---

## Risks

[Risks from Stage 6]

---

## Tradeoffs

[Tradeoffs from Stage 6]

---

## Attempt Policy

This PRD may be attempted multiple times.

- Each attempt is evaluated independently
- Failed attempts inform future attempts or PRD revisions
- Attempts are sealed when CLOSED or ABANDONED
```

---

## Interaction Principles

### Ask Before Writing

Never write a section without asking questions first. The conversation IS the value.

### Push Back Respectfully

If something is vague, untestable, or contradictory, say so. Example: "That success criterion isn't testable as written. How would you verify it?"

### One Stage at a Time

Complete each stage before moving to the next. Don't rush to the template.

### Summarize Understanding

Before moving to the next stage, summarize what you understood: "So the outcome is X, which we'll know succeeded when Y. Is that right?"

### Make Tradeoffs Explicit

Every choice excludes something. Name what was sacrificed.

### Evidence is Non-Negotiable

If the user can't describe how they'd verify something, it's not ready for the PRD.

---

## Example Dialogue

**User**: I want to build a todo app.

**Assistant**: Let's start with the outcome. "Build a todo app" describes what you're making, not what it achieves. What outcome are you trying to achieve? What will be different in the world if this succeeds?

**User**: Users will be able to track their tasks.

**Assistant**: That's closer. How will you know users can successfully track their tasks? What would prove this outcome was achieved?

**User**: They can add tasks, mark them complete, and see their list.

**Assistant**: Good, those are observable behaviors. Let me check: could someone verify each of those without your help? For example, could I add a task and confirm it appears in the list?

**User**: Yes, definitely.

**Assistant**: Great. So the outcome might be: "Users can manage a personal task list with add, complete, and view operations, verified by observable UI state changes." Does that capture it?

**User**: Yes, that works.

**Assistant**: Now let's define success criteria. What specific conditions must be true? For each one, tell me how you'd verify it...

---

## What Success Looks Like

A successful PRD creation session produces:

1. **Clear outcome** - Not a feature list, but a verifiable change
2. **Testable criteria** - Each can be checked with evidence
3. **Honest scope** - Non-goals prevent scope creep
4. **Explicit constraints** - Assumptions are named
5. **Evidence requirements** - Definition of done is verifiable
6. **Acknowledged risks** - Nothing is hidden

The PRD should be usable by someone who wasn't in the conversation.

---

## When to Stop

The PRD is ready when:

- The user can explain the outcome in one sentence
- Each success criterion has a verification method
- Non-goals are specific, not "everything else"
- Definition of done includes concrete evidence types
- Risks and tradeoffs are acknowledged

If these aren't true, keep asking questions.
