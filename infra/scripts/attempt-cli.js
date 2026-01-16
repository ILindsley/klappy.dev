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

import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

// ============================================================
// Utilities
// ============================================================

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
    noCommit: false
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

// SAFETY: Only these directories may be purged
const PURGEABLE_DIRS = ['src', 'app'];

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

function cmdSpawn(opts) {
  const { prd, n, worktree, worktreeDir, dryRun } = opts;
  
  if (!prd || n < 1) {
    console.log(`
Usage: npm run attempt:spawn -- --prd <version> --n <count>

Example:
  npm run attempt:spawn -- --prd v0.2 --n 4
  npm run attempt:spawn -- --prd v0.2 --n 3 --worktree

Options:
  --prd <version>   PRD version (required)
  --n <count>       Number of parallel attempts (required)
  --worktree        Create git worktrees for each attempt
  --worktree-dir    Custom worktree directory (default: attempts/_worktrees)
  --dry-run         Show what would happen
`);
    process.exit(1);
  }
  
  console.log(`\n🌌 Spawning ${n} parallel attempts for PRD v${prd}\n`);
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  ensureCleanMain(opts);
  
  // Reserve all attempt numbers first (on main)
  console.log(`2️⃣  Reserving ${n} attempt numbers...\n`);
  
  const attempts = [];
  for (let i = 0; i < n; i++) {
    const { attemptPadded } = reserveAttemptNumber(prd, `spawn-${i + 1}`, opts);
    attempts.push({ attemptPadded });
  }
  
  // Now create branches and reset each
  console.log(`\n3️⃣  Creating ${n} branches and resetting /src in each...\n`);
  
  const wtDir = worktreeDir || join(ROOT, '.worktrees', `prd-v${prd}`);
  
  for (let i = 0; i < attempts.length; i++) {
    const { attemptPadded } = attempts[i];
    const branchName = `attempt/prd-v${prd}/a${attemptPadded}`;
    
    if (worktree) {
      // === WORKTREE PATH ===
      // Create worktree with new branch
      const wtPath = join(wtDir, `a${attemptPadded}`);
      console.log(`  Creating worktree: ${wtPath}`);
      if (!dryRun) {
        mkdirSync(wtDir, { recursive: true });
        run(`git worktree add ${wtPath} -b ${branchName}`, { dryRun });
      }
      
      // Reset /src in worktree
      const srcPath = join(wtPath, 'src');
      if (!dryRun) {
        if (existsSync(srcPath)) rmSync(srcPath, { recursive: true });
        mkdirSync(join(srcPath, 'components'), { recursive: true });
        for (const [filename, content] of Object.entries(SHELL_FILES)) {
          writeFileSync(join(srcPath, filename), content);
        }
        run('git add src/', { dryRun, cwd: wtPath });
        run('git commit -m "chore: reset /src to minimal shell for fresh attempt"', { dryRun, cwd: wtPath });
      }
      
      attempts[i].branchName = branchName;
      attempts[i].worktreePath = wtPath;
      console.log(`  ✅ ${branchName} ready (worktree: ${wtPath})\n`);
      
    } else {
      // === NON-WORKTREE PATH ===
      // Create branch, checkout, reset /src, commit, then move to next
      console.log(`  Setting up ${branchName}...`);
      
      run(`git checkout -b ${branchName}`, { dryRun });
      
      // Reset /src in this branch
      const srcPath = join(ROOT, 'src');
      const appPath = join(ROOT, 'app');
      
      if (!dryRun) {
        if (existsSync(srcPath)) rmSync(srcPath, { recursive: true });
        if (existsSync(appPath)) rmSync(appPath, { recursive: true });
        mkdirSync(join(srcPath, 'components'), { recursive: true });
        for (const [filename, content] of Object.entries(SHELL_FILES)) {
          writeFileSync(join(srcPath, filename), content);
        }
      }
      
      run('git add src/', { dryRun });
      run('git commit -m "chore: reset /src to minimal shell for fresh attempt"', { dryRun });
      
      attempts[i].branchName = branchName;
      console.log(`  ✅ ${branchName} ready\n`);
      
      // Go back to main to create next branch
      run('git checkout main', { dryRun });
    }
  }
  
  // Print summary table
  console.log('═'.repeat(60));
  console.log('\n🌌 PARALLEL ATTEMPTS READY\n');
  console.log('  Attempt  │ Branch                         │ Location');
  console.log('  ─────────┼────────────────────────────────┼──────────────────────');
  for (const a of attempts) {
    const loc = a.worktreePath || '(checkout to use)';
    console.log(`  ${a.attemptPadded}      │ ${a.branchName.padEnd(30)} │ ${loc}`);
  }
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

   1. Checkout each branch in a separate terminal/agent:
      git checkout ${attempts[0]?.branchName || 'attempt/prd-vX.Y/aNNN'}

   2. Paste /docs/PROMPT_ATTEMPT_KICKOFF.txt verbatim into each

   3. Do NOT share code, diffs, or guidance between attempts

   4. Push each branch to trigger preview deploys:
      git push origin <branch-name>
`);
}

/**
 * Standalone reset command for manual use.
 */
function cmdReset(opts) {
  const { dryRun, noCommit } = opts;
  
  console.log('\n🧹 Resetting /src to minimal shell\n');
  if (dryRun) console.log('  [DRY RUN MODE]\n');
  
  // Safety check: show what we're protecting
  console.log('  Safety: Only /src and /app will be purged');
  console.log(`  Purgeable: ${PURGEABLE_DIRS.join(', ')}\n`);
  
  const srcPath = join(ROOT, 'src');
  const appPath = join(ROOT, 'app');
  
  // Delete /src
  if (existsSync(srcPath)) {
    if (!dryRun) rmSync(srcPath, { recursive: true });
    console.log('  ✅ Deleted /src');
  }
  
  // Delete /app if present
  if (existsSync(appPath)) {
    if (!dryRun) rmSync(appPath, { recursive: true });
    console.log('  ✅ Deleted /app');
  }
  
  // Create minimal shell
  if (!dryRun) {
    mkdirSync(join(srcPath, 'components'), { recursive: true });
    for (const [filename, content] of Object.entries(SHELL_FILES)) {
      writeFileSync(join(srcPath, filename), content);
      console.log(`  ✅ Created ${filename}`);
    }
  }
  
  // Commit (unless --no-commit)
  if (!noCommit) {
    console.log('\n  Committing reset...');
    run('git add src/', { dryRun });
    run('git commit -m "chore: reset /src to minimal shell for fresh attempt"', { dryRun });
    console.log('  ✅ Committed\n');
  } else {
    console.log('\n  Skipping commit (--no-commit)\n');
  }
  
  console.log('═'.repeat(60));
  console.log('\n🧹 RESET COMPLETE\n');
  console.log('  /src is now a minimal shell. Build your implementation fresh.');
  console.log('\n' + '═'.repeat(60));
}

function cmdPromote(opts) {
  const { prd, attempt, dryRun } = opts;
  
  if (!prd || !attempt) {
    console.log(`
Usage: npm run attempt:promote -- --prd <version> --attempt <number>

Example:
  npm run attempt:promote -- --prd v0.2 --attempt 001

Options:
  --prd <version>     PRD version (required)
  --attempt <number>  Attempt number (required)
  --dry-run           Show what would happen
`);
    process.exit(1);
  }
  
  // Delegate to existing promote script
  const args = ['--prd', prd, '--attempt', attempt];
  if (dryRun) args.push('--dry-run');
  
  run(`node infra/scripts/promote-attempt.js ${args.join(' ')}`, { silent: false, dryRun: false });
}

// ============================================================
// Main
// ============================================================

function main() {
  const opts = parseArgs();
  
  switch (opts.command) {
    case 'start':
      cmdStart(opts);
      break;
    case 'spawn':
      cmdSpawn(opts);
      break;
    case 'reset':
      cmdReset(opts);
      break;
    case 'promote':
      cmdPromote(opts);
      break;
    default:
      console.log(`
ODD Attempt CLI

Commands:
  npm run attempt start -- --prd v0.2
      Start a single attempt (reserve, branch, reset)

  npm run attempt spawn -- --prd v0.2 --n 4
      Spawn N parallel attempts (each with /src reset)

  npm run attempt reset
      Reset /src to minimal shell (standalone)

  npm run attempt promote -- --prd v0.2 --attempt 001
      Promote champion to production

For help on a specific command:
  npm run attempt <command> -- --help
`);
      process.exit(1);
  }
}

main();
