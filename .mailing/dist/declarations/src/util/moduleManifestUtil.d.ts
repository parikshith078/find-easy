import { JSXElementConstructor, ReactElement } from "react";
import { Template } from "mailing-core";
export declare function previewTree(): [string, string[]][];
export declare function getTemplateModule(name?: string): Template<any> | null;
export declare function getPreviewModule(name: string): typeof import("../emails/previews/Welcome");
export declare function getPreviewComponent(name: string, functionName: string): Promise<ReactElement<any, string | JSXElementConstructor<any>> | undefined>;
export declare function getConfig(): MailingConfig;
