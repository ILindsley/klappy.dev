# Cloudflare Pages Setup Guide — agent-skill Lane

This document provides step-by-step instructions for configuring the Cloudflare Pages project for the agent-skill lane.

---

## Prerequisites

- Cloudflare account with access to the klappy.dev zone
- GitHub account with access to the klappy.dev repository
- DNS management access for klappy.dev

---

## Step 1: Create New Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account
3. Navigate to **Workers & Pages** in the left sidebar
4. Click **Create application**
5. Select **Pages** tab
6. Click **Connect to Git**

---

## Step 2: Connect Repository

1. Select **GitHub** as the Git provider
2. Authorize Cloudflare if not already done
3. Select the **klappy.dev** repository
4. Click **Begin setup**

---

## Step 3: Configure Build Settings

| Setting | Value |
|---------|-------|
| **Project name** | `agent-skill` |
| **Production branch** | `prod` |
| **Framework preset** | None |
| **Build command** | *(leave empty)* |
| **Build output directory** | `public/agent-skill` |
| **Root directory** | `.` |

**Important**: 
- Leave the build command empty. This is a static file deployment — no build step needed.
- Use `public/agent-skill` (not `products/agent-skill`) to ensure only promoted content is accessible.

---

## Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the initial deployment to complete
3. Note the default URL: `agent-skill.pages.dev`

---

## Step 5: Configure Custom Domain (Optional)

1. Go to the **agent-skill** project in Cloudflare Pages
2. Navigate to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `agent-skill.klappy.dev`
5. Click **Continue**
6. Cloudflare will automatically configure DNS if klappy.dev is on the same account
7. Wait for DNS propagation (usually a few minutes)

---

## Step 6: Verify Deployment

After deployment completes, verify these URLs return HTTP 200:

### Using Default Domain
```bash
curl -I https://agent-skill.pages.dev/v1.1/prd-guide-pack.md
curl -I https://agent-skill.pages.dev/v1.1/README.md
```

### Using Custom Domain (after DNS propagation)
```bash
curl -I https://agent-skill.klappy.dev/v1.1/prd-guide-pack.md
curl -I https://agent-skill.klappy.dev/v1.1/README.md
```

---

## Expected URL Structure

| URL | Content |
|-----|---------|
| `/latest/prd-guide-pack.md` | Always points to current champion |
| `/v1.1/prd-guide-pack.md` | The compiled PRD guide pack (~12K tokens) |
| `/v1.1/README.md` | Consumer guidance for using the pack |
| `/v1.1/_meta/` | Compilation metadata |

**Note**: The `/latest/` path provides a stable URL for consumers who always want the current champion. Versioned paths (`/v1.1/`) allow pinning to specific versions. Build outputs deploy the *contents* of dist, not the dist folder itself.

---

## Troubleshooting

### 404 on pack URL
- Verify the `v1.1/` folder exists in `public/agent-skill/`
- Check that `public/agent-skill` is set as the build output directory
- Ensure the deployment completed successfully
- Verify content has been promoted to `public/agent-skill/` (source is in `products/agent-skill/`)
- Note: Deploy the *contents* of dist, not the dist folder itself

### Custom domain not working
- Check DNS propagation: `dig agent-skill.klappy.dev`
- Verify SSL certificate is active in Cloudflare Pages settings
- Wait up to 24 hours for full propagation

### Build failures
- This project should have NO build command
- If build fails, check that the build command field is empty

---

## Post-Setup Checklist

- [ ] Default domain serves pack: `agent-skill.pages.dev/v1.1/prd-guide-pack.md`
- [ ] Default domain serves latest: `agent-skill.pages.dev/latest/prd-guide-pack.md`
- [ ] Custom domain configured (optional): `agent-skill.klappy.dev`
- [ ] HTTP 200 verified for versioned pack URL
- [ ] HTTP 200 verified for latest pack URL
- [ ] HTTP 200 verified for README URL
- [ ] Content matches local file in `public/agent-skill/`
