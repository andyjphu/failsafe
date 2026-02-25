# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FailSafe marketing website — a single-page landing site for FailSafe by PhT Labs. This is a **git submodule** of the BrowserScale monorepo (remote: `andyjphu/failsafe`). Commits here go to the submodule repo, not the parent.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server on localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint (Next.js defaults)
```

## Tech Stack

- **Next.js 15** with App Router, **React 19**, **TypeScript 5.7**
- **Tailwind CSS v4** (via `@tailwindcss/postcss` plugin, configured in `postcss.config.mjs`)
- **react-icons** — uses `HiOutline*` icons from `react-icons/hi2` (Heroicons v2 outline set)
- Fonts: Inter (sans) and JetBrains Mono (mono) loaded via `next/font/google` in `app/layout.tsx`

## Architecture

Single-page app with 7 sections composed in `app/page.tsx`:

```
Navbar → Hero → VideoDemo → InstallSection → Features → HowItWorks → Footer
```

- **All components are server components** except `components/install-section.tsx` which is the only `"use client"` component (handles clipboard copy interaction)
- **`lib/constants.ts`** — all content data (features array, steps array, nav links, install command, usage code sample). Edit content here, not in components.
- **`app/globals.css`** — Tailwind v4 `@theme` block defines the custom color palette and font variables. Colors: `bg`, `text`, `text-muted`, `accent`, `accent-hover`, `border`, `code-bg`, `code-border`.
- **`install-section.tsx`** contains a custom `highlightPython()` function for syntax highlighting the code example — it returns JSX spans, not raw HTML.

## Styling Conventions

- Swiss minimalist design. Light theme only (no dark mode).
- Use existing theme variables (`text-accent`, `text-text-muted`, `bg-code-bg`, etc.) rather than hardcoding hex values.
- Path alias: `@/*` maps to project root (e.g., `import { FEATURES } from "@/lib/constants"`).

## No Testing / No API Routes / No Env Vars

This is a pure static marketing site. There are no tests, no API routes, no `.env` files, and no external service integrations.

## Documentation

Detailed guides live in `docs/`:

- **`docs/code-style-guide.md`** — TypeScript, naming, component, import, and Tailwind conventions
- **`docs/website-style-guide.md`** — Visual design: color palette, typography, layout, button styles, spacing
- **`docs/architecture.md`** — SRP, data/presentation separation, server-first components, flat structure
- **`docs/lessons-learned.md`** — Pitfalls with Tailwind v4, Next.js 15, react-icons, and past mistakes to avoid
