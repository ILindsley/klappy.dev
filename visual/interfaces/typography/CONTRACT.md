---
contract: typography
version: 1.0.0
status: active
---

# Typography Contract (typography@1.0.0)

This contract defines the canonical typography tokens and usage rules used across all visual surfaces.

---

## Compatibility Promise

Any consumer that supports `typography@1.x` must be able to apply any `typography@1.x` token set without modification.

A producer that claims `typography@1.x` must emit tokens that conform to this contract.

---

## Guarantees

Consumers may rely on:

- Token names remaining stable across 1.x
- Semantic roles not changing within a major version
- Readability meeting accessibility requirements

---

## Required Tokens

### Font Family Tokens

- `--font-family-sans` — primary sans-serif stack
- `--font-family-mono` — monospace stack for code

### Font Size Tokens (modular scale)

- `--font-size-xs` — extra small (captions, labels)
- `--font-size-sm` — small (secondary text)
- `--font-size-base` — base size (body text)
- `--font-size-lg` — large (lead paragraphs)
- `--font-size-xl` — extra large (subheadings)
- `--font-size-2xl` — heading level 3
- `--font-size-3xl` — heading level 2
- `--font-size-4xl` — heading level 1

### Font Weight Tokens

- `--font-weight-normal` — normal weight (400)
- `--font-weight-medium` — medium weight (500)
- `--font-weight-semibold` — semi-bold weight (600)
- `--font-weight-bold` — bold weight (700)

### Line Height Tokens

- `--line-height-tight` — tight leading (headings)
- `--line-height-normal` — normal leading (body)
- `--line-height-relaxed` — relaxed leading (long-form)

### Letter Spacing Tokens

- `--letter-spacing-tight` — tighter tracking (headings)
- `--letter-spacing-normal` — normal tracking
- `--letter-spacing-wide` — wider tracking (small caps, labels)

---

## Semantic Roles

Tokens should be applied according to semantic purpose:

| Role | Font Size | Font Weight | Line Height |
|------|-----------|-------------|-------------|
| Body | base | normal | normal |
| Lead | lg | normal | relaxed |
| Caption | xs | normal | normal |
| Label | sm | medium | tight |
| H1 | 4xl | bold | tight |
| H2 | 3xl | semibold | tight |
| H3 | 2xl | semibold | tight |
| Code | base | normal (mono) | normal |

---

## Accessibility Requirements

- Base font size MUST be at least 16px equivalent
- Line height for body text MUST be at least 1.5
- Sufficient contrast between font weights for hierarchy

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- Removing or renaming required tokens
- Changing semantic role mappings
- Reducing base font size below accessibility threshold

---

## Backwards-Compatible Changes (MINOR)

Allowed without a MAJOR bump:

- Adding new size tokens
- Adding new weight tokens
- Adding font family variants

---

## Verification Rules (for tooling)

A verifier for `typography@1.0.0` MUST check:

- All required tokens exist
- Font size tokens resolve to valid CSS values
- Base font size is >= 16px equivalent

---

## Change Log

- **1.0.0** — Initial typography contract with modular scale and semantic roles.
