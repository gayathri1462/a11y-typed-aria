/**
 * Type-safe merging utilities
 */

import type { Prettify } from "./types";

/**
 * Merge ARIA props with HTML attributes
 * Ensures type safety when combining ARIA with native HTML props
 */
export type MergeProps<T, U> = Prettify<T & U>;

/**
 * Deep merge two types
 */
export type DeepMerge<T, U> = {
    [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

/**
 * Merge multiple types into one
 */
export type MergeAll<T extends readonly any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeAll<Rest>
    : {};
