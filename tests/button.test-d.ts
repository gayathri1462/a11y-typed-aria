/**
 * Type tests for button role
 * Using tsd for type-level assertions
 */

import { expectError, expectAssignable } from "tsd";
import type { Aria } from "../src";

// ✅ Valid button with no ARIA attributes
expectAssignable<Aria<"button">>({
    role: "button",
});

// ✅ Valid button with aria-pressed
expectAssignable<Aria<"button">>({
    role: "button",
    "aria-pressed": true,
});

// ✅ Valid button with aria-expanded
expectAssignable<Aria<"button">>({
    role: "button",
    "aria-expanded": false,
});

// ✅ Valid button with global aria-label
expectAssignable<Aria<"button">>({
    role: "button",
    "aria-label": "Click me",
});

// ✅ Valid button with multiple allowed attributes
expectAssignable<Aria<"button">>({
    role: "button",
    "aria-pressed": "mixed",
    "aria-expanded": true,
    "aria-label": "Toggle menu",
    "aria-disabled": true,
});

// ❌ Invalid - aria-checked not allowed on button
expectError<Aria<"button">>({
    role: "button",
    "aria-checked": true,
});

// ❌ Invalid - aria-multiline not allowed on button
expectError<Aria<"button">>({
    role: "button",
    "aria-multiline": true,
});

// ❌ Invalid - wrong role value
expectError<Aria<"button">>({
    role: "checkbox",
});
