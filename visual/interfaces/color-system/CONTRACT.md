---
contract: color-system
version: 1.0.0
status: active
---

# Color System Contract (color-system@1.0.0)

This contract defines the canonical color tokens and semantic roles used across all visual surfaces.

---

## Compatibility Promise

Any consumer that supports `color-system@1.x` must be able to apply any `color-system@1.x` token set without modification.

A producer that claims `color-system@1.x` must emit tokens that conform to this contract.

---

## Guarantees

Consumers may rely on:

- Token names remaining stable across 1.x
- Semantic meaning not changing within a major version
- Contrast ratios meeting WCAG AA accessibility requirements

---

## Required Tokens

The following semantic tokens MUST exist:

### Background Tokens

- `--color-bg-primary` — primary background surface
- `--color-bg-secondary` — secondary/elevated background surface
- `--color-bg-tertiary` — tertiary/recessed background surface

### Text Tokens

- `--color-text-primary` — primary text color
- `--color-text-secondary` — secondary/muted text color
- `--color-text-inverse` — text on accent backgrounds

### Accent Tokens

- `--color-accent` — primary accent color
- `--color-accent-hover` — accent hover state
- `--color-accent-active` — accent active/pressed state

### Semantic Tokens

- `--color-success` — success/positive state
- `--color-warning` — warning/caution state
- `--color-error` — error/destructive state

### Border Tokens

- `--color-border-primary` — primary border color
- `--color-border-secondary` — subtle/secondary border color

---

## Optional Tokens (MINOR additions)

The following tokens MAY be added in minor versions:

- Additional semantic states
- Surface elevation variants
- Mode-specific overrides (dark/light)

---

## Accessibility Requirements

All text/background combinations MUST meet:

- WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Sufficient distinction between semantic states

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- Removing or renaming required tokens
- Changing semantic meaning (e.g., accent → warning)
- Reducing contrast below accessibility thresholds

---

## Backwards-Compatible Changes (MINOR)

Allowed without a MAJOR bump:

- Adding new tokens
- Adding token aliases
- Adding mode variants (dark mode tokens)

---

## Verification Rules (for tooling)

A verifier for `color-system@1.0.0` MUST check:

- All required tokens exist
- Tokens resolve to valid CSS color values
- Primary text on primary background meets WCAG AA

---

## Change Log

- **1.0.0** — Initial color system contract with semantic tokens and accessibility requirements.
