'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />

      <Container className="relative">
        <FadeUp>
          <SectionHeader
            label="How I Work"
            title="A Clear, Calm Process"
            description="Six grounded steps that turn any idea, business need or product concept into a finished, deployed solution."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.process.map((step, index) => (
            <FadeUp key={step.id} delay={index * 0.06}>
              <div className="shine group relative h-full transform-gpu rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-400 will-change-transform hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-soft-lg">
                {/* Background number watermark */}
                <span className="pointer-events-none absolute right-4 top-2 text-[80px] font-black leading-none tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-cyan/10">
                  {String(step.id).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-cyan text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                      <Icon name={step.icon} size={22} />
                    </div>
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Step {step.id}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold tracking-tight text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {step.description}
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
