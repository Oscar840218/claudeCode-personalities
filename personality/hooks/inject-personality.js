#!/usr/bin/env node
// SessionStart hook: if the user has picked a personality (~/.claude/personality),
// inject that personality's instructions as additional context for the session.
// ponytail: state is machine-wide (homedir/.claude/personality); one choice per PC.
const fs = require("fs");
const os = require("os");
const path = require("path");

const stateFile = path.join(os.homedir(), ".claude", "personality");
const legacyFile = path.join(process.cwd(), ".claude", "personality");

let name;
try {
  name = fs.readFileSync(stateFile, "utf8").trim();
} catch {
  // one-time migration: pre-0.1.3 stored the choice project-locally
  try {
    name = fs.readFileSync(legacyFile, "utf8").trim();
  } catch {
    process.exit(0); // no personality selected -> default Claude
  }
  if (!name) process.exit(0);
  try { fs.writeFileSync(stateFile, name); } catch {} // best-effort migrate; ignore if home write fails
}
if (!name) process.exit(0);

const file = path.join(__dirname, "..", "personalities", `${name}.md`);
let content;
try {
  content = fs.readFileSync(file, "utf8").trim();
} catch {
  process.exit(0); // selected personality file is missing -> stay silent
}

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext: `ACTIVE PERSONALITY: ${name}\n\n${content}`,
    },
  })
);
