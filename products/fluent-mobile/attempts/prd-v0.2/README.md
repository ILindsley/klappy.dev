# Fluent Mobile — PRD v0.2 Attempts

**PRD Status:** ACTIVE
**PRD Location:** [PRD.md](PRD.md)
**Prior Version:** [v0.1](../prd-v0.1/PRD.md)

---

Attempts against PRD v0.2 live here.

```
/products/fluent-mobile/attempts/prd-v0.2/attempt-NNN/
```

## What Changed from v0.1

Based on [Attempt 001 learnings](../prd-v0.1/attempt-001/evidence/LEARNINGS.md):

| Requirement | v0.1 | v0.2 |
|-------------|------|------|
| Deployment | Python localhost | **Cloudflare Pages** |
| Audio verification | None | **Waveform visualization** |
| Navigation | Single page | **Multi-screen (2+ screens)** |
| Hardware | Unspecified | **Low-end Android required for H2** |

## Attempt Structure

```
attempt-NNN/
├── ATTEMPT.md              # Status, learnings, recommendation
├── META.json               # Machine-readable metadata
├── HYPOTHESES.md           # Which hypotheses tested, results
├── PLAN.md                 # Execution plan
├── src/                    # Implementation (disposable)
├── evidence/               # Proof of learning
│   ├── screenshots/        # Including waveform evidence
│   ├── deployment.md       # Cloudflare deployment proof
│   └── test-results.json   # Playwright results
└── .gitignore              # Exclude node_modules
```

## Success Criteria for v0.2 Attempts

- [ ] Deployed to Cloudflare Pages (preview URL works)
- [ ] Waveform visualization shows audio activity
- [ ] Multi-screen navigation works
- [ ] Agent verification via Playwright passes
- [ ] Learnings documented

## Evidence Requirements

| Type | Required | Purpose |
|------|----------|---------|
| Cloudflare preview URL | Yes | Proves mobile-testable |
| Waveform screenshots | Yes | Agent-verifiable audio |
| Playwright test results | Yes | Automated verification |
| Mobile device screenshot | Nice to have | Real-world validation |

## Related

- PRD: `../../PRD.md` (v0.2)
- Prior version: `../prd-v0.1/`
- Attempt 001 learnings: `../prd-v0.1/attempt-001/evidence/LEARNINGS.md`
