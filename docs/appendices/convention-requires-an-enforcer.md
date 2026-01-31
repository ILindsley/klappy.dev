---
uri: klappy://docs/appendices/convention-requires-an-enforcer
title: "Convention Requires an Enforcer"
audience: docs
exposure: internal
tier: 3
voice: neutral
stability: draft
tags: ["rationale", "convention", "enforcement", "portability", "oddkit"]
---

# Convention Requires an Enforcer

## Purpose

This document preserves the rationale behind a key design shift in ODD and oddkit: why convention-over-configuration is insufficient without enforcement, and why enforcement must be mechanical rather than social.

This is not a principle or a constraint. It is an explanatory disclosure meant to prevent future confusion, re-litigation, or regression to path-based conventions.

---

## The Emotional Cost (Acknowledged)

Moving away from folder-based convention feels like a loss.

Convention-over-configuration promises:

- elegance
- shared intuition
- low cognitive overhead

Abandoning it can feel like choosing bureaucracy over taste.

That feeling is valid — and misleading.

---

## The Core Truth

Convention only works when there is an enforcer.

Historically, convention-over-configuration is paid for by one (or more) of the following:

1. **Central authority** — a team or individual who polices correctness
2. **Cultural enforcement** — social pressure, shame, or reputation
3. **Tooling enforcement** — automated checks that make invalid states impossible

In environments with:

- distributed contributors
- AI agents
- forks and submodules
- high churn and long timelines

Only tooling enforcement remains reliable.

---

## Why Social Convention Fails Here

ODD rests on a non-negotiable constraint:

> Humans are variable inputs.

This means:

- memory fails
- attention drifts
- rituals are skipped under pressure
- "everyone knows the rule" decays over time

Any convention that depends on remembering or behaving correctly will eventually fail.

This is not a moral claim. It is an empirical one.

---

## What Changed (And What Did Not)

**What changed:**

- Convention is no longer encoded in filesystem paths or branch names.
- Meaning is no longer inferred from location.

**What did not change:**

- There is still a convention.
- Everyone still follows it.

The difference is where the convention lives.

---

## The New Convention

The convention now lives in:

- **schemas** (required fields)
- **invariants** (states that must be satisfied)
- **tooling defaults** (the correct path is the easy path)

Examples:

- A learning must declare scope.
- An experiment must be exited.
- A record must have a stable id.

These are conventions — but they are machine-checkable.

---

## Who Enforces the Convention

Enforcement is layered:

1. **oddkit** enforces local correctness during work
2. **CI** enforces shared correctness before merge
3. **Canon constraints** enforce epistemic correctness as a normative backstop

This replaces:

- meetings
- tribal knowledge
- documentation-as-hope

with deterministic guarantees.

---

## Why This Is More Antifragile

- Repos can be reorganized without semantic drift
- New contributors do not need oral tradition
- Agents cannot accidentally violate meaning
- Failure modes surface immediately, not retroactively

The system becomes harder to misuse as it grows.

---

## Reframing the Loss

This is not abandoning convention-over-configuration.

It is upgrading it:

- from path conventions (fragile, implicit)
- to schema conventions (explicit, enforceable)

The elegance was not lost.

It was relocated to a layer that can survive reality.

---

## Summary

A convention without enforcement is a ritual with a deadline.

ODD chooses enforcement not because it distrusts people, but because it respects reality.

---

## Relationship

This appendix explains the rationale behind:

- `klappy://canon/principles/scope-over-folders` — the principle that scope is metadata, not location
- `klappy://canon/constraints/meaning-must-not-depend-on-path` — the tier-1 constraint forbidding path inference
- `klappy://docs/migrations/scope-experiments-minimal-migration` — the migration plan implementing these invariants

It rests on the foundational constraint:

- `klappy://canon/constraints/humans-are-variable-inputs`
