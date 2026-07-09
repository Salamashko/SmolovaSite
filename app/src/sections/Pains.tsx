import { PAINS } from '../lib/content';

/* «С чем помогает работа»: первый слой — состояние, метод — второй (ТЗ §3) */
export default function Pains() {
  return (
    <section id="pain" className="relative overflow-hidden bg-night py-24 md:py-32">
      {/* Нейронная сеть — символ разветвляющихся причин (design_V2, Ref 12) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 opacity-[0.07]"
        fill="none"
        stroke="#E9DDD1"
        strokeWidth="0.8"
      >
        {Array.from({ length: 14 }, (_, i) => {
          const angle = (i / 14) * Math.PI * 2;
          const x2 = 200 + Math.cos(angle) * 180;
          const y2 = 200 + Math.sin(angle) * 180;
          const xm = 200 + Math.cos(angle + 0.25) * 100;
          const ym = 200 + Math.sin(angle + 0.25) * 100;
          return <path key={i} d={`M200 200 Q ${xm} ${ym} ${x2} ${y2}`} />;
        })}
        <circle cx="200" cy="200" r="4" fill="#E9DDD1" stroke="none" />
      </svg>

      <div className="container-site relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-5">С чем помогает работа</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)]">
            Первый слой — не метод. Первый слой — ваше состояние.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-smoke">
            Здесь не нужно быть «удобной», собранной и правильной. Достаточно честно заметить,
            что так дальше не хочется. Если узнаёте себя хотя бы в одной строке — вам сюда.
          </p>
        </div>

        <div className="space-y-3">
          {PAINS.map((pain, i) => (
            <div
              key={pain.quote}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 70, 350)}ms` } as React.CSSProperties}
              className="group rounded-xl border border-warm/10 bg-slate/60 px-6 py-5 transition-colors duration-300 hover:border-mauve/60 hover:bg-slate"
            >
              <p className="font-display text-xl leading-snug text-warm md:text-[22px]">
                «{pain.quote}»
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-smoke">{pain.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
