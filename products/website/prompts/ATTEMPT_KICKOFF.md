# Website Lane — Attempt Kickoff (Canonical)

## Non-Negotiables (Evidence-First)

This attempt is NOT complete unless all items below are true.

### Required outcome
1) The attempt branch is pushed to `origin` (Cloudflare must be able to build it).
2) Cloudflare Pages serves BOTH endpoints with HTTP 200:
   - `/` (the app)
   - `/_evidence/` (the evidence index)
3) Proof assets are present in the deployed build under `/_evidence/`:
   - At least 3 screenshots OR 1 recording (video).

### Forbidden
- DO NOT use `wrangler pages deploy` (or any wrangler deploy command). Ever.
- DO NOT claim "pending" completion. If the Cloudflare preview is not reachable, the attempt is FAILED.

### Evidence check (required)
After pushing, verify HTTP 200:
- `curl -I https://<preview>/`
- `curl -I https://<preview>/_evidence/`

If either is not 200, the attempt is not complete.

---

## Attempt Workflow (Minimal)

1) Register the attempt (provenance) using the repo attempt CLI.
2) Nuke the website lane work area.
3) Implement the website PRD (in `products/website/src`).
4) Build using lane build:
   - `npm run build -- --lane website`
5) Ensure deployed evidence exists at:
   - `/_evidence/` (and contains index + proof assets)
6) Push branch to origin.
7) Confirm Cloudflare preview URLs return HTTP 200.
8) Write final notes to the run evidence folder.
