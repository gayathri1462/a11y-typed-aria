/**
 * Menuitem role
 * An option in a group of choices contained by a menu or menubar
 * @see https://www.w3.org/TR/wai-aria-1.2/#menuitem
 */

import type { GlobalAriaAttributes } from "../attributes";

/**
 * Type-safe menuitem ARIA props
 */
export type MenuitemAriaProps = {
    role: "menuitem";
    /**
     * Indicates that the element, or another grouping element it controls, is currently expanded or collapsed.
     */
    "aria-expanded"?: boolean | "false" | "true";
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     */
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
    /**
     * Defines the total number of items in the current set of listitems or treeitems.
     */
    "aria-setsize"?: number;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems.
     */
    "aria-posinset"?: number;
} & GlobalAriaAttributes;
