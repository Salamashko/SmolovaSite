import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Navigator from '../sections/Navigator';
import Pains from '../sections/Pains';
import Process from '../sections/Process';
import Products from '../sections/Products';
import WomenCircle from '../sections/WomenCircle';
import Testimonials from '../sections/Testimonials';
import Expert from '../sections/Expert';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';
import StickyCTA from '../sections/StickyCTA';
import { useLenis } from '../hooks/useLenis';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useLenis();
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Navigator />
        <Pains />
        <Process />
        <Products />
        <WomenCircle />
        <Testimonials />
        <Expert />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
