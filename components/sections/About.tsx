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
    <section id="about" className="relative bg-white py-24 md:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-cyan/10 via-accent/5 to-transparent blur-3xl" />

      <Container className="relative">
        <FadeUp>
          <SectionHeader
            label="About"
            title="About Me"
            description="A complete developer focused on modern websites, web apps, mobile interfaces and digital products."
          />
        </FadeUp>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left: Slim profile card */}
          <SlideInLeft>
            <div className="relative">
              {/* Decorative subtle glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/10 via-cyan/5 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft-lg">
                {/* Top accent strip */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-cyan to-accent" />

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-cyan/15">
                    <Image
                      src="/Confident professional portrait.png"
                      alt="Muhammad Sami Ullah profile portrait"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-navy">
                    {siteData.profile.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {siteData.profile.shortRole}
                  </p>

                  {/* Availability dot */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Available for Work
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  {siteData.about.info.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
                    >
                      <div className="mb-1 flex items-center gap-1.5">
                        <Icon name={item.icon} size={12} className="text-accent" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-[12px] font-bold leading-tight text-navy">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center">
                  <SocialIcons
                    socials={siteData.socials}
                    size="sm"
                    variant="light"
                    className="justify-center"
                  />
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right: About Content */}
          <SlideInRight>
            <div>
              <h3 className="mb-7 text-[1.875rem] font-extrabold leading-tight tracking-tight text-navy md:text-[2.5rem]">
                {siteData.about.headline}
              </h3>

              <p className="mb-5 text-lg leading-[1.75] text-slate-600">
                {siteData.about.description}
              </p>
              <p className="mb-9 text-base leading-[1.75] text-slate-500">
                {siteData.about.descriptionSecond}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {siteData.about.info.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-soft-md"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-cyan/10 text-accent transition-all group-hover:from-accent group-hover:to-cyan group-hover:text-white">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-navy">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                {siteData.profile.cvAvailable && (
                  <a href={siteData.profile.cv} download>
                    <Button>
                      <Icon name="download" size={16} />
                      Download CV
                    </Button>
                  </a>
                )}
                <a href="#contact">
                  <Button variant="outline">
                    Contact Me
                    <Icon name="arrowRight" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
