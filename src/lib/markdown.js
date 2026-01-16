/**
 * Markdown rendering utilities
 * 
 * Simple markdown to HTML conversion
 * Uses basic regex patterns - no external dependencies for Phase 1
 */

/**
 * Convert markdown text to HTML
 * @param {string} markdown - Raw markdown text
 * @returns {string} HTML string
 */
export function renderMarkdown(markdown) {
  if (!markdown) return '';
  
  let html = markdown;
  
  // Escape HTML entities first (security)
  html = escapeHtml(html);
  
  // Headers (must be done before other block elements)
  html = html.replace(/^######\s+(.+)$/gm, '<h6 id="$1">$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5 id="$1">$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4 id="$1">$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3 id="$1">$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2 id="$1">$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1 id="$1">$1</h1>');
  
  // Code blocks (fenced with ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
  });
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');
  html = html.replace(/^\*\*\*+$/gm, '<hr>');
  
  // Unordered lists
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  
  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  
  // Blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Paragraphs (lines not already wrapped)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>');
  
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  
  // Clean up header IDs (make URL-friendly)
  html = html.replace(/id="([^"]+)"/g, (match, id) => {
    const cleanId = slugify(id);
    return `id="${cleanId}"`;
  });
  
  return html;
}

/**
 * Escape HTML entities
 */
function escapeHtml(text) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return text.replace(/[&<>"']/g, char => entities[char]);
}

/**
 * Convert text to URL-friendly slug
 */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Extract headings from markdown for table of contents
 */
export function extractHeadings(markdown) {
  if (!markdown) return [];
  
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: slugify(match[2])
    });
  }
  
  return headings;
}
