# Learnings: Agent-Skill v1.2.1 Attempt-001

## In-Progress Observations

### Multi-Lane Deployment Scaling Problem

**Observed**: 2026-01-21

Each product lane having its own Cloudflare Pages deployment creates a scaling issue:

1. **Serial builds**: CF Pages builds are not parallel — each deployment waits for the previous
2. **Compounding wait times**: Each new lane adds another deployment to the queue
3. **Feedback loop degradation**: As lanes grow, commit-to-deploy time increases linearly

**Current state**:
- `website` lane → CF Pages project
- `agent-skill` lane → CF Pages project (being added)
- Future lanes (mcp, bootloader, etc.) → more CF projects

**Impact**:
- Developer waits longer after each push
- Branch preview feedback slows down
- Discourages small, frequent commits

**Potential solution**: Single deployment of `/public`

Instead of N CF projects (one per lane), use ONE CF project that publishes `/public`:

```
Single CF Project: klappy-public
├── Publish directory: public/
├── Contains:
│   ├── website files (index.html, etc.)
│   ├── agent-skill/ (promoted packs)
│   ├── mcp/ (future)
│   └── bootloader/ (future)
```

**Benefits**:
- One build per push, regardless of lane count
- Simpler operational model
- Promotion-time copy to `/public/<lane>/` enforces only-championed-content rule

**Tradeoffs**:
- Lanes share a deployment surface (less isolation)
- Need clear promotion workflow to copy from `products/<lane>/dist/` → `public/<lane>/`
- Website lane would need to coexist in `/public`

**Recommendation**: Prioritize exploring this architecture before adding more lane deployments. The pain will only grow.

---

## Learnings to Add After Attempt Completion

(This section will be populated when the attempt is sealed)
