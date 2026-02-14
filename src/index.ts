/**
 * @a11y/typed-aria
 * TypeScript-first ARIA types with compile-time validation
 * 
 * @example
 * ```ts
 * import type { Aria } from "@a11y/typed-aria";
 * 
 * // Type-safe button
 * const button: Aria<"button"> = {
 *   role: "button",
 *   "aria-pressed": true,
 *   "aria-label": "Toggle"
 * };
 * 
 * // Type-safe checkbox with required aria-checked
 * const checkbox: Aria<"checkbox"> = {
 *   role: "checkbox",
 *   "aria-checked": true,
 *   "aria-label": "Accept terms"
 * };
 * ```
 */

// Core types
export type { Aria, ExtractRole, IsValidRole } from "./core/aria-role";
export type { AriaRole, AriaPropsForRole } from "./core/aria-props";

// Role-specific types
export type { ButtonAriaProps } from "./roles/button";
export type { CheckboxAriaProps } from "./roles/checkbox";
export type { TextboxAriaProps } from "./roles/textbox";
export type { TabAriaProps } from "./roles/tab";
export type { LinkAriaProps } from "./roles/link";
export type { AlertAriaProps } from "./roles/alert";
export type { DialogAriaProps } from "./roles/dialog";
export type { MenuAriaProps } from "./roles/menu";
export type { MenuitemAriaProps } from "./roles/menuitem";

// Attribute types
export type {
    GlobalAriaAttributes,
    StateAriaAttributes,
    PropertyAriaAttributes,
    AllAriaAttributes,
} from "./attributes";

// Utility types
export type { Prettify, RequireKeys, Forbid } from "./utils/types";
export type { MergeProps } from "./utils/merge";

// Version
export { VERSION } from "./version";
