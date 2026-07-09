import { useRef } from 'react';
import ParticleField from './ParticleField';
import OrbitalRings from './OrbitalRings';
import { useMagnetic } from '../hooks/useMagnetic';
import portraitWebp from '../assets/irina-smolova.webp';
import portraitJpg from '../assets/irina-smolova.jpg';

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

const TRUST_SIGNALS = [
  ['Онлайн', 'для России и СНГ'],
  ['Бережно', 'без давления и манипуляций'],
  ['Понятно', 'что будет после заявки'],
] as const;

export default function Hero() {
  const primaryRef = useRef<HTMLAnchorElement>(null);
  useMagnetic(primaryRef);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-void">
      {/* Живое поле частиц */}
      <ParticleField />

      {/* Дышащее световое пятно */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(108,143,230,0.13) 0%, rgba(62,207,178,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Орбитальная геометрия за портретом */}
      <OrbitalRings className="absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-80 max-lg:hidden" />

      <div className="container-site relative z-10 grid min-h-screen items-center gap-12 pb-24 pt-32 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow mb-6">Энерготерапевт · проводник · Хроники Акаши</p>
          <h1 className="h-display text-[clamp(38px,5.4vw,72px)]">
            Когда в жизни повторяется один и тот же узел — важно не давить сильнее, а&nbsp;увидеть причину
          </h1>
          <p className="mt-7 max-w-xl font-body text-[17px] leading-[1.7] text-smoke md:text-lg">
            Работа с состоянием через Хроники Акаши, личные сессии, групповые практики, Женский круг
            и обучение проводников. Онлайн для России и СНГ.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              ref={primaryRef}
              href="#routes"
              onClick={(e) => scrollTo(e, 'routes')}
              className="btn-primary"
            >
              Выбрать формат работы
            </a>
            <a href="#products" onClick={(e) => scrollTo(e, 'products')} className="btn-outline">
              Ближайшие практики
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {TRUST_SIGNALS.map(([title, note]) => (
              <div key={title} className="flex items-baseline gap-2.5">
                <span aria-hidden="true" className="text-gold">✦</span>
                <p className="text-sm text-smoke">
                  <span className="font-medium text-warm">{title}</span> — {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Портрет: живое фото, без театральности */}
        <div data-reveal style={{ '--reveal-delay': '150ms' } as React.CSSProperties} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-[20px] border border-warm/10">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt="Ирина Смолова, энерготерапевт и проводник"
                width={640}
                height={640}
                fetchPriority="high"
                className="block h-auto w-full object-cover"
              />
            </picture>
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(200deg, transparent 55%, rgba(7,7,9,0.55) 100%)' }}
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 rounded-xl border border-warm/10 bg-slate/90 px-5 py-4 text-center backdrop-blur">
            <p className="text-[13px] text-smoke">с 2004 года — работа с телом</p>
            <p className="mt-0.5 font-display text-lg text-warm">с 2018 — с душой и полем</p>
          </div>
        </div>
      </div>

      {/* Переход к следующей секции */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #0D0F14 100%)' }}
      />
    </section>
  );
}
