# Evidence — Attempt 0.1

## Evidence Location

- **Evidence folder:** `./evidence/`
- **Live site:** https://klappy.dev
- **GitHub:** https://github.com/klappy/klappy.dev/tree/main/attempts/attempt-0.1/evidence

---

## Evidence Files

| File | Description |
|------|-------------|
| `evidence-1-initial-load.png` | Initial load: sidebar, reading pane, chat with welcome message |
| `evidence-2-after-constraints-click.png` | After clicking Constraints in sidebar |
| `evidence-3-chat-action.png` | Chat action: "Show me the constraints" → short response + UI action |
| `evidence-4-after-refresh.png` | Page loads after F5 refresh (no 404) |
| `COMMANDS_RUN.md` | Build commands and output |
| `DIFF_SUMMARY.md` | Diff summary + self-audit |

---

## Network Evidence

| Request | Status |
|---------|--------|
| `GET /content/manifest.json` | 200 ✅ |
| `GET /content/odd/README.md` | 200 ✅ |
| `GET /content/canon/constraints.md` | 200 ✅ |

---

## Notes

- Chat state is **in-memory only** (React useState)
- Hard refresh clears chat history
- No localStorage/sessionStorage persistence
