/// <reference types="react" />
import * as WelcomePreview from "./emails/previews/Welcome";
declare const sendMail: (mail: import("packages/core/src").ComponentMail) => Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | "delivered!" | undefined>;
declare const previews: {
    Welcome: typeof WelcomePreview;
};
declare const templates: {
    Welcome: {
        ({ includeUnsubscribe }: {
            includeUnsubscribe?: boolean | undefined;
        }): JSX.Element;
        subject: string;
    };
};
declare const config: {
    anonymousId: null;
};
declare const manifest: {
    sendMail: (mail: import("packages/core/src").ComponentMail) => Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | "delivered!" | undefined>;
    config: {
        anonymousId: null;
    };
    templates: {
        Welcome: {
            ({ includeUnsubscribe }: {
                includeUnsubscribe?: boolean | undefined;
            }): JSX.Element;
            subject: string;
        };
    };
    previews: {
        Welcome: typeof WelcomePreview;
    };
};
export { sendMail, config, templates, previews };
export default manifest;
