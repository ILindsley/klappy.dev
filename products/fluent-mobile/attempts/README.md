# Fluent Mobile Lane Attempts

Canonical attempt artifacts live here:

```
/products/fluent-mobile/attempts/prd-vX.Y/attempt-NNN/
```

## Structure

```
attempts/
  prd-v0.1/
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

## What Counts as Evidence

For a PoC lane, evidence is learning-focused:

| Evidence Type | Description |
|---------------|-------------|
| Field feedback | Direct observations from real users |
| Performance metrics | Real device performance data |
| Usability notes | What worked, what confused |
| Hypothesis validation | Which hypotheses were confirmed/refuted |
| Learnings | What we now know that we didn't before |

## Success vs Failure

**In this lane, failure with fast learning is a win.**

An attempt is successful if it:

- Clearly validates OR invalidates hypotheses
- Provides actionable learnings for the next iteration
- Informs a confident decision: Continue, Pivot, Pause, or Stop

An attempt fails if it:

- Generates no learnings
- Cannot be evaluated against hypotheses
- Results in ambiguity about what to do next

## Related

- PRD: `../PRD.md`
- Lane README: `/products/fluent-mobile/README.md`
- Attempt lifecycle: `/docs/appendices/attempt-lifecycle.md`
