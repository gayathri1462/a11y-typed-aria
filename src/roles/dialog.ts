/**
 * Dialog role
 * A dialog is a descendant window of the primary window of a web application
 * @see https://www.w3.org/TR/wai-aria-1.2/#dialog
 */

import type { GlobalAriaAttributes } from "../attributes";

/**
 * Type-safe dialog ARIA props
 */
export type DialogAriaProps = {
    role: "dialog";
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     */
    "aria-disabled"?: boolean | "false" | "true";
    /**
     * Indicates that the element, or another grouping element it controls, is currently expanded or collapsed.
     */
    "aria-expanded"?: boolean | "false" | "true";
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     */
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
    /**
     * Indicates that an element is modal when displayed.
     */
    "aria-modal"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
