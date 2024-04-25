import { InputTextProps, InputTextDefaultProps } from "./inputText";

export interface InputTextAreaProps extends InputTextProps {
    outlineWidth?: number;
    outlineColor?: string;
    autoStretchHeight?: boolean;
    height?: string | number;
    maxHeight?: string | number;
}
export const InputTextAreaDefaultProps = {
  outlineWidth: Number,
  outlineColor:String,
  maxHeight:{type:[String ,Number]},
  autoStretchHeight: {type:Boolean,default:false},
  ...InputTextDefaultProps,
};
