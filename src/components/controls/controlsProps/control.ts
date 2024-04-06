import { Vector2 } from "@babylonjs/core";
import { IAccessibilityTag } from "@babylonjs/core/IAccessibilityTag";
import { BaseGradient, Control, Style, Vector2WithInfo } from "@babylonjs/gui";

export interface ControlProps {
  accessibilityTag?: IAccessibilityTag;
  name?: string;
  alpha?: number;
  clipChildren?: boolean;
  clipContent?: boolean;
  color?: string;
  descendantsOnlyPadding?: boolean;
  disabledColor?: string;
  disabledColorItem?: string;
  fixedRatio?: number;
  fixedRatioMasterIsWidth?: boolean;
  fontFamily?: string;
  fontOffset?: { ascent: number; descent: number; height: number };
  fontSize?: string | number;
  fontSizeInPixels?: number;
  fontStyle?: string;
  fontWeight?: string;
  gradient?:BaseGradient;
  height?: string | number;
  heightInPixels?: number;
  highlightColor?: string;
  highlightLineWidth?: number;
  horizontalAlignment?: number;
  isEnabled?: boolean;
  isHighlighted?: boolean;
  isReadOnly?: boolean;
  isVisible?: boolean;
  left?: string | number;
  linkOffsetX?: string | number;
  linkOffsetXInPixels?: number;
  linkOffsetY?: string | number;
  linkOffsetYInPixels?: number;
  notRenderable?: boolean;
  paddingBottom?: string | number;
  paddingBottomInPixels?: number;
  paddingLeft?: string | number;
  paddingLeftInPixels?: number;
  paddingRight?: string | number;
  paddingRightInPixels?: number;
  paddingTop?: string | number;
  paddingTopInPixels?: number;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  style?:Style;
  top?: string | number;
  transformCenterX?: number;
  transformCenterY?: number;
  verticalAlignment?: number;
  width?: string | number;
  widthInPixels?: number;
  zIndex?: number;
  onPointerClickObservable?: (value: Vector2WithInfo) => void;
  onPointerDownObservable?: (value: Vector2WithInfo) => void;
  onPointerEnterObservable?: (value: Control) => void;
  onPointerMoveObservable?: (value: Vector2) => void;
  onPointerOutObservable?: (value: Control) => void;
  onDirtyObservable?: (value: Control) => void;
  onBeforeDrawObservable?: (value: Control) => void;
  onAfterDrawObservable?: (value: Control) => void;
  onPointerUpObservable?: (value: Vector2WithInfo) => void;
  onWheelObservable?: (value: Vector2) => void;
  onIsVisibleChangedObservable?: (value: boolean) => void;
}
export const controlDefaultProps = {
  clipChildren: true,
  clipContent: true,
  descendantsOnlyPadding: false,
  fixedRatioMasterIsWidth: true,
  isEnabled: true,
  isHighlighted: false,
  isReadOnly: false,
  isVisible: true,
  notRenderable: false,
};