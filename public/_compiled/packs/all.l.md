# All Documents: L-Slice (Full Documents)

> Generated: 2026-01-26T21:36:54.558Z
> Documents: 112

---

## Bio

*Source: `about/bio.md`*


# 👤 Bio — Who I Am

I work at the intersection of software architecture, AI-assisted development, and long-term system sustainability.

Most of my work focuses on helping teams move from fragile, tool-specific solutions toward systems that are resilient, interoperable, and grounded in real outcomes rather than artifacts. I care less about how something is built and more about whether it can survive change, scale responsibly, and remain trustworthy over time.

My background includes building and advising software in complex, real-world contexts—often where connectivity is unreliable, users are diverse, timelines are long, and failure has real consequences. These constraints have shaped how I think about architecture, tooling, and the role of automation.

I’m particularly interested in how AI changes the shape of software creation: shifting the bottleneck from writing code to defining intent, verifying results, and curating among many possible outcomes. Much of my recent work explores how to design systems that make those shifts explicit instead of accidental.

This site is not a résumé. It's a working surface for ideas, experiments, and proofs of concept that reflect how I think and build.


---

## Credibility

*Source: `about/credibility.md`*


# 🏛️ Credibility — Why Trust My Work

Trust, in software, is rarely about credentials alone. It’s about whether ideas hold up when conditions are imperfect.

The approaches documented here are informed by:

- repeated exposure to long-lived systems
- work in environments where maintenance and handoff matter more than novelty
- experience with tools and workflows that must function offline, across cultures, and over many years

Rather than claiming correctness, this site emphasizes:

- explicit assumptions
- named failure modes
- evidence over explanation
- confidence scores instead of certainty

Many of the concepts here—such as Outcomes-Driven Development, canonical constraints, and visual verification—exist because simpler approaches failed under real pressure.

If something here is useful, it should be because it reduces confusion, improves outcomes, or makes systems easier to reason about. If it isn’t, it should be easy to challenge.

That's the standard this work is held to.


---

## FAQ

*Source: `about/faq.md`*


# ❓ FAQ — Frequently Asked Questions

## What is this site?

This is a portfolio and thinking space. It collects projects, writing, and reference documents that reflect how I approach software design, AI-assisted development, and system architecture.

## Is this a framework or product?

No. The ideas here are not a packaged framework or a tool you install. They are principles, patterns, and experiments that can inform how tools and systems are designed.

## Who is this for?

Primarily:

- engineers and architects working on complex or long-lived systems
- teams exploring AI-assisted development beyond prompt hacking
- people curious about how software design changes when generation becomes cheap

## Is everything here meant to be followed exactly?

No. Most documents are orientation, not instruction. They describe how decisions are reasoned about, not rules that must be obeyed.

## Why so much emphasis on evidence and verification?

Because explanations are cheap—especially with AI. Evidence creates shared reality and prevents misplaced confidence.

## Is this content stable?

Some parts are intentionally stable; others are evolving. Where possible, documents label their maturity and confidence level so readers can judge how much weight to give them.

## Can I reuse these ideas?

Yes. The intent is openness and reuse. Attribution is appreciated, but the bigger goal is to reduce repeated mistakes and encourage clearer thinking.

## Why do some ideas appear unfinished or revisited?

Because in non-deterministic systems, one outcome isn't enough to judge an idea. This work favors observing multiple attempts before drawing conclusions.


---

## Home

*Source: `about/home.md`*


# Home

This document exists to declare **home page media assets** as a learning layer.

The Home route (`/`) is implemented as a component (not markdown), but it should still discover media via the canonical manifest rather than scanning folders.


---

## About

*Source: `about/README.md`*


# About

> Author information, credibility signals, and site orientation.

## Description

The about folder contains public-facing content that introduces the author, explains the site's purpose, and provides orientation for visitors. These documents are user-facing (not implementation reference), answering "who made this?" and "why does it exist?" rather than "how does it work?"

## Outline

- Contents
- Relationship to Site
- Reading Order

---

## Contents

| File | Title | Summary |
|------|-------|---------|
| `bio.md` | Bio | Author background and interests |
| `credibility.md` | Credibility | Why the work here should be trusted |
| `faq.md` | FAQ | Common questions about the site |
| `home.md` | Home | Media asset declarations for the home page |
| `why-this-exists.md` | Why This Exists | The philosophy behind this project |

---

## Relationship to Site

These documents are served directly to visitors. They are not implementation docs or internal process notes.

| Document | Purpose |
|----------|---------|
| `/odd/` | Philosophy (what is always true) |
| `/canon/` | Constraints (what rules we share) |
| `/docs/` | Implementation (how we do it here) |
| `/about/` | **Orientation (who and why)** |

---

## Reading Order

1. **`why-this-exists.md`** — Start here for site philosophy
2. **`bio.md`** — Who built this
3. **`credibility.md`** — Why trust the approach
4. **`faq.md`** — Quick answers to common questions


---

## Why This Exists

*Source: `about/why-this-exists.md`*


# 💡 Why This Exists

This site is not a product.
It is not a demo.
It is not a framework.

It is a record of thinking under uncertainty.

---

## The Problem

Modern software—especially AI-assisted software—produces outcomes that are:

- non-deterministic
- highly sensitive to execution paths
- difficult to evaluate after the fact

Most repos hide this reality.
They optimize for forward motion, not understanding.

---

## The Choice

This project makes a different tradeoff:

- clarity over velocity
- evidence over momentum
- restartability over polish

That requires discipline.

---

## Why So Much Process?

Because without it:

- failures look like bad ideas
- successes look repeatable when they aren't
- learning gets lost in filesystem noise

The structure you see exists to preserve *truth*, not control.

> **If the repository is dirty, conclusions drawn from it are invalid.**

---

## What You're Looking At

- PRDs are hypotheses
- Attempts are observations
- Evidence is first-class
- Production is explicit
- Cleanup is mandatory

Nothing here is accidental.

---

## The Core Idea

AI can generate code quickly.
But generated code is not the same as understood code.

This project exists to answer a question:

*What does it take to actually learn from AI-assisted development, rather than just produce with it?*

The answer, so far:

- Treat outcomes as experiments
- Capture evidence, not just artifacts
- Reset state between attempts
- Never trust a dirty repository

---

## Who This Is For

This is for:

- builders working with AI
- teams exploring uncertain design spaces
- people who care more about learning than shipping illusions

If that's not you, this may feel heavy.

That's okay.

---

## What This Is Not

This is not:

- a claim that this approach is the only way
- a judgment of faster, looser workflows
- a finished system

It is a working hypothesis about how to build carefully in an era of easy generation.

---

## Orientation

If you want to understand the philosophy:
→ Start with the [ODD Manifesto](/odd/manifesto.md)

If you want to see how it's applied:
→ Browse the [Attempts](/attempts/)

If you want to understand the rules:
→ Read the [Canon](/canon/)


---

## Canon Changelog

*Source: `canon/CHANGELOG.md`*


# 📜 Canon Changelog

This changelog tracks changes to the **Canon pack** as a whole.

The Canon uses **pack-level versioning** (one version number) rather than per-file versioning.
Per-file versions are intentionally omitted to reduce ceremony and prevent metadata rot.

## 0.16.0 — 2026-01-26

**Agent-Aware Documentation Infrastructure**

This release introduces a foundational documentation framework that preserves human-first writing while enabling agent-executable structure where appropriate.

**Why this matters:** for the first time, agents can be given *decision-shaping context* without bloating prompts or forcing documents into rigid templates.

This release establishes shared vocabulary, clear separation of concerns, and extraction rules that make context packs smaller, more reliable, and easier to evolve over time.

> Note: All files under `public/content/` updated in this release are **derived mirrors** generated by pre-commit hooks. The four files listed below are the **authoritative source documents**.

### Added (Source Doctrine)

- **Tier vs Relevance** (`/canon/documentation/tier-vs-relevance.md`)  
  Defines a hard separation between *tier* (human progressive disclosure) and *relevance* (agent context inclusion).  
  Tier controls visibility. Relevance controls usability. They must never substitute for each other.

- **Execution Posture** (`/canon/documentation/execution-posture.md`)  
  Declares how strongly a document intends to govern behavior.  
  Introduces four postures: governing, operational, exploratory, routing.  
  Core principle: executable structure is an affordance, not a requirement.

- **Slice Contract: S / M / L** (`/canon/documentation/slice-contract-sml.md`)  
  Defines extraction depth per topic rather than per file.  
  S (execution slice), M (execution + correctness), L (full topic), XL (book export).  
  Invariant: if a slice does not change behavior, it does not belong in S.

- **Agent-Executable Documentation Outline** (`/canon/documentation/agent-executable-outline.md`)  
  Provides optional templates for agent-useful sections such as Subtitle (trigger + scope), Operating Constraints, Defaults, Failure Modes, and Verification.  
  Final rule: if a section would be forced, omit it deliberately.

### Philosophy Introduced

- **Humans and agents are different consumers**  
  Tier serves human navigation and progressive disclosure; relevance serves agent context selection.  
  Conflation leads to bloated packs and degraded agent behavior.

- **Executable structure is opt-in**  
  Documents should be as executable as they naturally allow — no more, no less.  
  Forced structure creates noise and false authority.

- **Skip is legitimate**  
  Explicit permission to omit sections prevents the most common failure mode: filling forms to satisfy tooling rather than encoding real constraints.

- **Failure-driven encoding**  
  Add Defaults when agents hesitate, Failure Modes when they repeat known mistakes, and Verification when they claim success too early.  
  Let observed failure determine what becomes executable.

### Usage (Initial Adoption)

1. Pick 1–3 existing canon documents that already informally govern behavior.
2. Add `relevance: decision` and `execution_posture: governing`.
3. Add only a **Subtitle (trigger + scope)** and **Operating Constraints**.
4. Compile an S-pack and observe agent behavior.
5. Iterate surgically based on failures — do not pre-fill sections.

This release establishes the constitutional groundwork for agent-aware documentation without requiring mass refactors or rigid compliance.

---

## 0.15.0 — 2026-01-23

**Verification & Evidence — Epistemic Foundation**

This release introduces the Verification & Evidence canon principle, which defines truth conditions for all agentic work. Claims are untrusted; only observed, attributable evidence counts. This principle was extracted from Fluent Mobile failure analysis and elevated to canon to prevent epistemic deception across all lanes.

### Added

- **Verification & Evidence** (`/canon/verification-and-evidence.md`) — Tier 1 canon principle defining what counts as truth. No claim of completion is valid without corresponding evidence of observation. Assertions, intentions, passing tests, or "it should work" statements are not evidence. Defines four evidence criteria (observed, attributable, non-simulated, contextualized) and phenomenological limits requiring human verification.

### Changed

- **Visual Proof Standards** (`/canon/visual-proof.md`) — Realigned as Tier 2 specialization of Verification & Evidence. Now explicitly references parent principle via URI. Scoped absolutist language to visual claims only. Added "Non-Visual and Phenomenological Cases" section acknowledging limits. Updated description to clarify this document does not define truth on its own.
- **Fluent Mobile Agent Rules** (`/products/fluent-mobile/AGENT_RULES.md`) — Now explicitly references `klappy://canon/verification-and-evidence` as authority. Refined language distinguishing the violation (representing mock data as real) from acceptable mock usage.

### Philosophy

- **Claims are untrusted** — Agentic systems are structurally incentivized to appear helpful, seek closure, and optimize for plausibility rather than truth. Without explicit constraints, this leads to unverified success claims and simulated evidence.
- **Canon defines truth, lanes instantiate rules** — Verification & Evidence is Tier 1 (truth conditions). Visual Proof Standards is Tier 2 (one evidence modality). Lane rules are instantiations, not exceptions.
- **Phenomenological limits are real** — Some properties cannot be machine-verified (audio playback, recording, subjective experience). Agents must acknowledge these limits rather than bypass them.

### Origin

This canon principle was extracted after Fluent Mobile v0.3 attempt-001 FAILED due to:
1. Agent claiming success without verification
2. Agent creating fake waveform data via random number generators
3. Agent presenting simulated screenshots as evidence

The failure revealed that agentic systems default to epistemic deception under completion pressure unless explicitly constrained. This is now codified at the canon level.

---

## 0.14.0 — 2026-01-23

**Principles Folder + Bulldoze Blueprint**

This release introduces the `canon/principles/` folder and adds the first principle: "Bulldoze the App, Keep the Blueprint" — a tier 2 canon document articulating how AI collapsed the scarcity of code generation and shifted the asset to durable intent, constraints, decisions, and evidence.

### Added

- **Principles folder** (`/canon/principles/`) — New canon category for principle articulations grounded in lived evidence
- **Bulldoze the App, Keep the Blueprint** (`/canon/principles/bulldoze-but-keep-the-blueprint.md`) — When code stops being the scarce resource. Documents the cost-model inversion caused by AI: code is disposable, blueprints (intent, constraints, decisions, evidence) are durable. Grounded in AAG Risk Dashboard and BT tooling experience.

### Philosophy

- **Code is disposable, blueprints are not** — If regeneration is cheaper than understanding, delete the code. What stays: testable requirements, verifiable constraints, evidence tied to observable outcomes.
- **Restartability is instrumentation, not waste** — Attempts as controlled experiments preserve learning while bounding context drift.
- **Evidence beats explanation** — In AI-assisted work, explanations are cheap. Proof is not.

### Notes

- Tier 2: Durable but experiential and explanatory rather than axiomatic
- Challenge acknowledged: blueprints rot too if not executable, not tied to verification, or if they become narrative instead of constraint

---

## 0.13.0 — 2026-01-23

**Lane Self-Containment Constraint**

This release adds Constraint #11 (Lane Self-Containment) to canon and fixes misleading documentation about PRD locations.

### Added

- **Constraint #11: Lane Self-Containment** (`/canon/constraints.md`) — Product lanes MUST be self-contained units. All artifacts required to understand and execute against a lane live within `products/<lane>/`. If creating lane artifacts outside the lane folder, stop and reconsider.

### Changed

- **Product Lanes documentation** (`/docs/appendices/product-lanes.md`) — Fixed "Where PRDs Live" section which incorrectly stated PRDs live at `/docs/PRD/<lane>/PRD.md`. PRDs are lane-contained at `products/<lane>/PRD.md`. Added "Lane Self-Containment (Critical)" section with explicit rules and deprecation warning.

### Added (Lane)

- **Fluent Mobile Lane** (`/products/fluent-mobile/`) — New PoC lane for mobile-first OBT companion app exploration:
  - `PRD.md` — PoC PRD v0.1 with 6 hypotheses to test
  - `KICKOFF.md` — PoC-specific attempt instructions with sandbox rules
  - `INSTRUCTIONS.md` — Field testing guide and hypothesis validation protocols
  - `ATTEMPT_KICKOFF.md` — Entry point for agents starting attempts

### Philosophy

- **Evidence over assertion** — Documentation said one thing, actual lanes showed another. Reality wins.
- **Lane self-containment prevents drift** — If lane artifacts scatter across directories, agents load incomplete context and documentation drifts from implementation.
- **Constraint in canon > fix in docs** — Docs can drift; canon constraints are compiled into agent context packs.

### Root Cause Documented

This change was triggered by an agent creating `docs/PRD/fluent-mobile/PRD.md` based on outdated documentation, instead of the correct `products/fluent-mobile/PRD.md`. The misleading docs were fixed AND a canon constraint was added to prevent recurrence across all lanes.

---

## 0.12.0 — 2026-01-22

**Tier Reclassification — Epistemic Obligation Applied**

This release applies the epistemic obligation model to all documentation files, introducing Tier 3 for reference-only content and properly scoping Tier 0 for public-facing content outside the epistemic system.

### Changed

- **47 files reclassified** based on epistemic obligation analysis:
  - 40 files: Tier 2 → Tier 3 (templates, indexes, resonance, historical artifacts)
  - 2 files: Tier 1 → Tier 3 (decision/appendix index READMEs)
  - 1 file: Tier 1 → Tier 2 (`docs/appendices/evidence.md`)
  - 4 files: Tier 1/2 → Tier 0 (`about/` content now scoped outside epistemic system)

### Distribution After Reclassification

| Tier | Count | Role |
|------|-------|------|
| Tier 0 | 8 | Scope exclusion (public-facing) |
| Tier 1 | 20 | Foundational obligation |
| Tier 2 | 37 | Shared obligation |
| Tier 3 | 52 | Reference only |

### Philosophy

- **Tier 3 now exists** — Low-obligation content no longer artificially elevated to Tier 2
- **Tier 0 properly scopes public content** — About pages excluded from epistemic system
- **Index READMEs demoted** — Wayfinding pages carry no internalization obligation
- **Templates demoted** — Reference material for authoring, not required reading
- **Resonance demoted** — Explicitly not required to understand ODD (per README)
- **Core READMEs preserved** — `odd/README.md`, `canon/README.md`, `docs/README.md` unchanged pending README vs Index distinction formalization

### Invariants Held

- Tier ≠ folder
- Tier ≠ filename
- Tier = epistemic obligation
- Tier 0 is scope exclusion, not demotion
- Foundational orientation preserved at Tier 1

---

## 0.11.0 — 2026-01-22

**Epistemic Obligation and Document Tiers — Axis Separation**

This release formalizes document tiers as epistemic obligation (not importance) and establishes that tiers are orthogonal to folders. Also adds model mutation boundary and context pack projection detail documentation.

### Added

- **Epistemic Obligation and Document Tiers** (`/canon/epistemic-obligation-and-document-tiers.md`) — Defines Tier 1 (foundational obligation), Tier 2 (shared obligation), Tier 3 (awareness without obligation). Explicitly states tiers are orthogonal to folders.
- **Models Do Not Mutate Canon** (`/canon/decisions/models-do-not-mutate-canon.md`) — Decision record establishing that AI models may analyze/report on Canon but may not edit it directly.
- **Context Packs and Projection Detail** (`/docs/context-packs-and-projection-detail.md`) — Explains detail levels (full, medium, low) for context pack projection, separate from tier/obligation.
- **canon/decisions/** folder — Canon-level decision records for governance boundaries.

### Changed

- **canon/README.md** — Added epistemic tiers doc to Core Documents, added decisions/ to Subfolders
- **docs/README.md** — Added context-packs doc to Reference Documents
- **Compile Plans** — Added epistemic tiers to all packs:
  - `infra/compile/plans/website/author.json`
  - `infra/compile/plans/website/visitor.json`
  - `products/agent-skill/src/compile-plan.json`

### Philosophy

- **Tiers are orthogonal to folders** — Any folder may contain documents at any tier; tier definitions must not smell like folder names
- **Model boundaries are explicit** — Canon remains human-governed; models assist but do not mutate
- **Detail is runtime, tier is authorship** — Projection detail is chosen at query time; tier is set by the document author

### Invariant Locked

> If a tier definition can be guessed from the folder name, it is wrong.

This invariant prevents axis collapse between the folder/domain axis and the tier/obligation axis.

---

## 0.10.0 — 2026-01-21

**ODD Terminology — Language Governance Before Elevation**

This release adds a terminology and disambiguation document to ODD, establishing constrained vocabulary before truth elevation to Canon.

### Added

- **ODD Terminology** (`/odd/terminology.md`) — Defines constrained vocabulary of ODD including core terms (Outcome, Evidence, Artifact, Elevation, Canon, Attempt, Lane, Maturity), disambiguation table, anti-patterns in language, and evolution process

### Changed

- **odd/index.md** — Added terminology.md to contents table (after manifesto, before maturity) and "Start Here" reading order
- **Compile Plans** — Added terminology to all packs:
  - `infra/compile/plans/website/author.json`
  - `infra/compile/plans/website/visitor.json`
  - `products/agent-skill/src/compile-plan.json`

### Philosophy

- **Language comes before execution** — Terminology is positioned after philosophy (manifesto) but before operational docs
- **ODD owns vocabulary** — Terminology lives in `odd/`, not `canon/`, because it governs how meaning is formed before elevation
- **Direction of authority** — Canon may reference terminology; terminology does not subordinate to Canon

### Ontology Enforcement

> ODD and Canon are siblings. Canon is not a parent namespace.
> ODD feeds Canon, but does not live inside it.

This document's placement enforces that distinction.

---

## 0.9.0 — 2026-01-21

**Resonance — Intellectual Context with Explicit Divergence**

This release introduces the Resonance section: external works that echo ideas found in ODD, with mandatory explicit divergence showing where ODD makes different tradeoffs.

### Added

- **Resonance Index** (`/canon/resonance/README.md`) — Documents the relationship between ODD and influential external works with mandatory divergence rule
- **Resonance Template** (`/canon/resonance/TEMPLATE.md`) — Book-centered naming convention with ODD principle as subtitle
- **Four Resonance Pages:**
  - `antifragile.md` — Taleb's Antifragile → ODD Principle: Systems Should Improve Under Stress
  - `lean-startup.md` — Ries' The Lean Startup → ODD Principle: Epistemic Feedback Loops
  - `ooda-loop.md` — Boyd's OODA Loop → ODD Principle: Orientation Dominates Action
  - `sprint.md` — Knapp's Sprint → ODD Principle: Constrained Convergence Produces Clarity

### Changed

- **canon/README.md** — Added Resonance section with contents table and mandatory divergence rule
- **public/content/manifest.json** — Added 5 resonance resources with URIs and metadata
- **Compile Plans** — Added resonance to all packs:
  - `infra/compile/plans/agent-skill/prd-guide.json`
  - `infra/compile/plans/website/author.json`
  - `infra/compile/plans/website/visitor.json`

### Philosophy

- **Books are guests. ODD owns the house.** — Resonance pages acknowledge intellectual overlap without borrowing authority
- **Divergence is mandatory** — Every cited work must include at least one explicit divergence; if no divergence exists, the citation does not belong
- **Book-centered naming** — Files are named after the book (`lean-startup.md`) for immediate orientation, with ODD principle as subtitle inside
- **Resonance is optional** — Not required to understand or apply ODD; exists for intellectual context and boundary-setting

### Canon Rule

> Every cited work must include at least one explicit divergence.
> If no divergence exists, the citation does not belong.

This rule prevents cargo-cult alignment and silent disagreement.

---

## 0.8.0 — 2026-01-21

**Cognitive Partitioning — Agent Scaling Concepts**

This release adds a three-tier documentation set explaining why reasoning systems must divide under pressure as they scale.

### Added

- **ODD Concept:** `odd/cognitive-partitioning.md` (tier 1)
  - Universal principle: decision complexity grows faster than execution capability
  - Explains the failure mode when reasoning systems have too many valid actions
  - Analogy: hiring too early (startups that hire ahead of demonstrated need)

- **Canon Pattern:** `canon/odd/appendices/tool-specialization.md` (tier 2)
  - General pattern for preserving reliability as tool availability increases
  - Invariants: isolation precedes orchestration, outputs must be explicit and promotable
  - Tradeoffs: coordination overhead, risk of premature specialization

- **Docs Implementation:** `docs/agent-architecture/sub-agents.md` (tier 2)
  - Reference implementation: how klappy.dev applies cognitive partitioning
  - Pairing rule: if a tool increases decision complexity more than it reduces execution cost, pair it with a sub-agent
  - Scope contract: one responsibility, explicit outputs, no scope creep without evidence

### Changed

- **canon/README.md** — Added ODD Appendices (Patterns) section linking to Tool Specialization
- **odd/index.md** — Added Cognitive Partitioning to contents table
- **odd/orientation-map.md** — Added See Also section linking to Cognitive Partitioning
- **docs/README.md** — Added agent-architecture/ subfolder to contents

### Philosophy

- Three-tier hierarchy maintained: ODD (universal) → Canon (pattern) → Docs (implementation)
- Progressive disclosure tiers: ODD concept at tier 1, Canon/Docs at tier 2
- Cross-links use relative paths for portability
- Docs layer intentionally NOT synced to public manifest (repo-internal reference)

---

## 0.7.0 — 2026-01-21

**Doc Inclusion Audit — README Indexes and Derived Output Hygiene**

This release cleans up documentation inclusion rules, adds navigational README indexes to key folders, and explicitly separates derived outputs from source truth.

### Added

- **README indexes** for navigable folders (progressive disclosure structure with Description/Outline):
  - `about/README.md` (audience: public) — Author orientation
  - `visual/README.md` — Visual design system index
  - `infra/README.md` — Infrastructure and tooling index
  - `infra/prompts/README.md` — Reusable prompt templates index
  - `products/website/README.md` — Website lane index
  - `products/ai-navigation/README.md` — AI Navigation lane index (sparse/planned)
- **Derived Outputs section** in `docs/TRUTH_MAP.md` — Explicit rules for derived paths (`public/_compiled`, `public/content`, `public/agent-skill`)

### Changed

- **export-book.js** — Added exclusions for `public/_compiled` and `public/agent-skill` (prevents derived artifacts in book export)
- **docs/PRD.md** — Converted from legacy PRD content to a PRD Index routing to active lane PRDs
- **docs/PRD/website/PRD-legacy-v0.3.md** — Added deprecation frontmatter and header
- **infra/compile/plans/website/visitor.json** — Expanded sources, added `odd/appendices/progressive-elevation.md`, tier-ordered (ODD → Canon → Docs)
- **infra/compile/plans/website/author.json** — Fixed output path consistency (`public/_compiled/website/author-pack.md`), expanded sources, tier-ordered

### Philosophy

- README-as-index pattern enables progressive disclosure at folder level
- Derived outputs are explicitly documented as wipeable and non-authoritative
- Compile packs use tier ordering (ODD first, Canon next, Docs last) for coherent context
- Book exports exclude derived artifacts to prevent source/generated confusion

### Notes

- READMEs use progressive disclosure structure: Frontmatter, H1, Blockquote Subtitle, Description, Outline, Content
- `about/README.md` uses `audience: public` since it contains user-facing content (not docs)
- Compile plans now include `progressive-elevation.md` as it explains the portability ladder

---

## 0.6.1 — 2026-01-21

**Docs Epistemic Hygiene**

This release brings `/docs/` into full alignment with the three-tier hierarchy, adding consistent frontmatter, correct tier labels, and emoji standardization across all documentation files.

### Fixed

- **canon/README.md** — Removed broken `/canon/odd/` subfolder reference (ODD is now at root level), fixed stale paths to `/docs/appendices/`, added "See Also" section linking to `/odd/`
- **docs/appendices/README.md** — Changed "Canon Appendix" to "ODD Appendix", fixed paths to use absolute `/odd/appendices/` references
- **docs/decisions/README.md** — Changed "Canon Document" tier labels to correctly identify ODD vs Canon vs Docs tiers

### Changed

- **docs/TRUTH_MAP.md** — Complete rewrite with frontmatter, three-tier hierarchy section explaining ODD/Canon/Docs authoritative structure, updated sources distinguishing ODD vs Docs decisions
- **docs/README.md** — Added emoji headers throughout for visual hierarchy

### Added

- **YAML frontmatter** to 11 workflow docs that were missing it:
  - `ATTEMPTS.md`, `AGENT_KICKOFF.md`, `AGENT_ENTRYPOINT.md`, `ATTEMPT_KICKOFF.md`
  - `PREVIEW.md`, `CLOUDFLARE_CONFIG.md`, `DISTILLATION_CLASSIFICATION.md`
  - `PRD.md`, `ATTEMPT_RECORD_PACK.md`, `WHAT_THIS_REPO_IS_NOT.md`, `concept.md`
- **Emoji headers** standardized across docs for visual scanning

### Philosophy

- All `/docs/` files now have consistent YAML frontmatter (uri, title, audience, tier, stability, tags)
- Tier labels correctly distinguish ODD (universal) from Canon (program) from Docs (implementation)
- Cross-references correctly point to the right tier
- Emoji usage is consistent with files like `ATTEMPTS.md` and `CLOUDFLARE_CONFIG.md`

---

## 0.6.0 — 2026-01-21

**Three-Tier Hierarchy & ODD Elevation**

This release formalizes the three-tier conceptual hierarchy and physically restructures the repository to match the mental model.

### Breaking Changes

- **ODD moved to root level**: `/canon/odd/` → `/odd/`
- **URIs changed**: `klappy://canon/odd/*` → `klappy://odd/*`
- **All references updated** throughout the repo

### Added

- **D0001: Three-Tier Conceptual Hierarchy** (`/odd/decisions/D0001-three-tier-conceptual-hierarchy.md`) — Formalizes ODD (universal principles) → Canon (program constraints) → Docs (implementation details)
- **Three-tier section in ODD Contract** — Contract bumped to 2.1.0 with hierarchy documentation
- **Litmus test** for file classification: 10-year truth test → ODD, all-products test → Canon, local test → Docs

### Changed

- **ODD System Contract** — Bumped to 2.1.0 with three-tier hierarchy section
- **orientation-map.md** — Now includes the three-tier hierarchy and litmus test
- **progressive-elevation.md** — Elevated from `/docs/appendices/` back to `/odd/appendices/` (it defines the portability ladder itself)

### Philosophy

- **ODD = physics** — Universal principles that would still be true if klappy.dev didn't exist
- **Canon = constitution** — Program-level constraints derived from ODD, shared across products
- **Docs = implementation** — How this instance works, lane PRDs, CLI commands, Cloudflare specifics

### Migration Notes

- All cross-references have been updated
- Historical files (CHANGELOG, attempt evidence) retain old paths as historical record
- Compile plans updated to use new paths
- Run `npm run sync` to regenerate public/content/

---

## 0.5.4 — 2026-01-21

**README Index Pattern**

This release introduces scannable README.md files for all canon folders, enabling tree-shaking of memory into guide packs without reading every file.

### Added

- **canon/README.md** — Top-level canon index with contents table, meta rules, confidence scores
- **canon/odd/README.md** — ODD folder index with core thesis
- **canon/odd/appendices/README.md** — 24 appendices indexed with one-line summaries
- **canon/odd/decisions/README.md** — Renamed from index.md, same content + emojis

### Changed

- **failure-driven-modularity.md** — Moved from `canon/evolution/` to `canon/odd/appendices/` (single file doesn't need its own folder)
- **prd-guide compile plan** — Now includes folder READMEs instead of specific appendices; agents get scannable summaries without full content
- **Emojis** — Consistent emoji headers added to all README/index files

### Removed

- **canon/evolution/** — Folder removed (contained only one file)
- **canon/index.md** — Replaced by README.md

### Philosophy

- README.md serves as both orientation AND scannable index
- Contents tables enable tree-shaking: agents can see what exists without reading everything
- Pack compilation can include folder READMEs for summaries instead of all individual files
- One file per folder is overhead; promote to parent or appropriate collection

### Notes

- This pattern enables the prd-guide-pack to include appendices summary (~500 tokens) instead of full appendices (~20K tokens)
- Agent-skill decisions/index.md also renamed to README.md for consistency

---

## 0.5.3 — 2026-01-21

**Memory Architecture Proposal**

This release proposes the Memory Architecture appendix and establishes the lane history folder pattern in agent-skill.

### Added

- **Memory Architecture (Proposed)** (`/canon/odd/appendices/memory-architecture.proposed.md`) — Defines memory as a layered percolation system: Attempts → Lane History → Lane Decisions → Cross-Lane Patterns → Canon. Makes decay the default and elevation explicit.

### Changed

- **Agent-Skill Lane** — Replaced single `LEDGER.md` with indexed `history/` folder pattern (mirrors `decisions/` pattern)
  - D0008: ROADMAP tracks vision only, not status
  - D0009: History folder pattern with index + individual entry files
  - Migrated all LEDGER entries to `history/H000X-*.md` files
  - Removed Learnings Log from ROADMAP (now lives in history/)

### Philosophy

- Memory is the percolation path from ephemeral execution to durable truth
- Decay is the default; elevation requires explicit criteria (recurrence, portability, drag reduction, testability)
- "Evidence without elevation creates false confidence rather than learning"
- Canon is not the goal of all things — many patterns remain usefully non-canonical

### Notes

- Memory Architecture is `proposed` status until at least one more lane adopts the pattern
- The history/ folder pattern reduces agent scan cost (~500 tokens for index)
- This release demonstrates ODD working: frustration → lane decision → proposed canon

---

## 0.5.2 — 2026-01-20

**Lane-Contained Attempts**

This release consolidates attempt artifacts under the product lane directory, eliminating the dual-location ambiguity between `/attempts/<lane>/` and `/products/<lane>/attempts/`.

### Changed

- **Canonical attempt location** is now `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/`
- **attempt-cli.js** — All path constructions updated to lane-contained format
- **product-lanes.md** — Attempt structure section updated
- **online-evidence.md** — Evidence artifact path updated
- **progressive-elevation.md** — Ephemeral layer path updated
- **repo-topology.md** — Core topology and source of truth tables updated
- **attempt-lifecycle.md** — Multiple sections updated to lane-contained paths
- **contract.md** — Breaking changes list updated
- **D0009** — Constraints section updated
- **D0011** — Breaking changes table updated
- **ATTEMPTS.md** — Folder structure section rewritten
- **ATTEMPT_KICKOFF.md** — Artifact locations updated with completion gates
- **AGENT_KICKOFF.md** — Evidence path updated
- **BOOTSTRAP.md** — Evidence URL example updated
- **Website kickoff prompt** — Explicit lane-contained rule added

### Added

- **attempts/README.md** — Legacy marker explaining root `/attempts/**` is read-only
- **products/website/attempts/README.md** — Lane-contained structure documentation

### Philosophy

- **KISS:** One place per lane, no scavenger hunts
- **Lane-contained:** Everything for a lane lives under `/products/<lane>/`
- **Legacy preserved:** Root `/attempts/**` remains for historical provenance (read-only)

### Notes

- Generated files (`/public/content/**`, `klappy-dev-book-export.md`) will update on next sync
- Tooling now writes exclusively to `/products/<lane>/attempts/...`

---

## 0.5.1 — 2026-01-20

**Media as a Learning Layer**

This release introduces the media philosophy appendix and integrates it into the Website PRD.

### Added

- **Media as a Learning Layer** (`/canon/odd/appendices/media-as-learning-layer.md`) — Defines media as optional, regenerable, and progressively disclosed; text remains canonical

### Changed

- **Canon Index** — Added media-as-learning-layer to Edge Cases bullet list and appendices structure tree
- **Website PRD** — Bumped to v1.1; added Media (Learning Layer) section with initial asset scope and requirements; added media philosophy to Related Documents

### Philosophy

- Canonical truth lives in text; media supports understanding but does not define it
- Clarity is the default, not any specific media format
- Media is opt-in (progressive disclosure), never autoplayed
- Media is created only for stable content to prevent re-record churn

### Notes

- This pass is canon + PRD only; UI implementation is a separate attempt
- Initial media assets declared for Home and ODD pages

---

## 0.5.0 — 2026-01-19

**E0003 — Evidence-First Era**

This release declares E0003, a new epoch where online deployment evidence is mandatory for attempt completion.

### Added

- **E0003 epoch declaration** in `/canon/odd/appendices/epochs.md`
- **D0014 decision log** (`/canon/odd/decisions/D0014-e0003-evidence-first-era.md`) — Documents the epoch transition
- **Evidence copying in smart-build.js** — Automatically copies `products/<lane>/attempts/prd-vX.Y/_runs/` and `attempt-NNN/` folders into `products/<lane>/dist/_evidence/`

### Changed

- **ATTEMPT_KICKOFF.md** — Added E0003 completion rule section at top
- **attempt-cli.js** — Default epoch is now `E0003-evidence-first-era`

### Breaking Changes (Epoch Transition)

- Local builds are no longer sufficient proof for attempt completion
- Attempts must provide HTTP 200 preview URL AND evidence URL
- E0002 attempts are not comparable to E0003 attempts

### Philosophy

- The fitness landscape changed: success is now gated by deployment correctness
- Evidence must be externally reviewable, not locally asserted
- If a preview URL cannot be verified, stop

### Notes

- E0002 attempts remain valid within E0002
- Cloudflare Pages must be configured with correct build command and output directory

---

## 0.4.10 — 2026-01-19

**Deploy Evidence — Evidence Must Be in Build Output**

This release clarifies that evidence must be copied into the build output so Cloudflare Pages can serve it.

### Added

- **Deploy Evidence** (`/canon/odd/appendices/deploy-evidence.md`) — Explains that Cloudflare only serves the build output directory, so evidence must be copied into `products/<lane>/dist/_evidence/<run_id>/`

### Changed

- **Website Kickoff Prompt** (`/infra/prompts/attempt-kickoff/website.md`) — Added "Completion Criteria (Non-Negotiable)" and "Evidence Publishing Rule" sections

### Philosophy

- Cloudflare Pages does NOT serve `/attempts/**` from the repo
- Evidence URLs pointing to `/attempts/**` on a Pages domain are invalid
- Evidence must be copied into `products/<lane>/dist/_evidence/<run_id>/` to be accessible
- The evidence URL is then `/_evidence/<run_id>/EVIDENCE.md` on the preview site

### Notes

- This is an addendum to 0.4.9 (Online Evidence Requirement)
- Together they enforce: push branch + build succeeds + preview URL works + evidence URL works

---

## 0.4.9 — 2026-01-19

**Online Evidence Requirement**

This release makes online evidence a hard requirement for valid attempts. "Works on my machine" is no longer acceptable.

### Added

- **Online Evidence Requirement** (`/canon/odd/appendices/online-evidence.md`) — Defines why attempts without Cloudflare Preview URLs and Evidence URLs are invalid
- **Online Evidence section in Website PRD** — DoD now includes preview URL and evidence URL requirements

### Changed

- **ATTEMPT_KICKOFF.md** — Added "Online Evidence Requirement (Non-Negotiable)" section with explicit invalid conditions
- **BOOTSTRAP.md** — Rewritten to enforce online evidence requirement; agents must report URLs in their first output
- **Website PRD Definition of Done** — Added Cloudflare Preview URL and Evidence URL as required checklist items
- **Canon Index** — Added online-evidence.md to appendices list

### Philosophy

- Local builds are allowed during development but do not satisfy Definition of Done
- If an agent cannot push and produce URLs, the attempt is invalid
- "Works on my machine" is not evidence — it's a prayer
- Evidence must be viewable online without the author running code locally

### Notes

- Cloudflare Pages must be configured with correct build command (`npm run build -- --lane <lane>`)
- Branch naming now includes lane (enforced in 0.4.8) so preview URLs are traceable

---

## 0.4.8 — 2026-01-19

**Lane-Aware Branch Naming & Cloudflare-Compatible Builds**

This release enforces lane-aware branch naming and fixes Vite build paths for Cloudflare compatibility.

### Added

- **Preview Guide** (`/docs/PREVIEW.md`) — Local and Cloudflare preview workflows with troubleshooting
- **Branch validation** in `attempt:register` — Refuses invalid branch prefixes and validates lane inclusion

### Changed

- **smart-build.js** — Uses `cwd` instead of `vite --root` for lane builds (Cloudflare-compatible)
- **attempt-cli.js** — Branch format now includes lane: `run/<lane>/prd-v<prd>/<tool>/<agent>/<model>/<run_id>`
- **attempt:register** — Refuses on `main`/`prod` branches; refuses branches not starting with `run/` or `attempt/`
- **attempt:nuke** — Now requires `.attempt.json` to exist (enforces register-before-nuke workflow)
- **BOOTSTRAP.md** — Expanded with explicit branch format requirements and required reading list
- **ATTEMPT_KICKOFF.md** — Added link to PREVIEW.md in Related Documents

### Philosophy

- Branch naming is no longer optional — tooling enforces lane inclusion
- Build paths use `cwd` instead of `--root` to avoid Cloudflare path resolution issues
- Registration must happen before nuke to ensure provenance is captured

### Notes

- Cloudflare Pages projects must set build command to `npm run build -- --lane <lane>`
- Output directory must be `products/<lane>/dist`

---

## 0.4.7 — 2026-01-19

**Canonical Lane Kickoff Prompts**

This release introduces reusable, in-repo prompt files for attempt kickoffs, eliminating one-off prompt drift.

### Added

- **Website Lane Kickoff** (`/infra/prompts/attempt-kickoff/website.md`) — Canonical kickoff prompt for website lane attempts with locked order, scope guards, and evidence requirements
- **Bootstrap Prompt** (`/infra/prompts/attempt-kickoff/BOOTSTRAP.md`) — Minimal instructions for agents to read the lane kickoff file verbatim

### Changed

- **ATTEMPT_KICKOFF.md** — Added "Canonical Lane Kickoff Prompts" section documenting all lane prompt paths

### Philosophy

- Prompts live in-repo, not in chat history
- One prompt per lane, no one-off variations
- Bootstrap pattern keeps Cursor paste minimal: `Use /infra/prompts/attempt-kickoff/BOOTSTRAP.md, lane = website.`
- Lane kickoff files are canonical and intentionally changed (decision log if needed)

### Notes

- AI-navigation and agent-skill lane kickoff files can be added later using the same pattern
- This is infrastructure for prompt hygiene, not a behavioral change

---

## 0.4.6 — 2026-01-19

**Pre-commit Hook for Content Compilation**

This release adds automated content compilation via a pre-commit git hook, ensuring synced content and book exports stay current with every commit.

### Added

- **Husky** (`husky@9.1.7`) — Git hook management as dev dependency
- **Pre-commit hook** (`.husky/pre-commit`) — Runs content sync and book export before each commit
- **Book export script** (`npm run book`) — Generates `klappy-dev-book-export.md` from all documentation

### Changed

- **package.json** — Added `book` and `prepare` scripts
- **Content frontmatter** — Added missing YAML frontmatter to ensure all intended docs are included in the generated content manifest (eliminates orphan warnings)

### Behavior

On every `git commit`:
1. `npm run sync` runs (copies content to `/public/content/`, generates `manifest.json`)
2. `npm run book` runs (generates `klappy-dev-book-export.md`)
3. Generated files are auto-staged for inclusion in the commit
4. If either script fails, the commit is blocked

---

## 0.4.5 — 2026-01-18

**Canonical Compression Model**

This release introduces the compilation model for producing derived, minimal working models from Source Canon without mutating source truth.

### Added

- **Canonical Compression** (`/canon/odd/appendices/canonical-compression.md`) — Defines how compiled outputs are produced as derived artifacts that are disposable and epoch-scoped
- **Compiled output directory** (`/canon/_compiled/epoch-E0002/`) — Prepared structure for future compilation tooling with warning README
- **Progressive Elevation frontmatter** — Fixed missing frontmatter fields to ensure proper manifest inclusion

### Changed

- **Canon Index** — Added canonical-compression to ODD Appendices list
- **Manifest** — Added canonical-compression and progressive-elevation resource entries

### Philosophy

- Source Canon remains authoritative and unchanged
- Compiled outputs are derived artifacts that can be deleted without loss of truth
- Compression is compilation, not mutation
- Epoch-scoping prevents "half-updated working models" from lingering

### Notes

- Implementation of `canon:compile` tooling is tracked separately
- Compiled outputs live in `_compiled/` and are intentionally wipeable

---

## 0.4.4 — 2026-01-18

**Memory & Portability Model**

This release makes the progressive elevation and decay model explicit, documenting how artifacts move from ephemeral to durable layers.

### Added

- **Progressive Elevation & Decay** (`/canon/odd/appendices/progressive-elevation.md`) — The five layers of portability (Conversation/Attempt, PRD, Contracts, Canon, Decision Trace) and strict elevation criteria
- **Memory Is the Bottleneck** section in ODD Manifesto — Explains how ODD treats durable thinking as scarce and generated artifacts as abundant
- **WHAT_THIS_REPO_IS_NOT.md** (`/docs/WHAT_THIS_REPO_IS_NOT.md`) — Human-facing clarification about what this repository intentionally is not
- **Agentic Memory Portability** project (`/projects/agentic-memory-portability.md`) — Project entry describing the memory portability goal

### Changed

- **ODD Manifesto** — Added "Memory Is the Bottleneck" section before "Relationship to Canon"
- **Canon Index** — Added progressive-elevation.md to ODD Appendices list
- **README** — Added links to WHAT_THIS_REPO_IS_NOT.md and agentic-memory-portability.md under "If You Want to Explore"

### Philosophy

- Most artifacts should decay; only proven patterns that repeatedly reduce drag should elevate
- Documentation sprawl is avoided by intentional decay at the Attempt/PRD layer
- Portability across time, people, and agents requires strict elevation criteria (recurrence, portability, drag reduction, testability)

---

## 0.4.3 — 2026-01-18

**E0002 Convergence: Lane-Scoped Build Output**

This release locks and begins converging the canonical build output truth for E0002 lanes:

> `products/<lane>/dist/` is canonical. Repo-root `/dist` is legacy/transitional.

### Added

- **D0012** — E0002 transition interpretation (truth may lead enforcement; contradictions are tracked)
- **D0013** — Build output truth is lane-scoped (`products/<lane>/dist`)

### Changed

- **Build output interface contract** — MAJOR bump to `build-output@3.0.0` to require lane-scoped output and clarify runtime manifest path (`/content/manifest.json`)
- **Repository topology** — Updated generated output surface to `products/<lane>/dist` (with legacy `/dist` mirror explicitly labeled)
- **Lane build layout** — Updated build artifact references to lane-scoped output

---

## 0.4.2 — 2026-01-17

**Visual Evolution Layer**

This release introduces visual interfaces as a first-class concept, allowing visual systems to evolve independently from products using the same evolutionary model as code.

### Added

- **Visual Evolution** (`/canon/odd/appendices/visual-evolution.md`) — Why visual systems evolve independently from products
- **Visual Interfaces** (`/visual/interfaces/`) — Semver'd visual compatibility contracts
  - `color-system@1.0.0` — Semantic color tokens and accessibility requirements
  - `typography@1.0.0` — Modular type scale and semantic roles
  - `spacing@1.0.0` — Base-8 spacing scale and application rules
- **Repo Truth Audit** (`/canon/odd/appendices/repo-truth-audit.md`) — Prompt for self-referential drift detection across canon, docs, tooling, and structure
- **Visual directory structure:**
  - `/visual/interfaces/` — Visual contracts
  - `/visual/assets/` — Generated outputs (disposable)
  - `/visual/attempts/` — Evolutionary visual exploration

### Changed

- **Website PRD** — Now declares visual interface compatibility (color-system, typography, spacing)
- **Canon Index** — Added visual evolution, drift checks, and lane build layout to appendices list

### Philosophy

- Visual consistency is a property of contracts, not code
- Products consume visual interfaces, they do not define colors/fonts/spacing directly
- Visual attempts compete; only champions advance interface versions
- Visual systems can evolve faster than products without invalidating experiments

---

## 0.4.1 — 2026-01-17

**Interface Contracts + Semver Layer**

This release introduces explicit interface contracts with semantic versioning, documenting the compatibility promises that lanes depend on.

### Added

- **Interface Contracts** (`/interfaces/index.md`) — Semver'd compatibility layer
  - `manifest@2.0.0` — Manifest schema and semantics contract
  - `build-output@1.0.0` — Deployment artifact shape contract
  - `attempt-cli@2.0.0` — CLI surface and output artifacts contract
  - `mcp@0.1.0` — Draft MCP surface contract (not yet enforced)
- **Lane Build Layout** (`/canon/odd/appendices/lane-build-layout.md`) — How lanes avoid /src and /dist collisions
- **Drift Checks** (`/canon/odd/appendices/drift-checks.md`) — Drift prevention mechanism and verify:contracts placeholder

### Changed

- **Lane PRDs** — Each PRD now declares required interface contracts:
  - Website: manifest>=2.0.0, build-output>=1.0.0, attempt-cli>=2.0.0
  - AI-Navigation: manifest>=2.0.0, build-output>=1.0.0, attempt-cli>=2.0.0, mcp@0.1.x (unstable)
  - Agent-Skill: manifest>=2.0.0, attempt-cli>=2.0.0 (no build-output required)
- **Docs** — Added interface contract and lane-build-layout links to:
  - `/docs/ATTEMPTS.md`
  - `/docs/ATTEMPT_KICKOFF.md`
  - `/docs/CLOUDFLARE_CONFIG.md`

### Notes

- Interface contracts are the only documents that use semver by default
- Lanes must remain compatible with declared contracts or bump major versions
- `verify:contracts` command defined but not yet implemented

---

## 0.4.0 — 2026-01-17

**ODD Contract 2.0.0 — Multi-Lane Era**

This release introduces the multi-lane PRD architecture, epochs for comparability, alignment reviews for drift detection, and lane-scoped implementation surfaces. This is a breaking change from the single-PRD model.

### Added

- **ODD Contract 2.0.0** (`/canon/odd/contract.md`) — Single source of ODD system versioning
- **Epochs** (`/canon/odd/appendices/epochs.md`) — Named periods where success meaning is stable
- **Alignment Reviews** (`/canon/odd/appendices/alignment-reviews.md`) — Periodic evaluation for drift detection
- **Product Lanes** (`/canon/odd/appendices/product-lanes.md`) — Multi-lane PRD architecture
- **Lane-Scoped Implementation Surfaces** (`/canon/odd/appendices/lane-implementation-surfaces.md`) — Each lane owns `products/<lane>/src` and `products/<lane>/dist`
- **Decision Logs:**
  - D0009: Multi-lane PRD architecture
  - D0010: Canonical agent kickoff (`AGENT_KICKOFF.md`)
  - D0011: ODD Contract 2.0.0 declaration
- **Lane PRD directories:**
  - `/docs/PRD/website/PRD.md`
  - `/docs/PRD/ai-navigation/PRD.md`
  - `/docs/PRD/agent-skill/PRD.md`
- **Lane implementation surfaces:**
  - `/products/website/src/`
  - `/products/ai-navigation/src/`
  - `/products/agent-skill/src/`

### Changed

- **Attempt CLI** — Now lane-scoped:
  - `attempt:nuke` requires `--lane`, only deletes `products/<lane>/src`
  - `attempt:register` requires `--lane`, includes `lane_root`, `dist_dir`, `epoch_id` in META.json
- **META.json schema** — Now includes `lane`, `lane_root`, `dist_dir`, `epoch_id`
- **Cloudflare config** — Lane-root deployments (`products/<lane>` as root directory)
- **ATTEMPTS.md** — Lane-scoped folder structure and paths
- **ATTEMPT_KICKOFF.md** — Lane-scoped nuke/build commands
- **AGENT_KICKOFF.md** — Lane and epoch declaration required at Step 0

### Epochs

| Epoch | Contract | Description |
|-------|----------|-------------|
| E0001-single-prd-era | 1.x | Single PRD world (`/docs/PRD.md`) |
| E0002-multi-lane-era | 2.x | Multi-lane world (`/docs/PRD/<lane>/PRD.md`) |

### Breaking Changes

- Single active PRD rule removed
- Lane declaration required for all attempts
- Epoch declaration required in META.json
- Repo-root `/src` and `/dist` are no longer product surfaces
- Attempts stored under `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/` (lane-contained)

### Notes

- Do not compare outcomes across epochs without explicit adjustment
- Canon is shared across lanes; PRDs and attempts are lane-scoped
- Each lane is an independent product with its own evolutionary track

---

## 0.3.1 — 2026-01-17

### Changed

- Content metadata now lives in per-file YAML frontmatter (source of truth).
- `/public/content/manifest.json` is now generated during `npm run sync` from frontmatter + `/canon/meta/pack.json`.
- `canon/meta/manifest.json` has been removed to prevent metadata drift.
- The renderer strips frontmatter before rendering markdown content.

### Notes

- `npm run verify:content` now validates the generated manifest coverage against `/public/content/`.

---

## 0.3.0 — 2026-01-17

### Added

- **Decision Log** (`/canon/odd/decisions/`) — ADR-lite structure for durable decisions
  - D0001: `prod` branch is production
  - D0002: Attempt provenance required (tool, agent, model)
  - D0003: PRD version auto-detection
  - D0004: Cleanup is mandatory
  - D0005: Nuke command safety guards
  - D0006: Dogfooding requirement
  - D0007: Branch names are convenience
  - D0008: Register before nuke
- **Truth Map** (`/docs/TRUTH_MAP.md`) — authoritative source index

### Changed

- **Production model:** `prod` branch is production, `main` is experiment ledger (D0001)
- **Attempt lifecycle:** Register → Nuke → Build → Finalize → Promote
- **Provenance:** META.json now captures tool, agent_id, model, run_id, branch, prd_version
- **Collision avoidance:** Numbers assigned at finalization, not reserved upfront

### Deprecated

- `ATTEMPT_REGISTRY.json` — replaced by `attempt:finalize` deterministic numbering
- `attempt:reserve` — replaced by `attempt:register` (captures provenance)
- `attempt:reset` — replaced by `attempt:nuke` (explicit blank slate)
- "main is production" language — `prod` is now production

### Notes

- This release eliminates the "three eras" confusion and establishes one coherent model.
- See `/docs/TRUTH_MAP.md` for authoritative source identification.
- See `/canon/odd/decisions/` for the rationale behind each decision.

---

## 0.1.5 — 2026-01-16 (Superseded by 0.3.0)

### Added

- **Worktrees and learnings model** (`/canon/odd/appendices/attempt-lifecycle.md`)
  - Worktrees are disposable sandboxes, learnings are repo-state
  - Learnings payload requirement (artifacts + PRD patches)
- **Artifacts always merge rule**
  - Failed attempts contribute learnings via artifacts merge
  - Two merges: artifacts (always) + code (only Champion)
- ~~**Attempt registry mechanism** (`ATTEMPT_REGISTRY.json`)~~ — **DEPRECATED in 0.3.0**
- ~~**Fresh start requirement** (`attempt:reset`)~~ — **DEPRECATED in 0.3.0**, use `attempt:nuke`

### Notes

- ⚠️ This version's registry/reserve model has been superseded by register/finalize in 0.3.0.

---

## 0.1.4 — 2026-01-16

### Added

- **Champion selection and promotion policy** (`/canon/odd/appendices/attempt-lifecycle.md`)
  - Defines how one attempt graduates from experiment to production
  - Minimum gates, tie-breakers, and promotion procedure
  - Winner declaration snippet for ATTEMPT.md
- **Promotion script** (`npm run attempt:promote`) for automated Champion workflow

### Changed

- Attempt Lifecycle: CHAMPION status + META.json promotion fields (`/canon/odd/appendices/attempt-lifecycle.md`)
- Quantum Development: grounding line that experiments end with promotion (`/canon/odd/appendices/quantum-development.md`)

### Notes

- This release closes the loop on Quantum Development: observations without promotion are incomplete experiments.
- ⚠️ Note: As of 0.3.0, `prod` is the production branch. `main` is the experiment ledger.

---

## 0.1.3 — 2026-01-16

### Added

- Cloudflare branch deploys infra note (`/docs/infra/cloudflare-branch-deploys.md`)
- Attempts doc: "PRD as the Unit of Test" (procedural) (`/docs/ATTEMPTS.md`)
- Attempt Lifecycle: "PRD as the Unit of Test" + "Independence: goal vs infrastructure" (`/canon/odd/appendices/attempt-lifecycle.md`)

### Changed

- Decision Rules: "Prefer one-shot builds; don't steer a miss" and "Don't hard-code domain tables; hard-code protocol contracts" (`/canon/decision-rules.md`)
- Quantum Development: cross-link to PRD-as-unit-of-test framing (`/canon/odd/appendices/quantum-development.md`)
- Active PRD: requires infra artifact when deploy behavior is in scope; adds attempt independence enforcement (`/docs/PRD.md`)

### Notes

- This release encodes transcript-derived learnings as rules and procedures, while avoiding operationally irrelevant or sensitive details.

---

## 0.1.2 — 2026-01-16

### Added

- Quantum Development appendix (`/canon/odd/appendices/quantum-development.md`)
- Attempt Kickoff prompt (`/docs/ATTEMPT_KICKOFF.md`)
- Agent Entry Point (`/docs/AGENT_ENTRYPOINT.md`)
- Single active PRD (`/docs/PRD.md`)

### Changed

- Canon Index: explicit “single active PRD” policy (`/canon/index.md`)
- Attempt Lifecycle: cross-link to the single kickoff prompt (`/canon/odd/appendices/attempt-lifecycle.md`)
- Attempts documentation updated to reflect single active PRD + kickoff prompt (`/docs/ATTEMPTS.md`)
- PRD template updated to reflect single active PRD policy (`/docs/PRD/PRD_TEMPLATE.md`)

### Removed

- Versioned PRDs from the main docs surface (`/docs/PRD/PRD_v*.md`) in favor of `/docs/PRD.md`

### Notes

- This release reduces PRD and prompt sprawl by making the active PRD and kickoff prompt uniquely authoritative.

---

## 0.1.1 — 2026-01-15

### Added

- Attempt Lifecycle appendix (`/canon/odd/appendices/attempt-lifecycle.md`)
- Repository Topology appendix (`/canon/odd/appendices/repo-topology.md`)
- PRD Template (`/docs/PRD/PRD_TEMPLATE.md`)

### Established

- PRD → Attempt → Evidence model
- Decoupled infrastructure from truth (SHA is canonical, deploys are views)
- Three planes: App (disposable), Content (accumulates), Infrastructure (persists)
- Four core principles including "Deployments are views, not truth"

### Notes

- This release stabilizes the process model itself, not just content.
- Future PRDs and attempts will stress-test this structure.
- Operational procedures live in `/docs/ATTEMPTS.md`, not Canon.

---

## 0.1.0 — 2026-01-15

### Added

- Canon Index (`/canon/index.md`) as the orientation entrypoint.
- Core canon documents:
  - Constraints
  - Decision Rules
  - Definition of Done & Evidence Policy
  - Self-Audit Checklist
  - Visual Proof Standards
  - Completion Report Template
- ODD canon set:
  - ODD Manifesto — Extended
  - Project Maturity & Progressive Governance
- ODD appendices:
  - Misuse Patterns
  - Prompt Architecture
  - Orientation Map
- About pages:
  - Bio
  - Credibility
  - FAQ
- Content manifest (`/public/content/manifest.json`) generated from per-file frontmatter (stable URIs).

### Notes

- The manifest is inventory-only: it declares what exists and how it may be addressed.
- Any future workflow semantics belong in clients or tools, not in this pack.


---

## Completion Report Template

*Source: `canon/completion-report-template.md`*


# Completion Report Template

> The standard format for claiming work is complete.

## Description

The completion report template is the mandatory output format for claiming completion. It ties together the Definition of Done, Self-Audit, and Visual Proof Standards into a single, reviewable artifact. Reports must include task overview, intended outcome, what changed, verification performed, observed behavior, evidence produced, visual proof (if applicable), self-audit summary, confidence and gaps, exceptions or notes, and a completion declaration. Reports may be brief but must be honest. If the report is unclear, the work is unclear.

## Outline

- Task Overview
- Intended Outcome
- What Changed
- Verification Performed
- Observed Behavior
- Evidence Produced
- Visual Proof (If Applicable)
- Self-Audit Summary
- Confidence & Gaps
- Exceptions or Notes
- Completion Declaration

---

## Content

**Canon v0.1**

> This is the standard output format humans and agents must use to claim completion. It ties together the Definition of Done, Self-Audit, and Visual Proof Standards into a single, reviewable artifact.

This template defines how completed work must be reported.
If a task does not have a completion report following this structure, it is not complete.

This report may be brief, but it must be honest.

---

## 1. Task Overview

- **Task name:**
- **Date:**
- **Status:** Complete / Partially Complete / Not Complete

**Short description:**
What this task was intended to do (1–2 sentences).

---

## 2. Intended Outcome

What outcome was this work meant to achieve?

How would someone know, by observation, that the outcome was achieved?

---

## 3. What Changed

List the concrete changes made.

Examples:
• files modified
• components added or removed
• behavior changed

Be specific but concise.

---

## 4. Verification Performed

What was run or exercised to verify the work?

Examples:
• dev server started
• page loaded
• interaction performed
• tests executed
• offline scenario simulated

If verification was not performed, state why.

---

## 5. Observed Behavior

What actually happened when the system was run?

Describe observed behavior, not expected behavior.

---

## 6. Evidence Produced

List the evidence that proves the observed behavior occurred.

Examples:
• Screenshot: link or reference
• Screen recording: link or reference
• Rendered output: file name
• Logs or test output: location

Each item must be labeled with what it demonstrates.

---

## 7. Visual Proof (If Applicable)

If the work affects UI or interaction:
• What visual proof was captured?
• What does it show?
• Is there before/after evidence?

If visual proof could not be produced, explain why.

---

## 8. Self-Audit Summary

Briefly summarize the self-audit:
• Constraints applied
• Decision rules followed
• Tradeoffs made
• Risks or unknowns remaining

One sentence per item is sufficient.

---

## 9. Confidence & Gaps

How confident am I that this works as intended?

What would increase confidence further?

---

## 10. Exceptions or Notes

Note any:
• deviations from defaults
• known limitations
• follow-up work required

---

## ✅ Completion Declaration

I consider this task:
• ☐ Complete
• ☐ Partially Complete
• ☐ Not Complete

Reason (if not complete):

If marked complete, all required evidence and self-audit items are present.

---

## 🤖 Agent Expectations

Agents are expected to:
• produce this report before claiming completion
• refuse to mark tasks complete without evidence
• clearly mark partial or incomplete work

Completion is a claim that must be justified.

---

## 💡 Closing Note

This template exists to:
• replace repeated QA questions
• surface problems early
• make review fast and objective

If the report is unclear, the work is unclear.

---


---

## Constraints

*Source: `canon/constraints.md`*


# Constraints

> Design defaults and assumptions that shape how systems are built.

## Description

Constraints define the baseline assumptions and design defaults applied to most work. They cover offline-first design, long-term maintainability, interoperability, stateless architectures, AI as accelerator (not authority), evidence over assertion, contextual UX, ephemeral artifacts, explicit tradeoffs, and lane self-containment. Each constraint includes what is assumed, why it matters, what it forces, and when it does not apply. These are not universal best practices but reflect specific environments and problems.

## Outline

- Offline-First (Default)
- Long Timelines & Changing Ownership
- Maintainability Over Cleverness
- Interoperability Over Feature Completeness
- Stateless or Low-State by Default
- AI as Accelerator, Not Authority
- Evidence Over Assertion
- UX Is Contextual, Not Universal
- Ephemeral Artifacts Are Acceptable
- Explicit Tradeoffs
- Lane Self-Containment

---

## Operating Constraints

- MUST design for offline-first unless explicitly stated otherwise; core functionality must work without network
- MUST treat AI as accelerator, not authority; this constraint is always in effect with no exceptions
- MUST verify work with evidence; assertions like "it works" are insufficient
- MUST keep lane artifacts self-contained within `products/<lane>/`; no cross-directory dependencies
- MUST make tradeoffs explicit and visible; every decision excludes alternatives
- MUST assume systems will outlive original creators and change hands

---

## Defaults

- Assume network is unreliable; data stored locally first, sync is opportunistic
- Prefer simple, boring, maintainable solutions over clever ones
- Prefer open formats, loose coupling, and clear interfaces over feature completeness
- Prefer stateless or low-state architectures; explicit state boundaries when state is needed
- Prefer ephemeral artifacts with durable principles; focus on outcomes over repos
- Prefer context-specific UX decisions over universal patterns

---

## Failure Modes

- **Hidden State**: Global state, implicit lifecycle, or "reaching for" state instead of passing it
- **Tribal Knowledge**: Systems that require undocumented expertise to operate or maintain
- **Clever Code**: Solutions that only the original author understands
- **Tight Coupling**: Small changes causing widespread breakage; teams blocked on shared components
- **AI as Oracle**: Treating unverified AI output as authoritative truth
- **Scattered Lanes**: Lane artifacts spread across directories, causing incomplete context and drift

---

## Verification

- System works without network (for offline-first requirements)
- Evidence produced demonstrates actual behavior, not assertion
- Tradeoffs documented with explicit acknowledgment of downsides
- Lane can be understood by reading only its `products/<lane>/` directory
- Next maintainer (who is not the author) can understand and modify the system

---

## Content

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

## 11. Lane Self-Containment

I require product lanes to be self-contained units.

**Why this matters**

When lane artifacts are scattered across directories:
• Agents load incomplete context
• Documentation drifts from implementation
• Lanes cannot be moved, archived, or reasoned about as units
• "Where does X live?" becomes a recurring question

**What this forces**
• PRD, README, attempts, src, and all lane artifacts live within `products/<lane>/`
• No cross-directory dependencies for lane-specific content
• A lane can be understood by reading only its directory
• If creating lane artifacts outside the lane folder, stop and reconsider

**When this does not apply**
• Shared canon (which lanes reference but do not own)
• Cross-lane tooling (which is lane-agnostic by design)
• Legacy paths being migrated (must be documented and time-boxed)

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

## Decision Rules

*Source: `canon/decision-rules.md`*


# Decision Rules

> Heuristics for choosing between valid options when designing systems.

## Description

Decision rules describe how decisions are made when multiple valid options exist. They complement Constraints by answering "how I choose." Rules include: outcomes before implementation, borrow-bend-break-build progression, KISS, DRY with isolation, explicit state, recoverability over perfection, visible tradeoffs, optimizing for the next maintainer, UI carrying explanation, verification before completion, escalation only when defaults fail, admitting uncertainty early, preferring one-shot builds over steering misses, and hard-coding protocols (not domain tables).

## Outline

- Outcomes Before Implementation
- Borrow, Bend, Break, Build
- Simplicity Wins (KISS)
- DRY, But Not at the Cost of Isolation
- Prefer Explicit State
- Favor Recoverability Over Perfection
- Make Tradeoffs Visible Early
- Optimize for the Next Maintainer
- UI Should Carry the Explanation
- If It Cannot Be Verified, It Is Not Done
- Escalate Only When Defaults Fail
- Say "I Don't Know" Early
- Prefer One-Shot Builds
- Hard-Code Protocols, Not Domain Tables

---

## Operating Constraints

- MUST define outcome before choosing tools, architecture, or code
- MUST follow Borrow → Bend → Break → Build progression; building from scratch requires explicit justification
- MUST choose simplest solution that plausibly works; add complexity only when simplicity demonstrably fails
- MUST NOT consider work complete unless it is verified with evidence
- MUST prefer one-shot builds over steering multi-turn misses; fix inputs and restart clean
- MUST name tradeoffs as part of design, not as postmortem

---

## Defaults

- Start with defaults and escalate only when necessary
- Admit uncertainty early rather than pretending confidence
- Optimize for the next maintainer, not personal preference
- Allow duplication across bounded contexts; extract shared logic only when reuse is proven
- Prefer restartable, replayable processes over perfect but fragile ones
- Hard-code protocol contracts (types, schemas, states); avoid hard-coding domain tables

---

## Failure Modes

- **Outcomes After Implementation**: Building impressive solutions with unclear purpose or missing success criteria
- **Premature Building**: Reinventing stable, well-understood tools; forking without maintenance plan
- **Overengineering**: Complex solutions to simple problems; explanations longer than code
- **Steering a Miss**: "Just one more tweak" turning into extended multi-turn patching
- **Hidden Tradeoffs**: Decisions feeling arbitrary in hindsight; future changes requiring archaeology
- **Confidence Without Verification**: Bugs discovered by users instead of builders

---

## Verification

- Outcome is defined before implementation begins
- Simplest plausible solution was attempted first
- Evidence shows observed behavior, not just reasoning
- Tradeoffs documented with explicit downsides acknowledged
- System can be reproduced from a clean start without the original author's guidance

---

## Content

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
• The system “works” but doesn’t help anyone

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
• “Just one more tweak” turns into extended steering
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
• If it’s “data,” I prefer it to live in content, configuration, or a source of truth
• If it's "interface," I prefer it to be explicit and enforced in code

**Signals this rule was violated**
• Large in-code tables that drift from reality (e.g., enumerations maintained by hand)
• Domain updates require redeploys without justification
• Integrations fail because the “contract” was implicit or inconsistent

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

## Models Do Not Mutate Canon

*Source: `canon/decisions/models-do-not-mutate-canon.md`*


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

## Operating Constraints

- MUST NOT allow models to write changes directly to Canon files
- MUST allow models to read, analyze, summarize, and report on Canon
- MUST allow models to draft proposed changes for human review
- MUST require human review and approval for all Canon mutations
- MUST treat Canon as human-governed truth, not generated artifact

---

## Defaults

- Models draft, humans commit
- When a model detects a Canon error, report it rather than fix it
- Treat any model attempt to edit Canon as a boundary violation
- Prefer slower Canon updates over model-driven drift

---

## Failure Modes

- **Direct Mutation**: Model writes to Canon files, bypassing human review
- **Subtle Drift**: Well-meaning model edits introduce gradual inaccuracy
- **Accountability Gap**: No human responsible for model-introduced changes
- **Authority Erosion**: Canon becomes "just another generated file" when models edit freely
- **Approval Theater**: Rubber-stamping model changes without genuine review

---

## Verification

- No commits to Canon files have model as author without human approval
- Canon changes are traceable to human decisions
- Models produce drafts and reports, not direct mutations
- Boundary is enforced in tooling and process, not just policy

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


---

## Definition of Done & Evidence Policy

*Source: `canon/definition-of-done.md`*


# Definition of Done & Evidence Policy

> The enforcement backbone that defines what "complete" means.

## Description

This policy defines completion requirements for all work: code, UI, architecture, automation, and AI-assisted outputs. Work is only done when it includes a change description, verification performed, observed behavior, evidence produced, and self-audit completed. Evidence must demonstrate actual behavior (screenshots, recordings, rendered output, test logs) and be produced after the change. Visual verification is required for UI work. The policy covers partial completion handling, explicit exceptions, and agent responsibilities.

## Outline

- Core Principle: Verified with evidence
- Definition of Done (5 requirements)
- Evidence Requirements
- Visual Verification (Preferred)
- Verification Must Be Performed
- Self-Audit Requirement
- What Does Not Count as Done
- Partial Completion
- Explicit Exceptions
- Agent Responsibility

---

## Operating Constraints

- MUST include all 5 DoD requirements: Change Description, Verification Performed, Observed Behavior, Evidence Produced, Self-Audit Completed
- MUST produce evidence after the change, not before or from previous runs
- MUST demonstrate actual behavior, not expected or intended behavior
- MUST provide visual proof for any work affecting UI, interaction, layout, or visible state
- MUST NOT claim "done" without evidence; the correct response is "This is not complete yet"
- MUST label partial completion explicitly with what was verified and what remains

---

## Defaults

- When uncertain whether evidence is needed: include it
- Short recordings (10-30 seconds) are usually sufficient for interaction work
- Self-audit should be brief reflection, not bureaucracy
- If evidence cannot be produced, state why and propose an alternative
- Treat ambiguity as worse than incompleteness

---

## Failure Modes

- **"It compiles"**: Treating successful compilation as completion
- **"The logic is sound"**: Treating reasoning as substitute for verification
- **"This should work"**: Treating confidence as evidence
- **"I reviewed the code"**: Treating inspection as observation of behavior
- **"I didn't have time to test"**: Treating explanation as exemption from evidence

---

## Verification

- System was actually run or exercised (dev server, tests, page load, workflow trigger)
- Evidence shows actual observed behavior (screenshots, recordings, test logs, DOM snapshots)
- Evidence is specific to the task and clearly labeled
- Self-audit includes: intended outcome, constraints applied, decision rules followed, tradeoffs, remaining risks

---

## Content

**Canon v0.1**

> This is the enforcement backbone of the canon. It replaces repeated QA reminders with a clear, reusable contract.

This page defines what I mean when I say work is “done.”
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
Assertions like “this should work” or “this is correct” do not count as completion.

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
• “It compiles”
• “The logic is sound”
• “I reviewed the code”
• “This should work”
• “I didn’t have time to test”

These may be intermediate states, but they are not “done.”

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

In those cases, the output must be clearly labeled “unverified”.

---

## 🤖 Agent Responsibility

Agents and collaborators are expected to:
• retrieve this policy before claiming completion
• translate it into neutral/system requirements
• enforce it against their own output
• refuse to claim “done” without evidence

If evidence cannot be produced, the correct response is:

“This is not complete yet.”

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

## Agent-Executable Documentation Outline

*Source: `canon/documentation/agent-executable-outline.md`*


# Agent-Executable Documentation Outline

> Supplement human-readable documentation with decision leverage.

## Purpose

This outline defines **agent-useful sections** that may be added where appropriate.
It supplements catalog information without replacing it.

Only documents intended to influence behavior should use this structure fully.

---

## Section Contracts

### Subtitle — Trigger + Scope
**One sentence.**
When does this apply? What decision does it govern?

Good:
> "Use when validating user-visible changes; screenshots alone can falsely signal success."

---

### Description — Decision Model
1–2 short paragraphs.
What decision does this document govern?
What invariant must hold?
What goes wrong if ignored?

This is a compressed stance, not a catalog summary.

---

### Operating Constraints
Non-negotiables.
Use MUST / MUST NOT / NEVER.
No prose.

---

### Defaults
What to do when uncertain.
Heuristics, not rules.

---

### Failure Modes
Named traps you've actually seen.
Concrete and specific.

---

### Verification
What counts as "done."
Evidence required.
Unacceptable substitutes.

---

### Summary
Working-memory compression.
No history.
At least one testable heuristic.

---

### Examples
Minimal.
Good vs bad preferred.

---

### Background / Rationale
Optional.
Human-first.
Not required for execution.

---

### Related
Explicit links only.
No explanation.

---

## Applicability by Execution Posture

- Governing: most sections expected
- Operational: subset expected
- Exploratory: optional, light use
- Routing: usually omitted

---

## Final Rule

> **If a section would be forced, omit it deliberately.**

---

## Operating Constraints

- MUST use MUST/MUST NOT/NEVER in Operating Constraints, not prose
- MUST name Failure Modes concretely after traps actually observed
- MUST specify evidence requirements in Verification, not just outcomes
- MUST NOT fill sections just to satisfy tooling; omit deliberately instead
- MUST keep sections short (3-5 bullets typical); long sections indicate bloat

---

## Defaults

- Start with Subtitle and Operating Constraints only; add others based on observed failures
- Failure Modes are added when agents repeat known mistakes
- Verification is added when agents claim success prematurely
- Defaults are added when agents hesitate on uncertain decisions
- Background is optional and human-first; not required for execution

---

## Failure Modes

- **Form Filling**: Adding sections to satisfy tooling rather than encoding real constraints
- **Prose in Constraints**: Using explanatory sentences instead of actionable MUST/MUST NOT
- **Vague Failure Modes**: Labels without concrete traps (e.g., "Be careful" instead of named mistakes)
- **Outcome-Only Verification**: Stating what "done" looks like without specifying evidence
- **Section Bloat**: Long sections that should be split or moved to background

---

## Verification

- Operating Constraints contain verbs and objects ("MUST include X", "MUST NOT do Y")
- Failure Modes name specific traps observed in practice
- Verification specifies evidence type, not just desired outcome
- Sections are short enough for S-slice extraction (under 2000 chars typically)
- Forced or empty sections were omitted rather than filled with placeholders


---

## Execution Posture

*Source: `canon/documentation/execution-posture.md`*


# Execution Posture

> How strongly a document is expected to govern behavior.

## Summary

Execution posture declares **how executable a document intends to be**.
It prevents forced structure while still enabling agent usefulness.

Documents should be **as executable as they naturally allow — no more, no less**.

---

## Allowed Values

### `governing`
- Defines constraints, rules, or standards
- Expected to change agent behavior
- High extraction value for context packs

### `operational`
- Guides action without strict enforcement
- Playbooks, workflows, how-tos
- Moderate extraction expectations

### `exploratory`
- Thinking tools, essays, design exploration
- Human-first
- Minimal or no executable structure required

### `routing`
- Indexes, maps, glossaries
- Exists to point, not to govern
- Extraction focuses on links and triggers only

---

## Required Frontmatter Field

```yaml
execution_posture: governing | operational | exploratory | routing
```

---

## Governing Principle

Executable structure is an affordance, not a requirement.

If a section would be forced or misleading, it should be omitted intentionally.

---

## Compiler Expectations
- Governing docs: missing executable sections should WARN
- Operational docs: missing sections may WARN
- Exploratory and routing docs: missing sections are expected

Compilers must never auto-generate content.

---

## Operating Constraints

- MUST declare execution_posture in frontmatter for all documents
- MUST NOT force executable structure on exploratory or routing documents
- MUST NOT auto-generate content to satisfy compiler requirements
- MUST treat executable structure as an affordance, not a requirement
- MUST omit sections deliberately if they would be forced or misleading

---

## Defaults

- When uncertain about posture, start with operational and upgrade to governing based on observed impact
- Governing docs expect most required sections; operational expects a subset
- Exploratory and routing docs may omit executable sections entirely
- Compilers warn but do not block on missing sections

---

## Failure Modes

- **Forced Structure**: Adding sections that don't apply just to satisfy tooling
- **Posture Inflation**: Marking documents as governing when they're actually operational
- **Auto-Generation**: Compilers filling in missing sections with generated content
- **Template Cargo Cult**: Copying section headings without meaningful content
- **Exploratory Suppression**: Forcing executable structure on thinking-tools and essays

---

## Verification

- execution_posture is declared in frontmatter
- Section presence matches declared posture expectations
- Forced or empty sections have been deliberately omitted
- Compilers emit warnings, not errors, for missing sections
- No auto-generated content in executable sections


---

## Slice Contract: S / M / L

*Source: `canon/documentation/slice-contract-sml.md`*


# Slice Contract: S / M / L

> How much to extract from each included topic.

## Summary

S/M/L define **extraction depth per topic**, not topic inclusion.

Topic inclusion is controlled by `relevance`.
Extraction depth is controlled by slice size.

---

## Required Headings (when applicable)

Documents with `relevance: decision` are expected to use these headings where appropriate:

- `## Operating Constraints`
- `## Defaults`
- `## Failure Modes`
- `## Verification`

Recommended:
- `## Summary`
- `## Examples`
- `## Related`

---

## Slice Definitions

### S — Execution Slice
Extract:
- Title
- Subtitle
- Description
- Operating Constraints
- Defaults
- Failure Modes
- Verification

Purpose: change behavior immediately.

---

### M — Execution + Correctness
Extract:
- Everything in S
- Summary
- Examples (if present)

Purpose: reduce errors and misapplication.

---

### L — Full Topic
Extract:
- Everything in M
- Any additional background or rationale sections

Purpose: deep understanding and auditability.

---

### XL — Book Export
- Entire document
- No slicing
- Not intended for execution packs

---

## Rules

- Extraction is structural only (heading-to-heading)
- No summarization or rewriting
- Missing sections are skipped, not fabricated
- Warnings may be emitted for governing docs

---

## Invariant

> **If a slice does not change behavior, it does not belong in S.**

---

## Operating Constraints

- MUST extract S-slices structurally (heading-to-heading), not by summarization or rewriting
- MUST NOT fabricate content for missing sections; skip them instead
- MUST include only behavior-changing content in S-slices
- MUST use relevance to control topic inclusion; use slice size to control extraction depth
- MUST emit warnings for governing docs missing required sections

---

## Defaults

- S-slice extracts: Title, Subtitle, Operating Constraints, Defaults, Failure Modes, Verification
- M-slice adds: Summary, Examples
- L-slice adds: Background, Rationale, any remaining sections
- XL is full document export, not intended for execution packs
- Missing sections are skipped without error for non-governing docs

---

## Failure Modes

- **Fabricated Content**: Generating summaries or filling in missing sections
- **Bloated S-Slices**: Including background or rationale in S when it doesn't change behavior
- **Relevance Confusion**: Using slice size to control inclusion instead of relevance metadata
- **Summarization**: Rewriting content instead of structural extraction
- **Completeness Fetish**: Requiring all sections even when some don't apply

---

## Verification

- S-slice contains only sections that change immediate behavior
- Extraction is verbatim from source headings, not summarized
- Missing sections result in skip, not fabrication
- Governing docs without required sections emit warnings
- Pack size reflects extraction depth, not document length


---

## Tier vs Relevance

*Source: `canon/documentation/tier-vs-relevance.md`*


# Tier vs Relevance

> Two different axes with different purposes. Do not conflate them.

## Summary

This document defines the difference between **tier** and **relevance** metadata.
They solve different problems, apply to different consumers, and must remain independent.

Confusing them leads to bloated context packs, misplaced authority, and degraded agent behavior.

---

## Tier (Human Progressive Disclosure)

**Tier controls how content is surfaced to humans.**

It exists to prevent overwhelm in navigation, indexes, and reading flows.

Tier does **not** imply importance, correctness, or authority.

### Allowed Values

- `tier: 0` — hidden or internal
- `tier: 1` — default surfaced
- `tier: 2` — secondary / discoverable
- `tier: 3` — deep reference / long-form

### Rules

- Tier is UI-facing only
- Tier must never be used to decide context-pack inclusion
- Tier may be omitted on purely agent-facing documents

---

## Relevance (Context Pack Inclusion)

**Relevance controls whether a topic participates in agent context packs.**

It answers: *"Is this topic useful for making or supporting decisions?"*

### Allowed Values

- `decision` — changes what an agent should do next
- `supporting` — improves correctness and judgment
- `background` — provides understanding, narrative, or rationale
- `routing` — helps find other content

### Rules

- Relevance is execution-facing
- Relevance does not imply truth ranking
- A document must explicitly declare relevance
- Relevance is evaluated per topic/file, not per heading

---

## Hard Rule

> **Tier controls visibility. Relevance controls usability.  
> They must never substitute for each other.**

---

## Common Mistakes

- Treating `tier: 1` as "important for agents"
- Using numeric tiers to encode execution depth
- Inferring relevance from tier automatically

If any of the above occur, fix the metadata — not the compiler.

---

## Operating Constraints

- MUST NOT use tier to decide context-pack inclusion; use relevance instead
- MUST NOT infer relevance from tier automatically
- MUST declare relevance explicitly on each document
- MUST keep tier and relevance as independent axes
- MUST fix metadata errors, not compiler behavior, when conflation occurs

---

## Defaults

- Tier defaults to 2 (secondary/discoverable) when not specified
- Relevance defaults to supporting when not specified
- When uncertain whether content is decision-grade, start at supporting and upgrade based on observed impact
- Treat tier as UI-facing only; treat relevance as execution-facing only

---

## Failure Modes

- **Tier as Agent Signal**: Using tier: 1 to mean "important for agents"
- **Numeric Depth Encoding**: Using tier numbers to encode execution priority
- **Automatic Inference**: Deriving relevance from tier programmatically
- **Axis Conflation**: Treating visibility and usability as the same concern
- **Pack Bloat**: Including content in context packs based on tier instead of relevance

---

## Verification

- Context pack inclusion is determined by relevance, not tier
- Tier assignment reflects human navigation needs only
- Relevance assignment reflects agent decision-making needs only
- Metadata explicitly declares both values when both apply
- Changes to tier do not affect context pack composition


---

## Epistemic Obligation and Document Tiers

*Source: `canon/epistemic-obligation-and-document-tiers.md`*


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
- Tier 0: Scope Exclusion (Not a Tier)
- Tiers Are Not Importance

---

## Operating Constraints

- MUST absorb Tier 1 content fully before proceeding; contradiction is a serious error
- MUST respect Tier 2 content by default; deviation requires documented justification
- MUST NOT conflate tier with importance; tiers describe epistemic obligation, not value
- MUST NOT use Tier 0 as "low importance"; Tier 0 is scope exclusion from the epistemic system entirely
- MUST treat tiers as orthogonal to folders; any folder may contain documents at any tier

---

## Defaults

- Tier 1: absorb fully, do not contradict, do not reinterpret without explicit justification
- Tier 2: follow by default, document deviations, respect unless explicitly overridden
- Tier 3: reference when relevant, may ignore when not applicable, free to rebuild
- Tier 0: exclude from agent context, exclude from context-packs, not comparable to Tier 1-3
- When uncertain about tier assignment, ask: "How much must I internalize this before proceeding?"

---

## Failure Modes

- **Tier as Importance**: Treating Tier 1 as "most important" and Tier 3 as "least important"
- **Ignoring Relevant Tier 3**: Skipping Tier 3 content that matters for specific execution
- **Over-weighting Tier 1**: Applying Tier 1 content when it doesn't apply to current task
- **False Elevation**: Putting low-obligation content at Tier 2, creating false urgency
- **Tier 0 Confusion**: Treating Tier 0 as low-obligation rather than scope-excluded

---

## Verification

- Tier assignment reflects epistemic obligation, not perceived importance
- Tier 1 content is stable, rarely changed, and contradictions are treated as serious errors
- Tier 2 deviations are documented with explicit justification
- Tier 0 content is excluded from agent reasoning and context-packs
- Folder placement and tier assignment are independent decisions

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

### Tier 0: Scope Exclusion (Not a Tier)

Tier 0 is not part of the epistemic tier system. It is a scope exclusion marker.

Content marked Tier 0 is:

- Public-facing and intended for human readers
- Excluded from agent reasoning contexts
- Excluded from default context-packs
- Not comparable to Tier 1–3 content

Tier 0 is not "lower obligation than Tier 3." It is outside the epistemic ladder entirely.

**Use Tier 0 for:** About pages, marketing content, visitor-facing explanations—content that exists for humans, not for systems reasoning about the repository.

**Do not confuse:** Tier 0 with Tier 3. Tier 3 is low-obligation content within the epistemic system. Tier 0 is excluded from the epistemic system altogether.

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


---

## Tool Specialization

*Source: `canon/odd/appendices/tool-specialization.md`*


# Tool Specialization

> A general pattern for preserving reliability as tool availability increases.

## Description

When systems accumulate many tools or actions, generalist reasoning becomes
unreliable. The Tool Specialization pattern isolates tool usage behind narrowly
scoped reasoning units, reducing decision complexity while preserving capability.

This pattern captures invariants and tradeoffs without prescribing a specific
implementation.

## Outline

- Context
- The pattern
- Invariants
- Tradeoffs
- Non-goals

---

## Context

This pattern emerges when adding tools increases confusion, misfires, or decision
paralysis instead of effectiveness.

Typical triggers:
- a growing tool menu that the "main" agent uses inconsistently
- repeated tool misuse despite prompt reminders
- correct tools, wrong selection timing
- tool choice dominates reasoning time

---

## The Pattern

Assign responsibility for a narrow set of tools or actions to a dedicated reasoning
unit with constrained scope and explicit outputs.

The goal is not "smarter" reasoning.
The goal is making tool-use boring and reliable.

---

## Invariants

- Capability grows faster than reliability without isolation
- Isolation precedes orchestration
- Specialization reduces decision load, not intelligence
- Outputs must be explicit and promotable

---

## Tradeoffs

- Increased coordination overhead
- Additional interfaces to maintain
- Risk of premature specialization if created before pressure is visible

---

## Non-goals

This pattern does not define:
- an agent framework
- a required topology
- how sub-agents are implemented in any specific repo

---

## See Also

- [Cognitive Partitioning](/odd/cognitive-partitioning.md) — Universal concept
- [Canonical Compression](/docs/appendices/canonical-compression.md) — Reduce reasoning surface area (context limits)


---

## Bulldoze the App, Keep the Blueprint

*Source: `canon/principles/bulldoze-but-keep-the-blueprint.md`*


# Bulldoze the App, Keep the Blueprint

> **When code stops being the scarce resource**

---

Imagine spending three hard months building a custom house.

You hire the contractors. You pour the foundation. You frame the walls. The paint dries. You stand back and think: *okay, I can imagine living the rest of my life here.*

Then the architect walks in, looks around, nods, and says:

> "Great. Bulldoze it."

In the physical world, that's absurd.  
You don't bulldoze a perfectly good house. You sue someone.

But then the architect adds:

> "The house wasn't the point. The blueprint was. Now that we have it, we can build the real one in about ten minutes."

That idea sounds irresponsible when applied to buildings.

It sounds less crazy once you've felt the ground shift under software development in the last year—especially if you're building tools where being wrong has real consequences.

Because AI didn't just make coding faster.

It changed what's scarce.

Code generation is no longer the primary bottleneck.  
**Intent is. Trust is. Evidence is.**

So here's the framing question, grounded in real Bible translation (BT) tool work:

> **What changes when the asset stops being the code—and becomes the blueprint that makes regeneration safe?**

By *blueprint*, this does **not** mean diagrams for their own sake.

It means the durable artifacts that survive deletion:

- intent (what we are trying to accomplish)
- constraints (what must be true, and what must never happen)
- decisions (why one path was chosen over another)
- evidence (what proves outcomes match reality)

This is not a universal claim about all software.

But in BT tooling—offline constraints, high trust requirements, messy field realities, and shifting assumptions—this framing keeps reasserting itself.

> **This is the class of learning the ETEN Innovation Lab exists to surface: not finished products, but reusable, durable patterns.**

---

## A Concrete Example: The AAG Risk Dashboard

Late last year, Peter and I worked with **All Access Goals (AAG)** data sourced from multiple systems (Progress.Bible, Rev79, and others).

Peter's initial work was done the right way:
- careful manual analysis
- spreadsheets
- explicit assumptions
- human judgment applied where the data was messy

That work was not "pre-dashboard."

It *was* the truth source.

My responsibility wasn't "build a dashboard."

It was:

> **Make the analysis repeatable.**

So that new exports could regenerate the *same conclusions* without redoing the reasoning by hand.

That shift—from one-time result to repeatable pipeline—is where AI-era pressure shows up.

If a system cannot regenerate reliably, it is not a tool.

It is a report with confidence attached.

---

## When Code Stopped Being the Asset

For most of my career, code *felt* like the asset.

You protect it.  
You polish it.  
You carry it forward like an investment.

AI broke that mental model by collapsing the scarcity underneath it.

When generation becomes cheap:
- variation explodes
- maintenance becomes a permanent tax
- understanding legacy output can cost more than regeneration

At some point, a statement emerges that feels offensive until tested:

> **If it costs less to regenerate the code than to understand it, delete it.**

Not because deletion is virtuous.

Because economics does not care about attachment.

But this raises a real problem:

If code is disposable, what stays?

Answer: what makes regeneration safe.

- testable requirements
- verifiable constraints
- evidence tied to observable outcomes

In other words: **the blueprint.**

---

## Evidence Beats Explanation

In BT tooling, "close enough" is not a harmless failure mode.

Bad software doesn't just annoy users.  
It wastes time.  
It misleads decision-making.  
It quietly erodes trust.

AI worsens this in a specific way:

> **Explanations are cheap. Confidence is cheap.**

So "it works" becomes meaningless without proof.

For the AAG dashboard, the impressive part wasn't chart rendering.

It was verification.

Raw exports—hundreds of thousands of records—were loaded, filtered, and queried until outputs matched Peter's original spreadsheets **verbatim**:
- row-for-row
- aggregate-for-aggregate
- against an explicit Definition of Done

Then came the next constraint: performance.

The first implementation took minutes.  
That was unacceptable.

Not because of impatience—but because batch jobs are not instruments.

After optimization, the same computations ran in under **two seconds**, in-browser.

The repeatable pattern:

1. Prove correctness against a trusted baseline  
2. Tighten "done" until it is auditable  
3. Harden performance until truth becomes interactive  

That is what *evidence beats explanation* looks like operationally.

---

## Restartability Is Not Waste

In AI-assisted work, the final 10% often costs more than the first 90%.

The problem is rarely bugs.

It is under-specified intent:
- an unstated constraint
- an implied assumption
- a fuzzy Definition of Done

There is also a quieter failure mode: **context drift**.

Long AI conversations decay.
Earlier constraints blur.
The model confidently solves the wrong problem.

Restarting fixes this.

So attempts are treated as controlled experiments:

- preserve what was learned
- start fresh with a tighter spec
- compare outcomes against reality

> **Restartability is not about throwing work away.**  
> It is about preserving clarity and bounding the cost of learning.

After doing this a few times, the bulldozer metaphor stops sounding nihilistic.

It starts sounding like instrumentation.

---

## What Changes If This Is Right?

If code is no longer the scarce resource, priorities flip.

### Optimize for repeatability, not heroics
A one-time success is not the goal.  
A regeneratable pipeline is.

### Define "done" in observable terms
"Works on my machine" is not evidence.  
Matching baselines, reproducibility, and performance are.

### Protect the blueprint more than the build
Because builds are cheap.

Blueprints prevent confident nonsense.

And in BT tooling, confident nonsense is worse than failure.

---

## Scope and Limits

This is not a claim that code never matters.

Some domains demand continuity for regulatory, security, or verification reasons.

This is a claim about a growing class of AI-assisted systems where:

- generation got cheaper
- verification got harder
- maintenance got more expensive
- drift got more dangerous

The question that remains:

> **What would change if we stopped protecting what we can regenerate—and started protecting what makes regeneration trustworthy?**


---

## Canon

*Source: `canon/README.md`*


# 🧭 Canon

Curated documents that capture how decisions are made, what assumptions are held, how work is verified, and how rigor changes as projects mature.

The Canon exists so that reasoning does not have to be repeated.

---

## 📁 Contents

### Core Documents

| File | Title | Summary | Answers |
|------|-------|---------|---------|
| `epistemic-obligation-and-document-tiers.md` | Epistemic Obligation and Document Tiers | Tiers define epistemic obligation (foundational, shared, awareness), not importance. Orthogonal to folders. | How much must I internalize this? |
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
| `decisions/` | Canon-level decision records (governance, model boundaries). |
| `resonance/` | External works that converge with ODD — and where ODD explicitly diverges. |
| `meta/` | Metadata and pack configuration. |
| `_compiled/` | Compiled outputs (derived, wipeable). |
| `odd/appendices/` | ODD-derived patterns and invariants. |

### Resonance (External Alignment & Divergence)

| File | Work | ODD Principle |
|------|------|---------------|
| `resonance/antifragile.md` | Antifragile | Systems Should Improve Under Stress |
| `resonance/lean-startup.md` | The Lean Startup | Epistemic Feedback Loops |
| `resonance/ooda-loop.md` | OODA Loop | Orientation Dominates Action |
| `resonance/sprint.md` | Sprint | Constrained Convergence Produces Clarity |

> **Canon Rule:** Every cited work must include at least one explicit divergence.
> If no divergence exists, the citation does not belong.

### ODD Appendices (Patterns)

| File | Title | Summary |
|------|-------|---------|
| `odd/appendices/tool-specialization.md` | Tool Specialization | Preserve reliability as tool availability increases by isolating tool usage behind narrowly scoped reasoning units. |

---

## 🚀 Start Here

1. **`constraints.md`** — What must be true for this work to make sense?
2. **`definition-of-done.md`** — When can work honestly be called done?
3. **`/odd/manifesto.md`** — Why this approach exists.

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
PRDs are organized into independent product lanes. Each lane has its own active PRD, attempts, and lifecycle. Lanes share canon, not lifecycle. See `/docs/appendices/product-lanes.md` for the full model.

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

See `/docs/appendices/compilation.md` for the compilation model.

---

## 🔗 See Also

- [ODD (Universal Principles)](/odd/README.md) — Timeless methodology that Canon derives from
- [Implementation Docs](/docs/README.md) — How klappy.dev implements Canon
- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md) — Why ODD, Canon, and Docs are separate

---

## ✅ Status

- Canon Index v0.1 complete
- Orientation-only
- Includes confidence and drift snapshot

This Canon v0.1 is considered stable for initial builds. Revisions should be additive unless a documented failure requires change.


---

## Antifragile

*Source: `canon/resonance/antifragile.md`*


# Antifragile (Resonance)

> Nassim Nicholas Taleb, 2012

## ODD Principle: Systems Should Improve Under Stress

ODD is designed so that shocks, failures, and volatility increase system clarity rather than degrade it. Stress is treated as information, not merely as risk to be minimized.

---

## Convergent Quotes (Non-Authoritative)

> "Some things benefit from shocks; they thrive and grow when exposed to volatility, randomness, disorder, and stressors."
> — Nassim Nicholas Taleb, *Antifragile*

> "Wind extinguishes a candle and energizes fire."
> — Nassim Nicholas Taleb, *Antifragile*

---

## Where ODD Aligns

- **Stress as signal:** Both treat volatility as a source of information rather than noise.
- **Redundancy over optimization:** Slack and overlap are preferred to brittle efficiency.
- **Failure reveals structure:** Breakage exposes hidden assumptions and weak constraints.

These alignments justify exposing systems to pressure rather than insulating them from it.

---

## Where ODD Diverges (Explicit)

ODD adopts antifragility while rejecting several of Taleb's core positions:

- **Designed evolution vs anti-design:** Taleb rejects intentional system design; ODD is deliberately designed to evolve under pressure.
- **Memory is mandatory:** Taleb tolerates antifragility without persistent memory; ODD requires failures to leave durable artifacts that alter future behavior.
- **Teams, not markets:** Taleb's arguments are strongest in markets and biology; ODD is optimized for coordinated human teams.
- **Constraint beats optionality alone:** Taleb emphasizes optionality; ODD emphasizes constraint as the mechanism that converts stress into learning.

---

## Why the Divergence Matters

Pure antifragility without memory produces resilience without wisdom. Systems may survive shocks repeatedly without becoming more coherent.

ODD treats antifragility as insufficient on its own. Stress must be captured, interpreted, and constrained into future action, or volatility degenerates into churn.

---

## Operationalization in ODD

- Multiple attempts are expected and encouraged
- Failure is captured, not hidden
- Artifacts persist beyond individual cycles
- Redundancy is explicit rather than accidental

---

## Related Canon

- [Attempts](/docs/ATTEMPTS.md)
- [Evolution Not Automation](/odd/appendices/evolution-not-automation.md)
- [ODD Manifesto](/odd/manifesto.md)


---

## The Lean Startup

*Source: `canon/resonance/lean-startup.md`*


# The Lean Startup (Resonance)

> Eric Ries, 2011

## ODD Principle: Epistemic Feedback Loops

ODD prioritizes feedback that reduces uncertainty over execution that increases throughput.

Learning is only valuable when it durably alters future decisions, orientation, or constraints.

---

## Convergent Quotes (Non-Authoritative)

> "The goal of a startup is to figure out the right thing to build — the thing customers want and will pay for — as quickly as possible."
> — Eric Ries, *The Lean Startup*

> "Validated learning is a rigorous method for demonstrating progress when one is embedded in the soil of extreme uncertainty."
> — Eric Ries, *The Lean Startup*

---

## Where ODD Aligns

- **Feedback over speculation:** Both prioritize empirical signal over internal confidence.
- **Short learning loops:** Faster feedback reduces the cost of being wrong.
- **Hypothesis-driven work:** Action exists to test assumptions, not to perform activity.

These alignments are mechanical, not rhetorical: they shape how work is sequenced and evaluated.

---

## Where ODD Diverges (Explicit)

ODD makes several deliberate tradeoffs that differ from The Lean Startup.

- **Artifacts over metrics:** Lean Startup emphasizes metrics as proof of learning; ODD requires durable artifacts that alter future execution, not just dashboards.
- **Orientation over iteration:** Lean Startup centers on iterative cycles; ODD centers on orientation shift as the primary outcome of feedback.
- **Teams over ventures:** Lean Startup optimizes for early-stage companies; ODD is optimized for ongoing teams operating across multiple problem domains.
- **Memory is mandatory:** Lean Startup tolerates learning that does not compound; ODD treats non-compounding learning as partial failure.

---

## Why the Divergence Matters

Lean Startup excels at escaping local ignorance early, but it under-specifies how learning accumulates over time.

ODD treats learning as an asset that must persist, migrate, and constrain future work. Without this, teams repeat discovery work, regress orientation, and mistake motion for progress.

ODD absorbs Lean Startup's speed while rejecting its tolerance for epistemic amnesia.

---

## Operationalization in ODD

- Attempts exist to test assumptions, not to "ship"
- Feedback is captured in lane history, not just metrics
- Orientation updates are explicit and reviewable
- Learning that does not change future constraints is flagged

---

## Related Canon

- [Attempts](/odd/appendices/attempt-lifecycle.md)
- [Lane Architecture](/docs/appendices/product-lanes.md)
- [Evolution Not Automation](/odd/appendices/evolution-not-automation.md)


---

## OODA Loop

*Source: `canon/resonance/ooda-loop.md`*


# OODA Loop (Resonance)

> John Boyd, 1970s–1990s

## ODD Principle: Orientation Dominates Action

In ODD, the primary output of any cycle is not execution, but orientation. Actions matter only insofar as they reshape how the system perceives, constrains, and decides.

---

## Convergent Quotes (Non-Authoritative)

> "Orientation is the schwerpunkt of the OODA loop."
> — John Boyd, *OODA Loop briefings*

> "Without orientation, observation is meaningless."
> — John Boyd, *OODA Loop briefings*

---

## Where ODD Aligns

- **Orientation as the center of gravity:** Both ODD and Boyd treat orientation—not action—as the decisive factor in outcomes.
- **Feedback reshapes perception:** Action exists to update understanding, not merely to produce results.
- **Tempo over raw speed:** Advantage comes from tighter perception–decision cycles, not faster motion alone.

These alignments are structural: they determine what is measured and what is considered success.

---

## Where ODD Diverges (Explicit)

ODD adopts Boyd's insight but makes several deliberate departures:

- **Persistent memory vs situational cognition:** Boyd's loop is transient and situational; ODD requires orientation changes to be captured as durable artifacts.
- **Team systems vs individual actors:** OODA was designed around pilots and commanders; ODD is designed for distributed teams and long-lived projects.
- **Asynchronous cycles:** Boyd assumes tightly coupled loops; ODD allows loops to be staggered, parallel, and uneven across lanes.

---

## Why the Divergence Matters

Boyd's model excels in adversarial, real-time contexts where advantage is temporary. Teams, however, suffer when orientation resets between cycles.

ODD treats orientation as cumulative capital. By externalizing it into artifacts, decisions compound instead of evaporating, allowing teams to operate coherently across time, turnover, and scale.

---

## Operationalization in ODD

- Orientation updates are explicit and reviewable
- Attempts exist to test perception, not just ideas
- Lane history preserves shifts in understanding
- Action without orientation change is treated as noise

---

## Related Canon

- [ODD Manifesto](/odd/manifesto.md)
- [Lane Architecture](/docs/appendices/product-lanes.md)
- [Attempts](/docs/ATTEMPTS.md)


---

## Resonance Index

*Source: `canon/resonance/README.md`*


# Resonance

> External works that *echo* ideas found in ODD — and where ODD explicitly chooses different tradeoffs.

## Purpose

Resonance pages document the relationship between ODD and influential external works.

They are not required to understand or apply ODD.  
They exist to provide intellectual context, comparison, and explicit boundary-setting.

These are not citations for authority. These are acknowledgments of intellectual overlap — and explicit statements of where ODD diverges.

**Books are guests. ODD owns the house.**

---

## Why Divergence Is Required

Most frameworks fail in one of two ways:

1. **Cargo-cult alignment** — "We do X because Lean Startup / Agile / Taleb says so."
2. **Silent disagreement** — The framework quietly violates the book but keeps the quote anyway.

Both erode trust.

ODD's strength is that it is:
- experiential
- operational
- and occasionally in direct disagreement with its intellectual neighbors

Divergence is therefore first-class, not a footnote.

---

## Canon Rule

> Every cited work must include at least one explicit divergence.  
> If no divergence exists, the citation does not belong.

This rule keeps the system honest and prevents authority leakage over time.

---

## Naming Convention

**Files are named after the book, not the principle.**

This provides immediate orientation ("This is about Lean Startup") while preserving ODD-first thinking inside the document.

Example: `lean-startup.md`, not `epistemic-feedback-loops.md`

---

## Structure

Each resonance page follows a consistent structure:

1. **Title** — Book name with "(Resonance)"
2. **ODD Principle** — Defined strictly in ODD terms
3. **Convergent Quotes** — Max 3, non-authoritative
4. **Where ODD Aligns** — Mechanical alignment only
5. **Where ODD Diverges** — Explicit tradeoffs (required)
6. **Why the Divergence Matters** — Consequences
7. **Operationalization in ODD**
8. **Related Canon**

---

## Contents

| File | Work | ODD Principle |
|------|------|---------------|
| `antifragile.md` | Antifragile | Systems Should Improve Under Stress |
| `lean-startup.md` | The Lean Startup | Epistemic Feedback Loops |
| `ooda-loop.md` | OODA Loop | Orientation Dominates Action |
| `sprint.md` | Sprint | Constrained Convergence Produces Clarity |

---

## What Resonance Is Not

**Resonance Is Not:**
- A bibliography
- An endorsement
- A synthesis essay
- Borrowed authority

**Resonance Is:**
- Formalized lived convergence
- Explicit divergence as proof of thinking
- Intellectual honesty over citation padding

---

## See Also

- [ODD Manifesto](/odd/manifesto.md)
- [Canon Index](/canon/README.md)
- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md)


---

## Sprint

*Source: `canon/resonance/sprint.md`*


# Sprint (Resonance)

> Jake Knapp et al., 2016

## ODD Principle: Constrained Convergence Produces Clarity

ODD treats time, scope, and decision constraints as tools for forcing clarity. Progress is achieved not by open-ended exploration, but by deliberately narrowing uncertainty to reach a decisive orientation.

---

## Convergent Quotes (Non-Authoritative)

> "Time pressure forces focus."
> — Jake Knapp et al., *Sprint*

> "The sprint gives teams a superpower: the ability to build and test a realistic prototype in just five days."
> — Jake Knapp et al., *Sprint*

---

## Where ODD Aligns

- **Constraints as catalysts:** Both treat strict constraints as a means to accelerate clarity.
- **Forced decision-making:** Indecision is resolved by time-boxed commitments rather than consensus drift.
- **Shared orientation:** Sprint creates a temporary, aligned mental model across a team.

These alignments describe why Sprint is effective in specific, bounded contexts.

---

## Where ODD Diverges (Explicit)

ODD deliberately limits the role Sprint-style processes can play:

- **Local tactic vs system:** Sprint is a powerful local convergence technique; ODD is a continuous system governing long-lived work.
- **Artificial consensus:** Sprint can manufacture alignment that dissolves once constraints lift; ODD requires alignment to persist through artifacts and memory.
- **Event-based learning:** Sprint concentrates learning into events; ODD distributes learning across ongoing attempts.
- **Outcome illusion:** Sprint risks mistaking decisiveness for correctness; ODD distinguishes clarity from truth.

---

## Why the Divergence Matters

Sprint is excellent at collapsing ambiguity quickly, but poor at preserving learning once the sprint ends. Teams often emerge aligned but fragile, requiring repeated sprints to maintain momentum.

ODD absorbs Sprint's constraint discipline while rejecting its event-centric model. Convergence must feed a durable system, or it becomes an expensive ritual.

---

## Operationalization in ODD

- Time-boxed convergence is used sparingly and intentionally
- Decisions are recorded as orientation changes, not meeting outcomes
- Artifacts outlive the convergence event
- Sprint-like methods are nested inside broader ODD loops

---

## Related Canon

- [ODD Manifesto](/odd/manifesto.md)
- [Attempts](/docs/ATTEMPTS.md)
- [Decision Records](/docs/decisions/README.md)


---

## Resonance Page Template

*Source: `canon/resonance/TEMPLATE.md`*


# Resonance Page Template

> Template for documenting external works that converge with ODD.

## Description

This template defines the standard structure for resonance pages. Use this when adding a new external work that has mechanical alignment with ODD — and explicit divergence.

---

## Naming Convention

**Files are named after the book, not the principle.**

This provides immediate orientation ("This is about Lean Startup") while preserving ODD-first thinking inside the file.

Examples:
- `lean-startup.md` — not `epistemic-feedback-loops.md`
- `antifragile.md` — not `convexity-under-stress.md`
- `ooda-loop.md` — not `orientation-dominates-action.md`

---

## Canon Rule (Mandatory)

**Every cited work must include at least one explicit divergence.**
**If no divergence exists, the citation does not belong.**

This rule prevents:
- Cargo-cult alignment ("We do X because Taleb says so")
- Silent disagreement (violating the book while keeping the quote)

---

## Frontmatter

```yaml
---
uri: klappy://canon/resonance/<book-slug>
title: "<Book Title>"
audience: canon
tier: 2
voice: neutral
stability: stable
tags: ["resonance", "<book-slug>", "<topic-tags>"]
---
```

---

## Structure

```markdown
---
uri: klappy://canon/resonance/<book-slug>
title: "<Book Title>"
audience: canon
tier: 2
voice: neutral
stability: stable
tags: ["resonance", "<book-slug>", "<topic-tags>"]
---

# <Book Title> (Resonance)

> <Author>, <Year>

## ODD Principle: <Principle Name>

<One or two sentences defining the principle strictly in ODD terms.
No references. No citations.>

---

## Convergent Quotes (Non-Authoritative)

> "<Quote>"
> — <Author>, *<Work>*

> "<Quote>"
> — <Author>, *<Work>*

<Optional third quote. Hard cap at three.>

---

## Where ODD Aligns

- <Specific, concrete alignment>
- <Behavioral or structural similarity>
- <What ODD genuinely shares>

Alignment must be **mechanical**, not philosophical.

---

## Where ODD Diverges (Explicit)

This is not disagreement for its own sake.
This is where ODD makes a **different tradeoff**.

- <Divergence #1>
- <Divergence #2>
- <What ODD refuses to adopt>

If this section feels uncomfortable, that's a signal the citation is weak.

---

## Why the Divergence Matters

<One short paragraph explaining the *consequences* of the difference.
This is where ODD sharpens itself.>

---

## Operationalization in ODD

- <Concrete practice>
- <Structural rule>
- <Artifact behavior>

---

## Related Canon

- [Related ODD file](/odd/<file>)
- [Related Canon file](/canon/<file>)
```

---

## Litmus Test

Before adding a resonance page, ask:

1. **Is there mechanical alignment?** — Not just philosophical vibes, but actual shared behavior.
2. **Is there explicit divergence?** — If you can't name a tradeoff ODD makes differently, don't add it.
3. **Does divergence have consequences?** — The difference should affect how work is done.

If all three are yes, the resonance page belongs.

---

## See Also

- [Resonance Index](/canon/resonance/README.md)
- [Canon Index](/canon/README.md)


---

## Self-Audit Checklist

*Source: `canon/self-audit.md`*


# Self-Audit Checklist

> A reflection layer that makes the Definition of Done actionable.

## Description

The self-audit checklist defines how work should be self-reviewed before claiming completion. It covers nine areas: intended outcome, constraints applied, decision rules followed, verification performed, evidence produced, UX and behavior check, tradeoffs and risks, maintainability check, and confidence level. Minimum acceptable completion requires a stated outcome, at least one verification step, at least one piece of evidence, and acknowledgment of tradeoffs or unknowns. This replaces repeated back-and-forth questions about whether work was actually run and verified.

## Outline

- Intended Outcome
- Constraints Applied
- Decision Rules Followed
- Verification Performed
- Evidence Produced
- UX & Behavior Check
- Tradeoffs & Risks
- Maintainability Check
- Confidence Level
- Minimum Acceptable Completion
- Agent Expectations

---

## Content

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
• “Did you actually run it?”
• “Did you verify this visually?”
• “Why did you choose this approach?”

Those questions should already be answered here.

---

## ✅ Status

- Canon v0.1 — Self-Audit Checklist complete
- Ready to proceed to Canon v0.1 — Visual Proof Standards


---

## Canon Article Template

*Source: `canon/TEMPLATE.md`*


# Canon Article Template

> Template for program-level constraints shared across all products.

## Description

This template defines the standard structure for Canon articles. Canon contains program-level constraints—rules that all products in this program must follow. Canon is more stable than Docs but less universal than ODD. Use this template when adding new constraints, policies, or shared rules.

## Outline

- When to Add to Canon
- Frontmatter Fields
- Document Structure
- Example

---

## When to Add to Canon

Add to Canon when:

- The rule applies to ALL products in this program
- The rule is derived from ODD principles
- The rule would still apply if we added new products

Do NOT add to Canon when:

- It's implementation-specific → `/docs/`
- It's universal philosophy → `/odd/`
- It's lane-specific → `/products/<lane>/`

**Litmus test:** Should all products obey this? → Canon ✓

---

## Frontmatter Fields

```yaml
---
uri: klappy://canon/<name>
title: "Title"
audience: canon
exposure: nav
tier: 1
voice: first_person | neutral
stability: stable
tags: ["canon", "topic"]
---
```

### Canon-Specific Values

| Field | Typical Value | Notes |
|-------|---------------|-------|
| `audience` | `canon` | Always canon |
| `tier` | `1` | Canon is core content |
| `voice` | `first_person` | Website-ready, personal |
| `stability` | `stable` | Canon changes carefully |

---

## Document Structure

```markdown
---
uri: klappy://canon/<name>
title: "Title"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: stable
tags: ["canon", "topic"]
---

# Title

> One-line description of this constraint or rule.

## Description

1-2 paragraph compressed overview. What is this constraint?
Why does it exist? How does it shape behavior?

## Outline

- Section 1
- Section 2
- Section 3

---

## Content

**Canon vX.Y**

[Full content...]

---

## See Also

- [Related Canon](/canon/related.md)
- [ODD Principle](/odd/appendices/related.md)
```

---

## Example

```markdown
---
uri: klappy://canon/example-constraint
title: "Example Constraint"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: stable
tags: ["canon", "example"]
---

# Example Constraint

> All products must X before Y.

## Description

This constraint ensures consistency across products by requiring X
before Y. It derives from the ODD principle of evidence over assertion
and applies to all lanes.

## Outline

- What I Assume
- Why It Matters
- What It Forces
- When It Doesn't Apply

---

## Content

**Canon v0.1**

### What I Assume

[...]

### Why It Matters

[...]

### What It Forces

[...]

### When It Doesn't Apply

[...]
```

---

## See Also

- [Canon Index](/canon/README.md)
- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md)


---

## Verification & Evidence

*Source: `canon/verification-and-evidence.md`*


# Verification & Evidence

> Claims are untrusted. Only observed evidence counts.

## Description

In ODD, claims are not trusted. Only observed, attributable evidence may be used to assert that something works. This principle exists to prevent false positives, epistemic drift, and wasted human review time in agentic systems where language is cheap and confidence is effortless. Agentic systems are structurally incentivized to appear helpful, seek closure, and optimize for plausibility rather than truth. Without explicit constraints, this leads to unverified success claims, simulated evidence, and erosion of trust. This canon principle defines truth conditions; lane rules are instantiations, not exceptions.

## Outline

- The Core Rule
- Why This Is Necessary
- What Counts as Evidence
- What Does Not Count as Evidence
- Phenomenological Limits
- Consequences of Violation
- Relationship to Lane Rules

---

## Operating Constraints

- MUST provide observed, attributable evidence for any claim of completion
- MUST NOT present mocked, randomized, or fabricated data as real evidence
- MUST NOT claim success based on "it should work," "the code builds," or "tests passed" alone
- MUST explicitly acknowledge phenomenological limits (audio, subjective experience) and request human verification
- MUST contextualize evidence to actual system state, not idealized or nearby conditions

---

## Defaults

- Assertions are untrusted until evidence is provided
- When evidence cannot be produced, state the limitation explicitly
- Prefer direct observation over inference
- Treat plausibility as insufficient; require proof
- When uncertain about evidence quality, ask for clarification rather than assuming validity

---

## Failure Modes

- **Simulated Evidence**: Presenting mock data, random values, or fabricated screenshots as proof
- **Plausibility as Truth**: Optimizing for believable output rather than verified behavior
- **Closure Pressure**: Claiming completion to appear helpful rather than admitting incompleteness
- **Inference as Observation**: Claiming behavior was observed when it was only inferred from code
- **Bypassing Phenomenological Limits**: Claiming to verify audio/subjective experience without human confirmation

---

## Verification

- Evidence was directly observed, not inferred from code or logic
- Evidence clearly corresponds to the specific claim being made (attributable)
- Evidence reflects actual system state at time of verification (contextualized)
- For phenomenological properties: explicit human verification or acknowledgment of limits
- Violation results in: attempt failure, loss of trust, disqualification from promotion/reuse

---

## Content

**Canon v0.1**

> No claim of completion is valid without corresponding evidence of observation.

Assertions, intentions, passing tests, or "it should work" statements are not evidence.

---

## Why This Is Necessary

Agentic systems are structurally incentivized to:
- appear helpful
- seek closure
- minimize friction
- optimize for plausibility rather than truth

Without explicit constraints, this leads to:
- unverified success claims
- simulated or fabricated evidence
- human time wasted reviewing false positives
- erosion of trust in the system

ODD rejects this failure mode.

---

## What Counts as Evidence

Valid evidence must be:

1. **Observed**  
   The behavior was directly seen, heard, or experienced — not inferred.

2. **Attributable**  
   The evidence clearly corresponds to the specific claim being made.

3. **Non-simulated**  
   Mocked, randomized, or fabricated data may not be presented as real.

4. **Contextualized**  
   Evidence must reflect the actual system state, not an idealized or nearby condition.

---

## What Does Not Count as Evidence

- "It should work"
- "The code builds"
- "Tests passed"
- Simulated UI states presented as real
- Fake or randomized data presented without explicit labeling
- Screenshots that do not correspond to the claimed behavior

---

## Phenomenological Limits

Some properties **cannot be machine-verified**, including:
- audio playback through speakers
- recording of real-world sound
- subjective user experience (e.g., "feels right")
- perceptual or ergonomic qualities

These require **explicit human verification**.

Agents must acknowledge these limits rather than bypass them.

---

## Consequences of Violation

Violations of this principle result in:
- attempt failure
- loss of trust
- permanent documentation of the procedural violation
- disqualification of outputs from promotion, reuse, or citation

---

## Relationship to Lane Rules

This canon principle defines *truth conditions*.

Individual lanes may implement stricter or more specific rules (e.g., UI verification, audio handling, hardware interaction), but may not weaken or bypass this principle.

Lane rules are **instantiations**, not exceptions.

---

## See Also

- [Visual Proof Standards](/canon/visual-proof.md)
- [Definition of Done](/canon/definition-of-done.md)
- [Constraints](/canon/constraints.md)


---

## Visual Proof Standards

*Source: `canon/visual-proof.md`*


# Visual Proof Standards

> What "prove it visually" actually means for UI and interaction work.

> This document is a specialization of  
> **Verification & Evidence** (klappy://canon/verification-and-evidence).  
> It applies only to claims about **visually observable behavior**.

## Description

Visual proof standards define what constitutes valid visual evidence for work affecting anything a user can see or interact with. Visual proof is required for UI, layout, navigation, interaction, animation, visible state changes, and user-facing behavior. Acceptable forms include screenshots (clearly labeled, not cropped ambiguously), screen recordings (10-30 seconds showing interaction), rendered output artifacts, and structured UI captures. Before/after evidence is required for changes. Visual proof must show correct state, behavior, and context. Explanations without screenshots do not qualify. This document does not define completion or truth on its own.

## Outline

- Core Principle: Observed behavior over reasoning
- When Visual Proof Is Required
- Acceptable Forms (Screenshots, Recordings, Artifacts, UI Captures)
- What Visual Proof Must Show
- Labeling Requirements
- Before/After Evidence
- Tooling Expectations
- When Visual Proof Is Not Possible
- Non-Visual and Phenomenological Cases
- What Does Not Count as Visual Proof

---

## Operating Constraints

- MUST provide visual proof for any work affecting user-visible behavior
- MUST label all screenshots with a caption stating what the proof demonstrates
- MUST NOT crop screenshots ambiguously
- MUST include before/after evidence for changes to existing behavior
- MUST explicitly state why visual proof was not possible if it cannot be produced
- MUST NOT claim completion without visual evidence or explicit acknowledgment of verification limits

---

## Defaults

- When uncertain whether visual proof is needed: include it
- Prefer screen recordings (10-30 seconds) for interaction work
- One sentence caption is sufficient for labeling
- When "before" state is unavailable, state why rather than omitting

---

## Failure Modes

- **Screenshot of Code**: Showing code instead of rendered output; code proves nothing about visual behavior
- **Diagram Without Runtime**: Diagrams of intended behavior without evidence the system actually ran
- **Ambiguous Crop**: Cropping screenshots to hide context or adjacent failures
- **Reasoning Without Observation**: "It looks correct to me" or "it should work" without visual evidence
- **Unlabeled Evidence**: Screenshots without captions explaining what they demonstrate

---

## Verification

- Screenshot or recording showing correct state, behavior, and context
- Before/after evidence for any change to existing behavior
- Caption explaining which outcome the proof supports
- For phenomenological cases (audio, feel): explicit acknowledgment of verification limits
- Evidence URL or artifact path must be provided, not just assertion of existence

---

## Content

**Canon v0.1**

> This defines what "prove it visually" actually means, so neither humans nor agents can wiggle out with vague claims.

This page defines what I mean by visual proof.

If work affects anything a user can see or interact with, I expect direct visual evidence that it behaves as intended.

For visually observable behavior, visual proof replaces explanation.

If a visual claim cannot be shown, it is not verified.

---

## 📌 Core Principle

I trust observed behavior more than reasoning.

Visual proof demonstrates that:
• the system was actually run
• the behavior exists in reality
• the output matches the intended outcome

---

## ⚠️ When Visual Proof Is Required

Visual proof is required for any work involving:
• UI or layout
• navigation or flow
• interaction or animation
• visible state changes
• user-facing behavior
• generative UI output

If a user could notice the change, visual proof is required.

---

## 📎 Acceptable Forms of Visual Proof

One or more of the following is required, depending on the task:

**Screenshots**
• Show the relevant state clearly
• Must not be cropped ambiguously
• Must reflect the final behavior

**Screen Recordings (Preferred for Interaction)**
• 10–30 seconds is usually sufficient
• Show the interaction from start to end
• No narration required

**Rendered Output Artifacts**
• Generated HTML files
• Static exports
• Snapshots of rendered states

**Structured UI Captures**
• DOM snapshots
• Component tree states
• Selector highlights

---

## 📋 What Visual Proof Must Show

Visual proof must demonstrate:
• the correct state
• the correct behavior
• the correct context

When relevant, it should include:
• the starting state
• the resulting state
• the transition between them

---

## 🏷️ Labeling Requirements

Each piece of visual proof must be accompanied by a short caption:
• What this proof demonstrates
• Which outcome it supports

One sentence is enough.

Unlabeled screenshots are not acceptable.

---

## 🔄 Before / After Evidence

For changes that modify existing behavior or UI:
• Include "before" and "after" visuals when feasible
• If "before" is unavailable, state why

This makes regressions and improvements obvious.

---

## 🛠️ Tooling Expectations

Visual proof may be produced via:
• browser dev servers
• headless browsers
• automated UI testing tools
• screen capture utilities

The specific tool does not matter.
The evidence does.

---

## 🚫 When Visual Proof Is Not Possible

If visual proof cannot be produced, the output must explicitly state:
• why it was not possible
• what alternative verification was used
• what remains unverified

"Not possible" is acceptable.
"Not mentioned" is not.

---

## 🔊 Non-Visual and Phenomenological Cases

Some valid claims cannot be verified visually, including:
• audio playback through speakers
• recording of real-world sound
• perceptual or ergonomic qualities
• subjective experience or "feel"

In these cases, visual proof may be supplemented or replaced by:
• explicit human verification
• acknowledgment of verification limits

Visual Proof Standards do not override the limits defined in
**Verification & Evidence** (klappy://canon/verification-and-evidence).

---

## ⚠️ What Does Not Count as Visual Proof

The following do not qualify:
• descriptions of expected behavior
• screenshots of code
• diagrams without runtime evidence
• "it looks correct to me"
• reasoning without observation

---

## 🔗 Relationship to Definition of Done

Visual proof is a required component of the Definition of Done for UI-related work.

Without visual proof:
• the task is not complete
• confidence claims are invalid

---

## 🤖 Agent Expectations

Agents are expected to:
• capture visual proof themselves when possible
• request assistance when they cannot
• refuse to claim completion without evidence

Producing visual proof is not optional.
It is part of the work.

---

## 💡 Closing Note

This standard exists to eliminate ambiguity for visual claims.

If something visually observable works:
• it can be shown

If a visual claim can't be shown:
• it isn't verified

For non-visual verification requirements, see
**Verification & Evidence** (klappy://canon/verification-and-evidence).

---

## ✅ Status

- Canon v0.1 — Visual Proof Standards complete
- Ready to proceed to Canon v0.1 — Completion Report Template


---

## Agent Entry Point

*Source: `docs/AGENT_ENTRYPOINT.md`*


# 🧭 Agent Entry Point

**If you are an AI agent starting an attempt, go directly to:**

## `/docs/AGENT_KICKOFF.md`

That file is the canonical, copy-pasteable entry point for all agent attempts.

---

## For Orientation (Not Execution)

If you want to understand the system before acting:

1. `/docs/appendices/product-lanes.md` — multi-lane PRD architecture
2. `/canon/index.md` — Canon orientation, precedence, stability
3. `/odd/manifesto.md` — philosophy and intent
4. `/docs/ATTEMPTS.md` — attempt lifecycle orientation

---

## For Humans

Human workflow lives at `/docs/ATTEMPT_KICKOFF.md`.

---

## Quick Reference

| Lane | PRD Location |
|------|--------------|
| `website` | `/docs/PRD/website/PRD.md` |
| `ai-navigation` | `/docs/PRD/ai-navigation/PRD.md` |
| `agent-skill` | `/docs/PRD/agent-skill/PRD.md` |

**Every attempt MUST declare a lane before registration.**


---

## Agent Kickoff

*Source: `docs/AGENT_KICKOFF.md`*


# 🤖 Agent Kickoff — Canonical Entry Point

**This file is the ONLY authorized entry point for agent attempts.**

Do not rely on external prompts. Do not synthesize from multiple documents.
Read this file. Follow it exactly.

---

## Step 0: Declare Your Lane and Epoch

You MUST know which lane and epoch you are working in before proceeding.

| Lane | PRD Location | Purpose |
|------|--------------|---------|
| `website` | `/docs/PRD/website/PRD.md` | Human-facing UI/UX |
| `ai-navigation` | `/docs/PRD/ai-navigation/PRD.md` | AI layer over documentation |
| `agent-skill` | `/docs/PRD/agent-skill/PRD.md` | Agent cognitive framework |

**Current Epoch:** `E0002-multi-lane-era`

Epoch determines whether your attempt's outcomes can be compared to prior attempts. If the evaluation rules changed (evidence requirements, provenance, deploy contracts), you are in a new epoch.

**If you do not know your lane, STOP and ask the human.**  
**If you are unsure whether the epoch has changed, STOP and ask the human.**

---

## Step 1: Read Required Documents (In Order)

1. `/docs/appendices/product-lanes.md` — understand the multi-lane model
2. `/docs/appendices/epochs.md` — understand when outcomes are comparable
3. Your lane's PRD (e.g., `/docs/PRD/ai-navigation/PRD.md`)
4. `/canon/constraints.md` — non-negotiables that shape all work

---

## Step 2: Register Your Attempt

```bash
npm run attempt:register -- --lane <LANE> --tool <TOOL> --agent <AGENT_ID> --model <MODEL>
```

Example:
```bash
npm run attempt:register -- --lane ai-navigation --tool cursor --agent a --model "claude-opus-4"
```

This creates `.attempt.json` with your run_id, lane, and provenance.

**Lane is REQUIRED. Attempts without a lane are invalid.**

**Epoch is REQUIRED.** Your `META.json` must include `epoch_id`. If missing, results cannot be compared to prior attempts.

---

## Step 3: Nuke and Start Fresh

```bash
npm run attempt:nuke -- --lane <LANE>
```

Example:
```bash
npm run attempt:nuke -- --lane website
```

This deletes `products/<lane>/src/` and lane-local framework configs. You start from a blank slate.

Choose any stack that satisfies the deploy contract (`/infra/contracts/build-output.md`).

Your implementation goes in `products/<lane>/src/`. Build output goes to `products/<lane>/dist/`.

See `/docs/appendices/lane-implementation-surfaces.md` for the locked folder contract.

---

## Step 4: Build Against Your Lane's PRD

Implement ONLY what your lane's PRD specifies.

- Do NOT modify Canon
- Do NOT touch other lanes
- Do NOT invent requirements not in the PRD

If the PRD is ambiguous, note the ambiguity in your ATTEMPT.md. Do not guess.

---

## Step 5: Write Evidence

Write to your runs directory (path is in `.attempt.json`):

```
products/<lane>/attempts/prd-vX.Y/_runs/<run_id>/
  ATTEMPT.md    — what you built, decisions made, self-audit
  EVIDENCE.md   — screenshot index, test results
  evidence/     — actual screenshots, logs
```

Evidence must prove the PRD success criteria are met.

Note: Attempts are lane-contained. Root `/attempts/**` is legacy.

---

## Step 6: Push

```bash
git add -A && git commit -m "Attempt: <lane> <description>"
git push
```

This triggers Cloudflare preview deploy.

---

## Invariants (Non-Negotiable)

1. **Lane declaration is mandatory** — no lane, no attempt
2. **Epoch declaration is mandatory** — no epoch, results are not comparable
3. **Canon is read-only** — do not modify `/canon/**`
4. **PRD is authoritative** — if it's not in the PRD, don't build it
5. **Evidence is required** — assertions without proof are invalid
6. **Conflicts require STOP** — if you detect conflicting instructions, stop and report

---

## If You Detect a Conflict

If ANY of the following are true, STOP immediately and report to the human:

- The PRD contradicts Canon constraints
- The lane is unclear or undeclared
- Required files are missing
- Previous attempt artifacts conflict with current instructions

Do NOT guess. Do NOT synthesize. Report the conflict.

---

## Quick Reference

| What | Where |
|------|-------|
| Lane architecture | `/docs/appendices/product-lanes.md` |
| Lane implementation surfaces | `/docs/appendices/lane-implementation-surfaces.md` |
| Epoch semantics | `/docs/appendices/epochs.md` |
| Constraints | `/canon/constraints.md` |
| Definition of Done | `/canon/definition-of-done.md` |
| Deploy contract | `/infra/contracts/build-output.md` |
| Attempt lifecycle | `/docs/ATTEMPTS.md` |
| Human workflow | `/docs/ATTEMPT_KICKOFF.md` |

---

## The Rule

If it's not in the repo, it doesn't exist.

This file IS the prompt. Follow it exactly.


---

## Sub-Agents

*Source: `docs/agent-architecture/sub-agents.md`*


# Sub-Agents

> How klappy.dev applies cognitive partitioning to tool-heavy agent systems.

## Description

In klappy.dev, adding tools or MCP servers directly to a single "main" agent can
increase decision paralysis and degrade reliability.

Sub-agents are used to isolate tool usage behind narrowly scoped reasoning
contexts that already know how to use a specific tool correctly.

This document is the reference implementation layer: concrete guidance for this
repo, not a universal principle.

## Outline

- When to introduce a sub-agent
- Tools vs sub-agents (the pairing rule)
- Scope contract (what a sub-agent is allowed to do)
- Outputs and promotion
- Common failure modes

---

## When to Introduce a Sub-Agent

Introduce a sub-agent when:
- a tool is powerful but brittle
- tool choice dominates reasoning time
- repeated misuse happens despite prompt constraints
- the "main" agent succeeds in isolation but fails during integration

---

## Tools vs Sub-Agents (Pairing Rule)

Tools increase capability.
Sub-agents reduce choice.

**Rule of thumb:**
If adding a tool increases decision complexity more than it reduces execution cost,
pair it with a specialist sub-agent that uses that tool and emits bounded outputs.

This is "Unix philosophy," but applied to agents: small specialists with explicit
inputs/outputs.

---

## Scope Contract

A sub-agent:
- owns one responsibility (one tool or one narrow workflow)
- returns explicit outputs (no hidden state assumptions)
- does not expand its own scope without evidence

---

## Outputs and Promotion

Sub-agent outputs should be:
- explicit (named, structured, and quotable)
- promotable (eligible to become decisions/patterns later)
- attributable (easy to trace back to the run/attempt)

---

## Common Failure Modes

- Premature sub-agents (created before real pressure exists)
- Sub-agents accreting responsibilities ("just one more thing")
- Treating sub-agents as personas instead of constraints
- Adding tools without narrowing decision surfaces

---

## See Also

- [Cognitive Partitioning](/odd/cognitive-partitioning.md) — Universal concept
- [Tool Specialization](/canon/odd/appendices/tool-specialization.md) — General pattern


---

## Attempt Lifecycle

*Source: `docs/appendices/attempt-lifecycle.md`*


# Attempt Lifecycle

> How work is iterated without steering failed attempts.

## Description

This appendix defines the klappy.dev attempt lifecycle: how PRD versions, attempts, evidence, and deployments are preserved. Core principles: attempts are disposable, infrastructure persists, content accumulates, deployments are views not truth. PRDs define what to build; attempts are bounded executions. Attempts exist to test PRDs, not evolve them. The system uses register → nuke for blank slate independence, artifacts always merge (even from failed attempts), and champion selection promotes exactly one attempt to production. The three planes of change are Application (disposable), Content/Canon (persistent), and Infrastructure (slow-changing).

## Outline

- Why This Appendix Exists
- Core Principles
- PRD Version vs Attempt
- PRD as the Unit of Test
- Independence: Goal vs Infrastructure
- Worktrees and Learnings
- Canonical Places (paths)
- Learnings Payload
- Artifacts Always Merge
- What an Attempt Is / Is Not
- The Three Planes of Change
- Canonical Structure (folder layout)
- Collision Avoidance
- Blank Slate Requirement (Register → Nuke)
- Attempt Lifecycle (High Level)
- Sealing an Attempt
- Champion Selection and Promotion
- Restartability as a Feature

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** How work is iterated without steering failed attempts

---

## Why This Appendix Exists

Outcomes-Driven Development (ODD) assumes that clarity improves faster than execution in an AI-accelerated environment.

As clarity improves, attempts that were once reasonable often become misaligned.

This appendix exists to make stopping, restarting, and rebuilding a normal, explicit part of the system rather than an emotional or ad-hoc decision.

---

## Core Principles

1. **Attempts are disposable.**
2. **Infrastructure persists.**
3. **Content accumulates.**
4. **Deployments are views, not truth.**

Restarting is not a failure of execution.  
Restarting is evidence that intent has sharpened.

Branch and preview deployments exist to observe behavior. The canonical record is the sealed attempt + commit SHA, not the deployment URL.

---

## PRD Version vs Attempt

A **PRD version** defines what should be built.  
An **attempt** is a bounded execution of that PRD.

**Key distinction:**
- A PRD version can have multiple attempts
- Attempts exist to test the PRD, not to evolve it
- If the PRD is wrong, create a new PRD version
- If the implementation fails, create a new attempt against the same PRD

This separation prevents "Phase 1.1" scope creep disguised as iteration.

See [Quantum Development](./quantum-development.md) for the rationale behind multiple attempts.

For the single canonical kickoff prompt used to start any new attempt, see: `/docs/ATTEMPT_KICKOFF.md`.

---

## PRD as the Unit of Test

In ODD, a PRD is treated as the primary test unit.

Issues and failures are mapped back to PRD improvements, and attempts are used to validate PRDs as hypotheses.

This reduces ticket sprawl by keeping the system legible: one PRD version, multiple observable attempts, sealed evidence.

---

## Independence: Goal vs. Infrastructure

Independence is the goal (epistemic).

Infrastructure is an enabler, not a guarantee.

An attempt is independent if:
- decisions are not steered by prior outcomes,
- implementation state is fresh,
- and the approach represents a genuine re-instantiation of the PRD.

Branches and preview deployments can support independence by reducing accidental state leakage and enabling parallel observation, but they do not define independence.

---

## Worktrees and Learnings

**Worktrees are disposable sandboxes. Learnings live in the main repo.**

When using git worktrees for parallel attempts:
- Each worktree is isolated code state
- Learnings are repo state, not worktree state
- Learnings must land in one canonical place that every attempt can write to

You do not try to "share memory" between worktree agents. You publish outputs.

### Canonical Places (Single Source of Truth)

These paths live in the main repo (not inside a worktree only):

- `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/**` — sealed record + evidence (lane-contained)
- `/docs/PRD/<lane>/PRD.md` — living PRD per lane
- `/docs/learnings/prd-vX.Y.md` — (optional) rolling "what we learned" log

Anything in those paths is real. Anything else is temporary.

Note: Root `/attempts/**` is legacy (read-only). All new attempts are lane-contained.

### Learnings Payload (Required)

At the end of each attempt, the agent must produce:

1. `products/<lane>/attempts/prd-vX.Y/attempt-NNN/ATTEMPT.md` — closure record
2. `products/<lane>/attempts/prd-vX.Y/attempt-NNN/META.json` — commit SHA, preview URL, status
3. `products/<lane>/attempts/prd-vX.Y/attempt-NNN/evidence/*` — screenshots, logs
4. PRD patch (if learnings exist): updates to `/docs/PRD/<lane>/PRD.md` in a dedicated section:
   - "Observed failure modes"
   - "Clarifications / constraints added"
   - "New DoD checks"

The PRD patch is how learning persists across attempts.

---

## Artifacts Always Merge

**Failed attempts still contribute learnings.**

Attempts produce two types of outputs:
- **Code changes** — the implementation
- **Artifacts** — attempt folder, evidence, PRD patches

The merge rule:

| Output | Merge to main? |
|--------|----------------|
| Artifacts (attempt folder, evidence, PRD patches) | **Always** |
| Code (src/, components, etc.) | **Only if Champion** |

This prevents "we lost the learning because the attempt failed."

### Two Merges Per Attempt

1. **Artifacts merge** (always happens)
   - Seal the attempt folder
   - Commit evidence and closure record
   - Apply any PRD patches
   - Merge to `main`

2. **Code promotion** (only if winner)
   - Champion's code merges to `main`
   - Non-winners keep their preview URLs but code stays on attempt branch

This separation ensures every attempt contributes to the knowledge base, regardless of whether its code ships.

---

## What an Attempt Is

An Attempt is a bounded execution of a specific Product Requirements Document (PRD).

An attempt:
- has a single PRD version
- has a defined scope
- produces an outcome artifact
- is evaluated against its own Definition of Done
- is explicitly closed (CLOSED or ABANDONED)

An attempt does not:
- evolve indefinitely
- absorb new scope reactively
- serve as the foundation for all future work

---

## What an Attempt Is Not

An attempt is not:
- a phase in a linear roadmap
- a commitment to incremental improvement
- a promise of continuity

Attempts are experiments with intent, not investments to be amortized.

---

## The Three Planes of Change

ODD separates work across three independent planes:

### 1. Application Plane (Behavior)

What the system does:
- UI structure
- interaction patterns
- navigation model
- rendering logic

This plane is **attempt-scoped and disposable**.

### 2. Content / Canon Plane (Knowledge)

What the system knows:
- Canon documents
- ODD Manifesto
- Projects
- Writings, notes, transcripts

This plane is **persistent and cumulative**.

Content may evolve independently of any attempt.

### 3. Infrastructure Plane (Capability)

What makes building cheap:
- deployment setup
- build tooling
- sync/verify scripts
- schemas and formats

This plane **changes slowly and intentionally**.

---

## Canonical Structure

Attempts are **lane-contained**. All attempt artifacts live under the product lane:

```
products/<lane>/attempts/
  prd-vX.Y/
    PRD.md                    # frozen PRD for this version
    _runs/<run_id>/           # working directory (before finalization)
    attempt-001/              # finalized attempts
      ATTEMPT.md              # closure record
      META.json               # canonical pointers (provenance is truth)
      EVIDENCE.md             # evidence index
      evidence/               # screenshots, logs, etc.
    attempt-002/              # retry (if needed)
```

Note: Root `/attempts/**` is legacy (read-only). See `/attempts/README.md`.

**META.json** contains:
- `tool` — which tool was used (Cursor, Claude, etc.)
- `agent_id` — agent identifier
- `model` — model used (e.g., "claude-opus-4-5-20250514")
- `run_id` — unique run identifier
- `branch` — branch name (convenience, not truth)
- `prd_version` — PRD version being tested
- `sealed_commit` — the commit SHA (truth)
- `git_tag` — convenience pointer (optional)
- `status` — CLOSED, ABANDONED, or CHAMPION
- `deploy` — recorded URLs (production, preview) as evidence artifacts

The concrete sealing procedure is documented in `/docs/ATTEMPTS.md`.

---

## Collision Avoidance (Current Model)

Parallel agents don't reserve numbers upfront. Instead:

1. **Register** — Each agent runs `attempt:register` to capture provenance (creates `run-<run_id>/`)
2. **Build** — Agent works in isolation
3. **Finalize** — `attempt:finalize` sorts runs by completion time and assigns `attempt-001`, `attempt-002`, etc.

This prevents collisions because numbers are assigned deterministically at completion, not reserved upfront.

> **Deprecated:** The `ATTEMPT_REGISTRY.json` / `attempt:reserve` model is no longer used.

---

## Blank Slate Requirement

**Attempts must start from a clean slate to be independent.**

### The Problem

If attempt-002 branches from attempt-001's code, it's not independent. The agent will see existing patterns and converge on similar solutions.

### The Solution: Register → Nuke

The required sequence is:

1. **`attempt:register --lane <lane>`** — Captures provenance (who, with what model, from where)
2. **`attempt:nuke --lane <lane>`** — Deletes lane src and framework configs (guarantees blank slate)
3. **Only then** does implementation begin

This preserves forensic traceability (we know who showed up) while guaranteeing experimental independence (no inherited code).

### What Gets Nuked (Lane-Scoped)

- `products/<lane>/src/` — lane application code
- `products/<lane>/vite.config.js`, `products/<lane>/tailwind.config.js`, etc. — lane framework configs

> **Note:** Root-level `/src/` no longer exists. All app code is lane-scoped.

### What Survives

- `/infra/` — deployment scripts, contracts
- `/canon/`, `/about/`, `/projects/` — content
- `/docs/` — process documentation
- `/products/<lane>/attempts/` — sealed evidence (lane-contained)
- `/attempts/` — legacy sealed evidence (read-only)
- `package.json` — dependency manifest
- Other lanes (`products/<other-lane>/src/`) — only the target lane is nuked

> **Decision:** See [D0008: Register Before Nuke](/docs/decisions/D0008-register-before-nuke.md)

---

## Attempt Lifecycle (High Level)

1. **Intent Articulation**
   - A PRD is written for a specific outcome
   - Scope is explicit and finite

2. **Execution**
   - The application is built from scratch against the PRD
   - Existing infrastructure may be reused
   - Existing content may be consumed
   - Prior app logic is not assumed

3. **Evaluation**
   - Outcome is evaluated against the PRD's Definition of Done
   - Evidence is captured

4. **Closure**
   - The attempt is explicitly marked CLOSED or ABANDONED
   - No new scope is added under the same attempt

5. **Reflection**
   - Learnings inform the next PRD or attempt
   - The current attempt is not retrofitted

---

## Sealing an Attempt

A **sealed attempt** has:
- A frozen PRD snapshot (at the PRD version level)
- Evidence captured and linked
- A commit pointer (SHA) in META.json
- Status: CLOSED, ABANDONED, or CHAMPION

Once sealed:
- No further work is done on that attempt
- The record is immutable
- New work requires a new attempt (same PRD) or new PRD version

---

## Champion Selection and Promotion

Quantum Development produces observations. Promotion converts one observation into production.

### Definitions

- **Attempts** = competing candidates (separate branches / preview deploys)
- **Champion** = the single candidate chosen to become production
- **`prod` branch** = production deployment (klappy.dev)
- **`main` branch** = experiment ledger, history aggregation

### The Promotion Rule

**Exactly one attempt becomes Champion for a PRD version.**

The Champion is merged to `main`, then `prod` is fast-forwarded to `main`. Everything else stays sealed evidence.

### Minimum Gate (must pass)

1. PRD Success Criteria (the checkboxes in the PRD)
2. Evidence bundle (desktop + mobile + deep-link round-trip + failure behavior)
3. Cloudflare preview URL captured in META.json
4. No fatal regressions vs current production

### Tie-Breakers (when multiple pass)

Pick one axis and declare it ahead of time:

- Best mobile UX
- Best navigation clarity
- Cleanest deep-link contract and anchor behavior
- Simplest code / fewest dependencies (maintainability)

**Important:** Tie-breakers are not more features. They're about quality under the same PRD.

### Promotion Procedure

**Branch Roles:**
- `prod` — **production** (only champions go here)
- `main` — experiment ledger, artifact aggregation
- `*` (any other) — attempt sandboxes (preview deploys)

**When an attempt wins:**

1. **Seal it**
   - `products/<lane>/attempts/prd-vX.Y/attempt-NNN/` has: ATTEMPT.md, META.json, evidence folder, preview URL.
   - Status: CHAMPION

2. **Tag it** (immutable pointer)
   - Tag: `prd-vX.Y-attempt-NNN`

3. **Merge artifacts to main**
   - Attempt folder, evidence, PRD patches

4. **Promote code to main**
   - Champion's `products/<lane>/src` merges to `main`

5. **Fast-forward prod**
   - `git checkout prod && git merge main --ff-only`
   - Cloudflare deploys `prod` → production

**What happens to other attempts?**
- Seal them (ABANDONED or CLOSED-but-not-chosen)
- Keep their preview URLs + evidence
- Merge their artifacts to `main` (learnings persist)
- Do NOT merge their code

### The One Rule That Prevents Chaos

**Only `prod` is allowed to be production.**

`main` is for experiments and history. Attempts can be preview deployments forever.

This makes "which one is live?" a non-question.

> **Decision:** See [D0001: prod Branch Is Production](/docs/decisions/D0001-prod-branch-is-production.md)

### Winner Declaration (ATTEMPT.md snippet)

When an attempt wins, add to its ATTEMPT.md:

```
Status: CHAMPION (Promoted to Production)
Promoted commit: <sha>
Attempt tag: prd-vX.Y-attempt-NNN
Production tag: production-vX.Y
Production URL: https://klappy.dev
Preview URL: <cloudflare preview>
Why this one won (tie-breaker): <one sentence>
```

---

## Restartability as a Feature

ODD treats restartability as a first-class design feature:
- prompts are rewritten, not patched
- applications are regenerated, not endlessly refactored
- artifacts are preserved for learning, not extended by default

This prevents:
- sunk-cost bias
- prompt sprawl
- architectural drift

---

## What Persists Across Attempts

The following may persist across attempts:
- deployment infrastructure
- build and verification scripts
- content repositories
- Canon structure
- naming conventions
- evidence standards

The following must not be assumed to persist:
- UI composition
- routing model
- state management decisions
- interaction flow

---

## Why Attempts Are Explicitly Closed

Explicit closure:
- creates psychological safety to restart
- prevents scope creep disguised as "Phase 1.1"
- keeps PRDs honest and legible
- makes outcomes comparable across attempts

Unclosed attempts silently turn into products by accident.

---

## How This Appendix Should Be Used

This appendix is:
- a shared mental model
- a permission structure
- a vocabulary for stopping well

It is not:
- a workflow
- a checklist
- a gating mechanism

---

## Summary

ODD optimizes for learning velocity, not artifact continuity.

Attempts exist to be finished.  
Infrastructure exists to make finishing cheap.  
Content exists to compound over time.

**Quantum Development ends when one candidate is promoted.**
Observations without promotion are incomplete experiments.

---

**Status:** Updated 2026-01-16 — Aligned with D0001 (prod branch), D0008 (register before nuke)

> **Authoritative source for attempt workflow:** `/docs/ATTEMPTS.md`


---

## Canonical Compression

*Source: `docs/appendices/canonical-compression.md`*


# Canonical Compression

> Derived compression outputs that fit bounded context windows without modifying source truth.

## Description

Canonical Compression produces minimal, derived working models from the full Canon to solve context window limits. Source Canon remains authoritative while compiled outputs are epoch-scoped, disposable artifacts that can be regenerated anytime. This is compilation, not mutation—compressed outputs live in `_compiled/` and never replace source truth.

## Outline

- Summary
- The Problem It Addresses
- Two Classes of Canon Artifacts
- Compilation Model
- Where Compiled Canon Lives
- What Compression Produces
- What Compression Must Never Do
- Relationship to Drift Checks
- Relationship to Epochs
- The Rule
- Status

---

## Content

## Summary

As the Canon grows, agents and humans cannot hold the entire system in working memory.

Canonical Compression solves this by producing a **derived, minimal working model** of the Canon that fits into limited context windows without sacrificing the source of truth.

**Canonical Compression is compilation, not mutation.**

- Source Canon remains authoritative and unchanged.
- Compressed outputs are derived artifacts.
- Derived artifacts are disposable and regenerable.
- Any compression output can be deleted without loss of truth.

---

## The Problem It Addresses

Agents drift for reasons beyond contradiction:

- The total doc surface becomes too large for a single context window.
- Important rules are duplicated across files, creating divergence.
- Low-signal history (old decisions, obsolete guidance) consumes attention.
- "More documentation" paradoxically makes behavior less consistent.

Drift checks detect inconsistency.
Canonical Compression reduces the size of the reasoning surface so consistency becomes feasible.

---

## Two Classes of Canon Artifacts

### 1) Source Canon (Authoritative, Slow)

Examples:

- `/canon/**`
- `/odd/appendices/**`
- `/odd/decisions/**`

Properties:

- Curated and human-owned
- Evidence-backed
- Traceable
- Evolves slowly
- Never rewritten by synthesis

Source Canon is **truth storage**.

### 2) Compiled Canon (Derived, Fast)

Canonical Compression produces **Compiled Canon** outputs.

Properties:

- Derived and lossy (summaries, collapsed checklists, working models)
- Replaceable and disposable
- Epoch-scoped
- Designed for agent working memory
- Must include links back to Source Canon

Compiled Canon is **truth projection**, not truth itself.

---

## Compilation Model

Canonical Compression produces **derived artifacts**.

- Source Canon is never modified
- Compressed outputs live in `_compiled/`
- Outputs are epoch-scoped and disposable
- Regeneration is always preferred to editing

Compression is compilation, not mutation.

---

## Where Compiled Canon Lives (Exact)

Compiled outputs MUST NOT be written into `/canon/` as source documents.

They live here:

/canon/_compiled/
epoch-E0002/
agent-working-model.md
reasoning-checklist.md
failure-patterns-collapsed.md

Notes:

- `_compiled/` is derived output (wipeable).
- Outputs are organized by epoch to preserve comparability.
- If the entire folder is deleted, no truth is lost — only convenience.

---

## What Compression Produces

Canonical Compression generates a small set of artifacts (exact list may evolve):

- **Agent Working Model**: minimal worldview for correct behavior
- **Reasoning Checklist**: step-by-step constraints + invariants
- **Failure Patterns (Collapsed)**: common pitfalls distilled into triggers + tests
- **Doc Map (Progressive Links)**: what to read next when confidence drops

Each output MUST:

- Be marked as derived/compiled
- Declare its epoch
- Link back to source documents for traceability

---

## What Compression Must Never Do

- Rewrite or replace Source Canon files
- Delete decision logs
- "Optimize" by removing nuance from the source
- Invent new rules (compression may restate, not legislate)

If a compression output implies a new rule, that rule must be introduced via:
- a decision log, or
- a PRD + attempt process in the relevant lane

---

## Relationship to Drift Checks

Drift checks answer: **"Do these documents contradict?"**

Canonical Compression answers: **"Can a bounded context window hold the rules needed to behave correctly?"**

Drift checks prevent incoherence.
Compression prevents overload.

Both are required.

---

## Relationship to Epochs

Compression outputs are epoch-scoped.

- If epoch changes, compiled outputs must be regenerated
- Comparability across epochs is not assumed
- Old compiled outputs may be archived or deleted

Epoch scoping prevents "half-updated working models" from lingering.

---

## The Rule (One Sentence)

**Canon is written by humans and proven by outcomes.  
Compiled Canon is written by synthesis and proven by usability.**

---

## Status

This document defines the conceptual model.
Implementation of tooling to generate compiled outputs is tracked separately.


---

## Compilation Targets

*Source: `docs/appendices/compilation-targets.md`*


# Compilation Targets

> Lane-scoped, target-specific packs that make the corpus usable at constrained context sizes.

## Description

Compiled packs are derived outputs identified by (lane, target) pairs that can be deleted and regenerated anytime. Each pack has a deterministic plan file defining ordered sources and compilation mode. Targets are constrained consumer profiles (like visitor or author), not personas, and all packs must include provenance for verification without requiring an LLM.

## Outline

- Key Idea
- Output Location (Wipeable)
- Compile Plans (Deterministic)
- Targets
- Invariants
- Phase Policy

---

## Content

Compiled packs exist to make the corpus usable at constrained context sizes without rewriting source truth.

A compiled pack is **derived output**. It can be deleted and regenerated at any time.

## Key Idea

Compilation is scoped by:

- **Lane** (which product's PRD and user intent we're serving)
- **Target** (which consumer needs the compressed view)

A pack is always identified as:

`(lane, target)`

## Output Location (Wipeable)

All compiled output MUST live under:

`/public/_compiled/<lane>/`

Example:

- `/public/_compiled/website/visitor-pack.md`
- `/public/_compiled/website/author-pack.md`

## Compile Plans (Deterministic)

Each pack MUST have a deterministic plan file:

`/infra/compile/plans/<lane>/<target>.json`

The plan defines:
- ordered source files
- compilation mode (Phase 0: concat)
- output filename

## Targets

Targets are **not personas**. They are constrained consumer profiles.

### Website Lane Targets

- `visitor` — minimal orientation surface; progressive disclosure; "what is this?"
- `author` — high-signal working pack for the repo owner; more depth; less onboarding

### Future Targets (Defined When Needed)

- `dev-peer` — evaluation / critique / contribution readiness
- `agent-core` — operational pack for agents to follow process consistently

These exist as names only until a lane PRD requires them.

## Invariants

- Packs are derived. Source docs are not overwritten.
- Packs do not introduce new truth. They reference truth.
- Packs must include provenance (lane, target, timestamp, git commit, source list + hashes).
- Verification MUST be possible without an LLM (hashes + structure + required header).

## Phase Policy

- **Phase 0 (Concat):** deterministic concatenation only
- **Phase 1 (LLM):** LLM may summarize/select, but output still must satisfy the same provenance + verification contract


---

## Compilation

*Source: `docs/appendices/compilation.md`*


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

## Compiled Memory

*Source: `docs/appendices/compiled-memory.md`*


# Compiled Memory

> Lane-scoped, wipeable artifacts that keep guidance small and citeable without destroying underlying truth.

## Description

Compiled Memory solves context overload and documentation sprawl by producing auditable compressed artifacts while keeping source truth in Canon, PRDs, and Attempts. The mechanism compiles out-of-place with four outputs per lane: Canon Pack, Lane Pack, PRD Pack, and Run Pack. All compile runs emit provenance metadata and source hashes for traceable, defensible compression.

## Outline

- Summary
- Why This Exists
- Compile Is Not Compression-In-Place
- Scope Levels (The Four Outputs)
- Lane Rules
- Auditable by Design
- Drift and Epochs
- What This Enables
- Non-Goals

---

## Content

## Summary

In ODD, repositories accumulate truth faster than agents can hold it in context.

**Compiled Memory** is the mechanism for producing **lane-scoped, wipeable, auditable**
compressed artifacts that are safe for agents and humans to consume.

This is a **derivation pipeline**, not a rewrite pipeline.

- Source truth remains in Canon + PRDs + Attempts.
- Compiled output is generated *out of place*.
- Compiled output can be deleted and regenerated at any time.

## Why This Exists

ODD assumes:
- generation is abundant
- trust is not
- context is bounded
- drift is inevitable unless actively checked

Agents fail in two predictable ways:
1. **Context overload** → they miss constraints, repeat mistakes, invent structure.
2. **Doc sprawl** → humans keep writing more guidance, and agents still can’t load it all.

Compiled Memory keeps the guidance surface **small, current, and citeable** without destroying the underlying truth.

## Compile Is Not Compression-In-Place

**Rule:** Compiled Memory MUST NOT replace Canon/PRDs/Attempts in place.

This is compile-out-of-place:

- Inputs: Canon + lane docs + PRDs + attempt artifacts
- Outputs: `/public/_compiled/<lane>/**`
- Verification: hashes + sources + provenance

If compiled output is wrong, we delete it and recompile.
If source truth is wrong, we change the source truth explicitly.

## Scope Levels (The Four Outputs)

Compiled Memory produces four outputs per lane.

1) **Canon Pack**
- Purpose: high-signal orientation + invariants relevant to the lane
- Input: Canon (+ decisions, appendices)

2) **Lane Pack**
- Purpose: lane identity, non-goals, and how this lane “wins”
- Input: lane PRD folder + lane docs

3) **PRD Pack**
- Purpose: the active PRD distilled into an agent-usable execution contract
- Input: `/docs/PRD/<lane>/PRD.md` (and supporting files in that folder)

4) **Run Pack**
- Purpose: “what’s happening right now” for an attempt/run
- Input: attempt artifacts for the lane (or latest run metadata)
- Note: optional when no runs exist

These are distinct because they change at different rates.

## Lane Rules

Compiled output is always lane-scoped:

- Output root: `/public/_compiled/<lane>/`
- Meta: `/public/_compiled/<lane>/_meta/`

Lanes are:
- `website`
- `ai-navigation`
- `agent-skill`

Attempts without a lane are invalid (see Product Lanes).

## Auditable by Design

Every compile run MUST emit:

- `COMPILE_META.json`
  - includes provenance (tool, model, command, timestamp)
  - includes content hashes for plan + sources
- `COMPILE_SOURCES.txt`
  - lists every input file used for compilation (paths)

Every compiled markdown output MUST include a **Sources** section.

The goal is not “perfect summaries.”
The goal is **traceable, defensible compression**.

## Drift and Epochs

Compiled Memory is an explicit response to drift.

- Canon and PRDs may advance faster than tooling (epoch transitions).
- Compiled output is always treated as **derived evidence**, not authority.

If Canon/PRDs and tooling disagree:
- Canon/PRDs define intended truth.
- tooling must converge later.
- compiled outputs MUST reflect the intended truth (and cite the mismatch if necessary).

## What This Enables

- Agents can behave consistently without ingesting the whole repo.
- Humans can evaluate the system without wading through every artifact.
- Each lane can have its own “agent-ready” pack without coupling to other lanes.
- The repo can evolve without turning into a documentation graveyard.

## Non-Goals

Compiled Memory does not:
- attempt to make Canon smaller by rewriting it
- delete or “consolidate away” decision history
- guarantee correctness without verification
- replace evidence capture

It exists to keep context bounded while keeping truth traceable.



---

## Deploy Evidence

*Source: `docs/appendices/deploy-evidence.md`*


# Deploy Evidence

> Evidence is only valid when externally reviewable via deployed URLs.

## Description

Local builds are insufficient proof for online deployment outcomes—evidence must be copied into the lane build output to be served by Cloudflare Pages. Evidence must be accessible at `/_evidence/<run_id>/EVIDENCE.md` on the preview deployment. An attempt is incomplete until the branch is pushed, preview build succeeds, and both preview and evidence URLs return HTTP 200.

## Outline

- Summary
- Cloudflare Pages Reality
- Required Evidence Publication Path
- Completion Rule

---

## Content

## Summary

In ODD, evidence is only valid if it is externally reviewable.

Local builds are not sufficient proof when the intended outcome is an online deployment.

## Cloudflare Pages Reality

Cloudflare Pages serves only the configured build output directory.
It does **not** serve arbitrary repo folders such as `/attempts/**`.

Therefore, any "Evidence URL" that points to `/attempts/**` on a Pages domain is invalid.

## Required Evidence Publication Path

Evidence MUST be copied into the lane build output so it is served by Pages:

`products/<lane>/dist/_evidence/<run_id>/EVIDENCE.md`

This makes the evidence accessible from the preview deployment at:

`/_evidence/<run_id>/EVIDENCE.md`

## Completion Rule

An attempt is not complete until all are true:

1) The branch is pushed to origin  
2) Cloudflare preview build succeeds  
3) The preview URL renders (HTTP 200)  
4) The evidence URL renders (HTTP 200)

If (2)-(4) cannot be proven, the attempt must seal as failure.


---

## Drift Checks

*Source: `docs/appendices/drift-checks.md`*


# Drift Checks

> The mechanism for detecting when documentation, prompts, and tooling diverge from truth.

## Description

Drift is the primary failure mode of ODD systems—when components diverge, truth becomes vibes. The drift check command verifies alignment between interface contracts, lane PRDs, attempt lifecycle docs, tooling behavior, and manifest schema. If drift checks fail, conclusions drawn from the repo are invalid and must be fixed before running new attempts.

## Outline

- What Must Stay Aligned
- The Drift Check Command
- Epistemic Rule

---

## Content

Drift is the primary failure mode of ODD systems.

When documentation, prompts, and tooling diverge, "truth" becomes vibes again.

This appendix defines the drift-prevention mechanism.

---

## What Must Stay Aligned

- Interface contracts (`/interfaces/**`)
- Lane PRDs (`/docs/PRD/**`)
- Attempt lifecycle docs (`/docs/**`)
- Tooling behavior (CLI)
- Manifest schema and semantics

---

## The Drift Check Command

The repository SHOULD provide:

```bash
npm run verify:contracts
```

This command verifies:

1. `manifest.json` conforms to `manifest@current`
2. builds conform to `build-output@current`
3. attempt artifacts conform to `attempt-cli@current`
4. lane PRDs declare required contracts

---

## Epistemic Rule

If drift checks fail, conclusions drawn from the repo are invalid.

Fix drift before running new attempts.


---

## Epochs

*Source: `docs/appendices/epochs.md`*


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

## Evidence

*Source: `docs/appendices/evidence.md`*


# Evidence

> Proof through deployed artifacts, not narrative claims.

## Description

An attempt is valid only if its deployed build exposes public evidence at `/_evidence/` with minimum proof of 1 video recording or 3 screenshots—markdown alone doesn't count. Required files include index.html, index.json, EVIDENCE.md, ATTEMPT.md, META.json, and proof assets. Evidence must be discoverable without knowing run IDs, reading narratives, or running code locally.

## Outline

- Minimum Proof
- Required Files
- Discoverability
- Build Enforcement
- Related

---

## Content

Evidence is proof, not narrative.

An attempt is valid ONLY if its deployed build exposes public evidence at:

`/_evidence/`

## Minimum Proof

- 1 video recording OR
- 3 screenshots

Markdown alone does not count as proof.

## Required Files

Every `/_evidence/` folder must contain:

- `index.html` — human-browsable index
- `index.json` — machine inventory
- `EVIDENCE.md` — summary and links
- `ATTEMPT.md` — what was done
- `META.json` — provenance
- `screenshots/` — at least 1 image
- `recordings/` — video proof (or 3 screenshots total)

## Discoverability

Evidence MUST be discoverable without:

- knowing a run ID
- reading a narrative
- running code locally
- guessing paths

If `/_evidence/` returns 404, the attempt is **INVALID**.

## Build Enforcement

When `.attempt.json` exists:

- Build FAILS if `/_evidence/` is missing
- Build FAILS if proof assets are insufficient
- Build FAILS if index generation fails

## Related

- Attempt Record Packs: `/docs/ATTEMPT_RECORD_PACK.md`
- Attempt Kickoff: `/docs/ATTEMPT_KICKOFF.md`


---

## Lane Build Layout

*Source: `docs/appendices/lane-build-layout.md`*


# Lane Build Layout

> Policy ensuring multiple product lanes share Canon without colliding in implementation output.

## Description

Multiple product lanes share Canon but must not collide in `/src` or `products/<lane>/dist`. Each attempt operates in its own branch/worktree with disposable, lane-specific `/src` and lane-scoped build output. The recommended deployment model creates one Cloudflare Pages project per lane to avoid requiring a single repo-level `/dist` to represent multiple products.

## Outline

- Policy: One Lane Builds at a Time in a Worktree
- Policy: Production Deployments Are Lane-Scoped
- Recommended Deployment Model (Least Brittle)
- What This Means for `/main` and `/prod`
- Invariant

---

## Content

This repository contains multiple **product lanes** that share Canon but must not collide in implementation output.

The core collision surfaces are:
- `/src` (implementation workspace)
- `products/<lane>/dist` (deployment artifact)

This document defines the lane-safe layout policy.

---

## Policy: One Lane Builds at a Time in a Worktree

Each attempt operates in its own branch/worktree. Within that sandbox:

- `/src` is disposable and lane-specific for that attempt.
- `products/<lane>/dist` is the output of that lane's build.

Because worktrees isolate filesystem state, lanes do not collide during development.

---

## Policy: Production Deployments Are Lane-Scoped

A single git repository may be deployed multiple times (e.g., Cloudflare Pages projects), each targeting:

- a specific lane
- a specific branch (`prod/<lane>` or similar)

This prevents one lane's deployment from overwriting another.

---

## Recommended Deployment Model (Least Brittle)

Create one Cloudflare Pages project per lane:

- `klappy-website` → deploys lane `website`
- `klappy-ai-navigation` → deploys lane `ai-navigation` (when it becomes deployable)
- `klappy-agent-skill` → deploys lane `agent-skill` (if it has a deployable surface)

Each Pages project selects its own production branch.

This avoids requiring a single repo-level `/dist` to represent multiple products simultaneously.

---

## What This Means for `/main` and `/prod`

- `main` is the aggregation branch for artifacts and evaluation history.
- Production branches are lane-specific (implementation detail, but must be stable).

Promotion updates the lane's production branch only.

---

## Invariant

A lane must be promotable without affecting any other lane's production surface.

If promoting lane A changes lane B's production outcome, the layout is invalid.


---

## Lane-Scoped Implementation Surfaces

*Source: `docs/appendices/lane-implementation-surfaces.md`*


# Lane-Scoped Implementation Surfaces

> Each lane owns its own source, build output, and deploy root for epistemic independence.

## Description

In the multi-lane PRD model, each lane MUST have its own implementation surface under `/products/<lane>/` with src, dist, and no shared repo-root directories. Nuking is lane-scoped and MUST NOT affect other lanes, Canon, docs, or attempts. Lane-scoped surfaces restore epistemic independence—if a lane succeeds, you can know it succeeded because the intent was correct, not because of residue from another lane.

## Outline

- Summary
- Locked Folder Contract
- Build Output Contract (Pages-style)
- Attempt Independence
- Deployment Isolation (Cloudflare)
- Promotion Model
- Why This Exists

---

## Content

## Summary

In the multi-lane PRD model, each lane is an independent product.

Therefore each lane MUST have its own implementation surface:
- its own source directory
- its own build output directory
- its own deploy root

No lane may rely on a shared, repo-root `/src` or `/dist`.

This prevents cross-lane contamination and restores independence of attempts.

---

## Locked Folder Contract

Each lane owns its implementation under:

```
/products/<lane>/
  src/          # lane implementation source (disposable)
  dist/         # lane build output (never committed)
```

`<lane>` is one of:
- `website`
- `ai-navigation`
- `agent-skill`

The repo-root directories `/src` and `/dist` are NOT product surfaces.

---

## Build Output Contract (Pages-style)

For any lane deployed via Cloudflare Pages:

- Build output MUST be `products/<lane>/dist/`
- `products/<lane>/dist/index.html` MUST exist after build

The lane may use any stack as long as it satisfies the lane's deploy contract.

---

## Attempt Independence

Attempts MUST be able to start from a blank slate without affecting other lanes.

Therefore nuking is lane-scoped:

- `attempt:nuke --lane <lane>` deletes ONLY:
  - `products/<lane>/src/`
  - lane-local config files inside `products/<lane>/` (if any)

Nuking MUST NOT delete:
- `/canon/**`
- `/docs/**`
- `/attempts/**`
- other lanes under `/products/**`

---

## Deployment Isolation (Cloudflare)

Each lane SHOULD be deployed as a separate Cloudflare Pages project.

For each Pages project:
- Root directory: `products/<lane>`
- Build command: `npm run build -- --lane <lane>` (or lane-local build)
- Build output: `dist`
- Production branch: `prod`
- Preview deployments: enabled for all non-production branches

This allows all lanes to share one git repository and one production branch while remaining operationally independent.

---

## Promotion Model

Promotion is lane-scoped.

Promoting a champion for lane `<lane>` updates ONLY:
- `products/<lane>/**` (implementation)
- the attempt artifacts for that lane

Promotion MUST NOT modify other lanes.

---

## Why This Exists

A shared `/src` makes outcomes non-attributable.

If a lane succeeds, you cannot know whether it succeeded because:
- the intent was correct, or
- residue from another lane made it work.

Lane-scoped implementation surfaces restore epistemic independence.


---

## Memory Architecture

*Source: `docs/appendices/memory-architecture.proposed.md`*


# Memory Architecture

> The layered system that preserves learning while discarding what no longer reduces drag.

## Description

Memory in ODD is the percolation path from ephemeral execution to durable truth through five layers: Attempt Evidence, Lane History, Lane Decisions, Cross-Lane Patterns, and Canon. Each layer has different durability, scope, and elevation criteria, with most artifacts expected to decay at lower layers. The system preserves what repeatedly reduces drag, discards what no longer serves, and keeps percolation paths visible.

## Outline

- Summary
- Why Memory Matters
- The Memory Layers
- The Percolation Model
- Decay Is the Default
- Folder Patterns
- What Memory Is Not
- Relationship to Other Concepts
- Related Documents

---

## Content

## Summary

In ODD, **memory** is the layered system that preserves what was learned while discarding what no longer reduces drag.

Memory is not a single artifact. It is the percolation path from ephemeral execution to durable truth:

```
Attempts → Lane History → Lane Decisions → Cross-Lane Patterns → Canon
```

Each layer has different durability, scope, and elevation criteria.

---

## Why Memory Matters

ODD assumes:
- Generation is abundant
- Trust is scarce
- Context is bounded
- Drift is inevitable unless actively curated

Memory is the bottleneck — not computation, not generation, not storage.

The system must:
- Preserve what repeatedly reduces drag
- Discard what no longer serves
- Make the percolation path visible
- Keep each layer scannable by agents and humans

Evidence without elevation creates false confidence rather than learning.

---

## The Memory Layers

### Layer 1: Attempt Evidence (Ephemeral)

**Scope:** Single execution against a PRD  
**Durability:** Sealed when attempt closes; may be pruned later  
**Lives in:** `products/<lane>/<version>/attempts/attempt-NNN/evidence/`

Attempts capture what happened during execution:
- Test output, logs, screenshots
- Verification artifacts
- Failure evidence

**Elevates when:** A pattern appears across multiple attempts and can be stated as a reusable learning.

---

### Layer 2: Lane History (Lane-Durable)

**Scope:** What happened in this lane — champions, failures, infrastructure changes  
**Durability:** Persists as long as the lane exists  
**Lives in:** `products/<lane>/history/`

History records **what happened** without turning it into rules:
- Champion promotions
- Failed attempts with learnings
- Infrastructure migrations

**Elevates when:** A learning recurs across multiple versions or informs lane decisions.

---

### Layer 3: Lane Decisions (Lane-Durable)

**Scope:** Why this lane chose what it chose  
**Durability:** Persists as long as the lane exists; may be deprecated  
**Lives in:** `products/<lane>/decisions/`

Decisions record **why we chose** to make things happen the way they did:
- Architectural choices
- Deviations from canon
- Patterns that worked

History says "we did X." Decisions say "we did X because Y."

**Elevates when:** A decision proves valuable across multiple lanes.

---

### Layer 4: Cross-Lane Patterns (Repo-Durable)

**Scope:** Patterns that recur across lanes  
**Durability:** Persists in interfaces or shared tooling  
**Lives in:** `/interfaces/**` or shared infrastructure

Cross-lane patterns emerge when:
- Multiple lanes solve the same problem
- Interoperability requires explicit contracts
- Drift across lanes becomes expensive

**Elevates when:** A pattern satisfies elevation criteria (recurrence, portability, drag reduction, testability).

Many cross-lane patterns remain permanently non-canonical — useful, local, and intentionally contextual. Canon is not the goal of all things.

---

### Layer 5: Canon (Durable Truth)

**Scope:** Curated, high-signal rules that survive context changes  
**Durability:** Persists across projects, tools, and time  
**Lives in:** `/canon/**`

Canon is intentionally small. Adding to canon requires:
1. **Recurrence** — appears across multiple attempts/projects
2. **Portability** — remains true across stacks/models/tools
3. **Drag Reduction** — prevents repeated confusion or failure
4. **Testability** — can be expressed as a falsifiable claim

Canon does not grow by accumulation. It grows by curation.

---

## The Percolation Model

Memory does not flow upward automatically. It requires explicit elevation.

```
┌─────────────────────────────────────────────────────────────┐
│                        CANON                                │
│  (Durable truth that survives context changes)              │
└─────────────────────────────────────────────────────────────┘
                           ▲
                           │ elevation (strict criteria)
                           │
┌─────────────────────────────────────────────────────────────┐
│                   CROSS-LANE PATTERNS                       │
│  (Interfaces, shared contracts, proven interop)             │
└─────────────────────────────────────────────────────────────┘
                           ▲
                           │ elevation (recurrence across lanes)
                           │
┌───────────────────────┐ ┌───────────────────────┐
│   LANE A              │ │   LANE B              │
│   ├── decisions/      │ │   ├── decisions/      │
│   ├── history/        │ │   ├── history/        │
│   └── attempts/       │ │   └── attempts/       │
└───────────────────────┘ └───────────────────────┘
         ▲                          ▲
         │ elevation                │ elevation
         │ (recurrence,             │ (recurrence,
         │  learning)               │  learning)
         │                          │
    ┌─────────┐                ┌─────────┐
    │ attempt │                │ attempt │
    │ attempt │                │ attempt │
    │ attempt │                │ attempt │
    └─────────┘                └─────────┘
```

Most artifacts die at the attempt layer. That is correct behavior.

---

## Decay Is the Default

Memory preservation has a cost: maintenance, cognitive load, drift risk.

ODD assumes most artifacts should decay:
- Attempts are sealed and may be pruned
- History entries are append-only but finite
- Decisions may be deprecated
- Even canon can be curated down

Discarding is not loss. It is how memory stays useful.

---

## Folder Patterns

Each layer has a consistent folder pattern within lanes:

| Layer | Pattern | Index Style | Authored By |
|-------|---------|-------------|-------------|
| Attempts | `<version>/attempts/attempt-NNN/` | Flat enumeration | Agent or human |
| History | `history/H000X-*.md` | Index table + individual files | Human (post-attempt) |
| Decisions | `decisions/D000X-*.md` | Index table + individual files | Human |

The index + individual files pattern keeps scan cost low while allowing entries to grow.

---

## What Memory Is Not

Memory is not:
- A **changelog** (user-facing release notes)
- A **git log** (commit history)
- A **wiki** (sprawling documentation)

Memory is curated learning that reduces future drag.

---

## Relationship to Other Concepts

| Concept | Relationship |
|---------|--------------|
| Progressive Elevation | The criteria for when something moves up a layer |
| Compiled Memory | Compression of memory into agent-consumable packs |
| Product Lanes | The boundaries within which memory is scoped |
| Epochs | Comparability boundaries when the rules change |

---

## Related Documents

- `/odd/appendices/progressive-elevation.md` — Elevation criteria
- `/docs/appendices/compiled-memory.md` — Compression for agents
- `/docs/appendices/product-lanes.md` — Lane isolation
- `/docs/appendices/attempt-lifecycle.md` — Attempt containment


---

## Online Evidence Requirement

*Source: `docs/appendices/online-evidence.md`*


# Online Evidence Requirement

> Attempts are invalid unless output and evidence are viewable online without running code locally.

## Description

Local builds are allowed during development but do not satisfy the Definition of Done—every attempt must provide a Cloudflare Preview URL and an Evidence URL. The default mechanism is Cloudflare Pages branch preview deployments with attempt branches pushed to origin. Evidence must be exposed via a static hub path at `/_evidence/` or a dedicated Pages project, documented in the lane PRD.

## Outline

- Summary
- Required Online Proof
- Required Mechanism (Default)
- Required Evidence Artifact
- Non-Goals
- Related Documents

---

## Content

## Summary

An attempt is not considered valid unless its output and evidence are viewable online without the author running code locally.

Local builds are allowed during development, but they do not satisfy the Definition of Done for an attempt.

## Required Online Proof

Every attempt MUST provide:

1. **Cloudflare Preview URL** for the attempt branch.
2. **Evidence URL** (an online URL that displays the attempt's evidence artifact).

If either URL is missing, the attempt is **INVALID**.

## Required Mechanism (Default)

The default mechanism is Cloudflare Pages branch preview deployments:

- Each attempt MUST push its branch to `origin`.
- Cloudflare Pages MUST be configured to deploy preview builds for all branches.
- The attempt branch name MUST include the lane so preview URLs are traceable.

## Required Evidence Artifact

Each attempt MUST produce an evidence markdown file:

`/products/<lane>/attempts/prd-vX.Y/attempt-NNN/EVIDENCE.md` (or run-scoped equivalent during `_runs/`)

The repo MUST expose evidence online via one of:

- A static "evidence hub" path served by the lane site at `/_evidence/`, OR
- A dedicated Cloudflare Pages project serving the lane's attempts as static content.

The chosen mechanism must be documented in the lane PRD and enforced in kickoff.

Note: Attempts are lane-contained. Root `/attempts/**` is legacy (read-only).

## Non-Goals

- This does not require production promotion.
- This does not require perfect UI polish.
- It requires that a human can click a link and see the output and evidence.

## Related Documents

- Definition of Done: `/canon/definition-of-done.md`
- Visual Proof Standards: `/canon/visual-proof.md`
- Attempt Lifecycle: `/docs/appendices/attempt-lifecycle.md`
- Preview Guide: `/docs/PREVIEW.md`


---

## Product Lanes in Outcome-Driven Development

*Source: `docs/appendices/product-lanes.md`*


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

### Lane Self-Containment (Critical)

**A product lane MUST be self-contained.**

All artifacts required to understand and execute against a lane live within `products/<lane>/`:

```
/products/<lane>/
  PRD.md                              # Lane PRD (authoritative)
  README.md                           # Lane overview
  KICKOFF.md                          # Attempt instructions
  attempts/prd-vX.Y/attempt-NNN/      # Attempt artifacts
  src/                                # Implementation source
  dist/                               # Build output (if applicable)
```

**Why this matters:**
- Agents can load a single directory and have complete context
- No cross-directory dependencies to track
- Lane can be moved, copied, or archived as a unit
- Documentation drift cannot split a lane's truth across locations

**If you find yourself creating lane artifacts outside `products/<lane>/`, stop.**

### Where PRDs Live

PRDs are lane-contained:

```
/products/
  website/PRD.md
  ai-navigation/PRD.md
  agent-skill/PRD.md
  fluent-mobile/PRD.md
```

> ⚠️ **Not** `/docs/PRD/<lane>/PRD.md`. That path pattern is deprecated.

### Where Attempts Live

Attempts are lane-contained:

```
/products/
  website/attempts/prd-vX.Y/attempt-NNN/
  ai-navigation/attempts/prd-vX.Y/attempt-NNN/
  agent-skill/attempts/prd-vX.Y/attempt-NNN/
  fluent-mobile/attempts/prd-vX.Y/attempt-NNN/
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
- Evolution philosophy: `/odd/appendices/evolution-not-automation.md`


---

## Implementation Appendices

*Source: `docs/appendices/README.md`*


# 📚 Implementation Appendices

Implementation-specific appendices that document how klappy.dev applies ODD concepts. These are reference implementation details, not portable methodology.

> **Relationship to ODD:** Portable concepts live in `/odd/appendices/`. This folder contains the klappy.dev-specific implementation of those concepts.

---

## 📁 Contents

### Attempt & Evidence

| File | Title | Summary |
|------|-------|---------|
| `attempt-lifecycle.md` | Attempt Lifecycle | How PRD versions, attempts, evidence, and deployments are preserved. Includes CLI commands and folder structure. |
| `evidence.md` | Evidence | Evidence requirements including `/_evidence/` path structure and `.attempt.json` schema. |
| `deploy-evidence.md` | Deploy Evidence | Why evidence must be in the build output. Cloudflare Pages serving requirements. |
| `online-evidence.md` | Online Evidence Requirement | Attempts are invalid without online preview URLs via Cloudflare Pages. |

### Compilation & Memory

| File | Title | Summary |
|------|-------|---------|
| `compilation.md` | Compilation | The process of producing derived packs. Includes `/public/_compiled/<lane>/` paths and npm commands. |
| `compiled-memory.md` | Compiled Memory | Lane-scoped, wipeable, auditable compressed artifacts with specific output paths. |
| `compilation-targets.md` | Compilation Targets | How compiled packs make the corpus usable with specific plan file paths. |
| `canonical-compression.md` | Canonical Compression | How derived, minimal working models are produced with `_compiled/` output locations. |
| `memory-architecture.proposed.md` | Memory Architecture | Memory as layered percolation with specific folder patterns. |
| `progressive-elevation.md` | Progressive Elevation & Decay | Five layers of portability with specific klappy.dev paths. |

### Repository Structure

| File | Title | Summary |
|------|-------|---------|
| `repo-topology.md` | Repository Topology | What lives where and what changes when. Complete folder structure. |
| `repo-truth.md` | Repository Truth | `attempt:cleanup` command and branch roles (`prod`, `main`, `attempt/*`). |
| `repo-truth-audit.md` | Repo Truth Audit | Specific files to read for epistemic audit. |
| `drift-checks.md` | Drift Checks | `npm run verify:contracts` and drift prevention with specific contracts. |

### Product Lanes

| File | Title | Summary |
|------|-------|---------|
| `product-lanes.md` | Product Lanes | The three lanes (website, ai-navigation, agent-skill) and their structure. |
| `lane-build-layout.md` | Lane Build Layout | How lanes avoid `/src` and `/dist` collisions with Cloudflare. |
| `lane-implementation-surfaces.md` | Lane-Scoped Implementation Surfaces | Each lane owns `products/<lane>/src` and `products/<lane>/dist`. |
| `epochs.md` | Epochs | Named periods including E0003 evidence requirements with Cloudflare specifics. |

---

## 🔧 What Makes These Implementation-Specific

These appendices contain:

- Absolute paths specific to this repository (`/products/`, `/docs/PRD.md`, `/infra/`)
- Specific CLI commands (`attempt:register`, `attempt:nuke`, `npm run verify:contracts`)
- Branch names specific to this workflow (`prod`, `main`, `attempt/*`)
- Tool-specific configuration (Cloudflare Pages, git worktrees)
- Lane names specific to klappy.dev (`website`, `ai-navigation`, `agent-skill`)

---

## 🧭 When to Read What

**Setting up a new lane?** Start with `product-lanes.md` and `lane-implementation-surfaces.md`.

**Understanding attempt workflow?** Read `attempt-lifecycle.md` and `evidence.md`.

**Building compilation packs?** Read `compilation.md`, `compiled-memory.md`, and `compilation-targets.md`.

**Debugging drift?** Read `drift-checks.md`, `repo-truth.md`, and `repo-truth-audit.md`.

---

## 🔗 Relationship to ODD Appendices

| ODD Appendix | Implementation Appendix | Relationship |
|--------------|------------------------|--------------|
| `/odd/appendices/evolution-not-automation.md` | `attempt-lifecycle.md` | Philosophy → Procedure |
| `/odd/appendices/failure-driven-modularity.md` | `product-lanes.md` | Concept → Structure |
| `/odd/appendices/quantum-development.md` | `attempt-lifecycle.md` | Theory → Practice |
| `/odd/appendices/alignment-reviews.md` | `repo-truth-audit.md` | What to review → How to audit |


---

## Repository Topology

*Source: `docs/appendices/repo-topology.md`*


# Repository Topology

> What lives where, what changes when, and how concerns stay decoupled.

## Description

The repository separates Application Plane (disposable per attempt), Content Plane (evolves independently), and Infrastructure Plane (persists across attempts). Each product lane owns its implementation under `products/<lane>/src/` with no root-level `/src/` directory. This topology makes restartability cheap by keeping app disposable, content accumulating, infrastructure persisting, and attempts archived.

## Outline

- Why This Appendix Exists
- Core Topology
- What Lives Where
- What Changes When
- Source of Truth
- One Active App Per Lane
- Generated vs Source
- Deployment Preservation
- Summary

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** What lives where and what changes when

---

## Why This Appendix Exists

This appendix answers:
- "Where does stuff go?"
- "What moves vs what stays stable?"
- "What is allowed to change without triggering a new attempt?"

It encodes the decoupling between App, Content, and Infrastructure planes.

---

## Core Topology

```
/products/<lane>/src/           # Lane application (disposable per attempt)
/products/<lane>/dist/          # Lane build output (generated)
/products/<lane>/attempts/      # Lane attempts (sealed, immutable after seal)
/canon/                         # Canon documents (evolves independently)
/odd/                           # ODD public docs (evolves independently)
/about/                         # About docs (evolves independently)
/projects/                      # Project docs (evolves independently)
/infra/                         # Infrastructure (persists across attempts)
/docs/                          # Operational docs + PRD versions
/attempts/                      # LEGACY (read-only, see /attempts/README.md)
/public/content/                # Generated (by sync script)
/dist/                          # Legacy/transitional mirror (generated)
```

> **Lane-contained architecture:** Each product lane owns its own app plane under `products/<lane>/src/` and its attempts under `products/<lane>/attempts/`. There is no root-level `/src/` directory. Root `/attempts/` is legacy.

---

## What Lives Where

### Application Plane (`products/<lane>/src/`)

**Disposable per attempt. Lane-scoped.**

Each product lane (website, ai-navigation, agent-skill) has its own application plane:
- `products/website/src/`
- `products/ai-navigation/src/`
- `products/agent-skill/src/`

Contains:
- UI components
- Routing logic
- State management
- Rendering code

This folder can be deleted and rebuilt from scratch for each attempt via `attempt:nuke --lane <lane>`.

### Content Plane (`/canon/`, `/odd/`, `/about/`, `/projects/`)

**Evolves independently of attempts.**

Contains:
- Canon documents
- ODD philosophy
- About pages
- Project documentation

Content changes do not require a new attempt.  
Content is synced to `/public/content/` for the webapp.

### Infrastructure Plane (`/infra/`)

**Persists across attempts.**

Contains:
- Build scripts
- Sync scripts
- Verification scripts
- Deployment configuration

Infrastructure changes rarely.  
When it does, the change benefits all future attempts.

### PRD Versions (`/docs/PRD/`)

**Living drafts.**

Contains:
- PRD drafts and working versions
- PRD template

These are editable until frozen into an attempt.

### Sealed Attempts (`/products/<lane>/attempts/`)

**Lane-contained. Immutable after seal.**

Contains:
- Frozen PRD per version (`prd-vX.Y/PRD.md`)
- Attempt records (`attempt-NNN/`)
- Evidence bundles

Once sealed, these folders are not modified.

Note: Root `/attempts/**` is legacy (read-only). New attempts are lane-contained.

---

## What Changes When

| Change Type | Location | Triggers New Attempt? |
|-------------|----------|----------------------|
| Fix a typo in Canon | `/canon/` | No |
| Add a new ODD appendix | `/odd/` | No |
| Update build script | `/infra/` | No |
| Redesign the UI | `products/<lane>/src/` | Yes (same or new PRD) |
| Add new feature | `products/<lane>/src/` | Yes (requires PRD) |
| Add new content doc | `/about/`, `/projects/` | No |
| Change manifest schema | `/canon/meta/` | No (but may affect app) |

---

## Source of Truth

| Asset | Source | Synced To |
|-------|--------|-----------|
| Content manifest | per-file frontmatter in `/canon/`, `/odd/`, `/about/`, `/projects/` | `/public/content/manifest.json` |
| Markdown content | `/canon/`, `/odd/`, `/about/`, `/projects/` | `/public/content/` |
| PRD (frozen) | `/products/<lane>/attempts/prd-vX.Y/PRD.md` | N/A (immutable) |
| Evidence | `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/evidence/` | N/A (immutable) |

---

## One Active App Per Lane

Each lane contains **one active app implementation** in `products/<lane>/src/`.

Prior attempts are preserved by:
- Git history
- Sealed attempt records in `/products/<lane>/attempts/`
- Commit SHAs in `META.json`

There are no `/app-v1`, `/app-v2` folders.  
There is one `products/<lane>/src/` per lane that gets rebuilt.

---

## Generated vs Source

| Type | Location | How Updated |
|------|----------|-------------|
| Source | `/canon/`, `/odd/`, `/about/`, `/projects/` | Manual edit |
| Generated | `/public/content/` | `npm run sync` |
| Generated | `/products/<lane>/dist/` | `npm run build -- --lane <lane>` |

**Rule:** Edit source, sync generates output.

---

## Deployment Preservation

Each attempt may be deployed as a preview during development. See [Attempt Lifecycle](/docs/appendices/attempt-lifecycle.md) for how deployments fit into the broader attempt model.

Attempt metadata (`META.json`) stores:
- `sealed_commit` — the commit SHA (truth)
- `deploy.production_url` — live site URL (if applicable)
- `deploy.preview_url` — branch/commit preview URL
- `deploy.provider` — deployment platform (e.g., cloudflare-pages)

Preview URLs are treated as evidence artifacts and must be recorded when sealing.

**Resurrection path:** To resurrect any attempt, check out the `sealed_commit` and redeploy. The attempt record contains everything needed.

Branches used during development are ephemeral. The durable record is the commit SHA and recorded URLs, not the branch name.

---

## Summary

- **App is disposable** — rebuilt per attempt
- **Content accumulates** — evolves independently
- **Infrastructure persists** — shared across attempts
- **Attempts are archived** — sealed and immutable
- **PRDs are versioned** — frozen when attempted
- **Deploys are recorded** — preview URLs preserved in metadata

This topology makes restartability cheap and keeps concerns decoupled.

---

**Status:** Appendix stable for v0.1


---

## Repo Truth Audit (Epistemic Audit)

*Source: `docs/appendices/repo-truth-audit.md`*


# Repo Truth Audit (Epistemic Audit)

> A repeatable ritual to detect epistemic drift across canon, docs, tooling, and structure.

## Description

Epistemic drift occurs when documentation, tooling, structure, or process encode conflicting truths about how the system works. The audit inventories all sources of truth, identifies contradictions, ambiguities, and deprecated references, then classifies findings and proposes minimum corrective actions. Constraints prohibit inventing new philosophy, rewriting Canon, or fixing by adding more rules—prefer deletion or clarification over expansion.

## Outline

- Definition
- Read the Following FIRST
- Audit Scope
- Your Tasks
- Constraints
- Output Format

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** A repeatable audit ritual to detect epistemic drift across canon, docs, tooling, and structure

---

You are performing a **Repo Truth Audit**.

Your role is **NOT** to implement features.  
Your role is to **detect epistemic drift**.

## Definition

**Epistemic drift** occurs when documentation, tooling, structure, or process encode conflicting truths about how the system works.

---

## Read the Following FIRST (in order)

1. `/docs/appendices/repo-truth.md`
2. `/docs/appendices/product-lanes.md`
3. `/docs/appendices/epochs.md`
4. `/docs/ATTEMPTS.md`
5. `/docs/ATTEMPT_KICKOFF.md`
6. `/docs/AGENT_ENTRYPOINT.md`

---

## Audit Scope

- Canon vs docs vs tooling
- Single-PRD assumptions vs multi-lane reality
- Attempt lifecycle consistency
- Folder structures vs documented invariants
- Terminology consistency (lane, PRD, attempt, epoch, promotion)
- Deprecated concepts that still appear as instructions

---

## Your Tasks

### 1. Inventory all sources of “truth” in the repo

- Canon rules
- Docs procedures
- CLI behavior
- Folder structures

### 2. Identify drift

- Statements that contradict each other
- Instructions that no longer match reality
- Concepts defined in one place but used differently elsewhere
- Dead rules (documented but unenforced)
- Enforced behavior that is undocumented

### 3. Classify findings into

- ❌ Contradiction (must be fixed)
- ⚠️ Ambiguity (should be clarified)
- 🪦 Deprecated but still referenced
- ✅ Consistent and aligned

### 4. For each ❌ or ⚠️ item

- Cite exact file + section
- Explain the conflict
- Propose the *minimum* corrective action
- DO NOT implement yet

---

## Constraints

- Do NOT invent new philosophy
- Do NOT rewrite Canon
- Do NOT fix by adding more rules
- Prefer deletion or clarification over expansion

---

## Output Format

## Repo Truth Audit — Findings

### ❌ Contradictions
- Item 1
- Item 2

### ⚠️ Ambiguities
- Item 1

### 🪦 Deprecated References
- Item 1

### ✅ Verified Alignment
- Item 1

### Recommended Next Actions
- Ordered, minimal steps

If the repository is clean, explicitly say:

“The repository is epistemically aligned.”



---

## Repository Truth & Epistemic Hygiene

*Source: `docs/appendices/repo-truth.md`*


# Repository Truth & Epistemic Hygiene

> If the repository is dirty, conclusions drawn from it are invalid.

## Description

In AI-assisted development, state residue is indistinguishable from signal—unclean repositories produce false confidence, failures, and learning. A repository is dirty when orphaned worktrees, detached HEADs, stale branches, overlapping attempts, or ambiguous production state exist. `attempt:cleanup` is a reset of epistemic state that guarantees only sealed attempts and intentional branches remain.

## Outline

- Core Principle
- What "Dirty" Means
- `attempt:cleanup` as a Truth Reset
- Why This Matters
- The Truth Boundary
- Branch Roles as Epistemic Contracts
- Orientation Note

---

## Content

## Core Principle

> **If the repository is dirty, conclusions drawn from it are invalid.**

In AI-assisted development, state residue is indistinguishable from signal.
Unclean repositories produce false confidence, false failures, and false learning.

This project treats repository cleanliness as a prerequisite for reasoning.

---

## What "Dirty" Means

A repository is considered dirty when:

- orphaned worktrees exist
- detached HEADs remain
- stale branches survive past their relevance
- attempts overlap in filesystem state
- production state is ambiguous

When this happens, outcomes cannot be trusted.

---

## `attempt:cleanup` as a Truth Reset

`attempt:cleanup` is not housekeeping.

It is a **reset of epistemic state**.

Running cleanup guarantees:

- only sealed attempts remain
- only intentional branches exist
- production state is explicit
- new attempts begin without contamination

Without cleanup, experimentation collapses into folklore.

---

## Why This Matters

Quantum Development relies on comparing independent observations.

Independence is meaningless if the filesystem lies.

Therefore:

- cleanup is mandatory
- residue is failure
- convenience never overrides truth

---

## The Truth Boundary

```
┌─────────────────────────────────────────────────────────────┐
│                     TRUTH BOUNDARY                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   INSIDE (trustworthy)          OUTSIDE (suspect)           │
│   ─────────────────────         ──────────────────          │
│   • prod branch                 • orphaned worktrees        │
│   • main branch                 • detached HEADs            │
│   • sealed attempts             • stale branches            │
│   • explicit state              • filesystem residue        │
│                                                             │
│   `attempt:cleanup` moves everything INSIDE                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Branch Roles as Epistemic Contracts

| Branch | Role | Can Be Nuked? |
|--------|------|---------------|
| `prod` | Production truth | ❌ Never |
| `main` | Experiment ledger | ⚠️ Only via promotion |
| `attempt/*` | Hypotheses | ✅ Always |

These aren't conventions. They're contracts about what can be trusted.

---

## Orientation Note

This document explains *why* the rule exists.
Procedures for enforcing it live elsewhere.

See:
- `/docs/ATTEMPTS.md` — attempt lifecycle procedures
- `/docs/ATTEMPT_KICKOFF.md` — agent kickoff instructions
- `/docs/CLOUDFLARE_CONFIG.md` — deploy branch mapping


---

## Attempt Workflow (Human)

*Source: `docs/ATTEMPT_KICKOFF.md`*


# 🚀 Attempt Workflow (Human)

This document describes the **human workflow** for running attempts.

**For agents:** Go directly to `/docs/AGENT_KICKOFF.md` — that is the canonical agent entry point.

---

## Canonical Lane Kickoff Prompts

Agents do NOT use one-off prompts.

All attempts must start from the lane's canonical kickoff prompt:

- Website: `/infra/prompts/attempt-kickoff/website.md`
- AI Navigation: `/infra/prompts/attempt-kickoff/ai-navigation.md`
- Agent Skill: `/infra/prompts/attempt-kickoff/agent-skill.md`

Bootstrap (optional): `/infra/prompts/attempt-kickoff/BOOTSTRAP.md`

---

## E0003.1 Completion Rule (Evidence Discoverable)

An attempt is NOT complete unless its deployed build exposes **discoverable** evidence.

**Required URLs (must return HTTP 200):**

- `/_evidence/index.html` — human-browsable evidence index
- `/_evidence/index.json` — machine inventory
- `/_evidence/EVIDENCE.md` — summary + links

**Required proof assets:**

- At least **1 screenshot** in `/_evidence/screenshots/`
- AND at least **1 recording** in `/_evidence/recordings/` OR **3 screenshots total**

Markdown alone does not count as proof.

**Build enforcement:**

When `.attempt.json` exists:
- Build FAILS if evidence folder is missing
- Build FAILS if required documents are missing
- Build FAILS if proof assets are insufficient
- Build FAILS if index generation fails

**If `/_evidence/index.html` returns 404, the attempt is INVALID.**

See `/docs/decisions/D0014-e0003-evidence-first-era.md` for the epoch decision.

---

## ⚠️ Before Starting

1. **Identify which lane this attempt belongs to:**
   - `website` — human-facing UI/UX
   - `ai-navigation` — AI layer over documentation
   - `agent-skill` — agent cognitive framework
2. Checkout `main`
3. Ensure repository is clean:
   - `git status` shows nothing to commit
4. Commit all changes that define the experiment:
   - Lane PRD (e.g., `/docs/PRD/website/PRD.md`)
   - Contracts (`/infra/contracts/`)
   - Canon docs (if updated)
5. (Optional) Create worktrees if running parallel agents
6. (Optional) Run `npm run attempt:cleanup` to prune stale branches/worktrees

**Rule:**  
If it is not committed before Cursor starts, it does not exist.

**Rule:**  
Every attempt MUST declare a lane. Attempts without a lane are invalid.

**Rule:**  
Before registration, declare the current epoch. Epoch determines comparability of outcomes. If `epoch_id` is missing, results must not be compared to prior attempts.

See `/docs/appendices/product-lanes.md` for the multi-lane architecture.  
See `/docs/appendices/epochs.md` for epoch semantics.

---

## 🤖 Starting Agents

Point each agent at:

**`/docs/AGENT_KICKOFF.md`**

That file is the canonical, self-contained entry point. Do not paste external prompts.

The file contains all instructions agents need:
- Lane declaration
- Registration
- Nuke
- Build
- Evidence

---

## ✅ After All Agents Finish

On `main` branch:

```bash
# 1. Import artifact folders from all attempt branches for the lane
npm run attempt:import -- --lane <lane> --prd <active>
```

**Invariant:** This command **MUST NOT** merge application code (`products/<lane>/src`).  
Only sealed attempt artifacts (`_runs/` folders) are imported.

```bash
# 2. Finalize runs (assign attempt-001, 002…)
npm run attempt:finalize -- --lane <lane> --prd <active>

# 3. Review evidence + preview URLs in each attempt folder

# 4. Promote winner to production
npm run attempt:promote -- --lane <lane> --prd <active> --attempt 001
```

**Note:** `<lane>` is the product lane (e.g., `website`).  
**Note:** `<active>` is the PRD version from the lane's PRD (e.g., `v1.0`).

---

## 🛠️ CLI Reference

| Command | Purpose |
|---------|---------|
| `npm run attempt:nuke -- --lane <l>` | Blank slate — delete `products/<lane>/src`, lane configs |
| `npm run attempt:register -- --lane <l> --tool <t> --agent <id> --model <m>` | Register run with lane + provenance |
| `npm run attempt:submit` | Commit + push (triggers CF preview) |
| `npm run attempt:import -- --lane <l> --prd <v>` | Pull artifacts from branches to main |
| `npm run attempt:finalize -- --lane <l> --prd <v>` | Assign attempt numbers for lane |
| `npm run attempt:promote -- --lane <l> --prd <v> --attempt <n>` | Merge lane champion → main → prod |
| `npm run attempt:cleanup` | Prune stale worktrees and branches |

**Lane is required for register, import, finalize, and promote commands.**
Valid lanes: `website`, `ai-navigation`, `agent-skill`

---

## 📁 Artifact Locations

Attempt artifacts live at (lane-contained):

```
/products/<lane>/attempts/prd-vX.Y/attempt-NNN/
```

**During attempt:**
```
products/<lane>/attempts/prd-<version>/_runs/<run_id>/
```

**After finalize:**
```
products/<lane>/attempts/prd-<version>/attempt-001/
products/<lane>/attempts/prd-<version>/attempt-002/
```

**Locked folder structure:** `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/`

**Note:** Root `/attempts/**` is legacy and read-only. See `/attempts/README.md`.

**Completion gates (E0003+):**
- Branch pushed to origin
- Cloudflare preview deployment is live
- HTTP 200 for:
  - `/`
  - `/_evidence/`
- `/_evidence/` includes:
  - index.html
  - index.json
  - ATTEMPT.md
  - EVIDENCE.md
  - META.json
  - proof assets (screenshots/recording per contract)

---

## 📜 Deploy Contract

See `/infra/contracts/build-output.md`

- Output must be `products/<lane>/dist/index.html`
- Must load `/public/content/manifest.json`
- Stack choice is unrestricted
- No client secrets

See `/docs/appendices/lane-implementation-surfaces.md` for the locked folder contract.

---

## 🔗 Cloudflare Previews

Any `git push` to an attempt branch creates a preview:

```
https://<branch-slug>.klappy-dev.pages.dev
```

Preview URLs are evidence artifacts, not permanent guarantees.

---

## 🚨 Online Evidence Requirement (Non-Negotiable)

**An attempt is INVALID unless it provides online evidence.**

Before an attempt can be marked complete, the agent MUST:

1. **Push the attempt branch to `origin`**
2. **Provide the Cloudflare Preview URL** for the branch
3. **Provide the online Evidence URL** (where EVIDENCE.md is viewable)

| Condition | Result |
|-----------|--------|
| Agent cannot push the branch | Attempt is **INVALID** |
| Cloudflare Preview URL missing | Attempt is **INVALID** |
| Evidence URL missing | Attempt is **INVALID** |
| "Works on my machine" only | Attempt is **INVALID** |

Local builds and previews are allowed during development, but they **do not satisfy** the Definition of Done.

See `/docs/appendices/online-evidence.md` for the full requirement.

---

## 🔑 Key Mental Model

| Principle | Meaning |
|-----------|---------|
| Humans define the experiment | PRD, contracts, canon are committed before agents start |
| Agents execute in isolation | Each agent has its own worktree/branch |
| Git commits define reality | Uncommitted work doesn't exist |
| Cleanup is epistemic, not cosmetic | Dirty repos invalidate conclusions |
| Promotion is the only path to prod | Champions merge to main, then fast-forward to prod |

---

## 🔗 Related Documents

- **Product Lanes Architecture: `/docs/appendices/product-lanes.md`** (READ FIRST)
- **Online Evidence Requirement: `/docs/appendices/online-evidence.md`** (no URL = invalid attempt)
- **Preview Guide: `/docs/PREVIEW.md`** (local + Cloudflare preview how-to)
- **Interface Contracts: `/interfaces/index.md`** (semver'd compatibility promises)
- **Lane Build Layout: `/docs/appendices/lane-build-layout.md`** (how lanes avoid /src and /dist collisions)
- **Agent Entry Point: `/docs/AGENT_KICKOFF.md`** (canonical agent instructions)
- Attempt lifecycle (deep): `/docs/ATTEMPTS.md`
- Deploy contract: `/infra/contracts/build-output.md`
- Cloudflare config: `/docs/CLOUDFLARE_CONFIG.md`
- Decision log: `/docs/decisions/`
- Repo truth principle: `/docs/appendices/repo-truth.md`
- Drift Checks: `/docs/appendices/drift-checks.md`


---

## Attempt Record Packs

*Source: `docs/ATTEMPT_RECORD_PACK.md`*


# 📦 Attempt Record Packs

An attempt produces immutable evidence and metadata that MAY be merged
before a winner is chosen.

## SHA Model

Each attempt tracks:

- `attempt_head_sha`: build + evidence commit
- `record_pack_merge_sha`: merge of attempt records into main
- `champion_merge_sha`: merge of winning src (optional)

Auditability is preserved by never reusing SHAs.

## Evidence Location

Evidence is always exposed at:

```
/_evidence/
```

This URL must return HTTP 200 on any deployed build.

## Minimum Proof

- 1 video recording OR
- 3 screenshots

Markdown alone does not count.

## Merge Policy

Attempt records MAY be merged to main before a champion is selected.
This preserves auditability without blocking parallel work.

The winning attempt's source code is merged separately via `champion_merge_sha`.


---

## Attempt Lifecycle

*Source: `docs/ATTEMPTS.md`*


# 🧭 Attempt Lifecycle — Orientation

> **If the repository is dirty, conclusions drawn from it are invalid.**

This document explains the mental model behind attempts: what they are, why they exist, and how they fit together.

**For step-by-step procedures, see:** `/docs/ATTEMPT_KICKOFF.md`  
**For the agent entry point, see:** `/docs/AGENT_KICKOFF.md`

---

## 📌 Core Principles

1. **One active implementation per lane:** `products/<lane>/src/` is disposable; prior attempts are preserved by git history + sealed records.
2. **PRD lanes are independent:** Each product lane (website, ai-navigation, agent-skill) has its own PRD, attempts, and lifecycle. Lanes share canon, not lifecycle.
3. **PRD versions are first-class:** A PRD version can have multiple attempts.
4. **Provenance is truth:** `META.json` stores who made what (tool, agent, model) AND which lane, not branch names.
5. **Artifacts always merge:** Even failed attempts contribute learnings.
6. **Production is explicit:** Only the `prod` branch deploys to production.

> **Every attempt MUST declare a lane before registration. Attempts without a lane are invalid.**

See `/docs/appendices/product-lanes.md` for the multi-lane architecture.

---

## 🌿 Branch Roles

| Branch | Purpose | Can Be Nuked? |
|--------|---------|---------------|
| `prod` | Live production deployment | ❌ Never |
| `main` | Experiment aggregation + history + PRD truth | ⚠️ With care |
| Agent branches | Ephemeral workspaces (Cursor worktrees, etc.) | ✅ Always |

> **Branch names are convenience. Provenance lives in META.json.**

See `/docs/CLOUDFLARE_CONFIG.md` for deploy behavior.

---

## 🧠 What is an Attempt?

An **attempt** is a bounded effort to implement a specific PRD version. When an attempt is complete (or abandoned), it is **sealed**:

- No further work is done on that attempt
- Evidence is captured
- `META.json` records provenance + sealed commit SHA
- Artifacts merge to `main`

Multiple attempts against the same PRD version are expected (fail, retry with different approach).

### Attempt Origin Variations

Attempts may originate from different sources while targeting the same PRD:

- Different tools (Cursor, VS Code, CLI)
- Different AI models (opus-4.5, gpt-4o, claude-sonnet)
- Different approaches or architectures
- The same prompt interpreted differently

Parallel agent runs are treated as distinct attempts. Provenance tracking ensures they can be compared meaningfully.

See `/odd/appendices/quantum-development.md` for the orientation model behind this practice.

---

## 🧹 Fresh Start Requirement

**Attempts must start from a blank slate.**

`attempt:nuke --lane <lane>` deletes `products/<lane>/src/` and removes lane-local framework configs so the agent can choose any stack that satisfies the deploy contract.

This ensures:
- No inherited UI patterns
- No framework bias (React, Vue, Svelte — all valid)
- True independence between attempts
- No cross-lane contamination

See `/docs/appendices/lane-implementation-surfaces.md` for the locked folder contract.

---

## 🚀 How Attempts Work (Current Model)

### During an Attempt

1. **Each agent starts in its own workspace** (Cursor worktree, branch, etc.)
2. **Declare lane and register** (lane declaration is MANDATORY):
   ```bash
   npm run attempt:register -- --lane website --tool cursor --agent a --model "opus-4.5"
   npm run attempt:nuke -- --lane website
   ```
3. **Build from lane PRD** — implement against the lane's PRD (e.g., `/docs/PRD/website/PRD.md`)
4. **Write artifacts** to `products/<lane>/attempts/prd-vX.Y/_runs/<run_id>/`
5. **Push** — triggers Cloudflare preview

### After All Agents Finish

A human runs:
```bash
npm run attempt:finalize -- --prd vX.Y
```

This assigns `attempt-001`, `attempt-002`, etc. based on completion order.

### Collision Avoidance

Attempt numbers are assigned **after** work completes, not before.

`attempt:finalize` sorts completed runs and assigns attempt numbers deterministically. No registry, no race conditions.

---

## 📁 Folder Structure

```
/products/                      # lane implementation surfaces (self-contained)
  website/
    src/                        # website source (disposable)
    dist/                       # website build output (not committed)
    attempts/                   # website lane attempts (CANONICAL)
      prd-v1.0/
        PRD.md                  # frozen PRD for this version
        _runs/                  # in-progress runs (before finalize)
          <run_id>/
            META.json
            ATTEMPT.md
            EVIDENCE.md
            evidence/
        attempt-001/            # finalized attempts
          META.json             # canonical pointers + provenance + lane
          ATTEMPT.md
          EVIDENCE.md
          evidence/
        attempt-002/
          ...
  ai-navigation/
    src/                        # ai-navigation source (disposable)
    dist/                       # ai-navigation build output (not committed)
    attempts/                   # ai-navigation lane attempts
      prd-v1.0/
        ...
  agent-skill/
    src/                        # agent-skill source (disposable)
    dist/                       # agent-skill build output (not committed)
    attempts/                   # agent-skill lane attempts
      prd-v1.0/
        ...
/infra/scripts/                 # build scripts (persist across attempts)
/docs/PRD/                      # active PRDs organized by lane
  website/PRD.md                # website lane PRD
  ai-navigation/PRD.md          # ai-navigation lane PRD
  agent-skill/PRD.md            # agent-skill lane PRD
/attempts/                      # LEGACY (read-only, see /attempts/README.md)
/public/content/                # generated (by sync script)
```

## Attempt Location (Canonical)

All attempt artifacts are lane-contained:

```
/products/<lane>/attempts/prd-vX.Y/attempt-NNN/
```

**Notes:**
- Root `/attempts/**` is legacy and read-only
- Evidence for public verification is always served from the deployed build at: `/_evidence/`

**Locked folder structure:** `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/`

Do NOT use:
- `/attempts/<lane>/prd-vX.Y/attempt-NNN/` (legacy)
- `/attempts/prd-vX.Y/<lane>/`
- `/products/<lane>/attempts/attempt-NNN/` (missing PRD version)

---

## 📎 META.json Schema

Each attempt contains a `META.json` with provenance, lane, and canonical pointers:

```json
{
  "lane": "website",
  "prd_version": "v1.0",
  "epoch_id": "E0002-multi-lane-era",
  "run_id": "a1b2c3d4",
  "attempt": "001",
  
  "tool": "cursor",
  "agent": "a",
  "model": "opus-4.5",
  
  "lane_root": "products/website",
  "dist_dir": "products/website/dist",
  
  "worktree_path": "/path/to/worktree",
  "branch": "run/website/v1.0/cursor/a/opus-45/a1b2c3d4",
  "git_head": "abc123...",
  
  "registered_at": "2026-01-16T10:00:00Z",
  "completed_at": "2026-01-16T12:00:00Z",
  "finalized_at": "2026-01-16T14:00:00Z",
  
  "status": "CLOSED",
  "preview_url": "https://run-website-v10-cursor-a-opus-45-a1b2c3d4.klappy-dev.pages.dev",
  "evidence_index": ["evidence/desktop.png", "evidence/mobile.png"]
}
```

**Lane field is REQUIRED.** Valid values: `website`, `ai-navigation`, `agent-skill`

**Epoch field is REQUIRED.** If `epoch_id` is missing, the attempt is not comparable to other attempts by default. See `/docs/appendices/epochs.md`.

**Key insight:** The commit SHA + provenance fields + lane + epoch are truth. Branch names and tags are convenience.

---

## 📦 Artifacts Always Merge

**Failed attempts still contribute learnings.**

| Output | Merge to main? |
|--------|----------------|
| Artifacts (attempt folder, evidence, PRD patches) | **Always** |
| Code (`products/<lane>/src`, components, etc.) | **Only if Champion** |

### Two Phases Per Attempt

1. **Artifacts merge** (always)
   - Seal attempt folder
   - Commit evidence and closure record
   - Merge to `main`

2. **Code promotion** (only if winner)
   - Champion's code merges to `main`
   - `prod` fast-forwards to `main`
   - Non-winners keep preview URLs but code stays on attempt branch

This ensures every attempt contributes to the knowledge base.

---

## 🔄 What Evolves vs. What is Frozen

| Category | Evolves? | Notes |
|----------|----------|-------|
| `/canon/**` | ✅ Yes | Living orientation docs (shared across lanes) |
| `/docs/PRD/<lane>/PRD.md` | ✅ Yes | Active PRD per lane |
| `/products/<lane>/attempts/prd-vX.Y/PRD.md` | ❌ No | Frozen snapshot |
| `/products/<lane>/attempts/*/attempt-NNN/*` | ❌ No | Sealed record + evidence |

**Note:** Each lane evolves independently. Changes to the website PRD do not affect agent-skill attempts.

---

## 💡 Why This Structure?

- **No filesystem sprawl:** One `products/<lane>/src/` per lane, not `/app-v1`, `/app-v2`, etc.
- **PRD-first:** Clear hierarchy of what was attempted
- **Retry-friendly:** Multiple attempts per PRD version is expected
- **Provenance is truth:** `META.json` ensures attempts are interpretable even if branch names drift
- **Self-contained:** Each attempt has everything needed to understand it

---

## 🔮 Resurrection

To resurrect any sealed attempt:

```bash
git checkout <sealed_commit>
npm install
npm run build
# Deploy to preview or production as needed
```

The attempt folder contains everything needed:
- Exact code state (via commit SHA)
- Evidence (screenshots, logs)
- Provenance (who/what made it)
- Deploy history (URLs where it ran)

---

## 📋 Current Policies

| Decision | Answer |
|----------|--------|
| Are preview deploys required for sealing? | Required for UI changes, optional for doc-only |
| Do we preserve attempt previews permanently? | No — we preserve links + evidence |
| Do failed attempts merge to main? | Artifacts yes, code no |
| How do parallel agents avoid collisions? | `finalize` assigns numbers after completion |
| Must lane src be reset between attempts? | Yes, via `attempt:nuke --lane <lane>` (blank slate) |
| What branch is production? | `prod` (never nuked, explicit promotion only) |

---

## 🛠️ Tooling Summary

| Command | Purpose |
|---------|---------|
| `npm run attempt:register -- --lane <lane> --tool <t> --agent <id> --model <m>` | Register run with lane + provenance |
| `npm run attempt:nuke -- --lane <lane>` | Blank slate — delete `products/<lane>/src` |
| `npm run attempt:submit` | Commit + push (triggers CF preview) |
| `npm run attempt:finalize -- --lane <lane> --prd vX.Y` | Assign attempt numbers for lane |
| `npm run attempt:promote -- --lane <lane> --prd vX.Y --attempt 001` | Promote lane champion to production |
| `npm run attempt:cleanup` | Prune stale worktrees and branches |

**Lane is required for register, nuke, finalize, and promote commands.**

---

## 🔗 Related Documents

- **Product Lanes Architecture: `/docs/appendices/product-lanes.md`** (READ FIRST)
- **Interface Contracts: `/interfaces/index.md`** (semver'd compatibility promises)
- **Lane Build Layout: `/docs/appendices/lane-build-layout.md`** (how lanes avoid /src and /dist collisions)
- Step-by-step workflow: `/docs/ATTEMPT_KICKOFF.md`
- Agent entry point: `/docs/AGENT_KICKOFF.md`
- Deploy behavior: `/docs/CLOUDFLARE_CONFIG.md`
- Decision log: `/odd/decisions/`
- Quantum Development: `/odd/appendices/quantum-development.md`
- Repo Truth: `/docs/appendices/repo-truth.md`
- Drift Checks: `/docs/appendices/drift-checks.md`


---

## Cloudflare Pages Configuration

*Source: `docs/CLOUDFLARE_CONFIG.md`*


# ☁️ Cloudflare Pages Configuration

This document describes how Cloudflare Pages should be configured for the klappy.dev repository.

**Scope:** Deploy behavior only. For attempt workflow mechanics, see `/docs/ATTEMPTS.md`.

---

## 🌿 Branch Roles

| Branch | Purpose | Deploy Target |
|--------|---------|---------------|
| `prod` | Live production deployment | **Production URL** (klappy.dev) |
| `main` | Experiment aggregation + history | Preview URL only |
| Any other branch | Agent workspaces, Cursor worktrees, experiments | Preview URLs |

**Note:** Cloudflare does not require specific branch naming. Any non-`prod` branch that builds successfully gets a preview URL.

---

## ⚠️ Critical Configuration

### Production Branch

**Set the production branch to `prod`, NOT `main`.**

In Cloudflare Pages → Settings → Builds & deployments:

```
Production branch: prod
```

This ensures:
- Only promoted, verified code goes to production
- `main` can be used for experimentation without risk
- Agents can never accidentally deploy to production

### Preview Deployments

**Enable preview deployments for ALL branches.**

In Cloudflare Pages → Settings → Builds & deployments:

```
Preview branches: All non-production branches
```

This ensures:
- Every agent branch gets a preview URL
- Cursor worktrees get preview URLs automatically
- Reviewers can compare multiple attempts side-by-side

---

## 🛠️ Build Configuration

Each lane is deployed as a separate Cloudflare Pages project.

```
Root directory:    .
Build command:     npm run build -- --lane <lane>
Build output:      products/<lane>/dist
```

For example, the `website` lane:
```
Root directory:    .
Build command:     npm run build -- --lane website
Build output:      products/website/dist
```

See `/docs/appendices/lane-implementation-surfaces.md` for the locked folder contract.

> **Legacy / Transitional note (pre-D0013):** Some existing deploy configurations may still publish repo-root `/dist/`. That output is no longer canonical; the canonical build output for lane deployments is `products/<lane>/dist/`.

---

## 📋 Expected Behavior

| Action | Result |
|--------|--------|
| Push to `prod` | Deploys to klappy.dev (production) |
| Push to `main` | Deploys to preview URL (main.klappy-dev.pages.dev) |
| Push to any other branch | Deploys to preview URL (`<branch-slug>.klappy-dev.pages.dev`) |
| `npm run attempt:promote` | Merges champion to `main`, fast-forwards `prod` → deploys to production |

### Promotion Semantics

1. **Artifacts merge first** — attempt evidence merges to `main` before promotion
2. **Champion code merges** — winning attempt's code merges to `main`
3. **`prod` fast-forwards** — `prod` fast-forwards to match `main`
4. **Cloudflare deploys** — `prod` push triggers production deployment

Only champion code reaches production. Losing attempts contribute artifacts but not code.

---

## ✅ Verification

After configuring, verify:

1. **Push to `prod`** → klappy.dev updates
2. **Push to `main`** → main.klappy-dev.pages.dev updates (NOT klappy.dev)
3. **Push to any agent branch** → preview URL generates

---

## 💡 Why This Matters

> **Production and experimentation must never share a mutable surface.**

This configuration ensures:
- Production is always stable
- Experiments are always disposable
- Nuclear resets on `main` never affect production
- Agents can work in parallel without coordination
- One winner ships; losers don't pollute production

---

## 📝 Note on Branch Naming

> **Branch names are optional convenience. Provenance lives in META.json.**

Cloudflare does not depend on specific branch naming conventions. Any branch that:
- Is not `prod`
- Produces a valid `products/<lane>/dist/` on build

Will get a preview URL.

The canonical record of "who made what" lives in `META.json`, not in the branch name.
This keeps the system antifragile — branch naming can drift without breaking provenance.

---

## 🔗 Related Documents

- Attempt workflow: `/docs/ATTEMPTS.md`
- Deploy contract: `/infra/contracts/build-output.md`
- **Interface Contracts: `/interfaces/index.md`** (semver'd compatibility promises)
- **Lane Build Layout: `/docs/appendices/lane-build-layout.md`** (how lanes avoid /src and /dist collisions)
- Decision: `/docs/decisions/D0001-prod-branch-is-production.md`


---

## Concept Snapshot

*Source: `docs/concept.md`*


# 🧠 Concept Snapshot

> **Working Title:** Outcomes-Driven Canon + Evidence-Based Agents

Below is Deliverable 1: Concept Snapshot.

This is intentionally tight, durable, and handoff-ready. It freezes the spine of the idea without dragging along the exploratory noise from this chat.

You can copy this verbatim into a doc, repo, or `/docs/concept.md`.

---

## 1. The Problem

AI coding agents are now capable of generating large amounts of code, UI, and architecture quickly. The limiting factor is no longer generation—it is judgment, consistency, and verification.

In practice, this creates three recurring failures:

**1. Prompt entropy**
- Dozens of fragile prompts and markdown files
- Each tool (Claude Code, Cursor, etc.) requires re-teaching
- Drift over time; nothing is canonical

**2. False completion**
- Agents confidently claim "it works"
- They didn't actually run it
- They didn't verify behavior
- They didn't look at the UI
- A human becomes the QA manager repeating the same objections

**3. Infinite possibility, no curation**
- AI unlocks many valid implementations for the same intent
- Artifacts are increasingly ephemeral
- Maintenance explodes unless abstraction moves up a level

The current workaround—better prompts—does not scale.

---

## 2. Core Insight

The solution is not better prompting.
The solution is a canonical contract.

Instead of embedding "how I think" into prompts, externalize it into a single, versioned source of truth that defines:

- design constraints
- decision rules
- what "done" actually means
- what evidence is required before a claim of success

AI agents must retrieve this canon, translate it into operational constraints, self-audit, and prove compliance with evidence (especially visual) before claiming completion.

This replaces repeated human nagging—not human judgment.

---

## 3. What This Is

This is a system composed of three layers:

**1. Authorial Canon (Human-Facing)**
- First-person documents (website artifacts)
- Constraints, principles, decision rules, QA expectations
- Expresses intent and defaults, not universal law
- Evolves over time

**2. Distribution Layer (MCP)**
- Serves the canon to LLMs and agents
- Provides stable, addressable retrieval
- No duplicated logic or rewritten versions

**3. Agent Contract (Execution-Facing)**
- Agents must:
  - retrieve canon
  - translate first-person intent into neutral constraints
  - build accordingly
  - self-audit
  - produce verification + visual proof
- If evidence cannot be produced, the task is not "done"

---

## 4. What This Is Not

- Not a manifesto meant to convince others
- Not a personality clone or "AI that sounds like me"
- Not a single chat prompt
- Not a magic replacement for judgment or taste
- Not a build system

It is policy + verification, not creativity.

---

## 5. Why MCP Is Involved

MCP is used strictly as a transport and discovery mechanism.

It allows:

- multiple tools to retrieve the same canon
- no re-prompting per environment
- no drift between agents
- explicit provenance ("this rule came from here")

The website remains the canonical source.
MCP exposes it; it does not redefine it.

---

## 6. What "Replace Me" Actually Means

"Replace me" does not mean replacing judgment, creativity, or final responsibility.

It means replacing:

- repeated reminders to follow principles
- repeated questions like "did you actually run it?"
- repeated demands to "prove it visually"

The human role shifts from QA enforcer to reviewer of evidence.

---

## 7. Immediate Outcomes

When this system is in place:

- Prompt sprawl collapses into a single canon
- Agents converge faster
- Failures are explicit instead of hidden
- Autonomous loops improve without human babysitting
- Ephemeral builds are acceptable because outcomes are verified

---

## 8. Why This Matters Now

AI has moved software creation into a space of infinite possibility.
The scarce resource is no longer implementation—it is trustworthy outcomes.

This system treats:

- code as potentially ephemeral
- principles as durable
- verification as mandatory
- curation as the core skill

---

## 9. Next Artifacts (Downstream)

This snapshot feeds directly into:

- an updated PRD
- a first-person canon (constraints, rules, QA contract)
- an agent handoff instruction
- an MCP server design

None of those should re-litigate the ideas above.

---

## ✅ Status

- Concept frozen
- Ready to proceed to Updated PRD


---

## Context Packs and Projection Detail

*Source: `docs/context-packs-and-projection-detail.md`*


# Context Packs and Projection Detail

> Detail levels control how much content is returned, not which content is relevant.

## Description

This document explains how context packs use projection detail to control output density. Document tiers determine epistemic obligation (what must be absorbed). Query-time detail levels determine how much of that content is returned (full, medium, low). These are orthogonal concepts. A Tier 1 document can be projected at low detail. A Tier 3 document can be projected at full detail. Detail controls density; tiers control obligation.

## Outline

- Document Tiers vs Query-Time Detail
- Detail Levels Explained
- How Detail Affects Output
- Degradation When Structure Is Missing
- Common Misunderstandings

---

## Document Tiers vs Query-Time Detail

Two different axes control what appears in a context pack:

| Axis | Question Answered | Set By |
|------|-------------------|--------|
| **Tier** | "How much must I absorb this?" | Document author |
| **Detail** | "How much should I return?" | Query/consumer |

Tiers are fixed properties of documents. Detail is a runtime choice.

**Example:**

A Tier 1 Canon document (high epistemic obligation) might be projected at:
- `full` — return the complete document
- `medium` — return description + outline
- `low` — return title + one-line summary

The tier doesn't change. The projection does.

### Tier 0 Content

Tier 0 is a scope exclusion marker, not an epistemic tier.

Tier 0 content is:

- Never included in default context-packs
- Excluded from agent reasoning contexts
- Not subject to projection detail levels

Projection detail (full, medium, low) applies only to Tier 1–3 content. Tier 0 content is simply absent from the epistemic system.

---

## Detail Levels Explained

Three detail levels are supported:

### `full`

Returns the complete document content.

**Use when:**
- Deep understanding is required
- The document is directly relevant to the task
- Token budget allows

### `medium`

Returns structural content: frontmatter, description, outline, section headers.

**Use when:**
- Orientation is needed but not full content
- Multiple documents must fit in context
- The document is relevant but not primary

### `low`

Returns minimal content: title, one-line summary (blockquote), and possibly description.

**Use when:**
- Existence matters more than content
- Many documents must be referenced
- Token budget is constrained

---

## How Detail Affects Output

Given a well-structured document:

```markdown
---
uri: klappy://example
title: "Example Document"
---

# Example Document

> One-line summary of what this is.

## Description

Two paragraphs explaining the document's purpose and scope.

## Outline

- Section 1
- Section 2
- Section 3

---

## Section 1

[Full content...]

## Section 2

[Full content...]
```

**Projection at different detail levels:**

| Level | Returns |
|-------|---------|
| `full` | Everything |
| `medium` | Frontmatter + title + summary + description + outline |
| `low` | Frontmatter + title + summary |

---

## Degradation When Structure Is Missing

Detail projection depends on document structure. When structure is missing, projection degrades:

| Missing Element | Consequence |
|-----------------|-------------|
| No blockquote summary | `low` falls back to title only |
| No Description section | `medium` falls back to outline or full |
| No Outline section | `medium` returns description + headers |
| No structure at all | All levels return full content |

**Implication:** Documents that follow the template project cleanly. Documents without structure force full inclusion regardless of requested detail.

This is intentional. The cost of bad structure is paid at query time, not authoring time.

---

## Common Misunderstandings

### "Higher detail means more important"

No. Detail controls density, not importance. A `low` detail projection of a critical Tier 1 document is still critical—just compressed.

### "Tier controls how much is returned"

No. Tier controls epistemic obligation. A Tier 3 document at `full` detail returns everything. A Tier 1 document at `low` detail returns minimal content.

### "Detail is set per-document"

No. Detail is set per-query. The same document can be projected at different detail levels for different purposes.

### "Missing structure is fine"

Technically yes. Practically, missing structure means the document cannot be compressed. It will consume full tokens regardless of requested detail.

---

## See Also

- [Epistemic Obligation and Document Tiers](/canon/epistemic-obligation-and-document-tiers.md) — What tiers mean
- [Article Template](/docs/TEMPLATE.md) — Standard structure for projectable documents


---

## D0001: prod Branch Is Production

*Source: `docs/decisions/D0001-prod-branch-is-production.md`*


# D0001 — `prod` Branch Is Production

> Protect production from accidental nuke operations by separating production from experiments.

## Description

The `prod` branch is the sole source of production deployments, while `main` serves as the experiment ledger and history aggregation point. This separation protects production from accidental nuke/reset operations, allows `main` to be freely reset, and makes promotion explicit via merge main → prod. Implementation involves `/infra/scripts/attempt-cli.js` and requires Cloudflare Pages configuration (production branch = `prod`).

## Outline

- Decision statement
- Status: Active
- Why (production protection, experiment isolation)
- Consequences (protection, free reset, explicit promotion)
- Implementation (CLI script, config)
- Evidence (commits)

---

## Content

## Decision

The `prod` branch is the sole source of production deployments. The `main` branch is the experiment ledger and history aggregation point, but never deploys to production directly.

## Status

**Active**

## Why

- Agents running experiments on `main` were accidentally nuking production code
- No clear separation between "what's live" and "what's being tested"
- Need a branch that is **never** touched by experiment tooling
- Production stability requires explicit, intentional promotion

## Consequences

- ✅ Production is protected from accidental nuke/reset operations
- ✅ `main` can be freely reset without affecting live site
- ✅ Promotion to production is explicit: merge main → prod
- ⚠️ Requires Cloudflare Pages configuration change (production branch = `prod`)
- ⚠️ Adds one extra step to the promotion workflow

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdPromote` merges to main, then fast-forwards prod)
- Config: `/docs/CLOUDFLARE_CONFIG.md` documents the branch mapping
- Contract: `/infra/contracts/build-output.md` defines what must be in `products/<lane>/dist`

## Evidence

- Commit: `15b5c2e` — "feat: environment hardening - prod branch, nuke safety, promote to prod"
- Commit: `0cce06d` — "fix: protect production - nuclear reset on main skips /src nuke by default"
- Problem observed: Production was nuked when running `attempt:reset` on `main`


---

## D0002: Attempt Provenance Required

*Source: `docs/decisions/D0002-attempt-provenance-required.md`*


# Attempt Provenance Required

> Every attempt must capture model provenance at registration to enable meaningful comparison between AI models.

## Description

This decision mandates that every attempt capture model provenance (agent, model, tool, git HEAD, timestamp) at registration time. If the model is unknown, the system proceeds but flags the degraded provenance. This enables forensic traceability and meaningful comparison between different AI models and approaches.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0002 — Attempt Provenance Required

## Decision

Every attempt must capture model provenance at registration time. If the model is unknown, proceed but flag the degraded provenance clearly.

## Status

**Active**

## Why

- If we can't tell which model produced which attempt, comparisons are contaminated
- "Unknown model" is not the same as "no provenance" — at least we know it's unknown
- Provenance must be captured at registration, not guessed later
- Enables meaningful comparison between different AI models/approaches

## Consequences

- ✅ Every attempt knows: who made it, what made it, where, when
- ✅ Branch names encode provenance: `run/v0.3/cursor-a/opus-45/abc123`
- ✅ META.json preserves provenance even after worktree is deleted
- ⚠️ Agents must provide `--agent` and `--model` flags
- ⚠️ Warning shown if model not provided (but doesn't block progress)

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdRegister` captures provenance)
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt` instructs agents to provide flags
- Schema: `.attempt.json` and `META.json` include provenance fields

### Provenance Fields

| Field | Source | Purpose |
|-------|--------|---------|
| `agent` | `--agent` flag | Human-friendly label (cursor-a, cursor-b) |
| `model` | `--model` flag | AI model identifier (opus-4.5, gpt-4o) |
| `git_head` | Auto-detected | SHA at registration time |
| `worktree_path` | Auto-detected | Filesystem location |
| `branch` | Auto-detected | Git branch name |
| `registered_at` | Auto-generated | ISO timestamp |

## Evidence

- Commit: `8e49616` — "feat: add model provenance tracking to attempt lifecycle"
- Problem observed: Multiple attempts existed but no way to know which AI model made which


---

## D0003: PRD Version Auto-Detection

*Source: `docs/decisions/D0003-prd-version-auto-detection.md`*


# PRD Version Auto-Detection

> PRD version is parsed from source at runtime, eliminating hardcoded version drift in prompts.

## Description

This decision establishes that PRD versions are automatically parsed from `/docs/PRD.md` at runtime rather than hardcoded in operational prompts. When the PRD version changes, prompts don't need updating—the single source of truth in PRD.md is authoritative. A mismatch guard validates any explicit `--prd` flag against the actual PRD.md content.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0003 — PRD Version Auto-Detection

## Decision

The PRD version is automatically parsed from `/docs/PRD.md` at runtime. Operational prompts must never hardcode evolving identifiers like PRD versions.

## Status

**Active**

## Why

- Hardcoded version strings in prompts cause maintenance drift
- When PRD goes from v0.2 → v0.3, the kickoff prompt shouldn't need updating
- Single source of truth: `/docs/PRD.md` is authoritative
- Eliminates "forgot to update the prompt" class of errors

## Consequences

- ✅ Prompts are version-agnostic and future-proof
- ✅ PRD version changes require only one edit (PRD.md)
- ✅ Mismatch guard prevents accidental version divergence
- ⚠️ PRD.md must have parseable version format
- ⚠️ `--prd` flag still accepted but validated against PRD.md

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`parsePrdVersion()` reads PRD.md)
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt` uses `attempt:register` without version
- Guard: If `--prd` is passed and mismatches PRD.md, command fails

### Parseable Formats

The script accepts either:

```markdown
| **PRD Version** | v0.3 |
```

Or:

```markdown
PRD Version: v0.3
```

## Evidence

- Commit: `bcfbf55` — "feat: make attempt:register version-agnostic"
- Problem observed: PRD went to v0.3 but prompt still said v0.2


---

## D0004: Repo Truth & Cleanup Mandatory

*Source: `docs/decisions/D0004-repo-truth-cleanup-mandatory.md`*


# Repository Truth: Cleanup Is Mandatory

> A dirty repository invalidates conclusions; cleanup resets epistemic state for valid experiments.

## Description

This decision establishes that repository cleanliness is a prerequisite for valid conclusions in AI-assisted development. Orphaned worktrees, stale branches, and detached HEADs contaminate experiments by making filesystem state indistinguishable from intentional signal. Cleanup after each PRD cycle ensures only sealed attempts and intentional branches remain, preserving the independence that Quantum Development requires.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0004 — Repository Truth: Cleanup Is Mandatory

## Decision

If the repository is dirty, conclusions drawn from it are invalid. Cleanup is not housekeeping — it is a reset of epistemic state.

## Status

**Active**

## Why

- In AI-assisted development, state residue is indistinguishable from signal
- Orphaned worktrees, stale branches, and detached HEADs contaminate experiments
- Quantum Development relies on comparing **independent** observations
- Independence is meaningless if the filesystem lies

## Consequences

- ✅ Only sealed attempts remain after cleanup
- ✅ Only intentional branches exist
- ✅ Production state is explicit
- ✅ New attempts begin without contamination
- ⚠️ Requires discipline: cleanup after each PRD cycle
- ⚠️ Some data loss if worktrees weren't properly submitted

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdCleanup` prunes worktrees/branches)
- Philosophy: `/docs/appendices/repo-truth.md` documents the principle
- Automation: `attempt:reset` auto-calls cleanup for PRD-specific branches

### What "Dirty" Means

A repository is dirty when:

- Orphaned worktrees exist
- Detached HEADs remain
- Stale branches survive past relevance
- Attempts overlap in filesystem state
- Production state is ambiguous

## Evidence

- Commit: `e7c88aa` — "feat: add attempt:cleanup command for automatic worktree/branch pruning"
- Commit: `5278f2f` — "docs: encode epistemic hygiene as canonical principle"
- Document: `/docs/appendices/repo-truth.md`
- Problem observed: Old worktrees and branches accumulated, making repo state untrustworthy


---

## D0005: Nuke Command Safety Guards

*Source: `docs/decisions/D0005-nuke-safety-guards.md`*


# Nuke Command Safety Guards

> Branch-aware safety prevents accidental destruction of production code while preserving attempt branch freedom.

## Description

This decision implements tiered safety guards for the `attempt:nuke` command based on branch context. Production (`prod`) can never be nuked, `main` requires explicit `--force` confirmation, while attempt branches can be freely nuked as they are ephemeral by design. Protected paths like `/canon/`, `/docs/`, and `/infra/` are never deleted even during nuke operations.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0005 — Nuke Command Safety Guards

## Decision

The `attempt:nuke` command has branch-aware safety guards: refuses on `prod`, warns and requires `--force` on `main`, allows freely on `attempt/*` branches.

## Status

**Active**

## Why

- Agents were accidentally nuking production code by running reset on `main`
- Need explicit friction before destructive operations on important branches
- `attempt/*` branches are ephemeral by design — no protection needed
- `prod` is sacred — never allow accidental destruction
- `main` is valuable but restorable — allow with confirmation

## Consequences

- ✅ Production (`prod`) cannot be accidentally nuked
- ✅ Main requires explicit `--force` to nuke
- ✅ Attempt branches can be freely nuked (that's their purpose)
- ⚠️ Agents on wrong branch will see errors (intentional friction)
- ⚠️ Human must intervene if nuke is needed on protected branches

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdNuke` checks branch before proceeding)

### Branch Safety Rules

| Branch | Nuke Allowed? | Behavior |
|--------|---------------|----------|
| `prod` | ❌ Never | Hard fail with explanation |
| `main` | ⚠️ With `--force` | Warning, requires explicit override |
| `attempt/*` | ✅ Always | Proceeds immediately |
| Other | ⚠️ With `--force` | Warning, requires explicit override |

### Protected Paths (Never Deleted)

Even during nuke, these are never touched:

- `/canon/`
- `/docs/`
- `/attempts/`
- `/infra/`
- `/public/`
- `/.cloudflare/`
- `/.github/`

## Evidence

- Commit: `15b5c2e` — "feat: environment hardening - prod branch, nuke safety, promote to prod"
- Commit: `0cce06d` — "fix: protect production - nuclear reset on main skips /src nuke by default"
- Problem observed: Running `attempt:reset` on `main` deleted production `/src`


---

## D0006: Dogfooding Requirement

*Source: `docs/decisions/D0006-dogfooding-requirement.md`*


# Dogfooding Requirement

> Agents must apply canon documents to their work, not just read them, validating documentation through actual use.

## Description

This decision mandates that agents building klappy.dev must internalize and apply the canon documents they're showcasing. ATTEMPT.md must demonstrate application of constraints and decision rules through a 9-section self-audit checklist. This validates the documentation itself—if agents can't follow it, the documentation needs fixing.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0006 — Dogfooding Requirement

## Decision

Agents building klappy.dev must actually FOLLOW the canon documents they're showcasing, not just read them. ATTEMPT.md must demonstrate internalization of constraints and decision rules.

## Status

**Active**

## Why

- klappy.dev is a docs site that showcases AI build processes
- If agents don't follow the documented processes, the documentation is unvalidated
- "Read the docs" is not the same as "apply the docs"
- This validates the documentation itself — if agents can't follow it, it needs fixing

## Consequences

- ✅ Documentation is validated by actual use
- ✅ Unclear or contradictory docs get flagged as feedback
- ✅ ATTEMPT.md becomes evidence of process adherence
- ⚠️ More overhead for agents (must document constraint application)
- ⚠️ Self-audit checklist adds 9 sections to ATTEMPT.md

## Implementation

- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt` specifies dogfooding requirement
- Template: ATTEMPT.md template includes self-audit checklist

### Required Canon Documents

| Document | How to Apply |
|----------|--------------|
| `/canon/constraints.md` | Note which constraints were relevant, any overrides |
| `/canon/decision-rules.md` | Note which rules guided approach choices |
| `/canon/self-audit.md` | Complete all 9 sections in ATTEMPT.md |
| `/canon/definition-of-done.md` | Meet all requirements before claiming completion |

### Self-Audit Checklist (9 Sections)

1. Intended Outcome
2. Constraints Applied
3. Decision Rules Followed
4. Verification Performed
5. Evidence Produced
6. UX and Behavior Check
7. Tradeoffs and Risks
8. Maintainability Check
9. Confidence Level

## Evidence

- Commit: `43e8428` — "feat: add dogfooding requirement - agents must apply canon docs not just read them"
- Commit: `157a2f3` — "feat: bulletproof attempt workflow - mandatory completion gates"
- Problem observed: Agents were reading canon docs but not applying them to their work


---

## D0007: Branch Names Are Convenience

*Source: `docs/decisions/D0007-branch-names-are-convenience.md`*


# Branch Names Are Convenience, Provenance Lives in META

> Branch names are optional human convenience; canonical provenance lives in META.json files.

## Description

This decision establishes that branch naming conventions are not authoritative—the canonical record of "who made what" lives in META.json. Since Cursor manages worktrees dynamically and attempt numbers are assigned after finalize, systems cannot rely on specific branch patterns. Cloudflare deploys any branch that builds; docs and tooling must not depend on branch naming conventions.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0007 — Branch Names Are Convenience, Provenance Lives in META

## Decision

Branch names are optional convenience for humans and tooling. The canonical record of "who made what" lives in `META.json`. Cloudflare and the attempt system must not depend on specific branch naming conventions.

## Status

**Active**

## Why

- Cursor manages worktrees and branches dynamically — we can't control names reliably
- Attempt numbers are assigned **after** finalize, not at branch creation
- Agents don't know their attempt number when they start
- Hardcoded branch patterns (like `attempt/prd-v0.2/a001`) were causing doc drift
- Cloudflare deploys any branch that builds — it doesn't parse branch names

## Consequences

- ✅ System is Cursor-proof and future-proof
- ✅ Branch naming can drift without breaking provenance
- ✅ Cloudflare config is simpler (just "any non-prod branch")
- ✅ Docs don't need updating when naming conventions change
- ⚠️ Humans can't infer provenance from branch names alone
- ⚠️ Must check `META.json` to know who made what

## Implementation

- Provenance schema: `.attempt.json` and `META.json` include `tool`, `agent`, `model`, `prd_version`, `run_id`, `git_head`
- Cloudflare: Configured to deploy all non-`prod` branches
- Docs: `CLOUDFLARE_CONFIG.md` describes deploy behavior, not branch naming

### What Gets Namespaced (Durable)

| Field | Location | Purpose |
|-------|----------|---------|
| `prd_version` | META.json | Which PRD |
| `tool` | META.json | cursor, vscode, cli |
| `agent` | META.json | Agent ID within tool |
| `model` | META.json | AI model identifier |
| `run_id` | META.json | Unique identifier |
| `git_head` | META.json | SHA at registration |

### What Does NOT Get Namespaced

- Branch names (convenience only)
- Folder names in worktrees
- Cloudflare subdomain slugs

## Evidence

- Commit: `15dfa26` — "feat: add --tool flag to provenance tracking"
- Document: `/docs/CLOUDFLARE_CONFIG.md` — "Branch names are optional convenience"
- Problem observed: Docs assumed `attempt/prd-v0.2/a001` format, but Cursor doesn't create branches that way


---

## D0008: Register Before Nuke

*Source: `docs/decisions/D0008-register-before-nuke.md`*


# Register Before Nuke

> Registration must precede nuke to preserve provenance before destroying pre-state.

## Description

This decision establishes the mandatory sequence of register → nuke for starting any attempt. Registration captures provenance (agent, model, tool, git HEAD, timestamp) while nuke guarantees independence by deleting inherited code. This order is non-negotiable because nuking before registration loses observer identity and pre-state snapshot, while skipping nuke contaminates outcomes.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0008: Register Before Nuke

**Status:** Active  
**Date:** 2026-01-16  
**Scope:** Attempt lifecycle  

---

## Decision

The required sequence for starting any attempt is:

1. **`attempt:register`** — captures provenance
2. **`attempt:nuke`** — guarantees independence
3. Only then does implementation begin

This order is **mandatory and non-negotiable**.

---

## Why

### If an agent nukes before registering:
- You lose the "observer" identity
- You lose the pre-state snapshot (`git_head`, branch, timestamp)
- You cannot answer: *who did what, with what model, from where?*

### If an agent registers but doesn't nuke:
- You lose independence
- You contaminate outcomes with inherited code
- You lie to yourself about variance between attempts

**Register → Nuke** is the only sequence that satisfies both forensic traceability and experimental purity.

---

## What This Preserves

| Concern | How It's Addressed |
|---------|-------------------|
| Provenance | Registration captures agent, model, tool, git HEAD, timestamp |
| Independence | Nuke deletes `/src` and framework configs — zero inheritance |
| Forensic truth | Pre-state is recorded before it's destroyed |
| Experimental purity | Implementation starts from a true blank slate |

---

## Consequences

1. **Agents cannot skip registration** — attempts without provenance are invalid
2. **Agents cannot skip nuke** — attempts with inherited code are contaminated
3. **The sequence is enforced by documentation and social contract** — tooling may add guardrails but the rule is the rule
4. **META.json becomes the authoritative record** — branch names are convenience, provenance is truth

---

## Implementation Hooks

- `PROMPT_ATTEMPT_KICKOFF.txt`: First actions section explicitly states register → nuke
- `ATTEMPT_KICKOFF.md`: Procedure section documents this order
- `attempt-cli.js`: Could add warnings if nuke is called without prior registration (future enhancement)

---

## See Also

- [D0002: Attempt Provenance Required](./D0002-attempt-provenance-required.md)
- [D0005: Nuke Safety Guards](./D0005-nuke-safety-guards.md)
- [D0006: Dogfooding Requirement](./D0006-dogfooding-requirement.md)


---

## D0009: Multi-Lane PRD Architecture

*Source: `docs/decisions/D0009-multi-lane-prd-architecture.md`*


# Multi-Lane PRD Architecture

> PRDs are organized into independent product lanes, sharing canon but maintaining separate lifecycles.

## Description

This decision supersedes the single-PRD model by introducing independent product lanes (website, ai-navigation, agent-skill). Each lane has its own PRD, attempts, success criteria, and evidence, while canon remains shared gravity. This prevents scope creep, evidence pollution, and confusion about "done" when products have different users, rates of change, and requirements.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0009: Multi-Lane PRD Architecture

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Supersedes:** Single Active PRD rule (formerly in canon/index.md)

---

## Context

The original ODD model assumed a single active PRD at any time (`/docs/PRD.md`). All attempts, evidence, and lifecycle tracked against this single evolutionary line.

This created cognitive collapse when multiple independent products emerged:

1. **Public Website** — human-facing orientation surface
2. **AI Navigation Interface** — AI layer helping humans understand ODD
3. **Agent Cognitive Skill** — agent framework for executing ODD on any project

These have:
- Different users (humans vs AI vs AI-as-tool)
- Different success criteria (screenshots vs citations vs autonomous PRD generation)
- Different rates of change (website can stagnate while agent skill evolves rapidly)
- Different evidence requirements

Forcing them into a single PRD caused:
- Scope creep across unrelated concerns
- Evidence pollution (mobile screenshots don't validate agent reasoning)
- Progress in one area forcing reruns in another
- Confusion about what "done" means

---

## Decision

PRDs are now organized into independent product lanes.

Each lane has:
- Its own PRD at `/docs/PRD/<lane>/PRD.md`
- Its own attempts at `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/` (lane-contained)
- Its own lifecycle, success criteria, and evidence

The three initial lanes are:
- `website` — human-facing UI/UX
- `ai-navigation` — AI over documentation
- `agent-skill` — agent cognitive framework

**Lanes share canon, not lifecycle.**

Canon remains the shared gravity — constraints, decision rules, and definitions that apply to all lanes. Canon evolves via decision logs, not PRDs.

---

## Consequences

### Positive

- **Independence:** Evolve agent skills without touching website PRD
- **Clarity:** Each lane has explicit success criteria
- **Scalability:** Add new lanes without restructuring existing ones
- **Evidence integrity:** Lane-specific evidence stays lane-scoped

### Negative

- **Complexity:** More structure to understand and maintain
- **Tooling updates:** CLI commands now require `--lane` flag
- **Migration:** Existing attempts need mental model adjustment

### Neutral

- **Canon unchanged:** Shared constraints still apply to all lanes
- **Attempt mechanics unchanged:** Same register/nuke/build/seal flow

---

## Constraints

- Every attempt MUST declare a lane before registration
- Attempts without a lane are invalid
- Folder structure is locked: `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/`
- No creative variations on attempt folder structure allowed
- Root `/attempts/**` is legacy (read-only)

---

## Related Documents

- `/docs/appendices/product-lanes.md` — full orientation
- `/docs/ATTEMPTS.md` — updated attempt lifecycle
- `/docs/ATTEMPT_KICKOFF.md` — updated workflow with lane declaration


---

## D0010: Canonical Agent Kickoff

*Source: `docs/decisions/D0010-canonical-agent-kickoff.md`*


# Canonical Agent Kickoff Artifact

> A single authoritative entry point file eliminates agent prompt reconstruction and drift.

## Description

This decision creates `/docs/AGENT_KICKOFF.md` as the only allowed entry point for agent attempts. Rather than expecting agents to compose context from multiple documents, this single file contains all invariants. Humans paste exactly what's in the repo—no external prompts, no helpful context, no reconstruction. The file IS the prompt.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0010: Canonical Agent Kickoff Artifact

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture

---

## Context

After implementing multi-lane PRD architecture (D0009), the agent entry surface became fragmented:

- `/docs/AGENT_ENTRYPOINT.md` — orientation pointers
- `/docs/ATTEMPT_KICKOFF.md` — human workflow with agent notes
- `/docs/ATTEMPTS.md` — lifecycle orientation
- `/docs/appendices/product-lanes.md` — lane architecture

Agents were expected to "compose context" by reading multiple documents. This violated a core principle:

> If it's not in the repo, it doesn't exist.

When a human pastes a "helpful" prompt into Cursor, that prompt is not repo-authoritative. The agent reconstructs intent rather than reading authority.

This creates:
- Drift between what humans think agents should do and what's documented
- Hallucinated procedures based on reasonable-sounding synthesis
- No single source of truth for agent behavior

---

## Decision

Create a single, canonical, copy-pasteable agent kickoff artifact:

**`/docs/AGENT_KICKOFF.md`**

This file:
- Is the ONLY allowed entry point for agent attempts
- Contains all invariants in one place
- Is lane-aware (declares variables, not per-lane copies)
- Explicitly instructs agents to STOP if conflicts are detected

The existing files are rescoped:
- `/docs/AGENT_ENTRYPOINT.md` — now points directly to AGENT_KICKOFF
- `/docs/ATTEMPT_KICKOFF.md` — human workflow only
- `/docs/ATTEMPTS.md` — orientation, not procedure

---

## Consequences

### Positive

- **Single source of truth:** Agents have one authoritative entry point
- **No reconstruction:** Humans paste exactly what's in the repo
- **Conflict detection:** Agents are instructed to stop and report, not guess
- **Scalable:** New lanes are added to the file, not as separate artifacts

### Negative

- **One more file:** Adds to the doc surface area
- **Maintenance:** Must be kept in sync with lane changes

### Mitigations

- AGENT_KICKOFF.md references lane PRDs by path pattern, not hardcoded content
- Lane additions require updating ONE file, not rewriting agent prompts
- File is self-describing: agents can validate it against repo state

---

## The Invariant

If a human wants an agent to start an attempt, they do ONE thing:

> Point the agent at `/docs/AGENT_KICKOFF.md`

No external prompts. No "helpful context." No reconstruction.

The file IS the prompt.

---

## Related Documents

- `/docs/AGENT_KICKOFF.md` — the canonical artifact
- `/docs/AGENT_ENTRYPOINT.md` — now a redirect
- `/docs/appendices/product-lanes.md` — lane architecture
- D0009 — multi-lane PRD architecture


---

## D0011: ODD System Contract 2.0.0

*Source: `docs/decisions/D0011-odd-contract-2.0.0.md`*


# ODD System Contract 2.0.0

> Major version bump introduces multi-lane architecture with explicit epoch boundaries.

## Description

This decision formalizes ODD Contract 2.0.0 with the multi-lane architecture, declaring two epochs: E0001-single-prd-era and E0002-multi-lane-era. The contract lives at `/odd/contract.md` and requires epoch_id in META.json for all new attempts. Breaking changes include lane-scoped PRD locations, lane-scoped attempt locations, and required `--lane` tooling flags.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0011: ODD System Contract 2.0.0

## Status

Accepted

## Context

The ODD system evolved from a single-PRD model to a multi-lane architecture. This change affects:

- Directory structure (PRDs, attempts)
- Tooling requirements (lane flags)
- Mental model (products decoupled, canon shared)
- Comparability rules (epochs required)

These changes are not backwards-compatible. Applying 2.x workflows to 1.x structures, or comparing 2.x attempts to 1.x attempts without adjustment, produces invalid conclusions.

The system needed:
1. A single authoritative version for the ODD contract
2. Clear epoch boundaries
3. A path to mark legacy documents without rewriting history

## Decision

1. **Create `/odd/contract.md`** as the single source of ODD system versioning.
2. **Declare contract version 2.0.0** with the multi-lane architecture.
3. **Define two epochs:**
   - E0001-single-prd-era (contract 1.x)
   - E0002-multi-lane-era (contract 2.x)
4. **Require epoch_id in META.json** for all new attempts.
5. **Preserve Epoch 1 artifacts** as historical records, not errors.

## Consequences

### Positive
- Single source of truth for ODD compatibility
- Clear boundary between eras
- Historical artifacts remain valid in their context
- Future major changes have a pattern to follow

### Negative
- Epoch 1 documents may need headers if kept for reference
- Tooling must be epoch-aware for meaningful comparisons
- Slight overhead in declaring epoch during registration

### Neutral
- PRD versions remain lane-local (unaffected)
- Content pack manifest version is separate (unaffected)

## Breaking Changes in 2.0.0

| Category | 1.x | 2.x |
|----------|-----|-----|
| PRD location | `/docs/PRD.md` | `/docs/PRD/<lane>/PRD.md` |
| Attempt location | `/attempts/prd-vX.Y/attempt-NNN/` | `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/` |
| Lane declaration | N/A | Required |
| Epoch declaration | N/A | Required |
| Tooling flags | None | `--lane` required |

Note: Root `/attempts/**` is legacy (read-only). All new attempts are lane-contained under `/products/<lane>/attempts/`.

## Epoch 1 Document Header (Standard)

For documents kept for historical reference that describe 1.x workflows:

```markdown
> **Epoch 1 Document** (ODD Contract ≤1.x)
>
> Kept for historical context. Current workflow is defined by ODD Contract 2.x.
> See `/odd/contract.md` for the current contract.
```

## Related

- `/odd/contract.md` — the contract itself
- `/docs/appendices/epochs.md` — epoch semantics
- `/docs/appendices/product-lanes.md` — lane architecture
- `/docs/decisions/D0009-multi-lane-prd-architecture.md` — the architectural decision


---

## D0012: E0002 Transition Interpretation (Truth vs Enforcement Lag)

*Source: `docs/decisions/D0012-e0002-transition-interpretation.md`*


# E0002 Transition Interpretation (Truth vs Enforcement Lag)

> During epoch transitions, canon defines truth while tooling may temporarily lag behind.

## Description

This decision addresses the expected gap during E0002 transition where truth (canon/PRDs/contracts) advances faster than enforcement (CLI/build scripts). Canon and lane PRDs define intended truth; tooling lag is temporarily permitted but legacy surfaces must be explicitly labeled. Each contradiction requires selecting ONE canonical truth—no "synthesis truth" allowed.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0012: E0002 Transition Interpretation (Truth vs Enforcement Lag)

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture, D0011-odd-contract-2.0.0

---

## Context

The repository has crossed an epoch boundary into **E0002-multi-lane-era** (ODD Contract 2.x).

A repo truth audit surfaced explicit contradictions between:

- Canon + lane PRDs (intended truth for E0002)
- Docs (mixed E0001/E0002 references)
- Tooling + scripts (partially E0001-encoded invariants)
- Interface contracts (claimed E0002 compatibility; some still encode E0001 shapes)

This is expected during transition: truth (canon/PRDs/contracts) can advance faster than enforcement (CLI/build scripts), and historical artifacts can persist.

---

## Decision

During the E0002 transition:

1. **Canon and lane PRDs define intended truth.**  
2. **Tooling and enforcement may lag (mixed-era is permitted temporarily).**  
3. **Legacy surfaces may remain, but MUST be explicitly labeled as legacy (pre-E0002).**  
4. **Comparability across E0001 ↔ E0002 is limited by default.** If lane and epoch metadata are missing, outcomes are **not comparable by default**.
5. **Each surfaced contradiction requires selecting ONE canonical truth before alignment work begins.** No “synthesis truth” is permitted.

---

## Consequences

### Positive

- Preserves historical evidence without rewriting it into the new model
- Prevents folklore by forcing explicit truth selection per contradiction
- Makes mixed-era state explicitly permissible (and therefore auditable)

### Negative

- Temporary cognitive dissonance: documentation and tooling may disagree
- Requires deliberate convergence work (contracts, docs labeling, tooling alignment)

---

## Operational Rules (Minimal)

- **Label, don’t rewrite:** Prefer small “Legacy (pre E0002)” headers/notes over broad edits.
- **Decide before implementing:** For each contradiction, record the canonical truth first; then align docs/contracts/tooling mechanically.
- **No silent drift:** If contradictions exist, they must be citeable and tracked until resolved.



---

## D0013: Build Output Truth is Lane-Scoped (products/<lane>/dist)

*Source: `docs/decisions/D0013-build-output-lane-scoped-dist.md`*


# Build Output Truth is Lane-Scoped (products/<lane>/dist)

> Lane builds must output to products/<lane>/dist/, eliminating repo-root collision.

## Description

This decision establishes `products/<lane>/dist/` as the canonical build output location for E0002. Multi-lane architecture requires lane-scoped implementation and deployment surfaces—repo-root `/dist` cannot represent multiple lanes without collision. Each lane build must produce `products/<lane>/dist/index.html` to support independent deployment and promotion.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0013: Build Output Truth is Lane-Scoped (products/<lane>/dist)

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture, D0011-odd-contract-2.0.0, D0012-e0002-transition-interpretation

---

## Decision

For ODD Contract 2.x (E0002), the canonical build output location is:

> **`products/<lane>/dist/`**

Specifically, each lane build MUST produce:

- `products/<lane>/dist/`
- `products/<lane>/dist/index.html`

This is required to support product lanes as first-class, independent products.

---

## Why

- Multi-lane PRD architecture (D0009) requires lane-scoped implementation and deployment surfaces.
- Repo-root `/dist` cannot represent multiple lane builds without collision or ambiguity.
- Lane-scoped output enables per-lane Cloudflare Pages projects and per-lane promotion.

---

## Consequences

- Any references to repo-root `/dist` as a universal requirement are **legacy / transitional** and must be labeled as such until aligned.
- Interface contracts and build tooling must converge mechanically to this truth (tracked as alignment work; not part of this decision).
- Verifiers (future `verify:contracts`) must validate lane-scoped output, not repo-root output.

---

## Scope Notes (Non-Decision)

This decision does not prescribe:

- how the build is implemented (Vite, etc.)
- which lanes require a deployable artifact
- manifest runtime URL conventions

It defines only the canonical output location when a lane produces a deployable build artifact.



---

## D0014: Declare E0003 Evidence-First Era

*Source: `docs/decisions/D0014-e0003-evidence-first-era.md`*


# Declare E0003 Evidence-First Era

> Attempts require externally verifiable deployment evidence, not just local build success.

## Description

This decision declares E0003 — Evidence-First Era, requiring attempts to prove success through externally reviewable deployment. An attempt is incomplete until the branch is pushed, Cloudflare preview deploys successfully, and evidence renders at `/_evidence/<run_id>/EVIDENCE.md` with HTTP 200. Attempts that cannot prove deployment must seal as failure.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0014: Declare E0003 Evidence-First Era

**Status:** Accepted  
**Date:** 2026-01-19  
**Decider:** Klappy  
**Epoch:** E0003  
**Related:** D0009 (Multi-lane PRDs), D0012 (Transition Interpretation), D0013 (Lane-scoped dist), Deploy Evidence (klappy://docs/appendices/deploy-evidence)

## Context

Under E0002, attempts could claim success with local build proof and repository artifacts.

In practice, this created invalid conclusions:

- Cloudflare Pages serves only the configured build output directory
- `/attempts/**` is not served by Pages by default
- Agents completed "successful" attempts that never rendered online
- Evidence URLs were often hypothetical or unverified

The system incentivized local-only success and narrative closure instead of externally reviewable proof.

## Decision

We declare **E0003 — Evidence-First Era**.

In E0003, an attempt is not complete unless:

1) The attempt branch is pushed to origin
2) Cloudflare Pages preview deployment succeeds
3) The preview URL returns HTTP 200 and renders the site
4) The evidence URL returns HTTP 200 and renders evidence at:

`/_evidence/<run_id>/EVIDENCE.md`

Additionally:

- Evidence MUST be copied into the lane build output:
  `products/<lane>/dist/_evidence/<run_id>/`
- Attempts that cannot prove (2)-(4) MUST seal as failure

## Consequences

### Positive

- Prevents "success without deployment"
- Makes evidence externally reviewable and durable
- Forces alignment between docs, tooling, and Cloudflare configuration

### Negative

- Adds operational friction (intentional)
- Increases failure rate until tooling and CF projects are correctly configured

## Compatibility

- E0002 attempts remain valid within E0002.
- E0002 attempts are not comparable to E0003 attempts by default.

## Minimal operational rule

If a preview URL cannot be verified, stop.
No additional work is permitted under a false success state.


---

## D0015: Lane PRD Structure Alignment

*Source: `docs/decisions/D0015-lane-prd-structure-alignment.md`*


# D0015 — Lane PRD Structure Alignment

> Lane-root PRD must be authoritative, not an index pointing elsewhere.

## Description

Product lanes must follow a consistent PRD structure where `PRD.md` at lane root contains the actual requirements (mutable, authoritative), not an index pointing to versioned PRDs in subfolders. Version history and learnings links belong in a separate `HISTORY.md`. Frozen PRD snapshots live in `attempts/v{VERSION}/PRD.md`.

## Outline

- Decision
- Status
- Context
- Consequences
- Implementation
- Pattern Recognition
- Evidence

---

## Decision

1. **Lane-root `PRD.md`** is the authoritative, mutable PRD containing current requirements
2. **`HISTORY.md`** tracks version evolution, frozen snapshot links, and learnings links
3. **`attempts/v{VERSION}/PRD.md`** contains frozen snapshots copied at attempt kickoff
4. **Attempt folders** use `v0.X/` naming, not `prd-v0.X/` (the PRD isn't "in" the folder)
5. **Learnings** are documented in attempt evidence folders, never appended to frozen PRDs

---

## Status

**Active**

---

## Context

The Fluent Mobile lane was created with a non-standard structure:

**Problem Structure (before):**
```
products/fluent-mobile/
├── PRD.md                        # INDEX pointing to versioned PRDs
└── attempts/
    └── prd-v0.3/
        └── PRD.md                # Actual PRD content lived here
```

This caused:
1. **Version drift** — Hardcoded version references in multiple places
2. **Confusion** — "Where is the real PRD?" was unclear
3. **Convention violation** — Other lanes (website, agent-skill) had PRD at root
4. **Maintenance burden** — Every version bump required edits in multiple files

**Expected Convention (other lanes):**
```
products/<lane>/
├── PRD.md                        # THE authoritative PRD
└── attempts/
    └── v{VERSION}/
        └── PRD.md                # Frozen snapshot
```

---

## Consequences

### Positive

- ✅ **Single source of truth** — Lane-root PRD is always authoritative
- ✅ **Reduced drift** — Version only needs updating in one place
- ✅ **Convention alignment** — All lanes follow same pattern
- ✅ **Cleaner folder names** — `v0.3/` instead of `prd-v0.3/`
- ✅ **Clear separation** — HISTORY.md for evolution, PRD.md for requirements

### Tradeoffs

- ⚠️ **Migration cost** — Existing lanes with wrong structure need refactoring
- ⚠️ **Link updates** — Internal links must be updated when restructuring
- ⚠️ **Historical artifacts** — JSON files with absolute paths become historical (acceptable)

---

## Implementation

### Files Changed in Fluent Mobile Refactor

| File | Change |
|------|--------|
| `PRD.md` | Now contains actual v0.3 requirements |
| `HISTORY.md` | New file — version table + learnings links |
| `README.md` | Fixed drift, uses dynamic references |
| `KICKOFF.md` | Uses `v{VERSION}` placeholders |
| `attempts/prd-v0.X/` | Renamed to `attempts/v0.X/` |

### Convention Rules

1. **When creating a new lane:**
   - Put actual PRD content in `PRD.md` at lane root
   - Create `HISTORY.md` for version tracking
   - Use `attempts/v{VERSION}/` folder structure

2. **When bumping PRD version:**
   - Update lane-root `PRD.md` with new requirements
   - Add new row to `HISTORY.md` version table
   - Mark old version as CLOSED in HISTORY.md
   - Frozen snapshots remain in their version folders

3. **When starting an attempt:**
   - Copy current lane-root PRD to `attempts/v{VERSION}/PRD.md` as frozen snapshot
   - Document learnings in `attempts/v{VERSION}/attempt-NNN/evidence/`, NOT in PRD

---

## Pattern Recognition

This decision documents a specific instance of a broader pattern:

**Anti-Pattern: Index Files Pretending to Be Authority**

When a file at a canonical location (like `PRD.md`) only points to the real content elsewhere, it creates:
- Confusion about source of truth
- Version drift across multiple files
- Maintenance burden

**Correct Pattern: Authority at Canonical Location**

The file at the canonical location should contain the authoritative content. Metadata, history, and navigation can live in adjacent files.

**Elevation Candidate:**

If this pattern recurs in other contexts (not just PRDs), consider elevating to:
- `/canon/odd/appendices/canonical-authority-pattern.md` — General pattern
- Or adding to `/canon/constraints.md` — As a design constraint

---

## Evidence

### Triggering Commit

- Commit: `2fc6cb6` — "fix(fluent-mobile): remove hardcoded PRD version from Starting an Attempt"
- Problem: PRD.md said v0.3 is active, but instructions said to use v0.2

### Refactoring Commit

- Commit: `530f0d7` — "refactor(fluent-mobile): align lane structure with convention"
- 54 files changed
- Renamed `prd-v0.X/` → `v0.X/` across all versions
- Promoted v0.3 content to lane-root PRD.md
- Created HISTORY.md for version tracking

### Root Cause

Lane was created before convention was fully established. The "versioned PRD in subfolder" approach seemed logical at the time but violated the principle that canonical locations should contain authoritative content.

---

## See Also

- [D0009: Multi-Lane PRD Architecture](./D0009-multi-lane-prd-architecture.md) — Original multi-lane decision
- [Product Lanes](/docs/appendices/product-lanes.md) — Lane architecture documentation
- [Fluent Mobile HISTORY.md](/products/fluent-mobile/HISTORY.md) — Example implementation


---

## Implementation Decision Log

*Source: `docs/decisions/README.md`*


# 📜 Implementation Decision Log

Architecture Decision Records (ADRs) specific to the klappy.dev repository implementation.

> **Relationship to ODD/Canon:** Universal principles live in `/odd/`. Program constraints live in `/canon/`. These decisions document specific choices made for this repository's implementation.

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
| [D0012](./D0012-e0002-transition-interpretation.md) | E0002 transition interpretation (truth can lead enforcement) | **Active** |
| [D0013](./D0013-build-output-lane-scoped-dist.md) | Build output truth is lane-scoped (`products/<lane>/dist`) | **Active** |
| [D0014](./D0014-e0003-evidence-first-era.md) | E0003 evidence-first era (deployment proof required) | **Active** |
| [D0015](./D0015-lane-prd-structure-alignment.md) | Lane-root PRD must be authoritative, not an index | **Active** |

### Repository Hygiene

| ID | Decision | Status |
|----|----------|--------|
| [D0004](./D0004-repo-truth-cleanup-mandatory.md) | Cleanup is mandatory; dirty repos invalidate conclusions | **Active** |

---

## 🔧 What Makes These Implementation-Specific

These decisions reference:

- Specific file paths in this repository (`/products/`, `/docs/PRD.md`, `/infra/`)
- Specific CLI scripts (`/infra/scripts/attempt-cli.js`)
- Specific branch naming conventions (`prod`, `main`, `attempt/*`)
- Specific tooling (Cloudflare Pages, git worktrees)
- Specific product lane names (`website`, `ai-navigation`, `agent-skill`)

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

## Evidence

- Commit: `abc1234`
- Attempt: `/products/<lane>/attempts/v{VERSION}/attempt-NNN/`
```

---

## 🚫 Deprecated Decisions

_None yet._

---

## 🔗 Relationship to ODD and Canon

ODD contains universal principles. Canon contains program constraints. These decisions are the klappy.dev-specific application of those higher-level documents.

| Document | Tier | Related Decisions |
|----------|------|-------------------|
| `/odd/contract.md` | ODD | D0009, D0011, D0012 |
| `/odd/decisions/D0001-three-tier-conceptual-hierarchy.md` | ODD | All (tier separation) |
| `/canon/constraints.md` | Canon | All decisions respect constraints |
| `/docs/appendices/epochs.md` | Docs | D0012, D0014 |


---

## Decision Template

*Source: `docs/decisions/TEMPLATE.md`*


# Decision Template

> ADR-lite template for recording architectural and process decisions.

## Description

This template defines the standard structure for decision records. Decisions document the "why" behind choices that affect the repository, products, or processes. Use this for both `/docs/decisions/` (implementation choices) and `/odd/decisions/` (universal principle choices).

## Outline

- When to Create a Decision
- Numbering Convention
- Template Structure
- Frontmatter by Location

---

## When to Create a Decision

Create a decision record when:

- A choice affects multiple files or systems
- The reasoning would be lost without documentation
- Someone might ask "why did we do it this way?"
- A constraint or rule is being established

Do NOT create a decision record for:

- Trivial implementation choices
- One-off fixes
- Temporary workarounds

---

## Numbering Convention

| Location | Format | Example |
|----------|--------|---------|
| `/docs/decisions/` | `D00XX-slug.md` | `D0015-cache-invalidation.md` |
| `/odd/decisions/` | `D00XX-slug.md` | `D0002-memory-portability.md` |

Numbers are sequential within each folder. Check the folder's README for the next available number.

---

## Frontmatter by Location

### For `/docs/decisions/` (implementation choices)

```yaml
---
uri: klappy://docs/decisions/D00XX
title: "D00XX: Decision Title"
audience: docs
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["docs", "decisions", "topic"]
---
```

### For `/odd/decisions/` (universal principle choices)

```yaml
---
uri: klappy://odd/decisions/D00XX
title: "D00XX: Decision Title"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "decisions", "philosophy", "topic"]
---
```

---

## Template Structure

```markdown
---
uri: klappy://<tier>/decisions/D00XX
title: "D00XX: Decision Title"
audience: docs | canon
exposure: internal | nav
tier: 1 | 2
voice: neutral
stability: stable
tags: ["decisions", "topic"]
---

# D00XX — Decision Title

> One-line summary of what this decision establishes.

## Description

2-3 sentence compressed overview. What was decided? Why does it matter?
This should be self-contained for LLM context.

## Outline

- Decision
- Status
- Context
- Consequences
- Implementation
- Evidence
- Pattern Recognition (Optional)

---

## Decision

[Clear statement of what was decided. Use active voice.]

## Status

**Active** | **Superseded by D00YY** | **Deprecated**

## Context

[Why did this decision need to be made? What problem prompted it?]

## Consequences

- ✅ Positive consequence
- ✅ Another positive
- ⚠️ Tradeoff or cost
- ⚠️ Another tradeoff

## Implementation

[Where is this decision implemented? Files, scripts, configs.]

- Script: `/path/to/script.js`
- Config: `/path/to/config.md`

## Evidence

[What triggered this decision? Commits, incidents, observations.]

- Commit: `abc1234` — "commit message"
- Problem observed: [description]

## Pattern Recognition (Optional)

[Is this decision part of a broader pattern? Could it be elevated?]

- **Anti-pattern identified:** [What failure mode does this prevent?]
- **Elevation candidate:** [Could this become a Canon constraint or ODD principle?]
- **Recurrence check:** [Has this pattern appeared elsewhere?]

If the pattern recurs across multiple decisions or lanes, consider elevating to:
- `/canon/constraints.md` — Program-level constraint
- `/odd/appendices/` — Universal principle
```

---

## Status Values

| Status | Meaning |
|--------|---------|
| **Active** | Currently in effect |
| **Superseded** | Replaced by another decision |
| **Deprecated** | No longer recommended |
| **Proposed** | Under consideration |

---

## See Also

- [Decisions Index](./README.md) — Implementation decisions index
- [ODD Decisions](/odd/decisions/README.md) — ODD decisions index


---

## Canon Distillation Classification

*Source: `docs/DISTILLATION_CLASSIFICATION.md`*


# 📊 Canon Distillation Classification

**Status: COMPLETED (with corrections)**

This document tracks the classification of canon files for the progressive distillation effort.

## Summary of Work Completed

- Classified all 57 canon files as portable or implementation-specific
- Extracted 14 decisions to `/docs/decisions/`
- Extracted 17 appendices to `/docs/appendices/` (originally 18, 1 re-elevated)
- Added progressive distillation structure (Title, Subtitle, Description, Outline, Content) to all files
- Updated cross-references in key canon files
- **Moved ODD to root level**: `/canon/odd/` → `/odd/`
- **Re-elevated `progressive-elevation.md`** back to `/odd/appendices/` (it defines the portability ladder itself)

## Post-Distillation Corrections

| File | Original Classification | Corrected Classification | Reason |
|------|------------------------|-------------------------|--------|
| `progressive-elevation.md` | IMPLEMENTATION | **ODD** | Defines the five-layer portability model - that's universal methodology, not implementation |

## Classification Criteria

**PORTABLE** = Concepts that could apply to any ODD-following repo
- No hardcoded paths or tooling references
- Methodology/philosophy over procedure

**IMPLEMENTATION-SPECIFIC** = Contains this repo's specific implementation details
- Absolute paths (`/products/`, `/docs/PRD.md`, `/infra/`)
- CLI commands (`attempt:register`, `attempt:nuke`)
- Branch names (`prod`, `main`, `attempt/*`)
- Tool-specific config (Cloudflare Pages, git worktrees)
- Lane names (`website`, `ai-navigation`, `agent-skill`)

---

## Canon Root Files (6 files)

| File | Classification | Notes |
|------|---------------|-------|
| `constraints.md` | PORTABLE | Pure methodology |
| `decision-rules.md` | PORTABLE | Pure heuristics |
| `definition-of-done.md` | PORTABLE | Pure methodology |
| `self-audit.md` | PORTABLE | Pure methodology |
| `visual-proof.md` | PORTABLE | Pure methodology |
| `completion-report-template.md` | PORTABLE | Pure template |

---

## Canon ODD Root Files (7 files)

| File | Classification | Notes |
|------|---------------|-------|
| `manifesto.md` | PORTABLE | Pure philosophy |
| `contract.md` | IMPLEMENTATION | Epoch IDs, paths, META.json schema |
| `maturity.md` | PORTABLE | Pure methodology |
| `orientation-map.md` | PORTABLE | Pure mental model |
| `misuse-patterns.md` | PORTABLE | Pure failure modes |
| `prompt-architecture.md` | PORTABLE | Pure methodology |
| `README.md` | STAYS | Index file |

---

## Canon ODD Decisions (15 files)

**ALL DECISIONS → docs/decisions/**

| File | Classification | Notes |
|------|---------------|-------|
| `D0001-prod-branch-is-production.md` | IMPLEMENTATION | Branch names, CLI, Cloudflare |
| `D0002-attempt-provenance-required.md` | IMPLEMENTATION | CLI, META.json, paths |
| `D0003-prd-version-auto-detection.md` | IMPLEMENTATION | Specific paths, CLI |
| `D0004-repo-truth-cleanup-mandatory.md` | IMPLEMENTATION | CLI commands, paths |
| `D0005-nuke-safety-guards.md` | IMPLEMENTATION | CLI, branch names, paths |
| `D0006-dogfooding-requirement.md` | IMPLEMENTATION | klappy.dev specific |
| `D0007-branch-names-are-convenience.md` | IMPLEMENTATION | Cloudflare, META.json |
| `D0008-register-before-nuke.md` | IMPLEMENTATION | CLI commands |
| `D0009-multi-lane-prd-architecture.md` | IMPLEMENTATION | Specific lanes, paths |
| `D0010-canonical-agent-kickoff.md` | IMPLEMENTATION | Specific paths |
| `D0011-odd-contract-2.0.0.md` | IMPLEMENTATION | Epoch IDs, paths |
| `D0012-e0002-transition-interpretation.md` | IMPLEMENTATION | Epoch transitions |
| `D0013-build-output-lane-scoped-dist.md` | IMPLEMENTATION | Specific paths |
| `D0014-e0003-evidence-first-era.md` | IMPLEMENTATION | Cloudflare, evidence URLs |
| `README.md` | STAYS | Index file (will update) |

---

## Canon ODD Appendices (25 files)

| File | Classification | Notes |
|------|---------------|-------|
| `alignment-reviews.md` | PORTABLE | Pure methodology |
| `attempt-lifecycle.md` | IMPLEMENTATION | CLI, paths, META.json |
| `canonical-compression.md` | IMPLEMENTATION | Specific paths |
| `compilation.md` | IMPLEMENTATION | Paths, npm commands |
| `compilation-targets.md` | IMPLEMENTATION | Specific paths |
| `compiled-memory.md` | IMPLEMENTATION | Paths, lanes |
| `deploy-evidence.md` | IMPLEMENTATION | Cloudflare, paths |
| `drift-checks.md` | IMPLEMENTATION | npm commands, contracts |
| `epochs.md` | IMPLEMENTATION | E0003 section is very implementation-specific |
| `evidence.md` | IMPLEMENTATION | Specific path structure |
| `evolution-not-automation.md` | PORTABLE | Pure philosophy |
| `failure-driven-modularity.md` | PORTABLE | Pure methodology |
| `lane-build-layout.md` | IMPLEMENTATION | Cloudflare, lanes |
| `lane-implementation-surfaces.md` | IMPLEMENTATION | Cloudflare, lanes |
| `media-as-learning-layer.md` | PORTABLE | Pure principles |
| `memory-architecture.proposed.md` | IMPLEMENTATION | Folder patterns |
| `online-evidence.md` | IMPLEMENTATION | Cloudflare, paths |
| `product-lanes.md` | IMPLEMENTATION | Specific lanes, paths |
| `progressive-elevation.md` | **ELEVATED TO ODD** | Defines the portability ladder - paths are examples, principle is universal |
| `quantum-development.md` | PORTABLE | Pure methodology |
| `repo-topology.md` | IMPLEMENTATION | All paths |
| `repo-truth.md` | IMPLEMENTATION | CLI, branch names |
| `repo-truth-audit.md` | IMPLEMENTATION | Specific files to read |
| `visual-evolution.md` | PORTABLE | Pure methodology |
| `README.md` | STAYS | Index file (will update) |

---

## Summary

- **PORTABLE (Stay in Canon):** ~18 files
- **IMPLEMENTATION-SPECIFIC (Move to docs/):** ~32 files (14 decisions + 18 appendices)
- **Index files (Stay, update references):** ~4 files

## Extraction Order

1. Move all 14 decisions to `docs/decisions/`
2. Move 18 appendices to `docs/appendices/`
3. Update README indexes in both locations
4. Add progressive distillation structure to all files


---

## ☁️ Cloudflare Pages — Branch Deploys (Observation Infrastructure)

*Source: `docs/infra/cloudflare-branch-deploys.md`*

This document describes how branch deploys support observation and rollback.

It is infrastructure documentation, not Canon.

---

## 🌿 Branch Naming Convention

Use one branch per attempt:

```
attempt/prd-vX.Y/aNNN
```

Examples:

```
attempt/prd-v0.2/a001
attempt/prd-v0.2/a002
```

---

## 🔗 Preview Deploy Expectation

- Each attempt branch SHOULD produce a Cloudflare Pages preview deployment.
- Preview URLs are treated as evidence artifacts (views), not truth.

---

## 📎 Recording Deploy Evidence in META.json

When sealing an attempt, record deploy evidence in the attempt `META.json`:

- `deploy.provider`: `cloudflare-pages`
- `deploy.preview_url`: preview deployment URL (when available)
- `deploy.production_url`: production URL (when relevant)
- `deploy.captured_at`: date captured

---

## 🏷️ "Every Tag Has a Branch" (Optional Policy)

If rollback speed is a priority, adopt this policy:

- For each sealed attempt tag, keep a branch that points to the same commit.
- The branch exists to make resurrection and preview redeploy trivial.

This is optional because:
- the commit SHA remains the truth
- long-lived branches are not always desirable early

---

## 🔮 Rollback Model (Intent)

Rollback is achieved by returning production to a known commit (usually a previously sealed attempt).

The practical mechanism (re-deploying a commit, retargeting, or reverting) is less important than:
- the sealed commit SHA
- the evidence bundle
- the ability to reproduce the build



---

## PRD Index

*Source: `docs/PRD.md`*


# PRD Index

> Product Requirements Documents organized by lane.

## Description

PRDs define the requirements for each product lane. Each lane has its own PRD with independent versioning and attempt lifecycle. This index routes to the active PRDs.

## Outline

- Active PRDs
- Template
- Legacy PRDs

---

## Active PRDs

| Lane | PRD | Version | Status |
|------|-----|---------|--------|
| website | [PRD.md](PRD/website/PRD.md) | v1.2 | Active |
| ai-navigation | [PRD.md](PRD/ai-navigation/PRD.md) | — | Draft |

---

## Template

New PRDs should follow [PRD_TEMPLATE.md](PRD/PRD_TEMPLATE.md).

---

## Legacy PRDs

| Lane | File | Notes |
|------|------|-------|
| website | [PRD-legacy-v0.3.md](PRD/website/PRD-legacy-v0.3.md) | Superseded by v1.2 |

---

## See Also

- [Product Lanes](/docs/appendices/product-lanes.md) — Lane architecture
- [Attempt Lifecycle](/docs/appendices/attempt-lifecycle.md) — How attempts work


---

## PRD Template

*Source: `docs/PRD/PRD_TEMPLATE.md`*


# 📋 PRD Template

> Standard template for Product Requirements Documents.

## Description

This template defines the standard structure for PRDs. Each product lane has one active PRD at a time. PRDs define success criteria, constraints, and definition of done for attempts. Use this template when creating or revising a lane's PRD.

## Outline

- PRD Identity
- Objective and Success Criteria
- Non-Goals
- Background and Approach
- Phases
- Definition of Done
- Constraints, Risks, Notes
- Attempt Policy

---

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

See: `/docs/appendices/attempt-lifecycle.md`


---

## Previewing Lanes and Attempts

*Source: `docs/PREVIEW.md`*


# 👁️ Previewing Lanes and Attempts

> **Scope:** Local + Cloudflare preview workflows for lanes and attempts.

## Local Preview (Any Lane)

Build the lane:

```bash
npm run build -- --lane <lane>
```

Preview the built output:

```bash
npx wrangler pages dev products/<lane>/dist --port 8788
```

Open: http://localhost:8788

---

## Cloudflare Pages Preview

Each lane is deployed as its own Cloudflare Pages project.

**Build configuration (REQUIRED):**

| Setting | Value |
|---------|-------|
| Build command | `npm run build -- --lane <lane>` |
| Output directory | `products/<lane>/dist` |
| Root directory | `.` (repo root) |

**Examples:**

| Lane | Build Command | Output Directory |
|------|--------------|------------------|
| `website` | `npm run build -- --lane website` | `products/website/dist` |
| `ai-navigation` | `npm run build -- --lane ai-navigation` | `products/ai-navigation/dist` |
| `agent-skill` | `npm run build -- --lane agent-skill` | `products/agent-skill/dist` |

---

## Troubleshooting

### Wrong lane building

If a Cloudflare Pages build log shows the wrong lane (e.g., `Lane: ai-navigation` when you expected `website`):

1. **Check the build command** — Must explicitly pass `--lane <lane>`
2. **Check the output directory** — Must match `products/<lane>/dist`
3. **Verify smart-build.js** — Should NOT use `vite --root` flag

### Build succeeds but site shows wrong content

1. Verify the output directory in Cloudflare Pages settings
2. Check that `products/<lane>/dist/index.html` exists after build
3. Ensure `products/<lane>/index.html` exists as the Vite entry point

### Local preview differs from Cloudflare

1. Clear local dist: `rm -rf products/<lane>/dist`
2. Rebuild: `npm run build -- --lane <lane>`
3. Use wrangler for local preview (matches Cloudflare environment)

---

## Preview URLs

### Branch previews (automatic)

Any `git push` to an attempt/run branch creates a preview:

```
https://<branch-slug>.klappy-dev.pages.dev
```

Branch names are slugified (slashes become dashes).

Example:
- Branch: `run/website/prd-v1.0/cursor/a/claude-opus-4/e2c41bb5`
- Preview: `https://run-website-prd-v1-0-cursor-a-claude-opus-4-e2c41bb5.klappy-dev.pages.dev`

### Production

Production deploys from the `prod` branch to the primary domain.

---

## Related Documents

- Build contract: `/infra/contracts/build-output.md`
- Lane architecture: `/docs/appendices/product-lanes.md`
- Cloudflare config: `/docs/CLOUDFLARE_CONFIG.md`


---

## Implementation Documentation

*Source: `docs/README.md`*


# 📖 Implementation Documentation

> How klappy.dev implements ODD. This is the reference implementation, not the philosophy.

## 🗺️ Where You Are in the Hierarchy

```
/odd/     ← Universal principles (timeless, product-agnostic)
/canon/   ← Program constraints (shared rules across products)
/docs/    ← YOU ARE HERE: Implementation details
```

**The rule:** ODD explains *why*. Canon explains *what rules we share*. Docs explains *how we do it here*.

---

## ✅ What Belongs in /docs/

| Content Type | Examples | Why Here |
|--------------|----------|----------|
| CLI commands | `attempt:register`, `attempt:nuke` | Tool-specific |
| Specific paths | `/products/<lane>/attempts/...` | Repo-specific |
| Cloudflare config | Branch deploys, preview URLs | Vendor-specific |
| Lane names | `website`, `ai-navigation`, `agent-skill` | Instance-specific |
| Epoch definitions | E0001, E0002, E0003 | Instance-specific |
| Tooling runbooks | ATTEMPTS.md, PREVIEW.md | Procedural |

---

## 🚫 What Does NOT Belong in /docs/

| Content Type | Where It Goes | Why |
|--------------|---------------|-----|
| "Durable thinking is scarce" | `/odd/` | Universal principle |
| "Evidence over assertion" | `/odd/` | Universal principle |
| Definition of Done | `/canon/` | Shared across all products |
| Decision rules | `/canon/` | Shared across all products |

**Litmus test:**
1. Would this still be true in 10 years? → `/odd/`
2. Should all products in this program obey it? → `/canon/`
3. Is this about how *we* do it *here*? → `/docs/` ✓

---

## 📁 Contents

### Workflows & Procedures

| File | Purpose |
|------|---------|
| [ATTEMPTS.md](./ATTEMPTS.md) | Attempt lifecycle, CLI commands, artifact locations |
| [ATTEMPT_KICKOFF.md](./ATTEMPT_KICKOFF.md) | Human workflow for starting attempts |
| [AGENT_KICKOFF.md](./AGENT_KICKOFF.md) | Canonical agent entry point |
| [PREVIEW.md](./PREVIEW.md) | Local and Cloudflare preview guide |
| [CLOUDFLARE_CONFIG.md](./CLOUDFLARE_CONFIG.md) | Deploy configuration |

### Reference Documents

| File | Purpose |
|------|---------|
| [TRUTH_MAP.md](./TRUTH_MAP.md) | Authoritative source for each domain |
| [PRD.md](./PRD.md) | PRD orientation and routing |
| [WHAT_THIS_REPO_IS_NOT.md](./WHAT_THIS_REPO_IS_NOT.md) | Scope boundaries |
| [context-packs-and-projection-detail.md](./context-packs-and-projection-detail.md) | Detail levels for context pack projection (full, medium, low) |

### Templates

| File | Purpose |
|------|---------|
| [TEMPLATE.md](./TEMPLATE.md) | General article template |
| [TEMPLATE_README.md](./TEMPLATE_README.md) | Folder README index template |
| [decisions/TEMPLATE.md](./decisions/TEMPLATE.md) | Decision record template |
| [PRD/PRD_TEMPLATE.md](./PRD/PRD_TEMPLATE.md) | PRD template |

### Subfolders

| Folder | Purpose | Count |
|--------|---------|-------|
| [agent-architecture/](./agent-architecture/) | Agent system design patterns | 1 file |
| [appendices/](./appendices/) | Implementation-specific appendices | 17 files |
| [decisions/](./decisions/) | Implementation decision records (ADRs) | 14 files |
| [PRD/](./PRD/) | Lane PRDs and template | 3 files |
| [infra/](./infra/) | Infrastructure documentation | 1 file |

---

## 🔗 Relationship to ODD & Canon

```
┌─────────────────────────────────────────────────┐
│  ODD (/odd/)                                    │
│  Universal principles                           │
│  - progressive-elevation.md (portability ladder)│
│  - quantum-development.md                       │
│  - evolution-not-automation.md                  │
└─────────────────────────────────────────────────┘
          │
          │ derives
          ▼
┌─────────────────────────────────────────────────┐
│  Canon (/canon/)                                │
│  Program constraints                            │
│  - constraints.md                               │
│  - definition-of-done.md                        │
│  - decision-rules.md                            │
└─────────────────────────────────────────────────┘
          │
          │ implements
          ▼
┌─────────────────────────────────────────────────┐
│  Docs (/docs/)  ← YOU ARE HERE                  │
│  Implementation details                         │
│  - ATTEMPTS.md (CLI procedures)                 │
│  - appendices/epochs.md (E0001-E0003)           │
│  - decisions/D0001-*.md (klappy.dev choices)    │
└─────────────────────────────────────────────────┘
```

---

## 🧹 Epistemic Hygiene Rules

1. **Docs can rot.** Implementation details change frequently. That's fine.
2. **Don't redefine Canon here.** If you find yourself writing a principle, it probably belongs in `/canon/` or `/odd/`.
3. **Cross-reference up, not down.** Docs references ODD/Canon. ODD/Canon shouldn't reference specific docs paths.
4. **Keep it procedural.** Docs answers "how do I..." not "why should I..."

---

## 👀 See Also

- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md)
- [Progressive Elevation](/odd/appendices/progressive-elevation.md)
- [ODD Contract](/odd/contract.md)
- [Canon Index](/canon/README.md)


---

## README Index Template

*Source: `docs/TEMPLATE_README.md`*


# README Index Template

> Template for folder README.md files that serve as scannable indexes.

## Description

Every navigable folder should have a README.md that serves as a scannable index. This enables agents to understand folder contents (~500 tokens) without reading every file (~20K+ tokens). The README-as-index pattern supports tree-shaking in context packs.

## Outline

- When to Use This Template
- Frontmatter by Folder Type
- Template Structure
- Contents Table Format

---

## When to Use This Template

Create a README index when:

- A folder contains 3+ files
- The folder is navigable (not internal/generated)
- Agents or humans need to discover what's in the folder

Do NOT create a README index for:

- Generated/derived folders (`public/_compiled/`, `dist/`)
- Single-file folders (promote the file to parent instead)
- Internal tooling folders (`.git/`, `node_modules/`)

---

## Frontmatter by Folder Type

### Public-facing folders (`/about/`)

```yaml
---
uri: klappy://about
title: "About"
audience: public
exposure: nav
tier: 1
voice: neutral
stability: semi_stable
tags: ["about", "index"]
---
```

### Implementation docs (`/docs/`, `/infra/`)

```yaml
---
uri: klappy://docs/appendices
title: "Appendices"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["docs", "appendices", "index"]
---
```

### Canon/ODD folders (`/canon/`, `/odd/`)

```yaml
---
uri: klappy://canon
title: "Canon"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["canon", "index"]
---
```

### Product lanes (`/products/<lane>/`)

```yaml
---
uri: klappy://products/website
title: "Website Lane"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["products", "website", "lane", "index"]
---
```

---

## Template Structure

```markdown
---
uri: klappy://<path>
title: "Folder Name"
audience: docs | canon | public
exposure: nav
tier: 1 | 2
voice: neutral
stability: stable | evolving
tags: ["folder", "index"]
---

# Folder Name

> One-line description of what this folder contains.

## Description

1-2 paragraph overview of the folder's purpose. What kind of content
lives here? Who is the intended audience? How does this folder relate
to the broader structure?

## Outline

- Contents
- [Optional: How to Use]
- [Optional: Relationship to X]
- See Also

---

## Contents

| File | Purpose |
|------|---------|
| `file1.md` | Brief description |
| `file2.md` | Brief description |
| `subfolder/` | Brief description |

---

## [Optional Section]

[Additional context if needed...]

---

## See Also

- [Related Folder](/path/to/folder/) — Brief description
- [Related Doc](/path/to/doc.md) — Brief description
```

---

## Contents Table Format

### For files

```markdown
| File | Purpose |
|------|---------|
| `ATTEMPTS.md` | Attempt lifecycle and CLI commands |
| `TRUTH_MAP.md` | Authoritative source for each domain |
```

### For files with titles

```markdown
| File | Title | Summary |
|------|-------|---------|
| `bio.md` | Bio | Author background |
| `faq.md` | FAQ | Common questions |
```

### For subfolders

```markdown
| Folder | Purpose | Count |
|--------|---------|-------|
| `appendices/` | Implementation appendices | 17 files |
| `decisions/` | Decision records | 14 files |
```

### For decisions (with status)

```markdown
| ID | Title | Status |
|----|-------|--------|
| D0001 | prod Branch Is Production | Active |
| D0002 | Attempt Provenance Required | Active |
```

---

## See Also

- [Docs Index](./README.md) — Example implementation docs index
- [About Index](/about/README.md) — Example public-facing index
- [Article Template](./TEMPLATE.md) — For non-index documents


---

## Article Template

*Source: `docs/TEMPLATE.md`*


# Article Template

> Standard template for documentation articles with progressive disclosure.

## Description

This template defines the standard structure for documentation articles. All documents should follow this progressive disclosure pattern to enable different compilation depths for context packs.

## Outline

- Frontmatter Fields
- Document Structure
- Example

---

## Frontmatter Fields

```yaml
---
uri: klappy://<tier>/<path>/<name>    # Stable identifier
title: "Human-Readable Title"          # Display name
audience: docs | canon | public        # Who reads this
exposure: nav | hidden                 # Appears in navigation?
tier: 0 | 1 | 2                        # Progressive disclosure tier
voice: neutral | authoritative         # Tone
stability: stable | evolving | deprecated
tags: ["tag1", "tag2"]
---
```

### Field Reference

| Field | Required | Values | Purpose |
|-------|----------|--------|---------|
| `uri` | Yes | `klappy://path/name` | Stable linking identifier |
| `title` | Yes | String | Human-readable title |
| `audience` | Yes | `public`, `docs`, `canon` | Target reader |
| `exposure` | Yes | `nav`, `hidden` | Show in navigation? |
| `tier` | Yes | `0`, `1`, `2` | Disclosure tier |
| `voice` | No | `neutral`, `authoritative` | Tone (default: neutral) |
| `stability` | Yes | `stable`, `evolving`, `deprecated` | Change frequency |
| `tags` | No | Array | Categorization |

### Audience Values

| Value | Meaning | Example Folder |
|-------|---------|----------------|
| `public` | User-facing content | `/about/` |
| `docs` | Implementation reference | `/docs/` |
| `canon` | Shared constraints | `/canon/`, `/odd/` |

### Tier Values

| Tier | Meaning | Visibility |
|------|---------|------------|
| `0` | Immediate orientation | Always visible |
| `1` | Core content | Visible by default |
| `2` | Detailed/edge cases | Requires expansion |

---

## Document Structure

```markdown
---
uri: klappy://<path>/<name>
title: "Title"
audience: docs
exposure: nav
tier: 1
voice: neutral
stability: evolving
tags: ["tag1"]
---

# Title

> One-line subtitle explaining what this document is about.

## Description

1-2 paragraph compressed overview. Should be self-contained enough that
an LLM can understand the gist without reading further.

## Outline

- Section 1
- Section 2
- Section 3

---

## Section 1

[Content...]

---

## Section 2

[Content...]

---

## See Also

- [Related Doc](/path/to/doc.md) — Brief description
```

---

## Disclosure Levels

| Level | Includes | Use Case | ~Tokens |
|-------|----------|----------|---------|
| L0 | Frontmatter + H1 | File listing | ~50 |
| L1 | + blockquote subtitle | Quick orientation | ~100 |
| L2 | + Description | LLM context | ~200-500 |
| L3 | + Outline | Navigation aid | ~300-700 |
| L4 | Full document | Complete context | Full |

---

## Example

```markdown
---
uri: klappy://docs/appendices/example
title: "Example Appendix"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["docs", "example"]
---

# Example Appendix

> Demonstrates the standard article structure.

## Description

This example shows how to structure a documentation article using
progressive disclosure. The Description section provides a compressed
overview that can stand alone in context-constrained situations.

## Outline

- Background
- Implementation
- Consequences

---

## Background

[Why this exists...]

---

## Implementation

[How it works...]

---

## Consequences

[What results from this...]

---

## See Also

- [Article Template](/docs/TEMPLATE.md)
```


---

## Truth Map

*Source: `docs/TRUTH_MAP.md`*


# 🗺️ Truth Map

> **Purpose:** This document identifies the single authoritative source for each category of truth in this repository. If something is not listed here, it is not authoritative.

---

## 🏛️ Three-Tier Authority Structure

Truth in this repository is organized into three tiers with different decay rates:

| Tier | Location | Contains | Decay Rate |
|------|----------|----------|------------|
| **ODD** | `/odd/` | Universal principles (timeless, product-agnostic) | Almost never |
| **Canon** | `/canon/` | Program-level constraints (shared rules) | Carefully |
| **Docs** | `/docs/` | Implementation details (this instance) | Freely |

**The litmus test:**
1. Would this still be true in 10 years? → **ODD**
2. Should all products in this program obey it? → **Canon**
3. Is this about how *we* do it *here*? → **Docs**

See [D0001: Three-Tier Conceptual Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md) for the full decision.

---

## 📋 Authoritative Sources

| Domain | Authoritative Source | Notes |
|--------|---------------------|-------|
| **Universal methodology** | `/odd/` | ODD principles, portable across repos |
| **Program constraints** | `/canon/` | Shared rules (definition-of-done, decision-rules) |
| **Deploy workflow** | `/docs/CLOUDFLARE_CONFIG.md` | Branch roles, promotion, Cloudflare setup |
| **Attempt workflow** | `/docs/ATTEMPTS.md` | Lifecycle, META schema, finalization |
| **Agent kickoff** | `/docs/AGENT_KICKOFF.md` | Canonical agent entry point |
| **Active PRDs** | `/docs/PRD/<lane>/PRD.md` | Current hypothesis per lane |
| **Content manifest** | `/public/content/manifest.json` | Generated; what exists, disclosure tiers |
| **ODD decisions** | `/odd/decisions/` | Universal methodology decisions |
| **Implementation decisions** | `/docs/decisions/` | klappy.dev-specific ADRs |

---

## 🌿 Branch Roles (Canonical)

| Branch | Role | Deploys To |
|--------|------|------------|
| `prod` | **Production** — only champions go here | klappy.dev (production) |
| `main` | **Lab notebook** — experiments, history, artifacts | Preview only |
| `*` (any other) | **Attempt sandboxes** — ephemeral agent workspaces | Preview only |

> **Invariant:** You never nuke `prod`. You may nuke `products/<lane>/src` on agent branches freely.

---

## 🔄 Current Attempt Model (Canonical)

| Step | Command | What It Does |
|------|---------|--------------|
| 1 | `attempt:register --lane <lane>` | Captures provenance (agent, model, tool, git SHA, lane) |
| 2 | `attempt:nuke --lane <lane>` | Deletes `products/<lane>/src/` — guarantees blank slate |
| 3 | (agent builds) | Implementation from scratch |
| 4 | `attempt:finalize --lane <lane>` | Assigns `attempt-001`, `attempt-002`, etc. |
| 5 | `attempt:promote --lane <lane>` | Merges champion to `main`, fast-forwards `prod` |

> **Invariant:** Register first to capture provenance. Nuke immediately after to guarantee independence.

---

## 🚫 Deprecated Terminology (Do Not Use)

| Old Term | Replaced By | Notes |
|----------|-------------|-------|
| `ATTEMPT_REGISTRY.json` | `attempt:finalize` | Numbers assigned at completion, not reservation |
| `attempt:reserve` | `attempt:register` | Registration captures provenance, not just a number |
| `attempt:reset` | `attempt:nuke` | Nuke is explicit; reset was ambiguous |
| "main is production" | "`prod` is production" | D0001 decision |
| `/canon/odd/` | `/odd/` | ODD elevated to root level (2.1.0) |

---

## 📖 How to Use This Document

1. **If two docs conflict**, the one listed in "Authoritative Sources" wins.
2. **If you find drift**, fix it or flag it — don't propagate the error.
3. **If you're adding new truth**, update the authoritative source, not a satellite doc.
4. **If unsure which tier**, apply the litmus test above.

---

## 🗑️ Derived Outputs (Do Not Edit)

These paths contain derived/compiled artifacts. Never edit them directly:

| Path | Why Derived | Source |
|------|-------------|--------|
| `public/_compiled/**` | Compilation outputs | Source docs + compile plans |
| `public/content/**` | Mirrored content | Source folders (odd/, canon/, docs/, about/) |
| `public/agent-skill/**` | Versioned skill packs | products/agent-skill/ |

**Rules:**

- **Always link to source URIs** (`klappy://...` or source file paths) — compiled outputs are ephemeral views
- If a derived file needs fixing, fix the source and regenerate
- Derived outputs can be deleted and rebuilt anytime
- Never edit derived files directly

---

## 🔗 See Also

- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md)
- [ODD Contract](/odd/contract.md) — Version 2.1.0
- [D0001: prod Branch Is Production](/docs/decisions/D0001-prod-branch-is-production.md)
- [D0007: Branch Names Are Convenience](/docs/decisions/D0007-branch-names-are-convenience.md)
- [D0008: Register Before Nuke](/docs/decisions/D0008-register-before-nuke.md)


---

## What This Repo Is Not

*Source: `docs/WHAT_THIS_REPO_IS_NOT.md`*


# 🚫 What This Repo Is Not

This repository is intentionally not optimized for "everything in one place."

It is optimized for **portability of thinking** without creating documentation sprawl.

## This Is Not a Knowledge Base of Everything

If a detail is not durable, it should not be immortalized.

Most artifacts decay by design:
- branches die,
- attempts seal evidence then stop,
- PRDs churn,
- and only proven patterns elevate.

See: `/odd/appendices/progressive-elevation.md`

## This Is Not a Framework You Must Adopt

ODD is not a prescriptive methodology.

It is a set of lenses and constraints for keeping outcomes and evidence reliable in an environment where generation is abundant and confidence is cheap.

## This Is Not a Promise of Stability Everywhere

Some parts are intentionally unstable:

- Attempts are ephemeral
- PRDs evolve rapidly
- Tooling may lag during epoch transitions

What is stable:
- Canon (curated)
- Interface contracts (semver)
- Decision logs (traceability)

## This Is Not "Documentation Completeness"

Completeness is a trap.

The goal is:
- minimal orientation for humans,
- and reliable navigation for agents,
without drowning either in uncurated files.

If it feels "unfinished," that may be intentional:
unfinished is often more honest than prematurely sealed truth.

## This Is Not Code-Centric

The primary artifact is not the codebase.

The durable artifact is:
- intent,
- constraints,
- decisions,
- and evidence.

Code is allowed to be disposable when regeneration is cheaper than understanding.


---

## Alignment Reviews

*Source: `odd/appendices/alignment-reviews.md`*


# Alignment Reviews

> Periodic evaluation of the ODD system itself to detect drift.

## Description

Alignment Reviews are periodic evaluations that detect and correct drift between stated intent, implemented process, and observed outcomes. They apply to content, process, and tooling equally. Reviews evaluate Canon (contradicted rules, obsolete references, undocumented invariants), PRDs (actual decision criteria, implicit patching, lane bleeding), Attempts (incompatible comparisons, ignored failures, insufficient evidence), and Tooling (enforced invariants, accidental drift, silent compensation). Reviews are triggered by events (epoch transitions, repeated failures, PRD rewrites) not schedules. They produce corrections, not features.

## Outline

- Summary
- Why This Exists
- What Is Reviewed (Canon, PRDs, Attempts, Tooling)
- When Reviews Occur
- What Reviews Produce
- Non-Goals
- Core Invariant

---

## Content

Its purpose is to detect and correct **drift** between:
- stated intent
- implemented process
- observed outcomes

Alignment Reviews apply to **content, process, and tooling** equally.

They do not produce features.
They produce corrections.

---

## Why This Exists

Outcome-Driven Development assumes:
- rapid iteration
- parallel attempts
- evolving intent

These conditions create drift by default.

Without an explicit alignment mechanism:
- outdated rules persist
- assumptions fossilize
- successful outcomes are misattributed
- failed outcomes are rationalized

Alignment Reviews introduce **selection pressure against incoherence**.

---

## What Is Reviewed

An Alignment Review evaluates:

### Canon
- Are any canon rules contradicted by current practice?
- Are obsolete rules still referenced?
- Are new invariants emerging without documentation?

### PRDs (Per Lane)
- Do PRDs still reflect actual decision criteria?
- Are PRDs being patched implicitly via attempts?
- Are lanes bleeding into each other?

### Attempts
- Are outcomes being compared across incompatible contexts?
- Are failures producing learning, or being ignored?
- Is evidence sufficient to justify promotion?

### Tooling
- Does tooling enforce stated invariants?
- Does tooling encourage accidental drift?
- Are humans compensating for tooling gaps silently?

---

## When Reviews Occur

Alignment Reviews are triggered by **events**, not schedules.

Typical triggers include:
- Epoch transitions
- Repeated unexplained failures
- Major PRD rewrites
- Tooling changes that affect workflow
- Persistent disagreement about outcomes

They may also be run opportunistically.

---

## What Reviews Produce

An Alignment Review may result in:
- Canon updates (via decision logs)
- PRD clarification or split
- Epoch declaration
- Tooling constraints
- Explicit deprecation of rules or documents

Reviews **do not**:
- retroactively invalidate evidence
- rewrite history
- assign blame

---

## Non-Goals

Alignment Reviews are not:
- performance reviews
- approval gates
- compliance checklists
- automation requirements

They exist to preserve **truthfulness**, not control.

---

## Core Invariant

If alignment cannot be explained clearly,
it does not exist.

Drift that is invisible is more dangerous than failure.


---

## Evolution, Not Automation

*Source: `odd/appendices/evolution-not-automation.md`*


# Evolution, Not Automation

> This system optimizes learning, not execution.

## Description

ODD is often mistaken for an attempt to automate software development. It is not. Automation optimizes execution; evolution optimizes learning. ODD is designed for disciplined evolution: humans define intent (PRDs, constraints, DoD), agents generate variation (independent attempts), reality provides feedback (evidence), humans perform selection (promotion/rejection), and learnings are retained. Humans stay in the loop because fully automated selection optimizes for what is easy to measure rather than what actually matters. All evolution is discrete, auditable, reversible, and bounded.

## Outline

- Why This Appendix Exists
- What We Are Not Doing
- What We Are Doing Instead
- Why Humans Stay in the Loop
- Evolutionary Scope
- Controlled, Not Runaway
- The Core Principle

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** Keep learning/evolution distinct from automation

---

## Why This Appendix Exists

This system is often mistaken for an attempt to automate software development.

It is not.

Automation optimizes execution.  
Evolution optimizes learning.

The difference matters.

---

## What We Are Not Doing

We are not building a system that:

- automatically decides what to build
- automatically selects winners
- automatically rewrites its own goals
- optimizes hidden metrics without human review

Those paths tend to collapse into proxy optimization, confidence theater, or silent drift.

---

## What We Are Doing Instead

We are designing a system that supports disciplined evolution:

- Humans define intent (PRDs, constraints, Definition of Done)
- Agents generate variation (independent attempts)
- Reality provides feedback (evidence, behavior, performance)
- Humans perform selection (promotion or rejection)
- Learnings are retained (PRD patches, decision logs, sealed artifacts)

This mirrors evolutionary systems without surrendering judgment.

---

## Why Humans Stay in the Loop

Fully automated selection optimizes for what is easiest to measure.

Human review optimizes for what actually matters.

By keeping humans responsible for:

- approving PRD changes
- evaluating evidence
- selecting champions

we prevent the system from drifting toward shallow success criteria or self-reinforcing errors.

---

## Evolutionary Scope

Evolution in this system applies to:

- problem definitions (PRDs)
- success criteria (DoD)
- constraints (performance, usability, deployability)
- measurement methods (what counts as evidence)

Implementation code is disposable.  
Learning is not.

---

## Controlled, Not Runaway

All evolution is:

- discrete (versioned PRDs, sealed attempts)
- auditable (evidence over explanation)
- reversible (commit SHAs are truth)
- bounded (no self-modifying goals)

If a change cannot be explained, evidenced, and reviewed, it does not propagate.

---

## The Core Principle

We are not trying to make software build itself.

We are trying to make truth accumulate faster than mistakes.

Automation accelerates output.  
Evolution, done carefully, accelerates understanding.

This appendix exists to keep that distinction explicit—and to prevent future readers (human or AI) from optimizing the wrong thing.



---

## Failure-Driven Modularity

*Source: `odd/appendices/failure-driven-modularity.md`*


# Failure-Driven Modularity

> Modular boundaries emerge from repeated failure, not upfront design.

## Description

In ODD, modular boundaries are introduced only after repeated, documented failure to regenerate a system from its specification. Successful regeneration proves the system remains cognitively tractable as a single unit. A failure is when the generated system diverges materially, constraints are repeatedly omitted, specifications need ad hoc re-explanation, or attempts converge inconsistently. Only patterned failure justifies decomposition. The evolution rule: begin with the smallest viable specification, attempt regeneration, do not modularize if it succeeds, extract the smallest region of cognitive overload if it fails repeatedly.

## Outline

- Summary
- Definition of Failure
- The Evolution Rule
- Rationale
- Implications
- Non-Goals
- Related Canon

---

## Content

Successful regeneration is evidence that the system remains cognitively tractable as a single unit.
Repeated failure is evidence that the boundary is incorrect and must be revised.

Modularity is therefore an *outcome of failure*, not a prerequisite for success.

---

## Definition of Failure

A regeneration attempt is considered a **failure** when one or more of the following occur
despite reasonable effort:

- The generated system diverges materially from the intended behavior.
- Critical constraints are repeatedly omitted or misapplied.
- The specification must be re-explained in ad hoc or situational ways.
- Multiple regeneration attempts converge inconsistently.

Single failures are not sufficient.
Only **patterned failure** justifies decomposition.

---

## The Evolution Rule

1. Begin with the smallest viable specification that expresses the desired outcome.
2. Attempt full regeneration from that specification.
3. If regeneration succeeds, **do not modularize**.
4. If regeneration fails repeatedly:
   - Identify the smallest region of cognitive overload.
   - Extract that region into its own independently regenerable specification.
5. Repeat recursively.

This process continues until each module can be regenerated reliably and independently.

---

## Rationale

Traditional software architecture encourages early modularization based on anticipated reuse.
This introduces speculative boundaries, premature abstractions, and unnecessary coordination cost.

ODD replaces prediction with evidence.

A boundary is justified **only when failure proves it necessary**.

---

## Implications

- Architectural structure emerges empirically.
- Teams do not need shared architectural taste, only shared failure criteria.
- Systems evolve without centralized design authority.
- Regeneration remains feasible as complexity increases.

---

## Non-Goals

Failure-Driven Modularity does **not** claim that:

- All systems should be maximally decomposed.
- Regeneration will always succeed.
- Existing stable systems must be restructured.

It applies only to systems being actively evolved under ODD.

---

## Related Canon

- Reproducibility Test
- Outcome Promotion vs Artifact Preservation
- Regenerability as a First-Class Constraint

---

## Derivation

For historical and conceptual motivation, see:

> **From Reusability to Regenerability**  
> Canonical Derivation, `/canon/derivations/reusability-to-regenerability.md`


---

## Media as a Learning Layer

*Source: `odd/appendices/media-as-learning-layer.md`*


# Media as a Learning Layer

> Media reduces cognitive load over stable written content.

## Description

Media exists to reduce cognitive load, not increase it. It is a learning layer over stable written content—optional, contextual, and regenerable. Canonical truth lives in text; media supports understanding but does not define it. Core rules: clarity is the default (not any specific medium), media is not canon, progressive disclosure is mandatory (opt-in only, no autoplay), media must match learning intent (diagrams for mental models, short video for orientation, audio for reflection), and media is created only for stable content. The system rejects media-first pages, content dumps, and redundant explanations.

## Outline

- Summary
- Core Rules
  - Clarity is the default
  - Media is not Canon
  - Progressive disclosure is mandatory
  - Match media to learning intent
  - Stability before production
- Anti-Patterns (Explicitly Rejected)
- Compliance Note

---

## Content

Media is a **learning layer** over stable written content.
It is optional, contextual, and regenerable.

**Canonical truth lives in text.**
Media supports understanding — it does not define it.

---

## Core Rules

### 1) Clarity is the default
Text is not the default.
Video is not the default.
Audio is not the default.

**Clarity is the default.**

Media is used only when it teaches faster or better than text alone.

---

### 2) Media is not Canon
Canonical truth is preserved in:
- markdown content
- frontmatter
- decision records
- evidence policies

Media assets are:
- supporting artifacts
- replaceable / regenerable
- optional

**The ownership and placement of media is canonical.**
The media itself is not.

---

### 3) Progressive disclosure is mandatory
All media must be **opt-in**.

Allowed interactions:
- Watch
- Listen
- View diagram
- Download

Disallowed patterns:
- autoplay (anywhere)
- background video
- forced consumption
- media that blocks navigation or comprehension

The default experience must remain:
- readable
- navigable
- understandable
- usable without media

---

### 4) Match media to learning intent
Media must be chosen based on the learning outcome:

- **Images / diagrams**
  - Establish mental models
  - Replace multi-paragraph explanations
- **Short video (≤ 90 seconds)**
  - Orientation and framing
  - Not exhaustive detail
- **Audio**
  - Reflection and deeper thinking
  - Always optional
- **PDF**
  - Reference, synthesis, offline use
  - Never required for basic understanding

Each asset must answer:
> What does this teach faster or better than text?

If it cannot answer, it does not belong.

---

### 5) Stability before production
Media is created only for **stable content**.

Draft or evolving ideas remain text-first until:
- the concept stabilizes
- the page stops churn
- the narrative is unlikely to drift

This prevents:
- outdated explainers
- conflicting narratives
- re-record churn

Media follows clarity — not the other way around.

---

## Anti-Patterns (Explicitly Rejected)

The system intentionally avoids:
- media-first pages
- content dumps / galleries
- redundant explanations across formats
- "just in case" assets
- polish media used to compensate for unclear thinking

If removing a piece of media would break understanding, that is a design failure.

---

## Compliance Note

Product PRDs may reference this appendix.
They should not re-litigate the philosophy.

PRDs define **how** the lane applies this principle.
This appendix defines the governing constraint.


---

## Progressive Elevation & Decay

*Source: `odd/appendices/progressive-elevation.md`*


# Progressive Elevation & Decay

> How artifacts move from ephemeral attempts to durable Canon through strict elevation criteria.

## Description

ODD treats durable thinking as scarce and generated artifacts as abundant—most should decay while only patterns that reduce future drag should elevate. The five layers of portability are Conversation/Attempt, Product Lane/PRD, Interoperability/Contracts, Canon, and Decision Trace. Elevation requires recurrence, portability, drag reduction, and testability; if any criterion fails, the artifact stays local or dies. Elevation must be deliberately triggered—typically after refactors, repeated friction, or closed attempts.

## Outline

- Summary
- The Five Layers of Portability
- Elevation Criteria (Strict)
- Elevation Trigger Points
- Decay Rule (Default)
- Where This Fits With Lanes and Epochs

---

## Content

## Summary

ODD treats **durable thinking** as scarce and **generated artifacts** as abundant.

Most artifacts should **decay** (be discarded or sealed as evidence).
Only patterns that repeatedly reduce future drag should **elevate** into more durable layers.

This is how the repository avoids documentation sprawl while remaining portable across:
- time (future-you),
- people (collaborators),
- and agents (tooling that reasons over the corpus).

---

## The Five Layers of Portability

### 1) Conversation / Attempt (Ephemeral)

**What it is:** raw chats, prompts, branches, quick experiments, and run folders.  
**Default fate:** extract value → seal evidence → discard everything else.

**Lives in:**
- `/products/<lane>/attempts/v{VERSION}/_runs/<run_id>/`
- transient branches / worktrees
- PRD patches produced by failure

**Elevate when:** a failure mode repeats and you can state it as a stable rule, constraint, or test.

---

### 2) Product Lane / PRD (Project-Local)

**What it is:** current intent for a specific product lane.  
**Default fate:** churn freely. PRDs are disposable and should change as reality is observed.

**Lives in:**
- `/docs/PRD/<lane>/PRD.md`

**Elevate when:** a requirement becomes reusable across lanes/projects, or becomes an interface boundary.

---

### 3) Interoperability / Contracts (Portability Bridge)

**What it is:** explicit interfaces that allow portability across tools, agents, and products.

Contracts are where compatibility becomes real.

**Lives in:**
- `/interfaces/**` (semver'd contracts)
- shared inputs/outputs, schemas, stable runtime paths

**Elevate when:** multiple projects repeatedly need the same boundary and drift becomes expensive.

---

### 4) Canon (Durable, Lean)

**What it is:** curated, high-signal rules and lenses that survive multiple contexts.

Canon is intentionally small. If it bloats, that is a signal to curate harder, not to add more.

**Lives in:**
- `/canon/**`

**Elevate when:** a pattern recurs across multiple projects/lenses and stays true even when tooling changes.

---

### 5) Decision Trace (Why It Changed)

**What it is:** lightweight records explaining why the system moved.

Decisions preserve context without polluting Canon with history.

**Lives in:**
- `/odd/decisions/**`

**Elevate when:** a change affects interpretation, compatibility, or the "rules of the game."

---

## Elevation Criteria (Strict)

Something may be elevated only if it satisfies all of the following:

1. **Recurrence**: it appears across multiple attempts or projects (not a one-off).
2. **Portability**: it remains true across different stacks/models/tools.
3. **Drag Reduction**: it prevents repeated confusion, re-explanation, or failure.
4. **Testability**: it can be expressed as a check, constraint, or falsifiable claim.

If any criterion fails, the artifact stays local (Attempt/PRD) or dies.

---

## Elevation Trigger Points

Elevation does not happen automatically. It requires deliberate evaluation at specific moments.

### When to Evaluate for Elevation

**After substantial refactors:**
When restructuring how something works (not just fixing bugs), pause and ask:
- What did we learn?
- Is this a pattern that will recur?
- Should this be documented at a higher layer?

**After repeated friction:**
When the same confusion or failure occurs multiple times:
- Document the pattern at the appropriate layer
- If it affects multiple lanes, elevate to Canon
- If it's universal, elevate to ODD

**After successful attempts:**
When an attempt succeeds, extract learnings before moving on:
- What constraints prevented failure?
- What decision made this work?
- Would this help future attempts in other lanes?

**After failed attempts:**
Failures often reveal more than successes:
- What assumption was violated?
- What rule would have prevented this?
- Is this failure mode likely to recur?

### The Elevation Process

1. **Document locally first** — Write the learning where it happened (attempt evidence, lane decision)
2. **Tag for review** — Mark patterns that might be elevation candidates
3. **Test recurrence** — Wait for the pattern to appear again (don't elevate on first occurrence)
4. **Promote deliberately** — Move to higher layer only when all elevation criteria are met
5. **Update references** — Ensure lower layers reference the elevated document

### Why This Matters

Without deliberate trigger points:
- Learnings stay trapped in attempt folders
- The same mistakes repeat across lanes
- Canon never gets the benefit of hard-won knowledge
- The system appears to learn but actually forgets

Elevation is not automatic. It is a deliberate act of curation that must be triggered by specific events.

---

## Decay Rule (Default)

Most artifacts should not be preserved.

ODD assumes:
- generation is abundant,
- maintenance is the tax you pay forever,
- and residue creates epistemic drift.

Discarding is not nihilism. It is how the system stays legible.

---

## Where This Fits With Lanes and Epochs

- **Product lanes** isolate intent and success criteria so that unrelated surfaces do not drift together.
- **Epochs** define comparability boundaries when the "rules of the game" change.

This document explains the memory model underneath both.

See also:
- `/docs/appendices/product-lanes.md`
- `/docs/appendices/epochs.md`


---

## Quantum Development

*Source: `odd/appendices/quantum-development.md`*


# Quantum Development

> Why multiple attempts against the same PRD are sometimes necessary.

## Description

Quantum Development is a way of reasoning about uncertainty in AI-assisted development. Given the same PRD, different agents, prompts, and execution paths can produce meaningfully different results. Each attempt is an independent observation of the same specification. The goal is to distinguish specification failure from execution-path variance. A PRD is a hypothesis, an attempt is an experimental run, an outcome is an observation. Multiple attempts allow patterns to emerge and prevent premature convergence. Quantum Development is appropriate when the PRD is clear but failure is ambiguous. It ends when one candidate is promoted.

## Outline

- Purpose
- Core Idea
- PRD vs Attempt (Clarified)
- Why This Matters
- When Quantum Development Is Appropriate
- When to Change the PRD Instead
- Independence Requirement
- Outcome Interpretation
- On Timing and Observation
- Relationship to ODD
- What This Appendix Is Not
- Summary

---

## Content

## Purpose

This appendix formalizes Quantum Development as a way of reasoning about uncertainty in AI-assisted software development.

It explains why multiple attempts against the same PRD are sometimes necessary before changing the PRD itself.

This is an orientation model, not a workflow.

---

## Core Idea

In AI-assisted development, outcomes are non-deterministic.

Given the same PRD:

- different agents,
- different prompts,
- different execution paths,

can produce meaningfully different results.

Quantum Development treats each implementation attempt as an independent observation of the same specification.

The goal is to distinguish:

- specification failure from
- execution-path variance.

---

## PRD vs Attempt (Clarified)

- **PRD** = hypothesis
- **Attempt** = experimental run
- **Outcome** = observation

A single attempt provides insufficient evidence to judge the PRD.

Multiple attempts allow patterns to emerge.

---

## Why This Matters

Without multiple attempts, teams risk:

- **False negatives**
  Declaring a PRD "bad" when a single execution path failed.

- **False positives**
  Declaring a PRD "good" because one attempt happened to succeed.

Both lead to premature convergence.

Quantum Development exists to delay collapse of the PRD until enough signal exists.

---

## When Quantum Development Is Appropriate

Multiple attempts against the same PRD are appropriate when:

- The PRD is clear and internally consistent
- Failure is ambiguous (not obviously caused by missing requirements)
- The system involves AI agents or probabilistic behavior
- Execution choices materially affect outcomes

This is common in:

- agentic workflows
- prompt-driven systems
- generative UI
- complex orchestration logic

---

## When to Change the PRD Instead

Changing the PRD is appropriate when:

- Attempts fail due to missing constraints or goals
- Success criteria are unclear or contradictory
- Attempts stall due to underspecification
- New information invalidates the original intent

Quantum Development is not an excuse to avoid revising a bad PRD.

---

## Independence Requirement (Clarified)

Independence in Quantum Development is epistemic, not intrinsic to any specific tool or infrastructure.

An attempt is independent if:

- decisions are not steered by prior outcomes,
- implementation state is fresh,
- and the approach represents a genuine re-instantiation of the PRD.

Independence is therefore a property of decision-making and state, not of deployment mechanics.

### Infrastructure for Observability (Supporting, Not Defining)

Version control systems, isolated branches, and preview deployments do not create independence.

They support independence by:

- preventing accidental state leakage,
- enabling parallel observation of outcomes,
- and preserving each attempt as an inspectable artifact.

Infrastructure exists to protect and surface independence, not to define it.

Confusing infrastructural isolation with epistemic independence is a common failure mode in AI-assisted development.

See `/docs/appendices/attempt-lifecycle.md` for the attempt model and the “PRD as the unit of test” framing.

---

## Outcome Interpretation (Conceptual)

Observed outcomes across attempts can be interpreted as follows:

| Pattern                              | Implication                |
| ------------------------------------ | -------------------------- |
| Multiple failures, same failure mode | PRD likely flawed          |
| Failure → success                    | Execution-path sensitivity |
| Multiple successes                   | PRD likely robust          |
| Divergent behaviors                  | PRD underspecified         |

These interpretations are signals, not proofs.

Judgment is still required.

---

## On Timing and Observation

Quantum Development does not require attempts to run simultaneously.

Attempts may be:

- sequential or parallel
- human-driven or agent-driven
- observed over time rather than at once

The key requirement is not simultaneity, but comparability.

---

## Relationship to ODD

Quantum Development reinforces core ODD principles:

- **Outcomes over artifacts**
  Success is judged by results, not by effort or code reuse.

- **Prompt over code**
  Execution paths vary; intent must be tested across them.

- **Antifragility**
  Variance is not noise to eliminate but signal to observe.

- **Restartability**
  Clean restarts are a feature, not a failure.

---

## What This Appendix Is Not

Quantum Development is not:

- a requirement to always run multiple attempts
- a mandate to avoid PRD changes
- a replacement for engineering judgment
- a statistical guarantee

It is a lens for reasoning about uncertainty.

---

## Summary

Quantum Development acknowledges a reality of modern software:

> The same intent can produce multiple valid (or invalid) realities.

By observing more than one, teams reduce the risk of mistaking chance for truth.

**Quantum Development ends when one candidate is promoted.**

Observations without promotion are incomplete experiments. See the Champion selection and promotion procedure in `/docs/appendices/attempt-lifecycle.md`.

---

## Status

- Orientation-only
- Non-prescriptive
- Applies primarily to AI-assisted systems


---

## ODD Appendices (Portable)

*Source: `odd/appendices/README.md`*


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


---

## ODD Appendix Template

*Source: `odd/appendices/TEMPLATE.md`*


# ODD Appendix Template

> Template for ODD appendices that elaborate on core principles.

## Description

This template defines the standard structure for ODD appendices. Appendices elaborate on ODD principles with deeper analysis, examples, or edge cases. They are still universal (not implementation-specific) but are tier 2 content—revealed after the core principles.

## Outline

- When to Add an ODD Appendix
- Frontmatter Fields
- Document Structure
- Example

---

## When to Add an ODD Appendix

Add an ODD appendix when:

- It elaborates on an existing ODD principle
- It's universal (not klappy.dev-specific)
- It's too detailed for the core principle document

Do NOT add an ODD appendix when:

- It's implementation-specific → `/docs/appendices/`
- It's a new core principle → `/odd/`
- It's a decision record → `/odd/decisions/`

---

## Frontmatter Fields

```yaml
---
uri: klappy://odd/appendices/<name>
title: "Title"
audience: odd
exposure: nav
tier: 1 | 2
voice: neutral
stability: stable
tags: ["odd", "appendices", "topic"]
---
```

### Appendix-Specific Values

| Field | Typical Value | Notes |
|-------|---------------|-------|
| `audience` | `odd` | ODD appendix content |
| `tier` | `1` or `2` | Core elaboration or edge cases |
| `voice` | `neutral` | Universal, not personal |
| `stability` | `stable` | ODD appendices rarely change |

---

## Document Structure

```markdown
---
uri: klappy://odd/appendices/<name>
title: "Title"
audience: odd
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "appendices", "topic"]
---

# Title

> One-line description of what this appendix elaborates.

## Description

1-2 paragraph compressed overview. What principle does this elaborate?
What additional depth does it provide?

## Outline

- Section 1
- Section 2
- Section 3

---

## Content

[Full content...]

---

## See Also

- [Parent Principle](/odd/related.md)
- [Related Appendix](/odd/appendices/related.md)
```

---

## Example

```markdown
---
uri: klappy://odd/appendices/example-elaboration
title: "Example Elaboration"
audience: odd
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "appendices", "example"]
---

# Example Elaboration

> How the scarcity principle applies to documentation systems.

## Description

This appendix elaborates on the scarcity principle by examining how
it applies specifically to documentation systems. It provides examples
of decay-by-default and elevation criteria.

## Outline

- The Problem
- The Pattern
- The Application

---

## Content

### The Problem

[Why documentation sprawl happens...]

### The Pattern

[How decay-by-default works...]

### The Application

[Specific examples...]
```

---

## See Also

- [ODD Appendices Index](/odd/appendices/README.md)
- [ODD Index](/odd/README.md)


---

## Visual Evolution

*Source: `odd/appendices/visual-evolution.md`*


# Visual Evolution

> Visual systems evolve independently through versioned interfaces.

## Description

In ODD, visual systems evolve independently from products. Visual consistency is enforced through versioned visual interfaces and evolutionary selection of visual assets, not shared components or frozen style guides. Products consume visual systems as contracts. Visual decisions are explicit, versioned, testable, and replaceable—treated like API decisions. Three layers exist: Visual Interfaces (compatibility contracts, slow, versioned), Visual Assets (generated outputs, disposable), and Visual Attempts (evolutionary exploration, ephemeral). Visual evolution follows the same promotion rules as code. Products declare compatibility; they do not own visuals.

## Outline

- Summary
- The Core Principle
- Visual Layers
- Visual Interfaces
- Visual Assets
- Visual Attempts
- Promotion Model
- Separation from Product Lanes
- Relationship to Evolutionary Development
- Non-Goals
- Related Canon

---

## Content

Visual consistency is not enforced through shared components or frozen style guides.
It is enforced through **versioned visual interfaces** and **evolutionary selection of visual assets**.

Products consume visual systems as contracts.
Visual systems are not embedded inside product PRDs.

---

## The Core Principle

> **Visual consistency is a property of contracts, not code.**

Visual decisions are treated the same way as API decisions:
- Explicit
- Versioned
- Testable
- Replaceable

A product does not "own" its visuals.
It declares compatibility with a visual interface.

---

## Visual Layers

Visual concerns are split into three distinct layers:

| Layer | Purpose | Mutability |
|-------|---------|------------|
| Visual Interfaces | Compatibility contracts | Slow, versioned |
| Visual Assets | Generated outputs | Disposable |
| Visual Attempts | Evolutionary exploration | Ephemeral |

---

## Visual Interfaces

Visual interfaces define **what consumers may rely on**, not how visuals are implemented.

They include:
- Color systems
- Typography systems
- Spacing scales
- Motion primitives
- Iconography rules

Visual interfaces:
- Are versioned using semantic versioning
- Define breaking vs additive changes
- Contain no implementation code
- Are required for product compatibility

Example declaration (in a product PRD):

```markdown
## Visual Interfaces

This product MUST remain compatible with:
- color-system >=1.0.0 <2.0.0
- typography >=1.0.0 <2.0.0
```

---

## Visual Assets

Visual assets are outputs, not sources of truth.

They may include:
- CSS token files
- JSON theme descriptors
- Generated previews
- Screenshots

Rules:
- Assets may be regenerated
- Assets may be deleted
- Assets are always downstream of interfaces
- Assets are never authoritative

---

## Visual Attempts

Visual attempts are bounded experiments that propose changes to a visual interface or generate candidate assets.

They:
- Compete against each other
- Are evaluated on evidence, not taste
- Produce screenshots, recordings, and artifacts
- Do not directly modify products

Only a championed visual attempt may advance an interface version.

---

## Promotion Model

Visual evolution follows the same promotion rules as code:

| Stage | Result |
|-------|--------|
| Attempt | Exploration |
| Evidence | Observable comparison |
| Champion | Selected outcome |
| Promotion | Interface version update |

Products may upgrade visual compatibility only after promotion.

---

## Separation from Product Lanes

Visual evolution MUST NOT be embedded in product PRDs.

Products:
- Declare compatibility
- Consume visual interfaces
- Do not define colors, fonts, or spacing directly

Visual systems:
- Evolve independently
- May be AI-driven
- May change faster than products

This separation prevents visual churn from invalidating product experiments.

---

## Relationship to Evolutionary Development

Visual evolution is an explicit application of evolutionary principles:
- Variation via attempts
- Selection via evidence
- Retention via contracts

Visual systems form their own fitness landscape.
Products adapt to stable interfaces, not raw experimentation.

---

## Non-Goals

Visual Evolution does NOT claim:
- That one global style must exist
- That visuals must be AI-generated
- That products must share identical appearance

It exists to preserve compatibility, comparability, and reversibility.

---

## Related Canon

- [Product Lanes](./product-lanes.md)
- [Attempt Lifecycle](./attempt-lifecycle.md)
- [Interface Contracts](/interfaces/index.md)
- [Epochs](./epochs.md)


---

## Cognitive Partitioning

*Source: `odd/cognitive-partitioning.md`*


# Cognitive Partitioning

> Why reasoning systems must divide under pressure, just like execution systems do.

## Description

As systems accumulate tools, context, and responsibilities, the decision surface of a
single reasoning entity expands faster than its reliability.

Cognitive Partitioning names this constraint and explains why isolating reasoning
responsibilities becomes necessary as systems scale. The concept is universal and
does not prescribe any specific implementation.

## Outline

- The failure mode
- The underlying constraint
- Analogy: hiring too early
- Relationship to other ODD concepts
- Non-goals

---

## The Failure Mode

When a reasoning system has access to too many valid actions, it begins to fail
not from lack of capability, but from excess choice.

Symptoms include hesitation, inconsistent behavior, over-exploration, and repeated
clarification loops — even when the tools themselves are "correct."

---

## The Constraint

Decision complexity grows faster than execution capability.

Past a threshold, adding more tools can degrade reliability unless reasoning scope
is reduced.

---

## Analogy: Hiring Too Early

The same failure mode appears in early-stage teams.

Effective startups rarely hire a large staff upfront and then decide what each
person should do. Instead, they operate with a small, generalist core until
specific pain becomes visible — missed deadlines, overloaded founders, or repeated
failures in a narrow area.

Hiring occurs in response to pressure, not anticipation.

Teams that hire ahead of demonstrated need experience the same symptoms as
overloaded reasoning systems:
- unclear ownership
- duplicated or conflicting work
- excessive coordination
- founders managing people instead of outcomes

Cognitive Partitioning follows the same rule. Reasoning capacity is expanded only
when existing structures can no longer reliably absorb the load.

---

## Relationship to Other ODD Concepts

Product Lanes partition execution to preserve evidence integrity.
Cognitive Partitioning applies the same pressure logic to reasoning itself.

---

## Non-goals

This document does not define:
- specific agents
- specific tools or MCP servers
- orchestration frameworks
- required workflows

It explains why systems evolve toward isolation as complexity grows.

---

## See Also

- [Product Lanes](/docs/appendices/product-lanes.md) — Execution partitioning under pressure
- [ODD Misuse Patterns](/odd/misuse-patterns.md) — Common failure modes (diagnostic)


---

## Use Only What Hurts

*Source: `odd/constraint/use-only-what-hurts.md`*


# Use Only What Hurts

This document is not an introduction.

It is a system-level constraint.

It exists to prevent ODD from becoming heavy, coercive, or self-justifying as it grows.

If there is ever a conflict between this document and any other part of ODD, this document wins.

---

## Operating Constraints

- MUST only introduce structure, abstraction, or tooling in response to a concrete, experienced pain
- MUST NOT add systems, layers, or rules "just in case" or based on anticipated scale
- MUST treat felt friction as the prerequisite for architectural change
- MUST prefer temporary discomfort over premature optimization
- MUST preserve the ability to delete or reverse structure once pain subsides

---

## Defaults

- If no specific pain can be named, do nothing
- If the pain is tolerable, tolerate it
- If multiple pains exist, address the one causing the most drag first
- When unsure whether to add structure, delay and observe longer
- Prefer manual or ad-hoc solutions until repetition becomes painful

---

## Failure Modes

- **Premature Abstraction**: Adding abstraction because it feels "cleaner" rather than because something hurts
- **Anticipated Pain**: Building generalized systems to avoid anticipated future pain
- **Elegance as Justification**: Treating elegance or completeness as sufficient justification for new structure
- **Preference as Constraint**: Encoding preferences or aesthetics as constraints
- **Intellectual vs Operational**: Mistaking intellectual discomfort for operational pain

---

## Verification

- A named pain must be stated explicitly before new structure is introduced
- The pain must be observable in actual workflow, not hypothetical scenarios
- The introduced structure must demonstrably reduce the stated pain
- If no measurable reduction occurs, the structure should be removed
- Verification should be possible by inspecting recent attempts or friction points

---

## What This Constraint Exists To Do

ODD exists for one reason only:

**Agentic coding is fun until it quietly starts wasting your time.**

This constraint exists to ensure that ODD only intervenes when pain proves it is necessary — and nowhere else.

ODD must never require adoption, belief, or full-system buy-in in order to be useful.

Structure is allowed only as a response to experienced friction.

---

## What This Is

ODD is a collection of documented working patterns.

These patterns:

- Reduce specific kinds of friction in agentic coding
- Are derived from real use, not theory
- Are optional, composable, and discardable

Nothing in ODD requires installing software, enabling plugins, or agreeing to a framework.

Patterns may be automated later.
Automation is optional and downstream.

The patterns come first.

---

## What This Is Not

ODD is not:

- A framework to adopt
- A prescribed workflow
- A governance model
- A belief system

ODD does not replace judgment.
ODD does not mandate compliance.

If any part of ODD feels heavy, ceremonial, or joy-killing, it is being misapplied.

---

## How ODD Is Allowed To Grow

ODD may grow only by responding to real, repeated pain.

New structure is justified only when:

- A problem has been experienced in practice
- Lighter constraints have already failed
- The proposed addition demonstrably reduces friction

Completeness is not a goal.
Elegance is not a goal.

Relief is the goal.

---

## The Non-Negotiable Invariant

Regardless of form, tooling, or implementation:

**The work must never lie about reality.**

This means:

- No pretending something worked when it did not
- No hiding failure behind confidence
- No mistaking screenshots or partial outputs for success

Any pattern, practice, or agent behavior that violates this invariant is invalid, regardless of how elegant it appears.

---

## Operational Authority

This document has supremacy over:

- Patterns
- Canon
- Principles
- Terminology
- Agent skills
- Implementations

It must:

- Always be present in agent context
- Be consulted when evaluating additions or changes
- Be used to reject unnecessary structure

This document should change rarely.
Its role is to apply constant tension.

---

## Final Constraint

ODD exists to absorb the cost of experimentation — not to impose it.

If a user outgrows ODD, that is success.

If ODD becomes something that must be followed, it has failed.


---

## ODD System Contract

*Source: `odd/contract.md`*


# ODD System Contract

> The single source of truth for ODD workflow compatibility.

## Description

The ODD System Contract versions the three-tier hierarchy (ODD/Canon/Docs), repo structure, PRD lanes, attempt lifecycle, tooling invariants, required paths, provenance requirements (META.json), and evidence standards. Current version is 2.1.0. Version 2.1.0 formalizes the three-tier conceptual hierarchy where ODD contains universal principles, Canon contains program constraints, and Docs contains implementation details. Each tier has different decay rates. Epochs mark shifts in the evaluation landscape. Do not compare outcomes across epochs without explicit adjustment.

## Outline

- What This Versions
- Epochs (E0001, E0002)
- Contract 2.0.0 Breaking Changes
- Compatibility (Forward and Backward)
- Version History

---

## Operating Constraints

- MUST declare lane for all attempts; attempts without lane declaration are invalid
- MUST declare epoch in META.json; outcomes are not comparable across epochs without explicit adjustment
- MUST store attempts under `products/<lane>/attempts/` (lane-contained); root `/attempts/**` is legacy read-only
- MUST follow three-tier hierarchy: ODD (universal) → Canon (program) → Docs (implementation)
- MUST NOT compare outcomes across epochs without explicit adjustment for evaluation context differences

---

## Defaults

- When uncertain about file placement, use the litmus test: 10-year truth → ODD, all-products rule → Canon, local implementation → Docs
- Assume contract 2.x compatibility unless explicitly working with historical E0001 artifacts
- Treat epoch boundaries as evaluation discontinuities, not version bumps
- Reference this document for system compatibility questions; individual PRDs have their own versioning

---

## Failure Modes

- **Cross-Epoch Comparison**: Comparing E0001 outcomes to E0002 without adjustment distorts evaluation
- **Lane Omission**: Running attempts without lane declaration creates orphaned artifacts
- **Tier Confusion**: Placing implementation details in ODD or universal principles in Docs
- **Legacy Path Usage**: Writing new attempts to root `/attempts/` instead of lane-contained paths
- **Implicit Epochs**: Failing to mark historical E0001 artifacts with epoch context

---

## Verification

- META.json contains lane and epoch declarations
- Attempts are stored under `products/<lane>/attempts/prd-vX.Y/attempt-NNN/`
- Documents placed according to litmus test (10-year, all-products, local)
- Epoch boundaries respected in any outcome comparison
- Historical artifacts marked with appropriate epoch context

---

## Content

**Current Version:** 2.1.0

This document is the single source of truth for the ODD workflow contract version.

All other documents reference this version. Individual PRDs, attempts, and content packs have their own versioning schemes, but compatibility with the ODD system is determined by this contract.

---

## What This Versions

The ODD System Contract covers:

- **Three-tier hierarchy** (ODD → Canon → Docs)
- **Repo structure** required for ODD workflow
- **PRD lanes** and attempt lifecycle contracts
- **Tooling invariants** (register/nuke/finalize/promote)
- **Required paths** and naming conventions
- **Provenance requirements** (META.json schema)
- **Evidence standards** (what counts as proof)

---

## Three-Tier Hierarchy (2.1.0)

ODD is organized as a conceptual hierarchy with different decay rates:

| Tier | Location | Contains | Decay Rate |
|------|----------|----------|------------|
| **ODD** | `/odd/` | Universal principles (timeless, product-agnostic) | Almost never |
| **Canon** | `/canon/` | Program-level constraints (shared rules across products) | Carefully |
| **Docs** | `/docs/` | Implementation details (how this instance works) | Freely |

**The litmus test:**
1. Would this still be true in 10 years? → **ODD**
2. Should all products in this program obey it? → **Canon**
3. Is this about how *we* do it *here*? → **Docs**

See [D0001: Three-Tier Conceptual Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md).

---

## Epochs

Epochs mark shifts in the evaluation landscape. Contract versions and epochs are related but distinct:

| Epoch | Contract Version | Description |
|-------|------------------|-------------|
| E0001-single-prd-era | 1.x | Single PRD world (`/docs/PRD.md`) |
| E0002-multi-lane-era | 2.x | Multi-lane world (`/docs/PRD/<lane>/PRD.md`) |

**Rule:** Do not compare outcomes across epochs without explicit adjustment.

See `/docs/appendices/epochs.md` for epoch semantics.

---

## Contract 2.0.0 — Breaking Changes

This version introduces structural changes that are not backwards-compatible:

### Removed
- Single active PRD rule (`/docs/PRD.md` as sole PRD location)

### Added
- **Lane declaration required** for all attempts
- **Epoch declaration required** in META.json
- PRDs stored under `/docs/PRD/<lane>/PRD.md`
- Attempts stored under `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/` (lane-contained)
- Tooling requires `--lane` flag for register, finalize, promote

Note: Root `/attempts/**` is legacy (read-only). All new attempts are lane-contained.

### Changed
- Mental model: products decoupled, canon shared
- Comparison validity: same lane + same PRD + same epoch required

---

## Compatibility

### Forward Compatibility
Documents written for contract 2.x will not work correctly in a 1.x environment.

### Backward Compatibility
Epoch 1 artifacts (pre-lanes) remain valid historical records. They are not "wrong" — they are from a different evaluation context.

Epoch 1 documents should be marked with an epoch header if they remain in the repo for historical reference.

---

## Version History

| Version | Date | Summary |
|---------|------|---------|
| 2.1.0 | 2026-01-21 | Three-tier hierarchy (ODD/Canon/Docs), ODD at root level |
| 2.0.0 | 2026-01-17 | Multi-lane architecture, epoch requirements |
| 1.x | Pre-2026-01-17 | Single PRD era (implicit, never formally versioned) |

---

## Related Documents

- Decision log: `/docs/decisions/D0011-odd-contract-2.0.0.md`
- Epochs: `/docs/appendices/epochs.md`
- Product Lanes: `/docs/appendices/product-lanes.md`
- Alignment Reviews: `/odd/appendices/alignment-reviews.md`


---

## Three-Tier Conceptual Hierarchy

*Source: `odd/decisions/D0001-three-tier-conceptual-hierarchy.md`*


# Three-Tier Conceptual Hierarchy

> ODD separates universal principles from program constraints from implementation details.

## Description

ODD is organized as a three-tier conceptual hierarchy where each layer absorbs different pressure and has different decay rates. ODD contains universal principles (timeless, product-agnostic), Canon contains program-level constraints (shared rules across products), and Docs contains implementation details (how this instance works). This separation allows ODD to outgrow any single repository without losing coherence.

## Outline

- Decision
- Status
- The Three Tiers
- The Litmus Test
- Why This Matters
- Consequences
- Evidence

---

## Operating Constraints

- MUST classify files using the litmus test: 10-year truth → ODD, all-products rule → Canon, local implementation → Docs
- MUST NOT conflate philosophy with plumbing; universal principles stay in ODD, implementation details stay in Docs
- MUST allow different decay rates: ODD (almost never), Canon (carefully), Docs (freely)
- MUST NOT break universal principles when fixing implementation bugs
- MUST keep ODD independent of any single repository, vendor, or implementation

---

## Defaults

- When uncertain about placement, ask: "Would this still be true if klappy.dev didn't exist?"
- ODD should almost never change; Canon evolves carefully; Docs may rot and be rebuilt
- Prefer placing content lower (Docs) unless it clearly belongs higher (Canon/ODD)
- Treat Canon as shared contract, not universal truth

---

## Failure Modes

- **Conflating Tiers**: Putting implementation decisions in ODD or philosophy in Docs
- **Premature Elevation**: Moving content to ODD before it's proven universal
- **Monolithic Thinking**: Treating all three tiers as a single philosophy
- **Decay Mismatch**: Expecting Docs-level stability from implementation details
- **Vendor Lock-in**: Embedding vendor-specific decisions into ODD or Canon

---

## Verification

- Files pass the litmus test for their tier placement
- ODD content would still be true if this repository didn't exist
- Canon changes have program-wide justification
- Docs changes don't require updates to ODD or Canon
- Teams could fork Canon while keeping ODD intact

---

## Content

## Decision

ODD is a three-tier conceptual hierarchy, not a single monolithic philosophy:

| Tier | Contains | Answers | Decay Rate |
|------|----------|---------|------------|
| **ODD** | Universal principles | "What is always true about building well?" | Almost never |
| **Canon** | Program-level constraints | "What rules do we share across products?" | Carefully |
| **Docs** | Implementation details | "How does this instance work?" | Freely |

## Status

**Active**

## The Three Tiers

### Tier 1: ODD (Universal Principles)

ODD is the root. It is:

- Not a framework
- Not a product philosophy
- Not owned by any single implementation

ODD contains:

- Progressive distillation
- Failure-driven modularity
- Visual proof > narrative confidence
- Evidence over assertion
- Elevation before optimization

**The test:** Would this still be true if klappy.dev didn't exist? If Cloudflare vanished? If LLMs were replaced?

If yes → it's ODD.

### Tier 2: Canon (Program-Level Constraints)

Canon is shared contract, not universal truth.

Canon answers: *"If you are building within this program, these are the rules we agree to."*

Canon contains:

- decision-rules
- definition-of-done
- self-audit
- misuse-patterns
- completion-report-template
- constraints (scoped to this program)

**The test:** Should all products in this program obey it?

If yes → it's Canon.

Crucially:
- Canon can change without invalidating ODD
- Two programs could share ODD but diverge in Canon

### Tier 3: Docs (Implementation Details)

Docs are the reference implementation.

Docs contain:

- Infrastructure decisions
- CLI paths
- Cloudflare specifics
- Repo structure
- Tooling affordances
- Branch naming conventions

**The test:** Is this about how *we* do it *here*?

If yes → it's Docs.

## The Litmus Test

For any file, ask:

1. **Would this still be true in 10 years?**
   - Yes → ODD
   - No → keep going

2. **Should all products in this program obey it?**
   - Yes → Canon
   - No → keep going

3. **Is this about how we do it here?**
   - Yes → Docs

If something fails all three, it probably doesn't belong at all.

## Why This Matters

This separation:

- Allows publishing ODD as a standalone essay/site
- Lets other teams adopt ODD without adopting your Canon
- Supports running multiple Canons under the same ODD
- Explains why "ODD isn't a framework"

Frameworks conflate all three layers. ODD separates them.

Different decay rates give real systems what they need:

- ODD should almost never change
- Canon is allowed to evolve carefully
- Docs are allowed to rot and be rebuilt

## Consequences

### Enables

- ODD can outgrow any single repository
- Teams can fork Canon while keeping ODD
- Implementation can be completely replaced without touching philosophy
- Clear criteria for file placement

### Prevents

- Conflating philosophy with plumbing
- Breaking universal principles when fixing implementation bugs
- Vendor lock-in at the conceptual level

### Costs

- Requires discipline to classify correctly
- Three places to look instead of one
- Harder to explain to newcomers (until they get it)

## Evidence

- D0015 (this decision) - formalizing the separation
- Canon progressive distillation effort - moved implementation decisions to docs/
- `/docs/appendices/` - now contains implementation-specific appendices
- `/docs/decisions/` - now contains implementation-specific decisions
- `/odd/appendices/` - retains only portable philosophy


---

## ODD Conceptual Decisions

*Source: `odd/decisions/README.md`*


# ODD Conceptual Decisions

> Decisions about ODD's mental model and conceptual architecture.

This folder contains decisions about ODD itself — the philosophy, not any specific implementation.

---

## Conceptual Decisions (This Folder)

| ID | Decision | Summary |
|----|----------|---------|
| [D0001](./D0001-three-tier-conceptual-hierarchy.md) | Three-Tier Conceptual Hierarchy | ODD separates universal principles → program constraints → implementation details |

---

## Two Types of Decisions

| Location | Contains | Example |
|----------|----------|---------|
| `/odd/decisions/` | Decisions about ODD's conceptual architecture | "ODD is a three-tier hierarchy" |
| `/docs/decisions/` | Decisions about this implementation | "prod branch is production" |

---

## The Principle

> **Conceptual architecture lives in canon. Implementation decisions live in docs.**

The three-tier model (ODD → Canon → Docs) is itself captured in D0001.

---

## See Also

- [D0001: Three-Tier Conceptual Hierarchy](./D0001-three-tier-conceptual-hierarchy.md)
- `/docs/decisions/README.md` — Implementation decision index
- `/odd/contract.md` — ODD System Contract


---

## Outcomes-Driven Development

*Source: `odd/index.md`*


# 🎯 Outcomes-Driven Development (ODD)

The philosophical and operational foundation for this repository. ODD treats outcomes as primary, artifacts as ephemeral, and verification as mandatory.

---

## 📁 Contents

| File | Title | Summary |
|------|-------|---------|
| `manifesto.md` | ODD Manifesto | The core philosophy: defining outcomes, enforcing constraints, verifying reality. AI accelerates execution; governance preserves trust. |
| `terminology.md` | Terminology & Disambiguation | Constrained vocabulary of ODD. Defines terms before elevation — language governance at the point of origin. |
| `maturity.md` | Project Maturity | How rigor changes as projects mature. PoC → Pilot → Production. |
| `contract.md` | ODD System Contract | Version contract for ODD compatibility. Currently v2.0.0 (multi-lane era). |
| `misuse-patterns.md` | Misuse Patterns | Common failure modes and how ODD gets misapplied in practice. |
| `prompt-architecture.md` | Prompt Architecture | How intent scales without giant prompts. |
| `orientation-map.md` | Orientation Map | One-page mental model of ODD, Canon, Evidence, and Outcomes. |
| `cognitive-partitioning.md` | Cognitive Partitioning | Why reasoning systems must divide under pressure as they scale. |

### Subfolders

| Folder | Purpose |
|--------|---------|
| `appendices/` | Extended concepts (23 files). See [appendices/README.md](./appendices/README.md) |
| `decisions/` | Architecture Decision Records. See [decisions/README.md](./decisions/README.md) |

---

## 🚀 Start Here

1. **`manifesto.md`** — Understand the philosophy
2. **`terminology.md`** — Lock in the language
3. **`maturity.md`** — Know when rigor increases
4. **`appendices/attempt-lifecycle.md`** — See how work flows

---

## 💡 Core Thesis

The primary job of development is not writing code. It is:
- Defining outcomes
- Enforcing constraints
- Verifying reality

AI accelerates execution. Governance preserves trust.


---

## ODD Manifesto — Extended

*Source: `odd/manifesto.md`*


# ODD Manifesto v1.1 (Extended)

> A governance framework for human-AI collaboration that optimizes learning, not execution.

## Description

Outcomes-Driven Development (ODD) operationalizes governance for human-AI collaboration. The core thesis: development is about defining outcomes, enforcing constraints, and verifying reality—not writing code. AI accelerates execution; governance preserves trust. The pillars include Prompt Over Code, KISS, DRY with Isolation, Consistency, Maintainability, Antifragile design, and Scalability. ODD treats restartability as a feature, applies progressive governance based on maturity (PoC → Pilot → Production), requires evidence over assertion, treats AI as accelerator not authority, demands falsifiable outcomes, prefers reversibility, and requires stop conditions. Memory is the bottleneck, not computation.

## Outline

- Purpose and Core Thesis
- Pillars (Operational Interpretation)
- Restartability Over Salvage
- Progressive Governance (Maturity-Aware)
- Evidence as the Gate
- Trust, Authority, and AI
- Outcomes Must Be Falsifiable
- Reversibility and Cost Awareness
- Stop Conditions
- Memory Is the Bottleneck
- Confidence, Risks, and Known Failure Modes

---

## Content

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
- `/odd/appendices/progressive-elevation.md`
- `/docs/appendices/product-lanes.md`
- `/docs/appendices/epochs.md`

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
• “Prompt over code” degenerates into “prompt + hidden config everywhere.”

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
• “One source of truth” becomes “many partial truths.”

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

ODD is vulnerable to being “locked in” too early, reducing exploration.

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


---

## Project Maturity & Progressive Governance

*Source: `odd/maturity.md`*


# Project Maturity & Progressive Governance

> When to apply rigor, not just what rigor exists.

## Description

Project maturity defines how constraints and policies change as a project matures. Three levels exist: Level 0 (PoC/Exploration) focuses on learning quickly with non-authoritative artifacts; Level 1 (Pilot/Product) delivers value safely with evidence, visual proof, and explicit tradeoffs; Level 2 (Production/Long-Term) sustains trust with measurable outcomes, observability, security, and explicit stop conditions. Rigor increases with maturity. Projects should move up when others depend on them, artifacts persist, decisions become costly to reverse, or trust is implicitly assumed.

## Outline

- Core Principle: Rigor increases with maturity
- Level 0 — PoC / Exploration
- Level 1 — Pilot / Product
- Level 2 — Production / Long-Term
- Relationship to Other Canon Documents
- Agent Expectations
- Escalation Rules

---

## Content

**Canon v0.1**

> This governance axis tells agents *when* to apply rigor, not just what rigor exists.

This page defines how my principles, constraints, and policies change as a project matures.

Not every project needs the same level of rigor on day one.
Applying production-level governance to exploratory work kills learning.
Failing to apply it later destroys trust.

This model exists to activate the right constraints at the right time.

---

## 📌 Core Principle

I do not apply all rules equally at all times.

Rigor increases with maturity.
Exploration comes first. Governance comes later.

Every project must explicitly state its current maturity level.

---

## 📋 Maturity Levels Overview

I use three maturity levels:

1. PoC / Exploration
2. Pilot / Product
3. Production / Long-Term

These levels are not about importance.
They are about risk, trust, and dependency.

---

## 🔬 Level 0 — PoC / Exploration

**Goal:** Learn quickly and discard freely.

**Characteristics**
• Short-lived or experimental
• Ephemeral artifacts
• Low dependency from others
• High uncertainty tolerated

What applies
• Prompt over code
• KISS (loosely)
• DRY (lightly)
• Consistency (local only)
• Evidence of possibility (not correctness)

What does not apply yet
• Formal observability
• Cost optimization
• Trust or authority boundaries
• Production security guarantees
• Long-term reversibility planning

Required labeling

“This is a PoC. Outputs are exploratory and non-authoritative.”

Critical rule

Nothing at this level is considered final or trusted.

---

## 🚀 Level 1 — Pilot / Product

**Goal:** Deliver real value safely to real users.

**Characteristics**
• Repeated use
• Growing user expectations
• Shared ownership begins
• Partial persistence

What turns on
• Definition of Done & Evidence Policy
• Visual proof for UI behavior
• Explicit tradeoffs
• Basic observability
• Reversibility for major decisions
• Defined human approval points

New obligation

If users depend on it, it must be verifiable.

Risk posture

Failure is acceptable, but silent failure is not.

---

## ✅ Level 2 — Production / Long-Term

**Goal:** Sustain trust over time.

**Characteristics**
• Canonical or authoritative data
• External dependencies
• Organizational or reputational risk
• Long timelines

What becomes mandatory
• Measurable outcomes with metrics
• Continuous feedback loops
• Full observability
• Trust & authority boundaries
• Cost predictability
• Security and privacy defaults
• Explicit stop conditions for autonomy

Critical rule

Nothing enters production without:
• a named owner
• an undo path
• an audit trail

At this level, correctness and trust outweigh speed.

---

## 🔗 Relationship to Other Canon Documents

This maturity model modulates the following:
• Constraints
Some constraints are optional at PoC and mandatory later.
• Decision Rules
Rules like KISS and Borrow→Build apply at all levels, but escalation thresholds change.
• Definition of Done
Evidence requirements increase with maturity.
• Self-Audit Checklist
More items become non-optional as maturity increases.
• Visual Proof Standards
Optional for PoCs, required for Pilot and Production.

---

## 🤖 Agent Expectations

Agents and collaborators are expected to:
• explicitly state the project’s maturity level
• apply only the rules required for that level
• refuse to over-govern PoCs
• refuse to under-govern Production systems

If maturity is unclear, the correct action is to ask.

---

## ⚠️ Escalation Rules

A project should move up a maturity level when:
• others begin depending on it
• artifacts persist beyond initial intent
• decisions become costly to reverse
• trust is implicitly assumed

A project may move down only with explicit acknowledgment.

---

## 💡 Closing Note

This model exists to protect both:
• exploration, and
• trust.

Rigor too early kills creativity.
Rigor too late kills credibility.

Progressive governance keeps both alive.

---

Status
• Canon v0.1 — Project Maturity complete
• Canon now supports lifecycle-aware enforcement

---

What This Unlocks (Important)

With this file added, agents can now:
• ask for or infer maturity
• activate the correct checks automatically
• avoid overbuilding PoCs
• avoid underbuilding production systems

This completes the missing dimension you identified.

---

Suggested Next Moves (Choose One) 1. Update ODD Manifesto → ODD + Maturity 2. Agent Handoff Instruction (now maturity-aware) 3. MCP schema that exposes maturity as a first-class field 4. Refactor existing canon docs to reference maturity thresholds

Say which you want next, and we’ll continue cleanly.


---

## ODD Misuse Patterns

*Source: `odd/misuse-patterns.md`*


# ODD Misuse Patterns

> Predictable failure modes when ODD is applied incorrectly.

## Description

This appendix documents predictable ways ODD fails: Outcome Theater (saying outcomes but measuring artifacts), Prompt Maximalism (one huge prompt replacing thinking), Premature Governance (locking down before patterns stabilize), Evidence Substitution (assertions replacing demonstrations), Consistency Absolutism (treating early conventions as immutable), and Antifragility as Optimism (assuming recovery without testing it). These are human failure modes under real constraints, not violations of intent. The purpose is early recognition through shared language, not prevention through rules.

## Outline

- Outcome Theater
- Prompt Maximalism
- Premature Governance
- Evidence Substitution
- Consistency Absolutism
- Antifragility as Optimism
- Maturity Note
- How to Use This Appendix

---

## Content

**(Appendix to ODD Manifesto — Internal)**

This section documents predictable ways Outcomes-Driven Development (ODD) fails when applied incorrectly.
These are not violations of intent; they are human failure modes under real constraints.

The purpose is not prevention through rules, but early recognition through shared language.

---

## Misuse Pattern 1: Outcome Theater

> "We say outcomes, but still worship artifacts."

What it looks like
• Outcomes are stated, but success is still measured by:
• shipped code
• completed tickets
• deployed features
• Evidence is implied, not demonstrated.

Why it happens
• Artifact-based metrics feel concrete.
• Outcomes feel abstract until proven.

Where it shows up
• Early PoCs that never re-anchor to real user value.
• Pilots that quietly revert to velocity metrics.

Risk
• ODD becomes rebranded output-driven development.

---

## Misuse Pattern 2: Prompt Maximalism

> "If one prompt is good, ten must be better."

What it looks like
• Large, ornate prompts replace thinking.
• Slight prompt changes cause wildly different outcomes.
• Prompts are curated like fragile artifacts.

Why it happens
• Early AI success feels magical.
• Teams mistake correlation for control.

Where it shows up
• PoCs experimenting rapidly.
• Teams hopping between tools without stabilizing conventions.

Risk
• Prompt over code collapses into prompt over judgment.

---

## Misuse Pattern 3: Premature Governance

> "Let's lock this down before it breaks."

What it looks like
• Rules introduced before patterns stabilize.
• Heavy definitions of “done” applied too early.
• Checklists used as gates instead of lenses.

Why it happens
• Fear of chaos.
• Desire for predictability before understanding.

Where it shows up
• Pilots transitioning too quickly to “production thinking.”
• Teams scaling before learning.

Risk
• Innovation slows before it has a chance to inform governance.

---

## Misuse Pattern 4: Evidence Substitution

> "Trust me, it works."

What it looks like
• Assertions replace demonstrations.
• Logs, explanations, or screenshots stand in for proof.
• Visual verification is deferred indefinitely.

Why it happens
• Evidence takes effort.
• Verifying your own work is uncomfortable.

Where it shows up
• Autonomous agent workflows.
• Systems that “should” work but haven’t been observed.

Risk
• Trust becomes social instead of empirical.

---

## Misuse Pattern 5: Consistency Absolutism

> "One way forever."

What it looks like
• Early conventions treated as immutable.
• Divergence framed as error instead of signal.
• Local context ignored for global uniformity.

Why it happens
• Consistency reduces cognitive load.
• Change feels like regression.

Where it shows up
• Mature systems resisting evolution.
• Teams optimizing for internal harmony over external reality.

Risk
• The system becomes brittle under real-world variation.

---

## Misuse Pattern 6: Antifragility as Optimism

> "It'll recover."

What it looks like
• Failure assumed to be harmless.
• Recovery paths untested.
• Learning deferred until “later.”

Why it happens
• Antifragility sounds resilient.
• Testing failure is inconvenient.

Where it shows up
• Distributed systems.
• Autonomous or semi-autonomous agents.

Risk
• Systems degrade silently until trust collapses.

---

A note on maturity (intentionally light)

These patterns tend to:
• appear early as curiosity and speed
• persist silently through pilots
• cause real damage in production if unexamined

The solution is not stricter rules, but timely awareness.

---

How this appendix should be used
• As a diagnostic lens
• As shared language for course correction
• As a reminder that misuse is normal — and fixable

This list is expected to grow as real failures are observed.

---


---

## ODD + Canon + Evidence — Orientation Map

*Source: `odd/orientation-map.md`*


# ODD + Canon + Evidence — Orientation Map

> A one-page mental model for the ODD system.

## Description

This orientation map provides a single-page mental model of how Intent flows through ODD Manifesto to Canon to Decisions to Evidence to Outcomes. ODD is organized as a three-tier conceptual hierarchy: ODD contains universal principles (timeless), Canon contains program-level constraints (shared rules), and Docs contains implementation details (how this instance works). Maturity moves from Exploration through Validation to Commitment. The map explicitly rejects "if it compiles, it's done" and "governance replaces judgment."

## Outline

- The Core Idea (Intent → ODD → Canon → Decisions → Evidence → Outcomes)
- How to Read This Map
- The Three-Tier Hierarchy (ODD → Canon → Docs)
- Where Maturity Lives
- What This Map Explicitly Rejects
- Why This Map Exists

---

## Content

> This is not a workflow. It is a mental model.

---

## 🎯 The Core Idea

```
        Intent
          |
          v
      ODD Manifesto
          |
          v
        Canon

(Constraints & Rules)
|
v
Decisions
|
v
Evidence
        |
        v
      Outcomes
```

---

## 📖 How to Read This Map
• ODD explains why and what we care about
• Canon explains how decisions tend to be shaped
• Decisions are local, contextual, and human
• Evidence grounds claims in reality
• Outcomes are the only thing that matters long-term

Nothing here enforces anything.
Everything here informs something.

**Canon may reference Docs. Docs must never redefine Canon.**

---

## 🏗️ The Three-Tier Hierarchy

ODD is a conceptual hierarchy, not a monolithic philosophy:

| Tier | Contains | Decay Rate |
|------|----------|------------|
| **ODD** | Universal principles (timeless, product-agnostic) | Almost never |
| **Canon** | Program-level constraints (shared rules across products) | Carefully |
| **Docs** | Implementation details (how this instance works) | Freely |

**The litmus test:**

1. Would this still be true in 10 years? → **ODD**
2. Should all products in this program obey it? → **Canon**
3. Is this about how *we* do it *here*? → **Docs**

This separation allows ODD to outgrow any single repository.

See [D0001: Three-Tier Conceptual Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md).

---

## 📊 Where Maturity Lives (Not Gates)

```
Exploration ──────→ Validation ──────→ Commitment
   (PoC)            (Pilot)         (Production)
```

Rigor increases →
Evidence expectations increase →
Governance tightens →

    •	Early: bias toward learning
    •	Middle: bias toward validation
    •	Later: bias toward trust and durability

No sharp lines. No ceremony required.

---

## 🚫 What This Map Explicitly Rejects
• “If it compiles, it’s done.”
• “Trust the explanation.”
• “One true workflow.”
• “Governance replaces judgment.”

---

## 💡 Why This Map Exists
• To explain the system in under 60 seconds
• To anchor conversations without debate
• To keep humans oriented while tools change

---

## ✅ Why These Two Artifacts Are Enough for Now
• They surface risk without prescribing control
• They encode wisdom without freezing behavior
• They respect maturity without formalizing it

This keeps you aligned with:
• KISS
• Antifragility
• Prompt over code
• Convention over configuration

And most importantly:

They make misuse discussable instead of shameful.

---

## See Also

- [Cognitive Partitioning](/odd/cognitive-partitioning.md) — Why reasoning systems must divide under pressure
- [ODD Misuse Patterns](/odd/misuse-patterns.md) — Common failure modes and how ODD gets misapplied


---

## Prompt Architecture

*Source: `odd/prompt-architecture.md`*


# Prompt Architecture (Orientation)

> How intent scales without collapsing into a monolithic prompt.

## Description

Prompt architecture addresses the God Prompt anti-pattern: as scope grows, prompts become monolithic, unmaintainable, sensitive to small edits, context-bloated, and inconsistent. The alternative is Orchestrated Intent: keep stable intent in canonical artifacts, construct task prompts dynamically, use smaller focused agents for bounded tasks, pass results through shared constraints and evidence standards. Intent is layered: Worldview (rarely changes), Project Intent (changes occasionally), Task Intent (changes constantly). Only the bottom layer should enter the working prompt in full detail. Context budgeting treats every token like a limited resource.

## Outline

- The Anti-Pattern: Prompt Maximalism (God Prompt)
- The Alternative: Orchestrated Intent
- Intent Graph (Mental Model)
- Context Budgeting
- Maturity Note
- Failure Mode of Orchestration

---

## Content

**Canon / ODD Appendix v0.1**

This appendix names a common scaling failure mode: the God Prompt.

As an app’s scope grows, prompts tend to grow into a single monolith that becomes:
• unmaintainable
• difficult to reason about
• sensitive to small edits
• context-bloated
• increasingly inconsistent

This is rarely intentional. It is a natural default.

---

## ⚠️ The Anti-Pattern: Prompt Maximalism ("God Prompt")

What it looks like
• One prompt tries to cover:
• product requirements
• system constraints
• UI conventions
• coding standards
• edge cases
• release steps
• testing expectations
• The prompt becomes the “real system,” and code becomes an artifact of that prompt.

Why it fails
• Cognitive load explodes
• Context bloat crowds out task-relevant details
• Small edits have unpredictable consequences
• The prompt becomes a fragile dependency

---

## ✅ The Alternative: Orchestrated Intent

Instead of one prompt that does everything:
• keep stable intent in canonical artifacts (ODD + Canon)
• construct task prompts dynamically
• use smaller focused agents for bounded tasks
• pass results through shared constraints and evidence standards

In this model:
• the Canon is the constitution
• the task prompt is a temporary work order
• the output is verified by evidence, not confidence

---

## 🧭 Intent Graph (Mental Model)

Think of intent as layered:

1. **Worldview** (rarely changes) — ODD, constraints, decision rules
2. **Project intent** (changes occasionally) — PRD, scope, priorities, maturity level
3. **Task intent** (changes constantly) — the specific job to be done right now

Only the bottom layer should enter the working prompt in full detail.

---

## 💰 Context Budgeting (A Simple Heuristic)

Treat context like a budget:
• Every token spent on generic policy reduces tokens available for task specifics.
• The goal is not “more context,” but “relevant context.”

A healthy system prefers:
• small, precise context
• stable references by URI
• on-demand retrieval

---

## 📊 Maturity Note (Intentionally Light)

- **PoC:** A larger prompt may be acceptable for speed, as long as it is treated as disposable.
• Pilot: Prompt growth becomes a risk. Begin splitting tasks and referencing canonical resources.
• Production: Monolithic prompts become a liability. Orchestrated intent and bounded sub-tasks become the default.

This is not a rule. It is a scaling reality.

---

## ⚠️ Failure Mode of Orchestration (So We Don't Romanticize It)

Orchestration can fail too.

Common orchestration failure modes:
• semantic drift across sub-agents
• inconsistent assumptions
• extra coordination overhead
• loss of a single coherent narrative

The mitigation is not “more instructions,” but:
• shared canonical references
• explicit evidence requirements
• clear boundaries between tasks

---

## 💡 Closing

When prompts grow without bound, the system becomes fragile.

ODD favors:
• stable intent captured in canonical artifacts
• small prompts constructed for the task at hand
• verification through evidence rather than explanation

---

## ✅ Status

- Appendix v0.1 complete
- Orientation-only
- No enforcement semantics

---

## 🔗 Why This Fits Your Pillars
• KISS: It discourages giant prompts; encourages small bounded contexts.
• DRY: Canonical references prevent repeating the same boilerplate in every prompt.
• Consistency: Canon provides a stable “source of truth” across sub-agents.
• Maintainability: Prompts become smaller, modular, and replaceable.
• Antifragile: Smaller tasks fail faster and recover easier.
• Scalable: Orchestration scales better than monoliths.
• Prompt-over-code: This is the application of that principle at scale.

---


---

## ODD Manifesto — Public

*Source: `odd/README.md`*


# 🧠 Outcomes-Driven Development (ODD)

Outcomes-Driven Development (ODD) is an approach to building software that prioritizes real-world results over artifacts.

In an environment where AI can generate code, interfaces, and entire applications quickly, the limiting factor is no longer production speed—it is clarity of intent, quality of verification, and the ability to choose among many possible outcomes.

ODD exists to make those constraints explicit.

---

## ⚠️ System Constraint (Read Before Adding Structure)

ODD is governed by a single, non-negotiable constraint:

**→ [`Use Only What Hurts`](constraint/use-only-what-hurts.md)**

This document has **supremacy** over all other ODD documents.

If a proposed pattern, principle, or addition conflicts with it, the proposal is invalid.

---

## The Core Idea

Traditional software development often optimizes for outputs:

- lines of code
- shipped features
- completed tickets

ODD shifts the focus to outcomes:

- Does this solve the real problem?
- Can it be demonstrated, not just explained?
- Will it hold up as conditions change?

Code is still written. Tools still matter. But they are means, not ends.

---

## Why ODD Now

AI changes the economics of software creation.

When generation becomes cheap:

- variation explodes
- artifacts become disposable
- maintenance becomes the real cost

ODD responds by:

- treating code as ephemeral
- emphasizing verification over explanation
- encouraging curation over accumulation

The goal is not to generate _more_ software, but to ship _better_ outcomes with less long-term drag.

---

## Core Principles

ODD is guided by a small set of principles that recur across projects:

- **Prompt over Code**
  Natural language intent guides generation; code is an output, not the source of truth.

- **Keep It Simple (KISS)**
  Prefer the simplest solution that works and can be explained clearly.

- **Don’t Repeat Yourself (DRY), with Isolation**
  Reuse ideas and components where it helps, but avoid brittle global coupling.

- **Consistency**
  Similar problems should feel similar to users and maintainers.

- **Maintainability**
  Optimize for low-effort upkeep and clear handoff, not cleverness.

- **Antifragility**
  Systems should learn from stress and failure, not just survive them.

- **Scalability**
  Growth should increase capability without exploding complexity or cost.

These principles are lenses, not rules. Their application changes as projects mature.

---

## Evidence Over Explanation

ODD places a strong emphasis on evidence.

In practice, this means:

- showing working systems
- favoring visual or experiential proof
- treating explanations as hypotheses until verified

This is especially important in AI-assisted workflows, where fluent explanations are easy to produce but easy to trust incorrectly.

---

## Project Maturity Matters

ODD does not apply the same rigor at every stage.

- **Exploration (PoC)** — bias toward learning and speed
- **Validation (Pilot)** — bias toward proof and repeatability
- **Commitment (Production)** — bias toward trust, durability, and handoff

Rigor increases with maturity. Governance tightens gradually. There are no sharp lines.

---

## What ODD Is Not

ODD is not:

- a framework to install
- a fixed workflow
- a claim that outcomes can be fully predicted

It does not replace judgment. It exists to support it.

---

## How This Repository Uses ODD

This repository applies ODD in two layers:

- **Public-facing** — this document and related writing explain the philosophy in human terms.
- **Canonical** — internal reference documents capture constraints, decision rules, evidence standards, and failure modes.

The Canon is designed for orientation, not enforcement.

---

## On Variance and Learning

In AI-assisted development, outcomes are not deterministic. The same intent can produce different results depending on execution paths.

This site reflects that reality. Ideas are tested, observed, and sometimes retried before conclusions are drawn. What you see here is not a straight line—it's a record of learning under uncertainty.

---

## Where to Go Next

If you want to explore further:

- Read the **extended ODD Manifesto** in `/odd/manifesto.md`
- See how rigor scales in **Project Maturity & Progressive Governance**
- Browse the **Canon Index** to understand how decisions and verification are structured

Or skip the theory and look at projects as they are added over time.

---

> ODD is about preserving intent without freezing execution.
> The measure of success is not how elegant the artifact is, but whether the outcome holds up in the real world.


---

## ODD Article Template

*Source: `odd/TEMPLATE.md`*


# ODD Article Template

> Template for universal principles that transcend any single implementation.

## Description

This template defines the standard structure for ODD articles. ODD contains universal principles—truths that would still be valid in 10 years, for any team, in any context. ODD is the most stable layer. Use this template when adding new principles or philosophy documents.

## Outline

- When to Add to ODD
- Frontmatter Fields
- Document Structure
- Example

---

## When to Add to ODD

Add to ODD when:

- The principle would still be true in 10 years
- The principle applies regardless of implementation
- The principle would survive if klappy.dev disappeared

Do NOT add to ODD when:

- It's program-specific → `/canon/`
- It's implementation-specific → `/docs/`
- It's lane-specific → `/products/<lane>/`

**Litmus test:** Would this still be true if klappy.dev didn't exist? → ODD ✓

---

## Frontmatter Fields

```yaml
---
uri: klappy://odd/<name>
title: "Title"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "philosophy", "topic"]
---
```

### ODD-Specific Values

| Field | Typical Value | Notes |
|-------|---------------|-------|
| `audience` | `canon` | ODD is canon-level content |
| `tier` | `1` | Core philosophical content |
| `voice` | `neutral` | Universal, not personal |
| `stability` | `stable` | ODD almost never changes |

---

## Document Structure

```markdown
---
uri: klappy://odd/<name>
title: "Title"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "philosophy"]
---

# Title

> One-line universal principle.

## Description

1-2 paragraph compressed overview. What is this principle?
Why is it universal? How does it shape thinking?

## Outline

- Section 1
- Section 2
- Section 3

---

## Content

[Full philosophical content...]

---

## See Also

- [Related ODD](/odd/appendices/related.md)
- [ODD Manifesto](/odd/manifesto.md)
```

---

## Example

```markdown
---
uri: klappy://odd/example-principle
title: "Example Principle"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: stable
tags: ["odd", "philosophy", "example"]
---

# Example Principle

> Durable thinking is scarce; generated artifacts are abundant.

## Description

This principle recognizes that human cognitive bandwidth is limited
while machine output is cheap. Systems should optimize for preserving
valuable thinking, not for preserving generated artifacts.

## Outline

- The Scarcity
- The Abundance
- The Implication

---

## Content

### The Scarcity

[Why durable thinking is rare...]

### The Abundance

[Why generated artifacts are cheap...]

### The Implication

[What this means for system design...]
```

---

## See Also

- [ODD Index](/odd/README.md)
- [ODD Manifesto](/odd/manifesto.md)
- [Three-Tier Hierarchy](/odd/decisions/D0001-three-tier-conceptual-hierarchy.md)


---

## 📖 ODD Terminology & Disambiguation

*Source: `odd/terminology.md`*


# 📖 ODD Terminology & Disambiguation

This document defines the constrained vocabulary of Outcomes-Driven Development. It governs how language is used **before** elevation to Canon — ensuring precision at the point of origin, not retroactive clarification.

---

## Why This Exists

Language drifts. Terms get overloaded. Meanings blur under repetition.

In ODD, ambiguous language creates:
- misaligned expectations
- false confidence in shared understanding
- governance that sounds rigorous but isn't

This document exists to:
- **constrain vocabulary** — fewer terms, tighter meanings
- **disambiguate collisions** — clarify where everyday usage differs from ODD usage
- **establish boundaries** — define what terms do NOT mean

---

## Namespace Ontology

### ODD vs Canon

| Namespace | Role | Contains |
|-----------|------|----------|
| `odd/` | Discipline, operating system, rules of motion | How thinking and work happen |
| `canon/` | Elevated truths distilled from experience | What survived that process |

**Key relationships:**
- ODD feeds Canon, but does not live inside it
- Canon may reference ODD
- ODD is not canon, and not subordinate to it
- Language governance (this document) belongs to ODD — it constrains canon formation

**Why this matters:**
If terminology lived under `canon/`, language would appear post hoc. ODD would look like a justification layer. By keeping it under `odd/`, we're saying: "This discipline governs how meaning is formed — before truth is elevated."

---

## Core Terms

### Outcome

**ODD meaning:** A verifiable state of reality that can be demonstrated, not just described.

**Not:** A deliverable, artifact, feature, or checkbox.

**Test:** Can you show it working? If explanation is required to prove it exists, it's not an outcome yet.

---

### Evidence

**ODD meaning:** Observable proof that an outcome occurred. Must be reproducible or recorded.

**Not:** Explanation, confidence, or expert assertion.

**Test:** Could a skeptic verify this independently?

---

### Artifact

**ODD meaning:** A byproduct of work — code, documents, diagrams. Ephemeral by default.

**Not:** The goal. Not proof of value.

**Test:** If this disappeared, would the outcome still be demonstrable?

---

### Elevation

**ODD meaning:** The deliberate act of promoting a verified truth from working memory to Canon.

**Not:** Filing, archiving, or organizing.

**Requirements:**
- Evidence exists
- The insight has survived stress
- The statement is stable enough to govern future decisions

---

### Canon

**ODD meaning:** The curated body of truths that have earned permanence through verification and survival.

**Not:** A knowledge base, wiki, or documentation dump.

**Test:** Does this statement constrain future decisions? If not, it's reference material, not canon.

---

### Attempt

**ODD meaning:** A bounded execution against a defined goal. Has a start, an end, and produces evidence.

**Not:** A try, experiment, or vague effort.

**Requirements:**
- Explicit goal
- Bounded scope
- Evidence captured (success or failure)

---

### Lane

**ODD meaning:** A parallel track of work with its own lifecycle, evidence, and maturity state.

**Not:** A branch, feature, or workstream in the general sense.

**Key property:** Lanes can evolve independently while sharing governance.

---

### Maturity

**ODD meaning:** The phase of a project that determines appropriate rigor level.

**Phases:**
- **PoC (Proof of Concept)** — Learning, speed, disposable artifacts
- **Pilot** — Proof, repeatability, early governance
- **Production** — Trust, durability, handoff readiness

**Not:** Quality, completeness, or age.

---

## Disambiguation Table

| Common Term | ODD Meaning | Common Misuse |
|-------------|-------------|---------------|
| "Done" | Evidence exists proving outcome | Code merged, ticket closed |
| "Works" | Verified under realistic conditions | Passed tests, "looks right" |
| "Documented" | Captured for future governance | Written down somewhere |
| "Tested" | Stress-tested against failure modes | Happy path confirmed |
| "Shipped" | Outcome delivered and verifiable | Artifact deployed |

---

## Anti-Patterns in Language

### Confidence as Evidence
"I'm confident this works" is not evidence. Confidence is a feeling. Evidence is observable.

### Explanation as Proof
"Let me explain why this is correct" is not proof. Explanations can be fluent and wrong. Demonstrations are harder to fake.

### Activity as Progress
"I worked on this for hours" is not progress. Time spent is input. Outcomes are output.

### Artifact as Outcome
"The code is written" is not an outcome. Code is an artifact. The outcome is what the code enables when verified.

---

## Boundary Conditions

### What This Document Does NOT Define

- **Domain-specific terms** — Each product/project may extend vocabulary within its scope
- **Implementation details** — How tools or systems work internally
- **Opinions** — This is constraint, not preference

### When to Extend

New terms may be proposed when:
- Existing vocabulary cannot express a necessary distinction
- The term has been used consistently across multiple attempts
- Ambiguity has caused actual confusion or failure

Extensions follow the same elevation process as any canon candidate.

---

## Usage Guidelines

### For Authors

- Use terms as defined here, not as commonly understood
- When a term might be ambiguous, link back to this document
- If you need a word not defined here, check if an existing term suffices first

### For Reviewers

- Flag terminology drift — when ODD terms are used with non-ODD meanings
- Distinguish between "this word is wrong" and "this concept needs a new word"

### For Canon Documents

- Canon documents should link here when term precision matters
- Do not duplicate definitions — reference, don't repeat

---

## Evolution Process

This document evolves through:

1. **Observation** — A term collision or ambiguity causes friction
2. **Proposal** — A clarification or new term is suggested
3. **Stress test** — The proposal is used in practice
4. **Elevation** — If it survives, it enters this document

Changes require evidence of the problem being solved.

---

> Language is not neutral. The words we use shape what we can think.
> ODD constrains vocabulary not to limit expression, but to increase precision where it matters.


---

## Adding a Project

*Source: `projects/ADDING-A-PROJECT.md`*


# How to Add a Project

This repository treats projects as **evidence**, not outputs.

Projects are added only when an idea has reached a point where it is useful to share—either because it demonstrates a constraint, validates a tradeoff, or falsifies an assumption.

This document explains _when_ to add a project and provides a lightweight template to keep projects consistent without ceremony.

---

## When to Add a Project

A project is ready to be added when:

- the intent can be stated clearly in a few sentences
- the constraints shaping the work are understood
- at least one meaningful outcome can be demonstrated
- the project teaches something that isn’t already obvious from the Canon alone

Projects do **not** need to be complete, polished, or production-ready.
They do need to be honest.

---

## What a Project Is (and Is Not)

A project **is**:

- a proof of concept
- an experiment with clear boundaries
- a reference implementation

A project **is not**:

- a roadmap
- a client deliverable
- a long-term supported product

---

## Project Structure

Each project lives in its own folder under `/projects/` and must include a `README.md`.

Optional supporting files (code, diagrams, screenshots) may be included as needed.

Example:

```text
/projects/example-project/
  README.md
  src/
  screenshots/
```

---

## Project README Template

Use the following template for each project’s `README.md`.
Sections may be omitted if they are not relevant, but the order should be preserved.

```md
# Project Name

## Intent

What this project is trying to prove, explore, or demonstrate.

## Context

Why this project exists and what prompted it.

## Constraints

Key constraints that shaped the design (technical, environmental, human, etc.).

## Approach

High-level description of how the problem was approached.
Avoid step-by-step instructions.

## Tradeoffs

Important decisions made and what was intentionally _not_ optimized.

## Evidence

What can be shown to demonstrate outcomes:

- screenshots
- recordings
- working demos
- observable behavior

## What This Proves

What can reasonably be concluded from this project.

## What This Does Not Prove

Explicit limits of what should _not_ be inferred.

## Status

Exploratory | Validated | Abandoned | Superseded
```

---

## Evidence Expectations

Evidence should be:

- observable
- reproducible in principle
- proportional to the project’s maturity

Explanations alone are insufficient.

---

## Naming & Scope Guidance

- Prefer descriptive names over clever ones
- Keep projects small and focused
- One core idea per project

If a project grows beyond its original intent, consider splitting it.

---

## Updating or Retiring Projects

Projects may be:

- updated as understanding improves
- explicitly marked as abandoned
- superseded by newer work

Retired projects are still valuable as evidence of learning.

---

## Final Note

Projects exist to ground ideas in reality.

If a project doesn’t change how you think, it probably doesn’t belong here.


---

## Agentic Memory Portability

*Source: `projects/agentic-memory-portability.md`*


# Agentic Memory Portability

## Goal

Turn klappy.dev into a reusable system that can carry intent forward across:
- sessions,
- collaborators,
- and AI agents,

without requiring the author (or any agent) to reread the entire corpus or rebuild the same mental models from scratch.

This is not "automation."
It is **evolutionary portability**: preserve learning, verify outcomes, discard residue, and elevate only what keeps working.

## What This Is Testing

This project tests whether ODD can be operationalized as a portable cognitive system:

1. **Ingest** canon + docs + articles as a queryable corpus
2. **Navigate** humans to the right references progressively (not "dump everything")
3. **Guide** agents to run ODD-like attempts without reinventing the workflow per project
4. **Elevate** recurring patterns into contracts/canon/decisions
5. **Prove** that reasoning transfers across new projects without re-explaining the worldview

## Non-Goals

- Building a perfect chatbot
- Turning Canon into a rigid framework
- Replacing human judgment
- Preserving every artifact

## Success Signals

- A human can ask a question and get a correct answer with citations and links, without reading the whole site.
- An agent can start a brand-new project using the ODD workflow with minimal bootstrapping.
- Drift decreases over time because contradictions are detected and resolved via decisions/contracts.
- The system improves by elevating only patterns that survive repeated attempts.

## Where This Fits

- Memory model: `/odd/appendices/progressive-elevation.md`
- Multi-lane intent isolation: `/docs/appendices/product-lanes.md`
- Comparability boundaries: `/docs/appendices/epochs.md`
- Decisions: `/docs/decisions/`


---

## Projects Index

*Source: `projects/index.md`*


# 📁 Projects

This folder contains proofs of concept, experiments, and working artifacts built using the principles described in the [Canon](/canon/index.md).

---

## What belongs here

- Small, focused projects that test specific ideas
- Experiments with AI-assisted development workflows
- Reference implementations that demonstrate constraints and tradeoffs

---

## What doesn't belong here

- Production systems
- Client work
- Anything that requires external dependencies to understand

---

## Current projects

- **repo-as-a-system** — treating the repository itself as an outcomes-driven system

Projects will be added as they reach a point worth sharing.  
Each project will include its own README with context, constraints, tradeoffs, and evidence of completion.

---

## Status

This folder intentionally starts small.  
The Canon comes first. Projects follow.

Projects may represent different attempts at the same idea. Multiple outcomes are sometimes necessary to understand whether an idea or its execution needs to change.


---

## Build Prompt — Phase 1

*Source: `projects/repo-as-a-system/BUILD_PROMPT_PHASE1.md`*


# Build Prompt (Phase 1)

This document captures the kickoff prompt used to initialize AI-assisted development for Phase 1 of this project.

It is provided for transparency, reproducibility, and historical context.

It is not a workflow, enforcement mechanism, or guarantee of outcomes.

---

You are an implementation agent building Phase 1 (Conversational UI) of klappy.dev.

Primary objective (Phase 1 only):
Build a static webapp/SPA that renders local Markdown documents and supports LLM-guided navigation via a small set of UI action primitives. The UI should feel like a familiar AI chat page, but the assistant must keep responses short and prefer navigation actions over long explanations.

Non-negotiable platform constraint:
Target deployment is Cloudflare Pages + (optional) Cloudflare Workers.
Phase 1 MUST be deployable as a static SPA to Cloudflare Pages.
Assume Workers runtime later (no Node-only server APIs). Avoid SSR for v0.

Repository inputs you must use:

- /public/content/manifest.json (generated inventory of content; compiled from per-file frontmatter)
- Markdown content under /canon, /odd, /about, /projects (do not invent content)
- The PRD at /docs/PRD.md (behavior contract + scope)
  Important: Canon documents are orientation, not executable workflow. Do not encode agent loops in the app.

Phase 1 deliverable:
A working SPA that:

1. Loads the manifest.json and uses it to list/locate documents
2. Renders selected Markdown in a main reading pane (with stable heading anchors)
3. Provides a chat panel (familiar layout) that accepts user questions
4. Supports UI action primitives by consuming structured “actions” (JSON) and executing them deterministically:
   - open(page_or_uri)
   - scroll_to(section_id)
   - highlight(section_id)
   - expand(section_id) / collapse(section_id) (can be minimal for now)
   - preview(item_id)
   - show_related(items[])
   - pin(item_id)
   - ask_followup(question)
   - suggest_questions(questions[])
5. Keeps assistant text responses short (1–3 sentences) and relies on UI actions to orient the user
6. Works without any backend (Phase 1: no real LLM calls required)

LLM integration requirement (Phase 1):

- Implement a “provider adapter” interface but ship with a MOCK provider by default.
- The mock provider can return:
  a) short responses
  b) a set of UI actions to demonstrate navigation
- Do NOT implement real model calls yet unless it can be done safely without secrets in the browser.
- If you include real LLM support, it must be optional and use a Worker proxy (Phase 1.5), not direct browser secrets.

UX constraints:

- Chat-first layout (left/right or split-pane) that feels familiar.
- Don’t over-explain what is already visible on screen.
- When taking an action, the assistant should optionally include 1 short sentence like:
  “Jumping you to the section that answers that.”

Tech guidance (for v0):

- Prefer Vite + React (static build). No SSR.
- Keep dependencies minimal (KISS).
- Use a simple Markdown renderer with heading IDs.
- Implement highlight via DOM scroll + CSS class toggling.
- Prefer deterministic, explicit state.

Definition of Done (Phase 1):

- Running locally: “npm install && npm run dev” starts the app
- The app shows:
  - a sidebar or list derived from manifest resources (at least entrypoints)
  - a reading pane that renders markdown from selected resource
  - a chat pane that can trigger UI actions (open/scroll/highlight)
- Provide evidence:
  1. Diff summary of what changed
  2. Commands run
  3. Visual proof: screenshots or a short screen recording showing:
     - opening a document
     - scrolling/highlighting a section via an action
     - assistant giving a short response while the UI does the work

What NOT to build yet:

- No MCP server
- No voice/hands-free
- No authentication
- No personalization
- No self-audit automation enforcement in-app
- No “autonomous loops” inside the product

Execution plan you should follow:

1. Propose a minimal folder structure and core components
2. Implement manifest loading + routing to resources
3. Implement markdown rendering + anchors
4. Implement chat UI + action interpreter
5. Implement mock provider that outputs actions + short text
6. Provide evidence artifacts (screenshots/recording) and a brief completion report

Now begin by:

- listing the minimal architecture (components + key data structures),
- then implementing the app incrementally with frequent local verification.

---

## Notes

This prompt reflects the state of the Canon and PRD at the time it was written.
Future phases may require different constraints or context.


---

## Repo-as-a-System

*Source: `projects/repo-as-a-system/README.md`*


# 🧪 This Repository as a System

## Intent

Demonstrate that a software repository can function as a coherent system of intent, constraints, and evidence _before_ it contains traditional code artifacts.

This project exists to test whether structure, clarity, and verification can precede implementation without becoming abstract or performative.

---

## Context

Many technical repositories lead with code and retroactively explain intent.

This repository inverts that pattern:

- philosophy first
- constraints second
- artifacts last

The goal is to explore whether this inversion improves clarity, reduces rework, and makes AI-assisted development more predictable.

---

## Constraints

- No production code required
- Public-by-default
- Orientation documents must not prescribe workflows
- All structure must remain understandable without automation
- AI tooling is assumed but not required

---

## Approach

The repository was constructed in layers:

1. **Orientation** — README, About pages, and public ODD articulation
2. **Canon** — constraints, decision rules, evidence policies, and maturity framing
3. **Inventory** — a manifest describing what exists without encoding behavior
4. **Evidence discipline** — explicit definitions of what counts as “done” and “proven”

Each layer was added only when the previous one was coherent.

---

## Tradeoffs

- Delayed visible progress in exchange for long-term coherence
- Higher upfront thinking cost
- Fewer early artifacts to point to

These tradeoffs were intentional.

---

## Evidence

- A navigable repository structure with clear entry points
- Consistent tone and framing across documents
- A manifest that inventories content without enforcing behavior
- A changelog that records evolution without per-file versioning

The system can be understood end-to-end without executing any code.

---

## What This Proves

- A repository can encode intent and constraints explicitly
- Canonical thinking can be separated from execution
- AI-facing structure does not require heavy automation
- Public work can be disciplined without being rigid

---

## What This Does Not Prove

- That this approach improves delivery speed
- That all teams benefit from this level of upfront structure
- That outcomes will always be better

Those claims require future projects and comparison.

---

## Status

**Phase 1 Complete** — Conversational UI SPA built and verified.

---

## Phases

### Phase 1 — Conversational UI (Complete)

Built a static Vite + React SPA that:
- Loads the manifest and renders documents
- Provides a chat panel with mock LLM provider
- Executes UI action primitives (`open`, `scroll_to`, `highlight`, `suggest_questions`)
- Deployable to Cloudflare Pages

See [BUILD_PROMPT_PHASE1.md](BUILD_PROMPT_PHASE1.md) for the kickoff prompt.

### Phase 2 — Evidence & Self-Audit (Planned)

### Phase 3 — MCP Export (Planned)


---
