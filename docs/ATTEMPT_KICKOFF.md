# Attempt Workflow

## Start

1. Open this repo in Cursor
2. Start a multi-agent session (Composer → Background Agents, or however you do it)
3. Paste `/docs/PROMPT_ATTEMPT_KICKOFF.txt` into each agent and run it

That's it. The prompt tells agents what to do.

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
