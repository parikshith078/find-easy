interface IdentifyMessageV1 {
    distinctId?: string;
    properties?: Record<string | number, any>;
}
interface EventMessageV1 extends IdentifyMessageV1 {
    event: string;
    groups?: Record<string, string | number>;
    sendFeatureFlags?: boolean;
}
export declare function capture(options: EventMessageV1): void;
export declare function shutdown(): Promise<void>;
export {};
