import React, { useState, useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { CarouselComponentProps } from './Carousel.types';
import './Carousel.css';
import BackIcon from './svg/backIcon';
import ForwardIcon from './svg/forwardIcon';
import {
  calculateMarginDotNavigation,
  calculatePaddingNavigation,
} from './helper/helper';

const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {
  const [prevTab, setPreviousTab] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const focusableTabs = document.querySelectorAll('.text-content');
  const [contentLoaded, setContentLoaded] = useState(false);
  const allButtons = navigationRef.current?.querySelectorAll('.control-card');
  const [typeWindow, setTypeWindow] = useState('');

  useEffect(() => {
    const handleWindowResize = () => {
      setContentLoaded(true);
      if (window.innerWidth <= 600) {
        setTypeWindow('mobile');
      } else {
        setTypeWindow('desk');
      }
    };
    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const styleCarousel = {
    ['--width' as string]: props.width + 'vw',
    ['--height' as string]: props.height + 'vh',
    ['--mobile-width' as string]: props.mobileWidth
      ? props.mobileWidth + 'vw'
      : props.width + 'vw',
    ['--mobile-height' as string]: props.mobileHeight
      ? props.mobileHeight + 'vh'
      : props.height + 'vh',
    ['--borderRadius' as string]: props.borderRadius + 'px',
    ['--mobileBorderRadius' as string]: props.mobileBorderRadius
      ? props.mobileBorderRadius + 'px'
      : props.borderRadius + 'px',
    ['--dotSize' as string]: props.dotSize + 'px',
    ['--mobileDotSize' as string]: props.mobileDotSize
      ? props.mobileDotSize + 'px'
      : props.dotSize + 'px',
    ['--dotColor' as string]: props.dotColor,
    ['--dotColorHover' as string]: props.dotColorHover,
    ['--dotColorActive' as string]: props.dotColorActive,
    ['--dotMargin' as string]: props.dotMargin
      ? calculateMarginDotNavigation(props.dotMargin)
      : calculateMarginDotNavigation('2 2'),
    ['--textWidth' as string]: props.textWidth + 'vw',
    ['--textHeight' as string]: props.textHeight + 'vh',
    ['--text-content-padding' as string]: props.textContentPadding + 'px',
    ['--background-position' as string]: props.backgroundPosition,
    ['--dotRadius' as string]: props.dotRadius + 'px',
    ['--content-direction' as string]: props.contentDirection,
    ['--grid-gap' as string]: props.gridGap + 'px',
    ['--number-grid-columns' as string]: props.numberGridColumns,
    ['--text-content-width' as string]: props.textContentWidth + 'vw',
    ['--mobileTextWidth' as string]: props.mobileTextWidth + 'vw',
    ['--mobileTextHeight' as string]: props.mobileTextHeight + 'vh',
    ['--mobile-content-direction' as string]: props.mobileContentDirection,
    ['--mobile-number-grid-columns' as string]: props.mobileNumberGridColumns,
    ['--dotMarginMobile' as string]: props.dotMarginMobile
      ? calculateMarginDotNavigation(props.dotMarginMobile)
      : calculateMarginDotNavigation(props.dotMargin || '2 2'),
    ['--font-size' as string]: props.fontSize + 'px',
    ['--mobile-font-size' as string]: props.mobileFontSize
      ? props.mobileFontSize + 'px'
      : props.fontSize + 'px',
    ['--dot-border' as string]: props.dotBorder + 'px',
    ['--dot-border-color' as string]: props.dotBorderColor,
    ['--navigation-border-size' as string]: props.navigationBorderSize + 'px',
    ['--navigation-border-color' as string]: props.navigationBorderColor,
    ['--arrow-button-border-size' as string]:
      props.arrowButtonsBorderSize + 'px',
    ['--arrow-button-color' as string]: props.arrowButtonsColor,
    ['--content-borders-size' as string]: props.contentBordersSize + 'px',
    ['--content-borders-color' as string]: props.contentBordersColor,
    ['--arrow-button-border-radius' as string]:
      props.arrowButtonBorderRadius + 'px',
    ['--arrow-button-size' as string]:
      props.arrowButtonSize &&
      calculatePaddingNavigation(props.arrowButtonSize),
    ['--arrow-button-margin' as string]:
      props.arrowButtonMargin &&
      calculatePaddingNavigation(props.arrowButtonMargin),
    ['--arrow-button-background-color' as string]:
      props.arrowButtonBackgroundColor,
    ['--arrow-color' as string]: props.arrowColor,
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
    if (typeWindow === 'mobile') {
      let startX;
      let deltaX;
      const elementMove = (e: any) => {
        let deltaX = e.touches[0].clientX - startX;

        if (deltaX > 0) {
          if (currentTab >= 1) {
            setCurrentTab(currentTab - 1);
            setPreviousTab(currentTab);
          }
        }
        if (deltaX < 0) {
          if (currentTab < props.tabsData.length - 1) {
            setCurrentTab(currentTab + 1);
            setPreviousTab(currentTab);
          }
        }
      };

      const closeTouch = (e: any) => {
        deltaX = 0;
        document.ontouchend = null;
        document.ontouchmove = null;
      };
      document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        document.ontouchmove = elementMove;
        document.ontouchend = closeTouch;
      });
    }
  }, [typeWindow, currentTab]);

  useEffect(() => {
    if (props.navigation) {
      let focusEl;
      if (contentLoaded == true) {
        focusEl = Array.from(
          focusableTabs[currentTab]?.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        ).filter(
          (el) =>
            !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
        );
      }
      let prevButt;
      navigationRef.current.addEventListener(
        'keydown',
        function (e: KeyboardEvent) {
          if (e.key === 'ArrowUp') {
            prevButt = currentTab;
            if (focusEl && focusEl.length > 0) {
              (focusEl[0] as HTMLElement)?.focus();
            }
          }
        }
      );
      focusableTabs[currentTab]?.addEventListener(
        'keydown',
        function (e: KeyboardEvent) {
          if (e.key === 'ArrowDown') {
            (allButtons[prevButt] as HTMLElement)?.focus();
          }
        }
      );
    }
  }, [contentLoaded, currentTab, focusableTabs, allButtons, props.navigation]);

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
              className={`arrow-button left ${
                props.arrowButtonsBorder && 'arrow-button-border'
              }`}
              onClick={toggleArrowLeftButton}
              tabIndex={1}
            >
              <BackIcon />
            </button>
            <button
              className={`arrow-button right ${
                props.arrowButtonsBorder && 'arrow-button-border'
              }`}
              onClick={toggleArrowRightButton}
              tabIndex={1}
            >
              <ForwardIcon />
            </button>
          </>
        )}

        <div className='slides-card'>
          {props.tabsData.map((tab, index) => (
            <div
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
              <div
                className={`text ${props.contentBorder && 'content-border'}`}
                ref={contentRef}
                hidden={currentTab !== index}
                aria-hidden={currentTab !== index}
              >
                <div
                  className={`text-content ${
                    typeWindow === 'desk'
                      ? props.contentDirection
                      : props.mobileContentDirection
                  } ${props.textContentDisplay}`}
                >
                  {tab.text && (
                    <div
                      className={`txt-content ${
                        props.textContentDisplay === 'flex' &&
                        typeWindow === 'desk'
                          ? props.contentDirection
                          : props.mobileContentDirection
                      }`}
                      tabIndex={index === currentTab ? 0 : -1}
                    >
                      {tab.text}
                    </div>
                  )}
                  {tab.htmlContent && (
                    <div
                      tabIndex={index === currentTab ? 0 : -1}
                      className={`html-content ${
                        props.textContentDisplay === 'flex' &&
                        typeWindow === 'desk'
                          ? props.contentDirection
                          : props.mobileContentDirection
                      }`}
                      dangerouslySetInnerHTML={{ __html: tab.htmlContent }}
                    ></div>
                  )}
                </div>
                <div>{tab.component && <tab.component />}</div>
              </div>
            </div>
          ))}
        </div>
        {props.navigation && (
          <div
            className={
              props.tabsData.length > 1
                ? `nav-card ${props.navigationPosition} ${
                    props.navigationBorder && 'navigation-border'
                  }`
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
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
