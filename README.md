# Iterative Dev Workflow

A structured 4-phase iterative development workflow for AI coding agents.

## Phases

1. **Phase 1: Analyze** — Understand the task before writing code
2. **Phase 2: Design** — Solution Proposal → ATAM → Quality Attribute → High-Fidelity (5 steps)
3. **Phase 3: Implementation Plan** — Write comprehensive implementation plan
4. **Phase 4: Postmortem** — Reflect and improve

## Directory Structure

```
├── commands/                       # Primary source — slash command definitions
├── skills/
│   └── workflow-methodology/
│       └── SKILL.md               # Skill definition (all commands concatenated)
├── .opencode/commands/             # Generated — OpenCode format
├── .agents/                        # Generated — Antigravity/Codex/Goose format
├── scripts/
│   └── sync-platforms.sh           # Sync script for generated files
├── .claude-plugin/                 # Claude Code plugin metadata
├── AGENTS.md                       # Generated — cross-tool foundation
├── README.md
├── LICENSE
└── .gitignore
```

## Usage

### 1. Run sync after editing commands

```bash
bash scripts/sync-platforms.sh
```

### 2. Install in your project

Copy these to your target project:
- `.claude-plugin/` — Claude Code plugin
- `.opencode/commands/` — OpenCode commands
- `AGENTS.md` — base instructions

### 3. Slash Commands

| # | Command | Description |
|---|---------|-------------|
| 0 | `/kickoff` | Start new project — asks what to build, platform/stack, slug |
| 1 | `/phase-1` | Analyze: understand task, explore codebase, identify gaps |
| 2.1 | `/phase-2-step-1` | Solution Proposal: create minimum 5 designs |
| 2.2 | `/phase-2-step-2` | ATAM: assess trade-offs and sensitivity points |
| 2.3 | `/phase-2-step-3` | Quality Attribute: weighted scoring assessment |
| 2.4 | `/phase-2-step-4` | High-Fidelity Design: System Context Diagram (Mermaid.js) |
| 2.5 | `/phase-2-step-5` | User Journey: User Journey Diagram (Mermaid.js) |
| 3 | `/phase-3` | Implementation Plan: write comprehensive plan |
| 4 | `/phase-4` | Postmortem: reflect and improve |
| — | `/session-transcript` | Record verbatim conversation to `.workflow/<slug>/aichat.md` |

## Workflow Flow

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

## Output Location

All phase outputs are written to `.workflow/<slug>/`:
- `00-context.md` — platform, description, existing services
- `01-analyze.md` — Phase 1 output
- `02-propose.md` — Phase 2 Step 1 output
- `02-atam.md` — Phase 2 Step 2 output
- `02-qa.md` — Phase 2 Step 3 output
- `02-hifi.md` — Phase 2 Step 4 output (System Context Diagram)
- `02-journey.md` — Phase 2 Step 5 output (User Journey Diagram)
- `03-implement.md` — Phase 3 output
- `04-postmortem.md` — Phase 4 output
- `aichat.md` — session transcripts

## License

MIT
