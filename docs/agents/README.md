# Agent Behavior & Contracts

How agents think and behave in this system.

## Structure

```
docs/agents/
├── discovery/          # Discovery-phase behavior
│   ├── overlays/       # Role definitions (WHO the agent is)
│   ├── protocols/      # Task procedures (HOW to do it)
│   └── recipes/        # Composition manifests (WHAT to load)
└── (future: skills/, common/)
```

## Key Concepts

| Concept | Purpose | Example |
|---------|---------|---------|
| **Overlay** | Defines agent role and behavioral contract | `discovery-role-overlay.md` |
| **Protocol** | Defines task-specific procedure | `discovery-interview-protocol.md` |
| **Recipe** | Composes overlays + packs + modules | `prd-discovery.s.recipe.json` |

## Overlays vs Protocols vs Recipes

| Aspect | Overlay | Protocol | Recipe |
|--------|---------|----------|--------|
| Defines | WHO the agent is | HOW to do a task | WHAT to load |
| Scope | Role-wide behavior | Task-specific | Session config |
| Changes | Rarely | Per task type | Per use case |

## Where Things Live

| Content | Location | Notes |
|---------|----------|-------|
| Authored contracts | `docs/agents/**` | Source of truth |
| Compiled packs | `public/_compiled/packs/` | Generated |
| Distribution wrappers | `products/agent-skill/` | Generated |

**Rule:** Author here. Generate elsewhere.

## See Also

- `/public/_compiled/packs/` — Context packs (S/M/L slices)
- `/infra/scripts/compile-*.js` — Pack compilers
