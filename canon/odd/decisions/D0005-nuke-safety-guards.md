# D0005 — Nuke Command Safety Guards

## Decision

The `attempt:nuke` command has branch-aware safety guards: refuses on `prod`, warns and requires `--force` on `main`, allows freely on `attempt/*` branches.

## Status

**Active**

## Why

- Agents were accidentally nuking production code by running reset on `main`
- Need explicit friction before destructive operations on important branches
- `attempt/*` branches are ephemeral by design — no protection needed
- `prod` is sacred — never allow accidental destruction
- `main` is valuable but restorable — allow with confirmation

## Consequences

- ✅ Production (`prod`) cannot be accidentally nuked
- ✅ Main requires explicit `--force` to nuke
- ✅ Attempt branches can be freely nuked (that's their purpose)
- ⚠️ Agents on wrong branch will see errors (intentional friction)
- ⚠️ Human must intervene if nuke is needed on protected branches

## Implementation

- Script: `/infra/scripts/attempt-cli.js` (`cmdNuke` checks branch before proceeding)

### Branch Safety Rules

| Branch | Nuke Allowed? | Behavior |
|--------|---------------|----------|
| `prod` | ❌ Never | Hard fail with explanation |
| `main` | ⚠️ With `--force` | Warning, requires explicit override |
| `attempt/*` | ✅ Always | Proceeds immediately |
| Other | ⚠️ With `--force` | Warning, requires explicit override |

### Protected Paths (Never Deleted)

Even during nuke, these are never touched:

- `/canon/`
- `/docs/`
- `/attempts/`
- `/infra/`
- `/public/`
- `/.cloudflare/`
- `/.github/`

## Evidence

- Commit: `15b5c2e` — "feat: environment hardening - prod branch, nuke safety, promote to prod"
- Commit: `0cce06d` — "fix: protect production - nuclear reset on main skips /src nuke by default"
- Problem observed: Running `attempt:reset` on `main` deleted production `/src`
