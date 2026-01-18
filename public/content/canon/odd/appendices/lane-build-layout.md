# Lane Build Layout

This repository contains multiple **product lanes** that share Canon but must not collide in implementation output.

The core collision surfaces are:
- `/src` (implementation workspace)
- `products/<lane>/dist` (deployment artifact)

This document defines the lane-safe layout policy.

---

## Policy: One Lane Builds at a Time in a Worktree

Each attempt operates in its own branch/worktree. Within that sandbox:

- `/src` is disposable and lane-specific for that attempt.
- `products/<lane>/dist` is the output of that lane's build.

Because worktrees isolate filesystem state, lanes do not collide during development.

---

## Policy: Production Deployments Are Lane-Scoped

A single git repository may be deployed multiple times (e.g., Cloudflare Pages projects), each targeting:

- a specific lane
- a specific branch (`prod/<lane>` or similar)

This prevents one lane's deployment from overwriting another.

---

## Recommended Deployment Model (Least Brittle)

Create one Cloudflare Pages project per lane:

- `klappy-website` → deploys lane `website`
- `klappy-ai-navigation` → deploys lane `ai-navigation` (when it becomes deployable)
- `klappy-agent-skill` → deploys lane `agent-skill` (if it has a deployable surface)

Each Pages project selects its own production branch.

This avoids requiring a single repo-level `/dist` to represent multiple products simultaneously.

---

## What This Means for `/main` and `/prod`

- `main` is the aggregation branch for artifacts and evaluation history.
- Production branches are lane-specific (implementation detail, but must be stable).

Promotion updates the lane's production branch only.

---

## Invariant

A lane must be promotable without affecting any other lane's production surface.

If promoting lane A changes lane B's production outcome, the layout is invalid.
