import { BaseSliderProps, BaseSliderDefaultProps } from ".";

export interface SliderProps extends BaseSliderProps {
  displayValueBar?: boolean;
  borderColor?: string;
  background?: string;
  thumbColor?: string;
  isThumbCircle?: boolean;
}
export const SliderDefaultProps = {
  displayValueBar: false,
    isThumbCircle: false,
  ...BaseSliderDefaultProps,
};
