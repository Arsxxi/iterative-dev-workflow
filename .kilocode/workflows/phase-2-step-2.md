---
description: "Phase 2 Step 2: ATAM"
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
