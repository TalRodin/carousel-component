import { ReactNode } from "react";

type TabData = {
  tabLabel: string;
  color?:string;
  image?:string;
  video?:string;
  text?:string;
  imgHorizontalPoint?:string;
  imgVerticalPoint?:string;
  htmlContent?:string;
  component?: any;
}

export interface CarouselComponentProps {
  width: number;
  height: number;
  mobileWidth?:number;
  mobileHeight?:number;
  tabsData: Array<TabData>;
  navigationPosition?: string;
  borderRadius?: number; 
  mobileBorderRadius?:number;
  dotSize?: number;
  mobileDotSize?:number;
  dotColor?: string;
  dotColorHover?: string;
  dotColorActive?: string;
  dotMargin?: string;
  textPosition?: string;
  textWidth?: number;
  textHeight?:number;
  dotMarginMobile?: string;
  textContentPadding?: number;
  backgroundPosition?:string;
  dotRadius?:number;
  contentDirection?: string;
  tearFile?:string;
  splitImageAlignment?:string;
  arrowNavigation:Boolean;
  mobileTextWidth?:number;
  mobileTextHeight?:number;
  mobileContentDirection?:string;
  textContentDisplay?: string;
  gridGap?: number;
  textContentWidth?:number;
  numberGridColumns?:number;
  mobileNumberGridColumns?: number;
  navigation?:boolean;
}
