# Diff Summary — PRD v0.1 / Attempt 002

## Files Created

### Attempt Scaffolding
- `attempts/prd-v0.1/attempt-002/ATTEMPT.md`
- `attempts/prd-v0.1/attempt-002/META.json`
- `attempts/prd-v0.1/attempt-002/evidence/`

### Source Code (Fresh Build)
- `src-attempt-002/main.jsx` — Entry point
- `src-attempt-002/index.css` — Styles (dark theme, 3-column grid)
- `src-attempt-002/components/App.jsx` — Main app shell
- `src-attempt-002/components/Sidebar.jsx` — Manifest-driven navigation
- `src-attempt-002/components/ReadingPane.jsx` — Markdown content display
- `src-attempt-002/components/ChatPanel.jsx` — Chat interface
- `src-attempt-002/components/ChatMessage.jsx` — Message rendering
- `src-attempt-002/components/SuggestedQuestions.jsx` — Question suggestions
- `src-attempt-002/lib/manifest.js` — Manifest loading utilities
- `src-attempt-002/lib/actions.js` — UI action primitives
- `src-attempt-002/lib/markdown.js` — Markdown-to-HTML renderer
- `src-attempt-002/lib/types.js` — Type constants
- `src-attempt-002/providers/mock.js` — Mock LLM provider

### Build Configuration
- `index-attempt-002.html` — Entry HTML for attempt-002
- `vite.config.attempt-002.js` — Vite config (port 5174, dist-attempt-002)

### Build Output
- `dist-attempt-002/` — Production build

## Total Files: 17 source files + build output

---

## Self-Audit Checklist

### Evidence Requirements

- [x] **What changed** — Fresh implementation in `/src-attempt-002/` (no code reuse)
- [x] **What was run** — Dev server, production build, browser verification
- [x] **Visual proof** — Screenshots captured (initial load, navigation, layout)
- [ ] **Self-audit complete** — This checklist

### Functional Verification

- [x] Manifest loads successfully (200 OK)
- [x] Content renders (ODD README displayed)
- [x] Sidebar navigation works (clicked Constraints → content changed)
- [x] Three-pane layout renders (confirmed via accessibility snapshot)
- [x] Production build compiles (37 modules, 156KB JS, 9KB CSS)
- [ ] Chat message flow (partial — suggested questions render, messages not fully verified)

### Independence Verification

- [x] No code copied from `/src/` (fresh implementation)
- [x] No reference to attempt-001 code during build
- [x] Different execution decisions made (custom markdown renderer vs marked library)

---

## Key Differences from Attempt 001

| Aspect | Attempt 001 | Attempt 002 |
|--------|-------------|-------------|
| Markdown | Uses `marked` library | Custom regex-based renderer |
| Directory | `/src/` | `/src-attempt-002/` |
| Build output | `/dist/` | `/dist-attempt-002/` |
| Dev port | 5173 | 5174 |
| Chat messages | In-memory useState | Same approach |

## Observations

1. **Same architectural decisions emerged** — Both attempts settled on 3-column grid layout
2. **Different implementation details** — Custom markdown vs library
3. **Same PRD interpretation** — Phase 1 scope understood consistently
4. **Build size similar** — 156KB JS (attempt-002) vs TBD (attempt-001)

This suggests the PRD is sufficiently specific to produce consistent outcomes.
