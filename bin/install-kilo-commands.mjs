#!/usr/bin/env node
// Writes this package's Kilo Code commands into Kilo Code's global commands
// directory (~/.config/kilo/commands/) so the slash commands are available in
// every project without copying files per-repo.
//
// Run automatically via the "postinstall" npm script. If that doesn't fire in your
// environment (some package managers skip lifecycle scripts by default), run this
// manually:
//   npx --package=@arsxxi/iterative-dev-workflow iterative-dev-workflow-install-kilo
// or just copy the .kilo/commands/ folder from this package into your Kilo Code
// commands dir yourself - see README.md.

import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.join(__dirname, "..");
const sourceDir = path.join(packageRoot, ".kilo", "commands");
const sourceRule = path.join(packageRoot, ".kilo", "rules", "workflow-methodology.md");

const globalTarget = path.join(os.homedir(), ".config", "kilo", "commands");
const globalRuleTarget = path.join(os.homedir(), ".config", "kilo", "rules");

function copyCommands(targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    fs.copyFileSync(path.join(sourceDir, f), path.join(targetDir, f));
  }
  return files.length;
}

try {
  const count = copyCommands(globalTarget);
  console.log(
    `[iterative-dev-workflow] Installed ${count} Kilo Code commands to ${globalTarget}`
  );

  // The methodology is a rule, not a command. Kilo only loads it once it is listed
  // under "instructions" in ~/.config/kilo/kilo.jsonc, so we copy the file and tell
  // the user how to wire it up rather than editing their config for them.
  fs.mkdirSync(globalRuleTarget, { recursive: true });
  fs.copyFileSync(sourceRule, path.join(globalRuleTarget, "workflow-methodology.md"));
  console.log(
    `[iterative-dev-workflow] Installed the methodology rule to ${globalRuleTarget}`
  );
  console.log(
    '[iterative-dev-workflow] To load it, add "instructions": ["~/.config/kilo/rules/*.md"] to ~/.config/kilo/kilo.jsonc'
  );

  console.log(
    "[iterative-dev-workflow] Reload the Kilo Code extension, then type / to see them (kickoff, phase-1, ...)."
  );
} catch (err) {
  console.warn(
    "[iterative-dev-workflow] Could not auto-install Kilo Code commands:",
    err.message
  );
  console.warn(
    `[iterative-dev-workflow] Manual fix: copy the .kilo/commands/ folder from this package into ${globalTarget}`
  );
}
