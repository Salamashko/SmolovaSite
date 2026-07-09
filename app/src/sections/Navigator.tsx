import { ROUTES, LINKS } from '../lib/content';

/* Навигатор по форматам: 4 маршрута вместо витрины из 15 услуг (ТЗ §5) */
export default function Navigator() {
  return (
    <section id="routes" className="relative bg-night py-24 md:py-32">
      <div className="container-site">
        <div data-reveal className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-5">Навигатор</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)]">
            Выберите маршрут, который подходит вам сейчас
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-smoke">
            Не надо разбираться во всех практиках сразу. Начните с состояния: нужна точечная помощь,
            мягкий вход, регулярная поддержка или глубокое обучение.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {ROUTES.map((route, i) => (
            <article
              key={route.number}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
              className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                route.featured
                  ? 'border-gold/40 bg-gradient-to-b from-slate to-night hover:shadow-[0_0_0_1px_rgba(184,146,58,0.5),0_16px_44px_rgba(184,146,58,0.12)]'
                  : 'border-warm/10 bg-slate hover:border-electric/50 hover:shadow-glow'
              }`}
            >
              {/* Декоративная геометрия в углу карточки */}
              <svg
                aria-hidden="true"
                viewBox="0 0 80 80"
                className="absolute right-5 top-5 h-10 w-10 opacity-20 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-50"
                fill="none"
              >
                <circle cx="40" cy="40" r="30" stroke={route.featured ? '#B8923A' : '#6C8FE6'} strokeWidth="1" />
                <circle cx="40" cy="40" r="18" stroke={route.featured ? '#B8923A' : '#6C8FE6'} strokeWidth="0.7" />
                <circle cx="40" cy="10" r="2" fill={route.featured ? '#B8923A' : '#6C8FE6'} />
              </svg>

              <span className={`font-display text-sm tracking-[0.2em] ${route.featured ? 'text-gold' : 'text-electric'}`}>
                {route.number}
              </span>
              <h3 className="mt-4 font-display text-2xl text-warm">{route.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-smoke">{route.description}</p>
              <ul className="mt-5 space-y-2">
                {route.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2 text-[14px] text-warm/80">
                    <span aria-hidden="true" className={route.featured ? 'text-gold' : 'text-teal'}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-7">
                <span className="text-[15px] font-medium text-warm">{route.from}</span>
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[14px] font-medium underline-offset-4 hover:underline ${
                    route.featured ? 'text-gold' : 'text-electric'
                  }`}
                >
                  {route.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
