/**
 * Mock LLM provider for Phase 1
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 * 
 * Returns short responses + UI actions based on keyword matching.
 * Demonstrates navigation without real LLM calls.
 */

/**
 * Pattern-based response generator
 * @param {string} userMessage - User's input message
 * @param {import('../lib/types').AppContext} context - Current app context
 * @returns {Promise<{text: string, actions: import('../lib/types').UIAction[]}>}
 */
export async function respond(userMessage, context) {
  const input = userMessage.toLowerCase().trim();
  
  // Pattern matching for common queries
  if (matchesAny(input, ['hello', 'hi', 'hey', 'start', 'help'])) {
    return {
      text: "Welcome to klappy.dev. I can help you explore the canon and projects.",
      actions: [
        { action: 'suggest_questions', params: { 
          questions: [
            "What is ODD?",
            "Show me the constraints",
            "Who are you?",
            "What projects are here?"
          ]
        }}
      ]
    };
  }
  
  if (matchesAny(input, ['who', 'about', 'bio', 'you'])) {
    return {
      text: "Opening the bio.",
      actions: [
        { action: 'open', params: { uri: 'klappy://about/bio' } },
        { action: 'suggest_questions', params: { 
          questions: ["What's your credibility?", "Show me projects"]
        }}
      ]
    };
  }
  
  if (matchesAny(input, ['constraint', 'principles', 'rules'])) {
    return {
      text: "Jumping you to the constraints.",
      actions: [
        { action: 'open', params: { uri: 'klappy://canon/constraints' } }
      ]
    };
  }
  
  if (matchesAny(input, ['odd', 'outcome', 'driven'])) {
    return {
      text: "Here's the ODD manifesto.",
      actions: [
        { action: 'open', params: { uri: 'klappy://public/odd' } },
        { action: 'suggest_questions', params: { 
          questions: ["What are the misuse patterns?", "Show me the maturity model"]
        }}
      ]
    };
  }
  
  if (matchesAny(input, ['project', 'work', 'portfolio'])) {
    return {
      text: "Here are the projects.",
      actions: [
        { action: 'open', params: { uri: 'klappy://projects/index' } }
      ]
    };
  }
  
  if (matchesAny(input, ['decision', 'heuristic'])) {
    return {
      text: "Opening decision rules.",
      actions: [
        { action: 'open', params: { uri: 'klappy://canon/decision-rules' } }
      ]
    };
  }
  
  if (matchesAny(input, ['done', 'evidence', 'complete', 'proof'])) {
    return {
      text: "Here's the definition of done.",
      actions: [
        { action: 'open', params: { uri: 'klappy://canon/definition-of-done' } },
        { action: 'suggest_questions', params: { 
          questions: ["What about visual proof?", "Show me the self-audit checklist"]
        }}
      ]
    };
  }
  
  if (matchesAny(input, ['audit', 'check', 'verify'])) {
    return {
      text: "Here's the self-audit checklist.",
      actions: [
        { action: 'open', params: { uri: 'klappy://canon/self-audit' } }
      ]
    };
  }
  
  if (matchesAny(input, ['visual', 'screenshot', 'recording'])) {
    return {
      text: "Visual proof standards.",
      actions: [
        { action: 'open', params: { uri: 'klappy://canon/visual-proof' } }
      ]
    };
  }
  
  if (matchesAny(input, ['faq', 'question', 'ask'])) {
    return {
      text: "Opening the FAQ.",
      actions: [
        { action: 'open', params: { uri: 'klappy://about/faq' } }
      ]
    };
  }
  
  if (matchesAny(input, ['credib', 'trust', 'background'])) {
    return {
      text: "Here's the credibility page.",
      actions: [
        { action: 'open', params: { uri: 'klappy://about/credibility' } }
      ]
    };
  }
  
  if (matchesAny(input, ['index', 'canon', 'overview', 'all'])) {
    return {
      text: "Here's the canon index.",
      actions: [
        { action: 'open', params: { uri: 'klappy://meta/canon-index' } }
      ]
    };
  }
  
  if (matchesAny(input, ['scroll', 'section', 'heading'])) {
    // Demo scroll functionality if we have a current document
    if (context.currentResource) {
      return {
        text: "Scrolling to the first heading I find.",
        actions: [
          { action: 'scroll_to', params: { sectionId: 'purpose' } },
          { action: 'highlight', params: { sectionId: 'purpose' } }
        ]
      };
    }
  }
  
  // Default: offer suggestions
  return {
    text: "I'm not sure what you're looking for. Try one of these:",
    actions: [
      { action: 'suggest_questions', params: { 
        questions: [
          "What is ODD?",
          "Show me the constraints",
          "Who are you?",
          "What projects are here?"
        ]
      }}
    ]
  };
}

/**
 * Check if input matches any of the patterns
 * @param {string} input - Lowercase user input
 * @param {string[]} patterns - Patterns to match
 * @returns {boolean}
 */
function matchesAny(input, patterns) {
  return patterns.some(p => input.includes(p));
}

/**
 * Provider metadata
 */
export const providerInfo = {
  name: 'mock',
  description: 'Mock provider for Phase 1 - pattern matching without real LLM',
  supportsStreaming: false
};
