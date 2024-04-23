import { Checkbox } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useCheckbox = <T extends ControlProps>(props: T) => {
  const checkbox = new Checkbox(props.name);
  addNode(checkbox);
  checkbox.onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: checkbox };
};
export default useCheckbox;
