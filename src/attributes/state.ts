/**
 * ARIA state attributes
 * Represent dynamic state that can change during user interaction
 * @see https://www.w3.org/TR/wai-aria-1.2/#state_prop_def
 */

export type AriaChecked = boolean | "false" | "true" | "mixed";
export type AriaDisabled = boolean | "false" | "true";
export type AriaExpanded = boolean | "false" | "true";
export type AriaGrabbed = boolean | "false" | "true";
export type AriaHidden = boolean | "false" | "true";
export type AriaInvalid = boolean | "false" | "true" | "grammar" | "spelling";
export type AriaPressed = boolean | "false" | "true" | "mixed";
export type AriaSelected = boolean | "false" | "true";

/**
 * ARIA state attributes interface
 */
export interface StateAriaAttributes {
    "aria-checked"?: AriaChecked;
    "aria-disabled"?: AriaDisabled;
    "aria-expanded"?: AriaExpanded;
    "aria-grabbed"?: AriaGrabbed;
    "aria-hidden"?: AriaHidden;
    "aria-invalid"?: AriaInvalid;
    "aria-pressed"?: AriaPressed;
    "aria-selected"?: AriaSelected;
}
