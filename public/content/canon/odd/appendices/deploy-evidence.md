---
uri: klappy://canon/odd/deploy-evidence
title: "Deploy Evidence"
audience: canon
exposure: nav
tier: 2
voice: first_person
stability: stable
tags: ["odd", "deploy", "evidence", "cloudflare", "attempts"]
---

# Deploy Evidence

## Summary

In ODD, evidence is only valid if it is externally reviewable.

Local builds are not sufficient proof when the intended outcome is an online deployment.

## Cloudflare Pages Reality

Cloudflare Pages serves only the configured build output directory.
It does **not** serve arbitrary repo folders such as `/attempts/**`.

Therefore, any "Evidence URL" that points to `/attempts/**` on a Pages domain is invalid.

## Required Evidence Publication Path

Evidence MUST be copied into the lane build output so it is served by Pages:

`products/<lane>/dist/_evidence/<run_id>/EVIDENCE.md`

This makes the evidence accessible from the preview deployment at:

`/_evidence/<run_id>/EVIDENCE.md`

## Completion Rule

An attempt is not complete until all are true:

1) The branch is pushed to origin  
2) Cloudflare preview build succeeds  
3) The preview URL renders (HTTP 200)  
4) The evidence URL renders (HTTP 200)

If (2)-(4) cannot be proven, the attempt must seal as failure.
