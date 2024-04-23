import { InputText } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useInputText = <T extends ControlProps>(props: T) => {
  const inputText = new InputText(props.name);
  addNode(inputText);
  inputText.onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: inputText };
};
export default useInputText;
