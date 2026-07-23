---
description: "Phase 3: Implementation Plan"
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
