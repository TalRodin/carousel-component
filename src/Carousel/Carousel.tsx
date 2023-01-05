import React, { useState, useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { CarouselComponentProps } from './Carousel.types';
import './Carousel.css';
import BackIcon from './svg/backIcon';
import ForwardIcon from './svg/forwardIcon';

const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {
  const [prevTab, setPreviousTab] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const focusableTabs = document.querySelectorAll('.text-content');
  const [contentLoaded, setContentLoaded] = useState(false);
  const allButtons = navigationRef.current?.querySelectorAll('.control-card');

  useEffect(() => {
    const handleWindowResize = () => {
      setContentLoaded(true);
    };
    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
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

  useEffect(() => {
    if (props.tearFile) {
      let file = props.tearFile;
      if (containerRef.current) {
        if (props.splitImageAlignment === 'left') {
          containerRef.current.style.maskImage = `url(${file}), linear-gradient(to right, black 100%, black 0)`;
          containerRef.current.style.webkitMaskImage = `url(${file}), linear-gradient(to right, black 100%, black 0)`;
        } else if (props.splitImageAlignment === 'right') {
          containerRef.current.style.maskImage = `url(${file}), linear-gradient(to left, black 0%, black 100%)`;
          containerRef.current.style.webkitMaskImage = `url(${file}), linear-gradient(to left, black 0%, black 100%)`;
        } else if (props.splitImageAlignment === 'bottom') {
          containerRef.current.style.maskImage = `url(${file}), linear-gradient(to bottom, black 0%, black 100%)`;
          containerRef.current.style.webkitMaskImage = `url(${file}), linear-gradient(to bottom, black 0%, black 100%)`;
        } else if (props.splitImageAlignment === 'top') {
          containerRef.current.style.maskImage = `url(${file}), linear-gradient(to top, black 100%, black 0)`;
          containerRef.current.style.webkitMaskImage = `url(${file}), linear-gradient(to top, black 100%, black 0)`;
        }
      }
    }
  }, [props.splitImageAlignment]);

  const containerTear = classnames(
    'image-card',
    { 'has-tear': props.tearFile },
    { 'is-aligned-left': props.splitImageAlignment === 'left' },
    { 'is-aligned-right': props.splitImageAlignment === 'right' },
    { 'is-aligned-top': props.splitImageAlignment === 'top' },
    { 'is-aligned-bottom': props.splitImageAlignment === 'bottom' }
  );

  useEffect(() => {
    let focusEl;
    if (contentLoaded == true) {
      focusEl = [
        ...focusableTabs[currentTab].querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        ),
      ].filter(
        (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
      );
    }
    let prevButt;
    navigationRef.current.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp') {
        prevButt = currentTab;
        if (focusEl && focusEl.length > 0) {
          focusEl[0].focus();
        }
      }
    });
    focusableTabs[currentTab]?.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        allButtons[prevButt]?.focus();
      }
    });
  }, [contentLoaded, currentTab, focusableTabs, allButtons]);

  const toggleArrowLeftButton = useCallback(
    (e) => {
      if (currentTab >= 1) {
        setCurrentTab(currentTab - 1);
        setPreviousTab(currentTab);
      }
    },
    [currentTab]
  );
  const toggleArrowRightButton = useCallback(
    (e) => {
      if (currentTab < props.tabsData.length - 1) {
        setCurrentTab(currentTab + 1);
        setPreviousTab(currentTab);
      }
    },
    [currentTab]
  );

  return (
    <div style={styleCarousel} className='carousel-wrapper'>
      <div className={containerTear} ref={containerRef}>
        {props.arrowNavigation && (
          <>
            {' '}
            <button
              className='arrow-button left'
              onClick={toggleArrowLeftButton}
            >
              <BackIcon />
            </button>
            <button
              className='arrow-button right'
              onClick={toggleArrowRightButton}
            >
              <ForwardIcon />
            </button>
          </>
        )}

        <div className='slides-card'>
          {props.tabsData.map((tab, index) => (
            <div
              aria-hidden={currentTab !== index}
              key={`image-${index}`}
              className={`${imageStyles[index]} ${props.textPosition} 
         
              `}
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
              <div className='text' ref={contentRef}>
                <div className={`text-content ${props.contentDirection}`}>
                  {tab.text && (
                    <div tabIndex={index === currentTab ? 0 : -1}>
                      {tab.text}
                    </div>
                  )}
                  {tab.htmlContent && (
                    <div
                      tabIndex={index === currentTab ? 0 : -1}
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
          ref={navigationRef}
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
