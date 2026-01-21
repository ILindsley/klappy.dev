# Agent Skill Lane Roadmap

Living document capturing the evolution vision for the agent-skill lane.

This is not a commitment — it's a sketch that evolves as we learn.

> **Note:** This roadmap tracks *vision*, not *status*. For what actually happened (champions, failures, learnings), see **[history/](./history/)**.

---

## Versioning Strategy

- **v1.1** = Initial pack (PRD guidance)
- **v1.2.x** = Distribution + patches (deployment, canon refreshes)
- **v1.3** = PRD Elicitation Enhancement (interview mechanics, stage typing)
- **v1.4** = Pack Architecture v2 (multi-pack, tiered compilation)
- **v1.5+** = Role-specific packs (Attempt Agent, Verification Agent)
- **v2.x** = Presentation layer (UI/showcase)

Minor versions add features; patch versions fix issues or refresh content.

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

**Why it didn't work**: INSTRUCTIONS.md was being persisted when it should be ephemeral, and compile plans lived in central `infra/` instead of lane. ODD formula violated. See [history/H0005](./history/H0005-v1.2.2-failed.md) for details.

---

## v1.2.3 — Canon Refresh + ODD Compliance

**Location**: `v1.2.3/`

Patches v1.2.2 with ODD compliance + canon v0.5.4:

- INSTRUCTIONS.md treated as ephemeral (generated per-attempt)
- Compile plan lives in lane (`src/compile-plan.json`)
- Pack includes folder READMEs for scannable summaries
- Clean restart with corrected architecture

**Target outcome**: Pack reflects canon v0.5.4 with proper ODD compliance

**Friction level**: Same as v1.2.1 (copy from URL)

---

## v1.2.4 — Canon Refresh v0.8.0

**Location**: `v1.2.4/`

Patches v1.2.3 with canon v0.8.0:

- Fixes stale ODD paths (`canon/odd/` → `odd/`) from 0.6.0 elevation
- Includes Three-Tier Hierarchy formalization
- Adds Cognitive Partitioning concept
- Adds Tool Specialization appendix

**Target outcome**: Pack reflects canon v0.8.0 with correct paths

**Friction level**: Same as v1.2.1 (copy from URL)

---

## v1.3 — PRD Elicitation Enhancement

**Location**: `v1.3/`

Addresses the gap between "understanding ODD" and "extracting a PRD from a human." The pack teaches ODD philosophy well, but v1.2.x lacked the interrogative mechanics to guide elicitation.

**Key features**:

- **Agent Role Declaration**: Explicit framing that the agent is an elicitation system, not a PRD author
- **PRD Stage Typing**: Classification gate before questioning (PoC, Feature, Fix, Product slice, Refactor)
- **Formal Interview Loop**: Resequenced stages with Orient, Inventory, Constraint Surfacing before Outcome Framing
- **Asset Intake Contract**: Formalized guidance for what assets to request and how to proceed with partial information
- **Ambiguity Capture**: Explicit stage for documenting what remains unclear or contested

**Interview Loop (resequenced)**:

| Phase | Purpose |
|-------|---------|
| 0. Stage Identification | What type of PRD is this? |
| 1. Orient | What are we trying to learn or change? |
| 2. Inventory | What assets already exist? |
| 3. Constraint Surfacing | Time, scope, reversibility, risk |
| 4. Outcome Framing | What would "better" look like? |
| 5. Evidence Definition | How will we know? |
| 6. Ambiguity Capture | What is still unclear or contested? |
| 7. Draft Assembly | Assemble the PRD |

**Target outcome**: Agents using the pack ask about PRD type and existing assets before jumping to outcomes

**Friction level**: Same as v1.2.x (copy from URL)

**Why this matters**: The pack was conceptually sound but operationally incomplete. This version makes it interrogative, not just informational.

---

## v1.4 — Pack Architecture v2

Major architectural upgrade enabling role-specific agent packs with tiered content inclusion.

**Key features**:

- **Multi-pack support**: Single compile plan produces multiple role-specific packs
- **Tiered compilation**: 
  - Tier 1 (Core): Full file content
  - Tier 2 (Context): Title, subtitle, description, outline only
  - Tier 3 (Index): Title + subtitle (skip if already in README index)
- **Role-specific instructions**: Each pack gets tailored guidance
- **Progressive disclosure**: Agents get what they need without token bloat

**Compile plan schema v2**:

```json
{
  "packs": {
    "prd-guide": {
      "tier1_full": [...],
      "tier2_summary": [...],
      "tier3_index": [...],
      "instructions": "instructions/PRD_AGENT.md"
    }
  }
}
```

**Target outcome**: Architecture supports multiple specialized packs; PRD Agent Pack recompiled using tiered approach

**Why this matters**: Cognitive Partitioning applied to agent context — each agent role gets precisely the context it needs

---

## v1.5 — Attempt Agent Pack

Role-specific pack for agents executing attempts against PRDs.

**Tier 1 (Full)**:

- Attempt lifecycle
- Lane isolation rules
- META.json requirements
- Definition of done

**Tier 2 (Summary)**:

- Progressive elevation (memory architecture)
- Online evidence requirements
- Deploy evidence rules

**Tier 3 (Index)**:

- ODD decisions (already in README index)
- History patterns

**Instructions focus**: Execute attempts, produce evidence, know when to stop

**Target outcome**: `attempt-guide-pack.md` available at public URL

---

## v1.6 — Verification Agent Pack

Role-specific pack for agents evaluating and verifying work.

**Tier 1 (Full)**:

- Definition of done
- Self-audit checklist
- Visual proof standards
- Evidence policy

**Tier 2 (Summary)**:

- Failure detection patterns
- LEARNINGS.md structure
- PRD conflict detection

**Tier 3 (Index)**:

- ODD appendices (failure-driven modularity, etc.)

**Instructions focus**: Verify claims, detect failures, enforce evidence standards

**Target outcome**: `verification-guide-pack.md` available at public URL

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

- **MCP server**: Expose packs via Model Context Protocol
- **Cursor SKILL.md format**: Package packs as Cursor skills
- **Pack versioning**: Semantic versions for packs, backward compatibility
- **Analytics**: Track pack usage (if hosted)
- **Feedback loop**: Users can report issues with pack guidance
- **Self-improvement guidance**: Pack that helps agents improve packs themselves
- **Dynamic tier selection**: Agents request tier depth based on task complexity
- **Cross-pack references**: Packs can reference other packs for handoff workflows

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
