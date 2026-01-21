# ODD PRD Guide Pack — v1.2.4

This folder contains the ODD PRD Guide pack version 1.2.4.

## What's New in v1.2.4

- **Canon refresh to v0.8.0** — Updated all source content
- **Fixed ODD paths** — ODD was elevated from `/canon/odd/` to `/odd/` in canon 0.6.0
- **New content: Cognitive Partitioning** — Explains why reasoning systems must partition under pressure
- **New content: Tool Specialization** — Pattern for preserving reliability as tool availability increases

## Contents

- [`prd-guide-pack.md`](./prd-guide-pack.md) — The compiled pack (~15K tokens)

## Usage

### Option 1: Copy and Paste

Copy the entire contents of `prd-guide-pack.md` and paste into your AI context (Claude, ChatGPT, Cursor, etc.).

### Option 2: Direct URL

Use the public URL directly:
```
https://agent-skill.klappy.dev/v1.2.4/prd-guide-pack.md
```

## What This Pack Does

When loaded into an AI context, this pack transforms the AI into a collaborative PRD partner that:

1. **Guides outcome discovery** — Helps define what success looks like, not what to build
2. **Enforces testability** — Pushes back on vague or unmeasurable criteria
3. **Surfaces constraints** — Identifies assumptions that shape the solution
4. **Requires evidence** — Ensures the definition of done is verifiable
5. **Acknowledges tradeoffs** — Makes explicit what was sacrificed

## Pack Sources (13 files, canon v0.8.0)

| # | Source | Purpose |
|---|--------|---------|
| 1 | `canon/README.md` | Canon orientation, meta rules |
| 2 | `odd/README.md` | ODD public overview |
| 3 | `odd/manifesto.md` | Full ODD philosophy |
| 4 | `odd/cognitive-partitioning.md` | **NEW** Scaling pattern |
| 5 | `odd/appendices/README.md` | Portable appendices index |
| 6 | `odd/decisions/README.md` | ODD conceptual decisions |
| 7 | `canon/odd/appendices/tool-specialization.md` | **NEW** Tool isolation pattern |
| 8 | `canon/constraints.md` | Baseline assumptions |
| 9 | `canon/decision-rules.md` | Decision heuristics |
| 10 | `canon/definition-of-done.md` | Completion criteria |
| 11 | `canon/self-audit.md` | Review checklist |
| 12 | `docs/PRD/PRD_TEMPLATE.md` | PRD structure |
| 13 | `INSTRUCTIONS.md` | Interactive guidance (ephemeral) |

## Stability

This version is immutable. For the latest champion, use [`../latest/`](../latest/).

## Related

- [v1.2.3](../v1.2.3/) — Previous champion (canon v0.5.4)
- [Latest](../latest/) — Current champion (always updated)
- [Lane README](../../products/agent-skill/README.md) — Full lane documentation
