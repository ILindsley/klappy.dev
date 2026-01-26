# S-Meta: Framework awareness and decision heuristics

> Executable context for agent behavior. Extract of Operating Constraints, Defaults, Failure Modes, and Verification.

> Generated: 2026-01-26T21:11:07.260Z
> Profile: meta (4 docs)

---

## Constraints

> Design defaults and assumptions that shape how systems are built.

*Source: `canon/constraints.md`*

### Operating Constraints

- MUST design for offline-first unless explicitly stated otherwise; core functionality must work without network
- MUST treat AI as accelerator, not authority; this constraint is always in effect with no exceptions
- MUST verify work with evidence; assertions like "it works" are insufficient
- MUST keep lane artifacts self-contained within `products/<lane>/`; no cross-directory dependencies
- MUST make tradeoffs explicit and visible; every decision excludes alternatives
- MUST assume systems will outlive original creators and change hands

---

### Defaults

- Assume network is unreliable; data stored locally first, sync is opportunistic
- Prefer simple, boring, maintainable solutions over clever ones
- Prefer open formats, loose coupling, and clear interfaces over feature completeness
- Prefer stateless or low-state architectures; explicit state boundaries when state is needed
- Prefer ephemeral artifacts with durable principles; focus on outcomes over repos
- Prefer context-specific UX decisions over universal patterns

---

### Failure Modes

- **Hidden State**: Global state, implicit lifecycle, or "reaching for" state instead of passing it
- **Tribal Knowledge**: Systems that require undocumented expertise to operate or maintain
- **Clever Code**: Solutions that only the original author understands
- **Tight Coupling**: Small changes causing widespread breakage; teams blocked on shared components
- **AI as Oracle**: Treating unverified AI output as authoritative truth
- **Scattered Lanes**: Lane artifacts spread across directories, causing incomplete context and drift

---

### Verification

- System works without network (for offline-first requirements)
- Evidence produced demonstrates actual behavior, not assertion
- Tradeoffs documented with explicit acknowledgment of downsides
- Lane can be understood by reading only its `products/<lane>/` directory
- Next maintainer (who is not the author) can understand and modify the system

---

---

## Decision Rules

> Heuristics for choosing between valid options when designing systems.

*Source: `canon/decision-rules.md`*

### Operating Constraints

- MUST define outcome before choosing tools, architecture, or code
- MUST follow Borrow → Bend → Break → Build progression; building from scratch requires explicit justification
- MUST choose simplest solution that plausibly works; add complexity only when simplicity demonstrably fails
- MUST NOT consider work complete unless it is verified with evidence
- MUST prefer one-shot builds over steering multi-turn misses; fix inputs and restart clean
- MUST name tradeoffs as part of design, not as postmortem

---

### Defaults

- Start with defaults and escalate only when necessary
- Admit uncertainty early rather than pretending confidence
- Optimize for the next maintainer, not personal preference
- Allow duplication across bounded contexts; extract shared logic only when reuse is proven
- Prefer restartable, replayable processes over perfect but fragile ones
- Hard-code protocol contracts (types, schemas, states); avoid hard-coding domain tables

---

### Failure Modes

- **Outcomes After Implementation**: Building impressive solutions with unclear purpose or missing success criteria
- **Premature Building**: Reinventing stable, well-understood tools; forking without maintenance plan
- **Overengineering**: Complex solutions to simple problems; explanations longer than code
- **Steering a Miss**: "Just one more tweak" turning into extended multi-turn patching
- **Hidden Tradeoffs**: Decisions feeling arbitrary in hindsight; future changes requiring archaeology
- **Confidence Without Verification**: Bugs discovered by users instead of builders

---

### Verification

- Outcome is defined before implementation begins
- Simplest plausible solution was attempted first
- Evidence shows observed behavior, not just reasoning
- Tradeoffs documented with explicit downsides acknowledged
- System can be reproduced from a clean start without the original author's guidance

---

---

## ODD System Contract

> The single source of truth for ODD workflow compatibility.

*Source: `odd/contract.md`*

### Operating Constraints

- MUST declare lane for all attempts; attempts without lane declaration are invalid
- MUST declare epoch in META.json; outcomes are not comparable across epochs without explicit adjustment
- MUST store attempts under `products/<lane>/attempts/` (lane-contained); root `/attempts/**` is legacy read-only
- MUST follow three-tier hierarchy: ODD (universal) → Canon (program) → Docs (implementation)
- MUST NOT compare outcomes across epochs without explicit adjustment for evaluation context differences

---

### Defaults

- When uncertain about file placement, use the litmus test: 10-year truth → ODD, all-products rule → Canon, local implementation → Docs
- Assume contract 2.x compatibility unless explicitly working with historical E0001 artifacts
- Treat epoch boundaries as evaluation discontinuities, not version bumps
- Reference this document for system compatibility questions; individual PRDs have their own versioning

---

### Failure Modes

- **Cross-Epoch Comparison**: Comparing E0001 outcomes to E0002 without adjustment distorts evaluation
- **Lane Omission**: Running attempts without lane declaration creates orphaned artifacts
- **Tier Confusion**: Placing implementation details in ODD or universal principles in Docs
- **Legacy Path Usage**: Writing new attempts to root `/attempts/` instead of lane-contained paths
- **Implicit Epochs**: Failing to mark historical E0001 artifacts with epoch context

---

### Verification

- META.json contains lane and epoch declarations
- Attempts are stored under `products/<lane>/attempts/prd-vX.Y/attempt-NNN/`
- Documents placed according to litmus test (10-year, all-products, local)
- Epoch boundaries respected in any outcome comparison
- Historical artifacts marked with appropriate epoch context

---

---

## Three-Tier Conceptual Hierarchy

> ODD separates universal principles from program constraints from implementation details.

*Source: `odd/decisions/D0001-three-tier-conceptual-hierarchy.md`*

### Operating Constraints

- MUST classify files using the litmus test: 10-year truth → ODD, all-products rule → Canon, local implementation → Docs
- MUST NOT conflate philosophy with plumbing; universal principles stay in ODD, implementation details stay in Docs
- MUST allow different decay rates: ODD (almost never), Canon (carefully), Docs (freely)
- MUST NOT break universal principles when fixing implementation bugs
- MUST keep ODD independent of any single repository, vendor, or implementation

---

### Defaults

- When uncertain about placement, ask: "Would this still be true if klappy.dev didn't exist?"
- ODD should almost never change; Canon evolves carefully; Docs may rot and be rebuilt
- Prefer placing content lower (Docs) unless it clearly belongs higher (Canon/ODD)
- Treat Canon as shared contract, not universal truth

---

### Failure Modes

- **Conflating Tiers**: Putting implementation decisions in ODD or philosophy in Docs
- **Premature Elevation**: Moving content to ODD before it's proven universal
- **Monolithic Thinking**: Treating all three tiers as a single philosophy
- **Decay Mismatch**: Expecting Docs-level stability from implementation details
- **Vendor Lock-in**: Embedding vendor-specific decisions into ODD or Canon

---

### Verification

- Files pass the litmus test for their tier placement
- ODD content would still be true if this repository didn't exist
- Canon changes have program-wide justification
- Docs changes don't require updates to ODD or Canon
- Teams could fork Canon while keeping ODD intact

---

---
