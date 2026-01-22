# Attempt 001 — v1.4.0 Tiered Context Construction

- **Date Started**: 2026-01-22
- **Date Completed**: 2026-01-22
- **PRD**: v1.4.0
- **Status**: PREVIEW_VERIFIED

---

## Objective

Implement tiered context construction guidance in INSTRUCTIONS.md per PRD v1.4.0.

---

## Summary

Successfully added "Default Context Construction" section to INSTRUCTIONS.md. The section teaches agents how to construct context using tier-weighted projection detail:

- Tier 1 → high detail (full content)
- Tier 2 → medium detail (structural)
- Tier 3 → low detail (minimal)

Includes agent responsibilities, prohibitions, and degradation handling.

---

## Changes Made

- [x] Created v1.4 folder structure
- [x] Generated INSTRUCTIONS.md with Default Context Construction section
- [x] Compiled prd-guide pack
- [x] Deployed to public/agent-skill/v1.4/
- [x] Updated latest/ pointer
- [x] Verified preview URL (HTTP 200)

---

## Evidence Produced

| File | Description |
|------|-------------|
| `evidence/compile-output.txt` | Compilation log showing successful build |
| `evidence/deployment-verification.md` | HTTP 200 verification on preview URLs |
| `evidence/hash-comparison.md` | Diff showing new INSTRUCTIONS.md content |
| `evidence/prd-guide-pack.md` | Copy of compiled pack (~19K tokens) |

---

## Self-Audit

### Intended Outcome
Add tier-weighted context construction guidance to the agent skill pack so agents know how to weight content based on document tiers.

**Result**: Achieved. The new section clearly defines the tier-to-detail mapping and agent behavior.

### Constraints Applied
- **Lane isolation**: All changes within agent-skill lane ✓
- **Ephemeral artifacts**: INSTRUCTIONS.md generated per-attempt ✓
- **Evidence over assertion**: HTTP 200 verified, diffs provided ✓
- **ODD formula**: Pack + CONTRACT + PRD = Attempt ✓

### Decision Rules Followed
- **KISS**: Simple fixed tier-to-detail mapping, no smart exceptions ✓
- **Explicit tradeoffs**: Non-goals clearly documented in prohibitions ✓
- **Prefer one-shot builds**: Clean generation, not steering a miss ✓

### Verification Performed
- Compiled pack with `npm run lane:compile`
- Verified HTTP 200 on `https://main.klappy-dev-agent-skill.pages.dev/v1.4/prd-guide-pack.md`
- Verified HTTP 200 on `https://main.klappy-dev-agent-skill.pages.dev/latest/prd-guide-pack.md`
- Verified "Default Context Construction" section present in deployed content

### Evidence Produced
- Compile output log
- Deployment verification (HTTP 200 x2)
- Hash comparison showing diff
- Copy of compiled pack

### Tradeoffs & Risks
- **No override mechanism**: Tier-to-detail mapping is fixed; users cannot dynamically adjust per-document (future consideration per PRD)
- **Documents lacking structure degrade**: Intentional — bad structure pays at query time, not authoring time
- **No README special-casing**: Navigation files treated as Tier 3, not elevated for convenience

### Confidence Level
**High (0.85)**

The implementation matches the PRD specification exactly. The tier-to-detail mapping is straightforward and the prohibitions are explicit. The main uncertainty is whether real-world agents will interpret and follow the guidance correctly, which requires observation in practice.

---

## Learnings

1. **Compile plan location matters**: The actual compile plan lives in `infra/compile/plans/`, not in the lane's `src/` folder. Updated the path to point to v1.4 INSTRUCTIONS.md.

2. **Preview vs Production**: Reminder that merging to `main` only deploys to preview (`main.klappy-dev-agent-skill.pages.dev`). Production (`agent-skill.klappy.dev`) requires fast-forwarding the `prod` branch.

3. **INSTRUCTIONS.md is the primary deliverable**: For this lane, the INSTRUCTIONS.md changes are what matter — the canon sources are just context.

---

## Next Steps (TO BECOME CHAMPION)

1. ~~Create history entry~~ Done (H0009)
2. **Fast-forward `prod` branch**:
   ```bash
   git checkout prod && git merge --ff-only origin/main && git push origin prod
   ```
3. **Verify HTTP 200 on PRODUCTION domain**:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://agent-skill.klappy.dev/v1.4/prd-guide-pack.md
   ```
4. Update this ATTEMPT.md status to CHAMPION
5. Update lane README to mark v1.4 as Champion

---

## Correction Note

**2026-01-22**: Status was prematurely marked as CHAMPION before production deployment. Corrected to PREVIEW_VERIFIED. The preview URL was verified (main.klappy-dev-agent-skill.pages.dev), but production (agent-skill.klappy.dev) requires the `prod` branch to be updated.

Per CONTRACT.md: "Merging to main is NOT production deployment."
