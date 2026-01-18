# Interfaces

Interfaces are the repository's **compatibility contracts**.

They are the only documents that use **semantic versioning** (semver) by default.

Everything else (attempts, internal docs, implementation) may evolve freely, but must remain compatible with the published interface contracts or bump the appropriate major version.

---

## What is an Interface Contract?

An interface contract is a stable promise that other systems, agents, or humans may depend on.

Examples:

- **Manifest schema** (`/public/content/manifest.json`)
- **Build output contract** (`products/<lane>/dist` shape required for deployment)
- **Attempt tooling contract** (CLI flags + output files like `.attempt.json`, `META.json`)
- **MCP surface** (tools/endpoints/resources and their response schema)

---

## Semver Rules (Repo Policy)

We use semver only where compatibility matters.

- **MAJOR (X.0.0):** breaking change that requires downstream updates
- **MINOR (0.Y.0):** backwards-compatible additions
- **PATCH (0.0.Z):** clarifications, bug fixes, tighter wording that does not invalidate previously valid implementations

---

## Scope Boundaries

- Attempts are **observations**, not releases.
- Lanes are **products** (each lane may have its own semver).
- Canon is **shared truth**, but not an interface unless explicitly declared as one.

---

## Interface Contracts

- [Manifest Contract](./manifest/CONTRACT.md)
- [Build Output Contract](./build-output/CONTRACT.md)
- [Attempt CLI Contract](./attempt-cli/CONTRACT.md)
- [MCP Contract](./mcp/CONTRACT.md)
