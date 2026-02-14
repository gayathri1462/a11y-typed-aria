/**
 * React Form Components Example
 * Demonstrates type-safe ARIA props for form elements
 */

import React from "react";
import type { Aria } from "@a11y/typed-aria";

// Checkbox Component
interface CheckboxProps extends Aria<"checkbox"> {
    onChange: (checked: boolean) => void;
    label: string;
}

export function Checkbox({ role, "aria-checked": checked, onChange, label, ...ariaProps }: CheckboxProps) {
    return (
        <div className="checkbox-wrapper">
            <div
                role={role}
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className="checkbox"
                {...ariaProps}
            >
                {checked && <span>✓</span>}
            </div>
            <label>{label}</label>
        </div>
    );
}

// Textbox Component
interface TextboxProps extends Aria<"textbox"> {
    value: string;
    onChange: (value: string) => void;
    label: string;
}

export function Textbox({ role, value, onChange, label, ...ariaProps }: TextboxProps) {
    return (
        <div className="textbox-wrapper">
            <label>{label}</label>
            <input
                role={role}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="textbox"
                {...ariaProps}
            />
        </div>
    );
}

// Form Example
export function RegistrationForm() {
    const [accepted, setAccepted] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    return (
        <form>
            <Textbox
                role="textbox"
                value={name}
                onChange={setName}
                label="Name"
                aria-required={true}
                aria-label="Enter your full name"
            />

            <Textbox
                role="textbox"
                value={email}
                onChange={setEmail}
                label="Email"
                aria-required={true}
                aria-label="Enter your email address"
                aria-placeholder="you@example.com"
            />

            <Checkbox
                role="checkbox"
                aria-checked={accepted}
                onChange={setAccepted}
                label="I accept the terms and conditions"
                aria-required={true}
            />

            <button type="submit" disabled={!accepted || !email || !name}>
                Register
            </button>
        </form>
    );
}
