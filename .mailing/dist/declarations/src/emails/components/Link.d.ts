import React from "react";
import { MjmlText, HrefProps } from "mjml-react";
declare type LinkProps = HrefProps & React.ComponentProps<typeof MjmlText>;
export default function Link({ children, ...props }: LinkProps): JSX.Element;
export {};
