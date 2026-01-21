# Agent-Skill — Attempt Kickoff

You are starting an attempt in the **agent-skill** lane.

---

## Step 1: Find Active Version

Check `README.md` — the Versions table shows which version is **Active**.

Note the active version (e.g., `v1.2.2`). This is your target.

---

## Step 2: Read Context

Read these files in order:

1. `README.md` — Lane overview, version table, current champion
2. `CONTRACT.md` — Structure deviations from canon
3. `history/index.md` — Champion history and learnings
4. `<active-version>/PRD.md` — The PRD you're executing

The PRD defines your task, deliverables, and definition of done.

---

## Step 3: Review Prior Art

Check the history folder and previous attempt folders for learnings:

- `history/` — What worked, what didn't
- Previous version attempts — Evidence and learnings

---

## Step 4: Create Attempt Folder

Create: `<active-version>/attempts/attempt-NNN/`

Where NNN is the next number (check existing folders).

Required files:

- `ATTEMPT.md` — Closure record
- `META.json` — Machine-readable metadata
- `evidence/` — Verification artifacts

---

## Step 5: Execute

Follow the PRD's Definition of Done exactly.

- Produce evidence for every claim
- No assertions without proof
- Document tradeoffs

---

## Critical Rules

1. **Lane Isolation**: Do NOT modify files outside `products/agent-skill/`
2. **Version Isolation**: Work within `<active-version>/` folder
3. **Attempt Containment**: All changes go in attempt folder until promotion
4. **Evidence Required**: No assertions without proof
5. **PRD Immutability**: If PRD has a problem, create a NEW version — don't bend rules

---

## When Complete

Update `ATTEMPT.md` with:

- Status: CHAMPION, CLOSED, or ABANDONED
- Outcome summary
- Evidence produced
- Self-audit results
- Learnings

If championed, add entry to `history/` folder.

---

## Production Release (If Championed)

**Merging to `main` is NOT production deployment.**

After PR is merged to `main`:

1. Fast-forward `prod` to `main`:
   ```bash
   git checkout prod && git merge --ff-only origin/main && git push origin prod
   ```

2. Verify HTTP 200 on production domain:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://agent-skill.klappy.dev/vX.Y/prd-guide-pack.md
   ```

3. Update lane README to mark version as Champion (not just Active)

See `CONTRACT.md` Deployment section and [D0001](/docs/decisions/D0001-prod-branch-is-production.md) for details.

---

## If PRD Seems Problematic

Don't bend rules to make it work.

1. Document the issue in `LEARNINGS.md`
2. Mark attempt as FAILED with clear explanation
3. Propose a new PRD version to address the issue
