/* eslint-disable */
import type { Token } from "./tokens.d.ts";

export declare const token: {
  (path: Token, fallback?: string): string;
  var: (path: Token, fallback?: string) => string;
};

export * from "./tokens";
