import React, { useState, useCallback, useEffect } from 'react';
import classnames from 'classnames';
import { CarouselComponentProps } from './Carousel.types';

import './Carousel.css';

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  width,
  height,
  borderRadius,
  navigationPosition,
  dotSize,
  dotColor,
  dotColorHover,
  dotMargin,
  tabsData,
  textPosition,
  textWidth,
  dotMarginMobile,
  textContentPadding,
  imgPosition,
  backgroundPosition,
}) => {
  const [prevTab, setPreviousTab] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<number>(0);

  const styleCarousel = {
    '--width': width + 'vw',
    height: height + 'vh',
    '--borderRadius': borderRadius + 'px',
    '--dotSize': dotSize + 'px',
    '--dotColor': dotColor,
    '--dotColorHover': dotColorHover,
    '--dotMargin': dotMargin + 'vw',
    '--dotMarginMobile': dotMarginMobile + 'vw',
    '--textWidth': textWidth + 'vw',
    '--text-content-padding': textContentPadding + 'px',
    '--img-position-vertical': imgPosition && imgPosition.split(' ')[1] + 'px',
    '--img-position-horizontal':
      imgPosition && imgPosition.split(' ')[0] + 'px',
    '--background-position': backgroundPosition,
  };

  const toggleTab = useCallback(
    (e: any) => {
      const index = parseInt(e.target.dataset.index);
      if (index === currentTab) {
        return;
      }
      setCurrentTab(index);
      setPreviousTab(currentTab);
    },
    [currentTab]
  );

  const imageStyles = [];
  tabsData.forEach((tab, index) => {
    imageStyles[index] = classnames(
      'image-content',
      { 'is-active-image': currentTab === index },
      { 'is-right': currentTab < index },
      { 'is-left': currentTab > index },
      { 'is-previous': prevTab === index },
      {
        'bg-mobile-horizontal-left': tab['imgHorizontalPointMobile'] === 'left',
      },
      {
        'bg-mobile-horizontal-right':
          tab['imgHorizontalPointMobile'] === 'right',
      },
      {
        'bg-mobile-horizontal-center':
          tab['imgHorizontalPointMobile'] === 'center',
      },
      {
        'bg-mobile-vertical-top': tab['imgVerticalPointMobile'] === 'top',
      },
      {
        'bg-mobile-vertical-center': tab['imgVerticalPointMobile'] === 'center',
      },
      {
        'bg-mobile-vertical-bottom': tab['imgVerticalPointMobile'] === 'bottom',
      },

      {
        'bg-desktop-horizontal-left': tab['imgHorizontalPoint'] === 'left',
      },
      {
        'bg-desktop-horizontal-right': tab['imgHorizontalPoint'] === 'right',
      },
      {
        'bg-desktop-horizontal-center': tab['imgHorizontalPoint'] === 'center',
      },
      { 'bg-desktop-vertical-top': tab['imgVerticalPoint'] === 'top' },
      {
        'bg-desktop-vertical-center': tab['imgVerticalPoint'] === 'center',
      },
      {
        'bg-desktop-vertical-bottom': tab['imgVerticalPoint'] === 'bottom',
      }
    );
  });

  return (
    <div style={styleCarousel} className='carousel-wrapper'>
      <div className='image-card'>
        <div className='slides-card'>
          {tabsData.map((tab, index) => (
            <div
              aria-hidden={currentTab !== index}
              key={`image-${index}`}
              className={`${imageStyles[index]} ${textPosition}`}
              style={
                {
                  backgroundImage: `url(${tab.image})`,
                  backgroundColor: `${tab.color}`,
                }
                // tab.image
                //   ? { backgroundImage: `url(${tab.image})` }
                //   : { backgroundColor: `${tab.color}` }
              }
            >
              {tab.text && (
                <div className='text'>
                  <div className='text-content'>{tab.text}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={
            tabsData.length > 1 ? `nav-card ${navigationPosition}` : 'empty-nav'
          }
        >
          {tabsData.length > 1 &&
            tabsData.map((tab, index) => (
              <button
                aria-selected={index === currentTab}
                aria-controls={`tab-panel-${index}`}
                data-index={index}
                id={`tab-${index}`}
                key={`button-${index}`}
                onClick={toggleTab}
                role='tab'
                type='button'
                className={`control-card ${
                  index === currentTab ? 'is-active' : ''
                }`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
