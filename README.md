# @a11y/typed-aria

> Type-safe ARIA attributes with compile-time validation for better web accessibility. 🎯

[![npm version](https://img.shields.io/npm/v/@a11y/typed-aria.svg)](https://www.npmjs.com/package/@a11y/typed-aria)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Zero Runtime](https://img.shields.io/badge/Runtime-Zero-green.svg)](https://www.npmjs.com/package/@a11y/typed-aria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Catch ARIA mistakes at **compile-time**, not in production. `@a11y/typed-aria` provides a strict, spec-aligned type system for ARIA roles and attributes.

---

## ✨ Features

- 🔒 **Strongly Typed**: Compile-time validation of ARIA roles and permitted attributes.
- 🚫 **Forbidden Props**: Prevents invalid attributes (e.g., `aria-checked` on `button`) via explicit `never` types.
- ⚡ **Zero Runtime**: Compiled to exactly nothing. Pure TypeScript types with no runtime overhead.
- 📖 **Spec-Aligned**: Closely follows [WAI-ARIA 1.2 specification](https://www.w3.org/TR/wai-aria-1.2/).
- 🎯 **DX-First**: Excellent IDE autocomplete and descriptive error messages.
- 🪶 **Dependency-Free**: Extremely lightweight, types-only package.

---

## 📦 Installation

```bash
npm install @a11y/typed-aria
```

---

## 🚀 Quick Start

```typescript
import type { Aria } from "@a11y/typed-aria";

// ✅ Success: Correct attributes for button
const button: Aria<"button"> = {
  role: "button",
  "aria-pressed": true,
  "aria-label": "Toggle menu"
};

// ❌ Error: aria-checked is not allowed on a button
const invalid: Aria<"button"> = {
  role: "button",
  "aria-checked": true // Type error!
};

// ✅ Success: Checkbox requires aria-checked
const checkbox: Aria<"checkbox"> = {
  role: "checkbox",
  "aria-checked": true,
  "aria-label": "Accept terms"
};
```

---

## 🏛️ Core Principles

| Feature | Raw Strings / `Record<string, any>` | `@a11y/typed-aria` |
| :--- | :--- | :--- |
| **Validation** | Manual testing / Linting | **Compile-time enforcement** |
| **Autocomplete** | None | **Role-specific attributes** |
| **Breaking Changes** | Silent failures | **Immediate type errors** |
| **Spec Accuracy** | Human-prone errors | **Spec-aligned types** |

---

## 📚 Supported Roles

The package currently supports a wide range of common ARIA roles:

- **Widgets**: `button`, `checkbox`, `textbox`, `tab`, `link`, `menu`, `menuitem`
- **Live Regions**: `alert`
- **Windows**: `dialog`
- ...and more coming soon!

---

## 🛠️ Advanced Usage

### React Integration

Using our types with React components is seamless:

```tsx
import type { Aria } from "@a11y/typed-aria";

interface ButtonProps extends Aria<"button"> {
  children: React.ReactNode;
  onClick: () => void;
}

const IconButton = ({ role, children, onClick, ...ariaProps }: ButtonProps) => (
  <button role={role} onClick={onClick} {...ariaProps}>
    {children}
  </button>
);
```

### React Hook Pattern

Manage ARIA state with a reusable hook:

```tsx
import { useAria } from "@a11y/typed-aria/examples/react-hook";

function Accordion({ title, content }) {
  const { ariaProps, toggleExpanded } = useAria("button", {
    "aria-expanded": false,
  });

  return (
    <>
      <button {...ariaProps} onClick={toggleExpanded}>{title}</button>
      <div hidden={!ariaProps["aria-expanded"]}>{content}</div>
    </>
  );
}
```

---

## 🏗️ Architecture

- `src/core`: The brains of the type system.
- `src/roles`: Individual role definitions.
- `src/attributes`: Categorized ARIA attribute sets.
- `tests/`: Extensive type-level testing using `tsd`.

---

## 🤝 Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding new roles.

---

## 📄 License

MIT © Gayathri DN

---

**Built with ❤️ for a more accessible web.**
