import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '../lib/content';

/* FAQ: снять последние сомнения этичными ответами (ТЗ §5, §8) */
export default function FAQ() {
  return (
    <section id="faq" className="bg-night py-24 md:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="h-display text-[clamp(30px,3.6vw,48px)]">
            Вопросы, которые лучше снять до оплаты
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-smoke">
            Если вашего вопроса здесь нет — напишите ассистенту, это ни к чему не обязывает.
          </p>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="border-b border-warm/10"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg text-warm hover:no-underline hover:text-white md:text-xl [&>svg]:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-[1.7] text-smoke">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
