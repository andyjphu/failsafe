# Lessons Learned

Real issues encountered during development of this site, documented to prevent repeats.

## Vite vs Next.js: Don't Bundle Framework Swaps with Redesigns

In commit `c4eb081`, the codebase was simultaneously redesigned ("de-AI-ify") and migrated from Next.js to Vite. The Vite migration was reversed 19 minutes later in `6687e43` ("fix: go back to nextjs from vite").

**What went wrong:** The restyle introduced Vite, a `src/` directory structure, shadcn/ui components, and new ESLint config all at once. When it didn't work out, 4,316 lines had to be deleted and the Next.js structure rebuilt from the Vite components.

**Rule:** Separate visual changes from infrastructure changes. If you want to restyle the site, restyle it within the existing framework. If you want to change frameworks, do that as an isolated migration with no design changes.

## Tailwind CSS v4: Major Breaking Changes from v3

Tailwind v4 is a significant departure from v3. Key differences that matter in this codebase:

- **No `tailwind.config.js`/`tailwind.config.ts`.** Configuration is done via `@theme` blocks inside CSS files (`app/globals.css`). Do not create a Tailwind config file.
- **Import syntax changed.** Use `@import "tailwindcss"` instead of the v3 `@tailwind base/components/utilities` directives.
- **PostCSS plugin changed.** The plugin is `@tailwindcss/postcss`, not `tailwindcss` (the old one). This is configured in `postcss.config.mjs`.
- **Custom colors are defined in `@theme` blocks** as CSS custom properties (`--color-*`), not in a JS config. Tailwind auto-generates utility classes from these (e.g., `--color-accent` → `text-accent`, `bg-accent`).

**If an LLM generates Tailwind config or uses v3 syntax, it will silently fail or break the build.**

## Next.js 15 + React 19: Server Components Are the Default

In Next.js 15 with the App Router, every component is a **server component** by default. You cannot use `useState`, `useEffect`, `useRef`, event handlers, or any browser API in a server component.

**Common mistake:** Writing a component with `useState` and forgetting `"use client"` at the top of the file. Next.js will throw a build error, but the error message can be confusing if you don't know about this behavior.

**Rule:** Only add `"use client"` to the specific component that needs interactivity, not to a parent or layout. Keep the client boundary as narrow as possible.

## react-icons: Import Paths Are Per Icon Set

`react-icons` organizes icons by set, and you import from the set's sub-path:

```typescript
// Correct — Heroicons v2 outline
import { HiOutlineBolt } from "react-icons/hi2";

// Wrong — this is Heroicons v1, different icon names
import { HiOutlineBolt } from "react-icons/hi";
```

The `hi2` set (Heroicons v2) uses `HiOutline*` and `HiMini*` prefixes. The `hi` set (v1) uses `HiOutline*` too but with different icon names and designs. Mixing them up produces missing exports or wrong icons.

## Placeholder Links and Dead Buttons

Multiple commits (`52aeb87`, `e5ea644`) were needed to fix placeholder links (Blog, Docs, Twitter) and buttons ("Documentation") that pointed to pages that didn't exist.

**Rule:** Never ship `href="#"` as a placeholder for a page that doesn't exist yet. Either link to a real destination, use an anchor to an on-page section, or don't render the link at all. If a link target is pending, comment it out or conditionally render it.

## Anchor Styling in Tailwind v4

Tailwind v4 does not reset `<a>` tag underlines by default (unlike some v3 setups with Preflight). Every `<a>` tag in this codebase explicitly includes `no-underline` in its className.

**If you add a new link and it appears underlined, add `no-underline` to its classes.** This is not a bug — it's the expected behavior in Tailwind v4.
