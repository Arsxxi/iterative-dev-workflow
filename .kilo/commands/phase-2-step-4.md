---
description: "Phase 2 Step 4: High-Fidelity Design"
---

## Arguments

Kilo Code does not substitute `$ARGUMENTS`. Wherever this command refers to
`$ARGUMENTS`, read it as the text I typed after the slash command in this message.

Expected: project name

If I typed nothing after the command, do not guess and do not invent a value: ask me
for it with the `question` tool, then continue from there.

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
