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
  pointerEnterAnimation: {
    type: Function as unknown as () => () => void,
    required: false,
  },
  pointerOutAnimation: {
    type: Function as unknown as () => () => void,
    required: false,
  },
  pointerDownAnimation: {
    type: Function as unknown as () => () => void,
    required: false,
  },
  pointerUpAnimation: {
    type: Function as unknown as () => () => void,
    required: false,
  },
  delegatePickingToChildren: { type: Boolean, default: false, required: false, },
  ...RectangleDefaultProps,
};
