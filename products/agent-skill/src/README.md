# Agent Skill — Source

This lane produces compiled packs for AI agent consumption.

## Source Files

| File                | Purpose                               |
| ------------------- | ------------------------------------- |
| `INSTRUCTIONS.md`   | Interactive guidance for PRD creation |
| `compile-plan.json` | Defines sources and compilation mode  |

## Build

To compile the pack:

```bash
# From repo root
npm run lane:compile -- --lane agent-skill --pack prd-guide
```

This produces:

- `products/agent-skill/dist/prd-guide-pack.md`
- `products/agent-skill/dist/_meta/prd-guide-COMPILE_META.json`

## Usage

The compiled pack can be:

1. Pasted into any LLM context (Claude Code, Cursor, etc.)
2. Used as a system prompt foundation
3. Included in CLAUDE.md or similar config files

The pack guides AI agents through interactive PRD creation using ODD principles.
