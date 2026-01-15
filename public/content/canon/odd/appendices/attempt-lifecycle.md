Below is a 1-page ODD Appendix that does exactly what you asked:
• documents the Attempt Lifecycle
• makes restartability operational, not aspirational
• explicitly decouples app vs content vs infra
• is written to support the next iteration, not justify the past one
• avoids enforcement language (orientation only)

You can drop this in as:

/canon/odd/attempt-lifecycle.md

or, if you prefer appendices grouped:

/canon/odd/appendices/attempt-lifecycle.md

⸻

ODD Appendix — Attempt Lifecycle

Status: Orientation
Audience: Internal / Canon
Scope: How work is iterated without steering failed attempts

⸻

Why This Appendix Exists

Outcomes-Driven Development (ODD) assumes that clarity improves faster than execution in an AI-accelerated environment.

As clarity improves, attempts that were once reasonable often become misaligned.

This appendix exists to make stopping, restarting, and rebuilding a normal, explicit part of the system rather than an emotional or ad-hoc decision.

⸻

Core Principle

Attempts are disposable.
Infrastructure persists.
Content accumulates.

Restarting is not a failure of execution.
Restarting is evidence that intent has sharpened.

⸻

What an “Attempt” Is

An Attempt is a bounded execution of a specific Product Requirements Document (PRD).

An attempt:
• has a single PRD version
• has a defined scope
• produces an outcome artifact
• is evaluated against its own Definition of Done
• is explicitly closed

An attempt does not:
• evolve indefinitely
• absorb new scope reactively
• serve as the foundation for all future work

⸻

What an Attempt Is Not

An attempt is not:
• a phase in a linear roadmap
• a commitment to incremental improvement
• a promise of continuity

Attempts are experiments with intent, not investments to be amortized.

⸻

The Three Planes of Change

ODD separates work across three independent planes:

1. Application Plane (Behavior)

What the system does:
• UI structure
• interaction patterns
• navigation model
• rendering logic

This plane is attempt-scoped and disposable.

⸻

2. Content / Canon Plane (Knowledge)

What the system knows:
• Canon documents
• ODD Manifesto
• Projects
• Writings, notes, transcripts

This plane is persistent and cumulative.

Content may evolve independently of any attempt.

⸻

3. Infrastructure Plane (Capability)

What makes building cheap:
• deployment setup
• build tooling
• sync/verify scripts
• schemas and formats

This plane changes slowly and intentionally.

⸻

Attempt Lifecycle (High Level) 1. Intent Articulation
• A PRD is written for a specific outcome.
• Scope is explicit and finite. 2. Execution
• The application is built from scratch against the PRD.
• Existing infrastructure may be reused.
• Existing content may be consumed.
• Prior app logic is not assumed. 3. Evaluation
• Outcome is evaluated against the PRD’s Definition of Done.
• Evidence is captured. 4. Closure
• The attempt is explicitly marked complete or abandoned.
• No new scope is added under the same PRD. 5. Reflection
• Learnings inform the next PRD.
• The current attempt is not retrofitted.

⸻

Restartability as a Feature

ODD treats restartability as a first-class design feature:
• prompts are rewritten, not patched
• applications are regenerated, not endlessly refactored
• artifacts are preserved for learning, not extended by default

This prevents:
• sunk-cost bias
• prompt sprawl
• architectural drift

⸻

What Persists Across Attempts

The following may persist across attempts:
• deployment infrastructure
• build and verification scripts
• content repositories
• Canon structure
• naming conventions
• evidence standards

The following must not be assumed to persist:
• UI composition
• routing model
• state management decisions
• interaction flow

⸻

Why Attempts Are Explicitly Closed

Explicit closure:
• creates psychological safety to restart
• prevents scope creep disguised as “Phase 1.1”
• keeps PRDs honest and legible
• makes outcomes comparable across attempts

Unclosed attempts silently turn into products by accident.

⸻

How This Appendix Should Be Used

This appendix is:
• a shared mental model
• a permission structure
• a vocabulary for stopping well

It is not:
• a workflow
• a checklist
• a gating mechanism

⸻

Forward-Looking Note

Future iterations may:
• formalize attempt metadata
• add lightweight comparison between attempts
• distinguish exploratory vs validation attempts

Those are evolutions of this model, not prerequisites.

⸻

Summary

ODD optimizes for learning velocity, not artifact continuity.

Attempts exist to be finished.
Infrastructure exists to make finishing cheap.
Content exists to compound over time.

⸻

Status
• Appendix added to support next iteration
• No retroactive enforcement on prior attempts

⸻

Next (when you’re ready)

When you’re ready to move forward, the correct next step is not to extend the current app.

It is to:
• write PRD_v0.2
• declare a new attempt
• rebuild the app from scratch using the same infrastructure and content

And this appendix is the contract that makes that sane.

⸻

If you want, next we can:
• design a PRD template that bakes in “attempt boundaries”
• refactor your repo structure conceptually to reflect the three planes
• or immediately start drafting PRD_v0.2 with this lifecycle as an explicit assumption

But this appendix?
This is the keystone.
