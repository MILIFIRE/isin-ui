import { TextWrapping } from "@babylonjs/gui";
import { ControlProps, RectangleDefaultProps } from ".";

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
  resizeToFit: false,
  lineThrough: false,
  underline: false,
  ...RectangleDefaultProps,
};
