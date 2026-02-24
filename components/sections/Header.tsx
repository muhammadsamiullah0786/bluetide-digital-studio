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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-soft'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <div className={`flex items-center justify-center px-4 py-2 rounded-xl transition-all ${
            isScrolled
              ? 'bg-white'
              : 'bg-white/95'
          }`}>
            <Image
              src="/logo.png"
              alt="BlueTide Digital Studio"
              width={220}
              height={68}
              priority
              unoptimized
              className="h-12 md:h-16 w-auto"
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
        <div className="flex items-center gap-4">
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <Container className="flex flex-col py-4 gap-2">
            {siteData.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-dark hover:bg-blue-50 hover:text-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
