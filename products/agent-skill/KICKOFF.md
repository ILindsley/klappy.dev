# Agent-Skill — Attempt Kickoff

You are starting an attempt in the **agent-skill** lane.

---

## ⛔ STOP — READ THIS FIRST

**The #1 cause of failed attempts is writing outside the attempt folder.**

This is not a suggestion. This is not flexible. This is the rule that will fail your attempt regardless of how good your code is.

```
┌─────────────────────────────────────────────────────────────────────┐
│                     YOUR SANDBOX (Agent Authority)                   │
│                                                                     │
│   products/agent-skill/<version>/attempts/attempt-NNN/              │
│                                                                     │
│   You can write ANYTHING here. Go wild.                             │
│   ├── ATTEMPT.md, META.json, INSTRUCTIONS.md                        │
│   ├── src/           ← proposed configs, compile plans              │
│   ├── infra/         ← proposed code (e.g., compiler changes)       │
│   └── evidence/      ← proof it works (compiled packs, logs)        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     FORBIDDEN ZONE (Human Authority)                 │
│                                                                     │
│   ❌ infra/                    ← NEVER (even for "tests")           │
│   ❌ public/                   ← NEVER (even to verify)             │
│   ❌ products/agent-skill/README.md  ← NEVER (propose in ATTEMPT.md)│
│   ❌ products/agent-skill/<version>/PRD.md  ← NEVER (if exists)     │
│   ❌ products/website/         ← NEVER (wrong lane entirely)        │
│   ❌ latest/                   ← NEVER (human updates this)         │
│                                                                     │
│   These paths require HUMAN promotion. Not your job.                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## ⛔ AUTHORITY BOUNDARIES — What You CANNOT Do

| Action | Why It Fails Your Attempt |
|--------|---------------------------|
| Write to `infra/scripts/` | Infrastructure is human-promoted, not agent-deployed |
| Write to `public/` | Production deployment requires human review |
| Update `latest/` | Pointer updates are promotion actions |
| Claim CHAMPION status | Agent stops at CLOSED; human elevates to CHAMPION |
| Update lane README | Propose changes in ATTEMPT.md; human applies |
| Run tests that write outside sandbox | Even "tests" that cross boundaries are violations |
| Modify existing PRD | If PRD is wrong, FAIL and propose new version |

**"AI is an accelerator, not an authority."**

---

## ✅ PRE-FLIGHT CHECKLIST

Before you write a single line of code, verify you understand:

- [ ] My attempt folder is: `products/agent-skill/<version>/attempts/attempt-NNN/`
- [ ] ALL my file writes will be inside that folder
- [ ] If I need to change the compiler, I write to `attempt-NNN/infra/scripts/compile-pack.js`
- [ ] Compiled output goes to `attempt-NNN/evidence/`, NOT `public/`
- [ ] I will NOT update `latest/` — that's a human decision
- [ ] I will NOT claim CHAMPION — I stop at CLOSED
- [ ] If the PRD seems impossible, I FAIL early and document why

---

## Step 1: Find Active Version

Check `README.md` — the Versions table shows which version is **Active**.

Note the active version (e.g., `v1.4.1`). This is your target.

---

## Step 2: Read Context

Read these files in order:

1. `README.md` — Lane overview, version table, current champion
2. `CONTRACT.md` — Structure deviations from canon
3. `history/index.md` — Champion history and learnings
4. **CRITICAL**: `history/*.md` — Read the FAILED entries. Learn from the mistakes.
5. `<active-version>/PRD.md` — The PRD you're executing

---

## Step 3: Review Prior Art (MANDATORY)

**This is not optional.** Read the learnings from previous attempts:

| Path | What To Learn |
|------|---------------|
| `history/H0002-v1.2-failed.md` | Lane isolation violations |
| `history/H0005-v1.2.2-failed.md` | ODD violations, ephemeral artifacts |
| `history/H0009-v1.4-attempt-001-failed.md` | Authority violations |
| `v1.4.1/attempts/attempt-001/LEARNINGS.md` | Containment boundary violations |

If you see patterns in past failures that relate to your task, **stop and plan around them**.

---

## Step 4: Create Attempt Folder

Create: `<active-version>/attempts/attempt-NNN/`

Where NNN is the next number (check existing folders).

### Required Structure

```
attempt-NNN/
├── ATTEMPT.md              # Closure record (status, outcome, learnings)
├── META.json               # Machine-readable metadata
├── INSTRUCTIONS.md         # Generated elicitation guide (if applicable)
├── src/                    # Proposed configs, compile plans
│   └── compile-plan.json   # (if modifying compilation)
├── infra/                  # Proposed code changes
│   └── scripts/
│       └── compile-pack.js # (if modifying compiler — THIS IS A PROPOSAL)
└── evidence/               # Proof of work
    ├── compile-output.txt  # Logs
    ├── prd-guide-pack.md   # Compiled pack (LOCAL COPY, not deployed)
    └── *.md                # Verification evidence
```

---

## Step 5: Execute (Inside Your Sandbox)

Follow the PRD's Definition of Done exactly.

### If You Need To Modify the Compiler

```bash
# WRONG: This violates containment
node infra/scripts/compile-pack.js --output public/

# RIGHT: Test your local copy
node products/agent-skill/<version>/attempts/attempt-NNN/infra/scripts/compile-pack.js \
  --output products/agent-skill/<version>/attempts/attempt-NNN/evidence/
```

### If You Need To Test Compiled Output

Write to `attempt-NNN/evidence/`. Verify content there. Do NOT deploy to `public/`.

### If You Need To Update Lane README

Document the proposed changes in `ATTEMPT.md`. The human applies them during promotion.

---

## Step 6: Close (NOT Champion)

Update `ATTEMPT.md` with:

- **Status**: CLOSED (not CHAMPION — that's not your call)
- Outcome summary
- Evidence produced
- Self-audit results
- Learnings

**You do NOT:**
- Add entry to `history/` (human does this)
- Update `latest/` (human does this)
- Mark status as CHAMPION (human does this)

---

## Common Violations (Don't Be This Agent)

### Violation 1: Writing compiler to infra/

```diff
- infra/scripts/compile-pack.js          ← VIOLATION
+ attempt-NNN/infra/scripts/compile-pack.js  ← CORRECT (proposal)
```

**Why it fails**: You deployed code without human review.

### Violation 2: Writing compiled output to public/

```diff
- public/agent-skill/v1.4/prd-guide-pack.md  ← VIOLATION
+ attempt-NNN/evidence/prd-guide-pack.md     ← CORRECT (evidence)
```

**Why it fails**: Production deployment is a promotion action.

### Violation 3: Updating latest/

```diff
- public/agent-skill/latest/prd-guide-pack.md  ← VIOLATION
```

**Why it fails**: Pointer updates require human decision.

### Violation 4: Claiming CHAMPION

```diff
- Status: CHAMPION    ← VIOLATION
+ Status: CLOSED      ← CORRECT (human elevates to Champion)
```

**Why it fails**: "AI is an accelerator, not an authority."

### Violation 5: Test that writes outside sandbox

```javascript
// VIOLATION: Even a "test" that writes outside is a violation
fs.writeFileSync('products/website/dist/packs/test.md', content);

// CORRECT: Mock structure inside your sandbox
fs.writeFileSync('attempt-NNN/mock-dist/packs/test.md', content);
```

---

## If PRD Seems Problematic

**Don't bend rules to make it work. Don't steer a miss.**

1. STOP immediately
2. Document the issue in `LEARNINGS.md`
3. Mark attempt as FAILED with clear explanation
4. Propose what a new PRD version should address

A FAILED attempt with clear learnings is more valuable than a "success" that violates constraints.

---

## Production Release (Human Action — Not Yours)

**You do NOT do this. The human does.**

After human review and promotion:

1. Human copies proposed changes from attempt folder to real locations
2. Human fast-forwards `prod` to `main`
3. Human verifies HTTP 200 on production domain
4. Human updates lane README to mark version as Champion

---

## Final Reminder

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   Your world is:                                           │
│   products/agent-skill/<version>/attempts/attempt-NNN/     │
│                                                            │
│   Everything else is someone else's.                       │
│                                                            │
│   "AI is an accelerator, not an authority."                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```
