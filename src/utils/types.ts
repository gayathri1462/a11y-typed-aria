/**
 * Utility types for type manipulation
 */

/**
 * Make specific keys required
 */
export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Make specific keys optional
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Exclude specific keys from a type
 */
export type ExcludeKeys<T, K extends keyof T> = Omit<T, K>;

/**
 * Pick only specific keys from a type
 */
export type PickKeys<T, K extends keyof T> = Pick<T, K>;

/**
 * Make all properties of T that are in K forbidden (never)
 */
export type Forbid<T, K extends keyof any> = T & {
    [P in K]?: never;
};

/**
 * Extract keys from T that have value type V
 */
export type KeysOfType<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

/**
 * Prettify a type for better IDE display
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
