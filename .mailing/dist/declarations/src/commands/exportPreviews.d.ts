import { ArgumentsCamelCase } from "yargs";
export declare type ExportPreviewsArgs = ArgumentsCamelCase<{
    emailsDir?: string;
    outDir?: string;
    quiet?: boolean;
    minify?: boolean;
    anonymousId?: string | null;
    skipLint?: boolean;
}>;
export declare const command = "export-previews";
export declare const builder: {
    "emails-dir": {
        default: string;
        description: string;
    };
    "out-dir": {
        default: string;
        description: string;
    };
    minify: {
        default: boolean;
        boolean: boolean;
        description: string;
    };
    quiet: {
        default: boolean;
        descriptioin: string;
        boolean: boolean;
    };
    "skip-lint": {
        default: boolean;
        boolean: boolean;
        description: string;
    };
};
export declare const describe = "export previews as html";
export declare function previewFilename(moduleName: string, functionName: string): string;
export declare const handler: (argv: any) => Promise<void>;
