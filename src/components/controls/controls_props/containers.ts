
import { BaseGradient } from "@babylonjs/gui";
import { ControlProps } from "./control";
import { controlDefaultProps } from "./control";
export interface ContainersProps extends ControlProps {
  adaptWidthToChildren?: boolean;
  background?: string;
  backgroundGradient?: string;
}

export const ContainersDefaultProps = {
  adaptWidthToChildren: { type: Boolean, default: false },
  background: String,
  backgroundGradient:String,
  ...controlDefaultProps
};