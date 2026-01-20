---
uri: klappy://canon/evidence
title: "Evidence"
audience: canon
exposure: nav
tier: 1
voice: first_person
stability: stable
tags: ["evidence", "verification"]
---

# Evidence

Evidence is proof, not narrative.

An attempt is valid ONLY if its deployed build exposes public evidence at:

`/_evidence/`

## Minimum Proof

- 1 video recording OR
- 3 screenshots

Markdown alone does not count as proof.

## Required Files

Every `/_evidence/` folder must contain:

- `index.html` — human-browsable index
- `index.json` — machine inventory
- `EVIDENCE.md` — summary and links
- `ATTEMPT.md` — what was done
- `META.json` — provenance
- `screenshots/` — at least 1 image
- `recordings/` — video proof (or 3 screenshots total)

## Discoverability

Evidence MUST be discoverable without:

- knowing a run ID
- reading a narrative
- running code locally
- guessing paths

If `/_evidence/` returns 404, the attempt is **INVALID**.

## Build Enforcement

When `.attempt.json` exists:

- Build FAILS if `/_evidence/` is missing
- Build FAILS if proof assets are insufficient
- Build FAILS if index generation fails

## Related

- Attempt Record Packs: `/docs/ATTEMPT_RECORD_PACK.md`
- Attempt Kickoff: `/docs/ATTEMPT_KICKOFF.md`
