# Hash Comparison — v1.3.1 vs v1.4

## INSTRUCTIONS.md Changes

### File Hashes

| Version | File | SHA-256 Hash |
|---------|------|--------------|
| v1.3.1 | `products/agent-skill/v1.3.1/attempts/attempt-001/INSTRUCTIONS.md` | e4d17740961edb424ab8ea4eaa9a6892e8401b358a954d111d7c78f66f02f431 |
| v1.4 | `products/agent-skill/v1.4/attempts/attempt-001/INSTRUCTIONS.md` | 25300ec261e29d923db7681d0a8389f5bad751951a0e1b47a0ccd95230fee03f |

The hashes differ, confirming the content has changed.

---

## Diff Summary

**New section added: `## Default Context Construction`**

The diff shows 75 new lines inserted after the "Agent Role" section and before "PRD Stage Typing":

```diff
+## Default Context Construction
+
+When constructing context from ODD-aligned documentation, use tier-weighted projection detail. Document tiers define epistemic obligation — how much you must absorb content before proceeding.
+
+### Tier-to-Detail Mapping
+
+| Document Tier | Default Projection Detail | What Is Returned |
+|---------------|---------------------------|------------------|
+| **Tier 1** | `high` (full content) | Complete document content |
+| **Tier 2** | `medium` (structural) | Frontmatter + description + outline + section headers |
+| **Tier 3** | `low` (minimal) | Title + one-line summary (blockquote) |
+
+This mapping is fixed. Tier determines default detail level unless explicitly overridden by the consumer.
+
+### What Each Detail Level Returns
+
+**`high` (full content)**
+- Everything in the document
+- Use when deep understanding is required
+- Use for Tier 1 documents by default
+
+**`medium` (structural)**
+- Frontmatter metadata
+- Title and summary blockquote
+- Description section
+- Outline section
+- Section headers (without content)
+- Use when orientation is needed but not full content
+- Use for Tier 2 documents by default
+
+**`low` (minimal)**
+- Frontmatter metadata
+- Title and summary blockquote only
+- Use when existence matters more than content
+- Use for Tier 3 documents by default
+
+### Agent Responsibilities
+
+You shall:
+
+- Respect epistemic obligation as encoded in document tiers
+- Treat Tier 1 content as foundational — must be fully absorbed, cannot be safely ignored
+- Treat Tier 2 content as shared convention — respect by default, document deviations
+- Treat Tier 3 content as awareness only — reference when relevant, may ignore otherwise
+- Surface when documents lack structure required for their projected detail level
+- Proceed with available structure without inventing compensating context
+
+### Agent Prohibitions
+
+You shall NOT:
+
+- Infer epistemic obligation from folder hierarchy (tiers are document properties, not folder properties)
+- Special-case README or index files for elevated inclusion (navigation documents are typically Tier 3)
+- Promote Tier 3 content to higher detail for perceived convenience
+- Summarize or synthesize documentation content to fill gaps
+- Apply heuristics that override the tier-to-detail mapping based on content analysis
+- Equalize detail across tiers (Tier 1 content must receive more tokens than Tier 3)
+
+### Degradation Handling
+
+When document structure is insufficient for the requested projection detail:
+
+| Missing Element | Consequence |
+|-----------------|-------------|
+| No blockquote summary | `low` falls back to title only |
+| No Description section | `medium` falls back to outline or full |
+| No Outline section | `medium` returns description + headers |
+| No structure at all | All levels return full content |
```

---

## Changes Verified

- [x] Tier-to-Detail Mapping table added
- [x] What Each Detail Level Returns explanations added
- [x] Agent Responsibilities section added
- [x] Agent Prohibitions section added (the non-goals from PRD)
- [x] Degradation Handling table added
- [x] All existing v1.3.1 content preserved
