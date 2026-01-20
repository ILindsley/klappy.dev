# Website Lane Attempts

Canonical attempt artifacts live here:

```
/products/website/attempts/prd-vX.Y/attempt-NNN/
```

## Structure

```
attempts/
  prd-v1.0/
    PRD.md              # frozen PRD snapshot
    _runs/              # in-progress runs (before finalize)
      <run_id>/
        META.json
        ATTEMPT.md
        EVIDENCE.md
        evidence/
    attempt-001/        # finalized attempts
    attempt-002/
```

## Evidence

Public verification evidence is always deployed at:

```
/_evidence/
```

## Related

- Champion outcomes: `products/website/LEDGER.md`
- Kickoff prompt: `products/website/prompts/ATTEMPT_KICKOFF.md`
- Legacy attempts: `/attempts/README.md` (read-only)
