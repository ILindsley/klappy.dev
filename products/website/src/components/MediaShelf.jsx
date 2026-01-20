import React from "react";

/**
 * MediaShelf (Learning Layer)
 * - opt-in only (progressive disclosure)
 * - no autoplay
 * - non-blocking (page remains usable without opening)
 */

function labelFor(key) {
  const map = {
    hero_image: "Hero Diagram",
    orientation_map: "View: Orientation Map",
    explainer_video: "Watch: ODD Explainer",
    practice_video: "Watch: ODD in Practice",
    misconception_image: "View: ODD Is Not a Framework",
    deep_dive_audio: "Listen: Why Evidence Beats Confidence",
  };
  return map[key] || key.replace(/_/g, " ");
}

function inferType(path) {
  const p = String(path || "").toLowerCase();
  if (p.endsWith(".mp4") || p.endsWith(".webm") || p.endsWith(".mov")) return "video";
  if (p.endsWith(".mp3") || p.endsWith(".m4a") || p.endsWith(".wav") || p.endsWith(".ogg")) return "audio";
  if (p.endsWith(".pdf")) return "pdf";
  if (p.endsWith(".png") || p.endsWith(".jpg") || p.endsWith(".jpeg") || p.endsWith(".webp") || p.endsWith(".gif")) return "image";
  return "link";
}

export default function MediaShelf({ assets, title = "Learning Layer", subtitle }) {
  if (!assets || typeof assets !== "object") return null;

  const entries = Object.entries(assets)
    .filter(([_, v]) => typeof v === "string" && v.trim().length > 0);

  if (!entries.length) return null;

  return (
    <section className="media-shelf" aria-label="Learning Media">
      <h2 className="media-title">{title}</h2>
      <p className="media-subtitle">
        {subtitle || "Optional media that may reduce reading time. The page remains complete without it."}
      </p>

      <div className="media-items">
        {entries.map(([key, path]) => {
          const type = inferType(path);
          const label = labelFor(key);

          if (type === "video") {
            return (
              <details key={key} className="media-item">
                <summary>{label}</summary>
                <div className="media-body">
                  <video controls preload="metadata" className="media-video">
                    <source src={path} />
                    Your browser does not support the video element.
                  </video>
                </div>
              </details>
            );
          }

          if (type === "audio") {
            return (
              <details key={key} className="media-item">
                <summary>{label}</summary>
                <div className="media-body">
                  <audio controls preload="metadata" className="media-audio">
                    <source src={path} />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </details>
            );
          }

          if (type === "image") {
            return (
              <details key={key} className="media-item">
                <summary>{label}</summary>
                <div className="media-body">
                  <img className="media-image" src={path} alt={label} />
                </div>
              </details>
            );
          }

          if (type === "pdf") {
            return (
              <details key={key} className="media-item">
                <summary>{label}</summary>
                <div className="media-body">
                  <a className="media-link" href={path} target="_blank" rel="noreferrer">
                    Open PDF
                  </a>
                </div>
              </details>
            );
          }

          return (
            <details key={key} className="media-item">
              <summary>{label}</summary>
              <div className="media-body">
                <a className="media-link" href={path} target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
            </details>
          );
        })}
      </div>

      <style>{`
        .media-shelf {
          margin: var(--space-8) 0 var(--space-6);
          padding: var(--space-6);
          border: 1px solid var(--color-border-primary);
          border-radius: 12px;
          background: var(--color-bg-secondary);
        }
        .media-title { margin: 0 0 var(--space-2); font-size: var(--font-size-xl); }
        .media-subtitle { margin: 0 0 var(--space-5); color: var(--color-text-secondary); max-width: 700px; }
        .media-items { display: grid; gap: var(--space-3); }
        .media-item { border: 1px solid var(--color-border-primary); border-radius: 10px; background: var(--color-bg-primary); overflow: hidden; }
        .media-item summary { cursor: pointer; padding: var(--space-4); font-weight: var(--font-weight-medium); list-style: none; }
        .media-item summary::-webkit-details-marker { display: none; }
        .media-body { padding: var(--space-4); border-top: 1px solid var(--color-border-primary); }
        .media-video, .media-audio { width: 100%; }
        .media-image { width: 100%; height: auto; border-radius: 10px; }
        .media-link { color: var(--color-accent); text-decoration: none; }
        .media-link:hover { text-decoration: underline; }
      `}</style>
    </section>
  );
}
