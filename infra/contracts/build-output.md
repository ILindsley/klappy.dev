# Build Output Contract

> **This is the ONLY surviving build rule across all attempts.**
> Do not modify this file during an attempt unless the PRD explicitly requires it.
> If you believe this contract is wrong, propose changes in `PRD_PATCH.md`.

---

## Requirements

### 1. Build Must Produce `/dist`

```
npm run build → /dist
```

The build command must generate a production-ready bundle in the `/dist` directory.
Any stack is allowed (React, Vue, Svelte, Vanilla JS, static HTML, etc.)

### 2. `/dist` Must Load Content

The app MUST fetch and display content from:

```
/content/manifest.json
```

This manifest is synced from `/canon/meta/manifest.json` during build.
Your app must be able to load and render resources listed in this manifest.

### 3. No Client Secrets

- No API keys in client code
- No secrets in `/dist`
- If external APIs are needed, they must be public or use server-side proxies

### 4. Cloudflare Pages Compatible

The build output must work with Cloudflare Pages:

- Static files only (no SSR unless using Workers)
- No server-side dependencies
- Assets must use relative paths or be under `/dist`

---

## The Contract

| Requirement | Test |
|-------------|------|
| `/dist` exists after build | `ls dist/` succeeds |
| Entry point exists | `ls dist/index.html` succeeds |
| Manifest is accessible | `curl $PREVIEW_URL/content/manifest.json` returns JSON |
| App loads | Browser shows content, no white screen |

---

## What This Means for Agents

- You may use **any framework** or no framework
- You may use **any CSS approach** (Tailwind, vanilla, CSS-in-JS)
- You may use **any build tool** (Vite, esbuild, Rollup, Parcel, none)
- You **must** ensure `npm run build` produces `/dist`
- You **must** ensure the app can display content from `/content/manifest.json`

---

## Non-Negotiable

If your build doesn't produce `/dist` with a working `index.html` that loads the manifest, **your attempt fails the deploy contract**.

Fix the build. Don't modify this contract.
