#!/usr/bin/env node
/**
 * reserve-attempt.js
 * 
 * Reserves the next attempt number for a PRD version.
 * Prevents collisions when running parallel agents/worktrees.
 * 
 * Usage:
 *   npm run attempt:reserve -- --prd v0.2
 *   npm run attempt:reserve -- --prd 0.2 --agent worktree-a
 * 
 * What it does:
 *   1. Reads ATTEMPT_REGISTRY.json for the PRD version
 *   2. Reserves the next attempt number
 *   3. Commits and pushes the reservation
 *   4. Outputs the reserved number and branch name
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { prd: null, agent: 'default', dryRun: false };
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--prd' && args[i + 1]) {
      result.prd = args[i + 1].replace(/^v/, '');
      i++;
    } else if (args[i] === '--agent' && args[i + 1]) {
      result.agent = args[i + 1];
      i++;
    } else if (args[i] === '--dry-run') {
      result.dryRun = true;
    }
  }
  
  return result;
}

function run(cmd, options = {}) {
  const { dryRun, silent } = options;
  if (dryRun) {
    console.log(`  [DRY RUN] ${cmd}`);
    return '';
  }
  if (!silent) {
    console.log(`  $ ${cmd}`);
  }
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function reserve() {
  const { prd, agent, dryRun } = parseArgs();
  
  if (!prd) {
    console.log(`
Usage: npm run attempt:reserve -- --prd <version> [--agent <name>] [--dry-run]

Examples:
  npm run attempt:reserve -- --prd v0.2
  npm run attempt:reserve -- --prd 0.2 --agent worktree-a
`);
    process.exit(1);
  }
  
  console.log(`\n🎫 Reserving attempt for PRD v${prd}\n`);
  if (dryRun) {
    console.log('  [DRY RUN MODE - no changes will be made]\n');
  }
  
  // Paths
  const prdFolder = join(ROOT, 'attempts', `prd-v${prd}`);
  const registryPath = join(prdFolder, 'ATTEMPT_REGISTRY.json');
  
  // Step 1: Ensure we're on main and up to date
  console.log('1️⃣  Ensuring main is up to date...');
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  if (currentBranch !== 'main') {
    fail(`Must be on main branch to reserve. Currently on: ${currentBranch}`);
  }
  run('git pull origin main', { dryRun });
  console.log('  ✅ On main, pulled latest\n');
  
  // Step 2: Create PRD folder if needed
  if (!existsSync(prdFolder)) {
    console.log(`2️⃣  Creating PRD folder: attempts/prd-v${prd}/`);
    if (!dryRun) {
      mkdirSync(prdFolder, { recursive: true });
    }
  }
  
  // Step 3: Read or create registry
  console.log('3️⃣  Reading attempt registry...');
  let registry;
  if (existsSync(registryPath)) {
    registry = JSON.parse(readFileSync(registryPath, 'utf8'));
  } else {
    registry = {
      prd_version: prd,
      next_attempt: 1,
      reserved: [],
      sealed: []
    };
  }
  
  const attemptNum = registry.next_attempt;
  const attemptPadded = String(attemptNum).padStart(3, '0');
  console.log(`  ✅ Next available: attempt-${attemptPadded}\n`);
  
  // Step 4: Reserve the attempt
  console.log('4️⃣  Reserving attempt...');
  if (!dryRun) {
    registry.next_attempt = attemptNum + 1;
    registry.reserved.push({
      attempt: attemptNum,
      reserved_at: new Date().toISOString(),
      agent: agent
    });
    writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
  }
  console.log(`  ✅ Reserved: attempt-${attemptPadded}\n`);
  
  // Step 5: Commit and push
  console.log('5️⃣  Committing reservation...');
  run(`git add ${registryPath}`, { dryRun });
  run(`git commit -m "chore: reserve attempt-${attemptPadded} for PRD v${prd}"`, { dryRun });
  run('git push origin main', { dryRun });
  console.log('  ✅ Pushed to main\n');
  
  // Output
  const branchName = `attempt/prd-v${prd}/a${attemptPadded}`;
  const folderName = `attempts/prd-v${prd}/attempt-${attemptPadded}`;
  
  console.log('═'.repeat(60));
  console.log('\n🎫 RESERVATION COMPLETE\n');
  console.log(`  Attempt Number:  ${attemptNum}`);
  console.log(`  Branch Name:     ${branchName}`);
  console.log(`  Folder Path:     ${folderName}`);
  console.log(`  Agent:           ${agent}`);
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

1. Create the attempt branch:
   git checkout -b ${branchName}

2. Reset /src for fresh start:
   npm run attempt:reset

3. Build from PRD and capture evidence

4. Seal attempt when done:
   - Create ${folderName}/
   - Add ATTEMPT.md, META.json, evidence/
   - Merge artifacts to main
`);
}

reserve();
