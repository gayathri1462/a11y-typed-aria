/**
 * Link role
 * An interactive reference to a resource
 * @see https://www.w3.org/TR/wai-aria-1.2/#link
 */

import type { GlobalAriaAttributes } from "../attributes";

/**
 * Type-safe link ARIA props
 */
export type LinkAriaProps = {
    role: "link";
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     */
    "aria-expanded"?: boolean | "false" | "true";
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     */
    "aria-disabled"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
