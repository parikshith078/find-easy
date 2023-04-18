export declare const COMPONENT_FILE_REGEXP: RegExp;
export declare const DOT_MAILING_IGNORE_REGEXP: RegExp;
export declare type PreviewServerOptions = {
    emailsDir: string;
    port: number;
    quiet: boolean;
};
export declare function linkEmailsDirectory(emailsDir: string): Promise<void>;
export declare function packageJsonVersionsMatch(): Promise<boolean>;
export declare function bootstrapMailingDir(): Promise<void>;
