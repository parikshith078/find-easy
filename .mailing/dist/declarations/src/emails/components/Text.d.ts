import React from "react";
import { MjmlText } from "mjml-react";
declare type TextProps = {
    maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;
export default function Text({ children, maxWidth, ...props }: TextProps): JSX.Element;
export {};
