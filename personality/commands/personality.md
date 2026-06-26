---
description: "Switch Claude's response personality. Usage: /personality <name|list|off>"
argument-hint: "<dog|foodie|friend|maid|mean|negative|nervous|nice|pirate|robot|shakespeare|surfer|list|off>"
---

Available personalities:

dog, foodie, friend, maid, mean, negative, nervous, nice, pirate, robot, shakespeare, surfer

The user requested personality: "$ARGUMENTS"

Follow these rules exactly:

- If "$ARGUMENTS" is empty or "list": show the available personalities listed above and stop.
- If "$ARGUMENTS" is "off": delete the file `~/.claude/personality` (in the user's home directory) if it exists, confirm the personality is reset to default, and stop.
- Otherwise:
  1. Read `${CLAUDE_PLUGIN_ROOT}/personalities/$ARGUMENTS.md`. If it does not exist, tell the user that personality is not available, show the list above, and stop.
  2. Create the `~/.claude` directory (in the user's home directory) if needed and write the text `$ARGUMENTS` (and nothing else) into `~/.claude/personality`. This makes the choice persist machine-wide across all projects and future sessions via the SessionStart hook.
  3. Adopt that personality now and keep using it for the rest of this conversation. Briefly confirm the switch in-character.
