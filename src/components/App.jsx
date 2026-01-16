import { useState, useEffect } from 'react';

/**
 * Minimal App Shell
 * 
 * This shell proves the build works and content loads.
 * Replace everything here with your attempt's implementation.
 * 
 * PRD: /docs/PRD.md
 * Manifest: /public/content/manifest.json
 */
export default function App() {
  const [manifest, setManifest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/content/manifest.json')
      .then(r => r.json())
      .then(setManifest)
      .catch(e => setError(e.message));
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', color: 'red' }}>
        <h1>Manifest Load Failed</h1>
        <pre>{error}</pre>
      </div>
    );
  }

  if (!manifest) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Loading manifest...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Fresh Attempt Shell</h1>
      <p>Manifest loaded successfully. {manifest.resources?.length || 0} resources available.</p>
      <hr style={{ margin: '1rem 0' }} />
      <p><strong>Next:</strong> Read the PRD and build your implementation.</p>
      <ul>
        <li>PRD: <code>/docs/PRD.md</code></li>
        <li>Manifest: <code>/public/content/manifest.json</code></li>
        <li>This file: <code>/src/components/App.jsx</code></li>
      </ul>
    </div>
  );
}
