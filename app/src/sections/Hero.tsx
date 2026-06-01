import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!section || !content || !overlay) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    });

    tl.to(content, {
      opacity: 0,
      y: -80,
      ease: 'none',
    }, 0);

    tl.to(overlay, {
      opacity: 1,
      ease: 'none',
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Gradient overlay that fades in on scroll */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #240046 0%, #9D446E 100%)',
          opacity: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(24px, 4vw, 64px)',
          color: 'white',
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 'clamp(16px, 3vw, 40px)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Обо мне', target: 'invitation' },
              { label: 'Услуги', target: 'services' },
              { label: 'Отзывы', target: 'testimonials' },
              { label: 'Контакты', target: 'footer' },
            ].map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#F5B0BD';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

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
              padding: '12px 24px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'rgba(255,255,255,0.2)';
              el.style.borderColor = 'rgba(245,176,189,0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'rgba(255,255,255,0.1)';
              el.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            Написать в Telegram
          </a>
        </nav>

        {/* Hero Title */}
        <div style={{ maxWidth: '700px' }}>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(40px, 5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.0,
              textShadow: '0 2px 30px rgba(0,0,0,0.3)',
              marginBottom: '16px',
            }}
          >
            Смолова Ирина
          </h1>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(24px, 2.5vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Энерготерапевт. Проводник.
          </h2>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '20px',
          }}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            style={{
              animation: 'bounce 2s ease-in-out infinite',
            }}
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="38"
              rx="11"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="rgba(255,255,255,0.7)"
              style={{
                animation: 'scrollDot 2s ease-in-out infinite',
              }}
            />
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
              @keyframes scrollDot {
                0%, 100% { opacity: 0.7; transform: translateY(0); }
                50% { opacity: 1; transform: translateY(8px); }
              }
            `}</style>
          </svg>
        </div>
      </div>
    </section>
  );
}
