# gallery-ar-component [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> 'gallery-ar-component' is a customizable, lightweight library for creating a responsive image gallery carousel. It is designed to be easy to use and integrate into your project with minimal setup.

## Table of contents

- [Carousel Component Library](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Properties](#properties)
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

```js
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

Tabs Data accepts:

| **tabLabel**| string |
| **color**| string |
| **image**| string |
| **video**| string |
| **text**| string |
| **htmlContent**| string |
| **imgHorizontalPoint**| string: 'left','center','right' |
| **imgVerticalPoint**| string: 'top','center','bottom' |
| **component**| Ex.: component: nameOfComponent |

Example:

```js
<CarouselComponent
  tabsData={tabsData}
  width={50}
  height={60}
  navigationPosition={'bottom'}
  dotSize={4}
  dotMargin={1}
/>
```

### Properties

| Properties              | Requirement | Variations                                                                                                                                     | Description                                                                                                                                                                                                           |
| ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **tabsData**            | `Required`  | format displayed above - [Usage](#usage)                                                                                                       | _Data for each tab to display_                                                                                                                                                                                        |
| **width**               | `Required`  | number                                                                                                                                         | _Width of the Gallery in `vw`_                                                                                                                                                                                        |
| **height**              | `Required`  | number                                                                                                                                         | _Height of the Gallery in `vh`_                                                                                                                                                                                       |
| **navigationPosition**  | `Required`  | 'bottom', 'bottom-left','bottom-right', 'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom','right', 'right-top', 'right-bottom' | _Navigation Position_                                                                                                                                                                                                 |
| **dotSize**             | `Required`  | number                                                                                                                                         | _Size of navigation buttons in `px`_                                                                                                                                                                                  |
| **borderRadius**        |             | number                                                                                                                                         | _Border radius of the gallery in `px`_                                                                                                                                                                                |
| **dotColor**            |             | hex color, string                                                                                                                              | _Color of buttons_                                                                                                                                                                                                    |
| **dotColorHover**       |             | hex color, string                                                                                                                              | _Color of buttons_                                                                                                                                                                                                    |
| **dotMargin**           |             | string                                                                                                                                         | _Margin around the buttons in `vw`. Ex.: '1 2 1 2' (top, right, bottom, and left), '1' is 1vw on top, bottom, left and right._                                                                                        |
| **textPosition**        |             | 'left-center', 'center, 'right-center', 'top-center', 'bottom-center'                                                                          | _Position of text_                                                                                                                                                                                                    |
| **dotColorActive**      |             | hex color, string                                                                                                                              | _Color of active_ button                                                                                                                                                                                              |
| **dotRadius**           |             | number                                                                                                                                         | _Radius of buttons_                                                                                                                                                                                                   |
| **contentDirection**    |             | 'row', 'column'                                                                                                                                | _Direction of content if dataTabs contains text and html content._                                                                                                                                                    |
| **splitImageAlignment** |             | 'top', 'bottom', 'left', 'right'                                                                                                               | _Mask image alignment._                                                                                                                                                                                               |
| **tearFile**            |             | string                                                                                                                                         | _Import image .png as `import nameYourImage from path/imageFile.png` in your component and insert into `<CarouselComponent tearFile={nameYourImage}/>`. Example of image please take in the src/Carousel/images file_ |
| **backgroundPosition**  |             | string                                                                                                                                         | _Background(image) position. Ex.:`top 20px right 30px`. First value is top/bottom, second value right/left and `px` number._                                                                                          |
| **arrowNavigation**     |             | boolean                                                                                                                                        | _Show arrow navigation_                                                                                                                                                                                               |

### Author

**Alyona Rodina**

- [github/alyonarodina](https://github.com/talrodin)

### License

Copyright © 2022, [Alyona Rodina](https://github.com/TalRodin).
Released under the [MIT License](LICENSE).
