import { RadioButton } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useRadioButton = <T extends ControlProps>(props: T) => {
  const radioButton = new RadioButton(props.name);
  addNode(radioButton);
  radioButton.onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: radioButton };
};
export default useRadioButton;
