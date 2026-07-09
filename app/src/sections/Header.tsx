import { useEffect, useState } from 'react';
import { NAV, LINKS } from '../lib/content';

function scrollTo(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(target);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-void/80 shadow-[0_1px_0_rgba(233,221,209,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between py-4">
        <a
          href="#top"
          onClick={(e) => handleNav(e, 'top')}
          className="flex items-baseline gap-3 no-underline"
          aria-label="На главный экран"
        >
          <span className="font-display text-xl tracking-wide text-warm">Ирина Смолова</span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-smoke sm:inline">
            энерготерапевт · проводник
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleNav(e, item.target)}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-smoke transition-colors hover:text-warm"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`#routes`}
            onClick={(e) => handleNav(e, 'routes')}
            className="rounded-full border border-electric/50 px-5 py-2.5 text-[13px] font-medium tracking-[0.05em] text-warm transition-all hover:bg-electric hover:text-void"
          >
            Выбрать формат
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-warm transition-transform duration-300 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-warm transition-transform duration-300 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 top-[68px] z-40 flex flex-col gap-1 bg-void/97 px-6 pt-8 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {NAV.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            onClick={(e) => handleNav(e, item.target)}
            className="border-b border-warm/10 py-4 font-display text-2xl text-warm"
          >
            {item.label}
          </a>
        ))}
        <a
          href={LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          Написать в Telegram
        </a>
      </div>
    </header>
  );
}
