import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  price: string;
  highlight?: boolean;
}

const SERVICES: Service[] = [
  {
    title: 'Чтение Хроник Акаши',
    description: 'Индивидуальное чтение по вашему запросу. Получите ответы из поля Акаши о вашем пути, предназначении и текущей ситуации.',
    price: '1 500 ₽ / пакет 5 — 5 000 ₽',
  },
  {
    title: 'Сессия / расстановка',
    description: 'Часовая трансформационная сессия. Работа с родовыми программами, отношениями, денежными блоками через расстановочное поле.',
    price: '5 000 ₽ / пакет 4 — 18 000 ₽',
  },
  {
    title: 'Практика целения',
    description: 'Глубинная работа с корнем болезни на энергетическом уровне. Находим психосоматическую причину и запускаем процесс исцеления.',
    price: '7 000 ₽',
  },
  {
    title: 'Медиум-сеанс',
    description: 'Часовой сеанс связи с тонким планом. Получение посланий, наставлений и исцеляющей энергии из высших измерений.',
    price: '3 000 ₽',
  },
  {
    title: 'Энергосопровождение',
    description: 'Двухнедельное интенсивное сопровождение. Ежедневная поддержка, практики и чтения для прохождения глубокой трансформации.',
    price: '15 000 ₽',
    highlight: true,
  },
  {
    title: 'Продувка чакр',
    description: 'Групповая энергетическая практика по расписанию. Очистка и балансировка чакральной системы. Ср/Вс в 15:00 и 22:00.',
    price: '1 000 ₽ групп. / 2 000 ₽ индив.',
  },
  {
    title: 'Массаж в тонком плане',
    description: 'Групповая практика работы с тонким телом. Пн/Чт в 15:00 и 22:00. Восстановление энергетического потока и гармонизация.',
    price: '1 000 ₽ / абонемент 4 800 ₽',
  },
  {
    title: 'Женский круг',
    description: 'Закрытый клуб по подписке. Ежемесячные встречи, практики, поддержка и глубинная работа в кругу единомышленниц.',
    price: '1 700 ₽ первый мес. / далее 1 990 ₽',
    highlight: true,
  },
  {
    title: 'Практика «Доступ к телу»',
    description: 'Запись глубинной практики работы с телом. Восстановление связи с телом как источником мудрости и исцеления.',
    price: '2 000 ₽',
  },
  {
    title: 'Обучение проводников',
    description: 'Авторская программа подготовки проводников Хроник Акаши. Структурированное обучение с сертификатом.',
    price: '49 000 ₽',
    highlight: true,
  },
  {
    title: 'Трансформационная группа',
    description: 'Глубинная групповая трансформация по предзаписи. Интенсивная работа над ключевыми жизненными темами в безопасном поле.',
    price: '20 000 ₽ (предзапись) / 25 000 ₽',
    highlight: true,
  },
  {
    title: 'Гайд «Цифровое тело»',
    description: 'Цифровой гайд о связи тела и энергии. Доступен за донат через CloudTips.',
    price: 'За донат',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#FFFFFF',
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
            color: '#240046',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Услуги
        </h2>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#240046',
            opacity: 0.6,
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px',
          }}
        >
          Выберите формат работы, который резонирует с вашим запросом
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              style={{
                background: service.highlight ? '#F5B0BD' : '#F7CDC7',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 20px 40px rgba(36, 0, 70, 0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: '#240046',
                    marginBottom: '12px',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#240046',
                    opacity: 0.7,
                    marginBottom: '24px',
                  }}
                >
                  {service.description}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#240046',
                  }}
                >
                  {service.price}
                </span>
                <a
                  href="https://t.me/SmolovaIra"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 24px',
                    borderRadius: '999px',
                    background: '#0086BB',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#006fa0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0086BB';
                  }}
                >
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
