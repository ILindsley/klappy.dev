# Canon Index v0.1

Scope, Structure, Intent, and Confidence

This document provides orientation to the Canon.
It describes what exists, what each artifact is for, how they relate, and where the current design is strong vs fragile.

It does not define workflows, agent loops, enforcement steps, or execution order.

---

## Purpose of the Canon

The Canon is a curated set of documents that capture:
- how decisions are made
- what assumptions are held
- how work is verified
- how rigor changes as projects mature

Its purpose is clarity, not control.

The Canon exists so that:
- reasoning does not have to be repeated
- principles remain stable while implementations change
- future systems can reference intent without inheriting outdated instructions

---

## What the Canon Is (and Is Not)

### The Canon Is
- a shared reference
- a source of assumptions and defaults
- a way to encode thinking without enforcing execution

### The Canon Is Not
- a workflow
- a command system
- a task list
- a replacement for judgment

Nothing in the Canon executes by itself.

---

## Canon Structure

```text
/canon/
  index.md
  constraints.md
  decision-rules.md
  definition-of-done.md
  self-audit.md
  visual-proof.md
  completion-report-template.md
  odd/
    manifesto.md
    maturity.md
    misuse-patterns.md
    prompt-architecture.md
    orientation-map.md
```

Each file addresses a different dimension of decision-making.

---

## Canon Components & Roles

### Constraints

File: `constraints.md`

Defines baseline assumptions and non-negotiables that shape decisions.

Answers: *What must be true for this work to make sense?*

---

### Decision Rules

File: `decision-rules.md`

Default heuristics used when multiple valid options exist.

Answers: *How do choices tend to be made?*

---

### Definition of Done & Evidence Policy

File: `definition-of-done.md`

Defines what qualifies as completed work and what evidence is required.

Answers: *When can work honestly be called done?*

---

### Self-Audit Checklist

File: `self-audit.md`

A checklist for reviewing work before declaring completion.

Answers: *What should be reviewed before claiming success?*

---

### Visual Proof Standards

File: `visual-proof.md`

Defines what qualifies as acceptable visual evidence.

Answers: *What does "prove it visually" mean?*

---

### Completion Report Template

File: `completion-report-template.md`

Standard format for reporting completed work.

Answers: *How should completion be communicated?*

---

### ODD Manifesto (Extended)

File: `odd/manifesto.md`

Philosophical and operational foundation of Outcomes-Driven Development.

Answers: *Why this approach exists.*

---

### Project Maturity & Progressive Governance

File: `odd/maturity.md`

Defines how rigor changes as projects mature.

Answers: *When different expectations become binding.*

---

### ODD Appendices (Orientation Only)

These files extend understanding without introducing enforcement:
- **Misuse Patterns** (`odd/misuse-patterns.md`) — Common failure modes and how ODD is misapplied in practice. Diagnostic only.
- **Prompt Architecture** (`odd/prompt-architecture.md`) — How intent scales without giant prompts. Orientation only.
- **Orientation Map** (`odd/orientation-map.md`) — A one-page mental model of ODD, Canon, Evidence, and Outcomes.

---

## Public vs Internal Boundary

- `/odd/README.md` → public-facing ODD (shareable, human-friendly)
- `/canon/**` → internal reference (governance artifacts, precise language)

Public documents explain intent.
Canon documents preserve precision.

---

## Precedence & Interpretation (Orientation Only)

A useful mental model for reading:
1. ODD Manifesto provides philosophical grounding
2. Maturity Model explains when rigor increases
3. Constraints shape the solution space
4. Decision Rules guide choices
5. Evidence Policies define completion

If documents appear to conflict, maturity context and explicit tradeoffs usually explain why.

---

## Stability & Change Philosophy

Not all Canon documents are equally stable.

Some are intended to remain largely fixed.
Others are expected to evolve through use.

Change is allowed, but should be:
- intentional
- versioned (at least informally)
- documented somewhere discoverable

---

## Closing Note

The Canon exists to preserve intent without freezing execution.

It encodes how thinking works, not what must be done next.

---

## Status
- Canon Index v0.1 complete
- Orientation-only
- Includes a confidence and drift snapshot

---

This Canon v0.1 is considered stable for initial builds. Revisions should be additive unless a documented failure requires change.
