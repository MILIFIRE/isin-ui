import { AdvancedDynamicTexture, Container, Control } from "@babylonjs/gui";
import { VNode, getCurrentInstance, ComponentInternalInstance } from "vue";
type nodeType = Container | AdvancedDynamicTexture | Control;
// type parentType = Container | AdvancedDynamicTexture;

const nodes = new Map<number, { control: nodeType; parentId: number }>();
export const addNode = (node: nodeType) => {
  // 父节点
  let parentInstance;
  // 父ID
  let parentId = 0;
  // 当前ID
  let id = 0;
  let subIndex = Number.MAX_VALUE;
  const instance = getCurrentInstance();
  if (instance) {
    id = instance.uid;
    parentInstance = instance.parent;
  }
  if (parentInstance) {
    if (parentInstance.subTree.children instanceof Array) {
      subIndex = parentInstance.subTree.children.findIndex((item) => {
        const itemAis = item as VNode;
        if (itemAis.component !== null) {
          return itemAis.component.uid == id;
        }
      });
    }
    parentId = parentInstance.uid;
  }
  const parent = nodes.get(parentId);

  if (parent) {
    if (node instanceof AdvancedDynamicTexture) {
      console.warn("AdvancedDynamicTexture is not be sub-components");
    } else {
      const { control } = parent;
      const controlAlis = control as Container;
      if (controlAlis && controlAlis.addControl) {
        controlAlis.addControl(node as Container);
        if (
          controlAlis._children instanceof Array &&
          controlAlis._children.length > 1
        ) {
          // 放置到指定位置
          const lastElement = controlAlis._children.pop() as Control;
          controlAlis._children.splice(subIndex, 0, lastElement);
        }
      }
    }
  }
  nodes.set(id, { parentId, control: node });
  return { id, parentId };
};
export const removeNode = () => {
  const instance = getCurrentInstance();
  if (instance) {
    const id = instance.uid;
    nodes.delete(id);
  }
};
export const updateNode = (node: nodeType) => {
  let id = 0;
  const instance = getCurrentInstance();
  if (instance) {
    const nodeData = nodes.get(id);
    // 是否有当前节点
    if (nodeData) {
      const { control, parentId } = nodeData;
      const parent = nodes.get(parentId);
      //  是否有父节点
      if (parent && control instanceof AdvancedDynamicTexture) {
        control._rootContainer._children.forEach((child) => {
          control.removeControl(child);
          (node as AdvancedDynamicTexture).addControl(child);
        });
      }
      if (parent && control instanceof Container) {
        control._children.forEach((child) => {
          control.removeControl(child);
          (node as AdvancedDynamicTexture).addControl(child);
        });
      }
    }
  }
};
