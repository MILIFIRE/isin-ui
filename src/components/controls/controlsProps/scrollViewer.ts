import { Image } from "@babylonjs/gui";
import { RectangleProps, RectangleDefaultProps } from ".";

export interface ScrollViewerProps extends RectangleProps {
  freezeControls?: boolean;
  bucketHeight?: number;
  forceHorizontalBar?: boolean;
  forceVerticalBar?: boolean;
  wheelPrecision?: number;
  scrollBackground?: string;
  barColor?: string;
  thumbImage?: Image;
  horizontalThumbImage?: Image;
  verticalThumbImage?: Image;
  barSize?: number;
  thumbLength?: number;
  thumbHeight?: number;
  barImageHeight?: number;
  horizontalBarImageHeight?: number;
  verticalBarImageHeight?: number;
  barBackground?: string;
  barImage?: Image;
  horizontalBarImage?: Image;
  verticalBarImage?: Image;
  isImageBased?:boolean;
}
export const ScrollViewerDefaultProps = {
  freezeControls: false,
  forceHorizontalBar: false,
  forceVerticalBar: false,
  isImageBased: false,
  ...RectangleDefaultProps,
};
