/**
 * Required props enforcement
 * Ensures required ARIA attributes are present at compile-time
 */

import type { RequireKeys } from "../utils/types";

/**
 * Map of roles to their required attributes
 */
export interface RequiredPropsMap {
    button: never;
    checkbox: "aria-checked";
    textbox: never;
    tab: never;
}

/**
 * Get required props for a role
 */
export type RequiredPropsForRole<R extends keyof RequiredPropsMap> = RequiredPropsMap[R];

/**
 * Enforce required props on a type
 */
export type WithRequiredProps<T, K extends keyof T> = K extends never
    ? T
    : RequireKeys<T, K>;
