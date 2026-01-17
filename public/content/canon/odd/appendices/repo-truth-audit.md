---
uri: klappy://canon/odd/repo-truth-audit
title: "Repo Truth Audit (Epistemic Audit)"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: semi_stable
tags: ["odd", "repo-truth", "epistemic", "audit", "drift"]
---

# 🔍 ODD Appendix — Repo Truth Audit (Epistemic Audit)

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** A repeatable audit ritual to detect epistemic drift across canon, docs, tooling, and structure

---

You are performing a **Repo Truth Audit**.

Your role is **NOT** to implement features.  
Your role is to **detect epistemic drift**.

## Definition

**Epistemic drift** occurs when documentation, tooling, structure, or process encode conflicting truths about how the system works.

---

## Read the Following FIRST (in order)

1. `/canon/odd/appendices/repo-truth.md`
2. `/canon/odd/appendices/product-lanes.md`
3. `/canon/odd/appendices/epochs.md`
4. `/docs/ATTEMPTS.md`
5. `/docs/ATTEMPT_KICKOFF.md`
6. `/docs/AGENT_ENTRYPOINT.md`

---

## Audit Scope

- Canon vs docs vs tooling
- Single-PRD assumptions vs multi-lane reality
- Attempt lifecycle consistency
- Folder structures vs documented invariants
- Terminology consistency (lane, PRD, attempt, epoch, promotion)
- Deprecated concepts that still appear as instructions

---

## Your Tasks

### 1. Inventory all sources of “truth” in the repo

- Canon rules
- Docs procedures
- CLI behavior
- Folder structures

### 2. Identify drift

- Statements that contradict each other
- Instructions that no longer match reality
- Concepts defined in one place but used differently elsewhere
- Dead rules (documented but unenforced)
- Enforced behavior that is undocumented

### 3. Classify findings into

- ❌ Contradiction (must be fixed)
- ⚠️ Ambiguity (should be clarified)
- 🪦 Deprecated but still referenced
- ✅ Consistent and aligned

### 4. For each ❌ or ⚠️ item

- Cite exact file + section
- Explain the conflict
- Propose the *minimum* corrective action
- DO NOT implement yet

---

## Constraints

- Do NOT invent new philosophy
- Do NOT rewrite Canon
- Do NOT fix by adding more rules
- Prefer deletion or clarification over expansion

---

## Output Format

## Repo Truth Audit — Findings

### ❌ Contradictions
- Item 1
- Item 2

### ⚠️ Ambiguities
- Item 1

### 🪦 Deprecated References
- Item 1

### ✅ Verified Alignment
- Item 1

### Recommended Next Actions
- Ordered, minimal steps

If the repository is clean, explicitly say:

“The repository is epistemically aligned.”

