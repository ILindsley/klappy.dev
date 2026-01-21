---
uri: klappy://products/ai-navigation
title: "AI Navigation Lane"
audience: docs
exposure: nav
tier: 2
voice: neutral
stability: evolving
tags: ["products", "ai-navigation", "lane", "index", "planned"]
---

# AI Navigation Lane

> AI-assisted navigation and chat interface for the website.

## Description

The ai-navigation lane is planned but not yet active. It will provide an AI chat interface that helps visitors navigate ODD content conversationally. This is separate from the website lane (static content) and the agent-skill lane (agent tooling).

## Outline

- Lane Status
- Planned Scope
- Relationship to Other Lanes

---

## Lane Status

| Field | Value |
|-------|-------|
| **Status** | Planned (sparse) |
| **PRD** | Not yet created |
| **Epoch** | TBD |

---

## Current State

This lane contains only a placeholder:

| Path | Purpose |
|------|---------|
| `src/.gitkeep` | Placeholder to preserve directory |

---

## Planned Scope

When active, this lane will include:

- AI chat interface for ODD navigation
- Context-aware responses based on canon/content
- Integration with website lane for seamless UX

---

## Relationship to Other Lanes

| Lane | Relationship |
|------|--------------|
| `website` | ai-navigation enhances website with conversational UI |
| `agent-skill` | ai-navigation consumes agent capabilities, does not define them |

---

## Starting an Attempt

A PRD must be created before attempts can begin. When ready:

1. Create `/products/ai-navigation/PRD.md`
2. Follow standard attempt workflow from `/docs/ATTEMPTS.md`
