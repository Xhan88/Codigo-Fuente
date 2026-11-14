
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { About } from './sections/About';
import { MetricsBanner } from './sections/MetricsBanner';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { CtaBanner } from './sections/CtaBanner';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-[#9d9d9d] text-[#141414] selection:bg-[#2BE88E] selection:text-[#141414] overflow-x-hidden">

      {/* Fondo técnico de puntitos */}
      <div
        aria-hidden="true"
        className="bg-cf-dots pointer-events-none fixed inset-0 z-0"
      />

      {/* Contenido de la página */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <MetricsBanner />
          <Process />
          <Testimonials />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </div>
  );
}
