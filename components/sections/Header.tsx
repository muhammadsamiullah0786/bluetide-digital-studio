'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileNavIcons: Record<string, string> = {
    About: 'user',
    Resume: 'book',
    Services: 'layout',
    Portfolio: 'eye',
    Contact: 'mail',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-soft'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <div className={`flex items-center justify-center px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all ${
            isScrolled
              ? 'bg-white'
              : 'bg-white/95'
          }`}>
            <Image
              src="/logo.png"
              alt="BlueTide Digital Studio"
              width={160}
              height={50}
              priority
              unoptimized
              className="h-9 sm:h-10 md:h-16 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                isScrolled
                  ? 'text-dark hover:text-accent'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#contact">
            <Button size="sm" className="hidden sm:inline-flex">
              Contact Me
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'hover:bg-gray-100'
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} className={isScrolled ? 'text-dark' : 'text-white'} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur-xl shadow-soft-lg">
          <Container className="py-4">
            <div className="mb-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 px-4 py-4 text-white shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-200/90">Navigation</p>
              <p className="mt-1 text-sm text-white/75">Jump quickly to the section you want on mobile.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
            {siteData.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(37,99,235,0.16)] ${
                  siteData.navigation.length % 2 === 1 && index === siteData.navigation.length - 1
                    ? 'col-span-2'
                    : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent/20">
                      <Icon name={mobileNavIcons[item.label] || 'arrowRight'} size={18} />
                    </span>
                    <div>
                      <span className="block text-base font-semibold text-slate-900 group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                        Section
                      </span>
                    </div>
                  </div>
                  <Icon name="arrowRight" size={16} className="mt-1 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </div>
              </a>
            ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
