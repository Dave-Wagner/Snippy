# 🎩 Snippy: The Magical Clipboard Conjurer

Welcome, noble code wizard, to the mystical realm of Snippy! 🧙‍♂️ This enchanted extension for Visual Studio Code grants you the power to swiftly copy the contents of all open files into your clipboard, banishing newline characters, spaces, and tabs between HTML elements to the abyss. Casting spells on your Javascript and CSS, shrinking it while keeping it machine readable.

Snippy's sorcery is particularly potent when casting spells with ChatGPT, as it allows you to share arcane knowledge with the AI swiftly and in a character-saving format.

## 🌟 Marvelous Features

- [x] Lightning fast copying of all open files
- [x] Exorcises newlines, spaces, and tabs (spellcasting with Python remains untested)
- [x] Customizable separator sequence format with magical runes like FILE_NAME, FILE_NAME_WITH_PATH, LAST_MODIFIED, TIMESTAMP, and LAST_MODIFIED_DATE
- [x] User options to transmute the content of most code files (in the clipboard) using the mystical minify package for html, css, js and img (css-base64-images)

## ✨ Enchanting Usage

<p align="center">
  <img alt="Harnessing Snippy's Power" src="https://www.memecreator.org/static/images/memes/5010697.jpg" />
</p>

Snippy bestows upon you a simple incantation to copy all open file contents to the clipboard, free from newline characters. This charm proves invaluable when sharing code snippets or file contents at the speed of light.

Snippy weaves a customizable wrapping enchantment around each file's content. To wield this arcane power, right-click on an editor tab and select the "Snippy: Copy all editors to clipboard" option from the magical menu.

## 📚 Ancient Tomes (Requirements)

Fear not, for there are no specific requirements or dependencies to harness Snippy's mystical might.

## ⚙️ Enchanted Extension Settings

This extension offers a cauldron of configuration options to personalize the separator sequence format.

- `snippy.separatorFormat`: The format of the separator between files. The following variables are available:
  - FILE_NAME
  - FILE_NAME_WITH_PATH
  - LAST_MODIFIED
  - TIMESTAMP
  - LAST_MODIFIED_DATE

## 🐉 Known Curses (Issues)

When opening Visual Studio Code with files that are already open from a previous session, Snippy's magic may not immediately include these files in the copying ritual. This curse occurs because these files are not part of the extension's mystical realm until the user actively views or focuses on them.

Alternative incantations, like listening to the vscode.window.onDidChangeActiveTextEditor event or scanning the entire workspace, might be considered to lift this curse. However, they would not guarantee a flawless solution and would invite additional complexity to the extension.

To ensure all desired files are copied to the clipboard, we recommend manually clicking on each open file's tab or selecting it from the directory tree before invoking Snippy's powers. This action will ensure the file is registered in the extension's mystical realm and included in the copying ritual.

## 📜 Scroll of Release Notes

For detailed release notes of Snippy's ever-evolving enchantments, please consult the [CHANGELOG.md](CHANGELOG.md) scroll.

### 0.3.1
⚙️ Mystical Modifications
- Refinement of ancient scripts for clarity and the upcoming potion upgrades.
- Ensured harmony with the Node crystal of version v18.17.0.
- Purified the testing rituals.

### 0.3.0
🎁 New Enchantments
- Customizable rune sequences! Choose your destiny with runes like FILE_NAME, FILE_NAME_WITH_PATH, LAST_MODIFIED, TIMESTAMP, and LAST_MODIFIED_DATE.
- Protective spells (unit tests) for utility functions (utils.test.ts) to ensure a shielded journey.

# License

[MIT](LICENSE) License, oh how thou art fair,
A whimsical license beyond compare!
With Snippy's powers, we weave our spell,
And with [MIT](https://mit-license.org/), we bid all wizards hail!

Copy, modify, and distribute with glee,
All thanks to [MIT's](https://en.wikipedia.org/wiki/MIT_License) enchanting decree.
Patent-free, we share our secrets bright,
And with this license, we take flight!

So let us dance with Snippy's might,
And share our code with utmost delight.
For with MIT, we cast our charm,
And spread our magic with open arms!

<details>
<summary>MIT License</summary>

<img alt="Easter Egg!" src="https://media.tenor.com/91XsEop9M8IAAAAC/spongebob-meme.gif">

</details>

# Extra
<sub><sup>📜 Ancient Scrolls of Snippy's Genesis:</sup></sub>

<sub><sup>In the early days of the GPT-4 era, Jarl Wagner was bestowed with the power of ChatGPT. Yet, the ancient scrolls had a limit, and at times, the Jarl had to seek guidance from the elder tome, GPT-3.5-TURBO. In his quest to harness the arcane knowledge of ChatGPT, a challenge arose: the tedious task of conjuring the contents of multiple scrolls into one. Thus, in a spark of inspiration, the magical artifact 'Snippy' was forged.</sup></sub>

<sub><sup>From the very dawn of its creation, Jarl Wagner decided that Snippy's destiny would be intertwined with ChatGPT. The spirit of ChatGPT would guide its path, craft its spells, and pen its tales. After many moons and suns, a working charm was finally conjured in the month of the third moon of 2023. Yet, the Jarl felt a shadow upon it and kept Snippy hidden from the realms.</sup></sub>

<sub><sup>But as the sands of time flowed, new enchantments emerged. The Plugins of ChatGPT, powerful artifacts that could extend one's vision and craft, beckoned the Jarl. With renewed vigor, Jarl Wagner thought, "Why not awaken Snippy from its slumber, let ChatGPT refine its magic, and present it to the world?" And so, this VSCode talisman stands before you, not as a beacon of perfection, but as a testament to a fun and enchanting journey through the realms of code and magic. 😉</sup></sub>