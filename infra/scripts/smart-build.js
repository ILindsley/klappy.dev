#!/usr/bin/env node
/**
 * smart-build.js
 * 
 * Handles build regardless of whether /src exists.
 * - If /src exists with app code: runs vite build
 * - If /src is empty/missing: copies /public to products/<lane>/dist as fallback
 * 
 * This ensures Cloudflare can always deploy, even on "nuked" branches.
 */

import { existsSync, readdirSync, cpSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

const VALID_LANES = ['website', 'ai-navigation', 'agent-skill'];

function parseLaneArg(argv) {
  const idx = argv.indexOf('--lane');
  if (idx !== -1 && argv[idx + 1]) return argv[idx + 1];
  return null;
}

const lane = parseLaneArg(process.argv) || 'ai-navigation';
if (!VALID_LANES.includes(lane)) {
  console.error(`\n❌ Invalid lane: ${lane}\n   Valid lanes: ${VALID_LANES.join(', ')}\n`);
  process.exit(1);
}

const LANE_ROOT = join(ROOT, 'products', lane);

// Transitional note:
// - lane builds are canonical output (D0013): products/<lane>/dist
// - current repo-root /src app is treated as ai-navigation until migrated
const ROOT_SRC_PATH = join(ROOT, 'src');
const LANE_SRC_PATH = join(LANE_ROOT, 'src');
const PUBLIC_PATH = join(ROOT, 'public');
const DIST_PATH = join(LANE_ROOT, 'dist');
const LEGACY_ROOT_DIST_PATH = join(ROOT, 'dist');

function srcHasCode(path) {
  if (!existsSync(path)) return false;
  
  const files = readdirSync(path, { recursive: true });
  // Check for actual code files (not just empty directories)
  return files.some(f => 
    f.endsWith('.js') || 
    f.endsWith('.jsx') || 
    f.endsWith('.ts') || 
    f.endsWith('.tsx') ||
    f.endsWith('.svelte') ||
    f.endsWith('.vue')
  );
}

function run(cmd) {
  console.log(`  $ ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
}

function copyPublicToDist() {
  console.log('\n📦 No /src code found — using fallback build\n');
  
  // Clean dist
  if (existsSync(DIST_PATH)) {
    rmSync(DIST_PATH, { recursive: true });
  }
  mkdirSync(DIST_PATH, { recursive: true });
  
  // Copy public to dist
  cpSync(PUBLIC_PATH, DIST_PATH, { recursive: true });
  
  console.log(`  ✅ Copied /public to products/${lane}/dist`);
  console.log('  ✅ Fallback build complete\n');
}

function mirrorLaneDistToLegacyRootDist() {
  // Transitional: keep repo-root /dist deployable until all infra
  // and Cloudflare projects are aligned to lane outputs.
  if (existsSync(LEGACY_ROOT_DIST_PATH)) {
    rmSync(LEGACY_ROOT_DIST_PATH, { recursive: true });
  }
  mkdirSync(LEGACY_ROOT_DIST_PATH, { recursive: true });
  cpSync(DIST_PATH, LEGACY_ROOT_DIST_PATH, { recursive: true });
  console.log('  ⚠️  Mirrored lane dist to legacy repo-root /dist');
}

function viteBuild() {
  console.log('\n🔨 Building with Vite...\n');
  // Canonical output: products/<lane>/dist
  //
  // If the lane has its own Vite root (products/<lane>/index.html), build lane-root.
  // Otherwise, treat repo-root app as ai-navigation (transitional).
  const laneIndex = join(LANE_ROOT, 'index.html');
  if (existsSync(laneIndex)) {
    run(`npx vite build --root "products/${lane}" --outDir dist --emptyOutDir`);
  } else if (lane === 'ai-navigation' && existsSync(join(ROOT, 'index.html'))) {
    run(`npx vite build --outDir "products/${lane}/dist" --emptyOutDir`);
  } else {
    copyPublicToDist();
    return;
  }
  console.log('\n  ✅ Vite build complete\n');
}

function main() {
  console.log('\n🏗️  Smart Build\n');
  console.log(`Lane: ${lane}\n`);
  
  // Always run sync and verify first
  console.log('1️⃣  Syncing content...');
  run('npm run sync');
  
  console.log('\n2️⃣  Verifying content...');
  run('npm run verify:content');
  
  // Check if we have app code for this lane
  console.log('\n3️⃣  Checking lane source...');
  
  const hasLaneCode = srcHasCode(LANE_SRC_PATH);
  const hasRootCode = srcHasCode(ROOT_SRC_PATH);

  if (hasLaneCode) {
    console.log(`  ✅ Found app code in products/${lane}/src`);
    viteBuild();
  } else if (lane === 'ai-navigation' && hasRootCode) {
    console.log('  ✅ Found app code in /src (transitional ai-navigation)');
    viteBuild();
  } else {
    console.log(`  ⚠️  No app code found for lane: ${lane}`);
    copyPublicToDist();
  }

  // Transitional compatibility: keep /dist around for current deploys.
  if (lane === 'ai-navigation' && existsSync(DIST_PATH)) {
    mirrorLaneDistToLegacyRootDist();
  }
  
  console.log('═'.repeat(50));
  console.log(`✅ Build complete. Output in products/${lane}/dist`);
  console.log('═'.repeat(50));
}

main();
