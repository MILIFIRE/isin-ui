import { ScrollViewer } from "@babylonjs/gui";
import { addNode, removeNode } from "../../../core";
import { ScrollViewerProps } from "../controls_props";
const useScrollViewer = <T extends ScrollViewerProps>(props: T) => {
  const rectangle = new ScrollViewer(props.name,props.isImageBased);
  addNode(rectangle);
  (rectangle).onDisposeObservable.addOnce(()=>{
    removeNode()
  })
  return { node: rectangle };
};
export default useScrollViewer;
