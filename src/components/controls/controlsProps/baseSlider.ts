import { ControlProps, controlDefaultProps } from ".";

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
    displayThumb: false,
    isVertical: false,
    isThumbClamped: false,
  ...controlDefaultProps,
};
