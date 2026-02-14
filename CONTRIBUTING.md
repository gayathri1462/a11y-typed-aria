# Contributing to a11y-typed-aria

Thank you for your interest in contributing to `a11y-typed-aria`! This guide will help you get started.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gayathri1462/a11y-typed-aria.git
   cd a11y-typed-aria
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## Project Structure

```
src/
├── attributes/     # ARIA attribute definitions
│   ├── global.ts   # Global attributes (aria-label, etc.)
│   ├── state.ts    # State attributes (aria-checked, etc.)
│   └── property.ts # Property attributes (aria-haspopup, etc.)
├── roles/          # ARIA role definitions
│   ├── button.ts
│   ├── checkbox.ts
│   ├── textbox.ts
│   └── tab.ts
├── core/           # Core type system
│   ├── aria-role.ts      # Main Aria<T> generic
│   ├── aria-props.ts     # Role-to-props mapping
│   └── forbid-props.ts   # Invalid props prevention
└── utils/          # Type utilities
    ├── types.ts
    └── merge.ts

tests/              # Type-level tests using tsd
```

## Adding a New ARIA Role

To add support for a new ARIA role, follow these steps:

### 1. Create the role file

Create a new file in `src/roles/` (e.g., `src/roles/link.ts`):

```typescript
/**
 * Link role
 * An interactive reference to a resource
 * @see https://www.w3.org/TR/wai-aria-1.2/#link
 */

import type { GlobalAriaAttributes } from "../attributes";

export interface LinkRole {
    role: "link";
    allowedAttributes: "aria-expanded" | "aria-disabled" | keyof GlobalAriaAttributes;
    requiredAttributes: never;
}

export type LinkAriaProps = {
    role: "link";
    "aria-expanded"?: boolean | "false" | "true";
    "aria-disabled"?: boolean | "false" | "true";
} & GlobalAriaAttributes;
```

### 2. Update the role mapping

Add the new role to `src/core/aria-props.ts`:

```typescript
import type { LinkAriaProps } from "../roles/link";

export type AriaRole = "button" | "checkbox" | "textbox" | "tab" | "link";

export interface AriaRolePropsMap {
    button: ButtonAriaProps;
    checkbox: CheckboxAriaProps;
    textbox: TextboxAriaProps;
    tab: TabAriaProps;
    link: LinkAriaProps;  // Add this
}
```

### 3. Export the new type

Add the export to `src/index.ts`:

```typescript
export type { LinkAriaProps } from "./roles/link";
```

### 4. Add type tests

Create `tests/link.test-d.ts`:

```typescript
import { expectType, expectError } from "tsd";
import type { Aria } from "../src";

// Valid link
expectType<Aria<"link">>({
    role: "link",
    "aria-label": "Read more",
});

// Invalid - wrong attribute
expectError<Aria<"link">>({
    role: "link",
    "aria-checked": true,
});
```

### 5. Run tests

```bash
npm run build
npm test
```

## Code Style

- Use **4 spaces** for indentation
- Use **double quotes** for strings
- Add JSDoc comments for all exported types
- Include `@see` links to WAI-ARIA specification
- Follow existing naming conventions

## Type Testing

This project uses [tsd](https://github.com/SamVerschueren/tsd) for type-level testing:

- `expectType<T>(value)` - Assert that value is of type T
- `expectError<T>(value)` - Assert that value produces a type error for type T
- `expectAssignable<T>(value)` - Assert that value is assignable to type T

## Commit Guidelines

- Use clear, descriptive commit messages
- Reference issues in commits when applicable
- Keep commits focused on a single change

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-role`)
3. Make your changes
4. Run tests (`npm test`)
5. Build the project (`npm run build`)
6. Commit your changes
7. Push to your fork
8. Open a Pull Request

## Releasing and Publishing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### 1. Create a Changeset

If your changes require a new version (patch, minor, or major), create a changeset:

```bash
npm run changeset
```

Follow the prompts to select the bump type and provide a brief description.

### 2. Versioning (Maintainers Only)

To update versions and generate the changelog:

```bash
# Updates package.json and CHANGELOG.md
npm run version
```

### 3. Publishing to npm (Maintainers Only)

Ensure you are logged into npm (`npm login`), then run:

```bash
# Build, type-check, and publish
npm run publish-package
```

Alternatively, you can publish manually:

```bash
npm run build
npm publish --access public
```

### 4. Post-Publish

After publishing, push the new tags to GitHub:

```bash
git push origin main --tags
```

## Questions?

Feel free to open an issue for any questions or concerns!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
