/**
 * Manifest loading and path normalization
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 * 
 * Content loading convention:
 * - Manifest paths are relative to /content with a leading slash
 * - Example: path "/canon/constraints.md" -> fetch "/content/canon/constraints.md"
 * - All fetches go through getContentUrl() for consistent normalization
 */

/**
 * Base URL for content files served from /public/content
 */
const CONTENT_BASE = '/content';

/**
 * Normalize a manifest path to a fetchable URL
 * @param {string} path - Path from manifest (e.g., "/canon/constraints.md")
 * @returns {string} Full URL to fetch (e.g., "/content/canon/constraints.md")
 */
export function getContentUrl(path) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${CONTENT_BASE}${normalizedPath}`;
}

/**
 * Load and parse the manifest.json
 * @returns {Promise<{pack: Object, resources: import('./types').ManifestResource[]}>}
 */
export async function loadManifest() {
  const response = await fetch(getContentUrl('/manifest.json'));
  if (!response.ok) {
    throw new Error(`Failed to load manifest: ${response.status}`);
  }
  return response.json();
}

/**
 * Find a resource by its canonical URI
 * @param {import('./types').ManifestResource[]} resources 
 * @param {string} uri - Canonical URI (e.g., "klappy://canon/constraints")
 * @returns {import('./types').ManifestResource|undefined}
 */
export function findResourceByUri(resources, uri) {
  return resources.find(r => r.uri === uri);
}

/**
 * Find a resource by its file path
 * @param {import('./types').ManifestResource[]} resources 
 * @param {string} path - File path (e.g., "/canon/constraints.md")
 * @returns {import('./types').ManifestResource|undefined}
 */
export function findResourceByPath(resources, path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return resources.find(r => r.path === normalizedPath);
}

/**
 * Group resources by audience (Public vs Canon)
 * Only includes resources with exposure === "nav" (or no exposure field, for backwards compatibility)
 * @param {import('./types').ManifestResource[]} resources
 * @returns {{ public: import('./types').ManifestResource[], canon: import('./types').ManifestResource[] }}
 */
export function groupByAudience(resources) {
  // Filter to only nav-exposed resources (default to nav if exposure not set)
  const navResources = resources.filter(r => !r.exposure || r.exposure === 'nav');
  return {
    public: navResources.filter(r => r.audience === 'public'),
    canon: navResources.filter(r => r.audience === 'canon')
  };
}

/**
 * Fetch markdown content for a resource
 * @param {import('./types').ManifestResource} resource
 * @returns {Promise<string>}
 */
export async function fetchResourceContent(resource) {
  const url = getContentUrl(resource.path);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${resource.path}: ${response.status}`);
  }
  return response.text();
}
