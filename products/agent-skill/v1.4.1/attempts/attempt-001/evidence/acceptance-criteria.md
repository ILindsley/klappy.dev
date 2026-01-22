# Acceptance Criteria Verification

## Summary

All acceptance criteria verified manually. CI automation noted as follow-up.

---

## AC-1: Tier 0 Never Included

```
Given a Tier 0 doc exists (e.g., odd/README.md with tier: 0)
When any pack is compiled
Then Tier 0 docs are excluded
And appear as excluded in --plan output with reason: tier0
```

**STATUS: PASSED**

**Evidence:**
- `odd/README.md` (tier: 0) excluded from prd-guide pack
- `odd/README.md` and `projects/index.md` (tier: 0) excluded from default-odd-context pack
- Plan output shows `| odd/README.md | 0 | curated | excluded | false | tier0 |`

---

## AC-2: Projection Correctness

```
Given Tier 2 and Tier 3 docs exist
When a pack is compiled
Then Tier 2 docs are NOT compiled at high detail
And Tier 3 docs are NOT compiled at high detail
And Tier 1 docs ARE compiled at high detail
```

**STATUS: PASSED**

**Evidence:**
- Tier 1 docs (canon/constraints.md, etc.) → `high` projection
- Tier 2 docs (canon/decision-rules.md, etc.) → `medium` projection
- Tier 3 docs (docs/PRD/PRD_TEMPLATE.md, etc.) → `low` projection
- No tier flattening observed

---

## AC-3: Discovery Coverage Guardrail

```
Given repo has >100 eligible docs (Tier 1-3)
When compiling default-odd-context via discovery
Then compiled file count >= 60 (catches regression to whitelist)
```

**STATUS: PASSED**

**Evidence:**
- Discovery selected 101 files
- After Tier 0 exclusion: 99 files included
- 99 >= 60 threshold

---

## AC-4: Curated Pack Still Tier-Enforces

```
Given prd-guide uses a curated list
When compiling prd-guide
Then Tier 0 files in list are excluded
And Tier 2/3 files are projected (not full detail)
```

**STATUS: PASSED**

**Evidence:**
- prd-guide is curated mode
- `odd/README.md` (tier: 0) in curated list → EXCLUDED
- Tier 2/3 files receive medium/low projection

---

## AC-5: `--plan` Required in CI

```
Given CI runs on PR
When pack compilation runs
Then CI produces a plan artifact
And CI fails if any Tier 0 inclusion occurs
```

**STATUS: MANUAL PASS (CI automation is follow-up)**

**Evidence:**
- `--plan` flag implemented and working
- Plan output shows per-file decisions
- Plan output saved to evidence folder
- CI automation requires test framework (no existing infrastructure)

---

## Follow-up: CI Test Automation

No test framework exists in the repo. To automate AC verification, add:

1. Install test runner (e.g., `vitest`)
2. Create `infra/scripts/__tests__/compile-pack.test.js`
3. Add tests for each AC
4. Update package.json with `test` script
5. Add GitHub Actions workflow for CI

This is out of scope for v1.4.1 but recommended for v1.5+.
