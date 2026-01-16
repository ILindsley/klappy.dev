/**
 * Reading pane component - displays markdown content
 */

export default function ReadingPane({ html, title }) {
  if (!html) {
    return (
      <main className="reading-pane">
        <div className="reading-pane-empty">
          Select a document to begin reading
        </div>
      </main>
    );
  }
  
  return (
    <main className="reading-pane">
      <article 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
