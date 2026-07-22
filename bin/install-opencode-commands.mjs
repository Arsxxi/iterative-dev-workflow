#!/usr/bin/env node
// Writes this package's commands/*.md into OpenCode's global commands directory
// (~/.config/opencode/commands/) so slash commands work regardless of whether
// OpenCode's internal plugin "config" hook is supported in the installed version.
//
// Run automatically via the "postinstall" npm script. If that doesn't fire in your
// environment (some package managers skip lifecycle scripts by default), run this
// manually:
//   npx --package=@arsxxi/iterative-dev-workflow iterative-dev-workflow-install
// or just copy the commands/ folder from this package into your OpenCode commands dir
// yourself - see README.md.

import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.join(__dirname, "..");
const sourceDir = path.join(packageRoot, "commands");

const globalTarget = path.join(os.homedir(), ".config", "opencode", "commands");

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
    `[iterative-dev-workflow] Installed ${count} OpenCode commands to ${globalTarget}`
  );
  console.log(
    "[iterative-dev-workflow] Restart OpenCode, then type / to see them (kickoff, phase-1, ...)."
  );
} catch (err) {
  console.warn(
    "[iterative-dev-workflow] Could not auto-install OpenCode commands:",
    err.message
  );
  console.warn(
    `[iterative-dev-workflow] Manual fix: copy the commands/ folder from this package into ${globalTarget}`
  );
}
