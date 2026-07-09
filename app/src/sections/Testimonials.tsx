import { TESTIMONIALS } from '../lib/content';

/* Отзывы с контекстом: имя, город, с чем пришла, что изменилось (ТЗ §10) */
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-pearl py-24 text-ink md:py-32">
      <div className="container-site">
        <div data-reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5 !text-plum/70">Реальные истории</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)] !text-plum">
            Не «всё изменилось волшебно», а что именно стало иначе
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.author}
              data-reveal
              style={{ '--reveal-delay': `${(i % 2) * 120}ms` } as React.CSSProperties}
              className="flex flex-col rounded-2xl border border-stone/40 bg-white p-7 transition-transform duration-300 hover:scale-[1.015] md:p-8"
            >
              <span className="self-start rounded-full bg-blush px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-wine">
                {t.tag}
              </span>
              <blockquote className="mt-5 font-display text-[19px] italic leading-[1.55] text-ink/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="text-[15px] font-semibold text-plum">{t.author}</p>
                <p className="text-[13px] text-ink/55">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p data-reveal className="mt-10 text-[13px] text-ink/45">
          Истории публикуются с согласия участниц. Результат индивидуален и зависит от вашей включённости.
        </p>
      </div>
    </section>
  );
}
