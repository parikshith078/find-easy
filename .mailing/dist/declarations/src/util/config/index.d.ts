export declare const MAILING_CONFIG_FILE = "./mailing.config.json";
declare type ConfigDefaults = {
    typescript: boolean;
    emailsDir: string;
    outDir: string;
    port: number;
    quiet: boolean;
    scaffoldOnly: boolean;
};
export declare function defaults(): ConfigDefaults;
export declare function looksLikeTypescriptProject(): boolean;
export declare function writeDefaultConfigFile(): void;
declare type Config = {
    emailsDir: string;
    quiet: boolean;
    port: number;
};
declare let config: Config | undefined;
export declare function setConfig(newConfig: typeof config): void;
export declare function getConfig(): Config;
export declare function getQuiet(): boolean;
export {};
