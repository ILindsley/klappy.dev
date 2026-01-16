# Attempt Kickoff

This file is the **single sanctioned operational kickoff prompt** for starting a new attempt.

Do not duplicate this text elsewhere.

---

## Attempt Setup Checklist (Human)

Before starting a new attempt:

1. **Review prior attempts**
   - Read `/attempts/**/ATTEMPT.md`
   - Note failure modes and unresolved questions
   - Do not reuse code or steer from prior attempts

2. **Update the active PRD**
   - Ensure `/docs/PRD.md` reflects current intent
   - PRD must stand alone (no "as before" assumptions)

3. **Reserve attempt number** (prevents collisions with parallel agents)
   ```bash
   npm run attempt:reserve -- --prd v0.2
   ```
   This updates `ATTEMPT_REGISTRY.json` on main and outputs your branch name.

4. **Create attempt branch**
   ```bash
   git checkout -b attempt/prd-v0.2/a001
   ```

5. **Reset /src for fresh start** (ensures independence)
   ```bash
   npm run attempt:reset
   ```
   This purges `/src/`, creates a minimal shell, and commits as your starting point.

6. **Decide attempt strategy**
   - Single attempt or parallel attempts (multiple agents)
   - Each in its own branch with its own reserved number
   - No cross-pollination during execution

Only after this do you run the prompt.

---

## Universal Attempt Kickoff Prompt (v2) — Verbatim

You are an implementation agent starting a NEW, INDEPENDENT ATTEMPT.

Context:

- This repository follows Outcomes-Driven Development (ODD).
- A PRD is a hypothesis. An attempt is an observation.
- Attempts must be independent; do not reuse or steer from prior attempts.
- `/src` has been reset to a minimal shell. You are starting fresh.

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

   - `/src` is a minimal shell. Build everything fresh.
   - Do not look for existing components to "fix" — create what the PRD requires.
   - Prefer clarity and evidence over cleverness.

5. Continuously verify your work locally.

   - Run builds: `npm run build`
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
- Do not assume prior UI patterns exist — they have been purged.

If you discover the PRD is flawed, incomplete, or contradictory:

- Stop.
- Report the issue clearly.
- Do not "fix" the PRD implicitly in code.

Begin by summarizing the PRD in your own words, then propose your plan.

---

## Parallel Attempts (Optional)

When running multiple agents in parallel:

1. **Reserve all attempt numbers first** (on main, before branching):
   ```bash
   npm run attempt:reserve -- --prd v0.2 --agent agent-a
   npm run attempt:reserve -- --prd v0.2 --agent agent-b
   npm run attempt:reserve -- --prd v0.2 --agent agent-c
   ```

2. **Create branches from the reserved numbers**:
   ```
   attempt/prd-v0.2/a001
   attempt/prd-v0.2/a002
   attempt/prd-v0.2/a003
   ```

3. **Reset /src in each branch** before starting:
   ```bash
   npm run attempt:reset
   ```

4. **Run the same kickoff prompt verbatim** in each branch

5. **Do not share** code, diffs, or guidance between attempts

6. **Cloudflare Pages** generates preview deploys per branch
   - Treat preview URLs as evidence, not truth

---

## Sealing (After Attempt)

When the attempt is complete or abandoned:

1. **Seal the attempt folder**
   - Create `attempts/prd-vX.Y/attempt-NNN/`
   - Add ATTEMPT.md, META.json, evidence/

2. **Merge artifacts to main** (always, even if attempt failed)
   - Artifacts merge preserves learnings
   - PRD patches get applied

3. **If this attempt wins** (Champion):
   ```bash
   npm run attempt:promote -- --prd v0.2 --attempt 001
   ```
   - Code merges to main
   - Production tags created
   - Other attempts stay as sealed evidence

See `/docs/ATTEMPTS.md` for full sealing procedure.

---

## Tooling Reference

| Command | Purpose |
|---------|---------|
| `npm run attempt:reserve -- --prd v0.2` | Reserve next attempt number |
| `npm run attempt:reset` | Purge /src, create minimal shell |
| `npm run attempt:promote -- --prd v0.2 --attempt 001` | Promote winner to production |
