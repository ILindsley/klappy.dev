# Cloudflare Pages Deployment Instructions

## Status: READY FOR HUMAN ACTION

The PoC code is built and locally verified. Cloudflare deployment requires human authentication.

---

## Option 1: Cloudflare Dashboard (Recommended for PoC)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Choose "Direct Upload"
4. Upload the `src/` folder from this attempt
5. Project name: `fluent-mobile-poc`
6. Build settings: None required (static files)
7. Deploy

The preview URL will be: `https://fluent-mobile-poc.pages.dev`

---

## Option 2: Wrangler CLI (If you have API token)

If you have a Cloudflare API token configured:

```bash
cd /Users/chrisklapp/klappy.dev/products/fluent-mobile/attempts/prd-v0.2/attempt-001
npx wrangler pages deploy src --project-name=fluent-mobile-poc
```

---

## After Deployment

1. Copy the preview URL
2. Test on a real mobile device
3. Update `evidence/deployment.md` with:
   - Preview URL
   - Mobile test results
   - Any issues found

4. Update `ATTEMPT.md` with:
   - Cloudflare deployment status
   - Mobile testing status

---

## What to Test on Mobile

| Test | How to Verify |
|------|---------------|
| App loads | Page renders without errors |
| Home screen | Assignment card visible, Start Drafting button works |
| Navigation | Tap Start Drafting → Drafting screen appears |
| Back button | Returns to home |
| Waveforms | Three canvas areas visible |
| Listen button | Tap → Audio plays (if device allows), waveform animates |
| Record button | Tap → Prompts for mic permission, waveform shows activity |
| Play Draft | After recording, plays back with waveform |

---

## Device Priority

| Priority | Device Type | Why |
|----------|-------------|-----|
| HIGH | Low-end Android ($50-100) | Target user devices |
| Medium | Mid-range Android | Common devices |
| Low | iPhone | Not primary target |

---

## Files to Deploy

The `src/` folder contains:
- `index.html` — Entry point
- `app.js` — Core logic
- `waveform.js` — Canvas visualizer
- `styles.css` — Mobile-optimized styles
- `manifest.json` — PWA manifest
- `sw.js` — Service Worker
