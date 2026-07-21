#!/usr/bin/env bash
# sync-platforms.sh
# Generates platform-specific files from the two primary sources:
#   1. commands/   (Claude Code / OpenCode commands)
#   2. skills/workflow-methodology/SKILL.md

set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Syncing iterative-dev-workflow to platform formats..."

# --- .opencode/commands/ ---
OPENCODE_CMD="$ROOT/.opencode/commands"
mkdir -p "$OPENCODE_CMD"
cp "$ROOT/commands/"*.md "$OPENCODE_CMD/"
echo "  -> .opencode/commands/ synced (${OPENCODE_CMD})"

# --- .agents/skills/workflow-methodology/SKILL.md ---
AGENTS_SKILL="$ROOT/.agents/skills/workflow-methodology"
mkdir -p "$AGENTS_SKILL"
cp "$ROOT/skills/workflow-methodology/SKILL.md" "$AGENTS_SKILL/"
echo "  -> .agents/skills/workflow-methodology/SKILL.md synced"

# --- AGENTS.md ---
cp "$ROOT/skills/workflow-methodology/SKILL.md" "$ROOT/AGENTS.md"
echo "  -> AGENTS.md generated"

echo "Done. Review .agents/workflows/ manually for syntax adaptation."
