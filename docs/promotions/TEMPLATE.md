---
uri: klappy://docs/promotions/template
title: "Promotion Artifact Template"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: stable
tags: ["promotions", "template"]
---

# Promotion Artifact Template

Copy this template to create a new promotion proposal.

---

````markdown
---
uri: klappy://docs/promotions/P####-short-name
title: "P####: Short Description"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: evolving
tags: ["promotions", "proposed"]
promotion_status: proposed
---

# P####: Short Description

> One-sentence summary of the pattern and proposed change.

## Observed Pattern

What keeps happening? Be specific.

- Describe the failure mode or gap
- Who is affected?
- What outcome does this cause?

## Evidence

| Validation Session | Date       | Outcome         | Notes       |
| ------------------ | ---------- | --------------- | ----------- |
| #1                 | YYYY-MM-DD | NEEDS_ARTIFACTS | Description |
| #2                 | YYYY-MM-DD | FAIL            | Description |

**Total observations**: N
**Independent occurrences**: N
**Affected workflows**: List them

## Current Handling

How is this caught today?

- Which agent/validator detects it?
- What verdict does it produce?
- What guidance does the user receive?

## Proposed Promotion

### Target Document

`path/to/canon-doc.md`

### Section

`## Heading` or new section

### Proposed Language

Add this text (or modify existing):

```text
- MUST do X when Y
- Failure mode: Z without W
```
````

### Rationale

Why this exact wording? Why this location?

## Risk Assessment

| Risk Level | Description                                   |
| ---------- | --------------------------------------------- |
| Low        | Clarifies existing rule, no scope change      |
| Medium     | Adds new requirement, may affect workflows    |
| High       | Changes existing behavior, requires migration |

**Risk level**: Low | Medium | High

**Mitigation**: How to reduce risk if applicable.

## Status

`proposed` | `accepted` | `rejected` | `executed`

## Review Notes

(To be filled during review)

- **Reviewer**:
- **Decision**:
- **Date**:
- **Notes**:

## Execution Record

(To be filled after acceptance)

- **Commit**: (hash or link)
- **Canon doc updated**: (path)
- **Backlink added**: Yes / No

```

```
