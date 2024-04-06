import { TextWrapping } from "@babylonjs/gui";
import { RectangleProps, RectangleDefaultProps } from ".";

export interface ButtonProps extends RectangleProps {
  pointerEnterAnimation?: () => void;
  pointerOutAnimation?: () => void;
  pointerDownAnimation?: () => void;
  pointerUpAnimation?: () => void;
  delegatePickingToChildren?: boolean;
}
export const ButtonDefaultProps = {
  delegatePickingToChildren: false,
  ...RectangleDefaultProps,
};
