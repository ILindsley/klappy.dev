# Agent Skill Lane Roadmap

Living document capturing the evolution vision for the agent-skill lane.

This is not a commitment — it's a sketch that evolves as we learn.

> **Note:** This roadmap tracks *vision*, not *status*. For what actually happened (champions, failures, learnings), see **[history/](./history/)**.

---

## Versioning Strategy

- **v1.x** = Pack content (ODD workflow stages)
- **v2.x** = Presentation layer (UI/showcase)

Each workflow stage is a minor version bump (additive, non-breaking).

---

## v1.1 — PRD Creation Guidance

**Location**: `v1.1/`

A compiled pack (`prd-guide-pack.md`) that enables AI agents to interactively guide humans through creating ODD-aligned PRDs.

**Target outcome**: Pack available locally after build

**Friction level**: Clone repo, run build, copy pack

---

## v1.2 — Distribution (Website Lane)

**Location**: `v1.2/`

Zero-friction public access via website lane's Cloudflare Pages deployment.

**Target outcome**: Pack available at public URL via website deployment

**Friction level**: Copy from URL

**Why it didn't work**: PRD required cross-lane modification (website build process), which violates lane isolation. See [history/H0002](./history/H0002-v1.2-failed.md) for details.

---

## v1.2.1 — Distribution (Lane-Owned)

**Location**: `v1.2.1/`

Patches v1.2 with a lane-owned approach:

- Agent-skill lane owns its own Cloudflare Pages deployment
- Versioned asset URLs (e.g., `/v1.1/prd-guide-pack.md`)
- `/latest/` convention pointing to current champion
- No website lane dependency

**Target outcome**: Pack available at `https://agent-skill.klappy.dev/latest/prd-guide-pack.md`

**Friction level**: Copy from URL

---

## v1.2.2 — Canon Content Refresh

**Location**: `v1.2.2/`

Patches v1.2.1 with updated canon content (v0.5.3):

- Recompile pack against canon v0.5.3
- Includes Memory Architecture proposal (manifesto references)
- No functional changes to pack behavior or distribution
- Documents canon version for traceability

**Target outcome**: Pack reflects canon v0.5.3 content

**Friction level**: Same as v1.2.1 (copy from URL)

---

## v1.3 — Attempt Execution Guidance

Add guidance for executing attempts against PRDs. Extends the pack from "create PRD" to "create PRD + execute attempt."

**Potential additions**:

- Attempt folder structure guidance
- META.json requirements
- Evidence gathering prompts
- Lane isolation rules
- Test containment (mock structures)

**Target outcome**: Agent can guide full PRD → Attempt workflow

---

## v1.4 — Evidence Gathering Guidance

Add guidance for producing and organizing evidence during attempts.

**Potential additions**:

- Evidence types by task (screenshots, logs, test output)
- Evidence folder structure
- Provenance requirements
- Visual proof standards

**Target outcome**: Agent ensures attempts produce proper evidence

---

## v1.5 — Failure Detection Guidance

Add guidance for detecting and documenting failures, including PRD design flaws.

**Potential additions**:

- Failure vs. abandoned distinction
- LEARNINGS.md structure
- PRD conflict detection (like our v1.2 experience)
- When to propose new PRD version vs. retry

**Target outcome**: Agent can recognize and document failures constructively

---

## v2.0 — Showcase Page

A webpage that showcases the pack with good UX for discovery and use.

**Potential features**:

- Syntax-highlighted pack preview
- Collapsible sections (manifesto, constraints, instructions, etc.)
- "Copy to clipboard" button
- Token count display
- Last updated / provenance info
- Link to source (for transparency)

**Target outcome**: Visitors can discover, preview, and copy the pack from a nice UI

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

## How to Use This Document

1. **Before starting a version**: Read the vision here, refine it, then write the PRD
2. **After completing a version**: Add entry to [history/](./history/) (not here)
3. **When ideas emerge**: Add to "Future Ideas" section above
4. **Periodically**: Review and prune ideas that no longer make sense

This roadmap informs PRDs but does not replace them. PRDs are the contract; this is the vision.
