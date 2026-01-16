import { useState, useEffect, useRef } from 'react';
import { renderMarkdown } from '../lib/markdown';

/**
 * Reading pane for displaying markdown content
 * 
 * Per PRD v0.1:
 * - Renders markdown from resource path
 * - Supports section highlighting via scroll_to/highlight actions
 * - Content fetched from /content/ directory
 */
export default function ReadingPane({ resource, highlightedSection }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);

  // Load content when resource changes
  useEffect(() => {
    if (!resource?.path) {
      setContent('');
      return;
    }

    async function loadContent() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/content${resource.path}`);
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
        setContent('');
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [resource?.path]);

  // Handle section highlighting/scrolling
  useEffect(() => {
    if (!highlightedSection || !contentRef.current) return;

    const element = contentRef.current.querySelector(`#${highlightedSection}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.classList.add('highlighted');
      
      // Remove highlight after animation
      const timer = setTimeout(() => {
        element.classList.remove('highlighted');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [highlightedSection]);

  if (!resource) {
    return (
      <main className="reading-pane">
        <div className="reading-pane-empty">
          <p>Select a document from the sidebar to begin reading.</p>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="reading-pane">
        <div className="reading-pane-loading">
          <span>Loading content...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="reading-pane">
        <div className="reading-pane-error">
          <h2>Failed to load content</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  const html = renderMarkdown(content);

  return (
    <main className="reading-pane">
      <article 
        ref={contentRef}
        className="reading-pane-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
