declare type CaptureProperties = {
    subcommand?: string;
    nodeEnv?: string;
};
declare type BuildHandlerOptions = {
    captureOptions?: (argv: any) => {
        event: string;
        properties?: CaptureProperties;
    };
};
export declare function buildHandler(handler: (argv: any) => Promise<void>, options: BuildHandlerOptions): (argv: any) => Promise<void>;
export {};
