/**
 * Manifest loading and utilities
 * 
 * Per PRD v0.1:
 * - manifest-driven doc listing
 * - Resources with URIs, paths, titles, audiences
 */

const MANIFEST_PATH = '/content/manifest.json';

/**
 * Load the content manifest
 */
export async function loadManifest() {
  const response = await fetch(MANIFEST_PATH);
  
  if (!response.ok) {
    throw new Error(`Failed to load manifest: ${response.status}`);
  }
  
  return response.json();
}

/**
 * Get resources that should appear in navigation
 * Filters to resources with exposure: 'nav'
 */
export function getNavResources(manifest) {
  if (!manifest?.resources) return [];
  
  return manifest.resources.filter(resource => 
    resource.exposure === 'nav'
  );
}

/**
 * Find a resource by URI
 */
export function findResourceByUri(manifest, uri) {
  if (!manifest?.resources) return null;
  
  return manifest.resources.find(resource => resource.uri === uri);
}

/**
 * Find a resource by path
 */
export function findResourceByPath(manifest, path) {
  if (!manifest?.resources) return null;
  
  return manifest.resources.find(resource => resource.path === path);
}

/**
 * Find resources by tag
 */
export function findResourcesByTag(manifest, tag) {
  if (!manifest?.resources) return [];
  
  return manifest.resources.filter(resource => 
    resource.tags?.includes(tag)
  );
}

/**
 * Get the title for a resource, falling back to path
 */
export function getResourceTitle(resource) {
  return resource?.title || resource?.path || 'Untitled';
}
