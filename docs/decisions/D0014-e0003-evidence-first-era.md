---
uri: klappy://docs/decisions/D0014
title: "D0014: Declare E0003 Evidence-First Era"
audience: docs
exposure: internal
tier: 2
voice: first_person
stability: stable
tags: ["odd", "epochs", "evidence", "cloudflare", "attempts", "lanes"]
---

# Declare E0003 Evidence-First Era

> Attempts require externally verifiable deployment evidence, not just local build success.

## Description

This decision declares E0003 — Evidence-First Era, requiring attempts to prove success through externally reviewable deployment. An attempt is incomplete until the branch is pushed, Cloudflare preview deploys successfully, and evidence renders at `/_evidence/<run_id>/EVIDENCE.md` with HTTP 200. Attempts that cannot prove deployment must seal as failure.

## Outline

- Decision statement
- Status
- Why
- Consequences
- Implementation
- Evidence

---

## Content

# D0014: Declare E0003 Evidence-First Era

**Status:** Accepted  
**Date:** 2026-01-19  
**Decider:** Klappy  
**Epoch:** E0003  
**Related:** D0009 (Multi-lane PRDs), D0012 (Transition Interpretation), D0013 (Lane-scoped dist), Deploy Evidence (klappy://canon/odd/deploy-evidence)

## Context

Under E0002, attempts could claim success with local build proof and repository artifacts.

In practice, this created invalid conclusions:

- Cloudflare Pages serves only the configured build output directory
- `/attempts/**` is not served by Pages by default
- Agents completed "successful" attempts that never rendered online
- Evidence URLs were often hypothetical or unverified

The system incentivized local-only success and narrative closure instead of externally reviewable proof.

## Decision

We declare **E0003 — Evidence-First Era**.

In E0003, an attempt is not complete unless:

1) The attempt branch is pushed to origin
2) Cloudflare Pages preview deployment succeeds
3) The preview URL returns HTTP 200 and renders the site
4) The evidence URL returns HTTP 200 and renders evidence at:

`/_evidence/<run_id>/EVIDENCE.md`

Additionally:

- Evidence MUST be copied into the lane build output:
  `products/<lane>/dist/_evidence/<run_id>/`
- Attempts that cannot prove (2)-(4) MUST seal as failure

## Consequences

### Positive

- Prevents "success without deployment"
- Makes evidence externally reviewable and durable
- Forces alignment between docs, tooling, and Cloudflare configuration

### Negative

- Adds operational friction (intentional)
- Increases failure rate until tooling and CF projects are correctly configured

## Compatibility

- E0002 attempts remain valid within E0002.
- E0002 attempts are not comparable to E0003 attempts by default.

## Minimal operational rule

If a preview URL cannot be verified, stop.
No additional work is permitted under a false success state.
