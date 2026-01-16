# 🚀 Attempt Workflow

## ⚠️ Before Starting (Human)

1. Checkout `main`
2. Ensure repository is clean:
   - `git status` shows nothing to commit
3. Commit all changes that define the experiment:
   - PRD (`/docs/PRD.md`)
   - Contracts (`/infra/contracts/`)
   - Canon docs (if updated)
4. (Optional) Create worktrees if running parallel agents
5. (Optional) Run `npm run attempt:cleanup` to prune stale branches/worktrees

**Rule:**  
If it is not committed before Cursor starts, it does not exist.

---

## 🤖 During Attempt (Agent)

Each agent follows `/docs/PROMPT_ATTEMPT_KICKOFF.txt`.

### Required Sequence

1. **Register** (provenance first)
   ```bash
   npm run attempt:register -- --agent <id> --model <model>
   ```
   - Creates `.attempt.json` with run_id and provenance
   - Auto-reads PRD version from `/docs/PRD.md`
   - Example: `npm run attempt:register -- --agent cursor-a --model "opus-4.5"`

2. **Nuke**
   ```bash
   npm run attempt:nuke
   ```
   - Deletes `/src` and framework configs
   - Start from a blank slate
   - Choose any stack that satisfies the deploy contract

3. **Build**
   - Implement against `/docs/PRD.md` (active PRD)
   - Ensure `npm run build` produces `/dist`

4. **Push**
   ```bash
   git push
   ```
   - Triggers Cloudflare preview deploy automatically
   - Preview URL: `https://<branch>.klappy-dev.pages.dev`

5. **Evidence**
   
   Write to your `runs_dir` (path in `.attempt.json`):
   - `ATTEMPT.md` — what was built, self-audit
   - `EVIDENCE.md` — screenshot index
   - `evidence/` — screenshots proving app works

6. **Final Push** (optional helper)
   ```bash
   npm run attempt:submit
   ```
   - Commits and pushes evidence (if not already pushed manually)
   - This is a convenience wrapper, not a gate

**Agents may stop once evidence is complete and pushed.**

---

## ✅ After All Agents Finish (Human)

On `main` branch:

```bash
# 1. Import artifact folders from all attempt branches
npm run attempt:import -- --prd <active>
```

**Invariant:** This command **MUST NOT** merge application code (`/src`).  
Only sealed attempt artifacts (`_runs/` folders) are imported.

```bash
# 2. Finalize runs (assign attempt-001, 002…)
npm run attempt:finalize -- --prd <active>

# 3. Review evidence + preview URLs in each attempt folder

# 4. Promote winner to production
npm run attempt:promote -- --prd <active> --attempt 001
```

**Note:** `<active>` is the PRD version from `/docs/PRD.md` (e.g., `v0.3`).

---

## 🛠️ CLI Reference

| Command | Purpose |
|---------|---------|
| `npm run attempt:nuke` | Blank slate — delete `/src`, configs |
| `npm run attempt:register -- --agent <id> --model <model>` | Register run with provenance |
| `npm run attempt:submit` | Commit + push (triggers CF preview) |
| `npm run attempt:import -- --prd <v>` | Pull artifacts from branches to main |
| `npm run attempt:finalize -- --prd <v>` | Assign attempt numbers |
| `npm run attempt:promote -- --prd <v> --attempt <n>` | Merge champion → main → prod |
| `npm run attempt:cleanup` | Prune stale worktrees and branches |

---

## 📁 Artifact Locations

**During attempt:**
```
attempts/prd-<version>/_runs/<run_id>/
```

**After finalize:**
```
attempts/prd-<version>/attempt-001/
attempts/prd-<version>/attempt-002/
```

---

## 📜 Deploy Contract

See `/infra/contracts/build-output.md`

- Output must be `/dist/index.html`
- Must load `/public/content/manifest.json`
- Stack choice is unrestricted
- No client secrets

---

## 🔗 Cloudflare Previews

Any `git push` to an attempt branch creates a preview:

```
https://<branch-slug>.klappy-dev.pages.dev
```

Preview URLs are evidence artifacts, not permanent guarantees.

---

## 🔑 Key Mental Model

| Principle | Meaning |
|-----------|---------|
| Humans define the experiment | PRD, contracts, canon are committed before agents start |
| Agents execute in isolation | Each agent has its own worktree/branch |
| Git commits define reality | Uncommitted work doesn't exist |
| Cleanup is epistemic, not cosmetic | Dirty repos invalidate conclusions |
| Promotion is the only path to prod | Champions merge to main, then fast-forward to prod |

---

## 🔗 Related Documents

- Agent prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt`
- Attempt lifecycle (deep): `/docs/ATTEMPTS.md`
- Deploy contract: `/infra/contracts/build-output.md`
- Decision log: `/canon/odd/decisions/`
- Repo truth principle: `/canon/odd/appendices/repo-truth.md`
