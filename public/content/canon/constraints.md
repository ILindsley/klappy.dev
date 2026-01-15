# Constraints

Canon v0.1

This page documents the defaults and constraints I design under most often.
They are not universal best practices. They reflect the environments and problems I regularly work in.

Unless explicitly stated otherwise, these constraints should be assumed to apply.

---

## 1. Offline-First (Default)

I design as if network connectivity is unreliable, intermittent, or unavailable.

### Why this matters

Many of the contexts I work in:
- have poor or inconsistent internet access
- require field use
- cannot assume cloud availability

Designs that fail offline tend to fail catastrophically.

### What this forces
- Core functionality must work without a network
- Data is stored locally first
- Synchronization is opportunistic, not assumed
- Conflicts are expected and must be resolvable

### When this does not apply
- Short-lived internal tools
- One-off demos where offline support would distort the experiment
- Explicitly cloud-only systems (must be stated)

---

## 2. Long Timelines & Changing Ownership

I assume systems will live longer than their original creators and will change hands.

### Why this matters

Many projects:
- span years, not months
- outlast funding cycles
- rotate maintainers or organizations

Systems that assume stable ownership tend to rot.

### What this forces
- Clear separation of concerns
- Minimal hidden state
- Explicit documentation as part of the product
- Avoidance of "tribal knowledge" dependencies

### When this does not apply
- Throwaway prototypes
- Time-boxed experiments with a defined end date

---

## 3. Maintainability Over Cleverness

I default to solutions that are easy to understand, modify, and repair.

### Why this matters

Maintenance cost usually exceeds build cost, especially over long timelines.

### What this forces
- Preference for simple, boring solutions
- Avoidance of unnecessary abstractions
- Clear tradeoffs documented when complexity is introduced

### When this does not apply
- Exploratory research prototypes
- Performance-critical paths where simplicity is insufficient

---

## 4. Interoperability Over Feature Completeness

I prioritize systems that can work with others over systems that try to do everything.

### Why this matters

Closed or tightly coupled systems:
- limit collaboration
- increase lock-in
- age poorly

Interoperable systems survive organizational change.

### What this forces
- Preference for open formats and protocols
- Loose coupling between components
- Clear interfaces instead of shared internals

### When this does not apply
- Highly specialized tools with no external integration needs
- Temporary scaffolding code

---

## 5. Stateless or Low-State by Default

I default to stateless or low-state architectures where possible.

### Why this matters

State increases:
- complexity
- failure modes
- recovery cost

Stateless systems are easier to reason about and recover.

### What this forces
- Explicit state boundaries
- Externalized persistence where necessary
- Clear lifecycle management

### When this does not apply
- Systems whose core value is stateful (e.g., editors, long-running workflows)
- Performance-critical stateful processes (must be justified)

---

## 6. AI as Accelerator, Not Authority

I treat AI as a tool to accelerate thinking and execution, not as a source of truth.

### Why this matters

AI systems:
- hallucinate
- optimize for plausibility, not correctness
- require human judgment

Unverified AI output is a liability.

### What this forces
- Human-defined outcomes
- Verification and evidence requirements
- Explicit refusal when confidence is not warranted

### When this does not apply
- None. This constraint is always in effect.

---

## 7. Evidence Over Assertion

I do not consider work complete unless it is verified with evidence.

### Why this matters

Assertions like "it works" are unreliable without proof.

### What this forces
- Running the system
- Observing behavior
- Producing visual or test evidence

### When this does not apply
- Purely conceptual or theoretical work (must be labeled as such)

---

## 8. UX Is Contextual, Not Universal

I do not assume a single UX pattern works everywhere.

### Why this matters

Users vary by:
- language
- culture
- technical experience
- environment

Universal UX claims often hide bias.

### What this forces
- Context-specific design decisions
- Willingness to diverge from mainstream patterns
- Clear explanation of UX tradeoffs

### When this does not apply
- Internal tools for a well-defined, homogeneous user group

---

## 9. Ephemeral Artifacts Are Acceptable

I assume many outputs (code, UI, builds) are temporary.

### Why this matters

AI makes regeneration cheap. Maintaining everything forever is unnecessary.

### What this forces
- Focus on outcomes over artifacts
- Willingness to discard and regenerate
- Durable principles instead of durable repos

### When this does not apply
- Canonical data
- Long-term user content
- Legal or compliance artifacts

---

## 10. Explicit Tradeoffs

I expect tradeoffs to be named, not hidden.

### Why this matters

Every decision excludes alternatives. Unspoken tradeoffs cause confusion later.

### What this forces
- Short explanations of why choices were made
- Acknowledgment of downsides
- Easier future revision

### When this does not apply
- Truly trivial decisions

---

## Closing Note

These constraints define how I default, not how everyone should build.

Agents and collaborators should:
- assume these constraints apply
- translate them into neutral/system requirements
- explicitly note when a constraint is overridden or does not apply
