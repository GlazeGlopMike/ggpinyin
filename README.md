# GGPinyin
## Table of Contents
- [About](#about)
- [Setup](#setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Known Issues](#known-issues)
- [Proposed Features](#proposed-features)
- [License and Copyright](#license-and-copyright)

## About
GGPinyin (GG拼音) is a Chrome extension that romanizes Chinese characters using the [Hanyu Pinyin (汉语拼音)](https://en.wikipedia.org/wiki/Pinyin) system. It also supports Cantonese romanization using the Linguistic Society of Hong Kong Cantonese Romanization Scheme, more commonly known as [Jyutping (粵拼)](https://en.wikipedia.org/wiki/Jyutping).

GGPinyin is written in JavaScript and matches text using data from the CC-CEDICT and CC-CANTO open source dictionaries.

## Setup
1. Download the entire repository as a ZIP folder.

2. Unzip the folder in your desired location.

3. Go to [chrome://extensions/](chrome://extensions/).

4. Click on the "Load unpacked" button and select the unzipped folder.

5. Find the GGPinyin card and click on the "Details" button.

6. Enable the "Allow in Incognito" option.

## Usage
To romanize a range of text, first highlight the text range. Right-click and select the "Romanize Hanzi" option. Alternatively, open the GGPinyin popup by clicking its extension icon and then click on the "Romanize" button to romanize the highlighted text. 

## How It Works
### Dictionary Generation
`pinyin.txt` is generated using a parser program that goes through the CC-CEDICT file line-by-line. For each line in the source file, it generates a line `pinyin.txt` containing a token with the Chinese text followed by the Pinyin. Some "special case" entries are ommitted and Simplified/Traditional variations of the same characters are recorded separately on concurrent lines. During this process, numerical tone indicators are resolved into diacritics over the appropriate vowels (e.g. zhong1 wen2 → zhōng wén). `jyutping.txt` is generated the same way, but with the numerical tone indicators preserved.

The pre-processing infrastructure is separate from this repository and currently operated manually. There are plans to automate this in JavaScript and incorporate the dictionary builder directly into JavaScript.

### Romanization Procedure
Whenever a tab loads or refreshes, GGPinyin loads the contents of `pinyin.txt` and `jyutping.txt` into memory as dictionaries. When you tell GGPinyin to romanize a selection, GGPinyin starts at the first character of the string and attempts to match it to an entry in `pinyin.txt`. If the character cannot be matched to a key from the romanization dictionary, then it is unchanged in the output. Otherwise, GGPinyin appends the next character and searches the dictionary again, repeating this process until the end of the string is reached or the substring cannot be found among the dictionary keys. GGPinyin will then append the corresponding Pinyin or Jyutping from the dictionary to the output buffer, spaced appropriately.

Note that character-by-character romanization is impossible due to the existence of many Chinese characters with multiple pronunciations (多音字).

### Limitations
GGPinyin can only recognize character sequences provided by its dictionaries. Rare Chinese characters may not be recognized, and support for Jyutping is less extensive than Pinyin functionality. Due to the intricacies of human language and the absence of word segmentation, the romanization procedure may not always choose the correct pronunciation for a character with multiple possible pronunciations.

Do also note that some Chinese characters are used in Cantonese but not in Mandarin, and vice versa.

## Known Issues
- Incorrect pronunciations for many characters with multiple pronunciations (likely romanization procedure issue)
- Some characters not resolving correctly despite available dictionary data
- U with umlaut (ü) not appearing in output (pre-processing issue)

## Proposed Features
- Custom output pane
- Dictionary updater
- Optical character recognition
- Punctuation resolution
- Settings menu


## License and Copyright
This software is available under the MIT License. See `LICENSE` for more details.

The Pinyin dictionary `pinyin.txt` is derived from the [CC-CEDICT project](https://www.mdbg.net/chinese/dictionary?page=cc-cedict) copyright © 2022 MDBG, with some elements © 1997-1998 Paul Andrew Denisowski. The Jyutping dictionary `jyutping.txt` is derived from CC-Canto and the Cantonese readings for CC-CEDICT [(found here)](https://cantonese.org/download.html) copyright © 2015-2016 Pleco Software, where the latter source is built upon the same CC-CEDICT project attributed to above. The contents of the Pinyin and Jyutping dictionaries provided with this extension are available under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/legalcode).
