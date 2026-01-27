# Agent Skill Overlays

Role-specific behavioral contracts that compose with context packs.

## Available Overlays

| Overlay | Role | Stability | Description |
|---------|------|-----------|-------------|
| `discovery-role-overlay.md` | discovery | experimental | Maturity-aware discovery agent |

## How Overlays Work

Overlays define **behavioral contracts** that modify agent behavior:
- Non-negotiables (what the agent must/must not do)
- Operating loops (how the agent processes information)
- Refusal conditions (when to pause or refuse)

Overlays are **composable** with context packs via recipes.

## Usage

1. Reference overlay in a recipe
2. Recipe composes: base + overlays + context_packs + protocol_modules
3. Compiled pack includes overlay instructions

## See Also

- `/products/agent-skill/recipes/` — Composition recipes
- `/public/_compiled/packs/` — Generated context packs
