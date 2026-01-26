# Decision Document Audit Report

> Generated: 2026-01-26T20:38:16.392Z

## Summary

| Metric | Count |
|--------|-------|
| Total content files | 58 |
| Decision/governing files | 14 |
| ✅ Passing | 1 |
| ❌ Failing | 13 |
| ⚠️ With warnings | 0 |

## Required Headings

All `relevance: decision` + `execution_posture: governing` documents must have:

- `## Operating Constraints`
- `## Defaults`
- `## Failure Modes`
- `## Verification`

## ❌ Failing Documents

These documents are missing required headings:

### `canon/constraints.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/decision-rules.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/decisions/models-do-not-mutate-canon.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/definition-of-done.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/documentation/agent-executable-outline.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/documentation/execution-posture.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/documentation/slice-contract-sml.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/documentation/tier-vs-relevance.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/epistemic-obligation-and-document-tiers.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `canon/verification-and-evidence.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `odd/constraint/use-only-what-hurts.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `odd/contract.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

### `odd/decisions/D0001-three-tier-conceptual-hierarchy.md`

**Failures:**
- Missing required heading: '## Operating Constraints'
- Missing required heading: '## Defaults'
- Missing required heading: '## Failure Modes'
- Missing required heading: '## Verification'

## ✅ Passing Documents

### `canon/visual-proof.md`

Sections found: Operating Constraints, Defaults, Failure Modes, Verification

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
