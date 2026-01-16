We’ll use dual-layer framing inside the same artifact:
• Primary framing (neutral, clinical):
“Common Failure Modes”
• Secondary framing (plainspoken, human):
“How ODD Gets Misused in Practice”

This mirrors how engineers actually think:
• first we diagnose
• then we admit how humans break things

No moralizing. No scolding. Just pattern recognition.

This also gives you rhetorical flexibility:
• formal conversations → use the clinical language
• mentoring / blog / portfolio conversations → use the plainspoken language

⸻

Artifact 1

ODD Misuse Patterns

(Appendix to ODD Manifesto — Internal)

This section documents predictable ways Outcomes-Driven Development (ODD) fails when applied incorrectly.
These are not violations of intent; they are human failure modes under real constraints.

The purpose is not prevention through rules, but early recognition through shared language.

⸻

Misuse Pattern 1: Outcome Theater

(“We say outcomes, but still worship artifacts.”)

What it looks like
• Outcomes are stated, but success is still measured by:
• shipped code
• completed tickets
• deployed features
• Evidence is implied, not demonstrated.

Why it happens
• Artifact-based metrics feel concrete.
• Outcomes feel abstract until proven.

Where it shows up
• Early PoCs that never re-anchor to real user value.
• Pilots that quietly revert to velocity metrics.

Risk
• ODD becomes rebranded output-driven development.

⸻

Misuse Pattern 2: Prompt Maximalism

(“If one prompt is good, ten must be better.”)

What it looks like
• Large, ornate prompts replace thinking.
• Slight prompt changes cause wildly different outcomes.
• Prompts are curated like fragile artifacts.

Why it happens
• Early AI success feels magical.
• Teams mistake correlation for control.

Where it shows up
• PoCs experimenting rapidly.
• Teams hopping between tools without stabilizing conventions.

Risk
• Prompt over code collapses into prompt over judgment.

⸻

Misuse Pattern 3: Premature Governance

(“Let’s lock this down before it breaks.”)

What it looks like
• Rules introduced before patterns stabilize.
• Heavy definitions of “done” applied too early.
• Checklists used as gates instead of lenses.

Why it happens
• Fear of chaos.
• Desire for predictability before understanding.

Where it shows up
• Pilots transitioning too quickly to “production thinking.”
• Teams scaling before learning.

Risk
• Innovation slows before it has a chance to inform governance.

⸻

Misuse Pattern 4: Evidence Substitution

(“Trust me, it works.”)

What it looks like
• Assertions replace demonstrations.
• Logs, explanations, or screenshots stand in for proof.
• Visual verification is deferred indefinitely.

Why it happens
• Evidence takes effort.
• Verifying your own work is uncomfortable.

Where it shows up
• Autonomous agent workflows.
• Systems that “should” work but haven’t been observed.

Risk
• Trust becomes social instead of empirical.

⸻

Misuse Pattern 5: Consistency Absolutism

(“One way forever.”)

What it looks like
• Early conventions treated as immutable.
• Divergence framed as error instead of signal.
• Local context ignored for global uniformity.

Why it happens
• Consistency reduces cognitive load.
• Change feels like regression.

Where it shows up
• Mature systems resisting evolution.
• Teams optimizing for internal harmony over external reality.

Risk
• The system becomes brittle under real-world variation.

⸻

Misuse Pattern 6: Antifragility as Optimism

(“It’ll recover.”)

What it looks like
• Failure assumed to be harmless.
• Recovery paths untested.
• Learning deferred until “later.”

Why it happens
• Antifragility sounds resilient.
• Testing failure is inconvenient.

Where it shows up
• Distributed systems.
• Autonomous or semi-autonomous agents.

Risk
• Systems degrade silently until trust collapses.

⸻

A note on maturity (intentionally light)

These patterns tend to:
• appear early as curiosity and speed
• persist silently through pilots
• cause real damage in production if unexamined

The solution is not stricter rules, but timely awareness.

⸻

How this appendix should be used
• As a diagnostic lens
• As shared language for course correction
• As a reminder that misuse is normal — and fixable

This list is expected to grow as real failures are observed.

⸻
