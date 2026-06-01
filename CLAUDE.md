# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `app/` directory:

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Stack

- **React 19** + **TypeScript** — via Vite
- **Tailwind CSS v3** with shadcn/ui theme
- **shadcn/ui** component library (Radix UI primitives) — 40+ pre-installed components in `src/components/ui/`
- **GSAP** + **Three.js** — used in animated sections
- **Lenis** — smooth scroll (`useLenis` hook initializes it globally in `Home.tsx`)
- **react-router v7** — routing

## Architecture

The app is a single-page marketing/landing site. `src/App.tsx` defines routes; currently only `/` → `Home`.

`src/pages/Home.tsx` composes the full page from section components:

```
RadianceField (Three.js background) → Hero → Invitation → Transformation → Services → Testimonials → Footer
```

`RadianceField` renders behind all other content via absolute positioning and z-index layering. The other sections sit in a `position: relative; z-index: 1` wrapper.

**Sections** (`src/sections/`) are full-width page blocks. Each is self-contained. Animated sections (e.g. `AkashicSphere`, `HelixReveal`, `KineticCylinder`) use Three.js and/or GSAP directly.

**UI components** (`src/components/ui/`) are shadcn-style — import with `@/components/ui/<name>`.

**Path alias**: `@/` maps to `src/`.
