import { FLAGSHIP, KEY_PRODUCTS, PRICE_LIST, SCHEDULE, LINKS } from '../lib/content';

/*
 * Светлая вторичная тема (Pearl) — карточки продуктов и расписание.
 * Розово-лиловая палитра здесь работает акцентами (ТЗ §4).
 */
export default function Products() {
  return (
    <section id="products" className="bg-pearl py-24 text-ink md:py-32">
      <div className="container-site">
        <div data-reveal className="mb-14 max-w-2xl md:mb-16">
          <p className="eyebrow mb-5 !text-plum/70">Ближайший шаг</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)] !text-plum">
            Продукты — без витрины базара
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-ink/70">
            Главный фокус — обучение проводников и трансформационная группа. Остальные форматы
            помогают войти мягко и выбрать свой темп.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Флагман */}
          <article
            data-reveal
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-plum p-8 text-pearl md:p-10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 opacity-20"
              fill="none"
              stroke="#F5B0BD"
            >
              <circle cx="100" cy="100" r="80" strokeWidth="0.8" />
              <circle cx="100" cy="100" r="55" strokeWidth="0.6" />
              <circle cx="100" cy="100" r="30" strokeWidth="0.5" />
            </svg>
            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose">Флагман</p>
              <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{FLAGSHIP.title}</h3>
              <p className="mt-4 max-w-lg text-[16px] leading-[1.7] text-pearl/85">{FLAGSHIP.description}</p>
            </div>
            <div className="relative mt-8">
              <p className="font-display text-4xl text-rose">{FLAGSHIP.price}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={FLAGSHIP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-rose text-plum hover:shadow-glow-rose hover:brightness-105"
                >
                  {FLAGSHIP.cta}
                </a>
                <a
                  href={LINKS.assistant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-pearl/30 text-pearl hover:border-rose/70"
                >
                  Задать вопрос перед оплатой
                </a>
              </div>
            </div>
          </article>

          {/* Ключевые продукты */}
          <div className="grid gap-5">
            {KEY_PRODUCTS.map((product, i) => (
              <article
                key={product.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
                className="flex flex-col rounded-2xl border border-stone/40 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-rose md:p-7"
              >
                <h3 className="font-display text-[22px] text-plum">{product.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink/65">{product.description}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[15px] font-semibold text-wine">{product.price}</span>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-slate-blue underline-offset-4 hover:underline"
                  >
                    {product.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Полный прайс */}
        <div data-reveal className="mt-14">
          <h3 className="font-display text-2xl text-plum">Остальные форматы</h3>
          <div className="mt-6 grid gap-x-10 gap-y-1 md:grid-cols-2">
            {PRICE_LIST.map((row) => (
              <div
                key={row.name}
                className="flex items-baseline justify-between gap-4 border-b border-stone/30 py-3.5"
              >
                <span className="text-[15px] text-ink/80">{row.name}</span>
                <span className="whitespace-nowrap text-[15px] font-semibold text-wine">{row.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Расписание практик */}
        <div
          data-reveal
          className="mt-14 rounded-2xl bg-blush p-8 md:p-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-wine/80">
                Расписание практик
              </p>
              <h3 className="mt-3 font-display text-3xl text-plum">Групповые практики онлайн</h3>
            </div>
            <a
              href={LINKS.practiceGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-plum text-pearl hover:brightness-110"
            >
              Записаться на практику
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SCHEDULE.map((slot) => (
              <div key={slot.days} className="rounded-xl bg-pearl/80 px-6 py-5">
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-wine">{slot.days}</p>
                <p className="mt-1 font-display text-2xl text-plum">{slot.time}</p>
                <p className="mt-1 text-[14px] text-ink/70">{slot.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
