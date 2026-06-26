# personality-switcher (example Claude Code plugin)

A minimal, real Claude Code plugin that lets you switch Claude's response
personality with a slash command. The choice persists across sessions.

```
/personality pirate      # talk like a pirate from now on
/personality robot       # switch to terse robot mode
/personality list        # show available personalities
/personality off         # back to default Claude
```

## Structure

| Path | Plugin component | What it does |
|------|------------------|--------------|
| `.claude-plugin/plugin.json` | **manifest** | name, version, description |
| `commands/personality.md` | **slash command** | `/personality <name>` — writes the choice and adopts it |
| `hooks/hooks.json` | **hook config** | runs the hook on `SessionStart` |
| `hooks/inject-personality.js` | **hook script** | injects the chosen personality as session context |
| `personalities/*.md` | data | one file per personality (the single source of truth) |

## How it works

1. `/personality pirate` runs `commands/personality.md`. Claude writes `pirate`
   to `.claude/personality` (project-local) and adopts the voice immediately.
2. On every new session, the `SessionStart` hook runs `inject-personality.js`,
   which reads `.claude/personality`, loads `personalities/pirate.md`, and
   returns it as `additionalContext` — so the personality sticks across sessions.

Slash commands and hook commands both expand `${CLAUDE_PLUGIN_ROOT}` to the
plugin's directory, which is how each piece finds the bundled files.

## Try it

This plugin lives in a subfolder of the repo. To load it, add the repo as a
plugin marketplace / point Claude Code at this directory (see the Claude Code
plugin docs), then run `/personality pirate` and ask Claude anything.

Verify the hook in isolation:

```bash
mkdir -p .claude && echo pirate > .claude/personality
node personality-switcher/hooks/inject-personality.js
# -> {"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"ACTIVE PERSONALITY: pirate ..."}}
```

## Add your own personality

Drop a new `personalities/<name>.md` file with voice instructions. It shows up
in `/personality list` automatically — no other changes needed.
