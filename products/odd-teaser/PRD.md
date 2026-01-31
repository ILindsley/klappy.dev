# Klappy.dev — Odd Teaser PRD (v1.0)

---

## Header

- **PRD Version:** v1.0
- **Lane:** odd-teaser
- **Status:** Active
- **Epoch:** E0004 (Epistemic Separation Era)
- **Graduated from:** klappy://docs/guiding-artifacts/epoch-4/klappy-dev-poc-prd
- **Supersedes:** website, ai-navigation

---

## Product Definition

Klappy.dev is a **single-session epistemic experience**.

Its sole purpose is to help a visitor externalize at least one epistemic artifact and leave with something concrete.

**Klappy.dev must always be easier to leave than to continue.**

---

## Target User State (Success Definition)

A first-time visitor leaves after one session having:

1. Externalized at least one epistemic artifact
2. Noticed a missing habit in their own workflow (unprompted)
3. Taken something with them (export or mental transplant)

The product succeeds even if the user never returns.

---

## Non-Goals (Hard Exclusions)

The product must NOT:

- Authenticate users
- Persist identity
- Teach ODD explicitly
- Execute tasks
- Provide project management
- Optimize retention or engagement
- Become a documentation site
- Navigate users to canon/docs
- Answer questions about ODD

If a feature increases time-on-site without increasing artifact creation, it is invalid.

---

## Core Experience

- Single-page web app
- Primary surface: conversational input
- Secondary surface: artifact drawer
- No navigation tree
- No menus beyond artifact visibility

Supported artifact types:
- Learnings
- Decisions
- Overrides

Export is the **exit ramp** (one-click, Markdown, local-only).

---

## Interface Contracts

- manifest >=2.0.0 <3.0.0
- build-output >=3.0.0 <4.0.0
- attempt-cli >=2.0.0 <3.0.0

---

## Visual Interfaces

- color-system >=1.0.0 <2.0.0
- typography >=1.0.0 <2.0.0
- spacing >=1.0.0 <2.0.0

---

## Success Criteria

- User can create each artifact type
- Artifacts are immediately visible upon creation
- Artifacts can be exported in one click
- The system can stop interacting without error
- Telemetry events fire correctly
- No features that increase time-on-site without increasing artifact creation

---

## Definition of Done

- Build output produced
- Visual proof captured
- Artifact creation verified (all 3 types)
- Export round-trip verified
- Cloudflare Preview URL provided
- Evidence URL provided
- Self-audit confirms no retention/engagement features
- Self-audit confirms no teaching/navigation features

---

## Telemetry (ODD-Safe)

**Allowed events:**
- ArtifactCreated { type }
- ArtifactExported { count, types }
- IncisionTriggered { reason }
- PrematureExit { artifact_count }

**Forbidden:**
- Raw text
- Prompts
- Responses
- Identity
- IP
- Fingerprinting

Telemetry measures epistemic motion, not users.

---

## Lifecycle

This product is the **closure artifact of Epoch 4**, not a growth product.

### Graduation / Kill Criteria

- If artifact creation rate drops to zero across 30 days → evaluate for retirement
- If feature requests accumulate that violate non-goals → scope freeze or retire

---

## Final Constraint

If someone asks: *"Should the product also…?"*

The default answer is **no**.

If the change is not clearly justified by artifact creation, it is rejected.

---

## Graduation

This PRD embodies the philosophy defined in:
- klappy://docs/guiding-artifacts/epoch-4/klappy-dev-poc-prd

That artifact remains canonical as the philosophical source.
This PRD accepts the operational gravity of maintaining the product.
