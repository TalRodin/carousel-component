import React from 'react';
import CarouselComponent from './Carousel';
import vectorImg from './images/vector.png';
import vectorImgRight from './images/vector-right.png';
import vectorImgTop from './images/vector-top.png';
import vectorImgBottom from './images/vector-bottom.png';
import FunctionComponent from './exampleFunctionComponent/FunctionComponent';

export default {
  title: 'CarouselComponent',
};

const tabsData = [
  {
    tabLabel: 'Art',
    color: '#fff',
    image:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
    htmlContent:
      '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<p><a href="https://github.com/TalRodin">Link</a></p></div>',
    imgHorizontalPoint: 'right',
    imgVerticalPoint: 'bottom',
  },
  {
    tabLabel: 'Project',
    color: '#fff',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    text: '',
  },
  {
    tabLabel: 'Random',
    color: '#fff',
    image:
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    component: FunctionComponent,
    text: 'Lorem ipsum dolor sit ametMaecenas pretium molestie dui ac consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
    htmlContent:
      '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<p><a href="https://github.com/TalRodin">Link</a></p></div>',
  },
  {
    tabLabel: 'Random',
    color: '#fff',
    image:
      'https://images.unsplash.com/photo-1623141629340-4686d65d60bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
  },
  {
    tabLabel: 'Random',
    color: '#fff',
    image:
      'https://images.unsplash.com/photo-1618489517037-66555962ff37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgHorizontalPoint: 'left',
    imgVerticalPoint: 'top',
  },
];

export const SmallCarousel = () => (
  <CarouselComponent
    width={50}
    height={60}
    mobileHeight={40}
    borderRadius={0}
    mobileBorderRadius={1}
    navigation={true}
    navigationPosition={'bottom'}
    dotSize={3}
    mobileDotSize={2}
    dotRadius={50}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={'2 1'}
    dotMarginMobile={'4 1'}
    tabsData={tabsData}
    textPosition={'top-center'}
    textWidth={49.5}
    mobileTextWidth={99}
    textHeight={46}
    mobileTextHeight={30}
    textContentPadding={36}
    // contentDirection={'row'}
    // mobileContentDirection={'column'}
    // tearFile={vectorImgTop}
    splitImageAlignment={'top'}
    backgroundPosition={'top 0px left 0px '}
    arrowNavigation={true}
    textContentDisplay={'grid'}
    gridGap={10}
    numberGridColumns={2}
    mobileNumberGridColumns={1}
    // textContentWidth={60}
    fontSize={14}
    mobileFontSize={12}
    dotBorder={2}
    dotBorderColor={'#212121'}
    navigationBorder={true}
    navigationBorderSize={2}
    navigationBorderColor={'#212121'}
    arrowButtonsBorder={true}
    arrowButtonsBorderSize={2}
    arrowButtonsColor={'#212121'}
    // contentBorder={true}
    // contentBordersSize={2}
    // contentBordersColor={'#212121'}
    arrowButtonBorderRadius={25}
    arrowButtonSize={'0 4'}
  />
);

export const LargeCarousel = () => (
  <CarouselComponent
    width={90}
    height={90}
    mobileHeight={40}
    borderRadius={12}
    mobileBorderRadius={1}
    navigation={true}
    navigationPosition={'bottom'}
    dotSize={3}
    // mobileDotSize={2}
    dotRadius={50}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={'2 1'}
    dotMarginMobile={'1 1'}
    tabsData={tabsData}
    textPosition={'left-center'}
    textWidth={50}
    mobileTextWidth={102}
    textHeight={42}
    mobileTextHeight={42}
    textContentPadding={36}
    // contentDirection={'row'}
    // mobileContentDirection={'column'}
    tearFile={vectorImgTop}
    splitImageAlignment={'top'}
    backgroundPosition={'top 0px left 0px '}
    arrowNavigation={true}
    textContentDisplay={'grid'}
    gridGap={10}
    numberGridColumns={2}
    mobileNumberGridColumns={1}
    // textContentWidth={60}
    fontSize={14}
    mobileFontSize={12}
  />
);
