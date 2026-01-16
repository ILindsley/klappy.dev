# Attempt Workflow

## Start

In Cursor, start a multi-agent run from this repository.

Each agent already has its own isolated workspace.

## Lifecycle

1. Update `/docs/PRD.md`, commit to main
2. Each agent runs `npm run attempt:register -- --prd v0.2`
3. Agents build independently, writing only to their `runs_dir`
4. Run `npm run attempt:finalize -- --prd v0.2`
5. Promote winner: `npm run attempt:promote -- --prd v0.2 --attempt 001`

---

## Reference

**During build:** Write only to `attempts/prd-v0.2/_runs/<run_id>/`

**Agent identity:** Read `.attempt.json` for `runs_dir` path.

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
