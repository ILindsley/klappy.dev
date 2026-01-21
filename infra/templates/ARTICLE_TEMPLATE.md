---
uri: klappy://templates/article
title: "Article Template"
audience: docs
exposure: hidden
tier: 2
voice: neutral
stability: stable
tags: ["template", "article"]
---

# Article Template

> Standard template for documentation articles with progressive disclosure.

## Description

This template defines the standard structure for documentation articles. All documents should follow this progressive disclosure pattern to enable different compilation depths for context packs.

## Outline

- Frontmatter Fields
- Document Structure
- Example

---

## Frontmatter Fields

```yaml
---
uri: klappy://<tier>/<path>/<name>    # Stable identifier
title: "Human-Readable Title"          # Display name
audience: docs | canon | public        # Who reads this
exposure: nav | hidden                 # Appears in navigation?
tier: 0 | 1 | 2                        # Progressive disclosure tier
voice: neutral | authoritative         # Tone
stability: stable | evolving | deprecated
tags: ["tag1", "tag2"]
---
```

### Field Reference

| Field | Required | Values | Purpose |
|-------|----------|--------|---------|
| `uri` | Yes | `klappy://path/name` | Stable linking identifier |
| `title` | Yes | String | Human-readable title |
| `audience` | Yes | `public`, `docs`, `canon` | Target reader |
| `exposure` | Yes | `nav`, `hidden` | Show in navigation? |
| `tier` | Yes | `0`, `1`, `2` | Disclosure tier |
| `voice` | No | `neutral`, `authoritative` | Tone (default: neutral) |
| `stability` | Yes | `stable`, `evolving`, `deprecated` | Change frequency |
| `tags` | No | Array | Categorization |

### Audience Values

| Value | Meaning | Example Folder |
|-------|---------|----------------|
| `public` | User-facing content | `/about/` |
| `docs` | Implementation reference | `/docs/` |
| `canon` | Shared constraints | `/canon/`, `/odd/` |

### Tier Values

| Tier | Meaning | Visibility |
|------|---------|------------|
| `0` | Immediate orientation | Always visible |
| `1` | Core content | Visible by default |
| `2` | Detailed/edge cases | Requires expansion |

---

## Document Structure

```markdown
---
uri: klappy://<path>/<name>
title: "Title"
audience: docs
exposure: nav
tier: 1
voice: neutral
stability: evolving
tags: ["tag1"]
---

# Title

> One-line subtitle explaining what this document is about.

## Description

1-2 paragraph compressed overview. Should be self-contained enough that
an LLM can understand the gist without reading further.

## Outline

- Section 1
- Section 2
- Section 3

---

## Section 1

[Content...]

---

## Section 2

[Content...]

---

## See Also

- [Related Doc](/path/to/doc.md) — Brief description
```

---

## Disclosure Levels

| Level | Includes | Use Case | ~Tokens |
|-------|----------|----------|---------|
| L0 | Frontmatter + H1 | File listing | ~50 |
| L1 | + blockquote subtitle | Quick orientation | ~100 |
| L2 | + Description | LLM context | ~200-500 |
| L3 | + Outline | Navigation aid | ~300-700 |
| L4 | Full document | Complete context | Full |

---

## Example

```markdown
---
uri: klappy://docs/appendices/example
title: "Example Appendix"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["docs", "example"]
---

# Example Appendix

> Demonstrates the standard article structure.

## Description

This example shows how to structure a documentation article using
progressive disclosure. The Description section provides a compressed
overview that can stand alone in context-constrained situations.

## Outline

- Background
- Implementation
- Consequences

---

## Background

[Why this exists...]

---

## Implementation

[How it works...]

---

## Consequences

[What results from this...]

---

## See Also

- [Article Template](/infra/templates/ARTICLE_TEMPLATE.md)
```
