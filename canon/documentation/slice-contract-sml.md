---
uri: klappy://canon/documentation/slice-contract-sml
title: "Slice Contract: S / M / L"
audience: canon
exposure: nav
tier: 1
relevance: decision
voice: neutral
stability: stable
tags: ["context-packs", "extraction"]
---

# Slice Contract: S / M / L

> How much to extract from each included topic.

## Summary

S/M/L define **extraction depth per topic**, not topic inclusion.

Topic inclusion is controlled by `relevance`.
Extraction depth is controlled by slice size.

---

## Required Headings (when applicable)

Documents with `relevance: decision` are expected to use these headings where appropriate:

- `## Operating Constraints`
- `## Defaults`
- `## Failure Modes`
- `## Verification`

Recommended:
- `## Summary`
- `## Examples`
- `## Related`

---

## Slice Definitions

### S — Execution Slice
Extract:
- Title
- Subtitle
- Description
- Operating Constraints
- Defaults
- Failure Modes
- Verification

Purpose: change behavior immediately.

---

### M — Execution + Correctness
Extract:
- Everything in S
- Summary
- Examples (if present)

Purpose: reduce errors and misapplication.

---

### L — Full Topic
Extract:
- Everything in M
- Any additional background or rationale sections

Purpose: deep understanding and auditability.

---

### XL — Book Export
- Entire document
- No slicing
- Not intended for execution packs

---

## Rules

- Extraction is structural only (heading-to-heading)
- No summarization or rewriting
- Missing sections are skipped, not fabricated
- Warnings may be emitted for governing docs

---

## Invariant

> **If a slice does not change behavior, it does not belong in S.**
