---
uri: klappy://visual
title: "Visual Design System"
audience: docs
exposure: nav
tier: 3
voice: neutral
stability: evolving
tags: ["visual", "design", "interfaces", "index"]
---

# Visual Design System

> Versioned visual contracts that define appearance without prescribing implementation.

## Description

The visual folder contains visual interface contracts that products consume for consistent appearance. Like API interfaces, visual interfaces use semantic versioning (semver). Products declare compatibility with visual interface versions rather than defining colors, fonts, or spacing directly.

## Outline

- Contents
- How Visual Interfaces Work
- Relationship to Products

---

## Contents

| Path | Title | Summary |
|------|-------|---------|
| `interfaces/index.md` | Visual Interfaces | Overview of visual compatibility contracts |
| `interfaces/color-system/CONTRACT.md` | Color System | Semantic color tokens and accessibility rules |
| `interfaces/typography/CONTRACT.md` | Typography | Font scales, weights, and usage rules |
| `interfaces/spacing/CONTRACT.md` | Spacing | Spacing scale and application rules |

---

## How Visual Interfaces Work

Visual interfaces follow semver:

- **MAJOR (X.0.0):** Breaking change (removed tokens, changed meaning)
- **MINOR (0.Y.0):** Backwards-compatible additions (new tokens)
- **PATCH (0.0.Z):** Documentation fixes

---

## Relationship to Products

Products declare visual interface compatibility in their PRDs:

```markdown
## Visual Interfaces

This product MUST remain compatible with:
- color-system >=1.0.0 <2.0.0
- typography >=1.0.0 <2.0.0
```

---

## See Also

- [Visual Evolution](/odd/appendices/visual-evolution.md) — Philosophy of visual system evolution
- [Interface Contracts](/interfaces/index.md) — General interface contract pattern
