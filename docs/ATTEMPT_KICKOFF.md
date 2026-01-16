# Attempt Kickoff

## Two-Phase Model

**Phase A (during build):** Each agent gets a unique `run_id` - no collisions, no coordination.

**Phase B (after completion):** One command assigns sequential attempt numbers.

---

## Workflow

1. Update `/docs/PRD.md`, commit to main
2. (Optional) Create worktrees: `npm run attempt:spawn -- --prd v0.2 --n 5`
3. Each agent runs in their worktree:
   ```bash
   npm run attempt:register -- --prd v0.2 --agent agent-1
   ```
4. Each agent builds and writes artifacts to their `runs_dir` (shown in output)
5. After all agents finish, run on main:
   ```bash
   npm run attempt:finalize -- --prd v0.2
   ```
6. Merge artifact folders to main (all attempts)
7. Pick champion, promote:
   ```bash
   npm run attempt:promote -- --prd v0.2 --attempt 001
   ```
8. Delete `.worktrees/` whenever you want

---

## Key Principle

- **During build:** Agents write to `attempts/prd-v0.2/_runs/<run_id>/`
- **After finalize:** Folders become `attempts/prd-v0.2/attempt-001/`, `attempt-002/`, etc.
- **Never write to `attempt-00N` paths during build** - only `_runs/<run_id>`

---

## Agent Identity

After running `attempt:register`, each worktree has `.attempt.json`:

```json
{
  "prd": "v0.2",
  "run_id": "a1b2c3d4",
  "agent": "agent-1",
  "branch": "attempt/prd-v0.2/wt01",
  "runs_dir": "attempts/prd-v0.2/_runs/a1b2c3d4"
}
```

Agents read `runs_dir` to know where to write artifacts. No guessing.

---

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
