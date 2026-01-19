---
uri: klappy://meta/changelog
title: "Canon Changelog"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: semi_stable
tags: ["meta", "changelog", "versioning"]
---

# 📜 Canon Changelog

This changelog tracks changes to the **Canon pack** as a whole.

The Canon uses **pack-level versioning** (one version number) rather than per-file versioning.
Per-file versions are intentionally omitted to reduce ceremony and prevent metadata rot.

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
- Attempts stored under `/attempts/<lane>/prd-vX.Y/attempt-NNN/`

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
