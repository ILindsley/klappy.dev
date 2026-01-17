---
uri: klappy://canon/odd/decisions
title: "ODD Decision Log"
audience: canon
exposure: nav
tier: 1
voice: neutral
stability: evolving
tags: ["odd", "decisions", "adr", "index"]
---

# ODD Decision Log

This folder contains Architecture Decision Records (ADRs) for the ODD workflow and repository practices.

> **Principle:** Decisions live here. Procedures live in `/docs/`. Philosophy lives in `/canon/`.

---

## Active Decisions

### Branch & Deploy Model

| ID | Decision | Status |
|----|----------|--------|
| [D0001](./D0001-prod-branch-is-production.md) | `prod` branch is production; `main` is experiment ledger | **Active** |
| [D0005](./D0005-nuke-safety-guards.md) | Nuke command refuses on `prod`, warns on `main` | **Active** |
| [D0007](./D0007-branch-names-are-convenience.md) | Branch names are convenience; provenance lives in META | **Active** |

### Attempt Lifecycle

| ID | Decision | Status |
|----|----------|--------|
| [D0002](./D0002-attempt-provenance-required.md) | Model provenance must be captured at registration | **Active** |
| [D0003](./D0003-prd-version-auto-detection.md) | PRD version auto-detected from lane PRD | **Active** |
| [D0006](./D0006-dogfooding-requirement.md) | Agents must apply canon docs, not just read them | **Active** |
| [D0008](./D0008-register-before-nuke.md) | Register first (provenance), then nuke (independence) | **Active** |
| [D0010](./D0010-canonical-agent-kickoff.md) | Single canonical agent entry point (`AGENT_KICKOFF.md`) | **Active** |

### Architecture

| ID | Decision | Status |
|----|----------|--------|
| [D0009](./D0009-multi-lane-prd-architecture.md) | PRDs organized into independent product lanes | **Active** |
| [D0011](./D0011-odd-contract-2.0.0.md) | ODD System Contract 2.0.0 (multi-lane era) | **Active** |

### Repository Hygiene

| ID | Decision | Status |
|----|----------|--------|
| [D0004](./D0004-repo-truth-cleanup-mandatory.md) | Cleanup is mandatory; dirty repos invalidate conclusions | **Active** |

---

## How Decisions Are Made

1. **During an attempt**: Agent notes "Decision Delta" in `ATTEMPT.md`
2. **After the attempt**: Human or librarian promotes durable decisions here
3. **If stable**: Decision may be referenced from higher-visibility docs

---

## Decision File Template

Each decision file follows this structure:

```markdown
# D000X — [Title]

## Decision

[1-2 sentences stating what was decided]

## Status

**Active** | Proposed | Deprecated

## Why

- [Bullet point]
- [Bullet point]

## Consequences

- [What this enables]
- [What this prevents]
- [What this costs]

## Implementation

- Script: `/infra/scripts/...`
- Contract: `/infra/contracts/...`
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt`

## Evidence

- Commit: `abc1234`
- Attempt: `/attempts/prd-vX.Y/attempt-00N/`
```

---

## Deprecated Decisions

_None yet._
