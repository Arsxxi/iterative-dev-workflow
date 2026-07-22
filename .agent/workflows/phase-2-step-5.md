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
