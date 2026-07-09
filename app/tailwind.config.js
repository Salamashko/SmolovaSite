/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        /* Тёмная сакральная ясность — основная тёмная тема */
        void: '#070709',
        night: '#0D0F14',
        slate: '#1C1F27',
        warm: '#E9DDD1',
        smoke: '#A7A1A6',
        electric: '#6C8FE6',
        gold: '#B8923A',
        amber: '#D4924A',
        teal: '#3ECFB2',
        mauve: '#7B6886',
        /* Светлая вторичная тема */
        pearl: '#F6F1ED',
        blush: '#E8DADF',
        plum: '#5A475B',
        'slate-blue': '#6678A5',
        stone: '#C5B3A7',
        ink: '#1C1F27',
        /* Исходная розово-лиловая палитра — точечные акценты на светлом */
        rose: '#F5B0BD',
        crocus: '#BA69A1',
        wine: '#9D446E',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 0 1px rgba(108, 143, 230, 0.35), 0 12px 40px rgba(108, 143, 230, 0.18)",
        'glow-rose': "0 16px 40px rgba(157, 68, 110, 0.18)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "orbit-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.18)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "orbit-slow": "orbit-spin 60s linear infinite",
        "orbit-slower": "orbit-spin 90s linear infinite reverse",
        breathe: "breathe 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
