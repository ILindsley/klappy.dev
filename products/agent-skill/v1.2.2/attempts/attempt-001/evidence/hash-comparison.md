# Hash Comparison Evidence

**Date**: 2026-01-21
**Purpose**: Verify canon source hashes changed between v1.2.1 and v1.2.2

---

## Initial Investigation (Incorrect)

Initially diagnosed as "PRD premise incorrect" because existing file hashes were identical.

**Root cause discovered**: The compile plan was missing the new `memory-architecture.proposed.md` file!

---

## Corrected Understanding

The PRD was correct. Canon v0.5.3 added `memory-architecture.proposed.md` — a 228-line document on Memory Architecture. It simply wasn't in the compile plan's source list.

### Fix Applied

Added `canon/odd/appendices/memory-architecture.proposed.md` to compile plan sources.

---

## Hash Comparison

### v1.2.1 (Before)

```
sources:
  - canon/odd/manifesto.md
  - canon/constraints.md
  - canon/decision-rules.md
  - canon/definition-of-done.md
  - canon/self-audit.md
  - docs/PRD/PRD_TEMPLATE.md
  - infra/prompts/prd-guide/INSTRUCTIONS.md

(No memory-architecture.proposed.md)
```

### v1.2.2 (After)

```
sources:
  - canon/odd/manifesto.md
  - canon/odd/appendices/memory-architecture.proposed.md    # NEW
  - canon/constraints.md
  - canon/decision-rules.md
  - canon/definition-of-done.md
  - canon/self-audit.md
  - docs/PRD/PRD_TEMPLATE.md
  - products/agent-skill/src/INSTRUCTIONS.md

source_hashes:
  canon/odd/appendices/memory-architecture.proposed.md: 94b7189be0a6330fe0347695020b2a50dc184da44d79ce85fab7e7ef26458282
```

---

## Content Verification

Pack now includes Memory Architecture content:

| Line | Content |
|------|---------|
| 224 | "Memory Is the Bottleneck" (from manifesto) |
| 480 | Memory Architecture title frontmatter |
| 490 | "# Memory Architecture" heading |
| 608 | "## The Percolation Model" |

---

## Pack Size Comparison

| Version | Lines | Approx Tokens |
|---------|-------|---------------|
| v1.2.1 | ~1809 | ~12K |
| v1.2.2 | ~2039 | ~15K |

The ~230 line increase corresponds to the Memory Architecture document.

---

## PRD Success Criteria Assessment

| Criterion | Status | Notes |
|-----------|--------|-------|
| Pack recompiled with canon v0.5.3 sources | PASS | Compile succeeded with updated plan |
| Provenance header shows updated source hashes | PASS | New hash for memory-architecture.proposed.md |
| Source hashes differ from v1.2.1 | PASS | New file adds new hash |
| Pack content includes Memory Architecture references | PASS | Full document now included |

---

## Lesson Learned

When PRD says "include X", verify X is in the compile plan sources — not just that X exists in the repo.
