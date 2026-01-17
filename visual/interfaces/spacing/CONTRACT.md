---
contract: spacing
version: 1.0.0
status: active
---

# Spacing Contract (spacing@1.0.0)

This contract defines the canonical spacing tokens and application rules used across all visual surfaces.

---

## Compatibility Promise

Any consumer that supports `spacing@1.x` must be able to apply any `spacing@1.x` token set without modification.

A producer that claims `spacing@1.x` must emit tokens that conform to this contract.

---

## Guarantees

Consumers may rely on:

- Token names remaining stable across 1.x
- Spacing scale ratios remaining consistent within a major version
- Semantic application rules not changing within a major version

---

## Required Tokens (Base-8 Scale)

The spacing system uses a base-8 scale for consistency:

- `--space-0` — 0px (no space)
- `--space-1` — 4px (hairline)
- `--space-2` — 8px (tight)
- `--space-3` — 12px (compact)
- `--space-4` — 16px (base)
- `--space-5` — 24px (comfortable)
- `--space-6` — 32px (relaxed)
- `--space-8` — 48px (loose)
- `--space-10` — 64px (spacious)
- `--space-12` — 96px (generous)
- `--space-16` — 128px (expansive)

---

## Semantic Tokens

For common use cases:

- `--space-inline-xs` — inline spacing (icons, badges)
- `--space-inline-sm` — small inline gaps
- `--space-inline-md` — medium inline gaps
- `--space-stack-xs` — tight vertical stacking
- `--space-stack-sm` — small vertical stacking
- `--space-stack-md` — medium vertical stacking
- `--space-stack-lg` — large vertical stacking
- `--space-inset-sm` — small padding (buttons, chips)
- `--space-inset-md` — medium padding (cards, panels)
- `--space-inset-lg` — large padding (sections)

---

## Application Rules

| Context | Recommended Token |
|---------|-------------------|
| Icon-to-text gap | space-1 or space-2 |
| Button padding | space-2 (vertical), space-4 (horizontal) |
| Card padding | space-4 or space-5 |
| Section spacing | space-8 or space-10 |
| Page margins | space-4 (mobile), space-6+ (desktop) |
| List item gap | space-2 or space-3 |

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- Removing or renaming required tokens
- Changing the scale ratio (e.g., base-8 to base-4)
- Changing semantic token mappings

---

## Backwards-Compatible Changes (MINOR)

Allowed without a MAJOR bump:

- Adding new scale tokens
- Adding new semantic tokens
- Adding responsive variants

---

## Verification Rules (for tooling)

A verifier for `spacing@1.0.0` MUST check:

- All required tokens exist
- Tokens resolve to valid CSS length values
- Scale maintains consistent ratios

---

## Change Log

- **1.0.0** — Initial spacing contract with base-8 scale and semantic tokens.
