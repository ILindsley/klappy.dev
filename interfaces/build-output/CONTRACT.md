---
contract: build-output
version: 3.0.0
status: active
---

# Build Output Contract (build-output@3.0.0)

This contract defines the required deployment artifact shape produced by any lane build.

It applies to:
- Cloudflare Pages deployments
- local verification
- future multi-lane deployments

---

## Compatibility Promise

Any lane implementation that claims `build-output@3.x` must output a deployable artifact that conforms to this contract.

---

## Required Output

For a given lane `<lane>`, a build MUST produce a folder named:

- `products/<lane>/dist/`

That folder MUST contain at minimum:

- `products/<lane>/dist/index.html`

---

## Required Runtime Availability

The deployed site MUST be able to load:

- `/content/manifest.json`

The canonical manifest file in the repository is `/public/content/manifest.json`. Platforms typically serve it at runtime as `/content/manifest.json` (e.g., by copying `public/` assets into the deploy artifact), but the deployed app must be able to fetch it via HTTP at `/content/manifest.json`.

---

## Stack Freedom

Any framework or stack is permitted.

The only requirement is that the output conforms to:
- `products/<lane>/dist/index.html` exists
- the app can load the manifest at runtime
- no client secrets are embedded

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- `products/<lane>/dist` is renamed or lane scoping is removed
- `index.html` is no longer required
- required runtime paths change

---

## Verification Rules (for tooling)

A verifier for `build-output@3.0.0` MUST check (for a chosen `<lane>`):

- `products/<lane>/dist/` exists after build
- `products/<lane>/dist/index.html` exists after build
- `public/content/manifest.json` exists in repo
