/**
 * Individual chat message component
 * 
 * Per PRD v0.1:
 * - Display message content
 * - Render action buttons for UI actions
 * - Actions should be clickable to execute
 */
export default function ChatMessage({ message, onAction }) {
  const { role, content, actions = [] } = message;

  const handleActionClick = (action) => {
    if (onAction) {
      onAction(action);
    }
  };

  return (
    <div className={`chat-message chat-message-${role}`}>
      <div className="chat-message-content">
        {content}
      </div>
      
      {actions.length > 0 && (
        <div className="chat-message-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className="chat-action-button"
              onClick={() => handleActionClick(action)}
              title={action.description || `${action.type}: ${action.target}`}
            >
              {getActionLabel(action)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Generate human-readable label for action buttons
 */
function getActionLabel(action) {
  switch (action.type) {
    case 'open':
      return `Open ${action.label || action.target}`;
    case 'scroll_to':
      return `Go to ${action.target}`;
    case 'highlight':
      return `Highlight ${action.target}`;
    case 'expand':
      return `Expand ${action.target}`;
    case 'collapse':
      return `Collapse ${action.target}`;
    case 'preview':
      return `Preview ${action.target}`;
    case 'show_related':
      return 'Show related';
    default:
      return action.label || action.type;
  }
}
