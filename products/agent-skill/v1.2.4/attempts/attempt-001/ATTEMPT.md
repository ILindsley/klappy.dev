# Attempt-001 — Canon Refresh v0.8.0

## Status: IN_PROGRESS

| Field | Value |
|-------|-------|
| **Lane** | agent-skill |
| **PRD Version** | v1.2.4 |
| **Attempt** | 001 |
| **Status** | IN_PROGRESS |
| **Epoch** | E0003-evidence-first-era |
| **Created** | 2026-01-21 |
| **Sealed** | — |

---

## Objective (from PRD)

Recompile the PRD guide pack against canon v0.8.0, fixing stale ODD paths from the 0.6.0 root-level elevation and incorporating new concepts (Cognitive Partitioning, Tool Specialization).

---

## Outcome

_Pending completion_

---

## Definition of Done Checklist

### Compilation

- [ ] Compile plan paths corrected (`odd/manifesto.md`, etc.)
- [ ] Compile succeeds using lane-owned `src/compile-plan.json`
- [ ] Output written to attempt's `evidence/` folder
- [ ] Provenance header shows canon v0.8.0 source hashes
- [ ] INSTRUCTIONS.md generated fresh (not copied from persisted source)

### Distribution

- [ ] `public/agent-skill/v1.2.4/prd-guide-pack.md` created
- [ ] `public/agent-skill/latest/prd-guide-pack.md` updated
- [ ] `public/agent-skill/latest/README.md` updated (version reference)
- [ ] Public URL verified with HTTP 200

### Verification

- [ ] Source hashes differ from v1.2.3 (paths changed, canon content changed)
- [ ] ODD paths in compile plan point to `/odd/` not `/canon/odd/`
- [ ] Pack content includes correct ODD manifesto from root level
- [ ] No persisted INSTRUCTIONS.md in `src/` or version folder

### Evidence Required

- [ ] Screenshot or log of successful compile output
- [ ] Diff showing updated paths in compile-plan.json
- [ ] Diff showing updated source hashes
- [ ] HTTP 200 verification of preview URL
- [ ] Self-audit completed

---

## Evidence

| Artifact | Location | Description |
|----------|----------|-------------|
| Compiled pack | `evidence/prd-guide-pack.md` | Full pack with provenance |
| Compile output | `evidence/compile-output.txt` | Sources, hashes, status |
| Hash comparison | `evidence/hash-comparison.md` | v1.2.3 vs v1.2.4 diff |

---

## Self-Audit

_To be completed after implementation_

---

## Closure

_Pending_
