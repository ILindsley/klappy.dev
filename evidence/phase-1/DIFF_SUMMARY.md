# Diff Summary (Phase 1)

## What Changed

### New Files Added

- `src/main.jsx` — React entry point
- `src/index.css` — Global styles (CSS variables, layout)
- `src/components/App.jsx` — Main layout (3-column: sidebar, reading pane, chat)
- `src/components/Sidebar.jsx` — Document list from manifest (Public/Canon split)
- `src/components/ReadingPane.jsx` — Markdown renderer
- `src/components/ChatPanel.jsx` — Chat UI + action dispatcher
- `src/components/ChatMessage.jsx` — Message bubble renderer
- `src/components/SuggestedQuestions.jsx` — Clickable question buttons
- `src/lib/manifest.js` — Manifest loader + content path normalization
- `src/lib/markdown.js` — Markdown renderer with stable heading slugger
- `src/lib/actions.js` — UI action interpreter (open/scroll_to/highlight)
- `src/lib/types.js` — UIAction schema definition
- `src/providers/mock.js` — Mock LLM provider (pattern-matching responses)
- `scripts/sync-content.js` — Content sync script (source → public/content)
- `scripts/verify-content.js` — Manifest validation (catches missing/orphan files)
- `index.html` — SPA entry point
- `vite.config.js` — Vite configuration
- `public/content/manifest.json` — Content inventory

### Modified Files

- `package.json` — Added dependencies (react, marked, vite) + scripts
- `.gitignore` — Added node_modules, dist, .env patterns
- `README.md` — Added Web App section explaining /public/content structure

### Content Synced

- `/canon/**` → `/public/content/canon/`
- `/odd/**` → `/public/content/odd/`
- `/about/**` → `/public/content/about/`
- `/projects/**` → `/public/content/projects/` (excluding \_template)

---

## Self-Audit (Phase 1)

### 1. Intended Outcome

Build a static SPA that renders markdown documents and supports LLM-guided navigation via UI actions.

**How to verify:** Load klappy.dev → sidebar shows documents → clicking changes reading pane → chat triggers navigation actions.

### 2. Constraints Applied

- **Offline-first:** N/A for Phase 1 (content fetched at runtime, not cached)
- **Maintainability:** Simple component structure, no unnecessary abstraction
- **KISS:** Minimal dependencies (React, marked, vite only)
- **No backend:** All code runs in browser, no Node APIs

### 3. Decision Rules Followed

- **Borrow→Bend:** Used `marked` library, customized renderer for stable slugs
- **Explicit tradeoffs:** No URL routing (documented as Phase 1.1 item)
- **Evidence over explanation:** Screenshots captured for all key behaviors

### 4. Verification Performed

- `npm run dev` — Dev server started, app loaded
- `npm run build` — Production build succeeded
- Browser testing on https://klappy.dev

### 5. Evidence Produced

- `evidence-1-initial-load.png` — Sidebar + reading pane + chat visible
- `evidence-2-after-constraints-click.png` — Doc changed after sidebar click
- `evidence-3-chat-action.png` — Chat produced short response + action executed
- `evidence-4-after-refresh.png` — Page loads after F5 (no 404)
- Network logs: manifest.json (200), README.md (200), constraints.md (200)

### 6. UX Check

- UI behaves as expected (3-column layout, responsive interactions)
- Chat responses are short (1 sentence) as PRD specified
- Suggested questions provide discoverable entry points

### 7. Tradeoffs & Risks

- **No URL routing:** Can't deep-link to specific docs (Phase 1.1)
- **No highlight animation:** `highlight` action not visually distinct yet
- **Manual manifest:** Adding new docs requires manifest.json update (now validated by verify:content)

### 8. Maintainability

- Components are small and focused
- Action schema is canonical (`{action, params}`)
- Content sync script prevents manual copy drift
- Content verifier catches manifest/filesystem mismatches at build time

### 9. Confidence Level

**High** for core functionality (sidebar nav, doc render, chat actions).
**Medium** for edge cases (very long docs, mobile layout).

---

## What Remains (Phase 1.1)

- URL routing for deep-links (`?doc=...#section`)
- Heading anchors clickable/copyable
- `scroll_to` should wait for markdown render
- `highlight` should have visible feedback
