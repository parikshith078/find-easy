/// <reference types="node" />
import { Server } from "http";
export declare const WATCH_IGNORE: RegExp;
export declare function startChangeWatcher(server: Server, emailsDir: string): void;
