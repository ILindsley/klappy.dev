/**
 * Type definitions for klappy.dev
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 */

/**
 * Canonical UIAction schema
 * All action interpreters and providers MUST use this shape.
 * 
 * @typedef {Object} UIAction
 * @property {string} action - The action type (open, scroll_to, highlight, etc.)
 * @property {Object} [params] - Action parameters (varies by action type)
 * 
 * Supported actions:
 * - { action: "open", params: { uri: string } }
 * - { action: "scroll_to", params: { sectionId: string } }
 * - { action: "highlight", params: { sectionId: string } }
 * - { action: "expand", params: { sectionId: string } }
 * - { action: "collapse", params: { sectionId: string } }
 * - { action: "preview", params: { itemId: string } }
 * - { action: "show_related", params: { items: string[] } }
 * - { action: "pin", params: { itemId: string } }
 * - { action: "ask_followup", params: { question: string } }
 * - { action: "suggest_questions", params: { questions: string[] } }
 */

/**
 * Manifest resource from manifest.json
 * 
 * @typedef {Object} ManifestResource
 * @property {string} uri - Canonical URI (e.g., "klappy://canon/constraints")
 * @property {string} path - File path relative to content root (e.g., "/canon/constraints.md")
 * @property {string} title - Human-readable title
 * @property {string} type - MIME type (e.g., "text/markdown")
 * @property {string} audience - "public" or "canon"
 * @property {string} voice - "first_person" or "neutral"
 * @property {string} stability - "stable", "semi_stable", or "evolving"
 * @property {string[]} tags - Categorization tags
 */

/**
 * Chat message
 * 
 * @typedef {Object} ChatMessage
 * @property {string} role - "user" or "assistant"
 * @property {string} text - Message content
 * @property {UIAction[]} [actions] - UI actions to execute (assistant only)
 */

/**
 * App context passed to providers
 * 
 * @typedef {Object} AppContext
 * @property {ManifestResource[]} resources - All available resources
 * @property {ManifestResource|null} currentResource - Currently displayed resource
 * @property {string|null} currentSectionId - Currently highlighted section
 */

// Export empty object to make this a module
export {};
