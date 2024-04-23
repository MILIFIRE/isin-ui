import { ContainersDefaultProps, ContainersProps } from "./containers";
export interface EllipseProps extends ContainersProps {
    thickness?: number;
  }
  export const  EllipseDefaultProps = {
    ...ContainersDefaultProps
  };
