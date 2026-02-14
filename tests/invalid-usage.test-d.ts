/**
 * Type tests for invalid ARIA usage
 * Ensures the type system correctly rejects invalid combinations
 */

import { expectError } from "tsd";
import type { Aria } from "../src";

// ❌ Button with checkbox-specific attributes
expectError<Aria<"button">>({
    role: "button",
    "aria-checked": true,
});

// ❌ Checkbox with button-specific attributes
expectError<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": true,
    "aria-pressed": true,
});

// ❌ Textbox with checkbox-specific attributes
expectError<Aria<"textbox">>({
    role: "textbox",
    "aria-checked": true,
});

// ❌ Tab with textbox-specific attributes
expectError<Aria<"tab">>({
    role: "tab",
    "aria-multiline": true,
});

// ❌ Missing required aria-checked on checkbox
expectError<Aria<"checkbox">>({
    role: "checkbox",
    "aria-label": "Accept",
});

// ❌ Wrong role type
expectError<Aria<"invalid-role">>({
    role: "invalid-role",
});

// ❌ Role mismatch
expectError<Aria<"button">>({
    role: "checkbox",
    "aria-checked": true,
});
