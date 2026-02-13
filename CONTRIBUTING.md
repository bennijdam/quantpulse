# Contributing to QuantPulse

Thank you for your interest in contributing to QuantPulse! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/quantpulse.git
   cd quantpulse
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Code Style

We use ESLint and Prettier to maintain code quality:

```bash
# Lint your code
npm run lint

# Format your code
npm run format
```

## Commit Messages

We follow conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat(becker-core): add volatility analysis module
```

## Pull Request Process

1. Ensure all tests pass and code is properly formatted
2. Update documentation if needed
3. Create a pull request with a clear description
4. Link any related issues

## Testing

Before submitting a PR:

```bash
# Build all packages
npm run build

# Lint all code
npm run lint
```

## Adding New Packages

When adding a new package to the monorepo:

1. Create the package directory under `packages/`
2. Add a `package.json` with the `@quantpulse/` scope
3. Update root `package.json` if needed
4. Add build scripts to `turbo.json`
5. Document the package in README.md

## Adding New Apps

When adding a new app:

1. Create the app directory under `apps/`
2. Add a `package.json`
3. Update root `package.json` if needed
4. Add build scripts to `turbo.json`
5. Document the app in README.md

## Questions?

Feel free to open an issue for any questions or concerns.
