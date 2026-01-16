#!/usr/bin/env node
/**
 * reset-attempt.js
 * 
 * Purges /src and creates a minimal app shell for a fresh attempt.
 * This ensures attempts are truly independent (no inherited UI patterns).
 * 
 * Usage:
 *   npm run attempt:reset
 *   npm run attempt:reset -- --dry-run
 *   npm run attempt:reset -- --no-commit
 * 
 * What it does:
 *   1. Deletes everything in /src (and /app if present)
 *   2. Creates minimal shell files (main.jsx, index.css, App.jsx)
 *   3. Commits the reset as the attempt's starting point
 * 
 * SAFETY BOUNDARIES:
 *   This script may ONLY delete:
 *     - /src
 *     - /app (if present)
 *   
 *   This script must NEVER touch:
 *     - /infra
 *     - /public/content
 *     - /canon
 *     - /odd
 *     - /docs
 *     - /attempts
 *     - /about
 *     - /projects
 * 
 * The minimal shell:
 *   - Loads manifest
 *   - Renders a placeholder that proves content sync works
 *   - Has no UI opinions (no layout, no components, no styling)
 */

import { existsSync, rmSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');
const SRC = join(ROOT, 'src');
const APP = join(ROOT, 'app');

// SAFETY: Directories that must NEVER be deleted
const PROTECTED_DIRS = [
  'infra',
  'public',
  'canon',
  'odd',
  'docs',
  'attempts',
  'about',
  'projects',
  'node_modules',
  '.git',
];

// SAFETY: Only these directories may be purged
const PURGEABLE_DIRS = ['src', 'app'];

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { dryRun: false, noCommit: false };
  
  for (const arg of args) {
    if (arg === '--dry-run') result.dryRun = true;
    if (arg === '--no-commit') result.noCommit = true;
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

// Minimal shell files - enough to prove the build works, nothing more
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

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function reset() {
  const { dryRun, noCommit } = parseArgs();
  
  console.log('\n🧹 Resetting /src for fresh attempt\n');
  if (dryRun) {
    console.log('  [DRY RUN MODE - no changes will be made]\n');
  }
  
  // Safety check: verify we're only touching allowed directories
  console.log('0️⃣  Safety check...');
  for (const dir of PROTECTED_DIRS) {
    const protectedPath = join(ROOT, dir);
    if (existsSync(protectedPath)) {
      console.log(`  ✅ Protected: /${dir}/`);
    }
  }
  console.log(`  ✅ Will purge only: ${PURGEABLE_DIRS.map(d => '/' + d + '/').join(', ')}\n`);
  
  // Step 1: Delete /src
  console.log('1️⃣  Purging /src...');
  if (existsSync(SRC)) {
    if (!dryRun) {
      rmSync(SRC, { recursive: true });
    }
    console.log('  ✅ Deleted /src\n');
  } else {
    console.log('  ⚠️  /src does not exist\n');
  }
  
  // Step 1b: Delete /app if present
  if (existsSync(APP)) {
    console.log('1️⃣b Purging /app...');
    if (!dryRun) {
      rmSync(APP, { recursive: true });
    }
    console.log('  ✅ Deleted /app\n');
  }
  
  // Step 2: Create minimal shell
  console.log('2️⃣  Creating minimal shell...');
  if (!dryRun) {
    mkdirSync(join(SRC, 'components'), { recursive: true });
    
    for (const [filename, content] of Object.entries(SHELL_FILES)) {
      const filepath = join(SRC, filename);
      writeFileSync(filepath, content);
      console.log(`  ✅ Created ${filename}`);
    }
  } else {
    for (const filename of Object.keys(SHELL_FILES)) {
      console.log(`  [DRY RUN] Would create ${filename}`);
    }
  }
  console.log('');
  
  // Step 3: Verify build works
  console.log('3️⃣  Verifying build...');
  try {
    run('npm run build', { dryRun, silent: true });
    console.log('  ✅ Build successful\n');
  } catch (e) {
    console.log('  ❌ Build failed - check shell files\n');
    if (!dryRun) process.exit(1);
  }
  
  // Step 4: Commit as starting point
  if (!noCommit) {
    console.log('4️⃣  Committing reset as starting point...');
    run('git add src/', { dryRun });
    run('git commit -m "chore: reset /src to minimal shell for fresh attempt"', { dryRun });
    console.log('  ✅ Committed\n');
  } else {
    console.log('4️⃣  Skipping commit (--no-commit)\n');
  }
  
  // Summary
  console.log('═'.repeat(60));
  console.log('\n🧹 RESET COMPLETE\n');
  console.log('  /src is now a minimal shell with:');
  console.log('    - main.jsx (React entry)');
  console.log('    - index.css (minimal reset)');
  console.log('    - components/App.jsx (manifest loader)');
  console.log('\n' + '═'.repeat(60));
  
  console.log(`
📋 Next steps:

1. Run the kickoff prompt from: /docs/PROMPT_ATTEMPT_KICKOFF.txt

2. Read the PRD: /docs/PRD.md

3. Build your implementation from scratch
   - No inherited UI patterns
   - No assumptions from prior attempts

4. Test with: npm run dev

5. When done, seal the attempt with evidence in:
   attempts/prd-vX.Y/attempt-NNN/
`);
}

reset();
