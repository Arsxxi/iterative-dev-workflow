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
