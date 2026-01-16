/**
 * Chat panel component - conversation interface
 */

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage.jsx';
import SuggestedQuestions from './SuggestedQuestions.jsx';

export default function ChatPanel({ messages, suggestedQuestions, onSendMessage, onQuestionClick }) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <aside className="chat-panel">
      <div className="chat-header">Chat</div>
      
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-message assistant">
            Welcome! Ask me anything about this site.
          </div>
        )}
        
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        
        <div ref={messagesEndRef} />
      </div>
      
      {suggestedQuestions.length > 0 && (
        <SuggestedQuestions 
          questions={suggestedQuestions} 
          onSelect={onQuestionClick}
        />
      )}
      
      <form className="chat-input-container" onSubmit={handleSubmit}>
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
          rows={2}
        />
      </form>
    </aside>
  );
}
