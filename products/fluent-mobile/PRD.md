# Fluent Mobile PRD — Active Version

**Current Active PRD:** [v0.2](attempts/prd-v0.2/PRD.md)

---

## PRD Versions

| Version | Status | Location | Attempts |
|---------|--------|----------|----------|
| **v0.2** | **ACTIVE** | [attempts/prd-v0.2/PRD.md](attempts/prd-v0.2/PRD.md) | None yet |
| v0.1 | CLOSED | [attempts/prd-v0.1/PRD.md](attempts/prd-v0.1/PRD.md) | [001](attempts/prd-v0.1/attempt-001/) (SUCCESS) |

---

## How This Works

Each PRD version is **self-contained** with its attempts:

```
attempts/
├── prd-v0.1/
│   ├── PRD.md              # Frozen PRD for v0.1
│   ├── README.md           # Attempt index
│   └── attempt-001/        # Sealed attempt
│
└── prd-v0.2/
    ├── PRD.md              # Active PRD for v0.2
    ├── README.md           # Attempt index
    └── attempt-NNN/        # Future attempts
```

**Why this structure:**
- PRD and its attempts live together (self-contained)
- Easy to understand what PRD an attempt was made against
- Archived versions remain accessible with full context
- Similar to how product lanes work

---

## Starting an Attempt

1. Read the active PRD: `attempts/prd-v0.2/PRD.md`
2. Read the kickoff: `KICKOFF.md`
3. Read the instructions: `INSTRUCTIONS.md`
4. Create attempt folder: `attempts/prd-v0.2/attempt-NNN/`

---

## Lane Documents

| Document | Purpose |
|----------|---------|
| [KICKOFF.md](KICKOFF.md) | How to start an attempt |
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | Field testing guidance |
| [README.md](README.md) | Lane overview |
