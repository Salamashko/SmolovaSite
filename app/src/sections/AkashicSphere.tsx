import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AkashicSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.PointsMaterial({
      color: 0xba69a1,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(geometry, material);
    const group = new THREE.Group();
    group.add(points);
    scene.add(group);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        mouseX = ((event.clientX - rect.left) / rect.width) * 10 - 5;
        mouseY = ((event.clientY - rect.top) / rect.height) * 10 - 5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    let raf: number;

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.005;
      group.rotation.y = time;
      group.rotation.x = Math.sin(time * 0.5) * 0.1;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    />
  );
}
