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
