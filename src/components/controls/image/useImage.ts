import { Image } from "@babylonjs/gui";
import { ControlProps } from "../controls_props/control";
import { addNode, removeNode } from "../../../core";
const useImage = <T extends ControlProps>(props: T) => {
  const image = new Image(props.name);
  addNode(image);
  (image).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: image };
};
export default useImage;
