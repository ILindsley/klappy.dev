---
uri: klappy://docs/appendices
title: "Implementation Appendices"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: evolving
tags: ["docs", "appendices", "implementation", "reference", "index"]
---

# 📚 Implementation Appendices

Implementation-specific appendices that document how klappy.dev applies ODD concepts. These are reference implementation details, not portable methodology.

> **Relationship to ODD:** Portable concepts live in `/odd/appendices/`. This folder contains the klappy.dev-specific implementation of those concepts.

---

## 📁 Contents

### Attempt & Evidence

| File | Title | Summary |
|------|-------|---------|
| `attempt-lifecycle.md` | Attempt Lifecycle | How PRD versions, attempts, evidence, and deployments are preserved. Includes CLI commands and folder structure. |
| `evidence.md` | Evidence | Evidence requirements including `/_evidence/` path structure and `.attempt.json` schema. |
| `deploy-evidence.md` | Deploy Evidence | Why evidence must be in the build output. Cloudflare Pages serving requirements. |
| `online-evidence.md` | Online Evidence Requirement | Attempts are invalid without online preview URLs via Cloudflare Pages. |

### Compilation & Memory

| File | Title | Summary |
|------|-------|---------|
| `compilation.md` | Compilation | The process of producing derived packs. Includes `/public/_compiled/<lane>/` paths and npm commands. |
| `compiled-memory.md` | Compiled Memory | Lane-scoped, wipeable, auditable compressed artifacts with specific output paths. |
| `compilation-targets.md` | Compilation Targets | How compiled packs make the corpus usable with specific plan file paths. |
| `canonical-compression.md` | Canonical Compression | How derived, minimal working models are produced with `_compiled/` output locations. |
| `memory-architecture.proposed.md` | Memory Architecture | Memory as layered percolation with specific folder patterns. |
| `progressive-elevation.md` | Progressive Elevation & Decay | Five layers of portability with specific klappy.dev paths. |

### Repository Structure

| File | Title | Summary |
|------|-------|---------|
| `repo-topology.md` | Repository Topology | What lives where and what changes when. Complete folder structure. |
| `repo-truth.md` | Repository Truth | `attempt:cleanup` command and branch roles (`prod`, `main`, `attempt/*`). |
| `repo-truth-audit.md` | Repo Truth Audit | Specific files to read for epistemic audit. |
| `drift-checks.md` | Drift Checks | `npm run verify:contracts` and drift prevention with specific contracts. |

### Product Lanes

| File | Title | Summary |
|------|-------|---------|
| `product-lanes.md` | Product Lanes | The three lanes (website, ai-navigation, agent-skill) and their structure. |
| `lane-build-layout.md` | Lane Build Layout | How lanes avoid `/src` and `/dist` collisions with Cloudflare. |
| `lane-implementation-surfaces.md` | Lane-Scoped Implementation Surfaces | Each lane owns `products/<lane>/src` and `products/<lane>/dist`. |
| `epochs.md` | Epochs | Named periods including E0003 evidence requirements with Cloudflare specifics. |

---

## 🔧 What Makes These Implementation-Specific

These appendices contain:

- Absolute paths specific to this repository (`/products/`, `/docs/PRD.md`, `/infra/`)
- Specific CLI commands (`attempt:register`, `attempt:nuke`, `npm run verify:contracts`)
- Branch names specific to this workflow (`prod`, `main`, `attempt/*`)
- Tool-specific configuration (Cloudflare Pages, git worktrees)
- Lane names specific to klappy.dev (`website`, `ai-navigation`, `agent-skill`)

---

## 🧭 When to Read What

**Setting up a new lane?** Start with `product-lanes.md` and `lane-implementation-surfaces.md`.

**Understanding attempt workflow?** Read `attempt-lifecycle.md` and `evidence.md`.

**Building compilation packs?** Read `compilation.md`, `compiled-memory.md`, and `compilation-targets.md`.

**Debugging drift?** Read `drift-checks.md`, `repo-truth.md`, and `repo-truth-audit.md`.

---

## 🔗 Relationship to ODD Appendices

| ODD Appendix | Implementation Appendix | Relationship |
|--------------|------------------------|--------------|
| `/odd/appendices/evolution-not-automation.md` | `attempt-lifecycle.md` | Philosophy → Procedure |
| `/odd/appendices/failure-driven-modularity.md` | `product-lanes.md` | Concept → Structure |
| `/odd/appendices/quantum-development.md` | `attempt-lifecycle.md` | Theory → Practice |
| `/odd/appendices/alignment-reviews.md` | `repo-truth-audit.md` | What to review → How to audit |
