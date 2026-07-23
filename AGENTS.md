# AGENTS.md — Iterative Dev Workflow Plugin

## What this repo is

A structured 4-phase iterative development workflow plugin for AI coding agents (Claude Code, OpenCode, Antigravity/Codex, Gemini).

## Source of truth

`commands/*.md` (10 files) and `skills/workflow-methodology/SKILL.md` are authoritative. **After editing either, run:**
```bash
bash scripts/sync-platforms.sh
```

This syncs `.md` files to:
- `.opencode/commands/` — OpenCode slash commands
- `.agent/workflows/` — Antigravity/Codex workflows
- `.agents/skills/workflow-methodology/` — Antigravity/Codex skill

**Do not edit `.toml` files in `commands/`** — those are Claude Code companion metadata, auto-generated alongside `.md`. The `.md` files are the source.

**AGENTS.md is hand-curated** — intentionally NOT auto-generated. It is the OpenCode system-prompt injection file (separate purpose from the consumer-facing plugin payload).

## Workflow overview

```
/kickoff
  └── /phase-1
        └── /phase-2-step-1
              └── /phase-2-step-2
                    └── /phase-2-step-3  (may loop back to step-1)
                          └── /phase-2-step-4
                                └── /phase-2-step-5
                                      └── /phase-3
                                            └── /phase-4
```

## Hard constraints (every phase)

- **AVOID overengineering.** Prefer simple, low-complexity implementations. Goal: high maintainability.
- **AVOID jargon.** Use plain language that states actual intent. Any developer should understand names without translation.
- **Never skip phases.** Design must be approved before implementation begins.
- **Iterative, not waterfall.** If a problem surfaces in a later phase but belongs to an earlier one (e.g. an Implement-phase bug that's a Design flaw), circle back to that phase. Do not silently work around it.

## How project tracking works

- `/kickoff` creates `.workflow/<slug>/00-context.md` (platform, description, existing services).
- Every later `/phase-*` command reads that file first — do not assume or hardcode platform/services.
- Project names are lowercase, hyphenated slugs (e.g. `article-quality-widget`).
- Session transcripts are written to the **project root** as `aichat-<slug>.md` (not inside `.workflow/`).
- **`/session-transcript` appends** to existing transcript files rather than overwriting.

## Phase 2 Step 3 SENTINEL guard

In `/phase-2-step-3`, if the user copy-pastes the Quality Attributes example without modifying it, the warning text itself will appear in their response. The agent must detect this and keep asking for custom attributes. If the user still doesn't modify it, append `SENTINEL` to the final reminder. The agent does NOT proceed to scoring until custom attributes are provided.

## Platform quirks

- **OpenCode:** Commands land in `.opencode/commands/` (plural). `opencode.json` references this plugin via `"plugin": ["@arsxxi/iterative-dev-workflow"]`, which also enables AGENTS.md as the system-prompt injection. The install script (`bin/install-opencode-commands.mjs`) copies `commands/` to `~/.config/opencode/commands/` via `postinstall`.
- **Antigravity/Codex:** Workflows go in `.agent/workflows/` (singular), skills in `.agents/skills/` (plural).
- **Claude Code:** Reads `.toml` companion files in `commands/` alongside `.md`. Hooks at `hooks/claude-codex-hooks.json` load `AGENTS.md` on session start.

## Development setup

```bash
npm install          # runs postinstall: installs OpenCode commands globally
bash scripts/sync-platforms.sh   # syncs to all platform targets
```
