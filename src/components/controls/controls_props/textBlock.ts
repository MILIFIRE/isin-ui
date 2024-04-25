import { TextWrapping } from "@babylonjs/gui";
import { ControlProps } from "./control";
import {  RectangleDefaultProps } from "./rectangle";

export interface TextBlockProps extends ControlProps {
  resizeToFit?: boolean;
  textWrapping?: TextWrapping | boolean;
  text?: string;
  textHorizontalAlignment?: number;
  textVerticalAlignment?: number;
  lineSpacing?: string | number;
  outlineWidth?: number;
  lineThrough?: boolean;
  underline?: boolean;
  outlineColor?: string;
  wordDivider?: string;
}
export const TextBlockDefaultProps = {
  textWrapping: { type: [Object as () => typeof TextWrapping , Boolean] },
  text: String,
  textHorizontalAlignment: Number,
  textVerticalAlignment: Number,
  lineSpacing: { type: [String, Number] },
  outlineWidth: Number,
  outlineColor: String,
  wordDivider: String,
  resizeToFit: { type: Boolean, default: false },
  lineThrough: { type: Boolean, default: false },
  underline: { type: Boolean, default: false },
  ...RectangleDefaultProps,
};
