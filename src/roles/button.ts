/**
 * Button role
 * An input that allows for user-triggered actions
 * @see https://www.w3.org/TR/wai-aria-1.2/#button
 */

import type { GlobalAriaAttributes } from "../attributes";

export interface ButtonRole {
    role: "button";

    /**
     * Allowed ARIA attributes for button role
     */
    allowedAttributes:
    | "aria-expanded"
    | "aria-pressed"
    | "aria-disabled"
    | keyof GlobalAriaAttributes;

    /**
     * No required attributes for button
     */
    requiredAttributes: never;
}

/**
 * Type-safe button ARIA props
 */
export type ButtonAriaProps = {
    role: "button";
    "aria-expanded"?: boolean | "false" | "true";
    "aria-pressed"?: boolean | "false" | "true" | "mixed";
    "aria-disabled"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
