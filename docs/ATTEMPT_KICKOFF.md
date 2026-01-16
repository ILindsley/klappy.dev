# Attempt Kickoff

## Workflow

1. Each agent runs in their Cursor workspace:
   ```bash
   npm run attempt:register -- --prd v0.2 --agent agent-1
   ```

2. Each agent builds and writes artifacts to their `runs_dir` (shown in output)

3. After all agents finish, run on main:
   ```bash
   npm run attempt:finalize -- --prd v0.2
   ```

4. Pick champion, promote:
   ```bash
   npm run attempt:promote -- --prd v0.2 --attempt 001
   ```

---

## Key Rule

**During build:** Write only to `attempts/prd-v0.2/_runs/<run_id>/`

**Never** write to `attempt-00N` paths until finalize runs.

---

## Agent Identity

After `attempt:register`, each workspace has `.attempt.json`:

```json
{
  "prd": "v0.2",
  "run_id": "a1b2c3d4",
  "agent": "agent-1",
  "runs_dir": "attempts/prd-v0.2/_runs/a1b2c3d4"
}
```

Agents read `runs_dir` to know where to write artifacts.

---

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
