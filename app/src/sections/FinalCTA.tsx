import OrbitalRings from './OrbitalRings';
import ParticleField from './ParticleField';
import { LINKS } from '../lib/content';

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

/* Финальный экран с одним акцентом (design_V2 §6) */
export default function FinalCTA() {
  return (
    <section id="final" className="relative overflow-hidden bg-void py-32 md:py-44">
      <ParticleField density={45} />
      <OrbitalRings className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container-site relative z-10 mx-auto max-w-3xl text-center" data-reveal>
        <p className="eyebrow mb-6">Первый шаг</p>
        <h2 className="h-display text-[clamp(32px,4.4vw,58px)]">
          Если что-то из этого откликнулось — это уже сигнал
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-smoke">
          Не обязательно сразу идти в глубокую работу. Выберите маршрут, который сейчас ощущается
          честным: мягкий вход, личная сессия, круг или обучение.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#routes" onClick={(e) => scrollTo(e, 'routes')} className="btn-primary">
            Выбрать формат работы
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Бесплатная мини-сессия 30 минут
          </a>
        </div>
      </div>
    </section>
  );
}
