# Evidence — Website Lane (Run 71c6fdc7)

## Screenshots

### 01-home-desktop.png
Home page on desktop viewport (1280x800). Shows:
- Navigation with exactly 7 items
- Hero section with call-to-action buttons
- "Start Here" section with Tier 0 content cards
- "Go Deeper" section with Tier 1 content cards

![Home Desktop](screenshots/01-home-desktop.png)

### 02-odd-page.png
ODD Manifesto page showing markdown content rendering:
- Content fetched from `/content/odd/README.md`
- Proper heading hierarchy
- Readable typography
- Metadata badges showing tier and stability

![ODD Page](screenshots/02-odd-page.png)

### 03-home-mobile.png
Home page on mobile viewport (375x812). Shows:
- Responsive layout without horizontal scrolling
- Mobile navigation (hamburger menu visible)
- Content properly stacked for mobile reading

![Home Mobile](screenshots/03-home-mobile.png)

## PRD Success Criteria Verification

| Criteria | Status | Evidence |
|----------|--------|----------|
| First load shows ≤7 nav items | ✅ PASS | Screenshot 01: Navigation shows exactly 7 items |
| Mobile usable without horizontal scrolling | ✅ PASS | Screenshot 03: Mobile layout fits screen |
| Canon discoverable without file paths | ✅ PASS | Screenshots show human-readable titles, not paths |
| No agent instructions in UI | ✅ PASS | Screenshots show no CLI/process language |
| Deep links work | ✅ PASS | Screenshot 02: Hash URL `#/odd/README.md` loads content |
| Progressive disclosure tiers | ✅ PASS | Screenshots 01 shows Tier 0/1 content organization |

## Build Output

- Build command: `npm run build -- --lane website`
- Output directory: `products/website/dist/`
- Evidence available at: `/_evidence/`

## Deployment URLs

*(To be filled after Cloudflare deployment)*

- Preview URL: TBD
- Evidence URL: TBD/_evidence/
