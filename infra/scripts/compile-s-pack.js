#!/usr/bin/env node
/**
 * compile-s-pack.js
 *
 * Compiles S-slice context packs from decision/governing documents.
 * Extracts only the executable sections: Operating Constraints, Defaults, Failure Modes, Verification.
 *
 * Output:
 *   public/_compiled/packs/s-pack.md (combined S-slice for all decision/governing docs)
 *   public/_compiled/packs/s-pack.json (machine-readable metadata)
 *
 * Per canon/documentation/slice-contract-sml.md
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');
const PACK_DIR = join(ROOT, 'public', '_compiled', 'packs');

// Source directories
const SOURCES = ['canon', 'odd'];

// Exclude patterns
const EXCLUDE = ['_template', '_compiled', 'node_modules', '.git'];

// S-slice sections to extract
const S_SECTIONS = [
  'Operating Constraints',
  'Defaults',
  'Failure Modes',
  'Verification'
];

// ============================================================================
// PARSING
// ============================================================================

function parseFrontmatter(content) {
  const normalized = content.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { frontmatter: null, body: content };
  }

  const endIdx = normalized.indexOf('\n---\n', 4);
  if (endIdx === -1) {
    return { frontmatter: null, body: content };
  }

  const raw = normalized.slice(4, endIdx);
  const body = normalized.slice(endIdx + 5);
  const data = {};

  for (const line of raw.split('\n')) {
    if (!line.includes(':')) continue;
    const colonIdx = line.indexOf(':');
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    if (key) data[key] = value;
  }

  return { frontmatter: data, body };
}

function extractTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractSubtitle(body) {
  // First blockquote after title
  const match = body.match(/^>\s*(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractSections(body) {
  const sections = {};
  const lines = body.split('\n');
  
  let currentHeading = null;
  let currentContent = [];

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      if (currentHeading) {
        sections[currentHeading] = currentContent.join('\n').trim();
      }
      currentHeading = match[1].trim();
      currentContent = [];
    } else if (currentHeading) {
      currentContent.push(line);
    }
  }

  if (currentHeading) {
    sections[currentHeading] = currentContent.join('\n').trim();
  }

  return sections;
}

// ============================================================================
// FILE SCANNING
// ============================================================================

function getAllMarkdownFiles(dir) {
  if (!existsSync(dir)) return [];
  
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (EXCLUDE.some(ex => entry.name === ex || entry.name.startsWith(ex))) continue;
    
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllMarkdownFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }

  return files;
}

// ============================================================================
// S-SLICE EXTRACTION
// ============================================================================

function extractSSlice(filePath) {
  const relPath = relative(ROOT, filePath);
  const content = readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(content);

  if (!frontmatter) return null;
  if (frontmatter.relevance !== 'decision') return null;
  if (frontmatter.execution_posture !== 'governing') return null;

  const title = frontmatter.title || extractTitle(body);
  const subtitle = extractSubtitle(body);
  const sections = extractSections(body);

  // Check if any S-sections exist
  const foundSections = S_SECTIONS.filter(s => sections[s] && sections[s].length > 0);
  if (foundSections.length === 0) return null;

  return {
    path: relPath,
    uri: frontmatter.uri,
    title,
    subtitle,
    sections: Object.fromEntries(
      S_SECTIONS
        .filter(s => sections[s] && sections[s].length > 0)
        .map(s => [s, sections[s]])
    ),
    foundSections
  };
}

// ============================================================================
// PACK GENERATION
// ============================================================================

function generateMarkdownPack(slices) {
  const lines = [];

  lines.push('# S-Pack: Decision/Governing Documents');
  lines.push('');
  lines.push('> Executable context for agent behavior. Extract of Operating Constraints, Defaults, Failure Modes, and Verification from all decision/governing documents.');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const slice of slices) {
    lines.push(`## ${slice.title}`);
    lines.push('');
    if (slice.subtitle) {
      lines.push(`> ${slice.subtitle}`);
      lines.push('');
    }
    lines.push(`*Source: \`${slice.path}\`*`);
    lines.push('');

    for (const sectionName of S_SECTIONS) {
      if (slice.sections[sectionName]) {
        lines.push(`### ${sectionName}`);
        lines.push('');
        lines.push(slice.sections[sectionName]);
        lines.push('');
      }
    }

    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

function generateJsonPack(slices) {
  return {
    type: 's-pack',
    generated_at: new Date().toISOString(),
    description: 'Executable context for agent behavior',
    sections_extracted: S_SECTIONS,
    document_count: slices.length,
    documents: slices.map(s => ({
      path: s.path,
      uri: s.uri,
      title: s.title,
      subtitle: s.subtitle,
      sections_found: s.foundSections
    })),
    slices
  };
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log('📦 Compiling S-pack from decision/governing documents...\n');

  // Collect all files
  const allFiles = [];
  for (const source of SOURCES) {
    const sourceDir = join(ROOT, source);
    allFiles.push(...getAllMarkdownFiles(sourceDir));
  }

  console.log(`Found ${allFiles.length} markdown files in canon/ and odd/\n`);

  // Extract S-slices
  const slices = [];
  for (const filePath of allFiles) {
    const slice = extractSSlice(filePath);
    if (slice) {
      slices.push(slice);
      console.log(`✅ ${slice.path} (${slice.foundSections.length} sections)`);
    }
  }

  if (slices.length === 0) {
    console.log('\n⚠️  No decision/governing documents with S-sections found.');
    console.log('Run the audit to see which docs need upgrading:');
    console.log('  node infra/scripts/audit-decision-docs.js --report');
    process.exit(0);
  }

  // Sort by path for deterministic output
  slices.sort((a, b) => a.path.localeCompare(b.path));

  // Generate packs
  const mdPack = generateMarkdownPack(slices);
  const jsonPack = generateJsonPack(slices);

  // Write outputs
  mkdirSync(PACK_DIR, { recursive: true });
  writeFileSync(join(PACK_DIR, 's-pack.md'), mdPack);
  writeFileSync(join(PACK_DIR, 's-pack.json'), JSON.stringify(jsonPack, null, 2) + '\n');

  console.log('\n📊 S-pack compiled:');
  console.log(`   public/_compiled/packs/s-pack.md`);
  console.log(`   public/_compiled/packs/s-pack.json`);
  console.log(`\n   Documents: ${slices.length}`);
  console.log(`   Sections per doc: ${S_SECTIONS.join(', ')}`);
  console.log('\n✅ Done. Use s-pack.md as your context pack for testing.');
}

main();
