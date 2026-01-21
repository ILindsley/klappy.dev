# Visual Interfaces

Visual interfaces are the repository's **visual compatibility contracts**.

They define what consumers may rely on for visual consistency, without prescribing implementation details.

Like API interfaces, visual interfaces use **semantic versioning** (semver).

---

## What is a Visual Interface Contract?

A visual interface contract is a stable promise about visual behavior that products may depend on.

Examples:

- **Color System** — semantic color tokens and roles
- **Typography** — font scales, weights, and usage rules
- **Spacing** — spacing scale and application rules
- **Motion** — animation timing and easing contracts
- **Iconography** — icon style and usage rules

---

## Semver Rules (Visual Policy)

Visual interfaces follow the same semver rules as API interfaces:

- **MAJOR (X.0.0):** breaking change (removed tokens, changed semantic meaning)
- **MINOR (0.Y.0):** backwards-compatible additions (new tokens, aliases)
- **PATCH (0.0.Z):** clarifications, documentation fixes

---

## Relationship to Products

Products declare visual interface compatibility in their PRDs:

```markdown
## Visual Interfaces

This product MUST remain compatible with:
- color-system >=1.0.0 <2.0.0
- typography >=1.0.0 <2.0.0
```

Products do NOT define colors, fonts, or spacing directly.
They consume visual interfaces.

---

## Visual Interface Contracts

- [Color System Contract](./color-system/CONTRACT.md)
- [Typography Contract](./typography/CONTRACT.md)
- [Spacing Contract](./spacing/CONTRACT.md)

---

## Related Documentation

- [Visual Evolution](/odd/appendices/visual-evolution.md)
- [Interface Contracts](/interfaces/index.md)
