# Promotion Notes for attempt-002

This document contains exact commands for human promotion of attempt-002's proposed changes.

---

## Pre-Promotion Verification

Before promoting, verify:

1. Review evidence in `attempt-002/evidence/`:
   - All acceptance criteria pass (see `acceptance-criteria.md`)
   - Tier 0 correctly excluded (see `tier-verification.md`)
   - No source writes outside sandbox (see `no-source-writes.md`)

2. Decide whether to:
   - Use attempt-002's proposed compiler (recommended for audit trail)
   - Keep attempt-001's already-deployed code (functionally identical)

---

## Copy Commands

### Option A: Use attempt-002's Proposed Code (Recommended)

```bash
# Compiler
cp products/agent-skill/v1.4.1/attempts/attempt-002/infra/scripts/compile-pack.js \
   infra/scripts/compile-pack.js

# Compile Plans
cp products/agent-skill/v1.4.1/attempts/attempt-002/src/prd-guide.json \
   infra/compile/plans/agent-skill/prd-guide.json

cp products/agent-skill/v1.4.1/attempts/attempt-002/src/default-odd-context.json \
   infra/compile/plans/agent-skill/default-odd-context.json
```

### Option B: Keep attempt-001's Already-Deployed Code

The code at `infra/scripts/compile-pack.js` is functionally identical to attempt-002's proposal. If you prefer to keep it:

```bash
# Just update the compile plans to point to attempt-002 INSTRUCTIONS
cp products/agent-skill/v1.4.1/attempts/attempt-002/src/prd-guide.json \
   infra/compile/plans/agent-skill/prd-guide.json
```

---

## Post-Promotion: Generate Production Packs

```bash
# From repo root
npm run lane:compile -- --lane agent-skill --pack prd-guide
npm run lane:compile -- --lane agent-skill --pack default-odd-context
```

This will write to:
- `public/agent-skill/v1.4.1/prd-guide-pack.md`
- `public/agent-skill/v1.4.1/default-odd-context-pack.md`

---

## Update Latest Pointer

```bash
# Copy v1.4.1 pack to latest
cp public/agent-skill/v1.4.1/prd-guide-pack.md \
   public/agent-skill/latest/prd-guide-pack.md

# Update latest/README.md to reference v1.4.1
# (Manual edit required - update version reference)
```

---

## Update Lane README

Edit `products/agent-skill/README.md`:

1. Change Current Champion to v1.4.1
2. Update v1.4.1 status from "Active (Closed)" to "Champion"
3. Add attempt-002 to history if desired

---

## Commit and Deploy

```bash
# Stage changes
git add -A

# Commit
git commit -m "Promote agent-skill v1.4.1 (attempt-002)

- Tier-aware pack compiler (FR-1 through FR-6)
- Discovery mode for default-odd-context pack
- Hard write fence for sandbox containment
- All acceptance criteria pass (AC-1 through AC-6)

Evidence: products/agent-skill/v1.4.1/attempts/attempt-002/evidence/"

# Push to main
git push origin main

# Deploy to production (fast-forward prod branch)
git checkout prod
git merge --ff-only origin/main
git push origin prod
git checkout main
```

---

## Verify Deployment

```bash
# Check preview URL
curl -I https://main.klappy-dev-agent-skill.pages.dev/v1.4.1/prd-guide-pack.md
# Expect: HTTP 200

# After prod deployment, check production URL
curl -I https://agent-skill.klappy.dev/v1.4.1/prd-guide-pack.md
# Expect: HTTP 200
```

---

## History Entry (Optional)

Add to `products/agent-skill/history/`:

```markdown
# H0011 — v1.4.1 Champion

- **Date**: 2026-01-22
- **Type**: Champion
- **PRD**: v1.4.1
- **Attempt**: `v1.4.1/attempts/attempt-002/`

## Summary

Tier-aware pack compiler implemented with hardened containment. Discovery mode enables automatic inclusion of ODD content at tier-appropriate projection levels.

## Deliverable

- **Pack**: `public/agent-skill/v1.4.1/prd-guide-pack.md`
- **Latest**: `public/agent-skill/latest/prd-guide-pack.md`
- **New Pack**: `public/agent-skill/v1.4.1/default-odd-context-pack.md`

## Learnings

- Hard write fence prevents containment violations
- Explicit `--plan-file` prevents accidental infra plan loading
- Determinism is about ordering, not byte-identical output (timestamp changes)
```

---

## Notes

1. **attempt-001 vs attempt-002**: Both contain functionally identical compiler code. attempt-001 failed due to containment violation (wrote outside sandbox), not code quality. attempt-002 fixes the process violation.

2. **Pre-existing Changes**: Git status shows changes from attempt-001. These can either be committed as part of promotion or reverted first.

3. **Sandbox Verification**: attempt-002 only wrote to `products/agent-skill/v1.4.1/attempts/attempt-002/`, respecting containment rules.
