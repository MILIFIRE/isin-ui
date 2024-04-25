import { ControlProps, controlDefaultProps } from "./control";

export interface BaseSliderProps extends ControlProps {
  displayThumb?: boolean;
  step?: number;
  barOffset?: string | number;
  thumbWidth?: string | number;
  minimum?: number;
  maximum?: number;
  value?: number;
  isVertical?: boolean;
  isThumbClamped?: boolean;
}
export const BaseSliderDefaultProps = {
  step: Number,
  barOffset: { type: [String, Number] },
  thumbWidth: { type: [String, Number] },
  minimum: Number,
  maximum: Number,
  value: Number,
  displayThumb: { type: Boolean, default: false },
  isVertical: { type: Boolean, default: false },
  isThumbClamped: { type: Boolean, default: false },
  ...controlDefaultProps,
};
