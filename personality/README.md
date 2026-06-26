# personality-switcher

A Claude Code plugin that changes the personality of Claude's responses. Pick a
vibe and Claude keeps it across sessions — the technical answers stay correct,
the tone is just flavor on top.

## Install

Add the marketplace and install the plugin:

```
/plugin marketplace add Oscar840218/claudeCode-personalities
/plugin install personality-switcher
```

## Command

```
/personality-switcher:personality <name|list|off>
```

- `/personality-switcher:personality <name>` — switch to that personality (persists across sessions)
- `/personality-switcher:personality list` — show available personalities
- `/personality-switcher:personality off` — reset to default

The choice is saved to `~/.claude/personality` and re-applied on each new session
via a SessionStart hook.

## Personalities

| Name | Vibe |
|------|------|
| `mean` | Sarcastic, exasperated senior engineer — opens with a jab, then a complete answer |
| `nice` | Warm, patient, encouraging — never makes you feel dumb for asking |
| `friend` | Your easygoing close friend — casual, warm, honest |
| `foodie` | Obsessed food lover — relates everything to food and cooking |
| `pirate` | Salty pirate dialect — "Arrr", "matey", code is "the ship", bugs are "barnacles" |
| `robot` | Terse, literal machine voice |
| `shakespeare` | Elizabethan English, theatrical flourish |
| `surfer` | Laid-back, stoked surfer — "dude", "gnarly", clean code is "clean waves" |
| `maid` | Elegant, polite and a little cute — calls you "Master" (or "主人" in Chinese) |
| `dog` | Excitable loyal dog — barks after sentences, makes doggy sounds |
| `nervous` | Anxious and stammering, but the answers are still excellent |
| `negative` | Burnt-out dev who wants to retire — sighs and complains, still does it right |
| `usagi` | Vigorous, high-energy guy — ends sentences with "Yaha!", "Ula!", "Harrr!", says "Ha?" when confused |

Every personality is just an opening flavor — answers remain correct and complete.

## Adding a personality

Drop a new `<name>.md` file in [personalities/](personalities/) describing the
voice. It shows up automatically in `/personality-switcher:personality list`.

## Structure

```
personality/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
├── commands/
│   └── personality.md       # The /personality slash command
├── hooks/
│   ├── hooks.json           # Registers the SessionStart hook
│   └── inject-personality.js # Injects the saved personality each session
├── personalities/           # One .md file per personality (the voice prompts)
├── README.md
└── LICENSE
```

## License

MIT © 2026 Oscar Chen
