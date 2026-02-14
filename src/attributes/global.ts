/**
 * Global ARIA attributes
 * Available on all elements with ARIA roles
 * @see https://www.w3.org/TR/wai-aria-1.2/#global_states
 */

export type AriaLabel = string;
export type AriaLabelledBy = string;
export type AriaDescribedBy = string;
export type AriaDetails = string;
export type AriaHidden = boolean | "false" | "true";
export type AriaKeyShortcuts = string;
export type AriaRoleDescription = string;

/**
 * Live region attributes
 */
export type AriaLive = "off" | "polite" | "assertive";
export type AriaRelevant = "additions" | "removals" | "text" | "all" | string;
export type AriaAtomic = boolean | "false" | "true";
export type AriaBusy = boolean | "false" | "true";

/**
 * Global ARIA attributes interface
 */
export interface GlobalAriaAttributes {
    "aria-label"?: AriaLabel;
    "aria-labelledby"?: AriaLabelledBy;
    "aria-describedby"?: AriaDescribedBy;
    "aria-details"?: AriaDetails;
    "aria-hidden"?: AriaHidden;
    "aria-keyshortcuts"?: AriaKeyShortcuts;
    "aria-roledescription"?: AriaRoleDescription;
    "aria-live"?: AriaLive;
    "aria-relevant"?: AriaRelevant;
    "aria-atomic"?: AriaAtomic;
    "aria-busy"?: AriaBusy;
}
