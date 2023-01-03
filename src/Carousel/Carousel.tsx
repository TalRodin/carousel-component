import React, { useState, useCallback, useEffect } from 'react';
import classnames from 'classnames';
import { CarouselComponentProps } from './Carousel.types';
import './Carousel.css';

const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {
  const [prevTab, setPreviousTab] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    console.log(props.tabsData);
  }, []);

  const styleCarousel = {
    '--width': props.width + 'vw',
    height: props.height + 'vh',
    '--borderRadius': props.borderRadius + 'px',
    '--dotSize': props.dotSize + 'px',
    '--dotColor': props.dotColor,
    '--dotColorHover': props.dotColorHover,
    '--dotColorActive': props.dotColorActive,
    '--dotMargin': props.dotMargin
      .split(' ')
      .map((v: string) => {
        return v + 'vw';
      })
      .join(' '),
    '--dotMarginMobile': props.dotMarginMobile + 'vw',
    '--textWidth': props.textWidth + 'vw',
    '--text-content-padding': props.textContentPadding + 'px',
    '--img-position-vertical':
      props.imgPosition && props.imgPosition.split(' ')[1] + 'px',
    '--img-position-horizontal':
      props.imgPosition && props.imgPosition.split(' ')[0] + 'px',
    '--background-position': props.backgroundPosition,
    '--dotRadius': props.dotRadius + 'px',
    '--content-direction': props.contentDirection,
  };

  const toggleTab = useCallback(
    (e) => {
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
  props.tabsData.forEach((tab, index) => {
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
          {props.tabsData.map((tab, index) => (
            <div
              aria-hidden={currentTab !== index}
              key={`image-${index}`}
              className={`${imageStyles[index]} ${props.textPosition} `}
              style={{
                backgroundImage: `url(${tab.image})`,
                backgroundColor: `${tab.color}`,
              }}
            >
              {tab.video && (
                <video
                  autoPlay
                  muted
                  loop
                  id='myVideo'
                  className='video-wrapper'
                >
                  <source src={tab.video} type='video/mp4' />
                </video>
              )}
              <div className='text'>
                <div className={`text-content ${props.contentDirection}`}>
                  {tab.text && <div>{tab.text}</div>}
                  {tab.htmlContent && (
                    <div
                      className={`html-content ${props.contentDirection}`}
                      dangerouslySetInnerHTML={{ __html: tab.htmlContent }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={
            props.tabsData.length > 1
              ? `nav-card ${props.navigationPosition}`
              : 'empty-nav'
          }
        >
          {props.tabsData.length > 1 &&
            props.tabsData.map((tab, index) => (
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
