import { ControlProps } from "./control";
import { RectangleDefaultProps } from "./rectangle";
import { Nullable } from "@babylonjs/core/types";
import { IImage } from "@babylonjs/core";

export interface ImageProps extends ControlProps {
  referrerPolicy?: Nullable<ReferrerPolicy>;
  detectPointerOnOpaqueOnly?: boolean;
  sliceLeft?: number;
  sliceRight?: number;
  sliceTop?: number;
  sliceBottom?: number;
  sourceLeft?: number;
  sourceTop?: number;
  sourceWidth?: number;
  sourceHeight?: number;
  imageHeight?: number;
  populateNinePatchSlicesFromImage?: boolean;
  autoScale?: boolean;
  stretch?: number;
  domImage?: IImage;
  source?: Nullable<string>;
  cellWidth?: number;
  cellHeight?: number;
  cellId?: number;
}
export const ImageDefaultProps = {
  referrerPolicy: {type: Object as () =>  ReferrerPolicy},
  sliceLeft: Number,
  sliceRight: Number,
  sliceTop: Number,
  sliceBottom: Number,
  sourceLeft: Number,
  sourceTop: Number,
  sourceWidth: Number,
  sourceHeight: Number,
  imageHeight: Number,
  stretch: Number,
  domImage: {type: Object as () =>  IImage},
  source: String,
  cellWidth: Number,
  cellHeight: Number,
  cellId: Number,
  detectPointerOnOpaqueOnly: {type:Boolean,default:false},
  populateNinePatchSlicesFromImage: {type:Boolean,default:false},
  autoScale: {type:Boolean,default:false},
  ...RectangleDefaultProps,
};
