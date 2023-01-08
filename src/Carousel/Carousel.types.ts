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
  tabsData: Array<TabData>;
  navigationPosition: string;
  borderRadius?: number; 
  dotSize?: number;
  dotColor?: string;
  dotColorHover?: string;
  dotColorActive?: string;
  dotMargin?: string;
  textPosition?: string;
  textWidth?: number;
  textHeight?:number;
  dotMarginMobile?: number;
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
}
