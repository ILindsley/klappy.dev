# Agent Skill Lane

This lane produces compiled packs for AI agent consumption. The primary deliverable is a portable context artifact that enables any LLM to guide humans through ODD-aligned PRD creation.

## Current Champion

**v1.1** — PRD guide pack (~12K tokens)

**Public URL**: `https://main.klappy-dev-agent-skill.pages.dev/v1.1/prd-guide-pack.md`

## Quick Start

**Option 1: Public URL (no clone required)**
```
https://main.klappy-dev-agent-skill.pages.dev/latest/prd-guide-pack.md
```

**Option 2: Local file**
Copy the pack from `v1.1/dist/prd-guide-pack.md` and paste it into your AI context.

See the [usage README](https://main.klappy-dev-agent-skill.pages.dev/v1.1/README.md) for detailed instructions.

## Lane Files

| File | Purpose |
|------|---------|
| [CONTRACT.md](CONTRACT.md) | Formal structure, deviations from canon |
| [LEDGER.md](LEDGER.md) | Champion history and key learnings |
| [ROADMAP.md](ROADMAP.md) | Vision and future versions |
| [ATTEMPT_KICKOFF.md](ATTEMPT_KICKOFF.md) | One-liner pointing to active version's KICKOFF |
| [decisions/](decisions/README.md) | Lane-specific architecture decisions |

## Versions

| Version | Status | Description |
|---------|--------|-------------|
| [v1.1/](v1.1/) | Champion | Core PRD guide pack |
| [v1.2/](v1.2/) | Failed | Distribution attempt (PRD conflict) |
| [v1.2.1/](v1.2.1/) | Champion | Lane-owned Cloudflare Pages deployment |

## Structure

This lane uses a **version-first** folder structure (differs from canon default). See [CONTRACT.md](CONTRACT.md) for details.

```
products/agent-skill/
├── README.md              # You are here
├── CONTRACT.md            # Formal structure/deviations
├── LEDGER.md              # Champion log
├── ROADMAP.md             # Vision document
├── ATTEMPT_KICKOFF.md     # One-liner → active KICKOFF
├── decisions/             # Lane-specific ADRs
├── v1.1/                  # Version 1.1 (champion)
│   ├── KICKOFF.md         # Frozen attempt instructions
│   ├── PRD.md             # Frozen PRD
│   ├── src/               # Source files
│   ├── dist/              # Compiled output
│   └── attempts/          # Attempt history
├── v1.2/                  # Version 1.2 (failed)
│   ├── PRD.md             # Frozen PRD
│   └── attempts/          # Failed attempt evidence
└── v1.2.1/                # Version 1.2.1 (in progress)
    ├── KICKOFF.md         # Active attempt instructions
    └── PRD.md             # Active PRD
```

## Build

To compile a pack for a specific version:

```bash
# From repo root
npm run lane:compile -- --lane agent-skill --pack prd-guide
```

Note: Build configuration lives in each version's `src/compile-plan.json`.
