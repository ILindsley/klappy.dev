# Evidence — PRD v0.1 / Attempt 002

## Evidence Location

- **Evidence folder:** `./evidence/`
- **Source code:** `/src-attempt-002/`
- **Build output:** `/dist-attempt-002/`

---

## Evidence Files

| File                                                 | Description                           |
| ---------------------------------------------------- | ------------------------------------- |
| `attempt-002-evidence-1-initial-load.png`            | Initial page load verification        |
| `attempt-002-evidence-2-after-constraints-click.png` | After clicking Constraints in sidebar |
| `attempt-002-evidence-3-chat-action.png`             | Chat panel interaction test           |
| `COMMANDS_RUN.md`                                    | Build commands and output             |
| `DIFF_SUMMARY.md`                                    | Diff summary + self-audit             |

---

## Network Evidence

| Request                      | Status |
| ---------------------------- | ------ |
| `GET /content/manifest.json` | 200 ✅ |
| `GET /content/odd/README.md` | 200 ✅ |
| All component modules        | 200 ✅ |

---

## Build Evidence

```
✓ 37 modules transformed
dist-attempt-002/index-attempt-002.html    0.43 kB
dist-attempt-002/assets/*.css              9.22 kB
dist-attempt-002/assets/*.js             156.53 kB
✓ built in 332ms
```

---

## Accessibility Verification

Three-pane layout confirmed via accessibility snapshot:

- Sidebar (`aside`) with navigation sections (Public, Canon)
- Reading pane (`main`) with markdown content
- Chat panel (`aside`) with suggested questions and input form

---

## Notes

- Chat state is **in-memory only** (React useState) — same as attempt-001
- Hard refresh clears chat history — same as attempt-001
- Custom markdown renderer used (no external library dependency)
- UI actions (open, scroll_to, highlight) implemented via action primitives
