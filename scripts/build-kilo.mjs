#!/usr/bin/env node
// build-kilo.mjs
// Generates the Kilo Code payload from the primary source: commands/ and skills/.
// Called by scripts/sync-platforms.sh — do not edit the generated files by hand.
//
// Kilo Code differs from the other platforms in two ways, so a verbatim copy
// (what .opencode/ and .agent/ get) is not enough:
//
//   1. Frontmatter — Kilo reads `description`, `agent`, `model`, `subtask`.
//      It has no `argument-hint`, so that key is folded into the body instead
//      of being emitted as an unknown key.
//   2. Arguments — Kilo does not substitute `$ARGUMENTS`. The bodies reference
//      it, so each command gets a short preamble that tells the agent where the
//      argument actually comes from (the text typed after the slash command)
//      and what to do when it is empty.
//
// Targets:
//   .kilo/commands/         current Kilo Code slash commands
//   .kilocode/workflows/    legacy path, still read by older Kilo Code builds
//   .kilo/rules/            methodology, auto-loaded via kilo.jsonc
//   .kilocode/rules/        legacy path for the same methodology file

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const sourceCommands = path.join(root, "commands");
const sourceSkill = path.join(root, "skills", "workflow-methodology", "SKILL.md");

const commandTargets = [
  path.join(root, ".kilo", "commands"),
  path.join(root, ".kilocode", "workflows"),
];
const ruleTargets = [
  path.join(root, ".kilo", "rules"),
  path.join(root, ".kilocode", "rules"),
];

/** Splits a markdown file into { frontmatter: {key: rawValue}, body }. */
function splitFrontmatter(text) {
  if (!text.startsWith("---")) return { frontmatter: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, body: text };

  const raw = text.slice(3, end).trim();
  const body = text.slice(end + 4).replace(/^\r?\n/, "");

  const frontmatter = {};
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) frontmatter[match[1]] = match[2].trim();
  }
  return { frontmatter, body };
}

/** Strips surrounding quotes or square brackets from a frontmatter value. */
function unwrap(value) {
  if (!value) return "";
  return value.replace(/^["'](.*)["']$/, "$1").replace(/^\[(.*)\]$/, "$1").trim();
}

function argumentsPreamble(hint) {
  return [
    "## Arguments",
    "",
    "Kilo Code does not substitute `$ARGUMENTS`. Wherever this command refers to",
    "`$ARGUMENTS`, read it as the text I typed after the slash command in this message.",
    ...(hint ? ["", `Expected: ${hint}`] : []),
    "",
    "If I typed nothing after the command, do not guess and do not invent a value: ask me",
    "for it with the `question` tool, then continue from there.",
    "",
    "---",
    "",
  ].join("\n");
}

function buildCommand(text) {
  const { frontmatter, body } = splitFrontmatter(text);
  const description = unwrap(frontmatter.description);
  const hint = unwrap(frontmatter["argument-hint"]);

  const header = ["---", `description: "${description}"`, "---", ""].join("\n");
  const out = `${header}\n${argumentsPreamble(hint)}${body}`;

  // The sources are CRLF; the generated header is LF. Match whichever the source
  // used so a generated file never mixes both.
  const crlf = text.includes("\r\n");
  return crlf ? out.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : out;
}

function writeAll(targets, filename, contents) {
  for (const dir of targets) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, filename), contents);
  }
}

const files = fs.readdirSync(sourceCommands).filter((f) => f.endsWith(".md"));
for (const file of files) {
  const source = fs.readFileSync(path.join(sourceCommands, file), "utf8");
  writeAll(commandTargets, file, buildCommand(source));
}
console.log(`  -> .kilo/commands/ synced (${files.length} commands)`);
console.log(`  -> .kilocode/workflows/ synced (legacy path, ${files.length} commands)`);

writeAll(ruleTargets, "workflow-methodology.md", fs.readFileSync(sourceSkill, "utf8"));
console.log("  -> .kilo/rules/workflow-methodology.md synced");
console.log("  -> .kilocode/rules/workflow-methodology.md synced (legacy path)");

// Drift check: every commands/*.md must land in every Kilo target.
let missing = false;
for (const file of files) {
  for (const dir of commandTargets) {
    if (!fs.existsSync(path.join(dir, file))) {
      console.error(`MISSING: ${path.relative(root, path.join(dir, file))}`);
      missing = true;
    }
  }
}
if (missing) {
  console.error("Kilo sync drift detected.");
  process.exit(1);
}
