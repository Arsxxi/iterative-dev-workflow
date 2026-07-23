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
Create a minimum of 5 design proposals for the chosen development path from Phase 1.

## Solution Proposal Bucket (Low-Fidelity)
This is a faster phase compared to normal designing, here we will focus on quick design to find multiple solution that could solve our problem.

It's also important to remember that the ideas do not have to be great. This process is about quieting the inner critic and giving our creative impulses space to flourish. Weird, impossible, and impractical ideas often give way to truly inspired ones.

## Prerequisites
- Phase 1 output (`.workflow/<slug>/phase-1.md`) must exist and be non-empty. If it's missing or empty, do not proceed — remind the user.

## Steps

1. **Read Phase 1 output** — read `.workflow/<slug>/phase-1.md` to understand the chosen development path and its reasoning.
2. **Analyze industry standard** — do a deep dive, extensive and meticulous analysis on how industry standard conducts solution proposal
3. **Create minimum 5 design proposals** — create design proposals for the chosen development path from Phase 1. Each proposal should detail: Architecture, UI/UX approach, Data Model, and trade-offs at this design level.

## Output
- Industry standard analysis
- Minimum 5 design proposals for the chosen Phase 1 path

## Trigger
```
$ARGUMENTS = "project name"
```
