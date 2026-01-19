---
id: attempt-kickoff-website
lane: website
status: canonical
epoch: E0002
audience: agents
---

# Attempt Kickoff — Website Lane (E0002)

This document is the canonical kickoff prompt for **website** lane attempts.
It is designed to be copy/pasted into an agent chat **without modification**.

If this file changes, it must be changed intentionally (decision log if needed).
No one-off prompts.

---

## Read First (in order)

1) `/canon/odd/appendices/product-lanes.md`  
2) `/docs/PRD/website/PRD.md`  
3) `/docs/ATTEMPT_KICKOFF.md`  
4) `/canon/constraints.md` (or the repo's canonical constraints doc)

---

## Lane Declaration (LOCKED)

- **Lane:** `website`
- **PRD:** `/docs/PRD/website/PRD.md`
- **Attempt output:** `/attempts/website/prd-vX.Y/attempt-NNN/`
- **Build output (canonical, D0013):** `products/website/dist/`

**Invariant:** Attempts without a lane are invalid.

---

## Non-Negotiables (Scope Guard)

You MUST NOT:

- Modify `canon/**`
- Modify other lanes (`ai-navigation`, `agent-skill`)
- Touch root `/src/**` (treat as other-lane territory)
- Add "helpful" infra, contracts, audits, compile packs, or refactors

This attempt's only job is: **produce a working website in the website lane**.

---

## First Actions (LOCKED ORDER)

1) Register provenance (no code changes before this):
```bash
npm run attempt:register -- --lane website --tool <tool> --agent <agent> --model "<model>"
```

2) Nuke the lane work area immediately after registration:
```bash
npm run attempt:nuke -- --lane website
```

---

## Build Requirements (Website MVP)

Implement a minimal website app in:
- `products/website/src/**`

It MUST:
- Load `/content/manifest.json` at runtime
- Render a home page with progressive disclosure (not overwhelming)
- Provide navigation: list → detail view (internal state nav is fine)
- Render markdown content from the manifest's paths
- Be mobile-usable
- Keep initial primary navigation ≤ 7 items (per PRD)
- Never invent content: only display what exists in the manifest

Implementation constraints:
- Keep it minimal.
- Prefer the repo's existing stack patterns (likely Vite + React), but do not introduce a new framework.
- No router required if you can do a simple view switch.

---

## Evidence Requirements (STRICT)

Write evidence under the run folder created by registration, e.g.:

```
attempts/website/prd-vX.Y/_runs/<run_id>/
```

Include:
- `ATTEMPT.md` (what you did, what you did NOT do)
- `EVIDENCE.md` (proof bullets + commands)
- Screenshots:
  - home (desktop)
  - home (mobile viewport)
  - detail page (any canon doc)

Proof requirements:
- `products/website/dist/index.html` exists after build
- commands to reproduce locally are listed

---

## Completion

You are not done until:
- Build passes for the website lane
- Evidence exists in the run folder
- You have submitted (per attempt workflow)

Do not promote unless explicitly instructed by the human.

---

## Before you touch code

List the exact files you will create/modify and why.
Then begin.
