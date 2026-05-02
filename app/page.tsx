'use client';

import { useState, useEffect } from 'react';
import { ToastProvider } from '@/components/ui/Toast';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import TechMarquee from '@/components/sections/TechMarquee';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import WhatICanBuild from '@/components/sections/WhatICanBuild';
import Services from '@/components/sections/Services';
import Resume from '@/components/sections/Resume';
import WhyMe from '@/components/sections/WhyMe';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      <ScrollProgress />
      <main className="bg-white">
        <Header isScrolled={isScrolled} />
        <Hero />
        <TechMarquee />
        <About />
        <Expertise />
        <WhatICanBuild />
        <Services />
        <Resume />
        <WhyMe />
        <Process />
        <CTA />
        <Portfolio />
        <Contact />
        <Footer />

        {/* Floating Buttons */}
        <WhatsAppButton />
        <BackToTop />
      </main>
    </ToastProvider>
  );
}
