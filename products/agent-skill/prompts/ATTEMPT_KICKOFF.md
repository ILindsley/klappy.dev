# Agent Skill Lane — Attempt Kickoff

Use this prompt when starting a new attempt for the agent-skill lane.

---

## Instructions

Copy everything below this line and paste it into a new conversation with your AI agent.

---

## Kickoff Prompt

```markdown
# Agent-Skill Lane Attempt

## Context

I'm starting an attempt for the **agent-skill** lane in the klappy.dev repository.

This lane produces compiled packs for AI agent consumption. The primary deliverable is a portable context artifact that enables any LLM to guide humans through ODD-aligned PRD creation.

## Lane Structure

This lane uses a **version-first** folder structure:
```

products/agent-skill/
├── README.md # Lane overview, file index
├── CONTRACT.md # Formal structure/deviations from canon
├── history/ # Champion history, failures, learnings
├── ROADMAP.md # Vision document
├── prompts/
│ └── ATTEMPT_KICKOFF.md # This file
├── v1.1/ # Champion version
│ ├── PRD.md # Frozen PRD
│ ├── src/ # Source files
│ ├── dist/ # Compiled output
│ └── attempts/ # Attempt history
├── v1.2/ # Failed version
│ ├── PRD.md # Frozen PRD
│ └── attempts/ # Failed attempt evidence
└── v1.2.1/ # Current version
└── PRD.md # Active PRD

```

## Your Task

1. **Read the lane documentation**:
   - `products/agent-skill/README.md` — Lane overview
   - `products/agent-skill/CONTRACT.md` — Structure deviations from canon
   - `products/agent-skill/history/` — Champion history and learnings

2. **Identify the active PRD**:
   - Check which version has an active (non-frozen) PRD
   - Currently: `v1.2.1/PRD.md`

3. **Read the PRD thoroughly**:
   - Understand the objective
   - Note success criteria and definition of done
   - Review constraints

4. **Check related documents**:
   - Previous champion: `v1.1/attempts/attempt-001/ATTEMPT.md`
   - Previous failure: `v1.2/attempts/attempt-001/LEARNINGS.md`
   - Lane roadmap: `ROADMAP.md`

5. **Create attempt folder**:
   - Location: `v1.2.1/attempts/attempt-001/`
   - Required files:
     - `ATTEMPT.md` — Closure record (status, outcome, evidence)
     - `META.json` — Machine-readable metadata

6. **Execute the PRD**:
   - Follow definition of done
   - All work stays within the attempt folder until promotion
   - Test execution must not cross lane boundaries

7. **Produce evidence**:
   - Place in `evidence/` subfolder
   - Include screenshots, logs, test output as appropriate

8. **Complete self-audit**:
   - Review against Canon self-audit checklist
   - Document tradeoffs and risks

## Critical Rules

1. **Lane Isolation**: Do NOT modify files outside `products/agent-skill/`
2. **Version Isolation**: Work within the specific version folder
3. **Attempt Containment**: All changes go in the attempt folder until promotion
4. **Evidence Required**: No assertions without proof
5. **PRD Immutability**: If PRD has a problem, create a NEW version (don't modify frozen PRDs)

## When Complete

Update `ATTEMPT.md` with:
- Status (CHAMPION, CLOSED, or ABANDONED)
- Outcome summary
- Evidence produced
- Self-audit results
- Learnings

If championed, add entry to `history/` folder.
```

---

## Notes for Humans

Before starting an attempt:

1. Verify you're working on the correct PRD version
2. Check ROADMAP.md for context on what this version is trying to achieve
3. Review history/ folder for learnings from previous attempts
4. Ensure you understand the lane's CONTRACT.md (structure deviations)

If the PRD seems problematic:

- Don't try to "make it work" by bending rules
- Document the issue in your attempt's LEARNINGS.md
- Mark the attempt as FAILED with clear explanation
- Propose a new PRD version to address the issue
