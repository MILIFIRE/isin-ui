import { ContainersProps } from "./containers";
import { controlDefaultProps } from "./control";

export interface StackPanelProps extends ContainersProps {
  isVertical?: boolean;
}
  export const  StackPanelDefaultProps = {
    isVertical:{type:Boolean,default:true},

    ...controlDefaultProps
  };
