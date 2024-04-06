import { Slider } from "@babylonjs/gui";
import { ControlProps } from "../controlsProps/control";
import { addNode, removeNode } from "../../../core";
const useSlider = <T extends ControlProps>(props: T) => {
  const slider = new Slider(props.name);
  addNode(slider);
  slider.onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: slider };
};
export default useSlider;
