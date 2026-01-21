---
uri: klappy://products/website
title: "Website Lane"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["products", "website", "lane", "index"]
---

# Website Lane

> Human-facing orientation surface for ODD.

## Description

The website lane produces klappy.dev—the public-facing website that explains ODD progressively to human visitors. This is portfolio, explanation, and credibility layer. It does NOT teach agents how to think or execute ODD; it explains ODD to humans through progressive disclosure UX.

## Outline

- Contents
- Lane Status
- Key Constraints
- Starting an Attempt

---

## Contents

| File | Purpose |
|------|---------|
| `PRD.md` | Active PRD (v1.2) |
| `LEDGER.md` | Append-only product memory |
| `attempts/` | Attempt artifacts |
| `src/` | Current implementation source |
| `prompts/` | Lane-specific kickoff prompts |

---

## Lane Status

| Field | Value |
|-------|-------|
| **PRD Version** | v1.2 |
| **Epoch** | E0003 (evidence-first) |
| **Status** | Active |
| **Last Champion** | PRD v1.0 (promoted 2026-01-19) |

---

## Key Constraints

- First load shows ≤7 navigational items
- Mobile usable without horizontal scrolling
- Progressive disclosure tiers respected (Tier 0/1/2)
- **Online evidence required** (Cloudflare Preview URL + Evidence URL)

---

## Starting an Attempt

1. Read `/infra/prompts/attempt-kickoff/BOOTSTRAP.md`
2. Run `attempt:register --lane website`
3. Run `attempt:nuke --lane website`
4. Follow `/infra/prompts/attempt-kickoff/website.md`

See `/docs/ATTEMPTS.md` for the full lifecycle.

---

## See Also

- [PRD](PRD.md) — Current requirements
- [Product Lanes](/docs/appendices/product-lanes.md) — Lane architecture
- [Online Evidence](/docs/appendices/online-evidence.md) — Evidence requirements
