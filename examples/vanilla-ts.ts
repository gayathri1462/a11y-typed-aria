/**
 * Vanilla TypeScript Example
 * Demonstrates type-safe ARIA props without any framework
 */

import type { Aria } from "a11y-typed-aria";

// Type-safe button configuration
const toggleButton: Aria<"button"> = {
    role: "button",
    "aria-pressed": false,
    "aria-label": "Toggle dark mode",
};

// Type-safe checkbox configuration
const termsCheckbox: Aria<"checkbox"> = {
    role: "checkbox",
    "aria-checked": false,
    "aria-label": "Accept terms and conditions",
    "aria-required": true,
};

// Type-safe textbox configuration
const emailInput: Aria<"textbox"> = {
    role: "textbox",
    "aria-label": "Email address",
    "aria-required": true,
    "aria-placeholder": "you@example.com",
};

// Type-safe tab configuration
const homeTab: Aria<"tab"> = {
    role: "tab",
    "aria-selected": true,
    "aria-controls": "home-panel",
    "aria-label": "Home",
};

// Helper function to create elements with ARIA props
function createElementWithAria<R extends "button" | "checkbox" | "textbox" | "tab">(
    tagName: string,
    ariaProps: Aria<R>
): HTMLElement {
    const element = document.createElement(tagName);

    // Apply all ARIA properties
    Object.entries(ariaProps).forEach(([key, value]) => {
        if (key === "role") {
            element.setAttribute("role", value as string);
        } else if (value !== undefined) {
            element.setAttribute(key, String(value));
        }
    });

    return element;
}

// Usage examples
const buttonElement = createElementWithAria("button", toggleButton);
const checkboxElement = createElementWithAria("div", termsCheckbox);
const inputElement = createElementWithAria("input", emailInput);
const tabElement = createElementWithAria("div", homeTab);

// Type safety in action - these would cause compile errors:

// ❌ Error: aria-checked not allowed on button
// const invalidButton: Aria<"button"> = {
//     role: "button",
//     "aria-checked": true,
// };

// ❌ Error: missing required aria-checked
// const invalidCheckbox: Aria<"checkbox"> = {
//     role: "checkbox",
// };

// ❌ Error: aria-multiline not allowed on button
// const invalidButton2: Aria<"button"> = {
//     role: "button",
//     "aria-multiline": true,
// };

console.log("All elements created with type-safe ARIA props!");
