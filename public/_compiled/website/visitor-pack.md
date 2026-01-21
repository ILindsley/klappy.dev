---
lane: website
pack: visitor
built_at: 2026-01-21T05:24:32.203Z
git_commit: fa94679e3e1824fb564490282b040cbdcaff92f1
sources:
  - canon/README.md
  - docs/appendices/product-lanes.md
  - docs/appendices/epochs.md
  - docs/appendices/compilation.md
  - docs/PRD/website/PRD.md
source_hashes:
  canon/README.md: fe5795892bd4378256fb67ec8f3664e5c1e1d65228e5c89251b76f708f4e279c
  docs/appendices/product-lanes.md: 2ae8b18bb685ad87aded2127b547f91a0b132f4a3945dc10c06d0ffd4f1dc828
  docs/appendices/epochs.md: 20fd2a722267b13cd8441eb1cf8a7d94f41131fe30750da04b05d088a23bf334
  docs/appendices/compilation.md: 5751bcb06ef4784f15690ba5ccc3e70395e0acf575bb57c38084aeaabdbba55d
  docs/PRD/website/PRD.md: a02a183dc2151ed25a6cdcc7db14228cbd3554aa694910ee3074af0f3560d7e3
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

## Source: `docs/appendices/product-lanes.md`

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


---

## Source: `docs/appendices/epochs.md`

---
uri: klappy://docs/appendices/epochs
title: "Epochs"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "epochs", "fitness-landscape", "comparability", "orientation"]
---

# Epochs

> Named periods where success criteria are stable enough for outcome comparison.

## Description

An epoch is a named period where "success" meaning is stable enough to compare outcomes. Attempts are individuals, PRDs are fitness functions, Promotion is selection, Canon is inherited traits, and Epochs are shifts in the fitness landscape. An epoch defines evaluation reality: what "done" means, mandatory evidence, binding contracts, acceptable risks, and infrastructure stability. Epochs are not PRDs—they are the context in which PRDs are interpreted. klappy.dev defines E0001 (single-PRD era), E0002 (multi-lane era), and E0003 (evidence-first era with Cloudflare deployment proof required).

## Outline

- What an Epoch Is
- What an Epoch Is Not
- Relationship to Product Lanes
- Relationship to PRDs and Attempts
- When to Start a New Epoch
- Naming Convention (E0001, E0002, E0003)
- Minimal Epoch Metadata (META.json)
- Anti-Patterns
- E0003 — Evidence-First Era (klappy.dev specific)

---

## Content

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

## E0003 — Evidence-First Era

### What changed

E0003 begins when online deployment evidence becomes mandatory for attempt completion.

In this epoch, a local build is not sufficient proof when the intended outcome is an online deployment.

### Binding rule (new fitness landscape)

An attempt is not complete until all are true:

1) The attempt branch is pushed to origin
2) Cloudflare Pages preview deployment succeeds (build passes)
3) The preview URL returns HTTP 200 and renders the site
4) The evidence URL returns HTTP 200 and renders the evidence at:

`/_evidence/<run_id>/EVIDENCE.md`

### Why this is a new epoch

This change alters the repository's selection pressure:

- Success is now gated by deployment correctness, not just build correctness
- Evidence must be externally reviewable, not locally asserted
- Attempts become comparable only within the same deploy-evidence regime

### Compatibility

- E0002 attempts remain valid within E0002.
- E0002 attempts are not comparable to E0003 attempts by default.


---

## Source: `docs/appendices/compilation.md`

---
uri: klappy://docs/appendices/compilation
title: Compilation
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "compilation", "memory", "context", "packs"]
---

# Compilation

> The process of producing wipeable, portable context packs from source documents.

## Description

Compilation creates derived, regeneratable packs that fit in agent and human working memory while preserving source truth unchanged. Compiled outputs live under `/public/_compiled/<lane>/` with required provenance headers for auditability. This mechanism keeps context portable, auditable, and cheap while applying evolutionary pressure against documentation sprawl.

## Outline

- Summary
- Core Rule
- Output Location (Wipeable)
- Provenance Header (Required)
- Why This Is ODD
- Multi-Pack Output (E0002+)
- Relationship to Drift Checks
- Drift Audits

---

## Content

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

## Drift Audits

The repository SHOULD provide a read-only drift audit that can be run at any time:

- `npm run audit:drift`

This command MUST NOT regenerate or modify derived outputs. It only verifies consistency.

If regeneration is desired for wipeable derived outputs (compiled packs), the repository MAY also provide:

- `npm run audit:repair`

`audit:repair` may regenerate ONLY derived outputs under `/public/_compiled/**`, then MUST run `audit:drift`.

Canon and PRDs MUST NOT be modified by either command.


---

## Source: `docs/PRD/website/PRD.md`

# PRD: Public Website

| Field           | Value            |
|-----------------|------------------|
| **PRD Version** | v1.1             |
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

- [ ] Build output produced (`npm run build -- --lane website`)
- [ ] Visual proof captured (desktop + mobile screenshots)
- [ ] First load shows ≤7 nav items (verified via screenshot)
- [ ] Mobile layout verified (no horizontal scroll)
- [ ] Deep link round-trip tested
- [ ] Self-audit completed with explicit tradeoffs
- [ ] **Cloudflare Preview URL provided** (branch must be pushed)
- [ ] **Evidence URL provided** (viewable online without local code)

---

## Online Evidence (Required)

A website lane attempt is **not complete** unless:

1. The attempt branch is pushed to `origin`.
2. Cloudflare Pages generates a Preview Deployment URL for that branch.
3. The attempt includes an Evidence URL viewable online without running code locally.

Local preview instructions are allowed during development, but they **do not satisfy attempt completion**.

If an agent cannot provide both URLs, the attempt is **INVALID**.

See `/docs/appendices/online-evidence.md` for the full requirement.

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

## Media (Learning Layer)

This lane follows: `/canon/odd/appendices/media-as-learning-layer.md`

Media is:
- optional (progressive disclosure)
- non-blocking (site must work with media collapsed)
- never autoplayed
- attached to stable pages only

### Initial Assets (Phase 0)

**Home (`/`)**
- Hero diagram (image): `/assets/home/hero-odd-diagram.png`
- Orientation map (image): `/assets/home/orientation-map-diagram.png`
- ODD explainer (video): `/assets/home/outcomes-driven_development.mp4`

**ODD (`/odd/...`)**
- ODD in practice (video): `/assets/odd/odd-in-practice.mp4`
- ODD is not a framework (image): `/assets/odd/odd-is-not-a-framework.png`
- Why evidence beats confidence (audio): `/assets/odd/why-evidence-beats-confidence.m4a`

### Requirements

- The default experience must not require media consumption to understand the page.
- Media must be user-initiated (explicit Watch/Listen/View affordances).
- No autoplay video or audio.
- Media must not add to the primary navigation item count.

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

- Lane architecture: `/docs/appendices/product-lanes.md`
- Canon constraints: `/canon/constraints.md`
- Definition of Done: `/canon/definition-of-done.md`
- Legacy PRD (v0.3): `/docs/PRD/website/PRD-legacy-v0.3.md`
- Compilation: `/docs/appendices/compilation.md`
- Media philosophy: `/canon/odd/appendices/media-as-learning-layer.md`
