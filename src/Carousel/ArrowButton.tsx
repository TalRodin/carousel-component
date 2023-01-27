import React, { useEffect, useState, useCallback } from 'react';
import BackIcon from './svg/backIcon';
import ForwardIcon from './svg/forwardIcon';
import './Carousel.css';
import { CarouselComponentProps } from './Carousel.types';
import {
  calculateMarginDotNavigation,
  calculatePaddingNavigation,
} from './helper/helper';

const ArrowButton = ({
  arrowButtonsBorder,
  toggleArrowLeftButton,
  toggleArrowRightButton,
  arrowButtonSize,
  arrowButtonBackgroundColor,
  arrowButtonsBorderSize,
  arrowButtonsColor,
  arrowButtonBorderRadius,
  arrowButtonMargin,
  arrowColor,
}) => {
  const styleButton = {
    ['--arrow-button-size' as string]:
      arrowButtonSize && calculatePaddingNavigation(arrowButtonSize),
    ['--arrow-button-background-color' as string]: arrowButtonBackgroundColor,
    ['--arrow-button-border-size' as string]: arrowButtonsBorderSize + 'px',
    ['--arrow-button-color' as string]: arrowButtonsColor,
    ['--arrow-button-border-radius' as string]: arrowButtonBorderRadius + 'px',
    ['--arrow-button-margin' as string]:
      arrowButtonMargin && calculatePaddingNavigation(arrowButtonMargin),
    ['--arrow-color' as string]: arrowColor,
  };
  return (
    <>
      <button
        style={styleButton}
        className={`arrow-button left ${
          arrowButtonsBorder && 'arrow-button-border'
        }`}
        onClick={toggleArrowLeftButton}
        tabIndex={0}
        title='button'
        id='back-button'
      >
        <BackIcon />
      </button>
      <button
        style={styleButton}
        className={`arrow-button right ${
          arrowButtonsBorder && 'arrow-button-border'
        }`}
        onClick={toggleArrowRightButton}
        tabIndex={0}
        title='button'
        id='forward-button'
      >
        <ForwardIcon />
      </button>
    </>
  );
};

export default ArrowButton;
