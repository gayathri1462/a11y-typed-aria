/**
 * Main Aria<T> generic type
 * The core type that provides compile-time ARIA validation
 */

import type { AriaRole, AriaPropsForRole } from "./aria-props";
import type { Prettify } from "../utils/types";
import type { ForbiddenPropsForRole, WithForbiddenProps } from "./forbid-props";
import type { AllAriaAttributes } from "../attributes";

/**
 * Aria<T> - Type-safe ARIA props for a specific role
 * 
 * @example
 * ```ts
 * // Valid button
 * const button: Aria<"button"> = {
 *   role: "button",
 *   "aria-pressed": true
 * };
 * 
 * // Invalid - aria-checked not allowed on button
 * const invalid: Aria<"button"> = {
 *   role: "button",
 *   "aria-checked": true // ❌ Type error
 * };
 * 
 * // Valid checkbox with required aria-checked
 * const checkbox: Aria<"checkbox"> = {
 *   role: "checkbox",
 *   "aria-checked": true
 * };
 * 
 * // Invalid - missing required aria-checked
 * const invalid2: Aria<"checkbox"> = {
 *   role: "checkbox" // ❌ Type error
 * };
 * ```
 */
export type Aria<R extends AriaRole> = Prettify<
    WithForbiddenProps<
        AriaPropsForRole<R>,
        ForbiddenPropsForRole<Extract<keyof AriaPropsForRole<R>, keyof AllAriaAttributes>>
    >
>;

/**
 * Helper to extract the role from an Aria type
 */
export type ExtractRole<T extends Aria<any>> = T["role"];

/**
 * Check if a role is valid
 */
export type IsValidRole<R> = R extends AriaRole ? true : false;
