# Agent Skill v1.1 — Source

Source files for the PRD Guide compiled pack.

## Files

| File | Purpose |
|------|---------|
| `INSTRUCTIONS.md` | Interactive guidance for PRD creation |
| `compile-plan.json` | Defines sources and compilation mode |

## Build

To compile the pack:

```bash
# From repo root
npm run lane:compile -- --lane agent-skill --pack prd-guide
```

This produces:

- `../dist/prd-guide-pack.md`
- `../dist/_meta/prd-guide-COMPILE_META.json`

## Sources

The compile plan concatenates these canon documents with the interactive instructions:

1. `canon/odd/manifesto.md` - Philosophy foundation
2. `canon/constraints.md` - Baseline assumptions
3. `canon/decision-rules.md` - Decision heuristics
4. `canon/definition-of-done.md` - Completion criteria
5. `canon/self-audit.md` - Review checklist
6. `docs/PRD/PRD_TEMPLATE.md` - PRD structure
7. `INSTRUCTIONS.md` - Interactive guidance (this folder)

## Usage

The compiled pack can be:

1. Pasted into any LLM context (Claude Code, Cursor, etc.)
2. Used as a system prompt foundation
3. Included in CLAUDE.md or similar config files

The pack guides AI agents through interactive PRD creation using ODD principles.
