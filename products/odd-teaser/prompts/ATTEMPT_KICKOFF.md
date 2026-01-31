# Odd Teaser Lane — Attempt Kickoff (Canonical)

You are building a **single-session epistemic experience** that helps users externalize artifacts and leave.

**Core constraint:** Klappy.dev must always be easier to leave than to continue.

---

## Oddkit Required (Non-Negotiable)

This lane MUST use oddkit for all policy and canon questions. Do not answer from memory.

### When to call `oddkit_orchestrate`

| Trigger | Action |
|---------|--------|
| Policy uncertainty ("is this allowed?", "what's the rule?") | `action: "librarian"` |
| Before implementing any feature | `action: "preflight"` with implementation plan |
| Before claiming done/fixed/complete | `action: "validate"` with artifact paths |
| Contradictions or low confidence | `action: "explain"` |
| Discoverability ("what's in ODD?", "list canon") | `action: "catalog"` |

**If you skip oddkit and state policy from memory, the attempt is INVALID.**

---

## Attempt Artifacts Location

All attempt artifacts MUST be written under:

```
/products/odd-teaser/attempts/
```

Structure:
```
/products/odd-teaser/attempts/prd-v1.0/
  _runs/
    <run_id>/
      META.json
      ATTEMPT.md
      EVIDENCE.md
      evidence/
  attempt-001/  (finalized)
  attempt-002/  (finalized)
```

---

## Non-Negotiables (Evidence-First)

This attempt is NOT complete unless all items below are true.

### Required outcome

1. The attempt branch is pushed to `origin` (Cloudflare must be able to build it).
2. Cloudflare Pages serves BOTH endpoints with HTTP 200:
   - `/` (the app)
   - `/_evidence/` (the evidence index)
3. Proof assets are present in the deployed build under `/_evidence/`:
   - At least 3 screenshots OR 1 recording (video).

### Lane-Specific Evidence

Because this lane is about artifact creation and exit, evidence MUST include:

- [ ] Screenshot/recording of artifact creation (Learning, Decision, OR Override)
- [ ] Screenshot/recording of artifact visibility (drawer shows artifact)
- [ ] Screenshot/recording of export flow (one-click, markdown output)
- [ ] Evidence that export is local-only (no server persistence)

### Forbidden

- DO NOT use `wrangler pages deploy` (or any wrangler deploy command). Ever.
- DO NOT claim "pending" completion. If the Cloudflare preview is not reachable, the attempt is FAILED.
- DO NOT add features that increase time-on-site without increasing artifact creation.
- DO NOT add authentication, identity persistence, or cross-session memory.
- DO NOT add navigation trees, menus, or documentation browsing.
- DO NOT teach ODD explicitly or answer questions about ODD.

### Evidence check (required)

After pushing, verify HTTP 200:
```bash
curl -I https://<preview>/
curl -I https://<preview>/_evidence/
```

If either is not 200, the attempt is not complete.

---

## Attempt Workflow

1. **Register** the attempt using the repo attempt CLI.
2. **Nuke** the odd-teaser lane work area.
3. **Preflight** with oddkit before implementing:
   ```
   oddkit_orchestrate action="preflight" message="<your implementation plan>"
   ```
4. **Implement** the PRD in `products/odd-teaser/src`.
5. **Build** using lane build:
   ```bash
   npm run build -- --lane odd-teaser
   ```
6. **Verify** artifact creation flow works (Learning, Decision, Override).
7. **Verify** export produces local Markdown.
8. **Ensure** deployed evidence exists at `/_evidence/`.
9. **Push** branch to origin.
10. **Confirm** Cloudflare preview URLs return HTTP 200.
11. **Validate** with oddkit before claiming done:
    ```
    oddkit_orchestrate action="validate" message="Attempt complete" 
    ```
12. **Write** final notes to the run evidence folder.

---

## Product Constraints (From PRD)

These constraints are non-negotiable. If your implementation violates any, the attempt is INVALID.

### The product must NOT:

- Authenticate users
- Persist identity
- Teach ODD explicitly
- Execute tasks
- Provide project management
- Optimize retention or engagement
- Become a documentation site
- Navigate users to canon/docs
- Answer questions about ODD

### The product MUST:

- Support artifact creation: Learnings, Decisions, Overrides
- Show artifacts immediately upon creation
- Provide one-click export (Markdown, local-only)
- Allow the system to stop interacting without error
- Fire telemetry events (ArtifactCreated, ArtifactExported, PrematureExit)
- Forbid telemetry of: raw text, prompts, responses, identity, IP, fingerprinting

### Decision rule:

> If someone asks "Should the product also...?" the default answer is **no**.
> 
> If the change is not clearly justified by artifact creation, reject it.

---

## Champion Promotion (REQUIRED)

After a champion is selected and recorded in `products/odd-teaser/LEDGER.md`:

1. A **Promotion PR** MUST be created.
2. The PR MUST:
   - Target `main`
   - Contain only:
     - The champion's `products/odd-teaser/src/**`
     - Any required config changes for production
   - Reference:
     - Champion commit SHA
     - Evidence URL
     - Ledger entry
3. No other PR may be merged to promote a champion.
4. Merging this PR is the moment the product enters production.

**If no Promotion PR exists, production has not occurred, even if previews exist.**

---

## Lifecycle Summary

```
Attempt → Evidence → Champion Selection → Promotion PR → Production
                                              ↑
                                    (This is the gate)
```

- Attempts are experiments.
- Champion selection is evaluation.
- Promotion is the explicit, human-approved action that makes code production.

These phases are distinct. None may be skipped.

---

## Critical Rules

1. **Lane Isolation**: Do NOT modify files outside `products/odd-teaser/`
2. **Oddkit Required**: Do NOT answer policy questions from memory
3. **Evidence Required**: No assertions without proof
4. **Constraint Primacy**: If feature violates PRD constraints, do not implement it
5. **Exit Optimization**: If feature increases time-on-site without increasing artifact creation, reject it

---

## Self-Audit Checklist

Before claiming completion, verify:

- [ ] Artifact creation works (all 3 types)
- [ ] Artifacts are immediately visible
- [ ] Export produces local Markdown
- [ ] No authentication or identity persistence
- [ ] No teaching ODD or answering ODD questions
- [ ] No navigation trees or documentation browsing
- [ ] Telemetry fires allowed events only
- [ ] Telemetry does not capture forbidden data
- [ ] Cloudflare preview returns HTTP 200
- [ ] Evidence folder contains required screenshots/recordings
- [ ] oddkit validate called before claiming done
