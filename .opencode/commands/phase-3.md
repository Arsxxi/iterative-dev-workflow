---
description: "Phase 3: Implementation Plan"
argument-hint: [feature-slug or description]
---

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
$ARGUMENTS = "feature-slug or description"
```
