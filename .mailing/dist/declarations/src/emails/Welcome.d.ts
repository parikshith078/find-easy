/// <reference types="react" />
declare type WelcomeProps = {
    includeUnsubscribe?: boolean;
};
declare const Welcome: {
    ({ includeUnsubscribe }: WelcomeProps): JSX.Element;
    subject: string;
};
export default Welcome;
