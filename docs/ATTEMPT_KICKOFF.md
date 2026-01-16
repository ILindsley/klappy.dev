# Attempt Kickoff

1. Update `/docs/PRD.md`, commit to main
2. Run: `npm run attempt:spawn -- --prd v0.2 --n 5 --worktree`
   - Prints mapping table: `attempt` → `branch` → `worktree_path` → `attempt_dir`
   - Creates `.attempt.json` in each worktree with the agent's identity
3. Assign each Cursor agent ONE row from that table (worktree + attempt_dir)
4. Each agent builds ONLY inside its assigned worktree
5. Each agent writes sealed artifacts ONLY to its assigned `attempt_dir` (e.g., `attempts/prd-v0.2/attempt-003/`)
6. Merge artifact folders to main (all attempts, even losers)
7. Pick champion branch
8. Promote champion: `npm run attempt:promote -- --prd v0.2 --attempt 003`
9. Delete `.worktrees/` whenever you want

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`

---

## Agent Identity

Each worktree contains `.attempt.json`:

```json
{
  "prd": "v0.2",
  "attempt": "003",
  "branch": "attempt/prd-v0.2/a003",
  "attempt_dir": "attempts/prd-v0.2/attempt-003"
}
```

Agents read this file to know where to write artifacts. No guessing.
