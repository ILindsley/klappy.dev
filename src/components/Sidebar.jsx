/**
 * Sidebar component - resource navigation
 * Split by audience: Public vs Canon
 */

export default function Sidebar({ publicResources, canonResources, currentUri, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">klappy.dev</div>
      
      {publicResources.length > 0 && (
        <section className="sidebar-section">
          <h3 className="sidebar-section-title">Public</h3>
          {publicResources.map(resource => (
            <button
              key={resource.uri}
              className={`sidebar-item ${currentUri === resource.uri ? 'active' : ''}`}
              onClick={() => onSelect(resource.uri)}
            >
              {resource.title}
            </button>
          ))}
        </section>
      )}
      
      {canonResources.length > 0 && (
        <section className="sidebar-section">
          <h3 className="sidebar-section-title">Canon</h3>
          {canonResources.map(resource => (
            <button
              key={resource.uri}
              className={`sidebar-item ${currentUri === resource.uri ? 'active' : ''}`}
              onClick={() => onSelect(resource.uri)}
            >
              {resource.title}
            </button>
          ))}
        </section>
      )}
    </aside>
  );
}
