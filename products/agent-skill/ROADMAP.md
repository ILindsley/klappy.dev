# Agent Skill Lane Roadmap

Living document capturing the evolution vision for the agent-skill lane.

This is not a commitment - it's a sketch that evolves as we learn.

---

## Versioning Strategy

- **v1.x** = Pack content (ODD workflow stages)
- **v2.x** = Presentation layer (UI/showcase)

Each workflow stage is a minor version bump (additive, non-breaking).

---

## v1.1 - PRD Creation Guidance (CHAMPION)

**Status**: Complete  
**Location**: `v1.1/`

Delivered a compiled pack (`prd-guide-pack.md`) that enables AI agents to interactively guide humans through creating ODD-aligned PRDs.

**Outcome**: Pack exists at `v1.1/dist/prd-guide-pack.md`

**Friction level**: Clone repo, run build, copy pack

---

## v1.2 - Distribution (FAILED)

**Status**: Failed  
**Location**: `v1.2/`

Attempted to add zero-friction public access via website lane's Cloudflare Pages deployment.

**Outcome**: PRD required cross-lane modification (website build process), which violates lane isolation.

See `v1.2/attempts/attempt-001/LEARNINGS.md` for full analysis.

---

## v1.2.1 - Distribution (CURRENT)

**Status**: PRD written, awaiting attempt  
**Location**: `v1.2.1/`

Patches v1.2 with a lane-owned approach:

- Agent-skill lane owns its own Cloudflare Pages deployment
- Versioned asset URLs (e.g., `/v1.1/prd-guide-pack.md`)
- `/latest/` convention pointing to current champion
- No website lane dependency

**Outcome**: Pack available at `https://agent-skill.klappy.dev/latest/prd-guide-pack.md`

**Friction level**: Copy from URL

---

## v1.3 - Attempt Execution Guidance (FUTURE)

**Status**: Vision only

Add guidance for executing attempts against PRDs. Extends the pack from "create PRD" to "create PRD + execute attempt."

**Potential additions**:

- Attempt folder structure guidance
- META.json requirements
- Evidence gathering prompts
- Lane isolation rules
- Test containment (mock structures)

**Outcome**: Agent can guide full PRD → Attempt workflow

---

## v1.4 - Evidence Gathering Guidance (FUTURE)

**Status**: Vision only

Add guidance for producing and organizing evidence during attempts.

**Potential additions**:

- Evidence types by task (screenshots, logs, test output)
- Evidence folder structure
- Provenance requirements
- Visual proof standards

**Outcome**: Agent ensures attempts produce proper evidence

---

## v1.5 - Failure Detection Guidance (FUTURE)

**Status**: Vision only

Add guidance for detecting and documenting failures, including PRD design flaws.

**Potential additions**:

- Failure vs. abandoned distinction
- LEARNINGS.md structure
- PRD conflict detection (like our v1.2 experience)
- When to propose new PRD version vs. retry

**Outcome**: Agent can recognize and document failures constructively

---

## v2.0 - Showcase Page (FUTURE)

**Status**: Vision only

A webpage that showcases the pack with good UX for discovery and use.

**Potential features**:

- Syntax-highlighted pack preview
- Collapsible sections (manifesto, constraints, instructions, etc.)
- "Copy to clipboard" button
- Token count display
- Last updated / provenance info
- Link to source (for transparency)

**Outcome**: Visitors can discover, preview, and copy the pack from a nice UI

**Friction level**: Click to copy

---

## Future Ideas (Unprioritized)

Captured here so we don't forget, not committed to any version:

- **MCP server**: Expose pack via Model Context Protocol
- **Cursor SKILL.md format**: Package as a Cursor skill
- **Pack versioning**: Semantic versions for packs, backward compatibility
- **Analytics**: Track pack usage (if hosted)
- **Feedback loop**: Users can report issues with pack guidance
- **Self-improvement guidance**: Pack that helps agents improve the pack itself

---

## Removed from This Lane

- **Try-It Chat Interface**: Moved to `ai-navigation` lane (AI helping humans navigate ODD). This lane produces the pack; ai-navigation consumes it for chat experiences.

---

## Learnings Log

Append learnings here as we complete versions:

### v1.1 Learnings (2026-01-20)

- Lane isolation matters: all artifacts should live in `products/<lane>/`
- PRD-first prevents scope creep
- Compiled pack is like compiled code - source in `src/`, output in `dist/`
- ~12K tokens is reasonable context budget (~6-12% of typical windows)

### v1.2 Learnings (2026-01-20) — FAILED

- Lane isolation is absolute during attempts — not just for proposals, but for test execution too
- PRDs can have design flaws that violate constraints
- Check PRD feasibility before implementing — if the PRD requires things that violate constraints, flag it immediately
- Mock structures prove mechanisms without crossing boundaries
- A lane cannot require modification of another lane's build process

### v1.2.1 Planning Learnings (2026-01-20)

- Version-first folder structure enables immutable releases
- Each version needs its own README for consumer guidance
- Antifragile documentation (README) beats brittle manifests (JSON)
- Lane-owned deployment ensures full isolation
- PRDs are immutable once an attempt runs — create new version for changes
- Upstream canon loading: pack should be loaded FIRST in kickoffs
- RTFM: Many "learnings" were actually canon we failed to read carefully

---

## How to Use This Document

1. **Before starting a version**: Read the vision, refine it, then write the PRD
2. **After completing a version**: Add learnings to the log
3. **When ideas emerge**: Add to "Future Ideas" section
4. **Periodically**: Review and prune ideas that no longer make sense

This roadmap informs PRDs but does not replace them. PRDs are the contract; this is the vision.
