/**
 * Type definitions and constants
 * 
 * Per PRD v0.1:
 * - Defines action types
 * - Defines resource structure expectations
 * - Provides documentation for consumers
 */

/**
 * Approved UI Action types (PRD Section 10)
 */
export const ActionTypes = {
  OPEN: 'open',
  SCROLL_TO: 'scroll_to',
  HIGHLIGHT: 'highlight',
  EXPAND: 'expand',
  COLLAPSE: 'collapse',
  PREVIEW: 'preview',
  SHOW_RELATED: 'show_related',
  PIN: 'pin',
  ASK_FOLLOWUP: 'ask_followup',
  SUGGEST_QUESTIONS: 'suggest_questions'
};

/**
 * Resource audience types
 */
export const AudienceTypes = {
  PUBLIC: 'public',
  CANON: 'canon',
  INTERNAL: 'internal'
};

/**
 * Resource exposure types
 */
export const ExposureTypes = {
  NAV: 'nav',
  INTERNAL: 'internal',
  HIDDEN: 'hidden'
};

/**
 * Resource stability levels
 */
export const StabilityTypes = {
  STABLE: 'stable',
  SEMI_STABLE: 'semi_stable',
  EVOLVING: 'evolving',
  FROZEN: 'frozen'
};

/**
 * Message roles for chat
 */
export const MessageRoles = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system'
};

/**
 * Voice types for content
 */
export const VoiceTypes = {
  FIRST_PERSON: 'first_person',
  NEUTRAL: 'neutral'
};
