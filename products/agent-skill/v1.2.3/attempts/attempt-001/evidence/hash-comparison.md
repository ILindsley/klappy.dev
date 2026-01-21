# Hash Comparison: v1.2.1 vs v1.2.3

This document shows the source differences between the previous champion (v1.2.1) and this attempt (v1.2.3).

## Sources Comparison

### v1.2.1 Sources (Previous)

```
canon/odd/manifesto.md
canon/odd/appendices/memory-architecture.proposed.md
canon/constraints.md
canon/decision-rules.md
canon/definition-of-done.md
canon/self-audit.md
docs/PRD/PRD_TEMPLATE.md
products/agent-skill/src/INSTRUCTIONS.md  <-- PERSISTED (ODD violation)
```

### v1.2.3 Sources (This Attempt)

```
canon/README.md                           <-- NEW (canon 0.5.4)
canon/odd/README.md                       <-- NEW (canon 0.5.4)
canon/odd/manifesto.md
canon/odd/appendices/README.md            <-- NEW (canon 0.5.4)
canon/odd/decisions/README.md             <-- NEW (canon 0.5.4)
canon/constraints.md
canon/decision-rules.md
canon/definition-of-done.md
canon/self-audit.md
docs/PRD/PRD_TEMPLATE.md
products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md  <-- EPHEMERAL (ODD compliant)
```

## New Sources (Canon 0.5.4 README Index Pattern)

| Source | Hash |
|--------|------|
| `canon/README.md` | fe5795892bd4378256fb67ec8f3664e5c1e1d65228e5c89251b76f708f4e279c |
| `canon/odd/README.md` | a04131e7ff589553411d30ca0d6d3292b6391dc3956461b243627488a229b709 |
| `canon/odd/appendices/README.md` | 3dcdda85b2a7d9586aa58e6541bc4a96c78d0ff174d1444534e5ff03d5833934 |
| `canon/odd/decisions/README.md` | 8e0399ae5e922baa6019678f4cc768448b585390450ee803e6a38d87c1b9cc0d |

## Unchanged Sources (Same Hashes)

| Source | Hash |
|--------|------|
| `canon/odd/manifesto.md` | 2ccce4217958d475582a42184355db8e5c5f158f5d176bda376d05265a6e5118 |
| `canon/constraints.md` | 4921209156b3253307e43ae54d180dfb06a018b1dc259557c45ff903ef55520e |
| `canon/decision-rules.md` | 5a35a7ed64b4a6041b8c46808f928b55c1d89006107bc6e24f53f164dd2a5dbc |
| `canon/definition-of-done.md` | 159cb88a9d71323ade8a41678364c9f6a822e12449c9c95423dee1245418c644 |
| `canon/self-audit.md` | 397f92ef8115096adef690aeffd46f0a4bac055bab327841e762066690991b19 |
| `docs/PRD/PRD_TEMPLATE.md` | 24c9185733d05e351e2cefd5f67ef0328bee5d76854961cf23532784e6c6a108 |

## INSTRUCTIONS.md Hash

Same content, different source path (ODD compliance):
- **Hash**: 0fc8d637a4021c7c579ed0f936dedffa8e2b96787d4d762b38c3e79b137a8dfa
- **v1.2.1 path**: `products/agent-skill/src/INSTRUCTIONS.md` (persisted - violates ODD)
- **v1.2.3 path**: `products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md` (ephemeral - ODD compliant)

## Removed Sources

| Source | Reason |
|--------|--------|
| `canon/odd/appendices/memory-architecture.proposed.md` | Replaced by README index pattern |

## Key Differences

1. **+4 README files**: Canon 0.5.4 adds folder indexes for tree-shakeable memory
2. **INSTRUCTIONS.md location**: Moved from persisted `src/` to ephemeral attempt folder
3. **memory-architecture.proposed.md**: Removed (summarized in appendices/README.md)
