import { ControlProps, controlDefaultProps } from "./control";

export interface RadioButtonProps extends ControlProps {
  thickness?: number;
    group?: string;
    checkSizeRatio?: number;
    background?: string;
    isChecked?: boolean;
}

export const RadioButtonDefaultProps = {
  thickness: Number,
  group:String,
  checkSizeRatio: Number,
  background:String,
  isChecked: {type:Boolean,default:false},
  ...controlDefaultProps,
};
