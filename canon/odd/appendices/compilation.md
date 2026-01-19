---
uri: klappy://canon/odd/compilation
title: Compilation
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "compilation", "memory", "context", "packs"]
---

# Compilation

## Summary

Compilation is the process of producing a **derived, wipeable, portable pack** from higher-entropy source documents.

It exists to solve a practical constraint:

> Agents and humans cannot keep the entire repo in working memory at once.

Compilation produces a **smaller, purpose-built context artifact** that can be regenerated at any time.

---

## Core Rule

**Compilation never edits or replaces source.**

- Source docs remain the truth.
- Compiled packs are derived outputs.
- Compiled outputs may be deleted at any time and rebuilt deterministically.

This is compilation, not compression-in-place.

---

## Output Location (Wipeable)

Compiled outputs MUST live under:

`/public/_compiled/<lane>/`

Example:

`/public/_compiled/website/visitor-pack.md`

Compiled outputs MUST NOT be stored inside:
- `/canon/**`
- `/docs/**`
- `/attempts/**`

Those are source-of-truth layers.

---

## Provenance Header (Required)

Every compiled pack MUST begin with a provenance header containing:

- `lane`
- `pack`
- `built_at` (ISO8601)
- `git_commit`
- `sources` (list of source file paths)
- `source_hashes` (map of source path → sha256)

If provenance is missing, the compiled pack is invalid.

---

## Why This Is ODD

ODD treats "context" as a consumable.

Compilation is the mechanism that makes context:

- **portable** (shareable artifact)
- **auditable** (provenance)
- **regeneratable** (wipeable output)
- **cheap** (smaller input than full repo)

Compilation is not automation. It is an **evolutionary pressure** against doc sprawl.

If compilation output grows bloated, the correct response is:
- reduce scope
- tighten selection rules
- improve curation
not "add more docs."

---

## Relationship to Drift Checks

Drift checks ensure the repo does not contradict itself.

Compilation ensures the repo remains **usable** under memory limits.

Both are required for scalability.
