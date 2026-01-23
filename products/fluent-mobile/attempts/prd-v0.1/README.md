# Fluent Mobile — PRD v0.1 Attempts

**PRD Status:** CLOSED
**PRD Location:** [PRD.md](PRD.md)
**Superseded By:** [v0.2](../prd-v0.2/PRD.md)

---

## Attempts

| Attempt | Status | Outcome | Key Learning |
|---------|--------|---------|--------------|
| [001](attempt-001/) | CLOSED | SUCCESS | Python server wrong; need Cloudflare, waveform viz, multi-screen |

---

## Why This Version Closed

Attempt 001 revealed critical gaps that require PRD revision:

1. **Deployment**: Python localhost cannot test on mobile devices
2. **Agent Verification**: Cannot verify audio without visual feedback
3. **Scope**: Single page insufficient to test workflow hypotheses
4. **Hardware**: No specification of required test devices

See [Attempt 001 Learnings](attempt-001/evidence/LEARNINGS.md) for details.

---

## Structure

```
prd-v0.1/
├── PRD.md              # Frozen PRD for this version
├── README.md           # This file
└── attempt-001/        # Sealed attempt (SUCCESS)
    ├── ATTEMPT.md
    ├── HYPOTHESES.md
    ├── META.json
    ├── PLAN.md
    ├── src/            # Disposable PoC code
    └── evidence/       # Learnings and verification
```
