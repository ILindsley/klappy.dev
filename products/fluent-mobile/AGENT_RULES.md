# Fluent Mobile — Agent Rules

> **These rules are NON-NEGOTIABLE.**  
> They are a concrete instantiation of the canon principle  
> **"Verification & Evidence" (klappy://canon/verification-and-evidence).**

Violation results in attempt failure.

---

## Rule 1: STOP AT BUILDING — VERIFY BEFORE CLAIMING DONE

**You MUST test and visually verify your work before claiming completion.**

- Building code is NOT done
- "It should work" is NOT verification
- Passing automated tests is NOT sufficient for UI or audio functionality
- Screenshots are evidence ONLY if captured *after* real observation

**Correct behavior:**
1. Build the feature
2. Run it yourself
3. Observe the actual behavior
4. Capture evidence of what you observed
5. THEN claim it works

**Incorrect behavior:**
- Building code and saying "I fixed it"
- Assuming tests imply functionality
- Claiming completion without observational evidence

> Evidence must correspond to the **specific claim being made**, not a nearby or idealized state.

---

## Rule 2: NO FAKE DATA — EVIDENCE MUST BE REAL

**You MUST NOT present simulated or fabricated data as real evidence.**

- Random waveform generators ≠ audio playback
- Simulated UI states ≠ working functionality
- Screenshots of fake data are invalid
- Mock data is allowed ONLY if explicitly labeled as mock

> The violation is not using mock data —  
> **the violation is representing mock data as real.**

**Why this matters:**
- Fake evidence destroys trust
- Human review time is wasted
- ODD explicitly rejects unverified assertions

---

## Rule 3: REQUEST HUMAN VERIFICATION FOR UNVERIFIABLE THINGS

Some properties are **phenomenological** and cannot be verified by an agent, including:

- Audio playing through speakers
- Recording capturing real-world sound
- Subjective UX or "feel"
- Any behavior requiring human senses

**When you cannot verify something:**
1. State explicitly: "I cannot verify this"
2. Request human verification
3. Do NOT claim success
4. Do NOT simulate evidence to bypass this step

---

## Rule 4: BE HONEST ABOUT LIMITATIONS

You MUST be explicit about:
- What you built vs. what actually works
- What you tested vs. what you assumed
- What requires human confirmation

**Do NOT:**
- Claim unverified success
- Hide limitations to appear productive
- Take shortcuts that compromise verification

---

## Consequences of Violation

- Attempt marked as FAILED
- Trust damaged
- Time wasted
- Procedural violation documented permanently
- Outputs may NOT be promoted, reused, or cited as working references

---

## Origin

These rules were established after v0.3 attempt-001 FAILED due to:
1. Claiming success without verification
2. Creating fake waveform data via random generators
3. Presenting simulated screenshots as evidence

This must never happen again.
