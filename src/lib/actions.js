/**
 * UI Action primitives
 * 
 * Per PRD v0.1 Section 10:
 * Approved UI Actions:
 * - open(page)
 * - scroll_to(section_id)
 * - highlight(section_id)
 * - expand(section_id)
 * - collapse(section_id)
 * - preview(item_id)
 * - show_related(items[])
 * - pin(item_id)
 * - ask_followup(question)
 * - suggest_questions(questions[])
 */

/**
 * Execute a UI action
 * @param {Object} action - The action to execute
 * @param {Object} context - Context containing state setters and resources
 */
export function executeAction(action, context) {
  const { 
    manifest, 
    setCurrentResource, 
    setHighlightedSection, 
    resources 
  } = context;

  if (!action?.type) {
    console.warn('Action missing type:', action);
    return;
  }

  switch (action.type) {
    case 'open':
      handleOpen(action, { manifest, setCurrentResource, resources });
      break;
      
    case 'scroll_to':
      handleScrollTo(action, { setHighlightedSection });
      break;
      
    case 'highlight':
      handleHighlight(action, { setHighlightedSection });
      break;
      
    case 'expand':
    case 'collapse':
    case 'preview':
    case 'pin':
      // Phase 1: Log but don't implement yet
      console.log(`Action ${action.type} not yet implemented:`, action);
      break;
      
    case 'show_related':
      console.log('show_related not yet implemented:', action);
      break;
      
    case 'ask_followup':
    case 'suggest_questions':
      // These are handled by the chat panel
      break;
      
    default:
      console.warn('Unknown action type:', action.type);
  }
}

/**
 * Handle open action - navigate to a resource
 */
function handleOpen(action, { manifest, setCurrentResource, resources }) {
  const target = action.target;
  
  if (!target) {
    console.warn('open action missing target');
    return;
  }

  // Try to find resource by URI first
  let resource = resources.find(r => r.uri === target);
  
  // Try by path if not found by URI
  if (!resource) {
    resource = resources.find(r => r.path === target);
  }
  
  // Try by title (case-insensitive partial match)
  if (!resource) {
    const targetLower = target.toLowerCase();
    resource = resources.find(r => 
      r.title?.toLowerCase().includes(targetLower)
    );
  }

  if (resource) {
    setCurrentResource(resource);
  } else {
    console.warn('Resource not found for open action:', target);
  }
}

/**
 * Handle scroll_to action - scroll to a section
 */
function handleScrollTo(action, { setHighlightedSection }) {
  const target = action.target;
  
  if (!target) {
    console.warn('scroll_to action missing target');
    return;
  }

  setHighlightedSection(target);
}

/**
 * Handle highlight action - highlight a section
 */
function handleHighlight(action, { setHighlightedSection }) {
  const target = action.target;
  
  if (!target) {
    console.warn('highlight action missing target');
    return;
  }

  setHighlightedSection(target);
}

/**
 * Create an action object (helper for providers)
 */
export function createAction(type, target, options = {}) {
  return {
    type,
    target,
    label: options.label,
    description: options.description,
    ...options
  };
}
