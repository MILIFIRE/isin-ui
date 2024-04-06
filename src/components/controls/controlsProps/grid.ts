import { ContainersDefaultProps, ContainersProps } from ".";
export interface RectangleProps extends ContainersProps {
    thickness?: number;
    cornerRadius?: number;
  }
  export const  RectangleDefaultProps = {
    ...ContainersDefaultProps
  };
