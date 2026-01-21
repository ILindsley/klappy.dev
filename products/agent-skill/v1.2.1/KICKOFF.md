# Agent-Skill v1.2.1 — Attempt Kickoff

You are starting an attempt for **PRD v1.2.1** in the agent-skill lane.

---

## Before You Begin

Read these files in order:

1. `../README.md` — Lane overview, version table
2. `../CONTRACT.md` — Structure deviations from canon
3. `../history/` — Champion history and learnings
4. `PRD.md` — The PRD you're executing (this folder)

Also review:

- Previous champion: `../v1.1/attempts/attempt-001/ATTEMPT.md`
- Previous failure: `../v1.2/attempts/attempt-001/LEARNINGS.md`

---

## Your Task

Execute PRD v1.2.1: **Lane-owned Cloudflare Pages deployment** for zero-friction pack distribution.

Key deliverables:

- Cloudflare Pages project configured for agent-skill lane
- Versioned URLs serving pack from `v1.1/dist/`
- Public URL verified with HTTP 200

---

## Attempt Workflow

1. **Create attempt folder**: `v1.2.1/attempts/attempt-001/`
2. **Required files**:
   - `ATTEMPT.md` — Closure record
   - `META.json` — Machine-readable metadata
3. **Execute the PRD** — Follow definition of done exactly
4. **Produce evidence** — Place in `evidence/` subfolder
5. **Complete self-audit** — Document tradeoffs and risks

---

## Critical Rules

1. **Lane Isolation**: Do NOT modify files outside `products/agent-skill/`
2. **Version Isolation**: Work within `v1.2.1/` folder
3. **Attempt Containment**: All changes go in attempt folder until promotion
4. **Evidence Required**: No assertions without proof
5. **PRD Immutability**: If PRD has a problem, create a NEW version

---

## When Complete

Update `ATTEMPT.md` with:

- Status: CHAMPION, CLOSED, or ABANDONED
- Outcome summary
- Evidence produced
- Self-audit results
- Learnings

If championed, add entry to `../history/` folder.

---

## If PRD Seems Problematic

Don't bend rules to make it work.

1. Document the issue in `LEARNINGS.md`
2. Mark attempt as FAILED with clear explanation
3. Propose a new PRD version to address the issue
