'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

export default function TechStack() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {siteData.techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="relative w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-accent group-hover:shadow-soft transition-all duration-300">
                <Icon
                  name={tech.icon}
                  size={32}
                  className="text-gray-700 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <p className="text-sm font-semibold text-gray-600 text-center transition-opacity duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
