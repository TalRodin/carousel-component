# gallery-ar-component [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> 'gallery-ar-component' is a customizable, lightweight library for creating a responsive image gallery carousel. It is designed to be easy to use and integrate into your project with minimal setup.

## Table of contents

- [Carousel Component Library](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

## Installation

To install and set up the library, run:

```sh
$ npm install gallery-ar-component
```

## Usage

```js
import { CarouselComponent } from 'gallery-ar-component';
```

Pass data for each TAB in the format below:

```JSON
const tabsData = [
  {
    tabLabel: 'yourTabLabelName',
    color: 'color',
    image:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    text: 'Your text',
  },
  {
    tabLabel: 'yourTabLabelName',
    color: '#212121',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    text: 'Your text',
  },
  ...
];
```

### Author

**Alyona Rodina**

- [github/alyonarodina](https://github.com/talrodin)

### License

Copyright © 2022, [Alyona Rodina](https://github.com/TalRodin).
Released under the [MIT License](LICENSE).
