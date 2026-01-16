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

/**
 * Register a new run (Phase A of two-phase model).
 * Creates unique run_id, writes .attempt.json, creates _runs/<run_id>/ folder.
 * 
 * This is called by each agent inside its worktree at the start of work.
 * No attempt numbers are assigned yet - that happens during finalize.
 */
function cmdRegister(opts) {
  const { prd, agent, dryRun } = opts;
  
  if (!prd) {
    console.log(`
Usage: npm run attempt:register -- --prd <version> [--agent <label>]

Example:
  npm run attempt:register -- --prd v0.2
  npm run attempt:register -- --prd v0.2 --agent agent-1

Options:
  --prd <version>   PRD version (required)
  --agent <label>   Agent identifier (default: "default")
  --dry-run         Show what would happen
`);
    process.exit(1);
  }
  
  console.log(`\n🎫 Registering run for PRD v${prd}\n`);
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
    default:
      console.log(`
ODD Attempt CLI

Commands:
  npm run attempt:register -- --prd v0.2 --agent agent-1
      Register a run (creates unique run_id, writes to _runs/)

  npm run attempt:finalize -- --prd v0.2
      Finalize all runs (assigns attempt numbers, moves to attempt-00N/)

  npm run attempt:promote -- --prd v0.2 --attempt 001
      Promote champion to production

  npm run attempt:reset
      Reset /src to minimal shell

Workflow:
  1. register → each agent registers their run (inside their workspace)
  2. [build]  → agents work and write to _runs/<run_id>/
  3. finalize → assigns attempt-001, 002, ... after all done
  4. promote  → merge champion to main
`);
      process.exit(1);
  }
}

main();
