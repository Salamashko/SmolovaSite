import AkashicSphere from './AkashicSphere';

export default function Invitation() {
  return (
    <section
      id="invitation"
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#240046',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Left Column - Text */}
        <div>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#F7CDC7',
              marginBottom: '24px',
            }}
          >
            Пробная мини-сессия
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#F2E9F6',
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            30-минутная бесплатная диагностическая сессия. Мы определим ваш запрос,
            найдём корень блока и проложим первый шаг к трансформации. Для тех, кто
            впервые обращается — чтобы вы почувствовали, как работает энергия.
          </p>
          <a
            href="https://t.me/SmolovaIra"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: 'white',
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '999px',
              background: '#0086BB',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#006fa0';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0086BB';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Записаться бесплатно
          </a>
        </div>

        {/* Right Column - Akashic Sphere */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AkashicSphere />
        </div>
      </div>
    </section>
  );
}
