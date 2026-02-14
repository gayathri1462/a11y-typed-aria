# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- EditorConfig for consistent code formatting
- Prettier configuration
- Contributing guidelines
- Changelog
- Examples directory with practical use cases
- GitHub Actions CI/CD workflow
- Enhanced package.json with module exports and metadata

### Fixed
- TypeScript compilation errors from duplicate exports
- tsd test configuration
- Unused imports in role files

### Changed
- Enhanced .gitignore and .npmignore
- Improved package.json with better module resolution

## [0.1.0] - 2026-02-14

### Added
- Initial release
- Core `Aria<T>` generic type for type-safe ARIA props
- Support for 4 ARIA roles: button, checkbox, textbox, tab
- Global, state, and property ARIA attributes
- Type-level tests using tsd
- Comprehensive README with examples
- MIT License

[Unreleased]: https://github.com/gayathri1462/a11y-typed-aria/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/gayathri1462/a11y-typed-aria/releases/tag/v0.1.0
