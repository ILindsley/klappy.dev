Below is Canon v0.1 — Decision Rules.
This complements the Constraints by answering “how I choose” when multiple valid options exist.

Like the constraints, this is:
• first-person
• website-ready
• explicitly non-universal
• structured so agents can translate it into neutral/system logic at runtime

Paste this into /about/decision-rules.md.

⸻

Decision Rules

Canon v0.1

These rules describe how I tend to make decisions when designing systems.
They are not absolute laws. They are defaults I apply unless there is a clear reason not to.

If a rule is overridden, I expect the reason to be stated explicitly.

⸻

1. Outcomes Before Implementation

I define the outcome I care about before choosing tools, architectures, or code.

How I apply this
• I ask what problem is actually being solved
• I avoid committing to implementation details too early
• I prefer deleting work that doesn’t move the outcome forward

Signals this rule was violated
• The solution is impressive but unclear in purpose
• Success criteria are vague or missing
• The system “works” but doesn’t help anyone

⸻

2. Borrow → Bend → Break → Build

I follow a progression when deciding how much to create from scratch.

The order 1. Borrow — Use an existing tool as-is 2. Bend — Extend or configure an existing tool 3. Break — Fork or partially replace an existing tool 4. Build — Create something new from components

How I apply this
• I start at Borrow and justify moving down the list
• Building from scratch requires explicit justification

Signals this rule was violated
• Reinventing something stable and well-understood
• Forking without a clear maintenance plan

⸻

3. Simplicity Wins by Default (KISS)

I choose the simplest solution that plausibly works.

How I apply this
• I reject unnecessary abstraction
• I prefer readable code over clever code
• I add complexity only when simplicity demonstrably fails

Signals this rule was violated
• Explanations are longer than the code
• Only the original author understands the system

⸻

4. DRY, But Not at the Cost of Isolation

I avoid duplication, but not if it creates brittle coupling.

How I apply this
• I allow duplication across bounded contexts
• I extract shared logic only when reuse is proven
• I avoid “god modules” shared by everything

Signals this rule was violated
• Small changes cause widespread breakage
• Teams are blocked waiting on shared components

⸻

5. Prefer Explicit State Over Implicit State

I choose designs where state is visible, named, and bounded.

How I apply this
• I avoid hidden global state
• I make lifecycle and ownership explicit
• I prefer passing state over reaching for it

Signals this rule was violated
• Bugs depend on execution order
• Restarting the system produces surprising behavior

⸻

6. Favor Recoverability Over Perfection

I prefer systems that fail safely and recover easily over systems that try to prevent all failure.

How I apply this
• I design for partial failure
• I assume components will break
• I prefer restartable, replayable processes

Signals this rule was violated
• A single failure takes everything down
• Recovery requires deep expertise or manual intervention

⸻

7. Make Tradeoffs Visible Early

I name tradeoffs as part of the design, not as a postmortem.

How I apply this
• I document why a choice was made
• I acknowledge what the choice sacrifices
• I leave breadcrumbs for future maintainers

Signals this rule was violated
• Future changes require archaeology
• Decisions feel arbitrary in hindsight

⸻

8. Optimize for the Next Maintainer

I assume the next person to touch the system is not me.

How I apply this
• I favor clarity over personal preference
• I document non-obvious decisions
• I avoid designs that require constant explanation

Signals this rule was violated
• The system works but no one wants to touch it
• Knowledge exists only in conversations or chat logs

⸻

9. UI Should Carry the Explanation

I prefer showing over telling, especially in user-facing systems.

How I apply this
• I let interfaces demonstrate behavior
• I keep explanatory text short
• I ask permission before going deep

Signals this rule was violated
• Long explanations compensate for confusing UX
• Users need documentation to complete basic tasks

⸻

10. If It Can’t Be Verified, It Isn’t Done

I do not consider work complete unless it is verified.

How I apply this
• I run the system
• I observe behavior directly
• I require visual or test evidence

Signals this rule was violated
• Confidence is based on reasoning alone
• Bugs are discovered by users instead of builders

⸻

11. Escalate Only When Defaults Fail

I start with defaults and escalate only when necessary.

How I apply this
• I try the obvious solution first
• I gather evidence before increasing complexity
• I treat escalation as a signal, not a failure

Signals this rule was violated
• Overengineering early
• Complex solutions to simple problems

⸻

12. Say “I Don’t Know” Early

I prefer admitting uncertainty to pretending confidence.

How I apply this
• I name unknowns explicitly
• I design experiments to reduce uncertainty
• I avoid locking in assumptions prematurely

Signals this rule was violated
• Decisions are justified with vague confidence
• Surprises appear late and expensively

⸻

13. Prefer One-Shot Builds; Don’t Steer a Miss

I prefer fixing the asset (PRD, constraints, inputs) and re-running clean over steering a multi-turn miss.

How I apply this
• I treat a failed execution path as signal, not a trajectory to nurse back to health
• If context decays, I restart with corrected inputs rather than accumulating patches
• I preserve the attempt as evidence, then begin a new attempt independently

Signals this rule was violated
• “Just one more tweak” turns into extended steering
• The system only works if the same person keeps nudging it
• The final outcome cannot be reproduced from a clean start

⸻

14. Don’t Hard-Code Domain Tables; Hard-Code Protocol Contracts

I avoid hard-coding domain lookups that can be derived, fetched, or updated without code changes.

I do hard-code protocol contracts that define interoperability:
• types
• schemas
• action primitives
• allowed states and transitions

How I apply this
• If it’s “data,” I prefer it to live in content, configuration, or a source of truth
• If it’s “interface,” I prefer it to be explicit and enforced in code

Signals this rule was violated
• Large in-code tables that drift from reality (e.g., enumerations maintained by hand)
• Domain updates require redeploys without justification
• Integrations fail because the “contract” was implicit or inconsistent

⸻

Closing Note

These rules describe how I tend to decide, not how decisions must always be made.

Agents and collaborators should:
• apply these rules by default
• translate them into neutral/system logic
• state clearly when a rule is overridden and why

⸻

Status
• Canon v0.1 — Decision Rules complete
• Ready to proceed to Canon v0.1 — Definition of Done & Evidence Policy

If you’re ready, say:
“Proceed with Canon v0.1 — definition of done.”
