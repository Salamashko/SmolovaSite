import { EXPERT, LINKS } from '../lib/content';
import portraitWebp from '../assets/irina-smolova.webp';
import portraitJpg from '../assets/irina-smolova.jpg';

/* Эксперт и подход: рамка работы и границы, не биография (ТЗ §5, §10) */
export default function Expert() {
  return (
    <section id="about" className="relative overflow-hidden bg-night py-24 md:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[20px] border border-warm/10">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt="Портрет Ирины Смоловой"
                width={640}
                height={640}
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
            </picture>
          </div>
          <a
            href={LINKS.channel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 text-[14px] text-electric underline-offset-4 hover:underline"
          >
            Telegram-канал @smolovatime — подтверждение личности →
          </a>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
          <p className="eyebrow mb-5">Эксперт и подход</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)]">
            {EXPERT.name} — проводник, который держит глубину без театра
          </h2>
          <p className="mt-3 text-[14px] uppercase tracking-[0.14em] text-mauve">{EXPERT.role}</p>
          {EXPERT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[17px] leading-[1.7] text-smoke">
              {p}
            </p>
          ))}
          <div className="mt-8 rounded-xl border border-gold/30 bg-slate/60 p-6">
            <h3 className="font-display text-xl text-gold">{EXPERT.boundaries.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-warm/85">{EXPERT.boundaries.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
