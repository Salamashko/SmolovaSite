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

The app is a single-page marketing/landing site («Тёмная сакральная ясность» concept). `src/App.tsx` defines routes; currently only `/` → `Home`.

`src/pages/Home.tsx` composes the full page from section components:

```
Header → Hero → Navigator → Pains → Process → Products → WomenCircle → Testimonials → Expert → FAQ → FinalCTA → Footer → StickyCTA
```

**Content** lives in `src/lib/content.ts` — all copy, prices, and links in one typed module. Edit content there, not in components.

**Sections** (`src/sections/`) are full-width page blocks. `ParticleField` (2D canvas particle drift) and `OrbitalRings` (rotating SVG geometry) are decorative layers used by Hero and FinalCTA.

**Hooks**: `useReveal` (IntersectionObserver scroll-reveal via `[data-reveal]` + CSS), `useMagnetic` (GSAP magnetic CTA, hover devices only), `useLenis` (smooth scroll; skipped under `prefers-reduced-motion`).

**Design tokens**: palette in `tailwind.config.js` (dark base: void/night/slate/warm/smoke + electric/gold/teal accents; light secondary: pearl/blush/plum + rose/crocus/wine accents). Shared classes (`.btn-primary`, `.eyebrow`, `.h-display`, reveal styles) in `src/index.css`.

**UI components** (`src/components/ui/`) are shadcn-style — import with `@/components/ui/<name>`. Pre-existing lint errors in these stock files are known noise.

**Path alias**: `@/` maps to `src/`.

All animations must respect `prefers-reduced-motion` (see index.css and the hooks for the pattern).
