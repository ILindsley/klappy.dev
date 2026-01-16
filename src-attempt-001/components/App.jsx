/**
 * Main App component
 * This code runs in the browser + Cloudflare Pages. Do not use Node-only APIs.
 */

import { useState, useEffect, useCallback } from 'react';
import { loadManifest, findResourceByUri, groupByAudience, fetchResourceContent } from '../lib/manifest.js';
import { parseMarkdown } from '../lib/markdown.js';
import { executeActions } from '../lib/actions.js';
import { respond as mockRespond } from '../providers/mock.js';
import Sidebar from './Sidebar.jsx';
import ReadingPane from './ReadingPane.jsx';
import ChatPanel from './ChatPanel.jsx';

export default function App() {
  // Manifest state
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Current document state
  const [currentResource, setCurrentResource] = useState(null);
  const [markdownHtml, setMarkdownHtml] = useState('');
  const [headings, setHeadings] = useState([]);
  
  // Chat state
  const [messages, setMessages] = useState([]);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "What is ODD?",
    "Show me the constraints",
    "Who are you?",
    "What projects are here?"
  ]);
  
  // Load manifest on mount
  useEffect(() => {
    loadManifest()
      .then(data => {
        setResources(data.resources);
        setLoading(false);
        
        // Load public entrypoint by default
        const entrypoint = findResourceByUri(data.resources, data.pack.public_entrypoint);
        if (entrypoint) {
          handleOpenResource(entrypoint.uri, data.resources);
        }
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  // Open a resource by URI
  const handleOpenResource = useCallback(async (uri, resourceList = resources) => {
    const resource = findResourceByUri(resourceList, uri);
    if (!resource) {
      console.warn('Resource not found:', uri);
      return;
    }
    
    try {
      const content = await fetchResourceContent(resource);
      const { html, headings: docHeadings } = parseMarkdown(content);
      setCurrentResource(resource);
      setMarkdownHtml(html);
      setHeadings(docHeadings);
    } catch (err) {
      console.error('Failed to load resource:', err);
    }
  }, [resources]);
  
  // Action handlers for the interpreter
  const actionHandlers = {
    onOpen: (uri) => handleOpenResource(uri),
    onSuggestQuestions: (questions) => setSuggestedQuestions(questions),
    onAskFollowup: (question) => handleSendMessage(question)
  };
  
  // Send a message to the mock provider
  const handleSendMessage = useCallback(async (text) => {
    // Add user message
    const userMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    
    // Get response from mock provider
    const context = { resources, currentResource, currentSectionId: null };
    const response = await mockRespond(text, context);
    
    // Add assistant message
    const assistantMessage = { role: 'assistant', text: response.text, actions: response.actions };
    setMessages(prev => [...prev, assistantMessage]);
    
    // Execute actions
    if (response.actions && response.actions.length > 0) {
      // Small delay to let the message render first
      setTimeout(() => {
        executeActions(response.actions, actionHandlers);
      }, 100);
    }
  }, [resources, currentResource, actionHandlers]);
  
  // Handle suggested question click
  const handleQuestionClick = useCallback((question) => {
    handleSendMessage(question);
  }, [handleSendMessage]);
  
  if (loading) {
    return <div className="app"><div className="loading">Loading...</div></div>;
  }
  
  if (error) {
    return <div className="app"><div className="error">Error: {error}</div></div>;
  }
  
  const grouped = groupByAudience(resources);
  
  return (
    <div className="app">
      <Sidebar
        publicResources={grouped.public}
        canonResources={grouped.canon}
        currentUri={currentResource?.uri}
        onSelect={handleOpenResource}
      />
      <ReadingPane
        html={markdownHtml}
        title={currentResource?.title}
      />
      <ChatPanel
        messages={messages}
        suggestedQuestions={suggestedQuestions}
        onSendMessage={handleSendMessage}
        onQuestionClick={handleQuestionClick}
      />
    </div>
  );
}
