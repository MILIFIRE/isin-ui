import { ContainersDefaultProps, ContainersProps } from "./containers";
export interface RectangleProps extends ContainersProps {
    thickness?: number;
    cornerRadius?: number;
  }
  export const  RectangleDefaultProps = {
    thickness: Number,
    cornerRadius: Number,
    ...ContainersDefaultProps
  };
