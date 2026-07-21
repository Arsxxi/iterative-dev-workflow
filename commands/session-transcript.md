---
description: "Session Transcript"
argument-hint: [optional: feature-slug]
---

# Session Transcript

## Purpose
Record this session's conversation as-is, in chronological order (who said what), as a standalone factual record — separate from the workflow's phase deliverables (which only contain final results, not the discussion that led to them).

## Steps

1. **Determine the feature slug.** Use `$ARGUMENTS` if provided. If not provided, use the project root directory name or "session" as fallback.

2. **Scan the project root.** Do NOT create any new folders. Determine the project root directory (where `.git/` or `package.json` or similar marker exists). Save the transcript directly in the project root.

3. **Reconstruct this session's conversation in chronological order**, turn by turn, labeled by
   who said it (`User` / `Agent`). Use the actual wording from the conversation - do not
   summarize, paraphrase, condense, or skip turns.

4. **Be honest about context limits.** You can only transcribe what's actually present in your
   current context window for this session. If earlier turns were compacted, truncated, or are
   otherwise not available to you, say so explicitly at the top of the file (e.g. "Transcript
   starts partway through the session - earlier turns were not available in context") instead of
   inventing or guessing what was said.

5. **Check for an existing transcript file.** If `aichat-<slug>.md` already exists from a
   previous run, do not overwrite it - append this session's transcript below the existing
   content, under a new dated section, so multiple sessions accumulate in one file.

## Output format

```markdown
# Session Transcript

## Project: <project-name>

## Session: <date/time if known, otherwise "session N">

### User
<verbatim text of the turn>

### Agent
<verbatim text of the turn>

### User
<verbatim text of the turn>

...
```

Write the result to `aichat-<slug>.md` in the project root. If no slug was provided, use `aichat.md`.

## Trigger
```
$ARGUMENTS = "optional: feature-slug"
```
