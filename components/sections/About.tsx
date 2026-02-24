'use client';

import Image from 'next/image';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SocialIcons from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp, SlideInLeft, SlideInRight } from '@/components/ui/AnimateOnScroll';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <FadeUp>
          <SectionHeader label="ABOUT ME" title="Who Am I?" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Profile Card */}
          <SlideInLeft>
            <div className="space-y-8">
            {/* Avatar Card */}
            <div className="bg-gradient-to-b from-blue-50 to-transparent rounded-2xl p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-soft-lg">
                <Image
                  src="/Confident professional portrait.png"
                  alt="Profile Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-1">
                {siteData.about.info[0].value}
              </h3>
              <p className="text-accent font-semibold mb-4">Product / UI / Frontend</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
                {siteData.about.stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="space-y-3 py-6">
                <a href="/Muhammad-Sami-Ullah-CV.pdf" download className="block">
                  <Button size="md" className="w-full justify-center">
                    {siteData.about.cta1}
                  </Button>
                </a>
                <a href="#contact" className="block">
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    {siteData.about.cta2}
                  </Button>
                </a>
              </div>

              {/* Social Icons */}
              <div className="pt-4 border-t border-gray-200">
                <SocialIcons socials={siteData.socials} size="md" className="justify-center" />
              </div>
            </div>
          </div>
          </SlideInLeft>

          {/* Right: About Content */}
          <SlideInRight>
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">
                {siteData.about.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {siteData.about.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {siteData.about.info.map((item, index) => (
                  <div key={index} className="bg-cream rounded-lg p-4 hover:shadow-soft transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name={item.icon} size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm font-semibold text-gray-600">{item.label}</span>
                    </div>
                    <p className="text-dark font-semibold text-sm ml-7">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
