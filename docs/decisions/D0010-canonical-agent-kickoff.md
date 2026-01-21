---
uri: klappy://docs/decisions/D0010
title: "D0010: Canonical Agent Kickoff"
audience: docs
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "agent", "kickoff", "entrypoint"]
---

# Canonical Agent Kickoff Artifact

> A single authoritative entry point file eliminates agent prompt reconstruction and drift.

## Description

This decision creates `/docs/AGENT_KICKOFF.md` as the only allowed entry point for agent attempts. Rather than expecting agents to compose context from multiple documents, this single file contains all invariants. Humans paste exactly what's in the repo—no external prompts, no helpful context, no reconstruction. The file IS the prompt.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0010: Canonical Agent Kickoff Artifact

**Status:** Accepted  
**Date:** 2026-01-17  
**Deciders:** Chris Klapp  
**Related:** D0009-multi-lane-prd-architecture

---

## Context

After implementing multi-lane PRD architecture (D0009), the agent entry surface became fragmented:

- `/docs/AGENT_ENTRYPOINT.md` — orientation pointers
- `/docs/ATTEMPT_KICKOFF.md` — human workflow with agent notes
- `/docs/ATTEMPTS.md` — lifecycle orientation
- `/docs/appendices/product-lanes.md` — lane architecture

Agents were expected to "compose context" by reading multiple documents. This violated a core principle:

> If it's not in the repo, it doesn't exist.

When a human pastes a "helpful" prompt into Cursor, that prompt is not repo-authoritative. The agent reconstructs intent rather than reading authority.

This creates:
- Drift between what humans think agents should do and what's documented
- Hallucinated procedures based on reasonable-sounding synthesis
- No single source of truth for agent behavior

---

## Decision

Create a single, canonical, copy-pasteable agent kickoff artifact:

**`/docs/AGENT_KICKOFF.md`**

This file:
- Is the ONLY allowed entry point for agent attempts
- Contains all invariants in one place
- Is lane-aware (declares variables, not per-lane copies)
- Explicitly instructs agents to STOP if conflicts are detected

The existing files are rescoped:
- `/docs/AGENT_ENTRYPOINT.md` — now points directly to AGENT_KICKOFF
- `/docs/ATTEMPT_KICKOFF.md` — human workflow only
- `/docs/ATTEMPTS.md` — orientation, not procedure

---

## Consequences

### Positive

- **Single source of truth:** Agents have one authoritative entry point
- **No reconstruction:** Humans paste exactly what's in the repo
- **Conflict detection:** Agents are instructed to stop and report, not guess
- **Scalable:** New lanes are added to the file, not as separate artifacts

### Negative

- **One more file:** Adds to the doc surface area
- **Maintenance:** Must be kept in sync with lane changes

### Mitigations

- AGENT_KICKOFF.md references lane PRDs by path pattern, not hardcoded content
- Lane additions require updating ONE file, not rewriting agent prompts
- File is self-describing: agents can validate it against repo state

---

## The Invariant

If a human wants an agent to start an attempt, they do ONE thing:

> Point the agent at `/docs/AGENT_KICKOFF.md`

No external prompts. No "helpful context." No reconstruction.

The file IS the prompt.

---

## Related Documents

- `/docs/AGENT_KICKOFF.md` — the canonical artifact
- `/docs/AGENT_ENTRYPOINT.md` — now a redirect
- `/docs/appendices/product-lanes.md` — lane architecture
- D0009 — multi-lane PRD architecture
