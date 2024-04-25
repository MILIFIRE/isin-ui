
import { ControlProps} from "./control";
import { controlDefaultProps} from "./control";
export interface ContainersProps extends ControlProps {
  adaptWidthToChildren?:boolean;
  background?: string;
}

export const ContainersDefaultProps = {
  adaptWidthToChildren: {type:Boolean,default:false},
  background: String,
  ...controlDefaultProps
};