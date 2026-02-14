/**
 * React useAria Hook Example
 * Demonstrates a reusable hook for managing ARIA states
 */

import React from "react";
import type { Aria, AriaRole } from "a11y-typed-aria";

/**
 * A simple hook to manage toggle states (pressed, expanded, etc.)
 * while providing type-safe ARIA props.
 */
export function useAria<R extends AriaRole>(
    role: R,
    initialProps: Partial<Aria<R>> = {}
) {
    const [ariaProps, setAriaProps] = React.useState<Aria<R>>({
        role,
        ...initialProps,
    } as Aria<R>);

    const updateAria = React.useCallback((updates: Partial<Aria<R>>) => {
        setAriaProps((prev) => ({
            ...prev,
            ...updates,
        }));
    }, []);

    const togglePressed = React.useCallback(() => {
        // Only valid if 'aria-pressed' is in the allowed attributes for the role
        // TypeScript will complain if we try to use this on an incompatible role
        setAriaProps((prev: any) => ({
            ...prev,
            "aria-pressed": !prev["aria-pressed"],
        }));
    }, []);

    const toggleExpanded = React.useCallback(() => {
        setAriaProps((prev: any) => ({
            ...prev,
            "aria-expanded": !prev["aria-expanded"],
        }));
    }, []);

    return {
        ariaProps,
        updateAria,
        togglePressed,
        toggleExpanded,
    };
}

// Example: Accordion Component using the useAria hook
export function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
    const { ariaProps, toggleExpanded } = useAria("button", {
        "aria-expanded": false,
        "aria-label": `Toggle ${title} content`,
    });

    return (
        <div className="accordion-item">
            <h3>
                <button
                    {...ariaProps}
                    onClick={toggleExpanded}
                >
                    {title}
                </button>
            </h3>
            <div
                role="region"
                hidden={!ariaProps["aria-expanded"]}
                aria-labelledby={ariaProps["aria-labelledby"]}
            >
                {children}
            </div>
        </div>
    );
}
