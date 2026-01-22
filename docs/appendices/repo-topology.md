---
uri: klappy://docs/appendices/repo-topology
title: "Repository Topology"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: semi_stable
tags: ["odd", "topology", "structure", "decoupling"]
---

# Repository Topology

> What lives where, what changes when, and how concerns stay decoupled.

## Description

The repository separates Application Plane (disposable per attempt), Content Plane (evolves independently), and Infrastructure Plane (persists across attempts). Each product lane owns its implementation under `products/<lane>/src/` with no root-level `/src/` directory. This topology makes restartability cheap by keeping app disposable, content accumulating, infrastructure persisting, and attempts archived.

## Outline

- Why This Appendix Exists
- Core Topology
- What Lives Where
- What Changes When
- Source of Truth
- One Active App Per Lane
- Generated vs Source
- Deployment Preservation
- Summary

---

## Content

**Status:** Orientation  
**Audience:** Internal / Canon  
**Scope:** What lives where and what changes when

---

## Why This Appendix Exists

This appendix answers:
- "Where does stuff go?"
- "What moves vs what stays stable?"
- "What is allowed to change without triggering a new attempt?"

It encodes the decoupling between App, Content, and Infrastructure planes.

---

## Core Topology

```
/products/<lane>/src/           # Lane application (disposable per attempt)
/products/<lane>/dist/          # Lane build output (generated)
/products/<lane>/attempts/      # Lane attempts (sealed, immutable after seal)
/canon/                         # Canon documents (evolves independently)
/odd/                           # ODD public docs (evolves independently)
/about/                         # About docs (evolves independently)
/projects/                      # Project docs (evolves independently)
/infra/                         # Infrastructure (persists across attempts)
/docs/                          # Operational docs + PRD versions
/attempts/                      # LEGACY (read-only, see /attempts/README.md)
/public/content/                # Generated (by sync script)
/dist/                          # Legacy/transitional mirror (generated)
```

> **Lane-contained architecture:** Each product lane owns its own app plane under `products/<lane>/src/` and its attempts under `products/<lane>/attempts/`. There is no root-level `/src/` directory. Root `/attempts/` is legacy.

---

## What Lives Where

### Application Plane (`products/<lane>/src/`)

**Disposable per attempt. Lane-scoped.**

Each product lane (website, ai-navigation, agent-skill) has its own application plane:
- `products/website/src/`
- `products/ai-navigation/src/`
- `products/agent-skill/src/`

Contains:
- UI components
- Routing logic
- State management
- Rendering code

This folder can be deleted and rebuilt from scratch for each attempt via `attempt:nuke --lane <lane>`.

### Content Plane (`/canon/`, `/odd/`, `/about/`, `/projects/`)

**Evolves independently of attempts.**

Contains:
- Canon documents
- ODD philosophy
- About pages
- Project documentation

Content changes do not require a new attempt.  
Content is synced to `/public/content/` for the webapp.

### Infrastructure Plane (`/infra/`)

**Persists across attempts.**

Contains:
- Build scripts
- Sync scripts
- Verification scripts
- Deployment configuration

Infrastructure changes rarely.  
When it does, the change benefits all future attempts.

### PRD Versions (`/docs/PRD/`)

**Living drafts.**

Contains:
- PRD drafts and working versions
- PRD template

These are editable until frozen into an attempt.

### Sealed Attempts (`/products/<lane>/attempts/`)

**Lane-contained. Immutable after seal.**

Contains:
- Frozen PRD per version (`prd-vX.Y/PRD.md`)
- Attempt records (`attempt-NNN/`)
- Evidence bundles

Once sealed, these folders are not modified.

Note: Root `/attempts/**` is legacy (read-only). New attempts are lane-contained.

---

## What Changes When

| Change Type | Location | Triggers New Attempt? |
|-------------|----------|----------------------|
| Fix a typo in Canon | `/canon/` | No |
| Add a new ODD appendix | `/odd/` | No |
| Update build script | `/infra/` | No |
| Redesign the UI | `products/<lane>/src/` | Yes (same or new PRD) |
| Add new feature | `products/<lane>/src/` | Yes (requires PRD) |
| Add new content doc | `/about/`, `/projects/` | No |
| Change manifest schema | `/canon/meta/` | No (but may affect app) |

---

## Source of Truth

| Asset | Source | Synced To |
|-------|--------|-----------|
| Content manifest | per-file frontmatter in `/canon/`, `/odd/`, `/about/`, `/projects/` | `/public/content/manifest.json` |
| Markdown content | `/canon/`, `/odd/`, `/about/`, `/projects/` | `/public/content/` |
| PRD (frozen) | `/products/<lane>/attempts/prd-vX.Y/PRD.md` | N/A (immutable) |
| Evidence | `/products/<lane>/attempts/prd-vX.Y/attempt-NNN/evidence/` | N/A (immutable) |

---

## One Active App Per Lane

Each lane contains **one active app implementation** in `products/<lane>/src/`.

Prior attempts are preserved by:
- Git history
- Sealed attempt records in `/products/<lane>/attempts/`
- Commit SHAs in `META.json`

There are no `/app-v1`, `/app-v2` folders.  
There is one `products/<lane>/src/` per lane that gets rebuilt.

---

## Generated vs Source

| Type | Location | How Updated |
|------|----------|-------------|
| Source | `/canon/`, `/odd/`, `/about/`, `/projects/` | Manual edit |
| Generated | `/public/content/` | `npm run sync` |
| Generated | `/products/<lane>/dist/` | `npm run build -- --lane <lane>` |

**Rule:** Edit source, sync generates output.

---

## Deployment Preservation

Each attempt may be deployed as a preview during development. See [Attempt Lifecycle](/docs/appendices/attempt-lifecycle.md) for how deployments fit into the broader attempt model.

Attempt metadata (`META.json`) stores:
- `sealed_commit` — the commit SHA (truth)
- `deploy.production_url` — live site URL (if applicable)
- `deploy.preview_url` — branch/commit preview URL
- `deploy.provider` — deployment platform (e.g., cloudflare-pages)

Preview URLs are treated as evidence artifacts and must be recorded when sealing.

**Resurrection path:** To resurrect any attempt, check out the `sealed_commit` and redeploy. The attempt record contains everything needed.

Branches used during development are ephemeral. The durable record is the commit SHA and recorded URLs, not the branch name.

---

## Summary

- **App is disposable** — rebuilt per attempt
- **Content accumulates** — evolves independently
- **Infrastructure persists** — shared across attempts
- **Attempts are archived** — sealed and immutable
- **PRDs are versioned** — frozen when attempted
- **Deploys are recorded** — preview URLs preserved in metadata

This topology makes restartability cheap and keeps concerns decoupled.

---

**Status:** Appendix stable for v0.1
