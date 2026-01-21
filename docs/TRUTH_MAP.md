# Truth Map

> **Purpose:** This document identifies the single authoritative source for each category of truth in this repository. If something is not listed here, it is not authoritative.

---

## Authoritative Sources

| Domain | Authoritative Source | Notes |
|--------|---------------------|-------|
| **Deploy workflow** | `/docs/CLOUDFLARE_CONFIG.md` | Branch roles, promotion, Cloudflare setup |
| **Attempt workflow** | `/docs/ATTEMPTS.md` | Lifecycle, META schema, finalization |
| **Agent kickoff** | `/docs/PROMPT_ATTEMPT_KICKOFF.txt` | The contract agents receive |
| **Active PRD** | `/docs/PRD.md` | Current hypothesis being tested |
| **Content manifest** | `/public/content/manifest.json` | Generated from per-file frontmatter; what exists, disclosure tiers, UI spine |
| **Decision log** | `/odd/decisions/` | Durable decisions (ADR-lite) |

---

## Branch Roles (Canonical)

| Branch | Role | Deploys To |
|--------|------|------------|
| `prod` | **Production** — only champions go here | klappy.dev (production) |
| `main` | **Lab notebook** — experiments, history, artifacts | Preview only |
| `*` (any other) | **Attempt sandboxes** — ephemeral agent workspaces | Preview only |

> **Invariant:** You never nuke `prod`. You may nuke `/src` on agent branches freely.

---

## Current Attempt Model (Canonical)

| Step | Command | What It Does |
|------|---------|--------------|
| 1 | `attempt:register` | Captures provenance (agent, model, tool, git SHA) |
| 2 | `attempt:nuke` | Deletes `/src` — guarantees blank slate |
| 3 | (agent builds) | Implementation from scratch |
| 4 | `attempt:finalize` | Assigns `attempt-001`, `attempt-002`, etc. |
| 5 | `attempt:promote` | Merges champion to `main`, fast-forwards `prod` |

> **Invariant:** Register first to capture provenance. Nuke immediately after to guarantee independence.

---

## Deprecated Terminology (Do Not Use)

| Old Term | Replaced By | Notes |
|----------|-------------|-------|
| `ATTEMPT_REGISTRY.json` | `attempt:finalize` | Numbers assigned at completion, not reservation |
| `attempt:reserve` | `attempt:register` | Registration captures provenance, not just a number |
| `attempt:reset` | `attempt:nuke` | Nuke is explicit; reset was ambiguous |
| "main is production" | "`prod` is production" | D0001 decision |

---

## How to Use This Document

1. **If two docs conflict**, the one listed in "Authoritative Sources" wins.
2. **If you find drift**, fix it or flag it — don't propagate the error.
3. **If you're adding new truth**, update the authoritative source, not a satellite doc.

---

## See Also

- [D0001: prod Branch Is Production](/docs/decisions/D0001-prod-branch-is-production.md)
- [D0007: Branch Names Are Convenience](/docs/decisions/D0007-branch-names-are-convenience.md)
- [D0008: Register Before Nuke](/docs/decisions/D0008-register-before-nuke.md)
