---
description: "Session Transcript"
argument-hint: [feature-slug or description]
---

# Session Transcript

## Purpose
Record this session's conversation as-is, in chronological order (who said what), as a standalone factual record — separate from the workflow's phase deliverables (which only contain final results, not the discussion that led to them).

## Steps

1. **Determine the feature slug.** Use `$ARGUMENTS`. If it's not provided, ask the user which
   `.workflow/<slug>/` this transcript belongs to.

2. **Reconstruct this session's conversation in chronological order**, turn by turn, labeled by
   who said it (`User` / `Agent`). Use the actual wording from the conversation - do not
   summarize, paraphrase, condense, or skip turns.

3. **Be honest about context limits.** You can only transcribe what's actually present in your
   current context window for this session. If earlier turns were compacted, truncated, or are
   otherwise not available to you, say so explicitly at the top of the file (e.g. "Transcript
   starts partway through the session - earlier turns were not available in context") instead of
   inventing or guessing what was said.

4. **Check for an existing transcript file.** If `.workflow/<slug>/aichat.md` already exists from a
   previous run, do not overwrite it - append this session's transcript below the existing
   content, under a new dated section, so multiple sessions accumulate in one file.

## Output format

```markdown
# Session Transcript - <slug>

## Session: <date/time if known, otherwise "session N">

### User
<verbatim text of the turn>

### Agent
<verbatim text of the turn>

### User
<verbatim text of the turn>

...
```

Write the result to `.workflow/<slug>/aichat.md`.

## Trigger
```
$ARGUMENTS = "feature-slug or description"
```
