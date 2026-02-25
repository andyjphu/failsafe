# Code Style Guide

Conventions observed and enforced in this codebase.

## TypeScript

- **Strict mode** is enabled in `tsconfig.json`. Do not loosen it.
- Use `import type` for type-only imports: `import type { Metadata } from "next"`.
- Inline prop types for simple components: `{ text: string }`. Extract an `interface` only when the type is reused (see `Feature`, `Step` in `lib/constants.ts`).
- Use `Readonly<>` for layout/page props that should not be mutated.

## Naming

| Thing | Convention | Example |
|-------|-----------|---------|
| Files | kebab-case | `video-demo.tsx`, `install-section.tsx` |
| Components | PascalCase named function | `export function VideoDemo()` |
| Constants | SCREAMING_SNAKE_CASE | `NAV_LINKS`, `INSTALL_COMMAND` |
| Variables/functions | camelCase | `handleCopy`, `highlightPython` |

## Components

- **Named exports only** for components: `export function Navbar()`. No `export default` (except `page.tsx` and `layout.tsx` which Next.js requires as default exports).
- **Server components by default.** Only add `"use client"` when the component actually needs hooks or browser APIs.
- Keep components lean — a component renders UI and delegates data to `lib/constants.ts`.
- Helper functions that are only used by one component (e.g., `CopyButton`, `highlightPython`) live in the same file, not extracted into a separate module.

## Imports

- Use the `@/` path alias for all absolute imports: `import { FEATURES } from "@/lib/constants"`.
- Never use relative paths that go up directories (`../`).
- Group imports: React/Next.js first, then third-party libraries, then `@/` local imports.

## Icons

- Icons come from `react-icons`. Two icon sets are in use:
  - **`react-icons/hi2`** — Heroicons v2 outline variants (`HiOutline*`). Used for UI/feature icons.
  - **`react-icons/vsc`** — VS Code icons (`VscGithubAlt`). Used only for the GitHub icon.
- Pass size via the `size` prop, not className: `<HiOutlinePlay size={48} />`.
- Pass color via Tailwind className: `className="text-text-muted"`.

## Tailwind CSS

- Use semantic theme tokens (`text-text-muted`, `bg-code-bg`, `border-border`) instead of raw Tailwind colors (`text-gray-500`, `bg-gray-100`). The palette is defined in `globals.css` under `@theme`.
- Responsive breakpoints: `sm:`, `md:`, `lg:`. Mobile-first — the base styles are for small screens.
- Interactive states: always pair `hover:` with `transition-colors`.
- Links: always include `no-underline` on `<a>` tags (Tailwind v4 does not reset anchor styles by default).

## State

- No global state management. All state is local `useState`.
- Keep client-side state minimal — the only stateful interaction in the site is the copy-to-clipboard button.
