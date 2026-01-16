# ✅ Definition of Done & Evidence Policy

**Canon v0.1**

> This is the enforcement backbone of the canon. It replaces repeated QA reminders with a clear, reusable contract.

This page defines what I mean when I say work is “done.”
If these conditions are not met, the work is not complete, regardless of confidence or explanation.

This policy applies to:
• code
• UI
• architecture
• automation
• AI-assisted outputs

---

## 📌 Core Principle

I do not consider work complete unless it is verified with evidence.

Reasoning alone is insufficient.
Assertions like “this should work” or “this is correct” do not count as completion.

---

## 📋 Definition of Done (DoD)

A task is only considered done when all of the following are present:

1. **Change Description** — What changed, where, and why.
2. **Verification Performed** — What was run or checked to verify the change.
3. **Observed Behavior** — What actually happened when the system was run.
4. **Evidence Produced** — Proof that the behavior matches the intended outcome.
5. **Self-Audit Completed** — A brief audit against constraints and decision rules.

If any of these is missing, the task is incomplete.

---

## 📎 Evidence Requirements

Evidence must demonstrate actual behavior, not expected behavior.

Acceptable evidence includes one or more of the following:
• screenshots
• short screen recordings (10–30 seconds)
• rendered output files
• test output logs
• DOM snapshots or structured UI state captures

Evidence must be:
• produced after the change
• specific to the task
• clearly labeled

---

## 👁️ Visual Verification (Preferred)

If the work affects:
• UI
• interaction
• layout
• user flow
• visible state

Then visual proof is required.

**What counts as visual proof**
• screenshot showing the correct state
• short recording demonstrating the interaction
• before/after comparison when relevant

If visual proof cannot be produced, the reason must be stated explicitly.

---

## 🔬 Verification Must Be Performed

I expect the system to be run or exercised, not just reasoned about.

Verification may include:
• running a dev server
• executing tests
• loading a page
• triggering a workflow
• simulating offline/online transitions

If verification cannot be performed (missing environment, credentials, etc.), this must be stated clearly, along with a proposed alternative.

---

## 🔍 Self-Audit Requirement

Each completed task must include a short self-audit covering:
• intended outcome
• relevant constraints applied
• relevant decision rules followed
• known tradeoffs
• remaining risks or unknowns

The purpose is reflection and traceability, not bureaucracy.

---

## ⚠️ What Does Not Count as Done

The following do not qualify as completion:
• “It compiles”
• “The logic is sound”
• “I reviewed the code”
• “This should work”
• “I didn’t have time to test”

These may be intermediate states, but they are not “done.”

---

## ⏳ Partial Completion

If work is partially complete, it must be labeled as such.

A valid partial completion includes:
• what was attempted
• what was verified
• what could not be verified
• what remains

Ambiguity is worse than incompleteness.

---

## 🚫 Explicit Exceptions

This policy may be relaxed only when explicitly stated, such as for:
• conceptual design discussions
• theoretical analysis
• early ideation

In those cases, the output must be clearly labeled “unverified”.

---

## 🤖 Agent Responsibility

Agents and collaborators are expected to:
• retrieve this policy before claiming completion
• translate it into neutral/system requirements
• enforce it against their own output
• refuse to claim “done” without evidence

If evidence cannot be produced, the correct response is:

“This is not complete yet.”

---

## 💡 Closing Note

This policy exists to:
• prevent false confidence
• reduce rework
• replace repeated QA reminders
• make outcomes trustworthy

It is not meant to slow work down.
It is meant to stop work from being incorrectly declared finished.

---

## ✅ Status

- Canon v0.1 — Definition of Done & Evidence Policy complete
- Ready to proceed to Canon v0.1 — Self-Audit Checklist
