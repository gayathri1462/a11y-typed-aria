/**
 * Menu role
 * A type of widget that offers a list of choices to the user
 * @see https://www.w3.org/TR/wai-aria-1.2/#menu
 */

import type { GlobalAriaAttributes } from "../attributes";

/**
 * Type-safe menu ARIA props
 */
export type MenuAriaProps = {
    role: "menu";
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     */
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
    /**
     * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
     */
    "aria-orientation"?: "horizontal" | "vertical";
} & GlobalAriaAttributes;
