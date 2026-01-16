# ☁️ Cloudflare Pages Deployment

## Configuration

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Root directory:** `/`

## Branch Deploys

Every branch gets a preview URL:
- `main` → production
- `attempt/*` → `https://<branch-name>.klappy-dev.pages.dev`

## What This Means for Attempts

1. Each attempt branch auto-deploys on push
2. Preview URLs are available for evaluation
3. No manual deployment steps required

## Deploy Contract

See `/infra/contracts/build-output.md` for what builds must produce.

## Key Principle

> The app code is disposable. The deploy contract is not.

Cloudflare Pages remains perpetually deployable regardless of what stack (or no stack) is in `/src`.
