'use client';
import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Expertise() {
  const stack = siteData.techStack;

  return (
    <section
      id="stack"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />

      <Container className="relative">
        <FadeUp>
          <SectionHeader
            label={stack.label}
            title={stack.title}
            description={stack.description}
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.categories.map((category, index) => (
            <FadeUp key={category.title} delay={index * 0.06}>
              <div className="shine group relative h-full transform-gpu rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-400 will-change-transform hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-soft-lg">
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-5 flex items-start justify-between">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 via-accent/5 to-cyan/10 text-accent transition-all duration-400 group-hover:from-accent group-hover:to-cyan group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                    <Icon name={category.icon} size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 transition-colors group-hover:text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold tracking-tight text-navy">
                  {category.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors group-hover:border-cyan/20 group-hover:bg-cyan/5 group-hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
