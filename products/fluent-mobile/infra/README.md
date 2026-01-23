# Lane-Level Infrastructure

This folder contains shared infrastructure configuration for the fluent-mobile lane.

## Pattern

1. **Attempt copies** files from here to their attempt folder
2. **Attempt modifies** as needed for their specific testing
3. **If improvements are made**, merge back to lane level
4. **Next attempt starts** from improved config

## Files

| File | Purpose |
|------|---------|
| `wrangler.toml` | Cloudflare Pages deployment config |
| `playwright.config.js` | Automated testing config |

## Why Lane-Level

From v0.2 Learning:

> "Infra should live at lane level. Don't rebuild wrangler config each attempt."

This avoids:
- Rebuilding CI/CD configuration from scratch each attempt
- Losing improvements when attempts close
- Inconsistent testing approaches across attempts

## Usage

```bash
# From attempt folder
cp ../../infra/wrangler.toml .
cp ../../infra/playwright.config.js .

# Modify as needed, then run
npx wrangler pages dev src --port 8788
npx playwright test
```

## Evolution

If you improve the config during an attempt:
1. Document what changed and why
2. After attempt closes, merge improvements back here
3. Update this README if patterns change
