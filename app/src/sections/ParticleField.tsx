import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
}

/* Палитра поля: Gold Line, Particle Teal, Electric Blue */
const COLORS = ['184, 146, 58', '62, 207, 178', '108, 143, 230'];

/**
 * «Живое поле» — лёгкий 2D-канвас с медленным дрейфом световых частиц
 * (motion.md §1.1). Рисует только пока элемент во viewport и вкладка активна;
 * при prefers-reduced-motion остаётся один статичный кадр.
 */
export default function ParticleField({ density = 90 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = Math.round((isMobile ? density / 2.5 : density));
    const speed = isMobile ? 0.12 : 0.22;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function seed() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 0.8 + Math.random() * 1.7,
        alpha: 0.1 + Math.random() * 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) seed();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx!.fill();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();
    draw(); // первый кадр — виден и при reduced motion

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener('resize', onResize);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (canvas.getBoundingClientRect().bottom > 0) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
