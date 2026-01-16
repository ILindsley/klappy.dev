# Attempt Workflow

1. Update `/docs/PRD.md`, commit to main
2. Each agent runs `npm run attempt:register -- --prd v0.2`
3. Agents build independently, write to their `runs_dir`
4. Run `npm run attempt:finalize -- --prd v0.2`
5. Promote winner: `npm run attempt:promote -- --prd v0.2 --attempt 001`

---

## Reference

**During build:** Agents write only to `attempts/prd-v0.2/_runs/<run_id>/`

**After finalize:** Folders become `attempt-001/`, `attempt-002/`, etc.

**Agent identity:** Read `.attempt.json` for `runs_dir` path.

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
