import React from 'react';
import CarouselComponent from './Carousel';

export default {
  title: 'CarouselComponent',
};

const tabsData = [
  {
    tabLabel: 'Art',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
  },
  {
    tabLabel: 'Project',
    color: '#212121',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1623141629340-4686d65d60bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1618489517037-66555962ff37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
export const SmallCarousel = () => (
  <CarouselComponent
    width={50}
    height={60}
    borderRadius={10}
    navigationPosition={'right-bottom'}
    dotSize={4}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={1}
    dotMarginMobile={4}
    tabsData={tabsData}
    textPosition={'left-center'}
    textWidth={24}
    textContentPadding={24}
    // imgPosition={'100 50'}
    // backgroundPosition={'right 35px bottom 45px'}
  />
);

export const LargeCarousel = () => (
  <CarouselComponent
    width={90}
    height={90}
    borderRadius={16}
    navigationPosition={'right'}
    dotSize={4}
    dotColor={'#212121'}
    dotColorHover={'#eeeeee'}
    dotColorActive={'#fff'}
    dotMargin={1}
    dotMarginMobile={4}
    tabsData={tabsData}
    textPosition={'left-center'}
    textWidth={24}
    textContentPadding={24}
    // imgPosition={'50 50'}
    // backgroundPosition={'right 35% bottom 45%'}
  />
);
