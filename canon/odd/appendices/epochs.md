---
uri: klappy://canon/odd/epochs
title: "Epochs"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["odd", "epochs", "fitness-landscape", "comparability", "orientation"]
---

# Epochs

An **epoch** is a named period where the meaning of "success" is stable enough that outcomes can be compared.

This is borrowed from evolutionary systems:

- **Attempts** are individuals.
- **PRDs** are fitness functions.
- **Promotion** is selection.
- **Canon** is inherited traits.
- **Epochs** are shifts in the fitness landscape itself.

If epochs are implicit, the system will compare results across incompatible standards and produce folklore.

---

## What an Epoch Is

An epoch defines the **evaluation reality** for a period of work:

- what "done" means (and what it does not)
- what evidence is mandatory
- what contracts are binding (build/deploy, provenance, etc.)
- what risks are acceptable
- what is treated as stable vs experimental infrastructure

An epoch is *not* a PRD.  
An epoch is the context in which PRDs are interpreted.

---

## What an Epoch Is Not

Epochs are not:

- a semantic version of the website
- a replacement for product lanes
- a reason to rebuild everything
- a new folder taxonomy for creativity

Epochs exist to prevent invalid comparisons, not to add structure.

---

## Relationship to Product Lanes

**Product lanes** separate *simultaneous intent*.  
**Epochs** separate *changes over time* in how intent is evaluated.

- Lanes answer: "Which product are we evolving?"
- Epochs answer: "What counts as truth *right now* across those products?"

Lanes are parallel. Epochs are sequential.

---

## Relationship to PRDs and Attempts

Within a lane:

- A **PRD** specifies requirements for a specific capability.
- An **attempt** is an observation (implementation + evidence) against that PRD.

Across time:

- An **epoch** determines whether two attempts are comparable.
- If the evaluation rules changed, you are in a new epoch.

Rule of thumb:

> If you changed what evidence is required, or what contract is binding, you changed the fitness landscape. That is a new epoch.

---

## When to Start a New Epoch

Start a new epoch when any of the following change in a way that would invalidate comparisons with prior attempts:

- Evidence requirements (e.g., "preview URL required" becomes mandatory)
- Provenance requirements (e.g., capturing tool/model becomes required)
- Deployment topology (e.g., `prod` branch becomes the production branch)
- Build/deploy contract semantics (`/dist` rules change materially)
- Attempt lifecycle mechanics (e.g., reserve → register/finalize)
- Evaluation method (e.g., manual review → scripted verification gates)

If the change is "nice-to-have" and does not affect comparability, do not create an epoch.

---

## Naming Convention

Epoch IDs should be boring and stable:

- `E0001-<short-name>`
- `E0002-<short-name>`

Examples:
- `E0001-single-prd-era`
- `E0002-multi-lane-era`
- `E0003-evidence-first-era`

The ID is the canonical reference. The name is a hint.

---

## Minimal Epoch Metadata (Required)

Every attempt's `META.json` MUST include:

- `lane`
- `prd_version`
- `epoch_id`

Example:

```json
{
  "lane": "website",
  "prd_version": "v1.0",
  "epoch_id": "E0002-multi-lane-era"
}
```

If epoch_id is missing, the attempt is not comparable by default.

---

## Anti-Patterns

- **Epoch inflation**: Creating a new epoch for every PRD bump.
- **Hidden epoch shifts**: Changing contracts or evidence rules without naming it.
- **Epoch as marketing**: Treating epoch IDs like product versions.
- **Cross-epoch comparisons**: Declaring "Attempt 003 is better than Attempt 001" when the evaluation rules changed.

---

## Why This Exists

Evolutionary systems assume a stable fitness landscape per generation.

Human + AI systems change the landscape constantly (tools, contracts, evidence standards, deployment topology).
Naming epochs makes those shifts explicit so we can:

- preserve honest comparisons
- prevent "it worked because residue" confusion
- keep learnings interpretable over time

If the evaluation landscape changed, say so.
That's what an epoch is for.

---

## E0003 — Evidence-First Era

### What changed

E0003 begins when online deployment evidence becomes mandatory for attempt completion.

In this epoch, a local build is not sufficient proof when the intended outcome is an online deployment.

### Binding rule (new fitness landscape)

An attempt is not complete until all are true:

1) The attempt branch is pushed to origin
2) Cloudflare Pages preview deployment succeeds (build passes)
3) The preview URL returns HTTP 200 and renders the site
4) The evidence URL returns HTTP 200 and renders the evidence at:

`/_evidence/<run_id>/EVIDENCE.md`

### Why this is a new epoch

This change alters the repository's selection pressure:

- Success is now gated by deployment correctness, not just build correctness
- Evidence must be externally reviewable, not locally asserted
- Attempts become comparable only within the same deploy-evidence regime

### Compatibility

- E0002 attempts remain valid within E0002.
- E0002 attempts are not comparable to E0003 attempts by default.
