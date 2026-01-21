# Agent Skill Lane Ledger

Append-only product memory for the `agent-skill` lane.
Records outcomes (champions, merges, deployments) without turning them into canon.

---

## Entry — PRD v1.1 Champion

- Date: 2026-01-20
- PRD: v1.1
- Epoch: E0003 (evidence-first)
- Champion: attempt-001
- Attempt path: `v1.1/attempts/attempt-001/`

### Deliverable

- **Pack**: `v1.1/dist/prd-guide-pack.md`
- **Size**: ~12K tokens (45KB, 1838 lines)
- **Sources**: 7 canon + guidance documents compiled

### What worked

- Compiled pack approach produces portable, self-contained context artifact.
- Interactive guidance instructions transform static docs into conversation flow.
- 7-stage PRD creation process covers outcomes, criteria, constraints, evidence.
- Token budget (~12K) is reasonable for context injection (~6-12% of typical windows).

### What didn't

- Initial implementation scattered files across repo (infra/, public/_compiled/, docs/PRD/).
- Had to reorganize to consolidate everything under products/agent-skill/.

### Learnings (1–3 bullets)

- Lane isolation matters: all artifacts for a lane should live in `products/<lane>/`.
- PRD-first, then implement: creating just the PRD before building prevents scope creep.
- Attempt structure preserves implementation as evidence, not production artifacts.

### Follow-up (one next action)

- Test pack with Claude Code on a real PRD creation session to validate interactive flow.

---

## Entry — PRD v1.2 Failed

- Date: 2026-01-20
- PRD: v1.2
- Epoch: E0003 (evidence-first)
- Status: FAILED
- Attempt path: `v1.2/attempts/attempt-001/`

### Objective

Add zero-friction public access to the compiled pack via a stable URL using website lane's Cloudflare Pages deployment.

### What happened

The PRD required modifying the website lane's build process (`infra/scripts/smart-build.js`) to copy the pack to website dist. This violates lane isolation — attempts cannot modify files outside their lane.

The mechanism was proven to work via mock testing within the attempt folder, but the PRD cannot be satisfied without cross-lane modification.

### What worked

- Mirroring repo structure in attempt folder for clean promotion path
- Mock website dist for lane-contained testing
- PROMOTION.md document for clear promotion instructions

### What didn't work

- Initial plan to modify infra directly (lane violation)
- Running test that wrote outside lane (lane violation)
- The PRD itself (requires cross-lane modification by design)

### Learnings (1–3 bullets)

- Lane isolation is absolute during attempts — not just for proposals, but for test execution too
- PRDs can have design flaws that violate constraints
- A lane cannot require modification of another lane's build process

### Follow-up (one next action)

- Create v1.2.1 PRD with lane-owned deployment approach.

---

## Entry — Lane Structure Migration

- Date: 2026-01-20
- Epoch: E0003 (evidence-first)
- Type: Infrastructure

### What changed

Migrated lane from flat structure to version-first structure:

**Before:**

```
products/agent-skill/
├── PRD.md
├── src/
├── dist/
└── attempts/
    └── prd-vX.Y/
```

**After:**

```
products/agent-skill/
├── README.md        # Lane overview
├── CONTRACT.md      # Formal structure/deviations
├── LEDGER.md        # This file
├── ROADMAP.md       # Vision document
├── prompts/
│   └── ATTEMPT_KICKOFF.md
├── v1.1/            # Version-first
│   ├── PRD.md       # Frozen
│   ├── src/
│   ├── dist/
│   └── attempts/
├── v1.2/            # Failed version
│   ├── PRD.md       # Frozen
│   └── attempts/
└── v1.2.1/          # Current
    └── PRD.md       # Active
```

### Why

- Versioned assets enable immutable releases
- Dependents can pin to specific versions
- Each version is fully self-contained
- Clear boundaries between version states

### Documented in

- `README.md` — Lane overview, file index, version table
- `CONTRACT.md` — Formal deviation from canon structure
