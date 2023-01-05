import React from 'react';
import CarouselComponent from './Carousel';
import vectorImg from './images/vector.png';
import vectorImgRight from './images/vector-right.png';
import vectorImgTop from './images/vector-top.png';
import vectorImgBottom from './images/vector-bottom.png';

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
    // imgHorizontalPoint: 'right',
    // imgVerticalPoint: 'bottom',
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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    borderRadius={12}
    navigationPosition={'bottom'}
    dotSize={3}
    dotRadius={50}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={'2 1'}
    dotMarginMobile={4}
    tabsData={tabsData}
    textPosition={'left-center'}
    textWidth={42}
    textContentPadding={36}
    contentDirection={'column'}
    // tearFile={vectorImg}
    // splitImageAlignment={'left'}
    // backgroundPosition={'top 0px left 240px'}
    arrowNavigation={true}
  />
);

export const LargeCarousel = () => (
  <CarouselComponent
    width={90}
    height={90}
    borderRadius={16}
    navigationPosition={'right'}
    dotSize={4}
    dotRadius={25}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={'1 2'}
    dotMarginMobile={4}
    tabsData={tabsData}
    textPosition={'center'}
    textWidth={40}
    textContentPadding={24}
    contentDirection={'column'}
    tearFile={vectorImg}
    splitImageAlignment={'left'}
    backgroundPosition={'right 35% bottom 45%'}
  />
);
