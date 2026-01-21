# PRD: ODD Agent Skill — Canon Refresh

| Field           | Value            |
|-----------------|------------------|
| **PRD Version** | v1.2.2           |
| **Lane**        | agent-skill      |
| **Status**      | Active           |
| **Created**     | 2026-01-21       |
| **Author**      | Chris Klapp      |
| **Canon Version** | 0.5.3          |

---

## Interface Contracts

This lane MUST remain compatible with:

- manifest >=2.0.0 <3.0.0
- attempt-cli >=2.0.0 <3.0.0

---

## Objective

Recompile the PRD guide pack against canon v0.5.3 to include the Memory Architecture proposal and related updates.

---

## Background

**v1.2.1 delivered**: Lane-owned Cloudflare Pages deployment with versioned, immutable asset URLs.

**v1.2.2 patches v1.2.1** with updated canon content:

- Canon bumped to v0.5.3 (Memory Architecture Proposal)
- Pack sources (manifesto, constraints, decision-rules, etc.) have been updated
- No changes to pack structure, INSTRUCTIONS.md, or distribution mechanism
- This is a content refresh, not a feature change

---

## In Scope (v1.2.2)

### From v1.2.1 (retained)

- Lane-owned Cloudflare Pages deployment
- Versioned asset URLs
- README.md per version folder
- No website lane dependency

### New in v1.2.2

- Recompiled pack against canon v0.5.3
- Updated source hashes in provenance header
- Updated `/latest/` to point to v1.2.2 pack

---

## Explicitly Out of Scope (v1.2.2)

- Changes to INSTRUCTIONS.md
- Changes to compile plan structure
- Changes to distribution architecture
- New features or workflow stages

---

## Success Criteria

- [ ] Pack recompiled with canon v0.5.3 sources
- [ ] Provenance header shows updated source hashes
- [ ] Pack available at versioned URL
- [ ] `/latest/` updated to serve v1.2.2 pack
- [ ] No behavioral changes to pack guidance

---

## Definition of Done

An attempt against this PRD is complete when:

### Compilation

- [ ] `npm run lane:compile -- --lane agent-skill --pack prd-guide` succeeds
- [ ] Output written to `v1.2.2/dist/prd-guide-pack.md`
- [ ] Provenance header shows canon v0.5.3 source hashes

### Distribution

- [ ] `public/agent-skill/latest/prd-guide-pack.md` updated
- [ ] Public URL verified with HTTP 200

### Verification

- [ ] Source hashes differ from v1.2.1 (canon changed)
- [ ] Pack content includes Memory Architecture references (via manifesto)

### Evidence Required

- [ ] Screenshot of successful compile output
- [ ] Diff showing updated source hashes
- [ ] Self-audit completed

---

## Canon Sources

The pack pulls from these canon files (all updated in v0.5.3 or earlier):

1. `canon/odd/manifesto.md` — Includes "Memory Is the Bottleneck" section
2. `canon/constraints.md`
3. `canon/decision-rules.md`
4. `canon/definition-of-done.md`
5. `canon/self-audit.md`
6. `docs/PRD/PRD_TEMPLATE.md`
7. `products/agent-skill/src/INSTRUCTIONS.md` — Unchanged

---

## Constraints

- **No functional changes**: This is a content refresh only
- **Same distribution**: Uses existing Cloudflare Pages setup
- **Traceability**: Canon version documented in PRD metadata

---

## Attempt Policy

This PRD may be attempted multiple times.

- Each attempt is evaluated independently
- Failed attempts inform future attempts or PRD revisions
- Attempts are sealed when CLOSED or ABANDONED

Attempts live at: `v1.2.2/attempts/attempt-NNN/`

---

## Related Documents

- v1.2.1 Champion: `../v1.2.1/attempts/attempt-001/`
- Canon Changelog: `/public/content/canon/CHANGELOG.md`
- Memory Architecture: `/canon/odd/appendices/memory-architecture.proposed.md`
