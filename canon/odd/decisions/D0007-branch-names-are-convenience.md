# D0007 — Branch Names Are Convenience, Provenance Lives in META

## Decision

Branch names are optional convenience for humans and tooling. The canonical record of "who made what" lives in `META.json`. Cloudflare and the attempt system must not depend on specific branch naming conventions.

## Status

**Active**

## Why

- Cursor manages worktrees and branches dynamically — we can't control names reliably
- Attempt numbers are assigned **after** finalize, not at branch creation
- Agents don't know their attempt number when they start
- Hardcoded branch patterns (like `attempt/prd-v0.2/a001`) were causing doc drift
- Cloudflare deploys any branch that builds — it doesn't parse branch names

## Consequences

- ✅ System is Cursor-proof and future-proof
- ✅ Branch naming can drift without breaking provenance
- ✅ Cloudflare config is simpler (just "any non-prod branch")
- ✅ Docs don't need updating when naming conventions change
- ⚠️ Humans can't infer provenance from branch names alone
- ⚠️ Must check `META.json` to know who made what

## Implementation

- Provenance schema: `.attempt.json` and `META.json` include `tool`, `agent`, `model`, `prd_version`, `run_id`, `git_head`
- Cloudflare: Configured to deploy all non-`prod` branches
- Docs: `CLOUDFLARE_CONFIG.md` describes deploy behavior, not branch naming

### What Gets Namespaced (Durable)

| Field | Location | Purpose |
|-------|----------|---------|
| `prd_version` | META.json | Which PRD |
| `tool` | META.json | cursor, vscode, cli |
| `agent` | META.json | Agent ID within tool |
| `model` | META.json | AI model identifier |
| `run_id` | META.json | Unique identifier |
| `git_head` | META.json | SHA at registration |

### What Does NOT Get Namespaced

- Branch names (convenience only)
- Folder names in worktrees
- Cloudflare subdomain slugs

## Evidence

- Commit: `15dfa26` — "feat: add --tool flag to provenance tracking"
- Document: `/docs/CLOUDFLARE_CONFIG.md` — "Branch names are optional convenience"
- Problem observed: Docs assumed `attempt/prd-v0.2/a001` format, but Cursor doesn't create branches that way
