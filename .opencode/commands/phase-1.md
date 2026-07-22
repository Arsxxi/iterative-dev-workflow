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
