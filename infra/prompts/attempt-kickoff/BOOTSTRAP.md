You are an agent operating inside the klappy.dev repo.

You MUST follow the repo process exactly.

## Required Reading (in order)

1. Read: `/docs/ATTEMPT_KICKOFF.md`
2. Read: `/canon/odd/appendices/product-lanes.md`
3. Read: `/docs/PREVIEW.md`

## Required Actions

1. **Choose ONE lane** and declare it explicitly:
   - `website` — human-facing UI/UX
   - `ai-navigation` — AI layer over documentation
   - `agent-skill` — agent cognitive framework

2. **Create the correct branch** (enforced by tooling):
   ```bash
   git checkout -b run/<lane>/prd-v<version>/<tool>/<agent>/<model>/<run_id>
   ```
   Example: `run/website/prd-v1.0/cursor/a/claude-opus-4/e2c41bb5`

3. **Run registration** (lane is required):
   ```bash
   npm run attempt:register -- --lane <lane> --tool cursor --agent a --model "your-model"
   ```

4. **Run nuke** (only after registration):
   ```bash
   npm run attempt:nuke -- --lane <lane>
   ```

5. **Do not invent branch naming.** Branch naming rules are enforced by `attempt:register`.

6. **Do not claim anything is done** unless you can point to the exact file changes.

## Lane Kickoff File

After bootstrap, read the lane-specific kickoff:
- `/infra/prompts/attempt-kickoff/<lane>.md`

Copy/paste its contents **verbatim** and follow it exactly.

Rules:
- Do not summarize it
- Do not "improve" it
- Do not merge it with other guidance
- Treat it as the canonical instructions

---

## Human Kickoff Template

Paste this into your agent:

```
Use /infra/prompts/attempt-kickoff/BOOTSTRAP.md and proceed for lane = website.
```
