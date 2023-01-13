import { ReactNode } from 'react';
type TabData = {
  tabLabel: string;
  color?: string;
  image?: string;
  video?: string;
  text?: string;
  imgHorizontalPoint?: string;
  imgVerticalPoint?: string;
  htmlContent?: string;
  component?: any;
};

export interface CarouselComponentProps {
  tabsData: Array<TabData>;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
  navigationPosition?: string;
  borderRadius?: number;
  mobileBorderRadius?: number;
  dotSize?: number;
  mobileDotSize?: number;
  dotColor?: string;
  dotColorHover?: string;
  dotColorActive?: string;
  dotMargin?: string;
  textPosition?: string;
  textWidth?: number;
  textHeight?: number;
  dotMarginMobile?: string;
  textContentPadding?: number;
  backgroundPosition?: string;
  dotRadius?: number;
  contentDirection?: string;
  tearFile?: string;
  splitImageAlignment?: string;
  arrowNavigation: boolean;
  mobileTextWidth?: number;
  mobileTextHeight?: number;
  mobileContentDirection?: string;
  textContentDisplay?: string;
  gridGap?: number;
  textContentWidth?: number;
  numberGridColumns?: number;
  mobileNumberGridColumns?: number;
  navigation?: boolean;
  fontSize?: number;
  mobileFontSize?:number;
  dotBorder?: number;
  dotBorderColor?:string;
  navigationBorder?: boolean;
  arrowButtonsBorder?:boolean;
  contentBorder?:boolean
  navigationBorderSize?:number;
  navigationBorderColor?:string;
  arrowButtonsSize?:number;
  arrowButtonsColor?:string;
  contentBordersSize?:number;
  contentBordersColor?:string;
}

