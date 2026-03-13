'use client';

import Image from 'next/image';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SocialIcons from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const roles = ['Frontend Developer', 'App Developer', 'UI/UX Designer', 'Freelancer'];
  const { text: currentRole, showCursor } = useTypewriter({
    words: roles,
    typingSpeed: 120,
    deletingSpeed: 60,
    delayBetweenWords: 2000,
  });

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Muhammad Sami Ullah"
          fill
          className="object-cover animate-zoom"
          style={{ objectPosition: 'center 20%' }}
          priority
          quality={90}
        />
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/15" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-28 pb-20 sm:py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/25 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-400/40 mb-6 animate-fadeIn shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg" />
            <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">{siteData.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp drop-shadow-lg">
            BlueTide Digital Studio
          </h1>

          {/* Sub Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp drop-shadow-lg" style={{ animationDelay: '0.15s' }}>
            Hi, I'm Muhammad Sami Ullah
          </h2>

          {/* Animated Role Text */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] leading-tight animate-fadeInUp drop-shadow-md" style={{ animationDelay: '0.3s' }}>
            <span className="text-white">I'm a </span>
            <span className="text-accent font-bold">{currentRole}</span>
            <span className={`text-accent ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </div>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mb-10 animate-fadeInUp drop-shadow-md" style={{ animationDelay: '0.45s' }}>
            {siteData.hero.valueProposition}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a href="#portfolio">
              <Button size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105">
                <span>Explore My Work</span>
                <Icon name="arrowRight" size={20} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-dark shadow-xl hover:scale-105">
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.75s' }}>
            <p className="text-sm font-bold text-white mb-4 drop-shadow-md">Follow Me</p>
            <SocialIcons socials={siteData.socials} variant="dark" />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Icon name="chevronDown" size={28} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
}
