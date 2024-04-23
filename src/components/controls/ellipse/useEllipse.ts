import { Ellipse } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useEllipse = <T extends ControlProps>(props: T) => {
  const ellipse = new Ellipse(props.name);
  addNode(ellipse);
  (ellipse).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: ellipse };
};
export default useEllipse;
