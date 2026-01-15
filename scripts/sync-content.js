#!/usr/bin/env node
/**
 * sync-content.js
 * 
 * Syncs source markdown documents to /public/content/ for the static SPA.
 * Run this before build or as part of CI.
 * 
 * Source of truth: /canon, /odd, /about, /projects (excluding _template)
 * Target: /public/content/
 */

import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TARGET = join(ROOT, 'public', 'content');

// Source directories to sync
const SOURCES = [
  { src: 'canon', dest: 'canon' },
  { src: 'odd', dest: 'odd' },
  { src: 'about', dest: 'about' },
  { src: 'projects', dest: 'projects' },
];

// Files/folders to exclude
const EXCLUDE = ['_template'];

function sync() {
  console.log('🔄 Syncing content to /public/content/...\n');

  // Clean target (except manifest.json which may have manual edits)
  for (const { dest } of SOURCES) {
    const targetPath = join(TARGET, dest);
    if (existsSync(targetPath)) {
      rmSync(targetPath, { recursive: true });
      console.log(`  🗑️  Removed ${dest}/`);
    }
  }

  // Copy each source
  for (const { src, dest } of SOURCES) {
    const srcPath = join(ROOT, src);
    const destPath = join(TARGET, dest);

    if (!existsSync(srcPath)) {
      console.log(`  ⚠️  Source not found: ${src}/ (skipping)`);
      continue;
    }

    mkdirSync(destPath, { recursive: true });
    
    cpSync(srcPath, destPath, {
      recursive: true,
      filter: (source) => {
        // Exclude specified folders
        for (const ex of EXCLUDE) {
          if (source.includes(`/${ex}`) || source.endsWith(ex)) {
            return false;
          }
        }
        return true;
      },
    });

    console.log(`  ✅ ${src}/ → public/content/${dest}/`);
  }

  console.log('\n✅ Content sync complete.\n');
  console.log('Note: manifest.json is NOT auto-generated.');
  console.log('If you add new documents, update /public/content/manifest.json manually.\n');
}

sync();
