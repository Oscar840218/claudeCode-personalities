# claudeCode-personalities

Change the personality of Claude Code's responses. Pick a vibe and Claude keeps
it across sessions — the technical answers stay correct, the tone is just flavor
on top.

## Install

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

Every personality is just an opening flavor — answers remain correct and complete.

## Adding a personality

Drop a new `<name>.md` file in [personality/personalities/](personality/personalities/)
describing the voice. It shows up automatically in `/personality list`.
