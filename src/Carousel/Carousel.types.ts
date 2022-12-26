import { ReactNode } from "react";

export interface CarouselComponentProps {
  width: number;
  height: number;
  borderRadius?: number;
  navigationPosition: string;
  dotSize?: number;
  dotColor?: string;
  dotColorHover?: string;
  dotMargin?: number;
  tabsData: Array<any>;
  textPosition?: string;
  textWidth?: number;
  dotMarginMobile?: number;
  textContentPadding?: number;
  imgPosition?:string;
  backgroundPosition?:string;
}
