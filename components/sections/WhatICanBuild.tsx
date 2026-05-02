'use client';
import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function WhatICanBuild() {
  const data = siteData.whatICanBuild;

  return (
    <section id="build" className="bg-white py-24 md:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label={data.label}
            title={data.title}
            description={data.description}
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.06}>
              <div className="shine group relative flex h-full transform-gpu flex-col rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/40 p-7 transition-all duration-400 will-change-transform hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-soft-lg">
                {/* Hover background */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-cyan/10 to-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  {/* Number + Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>

                  {/* Outcomes / what you get */}
                  <ul className="mt-auto space-y-2 border-t border-slate-100 pt-5">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Icon name="check" size={10} />
                        </span>
                        <span className="font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA strip */}
        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 text-center sm:flex-row sm:gap-5 sm:text-left">
            <p className="text-sm font-semibold text-slate-600 sm:text-base">
              Not sure which fits your idea?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)] transition-all hover:-translate-y-0.5"
            >
              Let's discuss your project
              <Icon name="arrowRight" size={16} />
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
