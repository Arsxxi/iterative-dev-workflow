---
description: "Phase 2 Step 2: ATAM"
argument-hint: [feature-slug or description]
---

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
$ARGUMENTS = "feature-slug or description"
```
