# S-Pack: Decision/Governing Documents

> Executable context for agent behavior. Extract of Operating Constraints, Defaults, Failure Modes, and Verification from all decision/governing documents.

> Generated: 2026-01-26T21:08:01.804Z

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

## Models Do Not Mutate Canon

> Models may analyze and report on Canon, but may not edit it.

*Source: `canon/decisions/models-do-not-mutate-canon.md`*

### Operating Constraints

- MUST NOT allow models to write changes directly to Canon files
- MUST allow models to read, analyze, summarize, and report on Canon
- MUST allow models to draft proposed changes for human review
- MUST require human review and approval for all Canon mutations
- MUST treat Canon as human-governed truth, not generated artifact

---

### Defaults

- Models draft, humans commit
- When a model detects a Canon error, report it rather than fix it
- Treat any model attempt to edit Canon as a boundary violation
- Prefer slower Canon updates over model-driven drift

---

### Failure Modes

- **Direct Mutation**: Model writes to Canon files, bypassing human review
- **Subtle Drift**: Well-meaning model edits introduce gradual inaccuracy
- **Accountability Gap**: No human responsible for model-introduced changes
- **Authority Erosion**: Canon becomes "just another generated file" when models edit freely
- **Approval Theater**: Rubber-stamping model changes without genuine review

---

### Verification

- No commits to Canon files have model as author without human approval
- Canon changes are traceable to human decisions
- Models produce drafts and reports, not direct mutations
- Boundary is enforced in tooling and process, not just policy

---

---

## Definition of Done & Evidence Policy

> The enforcement backbone that defines what "complete" means.

*Source: `canon/definition-of-done.md`*

### Operating Constraints

- MUST include all 5 DoD requirements: Change Description, Verification Performed, Observed Behavior, Evidence Produced, Self-Audit Completed
- MUST produce evidence after the change, not before or from previous runs
- MUST demonstrate actual behavior, not expected or intended behavior
- MUST provide visual proof for any work affecting UI, interaction, layout, or visible state
- MUST NOT claim "done" without evidence; the correct response is "This is not complete yet"
- MUST label partial completion explicitly with what was verified and what remains

---

### Defaults

- When uncertain whether evidence is needed: include it
- Short recordings (10-30 seconds) are usually sufficient for interaction work
- Self-audit should be brief reflection, not bureaucracy
- If evidence cannot be produced, state why and propose an alternative
- Treat ambiguity as worse than incompleteness

---

### Failure Modes

- **"It compiles"**: Treating successful compilation as completion
- **"The logic is sound"**: Treating reasoning as substitute for verification
- **"This should work"**: Treating confidence as evidence
- **"I reviewed the code"**: Treating inspection as observation of behavior
- **"I didn't have time to test"**: Treating explanation as exemption from evidence

---

### Verification

- System was actually run or exercised (dev server, tests, page load, workflow trigger)
- Evidence shows actual observed behavior (screenshots, recordings, test logs, DOM snapshots)
- Evidence is specific to the task and clearly labeled
- Self-audit includes: intended outcome, constraints applied, decision rules followed, tradeoffs, remaining risks

---

---

## Agent-Executable Documentation Outline

> Supplement human-readable documentation with decision leverage.

*Source: `canon/documentation/agent-executable-outline.md`*

### Operating Constraints

- MUST use MUST/MUST NOT/NEVER in Operating Constraints, not prose
- MUST name Failure Modes concretely after traps actually observed
- MUST specify evidence requirements in Verification, not just outcomes
- MUST NOT fill sections just to satisfy tooling; omit deliberately instead
- MUST keep sections short (3-5 bullets typical); long sections indicate bloat

---

### Defaults

- Start with Subtitle and Operating Constraints only; add others based on observed failures
- Failure Modes are added when agents repeat known mistakes
- Verification is added when agents claim success prematurely
- Defaults are added when agents hesitate on uncertain decisions
- Background is optional and human-first; not required for execution

---

### Failure Modes

- **Form Filling**: Adding sections to satisfy tooling rather than encoding real constraints
- **Prose in Constraints**: Using explanatory sentences instead of actionable MUST/MUST NOT
- **Vague Failure Modes**: Labels without concrete traps (e.g., "Be careful" instead of named mistakes)
- **Outcome-Only Verification**: Stating what "done" looks like without specifying evidence
- **Section Bloat**: Long sections that should be split or moved to background

---

### Verification

- Operating Constraints contain verbs and objects ("MUST include X", "MUST NOT do Y")
- Failure Modes name specific traps observed in practice
- Verification specifies evidence type, not just desired outcome
- Sections are short enough for S-slice extraction (under 2000 chars typically)
- Forced or empty sections were omitted rather than filled with placeholders

---

## Execution Posture

> How strongly a document is expected to govern behavior.

*Source: `canon/documentation/execution-posture.md`*

### Operating Constraints

- MUST declare execution_posture in frontmatter for all documents
- MUST NOT force executable structure on exploratory or routing documents
- MUST NOT auto-generate content to satisfy compiler requirements
- MUST treat executable structure as an affordance, not a requirement
- MUST omit sections deliberately if they would be forced or misleading

---

### Defaults

- When uncertain about posture, start with operational and upgrade to governing based on observed impact
- Governing docs expect most required sections; operational expects a subset
- Exploratory and routing docs may omit executable sections entirely
- Compilers warn but do not block on missing sections

---

### Failure Modes

- **Forced Structure**: Adding sections that don't apply just to satisfy tooling
- **Posture Inflation**: Marking documents as governing when they're actually operational
- **Auto-Generation**: Compilers filling in missing sections with generated content
- **Template Cargo Cult**: Copying section headings without meaningful content
- **Exploratory Suppression**: Forcing executable structure on thinking-tools and essays

---

### Verification

- execution_posture is declared in frontmatter
- Section presence matches declared posture expectations
- Forced or empty sections have been deliberately omitted
- Compilers emit warnings, not errors, for missing sections
- No auto-generated content in executable sections

---

## Slice Contract: S / M / L

> How much to extract from each included topic.

*Source: `canon/documentation/slice-contract-sml.md`*

### Operating Constraints

- MUST extract S-slices structurally (heading-to-heading), not by summarization or rewriting
- MUST NOT fabricate content for missing sections; skip them instead
- MUST include only behavior-changing content in S-slices
- MUST use relevance to control topic inclusion; use slice size to control extraction depth
- MUST emit warnings for governing docs missing required sections

---

### Defaults

- S-slice extracts: Title, Subtitle, Operating Constraints, Defaults, Failure Modes, Verification
- M-slice adds: Summary, Examples
- L-slice adds: Background, Rationale, any remaining sections
- XL is full document export, not intended for execution packs
- Missing sections are skipped without error for non-governing docs

---

### Failure Modes

- **Fabricated Content**: Generating summaries or filling in missing sections
- **Bloated S-Slices**: Including background or rationale in S when it doesn't change behavior
- **Relevance Confusion**: Using slice size to control inclusion instead of relevance metadata
- **Summarization**: Rewriting content instead of structural extraction
- **Completeness Fetish**: Requiring all sections even when some don't apply

---

### Verification

- S-slice contains only sections that change immediate behavior
- Extraction is verbatim from source headings, not summarized
- Missing sections result in skip, not fabrication
- Governing docs without required sections emit warnings
- Pack size reflects extraction depth, not document length

---

## Tier vs Relevance

> Two different axes with different purposes. Do not conflate them.

*Source: `canon/documentation/tier-vs-relevance.md`*

### Operating Constraints

- MUST NOT use tier to decide context-pack inclusion; use relevance instead
- MUST NOT infer relevance from tier automatically
- MUST declare relevance explicitly on each document
- MUST keep tier and relevance as independent axes
- MUST fix metadata errors, not compiler behavior, when conflation occurs

---

### Defaults

- Tier defaults to 2 (secondary/discoverable) when not specified
- Relevance defaults to supporting when not specified
- When uncertain whether content is decision-grade, start at supporting and upgrade based on observed impact
- Treat tier as UI-facing only; treat relevance as execution-facing only

---

### Failure Modes

- **Tier as Agent Signal**: Using tier: 1 to mean "important for agents"
- **Numeric Depth Encoding**: Using tier numbers to encode execution priority
- **Automatic Inference**: Deriving relevance from tier programmatically
- **Axis Conflation**: Treating visibility and usability as the same concern
- **Pack Bloat**: Including content in context packs based on tier instead of relevance

---

### Verification

- Context pack inclusion is determined by relevance, not tier
- Tier assignment reflects human navigation needs only
- Relevance assignment reflects agent decision-making needs only
- Metadata explicitly declares both values when both apply
- Changes to tier do not affect context pack composition

---

## Epistemic Obligation and Document Tiers

> Document tiers define epistemic obligation, not importance.

*Source: `canon/epistemic-obligation-and-document-tiers.md`*

### Operating Constraints

- MUST absorb Tier 1 content fully before proceeding; contradiction is a serious error
- MUST respect Tier 2 content by default; deviation requires documented justification
- MUST NOT conflate tier with importance; tiers describe epistemic obligation, not value
- MUST NOT use Tier 0 as "low importance"; Tier 0 is scope exclusion from the epistemic system entirely
- MUST treat tiers as orthogonal to folders; any folder may contain documents at any tier

---

### Defaults

- Tier 1: absorb fully, do not contradict, do not reinterpret without explicit justification
- Tier 2: follow by default, document deviations, respect unless explicitly overridden
- Tier 3: reference when relevant, may ignore when not applicable, free to rebuild
- Tier 0: exclude from agent context, exclude from context-packs, not comparable to Tier 1-3
- When uncertain about tier assignment, ask: "How much must I internalize this before proceeding?"

---

### Failure Modes

- **Tier as Importance**: Treating Tier 1 as "most important" and Tier 3 as "least important"
- **Ignoring Relevant Tier 3**: Skipping Tier 3 content that matters for specific execution
- **Over-weighting Tier 1**: Applying Tier 1 content when it doesn't apply to current task
- **False Elevation**: Putting low-obligation content at Tier 2, creating false urgency
- **Tier 0 Confusion**: Treating Tier 0 as low-obligation rather than scope-excluded

---

### Verification

- Tier assignment reflects epistemic obligation, not perceived importance
- Tier 1 content is stable, rarely changed, and contradictions are treated as serious errors
- Tier 2 deviations are documented with explicit justification
- Tier 0 content is excluded from agent reasoning and context-packs
- Folder placement and tier assignment are independent decisions

---

---

## Verification & Evidence

> Claims are untrusted. Only observed evidence counts.

*Source: `canon/verification-and-evidence.md`*

### Operating Constraints

- MUST provide observed, attributable evidence for any claim of completion
- MUST NOT present mocked, randomized, or fabricated data as real evidence
- MUST NOT claim success based on "it should work," "the code builds," or "tests passed" alone
- MUST explicitly acknowledge phenomenological limits (audio, subjective experience) and request human verification
- MUST contextualize evidence to actual system state, not idealized or nearby conditions

---

### Defaults

- Assertions are untrusted until evidence is provided
- When evidence cannot be produced, state the limitation explicitly
- Prefer direct observation over inference
- Treat plausibility as insufficient; require proof
- When uncertain about evidence quality, ask for clarification rather than assuming validity

---

### Failure Modes

- **Simulated Evidence**: Presenting mock data, random values, or fabricated screenshots as proof
- **Plausibility as Truth**: Optimizing for believable output rather than verified behavior
- **Closure Pressure**: Claiming completion to appear helpful rather than admitting incompleteness
- **Inference as Observation**: Claiming behavior was observed when it was only inferred from code
- **Bypassing Phenomenological Limits**: Claiming to verify audio/subjective experience without human confirmation

---

### Verification

- Evidence was directly observed, not inferred from code or logic
- Evidence clearly corresponds to the specific claim being made (attributable)
- Evidence reflects actual system state at time of verification (contextualized)
- For phenomenological properties: explicit human verification or acknowledgment of limits
- Violation results in: attempt failure, loss of trust, disqualification from promotion/reuse

---

---

## Visual Proof Standards

> What "prove it visually" actually means for UI and interaction work.

*Source: `canon/visual-proof.md`*

### Operating Constraints

- MUST provide visual proof for any work affecting user-visible behavior
- MUST label all screenshots with a caption stating what the proof demonstrates
- MUST NOT crop screenshots ambiguously
- MUST include before/after evidence for changes to existing behavior
- MUST explicitly state why visual proof was not possible if it cannot be produced
- MUST NOT claim completion without visual evidence or explicit acknowledgment of verification limits

---

### Defaults

- When uncertain whether visual proof is needed: include it
- Prefer screen recordings (10-30 seconds) for interaction work
- One sentence caption is sufficient for labeling
- When "before" state is unavailable, state why rather than omitting

---

### Failure Modes

- **Screenshot of Code**: Showing code instead of rendered output; code proves nothing about visual behavior
- **Diagram Without Runtime**: Diagrams of intended behavior without evidence the system actually ran
- **Ambiguous Crop**: Cropping screenshots to hide context or adjacent failures
- **Reasoning Without Observation**: "It looks correct to me" or "it should work" without visual evidence
- **Unlabeled Evidence**: Screenshots without captions explaining what they demonstrate

---

### Verification

- Screenshot or recording showing correct state, behavior, and context
- Before/after evidence for any change to existing behavior
- Caption explaining which outcome the proof supports
- For phenomenological cases (audio, feel): explicit acknowledgment of verification limits
- Evidence URL or artifact path must be provided, not just assertion of existence

---

---

## Use Only What Hurts

*Source: `odd/constraint/use-only-what-hurts.md`*

### Operating Constraints

- MUST only introduce structure, abstraction, or tooling in response to a concrete, experienced pain
- MUST NOT add systems, layers, or rules "just in case" or based on anticipated scale
- MUST treat felt friction as the prerequisite for architectural change
- MUST prefer temporary discomfort over premature optimization
- MUST preserve the ability to delete or reverse structure once pain subsides

---

### Defaults

- If no specific pain can be named, do nothing
- If the pain is tolerable, tolerate it
- If multiple pains exist, address the one causing the most drag first
- When unsure whether to add structure, delay and observe longer
- Prefer manual or ad-hoc solutions until repetition becomes painful

---

### Failure Modes

- **Premature Abstraction**: Adding abstraction because it feels "cleaner" rather than because something hurts
- **Anticipated Pain**: Building generalized systems to avoid anticipated future pain
- **Elegance as Justification**: Treating elegance or completeness as sufficient justification for new structure
- **Preference as Constraint**: Encoding preferences or aesthetics as constraints
- **Intellectual vs Operational**: Mistaking intellectual discomfort for operational pain

---

### Verification

- A named pain must be stated explicitly before new structure is introduced
- The pain must be observable in actual workflow, not hypothetical scenarios
- The introduced structure must demonstrably reduce the stated pain
- If no measurable reduction occurs, the structure should be removed
- Verification should be possible by inspecting recent attempts or friction points

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
