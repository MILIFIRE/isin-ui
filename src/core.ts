import {
  AdvancedDynamicTexture,
  Container,
  Control,
  Grid,
} from "@babylonjs/gui";
import { VNode, getCurrentInstance } from "vue";
import { ControlProps } from "./components/controls/controls_props";
type nodeType = Container | AdvancedDynamicTexture | Control | Grid;
// type parentType = Container | AdvancedDynamicTexture;
type isinNode = { control: nodeType; parentId: number };
const nodes = new Map<number, isinNode>();
const nodeIndexodNode = new Map<nodeType, number>();
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
      if (control instanceof Grid && instance) {
        const alisType: ControlProps = instance.props;
        const rowIndex = alisType.rowIndex
          ? alisType.rowIndex
          : Number.MAX_VALUE;
        const columnIndex = alisType.columnIndex
          ? alisType.columnIndex
          : Number.MAX_SAFE_INTEGER;

        control.addControl(node, rowIndex, columnIndex);
      } else {
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
  }
  nodes.set(id, { parentId, control: node });
  nodeIndexodNode.set(node, id);
  return { id, parentId };
};
export const getParentNode = (node: nodeType): isinNode | undefined => {
  const nodeId = nodeIndexodNode.get(node);
  if (nodeId) {
    const node = nodes.get(nodeId);
    if (node) {
      return nodes.get(node.parentId);
    }
  }

  return undefined;
};
export const removeNode = () => {
  const instance = getCurrentInstance();
  if (instance) {
    const id = instance.uid;
    const node = nodes.get(id);
    if (node) {
      nodeIndexodNode.delete(node.control);
    }
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
