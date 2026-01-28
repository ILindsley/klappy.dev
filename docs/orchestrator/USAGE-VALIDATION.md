---
uri: klappy://docs/orchestrator/usage-validation
title: "Using Validation"
subtitle: "How to challenge 'done' claims and demand evidence"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["validation", "evidence", "dod", "claims"]
---

# Using Validation

> Validation is a claims-to-evidence compiler. It blocks "done" without proof.

## When to use it

Use Validation when someone says:

- "done"
- "implemented"
- "shipped"
- "finished"
- "works"
- "ready"

It returns:

- explicit claims
- required evidence
- provided evidence
- gaps
- verdict

## How to run it

```bash
npm run orchestrator:dry -- "We finished the UI update and shipped it."
```

## What verdicts mean

- `PASS` — evidence supports the claim(s)
- `NEEDS_ARTIFACTS` — likely true but insufficient proof provided
- `FAIL` — evidence contradicts the claim(s) or indicates breakage
- `CLARIFY` — claims are too vague to evaluate

## What "evidence" looks like

Validation recognizes artifacts such as:

- screenshots / recordings (UI claims)
- test logs / commands (correctness claims)
- file paths (generated outputs)
- URLs (PRs, builds)
- code blocks (only as supporting detail, not proof)

## Example: UI change claim

Required evidence often includes:

- before/after screenshots
- short screen recording for interaction changes
- path to artifact or output

## How to use it in practice

1. Paste a completion message + artifacts into a single input.
2. Run validation.
3. If `NEEDS_ARTIFACTS`, capture what it asks for.
4. Re-run until `PASS` or clarified scope.

Validation is not a punishment tool. It is an honesty tool.
