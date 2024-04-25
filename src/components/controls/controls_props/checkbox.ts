import { ControlProps, controlDefaultProps } from "./control";

export interface CheckboxProps extends ControlProps {
  thickness?: number;
  checkSizeRatio?: number;
  background?: string;
  isChecked?: boolean;
}
export const CheckboxDefaultProps = {
  thickness: Number,
  checkSizeRatio: Number,
  background:String,
  isChecked: {type:Boolean,default:false},
  ...controlDefaultProps,
};
