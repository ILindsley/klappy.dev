# Attempt — Website Lane (Run 71c6fdc7)

## Summary

Built a React-based public website for klappy.dev that implements ODD (Outcome-Driven Development) principles. The site loads content from the manifest.json, renders markdown content, and provides progressive disclosure navigation with 7 or fewer nav items on first load.

## Approach

### Stack
- **Framework:** React 18 with Vite
- **Styling:** CSS custom properties implementing visual interface contracts
- **Routing:** Hash-based routing for deep links
- **Markdown:** marked library for content rendering

### PRD Requirements Addressed

1. **Load manifest.json** — App fetches `/content/manifest.json` on load and uses resources for navigation and content
2. **≤7 nav items** — Navigation shows exactly 7 items (Home, What is ODD?, Why This Exists, Projects, Constraints, About Me, FAQ)
3. **Mobile usable** — Responsive design with hamburger menu for mobile, no horizontal scrolling
4. **Markdown rendering** — Full markdown support including tables, code blocks, blockquotes
5. **Deep links** — Hash routing (`#/path/to/content.md`) supports shareable URLs
6. **Progressive disclosure** — Tier 0/1 content surfaced first, deeper content accessible via navigation

### Visual Interface Contracts Implemented

- **color-system@1.0.0** — Full token implementation including dark mode support
- **typography@1.0.0** — Modular scale, font families, weights, line heights
- **spacing@1.0.0** — Base-8 spacing scale with semantic tokens

## Files Created

| File | Purpose |
|------|---------|
| `products/website/index.html` | Vite HTML entry point |
| `products/website/vite.config.js` | Vite configuration for lane build |
| `products/website/src/main.jsx` | React entry point |
| `products/website/src/index.css` | Visual interface tokens + base styles |
| `products/website/src/App.jsx` | Main app with routing and layout |
| `products/website/src/components/Navigation.jsx` | ≤7 item nav with mobile support |
| `products/website/src/components/Home.jsx` | Home page with tier-based content cards |
| `products/website/src/components/ContentPage.jsx` | Markdown renderer with metadata badges |

## Tradeoffs

1. **Hash routing vs History API** — Chose hash routing for simplicity and guaranteed deep link support without server configuration
2. **CSS-in-JS vs CSS files** — Used inline styles in components for colocation, but global tokens in index.css
3. **No router library** — Implemented minimal routing to reduce bundle size and complexity

## What Could Be Better

- Add search functionality
- Implement table of contents for long documents
- Add syntax highlighting for code blocks
- Consider adding smooth scroll to anchor links

## Evidence

See `EVIDENCE.md` for screenshots and proof.
