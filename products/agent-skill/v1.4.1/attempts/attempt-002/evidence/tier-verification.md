# Tier Verification Evidence

This document verifies that the compiler correctly enforces tier rules as specified in FR-1 through FR-4.

---

## Tier 0 Exclusions (FR-2)

**Rule**: Tier 0 files must NEVER be included, even if explicitly listed.

### Curated Pack (prd-guide)

| Path | Tier | Included | Reason |
|------|------|----------|--------|
| odd/README.md | 0 | false | tier0 |

**Result**: 1 Tier 0 file correctly excluded.

### Discovered Pack (default-odd-context)

| Path | Tier | Included | Reason |
|------|------|----------|--------|
| odd/README.md | 0 | false | tier0 |
| projects/index.md | 0 | false | tier0 |

**Result**: 2 Tier 0 files correctly excluded.

---

## Tier-Based Projection (FR-4)

**Rule**: 
- Tier 1 → high (full content)
- Tier 2 → medium (frontmatter + description + outline)
- Tier 3 → low (title + one-line summary)

### Sample Tier 1 Files (High Projection)

| Path | Tier | Projection |
|------|------|------------|
| canon/constraints.md | 1 | high |
| canon/definition-of-done.md | 1 | high |
| odd/terminology.md | 1 | high |
| odd/cognitive-partitioning.md | 1 | high |
| products/agent-skill/v1.4.1/attempts/attempt-002/INSTRUCTIONS.md | 1 | high |

**Verified**: All Tier 1 files receive full content projection.

### Sample Tier 2 Files (Medium Projection)

| Path | Tier | Projection |
|------|------|------------|
| canon/decision-rules.md | 2 | medium |
| canon/self-audit.md | 2 | medium |
| odd/manifesto.md | 2 | medium |

**Verified**: All Tier 2 files receive frontmatter + description + outline projection.

### Sample Tier 3 Files (Low Projection)

| Path | Tier | Projection |
|------|------|------------|
| canon/odd/appendices/tool-specialization.md | 3 | low |
| docs/PRD/PRD_TEMPLATE.md | 3 | low |
| odd/appendices/README.md | 3 | low |
| odd/decisions/README.md | 3 | low |

**Verified**: All Tier 3 files receive title + one-line summary projection.

---

## Missing Tier Handling (FR-1)

**Rule**: Missing tier defaults to Tier 3 with warning.

### Files with Missing Frontmatter

| Path | Default Tier | Warning Emitted |
|------|--------------|-----------------|
| docs/PRD/ai-navigation/PRD.md | 3 | Yes: "No frontmatter found, defaulting to Tier 3" |
| docs/PRD/website/PRD.md | 3 | Yes: "No frontmatter found, defaulting to Tier 3" |
| projects/_template/README.md | 3 | Yes: "No frontmatter found, defaulting to Tier 3" |

**Verified**: Files without tier metadata default to Tier 3 and emit warnings.

---

## Deterministic Ordering (FR-6)

**Rule**: Files sorted by path for deterministic output.

**Verified**: Plan output shows files sorted alphabetically by path:
- `canon/CHANGELOG.md` comes before `canon/completion-report-template.md`
- `odd/README.md` comes before `odd/TEMPLATE.md`
- Ordering is stable across runs

---

## Summary

| Requirement | Status | Evidence |
|-------------|--------|----------|
| FR-1: Tier metadata parsing | PASS | Tiers correctly read from frontmatter |
| FR-2: Tier 0 exclusion | PASS | 3 total Tier 0 files excluded |
| FR-4: Tier-based projection | PASS | All tiers map to correct projection level |
| FR-6: Deterministic ordering | PASS | Files sorted by path |
| Missing tier handling | PASS | Defaults to Tier 3 with warning |
