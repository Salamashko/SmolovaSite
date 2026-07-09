import { STEPS } from '../lib/content';

/* «Как это работает»: снять страх неизвестности до оплаты (ТЗ §5) */
export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-void py-24 md:py-32">
      {/* Волновые формы — ощущение поля (design_V2, Ref 2/10) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full opacity-[0.08]"
        fill="none"
        stroke="#E9DDD1"
      >
        {Array.from({ length: 7 }, (_, i) => (
          <path
            key={i}
            strokeWidth="0.8"
            d={`M0 ${150 + i * 18} C 300 ${90 + i * 14}, 600 ${210 - i * 10}, 1200 ${130 + i * 16}`}
          />
        ))}
      </svg>

      <div className="container-site relative">
        <div data-reveal className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-5">Как это работает</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)]">Процесс понятен до оплаты</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-smoke">
            Здесь нет тумана ради тумана. Вы заранее понимаете формат, длительность, подготовку
            и следующий шаг.
          </p>
        </div>

        <div data-reveal className="relative">
          {/* Соединительная линия таймлайна */}
          <svg
            aria-hidden="true"
            className="absolute left-0 top-[22px] hidden h-px w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 1"
          >
            <line
              className="timeline-line"
              x1="0" y1="0.5" x2="100" y2="0.5"
              stroke="#B8923A" strokeWidth="1" strokeOpacity="0.4"
              pathLength={1}
            />
          </svg>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <article
                key={step.number}
                data-reveal
                style={{ '--reveal-delay': `${i * 140}ms` } as React.CSSProperties}
              >
                <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-void font-display text-sm text-gold">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-[22px] text-warm">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-smoke">{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <p data-reveal className="mt-14 max-w-2xl text-[15px] leading-[1.7] text-smoke/80">
          Практики не заменяют медицинскую или психотерапевтическую помощь — они дополняют её,
          помогая работать с состоянием. Содержание сессий конфиденциально.
        </p>
      </div>
    </section>
  );
}
