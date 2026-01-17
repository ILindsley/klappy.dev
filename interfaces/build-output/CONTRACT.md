---
contract: build-output
version: 1.0.0
status: active
---

# Build Output Contract (build-output@1.0.0)

This contract defines the required deployment artifact shape produced by any lane build.

It applies to:
- Cloudflare Pages deployments
- local verification
- future multi-lane deployments

---

## Compatibility Promise

Any lane implementation that claims `build-output@1.x` must output a deployable artifact that conforms to this contract.

---

## Required Output

A build MUST produce a folder named:

- `/dist/`

That folder MUST contain at minimum:

- `/dist/index.html`

---

## Required Runtime Availability

The deployed site MUST be able to load:

- `/public/content/manifest.json`

This may be copied into `/dist/public/content/manifest.json` or served statically by the platform, but the deployed app must be able to fetch it via HTTP.

---

## Stack Freedom

Any framework or stack is permitted.

The only requirement is that the output conforms to:
- `/dist/index.html` exists
- the app can load the manifest at runtime
- no client secrets are embedded

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- `/dist` is renamed
- `index.html` is no longer required
- required runtime paths change

---

## Verification Rules (for tooling)

A verifier for `build-output@1.0.0` MUST check:

- `dist/` exists after build
- `dist/index.html` exists after build
- `public/content/manifest.json` exists in repo
