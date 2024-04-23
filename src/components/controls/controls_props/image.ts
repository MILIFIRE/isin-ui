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
  detectPointerOnOpaqueOnly: false,
  populateNinePatchSlicesFromImage: false,
  autoScale: false,
  ...RectangleDefaultProps,
};
