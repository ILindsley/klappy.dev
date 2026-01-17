---
contract: attempt-cli
version: 2.0.0
status: active
---

# Attempt CLI Contract (attempt-cli@2.0.0)

This contract defines the stable CLI surface and output artifacts for running attempts.

It exists to prevent drift between:
- human procedure docs
- agent prompts
- actual CLI implementation

---

## Compatibility Promise

If documentation or prompts reference `attempt-cli@2.x`, the repository must provide commands and outputs compatible with this contract.

---

## Required Commands (2.x)

### `attempt:cleanup`
Purpose: prune stale worktrees/branches and restore epistemic cleanliness.

### `attempt:register`
Purpose: register a run and write `.attempt.json` with provenance.

Required flags:
- `--lane <lane>`
- `--tool <tool>`
- `--agent <id>`
- `--model <name>`

### `attempt:nuke`
Purpose: wipe disposable implementation state for a clean attempt.

### `attempt:finalize`
Purpose: assign attempt numbers after runs are complete and move `_runs/` into `attempt-00N/`.

### `attempt:promote`
Purpose: promote the champion attempt for a given lane.

---

## Required Outputs

### `.attempt.json`
Written at registration time.

MUST include:
- `lane`
- `prd_path`
- `prd_version`
- `run_id`
- `runs_dir`
- provenance: `tool`, `agent`, `model`
- `git`: `branch`, `head_sha`

### `META.json`
Written when an attempt is sealed/finalized.

MUST include:
- `lane`
- `prd_version`
- `attempt` (e.g. `001`)
- `sealed_commit`
- provenance fields
- optional deploy evidence (preview URL)

---

## Breaking Change Definition (MAJOR)

Requires MAJOR bump if:

- required flags change or are removed
- `.attempt.json` or `META.json` required fields are renamed or removed
- commands are renamed

---

## Verification Rules (for tooling)

A verifier for `attempt-cli@2.0.0` MUST check:

- required commands exist (by invoking help or command registry)
- `.attempt.json` contains required fields
- finalized attempts contain `META.json` with required fields
