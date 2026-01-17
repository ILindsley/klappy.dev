# 📜 Canon Changelog

This changelog tracks changes to the **Canon pack** as a whole.

The Canon uses **pack-level versioning** (one version number) rather than per-file versioning.
Per-file versions are intentionally omitted to reduce ceremony and prevent metadata rot.

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
- Canon manifest inventory (`/canon/meta/manifest.json`) with stable URIs.

### Notes

- The manifest is inventory-only: it declares what exists and how it may be addressed.
- Any future workflow semantics belong in clients or tools, not in this pack.
