import { InputTextProps, InputTextDefaultProps } from ".";

export interface InputTextAreaProps extends InputTextProps {
    outlineWidth?: number;
    outlineColor?: string;
    autoStretchHeight?: boolean;
    height?: string | number;
    maxHeight?: string | number;
}
export const InputTextAreaDefaultProps = {
  autoStretchHeight: false,
  ...InputTextDefaultProps,
};
