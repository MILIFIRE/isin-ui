import { Observable } from "@babylonjs/core";
import { Control, Grid } from "@babylonjs/gui";
import { KeyEnum } from "./keyEnum";
import { getParentNode } from "./core";
import { VNode, getCurrentInstance, ComponentInternalInstance } from "vue";

export const compareAndset = <K extends Control, T extends Object>(
  node: K,
  newValue: T,
  oldVale: T | undefined
) => {
  Object.keys(newValue).forEach((key) => {
    const nodeAlis = node as unknown as T;
    if (newValue[key as keyof typeof newValue] !== undefined) {
      switch (true) {
        case key.includes(KeyEnum.Observable): {
          (
            node[key as keyof typeof node] as unknown as Observable<Control>
          ).add(
            newValue[key as keyof typeof newValue] as (value: Control) => void
          );
        }
        case key.includes(KeyEnum.ColumnIndex) ||
          key.includes(KeyEnum.RowIndex): {
          updateIndex(
            node,
            (newValue as unknown as any)[KeyEnum.ColumnIndex],
            (newValue as unknown as any)[KeyEnum.RowIndex]
          );
        }
        default: {
          if (key in nodeAlis) {
            nodeAlis[key as keyof typeof nodeAlis] =
              newValue[key as keyof typeof newValue];
          }
        }
      }
    }
  });
};

const updateIndex = (node: Control, columnIndex: number, rowIndex: number) => { 
  const parent = getParentNode(node);
  if (parent) {

    const { control } = parent;
    if (control instanceof Grid) {
      control.removeControl(node);
      control.addControl(node, rowIndex, columnIndex);
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
