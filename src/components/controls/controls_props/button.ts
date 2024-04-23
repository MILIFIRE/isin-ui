import { RectangleProps, RectangleDefaultProps } from "./rectangle";

// todo

export interface ButtonProps extends RectangleProps {
  thickness?: number;
  cornerRadius?: number;
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
