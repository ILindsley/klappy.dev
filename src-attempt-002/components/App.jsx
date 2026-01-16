import { useState, useEffect, useCallback } from 'react';
import Sidebar from './Sidebar';
import ReadingPane from './ReadingPane';
import ChatPanel from './ChatPanel';
import { loadManifest, getNavResources } from '../lib/manifest';
import { executeAction } from '../lib/actions';

/**
 * Main App component
 * 
 * Per PRD v0.1: Chat-first interface with three-pane layout
 * - Sidebar: manifest-driven navigation
 * - Reading pane: markdown content display
 * - Chat panel: conversational interface with mock provider
 */
export default function App() {
  const [manifest, setManifest] = useState(null);
  const [currentResource, setCurrentResource] = useState(null);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load manifest on mount
  useEffect(() => {
    async function init() {
      try {
        const data = await loadManifest();
        setManifest(data);
        
        // Load default resource (public entrypoint)
        const defaultUri = data.pack?.public_entrypoint;
        if (defaultUri) {
          const defaultResource = data.resources.find(r => r.uri === defaultUri);
          if (defaultResource) {
            setCurrentResource(defaultResource);
          }
        }
        
        // Add welcome message
        setChatMessages([{
          id: 'welcome',
          role: 'assistant',
          content: "Hey there! I'm here to help you explore this site. What would you like to know about?",
          actions: [],
          timestamp: Date.now()
        }]);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    init();
  }, []);

  // Handle UI actions from chat
  const handleAction = useCallback((action) => {
    executeAction(action, {
      manifest,
      setCurrentResource,
      setHighlightedSection,
      resources: manifest?.resources || []
    });
  }, [manifest]);

  // Handle sidebar navigation
  const handleNavigate = useCallback((resource) => {
    setCurrentResource(resource);
    setHighlightedSection(null);
  }, []);

  // Handle new chat messages
  const handleChatMessage = useCallback((message) => {
    setChatMessages(prev => [...prev, message]);
  }, []);

  if (loading) {
    return (
      <div className="app-loading">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  const navResources = manifest ? getNavResources(manifest) : [];

  return (
    <div className="app">
      <Sidebar 
        resources={navResources}
        currentResource={currentResource}
        onNavigate={handleNavigate}
      />
      <ReadingPane 
        resource={currentResource}
        highlightedSection={highlightedSection}
      />
      <ChatPanel 
        messages={chatMessages}
        onMessage={handleChatMessage}
        onAction={handleAction}
        manifest={manifest}
      />
    </div>
  );
}
