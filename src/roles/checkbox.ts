/**
 * Checkbox role
 * A checkable input with three possible values: true, false, or mixed
 * @see https://www.w3.org/TR/wai-aria-1.2/#checkbox
 */

import type { GlobalAriaAttributes } from "../attributes";

export interface CheckboxRole {
    role: "checkbox";

    /**
     * Allowed ARIA attributes for checkbox role
     */
    allowedAttributes:
    | "aria-checked"
    | "aria-readonly"
    | "aria-required"
    | "aria-disabled"
    | keyof GlobalAriaAttributes;

    /**
     * aria-checked is required for checkbox
     */
    requiredAttributes: "aria-checked";
}

/**
 * Type-safe checkbox ARIA props
 */
export type CheckboxAriaProps = {
    role: "checkbox";
    "aria-checked": boolean | "false" | "true" | "mixed";
    "aria-readonly"?: boolean | "false" | "true";
    "aria-required"?: boolean | "false" | "true";
    "aria-disabled"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
