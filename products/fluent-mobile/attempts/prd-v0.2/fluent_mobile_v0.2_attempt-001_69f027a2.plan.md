---
name: Fluent Mobile v0.2 Attempt-001
overview: Start attempt-001 against PRD v0.2 for Fluent Mobile PoC. Build a minimal PWA with waveform visualization and multi-screen navigation, deploy to Cloudflare Pages, and verify on real mobile device.
todos:
  - id: create-folder
    content: Create attempt-001 folder structure with ATTEMPT.md, META.json, HYPOTHESES.md
    status: completed
  - id: build-pwa
    content: "Build minimal PWA: 2 screens (Home + Drafting), waveform visualization, vanilla JS"
    status: completed
  - id: cloudflare-deploy
    content: Configure and deploy to Cloudflare Pages, get preview URL (requires human auth)
    status: pending
  - id: verify-evidence
    content: Run Playwright tests, capture screenshots showing waveform and navigation
    status: completed
  - id: mobile-test
    content: Test preview URL on real mobile device, document results
    status: pending
  - id: close-attempt
    content: Update ATTEMPT.md with status, learnings, recommendation, self-audit
    status: pending
isProject: false
---

# Fluent Mobile v0.2 — Attempt-001 Plan

## Context

PRD v0.2 incorporates learnings from v0.1 attempt-001:

- Cloudflare Pages deployment required (not localhost)
- Waveform visualization required (agent-verifiable audio)
- Multi-screen navigation required (test workflow hypothesis)

This is a **Proof of Concept**. Goal is learning, not delivery.

---

## Hypothesis Structure

### Umbrella Hypothesis (H1: Mobile Viability)

> Can translators realistically draft and review OBT audio using a mobile companion app?

This is the big question. Every test we run contributes to answering this. H1 is validated when H2, H3, and H4 collectively show viability.

### Sub-Hypotheses Under Test

| # | Hypothesis | Question | Testing Approach |

|---|------------|----------|------------------|

| 2 | Performance | Is it fast enough on their devices? | Deploy to Cloudflare, test on low-end device if available |

| 3 | Workflow Usability | Does the flow feel natural? | Multi-screen: Home -> Drafting flow |

| 4 | Task Clarity | Can they figure it out? | Can user navigate without training? |

### Deferred Hypotheses

| # | Hypothesis | Why Deferred |

|---|------------|--------------|

| 5 | Auth & Trust | Requires backend/QR integration |

| 6 | Cultural Fit | Requires multi-region field access |

---

## Sandbox

All work will be in: `products/fluent-mobile/attempts/prd-v0.2/attempt-001/`

**Forbidden zones:** PRD.md, README.md, docs/, public/, other lanes.

---

## Step 1: Create Attempt Folder Structure

Create folder: `products/fluent-mobile/attempts/prd-v0.2/attempt-001/`

```
attempt-001/
├── ATTEMPT.md          # Closure record
├── META.json           # Machine-readable metadata
├── HYPOTHESES.md       # Which hypotheses tested
├── package.json        # Dependencies (minimal)
├── wrangler.toml       # Cloudflare Pages config
├── src/
│   ├── index.html      # Entry point
│   ├── app.js          # Core logic
│   ├── styles.css      # Mobile-optimized styles
│   ├── waveform.js     # Canvas-based audio visualization
│   ├── manifest.json   # PWA manifest
│   └── sw.js           # Service worker
└── evidence/
    ├── screenshots/    # Visual proof
    └── deployment.md   # Cloudflare URL evidence
```

---

## Step 2: Build Minimal PWA

### 2.1 Two-Screen Navigation

- **Screen 1: Home/Assignment**
  - Shows current task context (hardcoded for PoC)
  - "Start Drafting" button to navigate to Screen 2
  - Clear visual hierarchy

- **Screen 2: Drafting**
  - Listen to source (with waveform)
  - Record draft (with waveform)
  - Play back recorded draft (with waveform)
  - Back button to return to Home

### 2.2 Waveform Visualization

Canvas-based waveform that shows:

- Audio levels during playback
- Recording activity during capture
- Visual proof for agent verification

### 2.3 Technical Stack

- Vanilla JS (no frameworks — performance on low-end devices)
- Web Audio API for audio + `AnalyserNode` for waveform
- Canvas for visualization
- Service Worker for offline tolerance

---

## Step 3: Deploy to Cloudflare Pages

### 3.1 Setup

- Create `wrangler.toml` for Cloudflare Pages configuration
- Configure `package.json` with build script
- Static site deployment (no server-side code)

### 3.2 Deployment

- Push to branch
- Cloudflare Pages creates preview URL
- Test preview URL on real mobile device

---

## Step 4: Verify and Gather Evidence

### 4.1 Agent-Verifiable

- [ ] Playwright tests for UI rendering
- [ ] Screenshots showing waveform activity
- [ ] Console inspection for errors
- [ ] Service Worker registration

### 4.2 Human-Verifiable

- [ ] Preview URL works on mobile browser
- [ ] Audio playback/recording works with real gesture
- [ ] Navigation is intuitive

---

## Step 5: Close Attempt

Update ATTEMPT.md with:

- Status (SUCCESS/FAILED/PARTIAL)
- Hypothesis results
- Key learnings
- Recommendation (CONTINUE/PIVOT/PAUSE/STOP)
- Self-audit

---

## Definition of Done (v0.2)

- [ ] Deployed to Cloudflare Pages
- [ ] Preview URL tested on real mobile device
- [ ] Waveform visualization captured in screenshots
- [ ] Multi-screen navigation works
- [ ] Agent verification tests pass
- [ ] Learnings documented

---

## Key Files to Create

| File | Purpose |

|------|---------|

| `attempt-001/ATTEMPT.md` | Attempt status and closure |

| `attempt-001/META.json` | Machine-readable metadata |

| `attempt-001/HYPOTHESES.md` | Hypothesis tracking |

| `attempt-001/src/index.html` | PWA entry point |

| `attempt-001/src/app.js` | Core audio + navigation logic |

| `attempt-001/src/waveform.js` | Canvas waveform visualization |

| `attempt-001/src/styles.css` | Mobile-optimized styles |

| `attempt-001/wrangler.toml` | Cloudflare Pages config |

---

## Tradeoffs

| Decision | Sacrificed | Reason |

|----------|------------|--------|

| Vanilla JS | Developer ergonomics | Performance on low-end devices |

| Hardcoded assignment | Real identity flow | H5 (Auth) deferred |

| Demo audio + waveform | Real source audio | Agent-verifiable over realistic |

| Minimal screens | Full workflow | Learning over features |

---

## Risks

| Risk | Mitigation |

|------|------------|

| Cloudflare Pages setup issues | Use simple static site config |

| Waveform complexity | Keep minimal (just bars, no fancy graphics) |

| Browser autoplay still blocks | Waveform is visual proxy; user gesture still needed |

| No low-end Android available | Document as deferred; test on available devices |
