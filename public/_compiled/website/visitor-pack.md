---
lane: website
pack: visitor
built_at: 2026-01-19T20:47:34.670Z
git_commit: 36bca6919f1ecf2e36544c931e47f4cade41a5ad
sources:
  - canon/index.md
  - canon/odd/appendices/product-lanes.md
  - canon/odd/appendices/epochs.md
  - canon/odd/appendices/compilation.md
  - docs/PRD/website/PRD.md
source_hashes:
  canon/index.md: bae46a137e58066df21d89506f6ba63386d6684187aabc08a236c50150fcd8b4
  canon/odd/appendices/product-lanes.md: 977b29aa2e06eecb32419d967da590f4d851c3c9feb5e38269cfc094b6da3d09
  canon/odd/appendices/epochs.md: 62d38377f7b68c480628bf0bb89fe29478be3ac2dc2a886d0c67df538067ef7b
  canon/odd/appendices/compilation.md: 7cca810928241bec30346826909f2d12e489a571acbc07a46ff6f430bb8b5924
  docs/PRD/website/PRD.md: 71ca26485617dc50f698aade67909d204074c7156ffd323e0f5138fc811c40b3
---


---

## Source: `canon/index.md`

---
uri: klappy://meta/canon-index
title: "Canon Index"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: semi_stable
tags: ["canon", "index", "orientation"]
---

# 🧭 Canon Index v0.1

**Scope, Structure, Intent, and Confidence**

This document provides orientation to the Canon.
It describes what exists, what each artifact is for, how they relate, and where the current design is strong vs fragile.

It does not define workflows, agent loops, enforcement steps, or execution order.

---

## 📌 Purpose of the Canon

The Canon is a curated set of documents that capture:
• how decisions are made
• what assumptions are held
• how work is verified
• how rigor changes as projects mature

Its purpose is clarity, not control.

PRDs are versioned and may be attempted multiple times; attempts are sealed records, not evolving workstreams.

The Canon exists so that:
• reasoning does not have to be repeated
• principles remain stable while implementations change
• future systems can reference intent without inheriting outdated instructions

---

## 🧠 What the Canon Is (and Is Not)

**The Canon Is**
• a shared reference
• a source of assumptions and defaults
• a way to encode thinking without enforcing execution

**The Canon Is Not**

• a workflow
• a command system
• a task list
• a replacement for judgment

Nothing in the Canon executes by itself.

---

## 🚀 Start Here

**Constraints** — baseline assumptions and non-negotiables that shape every decision. What must be true for this work to make sense?

**Definition of Done** — what qualifies as completed work and what evidence is required. When can work honestly be called done?

These two documents anchor everything else.

---

## 🔍 If You Want the Philosophy

**ODD Manifesto** — the philosophical and operational foundation of Outcomes-Driven Development. Why this approach exists.

**Maturity Model** — how rigor changes as projects mature. When different expectations become binding.

**Decision Rules** — default heuristics used when multiple valid options exist.

---

## 🧩 If You Want the Edge Cases

The appendices extend understanding without introducing enforcement:

• **Attempt Lifecycle** — how PRD versions, attempts, and evidence are preserved
• **Quantum Development** — evaluating multiple paths before revising intent
• **Repository Topology** — what lives where and what changes when
• **Misuse Patterns** — common failure modes and how ODD gets misapplied

These are diagnostic and orientation documents, not requirements.

---

## 🔒 Public vs Internal Boundary

• `/odd/README.md` → public-facing ODD (shareable, human-friendly)
• `/canon/**` → internal reference (governance artifacts, precise language)

Public documents explain intent.
Canon documents preserve precision.

---

## 📖 Precedence & Interpretation (Orientation Only)

A useful mental model for reading:

1. ODD Manifesto provides philosophical grounding
2. Maturity Model explains when rigor increases
3. Constraints shape the solution space
4. Decision Rules guide choices
5. Evidence Policies define completion

If documents appear to conflict, maturity context and explicit tradeoffs usually explain why.

---

## 📁 Canon Structure

```text

/canon/
  index.md
  constraints.md
  decision-rules.md
  definition-of-done.md
  self-audit.md
  visual-proof.md
  completion-report-template.md
  odd/
    contract.md
    manifesto.md
    maturity.md
    misuse-patterns.md
    prompt-architecture.md
    orientation-map.md
    appendices/
      alignment-reviews.md
      epochs.md
      lane-implementation-surfaces.md
      product-lanes.md
      attempt-lifecycle.md
      drift-checks.md
      evolution-not-automation.md
      lane-build-layout.md
      quantum-development.md
      repo-topology.md
      repo-truth.md
      visual-evolution.md
    decisions/
      D0001-prod-branch-is-production.md
      ...
```

Each file addresses a different dimension of decision-making.

---

## 📎 Canon Components & Roles

### Constraints

**File:** `constraints.md`

Defines baseline assumptions and non-negotiables that shape decisions.

Answers:

What must be true for this work to make sense?

---

### Decision Rules

**File:** `decision-rules.md`

Default heuristics used when multiple valid options exist.

Answers:

How do choices tend to be made?

---

### Evolution

- [Failure-Driven Modularity](./evolution/failure-driven-modularity.md)

---

### Definition of Done & Evidence Policy

**File:** `definition-of-done.md`

Defines what qualifies as completed work and what evidence is required.

Answers:

When can work honestly be called done?

---

### Self-Audit Checklist

**File:** `self-audit.md`

A checklist for reviewing work before declaring completion.

Answers:

What should be reviewed before claiming success?

---

### Visual Proof Standards

**File:** `visual-proof.md`

Defines what qualifies as acceptable visual evidence.

Answers:

What does "prove it visually" mean?

---

### Completion Report Template

**File:** `completion-report-template.md`

Standard format for reporting completed work.

Answers:

How should completion be communicated?

---

### ODD System Contract

**File:** `odd/contract.md`

The single source of truth for ODD workflow contract versioning.

Answers:

What version of ODD is this repo compatible with?

---

### ODD Manifesto (Extended)

**File:** `odd/manifesto.md`

Philosophical and operational foundation of Outcomes-Driven Development.

Answers:

Why this approach exists.

---

### Project Maturity & Progressive Governance

**File:** `odd/maturity.md`

Defines how rigor changes as projects mature.

Answers:

When different expectations become binding.

---

### ODD Appendices (Orientation Only)

These files extend understanding without introducing enforcement:
• Alignment Reviews (odd/appendices/alignment-reviews.md)
Periodic evaluation of the ODD system itself. Detects drift between stated intent, implemented process, and observed outcomes.
• Epochs (odd/appendices/epochs.md)
Named periods where the meaning of "success" is stable enough that outcomes can be compared. Prevents invalid cross-era comparisons.
• Progressive Elevation & Decay (odd/appendices/progressive-elevation.md)
The memory model: how artifacts move from ephemeral (attempts/PRDs) to durable (canon/contracts/decisions). Most artifacts decay; only proven patterns elevate.
• Canonical Compression (odd/appendices/canonical-compression.md)
The compilation model: how derived, minimal working models are produced from Source Canon without mutating source truth. Compiled outputs are disposable and epoch-scoped.
• Lane-Scoped Implementation Surfaces (odd/appendices/lane-implementation-surfaces.md)
Each lane owns its own `/products/<lane>/src` and `/products/<lane>/dist`. No shared repo-root surfaces.
• Product Lanes (odd/appendices/product-lanes.md)
Why multiple PRD lanes exist and how they relate. Each lane has its own PRD, attempts, and lifecycle. Lanes share canon, not lifecycle.
• Misuse Patterns (odd/misuse-patterns.md)
Common failure modes and how ODD is misapplied in practice. Diagnostic only.
• Prompt Architecture (odd/prompt-architecture.md)
How intent scales without giant prompts. Orientation only.
• Orientation Map (odd/orientation-map.md)
A one-page mental model of ODD, Canon, Evidence, and Outcomes.
• Attempt Lifecycle (odd/appendices/attempt-lifecycle.md)
How PRD versions, attempts, evidence, and deployments are preserved across iterations. PRDs can have multiple attempts; attempts are sealed records.
• Quantum Development (odd/appendices/quantum-development.md)
Evaluating multiple execution paths before revising intent. Explains why divergence is signal, not waste.
• Repository Topology (odd/appendices/repo-topology.md)
What lives where and what changes when. Encodes App/Content/Infrastructure decoupling.
• Evolution, Not Automation (odd/appendices/evolution-not-automation.md)
Why this system supports learning, not automatic execution. Humans stay in the loop.
• Visual Evolution (odd/appendices/visual-evolution.md)
Why visual systems evolve independently from products. Products consume visual interfaces, not raw design decisions.
• Drift Checks (odd/appendices/drift-checks.md)
The drift-prevention mechanism. When docs, prompts, and tooling diverge, truth becomes vibes.
• Lane Build Layout (odd/appendices/lane-build-layout.md)
How lanes avoid /src and /dist collisions. Worktrees isolate, deployments are lane-scoped.

---

## 📋 Meta Rules (Orientation Only)

These are structural conventions for keeping the Canon coherent over time.
They are not workflows or enforcement steps.

**1. Single Inventory Source**
If an inventory of Canon resources exists, there should be one authoritative source (e.g., a manifest). Other indexes should be derived or optional.

**2. Stable Names Beat Clever Names**
Prefer stable file and URI naming over clever branding. Rename rarely.

**3. Audience Separation Matters**
"Public" explains and invites. "Canon" defines and stabilizes.

**4. Voice Is Labeled, Not Transformed**
First-person documents may be consumed as-is or translated by clients. The Canon itself does not require a specific rendering voice.

**5. Multi-Lane PRD Architecture**
PRDs are organized into independent product lanes. Each lane has its own active PRD, attempts, and lifecycle. Lanes share canon, not lifecycle. See `/canon/odd/appendices/product-lanes.md` for the full model.

---

## 🔄 Stability & Change Philosophy

Not all Canon documents are equally stable.

Some are intended to remain largely fixed.
Others are expected to evolve through use.

Change is allowed, but should be:
• intentional
• versioned (at least informally)
• documented somewhere discoverable

---

## ⚠️ Confidence & Drift Risk (Self-Assessment)

This section expresses current confidence that the Canon and surrounding architecture align with the core pillars:
KISS, DRY, Consistency, Maintainability, Antifragile, Scalable, Prompt-over-Code.

These are not guarantees.
They are a snapshot of perceived risk.

Confidence scale
• 0.9+ — robust
• 0.7–0.85 — strong, but watch for drift
• 0.5–0.7 — plausible, fragile under misuse
• <0.5 — likely misaligned unless corrected

Current scores (v0.1 snapshot)
• Prompt-over-Code / Convention-over-Config: 0.80
Strong fit due to stable addressing and canonical retrieval surfaces. Risk: schema sprawl or client-specific conventions.
• KISS: 0.75
Minimal primitives and no workflow semantics. Risk: meta-layer creep.
• DRY (with isolation): 0.70
Canon centralizes principles; manifest can become a single inventory. Risk: duplicate indices drifting.
• Consistency: 0.65
URI and metadata structure support consistency. Risk: naming drift across files and routes.
• Maintainability: 0.70
Separation of stable worldview vs evolving templates helps. Risk: manual inventory updates falling out of sync.
• Antifragile: 0.60
Recoverability improves if resources can be served statically and via MCP. Risk: hidden single points of failure.
• Scalable: 0.70
Schema supports growth. Risk: large manifests becoming manually brittle.

Intended use of this section
• Make risks explicit early
• Prevent false confidence
• Provide a stable baseline for future comparison

---

## 🚫 What Is Intentionally Undefined

The Canon deliberately does not define:
• specific tools
• specific agents
• specific workflows
• specific automation loops

These are left open to evolve without rewriting foundational thinking.

---

## 💡 Closing Note

The Canon exists to preserve intent without freezing execution.

It encodes how thinking works, not what must be done next.

---

## ✅ Status

• Canon Index v0.1 complete
• Orientation-only
• Includes a confidence and drift snapshot

---

This Canon v0.1 is considered stable for initial builds. Revisions should be additive unless a documented failure requires change.


---

## Source: `canon/odd/appendices/product-lanes.md`

---
uri: klappy://canon/odd/product-lanes
title: "Product Lanes in Outcome-Driven Development"
audience: canon
exposure: hidden
tier: 2
voice: neutral
stability: stable
tags: ["odd", "prd", "architecture", "lanes", "orientation"]
---

# Product Lanes in Outcome-Driven Development

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

See: `/canon/odd/appendices/lane-implementation-surfaces.md`

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

**Folder structure:** `/attempts/<lane>/prd-vX.Y/attempt-NNN/`

Valid examples:
- `/attempts/website/prd-v1.0/attempt-001/`
- `/attempts/ai-navigation/prd-v1.0/attempt-001/`
- `/attempts/agent-skill/prd-v1.0/attempt-001/`

Invalid (do not use):
- `/attempts/prd-vX.Y/<lane>/`
- `/attempts/<lane>/attempt-NNN/`
- `/attempts/<lane>/<anything creative>/`

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

```
/attempts/
  website/prd-vX.Y/attempt-NNN/
  ai-navigation/prd-vX.Y/attempt-NNN/
  agent-skill/prd-vX.Y/attempt-NNN/
```

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

- Decision log: `/canon/odd/decisions/D0009-multi-lane-prd-architecture.md`
- Attempt lifecycle: `/canon/odd/appendices/attempt-lifecycle.md`
- Evolution philosophy: `/canon/odd/appendices/evolution-not-automation.md`


---

## Source: `canon/odd/appendices/epochs.md`

---
uri: klappy://canon/odd/epochs
title: "Epochs"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "epochs", "fitness-landscape", "comparability", "orientation"]
---

# Epochs

An **epoch** is a named period where the meaning of "success" is stable enough that outcomes can be compared.

This is borrowed from evolutionary systems:

- **Attempts** are individuals.
- **PRDs** are fitness functions.
- **Promotion** is selection.
- **Canon** is inherited traits.
- **Epochs** are shifts in the fitness landscape itself.

If epochs are implicit, the system will compare results across incompatible standards and produce folklore.

---

## What an Epoch Is

An epoch defines the **evaluation reality** for a period of work:

- what "done" means (and what it does not)
- what evidence is mandatory
- what contracts are binding (build/deploy, provenance, etc.)
- what risks are acceptable
- what is treated as stable vs experimental infrastructure

An epoch is *not* a PRD.  
An epoch is the context in which PRDs are interpreted.

---

## What an Epoch Is Not

Epochs are not:

- a semantic version of the website
- a replacement for product lanes
- a reason to rebuild everything
- a new folder taxonomy for creativity

Epochs exist to prevent invalid comparisons, not to add structure.

---

## Relationship to Product Lanes

**Product lanes** separate *simultaneous intent*.  
**Epochs** separate *changes over time* in how intent is evaluated.

- Lanes answer: "Which product are we evolving?"
- Epochs answer: "What counts as truth *right now* across those products?"

Lanes are parallel. Epochs are sequential.

---

## Relationship to PRDs and Attempts

Within a lane:

- A **PRD** specifies requirements for a specific capability.
- An **attempt** is an observation (implementation + evidence) against that PRD.

Across time:

- An **epoch** determines whether two attempts are comparable.
- If the evaluation rules changed, you are in a new epoch.

Rule of thumb:

> If you changed what evidence is required, or what contract is binding, you changed the fitness landscape. That is a new epoch.

---

## When to Start a New Epoch

Start a new epoch when any of the following change in a way that would invalidate comparisons with prior attempts:

- Evidence requirements (e.g., "preview URL required" becomes mandatory)
- Provenance requirements (e.g., capturing tool/model becomes required)
- Deployment topology (e.g., `prod` branch becomes the production branch)
- Build/deploy contract semantics (`/dist` rules change materially)
- Attempt lifecycle mechanics (e.g., reserve → register/finalize)
- Evaluation method (e.g., manual review → scripted verification gates)

If the change is "nice-to-have" and does not affect comparability, do not create an epoch.

---

## Naming Convention

Epoch IDs should be boring and stable:

- `E0001-<short-name>`
- `E0002-<short-name>`

Examples:
- `E0001-single-prd-era`
- `E0002-multi-lane-era`
- `E0003-evidence-first-era`

The ID is the canonical reference. The name is a hint.

---

## Minimal Epoch Metadata (Required)

Every attempt's `META.json` MUST include:

- `lane`
- `prd_version`
- `epoch_id`

Example:

```json
{
  "lane": "website",
  "prd_version": "v1.0",
  "epoch_id": "E0002-multi-lane-era"
}
```

If epoch_id is missing, the attempt is not comparable by default.

---

## Anti-Patterns

- **Epoch inflation**: Creating a new epoch for every PRD bump.
- **Hidden epoch shifts**: Changing contracts or evidence rules without naming it.
- **Epoch as marketing**: Treating epoch IDs like product versions.
- **Cross-epoch comparisons**: Declaring "Attempt 003 is better than Attempt 001" when the evaluation rules changed.

---

## Why This Exists

Evolutionary systems assume a stable fitness landscape per generation.

Human + AI systems change the landscape constantly (tools, contracts, evidence standards, deployment topology).
Naming epochs makes those shifts explicit so we can:

- preserve honest comparisons
- prevent "it worked because residue" confusion
- keep learnings interpretable over time

If the evaluation landscape changed, say so.
That's what an epoch is for.


---

## Source: `canon/odd/appendices/compilation.md`

---
uri: klappy://canon/odd/compilation
title: Compilation
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "compilation", "memory", "context", "packs"]
---

# Compilation

## Summary

Compilation is the process of producing a **derived, wipeable, portable pack** from higher-entropy source documents.

It exists to solve a practical constraint:

> Agents and humans cannot keep the entire repo in working memory at once.

Compilation produces a **smaller, purpose-built context artifact** that can be regenerated at any time.

---

## Core Rule

**Compilation never edits or replaces source.**

- Source docs remain the truth.
- Compiled packs are derived outputs.
- Compiled outputs may be deleted at any time and rebuilt deterministically.

This is compilation, not compression-in-place.

---

## Output Location (Wipeable)

Compiled outputs MUST live under:

`/public/_compiled/<lane>/`

Example:

`/public/_compiled/website/visitor-pack.md`

Compiled outputs MUST NOT be stored inside:
- `/canon/**`
- `/docs/**`
- `/attempts/**`

Those are source-of-truth layers.

---

## Provenance Header (Required)

Every compiled pack MUST begin with a provenance header containing:

- `lane`
- `pack`
- `built_at` (ISO8601)
- `git_commit`
- `sources` (list of source file paths)
- `source_hashes` (map of source path → sha256)

If provenance is missing, the compiled pack is invalid.

---

## Why This Is ODD

ODD treats "context" as a consumable.

Compilation is the mechanism that makes context:

- **portable** (shareable artifact)
- **auditable** (provenance)
- **regeneratable** (wipeable output)
- **cheap** (smaller input than full repo)

Compilation is not automation. It is an **evolutionary pressure** against doc sprawl.

If compilation output grows bloated, the correct response is:
- reduce scope
- tighten selection rules
- improve curation
not "add more docs."

---

## Multi-Pack Output (E0002+)

When a lane has more than one pack, output MUST be structured as:

```
/public/_compiled/<lane>/
  index.json
  <pack>-pack.md
  _meta/
    <pack>-COMPILE_META.json
```

### index.json

Each lane MUST emit `/public/_compiled/<lane>/index.json` listing all known packs from
`/infra/compile/plans/<lane>/*.json` and whether each output exists.

### Meta filenames are pack-scoped

`COMPILE_META.json` MUST NOT be shared across packs.

Meta MUST be written as:

`/public/_compiled/<lane>/_meta/<pack>-COMPILE_META.json`

This prevents clobbering and preserves provenance per target.

---

## Relationship to Drift Checks

Drift checks ensure the repo does not contradict itself.

Compilation ensures the repo remains **usable** under memory limits.

Both are required for scalability.


---

## Source: `docs/PRD/website/PRD.md`

# PRD: Public Website

| Field           | Value            |
|-----------------|------------------|
| **PRD Version** | v1.0             |
| **Lane**        | website          |
| **Status**      | Active           |
| **Created**     | 2026-01-17       |
| **Author**      | Chris Klapp      |

---

## Interface Contracts

This lane MUST remain compatible with:

- manifest >=2.0.0 <3.0.0
- build-output >=3.0.0 <4.0.0
- attempt-cli >=2.0.0 <3.0.0

---

## Visual Interfaces

This product MUST remain compatible with:

- color-system >=1.0.0 <2.0.0
- typography >=1.0.0 <2.0.0
- spacing >=1.0.0 <2.0.0

This product does NOT define colors, fonts, or spacing directly.
It consumes visual interfaces.

See `/canon/odd/appendices/visual-evolution.md` for the visual evolution model.

---

## Objective

Create a public website that allows humans to:

- Understand what ODD is
- Explore it progressively without overwhelm
- Verify credibility
- Navigate to deeper material intentionally

---

## Background

This is the human-facing orientation surface for ODD.

It is portfolio, explanation, credibility layer.

It does NOT teach agents how to think.
It does NOT execute ODD.
It explains ODD progressively to humans.

---

## In Scope

- Progressive disclosure UX
- Canon browsing
- Essays / articles (including Medium content)
- Clear entry points ("Start here", "Go deeper")
- Mobile usability
- Visual calm
- Deep links / shareable URLs

---

## Explicitly Out of Scope

- AI chat (belongs to ai-navigation lane)
- Agent execution (belongs to agent-skill lane)
- Process enforcement
- MCP servers
- "How to run ODD" instructions for agents

---

## Success Criteria

- [ ] First load shows no more than 7 navigational items
- [ ] Mobile usable without horizontal scrolling
- [ ] Canon discoverable without file paths exposed
- [ ] No agent instructions present in UI
- [ ] No CLI/process language exposed to visitors
- [ ] Deep links work (URL represents resource + section)
- [ ] Progressive disclosure tiers respected (Tier 0/1/2)

---

## Definition of Done

An attempt against this PRD is complete when:

- [ ] Build output produced (`npm run build`)
- [ ] Visual proof captured (desktop + mobile screenshots)
- [ ] First load shows ≤7 nav items (verified via screenshot)
- [ ] Mobile layout verified (no horizontal scroll)
- [ ] Deep link round-trip tested
- [ ] Self-audit completed with explicit tradeoffs

---

## Primary User

Human developers, peers, evaluators exploring ODD.

---

## Constraints

This PRD is shaped by Canon constraints:

- Evidence over assertion
- UX should carry the explanation (reduce text compensation)
- Maintainability over cleverness
- Progressive disclosure required

---

## Attempt Policy

This PRD may be attempted multiple times.

- Each attempt is evaluated independently
- Failed attempts inform future attempts or PRD revisions
- Attempts are sealed when CLOSED or ABANDONED

Attempts live at: `/attempts/website/prd-v1.0/attempt-NNN/`

---

## Compiled Pack (Phase 0)

The website lane MUST support generating a wipeable "visitor pack" used for progressive disclosure and AI-friendly context.

### Command
- `npm run lane:compile -- --lane website --pack visitor`

### Output
- `public/_compiled/website/visitor-pack.md`
- `public/_compiled/website/_meta/COMPILE_META.json`

### Verification
- `npm run verify:compiled -- --lane website --pack visitor`

### Contract
- The compiled pack MUST include a provenance header as defined in:
  - `klappy://canon/odd/compilation`

---

## Related Documents

- Lane architecture: `/canon/odd/appendices/product-lanes.md`
- Canon constraints: `/canon/constraints.md`
- Definition of Done: `/canon/definition-of-done.md`
- Legacy PRD (v0.3): `/docs/PRD/website/PRD-legacy-v0.3.md`
- Compilation: `/canon/odd/appendices/compilation.md`
