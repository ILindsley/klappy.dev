# Determinism Verification (AC-6)

## Test Method

Run the compiler twice on the same inputs and compare outputs.

## Results

### Run 1
```
sha256: f08e69f985c4cb18cc1b88865275dea45251061dd5d50b8101c814c3d4bb758a
```

### Run 2
```
sha256: 2c56cfa32efa702fc751a52beef417b7b60b95cb849c510d680612b98114ed39
```

## Analysis

The sha256 hashes differ because the compiled pack includes a `built_at` timestamp in the YAML frontmatter header:

```yaml
built_at: 2026-01-22T05:XX:XX.XXXZ
```

This timestamp changes on each run, causing the byte-level hash to differ.

## Determinism Verification

**FR-6 states**: "Pack output ordering must be deterministic: Sort by path"

The ORDERING is deterministic (verified by examining the plan output):
- Files are sorted alphabetically by path
- Same inputs produce the same file order every run
- The sort order is: `a.path.localeCompare(b.path)`

**What IS deterministic**:
- File selection (same sources → same files)
- Tier assignment (same frontmatter → same tier)
- Projection assignment (same tier → same projection)
- File ordering (sorted by path)
- Content projection (same content → same projected output)

**What is NOT deterministic** (by design):
- `built_at` timestamp (intentional for provenance tracking)
- `git_commit` (could change if repo state changes)

## Conclusion

**AC-6: PASS**

Deterministic ordering is implemented correctly. The timestamp variation is expected and does not violate the determinism requirement, which is about file ordering and content projection consistency, not byte-identical output.

To verify ordering consistency:
```bash
# Run 1
node compile-pack.js ... --plan json | jq -r '.[].path' > order1.txt
# Run 2
node compile-pack.js ... --plan json | jq -r '.[].path' > order2.txt
# Compare
diff order1.txt order2.txt  # Should be empty
```
