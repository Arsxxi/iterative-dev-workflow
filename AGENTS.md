# AGENTS.md — Iterative Dev Workflow Plugin

This repo is the `@arsxxi/iterative-dev-workflow` plugin for AI coding agents (OpenCode, Claude Code, Codex, Antigravity CLI). It provides structured development workflow commands.

## Architecture

- **Commands**: defined in `commands/*.md` (template body + frontmatter). The `.toml` files are companion metadata. Do NOT edit `.opencode/commands/` or `.agent/workflows/` directly — they are sync targets.
- **System prompt**: this file (`AGENTS.md`) is injected into the agent's system prompt by the plugin (`iterative-dev-workflow.mjs`). **Hand-curated, not generated** — see Development below.
- **Plugin entrypoint**: `.opencode/plugins/iterative-dev-workflow.mjs` — dynamically loads command templates from `commands/` and injects `AGENTS.md` on startup.

## Development

After editing `commands/*.md` or `skills/workflow-methodology/SKILL.md`, run:

```bash
bash scripts/sync-platforms.sh
```

This syncs to:
- `.opencode/commands/` — OpenCode command definitions (full `.md` with frontmatter)
- `.agent/workflows/` — Antigravity workflow definitions (singular path; frontmatter stripped on copy)
- `.agents/skills/workflow-methodology/SKILL.md` — Antigravity/Codex skill

This script does **NOT** touch `AGENTS.md` (this file) — edit it by hand. The two files serve different purposes and must evolve independently:

| File | Purpose | Source of truth |
|------|---------|-----------------|
| `AGENTS.md` (this) | Injected into OpenCode system prompt when plugin runs | Hand-curated |
| `skills/workflow-methodology/SKILL.md` | Plugin payload for consumer projects (workflow content) | Hand-curated |

## Output convention

When used in a **consumer project** (not this repo), each workflow phase writes output to `.workflow/<slug>/` in the consumer's project root:
- `00-context.md`, `01-analyze.md`, `02-propose.md`, `02-atam.md`, `02-qa.md`, `02-hifi.md`, `02-journey.md`, `03-implement.md`, `04-postmortem.md`
- `/session-transcript` writes `aichat-<slug>.md` to the consumer project root

## Phase prerequisite chain

`/kickoff` -> `/phase-1` -> `/phase-2-step-1` -> `/phase-2-step-2` -> `/phase-2-step-3` (may loop back to step 1) -> `/phase-2-step-4` -> `/phase-2-step-5` -> `/phase-3` -> `/phase-4`

Each phase reads `.workflow/<slug>/00-context.md` first to get platform/stack context. Never skip ahead.

## Key constraints

- **AVOID overengineering.** Prefer simple, low-complexity implementations. High maintainability is the goal.
- **AVOID jargon** in naming. Use plain language that states actual intent.
- The agent is an assistant — after each phase, it produces results and stops. The user evaluates and decides whether to continue.
- If an implementation problem is actually a design flaw, circle back to Phase 2. Do not silently patch around design problems.