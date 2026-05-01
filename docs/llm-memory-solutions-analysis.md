# LLM / Agent Memory Solutions: A Comparative Analysis

> Where do Hindsight, Cognee, Graphiti, Letta, LangMem, Mem0, and Zep actually compete — and where does Oddkit + klappy.dev sit relative to all of them?

**Status:** Research note
**Date:** 2026-05-01
**Audience:** Anyone evaluating agent memory infrastructure or trying to understand whether oddkit fits next to (or replaces) these tools.

---

## 0. The Punchline

Seven of these projects answer the same question: **"How does my agent remember what happened?"** — conversation, user preferences, evolving facts.

Oddkit + klappy.dev answer a different question: **"How does my agent stay grounded in what's *true policy*, verify its claims, and avoid hallucinating decisions it never actually made?"**

That difference matters because most of the field treats "memory" as a single problem when it's really three:

| Memory type | Cognitive analog | What it stores | Best-of-breed in this set |
|---|---|---|---|
| **Episodic** | Autobiographical recall | "What was said, what happened, when" | Mem0, Hindsight, Zep, Letta |
| **Semantic / Governance** | World knowledge & values | "What is true, what constrains me" | **Oddkit + klappy.dev** |
| **Procedural** | Skills, habits, learned policy | "How I do things, why I changed" | LangMem, Hindsight (mental models), Letta (self-edit) |

The "hybrid solution" almost writes itself once you stop pretending these are competing for the same slot.

---

## 1. Repo-by-Repo Rundown

### 1.1 Hindsight (Vectorize.io)

**Mental model:** Biomimetic memory. Three pathways inspired by cognitive science:
- **World** — facts ("the stove gets hot")
- **Experiences** — first-person episodes ("I touched it, it hurt")
- **Mental Models** — learned distillations from reflection over the above

**API surface:** `retain` / `recall` / `reflect` over a `bank_id`.

**Retrieval:** 4-way hybrid — semantic, BM25 keyword, graph (entity/temporal/causal), temporal range — fused with reciprocal rank fusion + cross-encoder reranking.

**Distinctive claim:** SOTA on LongMemEval (independently reproduced by Virginia Tech / Sanghani Center). Pitches itself explicitly as "agents that *learn*, not just remember." Reflection turns raw memory into mental models on demand or in batch.

**Best at:** Long-running autonomous agents that need to *get better* over time, not just recall.

### 1.2 Cognee (topoteretes)

**Mental model:** "Knowledge engine" — ingest anything, get back a vector+graph hybrid that grounds against an ontology.

**API surface:** `remember` / `recall` / `forget` / `improve`. Has session memory (fast cache) plus a permanent knowledge graph; auto-routes recall between them.

**Retrieval:** Vector search + graph traversal + ontology grounding. Multimodal ingestion. Auto-routing chooses strategy.

**Distinctive claim:** Pipeline-style ingestion (`add → cognify → improve`) producing a queryable graph that is both meaningful and connected. Plugs into Claude Code via session lifecycle hooks (SessionStart / PostToolUse / SessionEnd) — gives a coding agent persistent project memory.

**Best at:** Heterogeneous data ingestion where you want a *knowledge graph* that learns, with cross-agent sharing.

### 1.3 Graphiti (Zep / getzep)

**Mental model:** **Temporal context graph.** Every fact has bi-temporal validity (`valid_at`, `invalid_at`), every edge traces back to an "episode" (the raw data that produced it), and entity types can be prescribed (Pydantic models) or learned.

**API surface:** Add episodes, query with hybrid search + graph traversal. Custom ontology via Pydantic.

**Retrieval:** Hybrid (semantic + BM25 + graph) with sub-second latency. Crucially, you can query "what was true on date X" — not just "what's true now."

**Distinctive claim:** Doesn't *delete* contradicted facts — it *invalidates* them and keeps the temporal history. This is what most "memory" systems get wrong.

**Best at:** Domains where facts change and you need to know both *what's true now* and *what we used to think was true*.

### 1.4 Zep

**Mental model:** Managed, productionized layer **on top of Graphiti**. Adds users, threads, message storage, dashboards, SLAs, sub-200ms retrieval at scale.

The OSS Community Edition is **deprecated** — Zep is now a hosted product, with Graphiti as the only OSS surface.

**Best at:** Teams who want Graphiti-quality temporal memory but don't want to operate Neo4j/Falkor themselves.

### 1.5 Letta (formerly MemGPT)

**Mental model:** **Virtual context for stateful agents.** Inspired by OS virtual memory: the model has a small "core" memory window (persona, human, custom blocks) and an unbounded paged archival memory it can search and self-edit.

**API surface:** Agent-as-resource — create an agent with `memory_blocks`, send messages; the agent writes its own memory using tools.

**Distinctive claim:** *The agent edits its own memory.* Self-improving superintelligence framing. Heavy infra (Postgres, Alembic migrations) — it's a stateful agent platform, not a library.

**Best at:** Long-lived assistants whose persona and "what they know about you" must persist and evolve through agent-driven self-edits.

### 1.6 LangMem (LangChain)

**Mental model:** Two complementary primitives that drop into any LangGraph storage layer:
- **Hot-path tools** (`create_manage_memory_tool`, `create_search_memory_tool`) — the agent stores/searches *during* the conversation
- **Background memory manager** — extracts, consolidates, and rewrites memories asynchronously, plus *prompt refinement* that updates the agent's own instructions over time

**Distinctive claim:** Treats **procedural** memory (the prompt itself) as a first-class artifact to optimize, not just episodic content.

**Best at:** Teams already on LangGraph who want a low-ceremony way to add long-term memory + self-improving prompts.

### 1.7 Mem0

**Mental model:** Drop-in memory layer between user and LLM. Multi-level (User / Session / Agent state).

**Latest algorithm (April 2026):** Single-pass **ADD-only** extraction — one LLM call, no UPDATE/DELETE, memories accumulate. Adds first-class agent-generated facts, entity linking across memories, and multi-signal retrieval (semantic + BM25 + entity boosting, fused).

**Reported scores:** 91.6 on LoCoMo, 93.4 on LongMemEval — published with an open-source eval framework.

**Best at:** Personalization at scale — chatbots, assistants, support agents that need cheap, fast, reliable user-level recall with low latency (~1s p50).

### 1.8 Oddkit

**Mental model:** **Not** an episodic memory store. It's an **MCP server that reads a GitHub repo of markdown** (decisions, constraints, learnings, governance) and exposes structured tools that *enforce epistemic discipline*:

| Tool | Purpose |
|---|---|
| `orient` | Diagnose the situation — exploring? planning? executing? |
| `preflight` | Pre-implementation: surface constraints, definition of done, pitfalls |
| `search` / `get` / `catalog` | BM25-indexed retrieval over the markdown canon, with citations |
| `challenge` | Pressure-test a claim against existing constraints |
| `gate` | Check readiness before mode transitions |
| `encode` | Persist a decision/insight/boundary as a durable record |
| `validate` | Verify completion claims — returns `VERIFIED` or `NEEDS_ARTIFACTS` |

**Architecture:** Stateless Cloudflare Worker. Pulls a zip of the repo, parses YAML frontmatter, indexes with BM25, exposes tools via MCP. No vector DB, no LLM-driven extraction, no per-user state. The repo *is* the memory.

**Distinctive claim:** Most "memory" tools optimize *recall*. Oddkit optimizes *epistemic posture* — refusing to claim done without evidence, refusing to answer policy from training data, capturing decisions as durable records rather than evaporating after the session.

### 1.9 klappy.dev

The **knowledge base oddkit reads.** Markdown-only, four tiers:

- `canon/` — read-only governance: axioms, constraints, principles, methods, diagnostics
- `odd/` — Outcomes-Driven Development methodology, ledgers, encoding/challenge/gate types
- `docs/` — implementation: planning, decision records, incident reports, tool docs, session journals
- `writings/` — public essays

The whole thing is version-controlled, diffable, human-readable, and *forkable*. Want your own knowledge base? Point oddkit at your repo with `canon_url`. There's no schema enforcement — start with what hurts.

---

## 2. Side-by-Side: Where the Real Differences Live

### 2.1 What gets stored

| Repo | Conversation turns | Extracted facts | Temporal validity | Mental models / learnings | Governance / policy | Provenance back to source |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Hindsight | ✓ | ✓ | ✓ | **✓ first-class** | — | ✓ |
| Cognee | ✓ | ✓ | ✓ (sessions) | ✓ (improve) | partial (ontology) | ✓ |
| Graphiti | ✓ | ✓ | **✓ bi-temporal** | — | partial (Pydantic types) | **✓ episodes** |
| Zep | ✓ | ✓ | ✓ (via Graphiti) | — | partial | ✓ |
| Letta | ✓ | ✓ (self-edit) | — | partial (block evolution) | partial (persona) | weak |
| LangMem | ✓ | ✓ | — | ✓ (prompt opt) | — | weak |
| Mem0 | ✓ | **✓ ADD-only** | — | — | — | weak |
| **Oddkit + klappy.dev** | — | — | git history | **✓ encoded decisions** | **✓ first-class** | **✓ git commits** |

### 2.2 Storage model

| Repo | Backing store | Stateful? | Schema |
|---|---|---|---|
| Hindsight | Postgres (or Oracle) + vectors | Server | Banks; world/experience/model split |
| Cognee | Vector DB + graph DB | Server | Pipeline-defined |
| Graphiti | Neo4j / FalkorDB / Kuzu / Neptune | Server | Pydantic ontology |
| Zep | Managed | Server (cloud) | Inherited from Graphiti |
| Letta | Postgres + Alembic | Server | Memory blocks + archival |
| LangMem | Any LangGraph store | Optional | Namespaces |
| Mem0 | Vector + entity index | Either | Multi-level (user/session/agent) |
| **Oddkit** | **GitHub repo of markdown** | **Stateless worker** | **YAML frontmatter, optional** |

That last row is the structural reason oddkit doesn't really compete with the others. It's a **read layer over a versioned text repo**, not a database.

### 2.3 The "memory write" path

- **Mem0 / Hindsight / Cognee / Graphiti / Zep:** Agent says something → LLM extracts facts → vectors+graph updated → durable.
- **LangMem:** Same, but as drop-in tools or background workers.
- **Letta:** Agent itself edits its memory blocks via tool calls.
- **Oddkit:** Agent calls `encode(...)` which produces a structured markdown record; humans (or PR-generating agents) commit it to the canon repo. Memory writes go through git.

The oddkit write-path is slower, but **auditable, diffable, reviewable, and portable**. You can `grep` your memory. You can `git blame` a decision.

### 2.4 The "memory read" path

- **Mem0 / Hindsight / Zep / Cognee:** Hybrid retrieval (semantic + keyword + graph + temporal), often with a reranker; returns candidate facts.
- **Graphiti:** Same, with explicit temporal queries.
- **Letta:** Paged retrieval — agent searches archival memory like a filesystem.
- **LangMem:** Tool-driven; agent decides when to search.
- **Oddkit:** BM25 over markdown, returns documents with **citations and quotes** the agent can present verbatim. No embedding, no fuzziness — exact matches against canonical text.

This is the second structural difference: oddkit's retrieval is **citation-grade**. It's optimized for "the agent must quote source X to make claim Y," not for "find me semantically similar episodes."

---

## 3. Where Oddkit + Klappy.dev Are Genuinely Different

The other seven all answer the question, *"What did the user/agent already say or do, and how do I bring it back?"* They differ on storage primitives (graph vs. vector vs. mental model), update semantics (overwrite vs. invalidate vs. ADD-only), and retrieval fusion (which signals, which reranker).

Oddkit + klappy.dev answer a question none of them really touch:

> **"What is the agent *not allowed to fabricate*, and how do I prove it didn't?"**

Concretely, oddkit enforces three things the others mostly don't:

1. **Policy retrieval is mandatory.** The bootstrap pattern says: never answer governance questions from model memory; always retrieve with citations. Hindsight, Mem0, etc. are *opt-in* — the agent decides when to recall. Oddkit is designed to be *invoked at checkpoints* (orient → preflight → validate).

2. **Completion claims are debt.** `validate` returns `VERIFIED` or `NEEDS_ARTIFACTS`. This is a hard gate, not a vibe. The other tools have no equivalent — they assume "memory was retrieved" implies "claim is grounded," which is exactly the failure mode the AGENTS.md axioms (klappy.dev `canon/values/axioms.md`) are designed to prevent.

3. **The knowledge base is forkable text.** No vendor, no proprietary schema, no embedding migration. You can read klappy.dev with `cat`. You can diff a decision. Hindsight's mental models, Mem0's facts, Letta's blocks — all of these live in a database and have to be exported.

### What Oddkit *deliberately* doesn't do

- No per-user/per-session state — it's stateless and global.
- No automatic conversation ingestion — encoding is explicit.
- No vector embeddings or semantic search — BM25 is sufficient because the corpus is curated, not raw conversation.
- No LLM-driven extraction in the read path — retrieval is deterministic.

These omissions are why pairing it with one of the other seven is interesting, not redundant.

---

## 4. A Hybrid Stack That Uses the Best of Each

Picture a coding agent (or any production agent) that must operate over months, learn from its own work, defer to project policy, and prove its claims. None of the seven episodic systems do all of that. Oddkit alone doesn't do any of the recall.

Here's the stack I'd actually build:

### Layer 1 — Episodic engine: Hindsight *or* Mem0

- Pick **Hindsight** if you need autonomous learning (mental-model formation, reflection cycles, SOTA on LongMemEval).
- Pick **Mem0** if you mostly need fast, cheap, low-latency personalization (single-pass ADD-only, ~1s p50).
- This layer handles "what did the user say last Tuesday" and "what does Alice prefer."

### Layer 2 — Temporal facts: Graphiti

- Sits beside (not on top of) the episodic engine for any domain where facts change over time and provenance matters: prices, policies, org charts, customer status.
- Bi-temporal queries (`valid_at` / `invalid_at`) and Pydantic-typed entities give you something Mem0/Hindsight don't natively expose.
- Self-host Graphiti, or upgrade to Zep when you need sub-200ms at scale.

### Layer 3 — Procedural: LangMem-style background extractor

- Not the LangMem product per se — the *pattern*. A nightly (or per-session-end) job that:
  - Looks at the episodic store for friction signals (corrections, retries, contradictions)
  - Distills them into candidate **learnings** and **decisions**
  - Routes them to Layer 4 for human-reviewed promotion

### Layer 4 — Governance & validation: **Oddkit + your klappy.dev fork**

- All of the above feed into oddkit via `encode`:
  - Decisions become entries in `canon/decisions/`
  - Learnings become entries in `odd/ledger/learnings.jsonl`
  - Constraints discovered the hard way become entries in `canon/constraints/`
- The agent runs **orient → preflight → (work) → validate** on every task.
- `search` / `get` are the *only* permitted way to answer policy questions — never from training data, never from Layer 1 episodic memory directly.

### Why this composition works

| Concern | Layer that owns it |
|---|---|
| "What did the user just say?" | 1 (Hindsight/Mem0) |
| "What does this user prefer?" | 1 |
| "What was the price of X on May 1?" | 2 (Graphiti) |
| "Why did this customer churn?" | 1 + 2 |
| "What pattern keeps biting us?" | 3 → 4 |
| "Are we allowed to ship this?" | 4 (Oddkit `gate` / `validate`) |
| "What did we decide and why?" | 4 (Oddkit `encode`, git history) |
| "Prove this claim is true." | 4 (Oddkit `validate` with artifact refs) |

The episodic layer is fast and probabilistic. The governance layer is slow, deliberate, and auditable. They serve different epistemic functions and shouldn't be conflated. Most "agent memory" failures I've seen are exactly that conflation: the agent recalls a *plausible* fact from episodic memory and presents it as policy.

### A concrete dataflow

```
                  ┌─────────────────────────┐
   user turn ───▶ │  Agent (Letta-style or  │ ◀── Oddkit: orient, preflight,
                  │  vanilla LangGraph)     │     search, validate, encode
                  └────┬─────────────┬──────┘
                       │             │
                       ▼             ▼
              ┌─────────────┐  ┌──────────────┐
              │ Mem0 /      │  │ Graphiti     │
              │ Hindsight   │  │ (temporal    │
              │ (episodic)  │  │  facts)      │
              └─────┬───────┘  └──────┬───────┘
                    │                 │
                    └────────┬────────┘
                             ▼
              ┌──────────────────────────┐
              │ Background extractor     │
              │ (LangMem-pattern)        │
              │  - finds friction        │
              │  - drafts learnings      │
              └──────────────┬───────────┘
                             │ candidate decisions / learnings
                             ▼
              ┌──────────────────────────┐
              │ Human review (PR)        │
              └──────────────┬───────────┘
                             │ merged
                             ▼
              ┌──────────────────────────┐
              │ klappy.dev fork (git)    │ ◀── Oddkit reads this
              │  canon/, odd/, docs/     │
              └──────────────────────────┘
```

The arrow from "background extractor" through "human review" is what every other system in this list quietly skips. Oddkit forces it into the workflow because the canon is text-in-git.

---

## 5. When to Pick What — Just the Quick Decision Table

| If your problem is… | Reach for |
|---|---|
| "Personalize my chatbot per user, fast & cheap" | **Mem0** |
| "Build an agent that *learns* over months from its own work" | **Hindsight** |
| "Track facts that change over time with full history" | **Graphiti** (or Zep if managed) |
| "Stateful long-running assistant with self-edited persona" | **Letta** |
| "Already on LangGraph, want low-ceremony memory + prompt opt" | **LangMem** |
| "Heterogeneous documents → unified queryable graph" | **Cognee** |
| "Stop the agent from hallucinating policy / claiming false done" | **Oddkit + klappy.dev** |
| "All of the above in production" | **Oddkit + (Hindsight or Mem0) + Graphiti** |

---

## 6. Honest Caveats

- **Benchmarks are vendor-reported except where noted.** Hindsight's LongMemEval scores were independently reproduced. Mem0's claims (91.6 LoCoMo, 93.4 LongMemEval) ship with an OSS eval harness, which is the right move; reproduce them yourself before treating them as ground truth.
- **Oddkit has no public benchmark in this space.** It isn't competing on LongMemEval. The right benchmark for it would be something like "rate at which the agent makes unverified policy claims" — which doesn't really exist as a public eval yet. (That itself is a research opportunity.)
- **The hybrid stack is not free.** Running Hindsight + Graphiti + a background extractor + oddkit is real operational work. Use Only What Hurts (klappy.dev `odd/odd-compared.md`) — start with the smallest piece that addresses your concrete pain.
- **Episodic memory has unsolved correctness problems.** Mem0's switch to ADD-only and Graphiti's bi-temporal invalidation are both responses to the same underlying issue: overwriting memory destroys the audit trail. The field hasn't converged. Oddkit sidesteps this entirely by storing memory as git history — but it pays for that with manual encoding overhead.

---

## 7. Where I'd Push Klappy.dev Next

Strictly opinion, drawn from this analysis:

1. **Document the orthogonality explicitly.** A short writing in `writings/` titled something like *"Oddkit Is Not a Memory Database"* would prevent the most common misread.
2. **Publish a reference adapter** — a tiny worked example pairing oddkit with Mem0 *or* Hindsight, showing the encode-from-extractor pattern. The hybrid stack is the strongest pitch and currently lives only in conversation.
3. **Define a "policy-claim eval"** — a small benchmark where an agent is asked policy questions across a corpus, and is scored on (a) citation rate, (b) hallucination rate, (c) refusal-to-answer-when-unknown rate. That's the eval oddkit would *win*, and the field needs it.
4. **Encode this analysis itself.** It's a decision-with-rationale about how oddkit relates to the broader ecosystem — exactly the kind of artifact `canon/decisions/` exists to hold.

---

## See Also

- [`odd/odd-compared.md`](../odd/odd-compared.md) — ODD vs. SDD/EDD/AI-DLC/governance frameworks (this analysis is the memory-systems analog of that document)
- [`canon/values/axioms.md`](../canon/values/axioms.md) — the four axioms that drive oddkit's design
- [`writings/from-passive-to-proactive.md`](../writings/from-passive-to-proactive.md) — why oddkit is invoked at checkpoints rather than waiting to be asked
