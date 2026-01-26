# Decision Document Audit Report

> Generated: 2026-01-26T21:07:55.204Z

## Summary

| Metric | Count |
|--------|-------|
| Total content files | 58 |
| Decision/governing files | 14 |
| ✅ Passing | 14 |
| ❌ Failing | 0 |
| ⚠️ With warnings | 6 |

## Required Headings

All `relevance: decision` + `execution_posture: governing` documents must have:

- `## Operating Constraints`
- `## Defaults`
- `## Failure Modes`
- `## Verification`

## ✅ Passing Documents

### `canon/constraints.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `canon/decision-rules.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `canon/decisions/models-do-not-mutate-canon.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

### `canon/definition-of-done.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `canon/documentation/agent-executable-outline.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `canon/documentation/execution-posture.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

### `canon/documentation/slice-contract-sml.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

### `canon/documentation/tier-vs-relevance.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

### `canon/epistemic-obligation-and-document-tiers.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

### `canon/verification-and-evidence.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `canon/visual-proof.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `odd/constraint/use-only-what-hurts.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `odd/contract.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

### `odd/decisions/D0001-three-tier-conceptual-hierarchy.md` ⚠️

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

**Warnings:**
- 'Verification' section lacks evidence keywords

---

## How to Fix

For each failing document, add the missing headings:

```markdown
## Operating Constraints

- MUST ...
- MUST NOT ...

## Defaults

- When uncertain, ...
- Prefer ...

## Failure Modes

- **Name**: Description of the trap

## Verification

- Evidence of X
- Before/after comparison
```

If a section genuinely does not apply, add to frontmatter:

```yaml
slice_exceptions:
  missing_sections_allowed: ["Failure Modes"]
  rationale: "This document has no known failure modes yet"
```
