/**
 * Textbox role
 * An input that allows free-form text as its value
 * @see https://www.w3.org/TR/wai-aria-1.2/#textbox
 */

import type { GlobalAriaAttributes } from "../attributes";

export interface TextboxRole {
    role: "textbox";

    /**
     * Allowed ARIA attributes for textbox role
     */
    allowedAttributes:
    | "aria-activedescendant"
    | "aria-autocomplete"
    | "aria-multiline"
    | "aria-placeholder"
    | "aria-readonly"
    | "aria-required"
    | "aria-disabled"
    | keyof GlobalAriaAttributes;

    /**
     * No required attributes for textbox
     */
    requiredAttributes: never;
}

/**
 * Type-safe textbox ARIA props
 */
export type TextboxAriaProps = {
    role: "textbox";
    "aria-activedescendant"?: string;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both";
    "aria-multiline"?: boolean | "false" | "true";
    "aria-placeholder"?: string;
    "aria-readonly"?: boolean | "false" | "true";
    "aria-required"?: boolean | "false" | "true";
    "aria-disabled"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
