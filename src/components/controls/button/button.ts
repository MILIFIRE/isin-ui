import { Rectangle } from "@babylonjs/gui";
import { ControlProps } from "../controls_props";
import { addNode, removeNode } from "../../../core";
const useButton = <T extends ControlProps>(props: T) => {
  const rectangle = new Rectangle(props.name);
//   setDefault<Rectangle>(props as unknown as Rectangle,rectangle);
  addNode(rectangle);
  (rectangle).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: rectangle };
};
export default useButton;
