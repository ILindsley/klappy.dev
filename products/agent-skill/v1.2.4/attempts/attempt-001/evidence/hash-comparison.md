# Hash Comparison: v1.2.3 vs v1.2.4

## Summary

v1.2.4 fixes stale ODD paths (elevated from `canon/odd/` to `odd/` in canon 0.6.0) and adds new content (Cognitive Partitioning, Tool Specialization).

## Path Changes

| v1.2.3 Path | v1.2.4 Path | Reason |
|-------------|-------------|--------|
| `canon/odd/manifesto.md` | `odd/manifesto.md` | ODD elevated to root in canon 0.6.0 |
| `canon/odd/README.md` | `odd/README.md` | ODD elevated to root in canon 0.6.0 |
| `canon/odd/appendices/README.md` | `odd/appendices/README.md` | ODD elevated to root in canon 0.6.0 |
| `canon/odd/decisions/README.md` | `odd/decisions/README.md` | ODD elevated to root in canon 0.6.0 |

## New Sources in v1.2.4

| Source | Purpose |
|--------|---------|
| `odd/cognitive-partitioning.md` | Cognitive Partitioning concept (canon 0.8.0) |
| `canon/odd/appendices/tool-specialization.md` | Tool Specialization pattern (canon 0.8.0) |

## Hash Changes

### Changed Files (paths fixed, content may differ)

| File | v1.2.3 Hash | v1.2.4 Hash |
|------|-------------|-------------|
| `odd/manifesto.md` | 2ccce4217958d475582a42184355db8e5c5f158f5d176bda376d05265a6e5118 | 8a815ada6af26763e0cdd79eeb21c76eed1fbc7b1cd13068d338535eafa675da |
| `odd/README.md` | a04131e7ff589553411d30ca0d6d3292b6391dc3956461b243627488a229b709 | cdbdff24383a85dacf361099b60a947747afbeb56b03e7636130c0b97daa4a50 |
| `odd/appendices/README.md` | 3dcdda85b2a7d9586aa58e6541bc4a96c78d0ff174d1444534e5ff03d5833934 | 542606e743385b985682891a0f13ca1b463c6f72a0021f620e7bc74dfd12a516 |
| `odd/decisions/README.md` | 8e0399ae5e922baa6019678f4cc768448b585390450ee803e6a38d87c1b9cc0d | 1f03da50ea51115715ce36ad0beb7d71d06d5df3b3a347dc1c5e1873cc0fb278 |
| `canon/README.md` | fe5795892bd4378256fb67ec8f3664e5c1e1d65228e5c89251b76f708f4e279c | 98ff95bee152af56eec56c6b451e314fe1f144da260c27f3d49847924970620b |
| `canon/constraints.md` | 4921209156b3253307e43ae54d180dfb06a018b1dc259557c45ff903ef55520e | 5e1846a12abcc12f148775ea31c5aef65ce2151385447c87730b54124de60bca |
| `canon/decision-rules.md` | 5a35a7ed64b4a6041b8c46808f928b55c1d89006107bc6e24f53f164dd2a5dbc | 4e9b0f9db33474d088d617e665c4ca01cefdeb22bc3bb05429217eeea3a7b481 |
| `canon/definition-of-done.md` | 159cb88a9d71323ade8a41678364c9f6a822e12449c9c95423dee1245418c644 | afc9f8c5bce0d5a1475110cd7efb3efd3b7050d3c1ff52b77f589fd2125dde35 |
| `canon/self-audit.md` | 397f92ef8115096adef690aeffd46f0a4bac055bab327841e762066690991b19 | 37e031cef314d6f87dad5dc3682feb5cd808325dac3dc903e0926eca8e1e25c3 |
| `docs/PRD/PRD_TEMPLATE.md` | 24c9185733d05e351e2cefd5f67ef0328bee5d76854961cf23532784e6c6a108 | 9ff8b63a6edd0314c4ea884cc3915f6d448949a7d415a3010280aff122cf1afb |

### New Files (v1.2.4 only)

| File | v1.2.4 Hash |
|------|-------------|
| `odd/cognitive-partitioning.md` | 92debb039570f9d7225359a4ee918902cd767dc049b1b068791fad05725947d4 |
| `canon/odd/appendices/tool-specialization.md` | 2cde355160a8847b7c196f57c9fab896d8e2bdc36bd1ff34abbcfba019080a59 |

### Unchanged

| File | Hash |
|------|------|
| `INSTRUCTIONS.md` | 0fc8d637a4021c7c579ed0f936dedffa8e2b96787d4d762b38c3e79b137a8dfa |

Note: INSTRUCTIONS.md hash is unchanged because the guidance content itself did not change — only paths and new content were added to the pack.

## Verification

- All source hashes computed with SHA-256
- Paths verified against corrected compile-plan.json
- ODD paths now point to `/odd/` not `/canon/odd/`
