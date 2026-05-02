'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SocialIcons from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30, letterSpacing: '0em' },
  show: {
    opacity: 1,
    y: 0,
    letterSpacing: '-0.04em',
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0A0820 0%, #0F0B25 45%, #14102B 100%)',
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Drifting glow accents */}
      <div className="glow-blue animate-drift-1 h-[520px] w-[520px] -left-32 top-12 opacity-60" />
      <div className="glow-cyan animate-drift-2 h-[460px] w-[460px] -right-32 bottom-0 opacity-50" />

      {/* Floating decorative dots */}
      <span className="pointer-events-none absolute left-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-cyan/60 shadow-[0_0_20px_4px_rgba(192,132,252,0.5)] animate-float-y" />
      <span className="pointer-events-none absolute left-[14%] bottom-[28%] h-1 w-1 rounded-full bg-accent/70 shadow-[0_0_16px_4px_rgba(124,58,237,0.55)] animate-float-y-slow" />
      <span className="pointer-events-none absolute right-[42%] top-[38%] h-1 w-1 rounded-full bg-white/60 animate-float-y-slow" />

      {/* Hero portrait (subtle, right side, desktop only) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
        <Image
          src="/hero-image.png"
          alt=""
          fill
          className="object-cover object-right opacity-20 mix-blend-luminosity"
          style={{ objectPosition: 'right 20%' }}
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-midnight to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-24 sm:pt-36 sm:pb-32 md:py-40 lg:py-44">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-cyan/25 bg-white/[0.04] px-4 py-2 shadow-[0_8px_30px_rgba(192,132,252,0.15)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan animate-soft-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan/90 sm:text-xs">
              {siteData.hero.eyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={headingVariants}
            className="mb-7 text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem]"
          >
            Hi, I'm
            <br className="hidden sm:block" />{' '}
            <span className="inline-block bg-gradient-to-r from-white via-cyan via-30% to-accent bg-clip-text text-transparent animate-text-shimmer">
              Muhammad Sami Ullah
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg font-semibold tracking-tight text-cyan sm:text-xl md:text-2xl"
          >
            Full Stack Developer
            <span className="mx-2.5 text-cyan/40">&amp;</span>
            Digital Product Builder
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-[1.7]"
          >
            {siteData.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <a href="#projects" className="sm:inline-flex">
              <Button size="lg" className="btn-shine w-full sm:w-auto">
                <span>View Work</span>
                <Icon name="arrowRight" size={18} />
              </Button>
            </a>
            <a href="#contact" className="sm:inline-flex">
              <Button
                variant="secondary"
                size="lg"
                className="btn-shine w-full border-cyan/30 bg-white/[0.04] text-white backdrop-blur hover:border-cyan hover:bg-white hover:text-navy sm:w-auto"
              >
                <Icon name="zap" size={18} />
                Hire Me
              </Button>
            </a>
            {siteData.profile.cvAvailable && (
              <a href={siteData.profile.cv} download className="sm:inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-shine w-full border-white/15 bg-transparent text-white hover:border-cyan hover:bg-cyan/10 hover:text-cyan sm:w-auto"
                >
                  <Icon name="download" size={18} />
                  Download CV
                </Button>
              </a>
            )}
          </motion.div>

          {/* Trust badges (3 only) */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            {siteData.hero.trust.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-cyan/5 hover:text-white sm:text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Follow</p>
            <div className="h-px w-10 bg-gradient-to-r from-cyan/40 to-transparent" />
            <SocialIcons socials={siteData.socials} variant="dark" size="sm" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cyan/30 p-1">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
