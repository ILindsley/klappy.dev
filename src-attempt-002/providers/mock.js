/**
 * Mock LLM Provider
 * 
 * Per PRD v0.1:
 * - Phase 1 uses deterministic mock responses
 * - Responses should be concise (1-3 sentences)
 * - Prefer UI actions over verbose explanations
 * - Can trigger approved UI actions
 */

import { createAction } from '../lib/actions';
import { ActionTypes } from '../lib/types';

/**
 * Get a mock response for a user query
 * @param {string} query - User's message
 * @param {Object} manifest - Content manifest
 * @returns {Promise<Object>} Response with content and actions
 */
export async function getMockResponse(query, manifest) {
  // Simulate network delay
  await delay(300 + Math.random() * 400);
  
  const queryLower = query.toLowerCase();
  
  // Pattern matching for common queries
  
  // About/orientation queries
  if (matchesAny(queryLower, ['what is this', 'about', 'who are you', 'introduce'])) {
    return {
      content: "This is klappy.dev - a conversational portfolio built with outcome-driven development principles. Would you like to learn about the philosophy behind it?",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://public/odd', { 
          label: 'ODD Manifesto' 
        })
      ]
    };
  }
  
  // Constraints queries
  if (matchesAny(queryLower, ['constraint', 'rule', 'principle', 'guidelines'])) {
    return {
      content: "Here are the constraints that guide development here.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://canon/constraints', { 
          label: 'Constraints' 
        })
      ]
    };
  }
  
  // ODD queries
  if (matchesAny(queryLower, ['odd', 'outcome', 'driven', 'development', 'methodology'])) {
    return {
      content: "ODD (Outcome-Driven Development) is the philosophy behind how this site is built. It prioritizes observable results over process adherence.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://public/odd', { 
          label: 'ODD Manifesto' 
        }),
        createAction(ActionTypes.OPEN, 'klappy://canon/odd/manifesto', { 
          label: 'Extended Manifesto' 
        })
      ]
    };
  }
  
  // Project queries
  if (matchesAny(queryLower, ['project', 'work', 'portfolio', 'built'])) {
    return {
      content: "Check out the projects section to see what's being built here.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://projects/index', { 
          label: 'Projects' 
        })
      ]
    };
  }
  
  // Canon/documentation queries
  if (matchesAny(queryLower, ['canon', 'documentation', 'docs', 'reference'])) {
    return {
      content: "The Canon contains all the governance documents - constraints, decision rules, evidence policies, and more.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://meta/canon-index', { 
          label: 'Canon Index' 
        })
      ]
    };
  }
  
  // Decision rules queries
  if (matchesAny(queryLower, ['decision', 'how to decide', 'heuristic'])) {
    return {
      content: "Decision rules help guide choices during development.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://canon/decision-rules', { 
          label: 'Decision Rules' 
        })
      ]
    };
  }
  
  // Evidence/proof queries
  if (matchesAny(queryLower, ['evidence', 'proof', 'done', 'complete', 'verify'])) {
    return {
      content: "Evidence-based completion is a core principle here. Work isn't done until there's proof.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://canon/definition-of-done', { 
          label: 'Definition of Done' 
        }),
        createAction(ActionTypes.OPEN, 'klappy://canon/visual-proof', { 
          label: 'Visual Proof Standards' 
        })
      ]
    };
  }
  
  // Bio/personal queries
  if (matchesAny(queryLower, ['bio', 'chris', 'klapp', 'yourself', 'author'])) {
    return {
      content: "Here's a bit about the person behind this site.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://about/bio', { 
          label: 'Bio' 
        })
      ]
    };
  }
  
  // FAQ queries
  if (matchesAny(queryLower, ['faq', 'question', 'help', 'common'])) {
    return {
      content: "The FAQ might have what you're looking for.",
      actions: [
        createAction(ActionTypes.OPEN, 'klappy://about/faq', { 
          label: 'FAQ' 
        })
      ]
    };
  }
  
  // Greeting responses
  if (matchesAny(queryLower, ['hi', 'hello', 'hey', 'greet', 'morning', 'afternoon', 'evening'])) {
    return {
      content: "Hey! What would you like to explore? I can show you projects, the philosophy behind this site, or dive into the governance documents.",
      actions: []
    };
  }
  
  // Thanks responses
  if (matchesAny(queryLower, ['thank', 'thanks', 'appreciate'])) {
    return {
      content: "You're welcome! Let me know if there's anything else you'd like to explore.",
      actions: []
    };
  }
  
  // Default fallback - try to find relevant content
  const matchedResource = findRelevantResource(query, manifest);
  
  if (matchedResource) {
    return {
      content: `I found something that might be relevant: "${matchedResource.title}"`,
      actions: [
        createAction(ActionTypes.OPEN, matchedResource.uri, { 
          label: matchedResource.title 
        })
      ]
    };
  }
  
  // True fallback
  return {
    content: "I'm not sure I have specific information about that. Would you like to explore the Canon index or browse projects?",
    actions: [
      createAction(ActionTypes.OPEN, 'klappy://meta/canon-index', { 
        label: 'Canon Index' 
      }),
      createAction(ActionTypes.OPEN, 'klappy://projects/index', { 
        label: 'Projects' 
      })
    ]
  };
}

/**
 * Check if query matches any of the keywords
 */
function matchesAny(query, keywords) {
  return keywords.some(keyword => query.includes(keyword));
}

/**
 * Try to find a relevant resource based on query keywords
 */
function findRelevantResource(query, manifest) {
  if (!manifest?.resources) return null;
  
  const queryWords = query.toLowerCase().split(/\s+/);
  
  // Score each resource by keyword matches
  let bestMatch = null;
  let bestScore = 0;
  
  for (const resource of manifest.resources) {
    if (resource.exposure !== 'nav') continue;
    
    let score = 0;
    const titleLower = (resource.title || '').toLowerCase();
    const tags = resource.tags || [];
    
    for (const word of queryWords) {
      if (word.length < 3) continue; // Skip short words
      
      if (titleLower.includes(word)) score += 2;
      if (tags.some(tag => tag.includes(word))) score += 1;
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = resource;
    }
  }
  
  return bestScore >= 2 ? bestMatch : null;
}

/**
 * Simple delay helper
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
