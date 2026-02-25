# Website Style Guide

Visual and design conventions for the FailSafe marketing site.

## Design Language

Swiss minimalist. Clean, information-dense, no decoration for decoration's sake. Inspired by Anduril/Linear aesthetics — sharp edges, no border-radius, generous whitespace.

## Color Palette

Defined in `app/globals.css` under `@theme`. Always reference these tokens in Tailwind classes.

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#ffffff` | Page background |
| `text` | `#0a0a0a` | Primary text, headings, CTAs |
| `text-muted` | `#6b7280` | Secondary text, descriptions, labels |
| `accent` | `#2563eb` | Highlighted keywords (code), links when needed |
| `accent-hover` | `#1d4ed8` | Hover state for accent elements |
| `border` | `#e5e5e5` | All borders and dividers |
| `code-bg` | `#f5f5f5` | Code block backgrounds |
| `code-border` | `#e5e5e5` | Code block borders |

There is **no dark mode**. The site is light-only.

## Typography

| Role | Font | Tailwind class |
|------|------|----------------|
| Body/UI text | Inter | `font-sans` (default) |
| Code blocks | JetBrains Mono | `font-mono` |

Both fonts are loaded via `next/font/google` in `app/layout.tsx` and injected as CSS variables (`--font-inter`, `--font-jetbrains-mono`).

### Type Scale in Use

- **Page headings (h1):** `text-5xl md:text-6xl font-bold tracking-tight`
- **Section headings (h2):** `text-3xl font-bold tracking-tight text-center`
- **Card titles (h3):** `text-lg font-semibold tracking-tight` or `text-xl font-semibold tracking-tight`
- **Body text:** `text-sm text-text-muted leading-relaxed`
- **Labels/overlines:** `text-xs font-medium uppercase tracking-widest text-text-muted`

## Layout

- **Max widths:** Content is constrained by `max-w-2xl` (hero text), `max-w-4xl` (video), `max-w-6xl` (sections, navbar, footer). All centered with `mx-auto`.
- **Section padding:** `px-6 py-24` is the standard section wrapper. Navbar height is `h-16`.
- **Grids:** Features use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. How-it-works uses `grid-cols-1 md:grid-cols-3`.
- **No border-radius anywhere.** Buttons, cards, code blocks, and inputs are all sharp rectangles.

## Buttons & CTAs

Two button styles:

| Style | Classes | Usage |
|-------|---------|-------|
| Primary (filled) | `px-6 py-3 bg-text text-white text-sm font-medium hover:bg-gray-800` | "Get Started" |
| Secondary (outline) | `px-6 py-3 border border-text text-text text-sm font-medium hover:bg-text hover:text-white` | "GitHub", navbar CTA |

Both styles: no border-radius, `transition-colors`, `no-underline`.

## Borders & Dividers

- Navbar has `border-b border-border`.
- Footer and some sections use `border-t border-border` as a top divider.
- Feature grid uses a `gap-px bg-border` technique — the grid container is colored as the border, and each cell has `bg-white`, creating 1px grid lines between cards.

## Navbar

- Fixed position: `fixed top-0 w-full z-50`.
- Frosted glass effect: `bg-white/95 backdrop-blur-sm`.
- Nav links are hidden on mobile (`hidden sm:block`), only the CTA button is always visible.

## Icons

- Feature icons: `size={28}`, `text-text-muted`, with `mb-5` spacing.
- Inline icons (buttons, links): `size={16}`, inherit text color.

## Registration Marks

Graph-paper-style `+` crosshair marks placed at corners and grid intersections. These reinforce the "built by engineers" aesthetic.

- **Where used:** Hero video corners (`components/registration-marks.tsx`), Features grid intersections (`GridMarks` in `components/features.tsx`).
- **Arms are 1px lines** in `var(--color-border)` (`#e5e5e5`), fading to transparent at the tips via `linear-gradient`.
- **Arms only extend outward** from the content — no arms pointing inward under the content.
- **Staggered lengths** (40–70px range) for an organic, hand-plotted feel.
- **Only visible on `lg:` breakpoint** for grid marks (the 3-column layout).
- When adding marks to new sections, use `components/registration-marks.tsx` for simple 4-corner marks. For grid intersections, follow the `GridMarks` pattern in `features.tsx`.

## Motion & Animation

Subtle scroll-triggered entrance animations. Elements fade up as they enter the viewport. See `components/fade-in.tsx`.

- **Animation:** `fade-up` keyframe — `opacity: 0 → 1`, `translateY(16px) → 0`, 500ms ease-out.
- **Trigger:** IntersectionObserver, fires once (no re-animation on scroll back).
- **Stagger:** Grouped elements use increasing `delay` values. Conventions:
  - Hero text: 80ms increments (0, 80, 160, 240ms); video at 300ms
  - Install section: 80ms increments (title 0, pill 80, stepper 160)
  - Feature cards: 60ms per card
- **Only animate `opacity` and `transform`.** These are GPU-composited and cause no layout recalculation.
- **No animation libraries.** The `FadeIn` component handles all cases.

## Content Patterns

- **Overline label → Heading → Body** is the standard content block pattern (see Hero, InstallSection).
- Numbered steps use `font-mono` for the number and are zero-padded: `"00"`, `"01"`, `"02"`, `"03"`, `"04"`.
