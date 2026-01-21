# Champion Promotion Checklist

When this attempt is selected as champion for PRD v1.2:

---

## Files to Copy

### 1. Update lane source README

```bash
cp products/agent-skill/attempts/prd-v1.2/attempt-001/src/README.md \
   products/agent-skill/src/README.md
```

This adds the public URL documentation.

---

## Code to Apply

### 2. Update infra/scripts/smart-build.js

Replace the existing `infra/scripts/smart-build.js` with the modified version:

```bash
cp products/agent-skill/attempts/prd-v1.2/attempt-001/infra/scripts/smart-build.js \
   infra/scripts/smart-build.js
```

**Changes in the modified version:**

1. Added `copyPacksToWebsiteDist()` function (lines ~248-270)
2. Added call to `copyPacksToWebsiteDist()` in `main()` after `copyEvidenceToDist()`

**The new function:**

```javascript
function copyPacksToWebsiteDist() {
  if (lane !== "website") return;

  console.log("\n5️⃣  Copying packs to website dist (v1.2)...");

  // Compile agent-skill pack first
  console.log("  Compiling agent-skill pack...");
  run("npm run lane:compile -- --lane agent-skill --pack prd-guide");

  // Copy to website dist
  const packSrc = join(ROOT, "products/agent-skill/dist/prd-guide-pack.md");
  const packDest = join(DIST_PATH, "packs/agent-skill/prd-guide-pack.md");

  if (!existsSync(packSrc)) {
    throw new Error(`Pack not found: ${packSrc}`);
  }

  mkdirSync(dirname(packDest), { recursive: true });
  cpSync(packSrc, packDest);

  console.log("  ✅ Pack copied to dist/packs/agent-skill/");
}
```

---

## Verification After Promotion

### 3. Local verification

```bash
# Build the website
npm run build -- --lane website

# Verify pack exists in output
ls -la products/website/dist/packs/agent-skill/

# Verify content matches
diff products/agent-skill/dist/prd-guide-pack.md \
     products/website/dist/packs/agent-skill/prd-guide-pack.md
```

### 4. Deploy and verify public URL

```bash
# Commit and push to main
git add .
git commit -m "feat(agent-skill): add pack distribution to website build (v1.2)"
git push origin main

# Fast-forward prod to trigger deployment
git checkout prod
git merge main --ff-only
git push origin prod

# Wait for Cloudflare deployment (~2-3 minutes)

# Verify public URL
curl -I https://klappy.dev/packs/agent-skill/prd-guide-pack.md
# Should return HTTP 200

# Verify content
curl https://klappy.dev/packs/agent-skill/prd-guide-pack.md | head -20
# Should show pack header with provenance
```

---

## Ledger Update

### 5. Add entry to LEDGER.md

Add to `products/agent-skill/LEDGER.md`:

```markdown
## Entry — PRD v1.2 Champion

- Date: YYYY-MM-DD
- PRD: v1.2
- Epoch: E0003 (evidence-first)
- Champion: attempt-001
- Attempt path: `products/agent-skill/attempts/prd-v1.2/attempt-001/`

### Deliverable

- **Public URL**: https://klappy.dev/packs/agent-skill/prd-guide-pack.md
- **Mechanism**: Website build compiles and copies pack automatically

### What worked

- Lane isolation: all changes contained in attempt folder
- Simple copy mechanism, no complex routing

### What didn't

- (fill in if applicable)

### Learnings

- (fill in)

### Follow-up

- (fill in)
```

---

## Roadmap Update

### 6. Update ROADMAP.md

Update the v1.2 section in `products/agent-skill/ROADMAP.md`:

```markdown
## v1.2 - Distribution (CHAMPION)

**Status**: Complete
**Attempt**: `attempts/prd-v1.2/attempt-001/`

Added zero-friction public access to the pack via a stable URL.

**Outcome**: Pack available at `https://klappy.dev/packs/agent-skill/prd-guide-pack.md`

**Friction level**: Copy from URL
```

Add learnings to the Learnings Log section.

---

## Summary

| Step | Action                                       | Status |
| ---- | -------------------------------------------- | ------ |
| 1    | Copy `src/README.md` to lane src             | [ ]    |
| 2    | Copy `infra/scripts/smart-build.js` to infra | [ ]    |
| 3    | Run local build verification                 | [ ]    |
| 4    | Deploy and verify public URL                 | [ ]    |
| 5    | Update LEDGER.md                             | [ ]    |
| 6    | Update ROADMAP.md                            | [ ]    |
