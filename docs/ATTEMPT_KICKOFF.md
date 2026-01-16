# Attempt Kickoff

This document describes the **human procedure** for starting a new attempt.

The verbatim agent prompt lives in `/docs/PROMPT_ATTEMPT_KICKOFF.txt`.

---

## Active PRD Policy

**`/docs/PRD.md` is the single active PRD file used for all attempts.**

- If versioned PRDs exist under `/docs/PRD/`, `/docs/PRD.md` must be updated to match the intended active version before reserving attempt numbers.
- The active PRD must not change while attempts are in flight.
- All parallel attempts share the same PRD snapshot at kickoff time.

---

## Core Rule: Artifacts Always Merge

**All attempts must merge attempt artifacts back to main, regardless of code outcome.**

- Failed attempts contribute learnings via their sealed artifact folder.
- Only the Champion's code merges to main.
- This ensures no learning is lost.

---

## Attempt Setup Checklist (Human)

Before starting a new attempt:

### 1. Review prior attempts

- Read `/attempts/**/ATTEMPT.md`
- Note failure modes and unresolved questions
- Do not reuse code or steer from prior attempts

### 2. Update the active PRD

- Ensure `/docs/PRD.md` reflects current intent
- PRD must stand alone (no "as before" assumptions)
- PRD must not change until all in-flight attempts are sealed

### 3. Reserve attempt number

```bash
npm run attempt:reserve -- --prd v0.2
```

**This command must be committed to main first** (or merged immediately) before any attempt branches are created. This prevents parallel collisions.

The script outputs your reserved attempt number and branch name.

### 4. Create attempt branch

```bash
git checkout -b attempt/prd-v0.2/a001
```

### 5. Reset /src for fresh start

```bash
npm run attempt:reset
```

This purges `/src/`, creates a minimal shell, and commits as your starting point.

**Safety boundaries:** `attempt:reset` may delete only `/src` (and `/app` if present). It must not touch `/infra`, `/public/content`, `/canon`, `/odd`, `/docs`, or `/attempts`.

### 6. Run the kickoff prompt

Copy/paste the prompt from `/docs/PROMPT_ATTEMPT_KICKOFF.txt` verbatim into your agent.

Do not edit the prompt. Do not paraphrase. Use it exactly as written.

---

## Parallel Attempts

When running multiple agents in parallel:

### Reserve all attempt numbers first (on main)

All reservations must land on main before any branches are created:

```bash
npm run attempt:reserve -- --prd v0.2 --agent agent-a
npm run attempt:reserve -- --prd v0.2 --agent agent-b
npm run attempt:reserve -- --prd v0.2 --agent agent-c
```

### Create branches from reserved numbers

```
attempt/prd-v0.2/a001
attempt/prd-v0.2/a002
attempt/prd-v0.2/a003
```

### Reset /src in each branch

```bash
npm run attempt:reset
```

### Run the same kickoff prompt verbatim in each branch

### Cross-pollination rules

- **Forbidden:** Copying diffs, code, or guidance between attempt branches
- **Allowed:** All branches share the same PRD snapshot (PRD must not change until attempts are sealed)

### Cloudflare Pages previews

- Branch deploy URLs may be ephemeral (disappear when branch deleted)
- Capture screenshots and record URLs in META.json regardless
- Treat preview URLs as evidence artifacts, not truth

---

## Sealing (After Attempt)

When the attempt is complete or abandoned:

### 1. Create the attempt folder

Write evidence into the canonical path:

```
attempts/prd-vX.Y/attempt-NNN/
  ATTEMPT.md      # closure record + status
  META.json       # commit SHA, preview URL, status
  EVIDENCE.md     # index of evidence files
  evidence/       # screenshots, logs, diffs
```

### 2. Handle PRD flaws (if discovered)

If the PRD was flawed, incomplete, or contradictory:

- Create a PRD patch proposal in the attempt folder: `PRD_PATCH.md`
- Do not change `/docs/PRD.md` during the attempt
- Do not "fix" the PRD implicitly in code

### 3. Merge artifacts to main (always)

Even if the attempt failed, merge the sealed artifact folder to main:

```bash
git checkout main
git merge attempt/prd-v0.2/a001 --no-ff -m "Seal attempt-001 artifacts"
```

This preserves learnings. PRD patches get reviewed and applied.

### 4. If this attempt wins (Champion promotion)

```bash
npm run attempt:promote -- --prd v0.2 --attempt 001
```

What the promotion script does:

- Merges champion branch into main
- Tags the attempt: `prd-v0.2-attempt-001`
- Tags production: `production-v0.2`
- Updates META.json with production URL + commit SHA
- Other attempts stay as sealed evidence (not merged)

---

## Tooling Reference

| Command                                               | Purpose                          |
| ----------------------------------------------------- | -------------------------------- |
| `npm run attempt:reserve -- --prd v0.2`               | Reserve next attempt number      |
| `npm run attempt:reset`                               | Purge /src, create minimal shell |
| `npm run attempt:promote -- --prd v0.2 --attempt 001` | Promote winner to production     |

---

## Related Documents

- `/docs/ATTEMPTS.md` — Full sealing procedure and META.json schema
- `/docs/PROMPT_ATTEMPT_KICKOFF.txt` — Verbatim agent prompt (do not edit)
- `/canon/odd/appendices/attempt-lifecycle.md` — Orientation model
