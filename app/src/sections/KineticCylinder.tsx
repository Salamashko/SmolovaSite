import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CYLINDER_TEXTS = [
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
  'Проработка проявленности',
  'Родовые программы',
  'Освобождение тела',
  'Доступ к ясности',
];

export default function KineticCylinder() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;

    const texts = stage.querySelectorAll<HTMLDivElement>('.cylinder-text');
    const totalTexts = texts.length;

    texts.forEach((el, index) => {
      const angle = (360 / totalTexts) * index;
      el.style.transform = `translate(-50%, -50%) rotateX(${angle}deg) translateZ(var(--cylinder-radius))`;
    });

    const scrollTween = gsap.to(stage, {
      rotateX: -360,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          if (self.isActive) {
            stage.classList.remove('cylinder-auto-spin');
          }
        },
      },
    });

    animRef.current = scrollTween;

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="cylinder-wrapper cylinder-scroll">
      <div ref={stageRef} className="cylinder-stage cylinder-auto-spin">
        {CYLINDER_TEXTS.map((text, i) => (
          <div key={i} className="cylinder-text">
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
