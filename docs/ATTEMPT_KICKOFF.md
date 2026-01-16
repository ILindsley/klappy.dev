# Attempt Kickoff

## Human Steps (only these)

1. **Freeze PRD**: Update `/docs/PRD.md`, commit to main. No PRD edits until attempts seal.

2. **Start attempt(s)**:
   ```bash
   # Single attempt
   npm run attempt:start -- --prd v0.2

   # Parallel attempts (quantum mode)
   npm run attempt:spawn -- --prd v0.2 --n 4
   ```

3. **Paste prompt**: Copy `/docs/PROMPT_ATTEMPT_KICKOFF.txt` verbatim into each agent.

4. **Choose champion** (after attempts complete):
   ```bash
   npm run attempt:promote -- --prd v0.2 --attempt 001
   ```

---

## What the CLI Does

The `attempt:start` command automates everything:
- Validates clean git state on main
- Reserves attempt number (commits registry to main)
- Creates attempt branch from that commit
- Resets `/src` to minimal shell
- Commits reset baseline
- Prints branch name + PRD snapshot SHA

The `attempt:spawn` command does this N times, optionally creating worktrees.

---

## Rules

- **PRD frozen**: No edits while attempts are in flight
- **No cross-pollination**: Don't share code/diffs between parallel attempts
- **Artifacts always merge**: Even failed attempts merge their attempt folder to main
- **Only champion's code ships**: Other attempts stay as sealed evidence

---

## Reference

| Command | Purpose |
| ------- | ------- |
| `npm run attempt:start -- --prd v0.2` | Start single attempt |
| `npm run attempt:spawn -- --prd v0.2 --n 4` | Spawn N parallel attempts |
| `npm run attempt:promote -- --prd v0.2 --attempt 001` | Promote champion to production |

Prompt file: `/docs/PROMPT_ATTEMPT_KICKOFF.txt`

Full procedure details: `/docs/ATTEMPTS.md`
