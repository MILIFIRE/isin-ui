import { Rectangle } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useRectangle = <T extends ControlProps>(props: T) => {
  const rectangle = new Rectangle(props.name);
  addNode(rectangle);
  (rectangle).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: rectangle };
};
export default useRectangle;
