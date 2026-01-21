# 📝 Document Inclusion Audit Checklist

Quick reference checklist for evaluating documents.

---

## Book Export Decision Tree

```
Is this file a markdown document (.md)?
├── NO → EXCLUDE (book is markdown only)
└── YES → Continue
    │
    Is it in /public/content/?
    ├── YES → EXCLUDE (duplicate of source)
    └── NO → Continue
        │
        Is it in /node_modules/, /.git/, /dist/, /build/?
        ├── YES → EXCLUDE (build/dependency artifact)
        └── NO → Continue
            │
            Is it in /**/attempts/**?
            ├── YES → Is it ATTEMPT.md, EVIDENCE.md, or META summary?
            │   ├── YES → EVALUATE (may include sealed records)
            │   └── NO → EXCLUDE (implementation artifacts)
            └── NO → Continue
                │
                Is it in /**/src/**?
                ├── YES → EXCLUDE (source code, not docs)
                └── NO → Continue
                    │
                    Is it in /products/*/v*/**?
                    ├── YES → EXCLUDE (version-specific implementation)
                    └── NO → Continue
                        │
                        Is it in /.cursor/plans/?
                        ├── YES → EXCLUDE (ephemeral plans)
                        └── NO → INCLUDE ✅
```

---

## Context Pack Inclusion Matrix

| Document Type | visitor | author | agent-core | dev-peer |
|---------------|---------|--------|------------|----------|
| **ODD Manifesto** | ✅ | ✅ | ✅ | ✅ |
| **ODD Appendices** | ❌ | ✅ | ⚠️ select | ✅ |
| **ODD Decisions** | ❌ | ⚠️ D0001 only | ❌ | ✅ |
| **Canon README** | ✅ | ✅ | ✅ | ✅ |
| **Canon Core** | ❌ | ✅ | ✅ | ✅ |
| **Canon Changelog** | ❌ | ❌ | ❌ | ✅ |
| **Docs README** | ✅ | ✅ | ✅ | ✅ |
| **Docs Appendices** | ❌ | ⚠️ select | ⚠️ select | ✅ |
| **Docs Decisions** | ❌ | ❌ | ⚠️ select | ✅ |
| **Lane PRDs** | ⚠️ summary | ✅ | ✅ | ✅ |
| **Attempt Workflows** | ❌ | ✅ | ✅ | ✅ |
| **Agent Kickoff** | ❌ | ❌ | ✅ | ✅ |
| **Interfaces/Contracts** | ❌ | ⚠️ select | ✅ | ✅ |
| **Visual System** | ❌ | ⚠️ select | ❌ | ✅ |
| **About Pages** | ✅ | ✅ | ❌ | ✅ |
| **Projects** | ✅ | ✅ | ❌ | ✅ |

Legend:
- ✅ = Include
- ❌ = Exclude
- ⚠️ = Include selectively (see notes)

---

## Staleness Indicators

A document may be stale if:

- [ ] References paths that no longer exist
- [ ] References `/canon/odd/` instead of `/odd/`
- [ ] Uses deprecated terminology (see TRUTH_MAP.md)
- [ ] Has frontmatter with old URIs
- [ ] Mentions epoch E0001 without historical context
- [ ] References single-PRD model without lane context
- [ ] Has broken markdown links
- [ ] Mentions removed CLI commands (attempt:reserve, attempt:reset)

---

## Misclassification Indicators

A document may be in the wrong tier if:

### Should be ODD (currently elsewhere):
- [ ] Describes universal principles applicable to any project
- [ ] Would still be true if klappy.dev didn't exist
- [ ] Contains no repo-specific paths or commands

### Should be Canon (currently elsewhere):
- [ ] Defines rules shared across all product lanes
- [ ] Is referenced by multiple lanes as authoritative
- [ ] Changes would affect all products

### Should be Docs (currently elsewhere):
- [ ] Contains CLI commands specific to this repo
- [ ] References Cloudflare, specific branch names, or lane names
- [ ] Describes how *this* instance implements a concept

---

## Redundancy Indicators

A document may be redundant if:

- [ ] Content is duplicated in `/public/content/` (expected)
- [ ] Content is duplicated in another source file (NOT expected)
- [ ] Two files define the same concept differently (conflict)
- [ ] A file restates another file without adding value

---

## Quick Quality Checks

For each document, verify:

- [ ] **Has frontmatter?** (uri, title, audience, tier, stability, tags)
- [ ] **Has emoji headers?** (consistent with docs style)
- [ ] **Has "See Also" section?** (cross-references to related docs)
- [ ] **References correct tier?** (ODD vs Canon vs Docs)
- [ ] **Uses absolute paths?** (e.g., `/odd/` not `odd/` or `../odd/`)

---

## Audit Tracking Template

Copy this for each document:

```markdown
## [path/to/file.md]

- **Tier:** [ ] ODD  [ ] Canon  [ ] Docs  [ ] Other
- **Has frontmatter:** [ ] Yes  [ ] No
- **Has emoji headers:** [ ] Yes  [ ] No  [ ] N/A

### Book Export
- **Current:** [ ] Included  [ ] Excluded
- **Should be:** [ ] Include  [ ] Exclude
- **Change needed:** [ ] Yes → [action]  [ ] No

### Context Packs
| Pack | Current | Should | Change |
|------|---------|--------|--------|
| visitor | [ ] In  [ ] Out | [ ] In  [ ] Out | [ ] Yes [ ] No |
| author | [ ] In  [ ] Out | [ ] In  [ ] Out | [ ] Yes [ ] No |
| agent-core | [ ] In  [ ] Out | [ ] In  [ ] Out | [ ] Yes [ ] No |

### Issues
- [ ] Stale content: [details]
- [ ] Misclassified: [should be X]
- [ ] Redundant: [duplicates Y]
- [ ] Broken refs: [list]
- [ ] Missing frontmatter
- [ ] Other: [details]

### Recommendation
[No change | Move to X | Update content | Add to pack Y | Remove from pack Z | Delete]
```
