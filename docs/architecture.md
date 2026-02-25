# Architecture Preferences

Design principles and patterns followed in this codebase.

## Single Responsibility per File

Each component file owns exactly one section of the page. No component renders multiple unrelated sections. The composition happens in `app/page.tsx`:

```
Navbar → Hero → VideoDemo → InstallSection → Features → HowItWorks → Footer
```

If a new section is needed, create a new component file in `components/`. Do not bolt it onto an existing component.

## Data Separate from Presentation

All content strings, feature lists, step definitions, and copy live in `lib/constants.ts`. Components import and render this data — they do not define their own content inline.

**When adding content,** add it to `lib/constants.ts` with a typed interface, then consume it in the component. This keeps components purely structural.

## Server Components by Default

The codebase uses Next.js App Router. Every component is a server component unless it absolutely needs client-side interactivity. Currently only `install-section.tsx` is a client component (for clipboard API access).

**Before adding `"use client"`**, ask: can this be done without browser APIs or React hooks? If yes, keep it as a server component.

## Colocate Private Helpers

Helper functions and sub-components used by only one component live in that component's file. For example, `CopyButton` and `highlightPython` are both in `install-section.tsx` because nothing else uses them.

Extract into a separate file only when a helper is shared across multiple components.

## Flat Directory Structure

```
components/     # All page section components, flat (no nesting)
lib/            # Data and utilities
app/            # Next.js routes and layout
```

No `components/ui/`, no `components/sections/`, no deep nesting. The site is small enough that flat is correct. Do not introduce subdirectories unless the component count meaningfully grows.

## Minimal Dependencies

The production dependency list is intentionally small: `next`, `react`, `react-dom`, `react-icons`. Do not add libraries for things that can be done with a few lines of code (e.g., the syntax highlighter is hand-rolled, not a library).

Add a dependency only when building it yourself would be unreliable or take disproportionate effort.
