import { ArgumentsCamelCase } from "yargs";
export declare type ServerArguments = ArgumentsCamelCase<{
    emailsDir?: string;
    port?: number;
    quiet?: boolean;
    subcommand?: string;
    anonymousId?: string | null;
}>;
export declare const command: string[];
export declare const describe = "build and start the mailing server";
export declare const builder: {
    subcommand: {
        describe: string;
    };
    "emails-dir": {
        default: string;
        description: string;
    };
    port: {
        default: number;
        description: string;
    };
    quiet: {
        default: boolean;
        descriptioin: string;
        boolean: boolean;
    };
};
export declare const handler: (argv: any) => Promise<void>;
