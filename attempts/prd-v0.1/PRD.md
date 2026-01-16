# 📋 Product Requirements Document (PRD)

**Product Name (working):** klappy.dev — Conversational Portfolio & Canon
**Status:** v0.1 (Foundational)

---

## 1. Purpose

The purpose of this product is to create an LLM-driven, conversational portfolio website that:
• Orients visitors through dialogue rather than navigation
• Surfaces projects, ideas, and context dynamically
• Demonstrates a constraint- and outcome-driven approach to software design
• Serves as the canonical source of truth for design constraints, decision rules, and QA expectations
• Provides a reusable knowledge base that can be consumed by LLM agents via MCP

This product intentionally treats content as canonical and LLM behavior as constrained.

---

## 2. Problem Statement

Traditional portfolio websites assume users know what to click and what they are looking for. They also separate “about me” content from the actual thinking that shapes work.

In parallel, AI coding agents suffer from:
• prompt sprawl
• inconsistent adherence to principles
• false claims of completion
• lack of verification and evidence

This product addresses both problems by:
• making conversation the primary interface
• embedding constraints, decision rules, and evidence standards directly into the system
• requiring LLM-driven interactions to show, not just tell

---

## 3. Goals

**Primary Goals**
• Enable first-time visitors to orient themselves via conversation
• Dynamically surface relevant projects, writings, and context
• Keep verbal responses concise by favoring generative UI
• Ensure all answers are grounded in published content
• Make constraints, principles, and QA expectations explicit and reusable

**Secondary Goals**

• Support hands-free / voice-driven interaction
• Allow the same canon to guide external LLM coding agents
• Demonstrate evidence-based completion and self-auditing in practice

---

## 4. Non-Goals

• Teaching users how to code or adopt a methodology
   • Generating opinions not present in the knowledge base
   • Acting as a general-purpose AI assistant
   • Providing exhaustive explanations by default
   • Replacing human judgment or taste

---

## 5. Target Users

1. **Curious Visitor** — Wants to understand what this person works on and why it matters.
2. **Technical Peer** — Wants to understand design philosophy, constraints, and tradeoffs.
3. **Potential Collaborator** — Wants to see relevant proof-of-concepts and reasoning quickly.
4. **LLM Agent (Secondary Consumer)** — Consumes the same canon to guide planning, building, and verification.

---

## 6. Core Product Concept

The website presents a chat-first UI that looks familiar (AI chat), but behaves differently:
• The LLM keeps responses short
• The UI dynamically renders content (projects, sections, highlights)
• The LLM asks permission before going deeper
• The primary value is orientation, not explanation

The LLM is a guide, not a narrator.

---

## 7. Knowledge Base Scope (Canonical Content)

The system must only answer from approved content sources.

**v0 Canonical Sources**
• README (context)
• FAQ
• Constraints (first-person)
• Decision Rules (first-person)
• Definition of Done & Evidence Policy
• Self-Audit Checklist
• Visual Proof Standards
• Project pages + project metadata

**Future Sources (not required for v0)**
• Blog posts
• Articles
• Meeting transcripts
• Talks / podcasts
• Design notes

---

## 8. Voice Model (Critical)

• Canonical content is written in first-person (authorial voice).
   • LLMs and agents must translate first-person intent into neutral/system constraints at runtime.
   • First-person language must not appear in generated code, system plans, or operational outputs unless explicitly requested.

This translation is the responsibility of the consuming agent.

---

## 9. LLM Behavior Contract

**General Rules**
• Retrieve relevant content before answering
• Ground answers in visible artifacts
• Prefer navigation and UI actions over text
• Keep default responses to 1–3 sentences
• Ask permission before providing deeper explanations
• Explicitly state when information is missing

**Disallowed Behavior**
• Inventing motivations or future plans
• Overgeneralizing from a single project
• Claiming success without evidence
• Narrating what is already visible on screen

---

## 10. Generative UI Requirements

The LLM may only use a fixed set of UI action primitives.

**Approved UI Actions (v0)**
• open(page)
• scroll_to(section_id)
• highlight(section_id)
• expand(section_id)
• collapse(section_id)
• preview(item_id)
• show_related(items[])
• pin(item_id)
• ask_followup(question)
• suggest_questions(questions[])

The LLM must:
• explain why an action is relevant in one sentence or less
• never describe UI elements redundantly

---

## 11. Evidence-Based Completion (System Principle)

All implementation work related to this product—whether by humans or agents—must follow evidence-based completion.

A task is only complete when it includes:

1. What changed (diff summary)
2. What was run (build/tests/commands)
3. Visual proof (screenshots, recordings, or rendered output)
4. A filled self-audit checklist

If any of these are missing, the task is incomplete.

---

## 12. Accessibility & Hands-Free Support

• All navigation must be triggerable via voice
• The LLM must briefly confirm navigation actions during voice use
• UI actions must not require precise pointer interaction

---

## 13. Success Metrics (v0)

• Users reach a relevant artifact within 1–2 conversational turns
• Reduced bounce rate on first visit
• Increased time-to-orientation (users stay because they're guided)
• LLM correctly responds with "not covered" when information is missing
• No claims of completion without evidence

---

## 14. Phased Rollout

**Phase 0 — Canon**
• Write and publish canonical content
• Add stable anchors and metadata

**Phase 1 — Conversational UI**
• Chat-first interface
• UI action primitives
• Content-driven navigation

**Phase 2 — Evidence & Self-Audit**
• Completion reports
• Visual proof capture
• Self-audit enforcement

**Phase 3 — MCP Export**
• Serve canon via MCP
• Enable reuse by external agents

---

## 15. Platform Constraints

**Target Hosting**
• Cloudflare Pages + Workers (preferred)

**Runtime Constraint**
• Must run on Cloudflare Workers runtime (no Node-only APIs)

Default Architecture
• Static SPA served by Pages
• Optional API via Worker (for LLM calls requiring secrets, later MCP endpoints)

Compatibility
• Avoid dependencies that require Node runtime on the server
• Phase 1 should be a static SPA deployable to Pages
• Any server-side logic (LLM calls, later MCP) must be implemented as Worker-compatible endpoints

Build Guidance
• Prefer Vite + static builds over SSR frameworks for v0
• SSR adds complexity without payoff at this stage

---

16. Risks & Mitigations

Risk: Oververbose AI responses
Mitigation: Enforce UI-first + permissioned depth rules

Risk: Canon drift over time
Mitigation: Versioning + changelog

Risk: Hallucinations
Mitigation: Retrieval-first + explicit refusal when missing

---

17. Out of Scope (Explicit)
    • Monetization
    • Authentication
    • Multi-user profiles
    • Personalized recommendations
    • Teaching curriculum

---

Status
• PRD complete for v0
• Ready to proceed to Canon v0.1 artifacts

---
