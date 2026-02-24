'use client';
import { siteData } from '@/data/site';
import ServiceCard from '@/components/ui/ServiceCard';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <Container>
        <FadeUp>
          <SectionHeader label="SERVICES" title="What I Offer" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => (
            <FadeUp key={service.id} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
