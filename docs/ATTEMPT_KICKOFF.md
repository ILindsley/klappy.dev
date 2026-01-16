# Attempt Workflow

## Baseline (Required)

Before starting attempts:

1. Ensure `main` has a clean `/src` (the starting point for all attempts)
2. Commit this state: `git status` should be clean
3. **If it isn't committed before the Cursor run starts, it doesn't exist**

---

## Start

1. Open this repo in Cursor (on main, at the baseline commit)
2. Start a multi-agent session
3. Paste `/docs/PROMPT_ATTEMPT_KICKOFF.txt` into each agent and run it

---

## After All Agents Finish

On main branch:

```bash
npm run attempt:finalize -- --prd v0.2
npm run attempt:promote -- --prd v0.2 --attempt 001
```

---

## Reference

**During build:** Agents write only to `attempts/prd-v0.2/_runs/<run_id>/`

**After finalize:** Folders become `attempt-001/`, `attempt-002/`, etc.

**Reset `/src` manually if needed:** `npm run attempt:reset`
