/**
 * Тонкая сакральная геометрия: концентрические орбиты золотой линией
 * (design_V2, Ref 1/5/9). Вращение — едва заметное, чисто CSS.
 */
export default function OrbitalRings({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
    >
      <g className="orbital-ring" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <circle cx="300" cy="300" r="210" stroke="#B8923A" strokeWidth="0.7" opacity="0.35" />
        <ellipse
          cx="300" cy="300" rx="260" ry="90"
          transform="rotate(-28 300 300)"
          stroke="#B8923A" strokeWidth="0.6" opacity="0.28"
        />
      </g>
      <g className="orbital-ring--reverse" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <circle cx="300" cy="300" r="145" stroke="#3ECFB2" strokeWidth="0.6" opacity="0.22" />
        <ellipse
          cx="300" cy="300" rx="230" ry="70"
          transform="rotate(34 300 300)"
          stroke="#6C8FE6" strokeWidth="0.6" opacity="0.2"
        />
      </g>
      <circle cx="300" cy="300" r="3" fill="#D4924A" opacity="0.7" />
    </svg>
  );
}
