# Example Monorepo setup with Nextjs, Turborepo, Storybook, & Tailwind

An example monorepo bootstrapped to leverage packages and apps when building multiple apps from a shared design system.

This examples shows an approach to build two separate apps, using a shared design system. In this case a desktop and mobile application.

## Repo structure

- `desktop`: a [Next.js](https://nextjs.org) app
- `mobile`: another [Next.js](https://nextjs.org) app
- `design-system`: React component library shared by both `desktop` and `moble` apps, using Tailwind for styling
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
