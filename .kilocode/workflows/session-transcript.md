---
description: "Session Transcript"
---

## Arguments

Kilo Code does not substitute `$ARGUMENTS`. Wherever this command refers to
`$ARGUMENTS`, read it as the text I typed after the slash command in this message.

Expected: optional: project name

If I typed nothing after the command, do not guess and do not invent a value: ask me
for it with the `question` tool, then continue from there.

---

## Step 0 — find which project this is for

Before anything else, figure out which project this command applies to:

1. If you were given a project name after the slash (e.g. `/session-transcript my-project`), use it.
2. Otherwise, look at the subfolders under `.workflow/`:
   - Exactly one folder → use it. Tell the user which project you picked (e.g. "Working on
     `my-project`"), so it's never a silent guess.
   - Two or more folders → ask the user once which project this is for. To make the question
     useful, show the first line of each project's `00-context.md`, not just the folder name.
   - No folders → fall back to the project root directory name as the project name (this is the
     one case where no project is in progress yet — a transcript may legitimately exist outside
     of `.workflow/`).

# Session Transcript

## Purpose
Record this session's conversation as-is, in chronological order (who said what), as a standalone factual record — separate from the workflow's phase deliverables (which only contain final results, not the discussion that led to them).

## Steps

1. **Scan the project root.** Do NOT create any new folders. Determine the project root directory (where `.git/` or `package.json` or similar marker exists). Save the transcript directly in the project root.

2. **Reconstruct this session's conversation in chronological order**, turn by turn, labeled by
   who said it (`User` / `Agent`). Use the actual wording from the conversation - do not
   summarize, paraphrase, condense, or skip turns.

3. **Be honest about context limits.** You can only transcribe what's actually present in your
   current context window for this session. If earlier turns were compacted, truncated, or are
   otherwise not available to you, say so explicitly at the top of the file (e.g. "Transcript
   starts partway through the session - earlier turns were not available in context") instead of
   inventing or guessing what was said.

4. **Check for an existing transcript file.** If `aichat-<slug>.md` already exists from a
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

Write the result to `aichat-<slug>.md` in the project root. If no project name was provided, use `aichat.md`.

## Trigger
```
$ARGUMENTS = "optional: project name"
```
