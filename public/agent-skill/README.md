# Agent Skill — Public Distribution

This folder contains compiled ODD packs for public consumption.

## URL Pattern

When deployed to Cloudflare Pages:

- **Latest**: `https://agent-skill.klappy.dev/latest/prd-guide-pack.md`
- **Versioned**: `https://agent-skill.klappy.dev/v1.1/prd-guide-pack.md`

## Structure

```
public/agent-skill/
├── README.md          # This file
├── latest/            # Always points to current champion
│   └── prd-guide-pack.md
├── v1.1/
│   ├── README.md
│   ├── prd-guide-pack.md
│   └── _meta/
└── v1.2/              # (future versions)
```

## Current Champion

**v1.1** — PRD Creation Guidance Pack

~12K tokens, works with any 100K+ context window LLM.

## How to Use

1. Fetch the pack from the URL
2. Paste into your AI context (Claude Code, Cursor, etc.)
3. Start your PRD creation conversation

See `v1.1/README.md` for detailed usage instructions.

## Versioning

- Versions are **immutable** once published
- `/latest/` always points to current champion
- Dependents can pin to specific versions for stability

## Source

This is the distribution output of the `agent-skill` product lane.

Source: `products/agent-skill/`
