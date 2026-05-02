# Is Oddkit's Use of Klappy.dev Hardcoded?

> Short answer: oddkit *is* configurable, but klappy.dev is more than just the default — it's also a "required baseline" that's blended in even when you point oddkit at your own repo.

**Status:** Research note
**Date:** 2026-05-01
**Scope:** Reading of `workers/src/zip-baseline-fetcher.ts` and `workers/wrangler.toml` at oddkit `67741bd`.

---

## How the wiring actually works

### 1. The default knowledge base is an env var, not hardcoded

`workers/wrangler.toml`:

```toml
[vars]
DEFAULT_KNOWLEDGE_BASE_URL = "https://raw.githubusercontent.com/klappy/klappy.dev/main"
```

If you only deploy oddkit and don't pass anything else, this is what it reads.

### 2. Callers can override per-request via `knowledge_base_url`

The MCP tools accept a `knowledge_base_url` parameter (the README calls it `canon_url` — same thing). When you supply it, that URL becomes your "canon" and **wins arbitration** against the baseline (`workers/src/zip-baseline-fetcher.ts:arbitrateEntries` — canon entries override baseline entries with the same path/uri).

So at the API level: yes, oddkit can be pointed at any GitHub repo of markdown.

### 3. But klappy.dev is also a hardcoded "baseline" floor

Two things in the worker source are hardcoded to klappy.dev specifically:

- **The repo URL itself.** `const baselineRepoUrl = "https://github.com/klappy/klappy.dev"` appears literally in `zip-baseline-fetcher.ts` for commit-SHA resolution.
- **A `REQUIRED_BASELINE_PATHS` set of six files** that are *always* merged in even when you supply your own canon:

```
canon/values/orientation.md
canon/values/axioms.md
canon/meta/writing-canon.md
canon/constraints/definition-of-done.md
canon/constraints/telemetry-governance.md
odd/challenge/stakes-calibration.md
```

The default scope when you supply `knowledge_base_url` is `kb_with_required_baseline` — your repo plus those six files. You can opt back into the full merge with `include_full_baseline=true`.

---

## So, is the relationship hardcoded?

| Aspect | Hardcoded? |
|---|---|
| HTTP URL for default content | **No** — env var (`DEFAULT_KNOWLEDGE_BASE_URL`) |
| GitHub repo URL used to resolve commit SHAs | **Yes** — `https://github.com/klappy/klappy.dev` is a string literal |
| The six "required baseline" governance files | **Yes** — `REQUIRED_BASELINE_PATHS` in code, mirrored by `workers/baseline/MANIFEST.json` |
| Whether your own repo can override most content | **No** — full override via `knowledge_base_url` param, `include_full_baseline=true` for full merge |

---

## What this means in practice

- **For users of the public `oddkit.klappy.dev` deployment:** you can point oddkit at your own repo right now via `canon_url`/`knowledge_base_url`. Your content overrides klappy.dev's content for matching paths, but the six core governance files (axioms, definition-of-done, etc.) get blended in as a floor. The README says this honestly: *"By default, oddkit reads from klappy.dev. You can point it at any GitHub repo using the `canon_url` parameter."*

- **If you want a pristine, klappy.dev-free oddkit:** you'd need to fork the worker and:
  1. change `DEFAULT_KNOWLEDGE_BASE_URL` in `wrangler.toml`
  2. replace the literal `"https://github.com/klappy/klappy.dev"` in `zip-baseline-fetcher.ts`
  3. decide what your own required-baseline manifest is (or empty it out)

  Self-hosted on Cloudflare, this is maybe an hour of work.

---

## Why it's designed this way (my read)

The required-baseline floor is doing a deliberate job: it's the part of klappy.dev that encodes oddkit's own *epistemic posture* — axioms, definition-of-done, calibration. The design view is **"you can swap your domain knowledge, but the verification discipline travels with the tool."**

Whether that's the right call depends on whether you treat those six files as oddkit's *kernel* or as klappy.dev's *content* — the code currently says kernel. Worth flagging in the README since it's not loud there.

---

## See also

- [`docs/llm-memory-solutions-analysis.md`](./llm-memory-solutions-analysis.md) — broader comparison of oddkit/klappy.dev vs. Hindsight, Cognee, Graphiti, Letta, LangMem, Mem0, Zep
- `workers/src/zip-baseline-fetcher.ts` (in the oddkit repo) — the actual code paths described above
- `workers/baseline/MANIFEST.json` (in the oddkit repo) — canon-anchored mirror of `REQUIRED_BASELINE_PATHS`
