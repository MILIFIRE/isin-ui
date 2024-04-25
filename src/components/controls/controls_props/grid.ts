import { ContainersDefaultProps, ContainersProps } from "./containers";


export interface GridProps extends ContainersProps {
    row: Array<{height:number,isPixel?:boolean}>;
    column:  Array<{width:number,isPixel?:boolean}>;
  }
  export const  GridDefaultProps = {
    row: {
      type: Array as () => Array<{ height: number; isPixel?: boolean }>,
      required: true,
      default: new Array()
    },
    column: {
      type: Array as () => Array<{ width: number; isPixel?: boolean }>,
      required: true,
      default: new Array()
    },
    ...ContainersDefaultProps
  };
