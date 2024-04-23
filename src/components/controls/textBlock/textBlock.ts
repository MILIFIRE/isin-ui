import { TextBlock } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useTextBlock = <T extends ControlProps>(props: T) => {
  const rectangle = new TextBlock(props.name);
  addNode(rectangle);
  (rectangle).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: rectangle };
};
export default useTextBlock;
