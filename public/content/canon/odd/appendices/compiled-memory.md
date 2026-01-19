---
uri: klappy://canon/odd/compiled-memory
title: "Compiled Memory"
audience: canon
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["odd", "compiled", "memory", "drift"]
---

# Compiled Memory

## Summary

In ODD, repositories accumulate truth faster than agents can hold it in context.

**Compiled Memory** is the mechanism for producing **lane-scoped, wipeable, auditable**
compressed artifacts that are safe for agents and humans to consume.

This is a **derivation pipeline**, not a rewrite pipeline.

- Source truth remains in Canon + PRDs + Attempts.
- Compiled output is generated *out of place*.
- Compiled output can be deleted and regenerated at any time.

## Why This Exists

ODD assumes:
- generation is abundant
- trust is not
- context is bounded
- drift is inevitable unless actively checked

Agents fail in two predictable ways:
1. **Context overload** → they miss constraints, repeat mistakes, invent structure.
2. **Doc sprawl** → humans keep writing more guidance, and agents still can’t load it all.

Compiled Memory keeps the guidance surface **small, current, and citeable** without destroying the underlying truth.

## Compile Is Not Compression-In-Place

**Rule:** Compiled Memory MUST NOT replace Canon/PRDs/Attempts in place.

This is compile-out-of-place:

- Inputs: Canon + lane docs + PRDs + attempt artifacts
- Outputs: `/public/_compiled/<lane>/**`
- Verification: hashes + sources + provenance

If compiled output is wrong, we delete it and recompile.
If source truth is wrong, we change the source truth explicitly.

## Scope Levels (The Four Outputs)

Compiled Memory produces four outputs per lane.

1) **Canon Pack**
- Purpose: high-signal orientation + invariants relevant to the lane
- Input: Canon (+ decisions, appendices)

2) **Lane Pack**
- Purpose: lane identity, non-goals, and how this lane “wins”
- Input: lane PRD folder + lane docs

3) **PRD Pack**
- Purpose: the active PRD distilled into an agent-usable execution contract
- Input: `/docs/PRD/<lane>/PRD.md` (and supporting files in that folder)

4) **Run Pack**
- Purpose: “what’s happening right now” for an attempt/run
- Input: attempt artifacts for the lane (or latest run metadata)
- Note: optional when no runs exist

These are distinct because they change at different rates.

## Lane Rules

Compiled output is always lane-scoped:

- Output root: `/public/_compiled/<lane>/`
- Meta: `/public/_compiled/<lane>/_meta/`

Lanes are:
- `website`
- `ai-navigation`
- `agent-skill`

Attempts without a lane are invalid (see Product Lanes).

## Auditable by Design

Every compile run MUST emit:

- `COMPILE_META.json`
  - includes provenance (tool, model, command, timestamp)
  - includes content hashes for plan + sources
- `COMPILE_SOURCES.txt`
  - lists every input file used for compilation (paths)

Every compiled markdown output MUST include a **Sources** section.

The goal is not “perfect summaries.”
The goal is **traceable, defensible compression**.

## Drift and Epochs

Compiled Memory is an explicit response to drift.

- Canon and PRDs may advance faster than tooling (epoch transitions).
- Compiled output is always treated as **derived evidence**, not authority.

If Canon/PRDs and tooling disagree:
- Canon/PRDs define intended truth.
- tooling must converge later.
- compiled outputs MUST reflect the intended truth (and cite the mismatch if necessary).

## What This Enables

- Agents can behave consistently without ingesting the whole repo.
- Humans can evaluate the system without wading through every artifact.
- Each lane can have its own “agent-ready” pack without coupling to other lanes.
- The repo can evolve without turning into a documentation graveyard.

## Non-Goals

Compiled Memory does not:
- attempt to make Canon smaller by rewriting it
- delete or “consolidate away” decision history
- guarantee correctness without verification
- replace evidence capture

It exists to keep context bounded while keeping truth traceable.

