---
description: "Phase 1: Analyze"
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

1. If you were given a project name after the slash (e.g. `/phase-1 my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → stop and tell the user to run `/kickoff` first. Don't proceed.

# Phase 1: Analyze

## Purpose
Analyze the requirements with the goal to propose a development timeline and plan.

## Steps

1. **Gather requirements** — do the usual analysis to gather requirements for what we wanted to build: $ARGUMENTS
2. **Identify libraries / npm packages** — determine what libraries / npm packages will be used
3. **Categorize services** — separate into two categories: Existing Services (the list of services currently available for the project: ask the user) and Proposed Services (the list of services needed to be added into the project)
4. **Brainstorm development paths** — brainstorm 5 various paths of development
5. **Perform ATAM** — perform an ATAM analysis of those paths of development
6. **Perform SQALE** — perform a SQALE analysis of those paths of development
7. **Write final output** — write the Development Timeline and explanation of chosen plan/solution

## Output
Write to `.workflow/<slug>/phase-1.md`:
- Development Timeline
- Explanation of chosen plan/solution
- Libraries / npm packages to be used
- Existing Services and Proposed Services breakdown

## Constraints
- AVOID overengineering, PREFER simple, low-complexity implementations with the GOAL of high maintainability
- AVOID jargons when naming components/systems, instead PRIORITIZE using layman's terms or prefer naming with the actual intentions of the components/systems, the GOAL is ease of developer understanding and maintainability

## Trigger
```
$ARGUMENTS = "project name"
```
