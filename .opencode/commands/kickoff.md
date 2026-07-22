---
description: "Kickoff"
argument-hint: [optional: project name and what we're building]
---

## Step 0 - figure out what we're building (do this FIRST, before anything else)

Look at what was passed in: `$ARGUMENTS`

- If it already clearly states a project name, a real description of what to build, AND the
  platform/stack (e.g. "React Native non-Expo", "Python backend service", "LLM agent pipeline"),
  confirm your understanding back to me in one or two sentences and proceed to the section below.
- If any of those three are missing or vague, **stop and ask me**:
  1. What are we building? (be as comprehensive as you want me to be - the more detail, the
     better Phase 1 will be)
  2. What platform/stack is this for? (e.g. mobile app - React Native/Expo/native, backend
     service, LLM/agent pipeline, web frontend, CLI tool, etc. - this changes what Phase 1's
     library/service analysis actually looks like)
  3. What short project name should identify it? (used for the `.workflow/<slug>/` folder, e.g.
     `article-quality-widget`)

  Do not guess or invent a feature, and do not assume a default platform/stack (do not assume
  React Native or anything else) to analyze. Do not proceed past this point until I've answered.

Also ask (can be part of the same question round): what services/infra already exist in this
project that Phase 1 should treat as "Existing Services" (e.g. a specific backend, database,
auth provider, third-party APIs already wired up) - versus what's clearly new and would count as
"Proposed Services". If I say I'm not sure or there's nothing existing yet, that's a valid
answer - don't invent a services list.

Once you know the platform/stack and existing services, use them consistently for the rest of
this workflow (Phase 1's library/package questions, Phase 2's architecture diagrams, etc. should
all be framed for this specific project, not a generic or assumed one).

## Step 1 - once we know what we're building

Here is the workflow we use for every feature, regardless of platform/stack:

- **Phase 1: Analyze** - requirements, libraries/packages, Existing vs. Proposed services, 5
  candidate development paths, ATAM + SQALE, final timeline.
- **Phase 2: Design** - Solution Proposal (low-fidelity, divergent) -> ATAM -> Quality
  Attribute Assessment (weighted scoring, may loop back to the proposal bucket) -> High-Fidelity
  Design (System Context + User Flow diagrams in Mermaid.js).
- **Phase 3: Implement** - build it, following the High-Fidelity Design.
- **Phase 4: Post-Mortem** - retrospective.

This is an **iterative model, not waterfall**: if a problem surfaces in a later phase but
actually belongs to an earlier phase (e.g. an Implement-phase bug that's really a Design flaw),
we circle back to that earlier phase to fix it there rather than patching around it downstream.

I want you to do a deep, meticulous, extensive analysis of this workflow before we touch Phase 1:

1. Evaluate how it aligns with professional industry practice (e.g. where it maps to standard
   models like Double Diamond, Set-Based Design, ATAM, SQALE - and where it deliberately departs
   from them, and why that's reasonable for a project this size).
2. Flag any real gaps or risks in the workflow itself, applied to what we're building
   specifically - not generic commentary.
3. Confirm you understand your role: you're my assistant through this, not an autopilot. After
   each phase/step, you produce results and stop - I evaluate them and decide whether we move
   on, adjust, or loop back. You never advance phases on your own.

## Step 2 - set up tracking

Once I've confirmed the analysis, create `.workflow/<slug>/` in this project (using the project name
we settled on in Step 0) and write `.workflow/<slug>/00-context.md` containing:

- Platform/stack
- What we're building (the description from Step 0)
- Existing Services (as I described them, or "none identified yet" if I said so)

Every later `/phase-*` command for this project should read this file first and use it instead
of assuming or hardcoding a platform or services list.

## Hard constraints (apply for the entire workflow, every phase)

- AVOID overengineering. PREFER simple, low-complexity implementations. GOAL: high
  maintainability.
- AVOID jargon when naming components/systems/functions - prefer plain language that states the
  actual intent, so any developer can understand it without translation.

## Output

Give me your analysis of the workflow in chat (no need to write this one to a file - it's a
one-time discussion, not a phase deliverable). End by telling me you're ready for
`/phase-1` when I am.

## Trigger
```
$ARGUMENTS = "optional: project name and what we're building"
```
