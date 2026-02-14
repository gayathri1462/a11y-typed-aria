/**
 * React Button Component Example
 * Demonstrates type-safe ARIA props with React
 */

import React from "react";
import type { Aria } from "@a11y/typed-aria";

interface ButtonProps extends Aria<"button"> {
    onClick: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export function Button({ role, onClick, children, variant = "primary", ...ariaProps }: ButtonProps) {
    return (
        <button
            role={role}
            onClick={onClick}
            className={`btn btn-${variant}`}
            {...ariaProps}
        >
            {children}
        </button>
    );
}

// Usage Examples

export function ToggleButton() {
    const [pressed, setPressed] = React.useState(false);

    return (
        <Button
            role="button"
            aria-pressed={pressed}
            aria-label="Toggle menu"
            onClick={() => setPressed(!pressed)}
        >
            {pressed ? "Close" : "Open"} Menu
        </Button>
    );
}

export function ExpandableButton() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Button
            role="button"
            aria-expanded={expanded}
            aria-label="Show details"
            onClick={() => setExpanded(!expanded)}
        >
            {expanded ? "Hide" : "Show"} Details
        </Button>
    );
}

export function DisabledButton() {
    return (
        <Button
            role="button"
            aria-disabled={true}
            aria-label="Submit form"
            onClick={() => { }}
        >
            Submit
        </Button>
    );
}
