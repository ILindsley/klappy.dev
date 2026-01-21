---
uri: klappy://infra/templates
title: "Templates"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: stable
tags: ["infra", "templates", "index"]
---

# Templates

> Standard templates for creating new documentation files.

## Description

The templates folder contains starter templates for different document types. Each template includes the required YAML frontmatter and progressive disclosure structure. Templates are intentionally excluded from visitor/author context packs but may be included in specialized packs (e.g., prd-guide includes PRD_TEMPLATE).

## Outline

- Contents
- Which Template to Use
- Related Templates (Other Locations)

---

## Contents

| Template | Purpose | When to Use |
|----------|---------|-------------|
| `ARTICLE_TEMPLATE.md` | General documentation | Any new doc file |
| `DECISION_TEMPLATE.md` | ADR-style decisions | `/docs/decisions/` or `/odd/decisions/` |
| `README_INDEX_TEMPLATE.md` | Folder index | Any folder with 3+ files |

---

## Which Template to Use

| Creating... | Template | Location |
|-------------|----------|----------|
| New documentation article | `ARTICLE_TEMPLATE.md` | This folder |
| New decision record | `DECISION_TEMPLATE.md` | This folder |
| New folder README | `README_INDEX_TEMPLATE.md` | This folder |
| New PRD | `PRD_TEMPLATE.md` | `/docs/PRD/` |
| New completion report | `completion-report-template.md` | `/canon/` |

---

## Related Templates (Other Locations)

| Template | Location | Purpose |
|----------|----------|---------|
| `PRD_TEMPLATE.md` | `/docs/PRD/` | Product Requirements Documents |
| `completion-report-template.md` | `/canon/` | Completion reports |

These templates live in their "home" folders for discoverability but follow the same progressive disclosure pattern.

---

## See Also

- [PRD Template](/docs/PRD/PRD_TEMPLATE.md) — For lane PRDs
- [Completion Report Template](/canon/completion-report-template.md) — For completion claims
- [Doc Inclusion Audit](/infra/prompts/doc-inclusion-audit/PROMPT.md) — Progressive disclosure criteria
