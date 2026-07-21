# After Install

## How to Use

This plugin provides a structured 4-phase iterative development workflow for AI coding agents.

### Slash Commands

| # | Command | Description |
|---|---------|-------------|
| 0 | `/kickoff` | Start a new project — asks what to build, platform/stack, slug |
| 1 | `/phase-1` | Analyze: understand task, explore codebase, identify gaps |
| 2.1 | `/phase-2-step-1` | Solution Proposal: create minimum 5 designs |
| 2.2 | `/phase-2-step-2` | ATAM: assess trade-offs and sensitivity points |
| 2.3 | `/phase-2-step-3` | Quality Attribute: weighted scoring assessment |
| 2.4 | `/phase-2-step-4` | High-Fidelity Design: System Context Diagram |
| 2.5 | `/phase-2-step-5` | User Journey: User Journey Diagram |
| 3 | `/phase-3` | Implementation Plan: write comprehensive plan |
| 4 | `/phase-4` | Postmortem: reflect and improve |
| — | `/session-transcript` | Record verbatim conversation |

### Workflow Flow

```
/kickoff
  └── /phase-1
        └── /phase-2-step-1
              └── /phase-2-step-2
                    └── /phase-2-step-3  (may loop back to /phase-2-step-1)
                          └── /phase-2-step-4
                                └── /phase-2-step-5
                                      └── /phase-3
                                            └── /phase-4
```

### Output Location

All phase outputs are written to `.workflow/<slug>/`:
- `00-context.md` — platform, description, existing services
- `01-analyze.md` — Phase 1 output
- `02-propose.md` — Phase 2 Step 1 output
- `02-atam.md` — Phase 2 Step 2 output
- `02-qa.md` — Phase 2 Step 3 output
- `02-hifi.md` — Phase 2 Step 4 output
- `02-journey.md` — Phase 2 Step 5 output
- `03-implement.md` — Phase 3 output
- `04-postmortem.md` — Phase 4 output

Session transcripts are saved directly to the **project root** as `aichat-<slug>.md` (or `aichat.md` if no slug provided).

### Hard Constraints

- AVOID overengineering. PREFER simple, low-complexity implementations.
- AVOID jargon. Use plain language that states actual intent.
- Never skip phases. Design must be approved before implementation.

## Platform-Specific Install Notes

### Claude Code
Commands are auto-discovered from `commands/` TOML files. No additional setup needed.

### OpenCode
The `opencode.json` references `./AGENTS.md` as the instructions file. Commands are in `.opencode/commands/`.

### Other Agents (Antigravity/Codex/Goose)
The `.agents/` directory contains the skill definitions.

## Sync Script

If you modify `commands/` or `skills/`, run:
```bash
bash scripts/sync-platforms.sh
```
