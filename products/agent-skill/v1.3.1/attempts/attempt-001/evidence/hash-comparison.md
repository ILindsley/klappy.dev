# Hash Comparison: v1.3 → v1.3.1

## Summary

| Aspect | v1.3 | v1.3.1 |
|--------|------|--------|
| Canon Version | 0.8.0 | 0.10.0 |
| Source Count | 13 | 14 |
| New Source | - | odd/terminology.md |

## Source Hash Comparison

### Unchanged Sources

| Source | Hash |
|--------|------|
| canon/README.md | 4214378d7cc200f8c0bba443f12d473204cdc705a095d4fe7961cd0e478a9cdb |
| odd/README.md | cdbdff24383a85dacf361099b60a947747afbeb56b03e7636130c0b97daa4a50 |
| odd/manifesto.md | 8a815ada6af26763e0cdd79eeb21c76eed1fbc7b1cd13068d338535eafa675da |
| odd/cognitive-partitioning.md | 92debb039570f9d7225359a4ee918902cd767dc049b1b068791fad05725947d4 |
| odd/appendices/README.md | 542606e743385b985682891a0f13ca1b463c6f72a0021f620e7bc74dfd12a516 |
| odd/decisions/README.md | 1f03da50ea51115715ce36ad0beb7d71d06d5df3b3a347dc1c5e1873cc0fb278 |
| canon/odd/appendices/tool-specialization.md | 2cde355160a8847b7c196f57c9fab896d8e2bdc36bd1ff34abbcfba019080a59 |
| canon/constraints.md | 5e1846a12abcc12f148775ea31c5aef65ce2151385447c87730b54124de60bca |
| canon/decision-rules.md | 4e9b0f9db33474d088d617e665c4ca01cefdeb22bc3bb05429217eeea3a7b481 |
| canon/definition-of-done.md | afc9f8c5bce0d5a1475110cd7efb3efd3b7050d3c1ff52b77f589fd2125dde35 |
| canon/self-audit.md | 37e031cef314d6f87dad5dc3682feb5cd808325dac3dc903e0926eca8e1e25c3 |
| docs/PRD/PRD_TEMPLATE.md | 9ff8b63a6edd0314c4ea884cc3915f6d448949a7d415a3010280aff122cf1afb |
| INSTRUCTIONS.md | e4d17740961edb424ab8ea4eaa9a6892e8401b358a954d111d7c78f66f02f431 |

### New Source (v1.3.1)

| Source | Hash |
|--------|------|
| **odd/terminology.md** | e6fdd334f794fb5cc1feb7e48a2b247ee38cdbbf99ea360e93fe544a8a314b26 |

## Key Changes

1. **Added `odd/terminology.md`** — Constrained vocabulary and disambiguation
   - Defines core ODD terms: Outcome, Evidence, Artifact, Elevation, Canon, Attempt, Lane, Maturity
   - Includes disambiguation table for common misuses
   - Documents anti-patterns in language usage

2. **INSTRUCTIONS.md unchanged** — Same 8-phase elicitation loop as v1.3

## Verification

- Pack compiles successfully with 14 sources
- All v1.3 source hashes preserved
- New terminology.md hash verified
- Output written to dist/ and public/ folders
