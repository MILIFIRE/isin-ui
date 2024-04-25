import { BaseSliderProps, BaseSliderDefaultProps } from "./baseSlider";

export interface SliderProps extends BaseSliderProps {
  displayValueBar?: boolean;
  borderColor?: string;
  background?: string;
  thumbColor?: string;
  isThumbCircle?: boolean;
}
export const SliderDefaultProps = {
  borderColor:String,
  background:String,
  thumbColor:String,
  displayValueBar: {type:Boolean,default:false},
    isThumbCircle: {type:Boolean,default:false},
  ...BaseSliderDefaultProps,
};
