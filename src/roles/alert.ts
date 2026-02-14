/**
 * Alert role
 * A type of important, and usually time-sensitive, message
 * @see https://www.w3.org/TR/wai-aria-1.2/#alert
 */

import type { GlobalAriaAttributes } from "../attributes";

/**
 * Type-safe alert ARIA props
 * Alert role has aria-live="assertive" and aria-atomic="true" by default
 */
export type AlertAriaProps = {
    role: "alert";
} & GlobalAriaAttributes;
