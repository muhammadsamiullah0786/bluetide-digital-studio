'use client';

import { useMemo, useState } from 'react';
import { siteData } from '@/data/site';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return siteData.portfolio.items;
    return siteData.portfolio.items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative bg-slate-50 py-24 md:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Featured Projects"
            title="Selected Work"
            description="A snapshot of websites, dashboards, landing pages and product UIs I've designed and developed."
          />
        </FadeUp>

        {/* Filter Tabs */}
        <FadeUp delay={0.15}>
          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {siteData.portfolio.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:text-[11px] ${
                  activeFilter === category
                    ? 'border-transparent bg-gradient-to-r from-accent to-cyan text-white shadow-[0_8px_20px_-6px_rgba(124,58,237,0.55)]'
                    : 'border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.08}>
              <PortfolioCard
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                alt={project.alt}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            </FadeUp>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="text-base text-slate-500">No projects in this category yet — more coming soon.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
