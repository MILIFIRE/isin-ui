import { Grid } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useGrid = <T extends ControlProps>(props: T) => {
  const grid = new Grid(props.name);
  addNode(grid);
  (grid).onDisposeObservable.addOnce(()=>{
    removeNode()
  })

  return { node: grid };
};
export default useGrid;
