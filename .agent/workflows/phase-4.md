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
