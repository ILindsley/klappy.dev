/**
 * UI Action interpreter
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 * 
 * Canonical UIAction schema: { action: string, params?: Record<string, any> }
 * 
 * All actions are executed deterministically against the app state and DOM.
 */

import { scrollToSection, highlightSection } from './markdown.js';

/**
 * Execute a single UI action
 * @param {import('./types').UIAction} action - Action to execute
 * @param {Object} handlers - Action handlers from app state
 * @param {function(string): void} handlers.onOpen - Handle open action
 * @param {function(string[]): void} handlers.onSuggestQuestions - Handle suggested questions
 * @param {function(string): void} handlers.onAskFollowup - Handle followup question
 */
export function executeAction(action, handlers) {
  const { action: actionType, params = {} } = action;
  
  switch (actionType) {
    case 'open':
      if (params.uri && handlers.onOpen) {
        handlers.onOpen(params.uri);
      }
      break;
      
    case 'scroll_to':
      if (params.sectionId) {
        scrollToSection(params.sectionId, false);
      }
      break;
      
    case 'highlight':
      if (params.sectionId) {
        highlightSection(params.sectionId);
      }
      break;
      
    case 'scroll_to_and_highlight':
      // Convenience action: scroll then highlight
      if (params.sectionId) {
        scrollToSection(params.sectionId, true);
      }
      break;
      
    case 'expand':
      // Minimal implementation for Phase 1 - just scroll to make visible
      if (params.sectionId) {
        scrollToSection(params.sectionId, false);
      }
      break;
      
    case 'collapse':
      // Minimal implementation for Phase 1 - no-op
      console.log('collapse action (no-op for Phase 1):', params.sectionId);
      break;
      
    case 'preview':
      // Minimal implementation for Phase 1 - treat as open
      if (params.itemId && handlers.onOpen) {
        handlers.onOpen(params.itemId);
      }
      break;
      
    case 'show_related':
      // Minimal implementation for Phase 1 - log items
      console.log('show_related action (minimal for Phase 1):', params.items);
      break;
      
    case 'pin':
      // Minimal implementation for Phase 1 - no-op
      console.log('pin action (no-op for Phase 1):', params.itemId);
      break;
      
    case 'ask_followup':
      if (params.question && handlers.onAskFollowup) {
        handlers.onAskFollowup(params.question);
      }
      break;
      
    case 'suggest_questions':
      if (params.questions && handlers.onSuggestQuestions) {
        handlers.onSuggestQuestions(params.questions);
      }
      break;
      
    default:
      console.warn('Unknown action type:', actionType);
  }
}

/**
 * Execute a sequence of UI actions
 * @param {import('./types').UIAction[]} actions - Actions to execute
 * @param {Object} handlers - Action handlers from app state
 */
export function executeActions(actions, handlers) {
  for (const action of actions) {
    executeAction(action, handlers);
  }
}
