import { useMemo } from 'react';

/**
 * Sidebar component for manifest-driven navigation
 * 
 * Per PRD v0.1: 
 * - Lists navigable resources from manifest
 * - Groups by audience/category
 * - Highlights current selection
 */
export default function Sidebar({ resources, currentResource, onNavigate }) {
  // Group resources by audience for cleaner organization
  const groupedResources = useMemo(() => {
    const groups = {};
    
    for (const resource of resources) {
      const audience = resource.audience || 'other';
      if (!groups[audience]) {
        groups[audience] = [];
      }
      groups[audience].push(resource);
    }
    
    return groups;
  }, [resources]);

  // Human-readable audience labels
  const audienceLabels = {
    public: 'Public',
    canon: 'Canon',
    internal: 'Internal',
    other: 'Other'
  };

  // Preferred display order
  const audienceOrder = ['public', 'canon', 'internal', 'other'];

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1 className="sidebar-title">klappy.dev</h1>
      </header>
      
      <nav className="sidebar-nav">
        {audienceOrder.map(audience => {
          const items = groupedResources[audience];
          if (!items || items.length === 0) return null;
          
          return (
            <section key={audience} className="sidebar-section">
              <h2 className="sidebar-section-title">
                {audienceLabels[audience] || audience}
              </h2>
              <ul className="sidebar-list">
                {items.map(resource => (
                  <li key={resource.uri}>
                    <button
                      className={`sidebar-item ${currentResource?.uri === resource.uri ? 'active' : ''}`}
                      onClick={() => onNavigate(resource)}
                      title={resource.title}
                    >
                      {resource.title}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
