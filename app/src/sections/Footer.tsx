export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#C2185B',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Big CTA */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(40px, 6vw, 100px)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: '#F7CDC7',
            marginBottom: '60px',
            textAlign: 'center',
          }}
        >
          Присоединяйтесь
        </h2>

        {/* Schedule Block */}
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto 60px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#BA69A1',
              marginBottom: '24px',
            }}
          >
            Расписание групповых практик
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            {[
              { day: 'Пн / Чт', time: '15:00 и 22:00', name: 'Массаж в тонком плане' },
              { day: 'Ср / Вс', time: '15:00 и 22:00', name: 'Продувка чакр' },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#F5B0BD',
                    marginBottom: '8px',
                  }}
                >
                  {item.day}
                </p>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#F7CDC7',
                    marginBottom: '4px',
                  }}
                >
                  {item.time}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '60px',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              name: 'Telegram',
              href: 'https://t.me/smolovatime',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.155.235.171.331.016.093.034.305.019.471z" />
                </svg>
              ),
            },
            {
              name: 'VK',
              href: '#',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.365 1.26 2.18 1.817.616.423 1.084.33 1.084.33l2.177-.03s1.14-.071.599-.97c-.044-.073-.315-.663-1.62-1.876-1.367-1.268-1.184-1.063.463-3.254.999-1.332 1.398-2.146 1.273-2.494-.12-.332-.859-.244-.859-.244l-2.45.015s-.181-.025-.316.056c-.132.079-.217.263-.217.263s-.39 1.037-.91 1.92c-1.096 1.857-1.534 1.957-1.713 1.84-.418-.27-.313-1.085-.313-1.663 0-1.808.274-2.562-.533-2.758-.268-.065-.464-.108-1.148-.115-.876-.01-1.618.003-2.037.209-.28.14-.495.45-.363.468.162.022.53.099.724.362.252.344.243 1.116.243 1.116s.144 2.13-.337 2.394c-.33.182-.783-.19-1.754-1.893-.497-.86-.873-1.81-.873-1.81s-.073-.178-.203-.274c-.158-.117-.378-.154-.378-.154l-2.33.015s-.35.01-.478.162c-.115.138-.009.425-.009.425s1.833 4.292 3.91 6.458c1.903 1.986 4.064 1.85 4.064 1.85h.978z" />
                </svg>
              ),
            },
            {
              name: 'RuTube',
              href: '#',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.999c-.146.739-.602.919-1.221.572l-3.381-2.489-1.632 1.571c-.181.18-.332.332-.68.332l.241-3.43L15.1 10.2c.256-.22-.056-.341-.397-.121L8.15 13.795l-2.95-.921c-.642-.203-.657-.642.134-.949l11.539-4.453c.534-.196.999.131.831.949z" />
                </svg>
              ),
            },
            {
              name: 'CloudTips',
              href: 'https://pay.cloudtips.ru/p/8d20df85',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ),
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(186, 105, 161, 0.3)';
                e.currentTarget.style.color = '#F7CDC7';
                e.currentTarget.style.borderColor = 'rgba(186, 105, 161, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '8px',
            }}
          >
            Telegram:{' '}
            <a
              href="https://t.me/SmolovaIra"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5B0BD', textDecoration: 'none' }}
            >
              @SmolovaIra
            </a>
            {' / '}
            <a
              href="https://t.me/Salvi_5626"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5B0BD', textDecoration: 'none' }}
            >
              @Salvi_5626
            </a>
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Канал:{' '}
            <a
              href="https://t.me/smolovatime"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#BA69A1', textDecoration: 'none' }}
            >
              @smolovatime
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            © 2024 Смолова Ирина. Все права защищены. Энерготерапия — не заменяет медицинскую помощь.
          </p>
        </div>
      </div>
    </footer>
  );
}
