# Examples

This directory contains practical examples of using `@a11y/typed-aria` in different contexts.

## Files

### [react-button.tsx](./react-button.tsx)
React button component with type-safe ARIA props. Includes examples of:
- Toggle buttons with `aria-pressed`
- Expandable buttons with `aria-expanded`
- Disabled buttons with `aria-disabled`

### [react-form.tsx](./react-form.tsx)
React form components demonstrating:
- Custom checkbox component with `aria-checked`
- Custom textbox component with `aria-required` and `aria-placeholder`
- Complete registration form example

### [react-hook.tsx](./react-hook.tsx)
A custom `useAria` React hook for managing ARIA states like `aria-expanded` and `aria-pressed` with full type safety.

### [vanilla-ts.ts](./vanilla-ts.ts)
Plain TypeScript usage without any framework:
- Type-safe ARIA configurations
- Helper function to create elements with ARIA props
- Examples of compile-time error prevention

## Running the Examples

These examples are for reference and demonstration purposes. To use them in your project:

1. **Install the package**
   ```bash
   npm install @a11y/typed-aria
   ```

2. **Copy the relevant example**
   Copy the code from the example file that matches your use case.

3. **Adapt to your needs**
   Modify the components to fit your specific requirements.

## TypeScript Configuration

Make sure your `tsconfig.json` has strict mode enabled for the best type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Learn More

- [Main README](../README.md)
- [Contributing Guide](../CONTRIBUTING.md)
- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria-1.2/)
