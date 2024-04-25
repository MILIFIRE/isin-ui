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
  gradient?: BaseGradient;
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
  style?: Style;
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
  // 非原生属性
  rowIndex?: number;
  columnIndex?: number;
}
export const controlDefaultProps = {
  accessibilityTag: {
    type: Object as () => IAccessibilityTag,
    require: false,
  },
  name: String,
  alpha: Number,
  clipChildren: { type: Boolean, default: true, require: false },
  clipContent: { type: Boolean, default: true, require: false },
  color: String,
  descendantsOnlyPadding: { type: Boolean, default: false, require: false },
  disabledColor: String,
  disabledColorItem: String,
  fixedRatio: Number,
  fixedRatioMasterIsWidth: { type: Boolean, default: true, require: false },
  fontFamily: String,
  fontOffset: {
    type: Object,
    default: () => ({
      ascent: 0,
      descent: 0,
      height: 0,
    }),
    validator: function (value:any) {
      return (
        typeof value.ascent === "number" &&
        typeof value.descent === "number" &&
        typeof value.height === "number"
      );
    },
  },
  fontSize: { type: [String, Number] },
  fontSizeInPixels: Number,
  fontStyle: String,
  fontWeight: String,
  gradient: {  type: Object as () => typeof BaseGradient,},
  height: { type: [String, Number] },
  heightInPixels: Number,
  highlightColor: String,
  highlightLineWidth: Number,
  horizontalAlignment: Number,
  isEnabled: { type: Boolean, default: true, require: false },
  isHighlighted: { type: Boolean, default: false, require: false },
  isReadOnly: { type: Boolean, default: false, require: false },
  isVisible: { type: Boolean, default: true, require: false },
  left: { type: [String, Number], require: false },
  linkOffsetX: { type: [String, Number], require: false },
  linkOffsetXInPixels: Number,
  linkOffsetY: { type: [String, Number], require: false },
  linkOffsetYInPixels: Number,
  notRenderable: { type: Boolean, default: false, require: false },
  paddingBottom: { type: [String, Number], require: false },
  paddingBottomInPixels: Number,
  paddingLeft: { type: [String, Number], require: false },
  paddingLeftInPixels: Number,
  paddingRight: { type: [String, Number], require: false },
  paddingRightInPixels: Number,
  paddingTop: { type: [String, Number], require: false },
  paddingTopInPixels: Number,
  rotation: Number,
  scaleX: Number,
  scaleY: Number,
  shadowBlur: Number,
  shadowColor: String,
  shadowOffsetX: Number,
  shadowOffsetY: Number,
  style: Style,
  top: { type: [String, Number], require: false },
  transformCenterX: Number,
  transformCenterY: Number,
  verticalAlignment: Number,
  width: { type: [String, Number], require: false },
  widthInPixels: Number,
  zIndex: Number,
  onPointerClickObservable: {
    type: Function as unknown as () => (value: Vector2WithInfo) => void,
    required: false,
  },
  onPointerDownObservable: {
    type: Function as unknown as () => (value: Vector2WithInfo) => void,
    required: false,
  },
  onPointerEnterObservable: {
    type: Function as unknown as () => (value: Control) => void,
    required: false,
  },
  onPointerMoveObservable: {
    type: Function as unknown as () => (value: Vector2) => void,
    required: false,
  },
  onPointerOutObservable: {
    type: Function as unknown as () => (value: Control) => void,
    required: false,
  },
  onDirtyObservable: {
    type: Function as unknown as () => (value: Control) => void,
    required: false,
  },
  onBeforeDrawObservable: {
    type: Function as unknown as () => (value: Control) => void,
    required: false,
  },
  onAfterDrawObservable: {
    type: Function as unknown as () => (value: Control) => void,
    required: false,
  },
  onPointerUpObservable: {
    type: Function as unknown as () => (value: Vector2WithInfo) => void,
    required: false,
  },
  onWheelObservable: {
    type: Function as unknown as () => (value: Vector2) => void,
    required: false,
  },
  onIsVisibleChangedObservable: {
    type: Function as unknown as () => (value: Boolean) => void,
    required: false,
  },
  // 非原生属性
  rowIndex: Number,
  columnIndex: Number,
};
