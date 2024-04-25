import { Image } from "@babylonjs/gui";
import { RectangleProps, RectangleDefaultProps } from "./rectangle";

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
  freezeControls: { type: Boolean, default: false },
  forceHorizontalBar: { type: Boolean, default: false },
  forceVerticalBar: { type: Boolean, default: false },
  isImageBased: { type: Boolean, default: false },
  bucketHeight: Number,
  wheelPrecision: Number,
  scrollBackground: String,
  barColor: String,
  thumbImage: Image,
  horizontalThumbImage: Image,
  verticalThumbImage: Image,
  barSize: Number,
  thumbLength: Number,
  thumbHeight: Number,
  barImageHeight: Number,
  horizontalBarImageHeight: Number,
  verticalBarImageHeight: Number,
  barBackground: String,
  barImage: Image,
  horizontalBarImage: Image,
  verticalBarImage: Image,
  ...RectangleDefaultProps,
};
