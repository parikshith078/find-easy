import { ArgumentsCamelCase } from "yargs";
export declare type InitArguments = ArgumentsCamelCase<{
    emailsDir?: string;
    typescript?: boolean;
    port?: number;
    quiet?: boolean;
    anonymousId?: string | null;
}>;
export declare const command: string[];
export declare const describe = "initialize mailing in your app";
export declare const builder: {
    typescript: {
        default: boolean;
        description: string;
        demandOption: boolean;
        boolean: boolean;
    };
    "emails-dir": {
        default: string;
        demandOption: boolean;
        description: string;
    };
    port: {
        default: number;
        demandOption: boolean;
        description: string;
    };
    quiet: {
        default: boolean;
        demandOption: boolean;
        description: string;
        boolean: boolean;
    };
    "scaffold-only": {
        default: boolean;
        demandOption: boolean;
        description: string;
        boolean: boolean;
    };
};
export declare const handler: (argv: any) => Promise<void>;
