/**
 * Individual chat message component
 */

export default function ChatMessage({ message }) {
  const { role, text } = message;
  
  return (
    <div className={`chat-message ${role}`}>
      {text}
    </div>
  );
}
