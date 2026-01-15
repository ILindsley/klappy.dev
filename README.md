# klappy.dev

This repository is a working surface for ideas, experiments, and reference documents about how software is designed and built in an AI-accelerated world.

It is intentionally **not** a framework, product, or SDK.  
It is a public record of thinking, constraints, and proofs of concept that evolve over time.

---

## What This Repository Is

- A portfolio of projects and proofs of concept
- A canon of design principles, constraints, and verification standards
- A place to work in the open, with assumptions and tradeoffs made explicit
- A reference for how I think about AI-assisted development, architecture, and long-lived systems

Much of the content here exists to reduce repeated reasoning and to make decision-making easier to inspect and challenge.

---

## What This Repository Is Not

- Not a step-by-step tutorial
- Not a prescriptive workflow
- Not a prompt collection
- Not a promise of stability or completeness

Most documents are orientation, not instruction. They describe how decisions are reasoned about, not rules that must be followed.

---

## How to Explore

If you're new, a reasonable path is:

1. **About** — context and trust surface
   - `/about/bio.md`
   - `/about/credibility.md`
   - `/about/faq.md`

2. **ODD (Outcomes-Driven Development)** — the core philosophy
   - `/odd/README.md` (public-facing)
   - `/canon/odd/manifesto.md` (extended)

3. **Canon** — how decisions and verification are shaped
   - `/canon/index.md` (orientation)
   - Supporting documents on constraints, decision rules, evidence, and verification

4. **Projects** — proofs of concept and experiments (added over time)

There is no required order. Follow your curiosity.

---

## About the Canon

The Canon is a curated set of documents that capture:

- assumptions and constraints
- decision heuristics
- definitions of completion
- evidence and verification standards

The Canon exists for clarity, not control.  
It does not execute anything by itself and is intentionally separated from tooling or automation.

---

## Versioning & Change

The Canon uses pack-level versioning with a single changelog:

- `/canon/meta/manifest.json` — inventory of what exists
- `/canon/CHANGELOG.md` — record of changes

Individual files are not versioned independently to avoid unnecessary ceremony.

---

## License

All content in this repository is released under the [MIT License](LICENSE).  
Reuse is encouraged.

---

## Web App (Phase 1)

This repository includes a static SPA for browsing content via a chat-first interface.

```bash
npm install
npm run dev
```

The app lives in `/src` and serves content from `/public/content/`.

**Note:** `/public/content/` contains copies of source content (`/canon`, `/odd`, `/about`, `/projects`) for the SPA to serve. The source folders remain the canonical authoring location; `/public/content/` is the rendered content root for the web app.

---

## Status

This repository is active and evolving.  
Some documents are stable; others are intentionally exploratory.  
Where possible, documents label their stability and confidence level.

Feedback, questions, and challenges are welcome.

---

This repository is about preserving intent without freezing execution.  
The goal is better outcomes, not perfect artifacts.
