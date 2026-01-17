---
uri: klappy://canon/odd/decisions/D0004
title: "D0004: Repo Truth & Cleanup Mandatory"
audience: canon
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "cleanup", "hygiene"]
---

# D0004 — Repository Truth: Cleanup Is Mandatory

## Decision

If the repository is dirty, conclusions drawn from it are invalid. Cleanup is not housekeeping — it is a reset of epistemic state.

## Status

**Active**

## Why

- In AI-assisted development, state residue is indistinguishable from signal
- Orphaned worktrees, stale branches, and detached HEADs contaminate experiments
- Quantum Development relies on comparing **independent** observations
- Independence is meaningless if the filesystem lies

## Consequences

- ✅ Only sealed attempts remain after cleanup
- ✅ Only intentional branches exist
- ✅ Production state is explicit
- ✅ New attempts begin without contamination
- ⚠️ Requires discipline: cleanup after each PRD cycle
- ⚠️ Some data loss if worktrees weren't properly submitted

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdCleanup` prunes worktrees/branches)
- Philosophy: `/canon/odd/appendices/repo-truth.md` documents the principle
- Automation: `attempt:reset` auto-calls cleanup for PRD-specific branches

### What "Dirty" Means

A repository is dirty when:

- Orphaned worktrees exist
- Detached HEADs remain
- Stale branches survive past relevance
- Attempts overlap in filesystem state
- Production state is ambiguous

## Evidence

- Commit: `e7c88aa` — "feat: add attempt:cleanup command for automatic worktree/branch pruning"
- Commit: `5278f2f` — "docs: encode epistemic hygiene as canonical principle"
- Document: `/canon/odd/appendices/repo-truth.md`
- Problem observed: Old worktrees and branches accumulated, making repo state untrustworthy
