---
uri: klappy://docs/appendices/drift-checks
title: "Drift Checks"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "drift", "verification", "contracts"]
---

# Drift Checks

> The mechanism for detecting when documentation, prompts, and tooling diverge from truth.

## Description

Drift is the primary failure mode of ODD systems—when components diverge, truth becomes vibes. The drift check command verifies alignment between interface contracts, lane PRDs, attempt lifecycle docs, tooling behavior, and manifest schema. If drift checks fail, conclusions drawn from the repo are invalid and must be fixed before running new attempts.

## Outline

- What Must Stay Aligned
- The Drift Check Command
- Epistemic Rule

---

## Content

Drift is the primary failure mode of ODD systems.

When documentation, prompts, and tooling diverge, "truth" becomes vibes again.

This appendix defines the drift-prevention mechanism.

---

## What Must Stay Aligned

- Interface contracts (`/interfaces/**`)
- Lane PRDs (`/docs/PRD/**`)
- Attempt lifecycle docs (`/docs/**`)
- Tooling behavior (CLI)
- Manifest schema and semantics

---

## The Drift Check Command

The repository SHOULD provide:

```bash
npm run verify:contracts
```

This command verifies:

1. `manifest.json` conforms to `manifest@current`
2. builds conform to `build-output@current`
3. attempt artifacts conform to `attempt-cli@current`
4. lane PRDs declare required contracts

---

## Epistemic Rule

If drift checks fail, conclusions drawn from the repo are invalid.

Fix drift before running new attempts.
