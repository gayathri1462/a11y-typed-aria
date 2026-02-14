/**
 * Type tests for new ARIA roles
 * Using tsd for type-level assertions
 */

import { expectAssignable, expectError } from "tsd";
import type { Aria } from "../src";

// --- Link Role ---

expectAssignable<Aria<"link">>({
    role: "link",
    "aria-label": "Read more",
    "aria-expanded": true,
});

expectError<Aria<"link">>({
    role: "link",
    "aria-checked": true, // ❌ aria-checked not allowed on link
});

// --- Alert Role ---

expectAssignable<Aria<"alert">>({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": true,
});

expectError<Aria<"alert">>({
    role: "alert",
    "aria-expanded": true, // ❌ aria-expanded not allowed on alert
});

// --- Dialog Role ---

expectAssignable<Aria<"dialog">>({
    role: "dialog",
    "aria-label": "Login",
    "aria-modal": true,
});

expectError<Aria<"dialog">>({
    role: "dialog",
    "aria-checked": true, // ❌ aria-checked not allowed on dialog
});

// --- Menu Role ---

expectAssignable<Aria<"menu">>({
    role: "menu",
    "aria-orientation": "vertical",
});

expectError<Aria<"menu">>({
    role: "menu",
    "aria-pressed": true, // ❌ aria-pressed not allowed on menu
});

// --- Menuitem Role ---

expectAssignable<Aria<"menuitem">>({
    role: "menuitem",
    "aria-label": "Copy",
    "aria-posinset": 1,
    "aria-setsize": 5,
});

expectError<Aria<"menuitem">>({
    role: "menuitem",
    "aria-checked": true, // ❌ aria-checked not allowed on menuitem
});
