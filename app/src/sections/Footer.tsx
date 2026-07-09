import { LINKS } from '../lib/content';

const SOCIALS = [
  { name: 'Telegram-канал', href: LINKS.channel },
  { name: '@SmolovaIra', href: LINKS.telegram },
  { name: 'Ассистент @Salvi_5626', href: LINKS.assistant },
  { name: 'Поддержать (CloudTips)', href: LINKS.cloudtips },
] as const;

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-warm/10 bg-void py-14">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-warm">Ирина Смолова</p>
            <p className="mt-2 text-[14px] text-smoke">
              Энерготерапевт · проводник · чтец Хроник Акаши
            </p>
            <p className="mt-1 text-[14px] text-smoke">Онлайн для России и СНГ</p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Контакты">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[14px] text-smoke transition-colors hover:text-electric"
              >
                {s.name}
              </a>
            ))}
          </nav>

          <div className="text-[13px] leading-[1.7] text-smoke/70">
            <p>
              Практики не являются медицинской услугой, не заменяют помощь врача или
              психотерапевта. Гарантии конкретного результата не даются.
            </p>
            <p className="mt-3">
              После оплаты подтверждение приходит минимум по двум каналам — не только в Telegram.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-warm/10 pt-6">
          <p className="text-[13px] text-smoke/50">
            © {new Date().getFullYear()} Ирина Смолова. Все права защищены.
          </p>
          <p className="text-[13px] text-smoke/50">
            Сделано в концепции «Тёмная сакральная ясность»
          </p>
        </div>
      </div>
    </footer>
  );
}
