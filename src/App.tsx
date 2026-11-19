
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { PageLoader } from './components/layout/PageLoader';

import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { About } from './sections/About';
import { MetricsBanner } from './sections/MetricsBanner';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { CtaBanner } from './sections/CtaBanner';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-[#9d9d9d] text-[#141414] selection:bg-[#2BE88E] selection:text-[#141414] overflow-x-hidden">

      <div
        aria-hidden="true"
        className="bg-cf-dots pointer-events-none fixed inset-0 z-0"
      />

      <div className="relative z-10">
       
<Navbar />
<div className="h-20" />

<motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={
    showContent
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 18 }
  }
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{
    pointerEvents: showContent ? 'auto' : 'none',
  }}
>
  <main>
    <Hero startTyping={showContent} />
    <Services />
    <Portfolio />
    <About />
    <MetricsBanner />
    <Process />
    <Pricing />
    <CtaBanner />
  </main>

  <Footer />
</motion.div>

      </div>

      <AnimatePresence
  onExitComplete={() => setShowContent(true)}
>
  {isLoading && <PageLoader />}
</AnimatePresence>
    </div>
  );
}
