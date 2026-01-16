#!/usr/bin/env node
/**
 * smart-build.js
 * 
 * Handles build regardless of whether /src exists.
 * - If /src exists with app code: runs vite build
 * - If /src is empty/missing: copies /public to /dist as fallback
 * 
 * This ensures Cloudflare can always deploy, even on "nuked" branches.
 */

import { existsSync, readdirSync, cpSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

const SRC_PATH = join(ROOT, 'src');
const PUBLIC_PATH = join(ROOT, 'public');
const DIST_PATH = join(ROOT, 'dist');

function srcHasCode() {
  if (!existsSync(SRC_PATH)) return false;
  
  const files = readdirSync(SRC_PATH, { recursive: true });
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
  
  console.log('  ✅ Copied /public to /dist');
  console.log('  ✅ Fallback build complete\n');
}

function viteBuild() {
  console.log('\n🔨 Building with Vite...\n');
  run('npx vite build');
  console.log('\n  ✅ Vite build complete\n');
}

function main() {
  console.log('\n🏗️  Smart Build\n');
  
  // Always run sync and verify first
  console.log('1️⃣  Syncing content...');
  run('npm run sync');
  
  console.log('\n2️⃣  Verifying content...');
  run('npm run verify:content');
  
  // Check if we have app code
  console.log('\n3️⃣  Checking /src...');
  
  if (srcHasCode()) {
    console.log('  ✅ Found app code in /src');
    viteBuild();
  } else {
    console.log('  ⚠️  No app code in /src');
    copyPublicToDist();
  }
  
  console.log('═'.repeat(50));
  console.log('✅ Build complete. Output in /dist');
  console.log('═'.repeat(50));
}

main();
