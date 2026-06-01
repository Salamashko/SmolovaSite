import KineticCylinder from './KineticCylinder';

export default function Transformation() {
  return (
    <section
      id="transformation"
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#F2E9F6',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(36px, 4vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#240046',
            marginBottom: '40px',
          }}
        >
          Ваша трансформация
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            maxWidth: '700px',
            margin: '0 auto 60px',
            textAlign: 'left',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#9D446E',
                marginBottom: '16px',
              }}
            >
              ИЗ
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Потеряна и нет сил', 'Стыжусь себя', 'Боюсь проявиться', 'Тело не слушается', 'Нет ясности в жизни'].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#240046',
                    opacity: 0.7,
                  }}
                >
                  — {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#0086BB',
                marginBottom: '16px',
              }}
            >
              В
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Чувствую силу', 'Разрешила жить для себя', 'Уверенно иду к цели', 'Тело — союзник', 'Вижу путь ясно'].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#240046',
                  }}
                >
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#240046',
            opacity: 0.8,
            maxWidth: '640px',
            margin: '0 auto 60px',
          }}
        >
          С 2004 года я работаю с телом. С 2018 — с полем. Сегодня я провожу
          людей через Хроники Акаши, энергосопровождение и целительские практики
          к их истинной силе и ясности.
        </p>
      </div>

      {/* Kinetic Cylinder */}
      <KineticCylinder />
    </section>
  );
}
