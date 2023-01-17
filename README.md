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

| Name                         | Type                            |
| ---------------------------- | ------------------------------- |
| **tabLabel**                 | string                          |
| **color**                    | string                          |
| **image**                    | string                          |
| **video**                    | string                          |
| **text**                     | string                          |
| **htmlContent**              | string                          |
| **imgHorizontalPoint**       | string: 'left','center','right' |
| **imgVerticalPoint**         | string: 'top','center','bottom' |
| **imgHorizontalPointMobile** | string: 'left','center','right' |
| **imgVerticalPointMobile**   | string: 'top','center','bottom' |
| **component**                | Ex.: component: nameOfComponent |

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

- Dimentions of the carousel

  | Properties             | Requirement | Variations                               | Description                                                                                                           |
  | ---------------------- | ----------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
  | **tabsData**           | `Required`  | format displayed above - [Usage](#usage) | _Data for each tab to display._                                                                                       |
  | **width**              | `Required`  | number                                   | _Width of the Gallery in `vw`._                                                                                       |
  | **height**             | `Required`  | number                                   | _Height of the Gallery in `vh`._                                                                                      |
  | **mobileWidth**        |             | number                                   | _Width in the mobile version in `vw`. If it not provided then it will use the desk width `width`._                    |
  | **mobileHeight**       |             | number                                   | _Height in the mobile version in `vh`\_. If it not provided then it will use the desk height `height`._               |
  | **borderRadius**       |             | number                                   | _Border radius of the gallery in `px`._                                                                               |
  | **mobileBorderRadius** |             | number                                   | _Mobile border radius in `px`. Accepts values from 1 and greater. If 0 provided it will take the desk border radius._ |

- Navigation

  | Properties                     | Requirement       | Variations                                                                                                                                     | Description                                                                                                                                                                  |
  | ------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **arrowNavigation**            |                   | boolean                                                                                                                                        | _Show arrow navigation. If true two arrows appear to switch tabs back and forward._                                                                                          |
  | **navigation**                 |                   | boolean                                                                                                                                        | _Show dot navigation._                                                                                                                                                       |
  | **navigationPosition**         |                   | 'bottom', 'bottom-left','bottom-right', 'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom','right', 'right-top', 'right-bottom' | _Navigation Position._                                                                                                                                                       |
  | **dotSize**                    |                   | number                                                                                                                                         | _Size of dot navigation buttons in `px`._                                                                                                                                    |
  | **mobileDotSize**              |                   | number                                                                                                                                         | _Mobile size of dot nav.igation buttons in `px`. If not provided then it will use desk dot size._                                                                            |
  | **dotColor**                   |                   | hex color, string                                                                                                                              | _Color of dot buttons_                                                                                                                                                       |
  | **dotColorHover**              |                   | hex color, string                                                                                                                              | _Color of dot buttons on hover/focus._                                                                                                                                       |
  | **dotColorActive**             |                   | hex color, string                                                                                                                              | _Color of active dot button._                                                                                                                                                |
  | **dotRadius**                  |                   | number                                                                                                                                         | _Radius of dot buttons._                                                                                                                                                     |
  | **dotMargin**                  |                   | string                                                                                                                                         | _Margin around the buttons in `vw`. Ex.: '1 2 1 2' (top, right, bottom, and left), '1' is 1vw on top, bottom, 2vw on left and right._                                        |
  | **dotMarginMobile**            |                   | string                                                                                                                                         | _Margin around the buttons in mobile in `vw`. Ex.: '1 2 1 2' (top, right, bottom, and left), '1' is 1vw on top, bottom, 2vw on left and right._                              |
  | **dotBorder**                  |                   | number                                                                                                                                         | _Border width for dot navigation in `px`._                                                                                                                                   |
  | **dotBorderColor**             |                   | hex color, string                                                                                                                              | _Color of the border._                                                                                                                                                       |
  | **navigationBorder**           |                   | boolean                                                                                                                                        | _True if to include border._                                                                                                                                                 |
  | **arrowButtonsBorder**         |                   | boolean                                                                                                                                        | _True if to include arrow button borders._                                                                                                                                   |
  | **navigationBorderSize**       |                   | number                                                                                                                                         | _Size of the navigation box in `px`. Only for top, bottom, left and right alighnment. NOT for top-left, etc._                                                                |
  | **navigationBorderColor**      |                   | hex color, string                                                                                                                              | _Color of the navigation box._                                                                                                                                               |
  | **arrowButtonsBorderSize**     |                   | number                                                                                                                                         | _Size of the arrow buttons box in `px`._                                                                                                                                     |
  | **arrowButtonsColor**          |                   | hex color, string                                                                                                                              | _Color of the navigation box._                                                                                                                                               |
  | **arrowButtonBorderRadius**    |                   | number                                                                                                                                         | _Radius of arrow button._                                                                                                                                                    |
  | **arrowButtonSize**            |                   | string                                                                                                                                         | _Padding around the arrow buttons in `px`. Ex.: '1 2 1 2' (top, right, bottom, and left), '1' is 1px on top, bottom, 2px on left and right. Other example '1 2' is 1px 2px._ |
  | **arrowButtonMargin**          |                   | string                                                                                                                                         | _Margin around arrow button in `px`. Ex.: '1 2 1 2' (top, right, bottom, and left), '1' is 1px on top, bottom, 2px on left and right. Other example '1 2' is 1px 2px._       |
  | **arrowButtonBackgroundColor** |                   | hex color, string                                                                                                                              | _Color of the arrow button background._                                                                                                                                      |
  | **arrowColor**                 | hex color, string | _Arrow icon color._                                                                                                                            |

- Content

  | Properties                  | Requirement | Variations                                                            | Description                                                                            |
  | --------------------------- | ----------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
  | **textPosition**            |             | 'left-center', 'center, 'right-center', 'top-center', 'bottom-center' | _Position of text_                                                                     |
  | **contentDirection**        |             | 'row', 'column'                                                       | _Direction of content if dataTabs contains text and html content._                     |
  | **textWidth**               |             | number                                                                | _Width of the text(it includes text/hmtl/component content) content in `vw`._          |
  | **textHeight**              |             | number                                                                | _Height of the text(it includes text/hmtl/component content) content in `vh`._         |
  | **mobileTextWidth**         |             | number                                                                | _Width of the text(it includes text/hmtl/component content) content in `vw`._          |
  | **mobileTextHeight**        |             | number                                                                | _Height of the text(it includes text/hmtl/component content) content in `vh`._         |
  | **textContentWidth**        |             | number                                                                | _Regular Text content width in `vw`._                                                  |
  | **textContentDisplay**      |             | 'flex', 'grid'                                                        | _How to display the content_                                                           |
  | **gridGap**                 |             | number                                                                | _For the grid content display to add columns and rows gap if there is a need in `px`._ |
  | **numberGridColumns**       |             | number                                                                | _Number of columns for grid_                                                           |
  | **mobileNumberGridColumns** |             | number                                                                | _Mobile number of grid columns_                                                        |
  | **fontSize**                |             | number                                                                | _Size of the font in `px`._                                                            |
  | **mobileFontSize**          |             | number                                                                | _Mobile size of the font in `px`._                                                     |
  | **contentBorder**           |             | boolean                                                               | _True if to include content border._                                                   |
  | **contentBordersColor**     |             | hex color, string                                                     | _Color of border of content box._                                                      |
  | **contentBordersSize**      |             | number                                                                | _Width of border of content box._                                                      |

- Mask Images

  | Properties              | Requirement | Variations                       | Description                                                                                                                                                                                                            |
  | ----------------------- | ----------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **splitImageAlignment** |             | 'top', 'bottom', 'left', 'right' | _Mask image alignment._                                                                                                                                                                                                |
  | **tearFile**            |             | string                           | _Import image .png as `import nameYourImage from path/imageFile.png` in your component and insert into `<CarouselComponent tearFile={nameYourImage}/>`. Example of image please take in the src/Carousel/images file._ |

- Background position (Ex.: image, video)

  | Properties             | Requirement | Variations | Description                                                                                                                  |
  | ---------------------- | ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
  | **backgroundPosition** |             | string     | _Background(image) position. Ex.:`top 20px right 30px`. First value is top/bottom, second value right/left and `px` number._ |

### Author

**Alyona Rodina**

- [github/alyonarodina](https://github.com/talrodin)

### License

Copyright © 2022, [Alyona Rodina](https://github.com/TalRodin).
Released under the [MIT License](LICENSE).
