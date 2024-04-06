import { TextWrapping } from "@babylonjs/gui";
import { ControlProps, RectangleDefaultProps, controlDefaultProps } from ".";

export interface CheckboxProps extends ControlProps {
  thickness?: number;
  checkSizeRatio?: number;
  background?: string;
  isChecked?: boolean;
}
export const CheckboxDefaultProps = {
  isChecked: false,
  ...controlDefaultProps,
};
