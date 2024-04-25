import { ControlProps, controlDefaultProps } from "./control";

export interface InputTextProps extends ControlProps {
    maxWidth?: string | number;
    maxWidthInPixels?: number;
    highligherOpacity?: number;
    onFocusSelectAll?: boolean;
    textHighlightColor?: string;
    margin?: string;
    marginInPixels?: number;
    autoStretchWidth?: boolean;
    thickness?: number;
    focusedBackground?: string;
    focusedColor?: string;
    background?: string;
    placeholderColor?: string;
    placeholderText?: string;
    deadKey?: boolean;
    highlightedText?: string;
    addKey?: boolean;
    currentKey?: string;
    text?: string;
    width?: string | number;
}
export const InputTextDefaultProps = {
  maxWidth: { type: [String, Number] },
  maxWidthInPixels: Number,
  highligherOpacity: Number,
  textHighlightColor: String,
  margin: String,
  marginInPixels: Number,
  autoStretchWidth: { type: Boolean, default: false },
  thickness: Number,
  focusedBackground: String,
  focusedColor: String,
  background: String,
  placeholderColor: String,
  placeholderText: String,
  highlightedText: String,
  currentKey: String,
  text: String,
  onFocusSelectAll: { type: Boolean, default: false },
  deadKey: { type: Boolean, default: false },
  addKey: { type: Boolean, default: false },
  ...controlDefaultProps,
};
