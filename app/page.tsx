'use client';

import { useState, useEffect } from 'react';
import { ToastProvider } from '@/components/ui/Toast';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Resume from '@/components/sections/Resume';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
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
      <main className="bg-cream">
        <Header isScrolled={isScrolled} />
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Resume />
        <Services />
        <Testimonials />
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
