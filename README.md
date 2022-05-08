# GGPinyin
## Table of Contents
- [About](#about)
- [Setup](#setup)
- [Usage](#usage)
- [Proposed Features](#proposed-features)
- [License](#license)

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


## Proposed Features
- Automatic dictionary updates
- Custom output pane
- Optical character recognition
- Settings menu


## License and Copyright
This software is available under the MIT License. See `LICENSE` for more details.

The Pinyin dictionary `pinyin.txt` is derived from the [CC-CEDICT project](https://www.mdbg.net/chinese/dictionary?page=cc-cedict) copyright © 2022 MDBG, with some elements © 1997-1998 Paul Andrew Denisowski. The Jyutping dictionary `jyutping.txt` is derived from CC-Canto and the Cantonese readings for CC-CEDICT [(found here)](https://cantonese.org/download.html) copyright © 2015-2016 Pleco Software, where the latter source is built upon the same CC-CEDICT project attributed to above. The contents of the Pinyin and Jyutping dictionaries with this extension are available under under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/legalcode).
