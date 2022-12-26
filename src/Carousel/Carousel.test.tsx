import React from 'react';
import { render, within, cleanup, screen } from '@testing-library/react';
import 'jest';
import CarouselComponent from './Carousel';
import { CarouselComponentProps } from './Carousel.types';

const tabsDataTest = [
  {
    tabLabel: 'Art',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1626427223333-183395267453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
    // imgHorizontalPoint: 'left',
    // imgVerticalPoint: 'center',
  },
  {
    tabLabel: 'Project',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // imgHorizontalPoint: 'right',
    // imgVerticalPoint: 'center',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // imgHorizontalPoint: 'right',
    // imgVerticalPoint: 'center',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1623141629340-4686d65d60bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie dui ac consequat.',
    // imgHorizontalPoint: 'right',
    // imgVerticalPoint: 'center',
  },
  {
    tabLabel: 'Random',
    color: '#212121',
    image:
      'https://images.unsplash.com/photo-1618489517037-66555962ff37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // imgHorizontalPoint: 'right',
    // imgVerticalPoint: 'center',
  },
];

describe('CarouselComponent', () => {
  const renderComponent = ({
    width,
    height,
    navigationPosition,
    tabsData,
    textPosition,
  }: Partial<CarouselComponentProps>) =>
    render(
      <CarouselComponent
        width={width}
        height={height}
        navigationPosition={navigationPosition}
        tabsData={tabsData}
        textPosition={textPosition}
      />
    );

  it('should render the component correctly with width, height and navigation position', () => {
    renderComponent({
      width: 90,
      height: 80,
      navigationPosition: 'bottom',
      tabsData: tabsDataTest,
    });

    const carousel = document.querySelector(
      '.carousel-wrapper'
    ) as HTMLDivElement;

    setTimeout(() => {
      if (carousel) {
        expect(carousel.offsetWidth).toBe('90vw');
        expect(carousel.offsetHeight).toBe('80vh');
      }
    }, 1000);
  });

  it('should render navigation correctly', () => {
    renderComponent({
      width: 90,
      height: 80,
      navigationPosition: 'bottom',
      tabsData: tabsDataTest,
    });

    const navigation = document.querySelector('.nav-card') as HTMLDivElement;
    expect(navigation.className.split(' ').includes('bottom'));
  });

  it('should render text position correctly', () => {
    renderComponent({
      width: 90,
      height: 80,
      textPosition: 'left-center',
      tabsData: tabsDataTest,
    });
    setTimeout(() => {
      const content = document.querySelector(
        '.image-content'
      ) as HTMLDivElement;
      expect(content.className.split(' ').includes('left-center'));
    });
  });
});
