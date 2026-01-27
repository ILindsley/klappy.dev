# Agent Skill Protocols

Task-specific procedures that guide agent behavior during specific workflows.

## Available Protocols

| Protocol | Purpose | Applies To |
|----------|---------|------------|
| `discovery-interview-protocol.md` | Adaptive discovery sessions | discovery-role |

## How Protocols Work

Protocols define **how to execute** specific workflows:
- Phase sequences
- Question banks
- Decision trees
- Output formats

Protocols are referenced by recipes and used in conjunction with overlays.

## Protocol vs Overlay

| Aspect | Overlay | Protocol |
|--------|---------|----------|
| Defines | WHO the agent is | HOW to do a task |
| Scope | Role-wide behavior | Task-specific procedure |
| Changes | Rarely | Per task type |

## See Also

- `/products/agent-skill/overlays/` — Role definitions
- `/products/agent-skill/recipes/` — Composition manifests
