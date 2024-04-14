import { Control, Grid } from "@babylonjs/gui";
import { ControlProps } from "../controlsProps/control";
import { addNode, removeNode } from "../../../core";
import { Observable } from "@babylonjs/core";
const useGrid = <T extends ControlProps>(props: T) => {
  const grid = new Grid(props.name);
  addNode(grid);
  (grid).onDisposeObservable.addOnce(()=>{
    removeNode()
  })

  return { node: grid };
};
export default useGrid;
