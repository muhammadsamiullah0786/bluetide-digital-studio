'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-cream">
      <Container>
        <FadeUp>
          <SectionHeader label="PROCESS" title="How I Work" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.process.map((step, index) => (
            <FadeUp key={step.id} delay={index * 0.1}>
              <div className="relative">
              {/* Card */}
              <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-accent/30 hover:shadow-soft transition-all duration-300 group">
                {/* Step Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-blue-700 text-white font-bold text-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-white transition-all duration-300 mb-4">
                  <Icon name={step.icon} size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow Connector */}
              {index < siteData.process.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-accent/30">
                  <Icon name="arrowRight" size={32} />
                </div>
              )}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
