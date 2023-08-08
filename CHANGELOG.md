# 📜 Scroll of Enchantments

Greetings, noble code wizard! 🧙‍♂️ This ancient scroll chronicles the ever-evolving enchantments and spells of Snippy, the magical extension that has journeyed through the realms of code.

## [0.3.1] - 08-08-2023
### ⚙️ Mystical Modifications
- Refinement of ancient scripts for clarity and the upcoming potion upgrades.
- Ensured harmony with the Node crystal of version v18.17.0.
- Purified the testing rituals.

## [0.3.0] - 03-22-2023
### 🎁 New Enchantments
- Customizable rune sequences! Choose your destiny with runes like FILE_NAME, FILE_NAME_WITH_PATH, LAST_MODIFIED, TIMESTAMP, and LAST_MODIFIED_DATE.
- Protective spells (unit tests) for utility functions (utils.test.ts) to ensure a shielded journey.

### ⚙️ Mystical Modifications

- User settings for customizing separator sequences have arrived! Set sail with options for FILE_NAME, FILE_NAME_WITH_PATH, LAST_MODIFIED, TIMESTAMP, and LAST_MODIFIED_DATE.
- Upgraded our communication methods from showInformationMessage API to the more stylish setStatusBarMessage API for success messages.
- Separator sequence makeover: "<#-(FILE_NAME_WITH_PATH)-#>"
- Updated `getSeparatorSequence` function to use user settings for the separator sequence format.
- Added 'await' keyword before calling `getSeparatorSequence` in `copyAllOpenFiles` function for a smoother voyage.

## [0.2.1] - 03-21-2023

### ⚙️ Changed

- Snippy got a cleanup crew! Strips newlines, erroneous spaces, and tabs between HTML elements for a tidier treasure trove.
- Each file's content now gets wrapped with a fancy string like: "`<!--{FILE_NAME}-->\nCONTENT\n<!--(FILE_NAME)-->\n`".

## [0.2.0] - 03-20-2023

### 🎁 Added

- The maiden voyage of Snippy begins! 🌊 Initial release with these fantastic features:
  - Copy all open files' content to the clipboard without newlines.
  - Ignores .git files and non-file URIs like a true navigator.
  - Automatically saves unsaved or modified documents before copying the content, because safety first!

## [0.1.0] - 03-20-2023

- 🚀
