import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import SuggestedQuestions from './SuggestedQuestions';
import { getMockResponse } from '../providers/mock';

/**
 * Chat panel for conversational interface
 * 
 * Per PRD v0.1:
 * - Chat-first interface
 * - Keep responses concise (1-3 sentences)
 * - Prefer UI actions over verbose text
 * - Ask permission before going deeper
 */
export default function ChatPanel({ messages, onMessage, onAction, manifest }) {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const text = input.trim();
    if (!text || isProcessing) return;

    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now()
    };
    onMessage(userMessage);
    setInput('');
    setIsProcessing(true);

    // Get mock response (simulating LLM)
    try {
      const response = await getMockResponse(text, manifest);
      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.content,
        actions: response.actions || [],
        timestamp: Date.now()
      };
      onMessage(assistantMessage);
    } catch (err) {
      const errorMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "Sorry, I ran into an issue. Could you try asking again?",
        actions: [],
        timestamp: Date.now()
      };
      onMessage(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
    inputRef.current?.focus();
  };

  // Suggested questions for orientation
  const suggestedQuestions = [
    "What is this site about?",
    "Show me the constraints",
    "What is ODD?",
    "Tell me about projects"
  ];

  return (
    <aside className="chat-panel">
      <header className="chat-header">
        <h2>Chat</h2>
      </header>

      <div className="chat-messages">
        {messages.map(message => (
          <ChatMessage 
            key={message.id} 
            message={message}
            onAction={onAction}
          />
        ))}
        
        {isProcessing && (
          <div className="chat-typing">
            <span>Thinking...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {messages.length <= 1 && (
        <SuggestedQuestions 
          questions={suggestedQuestions}
          onSelect={handleSuggestedQuestion}
        />
      )}

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={isProcessing}
        />
        <button 
          type="submit" 
          className="chat-submit"
          disabled={!input.trim() || isProcessing}
        >
          Send
        </button>
      </form>
    </aside>
  );
}
