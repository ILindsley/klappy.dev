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
