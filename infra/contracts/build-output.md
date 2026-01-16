# Build Output Contract

This contract defines what any stack must produce to be deployable via Cloudflare Pages.

## Requirements

### Output Directory

All builds must output to: `/dist`

This is non-negotiable. Cloudflare Pages is configured to serve from this directory.

### Entry Point

The output must include: `dist/index.html`

This file is the SPA entry point and fallback for all routes.

### Assets

Static assets should be placed in: `dist/assets/`

### Content

Content files are served from: `dist/content/`

(Copied from `/public/content/` during build)

## Routing

Cloudflare Pages handles SPA routing via `_redirects` or the default fallback behavior:
- All unmatched routes serve `index.html`
- This enables client-side routing for any framework

## Stack Agnostic

This contract does not specify:
- Framework (React, Svelte, Vue, Vanilla, etc.)
- Build tool (Vite, Webpack, esbuild, none)
- Language (JS, TS, etc.)

Any stack that produces the required output structure is valid.

## Placeholder Deploy

If `/src` is nuked:
- `/public/index.html` serves as the fallback
- Cloudflare remains deployable with zero app code
- This keeps preview URLs alive during experiments
