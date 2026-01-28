#!/usr/bin/env node
/**
 * build-docs-index.js
 *
 * Generates a fast-lookup index of all documentation files.
 * Used by the Librarian subagent for "where is X?" queries without loading full files.
 *
 * Usage:
 *   node build-docs-index.js
 *
 * Output:
 *   public/_compiled/index/docs.json
 *
 * Per docs/agents/librarian/contract.md
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const INDEX_DIR = join(ROOT, "public", "_compiled", "index");
const OUTPUT_FILE = join(INDEX_DIR, "docs.json");

// ============================================================================
// ROOT CLASSIFICATION
// ============================================================================

const INDEXED_ROOTS = {
  canon: {
    authority: "governing",
    description: "Governing constraints and principles",
  },
  odd: {
    authority: "governing",
    description: "Outcome-Driven Development methodology",
  },
  docs: {
    authority: "operational",
    description: "Operational documentation and protocols",
  },
  apocrypha: {
    authority: "non-governing",
    description: "Narrative intuition only — not governing authority",
  },
  interfaces: {
    authority: "operational",
    description: "Contract definitions",
  },
};

// Exclude patterns
const EXCLUDE = ["_template", "_compiled", "node_modules", ".git", ".DS_Store"];

// Valid authority bands
const VALID_AUTHORITY_BANDS = ["governing", "operational", "non-governing"];

// ============================================================================
// AUTHORITY RESOLUTION
// ============================================================================

/**
 * Resolves authority_band with frontmatter override precedence.
 * Per docs/agents/librarian/trusted-sources.md
 *
 * Precedence:
 * 1. frontmatter.authority_band (canonical)
 * 2. frontmatter.authority (legacy alias)
 * 3. frontmatter.authorityBand (legacy alias)
 * 4. infer from root folder
 *
 * @param {object} frontmatter - Parsed frontmatter
 * @param {string} rootName - The root folder name
 * @returns {object} - { authority_band, authority_inferred, authority_band_warning }
 */
function resolveAuthorityBand(frontmatter, rootName) {
  const rootConfig = INDEXED_ROOTS[rootName];
  const authority_inferred = rootConfig?.authority || "operational";

  // Check for frontmatter override (in precedence order)
  const overrideValue =
    frontmatter?.authority_band || frontmatter?.authority || frontmatter?.authorityBand || null;

  if (overrideValue) {
    // Validate the override
    if (VALID_AUTHORITY_BANDS.includes(overrideValue)) {
      return {
        authority_band: overrideValue,
        authority_inferred,
        authority_band_warning: null,
      };
    } else {
      // Invalid override value — fall back to operational with warning
      return {
        authority_band: "operational",
        authority_inferred,
        authority_band_warning: `invalid_override_value: "${overrideValue}"`,
      };
    }
  }

  // No override — use inferred
  return {
    authority_band: authority_inferred,
    authority_inferred,
    authority_band_warning: null,
  };
}

// ============================================================================
// FRONTMATTER PARSING
// ============================================================================

function parseFrontmatter(content) {
  const normalized = content.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { frontmatter: null, body: content };
  }

  const endIdx = normalized.indexOf("\n---\n", 4);
  if (endIdx === -1) {
    return { frontmatter: null, body: content };
  }

  const raw = normalized.slice(4, endIdx);
  const body = normalized.slice(endIdx + 5);
  const data = {};

  for (const line of raw.split("\n")) {
    if (!line.includes(":")) continue;
    const colonIdx = line.indexOf(":");
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    // Handle quoted strings
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Handle arrays (simple case: ["tag1", "tag2"])
    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        value = JSON.parse(value);
      } catch (e) {
        // Keep as string if JSON parse fails
      }
    }

    if (key) data[key] = value;
  }

  return { frontmatter: data, body };
}

// ============================================================================
// HEADING EXTRACTION
// ============================================================================

function extractHeadings(body) {
  const headings = [];
  const lines = body.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match H1, H2, H3
    const h1Match = line.match(/^#\s+(.+)$/);
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h1Match) {
      headings.push({ level: 1, text: h1Match[1].trim(), line: i + 1 });
    } else if (h2Match) {
      headings.push({ level: 2, text: h2Match[1].trim(), line: i + 1 });
    } else if (h3Match) {
      headings.push({ level: 3, text: h3Match[1].trim(), line: i + 1 });
    }
  }

  return headings;
}

// ============================================================================
// TITLE EXTRACTION
// ============================================================================

function extractTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractSubtitle(body) {
  // First blockquote after title
  const match = body.match(/^>\s*(.+)$/m);
  return match ? match[1].trim() : null;
}

// ============================================================================
// FILE SCANNING
// ============================================================================

function getAllMarkdownFiles(dir, rootName) {
  if (!existsSync(dir)) return [];

  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (EXCLUDE.some((ex) => entry.name === ex || entry.name.startsWith("."))) continue;

    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllMarkdownFiles(full, rootName));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push({ fullPath: full, rootName });
    }
  }

  return files;
}

// ============================================================================
// INDEX ENTRY GENERATION
// ============================================================================

function generateIndexEntry(filePath, rootName) {
  const relPath = relative(ROOT, filePath);
  const content = readFileSync(filePath, "utf8");
  const { frontmatter, body } = parseFrontmatter(content);

  const title = frontmatter?.title || extractTitle(body) || relPath;
  const subtitle = extractSubtitle(body);
  const headings = extractHeadings(body);

  // Resolve authority with override precedence
  const { authority_band, authority_inferred, authority_band_warning } = resolveAuthorityBand(
    frontmatter,
    rootName,
  );

  const entry = {
    path: relPath,
    root: rootName,

    // Authority (resolved with frontmatter override)
    authority_band,
    authority_inferred,

    // Frontmatter fields (if present)
    uri: frontmatter?.uri || null,
    title: title,
    subtitle: subtitle,
    tags: frontmatter?.tags || [],
    stability: frontmatter?.stability || null,
    tier: frontmatter?.tier || null,
    audience: frontmatter?.audience || null,
    exposure: frontmatter?.exposure || null,
    voice: frontmatter?.voice || null,
    relevance: frontmatter?.relevance || null,
    execution_posture: frontmatter?.execution_posture || null,

    // Structure
    headings: headings,
    heading_count: headings.length,

    // Metadata
    has_frontmatter: frontmatter !== null,
  };

  // Only include warning if present
  if (authority_band_warning) {
    entry.authority_band_warning = authority_band_warning;
  }

  return entry;
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log("📚 Building docs index for Librarian fast-lookup...\n");

  // Collect all files from indexed roots
  const allFiles = [];
  for (const [rootName, config] of Object.entries(INDEXED_ROOTS)) {
    const rootDir = join(ROOT, rootName);
    const files = getAllMarkdownFiles(rootDir, rootName);
    allFiles.push(...files);
    console.log(`  ${rootName}/: ${files.length} files (${config.authority})`);
  }

  console.log(`\n  Total: ${allFiles.length} markdown files\n`);

  // Generate index entries
  const entries = [];
  let withFrontmatter = 0;
  let withHeadings = 0;

  for (const { fullPath, rootName } of allFiles) {
    try {
      const entry = generateIndexEntry(fullPath, rootName);
      entries.push(entry);
      if (entry.has_frontmatter) withFrontmatter++;
      if (entry.heading_count > 0) withHeadings++;
    } catch (err) {
      console.warn(`  ⚠️  Skipped ${relative(ROOT, fullPath)}: ${err.message}`);
    }
  }

  // Sort by path for deterministic output
  entries.sort((a, b) => a.path.localeCompare(b.path));

  // Build summary stats
  const stats = {
    total_documents: entries.length,
    with_frontmatter: withFrontmatter,
    with_headings: withHeadings,
    by_root: {},
    by_authority: {},
  };

  let withAuthorityOverride = 0;
  let withAuthorityWarning = 0;

  for (const entry of entries) {
    stats.by_root[entry.root] = (stats.by_root[entry.root] || 0) + 1;
    stats.by_authority[entry.authority_band] = (stats.by_authority[entry.authority_band] || 0) + 1;
    if (entry.authority_band !== entry.authority_inferred) withAuthorityOverride++;
    if (entry.authority_band_warning) withAuthorityWarning++;
  }

  stats.with_authority_override = withAuthorityOverride;
  stats.with_authority_warning = withAuthorityWarning;

  // Build the index
  const index = {
    version: "1.1",
    generated_at: new Date().toISOString(),
    description: "Fast-lookup index for Librarian retrieval. Per docs/agents/librarian/contract.md",
    schema_notes: {
      authority_band: "Resolved authority (frontmatter override > inferred from root)",
      authority_inferred: "Authority inferred from root folder only",
      authority_band_warning: "Present only if frontmatter override was invalid",
    },
    roots: INDEXED_ROOTS,
    stats: stats,
    documents: entries,
  };

  // Ensure output directory exists
  mkdirSync(INDEX_DIR, { recursive: true });

  // Write index
  writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2) + "\n");

  // Report
  console.log("📊 Index summary:\n");
  console.log(`   Total documents:   ${stats.total_documents}`);
  console.log(`   With frontmatter:  ${stats.with_frontmatter}`);
  console.log(`   With headings:     ${stats.with_headings}`);
  console.log("");
  console.log("   By authority_band:");
  for (const [authority, count] of Object.entries(stats.by_authority)) {
    console.log(`     ${authority}: ${count}`);
  }
  console.log("");
  console.log(`   Authority overrides: ${stats.with_authority_override}`);
  if (stats.with_authority_warning > 0) {
    console.log(`   ⚠️  Authority warnings: ${stats.with_authority_warning}`);
  }
  console.log("");
  console.log(`✅ Wrote ${OUTPUT_FILE.replace(ROOT + "/", "")}`);
}

main();
