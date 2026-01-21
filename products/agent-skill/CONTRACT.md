# Agent Skill Lane Contract

Formal documentation of structure, behavior, and deviations from canon for the agent-skill lane.

---

## Structure Deviation

This lane uses **version-first** folder organization instead of canon default.

### Canon Default

```
products/<lane>/
├── PRD.md
├── src/
├── dist/
└── attempts/
    └── prd-vX.Y/
        └── attempt-NNN/
```

### This Lane

```
products/agent-skill/
├── README.md
├── CONTRACT.md
├── ATTEMPT_KICKOFF.md  # One-liner → active version's KICKOFF
├── vX.Y/
│   ├── KICKOFF.md      # Detailed attempt instructions for this version
│   ├── PRD.md          # Frozen PRD for this version
│   ├── src/            # Source files for this version
│   ├── dist/           # Compiled output for this version
│   └── attempts/       # Attempts against this version's PRD
│       └── attempt-NNN/
```

### Rationale

1. **Immutable releases**: Published assets are versioned by PRD version and persist indefinitely
2. **Dependent stability**: Consumers can pin to specific versions (e.g., `v1.1/dist/prd-guide-pack.md`)
3. **Clear boundaries**: Each version is fully self-contained
4. **Parallel development**: Multiple versions can evolve independently

---

## Publishing Rules

1. Each version's `dist/` folder contains the compiled output
2. Each `dist/` folder has a `README.md` explaining what's inside and how to use it
3. Versions are **immutable** once published — bug fixes require new versions
4. Meta files (`_meta/`) provide provenance for compiled artifacts

---

## Kickoff Pattern

1. `ATTEMPT_KICKOFF.md` at lane root is a minimal one-liner pointing to active version
2. Each version has its own `KICKOFF.md` with detailed shaping instructions
3. Version KICKOFF is frozen when version is frozen (for auditability)
4. New versions get new KICKOFF.md that can evolve independently

---

## Deployment

This lane owns its own Cloudflare Pages deployment (not shared with website lane).

- **Project**: `klappy-dev-agent-skill`
- **Production domain**: `https://agent-skill.klappy.dev/`
- **Production URL pattern**: `https://agent-skill.klappy.dev/vX.Y/<asset>`
- **Main branch preview**: `https://main.klappy-dev-agent-skill.pages.dev/`
- **Branch preview pattern**: `https://<deployment-id>.klappy-dev-agent-skill.pages.dev/`
- **Isolation**: Full lane ownership, no cross-lane dependencies

### Finding Preview URLs

During PR review, get the deployment ID from `gh pr checks`:
```
Cloudflare Pages: klappy-dev-agent-skill  pass  https://dash.cloudflare.com/.../<deployment-id>
```
Then construct: `https://<first-8-chars>.klappy-dev-agent-skill.pages.dev/`

---

## Constraints

In addition to canon constraints, this lane observes:

1. **Lane isolation during attempts**: Test execution stays within attempt folder
2. **No cross-lane modification**: PRDs cannot require modifying other lanes
3. **Version immutability**: Once a version is published, it cannot be changed
4. **INSTRUCTIONS.md is ephemeral**: Generated per-attempt in the attempt folder, never persisted in `src/` or version folders
5. **Verify before CHAMPION**: No attempt may be marked CHAMPION until HTTP 200 verified on deployed preview URL

---

## Learnings That Shaped This Contract

### v1.1 (2026-01-20)

- Lane isolation matters: all artifacts should live in `products/<lane>/`
- Compiled pack is like compiled code — source in `src/`, output in `dist/`

### v1.2 (2026-01-20) — Failed

- PRDs can have design flaws that violate constraints
- Test execution must stay contained — even "tests" can't write outside the attempt folder
- A lane cannot require modification of another lane's build process

### v1.2.1 Planning (2026-01-20)

- Version-first structure enables immutable releases
- Each version needs its own README for consumer guidance
- Antifragile documentation (README) beats brittle manifests (JSON)

### v1.2.2 (2026-01-21) — Failed

- INSTRUCTIONS.md was being persisted when it should be ephemeral
- Compile plans lived in central `infra/` instead of lane
- ODD formula violated: agents should only need Pack + CONTRACT + PRD
- Don't steer a miss — when fundamentals are wrong, fail and restart clean

### v1.2.3 (2026-01-21) — Champion

- INSTRUCTIONS.md generated per-attempt in attempt folder (ephemeral)
- Verify deployment HTTP 200 BEFORE claiming CHAMPION
- Cloudflare preview URLs use deployment ID from PR checks
- Clean restart after v1.2.2 failure (didn't steer a miss)

---

## Interface Contracts

This lane MUST remain compatible with:

- manifest >=2.0.0 <3.0.0
- attempt-cli >=2.0.0 <3.0.0

This lane is allowed to have no UI and is not required to satisfy build-output unless it produces a deployable artifact.

---

## Lane Decisions

Lane-specific architecture decisions are documented in [decisions/](decisions/index.md).

These decisions may override canon defaults with documented rationale. Successful patterns may be proposed for elevation to canon.
