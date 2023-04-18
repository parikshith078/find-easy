import { ArgumentsCamelCase } from "yargs";
export declare type PreviewArgs = ArgumentsCamelCase<{
    port?: number;
    quiet?: boolean;
    emailsDir?: string;
    anonymousId?: string | null;
}>;
export declare const command = "preview";
export declare const describe = "start the email preview server";
export declare const builder: {
    port: {
        default: number;
        description: string;
    };
    quiet: {
        default: boolean;
        description: string;
        boolean: boolean;
    };
    "emails-dir": {
        default: string;
        description: string;
    };
};
export declare const handler: (argv: any) => Promise<void>;
