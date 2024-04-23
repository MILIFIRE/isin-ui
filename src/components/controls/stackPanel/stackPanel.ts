import { StackPanel } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";

const useStackPanel = <T extends ControlProps>(props: T) => {
  const stackPanel = new StackPanel(props.name);
  addNode(stackPanel);
  (stackPanel).onDisposeObservable.addOnce(()=>{
    removeNode()
  })

  return { node: stackPanel };
};
export default useStackPanel;
