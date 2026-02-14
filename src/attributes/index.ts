/**
 * ARIA attributes organized by category
 */

export type { GlobalAriaAttributes } from "./global";
export type { StateAriaAttributes } from "./state";
export type { PropertyAriaAttributes } from "./property";

/**
 * All ARIA attributes combined
 */
import type { GlobalAriaAttributes } from "./global";
import type { StateAriaAttributes } from "./state";
import type { PropertyAriaAttributes } from "./property";

export type AllAriaAttributes = GlobalAriaAttributes & StateAriaAttributes & PropertyAriaAttributes;
