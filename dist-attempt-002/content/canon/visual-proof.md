Below is Canon v0.1 — Visual Proof Standards.
This defines what “prove it visually” actually means, so neither humans nor agents can wiggle out with vague claims.

It is:
• first person
• website-ready
• precise but not heavy
• designed to eliminate “trust me” outputs

Paste this into /about/visual-proof.md.

⸻

Visual Proof Standards

Canon v0.1

This page defines what I mean by visual proof.

If work affects anything a user can see or interact with, I expect direct visual evidence that it behaves as intended.

Visual proof replaces explanation.
If it can’t be shown, it isn’t verified.

⸻

Core Principle

I trust observed behavior more than reasoning.

Visual proof demonstrates that:
• the system was actually run
• the behavior exists in reality
• the output matches the intended outcome

⸻

When Visual Proof Is Required

Visual proof is required for any work involving:
• UI or layout
• navigation or flow
• interaction or animation
• visible state changes
• user-facing behavior
• generative UI output

If a user could notice the change, visual proof is required.

⸻

Acceptable Forms of Visual Proof

One or more of the following is required, depending on the task:

Screenshots
• Show the relevant state clearly
• Must not be cropped ambiguously
• Must reflect the final behavior

Screen Recordings (Preferred for Interaction)
• 10–30 seconds is usually sufficient
• Show the interaction from start to end
• No narration required

Rendered Output Artifacts
• Generated HTML files
• Static exports
• Snapshots of rendered states

Structured UI Captures
• DOM snapshots
• Component tree states
• Selector highlights

⸻

What Visual Proof Must Show

Visual proof must demonstrate:
• the correct state
• the correct behavior
• the correct context

When relevant, it should include:
• the starting state
• the resulting state
• the transition between them

⸻

Labeling Requirements

Each piece of visual proof must be accompanied by a short caption:
• What this proof demonstrates
• Which outcome it supports

One sentence is enough.

Unlabeled screenshots are not acceptable.

⸻

Before / After Evidence

For changes that modify existing behavior or UI:
• Include “before” and “after” visuals when feasible
• If “before” is unavailable, state why

This makes regressions and improvements obvious.

⸻

Tooling Expectations

Visual proof may be produced via:
• browser dev servers
• headless browsers
• automated UI testing tools
• screen capture utilities

The specific tool does not matter.
The evidence does.

⸻

When Visual Proof Is Not Possible

If visual proof cannot be produced, the output must explicitly state:
• why it was not possible
• what alternative verification was used
• what remains unverified

“Not possible” is acceptable.
“Not mentioned” is not.

⸻

What Does Not Count as Visual Proof

The following do not qualify:
• descriptions of expected behavior
• screenshots of code
• diagrams without runtime evidence
• “it looks correct to me”
• reasoning without observation

⸻

Relationship to Definition of Done

Visual proof is a required component of the Definition of Done for UI-related work.

Without visual proof:
• the task is not complete
• confidence claims are invalid

⸻

Agent Expectations

Agents are expected to:
• capture visual proof themselves when possible
• request assistance when they cannot
• refuse to claim completion without evidence

Producing visual proof is not optional.
It is part of the work.

⸻

Closing Note

This standard exists to eliminate ambiguity.

If something works:
• it can be shown

If it can’t be shown:
• it isn’t verified

⸻

Status
• Canon v0.1 — Visual Proof Standards complete
• Ready to proceed to Canon v0.1 — Completion Report Template

When you’re ready, say:
“Proceed with Canon v0.1 — completion report template.”
