import { useEffect, useState } from 'react';
import { LINKS } from '../lib/content';

/* Sticky CTA: появляется после первого скролла, прячется у финального CTA (ТЗ §8) */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [nearFinal, setNearFinal] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const final = document.getElementById('final');
    let io: IntersectionObserver | undefined;
    if (final) {
      io = new IntersectionObserver(([entry]) => setNearFinal(entry.isIntersecting), {
        threshold: 0.15,
      });
      io.observe(final);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const shown = visible && !nearFinal;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-400 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-20 opacity-0'
      }`}
    >
      <div className="mx-auto mb-4 flex w-[min(94vw,560px)] items-center justify-between gap-4 rounded-full border border-warm/15 bg-slate/90 py-2.5 pl-6 pr-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <span className="text-[14px] text-warm max-sm:text-[13px]">Не знаете, с чего начать?</span>
        <a
          href={LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !min-h-[44px] !px-5 !py-2 !text-[14px]"
        >
          Подобрать формат
        </a>
      </div>
    </div>
  );
}
