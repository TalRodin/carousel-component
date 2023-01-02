import { ReactNode } from "react";

type TabData = {
  tabLabel: string;
  color?:string;
  image?:string;
  video?:string;
  text?:string;
  imgHorizontalPoint?:string;
  imgVerticalPoint?:string;
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
  dotMargin?: number;
  textPosition?: string;
  textWidth?: number;
  dotMarginMobile?: number;
  textContentPadding?: number;
  imgPosition?:string;
  backgroundPosition?:string;
}
