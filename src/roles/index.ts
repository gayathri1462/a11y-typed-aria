/**
 * ARIA roles
 * Each role defines its allowed and required attributes
 */

export * from "./button";
export * from "./checkbox";
export * from "./textbox";
export * from "./tab";

export type { ButtonAriaProps } from "./button";
export type { CheckboxAriaProps } from "./checkbox";
export type { TextboxAriaProps } from "./textbox";
export type { TabAriaProps } from "./tab";

/**
 * Union of all supported ARIA roles
 */
export type AriaRole = "button" | "checkbox" | "textbox" | "tab";
