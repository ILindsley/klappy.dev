# 🚀 Attempt Workflow

## ⚠️ Before Starting (Human)

1. Ensure you're on `main` branch
2. Run `npm run attempt:reset` if /src needs nuking
3. Commit clean state: `git status` should show nothing to commit
4. Create worktrees for each agent (if using multi-agent)

**Rule: If it isn't committed before the Cursor run starts, it doesn't exist.**

---

## 🤖 During Attempt (Agent)

Each agent follows `/docs/PROMPT_ATTEMPT_KICKOFF.txt` which requires:

1. **Register**: `npm run attempt:register -- --prd v0.2`
2. **Nuke /src**: Start fresh (no inherited code)
3. **Build**: Implement until `npm run build` passes
4. **First Submit**: `npm run attempt:submit` (triggers Cloudflare preview)
5. **Evidence**: Write ATTEMPT.md, EVIDENCE.md, take screenshots
6. **Final Submit**: `npm run attempt:submit` (pushes evidence)

**Agent cannot stop until all 7 completion gates pass.**

---

## ✅ After All Agents Finish (Human)

On main branch:

```bash
# 1. Import artifacts from all attempt branches
npm run attempt:import -- --prd v0.2

# 2. Finalize (assigns attempt-001, attempt-002, etc.)
npm run attempt:finalize -- --prd v0.2

# 3. Review attempts and pick champion
# Check preview URLs in each attempt's META.json

# 4. Promote winner
npm run attempt:promote -- --prd v0.2 --attempt 001
```

---

## 🛠️ CLI Reference

| Command                                               | Purpose                                      |
| ----------------------------------------------------- | -------------------------------------------- |
| `npm run attempt:register -- --prd v0.2`              | Agent registers their run                    |
| `npm run attempt:submit`                              | Agent commits + pushes (triggers CF preview) |
| `npm run attempt:reset`                               | Nuke /src for fresh attempt                  |
| `npm run attempt:import -- --prd v0.2`                | Pull artifacts from branches to main         |
| `npm run attempt:finalize -- --prd v0.2`              | Assign attempt numbers                       |
| `npm run attempt:promote -- --prd v0.2 --attempt 001` | Merge champion to main                       |

---

## 📁 Artifact Locations

**During attempt:** `attempts/prd-v0.2/_runs/<run_id>/`

**After finalize:** `attempts/prd-v0.2/attempt-001/`, `attempt-002/`, etc.

---

## 📜 Deploy Contract

See `/infra/contracts/build-output.md`

- Output must go to `/dist`
- Must include `dist/index.html`
- Any stack is valid if it meets the contract

---

## 🔗 Cloudflare Preview URLs

After `attempt:submit`, branches deploy to:

`https://<branch-slug>.klappy-dev.pages.dev`

Example: `https://attempt-prd-v0-2-a001.klappy-dev.pages.dev`

Check Cloudflare Pages dashboard for exact URLs and build status.
