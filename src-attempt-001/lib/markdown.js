/**
 * Markdown rendering with stable heading IDs
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 * 
 * Heading ID stability:
 * - Same heading text -> same ID
 * - Duplicate headings get deterministic suffixes (-1, -2, etc.)
 * - IDs are URL-safe slugs
 */

import { marked } from 'marked';

/**
 * Create a deterministic slug from text
 * @param {string} text - Heading text
 * @returns {string} URL-safe slug
 */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')  // Remove non-word chars except spaces and hyphens
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/-+/g, '-')        // Collapse multiple hyphens
    .replace(/^-|-$/g, '');     // Trim leading/trailing hyphens
}

/**
 * Create a slugger that tracks used IDs for collision handling
 * @returns {{ slug: (text: string) => string, reset: () => void }}
 */
export function createSlugger() {
  const used = new Map();
  
  return {
    /**
     * Generate a unique slug for heading text
     * @param {string} text - Heading text
     * @returns {string} Unique slug (with suffix if collision)
     */
    slug(text) {
      const base = slugify(text);
      const count = used.get(base) || 0;
      used.set(base, count + 1);
      
      // First occurrence: use base slug
      // Subsequent occurrences: add suffix
      return count === 0 ? base : `${base}-${count}`;
    },
    
    /**
     * Reset the slugger for a new document
     */
    reset() {
      used.clear();
    }
  };
}

/**
 * Parse markdown and return HTML with stable heading IDs
 * @param {string} markdown - Raw markdown content
 * @returns {{ html: string, headings: Array<{id: string, text: string, level: number}> }}
 */
export function parseMarkdown(markdown) {
  const slugger = createSlugger();
  const headings = [];
  
  // Configure marked with custom renderer for headings
  const renderer = new marked.Renderer();
  
  renderer.heading = function({ tokens, depth }) {
    const text = tokens.map(t => t.raw || t.text || '').join('');
    const id = slugger.slug(text);
    headings.push({ id, text, level: depth });
    return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
  };
  
  const html = marked(markdown, { 
    renderer,
    gfm: true,
    breaks: false
  });
  
  return { html, headings };
}

/**
 * Scroll to a heading by ID with optional highlight
 * @param {string} sectionId - Heading ID to scroll to
 * @param {boolean} [highlight=false] - Whether to add highlight class
 */
export function scrollToSection(sectionId, highlight = false) {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section not found: ${sectionId}`);
    return;
  }
  
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  if (highlight) {
    highlightSection(sectionId);
  }
}

/**
 * Add highlight class to a section (with auto-remove after animation)
 * @param {string} sectionId - Heading ID to highlight
 */
export function highlightSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section not found: ${sectionId}`);
    return;
  }
  
  // Remove existing highlight if present
  element.classList.remove('highlight');
  
  // Force reflow to restart animation
  void element.offsetWidth;
  
  // Add highlight class
  element.classList.add('highlight');
  
  // Remove after animation completes (matches CSS animation duration)
  setTimeout(() => {
    element.classList.remove('highlight');
  }, 2000);
}
