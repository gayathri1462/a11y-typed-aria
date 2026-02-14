/**
 * Forbidden props enforcement
 * Prevents invalid ARIA attributes from being used on specific roles
 */

import type { Forbid } from "../utils/types";
import type { AllAriaAttributes } from "../attributes";

/**
 * Get forbidden props for a role
 * These are all ARIA attributes NOT allowed on this role
 */
export type ForbiddenPropsForRole<AllowedKeys extends keyof AllAriaAttributes> = Exclude<
    keyof AllAriaAttributes,
    AllowedKeys
>;

/**
 * Enforce forbidden props on a type
 * Makes forbidden props have type 'never'
 */
export type WithForbiddenProps<T, ForbiddenKeys extends keyof any> = Forbid<T, ForbiddenKeys>;
