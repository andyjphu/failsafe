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

## CSS Decorative Elements: Visibility Checklist

When adding decorative CSS elements (registration marks, corner accents, dividers, etc.), work through these in order before showing the user:

1. **Z-index:** If elements sit behind content with `bg-white` or any opaque background, they're invisible. Render decorative elements *after* the content in the DOM, or give them an explicit `z-index` higher than surrounding content.
2. **Overflow clipping:** CSS grid containers with `gap-px bg-border` and any container with `overflow-hidden` will clip absolutely positioned children. Place decorative elements in a *sibling* or *parent* wrapper, not inside the clipping container.
3. **Color contrast:** `#e5e5e5` (border color) on `#ffffff` (white background) is nearly invisible for 1px lines. If subtle marks aren't visible, use a darker color like `text-muted` (`#6b7280`) or increase line thickness.
4. **Gradient direction:** When a gradient fades from solid to transparent, always verify which end is the visible one. If the solid end is hidden behind content and the transparent end is the only part showing, the element will appear invisible. Draw it out: which half does the user actually see?

## Registration Marks Pattern

This site uses "registration marks" — graph-paper-style `+` crosshair marks at element corners and grid intersections. Implementation reference: `components/registration-marks.tsx` (for simple 4-corner usage) and `GridMarks` in `components/features.tsx` (for grid intersections).

Key implementation rules:

- **Render only outward-facing arms.** Each corner gets exactly two arms extending *away* from the content. A top-left corner gets an upward arm and a leftward arm. Do not render a full `+` and rely on content to hide the inner arms — this causes z-index and clipping problems.
- **For grid intersections:** Edge points get outward arms. Interior points get arms along the grid lines. The condition logic: a top-edge point gets an *upward* arm (extending outside), NOT a downward one. This is the opposite of the naive intuition (`if (!isTop) → upward arm` is wrong; `if (isTop) → upward arm` is correct for outward extension).
- **Stagger arm lengths** for an organic feel. Use varying pixel values (40–70px range), not uniform sizes.
- **Fade tips to transparent** using `linear-gradient(to <away-direction>, transparent, var(--color-border))` — solid near the content edge, transparent at the outer tip.
- **Use `position: absolute`** on the arms relative to a `position: relative` wrapper that is *outside* any clipping container.

## CSS `box-shadow` on Dark Content Against White Backgrounds

When adding shadow to dark content (e.g., a dark-themed code video) on a white background:

- Start with visible opacity (0.1–0.15 per layer), not subtle (0.05). It's easier to dial back than to wonder why nothing shows.
- For a sharp, engineering-aesthetic shadow, use small blur values (4–20px). Large blur (40–60px) creates a soft glow that clashes with sharp design.
- Two shadow layers work well: a tight edge shadow + a slightly wider ambient one.
- The shadow applies to the *wrapper div*, not the `<video>` element directly.

## CSS `mask-image` on Dark Content: Beware the Black Hole

Applying `mask-image` with a radial gradient to a dark video/image creates a dark vignette that looks like a black hole — the transparent mask reveals the page background, but the remaining visible content is dark, so the fade-to-transparent reads as fade-to-black.

**Rule:** Prefer `box-shadow` or separate decorative elements (like registration marks) over `mask-image` when the content is dark and the background is light. Mask-image works best when content and background have similar luminance.
