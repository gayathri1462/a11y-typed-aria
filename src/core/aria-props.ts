/**
 * ARIA role to props mapping
 * Maps each ARIA role to its allowed attributes
 */

import type { ButtonAriaProps } from "../roles/button";
import type { CheckboxAriaProps } from "../roles/checkbox";
import type { TextboxAriaProps } from "../roles/textbox";
import type { TabAriaProps } from "../roles/tab";
import type { LinkAriaProps } from "../roles/link";
import type { AlertAriaProps } from "../roles/alert";
import type { DialogAriaProps } from "../roles/dialog";
import type { MenuAriaProps } from "../roles/menu";
import type { MenuitemAriaProps } from "../roles/menuitem";

/**
 * Union of all supported ARIA roles
 */
export type AriaRole = "button" | "checkbox" | "textbox" | "tab" | "link" | "alert" | "dialog" | "menu" | "menuitem";

/**
 * Map role names to their prop types
 */
export interface AriaRolePropsMap {
    button: ButtonAriaProps;
    checkbox: CheckboxAriaProps;
    textbox: TextboxAriaProps;
    tab: TabAriaProps;
    link: LinkAriaProps;
    alert: AlertAriaProps;
    dialog: DialogAriaProps;
    menu: MenuAriaProps;
    menuitem: MenuitemAriaProps;
}

/**
 * Get the props type for a specific role
 */
export type AriaPropsForRole<R extends AriaRole> = AriaRolePropsMap[R];
