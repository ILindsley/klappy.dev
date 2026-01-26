# S-Pack: Decision/Governing Documents

> Executable context for agent behavior. Extract of Operating Constraints, Defaults, Failure Modes, and Verification from all decision/governing documents.

> Generated: 2026-01-26T20:59:11.041Z

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
