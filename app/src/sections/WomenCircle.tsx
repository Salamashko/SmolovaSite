import { CIRCLE, LINKS } from '../lib/content';

/* Женский круг — подписка, светлая тема с розовыми акцентами */
export default function WomenCircle() {
  return (
    <section id="circle" className="bg-blush py-24 text-ink md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="eyebrow mb-5 !text-wine/80">Регулярная поддержка</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)] !text-plum">{CIRCLE.title}</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-ink/70">{CIRCLE.lead}</p>
          <ul className="mt-6 space-y-3">
            {CIRCLE.bullets.map((item) => (
              <li key={item} className="flex items-baseline gap-3 text-[15px] text-ink/80">
                <span aria-hidden="true" className="text-crocus">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-glow-rose md:p-10"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -bottom-14 -right-14 h-56 w-56 opacity-[0.13]"
            fill="none"
            stroke="#BA69A1"
          >
            {Array.from({ length: 24 }, (_, i) => {
              const a = (i / 24) * Math.PI * 2;
              return (
                <line
                  key={i}
                  x1={100 + Math.cos(a) * 52}
                  y1={100 + Math.sin(a) * 52}
                  x2={100 + Math.cos(a) * 88}
                  y2={100 + Math.sin(a) * 88}
                  strokeWidth="1"
                />
              );
            })}
          </svg>
          <div className="relative">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-wine/80">Первый месяц</p>
            <p className="mt-2 font-display text-5xl text-wine">{CIRCLE.firstMonth}</p>
            <p className="mt-2 text-[15px] text-ink/60">{CIRCLE.nextMonths}</p>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 w-full bg-wine text-pearl hover:brightness-110"
            >
              Присоединиться к кругу
            </a>
            <p className="mt-4 text-[13px] leading-[1.6] text-ink/55">{CIRCLE.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
