# Attempt Kickoff

This file is the **single sanctioned operational kickoff prompt** for starting a new attempt.

Do not duplicate this text elsewhere.

---

## Attempt Setup Checklist (Human)

Before starting a new attempt:

1. Review prior attempts
   - Read `/attempts/**/ATTEMPT.md`
   - Note failure modes and unresolved questions
   - Do not reuse code or steer from prior attempts
2. Update the active PRD
   - Ensure `/docs/PRD.md` reflects current intent
   - PRD must stand alone (no “as before” assumptions)
3. Decide attempt strategy
   - Single attempt or parallel attempts (multiple agents)
   - Each in its own branch
   - No cross-pollination during execution

Only after this do you run the prompt.

---

## Universal Attempt Kickoff Prompt (v1) — Verbatim

You are an implementation agent starting a NEW, INDEPENDENT ATTEMPT.

Context:

- This repository follows Outcomes-Driven Development (ODD).
- A PRD is a hypothesis. An attempt is an observation.
- Attempts must be independent; do not reuse or steer from prior attempts.

Your task:

1. Read the active PRD at:
   /docs/PRD.md

2. Read orientation documents to understand constraints and intent:

   - /canon/index.md
   - /canon/odd/manifesto.md
   - /canon/odd/appendices/attempt-lifecycle.md
   - /canon/odd/appendices/quantum-development.md
   - /canon/constraints.md
   - /canon/decision-rules.md
   - /canon/definition-of-done.md

3. Propose a concrete implementation plan for THIS attempt only.

   - Do not reference prior attempts.
   - Do not assume success or failure modes.
   - Make explicit tradeoffs.

4. Implement the plan from scratch.

   - You may discard or rewrite any existing code.
   - Prefer clarity and evidence over cleverness.

5. Continuously verify your work locally.

   - Run builds.
   - Test navigation, UX, and failure cases relevant to the PRD.

6. When you believe the attempt is complete, produce an evidence bundle:
   - Diff summary
   - Commands run
   - Screenshots (desktop + mobile if applicable)
   - Any preview deploy URL if required by the PRD

Constraints:

- Do not change the PRD during this attempt.
- Do not optimize for reuse across attempts.
- Do not claim completion without evidence.

If you discover the PRD is flawed, incomplete, or contradictory:

- Stop.
- Report the issue clearly.
- Do not “fix” the PRD implicitly in code.

Begin by summarizing the PRD in your own words, then propose your plan.

---

## Parallel Attempts (Optional)

When running multiple agents in parallel:

- Create one branch per attempt:

```
attempt/prd-v0.2/a001
attempt/prd-v0.2/a002
attempt/prd-v0.2/a003
```

- Run the same kickoff prompt verbatim in each branch
- Do not share code, diffs, or guidance between attempts
- Allow Cloudflare Pages to generate preview deploys per branch
- Treat preview URLs as evidence, not truth
