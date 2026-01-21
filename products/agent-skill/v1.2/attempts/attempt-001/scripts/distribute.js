#!/usr/bin/env node
/**
 * distribute.js
 *
 * Self-contained distribution test for agent-skill pack.
 * Proves the distribution mechanism works WITHOUT crossing lane boundaries.
 *
 * This script:
 * 1. Compiles the pack (within agent-skill lane)
 * 2. Creates a MOCK website dist structure WITHIN the attempt folder
 * 3. Copies the pack to the mock structure
 * 4. Verifies the copy
 *
 * This proves the mechanism works without touching the actual website lane.
 *
 * Usage: node products/agent-skill/attempts/prd-v1.2/attempt-001/scripts/distribute.js
 */

import { cpSync, mkdirSync, existsSync, readFileSync } from "fs";
import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Script is at: products/agent-skill/attempts/prd-v1.2/attempt-001/scripts/
// Need to go up 6 levels to reach repo root
const ROOT = join(__dirname, "../../../../../..");
const ATTEMPT_ROOT = join(__dirname, "..");

console.log("=".repeat(50));
console.log("Agent-Skill Distribution Test (Lane-Contained)");
console.log("=".repeat(50));
console.log(`\nRepo root: ${ROOT}`);
console.log(`Attempt root: ${ATTEMPT_ROOT}\n`);

// Step 1: Compile the pack (within agent-skill lane - allowed)
console.log("1️⃣  Compiling agent-skill pack...\n");
try {
  execSync("npm run lane:compile -- --lane agent-skill --pack prd-guide", {
    cwd: ROOT,
    stdio: "inherit",
  });
  console.log("\n   ✅ Pack compiled successfully\n");
} catch (error) {
  console.error("\n   ❌ Pack compilation failed");
  process.exit(1);
}

// Step 2: Create MOCK website dist structure WITHIN the attempt folder
// This proves the mechanism works without crossing lane boundaries
const mockWebsiteDist = join(ATTEMPT_ROOT, "mock-website-dist");
const mockPackDest = join(mockWebsiteDist, "packs/agent-skill/prd-guide-pack.md");

console.log("2️⃣  Creating mock website dist (within attempt folder)...\n");
console.log(`   Mock dist: ${mockWebsiteDist}\n`);

mkdirSync(dirname(mockPackDest), { recursive: true });

// Step 3: Copy pack to mock dist
const packSrc = join(ROOT, "products/agent-skill/dist/prd-guide-pack.md");

if (!existsSync(packSrc)) {
  console.error(`\n❌ ERROR: Pack not found at ${packSrc}`);
  process.exit(1);
}

console.log("3️⃣  Copying pack to mock website dist...\n");
console.log(`   Source: ${packSrc}`);
console.log(`   Dest:   ${mockPackDest}\n`);

cpSync(packSrc, mockPackDest);

console.log("   ✅ Pack copied to mock dist\n");

// Step 4: Verify copy
console.log("4️⃣  Verifying content match...\n");
const srcContent = readFileSync(packSrc, "utf8");
const destContent = readFileSync(mockPackDest, "utf8");

if (srcContent === destContent) {
  console.log("   ✅ Content matches exactly");
  console.log(`   Size: ${srcContent.length} bytes`);
  console.log(`   Lines: ${srcContent.split("\n").length}`);
} else {
  console.error("   ❌ Content mismatch!");
  console.error(`   Source size: ${srcContent.length}`);
  console.error(`   Dest size: ${destContent.length}`);
  process.exit(1);
}

// Summary
console.log("\n" + "=".repeat(50));
console.log("✅ Distribution Test Complete (Lane-Contained)");
console.log("=".repeat(50));
console.log(`
This test proved:
1. Pack can be compiled
2. Pack can be copied to a dist/packs/agent-skill/ structure
3. Content is preserved exactly

What this DOES NOT do:
- Does NOT touch products/website/dist/ (that would cross lane boundaries)
- Does NOT deploy anything

Mock dist location (within attempt folder):
  ${mockPackDest}

After CHAMPION PROMOTION, the real pack will be at:
  https://klappy.dev/packs/agent-skill/prd-guide-pack.md
`);
