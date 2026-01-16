# ☁️ Cloudflare Pages Configuration

This document describes how Cloudflare Pages should be configured for the klappy.dev repository.

---

## 🌿 Branch Roles

| Branch | Purpose | Deploy Target |
|--------|---------|---------------|
| `prod` | Live production deployment | **Production URL** (klappy.dev) |
| `main` | Experiment aggregation + history | Preview URL only |
| `attempt/*` | Ephemeral agent workspaces | Preview URLs |

---

## ⚠️ Critical Configuration

### Production Branch

**Set the production branch to `prod`, NOT `main`.**

In Cloudflare Pages → Settings → Builds & deployments:

```
Production branch: prod
```

This ensures:
- Only promoted, verified code goes to production
- `main` can be used for experimentation without risk
- Agents can never accidentally deploy to production

### Preview Deployments

**Enable preview deployments for ALL branches.**

In Cloudflare Pages → Settings → Builds & deployments:

```
Preview branches: All non-production branches
```

This ensures:
- Every `attempt/*` branch gets a preview URL
- Agents can verify their work before promotion
- Reviewers can compare multiple attempts side-by-side

---

## 🛠️ Build Configuration

```
Build command:     npm run build
Build output:      dist
Root directory:    (leave empty)
```

---

## 📋 Expected Behavior

| Action | Result |
|--------|--------|
| Push to `prod` | Deploys to klappy.dev (production) |
| Push to `main` | Deploys to preview URL (main.klappy-dev.pages.dev) |
| Push to `attempt/prd-v0.2/a001` | Deploys to preview URL (attempt-prd-v0-2-a001.klappy-dev.pages.dev) |
| `npm run attempt:promote` | Merges to main, fast-forwards prod → deploys to production |

---

## ✅ Verification

After configuring, verify:

1. **Push to prod** → klappy.dev updates
2. **Push to main** → main.klappy-dev.pages.dev updates (NOT klappy.dev)
3. **Push to attempt branch** → preview URL generates

---

## 💡 Why This Matters

> **Production and experimentation must never share a mutable surface.**

This configuration ensures:
- Production is always stable
- Experiments are always disposable
- Nuclear resets on `main` never affect production
- Agents can work in parallel without coordination
- One winner ships; losers don't pollute production

---

## 📝 Note on Branch Naming

> **Branch names are optional convenience. Provenance lives in META.json.**

Cloudflare does not depend on specific branch naming conventions. Any branch that:
- Is not `prod`
- Produces a valid `/dist` on build

Will get a preview URL.

The canonical record of "who made what" lives in `META.json`, not in the branch name.
This keeps the system antifragile — branch naming can drift without breaking provenance.
