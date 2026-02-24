'use client';

import { useState, useMemo } from 'react';
import { siteData } from '@/data/site';
import PortfolioCard from '@/components/ui/PortfolioCard';
import CaseStudy from '@/components/ui/CaseStudy';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof siteData.portfolio.items)[0] | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return siteData.portfolio.items;
    return siteData.portfolio.items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <Container>
        <FadeUp>
          <SectionHeader label="PORTFOLIO" title="Featured Projects" />
        </FadeUp>

        {/* Filter Tabs */}
        <FadeUp delay={0.2}>
          <div className="mb-12 flex flex-wrap gap-3">
            {siteData.portfolio.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-accent text-white shadow-soft'
                    : 'bg-white text-dark hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.1}>
              <PortfolioCard
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                onViewClick={() => setSelectedProject(project)}
              />
            </FadeUp>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Container>

      {/* Case Study Modal */}
      {selectedProject && selectedProject.caseStudy && (
        <CaseStudy
          data={{
            title: selectedProject.title,
            image: selectedProject.image,
            tags: selectedProject.tags,
            ...selectedProject.caseStudy,
            links: selectedProject.links,
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
