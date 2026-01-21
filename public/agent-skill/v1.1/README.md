# Agent Skill v1.1 — Distribution

This folder contains the compiled PRD Guide pack for AI agent consumption.

## What's Here

| File | Description |
|------|-------------|
| `prd-guide-pack.md` | The compiled pack (~12K tokens, 1838 lines) |
| `_meta/prd-guide-COMPILE_META.json` | Build provenance and source hashes |

## How to Use

### Option 1: Copy and Paste

1. Open `prd-guide-pack.md`
2. Copy the entire contents
3. Paste into your AI context (Claude Code, Cursor, ChatGPT, etc.)
4. Start your PRD creation conversation

### Option 2: Include in Config

Add the pack contents to your project's AI configuration:

- **Claude Code**: Include in `CLAUDE.md`
- **Cursor**: Include in `.cursorrules` or project rules
- **Other IDEs**: Include in system prompt or context files

## What Happens Next

Once the pack is in context, start your conversation with something like:

> "I want to create a PRD for [your product idea]"

The AI will guide you through:

1. Outcome discovery (what success looks like)
2. Success criteria (testable conditions)
3. Non-goals and scope (what's NOT included)
4. Constraints (assumptions and requirements)
5. Definition of done (evidence required)
6. Risks and tradeoffs
7. Draft assembly

## Pack Details

- **Token count**: ~12,000 (fits easily in 100K+ context windows)
- **Sources**: 7 documents (ODD canon + interactive instructions)
- **Champion attempt**: v1.1/attempts/attempt-001/

## Provenance

See `_meta/prd-guide-COMPILE_META.json` for:

- Build timestamp
- Git commit
- Source file hashes

This ensures you can verify the pack's integrity and trace its origin.

## Version

This is v1.1 of the PRD Guide pack. This version is **immutable**.

For updates, see newer versions in `../v1.2/`, `../v1.3/`, etc.
