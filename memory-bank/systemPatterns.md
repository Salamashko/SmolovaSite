# System Patterns
`src/App.tsx` — роуты (сейчас только `/` → `Home`); `src/pages/Home.tsx` собирает страницу из секций `src/sections/`. Декоративные слои — `ParticleField` (2D canvas) и `OrbitalRings` (SVG).
Хуки: `useReveal` (IntersectionObserver + `[data-reveal]`), `useMagnetic` (GSAP, только hover-устройства), `useLenis` (плавный скролл, отключён при `prefers-reduced-motion`). Любые анимации обязаны уважать `prefers-reduced-motion`.
Токены дизайна — `tailwind.config.js`; общие классы (`.btn-primary`, `.eyebrow`, `.h-display`) — `src/index.css`; UI — shadcn-компоненты `src/components/ui/`, алиас `@/` = `src/`. Контент правим в `content.ts`, а не в компонентах.
