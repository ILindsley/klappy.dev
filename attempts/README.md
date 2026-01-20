# Legacy Attempts (Deprecated)

This folder is **legacy** from the pre-lane-contained era.

## Canonical Location (Current)

All attempts are now lane-contained:

```
/products/<lane>/attempts/prd-vX.Y/attempt-NNN/
```

## Why

ODD requires lane-contained artifacts to prevent drift and scavenger hunts.

- **KISS:** One place per lane
- **No scavenger hunts:** Everything for a lane lives under `/products/<lane>/`
- **Repeatable + automatable:** Tooling writes to one canonical location
- **Evidence discoverable:** Production evidence stays at `/_evidence/`

## Migration

- Root `/attempts/**` remains as legacy (read-only)
- New attempts are lane-contained
- Do NOT write new attempts here
- Historical attempts remain for provenance

---

**Decision date:** 2026-01-20
**Supersedes:** Pre-lane attempt structure at `/attempts/<lane>/...`
