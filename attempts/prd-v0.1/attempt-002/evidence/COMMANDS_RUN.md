# Commands Run — PRD v0.1 / Attempt 002

## Dev Server

```bash
cd /Users/chrisklapp/klappy.dev
npx vite --config vite.config.attempt-002.js
```

Output:
```
VITE v6.4.1  ready in 107 ms

➜  Local:   http://localhost:5174/
➜  Network: use --host to expose
```

## Production Build

```bash
npx vite build --config vite.config.attempt-002.js
```

Output:
```
vite v6.4.1 building for production...
transforming...
✓ 37 modules transformed.
rendering chunks...
computing gzip size...
dist-attempt-002/index-attempt-002.html                   0.43 kB │ gzip:  0.29 kB
dist-attempt-002/assets/index-attempt-002-KV0HX4zU.css    9.22 kB │ gzip:  2.10 kB
dist-attempt-002/assets/index-attempt-002-BQ4KHxuK.js   156.53 kB │ gzip: 50.63 kB
✓ built in 332ms
```

## Network Requests Verified

| Request | Status |
|---------|--------|
| GET /content/manifest.json | 200 ✅ |
| GET /content/odd/README.md | 200 ✅ |
| All component modules | 200 ✅ |

## Notes

- Dev server ran on port 5174 (separate from attempt-001 on 5173)
- Build output to `/dist-attempt-002/` (separate from main `/dist/`)
- No console errors observed
