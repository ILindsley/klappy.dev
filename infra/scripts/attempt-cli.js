#!/usr/bin/env node
/**
 * attempt-cli.js
 * 
 * Unified CLI for the ODD attempt lifecycle.
 * 
 * Commands:
 *   npm run attempt:start -- --prd v0.2
 *   npm run attempt:spawn -- --prd v0.2 --n 4
 *   npm run attempt:reset
 *   npm run attempt:promote -- --prd v0.2 --attempt 001
 * 
 * What attempt:start does (everything automated):
 *   1. Validates git clean state
 *   2. Ensures on main, pulls latest
 *   3. Reserves attempt number (commits to main)
 *   4. Creates attempt branch
 *   5. Resets /src to minimal shell
 *   6. Commits reset baseline
 *   7. Prints branch name, attempt ID, PRD snapshot SHA
 * 
 * What attempt:spawn does:
 *   Same as start, but for N parallel attempts.
 *   Each branch gets /src reset and committed.
 *   Optionally creates worktrees.
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { randomBytes } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

// ============================================================
// Utilities
// ============================================================

/**
 * Parse PRD version from /docs/PRD.md (single source of truth).
 * 
 * Looks for:
 *   | **PRD Version** | v0.3 |
 * OR:
 *   PRD Version: v0.3
 * 
 * Returns version without 'v' prefix (e.g., "0.3").
 */
function parsePrdVersion() {
  const prdPath = join(ROOT, 'docs', 'PRD.md');
  
  if (!existsSync(prdPath)) {
    return null;
  }
  
  const content = readFileSync(prdPath, 'utf8');
  
  // Match table format: | **PRD Version** | v0.3 |
  const tableMatch = content.match(/\|\s*\*\*PRD Version\*\*\s*\|\s*v?([0-9.]+)\s*\|/i);
  if (tableMatch) {
    return tableMatch[1];
  }
  
  // Match key-value format: PRD Version: v0.3
  const kvMatch = content.match(/PRD Version:\s*v?([0-9.]+)/i);
  if (kvMatch) {
    return kvMatch[1];
  }
  
  return null;
}

function run(cmd, options = {}) {
  const { silent, dryRun, cwd } = options;
  if (dryRun) {
    console.log(`  [DRY RUN] ${cmd}`);
    return '';
  }
  if (!silent) {
    console.log(`  $ ${cmd}`);
  }
  return execSync(cmd, { cwd: cwd || ROOT, encoding: 'utf8' }).trim();
}

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function generateRunId() {
  // Short 8-char hex ID (collision-resistant for practical purposes)
  return randomBytes(4).toString('hex');
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { 
    command: null,
    prd: null, 
    attempt: null,
    n: 1,
    agent: 'default',
    worktree: false,
    worktreeDir: null,
    dryRun: false,
    force: false,
    noCommit: false,
    noNuke: false
  };
  
  // First arg is command
  if (args[0] && !args[0].startsWith('--')) {
    result.command = args[0];
  }
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const next = args[i + 1];
    
    if (arg === '--prd' && next) {
      result.prd = next.replace(/^v/, '');
      i++;
    } else if (arg === '--attempt' && next) {
      result.attempt = next.padStart(3, '0');
      i++;
    } else if (arg === '--n' && next) {
      result.n = parseInt(next, 10);
      i++;
    } else if (arg === '--agent' && next) {
      result.agent = next;
      i++;
    } else if (arg === '--worktree') {
      result.worktree = true;
    } else if (arg === '--worktree-dir' && next) {
      result.worktreeDir = next;
      result.worktree = true;
      i++;
    } else if (arg === '--dry-run') {
      result.dryRun = true;
    } else if (arg === '--force') {
      result.force = true;
    } else if (arg === '--no-commit') {
      result.noCommit = true;
    } else if (arg === '--no-nuke') {
      result.noNuke = true;
    }
  }
  
  return result;
}

// ============================================================
// Minimal shell files
// ============================================================

const SHELL_FILES = {
  'main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,

  'index.css': `/* 
 * Minimal reset - no UI opinions
 * Build your attempt's design from scratch
 */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100%;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}
`,

  'components/App.jsx': `import { useState, useEffect } from 'react';

/**
 * Minimal App Shell
 * 
 * This shell proves the build works and content loads.
 * Replace everything here with your attempt's implementation.
 * 
 * PRD: /docs/PRD.md
 * Manifest: /public/content/manifest.json
 */
export default function App() {
  const [manifest, setManifest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/content/manifest.json')
      .then(r => r.json())
      .then(setManifest)
      .catch(e => setError(e.message));
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', color: 'red' }}>
        <h1>Manifest Load Failed</h1>
        <pre>{error}</pre>
      </div>
    );
  }

  if (!manifest) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Loading manifest...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Fresh Attempt Shell</h1>
      <p>Manifest loaded successfully. {manifest.resources?.length || 0} resources available.</p>
      <hr style={{ margin: '1rem 0' }} />
      <p><strong>Next:</strong> Read the PRD and build your implementation.</p>
      <ul>
        <li>PRD: <code>/docs/PRD.md</code></li>
        <li>Manifest: <code>/public/content/manifest.json</code></li>
        <li>This file: <code>/src/components/App.jsx</code></li>
      </ul>
    </div>
  );
}
`
};

// SAFETY: Only these paths may be purged during nuke
const EPHEMERAL_PATHS = [
  'src',
  'app',
  'index.html',       // App entry (if not in public)
  'vite.config.js',
  'vite.config.ts',
  'tsconfig.json',
  'tailwind.config.js',
  'postcss.config.js',
  // NOTE: package.json intentionally NOT nuked to preserve scripts
  // Agents can modify package.json but the scripts should remain
];

// These are NEVER touched during nuke (the contract)
const PROTECTED_PATHS = [
  'canon',
  'docs',
  'attempts',
  'infra',
  'public',
  '.cloudflare',
  '.github',
];

// ============================================================
// Core functions
// ============================================================

function ensureCleanMain(opts) {
  const { dryRun, force } = opts;
  
  console.log('1️⃣  Validating git state...');
  
  // Check for uncommitted changes
  const status = run('git status --porcelain', { silent: true, dryRun: false });
  if (status && !force) {
    fail('Working directory not clean. Commit or stash changes first.\n' +
         '   (use --force to override)\n\n' + status);
  }
  if (status && force) {
    console.log('  ⚠️  Working directory not clean (--force used)');
  } else {
    console.log('  ✅ Working directory clean');
  }
  
  // Check we're on main
  const branch = run('git branch --show-current', { silent: true, dryRun: false });
  if (branch !== 'main') {
    fail(`Must be on main branch. Currently on: ${branch}`);
  }
  console.log('  ✅ On main branch');
  
  // Pull latest
  console.log('  📥 Pulling latest main...');
  run('git pull origin main', { dryRun });
  console.log('  ✅ Main is up to date\n');
}

function reserveAttemptNumber(prd, agent, opts) {
  const { dryRun } = opts;
  
  console.log('2️⃣  Reserving attempt number...');
  
  const prdFolder = join(ROOT, 'attempts', `prd-v${prd}`);
  const registryPath = join(prdFolder, 'ATTEMPT_REGISTRY.json');
  
  // Create folder if needed
  if (!existsSync(prdFolder) && !dryRun) {
    mkdirSync(prdFolder, { recursive: true });
  }
  
  // Read or create registry
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
  
  // Reserve it
  if (!dryRun) {
    registry.next_attempt = attemptNum + 1;
    registry.reserved.push({
      attempt: attemptNum,
      reserved_at: new Date().toISOString(),
      agent: agent
    });
    writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
  }
  
  // Commit to main
  run(`git add ${registryPath}`, { dryRun });
  run(`git commit -m "chore: reserve attempt-${attemptPadded} for PRD v${prd}"`, { dryRun });
  run('git push origin main', { dryRun });
  
  console.log(`  ✅ Reserved: attempt-${attemptPadded}\n`);
  
  return { attemptNum, attemptPadded };
}

function createAttemptBranch(prd, attemptPadded, opts) {
  const { dryRun } = opts;
  
  console.log('3️⃣  Creating attempt branch...');
  
  const branchName = `attempt/prd-v${prd}/a${attemptPadded}`;
  const prdSha = run('git rev-parse HEAD', { silent: true, dryRun: false });
  
  run(`git checkout -b ${branchName}`, { dryRun });
  
  console.log(`  ✅ Created: ${branchName}`);
  console.log(`  📌 PRD snapshot: ${prdSha.substring(0, 8)}\n`);
  
  return { branchName, prdSha };
}

/**
 * Reset /src to minimal shell.
 * Can operate in current directory or a specific cwd (for worktrees).
 */
function resetSrc(opts, targetDir = ROOT) {
  const { dryRun, noCommit } = opts;
  
  console.log('4️⃣  Resetting /src to minimal shell...');
  
  const srcPath = join(targetDir, 'src');
  const appPath = join(targetDir, 'app');
  
  // Delete /src
  if (existsSync(srcPath) && !dryRun) {
    rmSync(srcPath, { recursive: true });
  }
  
  // Delete /app if present
  if (existsSync(appPath) && !dryRun) {
    rmSync(appPath, { recursive: true });
  }
  
  // Create minimal shell
  if (!dryRun) {
    mkdirSync(join(srcPath, 'components'), { recursive: true });
    for (const [filename, content] of Object.entries(SHELL_FILES)) {
      writeFileSync(join(srcPath, filename), content);
    }
  }
  
  // Commit reset (unless --no-commit)
  if (!noCommit) {
    run('git add src/', { dryRun, cwd: targetDir });
    run('git commit -m "chore: reset /src to minimal shell for fresh attempt"', { dryRun, cwd: targetDir });
  }
  
  console.log('  ✅ /src reset and committed\n');
}

function printStartSummary(prd, attemptPadded, branchName, prdSha) {
  console.log('═'.repeat(60));
  console.log('\n🚀 ATTEMPT READY\n');
  console.log(`  PRD Version:     v${prd}`);
  console.log(`  Attempt:         ${attemptPadded}`);
  console.log(`  Branch:          ${branchName}`);
  console.log(`  PRD Snapshot:    ${prdSha.substring(0, 8)}`);
  console.log(`  Preview URL:     https://${branchName.replace(/\//g, '-')}.klappy-dev.pages.dev (after push)`);
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next step:

   Paste the kickoff prompt into your agent:
   /docs/PROMPT_ATTEMPT_KICKOFF.txt

   Then push to trigger preview deploy:
   git push origin ${branchName}
`);
}

// ============================================================
// Commands
// ============================================================

function cmdStart(opts) {
  const { prd, agent, dryRun } = opts;
  
  if (!prd) {
    console.log(`
Usage: npm run attempt:start -- --prd <version>

Example:
  npm run attempt:start -- --prd v0.2

Options:
  --prd <version>   PRD version (required)
  --agent <name>    Agent identifier (default: "default")
  --force           Override clean working directory check
  --dry-run         Show what would happen without making changes
`);
    process.exit(1);
  }
  
  console.log(`\n🚀 Starting attempt for PRD v${prd}\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  ensureCleanMain(opts);
  const { attemptPadded } = reserveAttemptNumber(prd, agent, opts);
  const { branchName, prdSha } = createAttemptBranch(prd, attemptPadded, opts);
  resetSrc(opts);
  printStartSummary(prd, attemptPadded, branchName, prdSha);
}

/**
 * NUKE: Guarantee blank slate for ephemeral paths.
 * 
 * Branch safety rules:
 *   - ❌ Refuses on prod (NEVER)
 *   - ❌ Refuses on main unless --force
 *   - ✅ Allowed on attempt/* branches
 * 
 * Deletes ONLY the EPHEMERAL_PATHS list.
 * Protected paths (canon, docs, infra, etc.) are NEVER touched.
 */
function cmdNuke(opts) {
  const { dryRun, force } = opts;
  const all = opts.all || process.argv.includes('--all');
  
  console.log('\n💥 NUKE — Blank Slate Reset\n');
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // ========================================
  // BRANCH SAFETY CHECK (Critical)
  // ========================================
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  
  // NEVER allow nuke on prod
  if (currentBranch === 'prod') {
    fail('🛑 REFUSED: Cannot nuke on prod branch.\n' +
         '   prod is the live production deployment.\n' +
         '   Switch to an attempt/* branch first.');
  }
  
  // Warn and require --force on main
  if (currentBranch === 'main' && !force) {
    console.log('  ⚠️  WARNING: You are on main branch!');
    console.log('  ⚠️  main is the experiment aggregation branch.');
    console.log('');
    console.log('  Nuking main will remove any UI code currently there.');
    console.log('  Production (prod branch) is NOT affected.');
    console.log('');
    console.log('  To proceed, use:');
    console.log('    npm run attempt:nuke -- --force');
    console.log('');
    console.log('  Or switch to an attempt branch:');
    console.log('    git checkout attempt/prd-v0.2/a001');
    console.log('');
    fail('Use --force to nuke main, or run from an attempt/* branch.');
  }
  
  // Confirm attempt/* branch is allowed
  const isAttemptBranch = currentBranch.startsWith('attempt/');
  if (!isAttemptBranch && currentBranch !== 'main') {
    console.log(`  ⚠️  Unknown branch type: ${currentBranch}`);
    console.log('  Expected: attempt/* or main');
    if (!force) {
      fail('Use --force to nuke on this branch.');
    }
  }
  
  console.log(`  Branch: ${currentBranch}`);
  if (isAttemptBranch) {
    console.log('  ✅ Attempt branch — nuke allowed\n');
  } else if (currentBranch === 'main' && force) {
    console.log('  ⚠️  main branch with --force — proceeding with caution\n');
  }
  
  // ========================================
  // SHOW WHAT WILL BE DELETED
  // ========================================
  console.log('1️⃣  Scanning ephemeral paths...\n');
  console.log('  Will delete:');
  
  const toDelete = [];
  for (const p of EPHEMERAL_PATHS) {
    const fullPath = join(ROOT, p);
    if (existsSync(fullPath)) {
      toDelete.push(p);
      console.log(`    ✗ /${p}`);
    }
  }
  
  if (toDelete.length === 0) {
    console.log('    (nothing to delete - already clean)');
  }
  
  console.log('');
  console.log('  Protected (NEVER deleted):');
  for (const p of PROTECTED_PATHS) {
    console.log(`    ✓ /${p}`);
  }
  console.log('');
  
  // ========================================
  // EXECUTE DELETION
  // ========================================
  if (toDelete.length > 0) {
    console.log('2️⃣  Deleting ephemeral paths...\n');
    
    for (const p of toDelete) {
      const fullPath = join(ROOT, p);
      if (!dryRun) {
        rmSync(fullPath, { recursive: true, force: true });
      }
      console.log(`  ✅ Deleted /${p}`);
    }
    console.log('');
  }
  
  // ========================================
  // COMMIT IF NOT --no-commit
  // ========================================
  if (!opts.noCommit && toDelete.length > 0) {
    console.log('3️⃣  Committing nuke...');
    run('git add -A', { dryRun });
    run('git commit -m "chore: nuke ephemeral paths for fresh attempt" --allow-empty', { dryRun });
    console.log('  ✅ Committed\n');
  }
  
  // ========================================
  // SUMMARY
  // ========================================
  console.log('═'.repeat(60));
  console.log('\n💥 NUKE COMPLETE\n');
  console.log(`  Branch: ${currentBranch}`);
  console.log(`  Deleted: ${toDelete.length} path(s)`);
  console.log('  Protected paths: intact');
  console.log('');
  console.log('  The deploy contract (/infra/contracts/build-output.md) is preserved.');
  console.log('  Choose any stack. Build must produce /dist.');
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

   1. Choose your stack (React, Vue, Svelte, vanilla, etc.)
   2. Install dependencies: npm install <packages>
   3. Create your implementation
   4. Build: npm run build
   5. Submit: npm run attempt:submit
`);
}

/**
 * Nuclear reset: Nuke + clean up attempt branches for a PRD.
 * 
 * This is the "hard reset" for starting a fresh PRD cycle.
 * Combines nuke with branch cleanup.
 */
function cmdReset(opts) {
  const { dryRun, noCommit, prd, force } = opts;
  
  console.log('\n💥 NUCLEAR RESET\n');
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // Check if we're on main - warn about production
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  const isMain = currentBranch === 'main';
  
  if (isMain && !force) {
    console.log('  ⚠️  WARNING: You are on main branch!');
    console.log('  ⚠️  Nuking /src on main will break production.');
    console.log('');
    console.log('  If you ONLY want to clean up attempt branches (recommended):');
    console.log('    npm run attempt:reset -- --prd v0.2 --no-nuke');
    console.log('');
    console.log('  If you really want to nuke production too:');
    console.log('    npm run attempt:reset -- --prd v0.2 --force');
    console.log('');
    
    // Only do branch cleanup if --prd was provided
    if (prd) {
      console.log('  Proceeding with branch cleanup only (not nuking /src)...\n');
      opts.noNuke = true;
    } else {
      fail('Use --force to nuke /src on main, or run from an attempt branch.');
    }
  }
  
  // ========================================
  // Part 1: Nuke /src (unless --no-nuke or on main without --force)
  // ========================================
  if (!opts.noNuke) {
    console.log('1️⃣  Nuking /src...\n');
  console.log('  Will delete:');
  console.log('    - /src (entire directory)');
  console.log('    - /app (if exists)');
  console.log('    - vite.config.js (framework-specific)');
  console.log('');
  } else {
    console.log('1️⃣  Skipping /src nuke (production protected)\n');
  }
  
  if (!opts.noNuke) {
  const srcPath = join(ROOT, 'src');
  const appPath = join(ROOT, 'app');
  const viteConfig = join(ROOT, 'vite.config.js');
  
  // Delete /src
  if (existsSync(srcPath)) {
    if (!dryRun) rmSync(srcPath, { recursive: true });
    console.log('  ✅ Deleted /src');
  } else {
    console.log('  ⚠️  /src does not exist');
  }
  
  // Delete /app if present
  if (existsSync(appPath)) {
    if (!dryRun) rmSync(appPath, { recursive: true });
    console.log('  ✅ Deleted /app');
  }
  
  // Delete vite.config.js (framework-specific)
  if (existsSync(viteConfig)) {
    if (!dryRun) rmSync(viteConfig);
    console.log('  ✅ Deleted vite.config.js');
    }
  }
  
  // ========================================
  // Part 2: Clean up attempt branches (if --prd provided)
  // ========================================
  if (prd) {
    console.log(`\n2️⃣  Cleaning up attempt branches for PRD v${prd}...\n`);
    
    // Find local attempt branches
    const localBranchOutput = run('git branch', { silent: true, dryRun: false });
    const localBranches = localBranchOutput
      .split('\n')
      .map(b => b.trim().replace('* ', ''))
      .filter(b => b.startsWith(`attempt/prd-v${prd}/`));
    
    // Find remote attempt branches
    const remoteBranchOutput = run('git branch -r', { silent: true, dryRun: false });
    const remoteBranches = remoteBranchOutput
      .split('\n')
      .map(b => b.trim())
      .filter(b => b.startsWith(`origin/attempt/prd-v${prd}/`))
      .map(b => b.replace('origin/', ''));
    
    console.log(`  Found ${localBranches.length} local branches`);
    console.log(`  Found ${remoteBranches.length} remote branches\n`);
    
    // Delete local branches
    for (const branch of localBranches) {
      console.log(`  🗑️  Deleting local: ${branch}`);
      if (!dryRun) {
        try {
          run(`git branch -D "${branch}"`, { silent: true });
        } catch (e) {
          console.log(`     ⚠️  Could not delete (might be current branch)`);
        }
      }
    }
    
    // Delete remote branches
    for (const branch of remoteBranches) {
      console.log(`  🗑️  Deleting remote: origin/${branch}`);
      if (!dryRun) {
        try {
          run(`git push origin --delete "${branch}"`, { silent: true });
        } catch (e) {
          console.log(`     ⚠️  Could not delete remote`);
        }
      }
    }
    
    // Clean up _runs folder
    const runsPath = join(ROOT, 'attempts', `prd-v${prd}`, '_runs');
    if (existsSync(runsPath)) {
      console.log(`\n  🗑️  Deleting _runs folder...`);
      if (!dryRun) rmSync(runsPath, { recursive: true });
      console.log('  ✅ Deleted _runs/');
    }
    
    // Reset registry
    const registryPath = join(ROOT, 'attempts', `prd-v${prd}`, 'ATTEMPT_REGISTRY.json');
    if (existsSync(registryPath)) {
      console.log(`\n  🔄 Resetting attempt registry...`);
      if (!dryRun) {
        const registry = {
          prd_version: prd,
          next_attempt: 1,
          reserved: [],
          sealed: [],
          finalized: [],
          notes: `Reset on ${new Date().toISOString()}. Previous attempts cleared.`
        };
        writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
      }
      console.log('  ✅ Registry reset to attempt 1');
    }
  }
  
  // ========================================
  // Part 3: Commit changes
  // ========================================
  if (!noCommit) {
    console.log('\n3️⃣  Committing nuke...');
    run('git add -A', { dryRun });
    const msg = prd 
      ? `chore: nuclear reset for PRD v${prd} - nuked src and cleared attempt branches`
      : 'chore: nuke /src for fresh attempt (stack-agnostic)';
    run(`git commit -m "${msg}" --allow-empty`, { dryRun });
    console.log('  ✅ Committed\n');
  } else {
    console.log('\n  Skipping commit (--no-commit)\n');
  }
  
  console.log('═'.repeat(60));
  console.log('\n💥 NUCLEAR RESET COMPLETE\n');
  console.log('  /src is gone. Choose any stack for your attempt.');
  if (prd) {
    console.log(`  All attempt branches for PRD v${prd} have been deleted.`);
    console.log('  Registry reset - next attempt will be attempt-001.');
  }
  console.log('  Deploy contract preserved: /public/index.html serves as fallback.');
  console.log('\n' + '═'.repeat(60));
  
  if (prd) {
    // Auto-cleanup after nuclear reset
    console.log('\n7️⃣  Auto-cleanup: pruning stale worktrees...');
    try {
      run('git worktree prune', { dryRun, silent: true });
      
      // Remove detached worktrees automatically
      const worktreeOutput = run('git worktree list --porcelain', { silent: true, dryRun: false });
      let cleanedCount = 0;
      let currentPath = null;
      let isDetached = false;
      
      for (const line of worktreeOutput.split('\n')) {
        if (line.startsWith('worktree ')) {
          // Process previous worktree if it was detached
          if (currentPath && isDetached && currentPath.includes('.cursor/worktrees/')) {
            if (!dryRun) {
              try {
                run(`git worktree remove --force "${currentPath}"`, { silent: true });
                cleanedCount++;
              } catch (e) { /* ignore */ }
            }
          }
          currentPath = line.replace('worktree ', '');
          isDetached = false;
        } else if (line === 'detached') {
          isDetached = true;
        }
      }
      // Process last one
      if (currentPath && isDetached && currentPath.includes('.cursor/worktrees/')) {
        if (!dryRun) {
          try {
            run(`git worktree remove --force "${currentPath}"`, { silent: true });
            cleanedCount++;
          } catch (e) { /* ignore */ }
        }
      }
      
      if (cleanedCount > 0) {
        console.log(`  ✅ Removed ${cleanedCount} orphaned worktrees`);
      } else {
        console.log('  ✅ No orphaned worktrees');
      }
      
      // Prune stale remote refs
      run('git fetch --prune', { dryRun, silent: true });
      console.log('  ✅ Remote refs pruned\n');
    } catch (e) {
      console.log('  ⚠️  Cleanup encountered errors (non-fatal)\n');
    }
    
    console.log(`
📋 Ready for fresh attempts:

   1. Commit this state (if not auto-committed)
   2. Push to main: git push origin main
   3. Create worktrees for agents
   4. Paste /docs/PROMPT_ATTEMPT_KICKOFF.txt into each agent

Agents will now start from a clean main with all the latest scripts.
`);
  }
}

/**
 * Register a new run (Phase A of two-phase model).
 * Creates unique run_id, writes .attempt.json, creates _runs/<run_id>/ folder.
 * 
 * This is called by each agent inside its worktree at the start of work.
 * No attempt numbers are assigned yet - that happens during finalize.
 * 
 * PRD version is automatically read from /docs/PRD.md (single source of truth).
 * If --prd is provided, it must match PRD.md or the command fails.
 */
function cmdRegister(opts) {
  const { agent, dryRun } = opts;
  
  // Parse PRD version from /docs/PRD.md (single source of truth)
  const activePrd = parsePrdVersion();
  
  if (!activePrd) {
    fail('Could not parse PRD version from /docs/PRD.md.\n' +
         '   Expected format: | **PRD Version** | v0.3 | (in table)\n' +
         '   Or: PRD Version: v0.3');
  }
  
  // If --prd was provided, validate it matches the active PRD
  if (opts.prd && opts.prd !== activePrd) {
    fail(`PRD mismatch detected!\n\n` +
         `   --prd argument:     v${opts.prd}\n` +
         `   /docs/PRD.md says:  v${activePrd}\n\n` +
         `   The PRD version in /docs/PRD.md is the source of truth.\n` +
         `   Update your prompt or use:\n\n` +
         `     npm run attempt:register\n\n` +
         `   (no --prd argument needed)`);
  }
  
  const prd = activePrd;
  
  console.log(`\n🎫 Registering run for PRD v${prd}\n`);
  console.log(`  (Version auto-detected from /docs/PRD.md)\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // Generate unique run ID
  const runId = generateRunId();
  const timestamp = new Date().toISOString();
  const branch = run('git branch --show-current', { silent: true, dryRun: false }) || 'unknown';
  
  // Paths
  const prdFolder = join(ROOT, 'attempts', `prd-v${prd}`);
  const runsFolder = join(prdFolder, '_runs');
  const runFolder = join(runsFolder, runId);
  const runsDir = `attempts/prd-v${prd}/_runs/${runId}`;
  
  console.log('1️⃣  Creating run folder...');
  if (!dryRun) {
    mkdirSync(join(runFolder, 'evidence'), { recursive: true });
  }
  console.log(`  ✅ Created: ${runsDir}/\n`);
  
  // Write .attempt.json in worktree root
  console.log('2️⃣  Writing .attempt.json...');
  const attemptMeta = {
    prd: `v${prd}`,
    run_id: runId,
    agent: agent,
    branch: branch,
    registered_at: timestamp,
    runs_dir: runsDir
  };
  if (!dryRun) {
    writeFileSync(join(ROOT, '.attempt.json'), JSON.stringify(attemptMeta, null, 2) + '\n');
  }
  console.log('  ✅ Written .attempt.json\n');
  
  // Write skeleton META.json in run folder
  console.log('3️⃣  Creating skeleton files...');
  const meta = {
    prd_version: `v${prd}`,
    run_id: runId,
    attempt: null, // Will be assigned during finalize
    agent: agent,
    branch: branch,
    registered_at: timestamp,
    finalized_at: null,
    status: 'in_progress'
  };
  if (!dryRun) {
    writeFileSync(join(runFolder, 'META.json'), JSON.stringify(meta, null, 2) + '\n');
    writeFileSync(join(runFolder, 'ATTEMPT.md'), `# Attempt (Run ${runId})\n\n## Summary\n\n_TODO: Describe what was built_\n\n## Approach\n\n_TODO: Describe the approach taken_\n`);
    writeFileSync(join(runFolder, 'EVIDENCE.md'), `# Evidence (Run ${runId})\n\n## Screenshots\n\n_TODO: Add evidence files to evidence/ folder and reference them here_\n`);
  }
  console.log('  ✅ Created META.json, ATTEMPT.md, EVIDENCE.md\n');
  
  // Print summary
  console.log('═'.repeat(60));
  console.log('\n🎫 RUN REGISTERED\n');
  console.log(`  PRD Version:   v${prd}`);
  console.log(`  Run ID:        ${runId}`);
  console.log(`  Agent:         ${agent}`);
  console.log(`  Branch:        ${branch}`);
  console.log(`  Artifacts:     ${runsDir}/`);
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

   1. Build your implementation in this worktree
   2. Write artifacts to: ${runsDir}/
   3. When done, commit and push
   4. After all agents finish, run on main:
      npm run attempt:finalize -- --prd v${prd}
`);
}

/**
 * Finalize all runs for a PRD version (Phase B of two-phase model).
 * Reads all _runs/<run_id>/, assigns sequential attempt numbers,
 * moves folders to attempt-00N, updates META.json.
 * 
 * This is run once on main after all agents have completed.
 */
function cmdFinalize(opts) {
  const { prd, dryRun } = opts;
  
  if (!prd) {
    console.log(`
Usage: npm run attempt:finalize -- --prd <version>

Example:
  npm run attempt:finalize -- --prd v0.2

Options:
  --prd <version>   PRD version (required)
  --dry-run         Show what would happen
`);
    process.exit(1);
  }
  
  console.log(`\n🏁 Finalizing runs for PRD v${prd}\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  const prdFolder = join(ROOT, 'attempts', `prd-v${prd}`);
  const runsFolder = join(prdFolder, '_runs');
  const registryPath = join(prdFolder, 'ATTEMPT_REGISTRY.json');
  
  // Check _runs exists
  if (!existsSync(runsFolder)) {
    fail(`No _runs folder found at ${runsFolder}`);
  }
  
  // Read all run folders
  console.log('1️⃣  Reading runs...');
  const runIds = readdirSync(runsFolder).filter(f => {
    const metaPath = join(runsFolder, f, 'META.json');
    return existsSync(metaPath);
  });
  
  if (runIds.length === 0) {
    fail('No runs found to finalize');
  }
  console.log(`  ✅ Found ${runIds.length} runs\n`);
  
  // Read META.json for each run and sort by timestamp
  const runs = runIds.map(runId => {
    const metaPath = join(runsFolder, runId, 'META.json');
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
    return { runId, meta, path: join(runsFolder, runId) };
  }).sort((a, b) => {
    // Sort by registration timestamp
    return new Date(a.meta.registered_at) - new Date(b.meta.registered_at);
  });
  
  // Read or create registry
  console.log('2️⃣  Reading attempt registry...');
  let registry;
  if (existsSync(registryPath)) {
    registry = JSON.parse(readFileSync(registryPath, 'utf8'));
    // Ensure finalized array exists (might be old format)
    if (!registry.finalized) {
      registry.finalized = [];
    }
  } else {
    registry = {
      prd_version: prd,
      next_attempt: 1,
      finalized: []
    };
  }
  console.log(`  ✅ Next attempt number: ${registry.next_attempt}\n`);
  
  // Assign attempt numbers and move folders
  console.log('3️⃣  Assigning attempt numbers and moving folders...\n');
  const finalized = [];
  
  for (const run of runs) {
    const attemptNum = registry.next_attempt;
    const attemptPadded = String(attemptNum).padStart(3, '0');
    const newFolderName = `attempt-${attemptPadded}`;
    const newPath = join(prdFolder, newFolderName);
    
    console.log(`  ${run.runId} → ${newFolderName}`);
    console.log(`    Agent: ${run.meta.agent}, Branch: ${run.meta.branch}`);
    
    if (!dryRun) {
      // Update META.json with attempt number
      run.meta.attempt = attemptPadded;
      run.meta.finalized_at = new Date().toISOString();
      run.meta.status = 'sealed';
      writeFileSync(join(run.path, 'META.json'), JSON.stringify(run.meta, null, 2) + '\n');
      
      // Move folder
      if (existsSync(newPath)) {
        fail(`Target folder already exists: ${newPath}`);
      }
      // Use fs.rename would be better but for safety we copy then remove
      execSync(`mv "${run.path}" "${newPath}"`, { cwd: ROOT });
      
      // Update registry
      registry.next_attempt = attemptNum + 1;
      registry.finalized.push({
        attempt: attemptNum,
        run_id: run.runId,
        agent: run.meta.agent,
        branch: run.meta.branch,
        finalized_at: run.meta.finalized_at
      });
    }
    
    finalized.push({
      runId: run.runId,
      attemptPadded,
      agent: run.meta.agent,
      branch: run.meta.branch
    });
    
    console.log('');
  }
  
  // Write updated registry
  if (!dryRun) {
    writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
    
    // Remove empty _runs folder
    const remaining = readdirSync(runsFolder);
    if (remaining.length === 0) {
      rmSync(runsFolder, { recursive: true });
    }
  }
  
  // Print summary
  console.log('═'.repeat(80));
  console.log('\n🏁 FINALIZATION COMPLETE\n');
  console.log('  Run ID   │ Attempt │ Agent              │ Branch');
  console.log('  ─────────┼─────────┼────────────────────┼─────────────────────────────');
  for (const f of finalized) {
    console.log(`  ${f.runId} │ ${f.attemptPadded}     │ ${f.agent.padEnd(18)} │ ${f.branch}`);
  }
  console.log('\n' + '═'.repeat(80));
  
  console.log(`
📋 Next steps:

   1. Review each attempt's artifacts in attempts/prd-v${prd}/
   2. Pick champion based on evidence
   3. Promote winner:
      npm run attempt:promote -- --prd v${prd} --attempt <number>
`);
}

/**
 * PROMOTE: Ship a winner to production.
 * 
 * Steps:
 *   1. Validate attempt exists
 *   2. Merge attempt branch → main
 *   3. Fast-forward prod to main
 *   4. Tag with prd-vX.Y-attempt-00N and production-vX.Y
 * 
 * Result:
 *   - prod deploys (Cloudflare production)
 *   - main reflects shipped code
 *   - history preserved
 */
function cmdPromote(opts) {
  const { prd, attempt, dryRun, force } = opts;
  
  if (!prd || !attempt) {
    console.log(`
Usage: npm run attempt:promote -- --prd <version> --attempt <number>

Example:
  npm run attempt:promote -- --prd v0.2 --attempt 001

Options:
  --prd <version>     PRD version (required)
  --attempt <number>  Attempt number (required)
  --dry-run           Show what would happen
  --force             Skip confirmation prompts
`);
    process.exit(1);
  }
  
  console.log(`\n🏆 PROMOTING CHAMPION\n`);
  console.log(`  PRD:     v${prd}`);
  console.log(`  Attempt: ${attempt}\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // ========================================
  // 1. Validate attempt exists
  // ========================================
  console.log('1️⃣  Validating attempt...');
  const attemptFolder = join(ROOT, 'attempts', `prd-v${prd}`, `attempt-${attempt}`);
  const metaPath = join(attemptFolder, 'META.json');
  
  if (!existsSync(metaPath)) {
    fail(`Attempt not found: ${attemptFolder}`);
  }
  
  const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
  const attemptBranch = meta.branch;
  
  if (!attemptBranch) {
    fail('META.json missing branch information');
  }
  
  console.log(`  ✅ Found: ${attemptFolder}`);
  console.log(`     Branch: ${attemptBranch}`);
  console.log(`     Agent: ${meta.agent || 'unknown'}\n`);
  
  // ========================================
  // 2. Ensure clean state on main
  // ========================================
  console.log('2️⃣  Preparing main branch...');
  
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  if (currentBranch !== 'main') {
    run('git checkout main', { dryRun });
  }
  run('git pull origin main', { dryRun });
  console.log('  ✅ Main is up to date\n');
  
  // ========================================
  // 3. Merge attempt branch to main
  // ========================================
  console.log('3️⃣  Merging attempt branch to main...');
  
  // Fetch the branch
  run(`git fetch origin ${attemptBranch}`, { dryRun });
  
  // Merge (no fast-forward to preserve history)
  const mergeMsg = `Promote prd-v${prd} attempt-${attempt} to main`;
  run(`git merge origin/${attemptBranch} --no-ff -m "${mergeMsg}"`, { dryRun });
  
  console.log('  ✅ Merged to main\n');
  
  // ========================================
  // 4. Tag the merge
  // ========================================
  console.log('4️⃣  Creating tags...');
  
  const attemptTag = `prd-v${prd}-attempt-${attempt}`;
  const prodTag = `production-v${prd}`;
  
  run(`git tag -a ${attemptTag} -m "PRD v${prd} Attempt ${attempt} promoted"`, { dryRun });
  
  // Delete old production tag if exists, then create new one
  try {
    run(`git tag -d ${prodTag}`, { silent: true, dryRun });
    run(`git push origin :refs/tags/${prodTag}`, { silent: true, dryRun });
  } catch (e) {
    // Tag didn't exist, that's fine
  }
  run(`git tag -a ${prodTag} -m "Production release for PRD v${prd}"`, { dryRun });
  
  console.log(`  ✅ Tagged: ${attemptTag}`);
  console.log(`  ✅ Tagged: ${prodTag}\n`);
  
  // ========================================
  // 5. Push main with tags
  // ========================================
  console.log('5️⃣  Pushing main...');
  run('git push origin main --tags', { dryRun });
  console.log('  ✅ Main pushed with tags\n');
  
  // ========================================
  // 6. Fast-forward prod to main
  // ========================================
  console.log('6️⃣  Fast-forwarding prod to main...');
  
  run('git checkout prod', { dryRun });
  run('git pull origin prod', { dryRun });
  run('git merge main --ff-only', { dryRun });
  run('git push origin prod', { dryRun });
  
  console.log('  ✅ prod now matches main\n');
  
  // Switch back to main
  run('git checkout main', { dryRun });
  
  // ========================================
  // 7. Update META.json with promotion status
  // ========================================
  if (!dryRun) {
    meta.promoted_at = new Date().toISOString();
    meta.status = 'champion';
    meta.production_tag = prodTag;
    writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n');
    run('git add ' + metaPath, { silent: true });
    run('git commit -m "Mark attempt-' + attempt + ' as champion"', { silent: true });
    run('git push origin main', { silent: true });
  }
  
  // ========================================
  // SUMMARY
  // ========================================
  console.log('═'.repeat(60));
  console.log('\n🏆 PROMOTION COMPLETE\n');
  console.log(`  Champion:        attempt-${attempt}`);
  console.log(`  Merged to:       main`);
  console.log(`  Production:      prod (fast-forwarded)`);
  console.log(`  Tags:            ${attemptTag}, ${prodTag}`);
  console.log('');
  console.log('  Cloudflare will now deploy prod → production URL');
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 What happened:

   1. Attempt branch merged → main (with history)
   2. main pushed with tags
   3. prod fast-forwarded to match main
   4. Cloudflare deploys prod → klappy.dev

Production is now live with the champion's code!
`);
}

/**
 * Submit current work (commit + push for Cloudflare preview).
 * 
 * This is for agents to publish their work-in-progress or final state.
 * Ensures the branch is pushed so Cloudflare can generate a preview URL.
 */
function cmdSubmit(opts) {
  const { dryRun } = opts;
  const message = opts.message || 'Attempt progress';
  
  console.log('\n📤 SUBMITTING ATTEMPT\n');
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // Check .attempt.json exists
  const attemptJsonPath = join(ROOT, '.attempt.json');
  if (!existsSync(attemptJsonPath)) {
    fail('No .attempt.json found. Run attempt:register first.');
  }
  
  const attemptMeta = JSON.parse(readFileSync(attemptJsonPath, 'utf8'));
  const { prd, run_id, runs_dir, branch } = attemptMeta;
  
  console.log(`  PRD:       ${prd}`);
  console.log(`  Run ID:    ${run_id}`);
  console.log(`  Branch:    ${branch}`);
  console.log(`  Artifacts: ${runs_dir}/\n`);
  
  // Check we're on the right branch
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  if (currentBranch !== branch) {
    console.log(`  ⚠️  Expected branch: ${branch}`);
    console.log(`     Current branch:  ${currentBranch}`);
    console.log('     Proceeding anyway...\n');
  }
  
  // Stage changes
  console.log('1️⃣  Staging changes...');
  
  // Always stage these if they exist
  const pathsToStage = [
    runs_dir,
    'src',
    'app',
    'public',
    'package.json',
    'package-lock.json',
    'vite.config.js',
    'vite.config.ts',
    '.attempt.json'
  ];
  
  for (const p of pathsToStage) {
    const fullPath = join(ROOT, p);
    if (existsSync(fullPath)) {
      run(`git add "${p}"`, { dryRun, silent: true });
    }
  }
  console.log('  ✅ Staged\n');
  
  // Check evidence completeness (warn but don't block)
  console.log('📋 Evidence check...');
  const evidenceDir = join(ROOT, runs_dir, 'evidence');
  const attemptMdPath = join(ROOT, runs_dir, 'ATTEMPT.md');
  const evidenceMdPath = join(ROOT, runs_dir, 'EVIDENCE.md');
  
  let evidenceWarnings = [];
  
  // Check ATTEMPT.md has content beyond skeleton
  if (existsSync(attemptMdPath)) {
    const content = readFileSync(attemptMdPath, 'utf8');
    if (content.includes('_TODO:') || content.includes('[Describe') || content.length < 500) {
      evidenceWarnings.push('ATTEMPT.md appears incomplete (still has placeholders or is too short)');
    }
  } else {
    evidenceWarnings.push('ATTEMPT.md does not exist');
  }
  
  // Check EVIDENCE.md has content beyond skeleton
  if (existsSync(evidenceMdPath)) {
    const content = readFileSync(evidenceMdPath, 'utf8');
    if (content.includes('_TODO:') || content.includes('_No screenshots') || content.length < 300) {
      evidenceWarnings.push('EVIDENCE.md appears incomplete (still has placeholders or is too short)');
    }
  } else {
    evidenceWarnings.push('EVIDENCE.md does not exist');
  }
  
  // Check evidence folder has screenshots
  if (existsSync(evidenceDir)) {
    const files = readdirSync(evidenceDir);
    const screenshots = files.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    if (screenshots.length < 3) {
      evidenceWarnings.push(`evidence/ folder has only ${screenshots.length} screenshots (need at least 3)`);
    }
  } else {
    evidenceWarnings.push('evidence/ folder does not exist');
  }
  
  if (evidenceWarnings.length > 0) {
    console.log('\n  ⚠️  EVIDENCE INCOMPLETE:\n');
    evidenceWarnings.forEach(w => console.log(`     - ${w}`));
    console.log('\n  You should fix these before your final submit.\n');
    console.log('  Required: ATTEMPT.md, EVIDENCE.md, 3+ screenshots in evidence/\n');
  } else {
    console.log('  ✅ Evidence looks complete\n');
  }
  
  // Check if there's anything to commit
  const status = run('git status --porcelain', { silent: true, dryRun: false });
  if (!status) {
    console.log('  ℹ️  Nothing new to commit. Pushing existing commits...\n');
  } else {
    // Commit
    console.log('2️⃣  Committing...');
    const commitMsg = `${message} [run: ${run_id}]`;
    run(`git commit -m "${commitMsg}"`, { dryRun });
    console.log('  ✅ Committed\n');
  }
  
  // Push
  console.log('3️⃣  Pushing to origin...');
  run(`git push -u origin HEAD`, { dryRun });
  console.log('  ✅ Pushed\n');
  
  // Generate preview URL
  const previewUrl = `https://${branch.replace(/\//g, '-')}.klappy-dev.pages.dev`;
  
  // Update META.json with preview URL
  const metaPath = join(ROOT, runs_dir, 'META.json');
  if (existsSync(metaPath) && !dryRun) {
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
    meta.preview_url = previewUrl;
    meta.last_submitted = new Date().toISOString();
    writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n');
  }
  
  console.log('═'.repeat(60));
  console.log('\n📤 SUBMITTED\n');
  console.log(`  Preview URL: ${previewUrl}`);
  console.log('  (May take 1-2 min for Cloudflare to build)\n');
  console.log('  Check build status:');
  console.log('    - GitHub: https://github.com/klappy/klappy.dev/actions');
  console.log('    - Cloudflare: Pages dashboard → Deployments');
  console.log('\n' + '═'.repeat(60));
}

/**
 * Import artifacts from attempt branches back to main.
 * 
 * This is run on main to pull in artifacts from completed attempt branches
 * without merging their code.
 */
/**
 * CLEANUP: Prune stale worktrees and branches.
 * 
 * This should be run periodically or after a PRD cycle completes.
 * Removes:
 *   - Orphaned git worktrees
 *   - Local branches with deleted remotes
 *   - Stale remote tracking refs
 */
function cmdCleanup(opts) {
  const { dryRun, force } = opts;
  
  console.log('\n🧹 CLEANUP — Pruning Stale Worktrees & Branches\n');
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // ========================================
  // 1. Prune git worktree registry
  // ========================================
  console.log('1️⃣  Pruning worktree registry...');
  run('git worktree prune', { dryRun });
  console.log('  ✅ Registry pruned\n');
  
  // ========================================
  // 2. Find and remove orphaned worktrees
  // ========================================
  console.log('2️⃣  Scanning for orphaned worktrees...');
  
  const worktreeOutput = run('git worktree list --porcelain', { silent: true, dryRun: false });
  const worktrees = [];
  let current = {};
  
  for (const line of worktreeOutput.split('\n')) {
    if (line.startsWith('worktree ')) {
      if (current.path) worktrees.push(current);
      current = { path: line.replace('worktree ', '') };
    } else if (line.startsWith('HEAD ')) {
      current.head = line.replace('HEAD ', '');
    } else if (line.startsWith('branch ')) {
      current.branch = line.replace('branch refs/heads/', '');
    } else if (line === 'detached') {
      current.detached = true;
    }
  }
  if (current.path) worktrees.push(current);
  
  // Filter to only Cursor worktrees (in .cursor/worktrees/)
  const cursorWorktrees = worktrees.filter(w => w.path.includes('.cursor/worktrees/'));
  const mainWorktree = worktrees.find(w => !w.path.includes('.cursor/worktrees/'));
  
  console.log(`  Found ${cursorWorktrees.length} Cursor worktrees\n`);
  
  if (cursorWorktrees.length === 0) {
    console.log('  ✅ No worktrees to clean\n');
  } else {
    // Categorize worktrees
    const detached = cursorWorktrees.filter(w => w.detached);
    const withBranch = cursorWorktrees.filter(w => w.branch);
    
    console.log(`  Detached HEAD (orphans): ${detached.length}`);
    console.log(`  With branches: ${withBranch.length}\n`);
    
    // Remove detached worktrees (always safe - they're orphans)
    if (detached.length > 0) {
      console.log('  Removing detached worktrees:');
      for (const wt of detached) {
        const shortPath = wt.path.split('/').slice(-1)[0];
        console.log(`    🗑️  ${shortPath} (detached at ${wt.head.substring(0, 7)})`);
        if (!dryRun) {
          try {
            run(`git worktree remove --force "${wt.path}"`, { silent: true });
          } catch (e) {
            console.log(`       ⚠️  Could not remove (may need manual cleanup)`);
          }
        }
      }
      console.log('');
    }
    
    // For worktrees with branches, check if remote exists
    if (withBranch.length > 0 && force) {
      console.log('  Removing branch worktrees (--force):');
      for (const wt of withBranch) {
        const shortPath = wt.path.split('/').slice(-1)[0];
        console.log(`    🗑️  ${shortPath} [${wt.branch}]`);
        if (!dryRun) {
          try {
            run(`git worktree remove --force "${wt.path}"`, { silent: true });
          } catch (e) {
            console.log(`       ⚠️  Could not remove`);
          }
        }
      }
      console.log('');
    } else if (withBranch.length > 0) {
      console.log('  ⚠️  Skipping branch worktrees (use --force to remove)');
      for (const wt of withBranch) {
        const shortPath = wt.path.split('/').slice(-1)[0];
        console.log(`     - ${shortPath} [${wt.branch}]`);
      }
      console.log('');
    }
  }
  
  // ========================================
  // 3. Prune stale remote tracking refs
  // ========================================
  console.log('3️⃣  Pruning stale remote tracking refs...');
  run('git fetch --prune', { dryRun });
  console.log('  ✅ Remote refs pruned\n');
  
  // ========================================
  // 4. Find and delete local branches with gone remotes
  // ========================================
  console.log('4️⃣  Finding local branches with deleted remotes...');
  
  const branchOutput = run('git branch -vv', { silent: true, dryRun: false });
  const goneBranches = [];
  
  for (const line of branchOutput.split('\n')) {
    if (line.includes(': gone]')) {
      // Extract branch name (skip leading * or spaces)
      const match = line.match(/^[\s*]+(\S+)/);
      if (match && match[1] !== 'main' && match[1] !== 'prod') {
        goneBranches.push(match[1]);
      }
    }
  }
  
  if (goneBranches.length === 0) {
    console.log('  ✅ No stale local branches\n');
  } else {
    console.log(`  Found ${goneBranches.length} stale branches:\n`);
    for (const branch of goneBranches) {
      console.log(`    🗑️  ${branch}`);
      if (!dryRun) {
        try {
          run(`git branch -D "${branch}"`, { silent: true });
        } catch (e) {
          console.log(`       ⚠️  Could not delete`);
        }
      }
    }
    console.log('');
  }
  
  // ========================================
  // 5. Find local attempt branches without remotes
  // ========================================
  console.log('5️⃣  Finding orphan attempt branches...');
  
  const localBranches = run('git branch', { silent: true, dryRun: false })
    .split('\n')
    .map(b => b.trim().replace('* ', ''))
    .filter(b => b.startsWith('attempt/'));
  
  const remoteBranches = run('git branch -r', { silent: true, dryRun: false })
    .split('\n')
    .map(b => b.trim().replace('origin/', ''))
    .filter(b => b.startsWith('attempt/'));
  
  const orphanBranches = localBranches.filter(b => !remoteBranches.includes(b) && !goneBranches.includes(b));
  
  if (orphanBranches.length === 0) {
    console.log('  ✅ No orphan attempt branches\n');
  } else if (force) {
    console.log(`  Found ${orphanBranches.length} orphan branches:\n`);
    for (const branch of orphanBranches) {
      console.log(`    🗑️  ${branch}`);
      if (!dryRun) {
        try {
          run(`git branch -D "${branch}"`, { silent: true });
        } catch (e) {
          console.log(`       ⚠️  Could not delete`);
        }
      }
    }
    console.log('');
  } else {
    console.log(`  ⚠️  Found ${orphanBranches.length} orphan branches (use --force to delete):`);
    for (const branch of orphanBranches) {
      console.log(`     - ${branch}`);
    }
    console.log('');
  }
  
  // ========================================
  // SUMMARY
  // ========================================
  console.log('═'.repeat(60));
  console.log('\n🧹 CLEANUP COMPLETE\n');
  console.log('  Run with --force to remove branch worktrees and orphan branches.');
  console.log('  Run with --dry-run to preview changes.');
  console.log('\n' + '═'.repeat(60));
}

function cmdImport(opts) {
  const { prd, dryRun } = opts;
  
  if (!prd) {
    console.log(`
Usage: npm run attempt:import -- --prd <version>

Example:
  npm run attempt:import -- --prd v0.2

This imports all _runs/ artifacts from attempt branches back to main.

Options:
  --prd <version>   PRD version (required)
  --dry-run         Show what would happen
`);
    process.exit(1);
  }
  
  console.log(`\n📥 IMPORTING ARTIFACTS for PRD v${prd}\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // Check we're on main
  const currentBranch = run('git branch --show-current', { silent: true, dryRun: false });
  if (currentBranch !== 'main') {
    fail(`Must be on main branch. Currently on: ${currentBranch}`);
  }
  console.log('  ✅ On main branch\n');
  
  // Pull latest main
  console.log('1️⃣  Pulling latest main...');
  run('git pull origin main', { dryRun });
  console.log('  ✅ Main up to date\n');
  
  // Find all attempt branches for this PRD
  console.log('2️⃣  Finding attempt branches...');
  const branchOutput = run('git branch -r', { silent: true, dryRun: false });
  const branchPattern = new RegExp(`origin/attempt/prd-v${prd}/a\\d+`);
  const branches = branchOutput
    .split('\n')
    .map(b => b.trim())
    .filter(b => branchPattern.test(b))
    .map(b => b.replace('origin/', ''));
  
  if (branches.length === 0) {
    fail(`No attempt branches found for PRD v${prd}`);
  }
  console.log(`  ✅ Found ${branches.length} branches:\n`);
  branches.forEach(b => console.log(`     - ${b}`));
  console.log('');
  
  // Fetch all remote branches
  console.log('3️⃣  Fetching remote branches...');
  run('git fetch --all', { dryRun });
  console.log('  ✅ Fetched\n');
  
  // Import artifacts from each branch
  console.log('4️⃣  Importing artifacts from each branch...\n');
  const runsPath = `attempts/prd-v${prd}/_runs`;
  let imported = 0;
  
  for (const branch of branches) {
    console.log(`  📦 ${branch}`);
    
    // Check if _runs/ exists on that branch
    try {
      run(`git checkout origin/${branch} -- ${runsPath}`, { dryRun, silent: true });
      console.log(`     ✅ Imported artifacts`);
      imported++;
    } catch (e) {
      console.log(`     ⚠️  No _runs/ folder found`);
    }
  }
  
  if (imported === 0) {
    console.log('\n  ⚠️  No artifacts found to import');
    return;
  }
  
  console.log('');
  
  // Stage and commit
  console.log('5️⃣  Committing imported artifacts...');
  run(`git add ${runsPath}`, { dryRun });
  run(`git commit -m "Import attempt artifacts for PRD v${prd}"`, { dryRun });
  console.log('  ✅ Committed\n');
  
  // Push
  console.log('6️⃣  Pushing to main...');
  run('git push origin main', { dryRun });
  console.log('  ✅ Pushed\n');
  
  console.log('═'.repeat(60));
  console.log('\n📥 IMPORT COMPLETE\n');
  console.log(`  Imported artifacts from ${imported} branches`);
  console.log(`  Artifacts location: ${runsPath}/`);
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

   1. Finalize runs to assign attempt numbers:
      npm run attempt:finalize -- --prd v${prd}

   2. Review and promote champion:
      npm run attempt:promote -- --prd v${prd} --attempt <number>
`);
}

// ============================================================
// Main
// ============================================================

function main() {
  const opts = parseArgs();
  
  // Parse --message for submit command
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--message' && args[i + 1]) {
      opts.message = args[i + 1];
    }
  }
  
  switch (opts.command) {
    case 'nuke':
      cmdNuke(opts);
      break;
    case 'register':
      cmdRegister(opts);
      break;
    case 'finalize':
      cmdFinalize(opts);
      break;
    case 'reset':
      cmdReset(opts);
      break;
    case 'promote':
      cmdPromote(opts);
      break;
    case 'submit':
      cmdSubmit(opts);
      break;
    case 'import':
      cmdImport(opts);
      break;
    case 'cleanup':
      cmdCleanup(opts);
      break;
    default:
      console.log(`
ODD Attempt CLI — Environment Hardened

BRANCH ROLES:
  prod        → Live production (NEVER nuked)
  main        → Experiment aggregation + history
  attempt/*   → Ephemeral agent workspaces (always nuked)

COMMANDS:

  npm run attempt:nuke
      Blank slate reset. Deletes /src, /app, config files.
      ❌ Refuses on prod
      ⚠️  Requires --force on main
      ✅ Allowed on attempt/* branches

  npm run attempt:register
      Register a new run (auto-reads PRD version from /docs/PRD.md)

  npm run attempt:submit
      Commit and push work (triggers Cloudflare preview)

  npm run attempt:import -- --prd v0.2
      Import artifacts from attempt branches back to main

  npm run attempt:finalize -- --prd v0.2
      Finalize runs → attempt-001, 002, etc.

  npm run attempt:promote -- --prd v0.2 --attempt 001
      Ship champion: merge → main, fast-forward → prod

  npm run attempt:reset -- --prd v0.2
      NUCLEAR RESET: Nuke + delete all attempt branches for PRD

  npm run attempt:cleanup
      Prune stale worktrees and branches (run after PRD cycles)
      --force removes branch worktrees and orphan branches

WORKFLOW:
  1. nuke     → agent starts with blank slate
  2. register → agent claims unique run_id
  3. build    → agent implements from scratch
  4. submit   → agent pushes (CF preview)
  5. import   → pull all artifacts to main
  6. finalize → assign attempt numbers
  7. promote  → ship winner to prod

DEPLOY MAPPING:
  prod branch  → klappy.dev (production)
  other branches → preview URLs
`);
      process.exit(1);
  }
}

main();
