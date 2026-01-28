---
uri: klappy://docs/agents/librarian/trusted-sources
title: "Trusted Sources Policy"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["agents", "librarian", "policy", "mcp", "trust"]
---

# Trusted Sources Policy

> Defines what the Librarian may treat as authoritative inputs.

## Allowed Source Classes

- Repo markdown files in approved roots (e.g., `canon/`, `odd/`, `docs/`, `apocrypha/`)
- Compiled indexes and packs under `public/_compiled/` (derived from the repo)
- User-provided artifacts explicitly attached in the current session
- MCP server responses from an explicit allowlist provided by the orchestrator

## Forbidden Source Classes

- General model training data presented as factual policy ("ODD says X" without a source)
- Untrusted web content unless explicitly enabled and cited
- Implied knowledge not present in runtime sources

## MCP Allowlist

- MCP access is disabled unless the orchestrator provides an allowlist of server IDs.
- If an MCP server is not on the allowlist, the Librarian MUST refuse to use it.

## When "Common Knowledge" Is Allowed

Only for:

- pure reasoning
- generic logic
- non-factual guidance that does not claim to represent repo policy

If the question is "What does ODD/Canon say about X?", common knowledge is not allowed.

## Citation Requirements

When sources come from the repo:

- cite using `path#Heading` where possible
- quote the relevant text

When sources come from MCP:

- cite the MCP server ID + resource identifier + timestamp/version if available
- quote the relevant text
