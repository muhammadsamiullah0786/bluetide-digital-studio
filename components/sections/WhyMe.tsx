'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function WhyMe() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Why Choose Me"
            title={siteData.whyMe.title}
            description={siteData.whyMe.description}
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.whyMe.items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.07}>
              <div className="shine group relative h-full transform-gpu rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50/50 p-7 transition-all duration-400 will-change-transform hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft-lg">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/10 to-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-cyan/10 text-accent transition-all duration-400 group-hover:from-accent group-hover:to-cyan group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                    <Icon name={item.icon} size={24} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
