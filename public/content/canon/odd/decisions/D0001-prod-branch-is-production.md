---
uri: klappy://canon/odd/decisions/D0001
title: "D0001: prod Branch Is Production"
audience: canon
exposure: internal
tier: 2
voice: neutral
stability: stable
tags: ["odd", "decisions", "branch", "deploy"]
---

# D0001 — `prod` Branch Is Production

## Decision

The `prod` branch is the sole source of production deployments. The `main` branch is the experiment ledger and history aggregation point, but never deploys to production directly.

## Status

**Active**

## Why

- Agents running experiments on `main` were accidentally nuking production code
- No clear separation between "what's live" and "what's being tested"
- Need a branch that is **never** touched by experiment tooling
- Production stability requires explicit, intentional promotion

## Consequences

- ✅ Production is protected from accidental nuke/reset operations
- ✅ `main` can be freely reset without affecting live site
- ✅ Promotion to production is explicit: merge main → prod
- ⚠️ Requires Cloudflare Pages configuration change (production branch = `prod`)
- ⚠️ Adds one extra step to the promotion workflow

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdPromote` merges to main, then fast-forwards prod)
- Config: `/docs/CLOUDFLARE_CONFIG.md` documents the branch mapping
- Contract: `/infra/contracts/build-output.md` defines what must be in `/dist`

## Evidence

- Commit: `15b5c2e` — "feat: environment hardening - prod branch, nuke safety, promote to prod"
- Commit: `0cce06d` — "fix: protect production - nuclear reset on main skips /src nuke by default"
- Problem observed: Production was nuked when running `attempt:reset` on `main`
