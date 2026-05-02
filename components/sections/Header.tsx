'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 shadow-soft backdrop-blur-xl border-b border-slate-200/70'
          : 'bg-midnight/30 backdrop-blur-md'
      }`}
    >
      <Container className="flex items-center justify-between py-3 md:py-4">
        {/* Logo + Name */}
        <Link
          href="#home"
          className="logo-hover group flex min-w-0 flex-shrink-0 items-center gap-3"
          aria-label="Muhammad Sami Ullah home"
        >
          <Logo size="md" variant={isScrolled ? 'light' : 'dark'} />
          <div className="hidden min-w-0 sm:block">
            <p className={`truncate text-sm font-bold leading-tight tracking-tight transition-colors ${isScrolled ? 'text-navy group-hover:text-accent' : 'text-white group-hover:text-cyan'}`}>
              {siteData.brand.name}
            </p>
            <p className={`truncate text-[11px] font-semibold uppercase leading-tight tracking-[0.18em] ${isScrolled ? 'text-accent' : 'text-cyan'}`}>
              Full Stack Developer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteData.navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`nav-link relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                isScrolled
                  ? 'text-slate-700 hover:text-accent'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#contact" className="hidden sm:inline-flex">
            <Button size="sm" className="px-5">
              Hire Me
              <Icon name="arrowRight" size={16} />
            </Button>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              isScrolled
                ? 'text-navy hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/70 bg-white shadow-soft-lg">
          <Container className="py-5">
            <div className="flex flex-col">
              {siteData.navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-slate-100 py-3.5 text-base font-semibold text-navy transition-colors last:border-0 hover:text-accent"
                >
                  <span>{item.label}</span>
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-5 block">
              <Button className="w-full justify-center">
                Hire Me
                <Icon name="arrowRight" size={16} />
              </Button>
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
