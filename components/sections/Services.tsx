'use client';
import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Services() {
  const data = siteData.services;

  return (
    <section
      id="services"
      className="relative bg-slate-50 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />

      <Container className="relative">
        <FadeUp>
          <SectionHeader
            label={data.label}
            title={data.title}
            description={data.description}
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {data.items.map((service, index) => (
            <FadeUp key={service.id} delay={index * 0.06}>
              <div className="shine group relative flex h-full transform-gpu rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-400 will-change-transform hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft-lg sm:p-7">
                {/* Left accent bar */}
                <div className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-gradient-to-b from-accent to-cyan transition-transform duration-500 group-hover:scale-y-100" />

                <div className="flex w-full items-start gap-5">
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-cyan/10 text-accent transition-all duration-400 group-hover:from-accent group-hover:to-cyan group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                    <Icon name={service.icon} size={24} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-bold tracking-tight text-navy transition-colors group-hover:text-accent">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300">
                        {String(service.id).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
