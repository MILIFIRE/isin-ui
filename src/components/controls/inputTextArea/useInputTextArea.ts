import { InputTextArea } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useInputTextArea = <T extends ControlProps>(props: T) => {
  const inputTextArea = new InputTextArea(props.name);
  addNode(inputTextArea);
  inputTextArea.onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: inputTextArea };
};
export default useInputTextArea;
