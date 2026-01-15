# Commands Run (Phase 1)

## Development

```
npm install
npm run dev
```

## Build & Verification

```
npm run sync           # content sync (source → public/content)
npm run verify:content # manifest validation
npm run build          # full pipeline: sync → verify → vite build
```

## Build Output

```
> klappy-dev@0.1.0 build
> npm run sync && npm run verify:content && vite build

🔄 Syncing content to /public/content/...
  ✅ canon/ → public/content/canon/
  ✅ odd/ → public/content/odd/
  ✅ about/ → public/content/about/
  ✅ projects/ → public/content/projects/
✅ Content sync complete.

🔍 Verifying content integrity...
📋 Manifest declares 18 resources
✅ All manifest resources exist on disk
✅ Content verification PASSED
⚠️  ORPHAN FILES: 3 files on disk not in manifest (warning only)

vite v6.4.1 building for production...
✓ 37 modules transformed.
dist/index.html                   0.40 kB │ gzip:  0.27 kB
dist/assets/index-BB9k3x5z.css    4.50 kB │ gzip:  1.28 kB
dist/assets/index-DJWQRRuK.js   192.68 kB │ gzip: 61.43 kB
✓ built in 376ms
```

## Idempotency Test

Running `npm run sync` twice produces identical output (deterministic, no drift).

## Deployment

- Deployed via Cloudflare Pages (Git integration)
- Build command: `npm run build`
- Output directory: `dist`
- Live at: https://klappy.dev
