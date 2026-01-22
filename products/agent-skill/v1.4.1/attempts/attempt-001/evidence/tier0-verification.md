# Tier 0 Exclusion Verification

## Summary

The v1.4.1 tier-aware compiler correctly excludes Tier 0 files from all packs.

## Evidence

### prd-guide Pack (Curated Mode)

| Tier 0 File | Status | Reason |
|-------------|--------|--------|
| `odd/README.md` | EXCLUDED | tier0 |

```
| odd/README.md | 0 | curated | excluded | false | tier0 | - |
```

### default-odd-context Pack (Discovery Mode)

| Tier 0 File | Status | Reason |
|-------------|--------|--------|
| `odd/README.md` | EXCLUDED | tier0 |
| `projects/index.md` | EXCLUDED | tier0 |

```
| odd/README.md | 0 | discovered | excluded | false | tier0 | - |
| projects/index.md | 0 | discovered | excluded | false | tier0 | - |
```

## Acceptance Criteria

### AC-1: Tier 0 Never Included

```
Given a Tier 0 doc exists (e.g., odd/README.md with tier: 0)
When any pack is compiled
Then Tier 0 docs are excluded
And appear as excluded in --plan output with reason: tier0
```

**PASSED**

- `odd/README.md` has `tier: 0` in frontmatter
- Compiler excludes it from prd-guide pack
- Compiler excludes it from default-odd-context pack
- Plan output shows `reason: tier0` for all excluded files

## Verification Method

1. Ran `npm run lane:compile -- --lane agent-skill --pack prd-guide --plan`
2. Confirmed `odd/README.md` appears as `excluded | false | tier0`
3. Ran `npm run lane:compile -- --lane agent-skill --pack default-odd-context --plan`
4. Confirmed both `odd/README.md` and `projects/index.md` appear as `excluded | false | tier0`
5. Verified compiled output does not contain Tier 0 content
