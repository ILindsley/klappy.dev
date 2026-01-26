# S-Infra: Self-referential rules for tooling and documentation authors

> Executable context for agent behavior. Extract of Operating Constraints, Defaults, Failure Modes, and Verification.

> Generated: 2026-01-26T21:11:07.261Z
> Profile: infra (6 docs)

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
