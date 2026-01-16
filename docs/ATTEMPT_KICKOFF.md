# Attempt Kickoff

1. Update `/docs/PRD.md`, commit to main
2. Run: `npm run attempt:spawn -- --prd v0.2 --n 5 --worktree`
3. In Cursor multi-agent, assign each agent a worktree path from the output
4. Each agent builds only inside its worktree
5. Each agent writes sealed artifacts to `/attempts/prd-v0.2/attempt-00N/`
6. Merge artifact folders to main (all attempts, even losers)
7. Pick champion branch
8. Merge champion code to main: `npm run attempt:promote -- --prd v0.2 --attempt 001`
9. Delete `.worktrees/` whenever you want

**Prompt file:** `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
