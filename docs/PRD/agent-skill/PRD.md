# PRD: ODD Agent Skill

| Field           | Value            |
|-----------------|------------------|
| **PRD Version** | v1.0             |
| **Lane**        | agent-skill      |
| **Status**      | Active           |
| **Created**     | 2026-01-17       |
| **Author**      | Chris Klapp      |

---

## Interface Contracts

This lane MUST remain compatible with:

- manifest >=2.0.0 <3.0.0
- attempt-cli >=2.0.0 <3.0.0

This lane is allowed to have no UI and is not required to satisfy build-output unless it produces a deployable artifact.

---

## Objective

Create a reusable agent cognitive framework that enables AI systems to:

- Reason using ODD principles
- Structure PRDs
- Define outcomes and evidence
- Run evolutionary attempts
- Improve their own process over time

---

## Background

This is the whole point.

This PRD is about how agents think, not what they render.

This is not tied to this website.
This should work on any project.

Once this succeeds, any future PoC can start without rebuilding process.

---

## In Scope

- Markdown-based guidance for agent consumption
- Canon ingestion as thinking substrate
- Prompt / MCP / skill abstractions
- Self-questioning and failure detection
- Evolution of PRDs and metrics
- Transferable to other repositories

---

## Explicitly Out of Scope

- UI rendering (belongs to website lane)
- Website styling or navigation
- Human onboarding (belongs to website lane)
- Content authoring for humans
- Helping humans understand ODD (belongs to ai-navigation lane)

---

## Success Criteria

- [ ] Agent can start a new project from scratch using ODD
- [ ] Agent can propose a PRD given a problem statement
- [ ] Agent can define outcomes and evidence for that PRD
- [ ] Agent can detect failure and refine spec
- [ ] No dependency on this repo's UI

---

## Definition of Done

An attempt against this PRD is complete when:

- [ ] Agent successfully bootstraps ODD on a blank project
- [ ] PRD generation demonstrated with evidence
- [ ] Outcome definition demonstrated
- [ ] Failure detection demonstrated
- [ ] Works outside this repository (transferability proven)
- [ ] Self-audit completed with explicit tradeoffs

---

## Primary User

AI agents executing evolutionary development elsewhere.

---

## Constraints

This PRD is shaped by Canon constraints:

- Evidence over assertion
- Evolution, not automation (humans stay in the loop)
- Explicit tradeoffs required
- Bounded evolution (no self-modifying goals)

---

## Attempt Policy

This PRD may be attempted multiple times.

- Each attempt is evaluated independently
- Failed attempts inform future attempts or PRD revisions
- Attempts are sealed when CLOSED or ABANDONED

Attempts live at: `/attempts/agent-skill/prd-v1.0/attempt-NNN/`

---

## Related Documents

- Lane architecture: `/canon/odd/appendices/product-lanes.md`
- Canon constraints: `/canon/constraints.md`
- Definition of Done: `/canon/definition-of-done.md`
- Evolution philosophy: `/canon/odd/appendices/evolution-not-automation.md`
