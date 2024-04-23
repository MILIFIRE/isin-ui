import { AdvancedDynamicTexture } from "@babylonjs/gui";
import { addNode } from "../../../core";

const useAdvancedDynamicTexture = <T extends AdvancedDynamicTexture>(advancedDynamicTexture: T) => {
 const {id,parentId}= addNode(advancedDynamicTexture);
  return { id,parentId };
};
export default useAdvancedDynamicTexture;
