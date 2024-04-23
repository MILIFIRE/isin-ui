import { ContainersDefaultProps, ContainersProps } from "./containers";


export interface GridProps extends ContainersProps {
    row: Array<{height:number,isPixel?:boolean}>;
    column:  Array<{width:number,isPixel?:boolean}>;
  }
  export const  GridDefaultProps = {
    ...ContainersDefaultProps
  };
