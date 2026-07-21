---
description: "Phase 1: Analyze"
argument-hint: [feature-slug or description]
---

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
$ARGUMENTS = "feature-slug or description"
```
