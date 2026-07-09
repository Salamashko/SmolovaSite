import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

/** Кнопка мягко «притягивается» к курсору. Только для устройств с hover. */
export function useMagnetic(ref: RefObject<HTMLElement | null>, range = 80) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < range) {
        const pull = (range - dist) / range;
        gsap.to(el, { x: dx * pull * 0.35, y: dy * pull * 0.35, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [ref, range]);
}
