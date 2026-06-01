import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HelixRevealProps {
  text: string;
}

export default function HelixReveal({ text }: HelixRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const paragraph = textRef.current;
    if (!section || !paragraph) return;

    // Split text into lines manually by wrapping words
    const words = paragraph.textContent?.split(' ') || [];
    paragraph.innerHTML = '';
    const lines: HTMLSpanElement[] = [];
    let currentLine: HTMLSpanElement | null = null;

    words.forEach((word, i) => {
      if (!currentLine || i % 5 === 0) {
        currentLine = document.createElement('span');
        currentLine.style.display = 'block';
        currentLine.style.overflow = 'hidden';
        paragraph.appendChild(currentLine);
        lines.push(currentLine);
      }
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word + ' ';
      wordSpan.style.display = 'inline-block';
      currentLine.appendChild(wordSpan);
    });

    gsap.set(paragraph, { perspective: 400 });
    gsap.set(lines, { transformOrigin: 'center center' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    tl.from(lines, {
      rotationY: -45,
      rotationZ: 15,
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, [text]);

  return (
    <div ref={sectionRef} className="helix-section">
      <p
        ref={textRef}
        className="helix-text"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(24px, 3vw, 36px)',
          lineHeight: 1.4,
          color: '#C2185B',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {text}
      </p>
    </div>
  );
}
