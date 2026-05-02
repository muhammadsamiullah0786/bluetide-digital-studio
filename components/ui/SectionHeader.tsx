'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

const eyebrowVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] } },
};

const descVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  show: { width: 64, opacity: 1, transition: { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  variant = 'light',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-navy';
  const descColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const eyebrowClass = variant === 'dark' ? 'section-eyebrow section-eyebrow-dark' : 'section-eyebrow';

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-14 flex flex-col ${alignment} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}
    >
      <motion.span variants={eyebrowVariants} className={eyebrowClass}>
        {label}
      </motion.span>

      <motion.h2
        variants={titleVariants}
        className={`text-[2rem] sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] ${titleColor}`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={dividerVariants}
        className={`h-1 rounded-full bg-gradient-to-r from-accent to-cyan ${
          align === 'center' ? 'mx-auto mt-5' : 'mt-5'
        }`}
        style={{ width: 64 }}
      />

      {description && (
        <motion.p
          variants={descVariants}
          className={`mt-6 text-base sm:text-lg leading-relaxed ${descColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
