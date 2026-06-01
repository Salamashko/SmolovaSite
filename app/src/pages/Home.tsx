import RadianceField from '../sections/RadianceField';
import Hero from '../sections/Hero';
import Invitation from '../sections/Invitation';
import Transformation from '../sections/Transformation';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';
import { useLenis } from '../hooks/useLenis';

export default function Home() {
  useLenis();

  return (
    <>
      <RadianceField />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        {/* Transition overlay from hero to content */}
        <div
          style={{
            height: '200px',
            background: 'linear-gradient(180deg, transparent 0%, #C2185B 100%)',
            position: 'relative',
            zIndex: 5,
            marginTop: '-200px',
            pointerEvents: 'none',
          }}
        />
        <Invitation />
        <Transformation />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
