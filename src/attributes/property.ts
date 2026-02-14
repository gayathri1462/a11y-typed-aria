/**
 * ARIA property attributes
 * Represent static properties and relationships
 * @see https://www.w3.org/TR/wai-aria-1.2/#state_prop_def
 */

export type AriaAutocomplete = "none" | "inline" | "list" | "both";
export type AriaHasPopup = boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
/**
 * ARIA numeric attributes with documentation on expected values
 */

/**
 * Defines the hierarchical level of an element within a structure.
 * Values: integers 1 or greater.
 */
export type AriaLevel = number;

/**
 * Indicates whether the element is to be rendered as a multi-line input or a single-line input.
 */
export type AriaMultiline = boolean | "false" | "true";

/**
 * Indicates that the user may select more than one item from the current selectable descendants.
 */
export type AriaMultiselectable = boolean | "false" | "true";

/**
 * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 */
export type AriaOrientation = "horizontal" | "vertical";

/**
 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
 */
export type AriaPlaceholder = string;

/**
 * Indicates that the element is not editable, but is otherwise operable.
 */
export type AriaReadonly = boolean | "false" | "true";

/**
 * Indicates that user input is required on the element before a form may be submitted.
 */
export type AriaRequired = boolean | "false" | "true";

/**
 * Indicates if items in a table or grid are sorted in ascending or descending order.
 */
export type AriaSort = "none" | "ascending" | "descending" | "other";

/**
 * Defines the maximum allowed value for a range widget.
 */
export type AriaValueMax = number;

/**
 * Defines the minimum allowed value for a range widget.
 */
export type AriaValueMin = number;

/**
 * Defines the current value for a range widget.
 */
export type AriaValueNow = number;

/**
 * Defines the human readable text alternative of aria-valuenow for a range widget.
 */
export type AriaValueText = string;

/**
 * Defines an element's number or position in the current set of listitems or treeitems.
 * Values: integers 1 or greater, and less than or equal to aria-setsize.
 */
export type AriaPosInSet = number;

/**
 * Defines the total number of items in the current set of listitems or treeitems.
 * Values: integers -1 (for unknown), 0, or greater.
 */
export type AriaSetSize = number;

/**
 * Relationship attributes
 */
export type AriaActiveDescendant = string;
export type AriaControls = string;
export type AriaDescribedBy = string;
export type AriaDetails = string;
export type AriaErrorMessage = string;
export type AriaFlowTo = string;
export type AriaLabelledBy = string;
export type AriaOwns = string;

/**
 * ARIA property attributes interface
 */
export interface PropertyAriaAttributes {
    "aria-autocomplete"?: AriaAutocomplete;
    "aria-haspopup"?: AriaHasPopup;
    "aria-level"?: AriaLevel;
    "aria-multiline"?: AriaMultiline;
    "aria-multiselectable"?: AriaMultiselectable;
    "aria-orientation"?: AriaOrientation;
    "aria-placeholder"?: AriaPlaceholder;
    "aria-readonly"?: AriaReadonly;
    "aria-required"?: AriaRequired;
    "aria-sort"?: AriaSort;
    "aria-valuemax"?: AriaValueMax;
    "aria-valuemin"?: AriaValueMin;
    "aria-valuenow"?: AriaValueNow;
    "aria-valuetext"?: AriaValueText;
    "aria-activedescendant"?: AriaActiveDescendant;
    "aria-controls"?: AriaControls;
    "aria-errormessage"?: AriaErrorMessage;
    "aria-flowto"?: AriaFlowTo;
    "aria-owns"?: AriaOwns;
    "aria-posinset"?: AriaPosInSet;
    "aria-setsize"?: AriaSetSize;
}
