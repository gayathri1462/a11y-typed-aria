/**
 * Type tests for checkbox role
 * Using tsd for type-level assertions
 */

import { expectError, expectAssignable } from "tsd";
import type { Aria } from "../src";

// ✅ Valid checkbox with required aria-checked
expectAssignable<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": true,
});

// ✅ Valid checkbox with aria-checked as string
expectAssignable<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": "true",
});

// ✅ Valid checkbox with mixed aria-checked
expectAssignable<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": "mixed",
});

// ✅ Valid checkbox with multiple attributes
expectAssignable<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": true,
    "aria-readonly": true,
    "aria-required": true,
    "aria-label": "Accept terms",
});

// ✅ Valid checkbox with false values
expectAssignable<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": false,
    "aria-disabled": true,
});

// ❌ Invalid - missing required aria-checked
expectError<Aria<"checkbox">>({
    role: "checkbox",
});

// ❌ Invalid - aria-pressed not allowed on checkbox
expectError<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": true,
    "aria-pressed": true,
});

// ❌ Invalid - aria-expanded not allowed on checkbox
expectError<Aria<"checkbox">>({
    role: "checkbox",
    "aria-checked": true,
    "aria-expanded": true,
});
