# Canon Changelog

This changelog tracks changes to the **Canon pack** as a whole.

The Canon uses **pack-level versioning** (one version number) rather than per-file versioning.
Per-file versions are intentionally omitted to reduce ceremony and prevent metadata rot.

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
