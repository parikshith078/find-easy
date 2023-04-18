import { JSXElementConstructor, ReactElement } from "react";
export declare function render(component: ReactElement<any, string | JSXElementConstructor<any>>): {
    html: any;
    errors: any;
    htmlLint: HtmlLintError[];
};
