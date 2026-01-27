# Agent Skill Recipes

Composition manifests that combine overlays, context packs, and protocol modules.

## Available Recipes

| Recipe | Purpose | Context Pack | Stability |
|--------|---------|--------------|-----------|
| `prd-discovery.s.recipe.json` | PRD discovery sessions | s-core (~2k tokens) | experimental |

## Recipe Structure

```json
{
  "name": "recipe-name",
  "base": "agent-skills-core",
  "overlays": ["role-overlay"],
  "context_packs": ["s-core"],
  "protocol_modules": ["prd-core"],
  "budgets": { "max_tokens": 6000 }
}
```

## Composition Order

1. **Base** — Foundation behavior
2. **Overlays** — Role-specific modifications
3. **Context Packs** — Domain knowledge (S/M/L slices)
4. **Protocol Modules** — Task-specific procedures

## Creating Variants

Swap `context_packs` to change depth:
- `s-core` — Execution focus (~2k tokens)
- `s-meta` — Framework awareness (~2k tokens)
- `all.s` — All docs S-slice (~17k tokens)

## See Also

- `/products/agent-skill/overlays/` — Role overlays
- `/public/_compiled/packs/` — Generated context packs
