# PRD Identity

| Field                       | Value       |
| --------------------------- | ----------- |
| **PRD Version**             | v0.2        |
| **Status**                  | Draft       |
| **Created**                 | 2026-01-16  |
| **Author**                  | Chris Klapp |
| **Preview Deploy Required** | Yes         |

---

## Objective

Make klappy.dev feel like a usable 2026 portfolio experience (not just a functional proof) by adding shareable deep links, real LLM integration, mobile-responsive navigation, and verified Cloudflare Pages branch deploys.

---

## Background

PRD v0.1 proved Phase 1 mechanics (manifest-driven content, three-pane UI, deterministic action primitives) across multiple independent attempts.

However, attempt records explicitly left critical user-facing gaps unproven or unimplemented:

- Deep linking / shareable state (not implemented)
- Real LLM integration (mock provider only)
- Cloudflare Pages deploy verification (not tested)

In parallel, live-site UX feedback shows the UI is currently experienced as a barrier:

- No navigational deep links (resource or section)
- Navigation density causes visual fatigue
- Mobile usability is effectively broken
- Visual polish does not match 2026 portfolio expectations (should be modern, legible, and worthy of the content)

This PRD exists to convert those gaps into explicit, testable requirements.

---

## Success Criteria

- [ ] **Deep links work**: the URL can represent the current resource and optional section anchor; copying the URL + reloading restores the same state.
- [ ] **Section linkability is real**: major headings are anchorable and can be navigated to reliably (no collisions).
- [ ] **Navigation is usable**: sidebar is no longer a wall of items; hierarchy is visible and progressive disclosure exists.
- [ ] **Mobile is supported**: navigation and chat are usable on phones and tablets (portrait/landscape) without obscuring reading.
- [ ] **Real LLM integration works**: chat uses a real model (default: GPT-4o-mini unless a smaller GPT-5 tier is available) via a Worker-compatible endpoint; no client-side secrets.
- [ ] **Cloudflare Pages branch deploys are verified**: preview deploys exist for branches, and an attempt can record a working preview URL as evidence.
- [ ] **Evidence bundle closes the loop**: build + verification + screenshots (desktop + mobile) are produced and indexed per attempt.

---

## Non-Goals (Anti-Scope)

- Not: SSR, Next.js migration, or multi-page routing.
- Not: Authentication, user accounts, or multi-user chat history.
- Not: Perfect SEO parity with a multi-page docs site (deep links + sane metadata only).
- Not: Full MCP export (may remain future phase).
- Not: A “portfolio template” or heavy visual animation system.

---

## Approach

This is a UI/UX + integration upgrade that preserves the v0.1 content model:

- Canonical content remains static and local (synced to `/public/content/`)
- Manifest remains the authoritative inventory surface
- The UI becomes linkable and responsive
- The chat becomes real (LLM-backed) while remaining constrained and evidence-oriented

---

## Requirements

### 1) Navigation & Linkability

**1.1 URL contract**

The application MUST encode navigable state into the URL such that it is shareable and reload-safe.

- URL MUST represent:
  - resource (by `uri`, not by title)
  - optional section anchor (heading id)
- URL SHOULD be human-legible (query + hash), but correctness is primary.

Recommended contract (example):

- `/?r=klappy://canon/constraints#offline-first-default`

**1.2 Restore on load**

On initial load and on browser navigation (back/forward), the app MUST:

- Open the resource referenced by `r` if present
- Scroll to and briefly highlight the section referenced by the hash if present

**1.2.1 Round-trip integrity**

A deep link is considered valid only if:

- Loading the URL opens the same resource and section
- Navigating away and using browser back/forward restores the same state
- Invalid or unknown resources degrade gracefully (default entrypoint + no crash)
- Invalid anchors do not break reading or navigation

**1.3 Anchor stability**

- Heading anchors MUST be URL-safe and stable.
- Duplicate headings within a document MUST produce unique anchors (e.g., `heading`, `heading-2`, ...).

**1.4 UI affordance**

- Headings SHOULD expose a “copy link” affordance (hover on desktop, tap-accessible on mobile).

---

### 2) Information Architecture (reduce cognitive load)

**2.1 Progressive disclosure**

- Navigation MUST provide collapsible groupings (at minimum by top-level category).
- Default view MUST not render as an unbounded wall of items on first load.

**2.2 Orientation-first defaults**

- Navigation SHOULD prioritize the most important entrypoints for first-time visitors (e.g., public ODD + Canon index + projects index).
- Navigation SHOULD support “recently opened” resources (local-only).

**2.3 Active state clarity**

- Current resource MUST be visually distinct.
- When a section anchor is active, the reading pane MUST communicate it (scroll + highlight).

**2.4 Cognitive load constraint**

On first load, the navigation MUST expose no more than one screen-height of primary options without interaction.

Additional content MUST be revealed progressively (collapse, expand, filter, or context).

---

### 3) Responsive Layout (mobile and tablet)

**3.1 Supported devices**

The site MUST work on:

- phones
- tablets
- desktops
- portrait and landscape orientations

**3.2 Small-screen navigation**

On small screens, navigation MUST be usable without consuming the entire viewport:

- Sidebar MUST be collapsible (drawer / overlay)
- Chat MUST be accessible without permanently obscuring reading (sheet / tab switch / split depending on breakpoint)

**3.3 No horizontal scrolling**

- The UI MUST avoid horizontal scroll in primary reading flows on mobile.

**3.4 Reading-first invariant**

On mobile:

- Reading content MUST always have a clear, unobstructed path
- Chat and navigation MAY overlay or drawer-in, but MUST not permanently obscure reading
- At least one mode must prioritize uninterrupted reading

---

### 4) Visual Design (2026 polish, “quantum development vibe”)

**4.1 Design goals**

The UI MUST feel modern and intentional while remaining non-distracting:

- clean typography and spacing
- clear hierarchy
- intentional color system with accessible contrast
- subtle interaction feedback (active states, transitions)

**4.2 “Quantum development vibe” (interpretation)**

The UI SHOULD communicate:

- exploration
- clarity under uncertainty
- progressive disclosure

This should be achieved through layout, hierarchy, and feedback—not through heavy animation.

The “quantum development vibe” SHOULD be conveyed through:

- progressive disclosure
- reversible actions
- visible state changes tied to intent

Not through heavy animation, novelty UI, or visual noise.

---

### 5) Real LLM Integration

**5.1 Model**

- Default model: GPT-4o-mini
- If a smaller GPT-5 tier exists and is appropriate, it MAY replace GPT-4o-mini.

**5.2 Security**

- API keys MUST NOT be shipped to the client.
- LLM calls MUST be made through a Worker-compatible API surface (Cloudflare Worker / Pages Functions).

**5.3 Retrieval grounding**

- The model MUST be grounded in local canonical content.
- The implementation MUST define what content is sent to the model (scope limits are required).

**5.4 Failure behavior**

- If the model call fails, the UI MUST remain usable (reading + navigation still function).

---

### 6) Cloudflare Pages Deployment (branch deploys)

**6.1 Preview deploys**

- Branch deploy previews MUST be enabled and verified.
- The workflow MUST support capturing a preview URL per attempt as evidence.

**6.2 Production deploy**

- Production deploy SHOULD be reproducible from `main`.

**6.3 Infrastructure artifact (when deploy behavior is in scope)**

When deploy behavior is in scope for an attempt, the attempt MUST include an infrastructure note describing how branch previews, evidence capture, and rollback are expected to work.

Canonical location: `/docs/infra/cloudflare-branch-deploys.md`

---

## Phases

| Phase   | Scope                                               | Deliverable                                                                   |
| ------- | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| Phase 1 | Deep links + URL state contract + anchor stability  | Shareable resource + section URLs that round-trip on reload                   |
| Phase 2 | Responsive navigation + IA hierarchy                | Collapsible nav + mobile-friendly layout that preserves reading + chat access |
| Phase 3 | Real LLM integration via Worker-compatible endpoint | Chat backed by real model, grounded in canon, no client secrets               |
| Phase 4 | Cloudflare branch deploy verification               | Preview URLs captured as evidence, repeatable deploy story                    |
| Phase 5 | Visual polish pass                                  | Typography/spacing/hierarchy refresh consistent with goals                    |

---

## Definition of Done (for attempts against this PRD)

- [ ] Build output produced (`npm run build`) and output captured in evidence.
- [ ] Verification performed and recorded (at minimum: deep link round-trip, mobile layout verification, LLM call success/failure behavior).
- [ ] Visual proof captured:
  - desktop layout screenshot(s)
  - mobile layout screenshot(s) (phone width)
  - at least one deep-link screenshot showing URL + correct section state
- [ ] If Cloudflare branch preview is in scope for the attempt: preview URL captured in attempt `META.json`.
- [ ] If deploy behavior is in scope: the infrastructure artifact exists and is referenced (`/docs/infra/cloudflare-branch-deploys.md`).
- [ ] Self-audit completed with explicit tradeoffs and remaining gaps.

---

## Constraints

This PRD is shaped by Canon constraints and decision rules, especially:

- Evidence over assertion
- AI as accelerator, not authority
- Maintainability over cleverness
- Explicit tradeoffs
- UX should carry the explanation (reduce text compensation)

---

## Risks

- **Scope creep**: “make it look modern” becomes unbounded without measurable criteria.
- **Over-navigation**: adding hierarchy/search can reintroduce complexity without reducing cognitive load.
- **LLM grounding drift**: model responses become unmoored without strict retrieval and scoping.
- **Mobile regressions**: responsive behavior can break reading if overlays are not carefully constrained.

---

## Notes

- PRD v0.1 proved mechanics; v0.2 targets linkability, usability, and credible polish.
- Attempts should be bounded: if a phase fails, start a new attempt rather than extending a drifting implementation.

---

## Attempt Policy

**This PRD may be attempted multiple times.**

- For UX-heavy requirements, multiple independent attempts may be required before judging the PRD itself.
- Do not extend a failed attempt; start a new attempt folder.
- Each attempt is evaluated independently against this PRD.
- Failed attempts inform future attempts or PRD revisions.
- Attempts are sealed when CLOSED or ABANDONED.

Independence enforcement:

- Do not “promote” an attempt folder into `/src/` as a substitute for sealing.
- Attempts are sealed records; `/src/` remains disposable and may be rebuilt between attempts.

See: `/canon/odd/appendices/attempt-lifecycle.md`
