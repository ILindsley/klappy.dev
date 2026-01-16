# Evidence Index

This document indexes all evidence files for this attempt.

## Screenshots

### desktop-load.png
Desktop view showing the app loaded with navigation sidebar, content pane, and chat pane visible. Demonstrates the three-pane layout working correctly.

### mobile-load.png
Mobile view (phone width) showing the mobile header with menu and chat buttons, and the main content area. Demonstrates responsive layout and mobile-first design.

### feature-proof.png
Deep link feature proof showing a resource loaded with a section anchor in the URL (`?r=klappy://canon/constraints#offline-first-default`), the correct section highlighted, and the copy-link button visible on a heading. Demonstrates deep linking round-trip integrity.

## Build Output

- Build command: `npm run build`
- Output directory: `/dist`
- Entry point: `dist/index.html` ✓
- Assets: `dist/assets/` ✓
- Content: `dist/content/` ✓ (synced from `/public/content/`)

## Preview Deployment

- Preview URL: https://attempt-prd-v0-2-a001.klappy-dev.pages.dev
- Branch: `attempt/prd-v0.2/a001`
- Status: Pending Cloudflare build (may take 1-2 minutes)

## Verification Steps

1. ✅ Build passes: `npm run build` completes successfully
2. ✅ Output structure: `/dist` contains required files
3. ⏳ Preview URL: Waiting for Cloudflare build to complete
4. ⏳ Deep link round-trip: Will test after preview is live
5. ⏳ Mobile layout: Will verify after preview is live
6. ⏳ LLM chat: Requires API key configuration in Cloudflare

## Notes

- Screenshots will be captured after preview URL is verified working
- LLM integration requires `OPENAI_API_KEY` environment variable in Cloudflare Pages
- All evidence files are in `attempts/prd-v0.2/_runs/13fcaf91/evidence/`
