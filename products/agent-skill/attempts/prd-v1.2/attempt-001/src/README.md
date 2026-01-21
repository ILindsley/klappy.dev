# Agent Skill — Source

This lane produces compiled packs for AI agent consumption.

## Public URL

The compiled pack is publicly available at:

**https://klappy.dev/packs/agent-skill/prd-guide-pack.md**

No clone or build required - just copy the content from the URL.

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

1. Copied from the public URL (no build required)
2. Pasted into any LLM context (Claude Code, Cursor, etc.)
3. Used as a system prompt foundation
4. Included in CLAUDE.md or similar config files

The pack guides AI agents through interactive PRD creation using ODD principles.
