import HelixReveal from './HelixReveal';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    text: 'После первого чтения Хроник Акаши всё встало на свои места. Я наконец поняла, почему повторялись одни и те же сценарии в отношениях. Ирина — не просто читает, она ПРОВОДИТ. Это ощущение, что тебя ведут за руку через самые тёмные уголки души, и на выходе — свет.',
    author: 'Елена, 42 года',
    tag: 'Хроники Акаши',
  },
  {
    text: 'Три года ходила по психологам, а результат наступил после одной сессии с Ириной. Она увидела то, что никто не видел — энергетический блок в области сердца, связанный с мамой. Когда мы его проработали, я впервые за десять лет смогла глубоко вдохнуть.',
    author: 'Марина, 38 лет',
    tag: 'Энергосопровождение',
  },
  {
    text: 'Женский круг изменил моё отношение к себе. Раньше я была «спасательницей» для всех, а внутри — пустота. Сейчас я наполнена, и от этого избытка уже могу по-настоящему дарить. Это не про эзотерику — это про живую, настоящую женскую силу.',
    author: 'Анна, 45 лет',
    tag: 'Женский круг',
  },
  {
    text: 'Практика «Доступ к телу» помогла мне сбросить 12 килограммов за три месяца — без диет и мучений. Просто тело научилось говорить, чего оно хочет, а я научилась слушать. Это волшебство.',
    author: 'Ольга, 51 год',
    tag: 'Работа с телом',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });
    });
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#F2E9F6',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(36px, 4vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#C2185B',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Истории трансформаций
        </h2>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#C2185B',
            opacity: 0.6,
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          Реальные истории женщин, прошедших путь
        </p>

        {/* Featured testimonial with Helix Reveal */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto 80px',
            padding: '48px',
            background: 'rgba(255,255,255,0.6)',
            borderRadius: '20px',
            textAlign: 'center',
          }}
        >
          <HelixReveal text="Ирина — проводник в истинную себя. Каждая сессия — это путешествие, на которое ты идёшь с запросом, а возвращаешься с ответом, который был внутри всё время. Её дар — видеть сквозь слои защит и ложных убеждений прямо в суть. Это не магия. Это высшая точность работы с тонким планом." />
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#9D446E',
              marginTop: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            — Наталья, выпускница программы проводников
          </p>
        </div>

        {/* Testimonial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(36, 0, 70, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#0086BB',
                  padding: '4px 12px',
                  background: 'rgba(0, 134, 187, 0.1)',
                  borderRadius: '999px',
                  marginBottom: '16px',
                }}
              >
                {t.tag}
              </span>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#C2185B',
                  opacity: 0.8,
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#9D446E',
                }}
              >
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
