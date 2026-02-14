/**
 * Tab role
 * A grouping label providing a mechanism for selecting the tab content
 * @see https://www.w3.org/TR/wai-aria-1.2/#tab
 */

import type { GlobalAriaAttributes } from "../attributes";

export interface TabRole {
    role: "tab";

    /**
     * Allowed ARIA attributes for tab role
     */
    allowedAttributes:
    | "aria-selected"
    | "aria-expanded"
    | "aria-disabled"
    | "aria-controls"
    | "aria-posinset"
    | "aria-setsize"
    | keyof GlobalAriaAttributes;

    /**
     * No required attributes for tab
     */
    requiredAttributes: never;
}

/**
 * Type-safe tab ARIA props
 */
export type TabAriaProps = {
    role: "tab";
    "aria-selected"?: boolean | "false" | "true";
    "aria-expanded"?: boolean | "false" | "true";
    "aria-disabled"?: boolean | "false" | "true";
    "aria-controls"?: string;
    "aria-posinset"?: number;
    "aria-setsize"?: number;
} & GlobalAriaAttributes;
