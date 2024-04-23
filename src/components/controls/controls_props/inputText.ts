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
    onFocusSelectAll: false,
    deadKey: false,
    addKey: false,
  ...controlDefaultProps,
};
