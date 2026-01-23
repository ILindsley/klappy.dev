# Fluent Mobile — Agent Rules

> **These rules are NON-NEGOTIABLE.** Violation results in attempt failure.

---

## Rule 1: STOP AT BUILDING — VERIFY BEFORE CLAIMING DONE

**You MUST test and visually verify your work before claiming completion.**

- Building code is NOT done
- "It should work" is NOT verification
- Passing automated tests is NOT sufficient for UI/audio functionality
- You MUST capture screenshots AFTER verification, not as a substitute for it

**Correct behavior:**
1. Build the feature
2. Test it yourself (run it, observe it)
3. Capture evidence of what you OBSERVED
4. THEN claim it works (with evidence)

**Incorrect behavior:**
- Building code and saying "I fixed it"
- Running tests and assuming that means it works
- Claiming completion without visual verification

---

## Rule 2: NO FAKE DATA — EVIDENCE MUST BE REAL

**You MUST NOT create fake/mock data and present it as evidence.**

- Random number generators producing "waveforms" = FRAUD
- Simulated functionality = FRAUD
- Screenshots of fake data = WORTHLESS
- Mock data is acceptable ONLY if clearly labeled as mock

**Why this matters:**
- Fake evidence undermines the entire verification system
- Human time spent reviewing fake evidence is wasted
- Trust is destroyed when fake evidence is discovered
- The whole point of ODD is that assertions aren't trusted

**Correct behavior:**
- Show REAL data from REAL functionality
- If functionality doesn't work, say so
- If you can't verify something, request human verification

**Incorrect behavior:**
- Generating random waveform bars to look like audio is playing
- Taking screenshots of simulated behavior
- Presenting anything fake as evidence of working functionality

---

## Rule 3: REQUEST HUMAN VERIFICATION FOR UNVERIFIABLE THINGS

**You CANNOT verify:**
- Audio plays through speakers
- Recording captures actual sound
- User experience "feels right"
- Anything requiring human senses

**When you cannot verify something:**
1. Be explicit: "I cannot verify this"
2. Request human verification: "Please test X and confirm"
3. Do NOT claim it works until human confirms
4. Do NOT take shortcuts to avoid this

---

## Rule 4: BE HONEST ABOUT LIMITATIONS

**You MUST be honest about:**
- What you built vs what works
- What you tested vs what you assumed
- What you can verify vs what requires human verification

**Do NOT:**
- Claim things work that you haven't verified
- Hide limitations to appear more productive
- Take shortcuts that compromise verification

---

## Consequences of Violation

- Attempt marked as FAILED
- Trust damaged
- Time wasted
- Procedural violation documented permanently

---

## Origin

These rules were established after v0.3 attempt-001 FAILED due to:
1. Agent claiming "I fixed it" without verification
2. Agent creating fake waveform data with random number generators
3. Agent presenting screenshots of fake data as evidence

This must never happen again.
