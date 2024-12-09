import { Observable } from "@babylonjs/core";
import { Control, Grid } from "@babylonjs/gui";
import { KeyEnum } from "./keyEnum";
import { getParentNode } from "./core";
export const compareAndset = <K extends Control, T extends Object>(
  node: K,
  newValue: T,
  // @ts-ignore
  oldValue: T | undefined
) => {
  Object.keys(newValue).forEach((key) => {
    const nodeAlis = node as unknown as T;
    if (newValue[key as keyof typeof newValue] !== undefined) {
      // event
      if (node[key as keyof typeof node] && key.includes("Observable")) {
        (node[key as keyof typeof node] as unknown as Observable<Control>).add(newValue[key as keyof typeof newValue] as (value: Control) => void);
        return
      }
      // grid update

      if (key.includes(KeyEnum.ColumnIndex) ||
        key.includes(KeyEnum.RowIndex)) {
        updateIndex(
          node,
          (newValue as unknown as any)[KeyEnum.ColumnIndex],
          (newValue as unknown as any)[KeyEnum.RowIndex]
        );
        return
      }
      // other props
      if (key in nodeAlis) {
        nodeAlis[key as keyof typeof nodeAlis] =
          newValue[key as keyof typeof newValue];
      }
    }
  });
};

const updateIndex = (node: Control, columnIndex: number, rowIndex: number) => {
  const parent = getParentNode(node);
  if (parent) {
    const { control } = parent;
    if (control instanceof Grid) {
      const innerNode = control.getChildrenAt(rowIndex, columnIndex)
      if (innerNode && !innerNode.includes(node)) {
        control.removeControl(node);
        control.addControl(node, rowIndex, columnIndex);
      }
    }
  }
};
export const setDefault = <T extends Object>(props: T, node: T) => {
  Object.keys(props).forEach((key) => {
    // console.log("key:", key);
    // console.log("props:", props[key]);
    if (props[key as keyof typeof props] !== undefined) {
      node[key as keyof typeof node] = props[key as keyof typeof props];
    }
  });
};
