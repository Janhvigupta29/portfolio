import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import HowIWork from '@/components/HowIWork';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BeyondCode from '@/components/BeyondCode';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <HowIWork />
        <About />
        <Skills />
        <BeyondCode />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
