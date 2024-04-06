import { Observable } from "@babylonjs/core";
import { Control } from "@babylonjs/gui";

export const compareAndset = <K extends Object,T extends Object>(
  node: K,
  newValue: T,
  oldVale: T | undefined
) => {
  Object.keys(newValue).forEach((key) => {
    const nodeAlis=node as unknown as T;
    if (key in nodeAlis && newValue[key as keyof typeof newValue] !== undefined) {
      if (key.includes("Observable")) {
        (node[key as keyof typeof node] as unknown as Observable<Control>).add(
          newValue[key as keyof typeof newValue] as (value: Control) => void
        );
      } else {
        nodeAlis[key as keyof typeof nodeAlis] = newValue[key as keyof typeof newValue];
      }
    }
  });
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
