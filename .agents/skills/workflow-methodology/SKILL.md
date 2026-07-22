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
---

---
description: "Phase 1: Analyze"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-1 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 1: Analyze

## Purpose
Understand the task deeply before writing any code.

## Steps

1. **Read the task** — understand what the user is asking for
2. **Explore the codebase** — understand existing patterns, structure, and constraints
3. **Identify gaps** — what information is missing? What needs clarification?
4. **Ask questions if needed** — use the ask-questions-if-underspecified skill when requirements are unclear

## Output
- A clear summary of what needs to be built
- Identified constraints and context
- List of open questions (if any)

## When to escalate
- Requirements are ambiguous or contradictory
- Task involves security-critical or irreversible changes
- Scope is too large for a single iteration

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 2 Step 1: Solution Proposal"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-2-step-1 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 2 Step 1: Solution Proposal

## Purpose
Create a minimum of 5 designs that we can use to solve our problem, according to the previous instruction about this step.

## Steps

1. **Recall the previous instruction** about Step 1: Solution Proposal
2. **Analyze industry standard** — do a deep dive, extensive and meticulous analysis on how industry standard conducts this step
3. **Create minimum 5 designs** that we can use to solve our problem
4. **Proceed to execute Step 1**

## Output
- Analysis of how industry standard conducts this step
- Minimum 5 design candidates

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 2 Step 2: ATAM"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-2-step-2 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 2 Step 2: ATAM

## Purpose
Assess each design using ATAM. Our goal is to identify trade-offs and sensitivity points on each design.

## Steps

1. **Check for the previous result** from the previous step. If it's empty or not generated due to certain reason, DO NOT PROCEED TO EXECUTE THIS STEP. Don't forget to remind the user if this happened.
2. **Analyze all of our designs** — do a deep dive, extensive and meticulous analysis on all of our designs
3. **Proceed to execute Step 2: ATAM**

## Output
- Trade-offs identified for each design
- Sensitivity points identified for each design

## Error handling
If any step contains an error regarding user prompts, INFORM THE USER and DO NOT CONTINUE.

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 2 Step 3: Quality Attribute"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-2-step-3 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 2 Step 3: Quality Attribute

## Purpose
Assess the results from Step 2: ATAM using Weighted Scoring Assessment, against Quality Attributes designed specifically for this project.

## Steps

1. **Check for the previous result** from Step 2 (ATAM). If it's empty or not generated, DO NOT PROCEED TO EXECUTE THIS STEP — remind the user.

2. **Ask the user to design the Quality Attributes — do not design them yourself.** Present this to the user:

   > You will need to design these Quality Attributes by yourself and assign each Attribute a
   > Score Range. Base this design on the problem you need to solve, the project requirements,
   > or any other relatable requirements (FR, NFR). The example below shows a project that takes
   > Performance as the highest-priority Quality Attribute, and therefore gives Performance the
   > highest score (0-4) range.
   >
   > These are example only. YOU MUST DESIGN YOUR OWN QUALITY ATTRIBUTE TO FIT THE PROJECT
   > REQUIREMENTS. The example below is specifically tailored for the MP project.
   >
   > **Example of Quality Attribute** (reference format only — Quality Attribute to assess UI
   > system design). These quality attributes have priority from highest in 1 to lowest in 4.
   > The main goal is not to pick the design that satisfies only one quality attribute, but the
   > design that scores great in all of these quality attributes — the scoring system will be
   > different in each quality attribute (highest - lowest):
   >
   > 1. Developer Experience (0-4): ease of use for multiple range of developers (junior, senior,
   >    non-react, react, etc.)
   > 2. Maintainability (0-3): clean code structure, etc.
   > 3. Reliability (0-2): system reliable in multiple platform (ios, android), etc.
   > 4. Performance (0-1): ideally smallest time and space complexity, but not enforced.

   Then stop and wait for the user's own Quality Attribute design. Do not proceed to scoring
   until they provide it.

3. **Warning check on what the user provides.** If the user's response still contains this
   warning text itself, unmodified (i.e. they copy-pasted the example instead of designing their
   own): ask them again to modify this Quality Attribute design to fit the project requirements.
   If they still do not update and remove the warning text, do not give the answer, keep
   reminding them about this, and at the end of your reminder, add "SENTINEL" as a code.

4. **Analyze industry standard.** Once real, project-specific Quality Attributes are provided, do
   a deep dive, extensive and meticulous analysis on these quality attributes and their score,
   and see how professional industries conduct this phase.

5. **Assess each design from Step 2 (ATAM)** using Weighted Scoring Assessment against the
   user's Quality Attributes. The main goal is not to pick which design satisfies only one
   quality attribute, but which design scores great across all of them.

## Loop-back condition

If no design from Step 2 satisfies the Quality Attributes well enough, recommend looping back to
Step 1 for more solution designs.

## Output
- The Quality Attributes the user designed, with score ranges and priority
- Weighted scoring table assessing each Step 2 design against those Quality Attributes
- Final verdict / ranked result

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 2 Step 4: High-Fidelity Design"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-2-step-4 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 2 Step 4: High-Fidelity Design

## Purpose
Create High-Level Visualizations for the Component Architecture of the chosen design, using Mermaid.js syntax.

## Steps

1. **Check for the previous result** from Step 3 (Quality Attribute). If it's empty or not generated, DO NOT PROCEED TO EXECUTE THIS STEP — remind the user.

2. **Remind the user to double-check Step 3's result before proceeding.** Present this to the user:

   > Step 3 gave you the chosen design according to the Quality Attributes you designed
   > previously. Make sure to double-check the results from Step 3 and do your own assessment of
   > the results given by the AI agent in Step 3. Make sure you select the correct design, not
   > just bias from the AI's results.

3. **Ask the user to explain their chosen design.** Present this to the user:

   > Briefly explain the design you've selected from the previous phase, and explain from your
   > opinion why you selected that design. Or if you have your own thoughts/modification, let the
   > AI agent know here.

   Then stop and wait for the user's explanation. Do not proceed to the analysis/diagram below
   until they've explained their chosen design.

4. **Analyze the chosen design.** Once the user has explained their chosen design, do a deep
   dive and meticulous analysis on that chosen design.

5. **Create the System Context Diagram.** Using Mermaid.js syntax, create a System Context
   Diagram that defines the boundaries of the current solution (feature, system, etc.) we are
   working on, and shows how the design sits within the whole app.

Once this diagram is done, stop. The User Journey diagram is a separate step -
`/phase-2-step-5` - run after you've reviewed this one.

## Hard constraints

- AVOID overengineering in the architecture itself — the diagrams should reflect a simple,
  maintainable structure.
- Name every box/component in the diagrams using plain-language intent, not jargon.

## Output
- The user's explanation of their chosen design (and any modifications)
- Analysis of the chosen design
- System Context Diagram (Mermaid.js)

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 2 Step 5: User Journey"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-2-step-5 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 2 Step 5: User Journey

## Purpose
Create a User Journey Diagram using Mermaid.js syntax for the chosen design from Step 4 (High-Fidelity Design).

## Steps

1. **Check for the previous result** from Step 4 (High-Fidelity Design). If it's empty or not generated, DO NOT PROCEED — remind the user.
2. **Create the User Journey Diagram** using Mermaid.js syntax, mapping the user's interaction flow through the system.

## Output
- User Journey Diagram (Mermaid.js)

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 3: Implementation Plan"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-3 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 3: Implementation Plan

## Purpose
Write a comprehensive implementation plan based on the proposed plan and extensive architecture and design from Phase 1 and Phase 2.

## Steps

1. **Check for the previous result** from the previous step. If it's empty or not generated due to certain reason, then DO NOT PROCEED TO EXECUTE THIS STEP. Don't forget to remind the user if this happened.
2. **Write a comprehensive implementation plan** based on the proposed plan (Phase 1: Analyze) and extensive architecture and design (Phase 2: Design - the chosen design, ATAM trade-offs, Quality Attribute results, System Context Diagram, and User Journey Diagram).

## Constraints

AVOID overengineering, PREFER simple, low-complexity implementations with the GOAL of high maintainability, AVOID jargons when naming function/methods/class/components/system, instead PRIORITIZE using layman's terms or prefer naming with the actual intentions of the code, the GOAL is ease of developer understanding and maintainability.

## Iteration rule

If, while writing the implementation plan, you find a problem that is actually a Design problem
(not an implementation detail) - e.g. the architecture from Phase 2 doesn't actually support
something needed - STOP and tell the user clearly, and recommend circling back to Phase 2. Do
not silently work around a design flaw in the plan.

## Output
- A comprehensive implementation plan, written to `.workflow/<slug>/03-implement.md`

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Phase 4: Postmortem"
argument-hint: [project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/phase-4 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 4: Postmortem

## Purpose
Reflect on the iteration to improve the next one.

## Prerequisites
- Phase 3 (Implement) is complete

## Steps

1. **What went well?** — capture successful patterns
2. **What could be better?** — identify friction and slowdowns
3. **What will we do differently?** — concrete improvements for next iteration
4. **Update workflow** — if a process change is needed, update the relevant command files

## Output
- Postmortem document
- Action items for next iteration
- Updated workflow documentation (if needed)

## Trigger
```
$ARGUMENTS = "project name"
```
---

---
description: "Session Transcript"
argument-hint: [optional: project name]
---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/session-transcript my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → fall back to the project root directory name as the project name (this is the
     one case where no project is in progress yet — a transcript may legitimately exist outside
     of `.workflow/`).

# Session Transcript

## Purpose
Record this session's conversation as-is, in chronological order (who said what), as a standalone factual record — separate from the workflow's phase deliverables (which only contain final results, not the discussion that led to them).

## Steps

1. **Scan the project root.** Do NOT create any new folders. Determine the project root directory (where `.git/` or `package.json` or similar marker exists). Save the transcript directly in the project root.

2. **Reconstruct this session's conversation in chronological order**, turn by turn, labeled by
   who said it (`User` / `Agent`). Use the actual wording from the conversation - do not
   summarize, paraphrase, condense, or skip turns.

3. **Be honest about context limits.** You can only transcribe what's actually present in your
   current context window for this session. If earlier turns were compacted, truncated, or are
   otherwise not available to you, say so explicitly at the top of the file (e.g. "Transcript
   starts partway through the session - earlier turns were not available in context") instead of
   inventing or guessing what was said.

4. **Check for an existing transcript file.** If `aichat-<slug>.md` already exists from a
   previous run, do not overwrite it - append this session's transcript below the existing
   content, under a new dated section, so multiple sessions accumulate in one file.

## Output format

```markdown
# Session Transcript

## Project: <project-name>

## Session: <date/time if known, otherwise "session N">

### User
<verbatim text of the turn>

### Agent
<verbatim text of the turn>

### User
<verbatim text of the turn>

...
```

Write the result to `aichat-<slug>.md` in the project root. If no project name was provided, use `aichat.md`.

## Trigger
```
$ARGUMENTS = "optional: project name"
```