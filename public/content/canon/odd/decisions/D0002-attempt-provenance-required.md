# D0002 — Attempt Provenance Required

## Decision

Every attempt must capture model provenance at registration time. If the model is unknown, proceed but flag the degraded provenance clearly.

## Status

**Active**

## Why

- If we can't tell which model produced which attempt, comparisons are contaminated
- "Unknown model" is not the same as "no provenance" — at least we know it's unknown
- Provenance must be captured at registration, not guessed later
- Enables meaningful comparison between different AI models/approaches

## Consequences

- ✅ Every attempt knows: who made it, what made it, where, when
- ✅ Branch names encode provenance: `run/v0.3/cursor-a/opus-45/abc123`
- ✅ META.json preserves provenance even after worktree is deleted
- ⚠️ Agents must provide `--agent` and `--model` flags
- ⚠️ Warning shown if model not provided (but doesn't block progress)

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdRegister` captures provenance)
- Prompt: `/docs/PROMPT_ATTEMPT_KICKOFF.txt` instructs agents to provide flags
- Schema: `.attempt.json` and `META.json` include provenance fields

### Provenance Fields

| Field | Source | Purpose |
|-------|--------|---------|
| `agent` | `--agent` flag | Human-friendly label (cursor-a, cursor-b) |
| `model` | `--model` flag | AI model identifier (opus-4.5, gpt-4o) |
| `git_head` | Auto-detected | SHA at registration time |
| `worktree_path` | Auto-detected | Filesystem location |
| `branch` | Auto-detected | Git branch name |
| `registered_at` | Auto-generated | ISO timestamp |

## Evidence

- Commit: `8e49616` — "feat: add model provenance tracking to attempt lifecycle"
- Problem observed: Multiple attempts existed but no way to know which AI model made which
